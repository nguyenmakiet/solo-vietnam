// app/south-vietnam/page.tsx
import type { Metadata } from "next"
import RegionGuide from "@/components/RegionGuide"
import { OG_FALLBACK_IMAGE } from "@/lib/cloudinary"

export const metadata: Metadata = {
  title: "South Vietnam Travel Guide | Solo in Vietnam",
  description: "South Vietnam travel guide - Phu Quoc, Con Dao, Mekong Delta, and Ho Chi Minh City. Tropical islands, river deltas, and Vietnam's most dynamic city.",
  alternates: { canonical: "https://www.soloinvietnam.com/south-vietnam" },
  openGraph: {
    title: "South Vietnam Travel Guide | Solo in Vietnam",
    description: "South Vietnam travel guide - Phu Quoc, Con Dao, Mekong Delta, and Ho Chi Minh City. Tropical islands, river deltas, and Vietnam's most dynamic city.",
    url: "https://www.soloinvietnam.com/south-vietnam",
    images: [{ url: OG_FALLBACK_IMAGE, width: 1200, height: 630 }],
  },
}

export default function RegionPage() {
  return <RegionGuide region="south" />
}
