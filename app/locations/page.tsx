import { Suspense } from "react"
import { activeLocations } from "@/data/all-locations"
import LocationsClient from "./LocationsClient"
import { isFilterableTag, type LocationCard } from "./location-card"
import type { Location } from "@/data/location"
import { tagDisplayLabel } from "@/data/taxonomy/tags"
import { releasedBestMonths } from "@/data/best-months-release"
import { provinces } from "@/data/provinces"
import { OG_FALLBACK_IMAGE } from "@/lib/cloudinary"

function truncate(str: string, max: number): string {
  return str.length > max ? str.slice(0, max - 1) + "…" : str
}

// null = no real photo yet; the card shows PhotoPlaceholder instead of artwork
function cardImageUrl(heroImage: string | undefined): string | null {
  if (!heroImage || heroImage.includes("placeholder")) return null
  return heroImage.replace("w_1200,h_630,c_fill", "w_600,h_400,c_fill")
}

// Region comes from data/provinces.ts - the single source for province -> region
const PROVINCE_REGION = new Map(provinces.map((p) => [p.slug, p.region]))

function toLocationCard(loc: Location): LocationCard {
  return {
    slug: loc.slug,
    name: loc.name,
    types: Array.isArray(loc.type) ? [...loc.type] : [loc.type],
    categories: [...(loc.categories ?? [])],
    experiences: [...loc.experiences],
    tags: loc.tags.filter(isFilterableTag),
    provinces: [...loc.provinces],
    region: loc.provinces.map((p) => PROVINCE_REGION.get(p)).find((r) => r !== undefined) ?? null,
    months: releasedBestMonths(loc),
    image: cardImageUrl(loc.heroImage),
    subtitle: loc.tags[0] ? tagDisplayLabel(loc.tags[0]) : truncate(loc.seoDescription, 70),
  }
}

// Card data built on the server; the full Location content never reaches the client
const locationCards: LocationCard[] = activeLocations.map(toLocationCard)

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
      <LocationsClient locations={locationCards} initialProvince={initialProvince} />
    </Suspense>
  )
}
