"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { typeDisplayLabel } from "@/data/taxonomy/types"
import { dotClass } from "@/lib/category-dot"
import PhotoPlaceholder from "@/components/PhotoPlaceholder"
import "./map-shared.css"

// ─── Shared Leaflet pieces for /map (app/map/MapClient.tsx) and the /locations
// map view (components/LocationsMap.tsx): base map (tiles, controls, province
// overlay), location pins, the selected-location card and its photo preload.
// Leaflet itself is only imported dynamically (loadLeaflet), so importing this
// module does not pull Leaflet into a page bundle.

/** What the selected-location card shows */
export type PopupLocation = {
  slug: string
  name: string
  type: string
  /** Display label, e.g. "Lam Dong" */
  province: string
  /** Popup photo URL, or null when the location has no photo yet */
  image: string | null
}

// Whole country, Ha Giang to Con Dao / Phu Quoc: the default and reset view
export const VIETNAM_BOUNDS: [[number, number], [number, number]] = [[8.5, 102.2], [23.4, 109.5]]

/** Leaflet and its stylesheet, loaded on demand */
export async function loadLeaflet(): Promise<typeof import("leaflet")> {
  const L = (await import("leaflet")).default
  // @ts-expect-error -- no type declarations for a CSS side-effect import
  await import("leaflet/dist/leaflet.css")
  return L
}

/**
 * Creates the base map: initial view, basemap tiles, zoom + attribution
 * controls and the 2025 province boundary overlay. `isAlive` is checked before
 * the (async) overlay is added, so an unmounted map is left alone.
 */
export function createBaseMap(
  L: typeof import("leaflet"),
  container: HTMLElement,
  view: { bounds: import("leaflet").LatLngBoundsExpression; padding: [number, number]; maxZoom?: number },
  isAlive: () => boolean,
): import("leaflet").Map {
  const map = L.map(container, {
    zoomControl: false,
    attributionControl: false,
    // Half steps let the whole-country view fill a phone screen
    zoomSnap: 0.5,
  })
  map.fitBounds(view.bounds, { padding: view.padding, maxZoom: view.maxZoom })

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
      if (!isAlive()) return
      L.geoJSON(geojson, {
        style: { weight: 1, fill: false, className: "map-province-boundary" }, // colour in map-shared.css
        interactive: false,
      }).addTo(map)
    })
    .catch(() => {}) // decorative overlay - fine to silently skip if it fails to load

  return map
}

// Markers: teal dot; the selected one is a larger signal dot with an ink ring,
// so selection reads by size and outline as well as colour (styles in map-shared.css).
// data-slug lets one delegated listener find the location (image preload)
export const markerIcon = (L: typeof import("leaflet"), slug: string, selected = false) =>
  L.divIcon({
    className: "",
    html: `<span class="map-marker${selected ? " map-marker--selected" : ""}" data-slug="${slug}"></span>`,
    iconSize: selected ? [22, 22] : [14, 14],
    iconAnchor: selected ? [11, 11] : [7, 7],
  })

// Warms the browser cache for a popup photo, so a marker's image is usually
// loaded by the time it is clicked (hover on desktop, pointerdown on touch)
const preloaded = new Set<string>()
export function preloadImage(src: string | null) {
  if (!src || preloaded.has(src)) return
  preloaded.add(src)
  const img = new Image()
  img.decoding = "async"
  img.src = src
}

/**
 * Preloads a marker's popup photo before it is clicked: hover on desktop,
 * pointerdown on touch (fires before click). One delegated listener for all
 * markers in the container; markers carry their slug in data-slug.
 */
export function useMarkerImagePreload(
  containerRef: React.RefObject<HTMLElement | null>,
  enabled: boolean,
  imageFor: (slug: string) => string | null,
) {
  useEffect(() => {
    const container = containerRef.current
    if (!enabled || !container) return
    const handler = (e: Event) => {
      const icon = (e.target as Element | null)?.closest?.(".leaflet-marker-icon")
      const slug = icon?.querySelector<HTMLElement>("[data-slug]")?.dataset.slug
      if (slug) preloadImage(imageFor(slug))
    }
    container.addEventListener("pointerover", handler)
    container.addEventListener("pointerdown", handler)
    container.addEventListener("focusin", handler) // keyboard: Tab onto a marker
    return () => {
      container.removeEventListener("pointerover", handler)
      container.removeEventListener("pointerdown", handler)
      container.removeEventListener("focusin", handler)
    }
  }, [containerRef, enabled, imageFor])
}

export function PopupImage({ src, alt }: { src: string | null; alt: string }) {
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

/**
 * Selected-location card, placed over the map (bottom left on desktop, a
 * compact strip along the bottom on phones). Swipe down dismisses it on touch;
 * the close button stays. placement="top": pinned to the top of the map
 * instead (swipe up dismisses), for a map whose bottom edge can sit below
 * the fold - the /locations map view.
 */
export function LocationPopupCard({
  loc,
  onClose,
  placement = "bottom",
}: {
  loc: PopupLocation
  onClose: () => void
  placement?: "bottom" | "top"
}) {
  // Swipe toward the map edge the card sits on: down at the bottom, up at the top
  const dir = placement === "top" ? -1 : 1
  const swipeStart = useRef<number | null>(null)
  const popupRef = useRef<HTMLDivElement>(null)
  const onTouchStart = (e: React.TouchEvent) => { swipeStart.current = e.touches[0].clientY }
  const onTouchMove = (e: React.TouchEvent) => {
    if (swipeStart.current === null || !popupRef.current) return
    const dy = dir * Math.max(0, dir * (e.touches[0].clientY - swipeStart.current))
    popupRef.current.style.transform = `translateY(${dy}px)`
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (swipeStart.current === null || !popupRef.current) return
    const dy = dir * (e.changedTouches[0].clientY - swipeStart.current)
    swipeStart.current = null
    popupRef.current.style.transform = ""
    if (dy > 60) onClose()
  }

  return (
    <div
      ref={popupRef}
      className={`map-popup${placement === "top" ? " map-popup--top" : ""}`}
      onClick={(e) => e.stopPropagation()}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <Link href={`/locations/${loc.slug}`} className="map-popup-card-link">
        <div className="map-popup-thumb">
          <PopupImage key={loc.slug} src={loc.image} alt={loc.name} />
        </div>
        <div className="map-popup-body">
          <span className="ui-dot-label map-popup-type">
            <span className={dotClass(loc.type)} aria-hidden="true" />
            {typeDisplayLabel(loc.type)}
          </span>
          <div className="map-popup-name">{loc.name}</div>
          <div className="map-popup-province">{loc.province}</div>
          <span className="map-popup-link">View location →</span>
        </div>
      </Link>
      <button
        className="map-popup-close"
        aria-label="Close location card"
        onClick={(e) => { e.stopPropagation(); onClose() }}
      >
        ×
      </button>
    </div>
  )
}
