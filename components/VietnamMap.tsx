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

export default function VietnamMap() {
  const router = useRouter()

  return (
    <svg
      viewBox={Vietnam.viewBox}
      className="w-full max-w-3xl mx-auto"
    >
      {Vietnam.locations.map((location) => (
        <path
          key={location.id}
          d={location.path}
          fill="#e5e7eb"
          stroke="#999"
          strokeWidth="0.5"
          className="cursor-pointer hover:fill-green-500 transition"
          onClick={() => {
            console.log(location.name)
            const slug = PROVINCE_TO_SLUG[location.name]
            if (slug) router.push(`/destinations/${slug}`)
          }}
        />
      ))}
    </svg>
  )
}

