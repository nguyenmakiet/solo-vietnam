import { Destination } from "./types"
import { heroUrl } from "@/lib/cloudinary"

export const phanThiet: Destination = {
  slug: "phan-thiet",
  name: "Phan Thiet",
  province: "Binh Thuan",
  provinceSlug: "binh-thuan",
  region: "south",

  description:
    "Phan Thiet and Mui Ne are Vietnam's wind capital - 20km of coastline with the strongest and most consistent winds in the country, making it the kite-surfing and windsurfing destination of Southeast Asia. Beyond the sports, there are red and white sand dunes for sunrise rides, the Fairy Stream walk through pink canyons, and fresh seafood from fishing villages that have been casting nets here for generations.",

  tagline: "Red dunes, white dunes, and the wind that never stops",

  heroImage: heroUrl("phan-thiet_lf0web"),

  tags: ["beach", "nature", "adventure", "sports"],

  travelStyle: ["solo-friendly", "budget", "adventure"],

  gettingThere: [
    {
      from: "Ho Chi Minh City",
      vehicle: "bus",
      duration: "4–5 hours",
      cost: "150,000–200,000 VND",
      notes: "From Mien Dong bus station. Drop-off in Mui Ne or Phan Thiet town. Many direct sleeper buses run overnight.",
    },
    {
      from: "Ho Chi Minh City",
      vehicle: "train",
      duration: "3.5 hours",
      cost: "from 100,000 VND",
      notes: "To Muong Man station, 20km from Mui Ne. Taxi from station ~150,000 VND.",
    },
    {
      from: "Da Lat",
      vehicle: "bus",
      duration: "4–5 hours",
      cost: "100,000–150,000 VND",
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
          notes: "Red Sand Dunes are 5 minutes from the main strip - best at sunrise or sunset when the light is golden. Mui Ne fishing village early morning when boats return with the catch. Fresh seafood along the beach road for dinner.",
        },
        {
          day: 2,
          title: "White Sand Dunes sunrise + Fairy Stream",
          stops: [
            "white-sand-dunes",
            "fairy-stream",
          ],
          notes: "White Sand Dunes are 50km north - hire a motorbike and go at 5am for sunrise. Spectacular. Fairy Stream (Suoi Tien) back in Mui Ne - wade through shallow pink-orange canyon, barefoot, 30 minutes each way.",
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
            "mui-ne-fishing-village",
          ],
          notes: "Arrive, check in. Sunset at Red Dunes. Evening seafood.",
        },
        {
          day: 2,
          title: "Kite surfing lesson + Fairy Stream",
          stops: [
            "fairy-stream",
          ],
          notes: "Phan Thiet is the best place in Vietnam to learn kite surfing - consistent wind, flat water, multiple schools. Half day lesson ~1,500,000 VND. Fairy Stream in the afternoon.",
        },
        {
          day: 3,
          title: "White Sand Dunes sunrise + Ke Ga Lighthouse",
          stops: [
            "white-sand-dunes",
            "ke-ga-lighthouse",
          ],
          notes: "White Dunes at sunrise. Ke Ga Lighthouse on a small offshore island (30km south of Mui Ne) - built by the French in 1899, still operational, beautiful coastal scenery.",
        },
      ],
    },
  ],

  cost: {
    budget: "350,000–600,000 VND/day",
    midRange: "600,000–1,200,000 VND/day",
    comfortable: "1,200,000+ VND/day",
    notes: "Motorbike rental: 100,000–150,000 VND/day. Kite surfing lesson: 1,200,000–2,000,000 VND. White Sand Dune jeep: 150,000–300,000 VND return.",
  },

  bestTimeSummary: "Nov–Apr dry season with strong winds - ideal for kite surfing. May–Oct southwest monsoon brings rain and rough seas.",

  recommendedStay: "2–3 days",

  transport: "Motorbike rental essential - the resort strip is 15km long. Grab available but limited. Jeep tours to White Sand Dunes are popular.",

  nearbyDestinations: ["da-lat", "nha-trang", "ho-chi-minh-city"],

  coordinates: {
    lat: 10.9333,
    lng: 108.2833,
  },
}
