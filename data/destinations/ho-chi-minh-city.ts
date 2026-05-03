import { Destination } from "./types"
import { heroUrl } from "@/lib/cloudinary"

export const hoChiMinhCity: Destination = {
  slug: "ho-chi-minh-city",
  name: "Ho Chi Minh City",
  province: "Ho Chi Minh City",
  provinceSlug: "ho-chi-minh-city",
  region: "south",

  description:
    "Ho Chi Minh City - still called Saigon by almost everyone - is Vietnam's largest, fastest, and most chaotic city. French colonial architecture beside glass towers. War history beside rooftop bars. The best street food in the country eaten on plastic stools at the side of a road choked with motorbikes. It rewards exploration on foot in the old districts, and punishes those who try to rush it.",

  tagline: "Saigon never sleeps - and neither will you",

  heroImage: heroUrl("coffee-apartment-ho-chi-minh-city_blkaw8"),

  tags: ["city", "history", "food", "culture", "nightlife"],

  travelStyle: ["solo-friendly", "budget", "family"],

  gettingThere: [
    {
      from: "Hanoi",
      vehicle: "fly",
      duration: "2 hours",
      cost: "from 800,000 VND",
      notes: "Fly into Tan Son Nhat Airport. Grab to city centre: 100,000–150,000 VND depending on district.",
    },
    {
      from: "Da Nang",
      vehicle: "fly",
      duration: "1 hour 15 min",
      cost: "from 500,000 VND",
    },
    {
      from: "Da Lat",
      vehicle: "bus",
      duration: "6–7 hours",
      cost: "150,000–250,000 VND",
      notes: "Overnight buses available. Day buses also run.",
    },
    {
      from: "Phu Quoc",
      vehicle: "fly",
      duration: "45 minutes",
      cost: "from 600,000 VND",
    },
    {
      from: "Can Tho",
      vehicle: "bus",
      duration: "3.5 hours",
      cost: "100,000–150,000 VND",
      notes: "From Mien Tay bus station. Good gateway to/from Mekong Delta.",
    },
  ],

  itineraries: [
    {
      duration: "2D1N",
      label: "Quick city highlights",
      days: [
        {
          day: 1,
          title: "War Remnants Museum + Reunification Palace + Ben Thanh",
          stops: [
            "war-remnants-museum",
            "independence-palace",
            "ben-thanh-market",
            "notre-dame-cathedral-saigon",
            "saigon-central-post-office",
          ],
          notes: "War Remnants Museum is one of the most powerful museums in Southeast Asia - allow 2 hours minimum. Reunification Palace (Independence Palace) gives an eerie glimpse into the end of the war. Notre Dame Cathedral and Central Post Office are on the same block. Ben Thanh Market for evening street food.",
        },
        {
          day: 2,
          title: "Cu Chi Tunnels day trip + Jade Emperor Pagoda",
          stops: [
            "cu-chi-tunnels",
            "jade-emperor-pagoda",
          ],
          notes: "Cu Chi Tunnels are 70km northwest - half day tour (250,000–350,000 VND). Jade Emperor Pagoda is the most atmospheric temple in HCMC - best visited early morning before tour groups.",
        },
      ],
    },
    {
      duration: "3D2N",
      label: "Full city experience",
      days: [
        {
          day: 1,
          title: "District 1 + War Museum + French Quarter",
          stops: [
            "war-remnants-museum",
            "independence-palace",
            "notre-dame-cathedral-saigon",
            "saigon-central-post-office",
          ],
          notes: "Start at the War Remnants Museum first thing - emotionally heavy, but essential. French Quarter (around Notre Dame) for lunch. Evening: rooftop bars in District 1 or Bui Vien Street.",
        },
        {
          day: 2,
          title: "Cu Chi Tunnels + Ben Thanh + Binh Tay Market",
          stops: [
            "cu-chi-tunnels",
            "ben-thanh-market",
          ],
          notes: "Morning Cu Chi Tunnels tour. Afternoon: Ben Thanh Market (touristy but worth seeing). Binh Tay Market in Cholon (District 5) is the real deal - wholesale market, mostly locals. Best Vietnamese food in HCMC is in Cholon.",
        },
        {
          day: 3,
          title: "Jade Emperor Pagoda + Mekong Delta day trip option",
          stops: [
            "jade-emperor-pagoda",
          ],
          notes: "Jade Emperor Pagoda early morning. Day trip to Mekong Delta (My Tho or Can Tho) if time allows - 2 hours each way by bus. Or: slow morning at a cafe, explore District 3's colonial streets before departing.",
        },
      ],
    },
  ],

  cost: {
    budget: "400,000–800,000 VND/day",
    midRange: "800,000–1,800,000 VND/day",
    comfortable: "1,800,000+ VND/day",
    notes: "War Remnants Museum: 40,000 VND. Cu Chi Tunnels tour: 250,000–400,000 VND. Street food meals from 30,000–80,000 VND. Grab essential - traffic makes walking long distances impractical.",
  },

  bestTimeSummary: "Dec–Apr dry season, cooler and drier. May–Nov rainy season - heavy afternoon showers but city stays lively year-round.",

  recommendedStay: "2–4 days",

  transport: "Grab is essential - traffic is heavy and distances between districts are large. Walking works well in Districts 1 and 3. Avoid taxis flagged on the street.",

  nearbyDestinations: ["mekong-delta", "con-dao", "phu-quoc", "da-lat"],

  coordinates: {
    lat: 10.8231,
    lng: 106.6297,
  },
}
