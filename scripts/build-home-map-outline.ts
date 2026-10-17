/**
 * scripts/build-home-map-outline.ts
 *
 * Generates /public/maps/vietnam-outline.svg: the plain one-colour outline of
 * Vietnam (mainland + Hoang Sa / Truong Sa) behind the homepage destination
 * map (components/HomeDestinationMap.tsx). Run via:
 *   npm run build:home-map-outline
 *
 * Source: the 65 province paths of @svg-maps/vietnam. They are flattened to
 * polygons, merged into one shape (internal boundaries dropped) and simplified
 * with mapshaper. The output keeps the source's 812 x 873 coordinate space, so
 * the projection in lib/home-map.ts (calibrated on this source) stays valid.
 *
 * The file is committed; rerun only to change the look or the simplification.
 */

import fs from "fs"
import path from "path"
import VietnamMod from "@svg-maps/vietnam"
// No type declarations for mapshaper; only applyCommands is used
// eslint-disable-next-line @typescript-eslint/no-require-imports
const mapshaper = require("mapshaper") as {
  applyCommands: (cmd: string, input: Record<string, unknown>) => Promise<Record<string, string>>
}

type Pt = [number, number]
const Vietnam = (VietnamMod as unknown as { default?: typeof VietnamMod }).default ?? VietnamMod
const { viewBox, locations } = Vietnam as { viewBox: string; locations: { id: string; path: string }[] }

// Outline fill: --color-line (app/globals.css). An <img> SVG cannot read CSS variables
const FILL = "#dad5c8"
// Share of vertices kept by the simplification (Visvalingam, weighted)
const SIMPLIFY = "12%"
// Rings smaller than this (square viewBox units) are islands: drawn with a
// stroke too, so Hoang Sa / Truong Sa stay visible at a 343-520px canvas
const ISLAND_AREA = 40
const ISLAND_STROKE = 3
const OUT = path.join(process.cwd(), "public/maps/vietnam-outline.svg")

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

const signedArea = (r: Pt[]) =>
  r.reduce((a, p, i) => { const q = r[(i + 1) % r.length]; return a + p[0] * q[1] - q[0] * p[1] }, 0) / 2
const area = (r: Pt[]) => Math.abs(signedArea(r))

// An island is a speck at this scale (drawn with a stroke): a few evenly
// spaced points of its outline are enough
const ISLAND_POINTS = 6
function thinRing(r: Pt[]): Pt[] {
  if (r.length <= ISLAND_POINTS) return r
  const step = r.length / ISLAND_POINTS
  return Array.from({ length: ISLAND_POINTS }, (_, i) => r[Math.floor(i * step)])
}

async function main() {
  // Islands (Hoang Sa rings are 0.1-0.6 square units) do not survive
  // mapshaper's simplify even with keep-shapes: they skip it and are only
  // thinned here. Everything else is merged and simplified by mapshaper
  const sourceRings = locations.flatMap((loc) => pathToRings(loc.path))
  const islandRings = sourceRings.filter((r) => area(r) < ISLAND_AREA).map(thinRing)
  // One feature per province ring; each subpath is its own polygon (no holes in the source)
  const features = sourceRings.filter((r) => area(r) >= ISLAND_AREA).map((r) => ({
    type: "Feature",
    properties: {},
    geometry: { type: "Polygon", coordinates: [[...r, r[0]]] },
  }))
  const input = { "provinces.json": { type: "FeatureCollection", features } }

  // snap: neighbouring provinces' shared borders do not line up exactly;
  // dissolve: one shape, no internal boundaries; keep-shapes: larger islands
  // (Phu Quoc, Cat Ba, Con Dao...) are not simplified away
  const out = await mapshaper.applyCommands(
    `-i provinces.json snap -dissolve -simplify ${SIMPLIFY} weighted keep-shapes -o outline.json precision=0.1`,
    input,
  )
  const geo = JSON.parse(out["outline.json"]) as {
    features?: { geometry: { type: string; coordinates: Pt[][][] | Pt[][] } }[]
    geometries?: { type: string; coordinates: Pt[][][] | Pt[][] }[]
  }
  const geometries = geo.features ? geo.features.map((f) => f.geometry) : geo.geometries ?? []
  const polygons = geometries.flatMap((g) => (g.type === "MultiPolygon" ? (g.coordinates as Pt[][][]) : [g.coordinates as Pt[][]]))

  const fmt = (n: number) => String(Math.round(n * 10) / 10)
  const toPath = (rings: Pt[][]) => rings
    .map((ring) => {
      // Relative coordinates keep the file small
      let prev: Pt = ring[0]
      let s = `M${fmt(prev[0])} ${fmt(prev[1])}l`
      const steps: string[] = []
      for (const p of ring.slice(1, -1)) {
        const dx = Math.round((p[0] - prev[0]) * 10) / 10
        const dy = Math.round((p[1] - prev[1]) * 10) / 10
        if (dx === 0 && dy === 0) continue
        steps.push(`${dx} ${dy}`)
        prev = [prev[0] + dx, prev[1] + dy]
      }
      // A speck whose steps all round to 0: a bare "l" would be invalid path
      // data and stop the browser drawing the rest. A 0.1 step keeps it a dot
      if (steps.length === 0) steps.push("0.1 0")
      s += steps.join(" ").replace(/ -/g, "-") + "z"
      return s
    })
    .join("")
  // mapshaper output rings are closed (last point = first); match that
  const land = polygons.flatMap((poly) => poly)
  const islands = islandRings.map((r) => [...r, r[0]])

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}">` +
    `<path fill="${FILL}" fill-rule="evenodd" d="${toPath(land)}"/>` +
    `<path fill="${FILL}" stroke="${FILL}" stroke-width="${ISLAND_STROKE}" stroke-linejoin="round" stroke-linecap="round" d="${toPath(islands)}"/>` +
    `</svg>\n`
  fs.mkdirSync(path.dirname(OUT), { recursive: true })
  fs.writeFileSync(OUT, svg)
  const rings = polygons.reduce((n, p) => n + p.length, 0)
  console.log(`Wrote ${path.relative(process.cwd(), OUT)}: ${(svg.length / 1024).toFixed(1)} KB, ${rings} rings (${islands.length} islands)`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
