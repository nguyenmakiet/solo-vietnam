"use client"
// Homepage-only "field map" - same province interaction as components/VietnamMap
// (hover label, tap for a province card, link to the guide), drawn as an inked
// field sketch: every location as a dot, the featured route, numbered notes.
import Vietnam from "@svg-maps/vietnam"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useRef, useState } from "react"
import { PROVINCE_TO_SLUG, PROVINCE_REGION } from "@/components/VietnamMap"

export type MapDot = { x: number; y: number }
export type MapStop = {
  index: number
  slug: string
  name: string
  x: number
  y: number
  note: { x: number; y: number }
}
export type ProvinceInfo = {
  hasGuide: boolean
  intro?: string
  count: number
  top: { slug: string; name: string }[]
}

const VB_W = 812
const VB_H = 873

const FILL = {
  north: { base: "#dfe9ef", hover: "#b9d2e2" },
  central: { base: "#e1ebdc", hover: "#bfd6b6" },
  south: { base: "#f4e8c8", hover: "#ecd39a" },
  unknown: { base: "#ece5d6", hover: "#ddd2bc" },
}

const ACCENT = { north: "#4a86b8", central: "#2f6b4f", south: "#d99a1e" }

// Smooth curve through points (Catmull-Rom -> cubic Bézier)
function smoothPath(pts: { x: number; y: number }[]) {
  if (pts.length < 2) return ""
  let d = `M ${pts[0].x} ${pts[0].y}`
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i]
    const p1 = pts[i]
    const p2 = pts[i + 1]
    const p3 = pts[i + 2] ?? p2
    const c1 = { x: p1.x + (p2.x - p0.x) / 6, y: p1.y + (p2.y - p0.y) / 6 }
    const c2 = { x: p2.x - (p3.x - p1.x) / 6, y: p2.y - (p3.y - p1.y) / 6 }
    d += ` C ${c1.x.toFixed(1)} ${c1.y.toFixed(1)}, ${c2.x.toFixed(1)} ${c2.y.toFixed(1)}, ${p2.x} ${p2.y}`
  }
  return d
}

// Overland waypoints between stops so the sketched route follows the country
// rather than cutting across the sea (HCMC and Can Tho before the ferry).
const WAYPOINTS_AFTER: Record<string, { x: number; y: number }[]> = {
  "hoi-an": [{ x: 322, y: 520 }, { x: 237, y: 684 }, { x: 188, y: 722 }],
}

type Card = { left: number; top: number; name: string; slug?: string }
type Hover = { left: number; top: number; name: string; count: number }

