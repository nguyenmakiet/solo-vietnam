import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { experiences, getExperienceBySlug } from "@/data/experiences"
import { releasedBestMonths } from "@/data/best-months-release"
import LocationCard from "@/components/LocationCard"
import ExperienceGrid from "@/components/ExperienceGrid"
import ExperienceIcon from "@/components/ExperienceIcon"
import { dotCategory } from "@/lib/category-dot"
import { buildExperiencePage, locationRegion, provinceNames } from "@/lib/experience-page"
import { ExperienceFilterBar, ExperienceFilterProvider, FilterCount, FilterEmpty, FilterGate } from "./ExperienceFilters"
import SeasonTable from "./SeasonTable"
import "@/components/guide-pages.css"

const BASE_URL = "https://www.soloinvietnam.com"

// ── Metadata ──────────────────────────────────────────────────────────────────
// Title, description and share image are per experience (lib/experience-page.ts):
// the image is the og:image of a representative location in the list
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const experience = getExperienceBySlug(slug)
  if (!experience) return {}

  const page = buildExperiencePage(experience)
  const url = `${BASE_URL}/experiences/${slug}`
  const image = {
    url: page.ogImage,
    width: 1200,
    height: 630,
    alt: page.ogLocation ? `${page.ogLocation.name} - ${experience.label} in Vietnam` : "Solo in Vietnam",
  }

  return {
    title: page.title,
    description: page.description,
    openGraph: {
      type: "website",
      siteName: "Solo in Vietnam",
      title: page.title,
      description: page.description,
      url,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [image.url],
    },
    alternates: { canonical: url },
  }
}

// ── Static params ─────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return experiences.map((e) => ({ slug: e.slug }))
}

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  )
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

  const page = buildExperiencePage(experience)
  const { locations, regions } = page
  const slugs = locations.map((l) => l.slug)
  const others = experiences.filter((e) => e.slug !== experience.slug)
  const hasTypeGroups = regions.some((r) => r.groups.some((g) => g.label))

  // Only what the filters need reaches the client
  const filterItems = Object.fromEntries(
    locations.map((l) => [l.slug, { region: locationRegion(l), provinces: l.provinces, months: releasedBestMonths(l) }])
  )
  const provinceOptions = [...new Set(locations.flatMap((l) => l.provinces))].sort()

  const pageUrl = `${BASE_URL}/experiences/${experience.slug}`
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${experience.label} in Vietnam`,
    url: pageUrl,
    numberOfItems: locations.length,
    itemListElement: locations.map((l, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${BASE_URL}/locations/${l.slug}`,
      name: l.name,
    })),
  }
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Experiences", item: `${BASE_URL}/experiences` },
      { "@type": "ListItem", position: 3, name: experience.label, item: pageUrl },
    ],
  }

  return (
    <div className="gp">
      <JsonLd data={breadcrumbs} />
      {locations.length > 0 && <JsonLd data={itemList} />}

      <header className="gp-head">
        <div className="gp-container">
          <nav className="gp-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep" aria-hidden="true">/</span>
            <Link href="/experiences">Experiences</Link>
            <span className="sep" aria-hidden="true">/</span>
            <span className="current" aria-current="page">{experience.label}</span>
          </nav>
          <div className={`gp-exp-hero gp-exp--${dotCategory(experience.value) ?? "neutral"}`}>
            <span className="gp-exp-icon gp-exp-icon--lg">
              <ExperienceIcon slug={experience.slug} />
            </span>
            <p className="gp-kicker">
              {locations.length} {locations.length === 1 ? "place" : "places"}
            </p>
          </div>
          <h1>{experience.label} in Vietnam</h1>
          <p className="gp-tagline">{experience.tagline}</p>
          {/* Intro: `intro` in data/experience-pages.ts; none set = tagline only */}
          {page.intro.map((p, i) => (
            <p key={i} className="gp-lead">{p}</p>
          ))}
          {locations.length > 0 && (
            <nav className="gp-switch" aria-label="On this page">
              <span className="gp-switch-label">Jump to</span>
              {regions.map((r) => (
                <a key={r.label} href={`#region-${r.region ?? "other"}`}>
                  {r.label.replace(" Vietnam", "")} ({r.locations.length})
                </a>
              ))}
              {page.season.rows.length > 0 && <a href="#h-best-time">Best time</a>}
              <Link href={page.mapHref}>View on map</Link>
            </nav>
          )}
        </div>
      </header>

      <main className="gp-container gp-main">
        {locations.length === 0 ? (
          <section className="gp-section">
            <div className="gp-empty">No locations yet - check back soon</div>
          </section>
        ) : (
          <ExperienceFilterProvider items={filterItems}>
            {page.season.rows.length > 0 && (
              <section className="gp-section" aria-labelledby="h-best-time">
                <h2 id="h-best-time" className="gp-label">Best time by region</h2>
                <SeasonTable season={page.season} label={experience.label} />
              </section>
            )}

            <section className="gp-section" aria-labelledby="h-locations">
              <h2 id="h-locations" className="gp-label">
                {experience.label} by region
                <span className="gp-count"><FilterCount slugs={slugs} /> places</span>
              </h2>
              <ExperienceFilterBar provinces={provinceOptions} slugs={slugs} mapHref={page.mapHref} />
              <FilterEmpty slugs={slugs} />

              {regions.map((r) => {
                const regionSlugs = r.locations.map((l) => l.slug)
                const id = `region-${r.region ?? "other"}`
                return (
                  <FilterGate key={id} slugs={regionSlugs}>
                    <section className="gp-region" aria-labelledby={id}>
                      <h2 id={id} className="gp-region-title">
                        {r.label} <span className="gp-region-count">(<FilterCount slugs={regionSlugs} />)</span>
                      </h2>
                      {(r.href || r.destinations.length > 0) && (
                        <p className="gp-region-links">
                          {r.destinations.length > 0 && (
                            <>
                              <span className="gp-switch-label">Destination guides</span>{" "}
                              {r.destinations.map((d, i) => (
                                <span key={d.slug}>
                                  {i > 0 && ", "}
                                  <Link href={`/destinations/${d.slug}`}>{d.name}</Link>
                                </span>
                              ))}
                              {r.href && " · "}
                            </>
                          )}
                          {r.href && <Link href={r.href}>{r.label} guide →</Link>}
                        </p>
                      )}

                      {r.groups.map((g) => {
                        const groupSlugs = g.locations.map((l) => l.slug)
                        return (
                          <FilterGate key={g.key} slugs={groupSlugs}>
                            <div className="gp-group">
                              {g.label && (
                                <h3 className="gp-group-title">
                                  {g.label} <span className="gp-count">(<FilterCount slugs={groupSlugs} />)</span>
                                </h3>
                              )}
                              <div className="gp-cards">
                                {g.locations.map((loc) => (
                                  <FilterGate key={loc.slug} slugs={[loc.slug]}>
                                    <LocationCard
                                      location={loc}
                                      sub={provinceNames(loc.provinces)}
                                      headingAs={hasTypeGroups ? "h4" : "h3"}
                                    />
                                  </FilterGate>
                                ))}
                              </div>
                            </div>
                          </FilterGate>
                        )
                      })}
                    </section>
                  </FilterGate>
                )
              })}
            </section>
          </ExperienceFilterProvider>
        )}

        <section className="gp-section" aria-labelledby="h-others">
          <h2 id="h-others" className="gp-label">Browse other experiences</h2>
          <ExperienceGrid items={others} />
        </section>
      </main>
    </div>
  )
}
