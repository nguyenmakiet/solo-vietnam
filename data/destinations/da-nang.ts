import { Destination } from "./types"
import { heroUrl } from "@/lib/cloudinary"

export const daNang: Destination = {
  slug: "da-nang",
  name: "Da Nang",
  province: "Da Nang",
  provinceSlug: "da-nang",
  region: "central",

  description:
    "Da Nang is Central Vietnam's most liveable city - a proper working city with a 10km beach, the Marble Mountains, Son Tra Peninsula's jungle and Lady Buddha, and a Dragon Bridge that breathes fire on weekends. Less polished than Hoi An, less solemn than Hue, but the best base for exploring the entire central region - and increasingly worth visiting in its own right.",

  tagline: "Beaches, bridges, and the best base for Central Vietnam",

  heroImage: heroUrl("da-nang_f93yq1"),

  tags: ["beach", "city", "food", "culture", "nature"],

  travelStyle: ["solo-friendly", "budget", "family", "easy"],

  gettingThere: [
    {
      from: "Hanoi",
      vehicle: "fly",
      duration: "1 hr 15 min",
      cost: "from 600,000 VND",
      notes: "Multiple daily flights on Vietnam Airlines, VietJet, and Bamboo. Da Nang airport is 3km from the city centre - taxi around 80,000 VND.",
    },
    {
      from: "Hanoi",
      vehicle: "train",
      duration: "14–16 hours",
      cost: "from 300,000 VND",
      notes: "Overnight sleeper. Da Nang station is central.",
    },
    {
      from: "Ho Chi Minh City",
      vehicle: "fly",
      duration: "1 hr 15 min",
      cost: "from 600,000 VND",
      notes: "Multiple daily flights on Vietnam Airlines, VietJet, and Bamboo.",
    },
    {
      from: "Ho Chi Minh City",
      vehicle: "train",
      duration: "16–18 hours",
      cost: "from 350,000 VND",
      notes: "Overnight sleeper. Book a berth for comfort.",
    },
    {
      from: "Hue",
      vehicle: "bus",
      duration: "3 hours",
      cost: "80,000–120,000 VND",
      notes: "Goes through Hai Van Pass on local buses - scenic but slower. The tunnel is faster but you miss the views.",
    },
    {
      from: "Hoi An",
      vehicle: "bus",
      duration: "45 minutes",
      cost: "30,000–50,000 VND",
      notes: "Bus No.1 runs frequently. Grab also works well.",
    },
  ],

  itineraries: [
    {
      duration: "2D1N",
      label: "Quick highlights",
      days: [
        {
          day: 1,
          title: "Beach + Son Tra Peninsula + Dragon Bridge",
          stops: [
            "my-khe-beach",
            "linh-ung-pagoda",
            "son-tra-peninsula",
            "dragon-bridge",
          ],
          notes: "Swim at My Khe before 7am with locals. Afternoon ride around Son Tra Peninsula. Dragon Bridge fire show Fri/Sat/Sun at 9pm - don't stand under the mouth.",
        },
        {
          day: 2,
          title: "Marble Mountains + Cham Museum",
          stops: [
            "marble-mountains",
            "cham-museum",
          ],
          notes: "Morning at the Marble Mountains - go early before tour groups arrive. Afternoon at the Museum of Cham Sculpture - largest collection of Cham artifacts in the world. Evening seafood on the beach.",
        },
      ],
    },
    {
      duration: "3D2N",
      label: "Full stay with day trip",
      days: [
        {
          day: 1,
          title: "Beach + Son Tra Peninsula",
          stops: [
            "my-khe-beach",
            "linh-ung-pagoda",
            "son-tra-peninsula",
          ],
          notes: "Early morning swim. Afternoon motorbike loop around Son Tra - quiet roads, great views, chance to spot red-shanked douc langurs.",
        },
        {
          day: 2,
          title: "Marble Mountains + Cham Museum + Dragon Bridge",
          stops: [
            "marble-mountains",
            "cham-museum",
            "dragon-bridge",
          ],
          notes: "Morning at the mountains. Afternoon at the museum. Evening fire show.",
        },
        {
          day: 3,
          title: "Day trip to Hoi An or Ba Na Hills",
          stops: [],
          notes: "Hoi An: 45 min by bus, easy day trip. Ba Na Hills: book tickets in advance, full day. Pick one - trying both in one day is rushed.",
        },
      ],
    },
  ],

  dayTrips: [
    {
      title: "Day trip: Ba Na Hills",
      summary:
        "Ba Na Hills is a mountain resort at 1,487m, about 25km west of Da Nang centre - a former French colonial hill station reinvented as a large theme park complex. It is home to the Golden Bridge, held up by two giant stone hands, and to a cable car that set a world record when it was built. Touristy and expensive, but spectacular on a clear day. Plan a full day.",
      gettingThere: [
        {
          from: "Da Nang",
          vehicle: "taxi",
          duration: "45 minutes",
          cost: "250,000–350,000 VND one way",
          notes: "No public bus. Take Grab or a private taxi - most hotels can also arrange a shuttle transfer.",
        },
        {
          from: "Hoi An",
          vehicle: "taxi",
          duration: "1.5 hours",
          cost: "400,000–600,000 VND one way",
          notes: "Many tour operators run combined Ba Na Hills + Hoi An day trips.",
        },
      ],
      plan: {
        stops: ["ba-na-cable-car", "golden-bridge", "french-village-ba-na"],
        notes: "Ride the 5.8km cable car up, see the Golden Bridge first before the queues form, then walk through the French Village at around 1,400m. Fantasy Park, an indoor amusement park, suits families. The complex is enormous - allow the whole day.",
      },
      cost: "All-inclusive ticket ~1,500,000 VND per person, covering the cable car, Golden Bridge, Fantasy Park and most attractions.",
      tips: [
        "Arrive at the 8am opening: fewer crowds and clearer weather than in the afternoon.",
        "Go in the morning - clouds often roll in by 2pm. From March to August the summit tends to be sunny while Da Nang below is sometimes overcast.",
        "Buy tickets online to skip the queues and get a small discount.",
        "Food inside the complex is overpriced - eat before or after.",
      ],
    },
  ],

  cost: {
    budget: "400,000–700,000 VND/day",
    midRange: "700,000–1,500,000 VND/day",
    comfortable: "1,500,000+ VND/day",
    notes: "Ba Na Hills ticket (~1,500,000 VND) not included. Seafood restaurants can push costs up quickly.",
  },

  bestTimeSummary: "March–May and September–October are best. Avoid October–November - Da Nang gets the heaviest rainfall in Central Vietnam.",

  recommendedStay: "2–3 days (or use as a base for the entire central region)",

  transport: "Grab or motorbike rental. Airport is only 3km from the city centre.",

  nearbyDestinations: ["hoi-an", "hue", "phong-nha-ke-bang"],

  coordinates: {
    lat: 16.0544,
    lng: 108.2022,
  },
  mapPriority: 1,
  mapRank: 1,
  mapZoom: 13,
}
