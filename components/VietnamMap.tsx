"use client"
import Vietnam from "@svg-maps/vietnam"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useRef, useState } from "react"
import { provinces } from "@/data/provinces"
import { allLocations } from "@/data/all-locations"
import "./vietnam-map.css"

const PROVINCE_TO_SLUG: Record<string, string> = {
  // NORTH
  "Ha Noi": "ha-noi",
  "Ha Giang": "ha-giang",
  "Cao Bang": "cao-bang",
  "Bac Kan": "bac-kan",
  "Tuyen Quang": "tuyen-quang",
  "Lao Cai": "lao-cai",
  "Yen Bai": "yen-bai",
  "Thai Nguyen": "thai-nguyen",
  "Lang Son": "lang-son",
  "Quang Ninh": "quang-ninh",
  "Bac Giang": "bac-giang",
  "Phu Tho": "phu-tho",
  "Vinh Phuc": "vinh-phuc",
  "Bac Ninh": "bac-ninh",
  "Hai Duong": "hai-duong",
  "Hai Phong": "hai-phong",
  "Hung Yen": "hung-yen",
  "Thai Binh": "thai-binh",
  "Ha Nam": "ha-nam",
  "Nam Dinh": "nam-dinh",
  "Ninh Binh": "ninh-binh",
  "Hoa Binh": "hoa-binh",
  "Son La": "son-la",
  "Dien Bien": "dien-bien",
  "Lai Chau": "lai-chau",
  // CENTRAL
  "Thanh Hoa": "thanh-hoa",
  "Nghe An": "nghe-an",
  "Ha Tinh": "ha-tinh",
  "Quang Binh": "quang-binh",
  "Quang Tri": "quang-tri",
  "Thua Thien-Hue": "hue",
  "Da Nang": "da-nang",
  "Quang Nam": "quang-nam",
  "Quang Ngai": "quang-ngai",
  "Binh Dinh": "binh-dinh",
  "Phu Yen": "phu-yen",
  "Khanh Hoa": "khanh-hoa",
  "Ninh Thuan": "ninh-thuan",
  "Binh Thuan": "binh-thuan",
  "Kon Tum": "kon-tum",
  "Gia Lai": "gia-lai",
  "Dak Lak": "dak-lak",
  "Dak Nong": "dak-nong",
  "Lam Dong": "lam-dong",
  "Truong Sa": "khanh-hoa",
  "Hoang Sa": "da-nang",
  // SOUTH
  "Binh Phuoc": "binh-phuoc",
  "Tay Ninh": "tay-ninh",
  "Binh Duong": "binh-duong",
  "Dong Nai": "dong-nai",
  "Ba Ria–Vung Tau": "vung-tau",
  "Ho Chi Minh": "ho-chi-minh-city",
  "Long An": "long-an",
  "Tien Giang": "tien-giang",
  "Ben Tre": "ben-tre",
  "Tra Vinh": "tra-vinh",
  "Vinh Long": "vinh-long",
  "Dong Thap": "dong-thap",
  "An Giang": "an-giang",
  "Kien Giang": "kien-giang",
  "Can Tho": "can-tho",
  "Hau Giang": "hau-giang",
  "Soc Trang": "soc-trang",
  "Bac Lieu": "bac-lieu",
  "Ca Mau": "ca-mau",
}

const PROVINCE_REGION: Record<string, "north" | "central" | "south"> = {
  "Ha Giang": "north", "Cao Bang": "north", "Lao Cai": "north", "Bac Kan": "north",
  "Lang Son": "north", "Tuyen Quang": "north", "Thai Nguyen": "north", "Quang Ninh": "north",
  "Phu Tho": "north", "Vinh Phuc": "north", "Bac Giang": "north", "Bac Ninh": "north",
  "Ha Noi": "north", "Hai Duong": "north", "Hung Yen": "north", "Hai Phong": "north",
  "Thai Binh": "north", "Ha Nam": "north", "Nam Dinh": "north", "Ninh Binh": "north",
  "Hoa Binh": "north", "Son La": "north", "Dien Bien": "north", "Lai Chau": "north", "Yen Bai": "north",
  "Thanh Hoa": "central", "Nghe An": "central", "Ha Tinh": "central", "Quang Binh": "central",
  "Quang Tri": "central", "Thua Thien-Hue": "central", "Da Nang": "central",
  "Quang Nam": "central", "Quang Ngai": "central", "Binh Dinh": "central",
  "Phu Yen": "central", "Khanh Hoa": "central", "Kon Tum": "central", "Gia Lai": "central",
  "Dak Lak": "central", "Dak Nong": "central", "Lam Dong": "central",
  "Ninh Thuan": "central", "Binh Thuan": "central",
  "Binh Phuoc": "south", "Tay Ninh": "south", "Binh Duong": "south", "Dong Nai": "south",
  "Ba Ria–Vung Tau": "south", "Ho Chi Minh": "south", "Long An": "south",
  "Tien Giang": "south", "Ben Tre": "south", "Dong Thap": "south", "Vinh Long": "south",
  "An Giang": "south", "Tra Vinh": "south", "Hau Giang": "south", "Kien Giang": "south",
  "Can Tho": "south", "Soc Trang": "south", "Bac Lieu": "south", "Ca Mau": "south",
}

