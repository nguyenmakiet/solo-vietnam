import Link from "next/link"
import { notFound } from "next/navigation"
import { experiences, getExperienceBySlug } from "@/data/experiences"
import { Location } from "@/data/location"
import { allLocations } from "@/data/all-locations"
import "../experiences.css"

// ── Helpers ───────────────────────────────────────────────────────────────────
// Thêm vào đầu file, trước component
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

// ── Static params ─────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return experiences.map((e) => ({ slug: e.slug }))
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const experience = getExperienceBySlug(slug)
  if (!experience) return notFound()

  const matchedLocations = allLocations.filter((l) =>
    l.experiences.includes(experience.value)
  )

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <div className="exp">

        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="sep">›</span>
          <Link href="/experiences">Experiences</Link>
          <span className="sep">›</span>
          <span className="current">{experience.label}</span>
        </nav>

        {/* Hero */}
        <div className="exp-hero" style={{ backgroundColor: experience.heroColor }}>
          <div className="exp-hero-bg" style={{ backgroundColor: experience.heroColor }} />
          <div className="exp-hero-overlay" />
          <div className="exp-hero-content">
            <span className="exp-hero-icon">{experience.icon}</span>
            <div className="exp-hero-count">
              {matchedLocations.length} {matchedLocations.length === 1 ? "place" : "places"}
            </div>
            <h1>{experience.label} in Vietnam</h1>
            <p className="exp-hero-tagline">{experience.tagline}</p>
          </div>
        </div>

        {/* Locations */}
        <div className="exp-content">
          <p className="section-label">
            {matchedLocations.length > 0
              ? `${matchedLocations.length} ${matchedLocations.length === 1 ? "location" : "locations"} for ${experience.label.toLowerCase()}`
              : "Locations"}
          </p>

          {matchedLocations.length > 0 ? (
            <div className="locations-grid">
              {matchedLocations.map((loc) => (
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
                    <div className="location-card-province">
                      📍 {loc.provinces.join(", ").replace(/-/g, " ")}
                    </div>
                    <div className="location-card-desc">{loc.seoDescription}</div>
                  </div>
                  <div className="location-card-footer">
                    <span>📅 {loc.bestTime.split("(")[0].trim()}</span>
                    <span>→</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
              <div className="exp-empty">
                <span className="empty-icon">{experience.icon}</span>
              No locations yet - check back soon
              </div>
            )}

          {/* Browse other experiences */}
          <p className="section-label" style={{ marginTop: 48 }}>Browse other experiences</p>
          <div className="exp-index-grid">
            {experiences
              .filter((e) => e.slug !== experience.slug)
              .map((e) => {
                const count = allLocations.filter((l) =>
                  l.experiences.includes(e.value)
                ).length
                return (
                  <Link key={e.slug} href={`/experiences/${e.slug}`} className="exp-index-card">
                    <span className="exp-index-card-icon">{e.icon}</span>
                    <span className="exp-index-card-label">{e.label}</span>
                    <span className="exp-index-card-count">{count} {count === 1 ? "place" : "places"}</span>
                  </Link>
                )
              })}
          </div>
        </div>
      </div>
    </>
  )
}
