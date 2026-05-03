import { Destination } from "./types"
import { heroUrl } from "@/lib/cloudinary"

export const phuQuoc: Destination = {
  slug: "phu-quoc",
  name: "Phu Quoc",
  province: "Kien Giang",
  provinceSlug: "kien-giang",
  region: "south",

  description:
    "Phu Quoc is Vietnam's largest island and its best beach destination - crystal clear water, fresh seafood straight off the boat, and a pace that makes every other city in Vietnam feel frantic. The north is mostly national park. The south has been heavily developed with resorts and theme parks. Stay in the middle or north for the real island feel. Come before May when the southwest monsoon turns the sea rough for five months.",

  tagline: "Vietnam's island paradise - before it gets too developed",

  heroImage: heroUrl("phu-quoc_w1h8jq"),

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
      duration: "1 hour",
      cost: "150,000–200,000 VND",
      notes: "Closest mainland port. Good option if coming overland from Cambodia.",
    },
  ],

  itineraries: [
    {
      duration: "2D1N",
      label: "Beach and seafood",
      days: [
        {
          day: 1,
          title: "Sao Beach + Long Beach + Night Market",
          stops: [
            "sao-beach",
            "phu-quoc-night-market",
          ],
          notes: "Sao Beach is the most beautiful on the island - white sand, turquoise water, far fewer people than Long Beach. Evening: Phu Quoc Night Market for grilled seafood, coconut ice cream, and cold beer.",
        },
        {
          day: 2,
          title: "Northern islands snorkeling + Phu Quoc National Park",
          stops: [
            "phu-quoc-national-park",
          ],
          notes: "Morning: boat tour to the northern islands (An Thoi or Tho Chu archipelago) for snorkeling - best coral in the area. Afternoon: motorbike through Phu Quoc National Park in the north - pepper farms, fish sauce factories, quiet roads.",
        },
      ],
    },
    {
      duration: "3D2N",
      label: "Full island exploration",
      days: [
        {
          day: 1,
          title: "Sao Beach + Long Beach sunset",
          stops: [
            "sao-beach",
          ],
          notes: "Arrive, head straight to Sao Beach. Motorbike back along the coast for Long Beach sunset. Night Market for dinner.",
        },
        {
          day: 2,
          title: "Island hopping + snorkeling",
          stops: [
            "ham-ninh-fishing-village",
          ],
          notes: "Full day boat tour to surrounding islands. Hon Thom cable car is worth it for the views. Ham Ninh fishing village for fresh seafood lunch on the pier - much better and cheaper than resort restaurants.",
        },
        {
          day: 3,
          title: "North island + pepper farms + fish sauce factory",
          stops: [
            "phu-quoc-national-park",
          ],
          notes: "Rent a motorbike and explore the north - national park, pepper plantations, deserted beaches. Rach Vem fishing village has the floating houses. Vinpearl Safari if traveling with family.",
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

  bestTimeSummary: "Nov–Apr dry season, calm seas. May–Oct southwest monsoon - rough seas, some beaches unsafe for swimming.",

  recommendedStay: "2–4 days",

  transport: "Motorbike rental essential for getting around the island. Grab available but limited outside main town. Bicycle for short distances near Long Beach.",

  nearbyDestinations: ["ha-tien", "nam-du", "con-dao"],

  coordinates: {
    lat: 10.2899,
    lng: 103.984,
  },
}
