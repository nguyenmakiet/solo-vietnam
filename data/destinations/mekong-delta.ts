import { Destination } from "./types"
import { heroUrl } from "@/lib/cloudinary"

export const mekongDelta: Destination = {
  slug: "mekong-delta",
  name: "Mekong Delta",
  province: "Can Tho",
  provinceSlug: "can-tho",
  region: "south",

  description:
    "The Mekong Delta is Vietnam's rice bowl and fruit basket - a vast network of rivers, canals, coconut groves, and floating markets spreading across the southern tip of the country. Life here moves by boat. Can Tho is the hub, but the most interesting experiences are in smaller towns: Ben Tre's coconut villages, Tra Su cajuput forest, floating markets at dawn before the tourist boats arrive. Go slow and go early.",

  tagline: "Rivers, coconuts, and floating markets at dawn",

  heroImage: heroUrl("mekong-delta_wqegef"),

  tags: ["nature", "culture", "food", "boat-tour"],

  travelStyle: ["solo-friendly", "budget", "family"],

  gettingThere: [
    {
      from: "Ho Chi Minh City",
      vehicle: "bus",
      duration: "3.5–4 hours",
      cost: "120,000–200,000 VND",
      notes: "From Mien Tay bus station. Can Tho is the main hub - frequent departures.",
    },
    {
      from: "Ho Chi Minh City",
      vehicle: "bus",
      duration: "2 hours",
      cost: "80,000–120,000 VND",
      notes: "My Tho (closer option) is 70km from HCMC - doable as a half day trip.",
    },
  ],

  itineraries: [
    {
      duration: "1D",
      label: "Day trip from HCMC",
      days: [
        {
          day: 1,
          title: "My Tho + Ben Tre coconut village",
          stops: [
            "ben-tre-coconut-village",
          ],
          notes: "My Tho is the closest delta town to HCMC (70km). Boat through the canals to Ben Tre for coconut candy making and river life. Back by evening. Touristy but gives a taste of the delta.",
        },
      ],
    },
    {
      duration: "2D1N",
      label: "Can Tho + Cai Rang floating market",
      days: [
        {
          day: 1,
          title: "Can Tho arrival + Ninh Kieu pier + evening canal",
          stops: [
            "cai-rang-floating-market",
          ],
          notes: "Arrive Can Tho. Afternoon: rent a bicycle and explore the riverside. Evening boat tour to see the floating market area set up for the next morning.",
        },
        {
          day: 2,
          title: "Cai Rang floating market at dawn + canal villages",
          stops: [
            "cai-rang-floating-market",
            "bay-mau-coconut-forest",
          ],
          notes: "5am boat departure to Cai Rang - the market is at its most active 5-8am before tour boats arrive. Wholesale boats trading fruit directly boat-to-boat. Return for breakfast. Afternoon: canal village tour through smaller waterways.",
        },
      ],
    },
    {
      duration: "3D2N",
      label: "Full delta experience",
      days: [
        {
          day: 1,
          title: "Can Tho + Cai Rang floating market prep",
          stops: [
            "cai-rang-floating-market",
          ],
          notes: "Arrive and settle. Evening riverside at Ninh Kieu Wharf.",
        },
        {
          day: 2,
          title: "Cai Rang dawn + Ben Tre day trip",
          stops: [
            "cai-rang-floating-market",
            "ben-tre-coconut-village",
          ],
          notes: "Floating market at 5am. Ben Tre in the afternoon by bus (1.5 hours) - coconut villages, cycling through palm groves.",
        },
        {
          day: 3,
          title: "Tra Su Cajuput Forest",
          stops: [
            "tra-su-cajuput-forest",
          ],
          notes: "Tra Su is 3 hours from Can Tho near Chau Doc - a flooded cajuput forest you row through in flat-bottomed boats. Otherworldly scenery, lots of birds. Best Sep–Nov when the flooding is deepest.",
        },
      ],
    },
  ],

  cost: {
    budget: "250,000–500,000 VND/day",
    midRange: "500,000–1,000,000 VND/day",
    comfortable: "1,000,000+ VND/day",
    notes: "One of the most affordable regions in Vietnam. Boat tours: 100,000–300,000 VND. Homestay with meals: 200,000–400,000 VND/night.",
  },

  bestTimeSummary: "Nov–Apr dry season, floating markets most active. Sep–Oct flood season in the upper delta - Tra Su is at its best but some roads flood.",

  recommendedStay: "1–3 days",

  transport: "Boat for canals and waterways. Bicycle for flat river roads. Bus between towns. Grab available in Can Tho city.",

  nearbyDestinations: ["phu-quoc", "con-dao", "ho-chi-minh-city"],

  coordinates: {
    lat: 10.0452,
    lng: 105.7469,
  },
}
