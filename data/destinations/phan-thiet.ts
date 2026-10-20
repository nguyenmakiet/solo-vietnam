import { Destination } from "./types"
import { heroUrl } from "@/lib/cloudinary"

export const phanThiet: Destination = {
  slug: "phan-thiet",
  name: "Phan Thiet",
  province: "Binh Thuan",
  provinceSlug: "binh-thuan",
  region: "south",

  description:
    "Phan Thiet and Mui Ne are Vietnam's wind capital - 20km of coastline with some of the most consistent winds in the country, making it one of Southeast Asia's best-known kite-surfing and windsurfing spots. Beyond the sports, there are red and white sand dunes for sunrise rides, the Fairy Stream walk through pink canyons, and fresh seafood from fishing villages that have been casting nets here for generations.",

  tagline: "Red dunes, white dunes, and the wind that never stops",

  heroImage: heroUrl("phan-thiet_lf0web"),

  tags: ["beach", "nature", "adventure", "sports"],

  travelStyle: ["solo-friendly", "budget", "adventure"],

  gettingThere: [
    {
      from: "Ho Chi Minh City",
      vehicle: "bus",
      duration: "4-5 hours",
      cost: "150,000-200,000 VND",
      notes: "From Mien Dong bus station. Drop-off in Mui Ne or Phan Thiet town. Many direct sleeper buses run overnight.",
    },
    {
      from: "Ho Chi Minh City",
      vehicle: "train",
      duration: "3.5-4.5 hours",
      cost: "from 100,000 VND",
      notes: "Direct SPT train to Phan Thiet station (about 4 hours, 20-25km from Mui Ne, taxi 150,000-250,000 VND) - not daily in low season. Otherwise trains stop at Binh Thuan (Muong Man) station, 35-40km from Mui Ne, taxi 300,000-450,000 VND.",
    },
    {
      from: "Da Lat",
      vehicle: "bus",
      duration: "4-5 hours",
      cost: "100,000-150,000 VND",
      notes: "Popular combo route - Da Lat highlands to coast.",
    },
  ],

  itineraries: [
    {
      duration: "2D1N",
      label: "Dunes and beach",
      days: [
        {
          day: 1,
          title: "Red Sand Dunes sunset + Mui Ne fishing village + seafood",
          stops: [
            "red-sand-dunes",
            "mui-ne-fishing-village",
          ],
          notes: "Red Sand Dunes are 5 minutes from the main strip - best at sunrise or sunset when the light is golden. Mui Ne fishing village - boats come in early morning, so it's busiest before 8am; in the evening you can still walk the harbour. Fresh seafood along the beach road for dinner.",
        },
        {
          day: 2,
          title: "White Sand Dunes sunrise + Fairy Stream",
          stops: [
            "white-sand-dunes",
            "fairy-stream",
          ],
          notes: "White Sand Dunes are about 25-30km northeast of Mui Ne - sunrise jeep tours pick up around 4-4:30am, or ride a motorbike yourself. Fairy Stream (Suoi Tien) back in Mui Ne - wade barefoot through a shallow pink-orange canyon, about 30 minutes each way.",
        },
      ],
    },
    {
      duration: "3D2N",
      label: "Full stay with water sports",
      days: [
        {
          day: 1,
          title: "Arrival + Red Sand Dunes + Mui Ne fishing village",
          stops: [
            "red-sand-dunes",
          ],
          notes: "Arrive, check in. Sunset at the Red Sand Dunes. Evening seafood on the beach road.",
        },
        {
          day: 2,
          title: "White Sand Dunes sunrise + fishing village + Fairy Stream",
          stops: [
            "white-sand-dunes",
            "mui-ne-fishing-village",
            "fairy-stream",
          ],
          notes: "Sunrise jeep tour to the White Sand Dunes (25-30km northeast, pickup around 4-4:30am). Stop at Mui Ne fishing village on the way back while boats are still coming in. Fairy Stream in the late afternoon when it's cooler.",
        },
        {
          day: 3,
          title: "Kite surfing lesson or Ke Ga Lighthouse",
          stops: [
            "ke-ga-lighthouse",
          ],
          notes: "Phan Thiet is one of the most popular places in Vietnam to learn kite surfing - consistent wind Nov-Apr and several schools. Half day lesson around 1,500,000 VND (check locally). Or head south to Ke Ga Lighthouse, about 30km south of Phan Thiet city (45-50km from Mui Ne), on a small islet just offshore - built by the French in 1899 and still operational.",
        },
      ],
    },
  ],

  cost: {
    budget: "350,000-600,000 VND/day",
    midRange: "600,000-1,200,000 VND/day",
    comfortable: "1,200,000+ VND/day",
    notes: "Motorbike rental: 100,000-150,000 VND/day. Kite surfing lesson: 1,200,000-2,000,000 VND. White Sand Dune jeep: 150,000-300,000 VND return.",
  },

  bestTimeSummary: "Nov-Apr dry season with strong winds - ideal for kite surfing. May-Oct southwest monsoon brings rain and rough seas.",
  bestMonths: [1, 2, 3, 4, 11, 12],

  recommendedStay: "2-3 days",

  transport: "Motorbike rental essential - the resort strip is 15km long. Grab available but limited. Jeep tours to White Sand Dunes are popular.",

  nearbyDestinations: ["da-lat", "nha-trang", "ho-chi-minh-city"],

  coordinates: {
    lat: 10.9333,
    lng: 108.2833,
  },
  mapPriority: 1,
  mapRank: 4,
  mapZoom: 13,
}
