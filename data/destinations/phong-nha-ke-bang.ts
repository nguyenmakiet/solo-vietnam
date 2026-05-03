import { Destination } from "./types"
import { heroUrl } from "@/lib/cloudinary"

export const phongNhaKeBang: Destination = {
  slug: "phong-nha-ke-bang",
  name: "Phong Nha – Ke Bang",
  province: "Quang Binh",
  provinceSlug: "quang-binh",
  region: "central",

  description:
    "Phong Nha-Ke Bang National Park is Vietnam's cave capital - a UNESCO World Heritage Site of 400-million-year-old karst hiding the world's largest cave system, including Son Doong Cave. Most visitors come for Paradise Cave, Phong Nha Cave (by boat), and Dark Cave's zip line and mud bath. The jungle village of Son Trach is the base - small, friendly, and still feels like an actual place rather than a tourist town.",

  tagline: "The world's largest caves are underneath this jungle",

  heroImage: heroUrl("phong-nha-ke-bang_fgbd2u"),

  tags: ["cave", "nature", "adventure", "trekking"],

  travelStyle: ["solo-friendly", "adventure", "budget"],

  gettingThere: [
    {
      from: "Hue",
      vehicle: "train",
      duration: "3 hours",
      cost: "from 100,000 VND",
      notes: "To Dong Hoi station (50km south of Son Trach). Taxi or bus from Dong Hoi to Son Trach: 150,000–200,000 VND.",
    },
    {
      from: "Hue",
      vehicle: "bus",
      duration: "3.5 hours",
      cost: "100,000–150,000 VND",
      notes: "Direct buses to Dong Hoi. Some run direct to Son Trach.",
    },
    {
      from: "Hanoi",
      vehicle: "train",
      duration: "9 hours",
      cost: "from 200,000 VND",
      notes: "Overnight train to Dong Hoi. Most convenient from Hanoi.",
    },
    {
      from: "Da Nang",
      vehicle: "bus",
      duration: "4 hours",
      cost: "150,000–200,000 VND",
    },
  ],

  itineraries: [
    {
      duration: "2D1N",
      label: "Core caves",
      days: [
        {
          day: 1,
          title: "Phong Nha Cave + Dark Cave",
          stops: [
            "phong-nha-cave",
            "dark-cave",
          ],
          notes: "Phong Nha Cave by boat - 1.5 hours on the Son underground river, stalactites, Buddhist altars. Dark Cave: zip line across the river, swim through 400m of darkness, mud bath at the end. Best fun you'll have in a cave anywhere.",
        },
        {
          day: 2,
          title: "Paradise Cave",
          stops: [
            "paradise-cave",
          ],
          notes: "Paradise Cave is 30km from Son Trach. 1km of boardwalk through a cathedral-scale cave - one of the most visually spectacular in the world. Go early before the tour buses arrive. Mooc Spring (swimming hole in the jungle) on the way back.",
        },
      ],
    },
    {
      duration: "3D2N",
      label: "Full cave experience",
      days: [
        {
          day: 1,
          title: "Phong Nha Cave + Dark Cave",
          stops: [
            "phong-nha-cave",
            "dark-cave",
          ],
          notes: "Classic first day. Book Dark Cave in advance during peak season.",
        },
        {
          day: 2,
          title: "Paradise Cave + Mooc Spring",
          stops: [
            "paradise-cave",
            "mooc-spring",
          ],
          notes: "Full day at Paradise Cave and surroundings. Mooc Spring for swimming in the afternoon.",
        },
        {
          day: 3,
          title: "Hang En or jungle trek",
          stops: [
            "hang-en",
          ],
          notes: "Hang En is the world's third largest cave - requires a 2-day overnight trek (book weeks in advance, 4,500,000–6,000,000 VND). Or: rent a motorbike and explore the Ho Chi Minh Road through the jungle. Duck Stop hostel arranges excellent local tours.",
        },
      ],
    },
  ],

  cost: {
    budget: "400,000–700,000 VND/day",
    midRange: "700,000–1,500,000 VND/day",
    comfortable: "1,500,000+ VND/day",
    notes: "Phong Nha Cave: 150,000 VND. Paradise Cave: 250,000 VND. Dark Cave: 450,000 VND. Son Doong Cave: ~70,000,000 VND per person (book 1 year ahead). Hang En overnight: 4,500,000–6,000,000 VND.",
  },

  bestTimeSummary: "Feb–Aug dry season - caves open and accessible. Sep–Nov: floods can close caves and some trails. Avoid heavy rain season.",

  recommendedStay: "2–4 days",

  transport: "Motorbike or bicycle from Son Trach village. Most cave tour operators include transport. Dark Cave and Paradise Cave require separate tickets and transport.",

  nearbyDestinations: ["hue", "da-nang", "ninh-binh"],

  coordinates: {
    lat: 17.5553,
    lng: 106.2833,
  },
}
