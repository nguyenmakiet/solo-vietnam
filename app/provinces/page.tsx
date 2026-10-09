import type { Metadata } from "next"
import Link from "next/link"
import { provinces } from "@/data/provinces"
import { stripLeadingEmoji } from "@/lib/text"
import CloudinaryImage from "@/components/CloudinaryImage"
import PhotoPlaceholder from "@/components/PhotoPlaceholder"
import "@/components/guide-pages.css"
import { OG_FALLBACK_IMAGE } from "@/lib/cloudinary"

export const metadata: Metadata = {
  title: "Provinces | Solo in Vietnam",
  description: "Explore all provinces in Vietnam and discover top places, travel tips, and hidden gems.",
  openGraph: {
    description: "Explore all provinces in Vietnam and discover top places, travel tips, and hidden gems.",
    url: "https://www.soloinvietnam.com/provinces",
    images: [{ url: OG_FALLBACK_IMAGE, width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://www.soloinvietnam.com/provinces",
  },
}

const REGIONS = [
  {
    id: "north",
    labelEn: "North Vietnam",
    tagline: "Four seasons, dramatic mountain passes, and a thousand years of history carved into every stone. From the limestone peaks of Hà Giang to the ancient streets of Hà Nội, the north feels timeless, rugged, and deeply rooted in culture.",
  },
  {
    id: "central",
    labelEn: "Central Vietnam",
    tagline: "Sun, wind, and endless stretches of coast. Ancient kingdoms left their ruins here, from imperial citadels to Cham towers, while the highlands stay cool and misty above the sea.",
  },
  {
    id: "south",
    labelEn: "South Vietnam",
    tagline: "Young, vibrant, and warm-hearted. The Mekong winds through endless rice fields and floating markets, where life flows with the rhythm of the river and every corner feels alive with movement.",
  },
] as const

export default function ProvincesPage() {
  return (
    <div className="gp">
      <header className="gp-head">
        <div className="gp-container">
          <nav className="gp-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep" aria-hidden="true">/</span>
            <span className="current" aria-current="page">Provinces</span>
          </nav>
          <h1>Explore <em>Vietnam</em></h1>
          <p className="gp-lead">
            From mist-covered peaks in Hà Giang to mangrove forests at the tip of Cà Mau -
            every province is a story of its own.
          </p>
          <nav className="gp-switch" aria-label="Jump to region">
            <span className="gp-switch-label">Jump to</span>
            {REGIONS.map((r) => (
              <a key={r.id} href={`#${r.id}`}>{r.labelEn}</a>
            ))}
          </nav>
        </div>
      </header>

      <main className="gp-container gp-main">
        {REGIONS.map((region) => {
          const list = provinces.filter((p) => p.region === region.id)
          return (
            <section
              key={region.id}
              id={region.id}
              className={`gp-section region-theme-${region.id}`}
              aria-labelledby={`h-${region.id}`}
            >
              <p className="gp-label">
                {list.length} provinces
              </p>
              <h2 id={`h-${region.id}`} className="gp-region-title">{region.labelEn}</h2>
              <p className="gp-region-intro">{region.tagline}</p>

              <div className="gp-cards gp-cards--dense">
                {list.map((p) => (
                  <Link key={p.slug} href={`/provinces/${p.slug}`} className="gp-card">
                    <div className="gp-card-media">
                      {p.heroImage ? (
                        <CloudinaryImage
                          src={p.heroImage}
                          alt={p.name}
                          fill
                          sizes="(min-width: 1264px) 384px, (min-width: 900px) 30vw, (min-width: 640px) 50vw, 100vw"
                        />
                      ) : (
                        <PhotoPlaceholder />
                      )}
                    </div>
                    <div className="gp-card-body">
                      <h3 className="gp-card-name">{p.name}</h3>
                      {p.knownFor && <p className="gp-card-desc">{p.knownFor}</p>}
                      {p.tags && p.tags.length > 0 && (
                        <p className="gp-card-tags">{p.tags.slice(0, 2).map(stripLeadingEmoji).join(" · ")}</p>
                      )}
                    </div>
                    <div className="gp-card-foot">
                      <span className="gp-card-best">{p.bestTime}</span>
                      <span className="gp-card-arrow" aria-hidden="true">Explore →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )
        })}
      </main>

    </div>
  )
}
