import { Destination } from "./types"
import { heroUrl } from "@/lib/cloudinary"

export const sapa: Destination = {
  slug: "sapa",
  name: "Sapa",
  province: "Lao Cai",
  provinceSlug: "lao-cai",
  region: "north",

  description:
    "Sapa is Vietnam's trekking capital - a former French hill station at 1,600m surrounded by the most dramatic rice terraces in Southeast Asia, H'Mong and Red Dao minority villages, and Fansipan, Indochina's highest peak. The town itself has become heavily commercialised, but the valleys below are still worth every step. Trek with a local guide, stay in a village homestay, and go early before the day-trip crowds arrive.",

  tagline: "Misty mountains and rice terraces that go on forever",

  heroImage: heroUrl("sapa_yxtsoq"),

  tags: ["mountain", "nature", "trekking", "culture"],

  travelStyle: ["solo-friendly", "adventure", "budget", "challenging"],

  // ─── Getting There ───────────────────────────────────────
  gettingThere: [
    {
      from: "Hanoi",
      vehicle: "bus",
      duration: "5–6 hours",
      cost: "150,000–250,000 VND",
      notes: "Limousine vans run direct from Hanoi Old Quarter and My Dinh to Sapa town. More comfortable than the train for most travelers.",
    },
    {
      from: "Hanoi",
      vehicle: "train",
      duration: "8–9 hours to Lao Cai + 1 hour transfer",
      cost: "from 200,000 VND",
      notes: "Overnight train to Lao Cai station, then 1-hour bus or taxi up to Sapa. Scenic but slower. Book lower berth for a more stable ride.",
    },
  ],

  // ─── Itineraries ─────────────────────────────────────────
  itineraries: [
    {
      duration: "2D1N",
      label: "Quick highlights",
      days: [
        {
          day: 1,
          title: "Cat Cat Village + Fansipan cable car",
          stops: [
            "cat-cat-village",
            "fansipan",
            "muong-hoa-valley",
          ],
          notes: "Cat Cat Village is the closest and easiest - 45 min walk from town (150,000 VND entry). Touristy but still worth it. Afternoon: Fansipan cable car (book in advance, ~750,000 VND). Views depend entirely on weather - clear days are rare, go early.",
        },
        {
          day: 2,
          title: "Muong Hoa Valley trek - Lao Chai + Ta Van villages",
          stops: [
            "muong-hoa-valley",
            "ta-van-village",
          ],
          notes: "The best trek from Sapa - 10km through rice terraces along Muong Hoa stream to Lao Chai (Black H'Mong) and Ta Van (Giay) villages. Hire a local guide (100,000–150,000 VND) - they know the trail and the villages. Depart by 7am before the heat.",
        },
      ],
    },
    {
      duration: "3D2N",
      label: "Full trekking experience",
      days: [
        {
          day: 1,
          title: "Arrive + Cat Cat Village + Sapa town",
          stops: [
            "cat-cat-village",
          ],
          notes: "Arrive morning from Hanoi. Drop bags, explore Sapa town - stone church, lake, local market. Afternoon: Cat Cat Village walk. Evening: Sapa Night Market for local food and textiles.",
        },
        {
          day: 2,
          title: "Muong Hoa Valley full day trek",
          stops: [
            "muong-hoa-valley",
            "ta-van-village",
          ],
          notes: "Full day guided trek through Muong Hoa Valley to Lao Chai and Ta Van. 10–14km depending on route. Lunch in a village. Option to stay overnight in Ta Van homestay instead of returning to Sapa.",
        },
        {
          day: 3,
          title: "Fansipan + O Quy Ho Pass",
          stops: [
            "fansipan",
            "o-quy-ho-pass",
          ],
          notes: "Morning: Fansipan cable car (book the night before). O Quy Ho Pass (Heaven's Gate) is Vietnam's highest mountain pass at 2,090m - 30 min by motorbike from Sapa, best at sunrise or sunset. Depart afternoon back to Hanoi.",
        },
      ],
    },
    {
      duration: "4D3N",
      label: "Full stay with village homestay",
      days: [
        {
          day: 1,
          title: "Arrive + Cat Cat Village",
          stops: [
            "cat-cat-village",
          ],
          notes: "Arrive, settle in, gentle afternoon walk to Cat Cat.",
        },
        {
          day: 2,
          title: "Muong Hoa Valley trek + Ta Van homestay",
          stops: [
            "muong-hoa-valley",
            "ta-van-village",
          ],
          notes: "Full day trek, stay overnight in Ta Van village homestay. Family dinner, rice wine, no phone signal. The real Sapa experience.",
        },
        {
          day: 3,
          title: "Ta Phin Village + Red Dao village",
          stops: [
            "ta-phin-village",
          ],
          notes: "Morning: explore Ta Van at dawn before day-trippers arrive. Return to Sapa by midday. Afternoon: Ta Phin village (Red Dao community, famous for herbal baths). Different minority culture from H'Mong - worth the contrast.",
        },
        {
          day: 4,
          title: "Fansipan + O Quy Ho Pass + depart",
          stops: [
            "fansipan",
            "o-quy-ho-pass",
          ],
          notes: "Early Fansipan cable car. O Quy Ho Pass on the way back to Hanoi if doing the bus route.",
        },
      ],
    },
  ],

  // ─── Cost ────────────────────────────────────────────────
  cost: {
    budget: "300,000–600,000 VND/day",
    midRange: "600,000–1,200,000 VND/day",
    comfortable: "1,200,000+ VND/day",
    notes: "Fansipan cable car ~750,000 VND. Local guide ~150,000–200,000 VND/day. Village homestay with meals ~200,000–400,000 VND/night. Cat Cat Village entry 150,000 VND.",
  },

  // ─── Practical ───────────────────────────────────────────
  bestTimeSummary: "Sep–Nov golden rice terraces, clear skies. Mar–May green rice, mild weather. Avoid Jun–Aug heavy rain and landslides. Dec–Feb cold and foggy but uncrowded.",

  recommendedStay: "2–4 days",

  transport: "Walking for town and nearby villages. Motorbike rental for passes and further destinations. Grab taxis available but slow in the mountains.",

  // ─── Nearby ──────────────────────────────────────────────
  nearbyDestinations: ["ha-giang-loop", "ha-noi"],

  coordinates: {
    lat: 22.3364,
    lng: 103.8438,
  },
}
