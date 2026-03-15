import VietnamMap from "@/components/VietnamMap"
import Link from "next/link"
import { destinations } from "@/data/destinations"
import "./homepage.css"

// Top 6 featured destinations
const featured = destinations.slice(0, 6)

// Mock blog posts — replace with real data when /blog is ready
const blogPosts = [
  {
    slug: "vietnam-motorbike-north-to-south",
    title: "Riding Vietnam North to South on a Motorbike",
    excerpt: "The full breakdown — route, costs, bike choice, and what nobody tells you before you leave Hanoi.",
    readTime: "12 min read",
    tag: "Adventure",
  },
  {
    slug: "scams-in-vietnam",
    title: "Vietnam Scams: The Complete Solo Traveler Guide",
    excerpt: "Cyclo traps, fake travel agencies, SIM card cons — what to watch for and how to handle them without ruining your trip.",
    readTime: "8 min read",
    tag: "Safety",
  },
  {
    slug: "is-vietnam-safe-for-women",
    title: "Is Vietnam Safe for Women Traveling Solo?",
    excerpt: "An honest answer based on real experience — not a PR piece for the tourism board.",
    readTime: "10 min read",
    tag: "Women Solo",
  },
]

const experiences = [
  { emoji: "🏖️", label: "Beaches", href: "/experiences/beaches" },
  { emoji: "🥾", label: "Trekking", href: "/experiences/trekking" },
  { emoji: "🏕️", label: "Camping", href: "/experiences/camping" },
  { emoji: "🍜", label: "Food", href: "/experiences/food" },
]

export default function Home() {
  return (
    <main className="home-wrap">

      {/* ── HERO + MAP ── */}
      <section className="home-hero">
        <div className="home-hero-inner">
          <div className="home-eyebrow">"Solo steps, YOLO Stories"</div>

          <h1>
            Explore Vietnam,<br />
            <em>on your own terms.</em>
          </h1>

          <p className="home-hero-desc">
            Practical guides for solo travelers — scam alerts, real prices, and local knowledge you won't find in a guidebook.
          </p>

          {/* MAP — preserved exactly as original */}
          <div className="home-map-wrap">
            {/* <div className="home-map-legend">
              <div className="home-map-legend-item">
                <div className="home-map-legend-dot" style={{ background: "#93b8d8" }} />
                North
              </div>
              <div className="home-map-legend-item">
                <div className="home-map-legend-dot" style={{ background: "#90c49a" }} />
                Central
              </div>
              <div className="home-map-legend-item">
                <div className="home-map-legend-dot" style={{ background: "#e8b87a" }} />
                South
              </div>
            </div> */}

            <VietnamMap />

            <div className="home-map-hint">
              👆 Click a province to explore destinations
            </div>
          </div>

          <Link href="/destinations" className="home-map-browse">
            Browse all destinations →
          </Link>
        </div>
      </section>

      {/* ── FEATURED DESTINATIONS ── */}
      <div>
        <div className="home-section">
          <div className="home-section-header">
            <div>
              <div className="home-section-eyebrow">Top Picks</div>
              <h2 className="home-section-title">
                Featured <em>destinations</em>
              </h2>
              <p className="home-section-sub">
                Handpicked for solo travelers — not just the obvious ones.
              </p>
            </div>
            <Link href="/destinations" className="home-section-link">
              View all →
            </Link>
          </div>

          <div className="home-dest-grid">
            {featured.map((d) => (
              <Link key={d.slug} href={`/destinations/${d.slug}`} className="home-dest-card">
                <div className="home-dest-card-img">
                  {d.heroImage
                    ? <img src={d.heroImage} alt={d.name} />
                    : <span>{d.tags?.[0]?.split(" ")[0] ?? "🌏"}</span>
                  }
                </div>
                <div className="home-dest-card-body">
                  {d.tags && (
                    <div className="home-dest-card-tags">
                      {d.tags.slice(0, 2).map((t) => (
                        <span key={t} className="home-dest-card-tag">{t}</span>
                      ))}
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
      </div>

      {/* ── TRAVEL EXPERIENCES ── */}
      <div className="home-section-dark">
        <div className="home-section">
          <div className="home-section-header">
            <div>
              <div className="home-section-eyebrow">Browse by vibe</div>
              <h2 className="home-section-title">
                What kind of trip are <em>you</em> planning?
              </h2>
              <p className="home-section-sub">
                From beach-hopping to highland trekking — Vietnam has it all.
              </p>
            </div>
            <Link href="/experiences" className="home-section-link">
              View all →
            </Link>
          </div>

          <div className="home-exp-grid">
            {experiences.map((e) => (
              <Link key={e.label} href={e.href} className="home-exp-card">
                <span className="home-exp-emoji">{e.emoji}</span>
                <span className="home-exp-label">{e.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── WHY SOLO VIETNAM ── */}
      <div className="home-section-alt">
        <div className="home-section">
          <div className="home-section-header home-section-header-center">
            <div className="home-section-eyebrow">Why this site</div>
            <h2 className="home-section-title">
              Built for solo travelers.<br /><em>Not tour groups.</em>
            </h2>
          </div>
          <div className="home-why-grid">
            <div className="home-why-card">
              <div className="home-why-icon">🎯</div>
              <div className="home-why-title">Practical, not pretty</div>
              <div className="home-why-desc">
                Real scam alerts, actual prices, honest safety info — not sponsored content dressed up as travel advice.
              </div>
            </div>
            <div className="home-why-card">
              <div className="home-why-icon">🔄</div>
              <div className="home-why-title">Up to date info</div>
              <div className="home-why-desc">
                Regularly updated guides with current prices, recent scam alerts, and the latest travel conditions — not outdated blog posts from years ago.
            </div>
            </div>
            <div className="home-why-card">
              <div className="home-why-icon">🏝️</div>
              <div className="home-why-title">Local knowledge</div>
              <div className="home-why-desc">
                Written by someone from the Mekong Delta — not a travel blogger passing through for a week.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── LATEST BLOG ── */}
      {/* <div>
        <div className="home-section">
          <div className="home-section-header">
            <div>
              <div className="home-section-eyebrow">From the blog</div>
              <h2 className="home-section-title">
                Things worth <em>reading</em>
              </h2>
            </div>
            <Link href="/blog" className="home-section-link">
              All posts →
            </Link>
          </div>

          <div className="home-blog-grid">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="home-blog-card">
                <span className="home-blog-tag">{post.tag}</span>
                <div className="home-blog-title">{post.title}</div>
                <div className="home-blog-excerpt">{post.excerpt}</div>
                <div className="home-blog-meta">{post.readTime}</div>
              </Link>
            ))}
          </div>
        </div>
      </div> */}

    </main>
  )
}