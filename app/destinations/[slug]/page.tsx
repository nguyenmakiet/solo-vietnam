import { destinations } from "../../../data/destinations"
import Link from "next/link"
import { notFound } from "next/navigation"

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const destination = destinations.find((d) => d.slug === slug)
  if (!destination) return notFound()

  const related = destinations
    .filter((d) => d.provinceSlug === destination.provinceSlug && d.slug !== destination.slug)
    .slice(0, 4)

  const regionLabel =
    destination.region === "north"
      ? "North Vietnam"
      : destination.region === "central"
      ? "Central Vietnam"
      : "South Vietnam"

  const regionEmoji =
    destination.region === "north" ? "🏔️" : destination.region === "central" ? "🌊" : "🌴"

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
          --dark: #1a1209;
          --dark-2: #2d2110;
          --surface: #faf8f4;
          --surface-2: #f2ede4;
          --text: #2d2110;
          --text-muted: #7a6a52;
          --border: #e2d8c8;
        }
        .dp * { box-sizing: border-box; margin: 0; padding: 0; }
        .dp { font-family: 'DM Sans', sans-serif; background: var(--surface); color: var(--text); min-height: 100vh; }

        .breadcrumb {
          background: var(--dark); padding: 14px 24px;
          display: flex; align-items: center; gap: 6px;
          font-size: 12px; letter-spacing: 0.5px;
          position: sticky; top: 0; z-index: 50;
          flex-wrap: wrap;
        }
        .breadcrumb a { color: var(--gold); text-decoration: none; transition: opacity 0.2s; }
        .breadcrumb a:hover { opacity: 0.7; }
        .breadcrumb .sep { color: #555; }
        .breadcrumb .current { color: #fff; }

        .hero {
          position: relative; min-height: 440px;
          display: flex; align-items: flex-end; overflow: hidden;
        }
        .hero-img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; object-position: center;
        }
        .hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(15,8,0,0.96) 0%, rgba(15,8,0,0.35) 55%, transparent 100%);
        }
        .hero-content {
          position: relative; z-index: 1;
          padding: 40px 28px 36px;
          width: 100%; max-width: 900px; margin: 0 auto;
        }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 6px;
          border: 1px solid rgba(200,169,110,0.4);
          padding: 5px 14px; border-radius: 20px;
          font-size: 11px; letter-spacing: 2px;
          text-transform: uppercase; color: var(--gold);
          margin-bottom: 14px; font-weight: 600;
        }
        .hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(38px, 7vw, 68px);
          font-weight: 900; color: #fff;
          line-height: 1.0; margin-bottom: 10px; letter-spacing: -1px;
        }
        .hero-tagline {
          font-size: 15px; color: rgba(255,255,255,0.65);
          font-style: italic; margin-bottom: 22px;
          font-family: 'Playfair Display', serif;
        }
        .hero-tags { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 22px; }
        .hero-tag {
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.15);
          padding: 5px 12px; border-radius: 16px;
          font-size: 12px; color: rgba(255,255,255,0.85);
        }
        .hero-meta {
          display: flex; flex-wrap: wrap;
          background: rgba(0,0,0,0.45);
          border: 1px solid rgba(200,169,110,0.2);
          border-radius: 10px; overflow: hidden;
        }
        .hero-meta-item {
          padding: 12px 20px; flex: 1; min-width: 110px;
          border-right: 1px solid rgba(255,255,255,0.07);
        }
        .hero-meta-item:last-child { border-right: none; }
        .hero-meta-item .val { color: var(--gold); font-size: 13px; font-weight: 600; display: block; margin-bottom: 2px; }
        .hero-meta-item .lbl { color: rgba(255,255,255,0.38); font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase; }

        .content-wrap { max-width: 900px; margin: 0 auto; padding: 44px 24px 80px; }

        .section-label {
          font-size: 10px; letter-spacing: 3px;
          text-transform: uppercase; color: var(--text-muted);
          font-weight: 600; margin-bottom: 18px;
        }

        .description-block { border-left: 3px solid var(--gold); padding-left: 20px; margin-bottom: 48px; }
        .description-block p { font-size: 17px; line-height: 1.8; color: #4a3c2a; }

        .highlights-list { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 48px; }
        .highlight-pill {
          background: #fff; border: 1px solid var(--border);
          border-radius: 8px; padding: 10px 16px;
          font-size: 13px; font-weight: 500; color: var(--text);
          display: flex; align-items: center; gap: 8px;
        }
        .highlight-pill::before { content: '✦'; color: var(--gold); font-size: 10px; }

        .info-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 48px; }
        @media (max-width: 500px) { .info-row { grid-template-columns: 1fr; } }
        .info-card { background: #fff; border: 1px solid var(--border); border-radius: 10px; padding: 18px; }
        .info-card.full { grid-column: 1 / -1; }
        .info-card .ic-icon { font-size: 20px; margin-bottom: 10px; display: block; }
        .info-card .ic-title { font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; color: var(--text-muted); font-weight: 600; margin-bottom: 8px; }
        .info-card .ic-body { font-size: 14px; color: var(--text); line-height: 1.65; }

        .practical-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 48px; }
        @media (max-width: 500px) { .practical-grid { grid-template-columns: 1fr; } }
        .practical-card { background: #fff; border: 1px solid var(--border); border-radius: 10px; padding: 18px; transition: box-shadow 0.2s, transform 0.2s; }
        .practical-card:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.07); transform: translateY(-2px); }
        .practical-card.warn { border-left: 4px solid #e65100; background: #fff9f5; }
        .practical-card.safe { border-left: 4px solid var(--gold); background: #fffdf7; }
        .practical-card .card-icon { font-size: 22px; margin-bottom: 10px; display: block; }
        .practical-card .card-title { font-size: 13px; font-weight: 700; color: var(--text); margin-bottom: 6px; }
        .practical-card .card-body { font-size: 12px; color: var(--text-muted); line-height: 1.65; }

        .related-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 40px; }
        @media (max-width: 500px) { .related-grid { grid-template-columns: 1fr; } }
        .related-card {
          background: #fff; border: 1px solid var(--border);
          border-radius: 10px; padding: 16px 18px;
          text-decoration: none; display: flex;
          align-items: center; justify-content: space-between; transition: all 0.2s;
        }
        .related-card:hover { border-color: var(--gold); box-shadow: 0 3px 12px rgba(200,169,110,0.15); }
        .related-card .rc-name { font-size: 14px; font-weight: 600; color: var(--text); }
        .related-card .rc-sub { font-size: 11px; color: var(--text-muted); margin-top: 2px; }
        .related-card .rc-arrow { color: var(--gold); font-size: 16px; }

        .region-cta {
          background: var(--dark); border-radius: 12px; padding: 28px 24px;
          display: flex; align-items: center; justify-content: space-between;
          gap: 16px; flex-wrap: wrap; border: 1px solid rgba(200,169,110,0.2);
        }
        .region-cta .cta-label { font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: var(--gold); margin-bottom: 6px; }
        .region-cta .cta-title { font-family: 'Playfair Display', serif; font-size: 20px; color: #fff; font-weight: 700; }
        .region-cta a {
          background: var(--gold); color: var(--dark); padding: 12px 22px;
          border-radius: 6px; font-size: 13px; font-weight: 700;
          text-decoration: none; white-space: nowrap; transition: opacity 0.2s;
        }
        .region-cta a:hover { opacity: 0.85; }
      `}</style>

      <div className="dp">
        <nav className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="sep">›</span>
          <Link href={`/${destination.region}-vietnam`}>{regionLabel}</Link>
          <span className="sep">›</span>
          <Link href={`/provinces/${destination.provinceSlug}`}>{destination.province}</Link>
          <span className="sep">›</span>
          <span className="current">{destination.name}</span>
        </nav>

        <header className="hero">
          {destination.heroImage && (
            <img src={destination.heroImage} alt={destination.name} className="hero-img" />
          )}
          <div className="hero-overlay" />
          <div className="hero-content">
            <div className="hero-badge">{regionEmoji} {regionLabel} · Solo Travel Guide</div>
            <h1>{destination.name}</h1>
            {destination.tagline && <p className="hero-tagline">{destination.tagline}</p>}
            {destination.tags && destination.tags.length > 0 && (
              <div className="hero-tags">
                {destination.tags.map((tag) => (
                  <span key={tag} className="hero-tag">{tag}</span>
                ))}
              </div>
            )}
            <div className="hero-meta">
              <div className="hero-meta-item">
                <span className="val">{destination.province}</span>
                <span className="lbl">Province</span>
              </div>
              {destination.budgetPerDay && (
                <div className="hero-meta-item">
                  <span className="val">{destination.budgetPerDay}</span>
                  <span className="lbl">Budget/day</span>
                </div>
              )}
              {destination.recommendedStay && (
                <div className="hero-meta-item">
                  <span className="val">{destination.recommendedStay}</span>
                  <span className="lbl">Stay</span>
                </div>
              )}
              {destination.transport && (
                <div className="hero-meta-item">
                  <span className="val">{destination.transport}</span>
                  <span className="lbl">Transport</span>
                </div>
              )}
            </div>
          </div>
        </header>

        <main className="content-wrap">

          <div className="description-block">
            <p>{destination.description}</p>
          </div>

          {destination.highlights && destination.highlights.length > 0 && (
            <section style={{ marginBottom: 48 }}>
              <p className="section-label">Top Highlights</p>
              <div className="highlights-list">
                {destination.highlights.map((h) => (
                  <div key={h} className="highlight-pill">{h}</div>
                ))}
              </div>
            </section>
          )}

          <section style={{ marginBottom: 48 }}>
            <p className="section-label">Plan Your Trip</p>
            <div className="info-row">
              {destination.gettingThere && (
                <div className="info-card full">
                  <span className="ic-icon">🚌</span>
                  <div className="ic-title">Getting There</div>
                  <div className="ic-body">{destination.gettingThere}</div>
                </div>
              )}
              {destination.bestTime && (
                <div className="info-card">
                  <span className="ic-icon">📅</span>
                  <div className="ic-title">Best Time to Visit</div>
                  <div className="ic-body">{destination.bestTime}</div>
                </div>
              )}
              {destination.recommendedStay && (
                <div className="info-card">
                  <span className="ic-icon">🌙</span>
                  <div className="ic-title">Recommended Stay</div>
                  <div className="ic-body">{destination.recommendedStay}</div>
                </div>
              )}
            </div>
          </section>

          <section style={{ marginBottom: 48 }}>
            <p className="section-label">Practical Info</p>
            <div className="practical-grid">
              <div className="practical-card safe">
                <span className="card-icon">📱</span>
                <div className="card-title">SIM & Connectivity</div>
                <div className="card-body">Viettel or Vietnamobile available locally. Unlimited data from ~150,000 VND/month.</div>
              </div>
              <div className="practical-card warn">
                <span className="card-icon">⚠️</span>
                <div className="card-title">Scam Alerts</div>
                <div className="card-body">Use Grab for transport. Agree on prices upfront for any local services.</div>
              </div>
              <div className="practical-card safe">
                <span className="card-icon">💰</span>
                <div className="card-title">Money</div>
                <div className="card-body">Cash-first destination. Withdraw VND at ATMs — avoid airport exchange booths.</div>
              </div>
              <div className="practical-card warn">
                <span className="card-icon">🏥</span>
                <div className="card-title">Emergency</div>
                <div className="card-body">Police: <strong>113</strong> · Ambulance: <strong>115</strong> · Fire: <strong>114</strong></div>
              </div>
            </div>
          </section>

          {related.length > 0 && (
            <section style={{ marginBottom: 48 }}>
              <p className="section-label">More in {destination.province} Province</p>
              <div className="related-grid">
                {related.map((d) => (
                  <Link key={d.slug} href={`/destinations/${d.slug}`} className="related-card">
                    <div>
                      <div className="rc-name">{d.name}</div>
                      <div className="rc-sub">{d.province}</div>
                    </div>
                    <span className="rc-arrow">→</span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div className="region-cta">
            <div>
              <div className="cta-label">Explore the region</div>
              <div className="cta-title">{regionEmoji} {regionLabel}</div>
            </div>
            <Link href={`/${destination.region}-vietnam`}>View all destinations →</Link>
          </div>

        </main>
      </div>
    </>
  )
}