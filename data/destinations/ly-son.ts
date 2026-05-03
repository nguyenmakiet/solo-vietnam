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
      notes: "High-speed ferry from Sa Ky port (30km from Quang Ngai centre). Boats run from ~7am. Buy tickets at the port - no advance booking needed except peak season (Apr–Aug). Quang Ngai is accessible by train or bus from Da Nang (3 hours) or Quy Nhon (2 hours).",
    },
  ],

  itineraries: [
    {
      duration: "2D1N",
      label: "Island circuit",
      days: [
        {
          day: 1,
          title: "To Vo Gate + Thoai Loi Mountain + garlic fields + An Bang beach",
          stops: [
            "to-vo-gate",
            "thoai-loi-mountain",
            "ly-son-garlic-fields",
            "hang-pagoda",
          ],
          notes: "Rent a motorbike from the port (150,000 VND/day) - the whole island loop is under 20km. To Vo Gate is the most dramatic volcanic sea arch in central Vietnam. Garlic fields in the morning when farmers are working. Hang Pagoda at low tide when the sea cave entrance fully opens.",
        },
        {
          day: 2,
          title: "Gieng Tien Peak + An Binh Island snorkeling",
          stops: [
            "gieng-tien-peak",
            "an-binh-island",
          ],
          notes: "Gieng Tien Peak (crater rim) for panoramic island views - 30 minute climb. An Binh Island (Dao Be / Little Island) by boat for the best snorkeling in the area - coral coverage among the best in central Vietnam. Book boat from the main harbour.",
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
          title: "Gieng Tien + Hoang Sa Museum + final beach",
          stops: [
            "gieng-tien-peak",
            "an-vinh-communal-house",
            "an-hai-communal-house",
          ],
          notes: "Morning crater climb. Hoang Sa naval history museum (inside An Vinh Communal House area) - fascinating and rarely visited by foreign travelers. Afternoon beach before the return ferry.",
        },
      ],
    },
  ],

  cost: {
    budget: "400,000–700,000 VND/day",
    midRange: "700,000–1,200,000 VND/day",
    comfortable: "1,200,000+ VND/day",
    notes: "Ferry: 150,000 VND return. Motorbike: 150,000 VND/day. Boat to An Binh Island: 100,000–200,000 VND return. Toi Ly Son (purple garlic) is sold everywhere and makes an excellent souvenir.",
  },

  bestTimeSummary: "Mar–Aug calm seas and clear water. Mar–Apr garlic harvest season - most photogenic. Avoid Sep–Jan when storms frequently cancel ferries for days.",

  recommendedStay: "2–3 days",

  transport: "Motorbike rental on the island (only practical option). Boat for An Binh Island. Walking for the craters and pagoda.",

  nearbyDestinations: [],

  coordinates: {
    lat: 15.3794,
    lng: 109.0959,
  },
}
