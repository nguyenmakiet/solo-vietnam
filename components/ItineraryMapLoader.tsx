"use client"

import dynamic from "next/dynamic"
import type { Itinerary } from "@/data/destinations/types"

interface StopData {
  name: string
  lat: number
  lng: number
}

interface Props {
  itineraries: Itinerary[]
  stopDataMap: Record<string, StopData>
}

const ItineraryMap = dynamic(() => import("./ItineraryMap"), { ssr: false })

export default function ItineraryMapLoader(props: Props) {
  return <ItineraryMap {...props} />
}
