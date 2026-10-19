/**
 * Offline fetch: monthly climate normals for every destination with
 * coordinates, from the NASA POWER daily point API. Never runs at build time.
 *
 * Per destination: one request for daily T2M (2 m air temperature) and
 * PRECTOTCORR (bias-corrected precipitation), 2016-01-01..2025-12-31.
 * Requests are sequential with a pause between them and retry with backoff.
 *
 * Per month (1-12), averaged over the 10 years:
 *   avgTempC    mean of daily T2M, 1 decimal
 *   rainfallMm  monthly total, averaged across years, rounded
 *   rainyDays   days with >= 1 mm, averaged across years, 1 decimal
 * Fill values (header.fill_value, usually -999) are dropped. A year-month
 * counts only when >= 90% of its days are valid; totals are scaled up to the
 * full month length when a few days are missing.
 *
 * Writes data/climate.json, then prints destinations that share a grid cell
 * and a 12-month rain/temperature table per destination.
 *
 * Usage: npm run fetch:climate
 *        npm run fetch:climate -- --only ha-giang,sapa   (merge into existing file)
 */

import { existsSync, readFileSync, writeFileSync } from "fs"
import { destinations } from "../data/destinations/index"
import type { ClimateData, ClimateDestination, ClimateMonth } from "../data/climate"

const API = "https://power.larc.nasa.gov/api/temporal/daily/point"
const START = "20160101"
const END = "20251231"
const YEARS = "2016-2025"
const OUT = "data/climate.json"
const PAUSE_MS = 4000
const RETRIES = 4
const MIN_COVERAGE = 0.9
const RAINY_DAY_MM = 1

// POWER meteorology (MERRA-2) grid: 0.5° lat x 0.625° lon
const GRID_LAT = 0.5
const GRID_LNG = 0.625
const GRID_NOTE =
  "NASA POWER meteorology comes from the MERRA-2 grid (0.5° latitude x 0.625° longitude, roughly 55 x 65 km), so each value is an average over a grid cell, not a point measurement. Destinations in the same cell share identical data."

