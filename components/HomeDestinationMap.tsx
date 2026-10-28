import Link from "next/link"
import {
  HOANG_SA_INSET,
  HOANG_SA_PATH,
  NEIGHBOURS_PATH,
  REGION_PATHS,
  TRUONG_SA_INSET,
  TRUONG_SA_PATH,
  type MapRegion,
} from "@/lib/home-map-geometry"
import {
  COMPACT_RADIUS,
  DOT_RADIUS,
  FRAME_HEIGHT,
  FRAME_WIDTH,
  PILL_HEIGHT,
  buildHomeMap,
  pillText,
  type HomeMapPlace,
} from "@/lib/home-map"

// ─── Homepage destination map ────────────────────────────────────────────────
// /map's Destinations view at its default zoom, as one static, server-rendered
// SVG: outline, leader lines, pills, count circles and dots share one
// coordinate system, so the whole picture scales together. Every pill name,
// circle and dot is a real link (crawlable, no client JS). Layout:
// lib/home-map.ts; styles: app/homepage.css (.home-dmap-*).

const items = buildHomeMap()
// The archipelagos, each in an inset box with its name above
const insets = [
  { name: "Hoang Sa", box: HOANG_SA_INSET, path: HOANG_SA_PATH },
  { name: "Truong Sa", box: TRUONG_SA_INSET, path: TRUONG_SA_PATH },
]

// North to south; each region is filled in its own colour
const regions = Object.entries(REGION_PATHS) as [MapRegion, { land: string; islands: string }][]

const label = (p: HomeMapPlace) => `${p.name} - ${p.count} ${p.count === 1 ? "place" : "places"}`
// Tap targets: pills 32 tall (26 + 3 each side), circles and dots 32 across
const HIT = 32

export default function HomeDestinationMap() {
  return (
    <svg
      className="home-dmap"
      viewBox={`0 0 ${FRAME_WIDTH} ${FRAME_HEIGHT}`}
      role="group"
      aria-label="Map of Vietnam - destination guides"
    >
      {/* Neighbours twice: a wide stroke in their fill colour first, closing the
          hairline gaps where their (Natural Earth) border and Vietnam's (GSO)
          border differ, then fill and outline */}
      <defs>
        <path id="home-dmap-neighbours" d={NEIGHBOURS_PATH} />
      </defs>
      <use href="#home-dmap-neighbours" className="home-dmap-neighbours-bleed" />
      <use href="#home-dmap-neighbours" className="home-dmap-neighbours" />
      {regions.map(([region, { land, islands }]) => (
        <g key={region} className={`home-dmap-region home-dmap-region--${region}`}>
          <path className="home-dmap-land" d={land} />
          <path className="home-dmap-islands" d={islands} />
        </g>
      ))}
      {insets.map(({ name, box, path }) => (
        <g key={name}>
          <rect className="home-dmap-inset" {...box} />
          {/* Both archipelagos are part of Central Vietnam */}
          <path className="home-dmap-archipelago home-dmap-region--central" d={path} />
          <text className="home-dmap-place" x={box.x} y={box.y - 4}>{name}</text>
        </g>
      ))}

      {/* Leaders under everything: line from the point, anchor dot on it */}
      <g aria-hidden="true">
        {items.flatMap((item) => item.kind !== "pill" ? [] : item.leaders.map((l, i) => (
          <g key={`${item.places[i].slug}-leader`}>
            <line className="home-dmap-leader" x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} />
            <circle className="home-dmap-anchor" cx={l.x1} cy={l.y1} r={5} />
          </g>
        )))}
      </g>

      {items.map((item) => {
        if (item.kind === "pill") {
          const pieces = pillText(item.places)
          return (
            <g key={item.places[0].slug} transform={`translate(${item.x} ${item.y})`}>
              <rect className="home-dmap-pill" width={item.width} height={PILL_HEIGHT} rx={PILL_HEIGHT / 2} />
              {pieces.map((piece, i) => {
                // Each name of a shared pill is its own link: split the tap area at the "·"
                const start = i === 0 ? 0 : (piece.joinX ?? 0) + 2
                const end = i === pieces.length - 1 ? item.width : (pieces[i + 1].joinX ?? item.width) + 2
                // Linked highlight (desktop list): only this name's part of the pill
                const hlStart = i === 0 ? 0 : (piece.joinX ?? 0) + 6
                const hlEnd = i === pieces.length - 1 ? item.width : (pieces[i + 1].joinX ?? item.width) - 2
                return (
                  <g key={piece.place.slug}>
                    {piece.joinX !== null && <text className="home-dmap-sep" x={piece.joinX} y={PILL_HEIGHT / 2}>·</text>}
                    {/* No prefetch: 20 links would prefetch 20 guides as the map scrolls in */}
                    <Link href={`/destinations/${piece.place.slug}`} prefetch={false} className="home-dmap-link" data-dest={piece.place.slug} aria-label={label(piece.place)}>
                      <rect className="home-dmap-hit" x={start} y={(PILL_HEIGHT - HIT) / 2} width={end - start} height={HIT} rx={HIT / 2} />
                      <rect className="home-dmap-hl" x={hlStart} y={0} width={hlEnd - hlStart} height={PILL_HEIGHT} rx={PILL_HEIGHT / 2} />
                      <text className="home-dmap-name" x={piece.nameX} y={PILL_HEIGHT / 2}>{piece.place.name}</text>
                      {piece.sepX !== null && <text className="home-dmap-sep" x={piece.sepX} y={PILL_HEIGHT / 2}>·</text>}
                      <text className="home-dmap-count" x={piece.countX} y={PILL_HEIGHT / 2}>{piece.place.count}</text>
                    </Link>
                  </g>
                )
              })}
            </g>
          )
        }
        const { place } = item
        return (
          <Link key={place.slug} href={`/destinations/${place.slug}`} prefetch={false} className="home-dmap-link" data-dest={place.slug} aria-label={label(place)}>
            <circle className="home-dmap-hit" cx={place.x} cy={place.y} r={HIT / 2} />
            {item.kind === "count" ? (
              <>
                <circle className="home-dmap-circle" cx={place.x} cy={place.y} r={COMPACT_RADIUS} />
                <text className="home-dmap-circle-count" x={place.x} y={place.y}>{place.count}</text>
              </>
            ) : (
              <circle className="home-dmap-dot" cx={place.x} cy={place.y} r={DOT_RADIUS} />
            )}
          </Link>
        )
      })}
    </svg>
  )
}
