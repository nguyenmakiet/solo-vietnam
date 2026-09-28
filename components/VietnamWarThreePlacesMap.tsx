"use client"
import Vietnam from "@svg-maps/vietnam"
import { useEffect, useId, useRef, useState } from "react"
import "./vietnam-war-three-places-map.css"

/*
  Editorial map for the blog post "The Vietnam War Through Three Places".
  Reuses the same @svg-maps/vietnam boundaries as components/VietnamMap.tsx
  (province ids: "hanoi", "quangtri", "hcm"). Not a military map - the route
  is a narrative line, not a travel or troop route.
*/

export type MapDirection = "look-up" | "look-down" | "look-up-down"

export type MapPlace = {
  id: string
  name: string
  label: string
  direction: MapDirection
  description: string
  /** @svg-maps/vietnam location id */
  provinceId: string
  /** "city" = marker only, "region" = province shape is always highlighted */
  kind: "city" | "region"
  /** Marker position, in map viewBox units */
  point: [number, number]
  /** Where the leader line ends and the label starts, in map viewBox units */
  labelAt: [number, number]
  /** Show the desktop tooltip above the label instead of below it */
  tooltipAbove?: boolean
}

const [, , VB_W, VB_H] = Vietnam.viewBox.split(" ").map(Number)

export const THREE_PLACES: MapPlace[] = [
  {
    id: "hanoi",
    name: "Hanoi",
    label: "HANOI",
    direction: "look-up",
    description: "Command center · Air war",
    provinceId: "hanoi",
    kind: "city",
    point: [188, 131],
    labelAt: [330, 131],
  },
  {
    id: "quang-tri",
    name: "Quảng Trị",
    label: "QUẢNG TRỊ",
    direction: "look-up-down",
    description: "Frontline · Underground world",
    provinceId: "quangtri",
    kind: "region",
    point: [251, 364],
    labelAt: [330, 322],
  },
  {
    id: "saigon",
    name: "Saigon",
    label: "SAIGON",
    direction: "look-down",
    description: "Urban conflict · Hidden battlefield",
    provinceId: "hcm",
    kind: "city",
    point: [238, 671],
    labelAt: [330, 742],
    tooltipAbove: true,
  },
]

const DIRECTION_TEXT: Record<MapDirection, string> = {
  "look-up": "Look Up",
  "look-down": "Look Down",
  "look-up-down": "Look Up → Look Down",
}

const pct = (x: number, y: number) => ({
  left: `${(x / VB_W) * 100}%`,
  top: `${(y / VB_H) * 100}%`,
})

function DirectionMark({ direction }: { direction: MapDirection }) {
  const up = direction !== "look-down"
  const down = direction !== "look-up"
  return (
    <span className="vwmap-dir-mark" aria-hidden="true">
      {up && <span className="vwmap-dir-up">↑</span>}
      {down && <span className="vwmap-dir-down">↓</span>}
    </span>
  )
}

function DirectionText({ direction }: { direction: MapDirection }) {
  if (direction === "look-up-down") {
    return (
      <>
        <span className="vwmap-dir-up">Look Up</span> → <span className="vwmap-dir-down">Look Down</span>
      </>
    )
  }
  return (
    <span className={direction === "look-up" ? "vwmap-dir-up" : "vwmap-dir-down"}>
      {DIRECTION_TEXT[direction]}
    </span>
  )
}

// Narrative line: bows out over the sea so it never reads as a road.
function routePath(places: MapPlace[]) {
  const [a, b, c] = places.map((p) => p.point)
  if (!a || !b || !c) return ""
  return [
    `M ${a[0]} ${a[1]}`,
    `C ${a[0] + 110} ${a[1] + 60}, ${b[0] + 70} ${b[1] - 110}, ${b[0]} ${b[1]}`,
    `C ${b[0] + 170} ${b[1] + 80}, ${c[0] + 200} ${c[1] - 120}, ${c[0]} ${c[1]}`,
  ].join(" ")
}

type Props = {
  title?: string
  subtitle?: string
  places?: MapPlace[]
}

