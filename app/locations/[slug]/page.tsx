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
import ContentRenderer from "./ContentRenderer"
import { InlineRichText } from "./RichText"
import { tagDisplayLabel } from "@/data/taxonomy/tags"
import { typeDisplayLabel } from "@/data/taxonomy/types"
import { isBestMonthsReleased } from "@/data/best-months-release"
import { getNearbyLocations } from "@/lib/nearbyLocations"
import { dotClass } from "@/lib/category-dot"
import CloudinaryImage from "@/components/CloudinaryImage"

const STATUS_ALERT: Record<"temporarily-closed" | "closed" | "seasonally-closed" | "partially-closed", { label: string }> = {
  "temporarily-closed": { label: "Temporarily Closed." },
  "closed": { label: "Closed." },
  "seasonally-closed": { label: "Seasonally Closed." },
  "partially-closed": { label: "Partially Closed." },
}

const MONTH_NAMES = Array.from({ length: 12 }, (_, i) => new Date(2000, i).toLocaleString("en", { month: "short" }))

function toDecimal(val: number | string): number {
  if (typeof val === "number") return val
  const match = val.match(/(\d+)°(\d+)'([\d.]+)"([NSEW])/)
  if (!match) return parseFloat(val)
  const [, d, m, s, dir] = match
  const decimal = Number(d) + Number(m) / 60 + Number(s) / 3600
  return dir === "S" || dir === "W" ? -decimal : decimal
}

export async function generateStaticParams() {
  return allLocations.map((l) => ({ slug: l.slug }))
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
      title: "Location Not Found | Solo in Vietnam",
      description: "Discover this location in Vietnam with helpful tips for solo travelers.",
      alternates: { canonical: `https://www.soloinvietnam.com/locations/${slug}` },
    }
  }

  const provinceSlug = location.provinces[0]
  const province = provinces.find((p) => p.slug === provinceSlug)
  const area = province?.name ?? provinceSlug?.replace(/-/g, " ") ?? "Vietnam"

  const description = `${location.name} in ${area} - what to expect, how to get there, best time to visit, and insider tips for solo travelers.`

  return {
    title: `${location.name}, ${area} - Travel Guide | Solo in Vietnam`,
    description,
    openGraph: {
      title: `${location.name}, ${area}`,
      description,
      url: `https://www.soloinvietnam.com/locations/${slug}`,
      images: location.heroImage ? [{ url: location.heroImage, width: 1200, height: 630 }] : [],
    },
    alternates: {
      canonical: `https://www.soloinvietnam.com/locations/${slug}`,
    },
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
  const typeLabel = (Array.isArray(location.type) ? location.type : [location.type]).map(typeDisplayLabel).join(" · ")
  const theme = locationTheme[primaryType] ?? "gray"
  const destinationName = location.destination?.replace(/-/g, " ")

  // Things to Know rows (shown only when present)
  const ttk = location.insights?.thingsToKnow
  const ttkEntries: { label: string; value: string }[] = []
  if (ttk?.crowds)        ttkEntries.push({ label: "Crowds",        value: ttk.crowds })
  if (ttk?.difficulty)    ttkEntries.push({ label: "Difficulty",    value: ttk.difficulty })
  if (ttk?.safety)        ttkEntries.push({ label: "Safety",        value: ttk.safety })
  if (ttk?.accessibility) ttkEntries.push({ label: "Accessibility", value: ttk.accessibility })
  if (ttk?.seasonal)      ttkEntries.push({ label: "Seasonal",      value: ttk.seasonal })

  const hasTips = location.tips.length > 0 || (location.insights?.visitorTips?.length ?? 0) > 0
  const hasFaq = (location.insights?.faq?.length ?? 0) > 0
  const showBestMonths = isBestMonthsReleased(location.slug) && (location.bestMonths?.length ?? 0) > 0

  // Section ids that exist on this page - the contents bar only lists these
  const c = location.content
  const contentIds = c.richSections?.length
    ? c.richSections.map((sec) => sec.id)
    : [c.intro && "about", c.howToGetThere && "how-to-get-there", c.whatToExpect && "what-to-expect", c.travelTips && "travel-tips"].filter(Boolean) as string[]
  const sectionIds = [
    "overview",
    ...(ttkEntries.length ? ["things-to-know"] : []),
    "gallery",
    ...contentIds,
    ...(hasTips ? ["insider-tips"] : []),
    ...(hasFaq ? ["faq"] : []),
    ...(getNearbyLocations(slug).length ? ["nearby"] : []),
  ]

  const updatedLabel = location.updatedAt
    ? new Date(location.updatedAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : null

  return (
    <div className={`lp type-theme-${theme}`}>

      {/* Head: breadcrumb + title on the type tint */}
      <header className="lp-head">
        <div className="lp-container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            {location.destination && (
              <>
                <span className="sep" aria-hidden="true">/</span>
                <Link href={`/destinations/${location.destination}`}>{destinationName}</Link>
              </>
            )}
            <span className="sep" aria-hidden="true">/</span>
            <span className="current" aria-current="page">{location.name}</span>
            {updatedLabel && (
              <span className="breadcrumb-updated">Updated {updatedLabel}</span>
            )}
          </nav>

          <div className="hero-badge">
            <span className="hero-badge-dot" aria-hidden="true" />
            {typeLabel}{destinationName && ` · ${destinationName}`}
          </div>
          <h1>{location.name}</h1>
          <p className="hero-seo">{location.seoDescription}</p>
          {location.tags.length > 0 && (
            <p className="hero-tags">{location.tags.map(tagDisplayLabel).join(" · ")}</p>
          )}
        </div>
      </header>

      {/* Status Alert */}
      {(location.status === "temporarily-closed" || location.status === "closed" || location.status === "seasonally-closed" || location.status === "partially-closed") && (
        <div className={`status-alert status-alert--${location.status}`} role="status">
          <span className="status-alert-text">
            <strong>{STATUS_ALERT[location.status].label}</strong>
            {location.statusNote && ` ${location.statusNote}`}
          </span>
        </div>
      )}

      {/* Hero photo */}
      {location.heroImage && (
        <div className="lp-hero-media">
          <CloudinaryImage
            src={location.heroImage}
            alt={location.name}
            fill
            sizes="(min-width: 1200px) 1200px, 100vw"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      )}

      {/* Section navigation + content: the sticky bar's scope ends with the content,
          so it scrolls away before the closing CTA band */}
      <div>
      <LocationTabs available={sectionIds} />

      <main className="content-wrap">

        {/* Overview */}
        <section id="overview" className="section-anchor ov-section" aria-labelledby="h-overview">
          <h2 id="h-overview" className="section-label">Overview</h2>
          <dl className="overview">
            {showBestMonths ? (
              <div className="ov-row">
                <dt className="ov-label">Best months</dt>
                <dd className="ov-val">
                  <div
                    className="month-strip"
                    role="img"
                    aria-label={`Best months to visit: ${location.bestMonths!.slice().sort((a, b) => a - b).map((m) => MONTH_NAMES[m - 1]).join(", ")}`}
                  >
                    {MONTH_NAMES.map((name, i) => (
                      <span key={name} className={`month-cell${location.bestMonths!.includes(i + 1) ? " active" : ""}`} aria-hidden="true">
                        {name}
                      </span>
                    ))}
                  </div>
                  {location.bestSeasonNote && <p className="ov-note"><InlineRichText text={location.bestSeasonNote} /></p>}
                </dd>
              </div>
            ) : location.bestSeasonNote ? (
              <div className="ov-row">
                <dt className="ov-label">Best time to visit</dt>
                <dd className="ov-val"><InlineRichText text={location.bestSeasonNote} /></dd>
              </div>
            ) : null}
            {location.bestTimeOfDay && (
              <div className="ov-row">
                <dt className="ov-label">Best time of day</dt>
                <dd className="ov-val"><InlineRichText text={location.bestTimeOfDay} /></dd>
              </div>
            )}
            {location.entranceFee && (
              <div className="ov-row">
                <dt className="ov-label">Entry fee</dt>
                <dd className="ov-val"><InlineRichText text={location.entranceFee} /></dd>
              </div>
            )}
            {location.openingHours && (
              <div className="ov-row">
                <dt className="ov-label">Opening hours</dt>
                <dd className="ov-val"><InlineRichText text={location.openingHours} /></dd>
              </div>
            )}
            <div className="ov-row">
              <dt className="ov-label">Address</dt>
              <dd className="ov-val">{location.address}</dd>
            </div>
          </dl>

          {/* Map */}
          <div className="map-wrap">
            <iframe
              src={`https://maps.google.com/maps?q=${toDecimal(location.lat)},${toDecimal(location.lng)}&z=15&output=embed`}
              title={`Map of ${location.name}`}
              allowFullScreen
              loading="lazy"
            />
            <div className="map-caption">
              <span>Google Maps</span>
              <GetDirectionsButton
                lat={toDecimal(location.lat)}
                lng={toDecimal(location.lng)}
                label={location.name}
              />
            </div>
          </div>
        </section>

        {/* Things to Know */}
        {ttkEntries.length > 0 && (
          <section id="things-to-know" className="section-anchor" aria-labelledby="h-ttk">
            <h2 id="h-ttk" className="section-label">Things to Know</h2>
            <dl className="ttk-list">
              {ttkEntries.map(({ label, value }) => (
                <div key={label} className="ttk-row">
                  <dt className="ttk-label">{label}</dt>
                  <dd className="ttk-value">{value}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        {/* Gallery */}
        <section id="gallery" className="section-anchor" aria-labelledby="h-gallery">
          <h2 id="h-gallery" className="section-label">Gallery</h2>
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
        </section>

        {/* Content Sections */}
        <ContentRenderer location={location} />

        {/* Insider Tips */}
        {hasTips && (
          <section id="insider-tips" className="section-anchor split-section" aria-labelledby="h-tips">
            <h2 id="h-tips" className="section-label">Insider Tips</h2>
            <p className="section-subtext">Based on real traveler experiences and commonly mentioned advice from multiple visitors.</p>
            <ul className="tips-list">
              {location.insights?.visitorTips?.map((tip, i) => (
                <li key={`vt-${i}`} className="tip-item">
                  <span className="tip-dot" aria-hidden="true" />
                  <span><InlineRichText text={tip} /></span>
                </li>
              ))}
              {location.tips.map((tip, i) => (
                <li key={`t-${i}`} className="tip-item">
                  <span className="tip-dot" aria-hidden="true" />
                  <span><InlineRichText text={tip} /></span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* FAQ */}
        {hasFaq && (
          <section id="faq" className="section-anchor split-section" aria-labelledby="h-faq">
            <h2 id="h-faq" className="section-label">FAQ</h2>
            <p className="section-subtext">Common questions from travelers who&apos;ve visited this place.</p>
            <div className="faq-list">
              {location.insights!.faq!.map((item, i) => (
                <details key={i} className="faq-item">
                  <summary className="faq-question">
                    <span>{item.question}</span>
                    <span className="faq-chevron" aria-hidden="true">›</span>
                  </summary>
                  <div className="faq-answer"><InlineRichText text={item.answer} /></div>
                </details>
              ))}
            </div>
          </section>
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
            <section id="similar-experiences" className="section-anchor" aria-labelledby="h-similar">
              <h2 id="h-similar" className="section-label">
                <Link href="/experiences" className="section-label-link">Similar Experiences</Link>
              </h2>
              <p className="section-subtext">Explore more things to do like this around Vietnam</p>
              <ul className="exp-links">
                {matched.map(exp => (
                  <li key={exp.slug}>
                    <Link href={`/experiences/${exp.slug}`} className="exp-link">
                      <span className={dotClass(exp.value)} aria-hidden="true" />
                      <span className="exp-link-label">{exp.label}</span>
                      <span className="exp-link-arrow" aria-hidden="true">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )
        })()}

      </main>
      </div>

      {/* Closing CTA: teal-ink band into the footer */}
      {location.destination && (
        <section className="bottom-cta" aria-label="Destination guide">
          <div className="lp-container bottom-cta-inner">
            <div>
              <p className="cta-label">Explore more</p>
              <p className="cta-title">{destinationName} - Full Guide</p>
            </div>
            <Link href={`/destinations/${location.destination}`} className="ui-btn">
              View destination guide →
            </Link>
          </div>
        </section>
      )}
    </div>
  )
}
