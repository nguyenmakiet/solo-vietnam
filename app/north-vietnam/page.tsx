// app/north-vietnam/page.tsx
import type { Metadata } from "next"
import RegionGuide from "@/components/RegionGuide"
import { OG_FALLBACK_IMAGE } from "@/lib/cloudinary"

export const metadata: Metadata = {
  title: "North Vietnam Travel Guide | Solo in Vietnam",
  description: "North Vietnam travel guide - Ha Long Bay, Ha Giang Loop, Sapa, Ninh Binh, and more. Practical tips for solo travelers exploring Vietnam's cultural heartland.",
  alternates: { canonical: "https://www.soloinvietnam.com/north-vietnam" },
  openGraph: {
    title: "North Vietnam Travel Guide | Solo in Vietnam",
    description: "North Vietnam travel guide - Ha Long Bay, Ha Giang Loop, Sapa, Ninh Binh, and more. Practical tips for solo travelers exploring Vietnam's cultural heartland.",
    url: "https://www.soloinvietnam.com/north-vietnam",
    images: [{ url: OG_FALLBACK_IMAGE, width: 1200, height: 630 }],
  },
}

export default function RegionPage() {
  return <RegionGuide region="north" />
}
