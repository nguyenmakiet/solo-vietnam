import Link from "next/link"
import { notFound } from "next/navigation"
import { destinations } from "@/data/destinations"
import { Location } from "@/data/location"
import { allLocations } from "@/data/all-locations"
import "./destination.css"

// ── Helpers ───────────────────────────────────────────────────────────────────
function getImageSrc(heroImage?: string): string {
  if (!heroImage || heroImage.includes('placeholder')) return '/images/coming-soon.jpg'
  return heroImage
}

function getTypeLabel(type: Location["type"]): string {
  const primary = Array.isArray(type) ? type[0] : type
  return primary.charAt(0).toUpperCase() + primary.slice(1)
}

function getTypeIcon(type: Location["type"]): string {
  const primary = Array.isArray(type) ? type[0] : type
  const icons: Record<string, string> = {
    beach: "🏖️", island: "🏝️", mountain: "🏔️", forest: "🌿",
    nature: "🌿", waterfall: "💧", cave: "🪨", attraction: "✨",
    cultural: "🎎", town: "🏘️", city: "🏙️", market: "🛒",
    temple: "⛩️", heritage: "🏯",
  }
  return icons[primary] ?? "📍"
}

// ── Metadata ──────────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const destination = destinations.find((d) => d.slug === slug)

  const description = destination
    ? `${destination.name} travel guide for solo travelers - top things to do, local insights, and practical visiting tips.`
    : "Travel guide for this destination in Vietnam with useful tips for solo travelers."

  return {
    description,
    openGraph: { description },
    alternates: { canonical: `https://www.soloinvietnam.com/destinations/${slug}` },
  }
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const destination = destinations.find((d) => d.slug === slug)
  if (!destination) return notFound()

  // Locations belonging to this destination
  const destinationLocations = allLocations.filter(
    (l) => l.destination === destination.slug
  )

  // Related destinations (same province, different slug)
  const related = destinations
    .filter((d) => d.provinceSlug === destination.provinceSlug && d.slug !== destination.slug)
    .slice(0, 4)

  const regionLabel =
    destination.region === "north"
      ? "North Vietnam"
      : destination.region === "central"
      ? "Central Vietnam"
      : "South Vietnam"

  const regionEmoji =
    destination.region === "north" ? "🏔️" : destination.region === "central" ? "🌊" : "🌴"

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <div className="dp">

        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="sep">›</span>
          <Link href={`/${destination.region}-vietnam`}>{regionLabel}</Link>
          <span className="sep">›</span>
          <Link href={`/provinces/${destination.provinceSlug}`}>{destination.province}</Link>
          <span className="sep">›</span>
          <span className="current">{destination.name}</span>
        </nav>

        {/* Hero */}
        <header className="hero">
          {destination.heroImage && (
            <img src={destination.heroImage} alt={destination.name} className="hero-img" />
          )}
          <div className="hero-overlay" />
          <div className="hero-content">
            <div className="hero-badge">{regionEmoji} {regionLabel} · Solo Travel Guide</div>
            <h1>{destination.name}</h1>
            {destination.tagline && <p className="hero-tagline">{destination.tagline}</p>}
            {destination.tags && destination.tags.length > 0 && (
              <div className="hero-tags">
                {destination.tags.map((tag) => (
                  <span key={tag} className="hero-tag">{tag}</span>
                ))}
              </div>
            )}
            <div className="hero-meta">
              <div className="hero-meta-item">
                <span className="val">{destination.province}</span>
                <span className="lbl">Province</span>
              </div>
              {destination.budgetPerDay && (
                <div className="hero-meta-item">
                  <span className="val">{destination.budgetPerDay}</span>
                  <span className="lbl">Budget/day</span>
                </div>
              )}
              {destination.recommendedStay && (
                <div className="hero-meta-item">
                  <span className="val">{destination.recommendedStay}</span>
                  <span className="lbl">Stay</span>
                </div>
              )}
              {destination.transport && (
                <div className="hero-meta-item">
                  <span className="val">{destination.transport}</span>
                  <span className="lbl">Transport</span>
                </div>
              )}
            </div>
          </div>
        </header>

        <main className="content-wrap">

          {/* Description */}
          <div className="description-block">
            <p>{destination.description}</p>
          </div>

          {/* Places to Visit - from location data */}
          <section style={{ marginBottom: 48 }}>
            <p className="section-label">
              Places to Visit
              {destinationLocations.length > 0 && ` · ${destinationLocations.length} spots`}
            </p>
            {destinationLocations.length > 0 ? (
              <div className="locations-grid">
                {destinationLocations.map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/locations/${loc.slug}`}
                    className="location-card"
                  >
                    <img
                      src={getImageSrc(loc.heroImage)}
                      alt={loc.name}
                      className="location-card-img"
                    />
                    <div className="location-card-body">
                      <div className="location-card-type">
                        {getTypeIcon(loc.type)} {getTypeLabel(loc.type)}
                      </div>
                      <div className="location-card-name">{loc.name}</div>
                      <div className="location-card-desc">{loc.seoDescription}</div>
                    </div>
                    <div className="location-card-footer">
                      <span>{loc.bestTime}</span>
                      <span>→</span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="locations-coming-soon">
                <span className="cs-icon">🗺️</span>
                Location guides coming soon
              </div>
            )}
          </section>

          {/* Plan Your Trip */}
          <section style={{ marginBottom: 48 }}>
            <p className="section-label">Plan Your Trip</p>
            <div className="info-row">
              {destination.gettingThere && (
                <div className="info-card full">
                  <span className="ic-icon">🚌</span>
                  <div className="ic-title">Getting There</div>
                  <div className="ic-body">{destination.gettingThere}</div>
                </div>
              )}
              {destination.bestTime && (
                <div className="info-card">
                  <span className="ic-icon">📅</span>
                  <div className="ic-title">Best Time to Visit</div>
                  <div className="ic-body">{destination.bestTime}</div>
                </div>
              )}
              {destination.recommendedStay && (
                <div className="info-card">
                  <span className="ic-icon">🌙</span>
                  <div className="ic-title">Recommended Stay</div>
                  <div className="ic-body">{destination.recommendedStay}</div>
                </div>
              )}
            </div>
          </section>

          {/* Practical Info */}
          <section style={{ marginBottom: 48 }}>
            <p className="section-label">Practical Info</p>
            <div className="practical-grid">
              <div className="practical-card safe">
                <span className="card-icon">📱</span>
                <div className="card-title">SIM & Connectivity</div>
                <div className="card-body">Viettel or Vietnamobile available locally. Unlimited data from ~150,000 VND/month.</div>
              </div>
              <div className="practical-card warn">
                <span className="card-icon">⚠️</span>
                <div className="card-title">Scam Alerts</div>
                <div className="card-body">Use Grab for transport. Agree on prices upfront for any local services.</div>
              </div>
              <div className="practical-card safe">
                <span className="card-icon">💰</span>
                <div className="card-title">Money</div>
                <div className="card-body">Cash-first destination. Withdraw VND at ATMs - avoid airport exchange booths.</div>
              </div>
              <div className="practical-card warn">
                <span className="card-icon">🏥</span>
                <div className="card-title">Emergency</div>
                <div className="card-body">Police: <strong>113</strong> · Ambulance: <strong>115</strong> · Fire: <strong>114</strong></div>
              </div>
            </div>
          </section>

          {/* Related destinations */}
          {related.length > 0 && (
            <section style={{ marginBottom: 48 }}>
              <p className="section-label">More in {destination.province} Province</p>
              <div className="related-grid">
                {related.map((d) => (
                  <Link key={d.slug} href={`/destinations/${d.slug}`} className="related-card">
                    <div>
                      <div className="rc-name">{d.name}</div>
                      <div className="rc-sub">{d.province}</div>
                    </div>
                    <span className="rc-arrow">→</span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Region CTA */}
          <div className="region-cta">
            <div>
              <div className="cta-label">Explore the region</div>
              <div className="cta-title">{regionEmoji} {regionLabel}</div>
            </div>
            <Link href={`/${destination.region}-vietnam`}>View all destinations →</Link>
          </div>

        </main>
      </div>
    </>
  )
}
