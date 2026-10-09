import Link from "next/link"
import { notFound } from "next/navigation"
import { experiences, getExperienceBySlug } from "@/data/experiences"
import { activeLocations } from "@/data/all-locations"
import { provinces } from "@/data/provinces"
import LocationCard from "@/components/LocationCard"
import ExperienceGrid from "@/components/ExperienceGrid"
import ExperienceIcon from "@/components/ExperienceIcon"
import { dotCategory } from "@/lib/category-dot"
import "@/components/guide-pages.css"
import { OG_FALLBACK_IMAGE } from "@/lib/cloudinary"

const PROVINCE_NAME = new Map(provinces.map((p) => [p.slug, p.name]))
const provinceNames = (slugs: string[]) =>
  slugs.map((s) => PROVINCE_NAME.get(s) ?? s.replace(/-/g, " ")).join(", ")

// ── Metadata ──────────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const experience = getExperienceBySlug(slug as Parameters<typeof getExperienceBySlug>[0])

  const description = experience
    ? `Discover the best ${experience.label.toLowerCase()} experiences in Vietnam - solo travel tips, top locations, and practical guides.`
    : "Discover travel experiences in Vietnam with honest guides for solo travelers."

  return {
    title: experience ? `${experience.label} in Vietnam | Solo in Vietnam` : undefined,
    description,
    openGraph: {
      title: experience ? `${experience.label} in Vietnam | Solo in Vietnam` : undefined,
      description,
      url: `https://www.soloinvietnam.com/experiences/${slug}`,
      images: [{ url: OG_FALLBACK_IMAGE, width: 1200, height: 630 }],
    },
    alternates: {
      canonical: `https://www.soloinvietnam.com/experiences/${slug}`,
    },
  }
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

  const matchedLocations = activeLocations.filter((l) =>
    l.experiences.includes(experience.value)
  )

  const others = experiences.filter((e) => e.slug !== experience.slug)

  return (
    <div className="gp">
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
              {matchedLocations.length} {matchedLocations.length === 1 ? "place" : "places"}
            </p>
          </div>
          <h1>{experience.label} in Vietnam</h1>
          <p className="gp-tagline">{experience.tagline}</p>
        </div>
      </header>

      <main className="gp-container gp-main">
        <section className="gp-section" aria-labelledby="h-locations">
          <h2 id="h-locations" className="gp-label">
            {matchedLocations.length > 0
              ? `${matchedLocations.length} ${matchedLocations.length === 1 ? "location" : "locations"} for ${experience.label.toLowerCase()}`
              : "Locations"}
          </h2>
          {matchedLocations.length > 0 ? (
            <div className="gp-cards">
              {matchedLocations.map((loc) => (
                <LocationCard key={loc.slug} location={loc} sub={provinceNames(loc.provinces)} />
              ))}
            </div>
          ) : (
            <div className="gp-empty">No locations yet - check back soon</div>
          )}
        </section>

        <section className="gp-section" aria-labelledby="h-others">
          <h2 id="h-others" className="gp-label">Browse other experiences</h2>
          <ExperienceGrid items={others} />
        </section>
      </main>
    </div>
  )
}
