import { Destination } from "./types"
import { heroUrl } from "@/lib/cloudinary"

export const haGiangLoop: Destination = {
  slug: "ha-giang-loop",
  name: "Ha Giang Loop",
  province: "Ha Giang",
  provinceSlug: "ha-giang",
  region: "north",

  description:
    "The Ha Giang Loop is Vietnam's most dramatic motorbike route - a 350km circuit through the Dong Van Karst Plateau UNESCO Global Geopark, past sheer limestone passes, H'Mong villages, buckwheat fields, and the deepest river gorge in Southeast Asia. The town of Ha Giang is the starting point; the loop runs clockwise through Quan Ba, Yen Minh, Dong Van, and Meo Vac before returning via the eastern route through Du Gia. Do it by motorbike - that's the point.",

  tagline: "Vietnam's most epic road - 350km of karst, passes, and minority villages",

  heroImage: heroUrl("ha-giang-loop_e8myfw"),

  tags: ["motorcycling", "adventure", "nature", "culture", "trekking"],

  travelStyle: ["solo-friendly", "adventure", "challenging", "budget"],

  // ─── Getting There ───────────────────────────────────────
  gettingThere: [
    {
      from: "Hanoi",
      vehicle: "bus",
      duration: "6–7 hours",
      cost: "200,000–350,000 VND",
      notes: "Daily buses and limousine vans from My Dinh bus station to Ha Giang city. Limousine vans are more comfortable for the same price. Most drop off in the city centre near the motorbike rental shops.",
    },
    {
      from: "Hanoi",
      vehicle: "motorbike",
      duration: "8–10 hours",
      cost: "Petrol only",
      notes: "Experienced riders only. 300km via QL2. Good option if you want to ride your own bike the entire way.",
    },
  ],

  // ─── Itineraries ─────────────────────────────────────────
  itineraries: [
    {
      duration: "3D2N",
      label: "Fast loop - highlights only",
      days: [
        {
          day: 1,
          title: "Ha Giang → Quan Ba Heaven Gate → Yen Minh → Dong Van",
          distance: "~145km",
          stops: [
            "quan-ba-heaven-gate",
            "quan-ba-twin-mountains",
            "yen-minh-pine-forest",
            "dong-van-old-town",
          ],
          notes: "Leave before 7am. First stop is Quan Ba Heaven Gate at 1,500m - the valley and Twin Mountains below are the first real taste of Ha Giang scenery. Lunch in Yen Minh. Arrive Dong Van for sunset and evening in the old quarter.",
        },
        {
          day: 2,
          title: "Dong Van → Lung Cu → Ma Pi Leng Pass → Meo Vac",
          distance: "~80km",
          stops: [
            "lung-cu-flag-tower",
            "lo-lo-chai-village",
            "ma-pi-leng-pass",
            "nho-que-river",
          ],
          notes: "The best day of the loop. Lung Cu Flag Tower at Vietnam's northernmost point - China visible across the valley. Ma Pi Leng Pass is one of the most dramatic roads in Southeast Asia - 20km of switchbacks above the Nho Que River canyon. Optional boat trip on the Nho Que from Meo Vac (~150,000 VND/person). Ma Pi Leng Skywalk at sunset.",
        },
        {
          day: 3,
          title: "Meo Vac → Du Gia → Ha Giang",
          distance: "~150km",
          stops: [
            "du-gia-village",
            "du-gia-waterfall",
          ],
          notes: "Return route along QL34 following the Gam River - less dramatic than the outward route but still beautiful. Du Gia village for lunch. Du Gia Waterfall for a swim if weather allows. Back in Ha Giang by evening.",
        },
      ],
    },
    {
      duration: "4D3N",
      label: "Standard loop - recommended",
      days: [
        {
          day: 1,
          title: "Ha Giang → Quan Ba → Yen Minh",
          distance: "~100km",
          stops: [
            "quan-ba-heaven-gate",
            "quan-ba-twin-mountains",
            "yen-minh-pine-forest",
          ],
          notes: "Relaxed first day. Quan Ba Heaven Gate for the first jaw-dropping view. Yen Minh Pine Forest - an unexpected stretch of highland pine that changes the atmosphere completely. Optional: Lung Khuy Cave near Yen Minh.",
        },
        {
          day: 2,
          title: "Yen Minh → Lung Cu → Dong Van",
          distance: "~80km",
          stops: [
            "tham-ma-pass",
            "hmong-king-palace",
            "lung-cu-flag-tower",
            "lo-lo-chai-village",
            "dong-van-old-town",
          ],
          notes: "Tham Ma Pass before the plateau opens up. Hmong King Palace (Vuong Family Mansion) at Sa Phin - the most elaborate H'Mong building in Vietnam. Lung Cu Flag Tower at Vietnam's northernmost point. Lo Lo Chai village below the tower - the Lo Lo minority culture is found almost nowhere else. Dong Van Old Quarter for dinner and the night market.",
        },
        {
          day: 3,
          title: "Dong Van → Ma Pi Leng Pass → Meo Vac",
          distance: "~45km",
          stops: [
            "ma-pi-leng-pass",
            "nho-que-river",
          ],
          notes: "Shortest day in distance, longest in impact. Ma Pi Leng Pass at its own pace - stop at every viewpoint. Optional Nho Que river boat trip from Meo Vac. Happiness Road Museum in Meo Vac. Ma Pi Leng Skywalk at sunset - walk or ride the narrow path to the viewpoint above the canyon.",
        },
        {
          day: 4,
          title: "Meo Vac → Du Gia → Ha Giang",
          distance: "~150km",
          stops: [
            "du-gia-village",
            "du-gia-waterfall",
          ],
          notes: "Early start. QL34 return route along the Gam River. Du Gia is the most beautiful village on the eastern loop - Tay settlement in a river valley. Du Gia Waterfall for a swim. Back in Ha Giang by late afternoon.",
        },
      ],
    },
  ],

  // ─── Cost ────────────────────────────────────────────────
  cost: {
    budget: "400,000–700,000 VND/day",
    midRange: "700,000–1,200,000 VND/day",
    comfortable: "1,200,000–2,500,000 VND/day",
    notes: "Budget: self-ride rental bike + homestay + local food. Mid-range: Easy Rider (local driver takes you on their bike). Comfortable: Jeep tour with accommodation included. Border area permit required for all foreign visitors: ~250,000 VND.",
  },

  // ─── Practical ───────────────────────────────────────────
  bestTimeSummary: "Sep–Nov: golden rice terraces + buckwheat flowers in Oct–Nov. Mar–Apr: white mustard flowers, clear skies. Avoid Jun–Aug: heavy rain, landslide risk.",

  recommendedStay: "3–5 days for the full loop",

  transport: "Motorbike - the loop IS the destination. Semi-automatic recommended for beginners. Easy Rider (local driver) or Jeep tour if you don't have a valid IDP.",

  // ─── Nearby ──────────────────────────────────────────────
  nearbyDestinations: ["cao-bang", "sapa"],

  coordinates: {
    lat: 23.1167,
    lng: 105.05,
  },
}
