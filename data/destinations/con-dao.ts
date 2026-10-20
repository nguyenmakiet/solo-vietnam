import { Destination } from "./types"
import { heroUrl } from "@/lib/cloudinary"

export const conDao: Destination = {
  slug: "con-dao",
  name: "Con Dao",
  province: "Ba Ria - Vung Tau",
  provinceSlug: "vung-tau",
  region: "south",

  description:
    "Con Dao is one of Vietnam's most remarkable islands - a former French colonial penal colony with a dark and layered history, now home to some of the best-protected marine environments in Vietnam. Near-empty beaches, world-class diving and snorkeling, sea turtle nesting sites, and one of the best-preserved national parks in the country. It's more expensive to reach and stay than other Vietnamese islands, which is exactly why it has stayed this way.",

  tagline: "Vietnam's most haunting - and most beautiful - island",

  heroImage: heroUrl("con-dao_vr623u"),

  tags: ["island", "diving", "history", "nature", "beach"],

  travelStyle: ["solo-friendly", "luxury", "adventure", "hidden-gem"],

  gettingThere: [
    {
      from: "Ho Chi Minh City",
      vehicle: "fly",
      duration: "45-60 minutes",
      cost: "from 800,000 VND",
      notes: "Vietnam Airlines flies daily from Tan Son Nhat (under an hour) - the fastest option.",
    },
    {
      from: "Can Tho",
      vehicle: "fly",
      duration: "45 minutes",
      cost: "from 700,000 VND",
      notes: "Seasonal flights available.",
    },
    {
      from: "Vung Tau / Tran De / HCMC",
      vehicle: "ferry",
      duration: "3-5 hours",
      cost: "check current fares",
      notes: "High-speed ferries run from Vung Tau, Tran De (Soc Trang) and Hiep Phuoc port in HCMC; schedules change by season and sailings are often cancelled in rough weather - check before booking and keep a flexible day.",
    },
  ],

  itineraries: [
    {
      duration: "3D2N",
      label: "Island essentials",
      days: [
        {
          day: 1,
          title: "Con Dao Prison + Hang Duong Cemetery + Dat Doc Beach",
          stops: [
            "con-dao-prison",
            "six-senses-beach",
          ],
          notes: "Con Dao Prison complex is the most historically significant site on the island - the Tiger Cages where political prisoners were kept in inhumane conditions. Hang Duong Cemetery where revolutionary martyr Vo Thi Sau is buried - locals leave fresh flowers every morning. Afternoon: find an empty beach.",
        },
        {
          day: 2,
          title: "Diving or snorkeling + Con Dao National Park",
          stops: [
            "con-dao-national-park",
          ],
          notes: "Morning: diving or snorkeling - Con Dao has some of the best coral reefs in Vietnam, with hawksbill turtles, occasional rays, and healthy fish populations. Afternoon: trek into the national park. Dam Trau Beach in the north of the island is often called one of the most beautiful beaches in Vietnam.",
        },
        {
          day: 3,
          title: "Sea turtle watching (seasonal) + final beach day",
          stops: [
            "con-dao-national-park",
          ],
          notes: "May-Oct: sea turtles nest on Bay Canh island - Con Dao National Park runs overnight turtle-watching tours with a stay at the ranger station (book in advance through the park office; limited places). Outside this season: explore more of the island by motorbike. Airport transfers by taxi.",
        },
      ],
    },
    {
      duration: "4D3N",
      label: "Full island experience",
      days: [
        {
          day: 1,
          title: "History day - Con Dao Prison + Hang Duong Cemetery",
          stops: [
            "con-dao-prison",
          ],
          notes: "Spend the first day understanding the island's history before enjoying its beauty. Con Dao Prison takes 2-3 hours. Hang Duong Cemetery is atmospheric - go at sunset.",
        },
        {
          day: 2,
          title: "Diving + Ong Dung Beach",
          stops: [
            "con-dao-national-park",
          ],
          notes: "Full day diving with a local operator. Ong Dung Beach (west coast) reached by a 30-minute jungle trek - one of the most secluded beaches on the island.",
        },
        {
          day: 3,
          title: "Dam Trau Beach + Bay Canh island",
          stops: [
            "dam-trau-beach",
          ],
          notes: "Motorbike to Dam Trau Beach, the island's best beach. Boat trip to Bay Canh island for the French-era lighthouse, built in the 1880s, and its views - arrange through the national park or a local operator.",
        },
        {
          day: 4,
          title: "Morning snorkel + depart",
          stops: [],
          notes: "Final morning snorkel before the afternoon flight. Book the early flight to maximize beach time.",
        },
      ],
    },
  ],

  cost: {
    budget: "800,000-1,500,000 VND/day",
    midRange: "1,500,000-3,000,000 VND/day",
    comfortable: "3,000,000+ VND/day",
    notes: "More expensive than other Vietnamese islands due to remote location. Diving: 1,500,000-2,500,000 VND for 2 dives. Motorbike rental: 150,000-200,000 VND/day. Very limited budget accommodation.",
  },

  bestTimeSummary: "Mar-Sep is the season to go: calm seas, good diving and boat trips. Mar-Apr is the driest. May-Sep is technically rainy season, but rain usually comes as short afternoon or evening showers of under an hour, with sunny mornings - and it's sea turtle nesting season. Oct-Feb the northeast monsoon makes Con Son Bay rough, though the west and southwest coasts stay calmer.",
  bestMonths: [3, 4, 5, 6, 7, 8, 9],

  recommendedStay: "3-5 days",

  transport: "Motorbike rental essential - the island is 15km long. Taxis available but expensive. Some beaches require short hikes to reach.",

  nearbyDestinations: ["phu-quoc", "ho-chi-minh-city"],

  coordinates: {
    lat: 8.6843,
    lng: 106.6061,
  },
  mapPriority: 2,
  mapZoom: 12,
}
