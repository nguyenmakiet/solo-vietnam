import Link from "next/link"
import { getNearbyLocations } from "@/lib/nearbyLocations"

interface Props {
  currentSlug: string
}

export default function NearbyLocations({ currentSlug }: Props) {
  const nearby = getNearbyLocations(currentSlug)
  if (nearby.length === 0) return null

  return (
    <section id="nearby" className="section-anchor" aria-labelledby="h-nearby">
      <h2 id="h-nearby" className="section-label">Nearby Locations</h2>
      <div className="nearby-list">
        {nearby.map((loc) => (
          <Link
            key={loc.slug}
            href={`/locations/${loc.slug}`}
            className="nearby-item"
          >
            <span className="nearby-name">{loc.name}</span>
            <span className="nearby-meta">
              <span className="nearby-dist">{loc.distanceLabel}</span>
              <span className="nearby-dot" aria-hidden="true">·</span>
              <span className="nearby-time">{loc.timeLabel} by motorbike</span>
            </span>
            <span className="nearby-arrow" aria-hidden="true">→</span>
          </Link>
        ))}
      </div>
    </section>
  )
}