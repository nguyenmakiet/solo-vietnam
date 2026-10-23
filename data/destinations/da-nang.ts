import { Destination } from "./types"
import { heroUrl } from "@/lib/cloudinary"

export const daNang: Destination = {
  slug: "da-nang",
  name: "Da Nang",
  updatedAt: "2026-10-23",
  province: "Da Nang",
  provinceSlug: "da-nang",
  region: "central",

  description:
    "Da Nang is a working city with a long sandy beach, the Marble Mountains, the jungle-covered Son Tra Peninsula with its Lady Buddha, and a Dragon Bridge that breathes fire on weekend nights. It's less atmospheric than Hoi An and less historic than Hue, but it's the easiest base in Central Vietnam - the airport is a 10-15 minute ride from the beach, and Hoi An, Ba Na Hills and the Hai Van Pass are all within an hour. Most travellers spend 2-3 nights here and one in Hoi An.",

  tagline: "Beaches, bridges and the easiest base for Central Vietnam",

  heroImage: heroUrl("da-nang_f93yq1"),

  tags: ["beach", "city", "food", "culture", "nature"],

  travelStyle: ["solo-friendly", "budget", "family", "easy"],

  gettingThere: [
    {
      from: "Hanoi",
      vehicle: "fly",
      duration: "about 1h20",
      cost: "600,000-2,000,000 VND one way",
      notes: "Many daily flights. Da Nang airport is about 3km from the centre - 10-15 minutes and roughly 50,000-100,000 VND by Grab.",
    },
    {
      from: "Hanoi",
      vehicle: "train",
      duration: "about 15-17 hours",
      cost: "500,000-1,200,000 VND",
      notes: "Overnight sleeper. Da Nang station is in the city centre.",
    },
    {
      from: "Ho Chi Minh City",
      vehicle: "fly",
      duration: "about 1h20",
      cost: "600,000-2,000,000 VND one way",
      notes: "Many daily flights; the airport is a 10-15 minute ride from the city and the beach.",
    },
    {
      from: "Ho Chi Minh City",
      vehicle: "train",
      duration: "about 16-18 hours",
      cost: "500,000-1,200,000 VND",
      notes: "Overnight sleeper - book a berth.",
    },
    {
      from: "Hue",
      vehicle: "train",
      duration: "about 2.5-3 hours",
      cost: "check locally",
      notes: "The railway hugs the coast around the Hai Van Pass - one of the most scenic stretches in Vietnam. Buses and limousine vans take 2-3 hours through the tunnel; riding over the pass by motorbike is the slow, scenic option.",
    },
    {
      from: "Hoi An",
      vehicle: "bus",
      duration: "about 1 hour",
      cost: "20,000-40,000 VND",
      notes: "Public buses run roughly 5:30am-5:30pm; route numbers changed after the 2025 merger, so check locally. A Grab car takes 40-50 minutes, about 300,000-450,000 VND.",
    },
  ],

  itineraries: [
    {
      duration: "2D1N",
      label: "Quick highlights",
      days: [
        {
          day: 1,
          title: "My Khe at sunrise + Son Tra + Dragon Bridge",
          stops: ["my-khe-beach", "son-tra-peninsula", "dragon-bridge"],
          notes: "Swim or walk My Khe at 5-6am with the locals (lifeguards on duty from 4:30am in summer, 5am in winter). Then Son Tra Peninsula: the coast road to Linh Ung Pagoda, its Lady Buddha and the Obama rocks is open all day; the forest roads up to Ban Co Peak open 7:30am-6:30pm (until 5:30pm Oct-Feb), some routes don't allow automatic scooters, and roads close after storms - check at the gate. Evening: the Dragon Bridge fire and water show at 9pm on weekend nights (Sat-Sun, often Friday too - check that week), about 15 minutes. Then the Son Tra or Helio night market.",
        },
        {
          day: 2,
          title: "Marble Mountains + Cham Museum",
          stops: ["marble-mountains"],
          notes: "Marble Mountains from the 7am opening, before tour groups and the heat - about 8km south of the centre, 40,000 VND plus 20,000 VND for Am Phu Cave; the steps are steep and slippery, wear proper shoes. Afternoon: the Museum of Cham Sculpture near the Dragon Bridge (7am-5pm, 60,000 VND), one of the best collections of Cham art anywhere, and the pink Da Nang Cathedral nearby. Seafood on the beach road before you leave.",
        },
      ],
    },
    {
      duration: "3D2N",
      label: "City, mountains and one day trip",
      days: [
        {
          day: 1,
          title: "My Khe + Son Tra Peninsula + Linh Ung Pagoda",
          stops: ["my-khe-beach", "son-tra-peninsula"],
          notes: "Early swim at My Khe. Late morning on Son Tra: Linh Ung Pagoda and the Lady Buddha (free, 6am-9pm) and the Obama rocks on the coast road, then the forest roads if they're open (7:30am-6:30pm, until 5:30pm Oct-Feb) - look for red-shanked douc langurs and don't feed them. Some routes don't allow automatic scooters; check at the gate. Evening at the Son Tra night market.",
        },
        {
          day: 2,
          title: "Marble Mountains + Cham Museum + Dragon Bridge",
          stops: ["marble-mountains", "dragon-bridge"],
          notes: "Marble Mountains at 7am, then the Cham Museum and the pink Da Nang Cathedral in the afternoon. Sunset from a rooftop bar on the river, then the Dragon Bridge show at 9pm if it's a show night (Sat-Sun, often Friday too). Otherwise walk the riverside to the Love Bridge.",
        },
        {
          day: 3,
          title: "Day trip: Hoi An or Ba Na Hills",
          stops: [],
          notes: "Pick one. Hoi An is about 30km south - best from late afternoon into the lantern evening (see the Hoi An page). Ba Na Hills is a full day: go at the first cable car and leave before the afternoon clouds. Trying both in one day is rushed.",
        },
      ],
    },
    {
      duration: "4D3N",
      label: "Da Nang, Ba Na Hills and a night in Hoi An",
      days: [
        {
          day: 1,
          title: "My Khe + Son Tra Peninsula + Linh Ung Pagoda",
          stops: ["my-khe-beach", "son-tra-peninsula"],
          notes: "Check in near the beach. Linh Ung Pagoda, the Obama rocks and the Son Tra coast road in the afternoon (forest roads close at 6:30pm, 5:30pm Oct-Feb). Evening: Dragon Bridge if it's a show night, or the Helio night market.",
        },
        {
          day: 2,
          title: "Ba Na Hills",
          stops: ["ba-na-cable-car", "golden-bridge", "french-village-ba-na"],
          notes: "Take the first cable car (from about 7:30am) and see the Golden Bridge before the crowds, then the French Village. Clouds often roll in after 2pm. It's 5-8°C cooler at the top - bring a light jacket. Back down in time for sunset on My Khe.",
        },
        {
          day: 3,
          title: "Marble Mountains + Cham Museum, then to Hoi An",
          stops: ["marble-mountains"],
          notes: "Check out, Cham Museum when it opens at 7am, then the Marble Mountains, which are already halfway to Hoi An. Continue south in the afternoon (about 30 minutes from the Marble Mountains by car) and spend the evening in the lantern-lit Old Town.",
        },
        {
          day: 4,
          title: "Hoi An morning",
          stops: [],
          notes: "Walk Hoi An's Old Town at 6-7am before the crowds, then the coconut forest or An Bang Beach - see the Hoi An page for details. Da Nang airport is about 45 minutes away.",
        },
      ],
    },
  ],

  dayTrips: [
    {
      title: "Day trip: Ba Na Hills",
      summary:
        "Ba Na Hills is a mountain resort at about 1,400-1,500m, roughly 30km west of central Da Nang - a former French hill station turned into a large theme park. It's home to the Golden Bridge, held up by two giant stone hands, and a long cable car ride through the forest. Touristy and expensive, but spectacular on a clear morning. Plan a full day.",
      gettingThere: [
        {
          from: "Da Nang",
          vehicle: "taxi",
          duration: "about 45 minutes",
          cost: "250,000-350,000 VND one way",
          notes: "No regular public bus. Take Grab or a taxi, or ask your hotel about shuttle transfers.",
        },
        {
          from: "Hoi An",
          vehicle: "taxi",
          duration: "1.5 hours",
          cost: "400,000-600,000 VND one way",
          notes: "Many tour operators run combined Ba Na Hills + Hoi An day trips.",
        },
      ],
      plan: {
        stops: ["ba-na-cable-car", "golden-bridge", "french-village-ba-na"],
        notes: "Ride the cable car up, see the Golden Bridge first before the queues form, then walk through the French Village. Fantasy Park, an indoor amusement park, suits families more than solo travellers. Allow the whole day.",
      },
      cost: "About 950,000 VND per adult for the cable car and most attractions (2026). Combos with a buffet lunch cost more; promotional prices are sometimes limited to certain groups.",
      tips: [
        "Take the first cable car at about 7:30am: fewer crowds and clearer views.",
        "Clouds often roll in after 2pm, and the summit can be shut in bad weather from Sep to Dec - check the forecast.",
        "It's 5-8°C cooler at the top than in the city - bring a light jacket.",
        "Buy tickets online a day or two ahead, especially for weekends.",
        "Food inside is overpriced - eat before you go or pick a buffet combo.",
      ],
    },
  ],

  cost: {
    budget: "400,000-700,000 VND/day",
    midRange: "700,000-1,500,000 VND/day",
    comfortable: "1,500,000+ VND/day",
    notes: "Ba Na Hills about 950,000 VND (not included above). Marble Mountains 40,000 VND, Am Phu Cave 20,000 VND, lift 15,000 VND one way. Museum of Cham Sculpture 60,000 VND. Linh Ung Pagoda, the beaches and the Dragon Bridge show are free. Motorbike rental 100,000-150,000 VND/day; Grab around the centre 25,000-40,000 VND. Mi Quang 30,000-50,000 VND; banh trang cuon thit heo (pork rice-paper rolls) 60,000-165,000 VND a set. Seafood restaurants on the beach road add up fast - check prices by weight before ordering.",
  },

  bestTimeSummary: "Mar-Aug is the dry season and beach season. Mar-May is the most pleasant; Jun-Aug is busiest and often 35°C+. The international fireworks festival (DIFF) runs on Saturday nights from late May to early July (2026: 30 May - 11 July). Sep-Dec is the rainy season, heaviest Oct-Nov with storm risk: rip currents are common and red flags go up often, Son Tra and Ba Na Hills can close, Cham Islands boats stop, and taxis get scarce in heavy rain. Jan-Feb are cool and mostly dry: good for the city, chilly for swimming.",
  bestMonths: [3, 4, 5, 6, 7, 8],

  recommendedStay: "2-3 days, plus a night in Hoi An",

  transport: "Grab (car or bike) is cheap and easy around the city; Xanh SM also works. A rented motorbike (100,000-150,000 VND/day) is the best way to do Son Tra and the Hai Van Pass, but note that some Son Tra forest roads don't allow automatic scooters. The airport is only 3km from the centre.",

  nearbyDestinations: ["hoi-an", "hue", "phong-nha-ke-bang"],

  faqs: [
    {
      question: "How many days do I need in Da Nang?",
      answer: "3 days and 2 nights covers the beach, Son Tra, the Marble Mountains and one day trip. With 4 days, add Ba Na Hills and move to Hoi An for the last night - most travellers split their time 2 nights in Da Nang and 1 in Hoi An.",
    },
    {
      question: "When does the Dragon Bridge breathe fire?",
      answer: "At 9pm on weekend nights - Saturday and Sunday, and often Friday too - plus major holidays such as Tet, 30 April, 1 May, 2 September and New Year. Check that week's schedule locally. The show lasts about 15 minutes: fire first, then water. It's free. Arrive 30-45 minutes early, and stand back from the dragon's head if you don't want to get sprayed.",
    },
    {
      question: "Is Ba Na Hills worth it for solo travellers?",
      answer: "Only if you want to see the Golden Bridge and don't mind crowds and theme-park prices (about 950,000 VND). It's spectacular on a clear morning and disappointing in cloud. If you go, take the first cable car and check the forecast; if you'd rather spend the money elsewhere, Son Tra, the Marble Mountains and the Hai Van Pass give you views for free or close to it.",
    },
    {
      question: "Is it safe to swim at My Khe Beach?",
      answer: "Yes, within the flagged zones while lifeguards are on duty: 4:30am-7pm from 15 March to 30 September, and 5am-6:30pm from 1 October to 14 March. Swim only between the buoys or red-and-yellow flags, and never after the lifeguards finish. Sep-Dec is the risky season - waves build, rip currents form along the whole beach, and Oct-Nov are usually the worst weeks, with frequent red flags. In an emergency, alert the nearest lifeguard or call the beach rescue line, 0236 2218 878.",
    },
    {
      question: "Can I ride a scooter on Son Tra Peninsula?",
      answer: "Partly. The coast road to Linh Ung Pagoda is open to all traffic. The forest roads up to Ban Co Peak open 7:30am-6:30pm (until 5:30pm Oct-Feb), some routes don't allow automatic scooters, one route is one-way, and the area closes during storms - rules change, so check at the gate. Don't enter military zones or unofficial trails, and don't feed the langurs.",
    },
    {
      question: "Can I ride the Hai Van Pass one way and drop the bike in Hue?",
      answer: "Yes, but only a few rental shops do it, so it's worth booking ahead. One example is Hue Scooter Rental (Hidden Land Bikes), which has offices in Da Nang, Hoi An and Hue and offers one-way Da Nang - Hue rentals from about 400,000 VND (huescooterrental.com) - we're not affiliated, so compare reviews and prices before you book. Shops like this can usually hold or move your big luggage; keep your passport and valuables with you. The road over the pass is free and open all day; motorbikes aren't allowed in the tunnel. Ride slowly in fog.",
    },
    {
      question: "Is it worth visiting Da Nang in the rainy season?",
      answer: "Yes, if you stay flexible. Sep-Dec brings lower prices but heavy rain, especially Oct-Nov. Check the forecast before booking, keep outdoor trips such as the Cham Islands or Ba Na Hills for the last minute, and have rainy-day backups like the Cham Museum, cafes, spas and a food tour.",
    },
    {
      question: "Should I stay in Da Nang or Hoi An?",
      answer: "Both, if you can. Da Nang is better for the beach, the airport and day trips to Ba Na Hills, Son Tra and the Hai Van Pass. Hoi An is better at night and early in the morning. A common split is 2 nights in Da Nang and 1-2 in Hoi An, about 45 minutes apart.",
    },
  ],

  emergencyContacts: [
    {
      type: "medical",
      name: "Family Medical Practice Da Nang",
      phone: "0236 3582 699",
      altPhones: ["0236 3582 700", "0913 917 303", "*9999"],
      hours: "Clinic Mon-Fri 8am-5pm, Sat 8am-12pm; emergency line 24/7 (0913 917 303 or *9999)",
      languages: ["English", "Vietnamese"],
      address: "96-98 Nguyen Van Linh, Hai Chau, Da Nang",
      sourceUrl: "https://hcmc.vietnam.embassy.gov.au/files/hchi/list_of_hospitals_jul_2026.pdf",
      verifiedAt: "2026-07-01",
    },
    {
      type: "medical",
      name: "Vinmec Da Nang International Hospital",
      phone: "0236 3711 111",
      hours: "24/7 emergency",
      languages: ["English", "Vietnamese"],
      address: "30 Thang 4 Street, Hoa Cuong, Da Nang",
      sourceUrl: "https://hcmc.vietnam.embassy.gov.au/files/hchi/list_of_hospitals_jul_2026.pdf",
      verifiedAt: "2026-07-01",
    },
    {
      type: "medical",
      name: "Hoan My Da Nang Hospital",
      phone: "0236 3650 676",
      hours: "24/7 emergency",
      languages: ["English", "Vietnamese"],
      address: "291 Nguyen Van Linh, Thanh Khe, Da Nang",
      sourceUrl: "https://hcmc.vietnam.embassy.gov.au/files/hchi/list_of_hospitals_jul_2026.pdf",
      verifiedAt: "2026-07-01",
    },
    {
      type: "other",
      name: "Da Nang beach rescue (city-centre beaches incl. My Khe)",
      phone: "0236 2218 878",
      hours: "Lifeguards on duty 4:30am-7pm (15 Mar - 30 Sep), 5am-6:30pm (1 Oct - 14 Mar)",
      languages: ["Vietnamese"],
      notes: "Run by the Son Tra Peninsula and Da Nang Beaches Management Board. Alert the nearest lifeguard first.",
        verifiedAt: "2026-10-23",
    },
    {
      type: "tourist-hotline",
      name: "Da Nang tourist support hotline",
      phone: "*8899",
      hours: "24/7",
      notes: "Shortcode - needs a Vietnamese SIM. Shown on the city's tourist information boards.",
      sourceUrl: "https://baovanhoa.vn/du-lich/da-nang-nang-cao-chat-luong-ho-tro-du-khach-theo-huong-an-toan-than-thien-thong-minh-191295.html",
      verifiedAt: "2025-12-24",
    },
  ],

  coordinates: {
    lat: 16.0544,
    lng: 108.2022,
  },
  mapPriority: 1,
  mapRank: 1,
  mapZoom: 13,
}
