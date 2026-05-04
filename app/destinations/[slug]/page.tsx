import Link from "next/link"
import { notFound } from "next/navigation"
import { destinations, deriveFromLocations, EXPERIENCE_GROUP_CONFIG } from "@/data/destinations/index"
import { Location } from "@/data/location"
import { allLocations, activeLocations } from "@/data/all-locations"
import "./destination.css"

// ── Helpers ───────────────────────────────────────────────────────────────────
function getImageSrc(heroImage?: string): string {
  if (!heroImage || heroImage.includes("placeholder")) return "/images/coming-soon.jpg"
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

function formatSlug(slug: string): string {
  return slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
}

const TRAVEL_STYLE_LABEL: Record<string, string> = {
  "solo-friendly": "Solo Friendly",
  budget: "Budget",
  luxury: "Luxury",
  adventure: "Adventure",
  "hidden-gem": "Hidden Gem",
  family: "Family",
  easy: "Easy",
  challenging: "Challenging",
}

const VEHICLE_ICON: Record<string, string> = {
  fly: "✈️",
  train: "🚂",
  bus: "🚌",
  ferry: "⛴️",
  motorbike: "🏍️",
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
    ? `${destination.name} travel guide - ${destination.tagline}. Best things to do, itineraries, and practical tips for solo travelers in Vietnam.`
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

  const destinationLocations = activeLocations.filter(
    (l) => l.destination === destination.slug
  )

  const locationNameMap = Object.fromEntries(allLocations.map((l) => [l.slug, l.name]))

  const derived = deriveFromLocations(destination.slug, allLocations)

  const bestMonths = derived.bestMonths.length > 0
    ? derived.bestMonths
    : destination.bestMonthsFallback ?? []

  const whatToDo = Object.keys(derived.whatToDo).length > 0
    ? derived.whatToDo
    : destination.whatToDoFallback ?? {}

  const highlights = derived.highlights.length > 0
    ? derived.highlights
    : destination.highlightsFallback ?? []

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
          <img
            src={getImageSrc(destination.heroImage)}
            alt={destination.name}
            className="hero-img"
          />
          <div className="hero-overlay" />
          <div className="hero-content">
            <div className="hero-badge">{regionEmoji} {regionLabel} · Solo Travel Guide</div>
            <h1>{destination.name}</h1>
            {destination.tagline && <p className="hero-tagline">{destination.tagline}</p>}

            {(destination.tags?.length || destination.travelStyle?.length) ? (
              <div className="hero-labels">
                {destination.tags && destination.tags.length > 0 && (
                  <div className="hero-tags">
                    {destination.tags.map((tag) => (
                      <span key={tag} className="hero-tag">{tag}</span>
                    ))}
                  </div>
                )}
                {destination.travelStyle && destination.travelStyle.length > 0 && (
                  <div className="travel-style-tags">
                    {destination.travelStyle.map((ts) => (
                      <span key={ts} className="ts-tag">{TRAVEL_STYLE_LABEL[ts] ?? ts}</span>
                    ))}
                  </div>
                )}
              </div>
            ) : null}

            <div className="hero-meta">
              <div className="hero-meta-item">
                <span className="val">{destination.province}</span>
                <span className="lbl">Province</span>
              </div>
              {destination.recommendedStay && (
                <div className="hero-meta-item">
                  <span className="val">{destination.recommendedStay}</span>
                  <span className="lbl">Stay</span>
                </div>
              )}
              {destination.cost?.budget && (
                <div className="hero-meta-item">
                  <span className="val">{destination.cost.budget}</span>
                  <span className="lbl">Budget/day</span>
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

          {/* Best Months */}
          {bestMonths.length > 0 && (
            <section className="dp-section">
              <p className="section-label">Best Months to Visit</p>
              <div className="month-pills">
                {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                  <span key={m} className={`month-pill${bestMonths.includes(m) ? " active" : ""}`}>
                    {new Date(2000, m - 1).toLocaleString("en", { month: "short" })}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Highlights */}
          {highlights.length > 0 && (
            <section className="dp-section">
              <p className="section-label">Highlights</p>
              <div className="highlights-list">
                {highlights.map((h) => (
                  <Link key={h.text} href={`/locations/${h.locationSlug}`} className="highlight-pill">
                    {h.text}
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* What To Do */}
          {Object.keys(whatToDo).length > 0 && (
            <section className="dp-section">
              <p className="section-label">What To Do</p>
              <div className="whatdo-grid">
                {Object.entries(whatToDo).map(([group, experiences]) => (
                  <div key={group} className="whatdo-group">
                    <div className="group-label">
                      {EXPERIENCE_GROUP_CONFIG[group]?.label ?? group}
                    </div>
                    <div className="exp-pills">
                      {experiences.map((exp) => (
                        <span key={exp} className="exp-pill">{formatSlug(exp)}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Places to Visit */}
          <section className="dp-section">
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
                        {loc.status === "seasonal" && <span className="seasonal-badge">Seasonal</span>}
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

          {/* Itineraries */}
          {destination.itineraries && destination.itineraries.length > 0 && (
            <section className="dp-section">
              <p className="section-label">Suggested Itineraries</p>
              <div className="itineraries-stack">
                {destination.itineraries.map((itin) => (
                  <div key={itin.duration} className="itinerary-block">
                    <div className="itinerary-header">
                      <span className="itin-duration">{itin.duration}</span>
                      <span className="itin-label">{itin.label}</span>
                    </div>
                    <div className="day-list">
                      {itin.days.map((day) => (
                        <div key={day.day} className="day-card">
                          <div className="day-header">
                            <span className="day-num">Day {day.day}</span>
                            <span className="day-title">{day.title}</span>
                            {day.distance && (
                              <span className="day-distance">{day.distance}</span>
                            )}
                          </div>
                          {day.stops.length > 0 && (
                            <div className="day-stops">
                              {day.stops.map((stop) =>
                                locationNameMap[stop] ? (
                                  <Link key={stop} href={`/locations/${stop}`} className="stop-tag linked">
                                    {locationNameMap[stop]}
                                  </Link>
                                ) : (
                                  <span key={stop} className="stop-tag">
                                    {formatSlug(stop)}
                                  </span>
                                )
                              )}
                            </div>
                          )}
                          {day.notes && <p className="day-notes">{day.notes}</p>}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Getting There */}
          {destination.gettingThere && destination.gettingThere.length > 0 && (
            <section className="dp-section">
              <p className="section-label">Getting There</p>
              <div className="transport-cards">
                {destination.gettingThere.map((opt, i) => (
                  <div key={i} className="transport-card">
                    <div className="tc-top">
                      <span className="tc-icon">{VEHICLE_ICON[opt.vehicle] ?? "🚐"}</span>
                      <div className="tc-core">
                        <span className="tc-from">{opt.from}</span>
                        <span className="tc-vehicle">{opt.vehicle}</span>
                      </div>
                      <div className="tc-right">
                        <span className="tc-duration">{opt.duration}</span>
                        <span className="tc-cost">{opt.cost}</span>
                      </div>
                    </div>
                    {opt.notes && <p className="tc-notes">{opt.notes}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Budget */}
          {destination.cost && (
            <section className="dp-section">
              <p className="section-label">Budget per Day</p>
              <div className="cost-grid">
                <div className="cost-tier">
                  <div className="ct-label">Budget</div>
                  <div className="ct-value">{destination.cost.budget}</div>
                </div>
                <div className="cost-tier mid">
                  <div className="ct-label">Mid-range</div>
                  <div className="ct-value">{destination.cost.midRange}</div>
                </div>
                <div className="cost-tier">
                  <div className="ct-label">Comfortable</div>
                  <div className="ct-value">{destination.cost.comfortable}</div>
                </div>
              </div>
              {destination.cost.notes && (
                <p className="cost-notes">{destination.cost.notes}</p>
              )}
            </section>
          )}

          {/* Plan Your Trip */}
          {(destination.bestTimeSummary || destination.recommendedStay) && (
            <section className="dp-section">
              <p className="section-label">Plan Your Trip</p>
              <div className="info-row">
                {destination.bestTimeSummary && (
                  <div className="info-card">
                    <span className="ic-icon">📅</span>
                    <div className="ic-title">Best Time to Visit</div>
                    <div className="ic-body">{destination.bestTimeSummary}</div>
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
          )}

          {/* Practical Info */}
          <section className="dp-section">
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
            <section className="dp-section">
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
