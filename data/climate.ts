// Monthly climate normals per destination: long-term IBST station averages
// (Vietnam Institute for Building Science and Technology). data/climate.json
// is curated by hand from the station tables; there is no fetch script.
import raw from "./climate.json"

export type ClimateMonth = {
  month: number // 1-12
  avgTempC: number // mean temperature
  rainfallMm: number // mean monthly total
  rainyDays: number // mean rainy days, threshold as reported by the station
}

export type ClimateDestination = {
  station: string
  // Set when the station is not at the destination itself (nearby city,
  // valley below a plateau...); shown under the chart
  proxyNote: string | null
  sourceUrl: string
  months: ClimateMonth[] // 12 entries, Jan-Dec
}

export type ClimateMeta = {
  source: string
  accessedAt: string // YYYY-MM-DD
  note: string
}

export type ClimateData = {
  meta: ClimateMeta
  destinations: Record<string, ClimateDestination>
}

const climate = raw as ClimateData

export const climateMeta = climate.meta

export function getDestinationClimate(slug: string): ClimateDestination | undefined {
  const c = climate.destinations[slug]
  return c?.months.length === 12 ? c : undefined
}

// Months (1-12) of the three highest mean rainfall totals
export function wettestMonths(c: ClimateDestination, count = 3): number[] {
  return c.months
    .slice()
    .sort((a, b) => b.rainfallMm - a.rainfallMm)
    .slice(0, count)
    .map((m) => m.month)
}
