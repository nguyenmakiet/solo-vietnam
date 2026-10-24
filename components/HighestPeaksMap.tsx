import type { Location } from "@/data/location"
import { fansipan } from "@/data/locations/fansipan"
import { puSiLungMountain } from "@/data/locations/pu-si-lung-mountain"
import { puTaLengMountain } from "@/data/locations/pu-ta-leng-mountain"
import { kyQuanSanMountain } from "@/data/locations/ky-quan-san-mountain"
import { khangSuVanMountain } from "@/data/locations/khang-su-van-mountain"
import { taLienSonMountain } from "@/data/locations/ta-lien-son-mountain"
import { taChiNhuMountain } from "@/data/locations/ta-chi-nhu-mountain"
import { poMaLungMountain } from "@/data/locations/po-ma-lung-mountain"
import { nhiuCoSanMountain } from "@/data/locations/nhiu-co-san-mountain"
import { chungNhiaVuMountain } from "@/data/locations/chung-nhia-vu-mountain"
import { PEAK_CLUSTER_RANKS, VIETNAM_HIGHEST_PEAKS } from "@/data/blog/vietnam-highest-peaks"
import NumberedPointsMap, { type NumberedPoint } from "@/components/NumberedPointsMap"

// Blog map: <HighestPeaksMap />. Server component - it reads the location
// files here and hands the client map only the ten small point objects, so
// the location data never ships in the page bundle.

const LOCATIONS: Location[] = [
  fansipan, puSiLungMountain, puTaLengMountain, kyQuanSanMountain, khangSuVanMountain,
  taLienSonMountain, taChiNhuMountain, poMaLungMountain, nhiuCoSanMountain, chungNhiaVuMountain,
]

const provinceLabel = (slug: string) => slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())

export default function HighestPeaksMap() {
  const bySlug = new Map(LOCATIONS.map((l) => [l.slug, l]))
  const points: NumberedPoint[] = VIETNAM_HIGHEST_PEAKS.flatMap((peak) => {
    const loc = bySlug.get(peak.slug)
    if (!loc || typeof loc.lat !== "number" || typeof loc.lng !== "number") return []
    return [{
      n: peak.rank,
      slug: loc.slug,
      name: loc.name,
      detail: `${peak.elevation.toLocaleString("en-US")} m`,
      province: loc.provinces.map(provinceLabel).join(" / "),
      lat: loc.lat,
      lng: loc.lng,
      offset: peak.markerOffset,
    }]
  })
  return (
    <NumberedPointsMap
      points={points}
      focus={PEAK_CLUSTER_RANKS}
      label="Map of Vietnam's 10 highest peaks"
      allLabel="Show all 10 peaks"
      focusLabel="Zoom to the Sa Pa cluster"
    />
  )
}
