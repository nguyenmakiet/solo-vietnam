"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { PopupImage, createBaseMap, loadLeaflet, preloadImage } from "@/components/map-shared"
import "./numbered-points-map.css"

// ─── Numbered points map for blog posts ──────────────────────────────────────
// Same base map as /map (createBaseMap in map-shared.tsx), with numbered round
// markers and a small card for the tapped point. The Leaflet code downloads
// as soon as the browser is idle, and the map is created once it scrolls near
// the viewport; until then a fixed-height placeholder holds the space. On touch screens the map starts locked so a swipe scrolls the page:
// a tap on the map unlocks pan and pinch zoom, "Done" locks it again.

export type NumberedPoint = {
  /** Number shown in the marker */
  n: number
  /** Location slug, for the card's link */
  slug: string
  name: string
  /** Second line of the card, e.g. "3,143 m" */
  detail?: string
  province: string
  /** Card photo URL, or null when the location has no photo yet */
  image?: string | null
  lat: number
  lng: number
  /** Display-only marker nudge in screen pixels [x, y], to separate near-identical points */
  offset?: [number, number]
}

// The top padding clears the button row; the rest stays tight so the whole
// set can open one zoom step closer
const FIT_OPTIONS = {
  paddingTopLeft: [20, 56] as [number, number],
  paddingBottomRight: [20, 20] as [number, number],
  maxZoom: 12,
}
const MARKER_SIZE = 28
const MARKER_SIZE_SELECTED = 34

const markerIcon = (L: typeof import("leaflet"), p: NumberedPoint, selected: boolean) => {
  const size = selected ? MARKER_SIZE_SELECTED : MARKER_SIZE
  const [dx, dy] = p.offset ?? [0, 0]
  return L.divIcon({
    className: "",
    html: `<span class="map-marker map-marker--num${selected ? " map-marker--selected" : ""}">${p.n}</span>`,
    iconSize: [size, size],
    // Anchor shifted against the offset moves the icon by [dx, dy]
    iconAnchor: [size / 2 - dx, size / 2 - dy],
  })
}

