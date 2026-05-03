import { Destination } from "./types"
import { heroUrl } from "@/lib/cloudinary"

export const haLong: Destination = {
  slug: "ha-long",
  name: "Ha Long Bay",
  province: "Quang Ninh",
  provinceSlug: "quang-ninh",
  region: "north",

  description:
    "Ha Long Bay is Vietnam's most iconic landscape - 1,600+ limestone islands rising from emerald waters, recognized as a UNESCO World Heritage Site. The only real way to experience it is by boat. The main bay is heavily touristed; for a quieter version of the same scenery, consider Lan Ha Bay (via Cat Ba) or Bai Tu Long Bay instead. Pick the right cruise and it's unforgettable. Pick the wrong one and you'll spend 48 hours on a floating hotel surrounded by 50 other boats.",

  tagline: "1,600 islands. One unforgettable night on the water.",

  heroImage: heroUrl("ha-long-4_bdow9b"),

  tags: ["nature", "cruise", "beach", "cave"],

  travelStyle: ["solo-friendly", "luxury", "family"],

  // ─── Getting There ───────────────────────────────────────
  gettingThere: [
    {
      from: "Hanoi",
      vehicle: "bus",
      duration: "3.5 hours",
      cost: "200,000–350,000 VND",
      notes: "Most cruises include transfers from Hanoi Old Quarter hotels. If booking independently, buses run from My Dinh and Gia Lam stations to Ha Long City.",
    },
  ],

  // ─── Itineraries ─────────────────────────────────────────
  itineraries: [
    {
      duration: "1D",
      label: "Day cruise only",
      days: [
        {
          day: 1,
          title: "Ha Long Bay day cruise",
          stops: [
            "ha-long-bay",
            "sung-sot-cave",
            "ti-top-island",
          ],
          notes: "Depart Hanoi ~7:30am, on the water by noon. Sung Sot (Surprise Cave) is the largest and most impressive cave in the bay. Ti Top Island for swimming and panoramic views. Back in Hanoi by 8pm. Tight but doable - only worth it if you can't do overnight.",
        },
      ],
    },
    {
      duration: "2D1N",
      label: "Classic overnight cruise - most popular",
      days: [
        {
          day: 1,
          title: "Board + caves + kayaking + sunset on deck",
          stops: [
            "ha-long-bay",
            "sung-sot-cave",
            "ti-top-island",
          ],
          notes: "Board by noon. Afternoon: Sung Sot Cave and Ti Top Island or kayaking through limestone arches. Sunset on the sundeck with drinks. Dinner onboard. Night anchored in the bay - eerily quiet after day-trippers leave.",
        },
        {
          day: 2,
          title: "Sunrise + kayaking + Bai Tu Long or Lan Ha extension",
          stops: [
            "bai-tu-long-bay",
            "lan-ha-bay",
          ],
          notes: "Dawn on deck for sunrise over the karsts. Morning kayak or swimming before heading back. Disembark ~noon, back in Hanoi by 5pm.",
        },
      ],
    },
    {
      duration: "3D2N",
      label: "Full experience - recommended",
      days: [
        {
          day: 1,
          title: "Board + Sung Sot Cave + kayaking",
          stops: [
            "ha-long-bay",
            "sung-sot-cave",
          ],
          notes: "Board by noon. Classic Ha Long highlights - main caves, island swimming. Less rushed than the 2D1N version.",
        },
        {
          day: 2,
          title: "Transfer to Lan Ha Bay - kayaking + floating village",
          stops: [
            "lan-ha-bay",
          ],
          notes: "Day 2 transfers to a smaller day boat for Lan Ha Bay - dramatically fewer boats, better kayaking, fishing village visits. This is where the 3D2N becomes worthwhile.",
        },
        {
          day: 3,
          title: "Morning in the bay + return",
          stops: [],
          notes: "Final morning on deck. Disembark ~noon, back in Hanoi by 5pm.",
        },
      ],
    },
  ],

  // ─── Cost ────────────────────────────────────────────────
  cost: {
    budget: "1,500,000–2,500,000 VND/night",
    midRange: "2,500,000–5,000,000 VND/night",
    comfortable: "5,000,000+ VND/night",
    notes: "All-inclusive (meals, activities, transfers from Hanoi). Budget cruises exist but quality varies wildly - mid-range is the sweet spot. Lan Ha Bay and Bai Tu Long Bay routes cost slightly more but are worth it.",
  },

  // ─── Practical ───────────────────────────────────────────
  bestTimeSummary: "Oct–Apr clear skies and calm seas. Mar–May and Sep–Nov ideal. Jun–Aug hot with storms possible - cruises may be delayed.",

  recommendedStay: "1–2 nights on a cruise",

  transport: "Cruise boat only. Transfer from Hanoi usually included.",

  // ─── Nearby ──────────────────────────────────────────────
  nearbyDestinations: ["cat-ba", "ha-noi", "ninh-binh"],

  coordinates: {
    lat: 20.9101,
    lng: 107.1839,
  },
}
