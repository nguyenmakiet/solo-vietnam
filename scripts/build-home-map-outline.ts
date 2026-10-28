/**
 * scripts/build-home-map-outline.ts
 *
 * Generates the region geometry of the Vietnam maps. Run via:
 *   npm run build:home-map-outline
 *
 * Outputs (both committed; rerun only to change the frame, the look or the
 * simplification):
 * - lib/home-map-geometry.ts: frame, projection and path data of the homepage
 *   destination map (components/HomeDestinationMap.tsx).
 * - public/data/vn-regions-2025.geojson: the North / Central / South fill
 *   layer of the Leaflet maps (components/map-shared.tsx).
 *
 * - Vietnam: public/data/vn-provinces-2025.geojson (34 post-2025 provinces,
 *   one consistent source, so neighbouring provinces share their borders
 *   exactly). Each province gets its region from data/provinces.ts (the
 *   pre-merger provinces it absorbed are all in one region), then the
 *   provinces are dissolved into three regions. One topology for all three:
 *   region borders and the coastline are simplified once, so the regions
 *   never gap or overlap.
 * - Hoang Sa and Truong Sa lie far out at sea: each is drawn in an inset box
 *   - Hoang Sa at the right edge level with its real latitude, Truong Sa in the
 *   empty south-east corner - instead of widening the frame.
 * - Neighbours (Laos, Cambodia, Thailand, Myanmar, China incl. Hainan): faint
 *   context from world-atlas (Natural Earth 10m), clipped to the frame. China
 *   is clipped north of 17.9N so no other claim is drawn over Hoang Sa.
 *
 * Everything on the homepage map is projected (Mercator) into one design
 * frame, 360 units wide: 1 unit ~ 1px on a 360px phone.
 */

import fs from "fs"
import path from "path"
import { provinces } from "../data/provinces"
// No type declarations for mapshaper; only applyCommands is used
// eslint-disable-next-line @typescript-eslint/no-require-imports
const mapshaper = require("mapshaper") as {
  applyCommands: (cmd: string, input: Record<string, unknown>) => Promise<Record<string, string>>
}

type Pt = [number, number]
type Region = "north" | "central" | "south"
const REGIONS: Region[] = ["north", "central", "south"]

const SOURCE = path.join(process.cwd(), "public/data/vn-provinces-2025.geojson")
const OUT = path.join(process.cwd(), "lib/home-map-geometry.ts")
const OUT_GEOJSON = path.join(process.cwd(), "public/data/vn-regions-2025.geojson")
// Read as text: mapshaper modifies an input object in place, so every call
// gets a fresh copy
const countries10m = fs.readFileSync(require.resolve("world-atlas/countries-10m.json"), "utf8")

// ─── Design frame ─────────────────────────────────────────────────────────────
// West edge just past A Pa Chai, east edge just past Hoang Sa; top above Lung
// Cu, bottom below Con Dao / Ca Mau. Vietnam fills the height. The markers
// (lib/home-map.ts) are projected with the same constants
const FRAME_WIDTH = 360
const LNG_WEST = 101.9
const LNG_EAST = 113.2
const LAT_NORTH = 23.67 // leaves 6 units above the Ha Giang pill
const LAT_SOUTH = 8.2
const UNITS_PER_DEGREE = FRAME_WIDTH / (LNG_EAST - LNG_WEST)
const UNITS_PER_MERCATOR = (UNITS_PER_DEGREE * 180) / Math.PI
const mercator = (lat: number) => Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 360))
const FRAME_HEIGHT = Math.round((mercator(LAT_NORTH) - mercator(LAT_SOUTH)) * UNITS_PER_MERCATOR)
const project = ([lng, lat]: Pt): Pt => [(lng - LNG_WEST) * UNITS_PER_DEGREE, (mercator(LAT_NORTH) - mercator(lat)) * UNITS_PER_MERCATOR]

// Archipelagos: every ring east of this longitude (Bach Long Vi, Con Dao and
// Ly Son are all well west of it)
const ARCHIPELAGO_LNG = 110.5
const HOANG_SA_MIN_LAT = 14
// Archipelago insets, at a share of the frame scale
const TRUONG_SA_SCALE = 0.32 // bottom-right corner
const HOANG_SA_SCALE = 0.8 // right edge, centred on its real latitude
const HOANG_SA_LAT = 16.4
const INSET_MARGIN = 6
const INSET_PAD = 5

