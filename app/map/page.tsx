import { activeLocations } from "@/data/all-locations"
import type { Location } from "@/data/location"
import MapClient, { type MapLocation } from "./MapClient"

function getLatLng(loc: Location): [number, number] {
  const la = typeof loc.lat === "string" ? parseFloat(loc.lat) : loc.lat
  const ln = typeof loc.lng === "string" ? parseFloat(loc.lng) : loc.lng
  return [la, ln]
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
  }]
})

export default function MapPage() {
  return <MapClient locations={mapLocations} />
}
