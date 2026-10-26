import { Destination } from "./types"
import { heroUrl } from "@/lib/cloudinary"

export const sapa: Destination = {
  slug: "sapa",
  name: "Sapa",
  updatedAt: "2026-10-26",
  province: "Lao Cai",
  provinceSlug: "lao-cai",
  region: "north",

  description:
    "Sapa is a former French hill station at about 1,600m in Vietnam's far northwest, surrounded by some of the most dramatic rice terraces in the country, H'Mong, Red Dao and Giay villages, and Fansipan, the highest peak in Indochina. The town itself is busy and heavily built-up, but the valleys below are still worth every step. Come for the trekking: walk the Muong Hoa Valley with a local guide, sleep in a village homestay, and get out early before the day-trip crowds.",

  tagline: "Rice terraces, minority villages and the roof of Indochina",

  heroImage: heroUrl("sapa_yxtsoq"),

  tags: ["mountain", "nature", "trekking", "culture"],

  travelStyle: ["solo-friendly", "adventure", "budget", "challenging"],

  // ─── Getting There ───────────────────────────────────────
  gettingThere: [
    {
      from: "Hanoi",
      vehicle: "bus",
      duration: "5.5-7 hours",
      cost: "270,000-450,000 VND",
      notes: "Limousine vans (about 5.5-6 hours, 320,000-450,000 VND) usually pick up from Old Quarter hotels or offices; sleeper buses (6-7 hours, 270,000-370,000 VND) leave from My Dinh or Nuoc Ngam bus stations. Most drop off at Sapa bus station on Dien Bien Phu, about 800m from the church square - confirm pickup and drop-off when booking.",
    },
    {
      from: "Hanoi",
      vehicle: "train",
      duration: "about 8 hours to Lao Cai + 1 hour to Sapa",
      cost: "290,000-790,000 VND, plus 40,000-50,000 VND transfer",
      notes: "Night trains SP1 and SP3 leave Hanoi around 9:30-10pm and reach Lao Cai around 5:30-6am. A 6-berth soft sleeper is about 540,000 VND, a 4-berth about 790,000 VND; private carriages cost more. Minivans wait at Lao Cai station for the 35km, 1-hour climb to Sapa.",
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
          title: "Fansipan (if clear) + Cat Cat Village",
          stops: ["fansipan", "cat-cat-village"],
          notes: "Arrive early on the night bus or train. If the sky is clear, go straight up Fansipan - the cable car runs from about 8am and clouds usually build later in the day (800,000 VND weekdays, 850,000 VND Saturdays and holidays). If it's cloudy, swap: Cat Cat in the morning and Fansipan tomorrow only if it clears. From the top cable station, climb about 600 steps or take the small funicular to the 3,143m summit marker. Afternoon: walk down to Cat Cat Village, about 2km below town (150,000 VND). Evening in Sapa town - the stone church square and the night market for grilled skewers, grilled rice paper and hot soy milk.",
        },
        {
          day: 2,
          title: "Muong Hoa Valley trek - Lao Chai + Ta Van",
          stops: ["muong-hoa-valley", "ta-van-village"],
          notes: "The classic Sapa trek: about 10-12km downhill through the terraces of the Muong Hoa Valley to Lao Chai (Black H'Mong) and Ta Van (Giay). Start by 8am, go with a local guide, and pay the Lao Chai - Ta Van ticket at the checkpoint. A car or motorbike taxi brings you back up to Sapa for the afternoon bus to Hanoi.",
        },
      ],
    },
    {
      duration: "3D2N",
      label: "Trek and village homestay",
      days: [
        {
          day: 1,
          title: "Arrive + Cat Cat Village + Sapa town",
          stops: ["cat-cat-village"],
          notes: "Arrive in the morning, drop your bags and walk down to Cat Cat Village (150,000 VND) - touristy, but an easy first walk with the waterfall at the bottom. Late afternoon, watch the little Muong Hoa mountain train run below Sun Plaza from one of the cafes on the valley side of town. Evening around the stone church, the lake and the night market - try thang co (H'Mong stew) or a salmon or sturgeon hotpot, a local speciality of the cold-water farms.",
        },
        {
          day: 2,
          title: "Muong Hoa Valley trek + Ta Van homestay",
          stops: ["muong-hoa-valley", "ta-van-village"],
          notes: "Guided trek through the Muong Hoa Valley to Lao Chai and Ta Van, 10-14km depending on the route, with lunch in a village. Sleep in a Ta Van homestay instead of going back to town - family dinner, rice wine and a quiet valley once the day-trippers leave.",
        },
        {
          day: 3,
          title: "Ta Van at dawn + Fansipan",
          stops: ["ta-van-village", "fansipan"],
          notes: "Walk Ta Van at dawn before the tour groups arrive, then back up to Sapa. Fansipan in the late morning if the sky is clear; if it's in cloud, skip it - the view is the whole point. Afternoon bus back to Hanoi.",
        },
      ],
    },
    {
      duration: "4D3N",
      label: "Trek, homestay and the high passes",
      days: [
        {
          day: 1,
          title: "Arrive + Cat Cat Village",
          stops: ["cat-cat-village"],
          notes: "Arrive, settle in, and take the easy walk down to Cat Cat. Evening in town.",
        },
        {
          day: 2,
          title: "Muong Hoa Valley trek + Ta Van homestay",
          stops: ["muong-hoa-valley", "ta-van-village"],
          notes: "Full-day guided trek and a night in a Ta Van homestay. Family dinner, rice wine, and often no phone signal.",
        },
        {
          day: 3,
          title: "Back to Sapa + Ta Phin (Red Dao)",
          stops: [],
          notes: "Early walk in Ta Van, then back to Sapa by midday. Afternoon: Ta Phin, northeast of town - a Red Dao village known for its herbal baths, a different culture from the H'Mong villages of the Muong Hoa Valley.",
        },
        {
          day: 4,
          title: "Fansipan + O Quy Ho Pass",
          stops: ["fansipan", "o-quy-ho-pass"],
          notes: "Fansipan at the first cable car if it's clear. Afternoon by motorbike or car northwest over Tram Ton toward O Quy Ho Pass, one of the highest and longest mountain passes in Vietnam - Silver Waterfall (small entry fee) is on the way. Sunset from the pass is around 5-5:30pm, but cloud can roll in fast. Ride back carefully in the last light, then the late bus or night train to Hanoi.",
        },
      ],
    },
  ],

  // ─── Cost ────────────────────────────────────────────────
  cost: {
    budget: "300,000-600,000 VND/day",
    midRange: "600,000-1,200,000 VND/day",
    comfortable: "1,200,000+ VND/day",
    notes: "Fansipan cable car 800,000 VND (850,000 VND on Saturdays and holidays), plus optional funicular trains (Muong Hoa train from town, Do Quyen train to the summit) and a small sightseeing fee. Buy cable car tickets only at the official counters or website - touts sell used or fake ones. Cat Cat Village 150,000 VND. Silver Waterfall and Love Waterfall have small entry fees. Lao Chai - Ta Van trekking ticket about 75,000 VND. Dorm beds from about 100,000 VND. Motorbike rental about 80,000-170,000 VND/day (manual clutch bikes 200,000-600,000 VND). Guides and village homestays vary - agree the price before you start.",
  },

  // ─── Practical ───────────────────────────────────────────
  bestTimeSummary: "Sep-Oct is the classic season: the terraces turn gold before the mid-Sep to early-Oct harvest, with dry, cool days. Mar-May is mild and green, and May-Jun is when the terraces are flooded and replanted. Jun-Aug brings heavy rain, slippery trails and landslide risk. Dec-Feb is cold and often foggy - Fansipan and the high passes can see frost or occasional snow - but it's quiet and good for trekking on clear days.",
  bestMonths: [3, 4, 5, 9, 10, 11],

  recommendedStay: "2-4 days",

  transport: "Walk for the town and nearby villages. For Ta Phin, Silver Waterfall and O Quy Ho Pass, rent a motorbike (about 80,000-170,000 VND/day for semi-automatics and scooters) or take a car or motorbike taxi; Grab exists but cars can be slow to arrive. Mountain roads are steep and often foggy - don't ride the passes after dark.",

  rentals: [
    {
      vehicle: "motorbike",
      priceRange: "80,000-120,000 VND/day (semi-automatic, e.g. Honda Wave); 200,000-600,000 VND/day (manual clutch, e.g. Winner, XR150, CB300R)",
      notes: "A rental \"day\" in Sapa usually runs 5:30am-9pm, not 24 hours - agree overnight or multi-day terms first. Most shops ask for a passport (or a 1-2 million VND cash deposit) and include helmets and raincoats; some charge about 150,000 VND/day extra for long trips to Y Ty, Bat Xat or Ha Giang. Semi-automatic or manual bikes handle the steep roads better than automatic scooters. Foreign riders need a valid licence - an IDP under the 1968 convention with the motorcycle category, plus your home licence.",
      shops: [
        { name: "Tien VIP", address: "04 and 28 Muong Hoa, Sapa", phone: "0969 999 583", url: "https://www.facebook.com/share/1E6KDgrQgH/", notes: "Wave 100,000, Air Blade/Vision 120,000-150,000, PG1 200,000 VND/day. Free delivery in town; helmet and raincoat included." },
        { name: "Hoc Ly", address: "08 Hoang Lien (behind Sun Plaza) or 22 Thanh Cong (near the bus station)", phone: "0915 190 874", notes: "Semi-automatic and scooters; delivers to hotels." },
        { name: "Nguyen Cuong", address: "634 Dien Bien Phu, Sapa", phone: "0973 161 969", notes: "Widest range, from Wave to Winner, XR150 and CB300R. Free delivery within 3km; half-day rentals; 2 helmets and 2 raincoats per bike." },
        { name: "Mr Chinh", area: "Fansipan street, near the Stone Church", phone: "0988 628 515", notes: "Semi-automatic, scooters and manual bikes; free delivery around the Stone Church and Love Market." },
        { name: "Mr Co", address: "19 Dong Loi, Sapa", phone: "0986 073 559", notes: "Flexible delivery; no extra fee if returned the same day." },
      ],
      verifiedAt: "2026-09-25",
    },
    {
      vehicle: "scooter",
      priceRange: "100,000-170,000 VND/day (Honda Vision, Air Blade)",
      notes: "Fine around town and to Cat Cat; with a passenger or on the steep roads to Ta Van and O Quy Ho, a semi-automatic or manual bike is safer.",
      verifiedAt: "2026-09-25",
    },
  ],

  // ─── Nearby ──────────────────────────────────────────────
  nearbyDestinations: ["ha-giang", "ha-noi"],

  faqs: [
    {
      question: "How do I get from Hanoi to Sapa?",
      answer: "By limousine van or sleeper bus (5.5-7 hours, about 270,000-450,000 VND) or by night train to Lao Cai (about 8 hours, 290,000-790,000 VND) and a 1-hour minivan up to Sapa. The bus is faster and drops you in town; the train is more comfortable for sleeping. Both let you arrive early and start walking the same day.",
    },
    {
      question: "How many days do I need in Sapa?",
      answer: "2 days covers Cat Cat, a Muong Hoa Valley trek and Fansipan if the weather allows. 3 days lets you sleep in a village homestay, which is the best part of Sapa. With 4 days, add Ta Phin and the O Quy Ho Pass.",
    },
    {
      question: "Do I need a guide to trek in Sapa?",
      answer: "Not legally for the main Muong Hoa Valley trail to Lao Chai and Ta Van, but a local guide makes it much better - they know the paths between the terraces, the villages and the families. Many guides are H'Mong women from the villages, often booked through homestays. For Fansipan on foot and longer routes in the national park, go with a licensed guide.",
    },
    {
      question: "Is the Fansipan cable car worth it?",
      answer: "On a clear day, yes - the view over the Hoang Lien range is the best in northern Vietnam. In cloud you see nothing, and the ticket (800,000 VND, 850,000 VND on Saturdays and holidays) is a lot to pay for fog. Check the summit webcam or the sky in the morning and go early; clouds usually build in the afternoon. The summit is about 3,143m and much colder than town - bring a jacket.",
    },
    {
      question: "Why do village women walk with me on the trek?",
      answer: "Some H'Mong women join trekkers, chat and help on slippery sections, then ask you to buy handicrafts at the end. It's friendly but it is a sales arrangement. If you don't want to buy, say so politely at the start. If you do, agree on prices before you hand over money.",
    },
    {
      question: "What scams should I watch for in Sapa?",
      answer: "Mostly small ones. Touts selling Fansipan or attraction tickets \"cheaper than the counter\" may sell used or fake tickets - buy at official counters or online. Motorbike taxis and cars can quote very high prices to far villages like Ta Van and Hau Thao, so agree the price first or use Grab. Some town restaurants don't show prices - check the menu before ordering. \"Wild\" lingzhi, ginseng-type roots and forest honey at the markets are often imported or farmed. Paid \"village festival\" shows you get invited to are usually staged.",
    },
    {
      question: "When are the rice terraces green or golden?",
      answer: "Flooded and freshly planted in May-Jun, green in Jul-Aug, and golden in September until the harvest around late September to early October. After that the fields are cut and brown until spring.",
    },
    {
      question: "Does it snow in Sapa?",
      answer: "Occasionally. Cold snaps between December and February can bring frost or a light snowfall, mostly on Fansipan and the high passes. Pack warm layers if you travel in winter.",
    },
  ],

  coordinates: {
    lat: 22.3364,
    lng: 103.8438,
  },
  mapPriority: 1,
  mapRank: 6,
  mapZoom: 13,
}
