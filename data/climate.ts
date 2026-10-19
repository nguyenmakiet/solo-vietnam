// Monthly climate normals per destination, from NASA POWER.
// data/climate.json is generated offline by `npm run fetch:climate`;
// never edit it by hand.
import raw from "./climate.json"

export type ClimateMonth = {
  month: number // 1-12
  avgTempC: number // mean daily 2 m air temperature, 1 decimal
  rainfallMm: number // mean monthly total, rounded
  rainyDays: number // mean days with >= 1 mm, 1 decimal
}

export type ClimateDestination = {
  lat: number
  lng: number
  gridCell: string // "lat,lng" of the MERRA-2 cell centre
  months: ClimateMonth[] // 12 entries, Jan-Dec
}

export type ClimateMeta = {
  source: string
  dataVersion: string
  accessedAt: string // YYYY-MM-DD
  years: string
  gridNote: string
}

export type ClimateData = {
  meta: ClimateMeta | null // null until the fetch script has run
  destinations: Record<string, ClimateDestination>
}

const climate = raw as ClimateData

export const climateMeta = climate.meta

export function getDestinationClimate(slug: string): ClimateDestination | undefined {
  const c = climate.destinations[slug]
  return climate.meta && c?.months.length === 12 ? c : undefined
}

// Months (1-12) of the three highest mean rainfall totals
export function wettestMonths(c: ClimateDestination, count = 3): number[] {
  return c.months
    .slice()
    .sort((a, b) => b.rainfallMm - a.rainfallMm)
    .slice(0, count)
    .map((m) => m.month)
}
