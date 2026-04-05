import VietnamMap from "@/components/VietnamMap"
import Link from "next/link"
import { destinations } from "@/data/destinations"
import "./homepage.css"

// Featured destinations - hardcoded order
const FEATURED_SLUGS = [
  "ha-giang-loop",
  "ninh-binh",
  "ha-long",
  "hoi-an",
  "phong-nha-ke-bang",
  "phu-quoc",
]
const featured = FEATURED_SLUGS
  .map((slug) => destinations.find((d) => d.slug === slug))
  .filter(Boolean) as typeof destinations

const experiences = [
  { emoji: "🏖️", label: "Beaches", href: "/experiences/beaches" },
  { emoji: "🥾", label: "Trekking", href: "/experiences/trekking" },
  { emoji: "🏕️", label: "Camping", href: "/experiences/camping" },
  { emoji: "🍜", label: "Food", href: "/experiences/food" },
]

export default function Home() {
  return (
    <main className="home-wrap">

      {/* ── HERO + MAP ── */}
      <section className="home-hero">
        <div className="home-hero-inner">
          <div className="home-eyebrow">"Solo steps, YOLO Stories"</div>

          <h1>
            Explore Vietnam,<br />
            <em>on your own terms.</em>
          </h1>

          <p className="home-hero-desc">
            Practical guides for solo travelers - scam alerts, real prices, and local knowledge you won't find in a guidebook.
          </p>

          {/* MAP */}
          <div className="home-map-wrap">
            <VietnamMap />
            <div className="home-map-hint">
              👆 Click a province to explore destinations
            </div>
          </div>

          {/* MAP CTA BANNER */}
          <Link href="/map" className="home-map-cta-banner">
            <div className="home-map-cta-left">
              <span className="home-map-cta-icon">🗺️</span>
              <div>
                <div className="home-map-cta-title">Explore 200+ locations on the map</div>
                <div className="home-map-cta-sub">Filter by beaches, trekking, caves, food & more</div>
              </div>
            </div>
            <span className="home-map-cta-btn">Open map →</span>
          </Link>
        </div>
      </section>

      {/* ── FEATURED DESTINATIONS ── */}
      <div>
        <div className="home-section">
          <div className="home-section-header">
            <div>
              <div className="home-section-eyebrow">Top Picks</div>
              <h2 className="home-section-title">
                Featured <em>destinations</em>
              </h2>
              <p className="home-section-sub">
                Handpicked for solo travelers - not just the obvious ones.
              </p>
            </div>
            <Link href="/destinations" className="home-section-link">
              View all →
            </Link>
          </div>

          <div className="home-dest-grid">
            {featured.map((d) => (
              <Link key={d.slug} href={`/destinations/${d.slug}`} className="home-dest-card">
                <div className="home-dest-card-img">
                  {d.heroImage
                    ? <img src={d.heroImage} alt={d.name} />
                    : <span>{d.tags?.[0]?.split(" ")[0] ?? "🌏"}</span>
                  }
                </div>
                <div className="home-dest-card-body">
                  {d.tags && (
                    <div className="home-dest-card-tags">
                      {d.tags.slice(0, 2).map((t) => (
                        <span key={t} className="home-dest-card-tag">{t}</span>
                      ))}
                    </div>
                  )}
                  <div className="home-dest-card-name">{d.name}</div>
                  {d.description && (
                    <div className="home-dest-card-desc">
                      {d.description.slice(0, 80)}{d.description.length > 80 ? "…" : ""}
                    </div>
                  )}
                  <div className="home-dest-card-footer">
                    <span className="home-dest-card-province">{d.province}</span>
                    <span className="home-dest-card-cta">Explore →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── TRAVEL EXPERIENCES ── */}
      <div className="home-section-dark">
        <div className="home-section">
          <div className="home-section-header">
            <div>
              <div className="home-section-eyebrow">Browse by vibe</div>
              <h2 className="home-section-title">
                What kind of trip are <em>you</em> planning?
              </h2>
              <p className="home-section-sub">
                From beach-hopping to highland trekking - Vietnam has it all.
              </p>
            </div>
            <Link href="/experiences" className="home-section-link">
              View all →
            </Link>
          </div>

          <div className="home-exp-grid">
            {experiences.map((e) => (
              <Link key={e.label} href={e.href} className="home-exp-card">
                <span className="home-exp-emoji">{e.emoji}</span>
                <span className="home-exp-label">{e.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── WHY SOLO VIETNAM ── */}
      <div className="home-section-alt">
        <div className="home-section">
          <div className="home-section-header home-section-header-center">
            <div className="home-section-eyebrow">Why this site</div>
            <h2 className="home-section-title">
              Built for solo travelers.<br /><em>Not tour groups.</em>
            </h2>
          </div>
          <div className="home-why-grid">
            <div className="home-why-card">
              <div className="home-why-icon">🎯</div>
              <div className="home-why-title">Practical, not pretty</div>
              <div className="home-why-desc">
                Real scam alerts, actual prices, honest safety info - not sponsored content dressed up as travel advice.
              </div>
            </div>
            <div className="home-why-card">
              <div className="home-why-icon">🔄</div>
              <div className="home-why-title">Up to date info</div>
              <div className="home-why-desc">
                Regularly updated guides with current prices, recent scam alerts, and the latest travel conditions - not outdated blog posts from years ago.
              </div>
            </div>
            <div className="home-why-card">
              <div className="home-why-icon">🏝️</div>
              <div className="home-why-title">Local knowledge</div>
              <div className="home-why-desc">
                Written by someone who actually lives here - a Vietnamese local sharing real travel insights.
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}
