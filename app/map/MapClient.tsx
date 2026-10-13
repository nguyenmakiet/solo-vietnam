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

export default function MapClient({ locations: locationsWithCoords }: { locations: MapLocation[] }) {
  const expCounts = useMemo(() => experiences.reduce((acc, exp) => {
    acc[exp.value] = locationsWithCoords.filter(l => l.experiences.includes(exp.value)).length
    return acc
  }, {} as Record<string, number>), [locationsWithCoords])

  const locBySlug = useMemo(
    () => new Map(locationsWithCoords.map(l => [l.slug, l])),
    [locationsWithCoords],
  )

  const mapRef = useRef<any>(null)
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const markersLayerRef = useRef<any>(null)
  const allMarkersRef = useRef<Map<string, MarkerEntry>>(new Map())
  // Slug whose marker currently shows the selected icon
  const selectedMarkerRef = useRef<string | null>(null)
  const LRef = useRef<any>(null)
  const [activeExp, setActiveExp] = useState<string | null>(null)
  const [hoveredExp, setHoveredExp] = useState<string | null>(null)
  const [selectedLoc, setSelectedLoc] = useState<MapLocation | null>(null)
  const [mapReady, setMapReady] = useState(false)

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
        center: [16.5, 107.5],
        zoom: 7,
        zoomControl: false,
        attributionControl: false,
      })

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

      markersLayerRef.current = L.layerGroup().addTo(map)
      mapRef.current = map
      setMapReady(true)
    }

    initMap()

    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
        markersLayerRef.current = null
        allMarkersRef.current.clear()
      }
    }
  }, [])

  // Render all markers
  useEffect(() => {
    if (!mapReady || !LRef.current || !markersLayerRef.current) return

    const L = LRef.current
    markersLayerRef.current.clearLayers()
    allMarkersRef.current.clear()
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

      markersLayerRef.current.addLayer(marker)
      allMarkersRef.current.set(loc.slug, { marker, loc, clickHandler, visible: true })
    })
  }, [mapReady, locationsWithCoords])

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
      const entry = slug ? allMarkersRef.current.get(slug) : undefined
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
            <strong>{filteredCount}</strong> locations{activeLabel && ` · ${activeLabel}`}
          </span>
        </div>
      </header>

      {/* Mobile filter: one compact control; opens the experience sheet */}
      <div className="map-filterbar" inert={sheetOpen}>
        <button
          ref={filterBtnRef}
          type="button"
          className={`map-filter-btn${activeExp ? " is-active" : ""}`}
          aria-haspopup="dialog"
          aria-expanded={sheetOpen}
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

      {/* Main body */}
      <div className="map-body" inert={sheetOpen}>

        {/* Map */}
        <div className="map-area">
          <div ref={mapContainerRef} className="map-container" />

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

        {/* Browse by experience */}
        <nav className="map-sidebar" aria-label="Browse by experience">
          <div className="map-sidebar-header">
            <div className="map-sidebar-eyebrow">Browse by</div>
            <div className="map-sidebar-title">Experience</div>
          </div>

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

          <div className="map-sidebar-footer">
            Hover to preview · Click to filter & zoom
          </div>
        </nav>
      </div>

      {/* Mobile experience sheet (modal) */}
      {sheetOpen && (
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
