import { Destination } from "./types"
import { heroUrl } from "@/lib/cloudinary"

export const lySon: Destination = {
  slug: "ly-son",
  name: "Ly Son",
  province: "Quang Ngai",
  provinceSlug: "quang-ngai",
  region: "central",

  description:
    "Ly Son is a volcanic island 15 nautical miles off the coast of Quang Ngai - ancient craters, black basalt cliffs, clear turquoise water, and one of the least developed islands in central Vietnam. Known as the Kingdom of Garlic for the purple garlic grown in volcanic soil that covers much of the island. Ly Son also carries significant historical weight: the Hoang Sa navy units sailed from here for centuries to claim Vietnam's sovereignty over the Paracel Islands.",

  tagline: "Volcanic craters, black-sand beaches, and Vietnam's garlic island",

  heroImage: heroUrl("ly-son-island_sp5rpm"),

  tags: ["island", "beach", "history", "nature", "photography"],

  travelStyle: ["solo-friendly", "adventure", "hidden-gem", "budget"],

  gettingThere: [
    {
      from: "Quang Ngai",
      vehicle: "ferry",
      duration: "30 minutes",
      cost: "80,000–150,000 VND",
      notes: "High-speed ferry from Sa Ky port (about 20km from Quang Ngai centre). Boats run from ~7am. Buy tickets at the port - no advance booking needed except peak season (Apr–Aug). Quang Ngai is accessible by train or bus from Da Nang (3 hours) or Quy Nhon (2 hours).",
    },
  ],

  itineraries: [
    {
      duration: "2D1N",
      label: "Island circuit",
      days: [
        {
          day: 1,
          title: "To Vo Gate + Thoi Loi Mountain + garlic fields + Hang Pagoda",
          stops: [
            "to-vo-gate",
            "thoi-loi-mountain",
            "ly-son-garlic-fields",
            "hang-pagoda",
          ],
          notes: "Rent a motorbike from the port (150,000 VND/day) - the whole island loop is under 20km. To Vo Gate is one of the most striking volcanic sea arches in central Vietnam. Garlic fields in the morning when farmers are working. Hang Pagoda at low tide when the sea cave entrance fully opens.",
        },
        {
          day: 2,
          title: "An Binh Island snorkeling",
          stops: [
            "an-binh-island",
          ],
          notes: "An Binh Island (Dao Be / Little Island) by boat for some of the best snorkeling in the area - around 170,000 VND return (2026), book at the main harbour. Gieng Tien Peak is currently closed.",
        },
      ],
    },
    {
      duration: "3D2N",
      label: "Full island experience",
      days: [
        {
          day: 1,
          title: "Arrive + To Vo Gate + garlic fields + Hang Pagoda",
          stops: [
            "to-vo-gate",
            "ly-son-garlic-fields",
            "hang-pagoda",
          ],
          notes: "Arrive morning ferry. Explore the main island by motorbike. Hang Pagoda at low tide.",
        },
        {
          day: 2,
          title: "An Binh Island + snorkeling",
          stops: [
            "an-binh-island",
          ],
          notes: "Full day on the little island. Snorkeling, swimming, seafood lunch on the beach. The island has basic guesthouses if you want to stay overnight.",
        },
        {
          day: 3,
          title: "Thoi Loi Mountain + Hoang Sa history + final beach",
          stops: [
            "thoi-loi-mountain",
            "an-vinh-communal-house",
            "an-hai-communal-house",
          ],
          notes: "Morning climb up Thoi Loi, the island's highest crater (Gieng Tien Peak is currently closed). Hoang Sa naval history museum near An Vinh Communal House - fascinating and rarely visited by foreign travelers. Afternoon beach before the return ferry.",
        },
      ],
    },
  ],

  cost: {
    budget: "400,000–700,000 VND/day",
    midRange: "700,000–1,200,000 VND/day",
    comfortable: "1,200,000+ VND/day",
    notes: "Ferry: around 80,000-150,000 VND each way - check current fares at Sa Ky port. Motorbike: 150,000 VND/day. Boat to An Binh Island: around 170,000 VND return (2026). Toi Ly Son (purple garlic) is sold everywhere and makes an excellent souvenir.",
  },

  bestTimeSummary: "Mar-Aug calm seas and clear water. Garlic is harvested around Feb-Mar, when the fields are at their busiest. Avoid Sep-Jan when storms frequently cancel ferries for days.",
  bestMonths: [3, 4, 5, 6, 7, 8],

  recommendedStay: "2–3 days",

  transport: "Motorbike rental on the island (only practical option). Boat for An Binh Island. Walking for the craters and pagoda.",

  nearbyDestinations: [],

  coordinates: {
    lat: 15.3794,
    lng: 109.0959,
  },
  mapPriority: 2,
  mapZoom: 12,
}
