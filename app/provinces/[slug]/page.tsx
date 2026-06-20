import { provinces } from "../../../data/provinces"
import { activeLocations } from "@/data/all-locations"
import { notFound } from "next/navigation"
import Link from "next/link"
import FallbackImage from "@/components/FallbackImage"
import "./province.css"

const MUNICIPAL_CITIES = ["ha-noi", "ho-chi-minh-city", "da-nang", "hai-phong", "can-tho"]

export async function generateStaticParams() {
  return provinces.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const province = provinces.find((p) => p.slug === slug)
  const isMunicipal = MUNICIPAL_CITIES.includes(slug)

  if (!province) {
    return {
      title: "Province Not Found | Solo in Vietnam",
      description: "Explore this province in Vietnam with practical tips for solo travelers.",
      alternates: { canonical: `https://www.soloinvietnam.com/provinces/${slug}` },
    }
  }

  const label = isMunicipal ? "City" : "Province"
  const description = `Explore ${province.name} ${label} as a solo traveler - discover top attractions, local tips, best time to visit, and hidden gems.`

  return {
    title: `${province.name} ${label} Travel Guide | Solo in Vietnam`,
    description,
    openGraph: {
      title: `${province.name} ${label}`,
      description,
      url: `https://www.soloinvietnam.com/provinces/${slug}`,
      images: province.heroImage ? [{ url: province.heroImage, width: 1200, height: 630 }] : [],
    },
    alternates: { canonical: `https://www.soloinvietnam.com/provinces/${slug}` },
  }
}

