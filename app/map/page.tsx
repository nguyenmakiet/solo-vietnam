import { activeLocations } from "@/data/all-locations"
import { destinations } from "@/data/destinations"
import type { Location } from "@/data/location"
import { toCoordinate } from "@/lib/coordinates"
import MapClient, { type MapDestination, type MapLocation } from "./MapClient"

function getLatLng(loc: Location): [number, number] {
  return [toCoordinate(loc.lat), toCoordinate(loc.lng)]
}

function getProvinceLabel(loc: Location) {
  return loc.provinces[0]?.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase()) ?? ""
}

function primaryType(loc: Location) {
  return Array.isArray(loc.type) ? loc.type[0] : loc.type
}

// Popup photo: same 600x400 crop as /locations cards; null = no photo yet
function popupImageUrl(heroImage: string | undefined): string | null {
  if (!heroImage || heroImage.includes("placeholder")) return null
  return heroImage.replace("w_1200,h_630,c_fill", "w_600,h_400,c_fill")
}

// Child locations far from the rest of their destination (Phu Quy is 87 km off
// Phan Thiet, Tra Su 96 km from Can Tho): left out of the fly-to bounds so the
// tap lands on the main cluster. They still count and still show as pins.
const FLY_BOUNDS_OUTLIERS = new Set(["phu-quy-island", "tra-su-cajuput-forest"])

const destinationSlugs = new Set(destinations.map(d => d.slug))

// Built on the server so the client bundle only gets the fields the map renders
const mapLocations: MapLocation[] = activeLocations.flatMap((loc) => {
  const [lat, lng] = getLatLng(loc)
  if (isNaN(lat) || isNaN(lng) || lat === 0 || lng === 0) return []
  return [{
    slug: loc.slug,
    name: loc.name,
    lat,
    lng,
    experiences: [...loc.experiences],
    type: primaryType(loc),
    province: getProvinceLabel(loc),
    image: popupImageUrl(loc.heroImage),
    destination: loc.destination && destinationSlugs.has(loc.destination) ? loc.destination : null,
  }]
})

const mapDestinations: MapDestination[] = destinations.flatMap((d) => {
  const children = mapLocations.filter(l => l.destination === d.slug)
  if (!d.coordinates || children.length === 0) return []
  const boundsLocs = children.filter(l => !FLY_BOUNDS_OUTLIERS.has(l.slug))
  const lats = boundsLocs.map(l => l.lat)
  const lngs = boundsLocs.map(l => l.lng)
  return [{
    slug: d.slug,
    name: d.name,
    region: d.region,
    lat: d.coordinates.lat,
    lng: d.coordinates.lng,
    priority: d.mapPriority ?? 2,
    zoom: d.mapZoom ?? 12,
    count: children.length,
    bounds: [[Math.min(...lats), Math.min(...lngs)], [Math.max(...lats), Math.max(...lngs)]],
  }]
})

export default function MapPage() {
  return <MapClient locations={mapLocations} destinations={mapDestinations} />
}
