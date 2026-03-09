"use client"
import Vietnam from "@svg-maps/vietnam"
import { useRouter } from "next/navigation"

const PROVINCE_TO_SLUG: Record<string, string> = {
  "Ha Noi": "ha-noi",
  "Ha Giang": "ha-giang",
  "Lao Cai": "sapa",
  "Ninh Binh": "ninh-binh",
  "Quang Ninh": "ha-long",
  "Đa Nang": "da-nang",
  "Quang Nam": "hoi-an",
  "Quang Bình": "phong-nha",
  "Lam Đong": "da-lat",
  "Ho Chi Minh": "ho-chi-minh-city",
  "Kien Giang": "kien-giang",
  "Can Tho": "can-tho",
}

const PROVINCE_REGION: Record<string, "north" | "central" | "south"> = {
  "Ha Giang":"north","Cao Bang":"north","Lao Cai":"north","Bac Kan":"north",
  "Lang Son":"north","Tuyen Quang":"north","Thai Nguyen":"north","Quang Ninh":"north",
  "Phu Tho":"north","Vinh Phuc":"north","Bac Giang":"north","Bac Ninh":"north",
  "Ha Noi":"north","Hai Duong":"north","Hung Yen":"north","Hai Phong":"north",
  "Thai Binh":"north","Ha Nam":"north","Nam Dinh":"north","Ninh Binh":"north",
  "Hoa Binh":"north","Son La":"north","Dien Bien":"north","Lai Chau":"north","Yen Bai":"north",
  "Thanh Hoa":"central","Nghe An":"central","Ha Tinh":"central","Quang Bình":"central",
  "Quang Tri":"central","Thua Thien Hue":"central","Đa Nang":"central",
  "Quang Nam":"central","Quang Ngai":"central","Binh Dinh":"central",
  "Phu Yen":"central","Khanh Hoa":"central","Kon Tum":"central","Gia Lai":"central",
  "Dak Lak":"central","Dak Nong":"central","Lam Đong":"central",
  "Ninh Thuan":"central","Binh Thuan":"central",
  "Binh Phuoc":"south","Tay Ninh":"south","Binh Duong":"south","Dong Nai":"south",
  "Ba Ria Vung Tau":"south","Ho Chi Minh":"south","Long An":"south",
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
        <div className="flex items-center gap-2 text-gray-400 ml-2">
          <div className="w-3 h-3 rounded-full border-2 border-gray-400 bg-white" />
          Has guide
        </div>
      </div>

      {/* Map */}
      <svg viewBox={Vietnam.viewBox} className="w-full max-w-2xl drop-shadow-sm">
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
              }}
              onMouseLeave={(e) => {
                ;(e.target as SVGPathElement).style.fill = colors.base
              }}
              onClick={() => {
                if (slug) router.push(`/destinations/${slug}`)
              }}
            />
          )
        })}
      </svg>

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

