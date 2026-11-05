import { Destination } from "./types"
import { heroUrl } from "@/lib/cloudinary"

export const haLong: Destination = {
  slug: "ha-long",
  name: "Ha Long Bay",
  updatedAt: "2026-11-06",
  province: "Quang Ninh",
  provinceSlug: "quang-ninh",
  region: "north",

  description:
    "Ha Long Bay is a UNESCO World Heritage Site of more than 1,900 limestone islands, about 2.5-3 hours from Hanoi on the expressway. You see it by boat: a day route through caves and islands, or a night on a cruise. On shore, Bai Chay has the hotels, Sun World and the beach, while Hon Gai across the bridge is quieter and more local. For a quieter take on the same scenery, Lan Ha Bay is a ferry ride away via Cat Ba.",

  tagline: "Limestone islands, caves and a day on the water",

  heroImage: heroUrl("ha-long-4_bdow9b"),

  tags: ["nature", "cruise", "beach", "cave"],

  travelStyle: ["solo-friendly", "luxury", "family"],

  // ─── Getting There ───────────────────────────────────────
  gettingThere: [
    {
      from: "Hanoi",
      vehicle: "bus",
      duration: "2.5-3 hours",
      cost: "150,000-220,000 VND (bus); 250,000-350,000 VND (limousine)",
      notes: "On the Hanoi - Hai Phong - Ha Long expressway. Limousine vans drop off at hotels. Book 1-2 weeks ahead on weekdays and about a month ahead for weekends and Tet.",
    },
    {
      from: "Van Don Airport",
      vehicle: "fly",
      notes: "Fly into Van Don, then about 50km by bus or taxi to Ha Long city.",
    },
    {
      from: "Cat Ba (Gia Luan ferry pier)",
      vehicle: "ferry",
      duration: "about 50 minutes",
      notes: "Ferries run between Tuan Chau and Gia Luan on Cat Ba. Tuan Chau to Gia Luan: 7:30am, 9am, 11:30am, 1:30pm, 3pm. Gia Luan to Tuan Chau: 9am, 11:30am, 1pm, 3pm, 4pm. In peak season (25 Apr - 5 Sep) extra boats run as often as every 30 minutes when busy. Sailings need good weather and at least 30 passengers. Be at the pier 15 minutes early.",
    },
  ],

  // ─── Itineraries ─────────────────────────────────────────
  itineraries: [
    {
      duration: "1D",
      label: "Day trip from Hanoi",
      days: [
        {
          day: 1,
          title: "Ha Long Bay Route 2: Sung Sot Cave, Ti Top Island, Luon Cave",
          stops: ["ha-long-bay", "sung-sot-cave", "ti-top-island"],
          notes: "Most routes leave from Ha Long International Cruise Port; be there 30 minutes early. Route 2 takes 5-6 hours and costs about 510,000 VND per person (bay fee, port ticket and shared boat). Buy at the official port counter, not from touts, and check what's included - lunch and kayaking are usually extra. Sung Sot is a huge cave (allow 45-60 minutes). Kayaking at Luon Cave costs 80,000 VND. At Ti Top you can swim and climb to the viewpoint - bring swimwear and a change of clothes. Leave Hanoi early: it's 2.5-3 hours each way by limousine.",
        },
      ],
    },
    {
      duration: "2D1N",
      label: "Bay day and Hon Gai",
      days: [
        {
          day: 1,
          title: "Ha Long Bay Route 2: Sung Sot Cave, Ti Top Island, Luon Cave",
          stops: ["ha-long-bay", "sung-sot-cave", "ti-top-island"],
          notes: "Most routes leave from Ha Long International Cruise Port; be there 30 minutes early. Route 2 takes 5-6 hours and costs about 510,000 VND per person (bay fee, port ticket and shared boat). Buy at the official port counter, not from touts, and check what's included - lunch and kayaking are usually extra. Sung Sot is a huge cave (allow 45-60 minutes). Kayaking at Luon Cave costs 80,000 VND. At Ti Top you can swim and climb to the viewpoint - bring swimwear and a change of clothes. Stay the night in Bai Chay.",
        },
        {
          day: 2,
          title: "Quang Ninh Museum and Hon Gai market",
          stops: [],
          notes: "Cross to Hon Gai, a few minutes from Bai Chay. Quang Ninh Museum (30,000 VND) opens 8-11:30am and 1:30-5pm and is closed on Mondays. Then Hon Gai market for seafood and cha muc (squid cakes) to take home - it's cheaper than Bai Chay and stalls pack it in foam boxes. Check out by noon and head back to Hanoi.",
        },
      ],
    },
    {
      duration: "3D2N",
      label: "Sun World, the bay, then Hon Gai or Cat Ba",
      days: [
        {
          day: 1,
          title: "Bai Chay: lighthouse and Sun World",
          stops: [],
          notes: "Arrive from Hanoi and settle in Bai Chay. Walk to the old Bai Chay lighthouse, then Sun World Ha Long (2026 prices): Queen Cable Car 380,000 VND, Dragon Park 300,000 VND, Typhoon Water Park 350,000 VND; combos from 450,000 VND. Check current prices on the Sun World site.",
        },
        {
          day: 2,
          title: "Ha Long Bay Route 2: Sung Sot Cave, Ti Top Island, Luon Cave",
          stops: ["ha-long-bay", "sung-sot-cave", "ti-top-island"],
          notes: "Most routes leave from Ha Long International Cruise Port; be there 30 minutes early. Route 2 takes 5-6 hours and costs about 510,000 VND per person (bay fee, port ticket and shared boat). Buy at the official port counter, not from touts, and check what's included - lunch and kayaking are usually extra. Sung Sot is a huge cave (allow 45-60 minutes). Kayaking at Luon Cave costs 80,000 VND. At Ti Top you can swim and climb to the viewpoint - bring swimwear and a change of clothes.",
        },
        {
          day: 3,
          title: "Hon Gai, or the ferry to Cat Ba",
          stops: [],
          notes: "Either cross to Hon Gai for the Quang Ninh Museum (30,000 VND, closed Mondays) and the seafood market before heading back to Hanoi, or take the ferry from Tuan Chau to Gia Luan on Cat Ba (about 50 minutes; departures 7:30am, 9am, 11:30am, 1:30pm and 3pm) and continue with the Cat Ba page for Lan Ha Bay.",
        },
      ],
    },
  ],

  // ─── Cost ────────────────────────────────────────────────
  // ─── Practical ───────────────────────────────────────────
  bestTimeSummary: "Mar-May and Sep-Nov are the most comfortable months on the water: warm or mild with little rain. Jun-Aug is peak season and the wettest, with storms that can cancel boats - though it's the best time to swim at Ti Top. Dec-Feb is the driest period but cool, with morning mist over the bay and fewer visitors.",
  bestMonths: [4, 5, 10, 11, 12],

  recommendedStay: "1-3 days",

  transport: "Bai Chay and Hon Gai are a few minutes apart across the bridge. Grab and Xanh SM both work; a rented motorbike gets you around the shore sights. The bay itself is boat only - buy route tickets at the official port counter.",

  rentals: [
    {
      vehicle: "motorbike",
      priceRange: "about 100,000-200,000 VND/day",
      notes: "Scooters cost more than semi-automatics; prices can rise on weekends and holidays. Helmets are usually included, petrol is not. Shops ask for a passport or ID and some take a deposit - ask first. You need an International Driving Permit (1968 convention) with the motorcycle category plus your home licence. Check the bike and take photos before you ride off, and get a written contract. Hotels can arrange a bike, which is convenient but usually 20,000-50,000 VND dearer and the bike quality is unchecked - renting direct is better.",
      shops: [
        { name: "Kim's Motorbike Rentals", area: "Bai Chay", address: "129 Vuon Dao, Bai Chay", phone: "0923 333 121", url: "https://dichvuthuexehalong.com/", notes: "Also on Zalo and Facebook. Semi-automatic 120,000-130,000, scooters 150,000-160,000 VND/day; cheaper from 3 days. Facebook: https://www.facebook.com/share/1DW3ZBHtzo/" },
        { name: "Nest Travel", area: "Bai Chay", address: "104, Tower S7, Sunrise apartments, Hung Thang, Bai Chay", phone: "0979 826 098", notes: "Semi-automatic about 100,000, scooters about 150,000 VND/day." },
        { name: "Dong's Motorbike Rentals", area: "Bai Chay", address: "Ngo 1 Vuon Dao; and Tower C, Newlife apartments, Hoang Quoc Viet", phone: "0944 697 555", url: "https://chothuexemayhalong.com/", notes: "Also on Zalo. Semi-automatic 120,000, scooters 150,000-160,000 VND/day; helmets and raincoats for 2 included; free delivery within 10km." },
        { name: "Minh's Motorbike Rental", area: "Bai Chay", address: "10 Hoang Quoc Viet, Bai Chay", phone: "0987 628 336" },
        { name: "Tan Truong Phat Travel", area: "Hong Hai (Hon Gai side)", address: "Hai Long street, Hong Hai", phone: "0972 656 965", notes: "About 150,000 VND/day; no deposit." },
        { name: "Minh Thanh", area: "Bai Chay", address: "Huong Tram slope, Zone 2, Bai Chay", phone: "0986 322 292", notes: "Hourly or daily rates." },
      ],
      verifiedAt: "2026-11-06",
    },
  ],

  // ─── Nearby ──────────────────────────────────────────────
  nearbyDestinations: ["cat-ba", "ha-noi", "ninh-binh"],

  faqs: [
    {
      question: "Day trip or overnight in Ha Long?",
      answer: "A day trip from Hanoi works - 2.5-3 hours each way plus a 5-6 hour boat route - but it's a long day. Two days with one night is the most relaxed: the bay on day one, Hon Gai or Sun World on day two.",
    },
    {
      question: "Route 1 or Route 2?",
      answer: "Route 2 if it's your first time: 5-6 hours with Sung Sot Cave, Ti Top Island (swimming and a viewpoint) and kayaking at Luon Cave, for about 510,000 VND per person. Route 1 is shorter, 3-4 hours, with Thien Cung and Dau Go caves, for about 460,000 VND.",
    },
    {
      question: "How much are Ha Long Bay tickets?",
      answer: "Each person pays a 250,000 VND bay sightseeing fee plus a 60,000 VND port ticket, plus the boat: about 150,000 VND (Route 1) or 200,000 VND (Route 2) on a shared boat. Children under 7 or under 1.2m are free; ages 7-15 get 20% off. Lunch and kayaking (80,000 VND at Luon Cave) are extra. Buy at the official port counter, not from touts, and confirm the route before you pay.",
    },
    {
      question: "Should I do an overnight cruise?",
      answer: "If your budget allows, a night on the water is the classic Ha Long experience: cruises cost about 2,000,000-3,500,000 VND per person per night depending on the boat and route. Check what's included - meals, kayaking, transfers from Hanoi - before you book.",
    },
    {
      question: "Ha Long or Cat Ba (Lan Ha Bay)?",
      answer: "Ha Long is the famous one: easier to reach from Hanoi, more upscale cruises and hotels, and very busy in May-Aug. Lan Ha Bay, reached from Cat Ba, has similar karst scenery with fewer boats, and Cat Ba adds trekking, cycling and beaches - usually for less money. You can do both: take the ferry from Tuan Chau to Cat Ba. See the [Cat Ba page](/destinations/cat-ba).",
    },
    {
      question: "Should I stay in Bai Chay or Hon Gai?",
      answer: "First time, stay in Bai Chay: lively, with the bigger hotels, Sun World and the beach. Hon Gai is quieter and more local, with cheaper food, the Quang Ninh Museum and the seafood market. They're only a few minutes apart.",
    },
    {
      question: "How much is Sun World Ha Long?",
      answer: "2026 prices: Queen Cable Car 380,000 VND, Dragon Park 300,000 VND, Typhoon Water Park 350,000 VND. Combos: cable car and food 450,000 VND, two parks 500,000 VND, three parks 600,000 VND. See the [official price list](https://sunworld.vn/en/ha-long/check-in/sun-world-ha-long-price-list) for the latest.",
    },
    {
      question: "How do I get from Ha Long to Cat Ba?",
      answer: "Take the ferry from Tuan Chau to Gia Luan on Cat Ba, about 50 minutes. Departures from Tuan Chau: 7:30am, 9am, 11:30am, 1:30pm and 3pm; back from Gia Luan: 9am, 11:30am, 1pm, 3pm and 4pm. Ferries need good weather and at least 30 passengers. Arrive 15 minutes early.",
    },
    {
      question: "When is the best time to visit?",
      answer: "Mar-May and Sep-Nov are the most comfortable. Jun-Aug is busy, hot and stormy, but the best for swimming. Dec-Feb is dry and cool, often misty.",
    },
    {
      question: "What should I eat in Ha Long?",
      answer: "Cha muc (squid cakes) is the signature, along with bun be be (mantis shrimp noodles), banh cuon cha muc and fresh seafood. Ask the price before you order and choose places that display prices. See [what to eat in Quang Ninh](/provinces/quang-ninh#h-food).",
    },
  ],

  emergencyContacts: [
    {
      type: "tourist-hotline",
      name: "Quang Ninh tourism hotline",
      phone: "0866 191 616",
      hours: "24/7",
      languages: ["Vietnamese", "English", "Chinese"],
      notes: "Tourist support and complaints about services or prices.",
      verifiedAt: "2026-11-06",
    },
    {
      type: "medical",
      name: "Vinmec Ha Long International Hospital",
      phone: "0203 3828 188",
      address: "10A Le Thanh Tong, Hong Gai",
      notes: "Private international hospital with on-site English interpreters.",
      sourceUrl: "https://vinmec.com/eng/hospital/vinmec-ha-long-hospital-1",
      verifiedAt: "2026-11-06",
    },
    {
      type: "medical",
      name: "Bai Chay Hospital",
      phone: "0203 3836 566",
      address: "Gieng Day, Ha Long",
      notes: "Public general hospital.",
      sourceUrl: "https://waytovietnam.com/travel-guides/Hospitals/Hospitals_in_Ha_Long_city.htm",
      verifiedAt: "2026-11-06",
    },
    {
      type: "medical",
      name: "Quang Ninh Provincial General Hospital",
      phone: "0203 3825 499",
      address: "Tue Tinh, Bach Dang, Ha Long",
      notes: "Public provincial hospital.",
      sourceUrl: "https://waytovietnam.com/travel-guides/Hospitals/Hospitals_in_Ha_Long_city.htm",
      verifiedAt: "2026-11-06",
    },
  ],

  coordinates: {
    lat: 20.95,
    lng: 107.08,
  },
  mapPriority: 1,
  mapRank: 7,
  mapZoom: 12,
}
