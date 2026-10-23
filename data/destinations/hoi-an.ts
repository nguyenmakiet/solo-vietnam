import { Destination } from "./types"
import { heroUrl } from "@/lib/cloudinary"

export const hoiAn: Destination = {
  slug: "hoi-an",
  name: "Hoi An",
  updatedAt: "2026-10-21",
  province: "Quang Nam",
  provinceSlug: "quang-nam",
  region: "central",

  description:
    "Hoi An is one of Vietnam's best-preserved old trading ports - a UNESCO World Heritage town of yellow walls, wooden merchant houses, silk lanterns and the Thu Bon River, about 45 minutes from Da Nang. Walk the Old Town at 6-7am before the tour groups, take a lantern boat at sunset, and cycle out to the herb gardens, coconut forest and beach when the centre gets crowded. One night covers the highlights; two or three let you slow down, which is when Hoi An is at its best.",

  tagline: "Lanterns, tailors and cao lau you can only eat here",

  heroImage: heroUrl("hoi-an_qxhyjl"),

  tags: ["history", "food", "beach", "culture"],

  travelStyle: ["solo-friendly", "budget", "family", "easy"],

  gettingThere: [
    {
      from: "Da Nang",
      vehicle: "bus",
      duration: "about 1 hour",
      cost: "20,000-40,000 VND",
      notes: "Public buses run from Da Nang central bus station to Hoi An bus station, roughly 5:30am-5:30pm, every 20-30 minutes; route numbers have changed since the 2025 merger, so check the current one locally. A Grab car takes 45-50 minutes and costs about 300,000-450,000 VND; Grab bike is cheaper.",
    },
    {
      from: "Ho Chi Minh City",
      vehicle: "fly",
      duration: "about 1h20",
      cost: "400,000-1,600,000 VND one way",
      notes: "Fly into Da Nang, then about 45-50 minutes to Hoi An by car.",
    },
    {
      from: "Hanoi",
      vehicle: "fly",
      duration: "about 1h20",
      cost: "400,000-1,600,000 VND one way",
      notes: "Fly into Da Nang, then about 45-50 minutes to Hoi An by car.",
    },
    {
      from: "Hue",
      vehicle: "bus",
      duration: "3-4 hours",
      cost: "check locally",
      notes: "Direct buses and limousine vans daily. Riding south by motorbike over the Hai Van Pass is one of Vietnam's best-known coastal rides.",
    },
  ],

  itineraries: [
    {
      duration: "2D1N",
      label: "Old Town and the coconut forest",
      days: [
        {
          day: 1,
          title: "Old Town + sunset lantern boat on the Hoai River",
          stops: ["hoi-an-ancient-town", "japanese-bridge"],
          notes: "Arrive by early afternoon and buy the Old Town ticket at an official counter (120,000 VND for foreign visitors, covers 5 heritage sites) - use it for the Japanese Bridge, Tan Ky Old House and the Fujian Assembly Hall. Around 5-6:30pm, take a lantern boat from the An Hoi bridge area: 150,000 VND for a small boat (1-3 people), 200,000 VND for 4-5, about 20-25 minutes, paper lanterns 10,000 VND each - buy at the riverside counters, not from touts. You'll see the sunset and the Old Town lighting up. Dinner: com ga (chicken rice) or cao lau. Want clothes made? Order today.",
        },
        {
          day: 2,
          title: "Early Old Town walk + Bay Mau basket boats + An Bang",
          stops: ["bay-mau-coconut-forest", "an-bang-beach"],
          notes: "Walk the Old Town at 6-7am - quiet streets, locals at the Central Market, no crowds. Then Bay Mau Coconut Forest, about 3km east, for a round basket-boat ride through the water coconut palms - book online in advance, on-site prices are often quoted higher. Finish at An Bang Beach for lunch and a swim (Mar-Sep), then leave in the afternoon.",
        },
      ],
    },
    {
      duration: "3D2N",
      label: "Slow Hoi An by bicycle",
      days: [
        {
          day: 1,
          title: "Old Town + sunset lantern boat on the Hoai River",
          stops: ["hoi-an-ancient-town", "japanese-bridge"],
          notes: "Buy the Old Town ticket (120,000 VND for foreign visitors, 5 heritage sites) and spend the afternoon on the Japanese Bridge, Tan Ky Old House and the assembly halls. Around 5-6:30pm, a lantern boat from the An Hoi bridge area (150,000 VND for 1-3 people, about 20-25 minutes). If you want clothes made, order today so there's time for a second fitting.",
        },
        {
          day: 2,
          title: "Tra Que + Bay Mau + An Bang by bicycle",
          stops: ["tra-que-village", "bay-mau-coconut-forest", "an-bang-beach"],
          notes: "Cycle 2km north to Tra Que vegetable village in the morning - herb gardens, and a cooking class if you want one (about 500,000-700,000 VND). Midday basket boats at Bay Mau Coconut Forest, then the late afternoon at An Bang Beach. Optional evening: the Hoi An Memories show (8pm, closed Tuesdays - book online).",
        },
        {
          day: 3,
          title: "My Son early + Thanh Ha pottery + tailor pickup",
          stops: ["my-son-sanctuary"],
          notes: "My Son Sanctuary is about 40km west and opens at 6am - go early by tour or about 1 hour by motorbike, because it's very hot by 10am. Back by noon: stop at Thanh Ha pottery village, 3km west of the Old Town, pick up your tailoring, and take a last walk through the Old Town.",
        },
      ],
    },
    {
      duration: "4D3N",
      label: "With My Son and the Cham Islands",
      days: [
        {
          day: 1,
          title: "Old Town + sunset lantern boat on the Hoai River",
          stops: ["hoi-an-ancient-town", "japanese-bridge"],
          notes: "Buy the Old Town ticket (120,000 VND for foreign visitors, 5 heritage sites): Japanese Bridge, Tan Ky Old House, the assembly halls. Order any tailoring today. Around 5-6:30pm, a lantern boat from the An Hoi bridge area (150,000 VND for 1-3 people, about 20-25 minutes).",
        },
        {
          day: 2,
          title: "Tra Que + Bay Mau + An Bang by bicycle",
          stops: ["tra-que-village", "bay-mau-coconut-forest", "an-bang-beach"],
          notes: "Early Old Town walk at 6-7am, then cycle to Tra Que for the herb gardens or a cooking class (about 500,000-700,000 VND). Basket boats at Bay Mau around midday, late afternoon at An Bang Beach. First tailor fitting in the evening.",
        },
        {
          day: 3,
          title: "My Son early + Thanh Ha pottery",
          stops: ["my-son-sanctuary"],
          notes: "My Son opens at 6am, about 40km west - go early to beat the heat. On the way back, Thanh Ha pottery village, 3km west of the Old Town. Afternoon: second tailor fitting and rest, or the Hoi An Memories show in the evening (8pm, closed Tuesdays).",
        },
        {
          day: 4,
          title: "Cham Islands day trip (Mar-Sep)",
          stops: ["cham-island"],
          notes: "Canoes leave Cua Dai pier around 8-9am and the last boat back is usually around 3:30pm; the public ticket is about 350,000 VND including island fees (2026). Boats only run in good weather, mostly Mar-Sep. Outside the season, swap this for a cooking class and a slow last morning in the Old Town.",
        },
      ],
    },
  ],

  cost: {
    budget: "400,000-800,000 VND/day",
    midRange: "800,000-1,500,000 VND/day",
    comfortable: "1,500,000+ VND/day",
    notes: "Old Town ticket 120,000 VND for foreign visitors (80,000 VND for Vietnamese), covering 5 heritage sites. Hoai River lantern boat 150,000 VND for 1-3 people or 200,000 VND for 4-5 (20-25 minutes), paper lanterns 10,000 VND. Bay Mau: 30,000 VND entry, basket boat about 140,000 VND per boat booked online or 200,000-250,000 VND on-site. My Son 150,000 VND. Cham Islands canoe about 350,000 VND including fees. Cooking class about 500,000-700,000 VND. Hoi An Memories show roughly 600,000-1,200,000 VND depending on seat. Tailoring: a silk dress plus a top can be under 2,000,000 VND, a three-piece suit around 5,000,000 VND - prices vary a lot by fabric and shop. Food is cheap: com ga 40,000-50,000 VND, cao lau 35,000-45,000 VND, banh mi 20,000-35,000 VND.",
  },

  bestTimeSummary: "Feb-Apr is the sweet spot - dry, mild and green. May-Aug stays mostly dry but gets very hot, so start early and save the afternoons for the beach; this is also the Cham Islands boat season (Mar-Sep). Sep-Jan is the rainy season and Oct-Nov is peak flood risk - the riverside Old Town can flood for days and the lantern night can be cancelled. The monthly lantern night falls on the 14th day of each lunar month, when the Old Town switches off its electric lights.",
  bestMonths: [2, 3, 4, 5, 6, 7, 8],

  recommendedStay: "2-3 days",

  transport: "A bicycle is the best way around - flat roads, short distances, and many guesthouses lend them free or for about 30,000-50,000 VND a day. Motorbikes are restricted on the Old Town streets (such as Tran Phu and Nguyen Hue) from 9-11am and 3-9:30pm, so park outside and walk in. Grab works for Da Nang, My Son and late nights.",

  nearbyDestinations: ["da-nang", "hue"],

  faqs: [
    {
      question: "Do I need a ticket to enter Hoi An Old Town?",
      answer: "Yes. Visitors to the Old Town core must buy a ticket: 120,000 VND for foreign visitors and 80,000 VND for Vietnamese. It's sold at counters around the Old Town (roughly 7:30am-9:30pm, until 9pm in winter) and lets you enter 5 heritage sites such as the Japanese Bridge, Tan Ky Old House and the Fujian Assembly Hall. Keep it with you - it may be checked more than once.",
    },
    {
      question: "Should I stay in Hoi An or visit as a day trip from Da Nang?",
      answer: "Stay at least one night. A day trip shows you the sights, but the best parts of Hoi An are the lanterns after dark and the empty streets at 6-7am - both outside day-trip hours. One night covers the highlights; two or three let you add the countryside, the beach and My Son at a slow pace.",
    },
    {
      question: "Is it worth getting clothes tailored in Hoi An?",
      answer: "Yes, if you give it time. Many tailors can make a shirt or dress within a day and a suit within about 24 hours, but rushed pieces often need adjusting - order on your first day and plan at least one second fitting. Bring a photo or choose from the shop's own designs, ask to see and feel the fabric, and agree the total price before they measure you. Rough 2026 prices: a silk dress plus a top under 2,000,000 VND, a three-piece suit around 5,000,000 VND.",
    },
    {
      question: "When does Hoi An flood?",
      answer: "Mostly in Oct-Nov, during the Sep-Jan rainy season. Streets along the Thu Bon River can flood for a day or several, and boats sometimes replace motorbikes in the Old Town. If you travel then, book somewhere away from the riverfront, keep your plans flexible and check the forecast.",
    },
    {
      question: "When is the Hoi An lantern night?",
      answer: "On the 14th day of every lunar month, the night before the full moon. The Old Town switches off its electric lights from about 6pm and runs on lanterns until around 9-10pm. No separate ticket is needed. Check a lunar calendar for the exact date, and expect cancellations in flood season.",
    },
    {
      question: "How do I avoid being overcharged on the lantern boats?",
      answer: "Buy at the riverside counters near the An Hoi bridge, where boats run from about 4pm to 10pm: 150,000 VND for a small boat (1-3 people) or 200,000 VND for 4-5, about 20-25 minutes. Street touts quoting \"50,000 per person\" are pricing the same boat per head. For Bay Mau basket boats, booking online in advance is usually cheaper than paying on-site.",
    },
    {
      question: "Can I ride a motorbike into the Old Town?",
      answer: "Not at most times. Motorbikes are restricted on the Old Town streets from 9-11am and 3-9:30pm. Park at one of the paid lots on the edge of the Old Town and walk in - it's small enough to cross on foot in 15 minutes.",
    },
  ],

  emergencyContacts: [
    {
      type: "medical",
      name: "Saigon Hoi An General Hospital",
      phone: "0235 3921 656",
      altPhones: ["1900 8686 30"],
      hours: "24/7 emergency",
      languages: ["English", "Vietnamese"],
      address: "6 Phan Dinh Phung, Hoi An",
      notes: "1900 numbers are paid calls.",
      sourceUrl: "https://hcmc.vietnam.embassy.gov.au/files/hchi/list_of_hospitals_jul_2026.pdf",
      verifiedAt: "2026-07-01",
    },
    {
      type: "tourist-hotline",
      name: "Da Nang tourist support hotline (covers Hoi An)",
      phone: "*8899",
      hours: "24/7",
      notes: "Shortcode - needs a Vietnamese SIM. Posted on tourist information boards in Hoi An, My Son, Bay Mau and An Bang since the Quang Nam - Da Nang merger.",
      sourceUrl: "https://baovanhoa.vn/du-lich/da-nang-nang-cao-chat-luong-ho-tro-du-khach-theo-huong-an-toan-than-thien-thong-minh-191295.html",
      verifiedAt: "2025-12-24",
    },
  ],

  coordinates: {
    lat: 15.8801,
    lng: 108.338,
  },
  mapPriority: 1,
  mapRank: 2,
  mapZoom: 13,
}
