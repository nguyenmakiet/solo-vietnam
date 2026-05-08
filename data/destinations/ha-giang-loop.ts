import { Destination, FaqItem } from "./types"
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
            "ha-giang-city",
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
            "meo-vac-town",
            "mau-due-town",
            "du-gia-village",
            "du-gia-waterfall",
            "ha-giang-city",
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
            "ha-giang-city",
            "quan-ba-heaven-gate",
            "quan-ba-twin-mountains",
            "yen-minh-pine-forest",
            "yen-minh-town",
          ],
          notes: "Relaxed first day. Quan Ba Heaven Gate for the first jaw-dropping view. Yen Minh Pine Forest - an unexpected stretch of highland pine that changes the atmosphere completely. Optional: Lung Khuy Cave near Yen Minh.",
        },
        {
          day: 2,
          title: "Yen Minh → Lung Cu → Dong Van",
          distance: "~80km",
          stops: [
            "yen-minh-town",
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
            "meo-vac-town",
            "mau-due-town",
            "du-gia-village",
            "du-gia-waterfall",
            "ha-giang-city",
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

  // ─── FAQ ─────────────────────────────────────────────────
  faqs: [
    {
      question: "Do I need a special permit for the Ha Giang Loop?",
      answer: "Yes - and it's easier to get than you'd think. The loop passes through border districts that legally require a foreign visitor permit (\"Giay phep vao khu vuc bien gioi\"). Enforcement is random, but skipping it isn't worth the risk: police checkpoints can turn you around mid-route, and some guesthouses won't check you in without one. Get it through your hotel in Ha Giang City the day before you ride - costs around 200,000-250,000 VND and takes 20 minutes.",
    },
    {
      question: "How do I get to Ha Giang from Hanoi?",
      answer: "The most common option is a sleeper bus from Hanoi's My Dinh bus station - journey time is approximately 5-6 hours, with tickets around 200,000-250,000 VND. Several operators run daily departures, arriving in Ha Giang City in the morning ready to start the loop. Book in advance during peak season (October-November). Driving by motorbike from Hanoi is possible but adds 320km before the loop even begins - only worth considering if you're on a longer northern Vietnam trip.",
    },
    {
      question: "How many days do you need for the Ha Giang Loop?",
      answer: "Most travelers do the loop in 4 days / 3 nights, which gives enough time to ride comfortably without rushing through the highlights. If you want flexibility to explore side roads or rest on tough days, 5 days / 4 nights is the better option. Doing it in 2 nights is possible but not recommended - long daily distances on mountain roads means fatigue sets in fast, and that's when accidents happen.",
    },
    {
      question: "What is the best time to visit Ha Giang?",
      answer: "October-November is peak season when buckwheat flowers (tam giac mach) bloom across the Dong Van Karst Plateau - deep pink fields against limestone mountains. January-February brings yellow rapeseed flowers with fewer crowds. March-May offers good weather and manageable visitor numbers. Rainy season runs June-September. Roads are harder but landscapes are dramatically green with far fewer tourists.",
    },
    {
      question: "How much does the Ha Giang Loop cost?",
      answer: "Budget travelers can complete 4 days for around $50-80 USD, excluding transport from Hanoi. This covers motorbike rental (150,000-250,000 VND/day), basic homestay accommodation (100,000-200,000 VND/night), simple meals, and fuel. Hiring an Easy Rider guide adds 500,000-800,000 VND per day but includes navigation, local knowledge, and safety support - worth considering for solo travelers or those new to mountain riding.",
    },
    {
      question: "Is the Ha Giang Loop safe?",
      answer: "The loop is completed safely by thousands of riders every year, but it demands respect. Roads are narrow, steep, and unguarded in places - conditions change quickly in rain or fog. The primary risks are riding-related: inexperience, poor bike condition, and bad weather judgment rather than personal security. Honest self-assessment of your riding ability before deciding to self-ride is the single most important safety decision you'll make.",
    },
    {
      question: "Should I self-ride or hire an Easy Rider?",
      answer: "Self-riding gives full freedom and costs less, but requires solid manual motorbike experience. Ha Giang is not the place to learn - steep passes, loose gravel, and blind corners demand confidence on a manual gearbox. Hiring an Easy Rider costs more but provides local knowledge, navigation, and emergency support. A popular middle option: self-ride with a guide leading on a separate bike, giving independence with a safety net.",
    },
    {
      question: "Do I need an International Driving Permit (IDP)?",
      answer: "Yes - but the type matters. Vietnam only recognizes IDPs issued under the 1968 Vienna Convention, combined with your original home country license. Ha Giang has strict checkpoint enforcement. US, Australian, and Canadian travelers: your country issues IDPs under the 1949 Geneva Convention, which is not valid in Vietnam. Police will treat it as no license at all. Check whether your country has signed the 1968 convention before assuming your IDP works - and get the right one before leaving home, as it cannot be obtained in Vietnam.",
    },
    {
      question: "Can you do the Ha Giang Loop during rainy season?",
      answer: "Yes, but with adjusted expectations. Rainy season (roughly May-September) brings daily afternoon showers, slippery roads, reduced visibility, and occasional landslides blocking routes. The upside: dramatically green landscapes, full waterfalls, and far fewer tourists. If riding during rainy season, start each day early to beat afternoon rain, carry a quality rain poncho, and build flexibility into your schedule for weather delays.",
    },
    {
      question: "Do I need to book accommodation in advance?",
      answer: "During peak flower seasons (October-November and January-February), book at least 3-5 days ahead - especially in Dong Van and Meo Vac where options are limited. Popular homestays fill weeks in advance during buckwheat season. Off-peak, walk-in is generally fine on weekdays. Easy Rider guides should be booked in advance year-round as quality guides fill their calendars quickly.",
    },
  ] satisfies FaqItem[],
}
