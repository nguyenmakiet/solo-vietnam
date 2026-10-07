import { Suspense } from "react"
import { activeLocations } from "@/data/all-locations"
import LocationsClient from "./LocationsClient"
import { OG_FALLBACK_IMAGE } from "@/lib/cloudinary"

interface Props {
  searchParams: Promise<Record<string, string | string[]>>
}

export async function generateMetadata({ searchParams }: Props) {
  const params = await searchParams
  const province = typeof params.province === "string" ? params.province : undefined

  if (province) {
    return {
      title: "Locations | Solo in Vietnam",
      description: "Browse travel locations in Vietnam with practical tips and insights for solo travelers.",
      openGraph: {
        description: "Browse travel locations in Vietnam with practical tips and insights for solo travelers.",
        url: `https://www.soloinvietnam.com/provinces/${province}`,
        images: [{ url: OG_FALLBACK_IMAGE, width: 1200, height: 630 }],
      },
      alternates: {
        canonical: `https://www.soloinvietnam.com/provinces/${province}`,
      },
    }
  }

  const description = "Browse all travel locations in Vietnam with practical tips and insights for solo travelers."
  return {
    title: "Locations | Solo in Vietnam",
    description,
    openGraph: {
      description,
      url: "https://www.soloinvietnam.com/locations",
      images: [{ url: OG_FALLBACK_IMAGE, width: 1200, height: 630 }],
    },
    alternates: {
      canonical: "https://www.soloinvietnam.com/locations",
    },
  }
}

export default async function LocationsPage({ searchParams }: Props) {
  const params = await searchParams
  const initialProvince = typeof params.province === "string" ? params.province : undefined

  return (
    <Suspense>
      <LocationsClient locations={activeLocations} initialProvince={initialProvince} />
    </Suspense>
  )
}
