"use client"

import { useEffect, useMemo, useRef, useState, useCallback } from "react"
import Link from "next/link"
import { experiences } from "@/data/experiences"
import { dotClass } from "@/lib/category-dot"
import {
  VIETNAM_BOUNDS,
  LocationPopupCard,
  createBaseMap,
  loadLeaflet,
  markerIcon,
  useMarkerImagePreload,
} from "@/components/map-shared"
import "./map.css"

/**
 * One map marker. Built on the server (see page.tsx) so the full location data
 * never ships in the client bundle - only the fields the map actually renders.
 */
export type MapLocation = {
  slug: string
  name: string
  lat: number
  lng: number
  experiences: string[]
  type: string
  province: string
  /** Popup photo URL, or null when the location has no photo yet */
  image: string | null
  /** Destination slug, or null for locations outside every destination */
  destination: string | null
}

/** One destination bubble (Destinations mode). Built on the server too */
export type MapDestination = {
  slug: string
  name: string
  region: "north" | "central" | "south"
  /** Bubble position: the destination's center */
  lat: number
  lng: number
  /** Label tier: 1 = name at the default zoom, 2-3 = name once zoomed in */
  priority: 1 | 2 | 3
  /** Explicit label rank (1 = placed first), or null: ranked after, by tier then count */
  rank: number | null
  /** Max zoom when flying to the destination */
  zoom: number
  /** Active child locations */
  count: number
  /** Fly-to bounds of the child locations (outliers excluded), [[s, w], [n, e]] */
  bounds: [[number, number], [number, number]]
}

type MapMode = "destinations" | "all"

// Lowest zoom at which a bubble of each tier may show its name. Below it the
// bubble is count-only. Names can still drop to count-only (or a dot) when they
// would overlap a higher-ranked bubble - see layoutBubbles()
const LABEL_MIN_ZOOM: Record<MapDestination["priority"], number> = { 1: 0, 2: 7, 3: 9 }
// Bubble sizes (px) for the collision check; full labels are measured
const COMPACT_SIZE = 24
const DOT_SIZE = 12
// Room each tier-1 point keeps free of other labels and count circles: its dot.
// (Its full count circle, 24px, costs about two names at the default zoom)
const TIER1_ZONE = DOT_SIZE
const LABEL_GAP = 4
// Leader-line labels: distances (px) from the point to the label's near edge,
// tried nearest first, in 8 directions (east first: the sea and the Gulf are
// mostly empty). The point gets an anchor dot (keep in sync with
// .map-dest.is-offset in map.css)
const LEADER_DISTANCES = [10, 24, 40]
const LEADER_DIRECTIONS: [number, number][] = [[1, 0], [-1, 0], [0, -1], [0, 1], [1, -1], [1, 1], [-1, -1], [-1, 1]]
const ANCHOR_SIZE = 10
// Tier-1 points closer than this share one label ("Da Nang 7 · Hoi An 7")
const GROUP_DISTANCE = 12

const REGION_ORDER: MapDestination["region"][] = ["north", "central", "south"]
const REGION_LABEL: Record<MapDestination["region"], string> = { north: "North", central: "Central", south: "South" }

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")

// ?exp= accepts the experience value (beach) or its page slug (beaches)
function resolveExp(param: string | null): string | null {
  if (!param) return null
  return experiences.find(e => e.value === param || e.slug === param)?.value ?? null
}

function getLatLng(loc: MapLocation): [number, number] {
  return [loc.lat, loc.lng]
}

// Destination bubble: dark teal pill "Name · 14"; layoutBubbles() switches it
// between is-full, is-compact (count only) and is-dot without rebuilding the icon.
// The 0x0 icon anchors the bubble's centre on the point (map.css centres it)
const bubbleIcon = (L: typeof import("leaflet"), d: MapDestination) =>
  L.divIcon({
    className: "map-dest-icon",
    html: `<span class="map-dest is-compact" data-dest="${d.slug}"><span class="map-dest-name">${escapeHtml(d.name)}</span><span class="map-dest-count">${d.count}</span></span>`,
    iconSize: [0, 0],
    iconAnchor: [0, 0],
  })

// Destinations mode: a location outside every destination is a small muted dot
// (20px hit area around an 8px dot) so nothing disappears from the map
const orphanIcon = (L: typeof import("leaflet"), slug: string) =>
  L.divIcon({
    className: "",
    html: `<span class="map-orphan" data-slug="${slug}"></span>`,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  })

type BubbleEntry = {
  marker: import("leaflet").Marker
  d: MapDestination
}

type MarkerEntry = {
  marker: import("leaflet").Marker
  loc: MapLocation
  clickHandler: (e: import("leaflet").LeafletMouseEvent) => void
  visible: boolean
}

// Shows or hides one marker for the current filter. Hidden markers are
// transparent, unclickable and out of the tab order
function setMarkerVisible(entry: MarkerEntry, visible: boolean) {
  const { marker, clickHandler } = entry
  marker.setOpacity(visible ? 1 : 0)
  marker.off("click")
  if (visible) marker.on("click", clickHandler)
  const el = marker.getElement()
  if (el) {
    el.style.pointerEvents = visible ? "auto" : "none"
    el.tabIndex = visible ? 0 : -1
  }
}

