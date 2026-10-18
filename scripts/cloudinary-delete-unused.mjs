#!/usr/bin/env node
// cloudinary-delete-unused.mjs
// Deletes ORIGINAL assets listed in cloudinary-unused-candidates.txt, by lot.
// DEFAULT = DRY RUN (prints what would happen, touches nothing, needs no key).
// Real deletion needs BOTH: --execute and env CLOUDINARY_URL. Deleted assets cannot be restored
// (unless Cloudinary backup is on), so run the dry run, check the list, and only then --execute.
//
// Usage:
//   node scripts/cloudinary-delete-unused.mjs                      # summary of lots, nothing deleted
//   node scripts/cloudinary-delete-unused.mjs --lot demo           # dry run for one lot, prints ids
//   node scripts/cloudinary-delete-unused.mjs --lot demo --execute # really delete (needs CLOUDINARY_URL)
//
// Lots:  demo   = Cloudinary sample files (samples/*, sample, cld-sample*, main-sample)
//        camera = camera-style names (DSC_*, HN*, HCM*, DL*, KG*, IMG_*, z78...)
//        named  = every other unreferenced original
// Always kept (never in any lot): ids containing "placeholder", sapa, about_me_background_sketch*,
//   fallback-picture, anything uploaded on/after --keep-after (default 2026-08-01), 0-byte assets.
import { readFileSync, appendFileSync, mkdirSync } from "node:fs"

const args = process.argv.slice(2)
const opt = (n, d) => { const i = args.indexOf(`--${n}`); return i >= 0 && args[i + 1] ? args[i + 1] : d }
const flag = (n) => args.includes(`--${n}`)
const CAND = opt("candidates", "reports/cloudinary-unused-candidates.txt")
const USED = opt("used", "reports/cloudinary-used-ids.txt")
const KEEP_AFTER = opt("keep-after", "2026-08-01")
const LOT = opt("lot", null)
const EXECUTE = flag("execute")
const LOG = "reports/cloudinary-delete-log.txt"

const usedIds = new Set(readFileSync(USED, "utf8").split("\n").map((l) => l.split(" | ")[0].trim()).filter(Boolean))
const rows = readFileSync(CAND, "utf8").split("\n").filter(Boolean).map((l) => {
  const [id, type, bytes, created] = l.split(" | ")
  return { id, type, bytes: Number(bytes), created }
})

const KEEP = [/placeholder/i, /^sapa$/, /^about_me_background_sketch/, /^fallback-picture$/]
const lotOf = (r) => {
  if (/^samples\//.test(r.id) || r.id === "sample" || /^cld-sample/.test(r.id) || r.id === "main-sample") return "demo"
  if (/^(DSC_|_DSC|DLDSC|DLIMG|HN|HCM|DL|KG|IMG_|z\d{6})/.test(r.id)) return "camera"
  return "named"
}
const kept = [], lots = { demo: [], camera: [], named: [] }
for (const r of rows) {
  if (usedIds.has(r.id)) { kept.push([r, "in used list"]); continue }
  if (KEEP.some((re) => re.test(r.id))) { kept.push([r, "keep rule"]); continue }
  if (r.created.slice(0, 10) >= KEEP_AFTER) { kept.push([r, `uploaded >= ${KEEP_AFTER}`]); continue }
  if (r.bytes === 0) { kept.push([r, "0 bytes"]); continue }
  lots[lotOf(r)].push(r)
}
const gb = (b) => (b / 1073741824).toFixed(2) + " GB"
const sum = (a) => a.reduce((n, r) => n + r.bytes, 0)

console.log("lot      count   size")
for (const [k, v] of Object.entries(lots)) console.log(`${k.padEnd(8)} ${String(v.length).padStart(5)}   ${gb(sum(v))}`)
console.log(`kept (excluded by rules): ${kept.length}`)
if (!LOT) { console.log("\nPass --lot demo|camera|named to see the ids. Nothing was deleted."); process.exit(0) }
if (!lots[LOT]) { console.error(`unknown lot "${LOT}"`); process.exit(1) }

const batch = lots[LOT]
console.log(`\nLot "${LOT}": ${batch.length} assets, ${gb(sum(batch))}`)
if (!EXECUTE) {
  for (const r of batch) console.log(`  would delete ${r.type}/${r.id}  ${(r.bytes / 1048576).toFixed(2)} MB  ${r.created.slice(0, 10)}`)
  console.log("\nDRY RUN: nothing deleted. Add --execute to delete for real.")
  process.exit(0)
}

const m = (process.env.CLOUDINARY_URL || "").match(/^cloudinary:\/\/([^:]+):([^@]+)@(.+)$/)
if (!m) { console.error("Set CLOUDINARY_URL first."); process.exit(1) }
const [, key, secret, cloud] = m
const auth = "Basic " + Buffer.from(`${key}:${secret}`).toString("base64")
mkdirSync("reports", { recursive: true })
let deleted = 0
for (const type of ["image", "video"]) {
  const ids = batch.filter((r) => r.type === type).map((r) => r.id)
  for (let i = 0; i < ids.length; i += 100) {
    const chunk = ids.slice(i, i + 100)
    const url = new URL(`https://api.cloudinary.com/v1_1/${cloud}/resources/${type}/upload`)
    for (const id of chunk) url.searchParams.append("public_ids[]", id)
    const res = await fetch(url, { method: "DELETE", headers: { Authorization: auth } })
    const body = await res.text()
    if (!res.ok) { console.error(`HTTP ${res.status}: ${body.slice(0, 200)}`); process.exit(1) }
    appendFileSync(LOG, `${new Date().toISOString()} ${type} ${LOT} ${chunk.length} ids: ${chunk.join(",")}\n${body.slice(0, 500)}\n`)
    deleted += chunk.length
    console.log(`deleted ${deleted}/${batch.length}`)
    await new Promise((r) => setTimeout(r, 400))
  }
}
console.log(`done. log: ${LOG}`)
