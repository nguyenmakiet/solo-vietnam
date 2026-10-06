/**
 * Read-only link audit. Exits non-zero on any error, so it runs as part of
 * `npm run build` (the deploy check) and can run on its own.
 *
 * 1. Location data (every file in data/all-locations.ts):
 *    - markdown links are allowed only in RichTextString fields (data/location.ts);
 *      a link in any other field would render as raw text -> error
 *    - a link target must be an internal path (/...) or http(s) URL, the only
 *      forms RichText renders (lib/rich-text.ts) -> error otherwise
 * 2. Every internal link in the repo - location data, content/blog/*.mdx,
 *    data/ (provinces, destinations) and app/ + components/ href literals:
 *    /locations/[slug], /destinations/[slug], /provinces/[slug], /blog/[slug]
 *    and /experiences/[slug] must name an existing page -> error otherwise.
 *
 * Writes nothing. Usage: npm run audit:links
 */

import fs from "node:fs"
import path from "node:path"
import { allLocations } from "../data/all-locations"
import { destinations } from "../data/destinations/index"
import { provinces } from "../data/provinces"
import { experiences } from "../data/experiences"

const ROOT = process.cwd()

// ── Valid route slugs ────────────────────────────────────────────────────────

const blogSlugs = fs
  .readdirSync(path.join(ROOT, "content/blog"))
  .filter((f) => f.endsWith(".mdx"))
  .map((f) => f.replace(/\.mdx$/, ""))

const ROUTES: Record<string, Set<string>> = {
  locations: new Set(allLocations.map((l) => l.slug)),
  destinations: new Set(destinations.map((d) => d.slug)),
  provinces: new Set(provinces.map((p) => p.slug)),
  blog: new Set(blogSlugs),
  experiences: new Set(experiences.map((e) => e.slug)),
}

/** Returns an error message for a broken internal path, or null when it resolves (or is not a checked route). */
function checkInternal(href: string): string | null {
  const clean = href.split(/[?#]/)[0].replace(/\/+$/, "")
  const [, section, slug, ...rest] = clean.split("/")
  const slugs = ROUTES[section]
  if (!slugs || slug === undefined) return null
  if (rest.length > 0) return `unknown route depth "${href}"`
  if (!slugs.has(slug)) return `no ${section} page for slug "${slug}"`
  return null
}

// ── Findings ─────────────────────────────────────────────────────────────────

type Finding = { source: string; where: string; message: string }
const errors: Finding[] = []
let linkCount = 0

// ── 1. Location data ─────────────────────────────────────────────────────────

// Field paths (array indices written as []) typed RichTextString in data/location.ts.
const RICH_FIELDS = new Set([
  "entranceFee",
  "openingHours",
  "bestSeasonNote",
  "bestTimeOfDay",
  "tips[]",
  "content.intro",
  "content.howToGetThere",
  "content.whatToExpect",
  "content.travelTips",
  "insights.visitorTips[]",
  "insights.faq[].answer",
])
// Rich block fields, keyed by block type (content.richSections[].blocks[]).
const RICH_BLOCK_FIELDS: Record<string, Set<string>> = {
  paragraph: new Set(["text"]),
  bullets: new Set(["items[]"]),
  table: new Set(["rows[][]"]),
  callout: new Set(["text"]),
}

const BLOCK_PREFIX = "content.richSections[].blocks[]."
const MD_LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g

function isRich(fieldPath: string, block: { type?: string } | undefined): boolean {
  if (RICH_FIELDS.has(fieldPath)) return true
  if (block && fieldPath.startsWith(BLOCK_PREFIX)) {
    return RICH_BLOCK_FIELDS[block.type ?? ""]?.has(fieldPath.slice(BLOCK_PREFIX.length)) ?? false
  }
  return false
}

function walk(
  value: unknown,
  fieldPath: string,
  displayPath: string,
  block: { type?: string } | undefined,
  visit: (text: string, fieldPath: string, displayPath: string, block: { type?: string } | undefined) => void
) {
  if (typeof value === "string") {
    visit(value, fieldPath, displayPath, block)
  } else if (Array.isArray(value)) {
    value.forEach((v, i) => walk(v, `${fieldPath}[]`, `${displayPath}[${i}]`, block, visit))
  } else if (value && typeof value === "object") {
    const isBlock = fieldPath === "content.richSections[].blocks[]"
    for (const [k, v] of Object.entries(value)) {
      const join = (p: string) => (p ? `${p}.${k}` : k)
      walk(v, join(fieldPath), join(displayPath), isBlock ? (value as { type?: string }) : block, visit)
    }
  }
}

for (const location of allLocations) {
  const source = `data/locations/${location.slug}.ts`
  walk(location, "", "", undefined, (text, fieldPath, displayPath, block) => {
    for (const m of text.matchAll(MD_LINK)) {
      linkCount++
      const href = m[2]
      const report = (message: string) => errors.push({ source, where: displayPath, message })
      if (!isRich(fieldPath, block)) {
        report(`link "${m[0]}" in a plain-text field - it renders as raw text (allowed fields: RichTextString in data/location.ts)`)
        continue
      }
      if (href.startsWith("/")) {
        const err = checkInternal(href)
        if (err) report(err)
      } else if (!/^https?:\/\//.test(href)) {
        report(`link target "${href}" must start with / (internal) or http(s):// (external)`)
      }
    }
  })
}

// ── 2. Internal links in the rest of the repo ───────────────────────────────

const RAW_LINK_PATTERNS = [
  /\]\((\/[^)\s]*)\)/g, // markdown: [label](/path)
  /href=\{?["'`](\/[^"'`]*)["'`]\}?/g, // JSX/HTML: href="/path"
]

function listFiles(dir: string, exts: string[]): string[] {
  const abs = path.join(ROOT, dir)
  if (!fs.existsSync(abs)) return []
  return fs.readdirSync(abs, { withFileTypes: true, recursive: true })
    .filter((e) => e.isFile() && exts.some((x) => e.name.endsWith(x)))
    .map((e) => path.relative(ROOT, path.join(e.parentPath, e.name)))
}

const rawFiles = [
  ...listFiles("content", [".mdx", ".md"]),
  // Location files are covered field by field above.
  ...listFiles("data", [".ts"]).filter((f) => !f.startsWith(path.join("data", "locations") + path.sep)),
  ...listFiles("app", [".ts", ".tsx"]),
  ...listFiles("components", [".ts", ".tsx"]),
]

for (const file of rawFiles) {
  const lines = fs.readFileSync(path.join(ROOT, file), "utf8").split("\n")
  lines.forEach((line, i) => {
    for (const pattern of RAW_LINK_PATTERNS) {
      for (const m of line.matchAll(pattern)) {
        const href = m[1]
        if (href.includes("${")) continue // template literal - built at runtime
        linkCount++
        const err = checkInternal(href)
        if (err) errors.push({ source: file, where: `line ${i + 1}`, message: err })
      }
    }
  })
}

// ── Report ───────────────────────────────────────────────────────────────────

console.log(`Link audit: ${linkCount} links checked (${allLocations.length} locations, ${rawFiles.length} other files)`)
if (errors.length === 0) {
  console.log("OK - no broken internal links, no links in plain-text fields")
} else {
  console.log(`\n${errors.length} error(s):`)
  for (const e of errors) console.log(`  ${e.source} (${e.where}): ${e.message}`)
  process.exit(1)
}