export default function MapClient({
  locations: locationsWithCoords,
  destinations,
}: {
  locations: MapLocation[]
  destinations: MapDestination[]
}) {
  const expCounts = useMemo(() => experiences.reduce((acc, exp) => {
    acc[exp.value] = locationsWithCoords.filter(l => l.experiences.includes(exp.value)).length
    return acc
  }, {} as Record<string, number>), [locationsWithCoords])

  const locBySlug = useMemo(
    () => new Map(locationsWithCoords.map(l => [l.slug, l])),
    [locationsWithCoords],
  )

  // Desktop panel in Destinations mode: north to south, grouped by region
  const destinationsByRegion = useMemo(() => REGION_ORDER.map(region => ({
    region,
    items: destinations.filter(d => d.region === region).sort((a, b) => b.lat - a.lat),
  })).filter(g => g.items.length > 0), [destinations])

  const mapRef = useRef<any>(null)
  const mapContainerRef = useRef<HTMLDivElement>(null)
  // Two layer groups, built once; a mode change only swaps which one is on the map
  const pinsLayerRef = useRef<import("leaflet").LayerGroup | null>(null)
  const destLayerRef = useRef<import("leaflet").LayerGroup | null>(null)
  const allMarkersRef = useRef<Map<string, MarkerEntry>>(new Map())
  const bubblesRef = useRef<BubbleEntry[]>([])
  const orphanMarkersRef = useRef<Map<string, import("leaflet").Marker>>(new Map())
  // Slug whose marker currently shows the selected icon
  const selectedMarkerRef = useRef<string | null>(null)
  const LRef = useRef<any>(null)
  const [mode, setMode] = useState<MapMode>("destinations")
  const modeRef = useRef<MapMode>(mode)
  modeRef.current = mode
  const [activeExp, setActiveExp] = useState<string | null>(null)
  const [hoveredExp, setHoveredExp] = useState<string | null>(null)
  const [selectedLoc, setSelectedLoc] = useState<MapLocation | null>(null)
  // Destination just opened from its bubble: shows the "View {name} page" link
  const [openedDest, setOpenedDest] = useState<MapDestination | null>(null)
  const [mapReady, setMapReady] = useState(false)
  // Tooltip for a tapped count circle or dot (its name), or for a label with
  // destinations tucked under it (all of them); a second tap on it flies
  const [peekDest, setPeekDest] = useState<{ anchor: MapDestination; items: MapDestination[] } | null>(null)
  const peekDestRef = useRef<typeof peekDest>(null)
  peekDestRef.current = peekDest
  // Label slug -> destinations tucked under that label (set by layoutBubbles)
  const tuckedRef = useRef<Map<string, MapDestination[]>>(new Map())
  // layoutBubbles caches: label sizes by destination slug (or "a+b" for a
  // combined label), and the last written layout (to skip identical writes)
  const labelSizeRef = useRef<Map<string, readonly [number, number]>>(new Map())
  const layoutSignatureRef = useRef<string | null>(null)
  const layoutViewRef = useRef<string | null>(null)
  // Tooltip anchor in map-container pixels, kept in step with pan and zoom
  const [peekPos, setPeekPos] = useState<{ x: number; y: number; below: boolean } | null>(null)
  // URL params are read after hydration (the page stays static); until then the
  // URL is not written, so the default render never wipes ?mode / ?exp
  const [urlRead, setUrlRead] = useState(false)
  const initialExpRef = useRef<string | null>(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const exp = resolveExp(params.get("exp"))
    const modeParam = params.get("mode")
    // ?exp alone implies All places: the filter only exists there
    const initialMode: MapMode = modeParam === "all" || (exp && modeParam !== "destinations") ? "all" : "destinations"
    initialExpRef.current = initialMode === "all" ? exp : null
    setMode(initialMode)
    setActiveExp(initialExpRef.current)
    setUrlRead(true)
  }, [])

  // Mode and filter live in the URL (?mode=all&exp=beach); no params = Destinations
  useEffect(() => {
    if (!urlRead) return
    const url = new URL(window.location.href)
    url.searchParams.delete("mode")
    url.searchParams.delete("exp")
    if (mode === "all") {
      url.searchParams.set("mode", "all")
      if (activeExp) url.searchParams.set("exp", activeExp)
    }
    const next = url.pathname + url.search + url.hash
    if (next !== window.location.pathname + window.location.search + window.location.hash) {
      window.history.replaceState(null, "", next)
    }
  }, [urlRead, mode, activeExp])

  const fitVietnam = useCallback(() => {
    mapRef.current?.fitBounds(VIETNAM_BOUNDS, { padding: [12, 12] })
  }, [])

  useEffect(() => {
    if (mapRef.current) return

    const initMap = async () => {
      const L = await loadLeaflet()
      if (!mapContainerRef.current) return
      if ((mapContainerRef.current as any)._leaflet_id) return

      LRef.current = L

      const exp = initialExpRef.current
      const expLocs = exp ? locationsWithCoords.filter(l => l.experiences.includes(exp)) : []
      const map = createBaseMap(
        L,
        mapContainerRef.current,
        expLocs.length > 0
          ? { bounds: L.latLngBounds(expLocs.map(l => getLatLng(l))), padding: [60, 60], maxZoom: 10 }
          : { bounds: VIETNAM_BOUNDS, padding: [12, 12] },
        () => !!mapRef.current,
      )

      // Added to the map by the mode effect
      pinsLayerRef.current = L.layerGroup()
      destLayerRef.current = L.layerGroup()
      mapRef.current = map
      setMapReady(true)
    }

    initMap()

    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
        pinsLayerRef.current = null
        destLayerRef.current = null
        allMarkersRef.current.clear()
        orphanMarkersRef.current.clear()
        bubblesRef.current = []
      }
    }
  }, [locationsWithCoords])

  // Label collision: bubbles are placed greedily in rank order (mapRank, then
  // tier and location count). Each takes the first placement that fits without touching an
  // already placed bubble: full label centred on its point, then next to it (right,
  // left, above, below - the sea and the Gulf are mostly empty), if its
  // tier allows a name at this zoom, it stays inside the map, stays clear of every
  // other tier-1 point's circle zone and, of those that fit, covers the fewest
  // other points; then count-only; then a small dot. A dot never blocks others.
  // Runs on zoom, resize and the end of a pan (edges).
  const layoutBubbles = useCallback((ev?: { type?: string }) => {
    const map = mapRef.current
    if (!map || modeRef.current !== "destinations") return
    const zoom = map.getZoom()
    // The moveend that follows a zoomend (and repeated resizes) sees the exact
    // same view as the last layout: nothing can have changed
    const center = map.getCenter()
    const mapSize = map.getSize()
    const viewKey = `${zoom}|${center.lat}|${center.lng}|${mapSize.x}x${mapSize.y}`
    if (ev && viewKey === layoutViewRef.current) return
    layoutViewRef.current = viewKey
    const entries = bubblesRef.current
      .map(b => ({ b, el: b.marker.getElement()?.firstElementChild as HTMLElement | null | undefined }))
      .filter((e): e is { b: BubbleEntry; el: HTMLElement } => !!e.el)

    const points = entries.map(({ b }) => map.latLngToContainerPoint([b.d.lat, b.d.lng]))

    // Tier-1 points within GROUP_DISTANCE of a higher-ranked tier-1 point (Da
    // Nang and Hoi An at the country view) share that point's label: "Da Nang 7 ·
    // Hoi An 7". Used only when the combined label can be placed
    const members = new Map<number, number[]>() // leader index -> member indexes
    const memberOf = new Set<number>()
    entries.forEach(({ b }, i) => {
      if (b.d.priority !== 1 || memberOf.has(i)) return
      entries.forEach(({ b: o }, j) => {
        if (j <= i || o.d.priority !== 1 || memberOf.has(j)) return
        if (Math.hypot(points[j].x - points[i].x, points[j].y - points[i].y) <= GROUP_DISTANCE) {
          members.set(i, [...(members.get(i) ?? []), j])
          memberOf.add(j)
        }
      })
    })
    const singleHtml = (d: MapDestination) =>
      `<span class="map-dest-name">${escapeHtml(d.name)}</span><span class="map-dest-count">${d.count}</span>`
    const groupHtml = (ds: MapDestination[]) => ds
      .map(d => `<span class="map-dest-name">${escapeHtml(d.name)}</span><span class="map-dest-count">${d.count}</span>`)
      .join(`<span class="map-dest-join" aria-hidden="true">·</span>`)

    // Label sizes are cached per destination and per combined label: the text never
    // changes, so the DOM is measured (one forced reflow per batch) only the first
    // time, not on every zoom and pan. The cache is cleared when web fonts load
    const sizeCache = labelSizeRef.current
    const groupKey = (i: number) => [i, ...(members.get(i) ?? [])].map(j => entries[j].b.d.slug).join("+")
    // Set when this call wrote to the bubbles (measuring), so the result is written back
    let domDirty = false
    const measureBatch = (jobs: { key: string; el: HTMLElement; cls: string; html: string }[]) => {
      if (jobs.length === 0) return
      jobs.forEach(({ el, cls, html }) => { el.className = cls; el.innerHTML = html })
      jobs.forEach(({ key, el }) => sizeCache.set(key, [el.offsetWidth, el.offsetHeight]))
      domDirty = true
    }
    measureBatch(entries.filter(({ b }) => !sizeCache.has(b.d.slug))
      .map(({ b, el }) => ({ key: b.d.slug, el, cls: "map-dest is-full is-center", html: singleHtml(b.d) })))
    measureBatch([...members.keys()].filter(i => !sizeCache.has(groupKey(i))).map(i => ({
      key: groupKey(i), el: entries[i].el, cls: "map-dest is-full is-center is-group",
      html: groupHtml([entries[i].b.d, ...members.get(i)!.map(j => entries[j].b.d)]),
    })))
    const sizes = entries.map(({ b }) => sizeCache.get(b.d.slug)!)
    const groupSizes = new Map<number, readonly [number, number]>()
    members.forEach((_, i) => groupSizes.set(i, sizeCache.get(groupKey(i))!))

    type Box = { x1: number; y1: number; x2: number; y2: number }
    // Box of a w x h bubble whose centre is (dx, dy) from the point (plus the gap)
    const boxAt = (x: number, y: number, w: number, h: number, dx = 0, dy = 0, gap = LABEL_GAP): Box => ({
      x1: x + dx - w / 2 - gap, y1: y + dy - h / 2 - gap,
      x2: x + dx + w / 2 + gap, y2: y + dy + h / 2 + gap,
    })
    const overlaps = (a: Box, b: Box) => a.x1 < b.x2 && a.x2 > b.x1 && a.y1 < b.y2 && a.y2 > b.y1
    // Names must stay inside the map and clear of the zoom buttons (a point near
    // the edge falls back to its count circle until panned into view)
    const size = map.getSize()
    const container = map.getContainer().getBoundingClientRect()
    const zoomCtl = map.getContainer().querySelector(".leaflet-control-zoom")?.getBoundingClientRect()
    const labelFits = (a: Box) => a.x1 >= 0 && a.y1 >= 0 && a.x2 <= size.x && a.y2 <= size.y &&
      !(zoomCtl && a.x1 < zoomCtl.right - container.left && a.x2 > zoomCtl.left - container.left &&
        a.y1 < zoomCtl.bottom - container.top && a.y2 > zoomCtl.top - container.top)

    // Every tier-1 point keeps the room for its own dot: no label, leader line or
    // count circle may reach into another tier-1 point's zone, so a tier-1
    // destination is never hidden under one and always gets at least a dot. Only
    // tier 2/3 points (and orphan dots) can end up under a label. A point in
    // `reserve` keeps room for a full count circle instead (see the passes below)
    const zonesFor = (reserve: Set<number>) => entries.map(({ b }, j) => {
      if (b.d.priority !== 1) return null
      const zone = reserve.has(j) ? COMPACT_SIZE : TIER1_ZONE
      return boxAt(points[j].x, points[j].y, zone, zone)
    })

    // Label placements around point p for a w x h label: centred on it, or with
    // its near edge LEADER_DISTANCES px away in one of 8 directions, joined to the
    // point by a leader line and an anchor dot. Geometry = everything the label
    // occupies (label, anchor dot, line), for collisions and for later labels
    type Placement = { cx: number; cy: number; dist: number; label: Box; geometry: Box[]; len: number; ang: number }
    // A generator: candidates are built only as far as the search needs them
    const placementsAround = function* (p: { x: number; y: number }, w: number, h: number): Generator<Placement> {
      yield { cx: 0, cy: 0, dist: 0, label: boxAt(p.x, p.y, w, h), geometry: [boxAt(p.x, p.y, w, h)], len: 0, ang: 0 }
      for (const dist of LEADER_DISTANCES) {
        for (const [ux, uy] of LEADER_DIRECTIONS) {
          const k = ux !== 0 && uy !== 0 ? Math.SQRT1_2 : 1
          const cx = ux * (w / 2 + dist * k)
          const cy = uy * (h / 2 + dist * k)
          const label = boxAt(p.x, p.y, w, h, cx, cy)
          // The line runs from the point to where it meets the label's edge
          const full = Math.hypot(cx, cy)
          const inside = Math.min(cx ? (w / 2) / Math.abs(cx) : Infinity, cy ? (h / 2) / Math.abs(cy) : Infinity)
          const len = full * (1 - inside)
          const ang = Math.atan2(cy, cx)
          const geometry = [label, boxAt(p.x, p.y, ANCHOR_SIZE, ANCHOR_SIZE)]
          for (let t = ANCHOR_SIZE / 2 + 2; t < len; t += 4) {
            geometry.push(boxAt(p.x + Math.cos(ang) * t, p.y + Math.sin(ang) * t, 2, 2, 0, 0, 1))
          }
          yield { cx, cy, dist, label, geometry, len, ang }
        }
      }
    }

    type Result = { state: "full" | "compact" | "dot"; chosen: Placement | null; group: number[] }
    // One greedy pass in rank order; no DOM writes, so it can be re-run
    const plan = (reserve: Set<number>) => {
      const placed: Box[] = []
      const hits = (a: Box) => placed.some(b => overlaps(a, b))
      const tier1Zones = zonesFor(reserve)
      const intoTier1Zone = (box: Box, skip: Set<number>) =>
        tier1Zones.some((z, j) => z !== null && !skip.has(j) && overlaps(box, z))
      const results: Result[] = entries.map(() => ({ state: "dot", chosen: null, group: [] }))
      const absorbed = new Set<number>()
      entries.forEach(({ b }, i) => {
        if (absorbed.has(i)) return
        const p = points[i]
        // Score: each other point the label covers costs as much as 25px of leader
        // line, so a name moves away only when it has to; the lowest score wins
        const covered = (box: Box, skip: Set<number>) => points.filter((q, j) => !skip.has(j) &&
          q.x > box.x1 + LABEL_GAP && q.x < box.x2 - LABEL_GAP && q.y > box.y1 + LABEL_GAP && q.y < box.y2 - LABEL_GAP).length
        // Candidates come nearest first and a score is never below the distance,
        // so the search stops once the distance alone can't beat the best score
        const bestPlacement = (w: number, h: number, skip: Set<number>) => {
          let best: Placement | null = null
          let bestScore = Infinity
          for (const c of placementsAround(p, w, h)) {
            if (c.dist >= bestScore) break
            if (!labelFits(c.label) || !c.geometry.every(g => !hits(g) && !intoTier1Zone(g, skip))) continue
            const score = covered(c.label, skip) * 25 + c.dist
            if (score < bestScore) { best = c; bestScore = score }
          }
          return best
        }

        let chosen: Placement | null = null
        let group: number[] = []
        if (zoom >= LABEL_MIN_ZOOM[b.d.priority]) {
          const ms = members.get(i) ?? []
          if (ms.length > 0) {
            const [gw, gh] = groupSizes.get(i)!
            chosen = bestPlacement(gw, gh, new Set([i, ...ms]))
            if (chosen) group = ms
          }
          if (!chosen) chosen = bestPlacement(sizes[i][0], sizes[i][1], new Set([i]))
        }
        if (chosen) {
          placed.push(...chosen.geometry)
          group.forEach(j => absorbed.add(j))
          results[i] = { state: "full", chosen, group }
          return
        }
        // A count circle may not cover another tier-1 point either
        const compact = boxAt(p.x, p.y, COMPACT_SIZE, COMPACT_SIZE)
        if (!hits(compact) && !intoTier1Zone(compact, new Set([i]))) {
          placed.push(compact)
          results[i] = { state: "compact", chosen: null, group: [] }
        }
      })
      return { results, absorbed }
    }

    // A tier-1 point squeezed down to a dot only because labels took the room
    // around it (its circle would not cover another tier-1 point) gets that room
    // reserved, and the layout runs again - at most 3 extra passes
    const reserve = new Set<number>()
    const plainZones = zonesFor(reserve)
    let layout = plan(reserve)
    for (let pass = 0; pass < 3; pass++) {
      const starved = entries.map((_, i) => i).filter((i) => {
        if (entries[i].b.d.priority !== 1 || reserve.has(i) || layout.absorbed.has(i)) return false
        if (layout.results[i].state !== "dot") return false
        const circle = boxAt(points[i].x, points[i].y, COMPACT_SIZE, COMPACT_SIZE)
        return !plainZones.some((z, j) => z !== null && j !== i && overlaps(circle, z))
      })
      if (starved.length === 0) break
      starved.forEach(i => reserve.add(i))
      layout = plan(reserve)
    }
    const { results, absorbed } = layout

    // Final state of every bubble, computed without reading the DOM: label rects
    // and mark sizes come from the plan, in map-container pixels
    const labelRects = entries.map((_, i) => {
      const c = results[i].chosen
      if (!c) return null
      const [w, h] = results[i].group.length ? groupSizes.get(i)! : sizes[i]
      const x = points[i].x + c.cx, y = points[i].y + c.cy
      return { d: entries[i].b.d, x1: x - w / 2, y1: y - h / 2, x2: x + w / 2, y2: y + h / 2 }
    })
    const tucked = new Map<string, MapDestination[]>()
    members.forEach((ms, i) => {
      const named = ms.filter(j => absorbed.has(j)).map(j => entries[j].b.d)
      if (named.length) tucked.set(entries[i].b.d.slug, named)
    })
    // A tier 2/3 count circle or dot whose point still falls inside a label (the
    // cluster is too tight at this zoom) is tucked under that label instead of
    // covering its text: hidden, and listed in the label's tooltip (see activateBubble())
    const tuckedUnder = entries.map(({ b }, i) => {
      if (results[i].chosen || absorbed.has(i) || b.d.priority === 1) return false
      const { x, y } = points[i]
      const host = labelRects.find(r => r !== null && x > r.x1 && x < r.x2 && y > r.y1 && y < r.y2)
      if (host) tucked.set(host.d.slug, [...(tucked.get(host.d.slug) ?? []), b.d])
      return !!host
    })
    // Two marks almost on the same spot (Da Nang and Hoi An are ~5px apart at
    // the country view): the lower-ranked one stays visible where it shows, and
    // is also listed in the tooltip of the higher-ranked mark covering it
    // (covered = its centre within the host mark's radius plus 3px)
    const marks = entries.map((_, i) => i)
      .filter(i => !results[i].chosen && !absorbed.has(i) && !tuckedUnder[i])
    marks.forEach((i, k) => {
      const host = marks.slice(0, k).find(j => {
        const size = results[j].state === "compact" ? COMPACT_SIZE : DOT_SIZE
        return Math.hypot(points[i].x - points[j].x, points[i].y - points[j].y) < size / 2 + 3
      })
      if (host !== undefined) {
        const hd = entries[host].b.d
        tucked.set(hd.slug, [...(tucked.get(hd.slug) ?? []), entries[i].b.d])
      }
    })
    tuckedRef.current = tucked

    // Same result as the last write (a pan that moves no label, or the moveend
    // that follows a zoomend): nothing to write. Labels sit relative to their
    // marker, so an unchanged state stays correct after the map moves
    const states = entries.map(({ b }, i) => {
      if (absorbed.has(i)) return { cls: "map-dest is-dot is-tucked", html: null as string | null, vars: null as Placement | null, z: 0, tab: -1 }
      const { state, chosen, group } = results[i]
      // Count circles and dots stack above labels so they are never hidden (their
      // padding yields to the mark or label under the finger - see activateBubble()),
      // then by rank, so where two 32px tap areas overlap the higher-ranked
      // destination wins. Leaflet adds the marker's pixel y to this offset, hence
      // the large steps
      const z = (state === "full" ? 0 : 1_000_000) + (entries.length - i) * 10_000
      if (chosen) {
        return {
          cls: `map-dest is-full ${chosen.dist === 0 ? "is-center" : "is-offset"}${group.length ? " is-group" : ""}`,
          html: group.length ? groupHtml([b.d, ...group.map(j => entries[j].b.d)]) : singleHtml(b.d),
          vars: chosen.dist > 0 ? chosen : null, z, tab: 0,
        }
      }
      const cls = `map-dest is-${state}${tuckedUnder[i] ? " is-tucked" : ""}`
      return { cls, html: singleHtml(b.d), vars: null, z, tab: tuckedUnder[i] ? -1 : 0 }
    })
    const signature = JSON.stringify(states.map(st => [st.cls, st.html, st.vars && [st.vars.cx, st.vars.cy], st.z, st.tab]))
    // Direct calls (mode switch, new markers) always write: Leaflet rebuilds the
    // bubble elements when their layer is added back
    if (ev && !domDirty && signature === layoutSignatureRef.current) return
    layoutSignatureRef.current = signature

    entries.forEach(({ b, el }, i) => {
      const st = states[i]
      el.className = st.cls
      if (st.html !== null && el.innerHTML !== st.html) el.innerHTML = st.html
      if (st.vars) {
        el.style.setProperty("--cx", `${st.vars.cx}px`)
        el.style.setProperty("--cy", `${st.vars.cy}px`)
        el.style.setProperty("--len", `${st.vars.len}px`)
        el.style.setProperty("--ang", `${st.vars.ang}rad`)
      } else {
        el.style.removeProperty("--cx")
        el.style.removeProperty("--cy")
        el.style.removeProperty("--len")
        el.style.removeProperty("--ang")
      }
      b.marker.setZIndexOffset(st.z)
      const icon = b.marker.getElement()
      if (icon) icon.tabIndex = st.tab
    })
    tuckedRef.current = tucked
  }, [])

  // Bubble tap: All places mode, flown to the destination's locations
  const openDestination = useCallback((d: MapDestination) => {
    setPeekDest(null)
    setSelectedLoc(null)
    setHoveredExp(null)
    setActiveExp(null)
    setMode("all")
    setOpenedDest(d)
    const map = mapRef.current
    if (!map) return
    const [[s, w], [n, e]] = d.bounds
    if (s === n && w === e) map.flyTo([s, w], d.zoom)
    else map.flyToBounds(d.bounds, { padding: [48, 48], maxZoom: d.zoom })
  }, [])

  // Build every marker once: pins (All places) and bubbles + orphan dots (Destinations)
  useEffect(() => {
    if (!mapReady || !LRef.current || !pinsLayerRef.current || !destLayerRef.current) return

    const L = LRef.current
    const pinsLayer = pinsLayerRef.current
    const destLayer = destLayerRef.current
    pinsLayer.clearLayers()
    destLayer.clearLayers()
    allMarkersRef.current.clear()
    orphanMarkersRef.current.clear()
    bubblesRef.current = []
    selectedMarkerRef.current = null

    locationsWithCoords.forEach((loc) => {
      const [lat, lng] = getLatLng(loc)

      const icon = markerIcon(L, loc.slug)

      const clickHandler = (e: any) => {
        e.originalEvent.stopPropagation()
        setSelectedLoc(loc)
      }

      const marker = L.marker([lat, lng], { icon, title: loc.name })
        .on("click", clickHandler)
        // Leaflet's own Enter handling only opens Leaflet popups; this page uses its
        // own card, so keyboard users select a focused marker with Enter or Space
        .on("keypress", (e: import("leaflet").LeafletKeyboardEvent) => {
          const key = e.originalEvent.key
          if (key === "Enter" || key === " ") {
            e.originalEvent.preventDefault()
            setSelectedLoc(loc)
          }
        })

      const entry: MarkerEntry = { marker, loc, clickHandler, visible: true }
      // The pin layer leaves and rejoins the map on mode changes; Leaflet rebuilds
      // the element then, so re-apply the filter state to it
      marker.on("add", () => setMarkerVisible(entry, entry.visible))
      pinsLayer.addLayer(marker)
      allMarkersRef.current.set(loc.slug, entry)

      if (!loc.destination) {
        const orphan = L.marker([lat, lng], {
          icon: orphanIcon(L, loc.slug),
          title: loc.name,
          keyboard: false, // 94 extra tab stops; every orphan is reachable in All places
          zIndexOffset: -1000,
        }).on("click", clickHandler)
        destLayer.addLayer(orphan)
        orphanMarkersRef.current.set(loc.slug, orphan)
      }
    })

    // Rank order for layoutBubbles(): explicit mapRank first, then tier, then
    // the bigger destination
    const ranked = [...destinations].sort((a, b) =>
      (a.rank ?? Infinity) - (b.rank ?? Infinity) || a.priority - b.priority || b.count - a.count)
    // Tap or Enter on a bubble. A label flies straight away, unless points are
    // listed under it (tooltip first); a count circle or dot first shows its
    // tooltip. A second tap on the same bubble flies. pt = tap position (absent
    // for keyboard)
    const activateBubble = (entry: BubbleEntry, pt?: { x: number; y: number }) => {
      const { d } = entry
      const el = entry.marker.getElement()?.firstElementChild
      if (!el) return
      // Only a bubble's visible mark is its own: a tap in a count circle's or
      // dot's invisible 32px padding goes to the mark or label under the finger
      // (marks are drawn above labels, so they come first; then by rank)
      if (pt && !el.classList.contains("is-full")) {
        const r = el.getBoundingClientRect()
        if (Math.hypot(pt.x - (r.left + r.width / 2), pt.y - (r.top + r.height / 2)) > r.width / 2 + 2) {
          const under = (o: BubbleEntry) => {
            const e = o.marker.getElement()?.firstElementChild
            if (!e || e.classList.contains("is-tucked")) return null
            const box = e.getBoundingClientRect()
            return pt.x >= box.left && pt.x <= box.right && pt.y >= box.top && pt.y <= box.bottom ? e : null
          }
          const others = bubblesRef.current.filter(o => o !== entry)
          const target = others.find(o => under(o) && !under(o)?.classList.contains("is-full")) ?? others.find(o => under(o))
          if (target) { activateBubble(target); return }
        }
      }
      const items = [d, ...(tuckedRef.current.get(d.slug) ?? [])]
      const again = peekDestRef.current?.anchor.slug === d.slug
      if (again || (el.classList.contains("is-full") && items.length === 1)) openDestination(d)
      else setPeekDest({ anchor: d, items })
    }

    ranked.forEach((d) => {
      const marker = L.marker([d.lat, d.lng], {
        icon: bubbleIcon(L, d),
        title: `${d.name}: ${d.count} ${d.count === 1 ? "location" : "locations"}`,
      })
      const entry: BubbleEntry = { marker, d }
      marker
        .on("click", (e: import("leaflet").LeafletMouseEvent) => {
          e.originalEvent.stopPropagation()
          activateBubble(entry, { x: e.originalEvent.clientX, y: e.originalEvent.clientY })
        })
        .on("keypress", (e: import("leaflet").LeafletKeyboardEvent) => {
          const key = e.originalEvent.key
          if (key === "Enter" || key === " ") {
            e.originalEvent.preventDefault()
            activateBubble(entry)
          }
        })
      destLayer.addLayer(marker)
      bubblesRef.current.push(entry)
    })

    layoutBubbles()
  }, [mapReady, locationsWithCoords, destinations, openDestination, layoutBubbles])

  // Mode: swap the layer groups (markers are never rebuilt)
  useEffect(() => {
    const map = mapRef.current
    if (!mapReady || !map || !pinsLayerRef.current || !destLayerRef.current) return
    const show = mode === "destinations" ? destLayerRef.current : pinsLayerRef.current
    const hide = mode === "destinations" ? pinsLayerRef.current : destLayerRef.current
    if (map.hasLayer(hide)) map.removeLayer(hide)
    if (!map.hasLayer(show)) map.addLayer(show)
    layoutBubbles()
  }, [mapReady, mode, layoutBubbles])

  useEffect(() => {
    const map = mapRef.current
    if (!mapReady || !map) return
    map.on("zoomend moveend resize", layoutBubbles)
    // Label sizes were measured with whatever font was ready; measure again once
    // the web fonts have loaded
    let live = true
    const onFonts = () => { if (!live) return; labelSizeRef.current.clear(); layoutBubbles() }
    if (document.fonts && document.fonts.status !== "loaded") document.fonts.ready.then(onFonts)
    document.fonts?.addEventListener("loadingdone", onFonts)
    return () => {
      live = false
      map.off("zoomend moveend resize", layoutBubbles)
      document.fonts?.removeEventListener("loadingdone", onFonts)
    }
  }, [mapReady, layoutBubbles])

  // Destination tooltip follows its point while the map pans or zooms
  useEffect(() => {
    const map = mapRef.current
    if (!mapReady || !map || !peekDest) { setPeekPos(null); return }
    // Kept inside the map: below the point near the top edge, and its centre
    // at least half a max-width tooltip (128px) from the sides
    const update = () => {
      const p = map.latLngToContainerPoint([peekDest.anchor.lat, peekDest.anchor.lng])
      const width = map.getSize().x
      const x = width > 260 ? Math.min(Math.max(p.x, 128), width - 128) : width / 2
      // Room needed above: ~130px for one destination, ~56px per row in a list
      const needed = peekDest.items.length > 1 ? 40 + peekDest.items.length * 56 : 130
      setPeekPos({ x, y: p.y, below: p.y < needed })
    }
    update()
    map.on("move zoom", update)
    return () => { map.off("move zoom", update) }
  }, [mapReady, peekDest])

  // Filter: show/hide markers. Only touches markers whose visibility changes,
  // and never rebuilds icons (setIcon recreates the marker's DOM element)
  useEffect(() => {
    if (!mapReady) return
    const effectiveExp = hoveredExp ?? activeExp

    allMarkersRef.current.forEach((entry) => {
      const visible = effectiveExp ? entry.loc.experiences.includes(effectiveExp) : true
      if (visible === entry.visible) return
      entry.visible = visible
      setMarkerVisible(entry, visible)
    })
  }, [mapReady, activeExp, hoveredExp])

  // Selection: swap the icon on the previously selected and the newly selected
  // marker only, so a click costs the same with 50 or 500 markers
  useEffect(() => {
    if (!mapReady || !LRef.current) return
    const L = LRef.current
    const nextSlug = selectedLoc?.slug ?? null
    const prevSlug = selectedMarkerRef.current
    if (prevSlug === nextSlug) return

    const setSelected = (slug: string | null, selected: boolean) => {
      if (!slug) return
      // Destinations mode: orphan dot (class only; the element is not rebuilt)
      orphanMarkersRef.current.get(slug)?.getElement()?.firstElementChild
        ?.classList.toggle("map-orphan--selected", selected)
      const entry = allMarkersRef.current.get(slug)
      if (!entry) return
      entry.marker.setIcon(markerIcon(L, entry.loc.slug, selected))
      entry.marker.setZIndexOffset(selected ? 1000 : 0)
      // setIcon builds a fresh element: re-apply the filter state to it
      setMarkerVisible(entry, entry.visible)
    }

    setSelected(prevSlug, false)
    setSelected(nextSlug, true)
    selectedMarkerRef.current = nextSlug
  }, [mapReady, selectedLoc])

  // Preload a marker's popup photo before it is clicked (hover / pointerdown)
  const imageFor = useCallback((slug: string) => locBySlug.get(slug)?.image ?? null, [locBySlug])
  useMarkerImagePreload(mapContainerRef, mapReady, imageFor)

  // Select one experience (null = all locations) and zoom to its markers
  const selectExp = useCallback((expValue: string | null) => {
    setSelectedLoc(null)
    setActiveExp(expValue)
    if (expValue === null || !mapRef.current || !LRef.current) return
    const L = LRef.current

    const matchingLocs = locationsWithCoords.filter(l =>
      l.experiences.includes(expValue)
    )

    if (matchingLocs.length > 0) {
      const bounds = L.latLngBounds(matchingLocs.map(l => getLatLng(l)))
      mapRef.current.fitBounds(bounds, { padding: [60, 60], maxZoom: 10 })
    }
  }, [locationsWithCoords])

  // Desktop list: clicking the active experience again clears it
  const handleExpClick = useCallback((expValue: string) => {
    if (!mapRef.current || !LRef.current) return
    if (activeExp === expValue) {
      setActiveExp(null)
      return
    }
    selectExp(expValue)
  }, [activeExp, selectExp])

  // ── Mobile filter sheet ──
  const [sheetOpen, setSheetOpen] = useState(false)
  const filterBtnRef = useRef<HTMLButtonElement>(null)
  const sheetRef = useRef<HTMLDivElement>(null)
  const wasOpen = useRef(false)

  const closeSheet = useCallback(() => setSheetOpen(false), [])

  // Mode toggle: the experience filter belongs to All places only, so it is
  // cleared on the way out; either way the view resets to the whole country
  const switchMode = useCallback((next: MapMode) => {
    if (next === modeRef.current) return
    setSelectedLoc(null)
    setHoveredExp(null)
    setActiveExp(null)
    setOpenedDest(null)
    setPeekDest(null)
    setSheetOpen(false)
    setMode(next)
    fitVietnam()
  }, [fitVietnam])

  // Focus into the sheet on open, back to the filter control on close;
  // lock page scroll while the modal sheet is open
  useEffect(() => {
    if (sheetOpen) {
      wasOpen.current = true
      document.body.style.overflow = "hidden"
      const checked = sheetRef.current?.querySelector<HTMLElement>("[aria-checked='true']")
      checked?.focus()
    } else if (wasOpen.current) {
      wasOpen.current = false
      document.body.style.overflow = ""
      filterBtnRef.current?.focus()
    }
  }, [sheetOpen])

  // Escape closes; Tab stays inside the sheet
  const onSheetKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") {
      e.preventDefault()
      closeSheet()
      return
    }
    if (e.key !== "Tab" || !sheetRef.current) return
    const focusables = sheetRef.current.querySelectorAll<HTMLElement>("button:not([disabled])")
    const first = focusables[0]
    const last = focusables[focusables.length - 1]
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
  }

  const countFor = (value: string | null) => (value ? expCounts[value] ?? 0 : locationsWithCoords.length)
  const sheetOptions = [
    { value: null as string | null, label: "All locations" },
    ...experiences.filter(e => (expCounts[e.value] ?? 0) > 0).map(e => ({ value: e.value as string | null, label: e.label })),
  ]

  // Close popup and destination tooltip on map click
  useEffect(() => {
    if (!mapReady || !mapRef.current) return
    const handler = () => { setSelectedLoc(null); setPeekDest(null) }
    mapRef.current.on("click", handler)
    return () => mapRef.current?.off("click", handler)
  }, [mapReady])

  const effectiveExp = hoveredExp ?? activeExp
  const filteredCount = effectiveExp ? expCounts[effectiveExp] ?? 0 : locationsWithCoords.length

  const activeLabel = effectiveExp ? experiences.find(e => e.value === effectiveExp)?.label : null
  const selectedLabel = activeExp ? experiences.find(e => e.value === activeExp)?.label : null
  const showCount = countFor(activeExp)

  const modeToggle = (
    <div className="map-mode" role="group" aria-label="Map view">
      <button
        type="button"
        className="map-mode-btn"
        aria-pressed={mode === "destinations"}
        onClick={() => switchMode("destinations")}
      >
        Destinations
      </button>
      <button
        type="button"
        className="map-mode-btn"
        aria-pressed={mode === "all"}
        onClick={() => switchMode("all")}
      >
        All places
      </button>
    </div>
  )

  return (
    <div className="map-page-wrap">

      {/* Header: compact editorial context; the map stays dominant */}
      <header className="map-header" inert={sheetOpen}>
        <nav className="map-header-crumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Map</span>
        </nav>
        <div className="map-header-row">
          <div>
            <h1 className="map-header-title">Explore Vietnam</h1>
            <p className="map-header-intro">Discover places across Vietnam by experience and location.</p>
          </div>
          <span className="map-header-count" aria-live="polite">
            {mode === "destinations" ? (
              <><strong>{destinations.length}</strong> destinations · {locationsWithCoords.length} locations</>
            ) : (
              <><strong>{filteredCount}</strong> locations{activeLabel && ` · ${activeLabel}`}</>
            )}
          </span>
        </div>
      </header>

      {/* Mobile: mode toggle + one compact filter control (All places only) */}
      <div className="map-filterbar" inert={sheetOpen}>
        {modeToggle}
        {mode === "all" && (
          <div className="map-filter-group">
            <button
              ref={filterBtnRef}
              type="button"
              className={`map-filter-btn${activeExp ? " is-active" : ""}`}
              aria-haspopup="dialog"
              aria-expanded={sheetOpen}
              aria-label={activeExp ? `Filter: ${selectedLabel}, ${showCount} places` : `Filter: all locations, ${showCount} places`}
              onClick={() => setSheetOpen(true)}
            >
              {activeExp ? (
                <>
                  <span className={dotClass(activeExp)} aria-hidden="true" />
                  <span className="map-filter-btn-label">{selectedLabel}</span>
                  <span className="map-filter-btn-count">· {showCount}</span>
                </>
              ) : (
                <>
                  <span className="map-filter-btn-kicker">Filter ·</span>
                  <span className="map-filter-btn-label">All locations</span>
                  <span className="map-filter-btn-count">{showCount}</span>
                  <svg className="map-filter-btn-chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
                </>
              )}
            </button>
            {activeExp && (
              <button
                type="button"
                className="map-filter-clear"
                aria-label={`Clear filter: ${selectedLabel}`}
                onClick={() => selectExp(null)}
              >
                ×
              </button>
            )}
          </div>
        )}
      </div>

      {/* Main body */}
      <div className="map-body" inert={sheetOpen}>

        {/* Map */}
        <div className="map-area">
          <div ref={mapContainerRef} className="map-container" />

          {/* Name tooltip for a count circle or dot (Destinations mode) */}
          {mode === "destinations" && peekDest && peekPos && (
            <div
              className={`map-dest-tip${peekDest.items.length > 1 ? " is-list" : ""}${peekPos.below ? " is-below" : ""}`}
              role="dialog"
              aria-label={peekDest.items.length > 1 ? "Destinations here" : peekDest.anchor.name}
              style={{ left: peekPos.x, top: peekPos.y }}
            >
              {peekDest.items.length === 1 ? (
                <>
                  <div className="map-dest-tip-name">{peekDest.anchor.name}</div>
                  <div className="map-dest-tip-count">{peekDest.anchor.count} {peekDest.anchor.count === 1 ? "place" : "places"}</div>
                  <button type="button" className="map-dest-tip-go" onClick={() => openDestination(peekDest.anchor)}>
                    Show places →
                  </button>
                </>
              ) : (
                <ul className="map-dest-tip-list">
                  {peekDest.items.map((d) => (
                    <li key={d.slug} className="map-dest-tip-row">
                      <span>
                        <span className="map-dest-tip-name">{d.name}</span>
                        <span className="map-dest-tip-count">{d.count} {d.count === 1 ? "place" : "places"}</span>
                      </span>
                      <button
                        type="button"
                        className="map-dest-tip-go"
                        aria-label={`Show places in ${d.name}`}
                        onClick={() => openDestination(d)}
                      >
                        Show →
                      </button>
                    </li>
                  ))}
                </ul>
              )}
              <button
                type="button"
                className="map-dest-tip-close"
                aria-label="Close"
                onClick={() => setPeekDest(null)}
              >
                ×
              </button>
            </div>
          )}

          {/* Destination opened from its bubble */}
          {mode === "all" && openedDest && (
            <div className="map-dest-link">
              <Link href={`/destinations/${openedDest.slug}`} className="map-dest-link-a">
                View {openedDest.name} page →
              </Link>
              <button
                type="button"
                className="map-dest-link-close"
                aria-label={`Dismiss link to ${openedDest.name}`}
                onClick={() => setOpenedDest(null)}
              >
                ×
              </button>
            </div>
          )}

          {/* Selected location */}
          {selectedLoc && (
            <LocationPopupCard loc={selectedLoc} onClose={() => setSelectedLoc(null)} />
          )}
        </div>

        {/* Desktop panel: mode toggle, then destinations or experiences */}
        <nav className="map-sidebar" aria-label={mode === "destinations" ? "Browse by destination" : "Browse by experience"}>
          <div className="map-sidebar-header">
            {modeToggle}
            <div className="map-sidebar-eyebrow">Browse by</div>
            <div className="map-sidebar-title">{mode === "destinations" ? "Destination" : "Experience"}</div>
          </div>

          {mode === "destinations" ? (
            <div className="map-sidebar-list">
              {destinationsByRegion.map(({ region, items }) => (
                <div key={region}>
                  <div className="map-sidebar-group">{REGION_LABEL[region]}</div>
                  {items.map((d) => (
                    <button
                      key={d.slug}
                      type="button"
                      className="map-sidebar-item"
                      onClick={() => openDestination(d)}
                    >
                      <span className="map-sidebar-item-left">
                        <span className="map-sidebar-dest-mark" aria-hidden="true" />
                        <span className="map-sidebar-item-label">{d.name}</span>
                      </span>
                      <span className="map-sidebar-item-count">{d.count}</span>
                    </button>
                  ))}
                </div>
              ))}
            </div>
          ) : (
            <div className="map-sidebar-list">
              {/* All */}
              <button
                className={`map-sidebar-item ${activeExp === null ? "active" : ""}`}
                aria-pressed={activeExp === null}
                onClick={() => { setActiveExp(null); setSelectedLoc(null) }}
                onMouseEnter={() => setHoveredExp(null)}
                onMouseLeave={() => setHoveredExp(null)}
              >
                <span className="map-sidebar-item-left">
                  <span className="ui-dot" aria-hidden="true" />
                  <span className="map-sidebar-item-label">All locations</span>
                </span>
                <span className="map-sidebar-item-count">{locationsWithCoords.length}</span>
              </button>

              {/* Experiences */}
              {experiences.map((exp) => {
                const count = expCounts[exp.value] ?? 0
                if (count === 0) return null
                const isActive = activeExp === exp.value

                return (
                  <button
                    key={exp.slug}
                    className={`map-sidebar-item ${isActive ? "active" : ""}`}
                    aria-pressed={isActive}
                    onClick={() => handleExpClick(exp.value)}
                    onMouseEnter={() => setHoveredExp(exp.value)}
                    onMouseLeave={() => setHoveredExp(null)}
                  >
                    <span className="map-sidebar-item-left">
                      <span className={dotClass(exp.value)} aria-hidden="true" />
                      <span className="map-sidebar-item-label">{exp.label}</span>
                    </span>
                    <span className="map-sidebar-item-count">{count}</span>
                  </button>
                )
              })}
            </div>
          )}

          <div className="map-sidebar-footer">
            {mode === "destinations"
              ? "Click a destination to zoom to its places · Grey dots are places outside a destination"
              : "Hover to preview · Click to filter & zoom"}
          </div>
        </nav>
      </div>

      {/* Mobile experience sheet (modal) */}
      {sheetOpen && mode === "all" && (
        <div className="map-sheet-layer">
          <div className="map-sheet-backdrop" onClick={closeSheet} aria-hidden="true" />
          <div
            ref={sheetRef}
            className="map-sheet"
            role="dialog"
            aria-modal="true"
            aria-labelledby="map-sheet-title"
            onKeyDown={onSheetKeyDown}
          >
            <div className="map-sheet-head">
              <h2 id="map-sheet-title" className="map-sheet-title">Browse by experience</h2>
              <button type="button" className="map-sheet-close" aria-label="Close filter" onClick={closeSheet}>×</button>
            </div>
            <div className="map-sheet-list" role="radiogroup" aria-labelledby="map-sheet-title">
              {sheetOptions.map((o) => {
                const checked = activeExp === o.value
                return (
                  <button
                    key={o.value ?? "all"}
                    type="button"
                    role="radio"
                    aria-checked={checked}
                    className={`map-sheet-option${checked ? " is-checked" : ""}`}
                    onClick={() => { if (!checked) selectExp(o.value) }}
                  >
                    <span className={o.value ? dotClass(o.value) : "ui-dot"} aria-hidden="true" />
                    <span className="map-sheet-option-label">{o.label}</span>
                    <span className="map-sheet-option-count">{countFor(o.value)}</span>
                  </button>
                )
              })}
            </div>
            <div className="map-sheet-foot">
              <button type="button" className="ui-btn map-sheet-show" onClick={closeSheet}>
                Show {showCount} {showCount === 1 ? "place" : "places"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
