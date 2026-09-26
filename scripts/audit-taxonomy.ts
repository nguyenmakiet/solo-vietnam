/**
 * Read-only taxonomy audit for Location data.
 *
 * Reports, per taxonomy field, which production values are registered in
 * data/taxonomy, which resolve through a legacy alias, and which are legacy
 * display labels. Then enforces the frozen taxonomy contract (see
 * data/taxonomy/AUDIT.md "Frozen contract") and exits non-zero on any violation.
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
  LOCATION_TAGS,
  LEGACY_EXPERIENCE_ALIASES,
  LEGACY_TAG_ALIAS_TABLE,
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
type Registry = Record<string, { status: string; replacedBy?: string; replacedByCategory?: string; noReplacement?: string }>
function statusReport(field: string, values: string[], registry: Registry, fallback = "unregistered") {
  const byStatus = new Map<string, number>()
  const deprecated = new Map<string, number>()
  for (const v of values) {
    const status = registry[v]?.status ?? fallback
    byStatus.set(status, (byStatus.get(status) ?? 0) + 1)
    if (status === "deprecated") deprecated.set(v, (deprecated.get(v) ?? 0) + 1)
  }
  console.log(`  ${field.padEnd(12)} ${[...byStatus].map(([s, n]) => `${s} ${n}`).join(" · ")}`)
  for (const [v, n] of deprecated) console.log(`      deprecated in use: ${v} (${n}) -> ${registry[v].replacedBy ?? (registry[v].replacedByCategory ? `category ${registry[v].replacedByCategory}` : "no replacement")}`)
}
console.log("\n── status of values in use ──")
statusReport("type", types, LOCATION_TYPES as Registry)
statusReport("categories", categories, LOCATION_CATEGORIES as Registry)
statusReport("experiences", experiences, LOCATION_EXPERIENCES as Registry)
const tagStatusCounts = new Map<string, number>()
for (const t of tags) tagStatusCounts.set(tagStatus(t), (tagStatusCounts.get(tagStatus(t)) ?? 0) + 1)
console.log(`  ${"tags".padEnd(12)} ${[...tagStatusCounts].map(([s, n]) => `${s} ${n}`).join(" · ")}`)

// ── Frozen contract checks (fail loudly, never write) ─────────────────────
// The taxonomy is frozen (see data/taxonomy/AUDIT.md "Frozen contract").
// Any violation below sets a non-zero exit code.
const problems: string[] = []

type Meta = { status: string; group?: string; replacedBy?: string; replacedByCategory?: string; noReplacement?: string; broader?: readonly string[]; page?: string }
type Reg = Record<string, Meta>
const REGISTRIES: Record<string, Reg> = {
  type: LOCATION_TYPES as Reg,
  categories: LOCATION_CATEGORIES as Reg,
  experiences: LOCATION_EXPERIENCES as Reg,
  tags: LOCATION_TAGS as Reg,
}

// Intentional non-canonical values at the freeze. A status change needs an owner
// decision; update this list together with AUDIT.md when that happens.
const FROZEN_NON_CANONICAL: Record<string, { proposed: string[]; deprecated: string[] }> = {
  type: { proposed: [], deprecated: ["attraction", "cultural", "heritage", "history", "landmark", "nature"] },
  categories: { proposed: [], deprecated: [] },
  experiences: { proposed: ["paragliding", "rock-climbing"], deprecated: ["temple-visit"] },
  tags: { proposed: [], deprecated: [] },
}

const isKeyLike = (v: string) => /^[a-z0-9]+(-[a-z0-9]+)*$/.test(v)

// 1. Location data: every value registered; no deprecated value in use.
//    Tags: a value that is not a registry key is a legacy display label
//    ("legacy-display") and is allowed; a key-like value that is not registered
//    (e.g. a misspelt canonical tag) is not.
for (const loc of allLocations) {
  const fields: Record<string, string[]> = {
    type: (Array.isArray(loc.type) ? loc.type : [loc.type]) as string[],
    categories: (loc.categories ?? []) as string[],
    experiences: loc.experiences ?? [],
    tags: loc.tags ?? [],
  }
  for (const [field, values] of Object.entries(fields)) {
    const reg = REGISTRIES[field]
    for (const v of values) {
      const meta = reg[v]
      if (!meta) {
        if (field !== "tags" || isKeyLike(v)) problems.push(`${loc.slug}: ${field} "${v}" is not registered`)
      } else if (meta.status === "deprecated") {
        problems.push(`${loc.slug}: ${field} "${v}" is deprecated${meta.replacedBy ? ` - use "${meta.replacedBy}"` : meta.replacedByCategory ? ` - use category "${meta.replacedByCategory}"` : ""}`)
      }
    }
    if (new Set(values).size !== values.length) problems.push(`${loc.slug}: duplicate value in ${field}`)
  }
}

// 2. Registry integrity.
for (const [field, reg] of Object.entries(REGISTRIES)) {
  const frozen = FROZEN_NON_CANONICAL[field]
  for (const status of ["proposed", "deprecated"] as const) {
    const actual = Object.entries(reg).filter(([, m]) => m.status === status).map(([k]) => k).sort()
    const expected = [...frozen[status]].sort()
    if (actual.join() !== expected.join())
      problems.push(`${field}: ${status} values [${actual}] differ from the frozen list [${expected}]`)
  }
  for (const [key, meta] of Object.entries(reg)) {
    if (!["canonical", "proposed", "deprecated"].includes(meta.status)) problems.push(`${field} "${key}": invalid registry status "${meta.status}"`)
    const replacements = [meta.replacedBy, meta.replacedByCategory, meta.noReplacement].filter((r) => r !== undefined)
    if (meta.status === "deprecated" && replacements.length === 0) problems.push(`${field} "${key}": deprecated without replacedBy`)
    if (replacements.length > 1) problems.push(`${field} "${key}": more than one of replacedBy / replacedByCategory / noReplacement set`)
    if (meta.replacedByCategory !== undefined) {
      if (field !== "type") problems.push(`${field} "${key}": replacedByCategory is for types only`)
      if (meta.status !== "deprecated") problems.push(`${field} "${key}": replacedByCategory set on a ${meta.status} value`)
      if (REGISTRIES.categories[meta.replacedByCategory]?.status !== "canonical") problems.push(`${field} "${key}": replacedByCategory "${meta.replacedByCategory}" is not a canonical category`)
    }
    if (meta.noReplacement !== undefined) {
      if (field !== "type" || meta.group !== "broad") problems.push(`${field} "${key}": noReplacement is for broad types only`)
      if (meta.status !== "deprecated") problems.push(`${field} "${key}": noReplacement set on a ${meta.status} value`)
      if (!meta.noReplacement.trim()) problems.push(`${field} "${key}": noReplacement needs a reason`)
    }
    if (meta.replacedBy) {
      if (meta.status !== "deprecated") problems.push(`${field} "${key}": replacedBy set on a ${meta.status} value`)
      if (reg[meta.replacedBy]?.status !== "canonical") problems.push(`${field} "${key}": replacedBy "${meta.replacedBy}" is not a canonical ${field} value`)
    }
    for (const b of meta.broader ?? []) {
      if (b === key) problems.push(`${field} "${key}": broader points to itself`)
      else if (reg[b]?.status !== "canonical") problems.push(`${field} "${key}": broader "${b}" is not a canonical ${field} value`)
      else if ((reg[b].broader ?? []).includes(key)) problems.push(`${field} "${key}": broader cycle with "${b}"`)
    }
    if (meta.page !== undefined && field !== "experiences") problems.push(`${field} "${key}": only experiences can have a page`)
    if (meta.page !== undefined && meta.status !== "canonical") problems.push(`experience "${key}": page-backed but ${meta.status}`)
  }
}

// 3. Public experience pages: registry `page` <-> data/experiences.ts.
const pageBacked = Object.entries(LOCATION_EXPERIENCES).filter(([, m]) => "page" in m)
for (const [value, meta] of pageBacked) {
  const page = experiencePages.find((e) => e.value === value)
  if (!page) problems.push(`experience ${value} has page "${(meta as { page: string }).page}" but no entry in data/experiences.ts`)
  else if (page.slug !== (meta as { page: string }).page) problems.push(`experience ${value}: registry page "${(meta as { page: string }).page}" != slug "${page.slug}"`)
}
if (pageBacked.length !== experiencePages.length) problems.push(`page-backed experiences: registry ${pageBacked.length} vs data/experiences.ts ${experiencePages.length}`)

// 4. EXPERIENCE_GROUP_CONFIG (destination "What to do"): canonical experiences
//    only, every canonical experience exactly once.
const groupCount = new Map<string, number>()
for (const [group, config] of Object.entries(EXPERIENCE_GROUP_CONFIG)) {
  for (const exp of config.experiences) {
    groupCount.set(exp, (groupCount.get(exp) ?? 0) + 1)
    const meta = REGISTRIES.experiences[exp]
    if (!meta) problems.push(`EXPERIENCE_GROUP_CONFIG.${group}: "${exp}" is not a registered experience`)
    else if (meta.status !== "canonical") problems.push(`EXPERIENCE_GROUP_CONFIG.${group}: "${exp}" is ${meta.status}, not canonical`)
  }
}
for (const [exp, meta] of Object.entries(REGISTRIES.experiences)) {
  const n = groupCount.get(exp) ?? 0
  if (meta.status === "canonical" && n === 0) problems.push(`EXPERIENCE_GROUP_CONFIG: canonical experience "${exp}" is in no group`)
  if (n > 1) problems.push(`EXPERIENCE_GROUP_CONFIG: "${exp}" is in ${n} groups`)
}

// 5. Aliases: keys are never registry keys; targets are canonical; tag alias
//    kinds are "equivalent" or "implies". Experience aliases are EQ only.
for (const [key, target] of Object.entries(LEGACY_EXPERIENCE_ALIASES)) {
  if (key in REGISTRIES.experiences) problems.push(`experience alias "${key}" shadows a registered experience`)
  if (REGISTRIES.experiences[target]?.status !== "canonical") problems.push(`experience alias "${key}" -> "${target}" is not canonical`)
}
for (const [key, { tag, kind }] of Object.entries(LEGACY_TAG_ALIAS_TABLE)) {
  if (key in REGISTRIES.tags) problems.push(`tag alias "${key}" shadows a registered tag`)
  if (REGISTRIES.tags[tag]?.status !== "canonical") problems.push(`tag alias "${key}" -> "${tag}" is not canonical`)
  if (kind !== "equivalent" && kind !== "implies") problems.push(`tag alias "${key}": invalid kind "${kind}"`)
}

// 6. Owner decisions that must not drift (Phase 2).
const tagAlias = LEGACY_TAG_ALIAS_TABLE as Record<string, { tag: string; kind: string }>
if (tagAlias["french-colonial"]?.tag !== "french-colonial-era") problems.push(`alias "french-colonial" must imply "french-colonial-era" (R21)`)
for (const [key, { tag }] of Object.entries(tagAlias))
  if (tag === "french-influence") problems.push(`alias "${key}" -> "french-influence": the French concepts are never inferred from labels`)
const siblingPairs: [string, string, Reg][] = [
  ["hiking", "trekking", REGISTRIES.experiences],
  ["champa-heritage", "cham-culture", REGISTRIES.tags],
  ["french-colonial-era", "french-influence", REGISTRIES.tags],
  ["french-colonial-era", "french-architecture", REGISTRIES.tags],
  ["french-influence", "french-architecture", REGISTRIES.tags],
]
const expAlias = LEGACY_EXPERIENCE_ALIASES as Record<string, string>
for (const [a, b, reg] of siblingPairs) {
  for (const [x, y] of [[a, b], [b, a]]) {
    const m = reg[x]
    if (m?.status !== "canonical") problems.push(`"${x}" must stay canonical`)
    if (m?.replacedBy === y || (m?.broader ?? []).includes(y) || expAlias[x] === y || tagAlias[x]?.tag === y)
      problems.push(`"${x}" and "${y}" are distinct concepts - no alias, broader or replacedBy between them`)
  }
}
if (REGISTRIES.experiences["temple-visit"]?.replacedBy !== "religious-site-visit") problems.push(`"temple-visit" must be deprecated with replacedBy "religious-site-visit"`)
// Broad types (owner decisions D1', D1''): each is either still canonical with a
// pendingDecision, or deprecated with exactly the replacement below.
const BROAD_TYPE_REPLACEMENT: Record<string, { category: string } | "none"> = {
  history: { category: "history" },
  nature: { category: "nature" },
  cultural: { category: "culture" },
  heritage: "none",
  landmark: "none",
  attraction: "none",
}
const broadTypes = Object.entries(REGISTRIES.type).filter(([, m]) => m.group === "broad").map(([k]) => k).sort()
if (broadTypes.join() !== Object.keys(BROAD_TYPE_REPLACEMENT).sort().join())
  problems.push(`broad types [${broadTypes}] differ from the owner-decided set [${Object.keys(BROAD_TYPE_REPLACEMENT).sort()}]`)
for (const [key, expected] of Object.entries(BROAD_TYPE_REPLACEMENT)) {
  const meta = REGISTRIES.type[key] as Meta & { pendingDecision?: string }
  if (!meta) continue
  if (meta.status === "canonical") {
    if (!meta.pendingDecision) problems.push(`type "${key}": canonical broad type without pendingDecision`)
  } else if (meta.status !== "deprecated") {
    problems.push(`type "${key}": broad type must be canonical or deprecated, not ${meta.status}`)
  } else if (expected === "none") {
    if (meta.noReplacement === undefined) problems.push(`type "${key}" must be deprecated with noReplacement (owner decision)`)
  } else if (meta.replacedByCategory !== expected.category) {
    problems.push(`type "${key}" must be deprecated with replacedByCategory "${expected.category}" (owner decision)`)
  }
  if (meta.status === "deprecated" && meta.pendingDecision) problems.push(`type "${key}": deprecated but still has a pendingDecision`)
}

// 7. Recognition side-car slugs.
const slugs = new Set(allLocations.map((l) => l.slug))
for (const slug of Object.keys(LOCATION_RECOGNITIONS)) if (!slugs.has(slug)) problems.push(`recognitions.ts: unknown location slug "${slug}"`)

console.log("\n── frozen contract ──")
for (const [field, frozen] of Object.entries(FROZEN_NON_CANONICAL)) {
  const reg = REGISTRIES[field]
  const canonical = Object.values(reg).filter((m) => m.status === "canonical").length
  console.log(`  ${field.padEnd(12)} canonical ${canonical} · proposed [${frozen.proposed.join(", ")}] · deprecated [${frozen.deprecated.join(", ")}]`)
}
console.log(`  recognition records: ${Object.values(LOCATION_RECOGNITIONS).flat().length} on ${Object.keys(LOCATION_RECOGNITIONS).length} locations`)
if (problems.length === 0) console.log("  OK - no violations")
else {
  for (const p of problems) console.log(`  PROBLEM: ${p}`)
  process.exitCode = 1
}