export default async function ProvincePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const province = provinces.find((p) => p.slug === slug)
  if (!province) return notFound()

  const isMunicipal = MUNICIPAL_CITIES.includes(slug)
  const pageLabel = isMunicipal ? "City Guide" : "Province Guide"
  const titleSuffix = isMunicipal ? "City" : "Province"

  const provinceLocations = activeLocations.filter((l) =>
    l.provinces.includes(slug)
  )

  const regionLabel =
    province.region === "north"
      ? "North Vietnam"
      : province.region === "central"
        ? "Central Vietnam"
        : "South Vietnam"

  const regionEmoji =
    province.region === "north" ? "🏔️" : province.region === "central" ? "🌊" : "🌴"

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <div className="pp">
        <nav className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="sep">›</span>
          <Link href={`/${province.region}-vietnam`}>{regionLabel}</Link>
          <span className="sep">›</span>
          <span className="current">{province.name}</span>
        </nav>

        <header
          className="hero"
          style={province.heroImage ? {
            backgroundImage: `url(${province.heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          } : {}}
        >
          {province.heroImage && (
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.4) 100%)",
            }} />
          )}
          <div className="hero-inner">
            <div className="hero-badge">{regionEmoji} {regionLabel} · {pageLabel}</div>
            <h1>{province.name} {titleSuffix}</h1>
            {province.description && (
              <p className="hero-desc">{province.description}</p>
            )}
            {province.tags && province.tags.length > 0 && (
              <div className="hero-tags">
                {province.tags.map((tag) => (
                  <span key={tag} className="hero-tag">{tag}</span>
                ))}
              </div>
            )}
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="val">{provinceLocations.length}</span>
                <span className="lbl">Locations</span>
              </div>
              {province.bestTime && (
                <div className="hero-stat">
                  <span className="val" style={{ fontSize: 13 }}>{province.bestTime}</span>
                  <span className="lbl">Best Time</span>
                </div>
              )}
            </div>
          </div>
        </header>

        <main className="content-wrap">

          {/* Quick facts */}
          {(province.capital || province.knownFor) && (
            <section style={{ marginBottom: 40 }}>
              <div className="quick-facts">
                {province.capital && (
                  <div className="fact-chip">
                    <div>
                      <div className="fc-label">Capital</div>
                      <div className="fc-val">🏙️ {province.capital}</div>
                    </div>
                  </div>
                )}
                {province.knownFor && (
                  <div className="fact-chip">
                    <div>
                      <div className="fc-label">Known For</div>
                      <div className="fc-val">⭐ {province.knownFor}</div>
                    </div>
                  </div>
                )}
                {province.bestTime && (
                  <div className="fact-chip">
                    <div>
                      <div className="fc-label">Best Time</div>
                      <div className="fc-val">📅 {province.bestTime}</div>
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Region nav */}
          <div className="region-nav">
            <div className="rn-label">Browse by region</div>
            <div className="rn-links">
              <Link href="/north-vietnam" className={province.region === "north" ? "active" : ""}>🏔️ North</Link>
              <Link href="/central-vietnam" className={province.region === "central" ? "active" : ""}>🌊 Central</Link>
              <Link href="/south-vietnam" className={province.region === "south" ? "active" : ""}>🌴 South</Link>
            </div>
          </div>

          {/* Locations */}
          <section style={{ marginBottom: 56 }}>
            <p className="section-label">
              Locations in {province.name} — {provinceLocations.length} found
            </p>
            {provinceLocations.length > 0 ? (
              <div className="dest-grid">
                {provinceLocations.map((l) => {
                  const primaryType = Array.isArray(l.type) ? l.type[0] : l.type
                  const typeIcons: Record<string, string> = {
                    beach: "🏖️", island: "🏝️", bay: "🌊", mountain: "⛰️",
                    waterfall: "💧", cave: "🕳️", forest: "🌿", nature: "🌿",
                    lake: "🏞️", river: "🏞️", temple: "🛕", pagoda: "🛕",
                    heritage: "🏯", cultural: "🎎", town: "🏘️", city: "🏙️",
                    market: "🛒", attraction: "✨", citadel: "🏰", tomb: "🪦",
                    history: "📜", landmark: "🗿",
                  }
                  const icon = typeIcons[primaryType] ?? "📍"
                  return (
                    <Link key={l.slug} href={`/locations/${l.slug}`} className="dest-card">

                      <FallbackImage
                        src={(!l.heroImage || l.heroImage.includes("placeholder")) ? "/images/coming-soon.jpg" : l.heroImage}
                        alt={l.name}
                        className="dc-img"
                      />
                      <div className="dc-body">
                        <div className="dc-name">
                          {icon} {l.name}
                          {l.status === "seasonal" && (
                            <span className="seasonal-badge">Seasonal</span>
                          )}
                        </div>
                        {l.seoDescription && (
                          <div className="dc-desc">
                            {l.seoDescription.slice(0, 80)}{l.seoDescription.length > 80 ? "…" : ""}
                          </div>
                        )}
                        {l.tags && l.tags.length > 0 && (
                          <div className="dc-tags">
                            {l.tags.slice(0, 2).map((t) => <span key={t} className="dc-tag">{t}</span>)}
                          </div>
                        )}
                        <div className="dc-footer">
                          <span className="dc-time">🗓 {l.bestTime.split("(")[0].trim()}</span>
                          <span className="dc-cta">View →</span>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            ) : (
              <div className="empty-state">
                <div className="icon">🗺️</div>
                <p>No locations listed yet for {province.name}.<br />Content coming soon.</p>
              </div>
            )}
          </section>

          {/* Local Food */}
          {province.food && province.food.length > 0 && (
            <section style={{ marginBottom: 56 }}>
              <p className="section-label">Local Food You Must Try</p>
              <div className="food-grid">
                {province.food.map((f) => (
                  <div key={f.name} className="food-card">
                    {f.image ? (
                      <img
                        src={f.image}
                        alt={f.name}
                        style={{ width: "100%", height: 140, objectFit: "cover", borderRadius: 8, marginBottom: 12 }}
                      />
                    ) : (
                      <span className="food-emoji">{f.emoji}</span>
                    )}
                    <div className="food-name">{f.name}</div>
                    <div className="food-desc">{f.description}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <div className="bottom-cta">
            <div>
              <div className="cta-label">Explore the region</div>
              <div className="cta-title">{regionEmoji} {regionLabel}</div>
            </div>
            <Link href={`/${province.region}-vietnam`}>View all destinations →</Link>
          </div>

        </main>
      </div>
    </>
  )
}
