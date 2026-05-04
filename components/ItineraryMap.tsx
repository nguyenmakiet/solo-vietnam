"use client"

import { useEffect, useRef, useState } from "react"
import type { Itinerary } from "@/data/destinations/types"

interface StopData {
  name: string
  lat: number
  lng: number
  status?: string
}

interface ItineraryMapProps {
  itineraries: Itinerary[]
  stopDataMap: Record<string, StopData>
}

const DAY_COLORS = ["#3b82f6", "#f97316", "#22c55e", "#a855f7", "#ef4444"]
const OSRM_TIMEOUT_MS = 5000

function pinSvg(num: number, color: string): string {
  return `<svg width="28" height="36" viewBox="0 0 28 36" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 0C6.268 0 0 6.268 0 14c0 10.5 14 22 14 22S28 24.5 28 14C28 6.268 21.732 0 14 0z"
      fill="${color}" stroke="rgba(0,0,0,0.15)" stroke-width="1"/>
    <circle cx="14" cy="14" r="9" fill="rgba(255,255,255,0.95)"/>
    <text x="14" y="18.5" text-anchor="middle" font-size="10" font-weight="700"
      font-family="-apple-system,sans-serif" fill="${color}">${num}</text>
  </svg>`
}

export default function ItineraryMap({ itineraries, stopDataMap }: ItineraryMapProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapDivRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<any>(null)
  const LRef = useRef<any>(null)
  const layersRef = useRef<any[]>([])
  const routePlaceholdersRef = useRef<Map<number, any>>(new Map())
  const fetchGenRef = useRef(0)
  const [activeItinIdx, setActiveItinIdx] = useState(0)
  const [mapReady, setMapReady] = useState(false)

  // Lazy-init map via IntersectionObserver
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          observer.disconnect()
          initMap()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  async function initMap() {
    if (mapRef.current || !mapDivRef.current) return
    const L = (await import("leaflet")).default
    // @ts-ignore
    await import("leaflet/dist/leaflet.css")
    if ((mapDivRef.current as any)._leaflet_id) return

    LRef.current = L

    const map = L.map(mapDivRef.current, {
      zoomControl: false,
      attributionControl: false,
    })

    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png", {
      maxZoom: 18,
      subdomains: "abcd",
    }).addTo(map)

    L.control.zoom({ position: "bottomright" }).addTo(map)
    L.control.attribution({
      position: "bottomright",
      prefix: "© CartoDB · OSM",
    }).addTo(map)

    mapRef.current = map
    setMapReady(true)
  }

  // Re-draw markers + lines when map is ready or active itinerary changes
  useEffect(() => {
    if (!mapReady || !mapRef.current || !LRef.current) return
    const L = LRef.current
    const map = mapRef.current

    // Invalidate any in-flight OSRM fetches from the previous render
    fetchGenRef.current += 1
    const currentGen = fetchGenRef.current

    // Remove previous layers
    layersRef.current.forEach((layer) => layer.remove())
    layersRef.current = []
    routePlaceholdersRef.current.clear()

    const itin = itineraries[activeItinIdx]
    if (!itin) return

    const allPoints: [number, number][] = []
    // Collect per-day points + color for async routing step
    const dayMeta: Array<{ dayIdx: number; points: [number, number][]; color: string }> = []

    itin.days.forEach((day, dayIdx) => {
      const color = DAY_COLORS[(day.day - 1) % DAY_COLORS.length]
      const dayPoints: [number, number][] = []

      day.stops.forEach((slug, i) => {
        const stop = stopDataMap[slug]
        if (!stop) return

        const point: [number, number] = [stop.lat, stop.lng]
        dayPoints.push(point)
        allPoints.push(point)

        const icon = L.divIcon({
          className: "",
          html: pinSvg(i + 1, color),
          iconSize: [28, 36],
          iconAnchor: [14, 36],
          popupAnchor: [0, -38],
        })

        const popup = `
          <div style="font-family:-apple-system,sans-serif;min-width:140px;padding:2px">
            <div style="font-size:13px;font-weight:700;color:#1a2d1a;margin-bottom:3px">${stop.name}</div>
            <div style="font-size:11px;color:#6b7280;margin-bottom:8px">Day ${day.day} · Stop ${i + 1}</div>
            ${stop.status === "unverified" || stop.status === "closed"
              ? `<span style="font-size:11px;color:#9ca3af;font-style:italic">Waypoint</span>`
              : `<a href="/locations/${slug}"
                style="font-size:11px;color:${color};font-weight:600;text-decoration:none"
                onclick="window.location.href='/locations/${slug}';return false">
                View location →
              </a>`
            }
          </div>`

        const marker = L.marker(point, { icon }).bindPopup(popup, { maxWidth: 220 })
        marker.addTo(map)
        layersRef.current.push(marker)
      })

      // Draw straight dashed placeholder — will be replaced by OSRM route if fetch succeeds
      if (dayPoints.length >= 2) {
        const placeholder = L.polyline(dayPoints, {
          color,
          weight: 2.5,
          opacity: 0.5,
          dashArray: "6, 5",
        }).addTo(map)
        layersRef.current.push(placeholder)
        routePlaceholdersRef.current.set(dayIdx, placeholder)
        dayMeta.push({ dayIdx, points: dayPoints, color })
      }
    })

    if (allPoints.length > 0) {
      const bounds = L.latLngBounds(allPoints)
      map.fitBounds(bounds, { padding: [48, 48] })
    }

    // Fetch real road routes from OSRM, replace placeholders as each arrives
    if (dayMeta.length > 0) {
      Promise.all(
        dayMeta.map(async ({ dayIdx, points, color }) => {
          const ac = new AbortController()
          const timer = setTimeout(() => ac.abort(), OSRM_TIMEOUT_MS)

          try {
            const waypoints = points.map(([lat, lng]) => `${lng},${lat}`).join(";")
            const url = `https://router.project-osrm.org/route/v1/driving/${waypoints}?overview=full&geometries=geojson`
            const res = await fetch(url, { signal: ac.signal })
            if (!res.ok) return

            const data = await res.json()
            const geometry = data?.routes?.[0]?.geometry?.coordinates
            if (!geometry) return

            // Discard result if the effect has re-run since this fetch started
            if (fetchGenRef.current !== currentGen) return

            const routePoints: [number, number][] = geometry.map(
              ([lng, lat]: [number, number]) => [lat, lng]
            )

            // Remove placeholder, add real route
            const placeholder = routePlaceholdersRef.current.get(dayIdx)
            if (placeholder) {
              placeholder.remove()
              layersRef.current = layersRef.current.filter((l) => l !== placeholder)
            }

            const route = L.polyline(routePoints, {
              color,
              weight: 3,
              opacity: 0.85,
            }).addTo(map)
            layersRef.current.push(route)
            routePlaceholdersRef.current.set(dayIdx, route)
          } catch {
            // Timeout or network error — placeholder remains, no user-visible error
          } finally {
            clearTimeout(timer)
          }
        })
      )
    }
  }, [mapReady, activeItinIdx, itineraries, stopDataMap])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
        LRef.current = null
        layersRef.current = []
        routePlaceholdersRef.current.clear()
      }
    }
  }, [])

  const activeItin = itineraries[activeItinIdx]

  return (
    <div ref={containerRef}>

      {/* Tab switcher — only shown if multiple itineraries */}
      {itineraries.length > 1 && (
        <div className="itin-map-tabs">
          {itineraries.map((itin, idx) => (
            <button
              key={itin.duration}
              className={`itin-map-tab${activeItinIdx === idx ? " active" : ""}`}
              onClick={() => setActiveItinIdx(idx)}
            >
              <span className="itin-map-tab-duration">{itin.duration}</span>
              <span className="itin-map-tab-label">{itin.label}</span>
            </button>
          ))}
        </div>
      )}

      {/* Day legend */}
      {activeItin && (
        <div className="itin-map-legend">
          {activeItin.days.map((day) => (
            <div key={day.day} className="itin-map-legend-item">
              <span
                className="itin-map-legend-dot"
                style={{ background: DAY_COLORS[(day.day - 1) % DAY_COLORS.length] }}
              />
              <span>Day {day.day}</span>
            </div>
          ))}
          <div className="itin-map-legend-note">
            {Object.values(stopDataMap).length > 0
              ? `${activeItin.days.flatMap(d => d.stops).filter(s => stopDataMap[s]).length} stops mapped`
              : "No coordinates available"}
          </div>
        </div>
      )}

      {/* Map */}
      <div className="itin-map-wrap">
        {!mapReady && <div className="itin-map-skeleton" />}
        <div ref={mapDivRef} className="itin-map" />
      </div>

    </div>
  )
}
