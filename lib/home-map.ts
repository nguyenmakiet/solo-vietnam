// lib/home-map.ts
// Layout of the homepage destination map (components/HomeDestinationMap.tsx):
// /map's Destinations view at its default zoom, drawn as one static SVG.
// Counts come from lib/map-destinations.ts, the same source as /map, so the
// numbers always match. Frame and paths: lib/home-map-geometry.ts (generated).
import { mapDestinations } from "@/lib/map-destinations"
import { FRAME_HEIGHT, FRAME_WIDTH, LAT_NORTH, LNG_WEST, UNITS_PER_DEGREE } from "@/lib/home-map-geometry"

/** lat/lng -> design frame units (Mercator, same as the generated paths) */
export function projectToFrame(lat: number, lng: number): { x: number; y: number } {
  const mercator = (l: number) => Math.log(Math.tan(Math.PI / 4 + (l * Math.PI) / 360))
  return {
    x: (lng - LNG_WEST) * UNITS_PER_DEGREE,
    y: (mercator(LAT_NORTH) - mercator(lat)) * ((UNITS_PER_DEGREE * 180) / Math.PI),
  }
}

// ─── Text metrics ─────────────────────────────────────────────────────────────
// Pill text is IBM Plex Sans 600 at 12 units, measured once in the browser
// (no runtime measuring). A new destination falls back to an estimate; add its
// width here when it joins the map.
const NAME_WIDTHS: Record<string, number> = {
  "Cao Bang": 52.27,
  "Cat Ba": 36.36,
  "Con Dao": 46.09,
  "Da Nang": 46.75,
  "Da Lat": 35.25,
  "Ha Giang": 50.33,
  "Ha Long Bay": 68.34,
  "Hanoi": 32.45,
  "Ho Chi Minh City": 90.94,
  "Hoi An": 36.64,
  "Hue": 22.39,
  "Ly Son": 36.09,
  "Mekong Delta": 75.78,
  "Nha Trang": 56.55,
  "Ninh Binh": 54.25,
  "Phan Thiet": 59.86,
  "Phong Nha – Ke Bang": 118.67,
  "Phu Quoc": 53.16,
  "Pu Luong": 51.17,
  "Sapa": 27.95,
}
const DIGIT_WIDTH = 7.2 // tabular figures
const SEP_WIDTH = 4.2 // "·"

// Pill box, as /map's .map-dest.is-full: 2 border + 10 padding each side,
// 6 gaps around the "·"
export const PILL_HEIGHT = 26
const PILL_PAD = 12
const GAP = 6
export const nameWidth = (name: string) => NAME_WIDTHS[name] ?? name.length * 6.6
export const countWidth = (count: number) => String(count).length * DIGIT_WIDTH

// ─── Tiers and layout ─────────────────────────────────────────────────────────
// Same rules as /map at its default zoom (layoutBubbles in app/map/MapClient.tsx):
// tier 1 (mapPriority 1) gets a named pill, tiers 2-3 a count circle, or a dot
// where a circle would collide. Tier-1 points within GROUP_DISTANCE share one
// pill ("Da Nang 7 · Hoi An 8").
const GROUP_DISTANCE = 12
export const COMPACT_RADIUS = 12
export const DOT_RADIUS = 6

/**
 * Pill offsets and circle/dot choice, from /map's layoutBubbles() run once at
 * this frame (labels next to their point; leaders 10 / 24 / 40 units, east
 * first), then nudged by hand where the frame differs from /map: Hoang Sa and
 * the Truong Sa inset are obstacles here, Ho Chi Minh City needs a name, and
 * no leader may exceed 40 units. (dx, dy) = pill centre from its point; 0 / 0 =
 * pill on its point, no leader. Keyed by the first (highest-ranked) slug of a
 * shared pill. Not listed: tier 1 -> pill on its point, others -> circle.
 */
export const HOME_MAP_LAYOUT: Record<string, { pill?: { dx: number; dy: number }; mark?: "count" | "dot" }> = {
  "ha-giang": { pill: { dx: -24, dy: 0 } },
  "sapa": { pill: { dx: 0, dy: 2 } },
  "ha-noi": { pill: { dx: 22, dy: -27 } },
  "ha-long": { pill: { dx: 67.9, dy: 0 } },
  "hue": { pill: { dx: 12, dy: -23 } },
  "da-nang": { pill: { dx: -82.1, dy: 20.1 } },
  "nha-trang": { pill: { dx: 65.6, dy: 0 } },
  "da-lat": { pill: { dx: 0, dy: -53 } },
  "mui-ne": { pill: { dx: 63.5, dy: 0 } },
  "ho-chi-minh-city": { pill: { dx: -43, dy: -23 } },
  "phu-quoc": { pill: { dx: -4, dy: 23 } },
  "cao-bang": { mark: "dot" },
  "cat-ba": { mark: "dot" },
  "pu-luong": { mark: "dot" },
  "ninh-binh": { mark: "count" },
  "phong-nha-ke-bang": { mark: "count" },
  "ly-son": { mark: "count" },
  "mekong-delta": { mark: "dot" },
  "con-dao": { mark: "count" },
}

