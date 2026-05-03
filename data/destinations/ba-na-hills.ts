import { Destination } from "./types"
import { heroUrl } from "@/lib/cloudinary"

export const baNaHills: Destination = {
  slug: "ba-na-hills",
  name: "Ba Na Hills",
  province: "Da Nang",
  provinceSlug: "da-nang",
  region: "central",

  description:
    "Ba Na Hills is Da Nang's mountain resort at 1,487m - a former French colonial hill station that has been reinvented as one of Southeast Asia's most elaborate theme park destinations. The Golden Bridge (held by two giant stone hands) went viral worldwide and remains the most photographed spot in central Vietnam. The cable car ride is world-record-breaking. It's unabashedly touristy, expensive, and genuinely spectacular on a clear day.",

  tagline: "Above the clouds, held by giant stone hands",

  heroImage: heroUrl("ba-na-hill-3_bwhfwi"),

  tags: ["attraction", "photography", "nature", "family"],

  travelStyle: ["family", "easy"],

  gettingThere: [
    {
      from: "Da Nang",
      vehicle: "taxi",
      duration: "45 minutes",
      cost: "250,000–350,000 VND one way",
      notes: "25km west of Da Nang centre. No public bus. Grab or private taxi. Most hotels arrange shuttle transfers.",
    },
    {
      from: "Hoi An",
      vehicle: "taxi",
      duration: "1.5 hours",
      cost: "400,000–600,000 VND one way",
      notes: "Many tour operators run combined Ba Na Hills + Hoi An day trips.",
    },
  ],

  itineraries: [
    {
      duration: "1D",
      label: "Full day visit",
      days: [
        {
          day: 1,
          title: "Cable car + Golden Bridge + French Village + Fantasy Park",
          stops: [
            "golden-bridge",
            "ba-na-cable-car",
            "french-village-ba-na",
          ],
          notes: "Arrive early (opens 8am) - beat the afternoon crowds and get clearer weather. Golden Bridge first thing before queues form. Cable car ride is genuinely spectacular - 5.8km, world record at time of construction. French Village feels surreal at 1,400m. Fantasy Park indoor amusement park for families. Allow a full day - the complex is enormous. Buy tickets online to skip queues.",
        },
      ],
    },
  ],

  cost: {
    budget: "1,500,000 VND/person",
    midRange: "1,500,000–2,000,000 VND/person",
    comfortable: "2,000,000+ VND/person",
    notes: "All-inclusive ticket ~1,500,000 VND covers cable car, Golden Bridge, Fantasy Park, and most attractions. Buy online for small discount. Food inside the complex is overpriced - eat before or after.",
  },

  bestTimeSummary: "Mar–Aug summit is sunny while Da Nang below is sometimes overcast. Morning visits always better - clouds often roll in by 2pm.",

  recommendedStay: "1 day",

  transport: "Cable car within the complex. Taxi or Grab to the base station.",

  nearbyDestinations: ["da-nang", "hoi-an"],

  coordinates: {
    lat: 15.9973,
    lng: 107.9889,
  },
}
