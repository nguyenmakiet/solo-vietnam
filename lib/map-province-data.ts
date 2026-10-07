// Server-side summary for <VietnamMap>: keeps allLocations / provinces out of
// the client bundle (they are several MB of JS).
import { provinces } from "@/data/provinces"
import { allLocations } from "@/data/all-locations"
import type { MapProvinceData } from "@/components/VietnamMap"

export function buildMapProvinceData(): MapProvinceData {
  const data: MapProvinceData = {}
  const slugs = new Set([...provinces.map((p) => p.slug), ...allLocations.flatMap((l) => l.provinces)])
  for (const slug of slugs) {
    const province = provinces.find((p) => p.slug === slug)
    const locs = allLocations.filter((l) => l.provinces.includes(slug))
    data[slug] = {
      guide: province ? { region: province.region, popupIntro: province.popupIntro } : undefined,
      count: locs.length,
      top: locs.slice(0, 4).map((l) => ({ slug: l.slug, name: l.name })),
    }
  }
  return data
}
