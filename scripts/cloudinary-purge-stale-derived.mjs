#!/usr/bin/env node
// cloudinary-purge-stale-derived.mjs
// Deletes ONLY derived (resized cache) copies whose transformation string is no longer produced by the site code.
// It NEVER deletes originals: every delete call sends keep_original=true plus an explicit transformations list.
//
// Stale transformations (the code no longer generates these):
//   w_750 / w_1080 / w_2048 / w_3840  with  c_limit,q_auto,f_auto   (old next/image deviceSizes)
//   q_auto,f_auto                     (old CloudImage lightbox: full-size, no width)
// Still in use and therefore NOT touched: w_640/828/1200/1920 ...,c_limit,q_auto,f_auto, w_1600,c_limit,...,
//   w_96,h_96,c_fill,g_auto,q_auto,f_auto, w_600,h_450,c_fill,..., w_1000,h_750,c_fill,..., w_1600,q_auto,f_auto,
//   w_900,q_auto,f_auto, w_800,h_450,c_fill,..., w_1600,h_600,c_fill,..., hero w_1200,h_630,c_fill,...
//
// Usage (PowerShell, from the repo root; the secret stays on your machine):
//   $env:CLOUDINARY_URL="cloudinary://API_KEY:API_SECRET@dl5kqhspv"
//   node scripts/cloudinary-purge-stale-derived.mjs --sample 20           # READ-ONLY: inspect derived of 20 assets
//   node scripts/cloudinary-purge-stale-derived.mjs --only PUBLIC_ID --execute   # test on ONE asset
//   node scripts/cloudinary-purge-stale-derived.mjs --execute              # all assets (about 22 API calls)
//   Remove-Item Env:CLOUDINARY_URL
// Without --execute nothing is deleted. Dry-run costs 1 Admin API call per sampled asset (limit 500 per hour).
import { appendFileSync, mkdirSync } from "node:fs"

const args = process.argv.slice(2)
const opt = (n, d) => { const i = args.indexOf(`--${n}`); return i >= 0 && args[i + 1] ? args[i + 1] : d }
const EXECUTE = args.includes("--execute")
const SAMPLE = Number(opt("sample", "0"))
const ONLY = opt("only", null)

// f_auto negotiation stores one derived copy per delivered format, so cover those variants too.
const BASES = ["w_750,c_limit,q_auto", "w_1080,c_limit,q_auto", "w_2048,c_limit,q_auto", "w_3840,c_limit,q_auto", "q_auto"]
const FORMATS = ["f_auto", "f_webp", "f_webp,fl_awebp", "f_jxl", "f_avif", "f_jpg"]
const STALE = BASES.flatMap((b) => FORMATS.map((f) => `${b},${f}`))
// The API reports transformations with a trailing "/" (e.g. "w_2048,c_limit,q_auto,f_auto/")
const SLASH = args.includes("--slash")
const norm = (t) => (t || "").replace(/\/+$/, "")
const toParam = (t) => (SLASH ? t + "/" : t)

const m = (process.env.CLOUDINARY_URL || "").match(/^cloudinary:\/\/([^:]+):([^@]+)@(.+)$/)
if (!m) { console.error("Set CLOUDINARY_URL=cloudinary://API_KEY:API_SECRET@CLOUD first."); process.exit(1) }
const [, key, secret, cloud] = m
const auth = "Basic " + Buffer.from(`${key}:${secret}`).toString("base64")
const base = `https://api.cloudinary.com/v1_1/${cloud}`
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
const mb = (b) => (b / 1048576).toFixed(2) + " MB"

async function api(path, init = {}) {
  const res = await fetch(base + path, { ...init, headers: { Authorization: auth } })
  const left = res.headers.get("X-FeatureRateLimit-Remaining")
  const text = await res.text()
  if (!res.ok) throw new Error(`HTTP ${res.status} ${path.split("?")[0]}: ${text.slice(0, 200)}`)
  return { json: JSON.parse(text), left }
}

async function listImages() {
  const out = []
  let cursor
  do {
    const q = new URLSearchParams({ max_results: "500" })
    if (cursor) q.set("next_cursor", cursor)
    const { json } = await api(`/resources/image/upload?${q}`)
    for (const r of json.resources) out.push(r.public_id)
    cursor = json.next_cursor
  } while (cursor)
  return out
}

const isStale = (t) => STALE.includes(norm(t))
const detailsUrl = (id) => `/resources/image/upload/${encodeURIComponent(id).replace(/%2F/g, "/")}`
async function staleOf(id) {
  const { json } = await api(detailsUrl(id))
  const st = (json.derived || []).filter((d) => isStale(d.transformation))
  return { total: (json.derived || []).length, stale: st.length, bytes: st.reduce((n, d) => n + (d.bytes || 0), 0) }
}

