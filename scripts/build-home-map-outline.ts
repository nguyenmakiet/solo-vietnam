/**
 * scripts/build-home-map-outline.ts
 *
 * Generates lib/home-map-geometry.ts: the frame, projection and path data of
 * the homepage destination map (components/HomeDestinationMap.tsx). Run via:
 *   npm run build:home-map-outline
 *
 * - Vietnam: the 65 province paths of @svg-maps/vietnam, flattened to
 *   polygons, merged into one shape (internal boundaries dropped) and
 *   simplified with mapshaper.
 * - Hoang Sa and Truong Sa lie far out at sea (the source also draws Hoang Sa
 *   ~1 degree east of its real place): each is drawn in an inset box - Hoang
 *   Sa at the right edge level with its real latitude, Truong Sa in the empty
 *   south-east corner - instead of widening the frame.
 * - Neighbours (Laos, Cambodia, Thailand, China incl. Hainan): faint context
 *   from world-atlas (Natural Earth 50m), clipped to the frame. China is
 *   clipped north of 17.9N so no other claim is drawn over Hoang Sa.
 *
 * Everything is projected (Mercator) into one design frame, 360 units wide:
 * 1 unit ~ 1px on a 360px phone. The output is committed; rerun only to change
 * the frame, the look or the simplification.
 */

import fs from "fs"
import path from "path"
import VietnamMod from "@svg-maps/vietnam"
// No type declarations for mapshaper; only applyCommands is used
// eslint-disable-next-line @typescript-eslint/no-require-imports
const mapshaper = require("mapshaper") as {
  applyCommands: (cmd: string, input: Record<string, unknown>) => Promise<Record<string, string>>
}
// Read as text: mapshaper modifies an input object in place, so every call
// gets a fresh copy
const countries50m = fs.readFileSync(require.resolve("world-atlas/countries-50m.json"), "utf8")

type Pt = [number, number]
const Vietnam = (VietnamMod as unknown as { default?: typeof VietnamMod }).default ?? VietnamMod
const { locations } = Vietnam as { locations: { id: string; path: string }[] }

// ─── Source projection ────────────────────────────────────────────────────────
// @svg-maps/vietnam is a Mercator map in its own 812 x 873 space. Fitted on
// Vietnam's extreme points (Lung Cu, A Pa Chai, Mui Doi, Ca Mau cape), checked
// on Phu Quoc: residuals <= 2 units
const SRC_X_PER_DEGREE = 51.893
const SRC_X_OFFSET = -5299.63
const SRC_Y_PER_MERCATOR = 2961.443
const SRC_Y_OFFSET = 1244.19
const mercator = (lat: number) => Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 360))
const srcToLngLat = ([x, y]: Pt): Pt => {
  const m = (SRC_Y_OFFSET - y) / SRC_Y_PER_MERCATOR
  return [(x - SRC_X_OFFSET) / SRC_X_PER_DEGREE, ((2 * Math.atan(Math.exp(m)) - Math.PI / 2) * 180) / Math.PI]
}

// ─── Design frame ─────────────────────────────────────────────────────────────
// West edge just past A Pa Chai, east edge just past Hoang Sa; top above Lung
// Cu, bottom below Con Dao / Ca Mau. Vietnam fills the height
const FRAME_WIDTH = 360
const LNG_WEST = 101.9
const LNG_EAST = 113.2
const LAT_NORTH = 23.55
const LAT_SOUTH = 8.2
const UNITS_PER_DEGREE = FRAME_WIDTH / (LNG_EAST - LNG_WEST)
const UNITS_PER_MERCATOR = (UNITS_PER_DEGREE * 180) / Math.PI
const FRAME_HEIGHT = Math.round((mercator(LAT_NORTH) - mercator(LAT_SOUTH)) * UNITS_PER_MERCATOR)
const project = ([lng, lat]: Pt): Pt => [(lng - LNG_WEST) * UNITS_PER_DEGREE, (mercator(LAT_NORTH) - mercator(lat)) * UNITS_PER_MERCATOR]

// Archipelago insets, at a share of the frame scale
const TRUONG_SA_SCALE = 0.32 // bottom-right corner
const HOANG_SA_SCALE = 0.8 // right edge, centred on its real latitude
const HOANG_SA_LAT = 16.4
const INSET_MARGIN = 6
const INSET_PAD = 5

// Rings smaller than this (square source units) are specks: they skip the
// simplification and are drawn with a stroke as well, so they stay visible
const ISLAND_AREA = 40
const SIMPLIFY = "14%"
const OUT = path.join(process.cwd(), "lib/home-map-geometry.ts")

