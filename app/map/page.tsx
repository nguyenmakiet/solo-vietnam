import { mapDestinations, mapLocations } from "@/lib/map-destinations"
import MapClient from "./MapClient"

export default function MapPage() {
  return <MapClient locations={mapLocations} destinations={mapDestinations} />
}
