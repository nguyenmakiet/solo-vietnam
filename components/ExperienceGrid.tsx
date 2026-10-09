// Experience tiles: line icon on a soft tint in the experience's category colour
// (lib/category-dot: water / trek / food / highlight), label and place count.
// Styles in components/guide-pages.css (.gp-exp-*); render inside a .gp root.
import Link from "next/link"
import type { Experience } from "@/data/experiences"
import { activeLocations } from "@/data/all-locations"
import { dotCategory } from "@/lib/category-dot"
import ExperienceIcon from "@/components/ExperienceIcon"

export default function ExperienceGrid({ items }: { items: Experience[] }) {
  return (
    <ul className="gp-exp-grid">
      {items.map((exp) => {
        const count = activeLocations.filter((l) => l.experiences.includes(exp.value)).length
        const tone = dotCategory(exp.value) ?? "neutral"
        return (
          <li key={exp.slug}>
            <Link href={`/experiences/${exp.slug}`} className={`gp-exp-tile gp-exp--${tone}`}>
              <span className="gp-exp-icon">
                <ExperienceIcon slug={exp.slug} />
              </span>
              <span className="gp-exp-text">
                <span className="gp-exp-name">{exp.label}</span>
                <span className="gp-exp-count">{count} {count === 1 ? "place" : "places"}</span>
              </span>
              <span className="gp-exp-arrow" aria-hidden="true">→</span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
