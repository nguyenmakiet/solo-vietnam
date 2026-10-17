// lib/home-map.ts
// Data for the homepage destination map (components/HomeDestinationMap.tsx):
// one pill per destination over a static outline of Vietnam
// (public/maps/vietnam-outline.svg, made by scripts/build-home-map-outline.ts).
// Counts come from lib/map-destinations.ts, the same source as /map's
// Destinations view, so the numbers always match.
import { mapDestinations } from "@/lib/map-destinations"

/** The outline SVG's coordinate space (viewBox of @svg-maps/vietnam) */
export const OUTLINE_WIDTH = 812
export const OUTLINE_HEIGHT = 873

// The @svg-maps/vietnam source is a Mercator projection. Fitted on Vietnam's
// extreme points (Lung Cu, A Pa Chai, Mui Doi, Ca Mau cape) and checked on
// Phu Quoc: residuals are <= 2 units (~1px on the homepage canvas)
const X_PER_DEGREE = 51.893
const X_OFFSET = -5299.63
const Y_PER_MERCATOR = 2961.443
const Y_OFFSET = 1244.19

/** lat/lng -> outline coordinates (0-812, 0-873) */
export function projectToOutline(lat: number, lng: number): { x: number; y: number } {
  const mercator = Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 360))
  return { x: X_PER_DEGREE * lng + X_OFFSET, y: Y_OFFSET - Y_PER_MERCATOR * mercator }
}

/**
 * Hand-tuned pill positions, north to south: the pill's centre sits (dx, dy)
 * outline units from its destination's dot (the first member's dot for a
 * shared pill); any offset draws a leader line. Pills keep a fixed px size
 * while the map scales, so the tightest case is the smallest canvas: tuned so
 * that from a 334px canvas (360px phone) to 520px no pill overlaps another
 * pill's 32px tap area, a dot, Hoang Sa / Truong Sa or the canvas edge, and no
 * leader line crosses another or runs under a pill. Below 420px the pills use
 * smaller text (app/homepage.css). After moving a pill, recheck every width.
 * A destination not listed here gets DEFAULT_LABEL_OFFSET.
 */
export const HOME_MAP_LABELS: Record<string, { dx: number; dy: number }> = {
  "ha-giang": { dx: 513, dy: 19 },
  "cao-bang": { dx: 54, dy: 17 },
  "sapa": { dx: -10, dy: 22 },
  "ha-noi": { dx: 270, dy: -55 },
  "ha-long": { dx: 177, dy: 20 },
  "pu-luong": { dx: -50, dy: 58 },
  "ninh-binh": { dx: 134, dy: 60 },
  "phong-nha-ke-bang": { dx: -44, dy: 140 },
  "hue": { dx: 18, dy: -35 },
  "da-nang": { dx: 212, dy: -76 },
  "ly-son": { dx: 71, dy: 19 },
  "nha-trang": { dx: 109, dy: -23 },
  "da-lat": { dx: -60, dy: -39 },
  "phan-thiet": { dx: 143, dy: -7 },
  "ho-chi-minh-city": { dx: -85, dy: -21 },
  "phu-quoc": { dx: 19, dy: 117 },
  "mekong-delta": { dx: 77, dy: 25 },
  "con-dao": { dx: 89, dy: 32 },
}

// To the right of the dot, about half a pill away
const DEFAULT_LABEL_OFFSET = { dx: 150, dy: 0 }

/** Close pairs that share one pill ("Da Nang 7 · Hoi An 8"), each name its own link */
const SHARED_PILLS: string[][] = [
  ["ha-long", "cat-ba"],
  ["da-nang", "hoi-an"],
]

export type HomeMapPlace = {
  slug: string
  name: string
  count: number
  /** Dot position, % of the canvas */
  left: number
  top: number
}

export type HomeMapPill = {
  key: string
  places: HomeMapPlace[]
  /** Pill centre, % of the canvas */
  left: number
  top: number
  /** Leader lines from each dot to the pill centre, in outline units */
  lines: { x1: number; y1: number; x2: number; y2: number }[]
}

const pct = (v: number, of: number) => Math.round((v / of) * 10000) / 100

/** Every destination with coordinates and >= 1 active location, north to south */
export function buildHomeMapPills(): HomeMapPill[] {
  const bySlug = new Map(mapDestinations.map((d) => [d.slug, d]))
  const grouped = new Set(SHARED_PILLS.flat())
  const groups = [
    ...SHARED_PILLS.map((g) => g.filter((slug) => bySlug.has(slug))).filter((g) => g.length > 0),
    ...mapDestinations.filter((d) => !grouped.has(d.slug)).map((d) => [d.slug]),
  ]

  // North to south: the list order is the reading and tab order
  const lat = (slugs: string[]) => bySlug.get(slugs[0])!.lat
  return groups
    .sort((a, b) => lat(b) - lat(a))
    .map((slugs) => {
      const points = slugs.map((slug) => {
        const d = bySlug.get(slug)!
        return { d, ...projectToOutline(d.lat, d.lng) }
      })
      const { dx, dy } = HOME_MAP_LABELS[slugs[0]] ?? DEFAULT_LABEL_OFFSET
      const cx = points[0].x + dx
      const cy = points[0].y + dy
      return {
        key: slugs.join("+"),
        places: points.map(({ d, x, y }) => ({
          slug: d.slug,
          name: d.name,
          count: d.count,
          left: pct(x, OUTLINE_WIDTH),
          top: pct(y, OUTLINE_HEIGHT),
        })),
        left: pct(cx, OUTLINE_WIDTH),
        top: pct(cy, OUTLINE_HEIGHT),
        lines: dx === 0 && dy === 0 && points.length === 1
          ? []
          : points.map(({ x, y }) => ({ x1: x, y1: y, x2: cx, y2: cy })),
      }
    })
}
