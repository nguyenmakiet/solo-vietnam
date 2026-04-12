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

const curiosityCategories = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" x2="6" y1="2" y2="4"/><line x1="10" x2="10" y1="2" y2="4"/><line x1="14" x2="14" y1="2" y2="4"/>
      </svg>
    ),
    title: "Hidden Islands of Vietnam",
    desc: "Beyond Phú Quốc — remote islands few tourists ever reach.",
    href: "/experiences/islands",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>
      </svg>
    ),
    title: "Ancient Kingdoms and Ruins",
    desc: "Cham towers, royal citadels, and forgotten temples hiding in plain sight.",
    href: "/experiences/history",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m8 3 4 8 5-5 5 15H2L8 3z"/>
      </svg>
    ),
    title: "Epic Trekking Routes",
    desc: "Multi-day trails through the northern highlands and central forests.",
    href: "/experiences/trekking",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z"/><path d="M12 8v4l3 3"/>
        <path d="M7 3.34A10 10 0 0 0 2.07 11.5"/>
      </svg>
    ),
    title: "Waterfalls of Vietnam",
    desc: "From roadside cascades to jungle falls that take a full day to reach.",
    href: "/experiences/waterfalls",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 22V8l9-6 9 6v14"/><path d="M9 22V12h6v10"/>
      </svg>
    ),
    title: "Sacred Mountains",
    desc: "Pilgrim peaks, cloud temples, and summits with views that reshape perspective.",
    href: "/experiences/mountains",
  },
]

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
            Most travelers see Vietnam.<br />
            <em>A few actually find it.</em>
          </h1>

          <p className="home-hero-desc">
            Practical guides for solo travelers - scam alerts, real prices, and local knowledge you won't find in a guidebook.
          </p>

          {/* STATS */}
          <div className="home-hero-stats">
            <div className="home-hero-stat">
              <div className="home-hero-stat-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div className="home-hero-stat-num">201</div>
              <div className="home-hero-stat-label">Locations mapped</div>
            </div>
            <div className="home-hero-stat">
              <div className="home-hero-stat-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m8 3 4 8 5-5 5 15H2L8 3z"/>
                </svg>
              </div>
              <div className="home-hero-stat-num">63</div>
              <div className="home-hero-stat-label">Provinces explored</div>
            </div>
            <div className="home-hero-stat">
              <div className="home-hero-stat-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
                </svg>
              </div>
              <div className="home-hero-stat-num">80+</div>
              <div className="home-hero-stat-label">Hidden places discovered</div>
            </div>
          </div>

          {/* MAP */}
          <div className="home-map-wrap">
            <div className="home-map-heading">
              <h2>Explore Vietnam on the Map</h2>
              <p>Discover 200+ places across the country</p>
            </div>
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

      {/* ── CURIOSITY CATEGORIES (disabled) ── */}
      {/* <div className="home-section-alt">
        <div className="home-section">
          <div className="home-section-header">
            <div>
              <div className="home-section-eyebrow">Explore by curiosity</div>
              <h2 className="home-section-title">
                Explore Vietnam by <em>Curiosity</em>
              </h2>
              <p className="home-section-sub">
                Not by itinerary — follow what pulls you.
              </p>
            </div>
          </div>
          <div className="home-curiosity-grid">
            {curiosityCategories.map((c) => (
              <Link key={c.title} href={c.href} className="home-curiosity-card">
                <div className="home-curiosity-icon">{c.icon}</div>
                <div className="home-curiosity-title">{c.title}</div>
                <div className="home-curiosity-desc">{c.desc}</div>
                <span className="home-curiosity-cta">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </div> */}

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
