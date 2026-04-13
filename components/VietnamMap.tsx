"use client"
import Vietnam from "@svg-maps/vietnam"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { provinces } from "@/data/provinces"
import { allLocations } from "@/data/all-locations"

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

const COLORS = {
  north: { base: "#c0d5ec", hover: "#93bedc" },
  central: { base: "#bcd9c2", hover: "#8ec4a0" },
  south: { base: "#f2d4a8", hover: "#e6b87a" },
  unknown: { base: "#e8dfd0", hover: "#cfc3ae" },
}

export default function VietnamMap() {
  const router = useRouter()

  const [tooltip, setTooltip] = useState<{
    x: number
    y: number
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
    <div
      className="flex flex-col items-center gap-8 py-4 px-4"
      onClick={() => setTooltip(null)}
    >

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-5 text-sm font-medium">
        {[
          { color: "#c0d5ec", label: "North", href: "/north-vietnam" },
          { color: "#bcd9c2", label: "Central", href: "/central-vietnam" },
          { color: "#f2d4a8", label: "South", href: "/south-vietnam" },
        ].map(({ color, label, href }) => (
          <a key={label} href={href} className="flex items-center gap-2 transition-opacity hover:opacity-70" style={{ color: "#7a6a52", textDecoration: "none" }}>
            <div style={{ background: color, border: "1px solid #d4c4a8" }} className="w-3 h-3 rounded-full" />
            {label}
          </a>
        ))}
      </div>

      {/* Map */}
      <div className="relative w-full max-w-2xl">
        <svg viewBox={Vietnam.viewBox} className="w-full drop-shadow-sm">
          {Vietnam.locations.map((location: { id: string; name: string; path: string }) => {
            const slug = PROVINCE_TO_SLUG[location.name]
            const region = PROVINCE_REGION[location.name] || "unknown"
            const colors = COLORS[region]
            const hasGuide = !!slug

            return (
              <path
                key={location.id}
                d={location.path}
                stroke="#a89880"
                strokeWidth="0.6"
                strokeLinejoin="round"
                style={{
                  cursor: "pointer",
                  transition: "fill 0.2s ease",
                  fill: hoveredId === location.id ? colors.hover : colors.base,
                  filter: hasGuide ? "brightness(0.85)" : "none",
                }}
                onMouseEnter={() => setHoveredId(location.id)}
                onMouseMove={(e) => {
                  const rect = (e.currentTarget as SVGPathElement)
                    .closest("svg")!
                    .getBoundingClientRect()
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
                  const rect = (e.currentTarget as SVGPathElement)
                    .closest("svg")!
                    .getBoundingClientRect()
                  setTooltip({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
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
          <div
            className="absolute pointer-events-none"
            style={{ left: hoverLabel.x + 12, top: hoverLabel.y - 40, zIndex: 40 }}
          >
            <div
              className="rounded-lg px-2.5 py-1.5 text-xs font-medium whitespace-nowrap shadow-md"
              style={{
                background: "#1a1209",
                color: "#faf8f4",
                border: "1px solid rgba(200,169,110,0.25)",
              }}
            >
              {hoverLabel.name}
              {hoverLabel.count > 0 && (
                <span className="ml-1.5 font-normal" style={{ color: "#c8a96e" }}>
                  {hoverLabel.count} {hoverLabel.count === 1 ? "place" : "places"}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Tooltip */}
        {tooltip && (() => {
          const province = provinces.find((p) => p.slug === tooltip.slug)
          const OFFSET_X = 16
          const OFFSET_Y = 16
          const region = province?.region ?? PROVINCE_REGION[tooltip.name]
          const provinceLocations = tooltip.slug
            ? allLocations.filter((l) => l.provinces.includes(tooltip.slug!)).slice(0, 4)
            : []

          return (
            <div
              style={{
                left: tooltip.x + OFFSET_X,
                top: tooltip.y + OFFSET_Y,
                zIndex: 50,
              }}
              className="absolute w-60"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="rounded-2xl shadow-xl overflow-hidden" style={{ background: "#fefcf8", border: "1px solid #e2d8c8" }}>

                {/* Header accent bar */}
                <div style={{
                  height: 3,
                  width: "100%",
                  background: region === "north" ? "#6b9fc4"
                    : region === "central" ? "#5a9e6f"
                    : region === "south" ? "#c8784a"
                    : "#a89880"
                }} />

                <div className="p-3">
                  <div className="font-bold text-sm mb-1 tracking-tight" style={{ color: "#2d2110" }}>
                    {tooltip.name}
                  </div>

                  {province?.popupIntro && (
                    <p className="text-[11px] leading-relaxed mb-2.5" style={{ color: "#7a6a52" }}>
                      {province.popupIntro}
                    </p>
                  )}

                  {provinceLocations.length > 0 && (
                    <>
                      <div className="text-[10px] font-semibold uppercase tracking-widest mb-1.5" style={{ color: "#a89880" }}>
                        Top Locations
                      </div>
                      <ul className="space-y-1 mb-2.5">
                        {provinceLocations.map((l) => (
                          <li key={l.slug}>
                            <button
                              onClick={() => router.push(`/locations/${l.slug}`)}
                              className="flex items-center gap-1.5 text-[11px] transition-colors w-full text-left"
                              style={{ color: "#7a6a52" }}
                              onMouseEnter={e => (e.currentTarget.style.color = "#c8a96e")}
                              onMouseLeave={e => (e.currentTarget.style.color = "#7a6a52")}
                            >
                              <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#c4b49a" }} />
                              {l.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {province && tooltip.slug && (
                    <button
                      onClick={() => router.push(`/provinces/${tooltip.slug}`)}
                      className="text-[11px] font-semibold flex items-center gap-1 transition-colors"
                      style={{ color: "#c8a96e" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#a07c3a")}
                      onMouseLeave={e => (e.currentTarget.style.color = "#c8a96e")}
                    >
                      Explore guide
                      <span className="text-[10px]">→</span>
                    </button>
                  )}

                  {!province && (
                    <div className="text-[11px] italic" style={{ color: "#a89880" }}>
                      Guide coming soon
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        })()}
      </div>

      {/* Browse link */}
      <a
        href="/provinces"
        className="text-sm font-medium underline underline-offset-4 transition"
        style={{ color: "#c8a96e" }}
        onMouseEnter={e => (e.currentTarget.style.color = "#a07c3a")}
        onMouseLeave={e => (e.currentTarget.style.color = "#c8a96e")}
      >
        Browse all provinces →
      </a>
    </div>
  )
}
