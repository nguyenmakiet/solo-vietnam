import { Destination } from "./types"
import { heroUrl } from "@/lib/cloudinary"

export const haNoi: Destination = {
  slug: "ha-noi",
  name: "Hanoi",
  updatedAt: "2026-10-28",
  province: "Hanoi",
  provinceSlug: "ha-noi",
  region: "north",

  description:
    "Hanoi is Vietnam's capital and one of its most historically layered cities - a thousand-year-old city where French colonial boulevards run alongside ancient temples, egg coffee is drunk on tiny plastic stools, and the Old Quarter's streets are still named after the goods they once traded. It's noisy, crowded and slower to reveal itself than Ho Chi Minh City, but it rewards walking: the lakes at dawn, the Old Quarter after dark, and a bowl of pho or bun cha on every corner. It's also the base for Ha Long Bay, Ninh Binh, Sapa and Ha Giang.",

  tagline: "Ancient temples, street food and a city that never slows down",

  heroImage: heroUrl("ha-noi_mcvdm9"),

  tags: ["history", "culture", "food", "city", "heritage"],

  travelStyle: ["solo-friendly", "budget", "family"],

  gettingThere: [
    {
      from: "Ho Chi Minh City",
      vehicle: "fly",
      duration: "about 2 hours",
      cost: "1,500,000-3,000,000 VND one way",
      notes: "Cheaper if you book about a month ahead. From Noi Bai Airport: bus 86 runs to Hanoi Railway Station via the Old Quarter area, 5:15am-10:10pm every 25-30 minutes, about 45,000 VND; local buses 7, 17, 90 and 109 cost 8,000-9,000 VND but are slower. A taxi costs about 350,000-450,000 VND; Grab and Xanh SM are usually the easiest option with luggage.",
    },
    {
      from: "Da Nang",
      vehicle: "fly",
      duration: "about 1h20",
      cost: "1,000,000-1,500,000 VND one way",
    },
    {
      from: "Da Nang",
      vehicle: "train",
      duration: "17-18 hours",
      cost: "600,000-1,100,000 VND",
      notes: "Overnight sleeper along the coast.",
    },
    {
      from: "Sapa",
      vehicle: "bus",
      duration: "5.5-7 hours",
      cost: "270,000-450,000 VND",
      notes: "Limousine vans often drop off in the Old Quarter; sleeper buses go to My Dinh or Nuoc Ngam bus stations. Double sleeper cabins cost about 650,000-800,000 VND per cabin.",
    },
    {
      from: "Ha Giang",
      vehicle: "bus",
      duration: "6-7 hours",
      cost: "200,000-350,000 VND",
      notes: "Sleeper buses and limousine vans to My Dinh, Luong Yen, Yen Nghia or Gia Lam bus stations.",
    },
  ],

  itineraries: [
    {
      duration: "2D1N",
      label: "Quick highlights",
      days: [
        {
          day: 1,
          title: "Hoan Kiem Lake + Old Quarter + Hoa Lo Prison",
          stops: ["hoan-kiem-lake", "ngoc-son-temple", "hanoi-old-quarter", "hanoi-st-josephs-cathedral", "hoa-lo-prison", "ta-hien-street"],
          notes: "Hoan Kiem Lake and Ngoc Son Temple (50,000 VND) early, before the crowds. Walk the Old Quarter streets to St Joseph's Cathedral for coffee. Hoa Lo Prison in the afternoon (8am-5pm, last entry 4:30pm, 50,000 VND; audio guide recommended). Evening: Ta Hien Street, and on Friday-Sunday nights the streets around the lake become a walking street.",
        },
        {
          day: 2,
          title: "Ho Chi Minh Complex + Temple of Literature + Imperial Citadel",
          stops: ["ho-chi-minh-mausoleum-complex", "one-pillar-pagoda", "temple-of-literature", "imperial-citadel-of-thang-long"],
          notes: "Mausoleum first: open Tue, Wed, Thu, Sat and Sun mornings only (Apr-Oct 7:30-10:30am, to 11am at weekends; Nov-Mar 8-11am, to 11:30am at weekends), closed Mon and Fri, and closed every autumn for maintenance (2026: 4 Sep - 2 Nov). Dress modestly, stay quiet, and don't take photos where it's not allowed. If you're up early, the flag-raising ceremony in front of the mausoleum is at dawn - about 6:30am in winter. Then One Pillar Pagoda next door, the Temple of Literature (Tue-Sun 8am-5pm, closed Mon; 70,000 VND) and the Imperial Citadel of Thang Long (8am-5pm, 100,000 VND).",
        },
      ],
    },
    {
      duration: "3D2N",
      label: "Full city experience",
      days: [
        {
          day: 1,
          title: "Hoan Kiem Lake + Old Quarter + French Quarter",
          stops: ["hoan-kiem-lake", "ngoc-son-temple", "hanoi-old-quarter", "hanoi-st-josephs-cathedral", "ta-hien-street"],
          notes: "Arrive, drop your bags and walk: Hoan Kiem Lake, Ngoc Son Temple, the Old Quarter streets and St Joseph's Cathedral. Try egg coffee (from about 25,000 VND) and Trang Tien ice cream. Evening on Ta Hien Street or the weekend walking street (Fri-Sun).",
        },
        {
          day: 2,
          title: "Ho Chi Minh Complex + Temple of Literature + Hoa Lo Prison",
          stops: ["ho-chi-minh-mausoleum-complex", "one-pillar-pagoda", "temple-of-literature", "hoa-lo-prison"],
          notes: "Start early at the mausoleum (Tue, Wed, Thu, Sat, Sun mornings; closed Mon, Fri and for autumn maintenance - 2026: 4 Sep - 2 Nov). One Pillar Pagoda next door, then the Temple of Literature (70,000 VND). Lunch: bun cha. Hoa Lo Prison in the afternoon (last entry 4:30pm).",
        },
        {
          day: 3,
          title: "Imperial Citadel + West Lake + Long Bien Bridge",
          stops: ["imperial-citadel-of-thang-long", "tran-quoc-pagoda", "west-lake", "long-bien-bridge"],
          notes: "Imperial Citadel of Thang Long in the morning (100,000 VND). Tran Quoc Pagoda on West Lake (7:30-11:30am and 1:30-6:30pm), then a slow walk or ride along the lake. Late afternoon: Dong Xuan Market and a walk across Long Bien Bridge at sunset.",
        },
      ],
    },
    {
      duration: "4D3N",
      label: "City plus a day trip",
      days: [
        {
          day: 1,
          title: "Hoan Kiem Lake + Old Quarter",
          stops: ["hoan-kiem-lake", "ngoc-son-temple", "hanoi-old-quarter", "hanoi-st-josephs-cathedral", "ta-hien-street"],
          notes: "Arrive and get your bearings on foot around the lake and the Old Quarter. Avoid taxis and Grab in the 7-9am and 5-7pm rush hours. Evening on Ta Hien Street.",
        },
        {
          day: 2,
          title: "Ho Chi Minh Complex + Temple of Literature + Hoa Lo Prison",
          stops: ["ho-chi-minh-mausoleum-complex", "one-pillar-pagoda", "temple-of-literature", "hoa-lo-prison"],
          notes: "Full history day, starting early at the mausoleum (closed Mon, Fri and for autumn maintenance - 2026: 4 Sep - 2 Nov).",
        },
        {
          day: 3,
          title: "Day trip: Ninh Binh, Ha Long Bay or Bat Trang",
          stops: [],
          notes: "Ninh Binh or Ha Long Bay - see those pages. For something closer, Bat Trang ceramic village is about 20km from the centre: the spiral-shaped pottery museum, workshops where you can try the wheel, and old kilns in the lanes.",
        },
        {
          day: 4,
          title: "Imperial Citadel + West Lake + Long Bien Bridge",
          stops: ["imperial-citadel-of-thang-long", "tran-quoc-pagoda", "west-lake", "long-bien-bridge"],
          notes: "Imperial Citadel in the morning, Tran Quoc Pagoda and West Lake, then Dong Xuan Market and Long Bien Bridge before you leave.",
        },
      ],
    },
  ],

  cost: {
    budget: "about 950,000 VND/day for a solo traveller (homestay, food, local transport and small souvenirs; flights excluded)",
    notes: "Dorm beds in the Old Quarter from about 100,000 VND; homestay rooms around 400,000 VND a night. Meals average about 60,000 VND: bun oc 30,000-40,000 VND, bun thang 30,000-50,000 VND, bun cha around 45,000 VND, egg coffee from about 25,000 VND, Trang Tien ice cream 8,000-20,000 VND. Entry fees: Imperial Citadel 100,000 VND, Temple of Literature 70,000 VND, Ngoc Son Temple 50,000 VND, Hoa Lo Prison 50,000 VND; the mausoleum is free. Students get discounts at most museums and relics - bring your card.",
  },

  bestTimeSummary: "Sep-Nov is the best time: cool, mostly dry and clear - the season Hanoians love most. Mar-Apr is mild and full of flowers, but often drizzly. May-Aug is hot and humid with heavy summer storms - plan indoor sights for the afternoons. Dec-Feb is the driest period but cold and grey, with nights that can drop below 10°C; it already feels cold by late November.",
  bestMonths: [3, 4, 9, 10, 11, 12],

  recommendedStay: "2-4 days",

  transport: "Walk in the Old Quarter and around Hoan Kiem Lake. Use Grab or Xanh SM for longer distances - easier than street taxis and less risk of being overcharged. Avoid the 7-9am and 5-7pm rush hours. Renting a motorbike is only worth it if you're confident in heavy traffic.",

  rentals: [
    {
      vehicle: "motorbike",
      priceRange: "about 80,000-150,000 VND/day (semi-automatic); 250,000-300,000 VND/day (manual clutch, e.g. Winner, Exciter)",
      notes: "Only if you're confident in heavy traffic - Grab or Xanh SM is cheaper for most trips. Your hotel can usually arrange a bike, but it often costs 20,000-50,000 VND more and you can't always check its condition, so renting directly from a shop is better. Bring your licence (foreign riders: an IDP under the 1968 convention with the motorcycle category, plus your home licence) and a passport or ID; deposits are usually 1-3 million VND or your ID, and rent is paid upfront. Ask for a written contract, and check the mirrors, brakes, tyres and helmet before you ride off.",
      shops: [
        { name: "BIGMOTO", address: "66 Thuoc Bac, Hang Bo, Hoan Kiem", phone: "0859 463 456", notes: "Scooters 130,000-200,000, semi-automatic 140,000, electric 180,000 VND/day. Helmet, raincoat and 1 litre of petrol included; English spoken." },
        { name: "Rising Dragon Motorbike Rental (Thue Xe May Thang Long)", address: "48 Phan Boi Chau, Hoan Kiem", phone: "0988 717 016", url: "https://thuexemaythanglong.com/en/", notes: "Semi-automatic from 130,000, scooters 220,000, manual 250,000 VND/day in Hanoi. English-speaking hotline, 8am-9:30pm." },
        { name: "MOTOGO", address: "7 Lane 267 Hoang Hoa Tham, Ba Dinh", phone: "0338 023 344", url: "https://motogo.vn", notes: "Semi-automatic 80,000-130,000, scooters 120,000-200,000 VND/day. No deposit with the right documents; delivers in Hanoi; can return at the Noi Bai Airport branch." },
        { name: "Thue Xe May Hoan Kiem Ha Noi", address: "38 Tho Xuong, Hang Trong (near St Joseph's Cathedral)", phone: "0856 080 636", notes: "Semi-automatic 150,000, scooters 180,000-300,000 VND/day. Two helmets and a raincoat per bike; open until 11:30pm." },
        { name: "Gia Hung", address: "41 Ngo Huyen, Hang Trong", phone: "0936 345 123", notes: "Semi-automatic 150,000, scooters 250,000 VND/day; delivers in the city." },
        { name: "13535 Motorbike Rental Hanoi", phone: "0398 394 231", url: "https://thuexemaythudo.vn/en/", notes: "Semi-automatic from 130,000, scooters 180,000-220,000, manual 250,000-300,000 VND/day; English-speaking line." },
      ],
      verifiedAt: "2026-09-08",
    },
  ],

  nearbyDestinations: ["ha-long", "ninh-binh", "sapa", "ha-giang", "cao-bang"],

  faqs: [
    {
      question: "How many days do I need in Hanoi?",
      answer: "2 days covers the Old Quarter, Hoan Kiem Lake, the Ho Chi Minh complex and the Temple of Literature. 3 days lets you add the Imperial Citadel, West Lake and Long Bien Bridge at an easier pace. Add a day for Ninh Binh or Bat Trang, or two for a Ha Long Bay cruise.",
    },
    {
      question: "Where should I stay in Hanoi?",
      answer: "The Old Quarter around Hoan Kiem Lake is the easiest base - most sights, food and the weekend walking street are a short walk away - but rooms and streets are cramped and noisy. West Lake (Tay Ho) is quieter, with lake views and sunsets, but further from the main sights. If you'll ride a motorbike, check that your hotel has parking.",
    },
    {
      question: "When can I visit Ho Chi Minh's Mausoleum?",
      answer: "Tuesday, Wednesday, Thursday, Saturday and Sunday mornings only: Apr-Oct 7:30-10:30am (to 11am at weekends and holidays), Nov-Mar 8-11am (to 11:30am). It's closed on Mondays and Fridays, and every autumn for maintenance - in 2026 from 4 September to 2 November, reopening 3 November. Entry is free. Dress modestly, stay quiet in the queue and inside, and don't take photos in restricted areas.",
    },
    {
      question: "How do I get from Noi Bai Airport to the city?",
      answer: "Bus 86 is the easiest cheap option: about 45,000 VND, every 25-30 minutes from 5:15am to 10:10pm, ending at Hanoi Railway Station. Local buses 7, 17, 90 and 109 cost 8,000-9,000 VND but are slower and crowded. A taxi is about 350,000-450,000 VND; Grab and Xanh SM are easy to book from the arrivals hall.",
    },
    {
      question: "When is the Hoan Kiem walking street open?",
      answer: "Every Friday, Saturday and Sunday evening, when the streets around Hoan Kiem Lake and parts of the Old Quarter close to traffic. It's busiest after dark, with street performers, families and food stalls.",
    },
    {
      question: "Can I still visit Train Street?",
      answer: "Yes - the cafes along the tracks were operating as of October 2026, but access has changed before, so check when you go. Stay well back when a train passes and follow the cafe owners' instructions; if the area is closed off, don't try to get in.",
    },
    {
      question: "Where can I see a water puppet show?",
      answer: "At the Thang Long Water Puppet Theatre by Hoan Kiem Lake. Shows run Monday to Saturday at 1:45pm, 3pm, 4:10pm, 5:20pm, 6:30pm, 8pm and 9:15pm, with an extra 9:30am show on Sundays. Tickets cost 135,000 VND - buy a few hours ahead in peak season.",
    },
    {
      question: "Can I visit Ha Long Bay as a day trip from Hanoi?",
      answer: "Yes - plenty of tours do it in a day. But if you have the time and budget and want to slow down, an overnight cruise on the bay is the better experience. See the Ha Long Bay page for details.",
    },
    {
      question: "What food should I try in Hanoi?",
      answer: "Pho, bun cha (around 45,000 VND), bun thang (30,000-50,000 VND), cold snail noodles - bun oc (30,000-40,000 VND), bun dau mam tom, banh cuon, egg coffee (from about 25,000 VND) and Trang Tien ice cream (8,000-20,000 VND). See the full list in [local foods you must try](/provinces/ha-noi#h-food).",
    },
    {
      question: "How do I avoid being overcharged in Hanoi?",
      answer: "Ask the price before you eat, buy or ride, especially in the Old Quarter. Use Grab or Xanh SM instead of street taxis or cyclos without an agreed fare. Service at some famous street-food stalls can be brusque - it's part of the experience, not a reflection of everyone in Hanoi.",
    },
  ],

  emergencyContacts: [
    {
      type: "medical",
      name: "Family Medical Practice Hanoi",
      phone: "024 3843 0748",
      languages: ["English", "Vietnamese"],
      address: "298 I Kim Ma, Van Phuc Compound, Ba Dinh",
      notes: "Private clinic: general practice, emergency medicine and international repatriation.",
      sourceUrl: "https://www.gov.uk/government/publications/list-of-medical-facilities-in-vietnam/list-of-medical-facilities-in-hanoi-and-northern-provinces",
      verifiedAt: "2022-06-24",
    },
    {
      type: "medical",
      name: "Raffles Medical Hanoi",
      phone: "024 3934 0666",
      languages: ["English", "Vietnamese"],
      address: "51 Xuan Dieu, Tay Ho",
      notes: "Private clinic: general practice, emergency medicine and international repatriation.",
      sourceUrl: "https://www.gov.uk/government/publications/list-of-medical-facilities-in-vietnam/list-of-medical-facilities-in-hanoi-and-northern-provinces",
      verifiedAt: "2022-06-24",
    },
    {
      type: "medical",
      name: "Hanoi French Hospital",
      phone: "024 3577 1100",
      languages: ["English", "Vietnamese"],
      address: "1 Phuong Mai, Dong Da",
      notes: "Private general hospital.",
      sourceUrl: "https://www.gov.uk/government/publications/list-of-medical-facilities-in-vietnam/list-of-medical-facilities-in-hanoi-and-northern-provinces",
      verifiedAt: "2022-06-24",
    },
    {
      type: "medical",
      name: "Vinmec Times City International Hospital",
      phone: "024 3974 3556",
      languages: ["Vietnamese", "some English"],
      address: "458 Minh Khai, Hai Ba Trung",
      notes: "Private general hospital.",
      sourceUrl: "https://www.gov.uk/government/publications/list-of-medical-facilities-in-vietnam/list-of-medical-facilities-in-hanoi-and-northern-provinces",
      verifiedAt: "2022-06-24",
    },
    {
      type: "medical",
      name: "Viet Duc University Hospital",
      phone: "024 3825 3531",
      languages: ["English", "Vietnamese"],
      address: "40 Trang Thi, Hoan Kiem",
      notes: "Large public hospital close to the Old Quarter, known for surgery and trauma care.",
      sourceUrl: "https://www.gov.uk/government/publications/list-of-medical-facilities-in-vietnam/list-of-medical-facilities-in-hanoi-and-northern-provinces",
      verifiedAt: "2022-06-24",
    },
    {
      type: "tourist-hotline",
      name: "Hanoi tourist support switchboard",
      phone: "1800 556 896",
      notes: "Free call. For tourist information and complaints about services.",
      sourceUrl: "https://m.hanoitimes.vn/hanoi-launches-new-telephone-switchboard-to-upgrade-tourism-services-2741.html",
      verifiedAt: "2018-10-24",
    },
  ],

  coordinates: {
    lat: 21.0285,
    lng: 105.8542,
  },
  mapPriority: 1,
  mapRank: 11,
  mapZoom: 13,
}
