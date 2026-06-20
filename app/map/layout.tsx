import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Map of Vietnam Locations | Solo in Vietnam",
  description: "Interactive map of 200+ travel locations across Vietnam. Filter by experience type - trekking, beaches, caves, food, temples, and more.",
  alternates: { canonical: "https://www.soloinvietnam.com/map" },
  openGraph: {
    title: "Map of Vietnam Locations | Solo in Vietnam",
    description: "Interactive map of 200+ travel locations across Vietnam. Filter by experience type - trekking, beaches, caves, food, temples, and more.",
    url: "https://www.soloinvietnam.com/map",
    images: [{ url: "https://res.cloudinary.com/dl5kqhspv/image/upload/w_1200,h_630,c_fill,q_auto,f_auto/fallback_picture", width: 1200, height: 630 }],
  },
}

export default function MapLayout({ children }: { children: React.ReactNode }) {
  return children
}