export default function HomeFieldMap({
  dots,
  stops,
  provinceInfo,
  placesLabel,
}: {
  dots: MapDot[]
  stops: MapStop[]
  provinceInfo: Record<string, ProvinceInfo>
  placesLabel: string
}) {
  const router = useRouter()
  const frameRef = useRef<HTMLDivElement>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [hover, setHover] = useState<Hover | null>(null)
  const [card, setCard] = useState<Card | null>(null)

  const routePts = stops.flatMap((s) => [{ x: s.x, y: s.y }, ...(WAYPOINTS_AFTER[s.slug] ?? [])])

  // Position relative to the frame, clamped so the card never leaves it (mobile)
  const place = (e: React.MouseEvent, width: number) => {
    const rect = frameRef.current!.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const left = Math.max(8, Math.min(x + 12, rect.width - width - 8))
    return { left, top: y + 14 }
  }

  return (
    <div className="fn-map" onClick={() => setCard(null)}>
      {/* Legend - links to the region guides */}
      <div className="fn-map-legend">
        {[
          { key: "north", label: "North", href: "/north-vietnam" },
          { key: "central", label: "Central", href: "/central-vietnam" },
          { key: "south", label: "South", href: "/south-vietnam" },
        ].map((r) => (
          <Link key={r.key} href={r.href} className="fn-map-legend-item">
            <span className="fn-map-swatch" style={{ background: FILL[r.key as keyof typeof FILL].base }} />
            {r.label}
          </Link>
        ))}
        <span className="fn-map-legend-item fn-map-legend-static">
          <span className="fn-map-dot-key" />
          A place on this site
        </span>
      </div>

      <div className="fn-map-frame" ref={frameRef}>
        <svg viewBox={`0 0 ${VB_W} ${VB_H}`} className="fn-map-svg" role="img" aria-label={`Map of Vietnam with ${placesLabel} places marked`}>
          {/* Inked coastline: a thick stroke pass under the fills reads as one outline */}
          <g aria-hidden="true" className="fn-map-ink">
            {Vietnam.locations.map((l: { id: string; path: string }) => (
              <path key={l.id} d={l.path} />
            ))}
          </g>

          {/* Provinces (interactive) */}
          <g>
            {Vietnam.locations.map((location: { id: string; name: string; path: string }) => {
              const slug = PROVINCE_TO_SLUG[location.name]
              const region = PROVINCE_REGION[location.name] || "unknown"
              const fill = hoveredId === location.id ? FILL[region].hover : FILL[region].base
              return (
                <path
                  key={location.id}
                  d={location.path}
                  className="fn-map-province"
                  style={{ fill }}
                  onMouseEnter={() => setHoveredId(location.id)}
                  onMouseMove={(e) => {
                    const pos = place(e, 200)
                    setHover({
                      left: pos.left,
                      top: pos.top - 52,
                      name: location.name,
                      count: slug ? provinceInfo[slug]?.count ?? 0 : 0,
                    })
                  }}
                  onMouseLeave={() => {
                    setHoveredId(null)
                    setHover(null)
                  }}
                  onClick={(e) => {
                    e.stopPropagation()
                    setCard({ ...place(e, 248), name: location.name, slug })
                  }}
                />
              )
            })}
          </g>

          {/* Every location, as a field dot */}
          <g className="fn-map-dots" aria-hidden="true">
            {dots.map((d, i) => (
              <circle key={i} cx={d.x} cy={d.y} r={2.6} />
            ))}
          </g>

          {/* The route through the featured stops */}
          <path className="fn-map-route" d={smoothPath(routePts)} aria-hidden="true" />

          {/* Leader lines from each stop to its note */}
          <g className="fn-map-leaders" aria-hidden="true">
            {stops.map((s) => {
              const toLeft = s.note.x < s.x
              const endX = toLeft ? s.note.x + 4 : s.note.x - 6
              const midX = (s.x + endX) / 2
              return (
                <path
                  key={s.slug}
                  d={`M ${s.x} ${s.y} Q ${midX} ${Math.min(s.y, s.note.y) - 18} ${endX} ${s.note.y}`}
                />
              )
            })}
          </g>

          {/* Stop markers */}
          <g className="fn-map-stops" aria-hidden="true">
            {stops.map((s) => (
              <g key={s.slug} transform={`translate(${s.x} ${s.y})`}>
                <circle r={9} className="fn-map-stop-ring" />
                <circle r={3.5} className="fn-map-stop-core" />
              </g>
            ))}
          </g>

          {/* Compass */}
          <g className="fn-map-compass" transform="translate(752 70)" aria-hidden="true">
            <circle r={26} />
            <path d="M0 -38 L6 0 L0 6 L-6 0 Z" className="fn-map-compass-n" />
            <path d="M0 38 L6 0 L-6 0 Z" />
            <text y={-44} textAnchor="middle">N</text>
          </g>

          {/* Scale bar: 100 km ≈ 48.6 units at this latitude */}
          <g className="fn-map-scale" transform="translate(236 846)" aria-hidden="true">
            <path d="M0 0 H48.6 M0 -5 V5 M48.6 -5 V5 M24.3 -3 V3" />
            <text x={58} y={5}>100 km</text>
          </g>
        </svg>

        {/* Numbered notes in the sea - real links, big enough to tap */}
        {stops.map((s) => (
          <Link
            key={s.slug}
            href={`/destinations/${s.slug}`}
            className="fn-map-note"
            style={{ left: `${(s.note.x / VB_W) * 100}%`, top: `${(s.note.y / VB_H) * 100}%` }}
          >
            <span className="fn-map-note-num">{String(s.index).padStart(2, "0")}</span>
            <span className="fn-map-note-name">{s.name.split(/\s[–-]\s/)[0]}</span>
          </Link>
        ))}

        {/* Hand annotation about the dots */}
        <p className="fn-map-annotation" aria-hidden="true">
          every dot is a place
          <br />
          worth the detour
        </p>

        {/* Hover label (desktop) */}
        {hover && !card && (
          <div className="fn-map-hover" style={{ left: hover.left, top: hover.top }}>
            {hover.name}
            {hover.count > 0 && (
              <span>
                {" "}
                · {hover.count} {hover.count === 1 ? "place" : "places"}
              </span>
            )}
          </div>
        )}

        {/* Province card */}
        {card &&
          (() => {
            const info = card.slug ? provinceInfo[card.slug] : undefined
            const region = PROVINCE_REGION[card.name]
            return (
              <div
                className="fn-map-card"
                style={{ left: card.left, top: card.top, borderTopColor: region ? ACCENT[region] : undefined }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="fn-map-card-kicker">
                  {region ? `${region} vietnam` : "province"}
                  {info && info.count > 0 && ` · ${info.count} ${info.count === 1 ? "place" : "places"}`}
                </div>
                <div className="fn-map-card-name">{card.name}</div>
                {info?.intro && <p className="fn-map-card-intro">{info.intro}</p>}
                {info && info.top.length > 0 && (
                  <ul className="fn-map-card-list">
                    {info.top.map((l) => (
                      <li key={l.slug}>
                        <button onClick={() => router.push(`/locations/${l.slug}`)}>{l.name}</button>
                      </li>
                    ))}
                  </ul>
                )}
                {info?.hasGuide && card.slug ? (
                  <button className="fn-map-card-cta" onClick={() => router.push(`/provinces/${card.slug}`)}>
                    Explore guide →
                  </button>
                ) : (
                  <div className="fn-map-card-soon">Guide coming soon</div>
                )}
              </div>
            )
          })()}
      </div>

      <div className="fn-map-foot">
        <span>Tap a province to explore destinations</span>
        <Link href="/provinces" className="fn-link">
          Browse all provinces →
        </Link>
      </div>
    </div>
  )
}
