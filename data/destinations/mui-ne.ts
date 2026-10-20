import { Destination, FaqItem, MapWaypoint } from "./types"
import { heroUrl } from "@/lib/cloudinary"

// Map-only waypoints for itinerary mapPoints (places without a location page)
const WP = {
  ongDia: { name: "Ong Dia rocks", lat: 10.936709, lng: 108.184215 },
  honRom: { name: "Hon Rom", lat: 10.954022, lng: 108.334922 },
  windFarm: { name: "Mui Ne wind farm", lat: 10.980865, lng: 108.300133 },
  phanThiet: { name: "Phan Thiet", lat: 10.9297024, lng: 108.1001314 },
  phanThietMkt: { name: "Phan Thiet market", lat: 10.925821, lng: 108.09651 },
} satisfies Record<string, MapWaypoint>

export const muiNe: Destination = {
  slug: "mui-ne",
  name: "Mui Ne",
  updatedAt: "2026-10-20",
  province: "Binh Thuan",
  provinceSlug: "binh-thuan",
  region: "south",

  description:
    "Mui Ne is the beach strip just east of Phan Thiet city, about 4 hours from Ho Chi Minh City. It's known for red and white sand dunes, the Fairy Stream walk past red sand cliffs, a working fishing harbour, and some of the most consistent wind in Vietnam, which has made it one of Southeast Asia's best-known kite-surfing spots. Beaches vary a lot along the strip - some stretches have lost sand to erosion - so check photos of your hotel's beach before booking. Come for the dunes, the wind and the seafood, and take it slow: 3 days is the sweet spot.",

  tagline: "Red dunes, white dunes, and the wind that never stops",

  heroImage: heroUrl("phan-thiet_lf0web"),

  tags: ["beach", "nature", "adventure", "sports"],

  travelStyle: ["solo-friendly", "budget", "adventure"],

  gettingThere: [
    {
      from: "Ho Chi Minh City",
      vehicle: "bus",
      duration: "3.5-5 hours",
      cost: "200,000-480,000 VND",
      notes: "Sleeper buses (Phuong Trang and others) and limousine vans via the expressway, leaving from Mien Tay, Mien Dong or company offices in District 1. Most drop off in Phan Thiet or along the Mui Ne strip - tell the driver your hotel. A private car takes about 3-4 hours.",
    },
    {
      from: "Ho Chi Minh City",
      vehicle: "train",
      duration: "3.5-4.5 hours",
      cost: "from 100,000 VND",
      notes: "Direct SPT train to Phan Thiet station (about 4 hours, 20-25km from Mui Ne, taxi 150,000-250,000 VND) - not daily in low season. Otherwise trains stop at Binh Thuan (Muong Man) station, 35-40km from Mui Ne, taxi 300,000-450,000 VND.",
    },
    {
      from: "Da Lat",
      vehicle: "bus",
      duration: "4-5 hours",
      cost: "100,000-150,000 VND",
      notes: "Popular combo route - Da Lat highlands to coast.",
    },
  ],

  itineraries: [
    {
      duration: "2D1N",
      label: "Quick dunes trip",
      days: [
        {
          day: 1,
          title: "Arrival + Fairy Stream + Red Sand Dunes sunset",
          stops: ["fairy-stream", "red-sand-dunes"],
          notes: "Arrive and check in on the strip. Late afternoon: Fairy Stream (Suoi Tien) in Ham Tien - wade barefoot up a shallow stream past red and white sand cliffs, about 30 minutes each way, ankle-deep in the dry season. Then Red Sand Dunes for sunset, about 10 minutes by motorbike - arrive by 4:30pm. Seafood on the beach road for dinner.",
        },
        {
          day: 2,
          title: "White Sand Dunes sunrise + Mui Ne fishing village",
          stops: ["white-sand-dunes", "mui-ne-fishing-village"],
          notes: "Sunrise jeep tour (pickup around 4:30am) or ride yourself - about 25-30km northeast of the strip, about 45min by motorbike. ATVs on the dunes are optional and pricey. On the way back, stop at Mui Ne fishing village while boats are still unloading - it's busiest 5-8am. Leave in the afternoon. This works, but it's rushed - 3D2N fits Mui Ne better.",
        },
      ],
    },
    {
      duration: "3D2N",
      label: "Slow dunes, sea and Phan Thiet food",
      days: [
        {
          day: 1,
          title: "Arrival + Fairy Stream + Red Sand Dunes sunset",
          stops: ["fairy-stream", "red-sand-dunes"],
          notes: "Arrive and check in. Fairy Stream in the late afternoon when it's cooler, then sunset at the Red Sand Dunes, about 10 minutes away by motorbike. If you'd rather sit by the sea, the Ong Dia rocks in Ham Tien are another good sunset spot. Evening seafood on the beach road.",
          mapPoints: ["fairy-stream", "red-sand-dunes", WP.ongDia],
        },
        {
          day: 2,
          title: "Jeep tour to the White Sand Dunes + slow afternoon + Hon Rom",
          stops: ["white-sand-dunes", "mui-ne-fishing-village"],
          notes: "Sunrise jeep tour, about 4:30-8:30am: White Sand Dunes, Mui Ne fishing village, the coast road and the windmill fields, usually with Red Sand Dunes and Fairy Stream included. A whole jeep is around 600,000 VND for up to 6 people - easy to share with others from your hostel. Afternoon free: nap, pool, or a kite lesson - the wind is strongest Nov-Mar. Evening: ride out to Hon Rom at the far end of the strip for quieter beaches and cheap grilled seafood.",
          mapPoints: ["white-sand-dunes", WP.windFarm, "mui-ne-fishing-village", WP.honRom],
        },
        {
          day: 3,
          title: "Po Sah Inu + Phan Thiet food + optional Ke Ga",
          stops: ["po-sah-inu-cham-towers", "ke-ga-lighthouse"],
          notes: "Ride toward Phan Thiet. Po Sah Inu Cham Towers sit on Ba Nai hill, about 7km before the city centre (7am-5pm). Then eat in Phan Thiet: herring rice-paper rolls (cha cuon ca trich), raw mackerel salad (goi ca mai) and soft rice-paper rolls (banh trang cuon) around the market. With time to spare, continue to Ke Ga, about 30km south of Phan Thiet city (45-50km from Mui Ne, about 1h15-1h30 by motorbike) - the French lighthouse, built in 1899, stands on a small islet just offshore; check locally for boats and whether the tower is open to climb. Buses back to HCMC leave from Phan Thiet.",
          mapPoints: ["po-sah-inu-cham-towers", WP.phanThietMkt, "ke-ga-lighthouse", WP.phanThiet],
        },
      ],
    },
  ],

  cost: {
    budget: "350,000-600,000 VND/day",
    midRange: "600,000-1,200,000 VND/day",
    comfortable: "1,200,000+ VND/day",
    notes: "Dorm beds from about 100,000-180,000 VND. Motorbike rental about 120,000-180,000 VND/day. A 4-hour dune jeep tour is around 600,000 VND for the whole jeep (up to 6 people), with sunrise, midday and sunset slots. White Sand Dunes entry is small (around 15,000 VND); ATVs are extra and expensive. Kite surfing: about 1,000,000-1,700,000 VND for a private hour, 6,000,000-7,500,000 VND for a 6-hour beginner course - check current school prices. Street food in Phan Thiet is cheap: rice-paper rolls from about 15,000 VND, fish salad around 40,000 VND.",
  },

  bestTimeSummary: "Nov-Apr is the dry season - almost no rain Dec-Mar and strong, steady wind, the peak kite-surfing months. Dec-Jan are the windiest and the sea along the strip can be rough; Mar-Apr has softer wind, calmer water for swimming, and still very little rain. May-Oct brings frequent showers, wettest Jul-Sep - quieter and cheaper, and the dunes and fishing village are still worth it between showers.",
  bestMonths: [1, 2, 3, 4, 11, 12],

  recommendedStay: "2-3 days",

  transport: "Motorbike rental essential - the resort strip is 15km long. Grab available but limited. Jeep tours to White Sand Dunes are popular.",

  nearbyDestinations: ["da-lat", "nha-trang", "ho-chi-minh-city"],

  coordinates: {
    lat: 10.9333,
    lng: 108.2833,
  },
  mapPriority: 1,
  mapRank: 4,
  mapZoom: 13,
  // ─── FAQ ─────────────────────────────────────────────────
  faqs: [
    {
      question: "Should I stay in Mui Ne or Phan Thiet?",
      answer: "Stay on the Mui Ne strip (Ham Tien to Mui Ne village) if you want the beach, resorts and easy access to the dunes. Stay in Phan Thiet city if you care more about local food, cafes and cheaper rooms - the strip is 10-20km away. Ham Tien is a good middle ground: you can swim there and still reach the city in about 15 minutes.",
    },
    {
      question: "How many days do I need in Mui Ne?",
      answer: "3 days and 2 nights is the sweet spot. 2D1N covers the dunes but turns into a rush from one stop to the next; Mui Ne is at its best when you have time to sit by the sea, ride and eat without watching the clock.",
    },
    {
      question: "Is a jeep tour worth it for solo travellers?",
      answer: "Yes, if you don't ride a motorbike. A 4-hour tour covers the White and Red Sand Dunes, the fishing village and Fairy Stream. The price is per jeep (around 600,000 VND for up to 6 people), so join others from your hostel or ask about a shared seat.",
    },
    {
      question: "When is the best time for swimming versus kite surfing?",
      answer: "For kite surfing, Nov-Mar has the strongest and most reliable wind. For swimming, Mar-Apr is usually the best balance - calmer sea than in the windy months and almost no rain. May-Oct is calmer still on many days, but showers are frequent.",
    },
  ] satisfies FaqItem[],

  // ─── Emergency & help ────────────────────────────────────
  emergencyContacts: [
    {
      type: "tourist-hotline",
      name: "Binh Thuan tourist information hotline",
      phone: "0252 3810 801",
      altPhones: ["0252 3608 222"],
      hours: "24/7 (calls forwarded to a mobile after hours)",
      languages: ["Vietnamese", "English"],
      notes: "Covers Phan Thiet, Ham Tien - Mui Ne and Tien Thanh. Information, bookings, transport and complaints about service. Set up before the 2025 province merger - if it doesn't connect, ask your hotel to call for you.",
      sourceUrl: "https://baolamdong.vn/duong-day-nong-go-roi-cho-du-khach-370231.html",
      verifiedAt: "2023-12-19",
    },
  ],
}
