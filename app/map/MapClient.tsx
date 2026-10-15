"use client"

import { useEffect, useMemo, useRef, useState, useCallback } from "react"
import Link from "next/link"
import { experiences } from "@/data/experiences"
import { typeDisplayLabel } from "@/data/taxonomy/types"
import { dotClass } from "@/lib/category-dot"
import PhotoPlaceholder from "@/components/PhotoPlaceholder"
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
  /** Max zoom when flying to the destination */
  zoom: number
  /** Active child locations */
  count: number
  /** Fly-to bounds of the child locations (outliers excluded), [[s, w], [n, e]] */
  bounds: [[number, number], [number, number]]
}

type MapMode = "destinations" | "all"

// Whole country, Ha Giang to Con Dao / Phu Quoc: the default and reset view
const VIETNAM_BOUNDS: [[number, number], [number, number]] = [[8.5, 102.2], [23.4, 109.5]]

// Lowest zoom at which a bubble of each tier may show its name. Below it the
// bubble is count-only. Names can still drop to count-only (or a dot) when they
// would overlap a higher-ranked bubble - see layoutBubbles()
const LABEL_MIN_ZOOM: Record<MapDestination["priority"], number> = { 1: 0, 2: 7, 3: 9 }
// Bubble sizes (px) for the collision check; full labels are measured
const COMPACT_SIZE = 24
const LABEL_GAP = 4
// Side labels: distance from the point to the label edge, and the anchor dot
// marking the point (keep in sync with .map-dest.is-right / .is-left in map.css)
const LABEL_OFFSET = 10
const ANCHOR_SIZE = 10

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

// Warms the browser cache for a popup photo, so a marker's image is usually
// loaded by the time it is clicked (hover on desktop, pointerdown on touch)
const preloaded = new Set<string>()
function preloadImage(src: string | null) {
  if (!src || preloaded.has(src)) return
  preloaded.add(src)
  const img = new Image()
  img.decoding = "async"
  img.src = src
}

function PopupImage({ src, alt }: { src: string | null; alt: string }) {
  const [failed, setFailed] = useState(false)
  const [loaded, setLoaded] = useState(false)
  if (!src || failed) return <PhotoPlaceholder />
  // Fades in over the paper-toned thumb background instead of popping in
  return (
    <img
      src={src}
      alt={alt}
      width={600}
      height={400}
      decoding="async"
      fetchPriority="high"
      className={`map-popup-thumb-img${loaded ? " is-loaded" : ""}`}
      onLoad={() => setLoaded(true)}
      onError={() => setFailed(true)}
    />
  )
}

// Markers: teal dot; the selected one is a larger signal dot with an ink ring,
// so selection reads by size and outline as well as colour (styles in map.css).
// data-slug lets one delegated listener find the location (image preload)
const markerIcon = (L: typeof import("leaflet"), slug: string, selected = false) =>
  L.divIcon({
    className: "",
    html: `<span class="map-marker${selected ? " map-marker--selected" : ""}" data-slug="${slug}"></span>`,
    iconSize: selected ? [22, 22] : [14, 14],
    iconAnchor: selected ? [11, 11] : [7, 7],
  })

