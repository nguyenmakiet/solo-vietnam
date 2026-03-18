"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import Link from "next/link"
import { allLocations } from "@/data/all-locations"
import { experiences } from "@/data/experiences"
import { Location } from "@/data/location"
import "./map.css"

const locationsWithCoords = allLocations.filter((l) => {
  const la = typeof l.lat === "string" ? parseFloat(l.lat) : l.lat
  const ln = typeof l.lng === "string" ? parseFloat(l.lng) : l.lng
  return !isNaN(la) && !isNaN(ln) && la !== 0 && ln !== 0
})

function getLatLng(loc: Location): [number, number] {
  const la = typeof loc.lat === "string" ? parseFloat(loc.lat) : loc.lat
  const ln = typeof loc.lng === "string" ? parseFloat(loc.lng) : loc.lng
  return [la, ln]
}

function getProvinceLabel(loc: Location) {
  return loc.provinces[0]?.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase()) ?? ""
}

const expCounts = experiences.reduce((acc, exp) => {
  acc[exp.value] = locationsWithCoords.filter(l =>
    l.experiences.includes(exp.value as any)
  ).length
  return acc
}, {} as Record<string, number>)

const PIN_SVG = (active = false, highlighted = false, selected = false) => `
  <svg width="22" height="30" viewBox="0 0 24 32" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 9 12 20 12 20S24 21 24 12C24 5.373 18.627 0 12 0z"
      fill="${selected ? "#e53e3e" : active ? "#e8c97e" : highlighted ? "#f0d898" : "#c8a96e"}"
      stroke="#fff"
      stroke-width="1.5"
      opacity="1"
    />
    <circle cx="12" cy="12" r="4" fill="#fff" opacity="0.9"/>
  </svg>
`

