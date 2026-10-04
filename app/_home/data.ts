// Homepage-only data helpers for the "field notebook" homepage experiment.
// Everything here is derived from existing data - nothing is hardcoded about
// locations except the editorial choice of which destinations to feature.

import { allLocations } from "@/data/all-locations"
import { provinces } from "@/data/provinces"
import { destinations, deriveFromLocations } from "@/data/destinations/index"
import { experiences } from "@/data/experiences"
import type { MapDot, MapStop, ProvinceInfo } from "./HomeFieldMap"

// ─── Projection: lat/lng -> @svg-maps/vietnam viewBox (0 0 812 873) ──────────
// The SVG is a Mercator projection. Calibrated on the mainland extremes
// (west 102.144°E -> x 0, east 109.464°E -> x 380.5, north 23.393°N -> y 0,
// south 8.56°N -> y 800); checked against Hanoi, HCMC, Da Nang and Phu Quoc.
const mercY = (lat: number) => Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 360))
const KX = 380.5 / (109.464 - 102.144)
const KY = 800 / (mercY(23.393) - mercY(8.56))

export function project(lat: number, lng: number) {
  return {
    x: Math.round((lng - 102.144) * KX * 10) / 10,
    y: Math.round((mercY(23.393) - mercY(lat)) * KY * 10) / 10,
  }
}

const toNum = (v: number | string) => (typeof v === "number" ? v : parseFloat(v))

// ─── Counts ───────────────────────────────────────────────────────────────────
export const totalPlaces = allLocations.length
/** "264" -> "260+" */
export const placesLabel = `${Math.floor(totalPlaces / 10) * 10}+`

// ─── Map data ─────────────────────────────────────────────────────────────────
export const mapDots: MapDot[] = allLocations.flatMap((l) => {
  const lat = toNum(l.lat)
  const lng = toNum(l.lng)
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return []
  return [project(lat, lng)]
})

export const provinceInfo: Record<string, ProvinceInfo> = Object.fromEntries(
  [...new Set([...provinces.map((p) => p.slug), ...allLocations.flatMap((l) => l.provinces)])].map((slug) => {
    const province = provinces.find((p) => p.slug === slug)
    const locs = allLocations.filter((l) => l.provinces.includes(slug))
    return [
      slug,
      {
        hasGuide: !!province,
        intro: province?.popupIntro,
        count: locs.length,
        top: locs.slice(0, 4).map((l) => ({ slug: l.slug, name: l.name })),
      },
    ]
  })
)

// ─── Featured destinations ───────────────────────────────────────────────────
// Editorial order, north -> south so the map route reads as one journey.
// `note` = where the numbered label sits in the empty sea (SVG units).
const FEATURED: { slug: string; note: { x: number; y: number } }[] = [
  { slug: "ha-giang-loop", note: { x: 436, y: 34 } },
  { slug: "ha-long", note: { x: 436, y: 108 } },
  { slug: "ninh-binh", note: { x: 436, y: 182 } },
  { slug: "phong-nha-ke-bang", note: { x: 436, y: 262 } },
  { slug: "hoi-an", note: { x: 436, y: 342 } },
  { slug: "phu-quoc", note: { x: 6, y: 836 } },
]

// Marker position: the destination's own released locations averaged, so the
// pin sits where the places actually are (not at the province centroid).
function destinationPoint(slug: string) {
  const pts = allLocations
    .filter((l) => l.destination === slug)
    .map((l) => ({ lat: toNum(l.lat), lng: toNum(l.lng) }))
    .filter((p) => Number.isFinite(p.lat) && Number.isFinite(p.lng))
  if (pts.length === 0) return null
  const lat = pts.reduce((s, p) => s + p.lat, 0) / pts.length
  const lng = pts.reduce((s, p) => s + p.lng, 0) / pts.length
  return project(lat, lng)
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

/** [9,10,11] -> "Sep-Nov"; [11,12,1,2] -> "Nov-Feb"; wraps around the year. */
export function formatMonths(months: number[]): string | null {
  const set = new Set(months)
  if (set.size === 0) return null
  if (set.size === 12) return "Year-round"
  // Start each run at a month whose previous month is not included
  const runs: string[] = []
  for (let m = 1; m <= 12; m++) {
    const prev = m === 1 ? 12 : m - 1
    if (!set.has(m) || set.has(prev)) continue
    let end = m
    while (set.has(end === 12 ? 1 : end + 1)) end = end === 12 ? 1 : end + 1
    runs.push(end === m ? MONTHS[m - 1] : `${MONTHS[m - 1]}-${MONTHS[end - 1]}`)
  }
  return runs.join(", ")
}

/** First sentence, capped at `max` characters on a word boundary. */
function shortDescription(text: string, max = 150) {
  const first = text.split(/(?<=[.!?])\s/)[0]
  if (first.length <= max) return first
  return first.slice(0, first.lastIndexOf(" ", max)) + "…"
}

export const featured = FEATURED.flatMap(({ slug, note }, i) => {
  const d = destinations.find((x) => x.slug === slug)
  if (!d) return []
  const derived = deriveFromLocations(slug, allLocations)
  const months = derived.bestMonths.length > 0 ? derived.bestMonths : d.bestMonthsFallback ?? []
  return [
    {
      index: i + 1,
      slug: d.slug,
      name: d.name,
      province: d.province,
      region: d.region,
      tagline: d.tagline,
      description: shortDescription(d.description),
      heroImage: d.heroImage,
      placeCount: derived.locationCount,
      bestMonths: formatMonths(months),
      point: destinationPoint(slug),
      note,
    },
  ]
})

export const mapStops: MapStop[] = featured.flatMap((f) =>
  f.point ? [{ index: f.index, slug: f.slug, name: f.name, ...f.point, note: f.note }] : []
)

// ─── Vibes ────────────────────────────────────────────────────────────────────
const VIBES = [
  { slug: "beaches", accent: "sky" },
  { slug: "trekking", accent: "green" },
  { slug: "camping", accent: "yellow" },
  { slug: "food", accent: "coral" },
] as const

export const vibes = VIBES.flatMap(({ slug, accent }) => {
  const e = experiences.find((x) => x.slug === slug)
  if (!e) return []
  const count = allLocations.filter((l) => l.experiences.includes(e.value)).length
  return [{ slug, accent, label: e.label, tagline: e.tagline, count, href: `/experiences/${slug}` }]
})

/** Swap the Cloudinary size transform on an existing delivery URL. */
export function resizeCloudinary(url: string, w: number, h: number) {
  return url.replace(/w_\d+,h_\d+/, `w_${w},h_${h}`)
}

// ─── Hero photo: a real location, captioned as a field note ─────────────────
const HERO_LOCATION = "ma-pi-leng-pass"
const heroLoc = allLocations.find((l) => l.slug === HERO_LOCATION)
export const heroPhoto = heroLoc?.heroImage
  ? {
      slug: heroLoc.slug,
      name: heroLoc.name,
      province: provinces.find((p) => heroLoc.provinces.includes(p.slug))?.name ?? "",
      image: heroLoc.heroImage,
    }
  : null
