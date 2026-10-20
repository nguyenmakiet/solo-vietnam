import { Destination } from "./types"
import { heroUrl } from "@/lib/cloudinary"

export const caoBang: Destination = {
  slug: "cao-bang",
  name: "Cao Bang",
  province: "Cao Bang",
  provinceSlug: "cao-bang",
  region: "north",

  description:
    "Cao Bang is one of Vietnam's most remote northern provinces - dramatic limestone karst, dense jungle, and deep river valleys on the Chinese border. Ban Gioc Waterfall is one of the largest in Asia and still relatively off the beaten path for foreign travelers. The province also carries deep revolutionary history: Pac Bo Cave is where Ho Chi Minh returned to Vietnam in 1941 after 30 years abroad. Combine with Ha Giang Loop for the definitive northern Vietnam circuit.",

  tagline: "Vietnam's wild north - waterfalls, caves, and revolutionary history",

  heroImage: heroUrl("cao-bang_tu6hxy"),

  tags: ["nature", "history", "trekking", "waterfall", "adventure"],

  travelStyle: ["solo-friendly", "adventure", "hidden-gem", "budget"],

  gettingThere: [
    {
      from: "Hanoi",
      vehicle: "bus",
      duration: "6-7 hours",
      cost: "200,000-300,000 VND",
      notes: "Limousine vans more comfortable than regular buses. Ban Gioc is about 90km from Cao Bang city and Pac Bo about 50km - motorbike essential.",
    },
    {
      from: "Ha Giang",
      vehicle: "motorbike",
      duration: "5-6 hours",
      cost: "Petrol only",
      notes: "Classic circuit: Ha Giang Loop → Cao Bang → back to Hanoi. Spectacular mountain road connecting the two provinces.",
    },
  ],

  itineraries: [
    {
      duration: "2D1N",
      label: "Ban Gioc focus",
      days: [
        {
          day: 1,
          title: "Ban Gioc Waterfall + Nguom Ngao Cave",
          stops: [
            "ban-gioc-waterfall",
            "nguom-ngao-cave",
          ],
          notes: "Ban Gioc is 90km from Cao Bang city - be there when it opens at 7am, before the tour groups arrive. The falls straddle the Vietnam-China border, and the mist in the morning light is extraordinary. Nguom Ngao Cave is 3km away - about 3km of passages full of stalactites and stalagmites.",
        },
        {
          day: 2,
          title: "Pac Bo Historic Site + Thang Hen Lake",
          stops: [
            "pac-bo-historic-site",
            "thang-hen-lake",
          ],
          notes: "Pac Bo is where Ho Chi Minh lived and worked in secret from 1941-1945. The cave, the stream, and the mountain he named after Lenin and Marx are all still here. Thang Hen Lake: a cluster of 36 interconnected lakes in the karst landscape - beautiful cycling country.",
        },
      ],
    },
    {
      duration: "3D2N",
      label: "Full province circuit",
      days: [
        {
          day: 1,
          title: "Arrive Cao Bang + Thang Hen Lake",
          stops: [
            "thang-hen-lake",
          ],
          notes: "Arrive Cao Bang. Afternoon motorbike to Thang Hen - 35km, beautiful karst plateau.",
        },
        {
          day: 2,
          title: "Ban Gioc Waterfall + Nguom Ngao Cave",
          stops: [
            "ban-gioc-waterfall",
            "nguom-ngao-cave",
          ],
          notes: "Full day at Ban Gioc. Stay overnight near the falls if you want to be there at opening (7am) without the long drive.",
        },
        {
          day: 3,
          title: "Pac Bo Historic Site + return",
          stops: [
            "pac-bo-historic-site",
          ],
          notes: "Pac Bo in the morning. Return to Cao Bang for bus back to Hanoi.",
        },
      ],
    },
  ],

  cost: {
    budget: "250,000-500,000 VND/day",
    midRange: "500,000-900,000 VND/day",
    comfortable: "900,000+ VND/day",
    notes: "Ban Gioc entry 45,000 VND, bamboo raft to the falls around 150,000 VND. Nguom Ngao Cave: 45,000 VND (full guided route around 195,000 VND). Pac Bo: 25,000 VND. One of the cheapest destinations in Vietnam.",
  },

  bestTimeSummary: "Sep-Nov golden rice season, best waterfall flow after rainy season, clear skies. Mar-May also good. Avoid Jun-Aug heavy rain.",
  bestMonths: [3, 4, 5, 9, 10, 11],

  recommendedStay: "2-4 days",

  transport: "Motorbike essential - attractions are far from the city and public transport is very limited. Renting in Cao Bang city is easy.",

  nearbyDestinations: ["ha-giang", "ha-noi"],

  coordinates: {
    lat: 22.6657,
    lng: 106.2522,
  },
  mapPriority: 2,
  mapZoom: 11,
  // ─── FAQ ─────────────────────────────────────────────────

}