export default function MapPage() {
  const mapRef = useRef<any>(null)
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const markersLayerRef = useRef<any>(null)
  const allMarkersRef = useRef<Map<string, any>>(new Map())
  const LRef = useRef<any>(null)
  const [activeExp, setActiveExp] = useState<string | null>(null)
  const [hoveredExp, setHoveredExp] = useState<string | null>(null)
  const [selectedLoc, setSelectedLoc] = useState<Location | null>(null)
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

      L.tileLayer("https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png", {
        maxZoom: 18,
        subdomains: "abcd",
      }).addTo(map)

      L.control.zoom({ position: "bottomright" }).addTo(map)
      L.control.attribution({ position: "bottomright", prefix: "© CartoDB · OSM" }).addTo(map)

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

    locationsWithCoords.forEach((loc) => {
      const [lat, lng] = getLatLng(loc)

      const icon = L.divIcon({
        className: "",
        html: PIN_SVG(false, false),
        iconSize: [22, 30],
        iconAnchor: [11, 30],
      })

      const clickHandler = (e: any) => {
        e.originalEvent.stopPropagation()
        setSelectedLoc(loc)
      }

      const marker = L.marker([lat, lng], { icon })
        .on("click", clickHandler)

      markersLayerRef.current.addLayer(marker)
      allMarkersRef.current.set(loc.slug, { marker, loc, clickHandler })
    })
  }, [mapReady])

  // Update marker visuals + enable/disable click based on filter
  useEffect(() => {
    if (!mapReady || !LRef.current) return
    const L = LRef.current
    const effectiveExp = hoveredExp ?? activeExp

    allMarkersRef.current.forEach(({ marker, loc, clickHandler }) => {
      const isSelected = selectedLoc?.slug === loc.slug
      const matchesFilter = effectiveExp
        ? loc.experiences.includes(effectiveExp as any)
        : true

      if (effectiveExp && !matchesFilter) {
        // Hide and disable click
        marker.setOpacity(0)
        marker.off("click")
        // Make marker element non-interactive via DOM
        const el = marker.getElement()
        if (el) el.style.pointerEvents = "none"
      } else {
        // Show and enable click
        marker.setOpacity(1)
        marker.off("click")
        marker.on("click", clickHandler)
        const el = marker.getElement()
        if (el) el.style.pointerEvents = "auto"

        marker.setIcon(L.divIcon({
          className: "",
          html: PIN_SVG(false, effectiveExp !== null && matchesFilter, isSelected), // ← thêm isSelected
          iconSize: [22, 30],
          iconAnchor: [11, 30],
        }))
        marker.setZIndexOffset(isSelected ? 1000 : 0)
      }
    })
  }, [mapReady, activeExp, hoveredExp, selectedLoc])

  // Click to zoom to experience markers
  const handleExpClick = useCallback((expValue: string) => {
    if (!mapRef.current || !LRef.current) return
    const L = LRef.current

    if (activeExp === expValue) {
      setActiveExp(null)
      return
    }

    setActiveExp(expValue)
    setSelectedLoc(null)

    const matchingLocs = locationsWithCoords.filter(l =>
      l.experiences.includes(expValue as any)
    )

    if (matchingLocs.length > 0) {
      const bounds = L.latLngBounds(matchingLocs.map(l => getLatLng(l)))
      mapRef.current.fitBounds(bounds, { padding: [60, 60], maxZoom: 10 })
    }
  }, [activeExp])

  // Close popup on map click
  useEffect(() => {
    if (!mapReady || !mapRef.current) return
    const handler = () => setSelectedLoc(null)
    mapRef.current.on("click", handler)
    return () => mapRef.current?.off("click", handler)
  }, [mapReady])

  const effectiveExp = hoveredExp ?? activeExp
  const filteredCount = effectiveExp
    ? locationsWithCoords.filter(l => l.experiences.includes(effectiveExp as any)).length
    : locationsWithCoords.length

  return (
    <div className="map-page-wrap">

      {/* Header */}
      <div className="map-header">
        <div className="map-header-left">
          <Link href="/" className="map-header-back">← Home</Link>
          <div className="map-header-divider" />
          <span className="map-header-count">
            {filteredCount} locations
            {effectiveExp && ` · ${experiences.find(e => e.value === effectiveExp)?.label}`}
          </span>
        </div>
        <h1 className="map-header-title">Explore Vietnam</h1>
      </div>

      {/* Main body */}
      <div className="map-body">

        {/* Map */}
        <div className="map-area">
          <div ref={mapContainerRef} className="map-container" />

          {/* Popup */}
          {selectedLoc && (
            <div className="map-popup" onClick={(e) => e.stopPropagation()}>
              <div className="map-popup-bar" />
              <div className="map-popup-body">
                <div className="map-popup-name">{selectedLoc.name}</div>
                <div className="map-popup-province">📍 {getProvinceLabel(selectedLoc)}</div>
                <div className="map-popup-footer">
                  <Link href={`/locations/${selectedLoc.slug}`} className="map-popup-link">
                    View Location →
                  </Link>
                  <button className="map-popup-close" onClick={() => setSelectedLoc(null)}>✕</button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="map-sidebar">
          <div className="map-sidebar-header">
            <div className="map-sidebar-eyebrow">Browse by</div>
            <div className="map-sidebar-title">Experience</div>
          </div>

          {/* All */}
          <button
            className={`map-sidebar-item ${activeExp === null ? "active" : ""}`}
            onClick={() => { setActiveExp(null); setSelectedLoc(null) }}
            onMouseEnter={() => setHoveredExp(null)}
            onMouseLeave={() => setHoveredExp(null)}
          >
            <div className="map-sidebar-item-left">
              <span className="map-sidebar-item-icon">🗺️</span>
              <span className="map-sidebar-item-label">All locations</span>
            </div>
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
                onClick={() => handleExpClick(exp.value)}
                onMouseEnter={() => setHoveredExp(exp.value)}
                onMouseLeave={() => setHoveredExp(null)}
              >
                <div className="map-sidebar-item-left">
                  <span className="map-sidebar-item-icon">{exp.icon}</span>
                  <span className="map-sidebar-item-label">{exp.label}</span>
                </div>
                <span className="map-sidebar-item-count">{count}</span>
              </button>
            )
          })}

          <div className="map-sidebar-footer">
            Hover to preview · Click to filter & zoom
          </div>
        </div>
      </div>
    </div>
  )
}