/** SVG path data (M/m, L/l, C/c, Z/z) -> rings; curves are flattened */
function pathToRings(d: string): Pt[][] {
  const tokens = d.match(/[a-zA-Z]|-?(?:\d+\.?\d*|\.\d+)(?:e-?\d+)?/g) ?? []
  const rings: Pt[][] = []
  let ring: Pt[] = []
  let cmd = ""
  let cur: Pt = [0, 0]
  let start: Pt = [0, 0]
  let i = 0
  const num = () => Number(tokens[i++])
  const close = () => { if (ring.length > 2) rings.push(ring); ring = [] }
  while (i < tokens.length) {
    if (/^[a-zA-Z]$/.test(tokens[i])) cmd = tokens[i++]
    const rel = cmd === cmd.toLowerCase()
    const at = (x: number, y: number): Pt => (rel ? [cur[0] + x, cur[1] + y] : [x, y])
    switch (cmd.toLowerCase()) {
      case "m": {
        close()
        cur = at(num(), num())
        start = cur
        ring.push(cur)
        // Further pairs after a moveto are linetos
        cmd = rel ? "l" : "L"
        break
      }
      case "l":
        cur = at(num(), num())
        ring.push(cur)
        break
      case "c": {
        const p1 = at(num(), num()), p2 = at(num(), num()), p3 = at(num(), num())
        const p0 = cur
        for (const t of [0.25, 0.5, 0.75, 1]) {
          const u = 1 - t
          ring.push([
            u * u * u * p0[0] + 3 * u * u * t * p1[0] + 3 * u * t * t * p2[0] + t * t * t * p3[0],
            u * u * u * p0[1] + 3 * u * u * t * p1[1] + 3 * u * t * t * p2[1] + t * t * t * p3[1],
          ])
        }
        cur = p3
        break
      }
      case "z":
        cur = start
        close()
        break
      default:
        throw new Error(`Unsupported path command "${cmd}"`)
    }
  }
  close()
  return rings
}

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
      const start: Pt = [Math.round(ring[0][0] * 10) / 10, Math.round(ring[0][1] * 10) / 10]
      let prev = start
      const steps: string[] = []
      for (const p of ring.slice(1)) {
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

type Geometry = { type: string; coordinates: unknown } | null
type Geo = { features?: { geometry: Geometry }[]; geometries?: Geometry[] }
/** Polygon / MultiPolygon features (or a GeometryCollection) -> their rings */
function geoRings(geo: Geo): Pt[][] {
  const geometries = geo.features ? geo.features.map((f) => f.geometry) : geo.geometries ?? []
  return geometries.flatMap((g) => {
    if (!g) return []
    const polys = g.type === "MultiPolygon" ? (g.coordinates as Pt[][][]) : g.type === "Polygon" ? [g.coordinates as Pt[][]] : []
    return polys.flat()
  })
}

async function main() {
  // ── Vietnam ──
  const byId = locations.map((loc) => ({ id: loc.id, rings: pathToRings(loc.path) }))
  const truongSa = byId.filter((l) => l.id === "truongsa").flatMap((l) => l.rings)
  const hoangSa = byId.filter((l) => l.id === "hoangsa").flatMap((l) => l.rings)
  const rest = byId.filter((l) => l.id !== "truongsa" && l.id !== "hoangsa").flatMap((l) => l.rings)
  // Specks do not survive mapshaper's simplify even with keep-shapes: they
  // skip it and are only thinned
  const specks = rest.filter((r) => area(r) < ISLAND_AREA).map(thinRing)
  const big = rest.filter((r) => area(r) >= ISLAND_AREA)
  const vnInput = {
    type: "FeatureCollection",
    features: big.map((r) => ({
      type: "Feature",
      properties: {},
      geometry: { type: "Polygon", coordinates: [[...r, r[0]].map(srcToLngLat)] },
    })),
  }
  // snap: neighbouring provinces' shared borders do not line up exactly;
  // dissolve: one shape, no internal boundaries; keep-shapes: larger islands
  // (Phu Quoc, Cat Ba, Con Dao...) are not simplified away
  const vnOut = await mapshaper.applyCommands(
    `-i vn.json snap -dissolve -simplify ${SIMPLIFY} weighted keep-shapes -o out.json precision=0.0001`,
    { "vn.json": vnInput },
  )
  const land = geoRings(JSON.parse(vnOut["out.json"])).map((r) => r.map(project))
  const islands = specks.map((r) => r.map((p) => project(srcToLngLat(p))))

  // ── Archipelago insets ──
  /** Rings (source units) -> inset box + rings at `scale`, placed by `place(w, h)` */
  const inset = (src: Pt[][], scale: number, place: (w: number, h: number) => Pt) => {
    const ll = src.map(thinRing).map((r) => r.map(srcToLngLat))
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
        "-simplify 20% keep-shapes",
        `-clip bbox=${LNG_WEST - 1},${south},${LNG_EAST + 1},${LAT_NORTH + 1}`,
        "-o out.json format=geojson precision=0.0001",
      ].join(" "),
      { "world.json": countries50m },
    )
    neighbourRings.push(...geoRings(JSON.parse(out["out.json"])).map((r) => r.map(project)))
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

/** Vietnam: mainland and larger islands, one shape */
export const VIETNAM_PATH = "${toPath(land)}"

/** Small islands: drawn with a stroke so they stay visible */
export const VIETNAM_ISLANDS_PATH = "${toPath(islands)}"

/** Hoang Sa and Truong Sa, each drawn in an inset box (own scale) */
export const HOANG_SA_INSET = ${box(hoangSaInset.box)}
export const HOANG_SA_PATH = "${toPath(hoangSaInset.rings)}"
export const TRUONG_SA_INSET = ${box(truongSaInset.box)}
export const TRUONG_SA_PATH = "${toPath(truongSaInset.rings)}"

/** Laos, Cambodia, Thailand, south China: faint context (Natural Earth 50m) */
export const NEIGHBOURS_PATH = "${toPath(neighbourRings)}"
`
  fs.writeFileSync(OUT, ts)
  console.log(`Wrote ${path.relative(process.cwd(), OUT)}: ${(ts.length / 1024).toFixed(1)} KB, frame ${FRAME_WIDTH} x ${FRAME_HEIGHT}, ${land.length} land rings, ${islands.length} islands, ${hoangSaInset.rings.length} Hoang Sa + ${truongSaInset.rings.length} Truong Sa rings, ${neighbourRings.length} neighbour rings`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
