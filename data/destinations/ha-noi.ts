import { Destination } from "./types"
import { heroUrl } from "@/lib/cloudinary"

export const haNoi: Destination = {
  slug: "ha-noi",
  name: "Hanoi",
  province: "Hanoi",
  provinceSlug: "ha-noi",
  region: "north",

  description:
    "Hanoi is Vietnam's capital and its most historically layered city - a thousand-year-old metropolis where French colonial boulevards run alongside ancient pagodas, egg coffee is consumed on tiny plastic stools, and the Old Quarter's 36 streets still trade in the same goods they have for centuries. Less polished than Ho Chi Minh City, slower to reveal itself, but more rewarding the longer you stay.",

  tagline: "Ancient temples, street food, and a city that never slows down",

  heroImage: heroUrl("ha-noi_mcvdm9"),

  tags: ["history", "culture", "food", "city", "heritage"],

  travelStyle: ["solo-friendly", "budget", "family"],

  gettingThere: [
    {
      from: "Ho Chi Minh City",
      vehicle: "fly",
      duration: "2 hours",
      cost: "from 800,000 VND",
      notes: "Fly into Noi Bai Airport. Express bus 86 to city centre 45 min (45,000 VND). Taxi ~250,000–350,000 VND.",
    },
    {
      from: "Da Nang",
      vehicle: "fly",
      duration: "1 hour 15 min",
      cost: "from 500,000 VND",
    },
    {
      from: "Da Nang",
      vehicle: "train",
      duration: "14–16 hours",
      cost: "from 300,000 VND",
      notes: "Overnight sleeper - book a berth. Arrives Hanoi morning.",
    },
    {
      from: "Hue",
      vehicle: "train",
      duration: "13–14 hours",
      cost: "from 250,000 VND",
      notes: "Overnight sleeper.",
    },
    {
      from: "Sapa",
      vehicle: "bus",
      duration: "5–6 hours",
      cost: "150,000–250,000 VND",
      notes: "Limousine vans run direct from Sapa town. Most drop off in the Old Quarter.",
    },
    {
      from: "Ha Giang",
      vehicle: "bus",
      duration: "6–7 hours",
      cost: "200,000–350,000 VND",
      notes: "Daily buses and limousine vans to My Dinh bus station.",
    },
  ],

  itineraries: [
    {
      duration: "2D1N",
      label: "Quick highlights",
      days: [
        {
          day: 1,
          title: "Old Quarter + Hoan Kiem Lake + Hoa Lo Prison",
          stops: [
            "hanoi-old-quarter",
            "hoan-kiem-lake",
            "ngoc-son-temple",
            "hanoi-st-josephs-cathedral",
            "hoa-lo-prison",
            "ta-hien-street",
          ],
          notes: "Start at Hoan Kiem Lake at dawn before the crowds. Walk the Old Quarter streets. Hoa Lo Prison takes about 1 hour. Evening beer on Ta Hien Street.",
        },
        {
          day: 2,
          title: "Ho Chi Minh Complex + Temple of Literature + Train Street",
          stops: [
            "ho-chi-minh-mausoleum-complex",
            "one-pillar-pagoda",
            "temple-of-literature",
            "hanoi-train-street",
          ],
          notes: "Mausoleum opens 7:30am, closed Mon & Fri. Temple of Literature best in the morning. Train Street - check the schedule, only a few trains daily.",
        },
      ],
    },
    {
      duration: "3D2N",
      label: "Full city experience",
      days: [
        {
          day: 1,
          title: "Old Quarter + Hoan Kiem Lake + French Quarter",
          stops: [
            "hanoi-old-quarter",
            "hoan-kiem-lake",
            "ngoc-son-temple",
            "hanoi-st-josephs-cathedral",
            "ta-hien-street",
          ],
          notes: "Arrive, drop bags, walk. Hoan Kiem Lake at golden hour. St Joseph's Cathedral area for coffee. Evening beer on Ta Hien.",
        },
        {
          day: 2,
          title: "Ho Chi Minh Complex + Temple of Literature + Hoa Lo Prison",
          stops: [
            "ho-chi-minh-mausoleum-complex",
            "one-pillar-pagoda",
            "temple-of-literature",
            "hoa-lo-prison",
          ],
          notes: "Start early at the mausoleum (closes 10:30am, closed Mon & Fri). Hoa Lo Prison in the afternoon.",
        },
        {
          day: 3,
          title: "West Lake + Train Street + day trip option",
          stops: [
            "west-lake",
            "tran-quoc-pagoda",
            "hanoi-train-street",
          ],
          notes: "Morning walk around West Lake. Train Street for lunch. Afternoon: day trip to Ninh Binh or Ha Long, or explore Dong Xuan Market.",
        },
      ],
    },
    {
      duration: "4D3N",
      label: "Full stay with day trip",
      days: [
        {
          day: 1,
          title: "Old Quarter + Hoan Kiem Lake",
          stops: [
            "hanoi-old-quarter",
            "hoan-kiem-lake",
            "ngoc-son-temple",
            "hanoi-st-josephs-cathedral",
            "ta-hien-street",
          ],
          notes: "Arrive and orient. Evening on Ta Hien Street.",
        },
        {
          day: 2,
          title: "Ho Chi Minh Complex + Temple of Literature + Hoa Lo Prison",
          stops: [
            "ho-chi-minh-mausoleum-complex",
            "one-pillar-pagoda",
            "temple-of-literature",
            "hoa-lo-prison",
          ],
          notes: "Full history day. Start early at the mausoleum.",
        },
        {
          day: 3,
          title: "Day trip to Ninh Binh or Ha Long Bay",
          stops: [],
          notes: "Ninh Binh: 2 hours by bus or train, doable as a day trip. Ha Long Bay: better as overnight cruise - book in advance.",
        },
        {
          day: 4,
          title: "West Lake + Train Street + markets",
          stops: [
            "west-lake",
            "tran-quoc-pagoda",
            "hanoi-train-street",
            "dong-xuan-market",
          ],
          notes: "Slow morning at West Lake. Train Street. Dong Xuan Market before departure.",
        },
      ],
    },
  ],

  cost: {
    budget: "300,000–600,000 VND/day",
    midRange: "600,000–1,500,000 VND/day",
    comfortable: "1,500,000+ VND/day",
    notes: "Street food meals from 30,000–80,000 VND. Ha Long Bay cruise adds 1,500,000–5,000,000 VND if included.",
  },

  bestTimeSummary: "Oct–Apr cooler and drier. Sep–Nov ideal. Avoid Jan–Feb (cold, drizzly). Jun–Aug hot and humid.",

  recommendedStay: "2–4 days",

  transport: "Walk in the Old Quarter. Grab for longer distances. Avoid motorbike rental unless experienced - traffic is intense.",

  nearbyDestinations: ["ha-long", "ninh-binh", "sapa", "ha-giang-loop", "cao-bang"],

  coordinates: {
    lat: 21.0285,
    lng: 105.8542,
  },
}
