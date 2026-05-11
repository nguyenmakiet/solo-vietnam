import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Map of Vietnam Locations | Solo in Vietnam",
  description: "Interactive map of 200+ travel locations across Vietnam. Filter by experience type - trekking, beaches, caves, food, temples, and more.",
  alternates: { canonical: "https://www.soloinvietnam.com/map" },
  openGraph: {
    title: "Map of Vietnam Locations | Solo in Vietnam",
    description: "Interactive map of 200+ travel locations across Vietnam. Filter by experience type - trekking, beaches, caves, food, temples, and more.",
  },
}

export default function MapLayout({ children }: { children: React.ReactNode }) {
  return children
}