export type HomeMapPlace = { slug: string; name: string; count: number; x: number; y: number }

export type HomeMapPill = {
  kind: "pill"
  places: HomeMapPlace[]
  /** Pill box (frame units) */
  x: number
  y: number
  width: number
  /** Leader lines from each point to the pill centre; empty when the pill sits on its point */
  leaders: { x1: number; y1: number; x2: number; y2: number }[]
}

export type HomeMapMark = { kind: "count" | "dot"; place: HomeMapPlace }

export { FRAME_HEIGHT, FRAME_WIDTH }

/** Pill text layout: x of each piece from the pill's left edge */
export function pillText(places: HomeMapPlace[]) {
  const single = places.length === 1
  let x = PILL_PAD
  return places.map((place, i) => {
    // Shared pill: "Da Nang 7 · Hoi An 8"; single: "Sapa · 4"
    let joinX: number | null = null
    if (i > 0) { x += GAP; joinX = x; x += SEP_WIDTH + GAP }
    const nameX = x
    x += nameWidth(place.name) + GAP
    let sepX: number | null = null
    if (single) { sepX = x; x += SEP_WIDTH + GAP }
    const countX = x
    x += countWidth(place.count)
    return { place, joinX, nameX, sepX, countX }
  })
}

const pillWidth = (places: HomeMapPlace[]) => {
  const t = pillText(places)
  const last = t[t.length - 1]
  return last.countX + countWidth(last.place.count) + PILL_PAD
}

/** Pills, circles and dots, north to south (reading and tab order) */
export function buildHomeMap(): (HomeMapPill | HomeMapMark)[] {
  const ranked = [...mapDestinations].sort((a, b) =>
    (a.rank ?? Infinity) - (b.rank ?? Infinity) || a.priority - b.priority || b.count - a.count)
  const places = new Map(ranked.map((d) => [d.slug, { slug: d.slug, name: d.name, count: d.count, ...projectToFrame(d.lat, d.lng) }]))

  // Shared pills: a tier-1 point within GROUP_DISTANCE of a higher-ranked one joins its pill
  const groupOf = new Map<string, string[]>()
  const joined = new Set<string>()
  for (const d of ranked) {
    if (d.priority !== 1 || joined.has(d.slug)) continue
    const p = places.get(d.slug)!
    const group = [d.slug]
    for (const o of ranked) {
      if (o === d || o.priority !== 1 || joined.has(o.slug) || groupOf.has(o.slug)) continue
      const q = places.get(o.slug)!
      if (Math.hypot(q.x - p.x, q.y - p.y) <= GROUP_DISTANCE) { group.push(o.slug); joined.add(o.slug) }
    }
    groupOf.set(d.slug, group)
  }

  const items: (HomeMapPill | HomeMapMark)[] = []
  for (const d of ranked) {
    if (joined.has(d.slug)) continue
    const place = places.get(d.slug)!
    const config = HOME_MAP_LAYOUT[d.slug]
    if (d.priority === 1) {
      const members = groupOf.get(d.slug)!.map((slug) => places.get(slug)!)
      const { dx, dy } = config?.pill ?? { dx: 0, dy: 0 }
      const width = pillWidth(members)
      const cx = place.x + dx
      const cy = place.y + dy
      items.push({
        kind: "pill",
        places: members,
        x: cx - width / 2,
        y: cy - PILL_HEIGHT / 2,
        width,
        leaders: dx === 0 && dy === 0 ? [] : members.map((m) => ({ x1: m.x, y1: m.y, x2: cx, y2: cy })),
      })
    } else {
      items.push({ kind: config?.mark ?? "count", place })
    }
  }
  const y = (item: HomeMapPill | HomeMapMark) => (item.kind === "pill" ? item.places[0].y : item.place.y)
  return items.sort((a, b) => y(a) - y(b))
}

// ─── Desktop list ─────────────────────────────────────────────────────────────
// The same destinations as a list beside the map, grouped and ordered like
// /map's desktop panel: North, Central, South, north to south within each
const REGIONS = [
  { region: "north", label: "North" },
  { region: "central", label: "Central" },
  { region: "south", label: "South" },
] as const

export type HomeMapListGroup = { label: string; items: { slug: string; name: string; count: number }[] }

export function buildHomeMapList(): HomeMapListGroup[] {
  return REGIONS.map(({ region, label }) => ({
    label,
    items: mapDestinations
      .filter((d) => d.region === region)
      .sort((a, b) => b.lat - a.lat)
      .map((d) => ({ slug: d.slug, name: d.name, count: d.count })),
  })).filter((g) => g.items.length > 0)
}

/** Every destination slug on the map (for the linked-highlight rules) */
export const homeMapSlugs = () => mapDestinations.map((d) => d.slug)
