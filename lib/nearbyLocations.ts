import { allLocations } from "@/data/all-locations"

function toDecimal(val: number | string): number {
  if (typeof val === "number") return val
  const match = val.match(/(\d+)°(\d+)'([\d.]+)"([NSEW])/)
  if (!match) return parseFloat(val)
  const [, d, m, s, dir] = match
  const decimal = Number(d) + Number(m) / 60 + Number(s) / 3600
  return dir === "S" || dir === "W" ? -decimal : decimal
}

function haversineKm(
  lat1: number | string, lng1: number | string,
  lat2: number | string, lng2: number | string
): number {
  const R = 6371
  const dLat = ((toDecimal(lat2) - toDecimal(lat1)) * Math.PI) / 180
  const dLng = ((toDecimal(lng2) - toDecimal(lng1)) * Math.PI) / 180
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((toDecimal(lat1) * Math.PI) / 180) *
    Math.cos((toDecimal(lat2) * Math.PI) / 180) *
    Math.sin(dLng / 2) ** 2
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
}

/** Average motorbike speed (km/h) in tourist areas */
const AVG_SPEED_KMH = 30

function formatTime(minutes: number): string {
  if (minutes < 1) return "< 1 min"
  if (minutes < 60) return `${Math.round(minutes)} min`
  const h = Math.floor(minutes / 60)
  const m = Math.round(minutes % 60)
  return m > 0 ? `${h}h ${m}min` : `${h}h`
}

function formatDistance(km: number): string {
  if (km < 1) return `${Math.round(km * 1000)} m`
  return `${km % 1 === 0 ? km : km.toFixed(1)} km`
}

export interface NearbyLocation {
  slug: string
  name: string
  type: string | string[]
  distanceKm: number
  distanceLabel: string
  timeLabel: string
  destination?: string
}

export function getNearbyLocations(currentSlug: string, provinces: string[], limit = 6)
: NearbyLocation[] {
  const current = allLocations.find((l) => l.slug === currentSlug)
  if (!current) return []

  return allLocations
    .filter(l =>
      l.slug !== currentSlug &&
      l.provinces.some(p => provinces.includes(p))
    )
    .map((l) => {
      const km = haversineKm(current.lat, current.lng, l.lat, l.lng)
      const minutes = (km / AVG_SPEED_KMH) * 60
      return {
        slug: l.slug,
        name: l.name,
        type: l.type,
        distanceKm: km,
        distanceLabel: formatDistance(km),
        timeLabel: formatTime(minutes),
        destination: l.destination,
      }
    })
    .sort((a, b) => a.distanceKm - b.distanceKm)
    .slice(0, limit)
}
