import { provinces } from "../../../data/provinces"
import { destinations } from "../../../data/destinations"
import { notFound } from "next/navigation"
import Link from "next/link"

export default async function ProvincePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const province = provinces.find((p) => p.slug === slug)
  if (!province) return notFound()

  const provinceDestinations = destinations.filter(
    (d) => d.provinceSlug === slug
  )

  const regionLabel =
    province.region === "north"
      ? "North Vietnam"
      : province.region === "central"
        ? "Central Vietnam"
        : "South Vietnam"

  const regionEmoji =
    province.region === "north" ? "🏔️" : province.region === "central" ? "🌊" : "🌴"

  console.log("food data:", province.food)
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <style>{`
        :root {
          --gold: #c8a96e;
          --gold-light: #e8d5a8;
          --dark: #0d1a0f;
          --dark-2: #162418;
          --surface: #faf8f4;
          --surface-2: #f2ede4;
          --text: #1a2d1a;
          --text-muted: #5a7060;
          --border: #d8e4d8;
          --green-accent: #4a8c5c;
        }
        .pp * { box-sizing: border-box; margin: 0; padding: 0; }
        .pp { font-family: 'DM Sans', sans-serif; background: var(--surface); color: var(--text); min-height: 100vh; }

        .breadcrumb {
          background: var(--dark); padding: 14px 24px;
          display: flex; align-items: center; gap: 6px;
          font-size: 12px; letter-spacing: 0.5px;
          position: sticky; top: 0; z-index: 50; flex-wrap: wrap;
        }
        .breadcrumb a { color: var(--gold); text-decoration: none; transition: opacity 0.2s; }
        .breadcrumb a:hover { opacity: 0.7; }
        .breadcrumb .sep { color: #3a5040; }
        .breadcrumb .current { color: #fff; }

        /* Hero — green-tinted to differentiate from destination (gold/brown) */
        .hero {
          background: linear-gradient(160deg, #0d1a0f 0%, #162418 55%, #0a1a10 100%);
          padding: 56px 24px 48px; position: relative; overflow: hidden;
        }
        .hero::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            radial-gradient(ellipse at 80% 40%, rgba(74,140,92,0.12) 0%, transparent 55%),
            repeating-linear-gradient(45deg, rgba(200,169,110,0.025) 0px, transparent 1px, transparent 24px);
          pointer-events: none;
        }
        .hero-inner { position: relative; z-index: 1; max-width: 900px; margin: 0 auto; }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 6px;
          border: 1px solid rgba(200,169,110,0.35); padding: 5px 14px;
          border-radius: 20px; font-size: 11px; letter-spacing: 2px;
          text-transform: uppercase; color: var(--gold); margin-bottom: 18px; font-weight: 600;
        }
        .hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(34px, 6vw, 60px); font-weight: 900; color: #fff;
          line-height: 1.05; margin-bottom: 10px; letter-spacing: -0.5px;
        }
        .hero-desc {
          font-size: 15px; color: rgba(255,255,255,0.58);
          font-style: italic; font-family: 'Playfair Display', serif;
          margin-bottom: 28px; max-width: 560px; line-height: 1.65;
        }
        .hero-tags { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 28px; }
        .hero-tag {
          background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12);
          padding: 5px 12px; border-radius: 16px; font-size: 12px; color: rgba(255,255,255,0.8);
        }
        .hero-stats {
          display: flex; gap: 0;
          background: rgba(0,0,0,0.35); border: 1px solid rgba(200,169,110,0.18);
          border-radius: 10px; overflow: hidden; width: fit-content;
        }
        .hero-stat {
          padding: 12px 24px; border-right: 1px solid rgba(255,255,255,0.07);
        }
        .hero-stat:last-child { border-right: none; }
        .hero-stat .val { color: var(--gold); font-size: 20px; font-weight: 700; font-family: 'Playfair Display', serif; display: block; margin-bottom: 2px; }
        .hero-stat .lbl { color: rgba(255,255,255,0.38); font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase; }

        /* Content */
        .content-wrap { max-width: 900px; margin: 0 auto; padding: 48px 24px 80px; }

        .section-label {
          font-size: 10px; letter-spacing: 3px; text-transform: uppercase;
          color: var(--text-muted); font-weight: 600; margin-bottom: 18px;
        }

        /* Quick facts */
        .quick-facts {
          display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 48px;
        }
        .fact-chip {
          background: #fff; border: 1px solid var(--border);
          border-radius: 8px; padding: 10px 16px;
          display: flex; align-items: center; gap: 10px;
        }
        .fact-chip .fc-label { font-size: 10px; letter-spacing: 1px; text-transform: uppercase; color: var(--text-muted); margin-bottom: 2px; }
        .fact-chip .fc-val { font-size: 13px; font-weight: 600; color: var(--text); }

        /* Destination cards */
        .dest-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 16px; margin-bottom: 56px;
        }
        .dest-card {
          background: #fff; border: 1px solid var(--border);
          border-radius: 12px; padding: 22px 20px;
          text-decoration: none; display: block;
          transition: all 0.22s; position: relative; overflow: hidden;
        }
        .dest-card::after {
          content: ''; position: absolute; bottom: 0; left: 0; right: 0;
          height: 3px; background: linear-gradient(90deg, var(--gold), transparent);
          opacity: 0; transition: opacity 0.2s;
        }
        .dest-card:hover { border-color: var(--gold-light); box-shadow: 0 6px 24px rgba(200,169,110,0.12); transform: translateY(-3px); }
        .dest-card:hover::after { opacity: 1; }
        .dest-card .dc-num { font-size: 10px; letter-spacing: 2px; color: var(--gold); font-weight: 700; margin-bottom: 10px; }
        .dest-card .dc-name { font-family: 'Playfair Display', serif; font-size: 22px; font-weight: 700; color: var(--text); margin-bottom: 8px; line-height: 1.2; }
        .dest-card .dc-tags { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 10px; }
        .dest-card .dc-tag { font-size: 11px; color: var(--text-muted); }
        .dest-card .dc-desc { font-size: 13px; color: var(--text-muted); line-height: 1.6; margin-bottom: 14px; }
        .dest-card .dc-cta { font-size: 12px; color: var(--gold); font-weight: 600; letter-spacing: 0.5px; }

        /* Food section */
        .food-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 12px; margin-bottom: 48px; }
        .food-card {
          background: #fff; border: 1px solid var(--border);
          border-radius: 10px; padding: 18px;
          transition: box-shadow 0.2s;
        }
        .food-card:hover { box-shadow: 0 4px 14px rgba(0,0,0,0.07); }
        .food-card .food-emoji { font-size: 28px; margin-bottom: 10px; display: block; }
        .food-card .food-name { font-size: 15px; font-weight: 700; color: var(--text); margin-bottom: 6px; }
        .food-card .food-desc { font-size: 13px; color: var(--text-muted); line-height: 1.6; }

        /* Empty state */
        .empty-state { text-align: center; padding: 60px 20px; color: var(--text-muted); }
        .empty-state .icon { font-size: 48px; margin-bottom: 16px; }
        .empty-state p { font-size: 15px; line-height: 1.6; }

        /* Region nav */
        .region-nav {
          background: var(--surface-2); border: 1px solid var(--border);
          border-radius: 12px; padding: 20px; margin-bottom: 32px;
        }
        .region-nav .rn-label { font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: var(--text-muted); font-weight: 600; margin-bottom: 12px; }
        .region-nav .rn-links { display: flex; gap: 10px; flex-wrap: wrap; }
        .region-nav a {
          background: #fff; border: 1px solid var(--border); border-radius: 20px;
          padding: 8px 18px; font-size: 13px; color: var(--text);
          text-decoration: none; transition: all 0.2s; font-weight: 500;
        }
        .region-nav a:hover, .region-nav a.active { background: var(--dark); color: var(--gold); border-color: var(--dark); }

        /* CTA */
        .bottom-cta {
          background: var(--dark); border-radius: 12px; padding: 28px 24px;
          display: flex; align-items: center; justify-content: space-between;
          gap: 16px; flex-wrap: wrap; border: 1px solid rgba(200,169,110,0.2);
        }
        .bottom-cta .cta-label { font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: var(--gold); margin-bottom: 6px; }
        .bottom-cta .cta-title { font-family: 'Playfair Display', serif; font-size: 20px; color: #fff; font-weight: 700; }
        .bottom-cta a {
          background: var(--gold); color: var(--dark); padding: 12px 22px;
          border-radius: 6px; font-size: 13px; font-weight: 700;
          text-decoration: none; white-space: nowrap; transition: opacity 0.2s;
        }
        .bottom-cta a:hover { opacity: 0.85; }
      `}</style>

      <div className="pp">
        <nav className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="sep">›</span>
          <Link href={`/${province.region}-vietnam`}>{regionLabel}</Link>
          <span className="sep">›</span>
          <span className="current">{province.name}</span>
        </nav>

        <header className="hero" style={province.heroImage ? {
          backgroundImage: `url(${province.heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        } : {}}>
          {province.heroImage && (
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.4) 100%)"
            }} />
          )}
          <div className="hero-inner">
            <div className="hero-badge">{regionEmoji} {regionLabel} · Province Guide</div>
            <h1>{province.name} Province</h1>
            {province.description && (
              <p className="hero-desc">{province.description}</p>
            )}
            {province.tags && province.tags.length > 0 && (
              <div className="hero-tags">
                {province.tags.map((tag) => (
                  <span key={tag} className="hero-tag">{tag}</span>
                ))}
              </div>
            )}
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="val">{provinceDestinations.length}</span>
                <span className="lbl">Destinations</span>
              </div>
              {province.bestTime && (
                <div className="hero-stat">
                  <span className="val" style={{ fontSize: 13 }}>{province.bestTime}</span>
                  <span className="lbl">Best Time</span>
                </div>
              )}
            </div>
          </div>
        </header>

        <main className="content-wrap">

          {/* Quick facts */}
          {(province.capital || province.knownFor) && (
            <section style={{ marginBottom: 40 }}>
              <div className="quick-facts">
                {province.capital && (
                  <div className="fact-chip">
                    <div>
                      <div className="fc-label">Capital</div>
                      <div className="fc-val">🏙️ {province.capital}</div>
                    </div>
                  </div>
                )}
                {province.knownFor && (
                  <div className="fact-chip">
                    <div>
                      <div className="fc-label">Known For</div>
                      <div className="fc-val">⭐ {province.knownFor}</div>
                    </div>
                  </div>
                )}
                {province.bestTime && (
                  <div className="fact-chip">
                    <div>
                      <div className="fc-label">Best Time</div>
                      <div className="fc-val">📅 {province.bestTime}</div>
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Region nav */}
          <div className="region-nav">
            <div className="rn-label">Browse by region</div>
            <div className="rn-links">
              <Link href="/north-vietnam" className={province.region === "north" ? "active" : ""}>🏔️ North</Link>
              <Link href="/central-vietnam" className={province.region === "central" ? "active" : ""}>🌊 Central</Link>
              <Link href="/south-vietnam" className={province.region === "south" ? "active" : ""}>🌴 South</Link>
            </div>
          </div>

          {/* Destinations */}
          <section style={{ marginBottom: 56 }}>
            <p className="section-label">
              Destinations in {province.name} — {provinceDestinations.length} found
            </p>
            {provinceDestinations.length > 0 ? (
              <div className="dest-grid">
                {provinceDestinations.map((d, i) => (
                  <Link key={d.slug} href={`/destinations/${d.slug}`} className="dest-card">
                    <div className="dc-num">{String(i + 1).padStart(2, "0")} / {String(provinceDestinations.length).padStart(2, "0")}</div>
                    <div className="dc-name">{d.name}</div>
                    {d.tags && d.tags.length > 0 && (
                      <div className="dc-tags">
                        {d.tags.map((t) => <span key={t} className="dc-tag">{t}</span>)}
                      </div>
                    )}
                    {d.description && (
                      <div className="dc-desc">
                        {d.description.slice(0, 90)}{d.description.length > 90 ? "…" : ""}
                      </div>
                    )}
                    <div className="dc-cta">Explore guide →</div>
                  </Link>
                ))}
              </div>
            ) : (
                <div className="empty-state">
                  <div className="icon">🗺️</div>
                  <p>No destinations listed yet for {province.name}.<br />Content coming soon.</p>
                </div>
              )}
          </section>

          {/* Local Food */}
          {province.food && province.food.length > 0 && (
            <section style={{ marginBottom: 56 }}>
              <p className="section-label">Local Food You Must Try</p>
              <div className="food-grid">
                {province.food.map((f) => (
                  <div key={f.name} className="food-card">
                    {f.image ? (
                      <img
                        src={f.image}
                        alt={f.name}
                        style={{ width: "100%", height: 140, objectFit: "cover", borderRadius: 8, marginBottom: 12 }}
                      />
                    ) : (
                        <span className="food-emoji">{f.emoji}</span>
                      )}
                    <div className="food-name">{f.name}</div>
                    <div className="food-desc">{f.description}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <div className="bottom-cta">
            <div>
              <div className="cta-label">Explore the region</div>
              <div className="cta-title">{regionEmoji} {regionLabel}</div>
            </div>
            <Link href={`/${province.region}-vietnam`}>View all destinations →</Link>
          </div>

        </main>
      </div>
    </>
  )
}
