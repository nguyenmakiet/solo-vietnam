import { notFound } from "next/navigation"
import Link from "next/link"
import { Location } from "@/data/location"
import { saoBeach } from "@/data/locations/sao-beach"
import "./location.css"

const allLocations: Location[] = [
  saoBeach,
]

export async function generateStaticParams() {
  return allLocations.map((l) => ({ slug: l.slug }))
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const location = allLocations.find((l) => l.slug === slug)
  if (!location) return notFound()

  return (
    <div className="lp">

      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <Link href="/">Home</Link>
        <span className="sep">›</span>
        <Link href={`/destinations/${location.destination}`}>
          {location.destination.replace(/-/g, " ")}
        </Link>
        <span className="sep">›</span>
        <span className="current">{location.name}</span>
      </nav>

      {/* Hero */}
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-badge">
            📍 {location.type} · {location.destination.replace(/-/g, " ")}
          </div>
          <h1>{location.name}</h1>
          <p className="hero-seo">{location.seoDescription}</p>
          <div className="hero-tags">
            {location.tags.map((t) => (
              <span key={t} className="hero-tag">{t}</span>
            ))}
          </div>
        </div>
      </header>

      <main className="content-wrap">

        {/* Info chips */}
        <div className="info-chips">
          <div className="chip">
            <div className="chip-label">Best Time</div>
            <div className="chip-val">📅 {location.bestTime}</div>
          </div>
          {location.entranceFee && (
            <div className="chip">
              <div className="chip-label">Entry Fee</div>
              <div className="chip-val">🎟️ {location.entranceFee}</div>
            </div>
          )}
          {location.openingHours && (
            <div className="chip">
              <div className="chip-label">Hours</div>
              <div className="chip-val">🕐 {location.openingHours}</div>
            </div>
          )}
          <div className="chip">
            <div className="chip-label">Address</div>
            <div className="chip-val">📌 {location.address}</div>
          </div>
        </div>

        {/* Intro */}
        <div className="content-block">
          <p className="section-label">About</p>
          <p className="content-text">{location.content.intro}</p>
        </div>

        {/* Content sections */}
        <div className="content-sections">
          <div className="content-section">
            <h3>🚗 How to Get There</h3>
            <p>{location.content.howToGetThere}</p>
          </div>
          <div className="content-section">
            <h3>👀 What to Expect</h3>
            <p>{location.content.whatToExpect}</p>
          </div>
          <div className="content-section">
            <h3>🧳 Travel Tips</h3>
            <p>{location.content.travelTips}</p>
          </div>
        </div>

        {/* Insider tips */}
        {location.tips.length > 0 && (
          <div>
            <p className="section-label">Insider Tips</p>
            <div className="tips-list">
              {location.tips.map((tip, i) => (
                <div key={i} className="tip-item">
                  <span className="tip-arrow">→</span>
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Map link */}
        <a
          href={location.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="map-link"
        >
          Open in Google Maps
        </a>

        {/* Bottom CTA */}
        <div className="bottom-cta">
          <div>
            <div className="cta-label">Explore more</div>
            <div className="cta-title">
              {location.destination.replace(/-/g, " ")} — Full Guide
            </div>
          </div>
          <Link href={`/destinations/${location.destination}`}>
            View destination guide →
          </Link>
        </div>

      </main>
    </div>
  )
}