let ids = ONLY ? [ONLY] : await listImages()
console.log(`images on Cloudinary: ${ids.length}`)

// ---------- READ-ONLY: find assets that have stale derived ----------
const FIND = Number(opt("find", "0"))
if (FIND > 0) {
  const pick = [...ids].sort(() => Math.random() - 0.5).slice(0, FIND)
  let shown = 0
  for (const id of pick) {
    const r = await staleOf(id)
    if (r.stale > 0) { console.log(`${id}  stale ${r.stale}/${r.total} (${mb(r.bytes)})`); if (++shown >= 5) break }
    await sleep(150)
  }
  console.log(shown ? "\nPick one of these ids for: --only ID --execute" : "none found in this batch; run --find again")
  process.exitCode = 0
  await sleep(300)
  process.exit(0)
}

// ---------- READ-ONLY inspection ----------
if (!EXECUTE) {
  const pick = SAMPLE > 0 ? ids.sort(() => Math.random() - 0.5).slice(0, SAMPLE) : ids.slice(0, 1)
  const byT = new Map()
  let stale = 0, all = 0, staleN = 0, allN = 0
  for (const id of pick) {
    const { json, left } = await api(detailsUrl(id))
    for (const d of json.derived || []) {
      const t = d.transformation || ""
      const s = byT.get(t) || { n: 0, b: 0 }
      s.n++; s.b += d.bytes || 0; byT.set(t, s)
      all += d.bytes || 0; allN++
      if (isStale(t)) { stale += d.bytes || 0; staleN++ }
    }
    if (left !== null && Number(left) < 20) { console.log("rate limit nearly used up, stopping"); break }
    await sleep(150)
  }
  console.log(`\nSampled ${pick.length} assets. Derived found: ${allN} (${mb(all)}). Stale: ${staleN} (${mb(stale)}).`)
  console.log("\ntransformation | count | size   [STALE = will be deleted]")
  for (const [t, s] of [...byT].sort((a, b) => b[1].b - a[1].b))
    console.log(`${isStale(t) ? "STALE " : "keep  "} ${t || "(none)"} | ${s.n} | ${mb(s.b)}`)
  if (pick.length < ids.length) console.log(`\nExtrapolation to all ${ids.length} images (rough): stale about ${mb((stale / pick.length) * ids.length)}`)
  console.log("\nNothing was deleted. Check that the STALE lines are exactly the ones you expect, then use --execute.")
  process.exit(0)
}

// ---------- DELETE (derived only) ----------
mkdirSync("reports", { recursive: true })
const LOG = "reports/cloudinary-purge-derived-log.txt"
let before = null
if (ONLY) {
  before = await staleOf(ONLY)
  console.log(`before: ${before.total} derived, ${before.stale} stale (${mb(before.bytes)})`)
  if (before.stale === 0) { console.log("this asset has no stale derived; pick another with --sample first."); process.exit(0) }
}
let derivedDeleted = 0, originalDeleted = 0
for (let i = 0; i < ids.length; i += 100) {
  const chunk = ids.slice(i, i + 100)
  const q = new URLSearchParams()
  for (const id of chunk) q.append("public_ids[]", id)
  q.set("keep_original", "true")
  q.set("transformations", STALE.map(toParam).join("|"))
  const { json, left } = await api(`/resources/image/upload?${q}`, { method: "DELETE" })
  const counts = json.deleted_counts || {}
  for (const c of Object.values(counts)) { derivedDeleted += c.derived || 0; originalDeleted += c.original || 0 }
  appendFileSync(LOG, `${new Date().toISOString()} chunk ${i / 100 + 1} (${chunk.length} ids) derived so far ${derivedDeleted}, originals so far ${originalDeleted}, rate left ${left}\n`)
  console.log(`chunk ${i / 100 + 1}/${Math.ceil(ids.length / 100)}: derived deleted so far ${derivedDeleted}, originals deleted ${originalDeleted}`)
  if (originalDeleted > 0) { console.error("STOP: an original was reported deleted. Check the Cloudinary console now."); process.exit(2) }
  await sleep(500)
}
console.log(`done. derived deleted: ${derivedDeleted}. log: ${LOG}`)
if (ONLY) {
  const after = await staleOf(ONLY)
  console.log(`after: ${after.total} derived, ${after.stale} stale`)
  if (after.stale > 0) console.log("Stale derived still there: rerun with --slash added (the API may want the trailing slash). Do NOT run on all assets until 'after' shows 0 stale.")
  else console.log("OK: stale derived gone, original untouched. Check the location page, then run without --only.")
}
