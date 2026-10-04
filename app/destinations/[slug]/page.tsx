import Link from "next/link"
import { notFound } from "next/navigation"
import { destinations, deriveFromLocations, EXPERIENCE_GROUP_CONFIG } from "@/data/destinations/index"
import { Location } from "@/data/location"
import { typeDisplayLabel } from "@/data/taxonomy/types"
import { allLocations, activeLocations } from "@/data/all-locations"
import ItineraryMapLoader from "@/components/ItineraryMapLoader"
import FaqAccordion from "@/components/FaqAccordion"
import "./destination.css"
import CloudinaryImage from "@/components/CloudinaryImage"
import PhotoPlaceholder from "@/components/PhotoPlaceholder"
import { stripLeadingEmoji } from "@/lib/text"
import { dotClass } from "@/lib/category-dot"
import { formatMonths, isBestMonthsReleased } from "@/data/best-months-release"

// ── Helpers ───────────────────────────────────────────────────────────────────
// null = no real photo yet (rendered as PhotoPlaceholder)
function realImage(heroImage?: string): string | null {
  if (!heroImage || heroImage.includes("placeholder")) return null
  return heroImage
}

function primaryType(type: Location["type"]) {
  return Array.isArray(type) ? type[0] : type
}

const MONTH_NAMES = Array.from({ length: 12 }, (_, i) => new Date(2000, i).toLocaleString("en", { month: "short" }))

// Presentation only: bold the lead phrase of a highlight (before the first ": "
// or " - "). The text itself is unchanged.
function splitLead(text: string): [string, string] {
  const m = text.match(/^([^\n]{3,90}?(?::| -))(\s[\s\S]*)$/)
  return m ? [m[1], m[2]] : ["", text]
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

// ── Static params ─────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }))
}

