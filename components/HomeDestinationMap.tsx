import Link from "next/link"
import { OUTLINE_HEIGHT, OUTLINE_WIDTH, buildHomeMapPills } from "@/lib/home-map"

// ─── Homepage destination map ────────────────────────────────────────────────
// Static and server-rendered: an outline of Vietnam (an <img>, cached apart
// from the HTML) with one link pill per destination, placed in % so the map
// scales as one picture. No client JS, no Leaflet, no tiles - /map is the
// interactive version. Pill look follows /map's destination bubbles
// (styles in app/homepage.css, .home-dmap-*).

const pills = buildHomeMapPills()

export default function HomeDestinationMap() {
  return (
    <div className="home-dmap">
      {/* A plain static SVG: next/image has nothing to optimise, and an <img>
          keeps it out of the HTML and cached across pages */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/maps/vietnam-outline.svg"
        alt=""
        width={OUTLINE_WIDTH}
        height={OUTLINE_HEIGHT}
        className="home-dmap-outline"
        loading="lazy"
        decoding="async"
      />
      {/* Leader lines from each dot to its pill (drawn under the pills) */}
      <svg className="home-dmap-lines" viewBox={`0 0 ${OUTLINE_WIDTH} ${OUTLINE_HEIGHT}`} aria-hidden="true">
        {pills.flatMap((p) => p.lines.map((l, i) => (
          <line key={`${p.key}-${i}`} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} />
        )))}
      </svg>
      {pills.flatMap((p) => p.places.map((place) => (
        <span key={place.slug} className="home-dmap-dot" style={{ left: `${place.left}%`, top: `${place.top}%` }} aria-hidden="true" />
      )))}
      <ul className="home-dmap-pills" aria-label="Destinations on the map">
        {pills.map((p) => (
          <li key={p.key} className="home-dmap-pill" style={{ left: `${p.left}%`, top: `${p.top}%` }}>
            {p.places.map((place, i) => (
              <span key={place.slug} className="home-dmap-item">
                {i > 0 && <span className="home-dmap-join" aria-hidden="true">·</span>}
                {/* No prefetch: 20 pills would prefetch 20 guides as the map scrolls in */}
                <Link
                  href={`/destinations/${place.slug}`}
                  prefetch={false}
                  className="home-dmap-link"
                  aria-label={`${place.name} - ${place.count} ${place.count === 1 ? "place" : "places"}`}
                >
                  <span className="home-dmap-name">{place.name}</span>
                  {/* Shared pill: "Da Nang 7"; single: "Sapa · 4" */}
                  <span className={`home-dmap-count${p.places.length > 1 ? "" : " is-single"}`}>{place.count}</span>
                </Link>
              </span>
            ))}
          </li>
        ))}
      </ul>
    </div>
  )
}