export default function VietnamWarThreePlacesMap({
  title = "The Vietnam War Through Three Places",
  subtitle = "Three places. Three ways of seeing the war.",
  places = THREE_PLACES,
}: Props) {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "")
  const rootRef = useRef<HTMLElement>(null)
  const cardRefs = useRef<Record<string, HTMLLIElement | null>>({})

  const [hovered, setHovered] = useState<string | null>(null)
  const [focused, setFocused] = useState<string | null>(null)
  const [selected, setSelected] = useState<string | null>(null)
  const [visible, setVisible] = useState(false)

  const active = hovered ?? focused ?? selected
  const tooltipFor = hovered ?? focused

  // Play the one-off draw-in when the map first scrolls into view.
  useEffect(() => {
    const el = rootRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.25 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const select = (id: string) => {
    const next = selected === id ? null : id
    setSelected(next)
    if (next) cardRefs.current[next]?.scrollIntoView({ block: "nearest", behavior: "smooth" })
  }

  const hoverProps = (id: string) => ({
    onPointerEnter: (e: React.PointerEvent) => {
      if (e.pointerType === "mouse") setHovered(id)
    },
    onPointerLeave: (e: React.PointerEvent) => {
      if (e.pointerType === "mouse") setHovered(null)
    },
  })

  const regionIds = new Set(places.filter((p) => p.kind === "region").map((p) => p.provinceId))
  const placeByProvince = new Map(places.map((p) => [p.provinceId, p]))
  const titleId = `${uid}-title`
  const descId = `${uid}-desc`

  return (
    <figure
      ref={rootRef}
      className={`vwmap${visible ? " is-visible" : ""}`}
      aria-labelledby={titleId}
      aria-describedby={descId}
    >
      <figcaption className="vwmap-head">
        <span id={titleId} className="vwmap-title">{title}</span>
        {subtitle && <span className="vwmap-subtitle">{subtitle}</span>}
      </figcaption>

      <div className="vwmap-stage">
        <svg
          viewBox={Vietnam.viewBox}
          className="vwmap-svg"
          role="img"
          aria-label="Map of Vietnam marking Hanoi in the north, Quảng Trị province in the centre and Saigon in the south"
        >
          <defs>
            <linearGradient id={`${uid}-updown`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--vwmap-up)" />
              <stop offset="100%" stopColor="var(--vwmap-down)" />
            </linearGradient>
            <mask id={`${uid}-reveal`} maskUnits="userSpaceOnUse" x="0" y="0" width={VB_W} height={VB_H}>
              <path d={routePath(places)} className="vwmap-route-reveal" pathLength={1} />
            </mask>
          </defs>

          {Vietnam.locations.map((loc: { id: string; name: string; path: string }) => {
            const place = placeByProvince.get(loc.id)
            const isRegion = regionIds.has(loc.id)
            const isActive = !!place && active === place.id
            return (
              <path
                key={loc.id}
                d={loc.path}
                className={[
                  "vwmap-province",
                  isRegion && "is-region",
                  place && isActive && "is-active",
                ]
                  .filter(Boolean)
                  .join(" ")}
                style={isRegion ? { fill: `url(#${uid}-updown)` } : undefined}
                {...(isRegion && place
                  ? { ...hoverProps(place.id), onClick: () => select(place.id) }
                  : {})}
              />
            )
          })}

          <path d={routePath(places)} className="vwmap-route" mask={`url(#${uid}-reveal)`} />

          {places.map((p) => (
            <line
              key={p.id}
              x1={p.point[0]}
              y1={p.point[1]}
              x2={p.labelAt[0] - 8}
              y2={p.labelAt[1]}
              className={`vwmap-leader${active === p.id ? " is-active" : ""}`}
            />
          ))}
        </svg>

        {/* Markers and labels live in HTML so they keep a readable size on every screen */}
        {places.map((p, i) => {
          const isActive = active === p.id
          return (
            <div key={p.id} className={`vwmap-place vwmap-place-${i + 1}${isActive ? " is-active" : ""}`}>
              <button
                type="button"
                className={`vwmap-pin vwmap-pin-${p.direction} vwmap-pin-${p.kind}`}
                style={pct(...p.point)}
                aria-label={`${p.name}: ${DIRECTION_TEXT[p.direction]}. ${p.description.replace(" · ", ", ")}`}
                aria-pressed={selected === p.id}
                onClick={() => select(p.id)}
                onFocus={() => setFocused(p.id)}
                onBlur={() => setFocused(null)}
                {...hoverProps(p.id)}
              >
                <span className="vwmap-pin-dot" />
              </button>

              <div
                className="vwmap-label"
                style={pct(...p.labelAt)}
                aria-hidden="true"
                onClick={() => select(p.id)}
                {...hoverProps(p.id)}
              >
                <span className="vwmap-label-name">
                  <span className="vwmap-label-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="vwmap-label-text">{p.label}</span>
                </span>
                <span className="vwmap-label-dir">
                  <DirectionMark direction={p.direction} />
                  <span className="vwmap-label-dir-text">{DIRECTION_TEXT[p.direction]}</span>
                </span>

                {tooltipFor === p.id && (
                  <span className={`vwmap-tooltip${p.tooltipAbove ? " is-above" : ""}`}>
                    <span className="vwmap-tooltip-name">{p.name}</span>
                    <span className="vwmap-tooltip-dir">
                      <DirectionText direction={p.direction} />
                    </span>
                    <span className="vwmap-tooltip-desc">{p.description}</span>
                  </span>
                )}
              </div>
            </div>
          )
        })}

        <span className="vwmap-north" aria-hidden="true">
          <span>N</span>↑
        </span>
      </div>

      {/* Always-visible text version - the tooltip is never the only way to read the map */}
      <ol id={descId} className="vwmap-cards">
        {places.map((p, i) => (
          <li
            key={p.id}
            ref={(el) => {
              cardRefs.current[p.id] = el
            }}
            className={`vwmap-card${active === p.id ? " is-active" : ""}`}
            {...hoverProps(p.id)}
          >
            <span className="vwmap-card-num" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="vwmap-card-name">{p.name}</span>
            <span className="vwmap-card-dir">
              <DirectionMark direction={p.direction} />
              <DirectionText direction={p.direction} />
            </span>
            <span className="vwmap-card-desc">{p.description}</span>
          </li>
        ))}
      </ol>

      <span className="vwmap-note">Dotted line shows the article&apos;s north-to-south reading order, not a travel route.</span>
    </figure>
  )
}