type PowerResponse = {
  header?: { fill_value?: number; api?: { name?: string; version?: string }; sources?: string[] }
  parameters?: Record<string, { units?: string; longname?: string }>
  properties?: { parameter?: Record<string, Record<string, number>> }
  messages?: string[]
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

function gridCell(lat: number, lng: number): string {
  const cLat = Math.round(lat / GRID_LAT) * GRID_LAT
  const cLng = Math.round(lng / GRID_LNG) * GRID_LNG
  return `${cLat.toFixed(3)},${cLng.toFixed(3)}`
}

async function fetchPower(lat: number, lng: number): Promise<PowerResponse> {
  const url =
    `${API}?parameters=T2M,PRECTOTCORR&community=AG` +
    `&latitude=${lat}&longitude=${lng}&start=${START}&end=${END}&format=JSON`
  let lastError: unknown
  for (let attempt = 1; attempt <= RETRIES; attempt++) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(120_000) })
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${(await res.text()).slice(0, 300)}`)
      return (await res.json()) as PowerResponse
    } catch (err) {
      lastError = err
      const wait = PAUSE_MS * 2 ** (attempt - 1)
      console.warn(`  attempt ${attempt}/${RETRIES} failed (${err instanceof Error ? err.message : err}); retry in ${wait / 1000}s`)
      if (attempt < RETRIES) await sleep(wait)
    }
  }
  throw lastError
}

// Confirms units and the fill value from the response metadata; throws when
// they differ from what the aggregation below assumes
function checkMetadata(json: PowerResponse): { fill: number; version: string } {
  const tUnit = json.parameters?.T2M?.units
  const pUnit = json.parameters?.PRECTOTCORR?.units
  if (tUnit !== "C") throw new Error(`Unexpected T2M units: ${tUnit}`)
  if (pUnit !== "mm/day") throw new Error(`Unexpected PRECTOTCORR units: ${pUnit}`)
  const fill = json.header?.fill_value
  if (typeof fill !== "number") throw new Error("Response header has no fill_value")
  const version = json.header?.api?.version
  if (!version) throw new Error("Response header has no api.version")
  return { fill, version }
}

const round1 = (n: number) => Math.round(n * 10) / 10
const mean = (xs: number[]) => xs.reduce((a, b) => a + b, 0) / xs.length
const daysIn = (year: number, month: number) => new Date(Date.UTC(year, month, 0)).getUTCDate()

function aggregate(json: PowerResponse, fill: number): ClimateMonth[] {
  const t2m = json.properties?.parameter?.T2M ?? {}
  const prec = json.properties?.parameter?.PRECTOTCORR ?? {}
  const valid = (v: number | undefined): v is number => typeof v === "number" && Number.isFinite(v) && v !== fill

  // year-month -> daily values
  const temps = new Map<string, number[]>()
  const rains = new Map<string, number[]>()
  const push = (m: Map<string, number[]>, key: string, v: number) => {
    const list = m.get(key)
    if (list) list.push(v)
    else m.set(key, [v])
  }
  for (const [date, v] of Object.entries(t2m)) if (valid(v)) push(temps, date.slice(0, 6), v)
  for (const [date, v] of Object.entries(prec)) if (valid(v)) push(rains, date.slice(0, 6), v)

  const startYear = Number(START.slice(0, 4))
  const endYear = Number(END.slice(0, 4))
  const months: ClimateMonth[] = []
  for (let month = 1; month <= 12; month++) {
    const monthTemps: number[] = []
    const monthTotals: number[] = []
    const monthRainyDays: number[] = []
    for (let year = startYear; year <= endYear; year++) {
      const key = `${year}${String(month).padStart(2, "0")}`
      const days = daysIn(year, month)
      const t = temps.get(key) ?? []
      if (t.length >= days * MIN_COVERAGE) monthTemps.push(mean(t))
      const r = rains.get(key) ?? []
      if (r.length >= days * MIN_COVERAGE) {
        const scale = days / r.length
        monthTotals.push(r.reduce((a, b) => a + b, 0) * scale)
        monthRainyDays.push(r.filter((v) => v >= RAINY_DAY_MM).length * scale)
      }
    }
    if (!monthTemps.length || !monthTotals.length) throw new Error(`No valid data for month ${month}`)
    months.push({
      month,
      avgTempC: round1(mean(monthTemps)),
      rainfallMm: Math.round(mean(monthTotals)),
      rainyDays: round1(mean(monthRainyDays)),
    })
  }
  return months
}

async function main() {
  const onlyArg = process.argv.indexOf("--only")
  const only = onlyArg > -1 ? new Set(process.argv[onlyArg + 1]?.split(",")) : null
  const targets = destinations.filter((d) => d.coordinates && (!only || only.has(d.slug)))
  const skipped = destinations.filter((d) => !d.coordinates).map((d) => d.slug)
  if (skipped.length) console.log(`No coordinates, skipped: ${skipped.join(", ")}`)

  const existing: ClimateData | null = only && existsSync(OUT) ? JSON.parse(readFileSync(OUT, "utf8")) : null
  const result: Record<string, ClimateDestination> = { ...(existing?.destinations ?? {}) }
  let dataVersion = ""
  let sources: string[] = []

  for (const [i, d] of targets.entries()) {
    const { lat, lng } = d.coordinates!
    console.log(`[${i + 1}/${targets.length}] ${d.slug} (${lat}, ${lng})`)
    const json = await fetchPower(lat, lng)
    if (json.messages?.length) console.log(`  messages: ${json.messages.join(" | ")}`)
    const meta = checkMetadata(json)
    if (dataVersion && meta.version !== dataVersion) console.warn(`  dataVersion changed: ${dataVersion} -> ${meta.version}`)
    dataVersion = meta.version
    sources = json.header?.sources ?? sources
    result[d.slug] = { lat, lng, gridCell: gridCell(lat, lng), months: aggregate(json, meta.fill) }
    if (i < targets.length - 1) await sleep(PAUSE_MS)
  }

  const data: ClimateData = {
    meta: {
      source: "NASA Langley Research Center (LaRC) POWER Project, daily point API (T2M, PRECTOTCORR; community AG)",
      dataVersion,
      accessedAt: new Date().toISOString().slice(0, 10),
      years: YEARS,
      gridNote: GRID_NOTE,
    },
    destinations: Object.fromEntries(Object.entries(result).sort(([a], [b]) => a.localeCompare(b))),
  }
  writeFileSync(OUT, JSON.stringify(data, null, 2) + "\n")
  console.log(`\nWrote ${OUT}: ${Object.keys(data.destinations).length} destinations, dataVersion ${dataVersion}${sources.length ? `, sources ${sources.join(", ")}` : ""}`)

  // Destinations that share a grid cell get identical numbers
  const byCell = new Map<string, string[]>()
  for (const [slug, c] of Object.entries(data.destinations)) byCell.set(c.gridCell, [...(byCell.get(c.gridCell) ?? []), slug])
  const shared = [...byCell].filter(([, slugs]) => slugs.length > 1)
  console.log(`\nShared grid cells: ${shared.length ? "" : "none"}`)
  for (const [cell, slugs] of shared) console.log(`  ${cell}: ${slugs.join(", ")}`)

  const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  for (const [slug, c] of Object.entries(data.destinations)) {
    console.log(`\n${slug} (cell ${c.gridCell})`)
    console.log(`  ${"".padEnd(10)}${MONTHS.map((m) => m.padStart(6)).join("")}`)
    console.log(`  ${"rain mm".padEnd(10)}${c.months.map((m) => String(m.rainfallMm).padStart(6)).join("")}`)
    console.log(`  ${"rain days".padEnd(10)}${c.months.map((m) => m.rainyDays.toFixed(1).padStart(6)).join("")}`)
    console.log(`  ${"temp °C".padEnd(10)}${c.months.map((m) => m.avgTempC.toFixed(1).padStart(6)).join("")}`)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
