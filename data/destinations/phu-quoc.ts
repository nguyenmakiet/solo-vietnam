import { Destination } from "./types"
import { heroUrl } from "@/lib/cloudinary"

export const phuQuoc: Destination = {
  slug: "phu-quoc",
  name: "Phu Quoc",
  updatedAt: "2026-10-20",
  province: "Kien Giang",
  provinceSlug: "kien-giang",
  region: "south",

  description:
    "Phu Quoc is Vietnam's largest island and its easiest beach escape: clear water, seafood straight off the boats, and roads quiet enough to explore by motorbike. The island splits into three parts - the north with Rach Vem's starfish beach and the big theme parks, Duong Dong town in the middle with the night market and sunsets, and the south with Sao and Khem beaches, the Hon Thom cable car and the An Thoi islands. Base yourself in Duong Dong and take one area a day.",

  tagline: "Starfish beaches, island boats and sunsets on Vietnam's biggest island",

  heroImage: heroUrl("khem-beach-phu-quoc_zvi3hk"),

  tags: ["beach", "island", "food", "nature"],

  travelStyle: ["solo-friendly", "budget", "luxury", "family", "easy"],

  gettingThere: [
    {
      from: "Ho Chi Minh City",
      vehicle: "fly",
      duration: "45 minutes",
      cost: "from 600,000 VND",
      notes: "Multiple daily flights. Most convenient option. Airport is in the south of the island.",
    },
    {
      from: "Hanoi",
      vehicle: "fly",
      duration: "2 hours",
      cost: "from 900,000 VND",
    },
    {
      from: "Rach Gia",
      vehicle: "ferry",
      duration: "2.5 hours",
      cost: "200,000–250,000 VND",
      notes: "Superdong or Phu Quoc Express ferry. Slower but scenic. Good if you want to avoid flying.",
    },
    {
      from: "Ha Tien",
      vehicle: "ferry",
      duration: "1-1.5 hours",
      cost: "150,000–200,000 VND",
      notes: "Closest mainland port. Good option if coming overland from Cambodia.",
    },
  ],

  itineraries: [
    {
      duration: "2D1N",
      label: "Island highlights",
      days: [
        {
          day: 1,
          title: "South: Ho Quoc Pagoda, Khem and Sao beaches",
          stops: ["ho-quoc-pagoda", "khem-beach", "sao-beach", "phu-quoc-night-market"],
          notes: "Duong Dong to Bai Sao is about 26km, 40min-1h by motorbike, with Ho Quoc Pagoda on the way - go early before the heat. Khem and Sao are a few minutes apart and both free to access. Back to Duong Dong for the night market.",
        },
        {
          day: 2,
          title: "East and north: Ham Ninh and Rach Vem starfish beach",
          stops: ["ham-ninh-fishing-village", "rach-vem-fishing-village"],
          notes: "Morning at Ham Ninh for the pier and fresh crab. Ham Ninh to Rach Vem is about 31km, 40min-1h. Rach Vem back to Duong Dong is about 20km, 30min.",
        },
      ],
    },
    {
      duration: "3D2N",
      label: "One area a day",
      days: [
        {
          day: 1,
          title: "Duong Dong: sunset and night market",
          stops: ["phu-quoc-night-market"],
          notes: "Settle in around Duong Dong or Long Beach. Sunset at Dinh Cau rock, then dinner at the night market.",
        },
        {
          day: 2,
          title: "South: beaches, Hon Thom cable car, Sunset Town",
          stops: ["ho-quoc-pagoda", "khem-beach", "sao-beach", "hon-thom-cable-car"],
          notes: "Ho Quoc Pagoda first thing, then Khem and Sao beaches and lunch at Sao. The cable car runs in the afternoon from 13:30 and starts at Sunset Town, so stay on for sunset there. Duong Dong to Bai Sao is about 26km, 40min-1h.",
        },
        {
          day: 3,
          title: "East and north: Ham Ninh and Rach Vem",
          stops: ["ham-ninh-fishing-village", "rach-vem-fishing-village"],
          notes: "Ham Ninh in the morning, then Ham Ninh to Rach Vem is about 31km, 40min-1h. Rach Vem back to Duong Dong is about 20km, 30min.",
        },
      ],
    },
    {
      duration: "4D3N",
      label: "Add the An Thoi islands",
      days: [
        {
          day: 1,
          title: "Duong Dong: sunset and night market",
          stops: ["phu-quoc-night-market"],
          notes: "Settle in around Duong Dong or Long Beach. Sunset at Dinh Cau rock, then dinner at the night market.",
        },
        {
          day: 2,
          title: "South: beaches, Hon Thom cable car, Sunset Town",
          stops: ["ho-quoc-pagoda", "khem-beach", "sao-beach", "hon-thom-cable-car"],
          notes: "Ho Quoc Pagoda first thing, then Khem and Sao beaches and lunch at Sao. The cable car runs in the afternoon from 13:30 and starts at Sunset Town, so stay on for sunset there.",
        },
        {
          day: 3,
          title: "East and north: Ham Ninh and Rach Vem",
          stops: ["ham-ninh-fishing-village", "rach-vem-fishing-village"],
          notes: "Ham Ninh in the morning, then on to Rach Vem's starfish beach, about 31km, 40min-1h.",
        },
        {
          day: 4,
          title: "Boat trip around the An Thoi islands",
          stops: [],
          notes: "Worth it if you have the time: a boat tour from An Thoi to the small southern islands for snorkelling. Prefer theme parks? Swap this day for Vinpearl Safari and VinWonders in the north, and book Safari a day ahead.",
        },
      ],
    },
  ],

  cost: {
    budget: "400,000–800,000 VND/day",
    midRange: "800,000–2,000,000 VND/day",
    comfortable: "2,000,000+ VND/day",
    notes: "Island hopping tour: 300,000–500,000 VND. Motorbike rental: 100,000–150,000 VND/day. Seafood at Night Market: 100,000–300,000 VND/meal.",
  },

  bestTimeSummary: "Nov–Apr dry season is the main window: calm seas on the west coast (Long Beach, Duong Dong) and the best time for island tours and snorkelling. May–Oct the southwest monsoon makes the west coast rough and murky, but the east and south beaches (Bai Sao, Bai Khem) stay calm and clear, with far fewer crowds.",
  bestMonths: [1, 2, 3, 4, 11, 12],

  recommendedStay: "2–4 days",

  transport: "Motorbike rental essential for getting around the island. Grab available but limited outside main town. Bicycle for short distances near Long Beach.",

  nearbyDestinations: ["mekong-delta", "con-dao", "ho-chi-minh-city"],

  coordinates: {
    lat: 10.2899,
    lng: 103.984,
  },
  mapPriority: 1,
  mapRank: 5,
  mapZoom: 12,
}
