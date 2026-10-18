import Link from "next/link"
import { buildHomeMapList, homeMapSlugs } from "@/lib/home-map"

// ─── Homepage map: desktop destination list ──────────────────────────────────
// The map's destinations as a list beside it (desktop only; on phones the map
// is the list), grouped like /map's desktop panel. Hovering or focusing a row
// highlights its pill, circle or dot on the map, and the other way round -
// CSS only: both carry data-dest, and the rules below match them through
// :has() on the card. One rule per destination, because CSS cannot compare
// two attribute values; written here so they follow the destination data.
// Styles: app/homepage.css (.home-map-list, .home-map-row, .home-dmap-hl).

const groups = buildHomeMapList()

const card = ".home-map-card"
const active = (s: string) => `${card}:has([data-dest="${s}"]:hover, [data-dest="${s}"]:focus-visible)`
const slugs = homeMapSlugs()
const rows = slugs.map((s) => `${active(s)} .home-map-row[data-dest="${s}"]`).join(",\n")
const marks = slugs.map((s) => `${active(s)} .home-dmap-link[data-dest="${s}"]`)
const LINKED_CSS = `
${rows} {
  background: color-mix(in srgb, var(--color-signal) 10%, transparent);
  color: var(--color-signal-text);
}
${marks.map((m) => `${m} .home-dmap-hl`).join(",\n")} {
  visibility: visible;
}
${marks.map((m) => `${m} :is(.home-dmap-count, .home-dmap-sep)`).join(",\n")} {
  fill: var(--color-paper);
}
${marks.map((m) => `${m} :is(.home-dmap-circle, .home-dmap-dot)`).join(",\n")} {
  fill: var(--color-signal);
  stroke: var(--color-ink);
}
`

export function HomeMapList() {
  return (
    <nav className="home-map-list" aria-label="Destinations by region">
      {groups.map((g) => (
        <div key={g.label} className="home-map-region">
          <p className="home-section-eyebrow home-map-region-label">{g.label}</p>
          {/* Two columns filled top to bottom: rows = half the items */}
          <ul style={{ "--rows": Math.ceil(g.items.length / 2) } as React.CSSProperties}>
            {g.items.map((d) => (
              <li key={d.slug}>
                {/* No prefetch: 20 links would prefetch 20 guides */}
                <Link href={`/destinations/${d.slug}`} prefetch={false} className="home-map-row" data-dest={d.slug}>
                  <span className="home-map-row-name">{d.name}</span>
                  <span className="home-map-row-count">· {d.count}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  )
}

/** Linked highlight between list rows and map marks (static CSS, no JS) */
export function HomeMapLinkedStyles() {
  return <style>{LINKED_CSS}</style>
}