// ── Metadata ──────────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const destination = destinations.find((d) => d.slug === slug)

  if (!destination) {
    return {
      title: "Destination Not Found | Solo in Vietnam",
      description: "Travel guide for this destination in Vietnam with useful tips for solo travelers.",
      alternates: { canonical: `https://www.soloinvietnam.com/destinations/${slug}` },
    }
  }

  const description = `${destination.name} travel guide - ${destination.tagline}. Best things to do, itineraries, and practical tips for solo travelers in Vietnam.`

  return {
    title: `${destination.name} Travel Guide | Solo in Vietnam`,
    description,
    openGraph: {
      title: `${destination.name}`,
      description,
      url: `https://www.soloinvietnam.com/destinations/${slug}`,
      images: destination.heroImage ? [{ url: destination.heroImage, width: 1200, height: 630 }] : [],
    },
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

  // Build stop data map for itinerary map
  const stopDataMap: Record<string, { name: string; lat: number; lng: number; status?: string }> = {}
  const MAP_DESTINATIONS = new Set(["cat-ba", "ha-giang-loop"])
  if (MAP_DESTINATIONS.has(destination.slug) && destination.itineraries) {
    const stopSlugs = new Set(
      destination.itineraries.flatMap((itin) => itin.days.flatMap((day) => day.stops))
    )
    allLocations.forEach((loc) => {
      if (!stopSlugs.has(loc.slug)) return
      const lat = typeof loc.lat === "string" ? parseFloat(loc.lat) : loc.lat
      const lng = typeof loc.lng === "string" ? parseFloat(loc.lng) : loc.lng
      if (!isNaN(lat) && !isNaN(lng) && lat !== 0 && lng !== 0) {
        stopDataMap[loc.slug] = { name: loc.name, lat, lng, status: loc.status }
      }
    })
  }

  const regionLabel =
    destination.region === "north"
      ? "North Vietnam"
      : destination.region === "central"
      ? "Central Vietnam"
      : "South Vietnam"

  const heroImage = realImage(destination.heroImage)

  return (
    <div className={`dp region-theme-${destination.region}`}>

      {/* ── Head: text on paper, photo below ── */}
      <header className="dd-head">
        <div className="dd-container dd-head-inner">
          <nav className="dd-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep" aria-hidden="true">/</span>
            <Link href={`/${destination.region}-vietnam`}>{regionLabel}</Link>
            <span className="sep" aria-hidden="true">/</span>
            <Link href={`/provinces/${destination.provinceSlug}`}>{destination.province}</Link>
            <span className="sep" aria-hidden="true">/</span>
            <span className="current" aria-current="page">{destination.name}</span>
          </nav>

          <h1>{destination.name}</h1>
          {destination.tagline && <p className="dd-tagline">{destination.tagline}</p>}

          {destination.tags && destination.tags.length > 0 && (
            <p className="dd-tags">{destination.tags.map(stripLeadingEmoji).join(" · ")}</p>
          )}
          {destination.travelStyle && destination.travelStyle.length > 0 && (
            <p className="dd-styles">{destination.travelStyle.map((ts) => TRAVEL_STYLE_LABEL[ts] ?? ts).join(" · ")}</p>
          )}

          <dl className="dd-facts">
            <div className="dd-fact">
              <dt>Province</dt>
              <dd>{destination.province}</dd>
            </div>
            {destination.recommendedStay && (
              <div className="dd-fact">
                <dt>Stay</dt>
                <dd>{destination.recommendedStay}</dd>
              </div>
            )}
            {destination.transport && (
              <div className="dd-fact dd-fact--wide">
                <dt>Transport</dt>
                <dd>{destination.transport}</dd>
              </div>
            )}
          </dl>
        </div>
      </header>

      {heroImage && (
        <div className="dd-hero-media">
          <CloudinaryImage
            src={heroImage}
            alt={destination.name}
            fill
            sizes="(min-width: 1200px) 1200px, 100vw"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      )}

      <main className="dd-container dd-main">

        {/* Intro */}
        <div className="dd-intro">
          <p>{destination.description}</p>
        </div>

        {/* Best Months */}
        {bestMonths.length > 0 && (
          <section className="dp-section dd-months" aria-labelledby="h-months">
            <h2 id="h-months" className="section-label">Best Months to Visit</h2>
            <div
              className="month-strip"
              role="img"
              aria-label={`Best months to visit: ${bestMonths.slice().sort((a, b) => a - b).map((m) => MONTH_NAMES[m - 1]).join(", ")}`}
            >
              {MONTH_NAMES.map((name, i) => (
                <span key={name} className={`month-cell${bestMonths.includes(i + 1) ? " active" : ""}`} aria-hidden="true">
                  {name}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Highlights */}
        {highlights.length > 0 && (
          <section className="dp-section" aria-labelledby="h-highlights">
            <h2 id="h-highlights" className="section-label">Highlights</h2>
            <ol className="dd-highlights">
              {highlights.map((h, i) => {
                const [lead, rest] = splitLead(h.text)
                return (
                  <li key={h.text} className="dd-highlight">
                    <Link href={`/locations/${h.locationSlug}`}>
                      <span className="dd-hl-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                      <span className="dd-hl-text">
                        {lead && <strong>{lead}</strong>}{rest}
                      </span>
                      <span className="dd-hl-arrow" aria-hidden="true">→</span>
                      {locationNameMap[h.locationSlug] && (
                        <span className="dd-hl-place">{locationNameMap[h.locationSlug]}</span>
                      )}
                    </Link>
                  </li>
                )
              })}
            </ol>
          </section>
        )}

        {/* What To Do */}
        {Object.keys(whatToDo).length > 0 && (
          <section className="dp-section" aria-labelledby="h-whatdo">
            <h2 id="h-whatdo" className="section-label">What To Do</h2>
            <div className="dd-whatdo">
              {Object.entries(whatToDo).map(([group, experiences]) => (
                <div key={group} className="dd-whatdo-group">
                  <h3>{EXPERIENCE_GROUP_CONFIG[group]?.label ?? group}</h3>
                  <ul className="dd-chips">
                    {experiences.map((exp) => (
                      <li key={exp} className="dd-chip">
                        <span className={dotClass(exp)} aria-hidden="true" />
                        {formatSlug(exp)}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Places to Visit */}
        <section className="dp-section" aria-labelledby="h-places">
          <h2 id="h-places" className="section-label">
            <span>
              Places to Visit
              {destinationLocations.length > 0 && <span className="dd-count"> · {destinationLocations.length} spots</span>}
            </span>
          </h2>
          {destinationLocations.length > 0 ? (
            <div className="dd-places">
              {destinationLocations.map((loc) => {
                const img = realImage(loc.heroImage)
                const type = primaryType(loc.type)
                const best = isBestMonthsReleased(loc.slug) && loc.bestMonths?.length ? formatMonths(loc.bestMonths) : loc.bestSeasonNote ?? loc.bestTimeOfDay
                return (
                  <Link key={loc.slug} href={`/locations/${loc.slug}`} className="dd-place">
                    <div className="dd-place-media">
                      {img ? (
                        <CloudinaryImage
                          src={img}
                          alt={loc.name}
                          fill
                          sizes="(min-width: 960px) 300px, (min-width: 640px) 50vw, 100vw"
                        />
                      ) : (
                        <PhotoPlaceholder />
                      )}
                    </div>
                    <div className="dd-place-body">
                      <div className="dd-place-meta">
                        <span className="ui-dot-label">
                          <span className={dotClass(type)} aria-hidden="true" />
                          {typeDisplayLabel(type)}
                        </span>
                        {loc.status === "seasonal" && <span className="dd-status dd-status--seasonal">Seasonal</span>}
                        {loc.status === "temporarily-closed" && <span className="dd-status">Temporarily Closed</span>}
                        {loc.status === "seasonally-closed" && <span className="dd-status">Seasonally Closed</span>}
                        {loc.status === "closed" && <span className="dd-status">Closed</span>}
                      </div>
                      <h3 className="dd-place-name">{loc.name}</h3>
                      <p className="dd-place-desc">{loc.seoDescription}</p>
                    </div>
                    <div className="dd-place-foot">
                      <span className="dd-place-best">{best}</span>
                      <span className="dd-place-arrow" aria-hidden="true">→</span>
                    </div>
                  </Link>
                )
              })}
            </div>
          ) : (
            <div className="dd-empty">Location guides coming soon</div>
          )}
        </section>

        {/* Itinerary Map */}
        {MAP_DESTINATIONS.has(destination.slug) && destination.itineraries && destination.itineraries.length > 0 && (
          <section className="dp-section" aria-labelledby="h-route">
            <h2 id="h-route" className="section-label">Route Map</h2>
            <ItineraryMapLoader itineraries={destination.itineraries} stopDataMap={stopDataMap} />
          </section>
        )}

        {/* Itineraries */}
        {destination.itineraries && destination.itineraries.length > 0 && (
          <section className="dp-section" aria-labelledby="h-itins">
            <h2 id="h-itins" className="section-label">Suggested Itineraries</h2>
            <div className="dd-itins">
              {destination.itineraries.map((itin) => (
                <article key={itin.duration} className="dd-itin">
                  <div className="dd-itin-head">
                    <span className="dd-itin-duration">{itin.duration}</span>
                    <h3>{itin.label}</h3>
                  </div>
                  <div>
                    {itin.days.map((day) => (
                      <div key={day.day} className="dd-day">
                        <div className="dd-day-head">
                          <span className="dd-day-num">Day {day.day}</span>
                          <span className="dd-day-title">{day.title}</span>
                          {day.distance && <span className="dd-day-distance">{day.distance}</span>}
                        </div>
                        {day.stops.length > 0 && (
                          <p className="dd-stops">
                            {day.stops.map((stop, i) => (
                              <span key={stop}>
                                {i > 0 && <span className="dd-stop-sep" aria-hidden="true">·</span>}
                                {locationNameMap[stop] ? (
                                  <Link href={`/locations/${stop}`}>{locationNameMap[stop]}</Link>
                                ) : (
                                  formatSlug(stop)
                                )}
                              </span>
                            ))}
                          </p>
                        )}
                        {day.notes && <p className="dd-day-notes">{day.notes}</p>}
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Getting There */}
        {destination.gettingThere && destination.gettingThere.length > 0 && (
          <section className="dp-section" aria-labelledby="h-getting">
            <h2 id="h-getting" className="section-label">Getting There</h2>
            <div className="dd-rows dd-routes">
              {destination.gettingThere.map((opt, i) => (
                <div key={i} className="dd-route">
                  <div className="dd-route-top">
                    <div>
                      <span className="dd-route-from">{opt.from}</span>
                      <span className="dd-route-vehicle">{opt.vehicle}</span>
                    </div>
                    <div className="dd-route-right">
                      <span className="dd-route-duration">{opt.duration}</span>
                      <span className="dd-route-cost">{opt.cost}</span>
                    </div>
                  </div>
                  {opt.notes && <p className="dd-route-notes">{opt.notes}</p>}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Plan Your Trip (Budget per Day intentionally not shown) */}
        {(destination.bestTimeSummary || destination.recommendedStay) && (
          <section className="dp-section" aria-labelledby="h-plan">
            <h2 id="h-plan" className="section-label">Plan Your Trip</h2>
            <dl className="dd-rows dd-plans">
              {destination.bestTimeSummary && (
                <div className="dd-plan">
                  <dt>Best Time to Visit</dt>
                  <dd>{destination.bestTimeSummary}</dd>
                </div>
              )}
              {destination.recommendedStay && (
                <div className="dd-plan">
                  <dt>Recommended Stay</dt>
                  <dd>{destination.recommendedStay}</dd>
                </div>
              )}
            </dl>
          </section>
        )}

        {/* Related destinations */}
        {related.length > 0 && (
          <section className="dp-section" aria-labelledby="h-related">
            <h2 id="h-related" className="section-label">More in {destination.province} Province</h2>
            <ul className="dd-related">
              {related.map((d) => (
                <li key={d.slug}>
                  <Link href={`/destinations/${d.slug}`}>
                    <span>
                      <span className="dd-related-name">{d.name}</span>
                      <span className="dd-related-sub">{d.province}</span>
                    </span>
                    <span className="dd-related-arrow" aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* FAQ */}
        {destination.faqs && destination.faqs.length > 0 && (
          <FaqAccordion faqs={destination.faqs} />
        )}

      </main>

      {/* Region CTA: teal-ink band into the footer */}
      <section className="dd-cta" aria-label="Explore the region">
        <div className="dd-container dd-cta-inner">
          <div>
            <p className="dd-cta-label">Explore the region</p>
            <p className="dd-cta-title">{regionLabel}</p>
          </div>
          <Link href={`/${destination.region}-vietnam`} className="ui-btn">View all destinations →</Link>
        </div>
      </section>
    </div>
  )
}
