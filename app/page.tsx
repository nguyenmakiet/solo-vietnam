import Link from "next/link"
import { IBM_Plex_Mono, Kalam } from "next/font/google"
import HomeFieldMap from "./_home/HomeFieldMap"
import { KarstHorizon, NoteArrow, Swash, VIBE_SKETCH } from "./_home/sketches"
import {
  featured,
  heroPhoto,
  mapDots,
  mapStops,
  placesLabel,
  provinceInfo,
  resizeCloudinary,
  totalPlaces,
  vibes,
} from "./_home/data"
import "./homepage.css"

// Homepage-only fonts: mono for field-note labels, a hand for real annotations
const mono = IBM_Plex_Mono({
  variable: "--fn-font-mono",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500"],
})
const hand = Kalam({
  variable: "--fn-font-hand",
  subsets: ["latin"],
  weight: ["400", "700"],
})

const REGION_LABEL = { north: "North", central: "Central", south: "South" } as const

const pad = (n: number) => String(n).padStart(2, "0")

export default function Home() {
  const [lead, ...rest] = featured

  return (
    <main className={`fn-home ${mono.variable} ${hand.variable}`}>
      {/* ── HERO ── */}
      <section className="fn-hero">
        <div className="fn-hero-inner">
          <div className="fn-hero-copy">
            <p className="fn-kicker">
              <span className="fn-kicker-dot" /> Field notebook · {placesLabel} places · 63 provinces
            </p>
            <h1 className="fn-hero-title">
              Don&apos;t just see Vietnam.
              <br />
              <span className="fn-hero-find">
                Find it.
                <Swash className="fn-swash" />
              </span>
            </h1>
            <p className="fn-hero-desc">
              Practical guides for solo travelers - scam alerts, real prices, and local knowledge you won&apos;t find
              in a guidebook.
            </p>
            <div className="fn-hero-actions">
              <Link href="/locations" className="fn-btn">
                Browse {placesLabel} places
              </Link>
              <Link href="/map" className="fn-link">
                Open the field map →
              </Link>
            </div>
          </div>

          {heroPhoto && (
            <Link href={`/locations/${heroPhoto.slug}`} className="fn-hero-photo">
              <figure>
                <div className="fn-hero-photo-img">
                  <img
                    src={resizeCloudinary(heroPhoto.image, 960, 1080)}
                    alt={`${heroPhoto.name}, ${heroPhoto.province}`}
                    fetchPriority="high"
                  />
                </div>
                <figcaption>
                  <span className="fn-meta">
                    Field note - {heroPhoto.name}, {heroPhoto.province}
                  </span>
                  <span className="fn-hand fn-hero-photo-note">
                    <NoteArrow className="fn-note-arrow" />
                    Don&apos;t rush this road.
                  </span>
                </figcaption>
              </figure>
            </Link>
          )}
        </div>
        <KarstHorizon className="fn-horizon" />
      </section>

      {/* ── FIELD NOTE / INTRO ── */}
      <section className="fn-note">
        <div className="fn-note-inner">
          <aside className="fn-note-margin">
            <span className="fn-meta">Field note 000</span>
            <span className="fn-meta fn-meta-soft">Where to start</span>
          </aside>

          <div className="fn-note-body">
            <h2 className="fn-note-question">Want to explore Vietnam - but not sure where to start?</h2>
            <p className="fn-note-text">
              From{" "}
              <Link href="/locations?type=forest" className="fn-inline">ancient forests</Link>
              {" "}where crocodiles still drift beneath the surface,{" "}
              <Link href="/locations?type=beach" className="fn-inline">quiet beaches</Link>
              {" "}that still feel genuinely wild,{" "}
              <Link href="/locations?experience=homestay" className="fn-inline">mountain villages</Link>
              {" "}tucked into mist and highland fog,{" "}
              <Link href="/locations?experience=motorcycling" className="fn-inline">winding roads</Link>
              {" "}that reward anyone patient enough to follow them,{" "}
              <Link href="/locations?experience=nightlife" className="fn-inline">chaotic city streets</Link>
              {" "}full of noise and smoke and life, to the{" "}
              <Link href="/locations?type=citadel&experience=history" className="fn-inline">ruins of dynasties</Link>
              {" "}that shaped this country for centuries.
            </p>
            <p className="fn-note-pull">
              I didn&apos;t know where to start either. So I started <mark>everywhere</mark>.
            </p>
            <p className="fn-hand fn-note-sign">Let&apos;s figure it out together.</p>

            <dl className="fn-log">
              <div>
                <dt>Places logged</dt>
                <dd>{totalPlaces}</dd>
              </div>
              <div>
                <dt>Provinces explored</dt>
                <dd>63</dd>
              </div>
              <div>
                <dt>Hidden places</dt>
                <dd>80+</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* ── FIELD MAP ── */}
      <section className="fn-mapsec" aria-labelledby="fn-map-title">
        <div className="fn-mapsec-inner">
          <header className="fn-mapsec-head">
            <p className="fn-meta">Map 01 - Vietnam, north to south</p>
            <h2 id="fn-map-title" className="fn-h2">
              {placesLabel} places worth finding.
            </h2>
            <p className="fn-sub">
              Every dot is a place on this site. The dashed line connects six good places to start, from the Ha Giang
              mountains to the island of Phu Quoc.
            </p>
          </header>

          <HomeFieldMap dots={mapDots} stops={mapStops} provinceInfo={provinceInfo} placesLabel={placesLabel} />

          <Link href="/map" className="fn-mapsec-cta">
            <span>
              <strong>Explore {placesLabel} locations on the map</strong>
              <span>Filter by beaches, trekking, caves, food & more</span>
            </span>
            <span className="fn-mapsec-cta-go">Open map →</span>
          </Link>
        </div>
      </section>

      {/* ── FEATURED DESTINATIONS ── */}
      <section className="fn-stories" aria-labelledby="fn-stories-title">
        <div className="fn-stories-inner">
          <header className="fn-sec-head">
            <div>
              <p className="fn-meta">Where to begin</p>
              <h2 id="fn-stories-title" className="fn-h2">
                Six places to start.
              </h2>
              <p className="fn-sub">Handpicked for solo travelers - not just the obvious ones.</p>
            </div>
            <Link href="/destinations" className="fn-link">
              All destinations →
            </Link>
          </header>

          {lead && <Story story={lead} lead />}

          <div className="fn-story-grid">
            {rest.map((s) => (
              <Story key={s.slug} story={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── BY VIBE ── */}
      <section className="fn-vibes" aria-labelledby="fn-vibes-title">
        <div className="fn-vibes-inner">
          <header className="fn-sec-head">
            <div>
              <p className="fn-meta">Browse by vibe</p>
              <h2 id="fn-vibes-title" className="fn-h2">
                What are you chasing?
              </h2>
              <p className="fn-sub">From beach-hopping to highland trekking - pick a thread and follow it.</p>
            </div>
            <Link href="/experiences" className="fn-link">
              All experiences →
            </Link>
          </header>

          <ul className="fn-vibe-list">
            {vibes.map((v) => {
              const Sketch = VIBE_SKETCH[v.slug]
              return (
                <li key={v.slug}>
                  <Link href={v.href} className={`fn-vibe fn-accent-${v.accent}`}>
                    <Sketch className="fn-vibe-sketch" />
                    <span className="fn-vibe-text">
                      <span className="fn-vibe-label">{v.label}</span>
                      <span className="fn-vibe-tagline">{v.tagline}</span>
                    </span>
                    <span className="fn-vibe-count">
                      {v.count}
                      <small>places</small>
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* ── WHY THIS SITE ── */}
      <section className="fn-why" aria-labelledby="fn-why-title">
        <div className="fn-why-inner">
          <header>
            <p className="fn-meta">Why this site</p>
            <h2 id="fn-why-title" className="fn-h2">
              Built for solo travelers.
              <br />
              <span className="fn-strike">Not tour groups.</span>
            </h2>
          </header>
          <ol className="fn-why-list">
            <li>
              <h3>Practical, not pretty</h3>
              <p>
                Real scam alerts, actual prices, honest safety info - not sponsored content dressed up as travel
                advice.
              </p>
            </li>
            <li>
              <h3>Up to date info</h3>
              <p>
                Regularly updated guides with current prices, recent scam alerts, and the latest travel conditions -
                not outdated blog posts from years ago.
              </p>
            </li>
            <li>
              <h3>Local knowledge</h3>
              <p>Written by someone who actually lives here - a Vietnamese local sharing real travel insights.</p>
            </li>
          </ol>
        </div>
      </section>
    </main>
  )
}

function Story({ story, lead = false }: { story: (typeof featured)[number]; lead?: boolean }) {
  return (
    <Link href={`/destinations/${story.slug}`} className={`fn-story${lead ? " fn-story-lead" : ""}`}>
      <div className="fn-story-img">
        {story.heroImage ? (
          <img
            src={lead ? story.heroImage : resizeCloudinary(story.heroImage, 900, 675)}
            alt={story.name}
            loading="lazy"
          />
        ) : (
          <span className="fn-story-img-empty" />
        )}
        <span className="fn-story-num">{pad(story.index)}</span>
      </div>
      <div className="fn-story-body">
        <p className="fn-meta">
          {story.province} · {REGION_LABEL[story.region]}
          {story.placeCount > 0 && ` · ${story.placeCount} places`}
        </p>
        <h3 className="fn-story-name">{story.name}</h3>
        {story.tagline && <p className="fn-hand fn-story-tagline">{story.tagline}</p>}
        <p className="fn-story-desc">{story.description}</p>
        <p className="fn-story-foot">
          {story.bestMonths && (
            <span className="fn-meta">
              Best: <b>{story.bestMonths}</b>
            </span>
          )}
          <span className="fn-story-go">Read the notes →</span>
        </p>
      </div>
    </Link>
  )
}
