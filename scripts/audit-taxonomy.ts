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
import {
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
