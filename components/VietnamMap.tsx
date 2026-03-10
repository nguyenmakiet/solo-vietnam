"use client"
import Vietnam from "@svg-maps/vietnam"
import { useRouter } from "next/navigation"
import { useState } from "react"

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
  "Ho Chi Minh": "ho-chi-minh",
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
  "Ha Giang":"north","Cao Bang":"north","Lao Cai":"north","Bac Kan":"north",
  "Lang Son":"north","Tuyen Quang":"north","Thai Nguyen":"north","Quang Ninh":"north",
  "Phu Tho":"north","Vinh Phuc":"north","Bac Giang":"north","Bac Ninh":"north",
  "Ha Noi":"north","Hai Duong":"north","Hung Yen":"north","Hai Phong":"north",
  "Thai Binh":"north","Ha Nam":"north","Nam Dinh":"north","Ninh Binh":"north",
  "Hoa Binh":"north","Son La":"north","Dien Bien":"north","Lai Chau":"north","Yen Bai":"north",
  "Thanh Hoa":"central","Nghe An":"central","Ha Tinh":"central","Quang Binh":"central",
  "Quang Tri":"central","Thua Thien-Hue":"central","Da Nang":"central",
  "Quang Nam":"central","Quang Ngai":"central","Binh Dinh":"central",
  "Phu Yen":"central","Khanh Hoa":"central","Kon Tum":"central","Gia Lai":"central",
  "Dak Lak":"central","Dak Nong":"central","Lam Dong":"central",
  "Ninh Thuan":"central","Binh Thuan":"central",
  "Binh Phuoc":"south","Tay Ninh":"south","Binh Duong":"south","Dong Nai":"south",
  "Ba Ria–Vung Tau":"south","Ho Chi Minh":"south","Long An":"south",
  "Tien Giang":"south","Ben Tre":"south","Dong Thap":"south","Vinh Long":"south",
  "An Giang":"south","Tra Vinh":"south","Hau Giang":"south","Kien Giang":"south",
  "Can Tho":"south","Soc Trang":"south","Bac Lieu":"south","Ca Mau":"south",
}

const COLORS = {
  north:   { base: "#bfdbfe", hover: "#3b82f6" },
  central: { base: "#bbf7d0", hover: "#22c55e" },
  south:   { base: "#fed7aa", hover: "#f97316" },
  unknown: { base: "#e5e7eb", hover: "#9ca3af" },
}

export default function VietnamMap() {
  const router = useRouter()
  const [tooltip, setTooltip] = useState<{ x: number; y: number; name: string } | null>(null)

  return (
    <div className="flex flex-col items-center gap-8 py-12 px-4 bg-stone-50">

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-5 text-sm font-medium">
        {[
          { color: "#bfdbfe", label: "North" },
          { color: "#bbf7d0", label: "Central" },
          { color: "#fed7aa", label: "South" },
        ].map(({ color, label }) => (
          <div key={label} className="flex items-center gap-2 text-gray-600">
            <div style={{ background: color }} className="w-3 h-3 rounded-full border border-gray-200" />
            {label}
          </div>
        ))}
        {/* <div className="flex items-center gap-2 text-gray-400 ml-2">
          <div className="w-3 h-3 rounded-full border-2 border-gray-400 bg-white" />
          Has guide
        </div> */}
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
                fill={colors.base}
                stroke="black"
                strokeWidth="0.8"
                strokeLinejoin="round"
                style={{
                  cursor: hasGuide ? "pointer" : "default",
                  transition: "fill 0.15s ease",
                  filter: hasGuide ? "brightness(0.85)" : "none",
                }}
                onMouseEnter={(e) => {
                  ;(e.target as SVGPathElement).style.fill = colors.hover
                  const rect = (e.currentTarget as SVGPathElement).closest("svg")!.getBoundingClientRect()
                  setTooltip({ x: e.clientX - rect.left, y: e.clientY - rect.top - 36, name: location.name })
                }}
                onMouseLeave={(e) => {
                  ;(e.target as SVGPathElement).style.fill = colors.base
                  setTooltip(null)
                }}
                onClick={() => {
                  if (slug) router.push(`/provinces/${slug}`)
                }}
              />
            )
          })}
        </svg>

        {/* Tooltip — ngoài svg, trong div relative */}
        {tooltip && (
          <div
            style={{ left: tooltip.x, top: tooltip.y }}
            className="absolute pointer-events-none bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg shadow-lg -translate-x-1/2 whitespace-nowrap"
          >
            {tooltip.name}
          </div>
        )}
      </div>

      {/* Browse link */}
      <a
        href="/destinations"
        className="text-sm text-gray-400 hover:text-gray-700 underline underline-offset-4 transition"
      >
        Browse all destinations →
      </a>
    </div>
  )
}

