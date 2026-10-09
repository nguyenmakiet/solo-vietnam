// Region guide body shared by /north-vietnam, /central-vietnam and /south-vietnam.
// Each route keeps its own metadata and renders <RegionGuide region="..." />.
import Link from "next/link"
import { regions } from "@/data/regions"
import { destinations as guides } from "@/data/destinations/index"
import { provinces } from "@/data/provinces"
import { stripLeadingEmoji } from "@/lib/text"
import { LOCATION_COUNT_LABEL } from "@/lib/site-stats"
import "@/components/guide-pages.css"

type RegionKey = keyof typeof regions

export default function RegionGuide({ region: key }: { region: RegionKey }) {
  const { label, tagline, description, destinations: listed } = regions[key]
  const regionProvinces = provinces.filter((p) => p.region === key)
  const guideSlugs = new Set(guides.map((g) => g.slug))
  // Editorial list from data/regions.ts first, then any published guide in this
  // region that the list does not mention yet (name, province, tagline and tags
  // come from the guide itself), so a new guide shows up without a second edit.
  const listedSlugs = new Set(listed.map((d) => d.slug))
  const destinations = [
    ...listed,
    ...guides
      .filter((g) => g.region === key && !listedSlugs.has(g.slug))
      .map((g) => ({ slug: g.slug, name: g.name, province: g.province, tagline: g.tagline, tags: (g.tags ?? []).slice(0, 2) })),
  ]

  return (
    <div className={`gp region-theme-${key}`}>
      <header className="gp-head">
        <div className="gp-container">
          <nav className="gp-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep" aria-hidden="true">/</span>
            <Link href="/destinations">Destinations</Link>
            <span className="sep" aria-hidden="true">/</span>
            <span className="current" aria-current="page">{label}</span>
          </nav>
          <p className="gp-kicker">Solo Travel Guide</p>
          <h1>{label}</h1>
          <p className="gp-tagline">{tagline}</p>
          <p className="gp-lead">{description}</p>
          <dl className="gp-facts">
            <div className="gp-fact">
              <dt>Provinces</dt>
              <dd className="gp-fact-num">{regionProvinces.length}</dd>
            </div>
            <div className="gp-fact">
              <dt>Destinations</dt>
              <dd className="gp-fact-num">{destinations.length}</dd>
            </div>
          </dl>
        </div>
      </header>

      <main className="gp-container gp-main">
        {/* Destinations */}
        <section className="gp-section" aria-labelledby="h-destinations">
          <h2 id="h-destinations" className="gp-label">
            Destinations <span className="gp-count">· {destinations.length} places</span>
          </h2>
          <div className="gp-cards">
            {destinations.map((dest) => {
              const hasGuide = guideSlugs.has(dest.slug)
              const body = (
                <div className="gp-card-body">
                  <div className="gp-card-meta">
                    <span className="gp-card-kicker">{dest.province}</span>
                    {!hasGuide && <span className="gp-status gp-status--soft">Soon</span>}
                  </div>
                  <h3 className="gp-card-name">{dest.name}</h3>
                  <p className="gp-card-desc gp-card-desc--full">{dest.tagline}</p>
                  {dest.tags.length > 0 && (
                    <p className="gp-card-tags">{dest.tags.map(stripLeadingEmoji).join(" · ")}</p>
                  )}
                </div>
              )
              return hasGuide ? (
                <Link key={dest.slug} href={`/destinations/${dest.slug}`} className="gp-card">
                  {body}
                  <div className="gp-card-foot">
                    <span className="gp-card-best">Explore guide</span>
                    <span className="gp-card-arrow" aria-hidden="true">→</span>
                  </div>
                </Link>
              ) : (
                <div key={dest.slug} className="gp-card gp-card--muted">{body}</div>
              )
            })}
          </div>
        </section>

        {/* Provinces */}
        <section className="gp-section" aria-labelledby="h-provinces">
          <h2 id="h-provinces" className="gp-label">
            Provinces <span className="gp-count">· {regionProvinces.length} provinces</span>
          </h2>
          <ul className="gp-links">
            {regionProvinces.map((prov) => (
              <li key={prov.slug}>
                <Link href={`/provinces/${prov.slug}`} className="gp-link">
                  <span className="gp-link-text">
                    <span className="gp-link-name">{prov.name}</span>
                    {prov.knownFor && <span className="gp-link-sub">{prov.knownFor}</span>}
                  </span>
                  <span className="gp-link-arrow" aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>

      {/* Closing CTA */}
      <section className="gp-cta" aria-label="Explore the map">
        <div className="gp-container gp-cta-inner">
          <div>
            <p className="gp-cta-label">Explore the map</p>
            <p className="gp-cta-title">Browse {LOCATION_COUNT_LABEL} locations</p>
            <p className="gp-cta-text">Filter by experience - beaches, trekking, caves, food, and more.</p>
          </div>
          <Link href="/map" className="ui-btn">Open interactive map →</Link>
        </div>
      </section>
    </div>
  )
}
