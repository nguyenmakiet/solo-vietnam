import Link from "next/link"
import { notFound } from "next/navigation"
import { locationTheme } from "@/data/location"
import { allLocations } from "@/data/all-locations"
import { experiences } from "@/data/experiences"
import { provinces } from "@/data/provinces"
import LocationTabs from "./LocationTabs"
import "./location.css"
import NearbyLocations from "./NearbyLocations"
import GalleryLightbox from "./GalleryLightbox"
import GetDirectionsButton from "./GetDirectionsButton"


function toDecimal(val: number | string): number {
  if (typeof val === "number") return val
  const match = val.match(/(\d+)°(\d+)'([\d.]+)"([NSEW])/)
  if (!match) return parseFloat(val)
  const [, d, m, s, dir] = match
  const decimal = Number(d) + Number(m) / 60 + Number(s) / 3600
  return dir === "S" || dir === "W" ? -decimal : decimal
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const location = allLocations.find((l) => l.slug === slug)

  if (!location) {
    return {
      description: "Discover this location in Vietnam with helpful tips for solo travelers.",
      alternates: { canonical: `https://www.soloinvietnam.com/locations/${slug}` },
    }
  }

  const provinceSlug = location.provinces[0]
  const province = provinces.find((p) => p.slug === provinceSlug)
  const area = province?.name ?? provinceSlug?.replace(/-/g, " ") ?? "Vietnam"

  const description = `${location.name} in ${area} - what to expect, how to get there, best time to visit, and insider tips.`

  return {
    description,
    openGraph: { description },
    alternates: { canonical: `https://www.soloinvietnam.com/locations/${slug}` },
  }
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const location = allLocations.find((l) => l.slug === slug)
  if (!location) notFound()

  const primaryType = Array.isArray(location.type) ? location.type[0] : location.type
  const typeLabel = Array.isArray(location.type) ? location.type.join(" · ") : location.type
  const theme = locationTheme[primaryType] ?? "gray"

  return (
    <div className={`lp theme-${theme}`}>

      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <Link href="/">Home</Link>
        {location.destination && (
          <>
            <span className="sep">›</span>
            <Link href={`/destinations/${location.destination}`}>
              {location.destination.replace(/-/g, " ")}
            </Link>
          </>
        )}
        <span className="sep">›</span>
        <span className="current">{location.name}</span>
      </nav>

      {/* Hero */}
      <header
        className="hero"
        style={location.heroImage ? {
          backgroundImage: `url(${location.heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        } : {}}
      >
        {location.heroImage && (
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.3) 100%)"
          }} />
        )}
        <div className="hero-inner">
          <div className="hero-badge">
            📍 {typeLabel}{location.destination && ` · ${location.destination.replace(/-/g, " ")}`}
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

      {/* Map */}
      <div className="map-wrap">
        <iframe
          src={`https://maps.google.com/maps?q=${toDecimal(location.lat)},${toDecimal(location.lng)}&z=15&output=embed`}
          allowFullScreen
          loading="lazy"
        />
        <GetDirectionsButton
          lat={toDecimal(location.lat)}
          lng={toDecimal(location.lng)}
          label={location.name}
        />
      </div>

      {/* Tabs */}
      <LocationTabs />

      <main className="content-wrap">

        {/* Overview */}
        <div id="overview" className="section-anchor">
          <p className="section-label">Overview</p>
          <div className="overview-grid">
            <div className="overview-card">
              <div className="oc-label">Best Time to Visit</div>
              <div className="oc-val">📅 {location.bestTime}</div>
            </div>
            {location.entranceFee && (
              <div className="overview-card">
                <div className="oc-label">Entry Fee</div>
                <div className="oc-val">🎟️ {location.entranceFee}</div>
              </div>
            )}
            {location.openingHours && (
              <div className="overview-card">
                <div className="oc-label">Opening Hours</div>
                <div className="oc-val">🕐 {location.openingHours}</div>
              </div>
            )}
            <div className="overview-card">
              <div className="oc-label">Address</div>
              <div className="oc-val">📌 {location.address}</div>
            </div>
          </div>
        </div>

        {/* Things to Know */}
        {location.insights?.thingsToKnow && (() => {
          const ttk = location.insights!.thingsToKnow
          type Entry = { label: string; icon: string; value: string }
          const entries: Entry[] = []
          if (ttk.crowds)        entries.push({ label: "Crowds",        icon: "👥", value: ttk.crowds })
          if (ttk.difficulty)    entries.push({ label: "Difficulty",    icon: "🥾", value: ttk.difficulty })
          if (ttk.safety)        entries.push({ label: "Safety",        icon: "⚠️", value: ttk.safety })
          if (ttk.accessibility) entries.push({ label: "Accessibility", icon: "🚶", value: ttk.accessibility })
          if (ttk.seasonal)      entries.push({ label: "Seasonal",      icon: "🌤️", value: ttk.seasonal })
          if (entries.length === 0) return null
          return (
            <div id="things-to-know" className="section-anchor">
              <p className="section-label">Things to Know</p>
              <div className="ttk-list">
                {entries.map(({ label, icon, value }) => (
                  <div key={label} className="ttk-row">
                    <div className="ttk-label">
                      <span className="ttk-icon">{icon}</span>
                      <span>{label}</span>
                    </div>
                    <div className="ttk-value">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          )
        })()}

        {/* What Makes This Place Special */}
          {location.content?.intro && (
            <div id="about" className="section-anchor">
              <div className="section-label">
                ABOUT THIS PLACE
              </div>
              <div className="content-section">
                <h3>What Makes {location.name} Special</h3>
                <p>{location.content.intro}</p>
              </div>
            </div>
          )}

        {/* Gallery */}
        <div id="gallery" className="section-anchor">
          <p className="section-label">Gallery</p>
          {location.gallery.length > 0 || location.streetView ? (
            <GalleryLightbox
              publicIds={location.gallery}
              locationName={location.name}
              streetViewUrl={location.streetView
                ? (location.streetView.embedUrl
                    ?? (location.streetView.lat && location.streetView.lng
                        ? `https://www.google.com/maps?q=&layer=c&cbll=${toDecimal(location.streetView.lat)},${toDecimal(location.streetView.lng)}&output=embed`
                        : undefined))
                : undefined}
            />
          ) : (
            <div className="gallery-grid">
              <div className="gallery-empty">Photos coming soon</div>
            </div>
          )}
        </div>

        {/* How to Get There */}
        <div id="how-to-get-there" className="section-anchor">
          <p className="section-label">How to Get There</p>
          <div className="content-section">
            <h3>🚗 Getting There</h3>
            <p>{location.content.howToGetThere}</p>
          </div>
        </div>

        {/* What to Expect */}
        <div id="what-to-expect" className="section-anchor">
          <p className="section-label">What to Expect</p>
          <div className="content-section">
            <h3>👀 On the Ground</h3>
            <p>{location.content.whatToExpect}</p>
          </div>
        </div>

        {/* Travel Tips */}
        <div id="travel-tips" className="section-anchor">
          <p className="section-label">Travel Tips</p>
          <div className="content-section">
            <h3>🧳 Tips</h3>
            <p>{location.content.travelTips}</p>
          </div>
        </div>

        {/* Insider Tips */}
        {(location.tips.length > 0 || (location.insights?.visitorTips?.length ?? 0) > 0) && (
          <div id="insider-tips" className="section-anchor">
            <p className="section-label">Insider Tips</p>
            <p className="section-subtext">Based on real traveler experiences and commonly mentioned advice from multiple visitors.</p>
            <div className="tips-list">
              {location.insights?.visitorTips?.map((tip, i) => (
                <div key={`vt-${i}`} className="tip-item">
                  <div className="tip-dot" />
                  <span>{tip}</span>
                </div>
              ))}
              {location.tips.map((tip, i) => (
                <div key={`t-${i}`} className="tip-item">
                  <div className="tip-dot" />
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQ */}
        {location.insights?.faq && location.insights.faq.length > 0 && (
          <div id="faq" className="section-anchor">
            <p className="section-label">FAQ</p>
            <p className="section-subtext">Common questions from travelers who&apos;ve visited this place.</p>
            <div className="faq-list">
              {location.insights.faq.map((item, i) => (
                <details key={i} className="faq-item">
                  <summary className="faq-question">
                    <span>{item.question}</span>
                    <span className="faq-chevron">›</span>
                  </summary>
                  <div className="faq-answer">{item.answer}</div>
                </details>
              ))}
            </div>
          </div>
        )}

        {/* Nearby Locations */}
        <NearbyLocations currentSlug={slug} />

        {/* Similar Experiences */}
        {location.experiences.length > 0 && (() => {
          const matched = location.experiences
            .map(val => experiences.find(e => e.value === val))
            .filter(Boolean) as typeof experiences
          if (matched.length === 0) return null
          return (
            <div id="similar-experiences" className="section-anchor">
              <div style={{ marginBottom: 16 }}>
                <p className="section-label">
                  <Link href="/experiences" className="section-label-link">Similar Experiences</Link>
                </p>
                <p style={{ fontSize: 14, color: "var(--text-muted, #6b7280)", marginTop: 4 }}>
                  Explore more things to do like this around Vietnam
                </p>
              </div>
              <div className="exp-links">
                {matched.map(exp => (
                  <Link key={exp.slug} href={`/experiences/${exp.slug}`} className="exp-link">
                    <span className="exp-link-icon">{exp.icon}</span>
                    <span className="exp-link-label">{exp.label}</span>
                    <span className="exp-link-arrow">→</span>
                  </Link>
                ))}
              </div>
            </div>
          )
        })()}

        {/* Bottom CTA */}
        {location.destination && (
          <div className="bottom-cta">
            <div>
              <div className="cta-label">Explore more</div>
              <div className="cta-title">
                {location.destination.replace(/-/g, " ")} - Full Guide
              </div>
            </div>
            <Link href={`/destinations/${location.destination}`}>
              View destination guide →
            </Link>
          </div>
        )}

      </main>
    </div>
  )
}
