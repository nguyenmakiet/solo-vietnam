import { Suspense } from "react"
import { allLocations } from "@/data/all-locations"
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
      alternates: {
        canonical: `https://www.soloinvietnam.com/provinces/${province}`,
      },
    }
  }

  return {
    title: "Locations | Solo in Vietnam",
    description: `${allLocations.length} places across Vietnam — beaches, temples, caves, mountains, markets, and more.`,
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
      <LocationsClient locations={allLocations} initialProvince={initialProvince} />
    </Suspense>
  )
}