// Destination bubble: dark teal pill "Name · 14"; layoutBubbles() switches it
// between is-full, is-compact (count only) and is-dot without rebuilding the icon.
// The 0x0 icon anchors the bubble's centre on the point (map.css centres it)
const bubbleIcon = (L: typeof import("leaflet"), d: MapDestination) =>
  L.divIcon({
    className: "map-dest-icon",
    html: `<span class="map-dest is-compact"><span class="map-dest-name">${escapeHtml(d.name)}</span><span class="map-dest-count">${d.count}</span></span>`,
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
      const L = (await import("leaflet")).default
      // @ts-ignore
      await import("leaflet/dist/leaflet.css")
      if (!mapContainerRef.current) return
      if ((mapContainerRef.current as any)._leaflet_id) return

      LRef.current = L

      const map = L.map(mapContainerRef.current, {
        zoomControl: false,
        attributionControl: false,
        // Half steps let the whole-country view fill a phone screen
        zoomSnap: 0.5,
      })
      const exp = initialExpRef.current
      const expLocs = exp ? locationsWithCoords.filter(l => l.experiences.includes(exp)) : []
      if (expLocs.length > 0) {
        map.fitBounds(L.latLngBounds(expLocs.map(l => getLatLng(l))), { padding: [60, 60], maxZoom: 10 })
      } else {
        map.fitBounds(VIETNAM_BOUNDS, { padding: [12, 12] })
      }

      // CARTO's free anonymous basemap tiles (basemaps.cartocdn.com) now require a paid
      // API key and return a watermarked "API KEY REQUIRED" tile without one. Esri's
      // World Light Gray Base is a free, no-key, no-signup raster basemap with a similar
      // minimal look, so it's used here instead. See app/map/page.tsx git history / README
      // if CARTO access is restored and this should be reverted.
      L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}", {
        maxZoom: 18,
        maxNativeZoom: 16,
      }).addTo(map)

      // Top right, so the selected-location card at the bottom never covers it
      L.control.zoom({ position: "topright" }).addTo(map)
      L.control.attribution({ position: "bottomright", prefix: "© Esri, HERE, Garmin · OSM" }).addTo(map)

      // The basemap tile provider bakes in its own (pre-2025-merger) province boundary
      // lines, which we can't edit since they're pixels. Overlay the current 34-province
      // boundaries on top instead - see public/data/README.md for the data source.
      fetch("/data/vn-provinces-2025.geojson")
        .then((res) => res.json())
        .then((geojson) => {
          if (!mapRef.current) return
          L.geoJSON(geojson, {
            style: { weight: 1, fill: false, className: "map-province-boundary" }, // colour in map.css
            interactive: false,
          }).addTo(map)
        })
        .catch(() => {}) // decorative overlay - fine to silently skip if it fails to load

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

  // Label collision: bubbles are placed greedily in rank order (tier, then
  // location count). Each takes the first placement that fits without touching an
  // already placed bubble: full label centred on its point, then next to it (right,
  // left, above, below - the sea and the Gulf are mostly empty), if its
  // tier allows a name at this zoom; then count-only; then a small dot. A dot never
  // blocks others, and nothing is hidden. Runs on zoom and resize only - panning
  // keeps relative positions.
  const layoutBubbles = useCallback(() => {
    const map = mapRef.current
    if (!map || modeRef.current !== "destinations") return
    const zoom = map.getZoom()
    const entries = bubblesRef.current
      .map(b => ({ b, el: b.marker.getElement()?.firstElementChild as HTMLElement | null | undefined }))
      .filter((e): e is { b: BubbleEntry; el: HTMLElement } => !!e.el)

    // Measure every full label in one layout pass
    entries.forEach(({ el }) => { el.className = "map-dest is-full is-center" })
    const sizes = entries.map(({ el }) => [el.offsetWidth, el.offsetHeight] as const)

    type Box = { x1: number; y1: number; x2: number; y2: number }
    const placed: Box[] = []
    // Box of a w x h bubble whose centre is (dx, dy) from the point (plus the gap)
    const boxAt = (x: number, y: number, w: number, h: number, dx = 0, dy = 0): Box => ({
      x1: x + dx - w / 2 - LABEL_GAP, y1: y + dy - h / 2 - LABEL_GAP,
      x2: x + dx + w / 2 + LABEL_GAP, y2: y + dy + h / 2 + LABEL_GAP,
    })
    const hits = (a: Box) => placed.some(b => a.x1 < b.x2 && a.x2 > b.x1 && a.y1 < b.y2 && a.y2 > b.y1)

    entries.forEach(({ b, el }, i) => {
      const p = map.latLngToContainerPoint([b.d.lat, b.d.lng])
      const [w, h] = sizes[i]
      // An offset label sits LABEL_OFFSET from its point; its box runs from the
      // far side of the anchor dot to the label's outer edge
      const sideW = ANCHOR_SIZE / 2 + LABEL_OFFSET + w
      const sideDx = sideW / 2 - ANCHOR_SIZE / 2
      const vertH = ANCHOR_SIZE / 2 + LABEL_OFFSET + h
      const vertDy = vertH / 2 - ANCHOR_SIZE / 2
      const candidates: { cls: string; box: Box }[] = []
      if (zoom >= LABEL_MIN_ZOOM[b.d.priority]) {
        candidates.push(
          { cls: "is-full is-center", box: boxAt(p.x, p.y, w, h) },
          { cls: "is-full is-right", box: boxAt(p.x, p.y, sideW, h, sideDx) },
          { cls: "is-full is-left", box: boxAt(p.x, p.y, sideW, h, -sideDx) },
          { cls: "is-full is-above", box: boxAt(p.x, p.y, w, vertH, 0, -vertDy) },
          { cls: "is-full is-below", box: boxAt(p.x, p.y, w, vertH, 0, vertDy) },
        )
      }
      candidates.push({ cls: "is-compact", box: boxAt(p.x, p.y, COMPACT_SIZE, COMPACT_SIZE) })
      const fit = candidates.find(c => !hits(c.box))
      if (fit) placed.push(fit.box)
      const cls = fit?.cls ?? "is-dot"
      el.className = `map-dest ${cls}`
      const state = cls.split(" ")[0].slice(3)
      // Higher-ranked and larger bubbles stack on top
      b.marker.setZIndexOffset((state === "full" ? 2000 : state === "compact" ? 1000 : 0) + (entries.length - i))
    })
  }, [])

  // Bubble tap: All places mode, flown to the destination's locations
  const openDestination = useCallback((d: MapDestination) => {
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

    // Rank order for layoutBubbles(): tier first, then the bigger destination
    const ranked = [...destinations].sort((a, b) => a.priority - b.priority || b.count - a.count)
    ranked.forEach((d) => {
      const marker = L.marker([d.lat, d.lng], {
        icon: bubbleIcon(L, d),
        title: `${d.name}: ${d.count} ${d.count === 1 ? "location" : "locations"}`,
      })
        .on("click", (e: import("leaflet").LeafletMouseEvent) => {
          e.originalEvent.stopPropagation()
          openDestination(d)
        })
        .on("keypress", (e: import("leaflet").LeafletKeyboardEvent) => {
          const key = e.originalEvent.key
          if (key === "Enter" || key === " ") {
            e.originalEvent.preventDefault()
            openDestination(d)
          }
        })
      destLayer.addLayer(marker)
      bubblesRef.current.push({ marker, d })
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
    map.on("zoomend resize", layoutBubbles)
    return () => { map.off("zoomend resize", layoutBubbles) }
  }, [mapReady, layoutBubbles])

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

  // Preload a marker's popup photo before it is clicked: hover on desktop,
  // pointerdown on touch (fires before click). One delegated listener for all markers
  useEffect(() => {
    const container = mapContainerRef.current
    if (!mapReady || !container) return
    const handler = (e: Event) => {
      const icon = (e.target as Element | null)?.closest?.(".leaflet-marker-icon")
      const slug = icon?.querySelector<HTMLElement>("[data-slug]")?.dataset.slug
      if (slug) preloadImage(locBySlug.get(slug)?.image ?? null)
    }
    container.addEventListener("pointerover", handler)
    container.addEventListener("pointerdown", handler)
    container.addEventListener("focusin", handler) // keyboard: Tab onto a marker
    return () => {
      container.removeEventListener("pointerover", handler)
      container.removeEventListener("pointerdown", handler)
      container.removeEventListener("focusin", handler)
    }
  }, [mapReady, locBySlug])

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

  // ── Selected card: swipe down to dismiss (touch only; close button stays) ──
  const swipeStart = useRef<number | null>(null)
  const popupRef = useRef<HTMLDivElement>(null)
  const onPopupTouchStart = (e: React.TouchEvent) => { swipeStart.current = e.touches[0].clientY }
  const onPopupTouchMove = (e: React.TouchEvent) => {
    if (swipeStart.current === null || !popupRef.current) return
    const dy = Math.max(0, e.touches[0].clientY - swipeStart.current)
    popupRef.current.style.transform = `translateY(${dy}px)`
  }
  const onPopupTouchEnd = (e: React.TouchEvent) => {
    if (swipeStart.current === null || !popupRef.current) return
    const dy = e.changedTouches[0].clientY - swipeStart.current
    swipeStart.current = null
    popupRef.current.style.transform = ""
    if (dy > 60) setSelectedLoc(null)
  }

  // Close popup on map click
  useEffect(() => {
    if (!mapReady || !mapRef.current) return
    const handler = () => setSelectedLoc(null)
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
            <div
              ref={popupRef}
              className="map-popup"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={onPopupTouchStart}
              onTouchMove={onPopupTouchMove}
              onTouchEnd={onPopupTouchEnd}
            >
              <Link href={`/locations/${selectedLoc.slug}`} className="map-popup-card-link">
                <div className="map-popup-thumb">
                  <PopupImage key={selectedLoc.slug} src={selectedLoc.image} alt={selectedLoc.name} />
                </div>
                <div className="map-popup-body">
                  <span className="ui-dot-label map-popup-type">
                    <span className={dotClass(selectedLoc.type)} aria-hidden="true" />
                    {typeDisplayLabel(selectedLoc.type)}
                  </span>
                  <div className="map-popup-name">{selectedLoc.name}</div>
                  <div className="map-popup-province">{selectedLoc.province}</div>
                  <span className="map-popup-link">View location →</span>
                </div>
              </Link>
              <button
                className="map-popup-close"
                aria-label="Close location card"
                onClick={(e) => { e.stopPropagation(); setSelectedLoc(null) }}
              >
                ×
              </button>
            </div>
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
