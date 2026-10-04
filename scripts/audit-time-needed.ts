/**
 * Validates Location.timeNeeded (minutes only, see data/location.ts).
 * Read-only; exits 1 on any invalid value.
 *
 * Rules: when present, timeNeeded is an object with exactly minMinutes and
 * maxMinutes, both integers (not strings), minMinutes > 0 and
 * maxMinutes >= minMinutes. Multi-day values above 1440 are allowed.
 * Locations without enough evidence leave the field out
 * (reports/time-needed-migration.md).
 *
 * Usage: npm run audit:time-needed
 */
import { readFileSync, readdirSync } from "node:fs"
import { join } from "node:path"
import { allLocations } from "../data/all-locations"

const failures: string[] = []
let populated = 0

for (const loc of allLocations) {
  const tn = (loc as { timeNeeded?: unknown }).timeNeeded
  if (tn === undefined) continue
  populated++
  const fail = (msg: string) => failures.push(`${loc.slug}: ${msg}`)
  if (tn === null || typeof tn !== "object" || Array.isArray(tn)) { fail("timeNeeded must be an object"); continue }
  const keys = Object.keys(tn).sort().join(",")
  if (keys !== "maxMinutes,minMinutes") fail(`unexpected keys: ${keys}`)
  const { minMinutes, maxMinutes } = tn as Record<string, unknown>
  for (const [name, v] of [["minMinutes", minMinutes], ["maxMinutes", maxMinutes]] as const) {
    if (typeof v !== "number") fail(`${name} must be a number, got ${typeof v}`)
    else if (!Number.isInteger(v)) fail(`${name} must be an integer, got ${v}`)
  }
  if (typeof minMinutes === "number" && minMinutes <= 0) fail(`minMinutes must be > 0, got ${minMinutes}`)
  if (typeof minMinutes === "number" && typeof maxMinutes === "number" && maxMinutes < minMinutes) fail(`maxMinutes (${maxMinutes}) < minMinutes (${minMinutes})`)
}

// A duplicated key in an object literal would silently keep the last value
const dir = join(process.cwd(), "data/locations")
for (const file of readdirSync(dir).filter((f) => f.endsWith(".ts"))) {
  const count = (readFileSync(join(dir, file), "utf8").match(/^\s*timeNeeded:/gm) ?? []).length
  if (count > 1) failures.push(`${file}: timeNeeded appears ${count} times`)
}

console.log(`timeNeeded: ${populated} of ${allLocations.length} locations populated`)
if (failures.length) {
  console.log(`\nTIME NEEDED AUDIT FAILED (${failures.length}):\n  ${failures.join("\n  ")}`)
  process.exit(1)
}
console.log("Time needed audit passed.")
