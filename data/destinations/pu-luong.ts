import { Destination } from "./types"
import { heroUrl } from "@/lib/cloudinary"

export const puLuong: Destination = {
  slug: "pu-luong",
  name: "Pu Luong",
  province: "Thanh Hoa",
  provinceSlug: "thanh-hoa",
  region: "north",

  description:
    "Pu Luong is the answer to the question: what does Sa Pa look like without the development? A 17,000-hectare nature reserve of Thai stilt-house villages, stepped rice terraces, and karst peaks in Thanh Hoa province, four hours from Hanoi. The homestay culture is genuine, the crowds are manageable even in peak season, and the cycling and trekking between Don, Hieu, and Kho Muong villages is some of the best in northern Vietnam.",

  tagline: "Sa Pa scenery, four hours from Hanoi, with a fraction of the crowds",

  heroImage: heroUrl("pu-luong_apr7bu"),

  tags: ["nature", "trekking", "culture", "photography"],

  travelStyle: ["solo-friendly", "adventure", "hidden-gem", "budget"],

  gettingThere: [
    {
      from: "Hanoi",
      vehicle: "bus",
      duration: "4–5 hours",
      cost: "150,000–250,000 VND",
      notes: "Bus from My Dinh station to Pho Doan market town (the access hub). From Pho Doan, homestays arrange the final 5–15km transfer to individual villages by xe om or 4WD.",
    },
    {
      from: "Hanoi",
      vehicle: "motorbike",
      duration: "5 hours",
      cost: "Petrol only",
      notes: "Via QL6 through Hoa Binh and Mai Chau. Scenic and rewarding if you have the experience.",
    },
  ],

  itineraries: [
    {
      duration: "2D1N",
      label: "Village and terraces",
      days: [
        {
          day: 1,
          title: "Don Village + S-Shape Rice Terraces viewpoint",
          stops: [
            "don-village",
            "s-shape-rice-terraces",
          ],
          notes: "Arrive Don Village by midday. S-Shape Rice Terraces viewpoint is 3km from Don - the most photographed spot in Pu Luong, and deservedly so. Evening: family dinner at the homestay, rice wine by the fire.",
        },
        {
          day: 2,
          title: "Hieu Waterfall + Hieu Village + cycling back",
          stops: [
            "hieu-waterfall",
            "hieu-village",
          ],
          notes: "Trek or cycle from Don to Hieu (8km through terraces). Hieu Waterfall has tiered pools for swimming. Return by bicycle along the valley road - flat, easy, spectacular.",
        },
      ],
    },
    {
      duration: "3D2N",
      label: "Full reserve experience",
      days: [
        {
          day: 1,
          title: "Don Village + terraces",
          stops: [
            "don-village",
            "s-shape-rice-terraces",
          ],
          notes: "Arrive, settle in Thai stilt house. Afternoon walk through the rice fields.",
        },
        {
          day: 2,
          title: "Don → Hieu → Kho Muong trek",
          stops: [
            "hieu-waterfall",
            "hieu-village",
            "kho-muong-village",
            "kho-muong-cave",
          ],
          notes: "Full day guided trek: Don → Hieu (8km) → Kho Muong (5km further). Kho Muong is the most remote valley in the reserve - barely any tourists. Kho Muong Cave needs a village guide. Stay overnight in Kho Muong homestay.",
        },
        {
          day: 3,
          title: "Return journey + cycling",
          stops: [],
          notes: "Return to Pho Doan by motorbike or cycle part of the valley road. Bus back to Hanoi.",
        },
      ],
    },
  ],

  cost: {
    budget: "400,000–700,000 VND/day",
    midRange: "700,000–1,200,000 VND/day",
    comfortable: "1,200,000+ VND/day",
    notes: "Homestay with meals typically included: 300,000–500,000 VND/night. Local guide: 200,000–300,000 VND/day. Bicycle rental: 50,000–100,000 VND/day.",
  },

  bestTimeSummary: "Late May–early Jun (green rice) and late Sep–early Oct (golden harvest) for the terraces. Dec–Feb mornings cold but clear and uncrowded.",

  recommendedStay: "2–3 days",

  transport: "Walking and cycling between villages. Xe om for longer transfers. Motorbike rental possible but not essential if staying in one village.",

  nearbyDestinations: ["ninh-binh", "ha-noi"],

  coordinates: {
    lat: 20.42,
    lng: 105.07,
  },
}
