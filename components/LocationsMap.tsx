"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import {
  VIETNAM_BOUNDS,
  LocationPopupCard,
  createBaseMap,
  createPinLookState,
  loadLeaflet,
  pinIcon,
  updatePinLooks,
  useMarkerImagePreload,
  usePinImageFallback,
  type PinEntry,
  type PopupLocation,
} from "@/components/map-shared"

// ─── Map view of /locations ──────────────────────────────────────────────────
// Shows exactly the locations that match the listing's filters. Loaded with
// next/dynamic (ssr: false) from LocationsClient, so Leaflet only downloads
// once the map view is opened. Base map, pins and the selected card are shared
// with /map (components/map-shared.tsx).

export type LocationsMapPin = PopupLocation & { lat: number; lng: number; thumb: string | null }

// Bounds fit around the pins: padding (px) and the closest zoom it may reach,
// so two pins in one town do not zoom in to street level
const FIT_PADDING: [number, number] = [40, 40]
const FIT_MAX_ZOOM = 11
// A single pin is centred at this zoom instead
const SINGLE_PIN_ZOOM = 11

// Filtered-out pins are removed, not hidden: every entry is visible
type MarkerEntry = PinEntry & { loc: LocationsMapPin }

export default function LocationsMap({
  locations,
  onClearFilters,
}: {
  locations: LocationsMapPin[]
  /** Shown as a button in the empty state when given */
  onClearFilters?: () => void
}) {
  const mapRef = useRef<import("leaflet").Map | null>(null)
  const LRef = useRef<typeof import("leaflet") | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const pinsLayerRef = useRef<import("leaflet").LayerGroup | null>(null)
  const markersRef = useRef<Map<string, MarkerEntry>>(new Map())
  // Slug whose marker currently shows the selected icon
  const selectedMarkerRef = useRef<string | null>(null)
  const pinLookRef = useRef(createPinLookState())
  const [mapReady, setMapReady] = useState(false)
  const [selectedLoc, setSelectedLoc] = useState<LocationsMapPin | null>(null)

  const locBySlug = useMemo(() => new Map(locations.map((l) => [l.slug, l])), [locations])
  // Bounds are refitted only when the set of pins changes, not on every new array
  const pinsKey = useMemo(() => locations.map((l) => l.slug).join("|"), [locations])

  // Map is created once per mount and removed on unmount (back to list view)
  useEffect(() => {
    let alive = true
    const init = async () => {
      const L = await loadLeaflet()
      const container = containerRef.current
      if (!alive || !container || "_leaflet_id" in container) return
      LRef.current = L
      const map = createBaseMap(L, container, { bounds: VIETNAM_BOUNDS, padding: [12, 12] }, () => alive)
      // TODO: clustering - unfiltered, pins overlap in dense areas (Hanoi, Hoi An)
      pinsLayerRef.current = L.layerGroup().addTo(map)
      map.on("click", () => setSelectedLoc(null))
      // Dots or photos for the pins now in view
      map.on("moveend zoomend resize", () => updatePinLooks(L, map, markersRef.current.values(), pinLookRef.current, true))
      mapRef.current = map
      setMapReady(true)
    }
    init()
    const markers = markersRef.current
    return () => {
      alive = false
      const map = mapRef.current
      // Leaflet ends a zoom animation from an untracked timer that crashes on a
      // removed map: mid-zoom, remove it once the animation has ended
      if (map && (map as unknown as { _animatingZoom?: boolean })._animatingZoom) map.once("zoomend", () => map.remove())
      else map?.remove()
      mapRef.current = null
      pinsLayerRef.current = null
      markers.clear()
      selectedMarkerRef.current = null
    }
  }, [])

  // Pins: diffed by slug, so a filter change only adds and removes the markers
  // that changed instead of rebuilding all of them
  useEffect(() => {
    const L = LRef.current
    const layer = pinsLayerRef.current
    if (!mapReady || !L || !layer) return
    const markers = markersRef.current

    markers.forEach((entry, slug) => {
      if (locBySlug.has(slug)) return
      layer.removeLayer(entry.marker)
      markers.delete(slug)
      if (selectedMarkerRef.current === slug) selectedMarkerRef.current = null
    })

    locations.forEach((loc) => {
      if (markers.has(loc.slug)) return
      const entry: MarkerEntry = { marker: null!, loc, visible: true, look: "dot", selected: false }
      const marker = L.marker([loc.lat, loc.lng], { icon: pinIcon(L, entry), title: loc.name })
        .on("click", (e: import("leaflet").LeafletMouseEvent) => {
          e.originalEvent.stopPropagation()
          setSelectedLoc(loc)
        })
        // Leaflet's own Enter handling only opens Leaflet popups; this map uses its
        // own card, so keyboard users select a focused marker with Enter or Space
        .on("keypress", (e: import("leaflet").LeafletKeyboardEvent) => {
          const key = e.originalEvent.key
          if (key === "Enter" || key === " ") {
            e.originalEvent.preventDefault()
            setSelectedLoc(loc)
          }
        })
      entry.marker = marker
      layer.addLayer(marker)
      markers.set(loc.slug, entry)
    })
    // The fit below (a new pin set) runs moveend too; this covers a set change
    // that keeps the same view
    const map = mapRef.current
    if (map) updatePinLooks(L, map, markers.values(), pinLookRef.current, true)
  }, [mapReady, locations, locBySlug])

  // The selected location was filtered out: close its card
  useEffect(() => {
    if (selectedLoc && !locBySlug.has(selectedLoc.slug)) setSelectedLoc(null)
  }, [locBySlug, selectedLoc])

  // Fit the view to the pins: 0 pins -> whole country, 1 pin -> centred on it.
  // Not animated: the view snaps to the new filter result
  useEffect(() => {
    const map = mapRef.current
    const L = LRef.current
    if (!mapReady || !map || !L) return
    const pins = pinsKey ? pinsKey.split("|").map((slug) => locBySlug.get(slug)!) : []
    if (pins.length === 0) map.fitBounds(VIETNAM_BOUNDS, { padding: [12, 12], animate: false })
    else if (pins.length === 1) map.setView([pins[0].lat, pins[0].lng], SINGLE_PIN_ZOOM, { animate: false })
    else map.fitBounds(L.latLngBounds(pins.map((l) => [l.lat, l.lng] as [number, number])), { padding: FIT_PADDING, maxZoom: FIT_MAX_ZOOM, animate: false })
  // locBySlug is read for the pins of pinsKey only; a new map with the same pins must not refit
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapReady, pinsKey])

  // Selection: swap the icon on the previously and the newly selected marker only
  useEffect(() => {
    const L = LRef.current
    if (!mapReady || !L) return
    const nextSlug = selectedLoc?.slug ?? null
    const prevSlug = selectedMarkerRef.current
    if (prevSlug === nextSlug) return
    const setSelected = (slug: string | null, selected: boolean) => {
      const entry = slug ? markersRef.current.get(slug) : undefined
      if (!entry) return
      // Selected variant of whichever look (dot or photo) the pin has now
      entry.selected = selected
      entry.marker.setIcon(pinIcon(L, entry))
      entry.marker.setZIndexOffset(selected ? 1000 : 0)
    }
    setSelected(prevSlug, false)
    setSelected(nextSlug, true)
    selectedMarkerRef.current = nextSlug
  }, [mapReady, selectedLoc])

  // The card sits over the top of the map: if it covers the selected pin, pan
  // the map just enough to show the pin below it
  const wrapRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const map = mapRef.current
    if (!mapReady || !map || !selectedLoc) return
    const frame = requestAnimationFrame(() => {
      const card = wrapRef.current?.querySelector(".map-popup")?.getBoundingClientRect()
      const box = map.getContainer().getBoundingClientRect()
      if (!card) return
      const pt = map.latLngToContainerPoint([selectedLoc.lat, selectedLoc.lng])
      const x = pt.x + box.left
      const y = pt.y + box.top
      const margin = 24
      if (x < card.left - margin || x > card.right + margin || y > card.bottom + margin) return
      map.panBy([0, y - (card.bottom + margin)])
    })
    return () => cancelAnimationFrame(frame)
  }, [mapReady, selectedLoc])

  const imageFor = useCallback((slug: string) => locBySlug.get(slug)?.image ?? null, [locBySlug])
  useMarkerImagePreload(containerRef, mapReady, imageFor)

  // A thumbnail that fails to load: that pin goes back to a dot for good
  const onThumbBroken = useCallback((slug: string) => {
    const L = LRef.current
    const map = mapRef.current
    pinLookRef.current.broken.add(slug)
    if (L && map) updatePinLooks(L, map, markersRef.current.values(), pinLookRef.current, true)
  }, [])
  usePinImageFallback(containerRef, mapReady, onThumbBroken)

  return (
    // isolate: Leaflet panes and controls (z-index 400-1000) stay below the
    // sticky filter bar's dropdowns and the site header's mobile menu
    <div ref={wrapRef} className="relative isolate z-0 h-[70dvh] min-h-[360px] md:h-[calc(100dvh-220px)] md:min-h-[520px] border border-line rounded-card overflow-hidden bg-paper">
      <div ref={containerRef} className="map-container" />

      {mapReady && locations.length === 0 && (
        <div className="absolute inset-0 z-[1000] flex items-center justify-center p-6 pointer-events-none">
          <div className="pointer-events-auto max-w-xs text-center bg-surface border border-line rounded-card px-5 py-4">
            <p className="text-base font-semibold text-ink mb-1">No locations to show on the map</p>
            <p className="text-sm text-ink-2">Try adjusting your filters to see more results.</p>
            {onClearFilters && (
              <button
                onClick={onClearFilters}
                className="mt-3 px-4 py-2 rounded-button border border-teal text-teal text-sm font-semibold hover:bg-teal hover:text-surface transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
              >
                Clear all filters
              </button>
            )}
          </div>
        </div>
      )}

      {/* Top of the map: on first view the map's bottom edge is below the fold */}
      {selectedLoc && <LocationPopupCard loc={selectedLoc} onClose={() => setSelectedLoc(null)} placement="top" />}
    </div>
  )
}
