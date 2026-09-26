/**
 * Read-only taxonomy audit for Location data.
 *
 * Reports, per taxonomy field, which production values are registered in
 * data/taxonomy (canonical or proposed), which resolve through a legacy
 * alias, and which are still unmapped.
 * Never writes to any file.
 *
 * Usage: npm run audit:taxonomy
 *        npm run audit:taxonomy -- --verbose   (list every unmapped value)
 */

import { allLocations } from "../data/all-locations"
import { experiences as experiencePages } from "../data/experiences"
import { EXPERIENCE_GROUP_CONFIG } from "../data/destinations/types"
import {
  LOCATION_CATEGORIES,
  LOCATION_EXPERIENCES,
  LOCATION_RECOGNITIONS,
  LOCATION_TYPES,
  tagStatus,
  isLocationCategory,
  isLocationExperience,
  isLocationTag,
  isLocationType,
  normalizeExperience,
  normalizeLegacyTag,
} from "../data/taxonomy"

const verbose = process.argv.includes("--verbose")

type Status = "registered" | "alias" | "unmapped"

function audit(
  field: string,
  values: string[],
  isRegistered: (v: string) => boolean,
  normalize: (v: string) => string | null
) {
  const counts = new Map<string, number>()
  for (const v of values) counts.set(v, (counts.get(v) ?? 0) + 1)

  const byStatus: Record<Status, [string, number, string | null][]> = {
    registered: [],
    alias: [],
    unmapped: [],
  }
  for (const [value, count] of counts) {
    const target = normalize(value)
    const status: Status = isRegistered(value) ? "registered" : target ? "alias" : "unmapped"
    byStatus[status].push([value, count, target])
  }

  const uses = (rows: [string, number, string | null][]) => rows.reduce((n, [, c]) => n + c, 0)
  console.log(`\n── ${field} ──`)
  console.log(`  unique values: ${counts.size}   total uses: ${values.length}`)
  for (const status of ["registered", "alias", "unmapped"] as Status[]) {
    const rows = byStatus[status].sort((a, b) => b[1] - a[1])
    console.log(`  ${status.padEnd(10)}: ${rows.length} values / ${uses(rows)} uses`)
    if (status === "alias") {
      for (const [v, c, t] of rows) console.log(`      ${v} (${c}) -> ${t}`)
    }
    if (status === "unmapped" && rows.length > 0) {
      const shown = verbose ? rows : rows.slice(0, 15)
      for (const [v, c] of shown) console.log(`      ${v} (${c})`)
      if (shown.length < rows.length) console.log(`      ... ${rows.length - shown.length} more (use --verbose)`)
    }
  }
}

const types = allLocations.flatMap((l) => (Array.isArray(l.type) ? l.type : [l.type]) as string[])
const categories = allLocations.flatMap((l) => l.categories ?? [])
const experiences = allLocations.flatMap((l) => l.experiences ?? [])
const tags = allLocations.flatMap((l) => l.tags ?? [])

console.log(`Taxonomy audit - ${allLocations.length} locations`)
audit("type", types, isLocationType, (v) => (isLocationType(v) ? v : null))
audit("categories", categories, isLocationCategory, (v) => (isLocationCategory(v) ? v : null))
audit("experiences", experiences, isLocationExperience, normalizeExperience)
audit("tags", tags, isLocationTag, normalizeLegacyTag)

// ── Registry status of the values in use (Phase 2 status model) ──
type Registry = Record<string, { status: string; replacedBy?: string }>
function statusReport(field: string, values: string[], registry: Registry, fallback = "unregistered") {
  const byStatus = new Map<string, number>()
  const deprecated = new Map<string, number>()
  for (const v of values) {
    const status = registry[v]?.status ?? fallback
    byStatus.set(status, (byStatus.get(status) ?? 0) + 1)
    if (status === "deprecated") deprecated.set(v, (deprecated.get(v) ?? 0) + 1)
  }
  console.log(`  ${field.padEnd(12)} ${[...byStatus].map(([s, n]) => `${s} ${n}`).join(" · ")}`)
  for (const [v, n] of deprecated) console.log(`      deprecated in use: ${v} (${n}) -> ${registry[v].replacedBy ?? "no replacement"}`)
}
console.log("\n── status of values in use ──")
statusReport("type", types, LOCATION_TYPES as Registry)
statusReport("categories", categories, LOCATION_CATEGORIES as Registry)
statusReport("experiences", experiences, LOCATION_EXPERIENCES as Registry)
const tagStatusCounts = new Map<string, number>()
for (const t of tags) tagStatusCounts.set(tagStatus(t), (tagStatusCounts.get(tagStatus(t)) ?? 0) + 1)
console.log(`  ${"tags".padEnd(12)} ${[...tagStatusCounts].map(([s, n]) => `${s} ${n}`).join(" · ")}`)

// ── Consistency checks (fail loudly, never write) ──
const problems: string[] = []
const pageBacked = Object.entries(LOCATION_EXPERIENCES).filter(([, m]) => "page" in m)
for (const [value, meta] of pageBacked) {
  const page = experiencePages.find((e) => e.value === value)
  if (!page) problems.push(`experience ${value} has page "${(meta as { page: string }).page}" but no entry in data/experiences.ts`)
  else if (page.slug !== (meta as { page: string }).page) problems.push(`experience ${value}: registry page "${(meta as { page: string }).page}" != slug "${page.slug}"`)
}
if (pageBacked.length !== experiencePages.length) problems.push(`page-backed experiences: registry ${pageBacked.length} vs data/experiences.ts ${experiencePages.length}`)
// EXPERIENCE_GROUP_CONFIG (destination "What to do") must only list canonical
// experiences, and must list every canonical one exactly once.
const groupCount = new Map<string, number>()
for (const [group, config] of Object.entries(EXPERIENCE_GROUP_CONFIG)) {
  for (const exp of config.experiences) {
    groupCount.set(exp, (groupCount.get(exp) ?? 0) + 1)
    const meta = (LOCATION_EXPERIENCES as Registry)[exp]
    if (!meta) problems.push(`EXPERIENCE_GROUP_CONFIG.${group}: "${exp}" is not a registered experience`)
    else if (meta.status !== "canonical") problems.push(`EXPERIENCE_GROUP_CONFIG.${group}: "${exp}" is ${meta.status}, not canonical`)
  }
}
for (const [exp, meta] of Object.entries(LOCATION_EXPERIENCES)) {
  const n = groupCount.get(exp) ?? 0
  if (meta.status === "canonical" && n === 0) problems.push(`EXPERIENCE_GROUP_CONFIG: canonical experience "${exp}" is in no group`)
  if (n > 1) problems.push(`EXPERIENCE_GROUP_CONFIG: "${exp}" is in ${n} groups`)
}
const slugs = new Set(allLocations.map((l) => l.slug))
for (const slug of Object.keys(LOCATION_RECOGNITIONS)) if (!slugs.has(slug)) problems.push(`recognitions.ts: unknown location slug "${slug}"`)

console.log("\n── consistency ──")
console.log(`  recognition records: ${Object.values(LOCATION_RECOGNITIONS).flat().length} on ${Object.keys(LOCATION_RECOGNITIONS).length} locations`)
if (problems.length === 0) console.log("  OK")
else {
  for (const p of problems) console.log(`  PROBLEM: ${p}`)
  process.exitCode = 1
}
