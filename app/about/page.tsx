import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import "./about.css"

export const metadata: Metadata = {
  title: "About | Solo in Vietnam",
  description:
    "Nguyen Nguyen documents Vietnam's 63 provinces - famous places and the ones no one writes about - at soloinvietnam.com.",
  alternates: { canonical: "https://www.soloinvietnam.com/about" },
  openGraph: {
    title: "About | Solo in Vietnam",
    description:
      "Nguyen Nguyen documents Vietnam's 63 provinces - famous places and the ones no one writes about - at soloinvietnam.com.",
    url: "https://www.soloinvietnam.com/about",
    images: [{ url: "https://res.cloudinary.com/dl5kqhspv/image/upload/w_1200,h_630,c_fill,q_auto,f_auto/fallback_picture", width: 1200, height: 630 }],
  },
}

export default function AboutPage() {
  return (
    <main className="about-wrap">
      {/* ── HERO ── */}
      <section className="about-hero">
        <div className="about-hero-inner">
          <div className="about-hero-text">
            <div className="about-eyebrow">— About</div>
            <h1>About</h1>
            <p className="about-tagline">
              <em>
                Still exploring.
                <br />
                Still chasing that feeling.
              </em>
            </p>
            <p className="about-signature">– Nguyen Nguyen</p>
          </div>

          <div className="about-hero-image">
            <Image
              src="https://res.cloudinary.com/dl5kqhspv/image/upload/about-me-cover_zglkkp.jpg"
              alt="About me"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            <div className="about-hero-image-fade" />
          </div>
        </div>

        <div className="about-quote">
          <span className="about-quote-mark" aria-hidden="true">
            &ldquo;
          </span>
          <p>
            Some mornings I wake up in complete unfamiliarity - new
            surroundings, unfamiliar faces, food I&apos;ve never tasted before.
            Like a child discovering the world for the first time. That feeling
            never gets old. That&apos;s why I keep going.
          </p>
        </div>
      </section>

      {/* ── WHO I AM ── */}
      <section className="about-section about-who">
        <div className="about-who-image">
          <Image
            src="https://res.cloudinary.com/dl5kqhspv/image/upload/f_auto,q_auto,w_1600/about-me-2_zjcsvk.jpg"
            alt="Nguyen Nguyen - soloinvietnam.com"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="about-who-text">
          <div className="about-section-eyebrow">Who I am</div>
          <h2>My name is Nguyen Nguyen.</h2>
          <p>
            I&apos;m Vietnamese, born and raised along the coast of the Mekong
            Delta in southwestern Vietnam.
          </p>
          <p>
            I&apos;ve been mapping this country since 2013 - tracing every
            coastline, every highland road, every river delta, trying to draw a
            complete picture of the place I call home.
          </p>
          <p>
            <strong>All 63 provinces.</strong>
            <br />
            The famous ones and the ones no one writes about.
          </p>
          <p>soloinvietnam.com is where I document what I find.</p>
        </div>
      </section>

      {/* ── GOOD NEWS / BAD NEWS ── */}
      <section className="about-newsblock">

        <div className="about-newsblock-illus" aria-hidden="true" />

        <div className="about-newsblock-wrap">
          <div className="about-newsblock-timeline">

            <div className="about-news-item">
              <div className="about-news-track">
                <span className="about-news-dot about-news-dot--good" />
                <span className="about-news-stem" />
              </div>
              <div className="about-news-body">
                <p className="about-news-label about-news-label--good">Good news.</p>
                <p className="about-news-text">You just decided to explore a country with thousands of years of history.</p>
              </div>
            </div>

            <div className="about-news-item">
              <div className="about-news-track">
                <span className="about-news-dot about-news-dot--bad" />
                <span className="about-news-stem" />
              </div>
              <div className="about-news-body">
                <p className="about-news-label about-news-label--bad">Bad news.</p>
                <p className="about-news-text">Your boss gave you 10 days off.<br />Or your visa only gives you 30.</p>
              </div>
            </div>

            <div className="about-news-item">
              <div className="about-news-track">
                <span className="about-news-dot about-news-dot--good" />
                <span className="about-news-stem" />
              </div>
              <div className="about-news-body">
                <p className="about-news-label about-news-label--good">Good news.</p>
                <p className="about-news-text">There&apos;s a local here who can help.</p>
              </div>
            </div>

            <div className="about-news-item">
              <div className="about-news-track">
                <span className="about-news-dot about-news-dot--bad" />
                <span className="about-news-stem" />
              </div>
              <div className="about-news-body">
                <p className="about-news-label about-news-label--bad">Bad news.</p>
                <p className="about-news-text">He&apos;s lived here for more than 30 years —<br />and still wouldn&apos;t dare claim he understands all of Vietnam.</p>
              </div>
            </div>

            <div className="about-news-item about-news-item--last">
              <div className="about-news-track">
                <span className="about-news-dot about-news-dot--good" />
              </div>
              <div className="about-news-body">
                <p className="about-news-label about-news-label--good">Good news.</p>
                <p className="about-news-text">He doesn&apos;t know everything.<br />But after 30 years, he&apos;s learned a thing or two.<br />And he&apos;s happy to share what he&apos;s found.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── WHAT YOU'LL FIND HERE ── */}
      <section className="about-section about-find">
        <div className="about-find-text">
          <div className="about-section-eyebrow">How I travel</div>
          <h2>What you&apos;ll find here.</h2>

          <ul className="about-bullets">
            <li>
              <span className="about-bullet-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21h18" />
                  <path d="M5 21V8l7-5 7 5v13" />
                  <path d="M9 21v-6h6v6" />
                </svg>
              </span>
              <span>
                Most of what&apos;s here comes from personal experience - places
                I&apos;ve actually been, trails I&apos;ve actually walked, scams
                I&apos;ve actually seen happen.
              </span>
            </li>
            <li>
              <span className="about-bullet-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" />
                </svg>
              </span>
              <span>
                When I haven&apos;t experienced something directly, I research
                it carefully before publishing.
              </span>
            </li>
            <li>
              <span className="about-bullet-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </span>
              <span>
                If I ever recommend a place here, it&apos;s because I genuinely
                think it&apos;s worth your time - not because someone paid me to
                say it.
              </span>
            </li>
            <li>
              <span className="about-bullet-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                  <circle cx="12" cy="13" r="4" />
                </svg>
              </span>
              <span>
                More than a travel guide, this site is my attempt to show
                Vietnam the way many Vietnamese quietly experience it - through
                long roads, small towns, morning coffee stalls, flood seasons,
                mountain winds, and countless ordinary moments that rarely make
                it into travel brochures.
              </span>
            </li>
            <li>
              <span className="about-bullet-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6" />
                </svg>
              </span>
              <span>
                It also gives me a reason to keep going - to travel farther, dig
                deeper into the culture and history, and keep rediscovering the
                country I grew up in.
              </span>
            </li>
          </ul>
        </div>

        <div className="about-find-image">
          <Image
            src="https://res.cloudinary.com/dl5kqhspv/image/upload/about-me-3_homhpd.jpg"
            alt="Vietnam highland road"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* ── OLD COMPANIONS ── */}
      <section className="about-section-alt about-companions">
        <div className="about-companions-inner">
          <div className="about-companions-text">
            <div className="about-section-eyebrow">The companions</div>
            <h2>Old companions.</h2>
            <p>
              Many of these journeys were made on an old 2002 Yamaha Sirius,
              later a Kawasaki W175, with a Nikon D7000 sitting somewhere in
              the backpack.
            </p>
            <p>
              <strong>Old companions.</strong>
              <br />
              They&apos;ve seen more rain, dust, and ferry rides than they
              deserved.
            </p>
          </div>

          <div className="about-companions-grid">
            <figure>
              <div className="about-companion-image">
                <Image
                  src="https://res.cloudinary.com/dl5kqhspv/image/upload/sirius_llfisb.jpg"
                  alt="Yamaha Sirius"
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <figcaption>Yamaha Sirius (2002)</figcaption>
            </figure>
            <figure>
              <div className="about-companion-image">
                <Image
                  src="https://res.cloudinary.com/dl5kqhspv/image/upload/f_auto,q_auto,w_800/kawasaki-w175_mscqui.jpg"
                  alt="Kawasaki W175"
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <figcaption>Kawasaki W175</figcaption>
            </figure>
            <figure>
              <div className="about-companion-image">
                <Image
                  src="https://res.cloudinary.com/dl5kqhspv/image/upload/nikon-d7000_lurk2r.jpg"
                  alt="Nikon D7000"
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <figcaption>Nikon D7000</figcaption>
            </figure>
          </div>
        </div>

        <div className="about-thanks">
          <div className="about-thanks-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <h3>These journeys were never made alone.</h3>
          <p>
            To the locals who shared their stories, offered a meal, gave
            directions, or just a smile - thank you. This site exists because
            of you.
          </p>
        </div>
      </section>

      {/* ── CTA FOOTER BANNER ── */}
      <section className="about-cta">
        <div className="about-cta-inner">
          <div className="about-cta-text">
            <div className="about-cta-eyebrow">— Let&apos;s keep exploring</div>
            <h2>
              The road&apos;s <em>always</em> calling.
            </h2>
            <p>
              Thanks for being here. I hope this site helps you see Vietnam a
              little differently.
            </p>
          </div>
          <Link href="/destinations" className="about-cta-btn">
            Start exploring →
          </Link>
        </div>
      </section>
    </main>
  )
}
