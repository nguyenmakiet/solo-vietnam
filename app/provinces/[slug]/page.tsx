import { provinces } from "../../../data/provinces"
import { activeLocations } from "@/data/all-locations"
import { notFound } from "next/navigation"
import Link from "next/link"
import CloudinaryImage from "@/components/CloudinaryImage"
import LocationCard from "@/components/LocationCard"
import { stripLeadingEmoji } from "@/lib/text"
import "@/components/guide-pages.css"
import { ogImageUrl } from "@/lib/cloudinary"

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
      images: province.heroImage ? [{ url: ogImageUrl(province.heroImage), width: 1200, height: 630 }] : [],
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

  return (
    <div className={`gp region-theme-${province.region}`}>
      <header className="gp-head">
        <div className="gp-container">
          <nav className="gp-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep" aria-hidden="true">/</span>
            <Link href={`/${province.region}-vietnam`}>{regionLabel}</Link>
            <span className="sep" aria-hidden="true">/</span>
            <span className="current" aria-current="page">{province.name}</span>
          </nav>
          <p className="gp-kicker">{regionLabel} · {pageLabel}</p>
          <h1>{province.name} {titleSuffix}</h1>
          {province.description && <p className="gp-lead">{province.description}</p>}
          {province.tags && province.tags.length > 0 && (
            <p className="gp-tags">{province.tags.map(stripLeadingEmoji).join(" · ")}</p>
          )}
          <dl className="gp-facts">
            <div className="gp-fact">
              <dt>Locations</dt>
              <dd className="gp-fact-num">{provinceLocations.length}</dd>
            </div>
            {province.capital && (
              <div className="gp-fact">
                <dt>Capital</dt>
                <dd>{province.capital}</dd>
              </div>
            )}
            {province.knownFor && (
              <div className="gp-fact">
                <dt>Known For</dt>
                <dd>{province.knownFor}</dd>
              </div>
            )}
            {province.bestTime && (
              <div className="gp-fact gp-fact--wide">
                <dt>Best Time</dt>
                <dd>{province.bestTime}</dd>
              </div>
            )}
          </dl>
          <nav className="gp-switch" aria-label="Browse by region">
            <span className="gp-switch-label">Browse by region</span>
            <Link href="/north-vietnam" aria-current={province.region === "north" ? "page" : undefined}>North</Link>
            <Link href="/central-vietnam" aria-current={province.region === "central" ? "page" : undefined}>Central</Link>
            <Link href="/south-vietnam" aria-current={province.region === "south" ? "page" : undefined}>South</Link>
          </nav>
        </div>
      </header>

      {province.heroImage && (
        <div className="gp-hero-media">
          <CloudinaryImage
            src={province.heroImage}
            alt={province.name}
            fill
            sizes="(min-width: 1200px) 1200px, 100vw"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      )}

      <main className="gp-container gp-main">
        {/* Locations */}
        <section className="gp-section" aria-labelledby="h-locations">
          <h2 id="h-locations" className="gp-label">
            Locations in {province.name} <span className="gp-count">· {provinceLocations.length} found</span>
          </h2>
          {provinceLocations.length > 0 ? (
            <div className="gp-cards">
              {provinceLocations.map((l) => <LocationCard key={l.slug} location={l} />)}
            </div>
          ) : (
            <div className="gp-empty">
              No locations listed yet for {province.name}.<br />Content coming soon.
            </div>
          )}
        </section>

        {/* Local Food */}
        {province.food && province.food.length > 0 && (
          <section className="gp-section" aria-labelledby="h-food">
            <h2 id="h-food" className="gp-label">Local Food You Must Try</h2>
            <div className="gp-cards gp-cards--dense">
              {province.food.map((f) => (
                <div key={f.name} className="gp-card">
                  {f.image && (
                    <div className="gp-card-media gp-card-media--food">
                      <CloudinaryImage
                        src={f.image}
                        alt={f.name}
                        fill
                        sizes="(min-width: 1264px) 384px, (min-width: 900px) 30vw, (min-width: 640px) 50vw, 100vw"
                      />
                    </div>
                  )}
                  <div className="gp-card-body">
                    <h3 className="gp-card-name">{f.name}</h3>
                    <p className="gp-card-desc gp-card-desc--full">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Closing CTA */}
      <section className="gp-cta" aria-label="Explore the region">
        <div className="gp-container gp-cta-inner">
          <div>
            <p className="gp-cta-label">Explore the region</p>
            <p className="gp-cta-title">{regionLabel}</p>
          </div>
          <Link href={`/${province.region}-vietnam`} className="ui-btn">View all destinations →</Link>
        </div>
      </section>
    </div>
  )
}
