import { Suspense } from "react"
import { activeLocations } from "@/data/all-locations"
import LocationsClient from "./LocationsClient"

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
    openGraph: { description },
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
