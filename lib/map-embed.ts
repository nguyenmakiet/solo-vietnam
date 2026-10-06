import type { Location, LocationType } from "@/data/location"

// Keyless Google Maps iframe (maps.google.com/maps?...&output=embed).
// Only zoom (z) and map type (t) are adjustable; colours/markers are not.

// Default zoom by primary type (type[0]); a location can override it with mapZoom.
const ZOOM_BY_TYPE: Partial<Record<LocationType, number>> = {
  bay: 11, "national-park": 11, "nature-reserve": 11,
  city: 12,
  island: 13, mountain: 13, pass: 13, lake: 13, river: 13, valley: 13, forest: 13,
  cape: 13, grassland: 13, "sand-dunes": 13, "rice-fields": 13, farmland: 13,
  beach: 14, waterfall: 14, cave: 14, stream: 14, "rock-formation": 14, village: 14,
  town: 14, lighthouse: 14, "cable-car": 14, "theme-park": 14,
  "old-quarter": 15, citadel: 15, bridge: 15, "historic-site": 15,
  pagoda: 16, temple: 16, church: 16, tomb: 16, museum: 16, building: 16, "communal-house": 16,
  palace: 16, prison: 16, station: 16, monument: 16, fortress: 16, market: 16, street: 16,
}
const DEFAULT_ZOOM = 15

// Nature and coastal types read better as satellite with labels (t=h) than as a
// near-empty road map; built-up places keep the road map (t=m).
const SATELLITE_TYPES = new Set<LocationType>([
  "bay", "island", "beach", "cape", "lighthouse", "mountain", "pass", "waterfall", "lake",
  "river", "stream", "rock-formation", "valley", "rice-fields", "farmland", "grassland",
  "sand-dunes", "forest", "national-park", "nature-reserve", "cave",
])

export function mapView(location: Pick<Location, "type" | "mapZoom">) {
  const primary = (Array.isArray(location.type) ? location.type[0] : location.type) as LocationType
  return {
    zoom: location.mapZoom ?? ZOOM_BY_TYPE[primary] ?? DEFAULT_ZOOM,
    satellite: SATELLITE_TYPES.has(primary),
  }
}

export function mapEmbedSrc(lat: number, lng: number, view: { zoom: number; satellite: boolean }) {
  return `https://maps.google.com/maps?q=${lat},${lng}&z=${view.zoom}&t=${view.satellite ? "h" : "m"}&output=embed`
}
