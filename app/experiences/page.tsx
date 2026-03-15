import Link from "next/link"
import { experiences, getExperienceBySlug } from "@/data/experiences"
import "./experiences.css" 
import { allLocations } from "@/data/all-locations"

export default function ExperiencesIndexPage() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <div className="exp">
        <nav className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="sep">›</span>
          <span className="current">Experiences</span>
        </nav>

        <div className="exp-index-hero">
          <h1>Experiences in Vietnam</h1>
          <p>Find exactly what you're looking for — from caving to beach days to overnight homestays</p>
        </div>

        <div className="exp-content">
          <p className="section-label">{experiences.length} experience types</p>
          <div className="exp-index-grid">
            {experiences.map((exp) => {
              const count = allLocations.filter((l) =>
                l.experiences.includes(exp.value)
              ).length
              return (
                <Link key={exp.slug} href={`/experiences/${exp.slug}`} className="exp-index-card">
                  <span className="exp-index-card-icon">{exp.icon}</span>
                  <span className="exp-index-card-label">{exp.label}</span>
                  <span className="exp-index-card-count">{count} {count === 1 ? "place" : "places"}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
