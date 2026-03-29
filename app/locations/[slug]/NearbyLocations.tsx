import Link from "next/link"
import { getNearbyLocations } from "@/lib/nearbyLocations"

function typeIcon(type: string | string[]): string {
  const t = Array.isArray(type) ? type[0] : type
  const map: Record<string, string> = {
    beach: "🏖️",
    mountain: "⛰️",
    temple: "🛕",
    museum: "🏛️",
    market: "🛍️",
    waterfall: "💧",
    island: "🏝️",
    park: "🌿",
    cave: "🕳️",
    village: "🏘️",
    bridge: "🌉",
    lake: "🏞️",
    viewpoint: "👁️",
  }
  return map[t?.toLowerCase()] ?? "📍"
}

interface Props {
  currentSlug: string
}

export default function NearbyLocations({ currentSlug }: Props) {
  const nearby = getNearbyLocations(currentSlug)
  if (nearby.length === 0) return null

  return (
    <div id="nearby" className="section-anchor">
      <p className="section-label">Nearby Locations</p>
      <div className="nearby-list">
        {nearby.map((loc) => (
          <Link
            key={loc.slug}
            href={`/locations/${loc.slug}`}
            className="nearby-item"
          >
            <span className="nearby-icon">{typeIcon(loc.type)}</span>
            <span className="nearby-name">{loc.name}</span>
            <span className="nearby-meta">
              <span className="nearby-dist">{loc.distanceLabel}</span>
              <span className="nearby-dot">·</span>
              <span className="nearby-time">{loc.timeLabel} by motorbike</span>
            </span>
            <span className="nearby-arrow">→</span>
          </Link>
        ))}
      </div>
    </div>
  )
}