export default function NumberedPointsMap({
  points,
  focus,
  defaultView = "focus",
  label,
  allLabel = "Show all",
  focusLabel = "Zoom in",
}: {
  points: NumberedPoint[]
  /** Numbers of the points the default view fits; all points when omitted */
  focus?: number[]
  /** View the map opens on: the focus points, or all points with a button to zoom to the focus */
  defaultView?: "all" | "focus"
  /** Accessible name of the map */
  label: string
  allLabel?: string
  focusLabel?: string
}) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<import("leaflet").Map | null>(null)
  const LRef = useRef<typeof import("leaflet") | null>(null)
  const markersRef = useRef<Map<number, import("leaflet").Marker>>(new Map())
  const [mapReady, setMapReady] = useState(false)
  const [selected, setSelected] = useState<NumberedPoint | null>(null)
  const [locked, setLocked] = useState(false)
  // Touch screen: the map starts locked and gets a "Done" button once unlocked
  const [touch, setTouch] = useState(false)
  const lockedRef = useRef(false)
  const [showingAll, setShowingAll] = useState(!focus || defaultView === "all")

  const focusPoints = focus ? points.filter((p) => focus.includes(p.n)) : points
  const boundsOf = (list: NumberedPoint[]) => list.map((p) => [p.lat, p.lng] as [number, number])

  const setLock = (next: boolean) => {
    const map = mapRef.current
    lockedRef.current = next
    setLocked(next)
    if (!map) return
    if (next) {
      map.dragging.disable()
      map.touchZoom.disable()
    } else {
      map.dragging.enable()
      map.touchZoom.enable()
    }
  }

  // Create the map once it is near the viewport
  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap) return
    let alive = true
    const init = async () => {
      const L = await loadLeaflet()
      const container = containerRef.current
      if (!alive || !container || "_leaflet_id" in container) return
      LRef.current = L
      const map = createBaseMap(
        L, container,
        { bounds: L.latLngBounds(boundsOf(showingAll ? points : focusPoints)), padding: [0, 0] },
        () => alive,
      )
      // createBaseMap pads evenly: refit with room for the buttons at the top only
      map.fitBounds(L.latLngBounds(boundsOf(showingAll ? points : focusPoints)), FIT_OPTIONS)
      // The wheel never zooms an embedded map: it scrolls the post
      map.scrollWheelZoom.disable()
      map.on("click", () => {
        // First tap on a locked map unlocks it instead of closing the card
        if (lockedRef.current) setLock(false)
        else setSelected(null)
      })
      mapRef.current = map
      if (window.matchMedia("(pointer: coarse)").matches) {
        setTouch(true)
        setLock(true)
      }
      setMapReady(true)
    }
    // Warm the Leaflet download while the reader is still above the map
    const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1))
    idle(() => { loadLeaflet() })
    const observer = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) return
      observer.disconnect()
      init()
    }, { rootMargin: "800px" })
    observer.observe(wrap)
    const markers = markersRef.current
    return () => {
      alive = false
      observer.disconnect()
      mapRef.current?.remove()
      mapRef.current = null
      markers.clear()
    }
    // Points are static per post
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Markers; higher numbers below lower ones where they touch
  useEffect(() => {
    const L = LRef.current
    const map = mapRef.current
    if (!mapReady || !L || !map) return
    const markers = markersRef.current
    points.forEach((p) => {
      const marker = L.marker([p.lat, p.lng], {
        icon: markerIcon(L, p, false),
        title: `${p.n}. ${p.name}`,
        zIndexOffset: (points.length - p.n) * 10,
        riseOnHover: true,
      })
        .on("click", (e: import("leaflet").LeafletMouseEvent) => {
          e.originalEvent.stopPropagation()
          setSelected(p)
        })
        // Photo starts downloading before the click lands
        .on("mousedown touchstart", () => preloadImage(p.image ?? null))
        .on("keypress", (e: import("leaflet").LeafletKeyboardEvent) => {
          const key = e.originalEvent.key
          if (key === "Enter" || key === " ") {
            e.originalEvent.preventDefault()
            setSelected(p)
          }
        })
        .addTo(map)
      markers.set(p.n, marker)
    })
    return () => {
      markers.forEach((m) => m.remove())
      markers.clear()
    }
  }, [mapReady, points])

  // Selected marker icon
  useEffect(() => {
    const L = LRef.current
    if (!L) return
    markersRef.current.forEach((marker, n) => {
      const p = points.find((q) => q.n === n)
      if (p) marker.setIcon(markerIcon(L, p, selected?.n === n))
    })
  }, [selected, points])

  // Scrolled away: lock again on touch screens
  useEffect(() => {
    const wrap = wrapRef.current
    if (!touch || !wrap) return
    const observer = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting && !lockedRef.current) setLock(true)
    })
    observer.observe(wrap)
    return () => observer.disconnect()
  }, [touch])

  const toggleView = () => {
    const map = mapRef.current
    const L = LRef.current
    if (!map || !L) return
    const next = !showingAll
    map.flyToBounds(L.latLngBounds(boundsOf(next ? points : focusPoints)), { ...FIT_OPTIONS, duration: 0.6 })
    setShowingAll(next)
  }

  return (
    <figure className="npm" ref={wrapRef}>
      <div className="npm-stage">
        {!mapReady && <div className="npm-skeleton" aria-hidden="true" />}
        <div ref={containerRef} className="map-container npm-map" role="region" aria-label={label} />
        {mapReady && (
          <div className="npm-controls">
            {focus && (
              <button type="button" className="npm-btn" onClick={toggleView}>
                {showingAll ? focusLabel : allLabel}
              </button>
            )}
            {touch && !locked && (
              <button type="button" className="npm-btn" onClick={() => setLock(true)}>Done</button>
            )}
          </div>
        )}
        {touch && locked && !selected && <span className="npm-hint">Tap the map to pan and zoom</span>}
        {selected && (
          <div className="map-popup npm-popup" onClick={(e) => e.stopPropagation()}>
            <Link href={`/locations/${selected.slug}`} className="map-popup-card-link">
              {selected.image && (
                <div className="map-popup-thumb">
                  <PopupImage key={selected.slug} src={selected.image} alt={selected.name} />
                </div>
              )}
              <div className="map-popup-body">
                <span className="npm-popup-num">No. {selected.n}</span>
                <div className="map-popup-name">{selected.name}</div>
                {selected.detail && <div className="npm-popup-detail">{selected.detail}</div>}
                <div className="map-popup-province">{selected.province}</div>
                <span className="map-popup-link">View location →</span>
              </div>
            </Link>
            <button
              className="map-popup-close"
              aria-label="Close"
              onClick={(e) => { e.stopPropagation(); setSelected(null) }}
            >
              ×
            </button>
          </div>
        )}
      </div>
    </figure>
  )
}
