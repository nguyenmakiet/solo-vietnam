// app/destinations/page.tsx
import type { Metadata } from "next"
import Link from "next/link"
import { destinations } from "@/data/destinations/index"
import { stripLeadingEmoji } from "@/lib/text"
import CloudinaryImage from "@/components/CloudinaryImage"
import PhotoPlaceholder from "@/components/PhotoPlaceholder"
import { OG_FALLBACK_IMAGE } from "@/lib/cloudinary"

export const metadata: Metadata = {
  title: "Destinations | Solo in Vietnam",
  description: "Discover top destinations in Vietnam with travel guides and insider tips for solo travelers.",
  openGraph: {
    description: "Discover top destinations in Vietnam with travel guides and insider tips for solo travelers.",
    url: "https://www.soloinvietnam.com/destinations",
    images: [{ url: OG_FALLBACK_IMAGE, width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://www.soloinvietnam.com/destinations",
  },
}

const REGION_LABELS: Record<string, string> = {
  north: "North Vietnam",
  central: "Central Vietnam",
  south: "South Vietnam",
}

const SERIF = { fontFamily: "var(--font-serif), 'Source Serif 4', serif" }
const FOCUS = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
// Card photo: slight zoom on hover / keyboard focus of the card link
const ZOOM = "transition-transform duration-[250ms] group-hover:scale-[1.03] group-focus-visible:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100 motion-reduce:group-focus-visible:scale-100"

export default function DestinationsPage() {
  const grouped = destinations.reduce<Record<string, typeof destinations>>(
    (acc, dest) => {
      const r = dest.region
      if (!acc[r]) acc[r] = []
      acc[r].push(dest)
      return acc
    },
    {}
  )

  const regionOrder = ["north", "central", "south"]
  // Only the first row of the first region can be in the initial viewport
  const firstRegion = regionOrder.find((r) => grouped[r]?.length)

  return (
    <main className="min-h-screen bg-paper text-ink">

      {/* ── Header: light editorial opening, not a dark hero ── */}
      <section className="pt-7 pb-6 md:pt-10 md:pb-8">
        <div className="max-w-5xl mx-auto px-6">
          {/* Breadcrumb doubles as the section label: HOME / DESTINATIONS */}
          <nav className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase mb-2" aria-label="Breadcrumb">
            <Link href="/" className={`text-ink-2 hover:text-signal-text ${FOCUS}`}>
              Home
            </Link>
            <span className="text-line" aria-hidden="true">/</span>
            <span className="text-teal" aria-current="page">Destinations</span>
          </nav>

          <h1
            className="text-[34px] md:text-5xl font-bold leading-[1.1] tracking-[-0.5px] text-ink mb-2"
            style={SERIF}
          >
            Destinations
          </h1>
          <p className="text-[15px] md:text-base text-ink-2 max-w-xl leading-relaxed">
            Handpicked places across Vietnam - with honest guides for solo travelers.
          </p>

          {/* Stats row */}
          <dl className="flex mt-6 pt-4 border-t border-line">
            {[
              { value: destinations.length, label: "Destinations" },
              { value: 63, label: "Provinces" },
              { value: 3, label: "Regions" },
            ].map((s, i) => (
              <div key={s.label} className={`flex flex-col-reverse pr-6 md:pr-10 ${i > 0 ? "pl-6 md:pl-10 border-l border-line" : ""}`}>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-2 mt-1">{s.label}</dt>
                <dd className="text-2xl md:text-[28px] font-bold leading-none text-ink" style={SERIF}>{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Region sections ── */}
      <div className="max-w-5xl mx-auto px-6 pt-4 pb-16 md:pt-6 md:pb-20 space-y-14 md:space-y-16">
        {regionOrder.map((region) => {
          const dests = grouped[region]
          if (!dests?.length) return null

          return (
            <section key={region} aria-labelledby={`region-${region}`}>
              {/* Region heading: a chapter opener */}
              <div className="flex items-baseline justify-between gap-4 pb-3 mb-6 border-b border-ink">
                <h2
                  id={`region-${region}`}
                  className="text-[26px] md:text-[32px] font-bold leading-tight text-ink"
                  style={SERIF}
                >
                  {REGION_LABELS[region]}
                </h2>
                <span className="text-xs text-ink-2 whitespace-nowrap">
                  {dests.length} {dests.length === 1 ? "destination" : "destinations"}
                </span>
              </div>

              {/* Cards grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-9">
                {dests.map((dest, i) => {
                  const tags = (dest.tags ?? []).slice(0, 3).map(stripLeadingEmoji)
                  return (
                    <Link
                      key={dest.slug}
                      href={`/destinations/${dest.slug}`}
                      className={`group flex flex-col ${FOCUS}`}
                    >
                      {/* Image: small radius, zooms slightly on hover / keyboard focus */}
                      <div className="relative aspect-[16/9] overflow-hidden isolate rounded-thumb bg-line">
                        {dest.heroImage ? (
                          <CloudinaryImage
                            src={dest.heroImage}
                            alt={dest.name}
                            fill
                            sizes="(min-width: 1024px) 330px, (min-width: 640px) 50vw, 100vw"
                            className={`object-cover ${ZOOM}`}
                            loading={region === firstRegion && i < 3 ? "eager" : "lazy"}
                          />
                        ) : (
                          <PhotoPlaceholder />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex flex-col flex-1 pt-3.5">
                        <h3
                          className="text-xl font-bold leading-snug text-ink mb-1.5 group-hover:underline underline-offset-2 decoration-1"
                          style={SERIF}
                        >
                          {dest.name}
                        </h3>

                        {/* Province: same small uppercase line as the /locations cards */}
                        {dest.province && (
                          <p className="text-[10px] text-ink-2 font-medium mb-1.5 uppercase tracking-[0.08em]">
                            {dest.province}
                          </p>
                        )}

                        {dest.tagline && (
                          <p className="text-sm text-ink-2 mb-3 leading-relaxed line-clamp-3">
                            {dest.tagline}
                          </p>
                        )}

                        {/* Tags: quiet inline labels, not pills */}
                        {tags.length > 0 && (
                          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-2">
                            {tags.join(" · ")}
                          </p>
                        )}
                      </div>
                    </Link>
                  )
                })}
              </div>
            </section>
          )
        })}
      </div>

      {/* ── Browse provinces: teal-ink band that flows into the footer ── */}
      <section className="bg-teal-ink text-paper py-14 md:py-16 px-6" aria-labelledby="browse-provinces">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-teal-light mb-2">
              Explore by province
            </p>
            <h2
              id="browse-provinces"
              className="text-[28px] md:text-3xl font-bold leading-tight text-paper"
              style={SERIF}
            >
              Browse all 63 provinces
            </h2>
            <p className="mt-2 text-sm text-paper/80">
              Interactive map with local food, culture, and travel tips.
            </p>
          </div>
          <Link
            href="/provinces"
            className="ui-btn shrink-0 self-start md:self-auto focus-visible:outline-teal-light"
          >
            View province map →
          </Link>
        </div>
      </section>

    </main>
  )
}
