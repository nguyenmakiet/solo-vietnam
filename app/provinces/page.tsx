import Link from "next/link"
import { provinces } from "@/data/provinces"
import "./provinces.css"

const REGIONS = [
  {
    id: "north",
    label: "Miền Bắc",
    labelEn: "North Vietnam",
    emoji: "🏔️",
    tagline: "Four seasons, dramatic mountain passes, and a thousand years of history carved into every stone. From the limestone peaks of Hà Giang to the ancient streets of Hà Nội, the north feels timeless, rugged, and deeply rooted in culture.",
    color: "#4a7fb5",
    colorLight: "#e8f0f8",
    count: 0,
  },
  {
    id: "central",
    label: "Miền Trung",
    labelEn: "Central Vietnam",
    emoji: "🌊",
    tagline: "Sun, wind, and endless stretches of coast. Ancient kingdoms left their ruins here, from imperial citadels to Cham towers, while the highlands stay cool and misty above the sea.",
    color: "#3a9e6e",
    colorLight: "#e6f5ee",
    count: 0,
  },
  {
    id: "south",
    label: "Miền Nam",
    labelEn: "South Vietnam",
    emoji: "🌾",
    tagline: "Young, vibrant, and warm-hearted. The Mekong winds through endless rice fields and floating markets, where life flows with the rhythm of the river and every corner feels alive with movement.",
    color: "#c8822a",
    colorLight: "#fdf0e0",
    count: 0,
  },
]

export default function ProvincesPage() {
  const north = provinces.filter(p => p.region === "north")
  const central = provinces.filter(p => p.region === "central")
  const south = provinces.filter(p => p.region === "south")

  const regionProvinces: Record<string, typeof provinces> = { north, central, south }

  return (
    <main className="prov-wrap">
      {/* Breadcrumb */}
      <nav className="prov-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className="prov-breadcrumb-sep">›</span>
        <span className="prov-breadcrumb-current">Provinces</span>
      </nav>
      {/* Hero */}
      <section className="prov-hero">
        <div className="prov-hero-inner">
          <h1 className="prov-hero-title">
            Explore<em>Vietnam</em>
          </h1>
          <p className="prov-hero-desc">
            From mist-covered peaks in Hà Giang to mangrove forests at the tip of Cà Mau —
            every province is a story of its own.
          </p>
          {/* <div className="prov-hero-stats">
            {REGIONS.map(r => (
              // <div key={r.id} className="prov-hero-stat">
              //   <span className="prov-hero-stat-emoji">{r.emoji}</span>
              //   <span className="prov-hero-stat-label">{r.labelEn}</span>
              //   <span className="prov-hero-stat-count" style={{ color: r.color }}>
              //     {regionProvinces[r.id].length} provinces
              //   </span>
              // </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* Regions */}
      {REGIONS.map(region => {
        const list = regionProvinces[region.id]
        return (
          <section key={region.id} className="prov-region">
            {/* Region header */}
            <div className="prov-region-header" style={{ borderLeftColor: region.color }}>
              <div className="prov-region-header-left">
                <span className="prov-region-emoji">{region.emoji}</span>
                <div>
                  <div className="prov-region-label" style={{ color: region.color }}>
                    {region.labelEn}
                  </div>
                </div>
              </div>
              <p className="prov-region-tagline">{region.tagline}</p>
            </div>

            {/* Province grid */}
            <div className="prov-grid">
              {list.map(p => (
                <Link
                  key={p.slug}
                  href={`/provinces/${p.slug}`}
                  className="prov-card"
                >
                  {/* Hero image or fallback */}
                  <div className="prov-card-img" style={{ background: region.colorLight }}>
                    {p.heroImage
                      ? <img src={p.heroImage} alt={p.name} loading="lazy" />
                      : <span className="prov-card-img-fallback">{region.emoji}</span>
                    }
                    <div className="prov-card-region-dot" style={{ background: region.color }} />
                  </div>

                  <div className="prov-card-body">
                    <div className="prov-card-name">{p.name}</div>
                    {p.knownFor && (
                      <div className="prov-card-known">{p.knownFor}</div>
                    )}
                    {p.tags && p.tags.length > 0 && (
                      <div className="prov-card-tags">
                        {p.tags.slice(0, 2).map(t => (
                          <span key={t} className="prov-card-tag">{t}</span>
                        ))}
                      </div>
                    )}
                    <div className="prov-card-footer">
                      {p.bestTime && (
                        <span className="prov-card-best-time">🗓 {p.bestTime}</span>
                      )}
                      <span className="prov-card-cta" style={{ color: region.color }}>
                        Explore →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )
      })}

    </main>
  )
}
