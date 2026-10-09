import type { Metadata } from "next"
import Link from "next/link"
import { experiences } from "@/data/experiences"
import { dotClass } from "@/lib/category-dot"
import "@/components/guide-pages.css"
import { activeLocations } from "@/data/all-locations"
import { OG_FALLBACK_IMAGE } from "@/lib/cloudinary"

export const metadata: Metadata = {
  title: "Experiences in Vietnam | Solo in Vietnam",
  description: "Browse travel experiences across Vietnam - trekking, beaches, caves, food tours, homestays, boat trips, and more. Find locations by what you want to do.",
  alternates: { canonical: "https://www.soloinvietnam.com/experiences" },
  openGraph: {
    title: "Experiences in Vietnam | Solo in Vietnam",
    description: "Browse travel experiences across Vietnam - trekking, beaches, caves, food tours, homestays, boat trips, and more. Find locations by what you want to do.",
    url: "https://www.soloinvietnam.com/experiences",
    images: [{ url: OG_FALLBACK_IMAGE, width: 1200, height: 630 }],
  },
}

export default function ExperiencesIndexPage() {
  return (
    <div className="gp">
      <header className="gp-head">
        <div className="gp-container">
          <nav className="gp-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep" aria-hidden="true">/</span>
            <span className="current" aria-current="page">Experiences</span>
          </nav>
          <h1>Experiences in Vietnam</h1>
          <p className="gp-lead">Find exactly what you&apos;re looking for - from caving to beach days to overnight homestays</p>
        </div>
      </header>

      <main className="gp-container gp-main">
        <section className="gp-section" aria-labelledby="h-types">
          <h2 id="h-types" className="gp-label">{experiences.length} experience types</h2>
          <ul className="gp-links">
            {experiences.map((exp) => {
              const count = activeLocations.filter((l) => l.experiences.includes(exp.value)).length
              return (
                <li key={exp.slug}>
                  <Link href={`/experiences/${exp.slug}`} className="gp-link">
                    <span className={dotClass(exp.value)} aria-hidden="true" />
                    <span className="gp-link-text">
                      <span className="gp-link-name">{exp.label}</span>
                    </span>
                    <span className="gp-link-count">{count} {count === 1 ? "place" : "places"}</span>
                    <span className="gp-link-arrow" aria-hidden="true">→</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </section>
      </main>
    </div>
  )
}
