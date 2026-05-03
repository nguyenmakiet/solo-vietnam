import { Destination } from "./types"
import { heroUrl } from "@/lib/cloudinary"

export const nhaTrang: Destination = {
  slug: "nha-trang",
  name: "Nha Trang",
  province: "Khanh Hoa",
  provinceSlug: "khanh-hoa",
  region: "central",

  description:
    "Nha Trang is Vietnam's most famous beach city - a 6km arc of white sand backed by a busy coastal boulevard, with some of the clearest water and best diving on the Vietnamese coast. It's also the most developed and party-oriented beach destination in the country. The islands offshore are the real draw: Hon Mun has the best coral reefs, and the surrounding archipelago makes for good snorkeling and island-hopping.",

  tagline: "Sun, seafood, and island hopping on Vietnam's riviera",

  heroImage: heroUrl("nha-tràng_x9cnbm"),

  tags: ["beach", "island", "diving", "nightlife"],

  travelStyle: ["solo-friendly", "budget", "family"],

  gettingThere: [
    {
      from: "Ho Chi Minh City",
      vehicle: "fly",
      duration: "1 hour",
      cost: "from 500,000 VND",
      notes: "Fly into Cam Ranh Airport, 30km south. Shuttle buses run to the city centre (~60,000 VND).",
    },
    {
      from: "Ho Chi Minh City",
      vehicle: "train",
      duration: "7–8 hours",
      cost: "from 200,000 VND",
      notes: "Overnight sleeper train - scenic coastal route.",
    },
    {
      from: "Da Nang",
      vehicle: "train",
      duration: "5–6 hours",
      cost: "from 200,000 VND",
    },
    {
      from: "Da Lat",
      vehicle: "bus",
      duration: "4 hours",
      cost: "100,000–150,000 VND",
      notes: "Scenic mountain descent - combine the two destinations easily.",
    },
  ],

  itineraries: [
    {
      duration: "2D1N",
      label: "Beach and islands",
      days: [
        {
          day: 1,
          title: "Nha Trang Beach + Po Nagar Cham Towers + Long Son Pagoda",
          stops: [
            "po-nagar-cham-towers",
            "long-son-pagoda",
          ],
          notes: "Morning swim on Nha Trang Beach. Po Nagar towers are the best-preserved Cham ruins on the south coast - 10th century, still used for worship. Long Son Pagoda for the giant white Buddha and city views.",
        },
        {
          day: 2,
          title: "Island hopping - Hon Mun + Hon Tam",
          stops: [
            "hon-mun-island",
            "hon-tam-island",
          ],
          notes: "Full day boat tour to the islands. Hon Mun has the best coral reefs for snorkeling - visibility can be 10-15m on clear days. Avoid the party boat tours with the floating bar - find a smaller operator for a better experience.",
        },
      ],
    },
    {
      duration: "3D2N",
      label: "Full stay",
      days: [
        {
          day: 1,
          title: "City + Po Nagar + beach",
          stops: [
            "po-nagar-cham-towers",
            "long-son-pagoda",
          ],
          notes: "Arrive, settle in. Afternoon cultural sites. Evening: Bui Vien-style beach bar scene if that's your thing, or quieter seafood restaurants on the north end of the beach.",
        },
        {
          day: 2,
          title: "Diving or snorkeling - Hon Mun + Hon Yen",
          stops: [
            "hon-mun-island",
            "hon-yen-island",
          ],
          notes: "Full day on the water. Hon Mun Marine Protected Area for diving - best coral in the region. Hon Yen (Swallow Island) for swimming and lunch. Book with a reputable dive operator if diving.",
        },
        {
          day: 3,
          title: "Monkey Island + Ba Ho Waterfall",
          stops: [
            "ba-ho-waterfall",
          ],
          notes: "Ba Ho Waterfall is 20km north - three tiers, natural pools, jungle setting. Much less crowded than the island tours. Or: relaxed beach day and departure.",
        },
      ],
    },
  ],

  cost: {
    budget: "400,000–700,000 VND/day",
    midRange: "700,000–1,500,000 VND/day",
    comfortable: "1,500,000+ VND/day",
    notes: "Island hopping tour: 200,000–500,000 VND. Diving: 1,200,000–2,000,000 VND for 2 dives. Snorkeling tour: 300,000–500,000 VND.",
  },

  bestTimeSummary: "Jan–Sep best for beach and diving. Oct–Dec northeast monsoon brings rough seas and heavy rain.",

  recommendedStay: "2–3 days",

  transport: "Grab or motorbike for getting around. Boat for islands - join a tour or hire a private boat.",

  nearbyDestinations: ["da-lat", "phan-thiet", "hoi-an"],

  coordinates: {
    lat: 12.2388,
    lng: 109.1967,
  },
}
