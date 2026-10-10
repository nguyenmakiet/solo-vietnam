import type { Metadata } from "next"
import Link from "next/link"
import VietnamMap, { VietnamMapLegend } from "@/components/VietnamMap"
import CloudinaryImage from "@/components/CloudinaryImage"
import { destinations } from "@/data/destinations/index"
import { experiences as allExperiences } from "@/data/experiences"
import { stripLeadingEmoji } from "@/lib/text"
import { dotClass } from "@/lib/category-dot"
import { LOCATION_COUNT_LABEL } from "@/lib/site-stats"
import { buildMapProvinceData } from "@/lib/map-province-data"
import "./homepage.css"
import { OG_FALLBACK_IMAGE } from "@/lib/cloudinary"

const META_TITLE = "Solo in Vietnam - Travel Guides for Solo Travelers"
const META_DESCRIPTION = `Practical travel guides for solo travelers in Vietnam - ${LOCATION_COUNT_LABEL} places mapped, with safety tips, scam alerts, transport guides, and local insights.`

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: "Solo in Vietnam",
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: "https://www.soloinvietnam.com",
    images: [{ url: OG_FALLBACK_IMAGE, width: 1200, height: 630 }],
  },
}

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

// Photography strip: the first four featured destination photos (no new assets)
const stripPhotos = featured.filter((d) => d.heroImage).slice(0, 4)

const experiences = ["beaches", "trekking", "camping", "food"].flatMap((slug) => {
  const e = allExperiences.find((x) => x.slug === slug)
  return e ? [{ label: e.label, value: e.value, tagline: e.tagline, href: `/experiences/${slug}` }] : []
})