type Region = "north" | "central" | "south" | "unknown"

const REGION_CLASS: Record<Region, string> = {
  north: "vn-map-province--north",
  central: "vn-map-province--central",
  south: "vn-map-province--south",
  unknown: "vn-map-province--unknown",
}

const LEGEND = [
  { region: "north", label: "North", href: "/north-vietnam" },
  { region: "central", label: "Central", href: "/central-vietnam" },
  { region: "south", label: "South", href: "/south-vietnam" },
] as const

/** Region legend - square swatches in the map region colours, linking to the region guides. */
export function VietnamMapLegend({ className = "" }: { className?: string }) {
  return (
    <ul className={`vn-map-legend ${className}`}>
      {LEGEND.map(({ region, label, href }) => (
        <li key={region}>
          <Link href={href} className="vn-map-legend-item">
            <span className={`vn-map-swatch vn-map-swatch--${region}`} aria-hidden="true" />
            {label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

const CARD_WIDTH = 240

export default function VietnamMap() {
  const router = useRouter()
  const wrapRef = useRef<HTMLDivElement>(null)

  const [tooltip, setTooltip] = useState<{
    left: number
    top: number
    name: string
    slug?: string
  } | null>(null)

  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const [hoverLabel, setHoverLabel] = useState<{
    x: number
    y: number
    name: string
    count: number
  } | null>(null)

  return (
    <div className="vn-map" ref={wrapRef} onClick={() => setTooltip(null)}>
      <svg viewBox={Vietnam.viewBox} className="vn-map-svg" role="img" aria-label="Map of Vietnam by province">
        {Vietnam.locations.map((location: { id: string; name: string; path: string }) => {
          const slug = PROVINCE_TO_SLUG[location.name]
          const region: Region = PROVINCE_REGION[location.name] || "unknown"

          return (
            <path
              key={location.id}
              d={location.path}
              className={`vn-map-province ${REGION_CLASS[region]}${hoveredId === location.id ? " is-active" : ""}`}
              onMouseEnter={() => setHoveredId(location.id)}
              onMouseMove={(e) => {
                const rect = wrapRef.current!.getBoundingClientRect()
                const count = slug
                  ? allLocations.filter((l) => l.provinces.includes(slug)).length
                  : 0
                setHoverLabel({
                  x: e.clientX - rect.left,
                  y: e.clientY - rect.top,
                  name: location.name,
                  count,
                })
              }}
              onMouseLeave={() => {
                setHoveredId(null)
                setHoverLabel(null)
              }}
              onClick={(e) => {
                e.stopPropagation()
                const rect = wrapRef.current!.getBoundingClientRect()
                const x = e.clientX - rect.left
                // Keep the card inside the map on narrow screens
                const left = Math.max(4, Math.min(x + 16, rect.width - CARD_WIDTH - 4))
                setTooltip({
                  left,
                  top: e.clientY - rect.top + 16,
                  name: location.name,
                  slug,
                })
              }}
            />
          )
        })}
      </svg>

      {/* Hover label */}
      {hoverLabel && !tooltip && (
        <div className="vn-map-hover" style={{ left: hoverLabel.x + 12, top: hoverLabel.y - 40 }}>
          {hoverLabel.name}
          {hoverLabel.count > 0 && (
            <span>
              {hoverLabel.count} {hoverLabel.count === 1 ? "place" : "places"}
            </span>
          )}
        </div>
      )}

      {/* Tooltip */}
      {tooltip && (() => {
        const province = provinces.find((p) => p.slug === tooltip.slug)
        const region: Region = province?.region ?? PROVINCE_REGION[tooltip.name] ?? "unknown"
        const provinceLocations = tooltip.slug
          ? allLocations.filter((l) => l.provinces.includes(tooltip.slug!)).slice(0, 4)
          : []

        return (
          <div
            className={`vn-map-card vn-map-card--${region}`}
            style={{ left: tooltip.left, top: tooltip.top, width: CARD_WIDTH }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="vn-map-card-name">{tooltip.name}</div>

            {province?.popupIntro && <p className="vn-map-card-intro">{province.popupIntro}</p>}

            {provinceLocations.length > 0 && (
              <>
                <div className="vn-map-card-label">Top locations</div>
                <ul className="vn-map-card-list">
                  {provinceLocations.map((l) => (
                    <li key={l.slug}>
                      <button onClick={() => router.push(`/locations/${l.slug}`)}>{l.name}</button>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {province && tooltip.slug && (
              <button className="vn-map-card-cta" onClick={() => router.push(`/provinces/${tooltip.slug}`)}>
                Explore guide →
              </button>
            )}

            {!province && <div className="vn-map-card-soon">Guide coming soon</div>}
          </div>
        )
      })()}
    </div>
  )
}