// Simplification by distance, not by share of points: Visvalingam (weighted)
// with a minimum interval in metres. 1 frame unit ~ 3.5 km, so 600 m keeps
// detail down to ~0.2 units - smooth at 2x/3x screens, still compact
const SIMPLIFY_HOME = "interval=600"
// The Leaflet layer is seen zoomed in: only a light pass on the source
const SIMPLIFY_LEAFLET = "interval=60"
// Neighbours are faint context: coarser
const SIMPLIFY_NEIGHBOURS = "interval=3000"
// Rings smaller than this (square frame units) are specks: drawn with a
// stroke as well, so they stay visible
const ISLAND_AREA = 1.5

// ─── Province -> region ───────────────────────────────────────────────────────
// Each 2025 province is named after one of the pre-merger provinces it
// absorbed; that province's region (data/provinces.ts) is the region of the
// whole merged unit. Aliases: source names that differ from the slug
const NAME_TO_SLUG: Record<string, string> = {
  Hanoi: "ha-noi",
  Haiphong: "hai-phong",
  "Ho Chi Minh": "ho-chi-minh-city",
}
const slugify = (name: string) => name.toLowerCase().replace(/\s+/g, "-")
const regionBySlug = new Map(provinces.map((p) => [p.slug, p.region]))

type Geometry = { type: string; coordinates: unknown } | null
type Feature = { type: "Feature"; properties: Record<string, unknown>; geometry: Geometry }
type Geo = { features?: Feature[]; geometries?: Geometry[] }

const polygonsOf = (g: Geometry): Pt[][][] =>
  !g ? [] : g.type === "MultiPolygon" ? (g.coordinates as Pt[][][]) : g.type === "Polygon" ? [g.coordinates as Pt[][]] : []
/** Polygon / MultiPolygon features (or a GeometryCollection) -> their rings */
const geoRings = (geo: Geo): Pt[][] =>
  (geo.features ? geo.features.map((f) => f.geometry) : geo.geometries ?? []).flatMap((g) => polygonsOf(g).flat())

const area = (r: Pt[]) =>
  Math.abs(r.reduce((a, p, i) => { const q = r[(i + 1) % r.length]; return a + p[0] * q[1] - q[0] * p[1] }, 0)) / 2

// A speck at this scale (drawn with a stroke): a few evenly spaced points of
// its outline are enough
const ISLAND_POINTS = 6
function thinRing(r: Pt[]): Pt[] {
  if (r.length <= ISLAND_POINTS) return r
  const step = r.length / ISLAND_POINTS
  return Array.from({ length: ISLAND_POINTS }, (_, i) => r[Math.floor(i * step)])
}

/** Rings in design units -> compact relative path data (0.1 precision) */
function toPath(rings: Pt[][]): string {
  return rings
    .map((ring) => {
      // GeoJSON rings repeat the first point at the end; "z" closes the path
      const pts = ring.length > 1 && ring[0][0] === ring[ring.length - 1][0] && ring[0][1] === ring[ring.length - 1][1] ? ring.slice(0, -1) : ring
      const start: Pt = [Math.round(pts[0][0] * 10) / 10, Math.round(pts[0][1] * 10) / 10]
      let prev = start
      const steps: string[] = []
      for (const p of pts.slice(1)) {
        const dx = Math.round((p[0] - prev[0]) * 10) / 10
        const dy = Math.round((p[1] - prev[1]) * 10) / 10
        if (dx === 0 && dy === 0) continue
        steps.push(`${dx} ${dy}`)
        prev = [prev[0] + dx, prev[1] + dy]
      }
      // A speck whose steps all round to 0: a bare "l" would be invalid path
      // data and stop the browser drawing the rest. A 0.1 step keeps it a dot
      if (steps.length === 0) steps.push("0.1 0")
      return `M${start[0]} ${start[1]}l${steps.join(" ").replace(/ -/g, "-")}z`
    })
    .join("")
}

