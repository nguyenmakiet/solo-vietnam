"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import Link from "next/link"
import { allLocations } from "@/data/all-locations"
import { experiences } from "@/data/experiences"
import { Location } from "@/data/location"

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

// Count locations per experience
const expCounts = experiences.reduce((acc, exp) => {
  acc[exp.value] = locationsWithCoords.filter(l =>
    l.experiences.includes(exp.value as any)
  ).length
  return acc
}, {} as Record<string, number>)

const PIN_SVG = (active = false, highlighted = false) => `
  <svg width="22" height="30" viewBox="0 0 24 32" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 9 12 20 12 20S24 21 24 12C24 5.373 18.627 0 12 0z"
      fill="${active ? "#e8c97e" : highlighted ? "#f0d898" : "#c8a96e"}"
      stroke="#fff"
      stroke-width="1.5"
      opacity="${highlighted ? '1' : active ? '1' : '0.85'}"
    />
    <circle cx="12" cy="12" r="4" fill="#fff" opacity="0.9"/>
  </svg>
`

const DIM_PIN_SVG = () => `
  <svg width="18" height="24" viewBox="0 0 24 32" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 9 12 20 12 20S24 21 24 12C24 5.373 18.627 0 12 0z"
      fill="#c8a96e" stroke="#fff" stroke-width="1.5" opacity="0.25"
    />
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
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    if (mapRef.current) return

    const initMap = async () => {
      const L = (await import("leaflet")).default
      // @ts-ignore
      await import("leaflet/dist/leaflet.css")
      if (!mapContainerRef.current) return

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

      const marker = L.marker([lat, lng], { icon })
        .on("click", (e: any) => {
          e.originalEvent.stopPropagation()
          setSelectedLoc(loc)
        })

      markersLayerRef.current.addLayer(marker)
      allMarkersRef.current.set(loc.slug, { marker, loc })
    })
  }, [mapReady])

  // Update marker visuals when filter/hover changes
  useEffect(() => {
    if (!mapReady || !LRef.current) return
    const L = LRef.current

    const effectiveExp = hoveredExp ?? activeExp

    allMarkersRef.current.forEach(({ marker, loc }) => {
      const isSelected = selectedLoc?.slug === loc.slug
      const matchesFilter = effectiveExp
        ? loc.experiences.includes(effectiveExp as any)
        : true

      if (effectiveExp && !matchesFilter) {
        marker.setOpacity(0)
      } else {
        marker.setOpacity(1)
        marker.setIcon(L.divIcon({
          className: "",
          html: PIN_SVG(isSelected, effectiveExp !== null && matchesFilter),
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
    <div style={{ height: "100vh", display: "flex", flexDirection: "column", fontFamily: "'DM Sans', sans-serif" }}>

      {/* Header */}
      <div style={{
        background: "#1a1209",
        padding: "10px 20px",
        borderBottom: "1px solid rgba(200,169,110,0.2)",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Link href="/" style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, textDecoration: "none" }}>
            ← Home
          </Link>
          <div style={{ width: 1, height: 12, background: "rgba(255,255,255,0.1)" }} />
          <span style={{ color: "#c8a96e", fontSize: 11, letterSpacing: 2, textTransform: "uppercase", fontWeight: 600 }}>
            {filteredCount} locations
            {effectiveExp && ` · ${experiences.find(e => e.value === effectiveExp)?.label}`}
          </span>
        </div>
        <h1 style={{ color: "#fff", fontSize: 15, fontWeight: 700, margin: 0 }}>
          Explore Vietnam
        </h1>
        {/* Mobile toggle */}
        <button
          onClick={() => setSidebarOpen(v => !v)}
          style={{
            display: "none",
            background: "rgba(200,169,110,0.15)",
            border: "1px solid rgba(200,169,110,0.3)",
            color: "#c8a96e",
            borderRadius: 8,
            padding: "6px 12px",
            fontSize: 11,
            fontWeight: 600,
            cursor: "pointer",
          }}
          className="map-mobile-toggle"
        >
          Filter
        </button>
      </div>

      {/* Main content */}
      <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>

        {/* Map */}
        <div style={{ flex: 1, position: "relative" }}>
          <div ref={mapContainerRef} style={{ width: "100%", height: "100%" }} />

          {/* Popup */}
          {selectedLoc && (
            <div
              style={{
                position: "absolute", bottom: 32, left: "50%",
                transform: "translateX(-50%)", zIndex: 1000,
                background: "#fff", borderRadius: 14,
                boxShadow: "0 8px 40px rgba(0,0,0,0.18)",
                border: "1px solid #e2d8c8", overflow: "hidden",
                minWidth: 240, maxWidth: 300,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ height: 3, background: "linear-gradient(90deg, #c8a96e, #e8c97e)" }} />
              <div style={{ padding: "12px 14px" }}>
                <div style={{ fontWeight: 700, fontSize: 15, color: "#1a1209", marginBottom: 3 }}>
                  {selectedLoc.name}
                </div>
                <div style={{ fontSize: 11, color: "#7a6a52", marginBottom: 10 }}>
                  📍 {getProvinceLabel(selectedLoc)}
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <Link
                    href={`/locations/${selectedLoc.slug}`}
                    style={{ fontSize: 12, fontWeight: 700, color: "#c8a96e", textDecoration: "none" }}
                  >
                    View Location →
                  </Link>
                  <button
                    onClick={() => setSelectedLoc(null)}
                    style={{ background: "none", border: "none", cursor: "pointer", color: "#ccc", fontSize: 13 }}
                  >✕</button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div style={{
          width: 280,
          background: "#1a1209",
          borderLeft: "1px solid rgba(200,169,110,0.15)",
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
          flexShrink: 0,
        }}>
          {/* Sidebar header */}
          <div style={{
            padding: "16px 20px 12px",
            borderBottom: "1px solid rgba(200,169,110,0.1)",
          }}>
            <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "#c8a96e", fontWeight: 600, marginBottom: 2 }}>
              Browse by
            </div>
            <div style={{ color: "#fff", fontSize: 15, fontWeight: 700 }}>
              Experience
            </div>
          </div>

          {/* All option */}
          <button
            onClick={() => { setActiveExp(null); setSelectedLoc(null) }}
            onMouseEnter={() => setHoveredExp(null)}
            onMouseLeave={() => setHoveredExp(null)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "12px 20px",
              background: activeExp === null ? "rgba(200,169,110,0.12)" : "transparent",
              border: "none",
              borderBottom: "1px solid rgba(255,255,255,0.04)",
              cursor: "pointer",
              textAlign: "left",
              width: "100%",
              borderLeft: activeExp === null ? "3px solid #c8a96e" : "3px solid transparent",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 16 }}>🗺️</span>
              <span style={{ color: activeExp === null ? "#c8a96e" : "rgba(255,255,255,0.8)", fontSize: 13, fontWeight: activeExp === null ? 700 : 500 }}>
                All locations
              </span>
            </div>
            <span style={{
              background: activeExp === null ? "#c8a96e" : "rgba(255,255,255,0.1)",
              color: activeExp === null ? "#1a1209" : "rgba(255,255,255,0.5)",
              fontSize: 10, fontWeight: 700,
              padding: "2px 7px", borderRadius: 10,
            }}>
              {locationsWithCoords.length}
            </span>
          </button>

          {/* Experience list */}
          {experiences.map((exp) => {
            const count = expCounts[exp.value] ?? 0
            if (count === 0) return null
            const isActive = activeExp === exp.value
            const isHovered = hoveredExp === exp.value

            return (
              <button
                key={exp.slug}
                onClick={() => handleExpClick(exp.value)}
                onMouseEnter={() => setHoveredExp(exp.value)}
                onMouseLeave={() => setHoveredExp(null)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "11px 20px",
                  background: isActive
                    ? "rgba(200,169,110,0.12)"
                    : isHovered
                    ? "rgba(255,255,255,0.04)"
                    : "transparent",
                  border: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.04)",
                  borderLeft: isActive ? "3px solid #c8a96e" : "3px solid transparent",
                  cursor: "pointer",
                  textAlign: "left",
                  width: "100%",
                  transition: "background 0.15s",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 15 }}>{exp.icon}</span>
                  <span style={{
                    color: isActive ? "#c8a96e" : isHovered ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.7)",
                    fontSize: 13,
                    fontWeight: isActive ? 700 : 500,
                    transition: "color 0.15s",
                  }}>
                    {exp.label}
                  </span>
                </div>
                <span style={{
                  background: isActive ? "#c8a96e" : "rgba(255,255,255,0.08)",
                  color: isActive ? "#1a1209" : "rgba(255,255,255,0.4)",
                  fontSize: 10, fontWeight: 700,
                  padding: "2px 7px", borderRadius: 10,
                  transition: "all 0.15s",
                }}>
                  {count}
                </span>
              </button>
            )
          })}

          {/* Footer */}
          <div style={{ marginTop: "auto", padding: "16px 20px", borderTop: "1px solid rgba(200,169,110,0.1)" }}>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.2)", lineHeight: 1.5 }}>
              Hover to preview · Click to filter & zoom
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .map-mobile-toggle { display: flex !important; }
        }
      `}</style>
    </div>
  )
}
