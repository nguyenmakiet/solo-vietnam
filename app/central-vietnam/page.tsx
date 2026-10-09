// app/central-vietnam/page.tsx
import type { Metadata } from "next"
import RegionGuide from "@/components/RegionGuide"
import { OG_FALLBACK_IMAGE } from "@/lib/cloudinary"

export const metadata: Metadata = {
  title: "Central Vietnam Travel Guide | Solo in Vietnam",
  description: "Central Vietnam travel guide - Hoi An, Hue Imperial City, Phong Nha caves, Da Nang, and the coast. Ancient kingdoms, white sand beaches, and Vietnam's finest cuisine.",
  alternates: { canonical: "https://www.soloinvietnam.com/central-vietnam" },
  openGraph: {
    title: "Central Vietnam Travel Guide | Solo in Vietnam",
    description: "Central Vietnam travel guide - Hoi An, Hue Imperial City, Phong Nha caves, Da Nang, and the coast. Ancient kingdoms, white sand beaches, and Vietnam's finest cuisine.",
    url: "https://www.soloinvietnam.com/central-vietnam",
    images: [{ url: OG_FALLBACK_IMAGE, width: 1200, height: 630 }],
  },
}

export default function RegionPage() {
  return <RegionGuide region="central" />
}