async function main() {
  // ── Vietnam: provinces tagged with their region, archipelagos split off ──
  const source = JSON.parse(fs.readFileSync(SOURCE, "utf8")) as { features: Feature[] }
  const hoangSa: Pt[][] = []
  const truongSa: Pt[][] = []
  const tagged = source.features.map((f) => {
    const name = String(f.properties.nameEn)
    const region = regionBySlug.get(NAME_TO_SLUG[name] ?? slugify(name))
    if (!region) throw new Error(`No region for province "${name}": add it to NAME_TO_SLUG`)
    return { region, polys: polygonsOf(f.geometry) }
  })
  const feature = (region: Region, polys: Pt[][][]): Feature =>
    ({ type: "Feature", properties: { region }, geometry: { type: "MultiPolygon", coordinates: polys } })
  // The Leaflet maps show the archipelagos in place; the homepage map draws
  // them in insets
  const everything = tagged.map(({ region, polys }) => feature(region, polys))
  const mainland = tagged.map(({ region, polys }) => feature(region, polys.filter((poly) => {
    const outer = poly[0]
    const lng = outer.reduce((s, p) => s + p[0], 0) / outer.length
    if (lng < ARCHIPELAGO_LNG) return true
    const lat = outer.reduce((s, p) => s + p[1], 0) / outer.length
    ;(lat > HOANG_SA_MIN_LAT ? hoangSa : truongSa).push(outer)
    return false
  })))
  // dissolve: one shape per region, internal province borders dropped;
  // keep-shapes: islands (Phu Quoc, Cat Ba, Con Dao...) are not simplified away
  const dissolve = async (features: Feature[], simplify: string) => JSON.parse((await mapshaper.applyCommands(
    `-i vn.json -dissolve region -simplify ${simplify} weighted keep-shapes -o out.json format=geojson precision=0.0001`,
    { "vn.json": { type: "FeatureCollection", features: JSON.parse(JSON.stringify(features)) } },
  ))["out.json"]) as { features: Feature[] }

  // ── Leaflet layer (lng/lat) ──
  const leaflet = await dissolve(everything, SIMPLIFY_LEAFLET)
  for (const r of REGIONS) {
    if (!leaflet.features.some((f) => f.properties.region === r)) throw new Error(`Region "${r}" missing`)
  }
  const geojson = JSON.stringify({ type: "FeatureCollection", features: leaflet.features.map((f) => ({ type: "Feature", properties: { region: f.properties.region }, geometry: f.geometry })) })
  fs.writeFileSync(OUT_GEOJSON, geojson + "\n")

  // ── Homepage map (frame units) ──
  const home = await dissolve(mainland, SIMPLIFY_HOME)
  const regionPaths = Object.fromEntries(REGIONS.map((r) => {
    const polys = home.features.filter((f) => f.properties.region === r).flatMap((f) => polygonsOf(f.geometry)).map((poly) => poly.map((ring) => ring.map(project)))
    // Holes (lakes) stay in the land path, or are dropped when too small to see
    const land = polys.flatMap(([outer, ...holes]) => area(outer) >= ISLAND_AREA ? [outer, ...holes.filter((h) => area(h) >= ISLAND_AREA)] : [])
    const islands = polys.filter(([outer]) => area(outer) < ISLAND_AREA).map(([outer]) => thinRing(outer))
    return [r, { land: toPath(land), islands: toPath(islands) }]
  })) as Record<Region, { land: string; islands: string }>

  // ── Archipelago insets ──
  /** Rings (lng/lat) -> inset box + rings at `scale`, placed by `place(w, h)` */
  const inset = (src: Pt[][], scale: number, place: (w: number, h: number) => Pt) => {
    const ll = src.map(thinRing)
    const all = ll.flat()
    const minLng = Math.min(...all.map((p) => p[0]))
    const maxLng = Math.max(...all.map((p) => p[0]))
    const minLat = Math.min(...all.map((p) => p[1]))
    const maxLat = Math.max(...all.map((p) => p[1]))
    const k = UNITS_PER_DEGREE * scale
    const kM = UNITS_PER_MERCATOR * scale
    const width = (maxLng - minLng) * k + 2 * INSET_PAD
    const height = (mercator(maxLat) - mercator(minLat)) * kM + 2 * INSET_PAD
    const [x, y] = place(width, height)
    const rings = ll.map((r) => r.map(([lng, lat]): Pt => [
      x + INSET_PAD + (lng - minLng) * k,
      y + INSET_PAD + (mercator(maxLat) - mercator(lat)) * kM,
    ]))
    return { box: { x, y, width, height }, rings }
  }
  const truongSaInset = inset(truongSa, TRUONG_SA_SCALE, (w, h) => [FRAME_WIDTH - INSET_MARGIN - w, FRAME_HEIGHT - INSET_MARGIN - h])
  const hoangSaInset = inset(hoangSa, HOANG_SA_SCALE, (w, h) => [FRAME_WIDTH - INSET_MARGIN - w, project([0, HOANG_SA_LAT])[1] - h / 2])

  // ── Neighbours ──
  // China is kept north of 17.9N only (Hainan's south tip is 18.2N): no other
  // claim is drawn over Hoang Sa
  const neighbours = [
    { names: ["Laos", "Cambodia", "Thailand", "Myanmar"], south: LAT_SOUTH - 1 },
    { names: ["China"], south: 17.9 },
  ]
  const neighbourRings: Pt[][] = []
  for (const { names, south } of neighbours) {
    const out = await mapshaper.applyCommands(
      [
        "-i world.json",
        "-target countries",
        `-filter "${JSON.stringify(names).replace(/"/g, "'")}.indexOf(name) > -1"`,
        // Repair first: China's polygon does not survive -clip otherwise.
        // Simplify after -clean, which would drop the simplification
        "-clean",
        `-simplify ${SIMPLIFY_NEIGHBOURS} weighted keep-shapes`,
        `-clip bbox=${LNG_WEST - 1},${south},${LNG_EAST + 1},${LAT_NORTH + 1}`,
        "-o out.json format=geojson precision=0.0001",
      ].join(" "),
      { "world.json": countries10m },
    )
    // Islets of the neighbours add nothing to faint context
    neighbourRings.push(...geoRings(JSON.parse(out["out.json"])).map((r) => r.map(project)).filter((r) => area(r) >= ISLAND_AREA * 4))
  }

  const r1 = (n: number) => Math.round(n * 10) / 10
  const box = (b: { x: number; y: number; width: number; height: number }) =>
    `{ x: ${r1(b.x)}, y: ${r1(b.y)}, width: ${r1(b.width)}, height: ${r1(b.height)} }`
  const ts = `// Generated by scripts/build-home-map-outline.ts - do not edit by hand.
// Frame, projection and paths of the homepage destination map
// (components/HomeDestinationMap.tsx). Rerun: npm run build:home-map-outline

/** Design frame: 1 unit ~ 1px on a 360px-wide phone */
export const FRAME_WIDTH = ${FRAME_WIDTH}
export const FRAME_HEIGHT = ${FRAME_HEIGHT}

// Mercator, west edge ${LNG_WEST}E, north edge ${LAT_NORTH}N
export const LNG_WEST = ${LNG_WEST}
export const LAT_NORTH = ${LAT_NORTH}
export const UNITS_PER_DEGREE = ${UNITS_PER_DEGREE}

export type MapRegion = "north" | "central" | "south"

/**
 * Vietnam by region (provinces: data/provinces.ts). land: mainland and larger
 * islands, one shape per region; islands: small islands, drawn with a stroke
 * so they stay visible
 */
export const REGION_PATHS: Record<MapRegion, { land: string; islands: string }> = {
${REGIONS.map((r) => `  ${r}: {\n    land: "${regionPaths[r].land}",\n    islands: "${regionPaths[r].islands}",\n  },`).join("\n")}
}

/** Hoang Sa and Truong Sa (Central), each drawn in an inset box (own scale) */
export const HOANG_SA_INSET = ${box(hoangSaInset.box)}
export const HOANG_SA_PATH = "${toPath(hoangSaInset.rings)}"
export const TRUONG_SA_INSET = ${box(truongSaInset.box)}
export const TRUONG_SA_PATH = "${toPath(truongSaInset.rings)}"

/** Laos, Cambodia, Thailand, south China: faint context (Natural Earth 10m) */
export const NEIGHBOURS_PATH = "${toPath(neighbourRings)}"
`
  fs.writeFileSync(OUT, ts)
  console.log(`Wrote ${path.relative(process.cwd(), OUT)}: ${(ts.length / 1024).toFixed(1)} KB, frame ${FRAME_WIDTH} x ${FRAME_HEIGHT}, ${hoangSaInset.rings.length} Hoang Sa + ${truongSaInset.rings.length} Truong Sa rings, ${neighbourRings.length} neighbour rings`)
  console.log(`Wrote ${path.relative(process.cwd(), OUT_GEOJSON)}: ${(geojson.length / 1024).toFixed(1)} KB`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
