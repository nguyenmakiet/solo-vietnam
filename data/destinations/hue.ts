import { Destination } from "./types"
import { heroUrl } from "@/lib/cloudinary"

export const hue: Destination = {
  slug: "hue",
  name: "Hue",
  province: "Thua Thien Hue",
  provinceSlug: "hue",
  region: "central",

  description:
    "Hue is Vietnam's imperial city - the seat of the Nguyen Dynasty from 1802 to 1945, a UNESCO World Heritage Site of royal citadels, elaborate tombs, ancient pagodas, and the Perfume River. It has the most refined cuisine in the country and a slower pace than anywhere else in central Vietnam. Give it at least two days - one for the Imperial City, one for the tombs.",

  tagline: "Imperial palaces, royal tombs, and the best food in Vietnam",

  heroImage: heroUrl("hue-citadel_g9szq6"),

  tags: ["history", "culture", "heritage", "food", "pagoda"],

  travelStyle: ["solo-friendly", "budget", "family", "easy"],

  gettingThere: [
    {
      from: "Da Nang",
      vehicle: "train",
      duration: "2.5 hours",
      cost: "from 80,000 VND",
      notes: "Most scenic option - train hugs the coast past Lang Co Bay. Alternatively, ride or hire a car over the Hai Van Pass - one of Vietnam's best coastal drives.",
    },
    {
      from: "Hoi An",
      vehicle: "bus",
      duration: "3–3.5 hours",
      cost: "100,000–150,000 VND",
      notes: "Direct buses daily. If northbound, consider the Hai Van Pass route by motorbike or hired car.",
    },
    {
      from: "Hanoi",
      vehicle: "train",
      duration: "13–14 hours",
      cost: "from 250,000 VND",
      notes: "Overnight sleeper - book a berth well in advance.",
    },
    {
      from: "Hanoi",
      vehicle: "fly",
      duration: "1 hour 15 min",
      cost: "from 500,000 VND",
      notes: "Fly into Phu Bai Airport, 15km from city centre. Taxi ~150,000 VND.",
    },
  ],

  itineraries: [
    {
      duration: "2D1N",
      label: "Essential Hue",
      days: [
        {
          day: 1,
          title: "Imperial City + Thien Mu Pagoda + Perfume River",
          stops: [
            "imperial-city-hue",
            "thien-mu-pagoda",
            "perfume-river",
          ],
          notes: "Start early at the Imperial City - allow 2-3 hours minimum. Buy the combo ticket (cash only). Afternoon: motorbike or dragon boat along the Perfume River to Thien Mu Pagoda. Evening: bun bo Hue, then walk the riverside.",
        },
        {
          day: 2,
          title: "Royal Tombs",
          stops: [
            "khai-dinh-tomb",
            "tu-duc-tomb",
          ],
          notes: "Pick 2 tombs maximum - tomb fatigue is real. Khai Dinh is most dramatic (East-West fusion). Tu Duc is most poetic - lakes, pavilions, pine trees. Minh Mang is grandest if you want a third.",
        },
      ],
    },
    {
      duration: "3D2N",
      label: "Full Hue experience",
      days: [
        {
          day: 1,
          title: "Imperial City + Thien Mu Pagoda",
          stops: [
            "imperial-city-hue",
            "thien-mu-pagoda",
            "dong-ba-market",
          ],
          notes: "Full day at the citadel. Buy combo ticket on arrival - cash only. Evening: eat around Dong Ba Market - banh khoai, bun bo Hue, com hen.",
        },
        {
          day: 2,
          title: "Royal Tombs",
          stops: [
            "minh-mang-tomb",
            "tu-duc-tomb",
            "khai-dinh-tomb",
          ],
          notes: "Hire a motorbike or join a half-day tour. Start with Minh Mang (furthest south), work back towards Khai Dinh. All three doable by motorbike starting at 8am.",
        },
        {
          day: 3,
          title: "La Vang Sanctuary + Truong Son National Cemetery",
          stops: [
            "la-vang-sanctuary",
            "truong-son-national-cemetery",
          ],
          notes: "La Vang is 60km northwest - Vietnam's most important Catholic pilgrimage site. Truong Son Cemetery is one of the most moving places in Vietnam - 10,000+ soldiers from the Ho Chi Minh Trail. Or skip and do a cooking class + dragon boat instead.",
        },
      ],
    },
  ],

  cost: {
    budget: "300,000–600,000 VND/day",
    midRange: "600,000–1,200,000 VND/day",
    comfortable: "1,200,000+ VND/day",
    notes: "Combo ticket (Imperial City + 3 tombs): 530,000 VND. Cash only at all ticket booths.",
  },

  bestTimeSummary: "Jan–Apr and Sep are best. Avoid Oct–Nov - Hue gets the heaviest rainfall of any city in Vietnam.",

  recommendedStay: "2–3 days",

  transport: "Motorbike or bicycle for tombs and pagodas - they are spread out and not walkable. Dragon boat on the Perfume River is worth doing once. Walking works for the citadel area.",

  nearbyDestinations: ["da-nang", "hoi-an", "phong-nha-ke-bang"],

  coordinates: {
    lat: 16.4637,
    lng: 107.5909,
  },
}