export default function Home() {
  return (
    <main className="home-wrap">

      {/* ── HERO ── */}
      <section className="home-hero">
        <div className="home-hero-inner">
          <h1>
            Want to explore Vietnam - but not sure where to start?
          </h1>

          <p className="home-discovery-text">
            From{" "}
            <Link href="/locations?type=forest" className="discovery-link">ancient forests</Link>
            {" "}where crocodiles still drift,{" "}
            <Link href="/locations?type=beach" className="discovery-link">quiet beaches</Link>
            {" "}that still feel wild and{" "}
            <Link href="/locations?experience=homestay" className="discovery-link">mountain villages</Link>
            {" "}tucked into mist, to{" "}
            <Link href="/locations?experience=nightlife" className="discovery-link">chaotic city streets</Link>
            {" "}and the{" "}
            <Link href="/locations?type=citadel&type=temple&experience=history&category=history&tag=champa-heritage&tag=nguyen-dynasty&tag=medieval-vietnam" className="discovery-link">ruins of dynasties</Link>
            {" "}that shaped this country.
          </p>
          <p className="home-discovery-closing">
            I didn&apos;t know where to start either. So I started everywhere.
          </p>
          <Link href="/locations" className="ui-btn">
            Let&apos;s figure it out together.
          </Link>
        </div>
      </section>

      {/* ── PHOTOGRAPHY STRIP ── */}
      {stripPhotos.length > 0 && (
        <section className="home-strip" aria-label="Featured destinations in photos">
          {stripPhotos.map((d, i) => (
            <Link key={d.slug} href={`/destinations/${d.slug}`} className="home-strip-item">
              <CloudinaryImage
                src={d.heroImage!}
                alt={d.name}
                fill
                // All four sit in the first viewport on desktop. On mobile only three show:
                // the 4th is hidden by CSS, and "0vw" resolves it to the smallest (16px) candidate.
                sizes={i < 3 ? "(min-width: 768px) 25vw, 34vw" : "(min-width: 768px) 25vw, 0vw"}
                loading="eager"
                fetchPriority={i < 3 ? "high" : "auto"}
              />
            </Link>
          ))}
        </section>
      )}

      {/* ── STATS ── */}
      <section className="home-stats-section">
        <dl className="home-stats">
          <div className="home-stat">
            <dt className="home-stat-label">Locations explored</dt>
            <dd className="home-stat-num">{LOCATION_COUNT_LABEL}</dd>
          </div>
          <div className="home-stat">
            <dt className="home-stat-label">Provinces explored</dt>
            <dd className="home-stat-num">63</dd>
          </div>
        </dl>
      </section>

      {/* ── MAP ── */}
      <section className="home-map-section">
        <div className="home-map-inner">
          <div className="home-map-card">
            <div className="home-map-summary">
              <h2>Explore Vietnam on the Map</h2>
              <p>Discover {LOCATION_COUNT_LABEL} places across the country</p>
              <VietnamMapLegend className="home-map-legend" />
              <p className="home-map-hint">Click a province to explore destinations</p>
              <Link href="/provinces" className="ui-link home-map-browse">
                Browse all provinces →
              </Link>
            </div>
            <div className="home-map-canvas">
              <VietnamMap provinceData={buildMapProvinceData()} />
            </div>
          </div>

          <Link href="/map" className="home-map-cta-banner">
            <div>
              <div className="home-map-cta-title">Explore {LOCATION_COUNT_LABEL} locations across Vietnam</div>
              <div className="home-map-cta-sub">Filter by beaches, trekking, caves, food & more</div>
            </div>
            <span className="ui-btn home-map-cta-btn">Open map →</span>
          </Link>
        </div>
      </section>

      {/* ── FEATURED DESTINATIONS ── */}
      <section className="home-section-band">
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
            <Link href="/destinations" className="ui-link home-section-link">
              View all →
            </Link>
          </div>

          <div className="home-dest-grid">
            {featured.map((d) => (
              <Link key={d.slug} href={`/destinations/${d.slug}`} className="home-dest-card">
                <div className="home-dest-card-img">
                  {d.heroImage && (
                    <CloudinaryImage
                      src={d.heroImage}
                      alt={d.name}
                      fill
                      sizes="(min-width: 900px) 360px, (min-width: 560px) 50vw, 100vw"
                    />
                  )}
                </div>
                <div className="home-dest-card-body">
                  {d.tags && (
                    <div className="home-dest-card-tags">
                      {d.tags.slice(0, 2).map((t) => {
                        const label = stripLeadingEmoji(t)
                        return (
                          <span key={t} className="ui-dot-label">
                            <span className={dotClass(label)} aria-hidden="true" />
                            {label}
                          </span>
                        )
                      })}
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
      </section>

      {/* ── TRAVEL EXPERIENCES ── */}
      <section>
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
            <Link href="/experiences" className="ui-link home-section-link">
              View all →
            </Link>
          </div>

          <ul className="home-exp-list">
            {experiences.map((e) => (
              <li key={e.label}>
                <Link href={e.href} className="home-exp-item">
                  <span className="home-exp-label">
                    <span className={dotClass(e.value)} aria-hidden="true" />
                    {e.label}
                  </span>
                  <span className="home-exp-tagline">{e.tagline}</span>
                  <span className="home-exp-arrow" aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── WHY SOLO VIETNAM (flows into the footer as one teal-ink band) ── */}
      <section className="home-why-band">
        <div className="home-section">
          <div className="home-section-header home-section-header-center">
            <div className="home-section-eyebrow">Why this site</div>
            <h2 className="home-section-title">
              Built for solo travelers.<br /><em>Not tour groups.</em>
            </h2>
          </div>
          <div className="home-why-grid">
            <div className="home-why-card">
              <div className="home-why-title">Practical, not pretty</div>
              <div className="home-why-desc">
                Real scam alerts, actual prices, honest safety info - not sponsored content dressed up as travel advice.
              </div>
            </div>
            <div className="home-why-card">
              <div className="home-why-title">Up to date info</div>
              <div className="home-why-desc">
                Regularly updated guides with current prices, recent scam alerts, and the latest travel conditions - not outdated blog posts from years ago.
              </div>
            </div>
            <div className="home-why-card">
              <div className="home-why-title">Local knowledge</div>
              <div className="home-why-desc">
                Written by someone who actually lives here - a Vietnamese local sharing real travel insights.
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
