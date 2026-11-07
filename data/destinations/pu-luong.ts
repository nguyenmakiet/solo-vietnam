import { Destination, FaqItem, MapWaypoint } from "./types"
import { heroUrl } from "@/lib/cloudinary"

// Map-only waypoints for itinerary mapPoints (places without a location page)
const WP = {
  peak: { name: "Pu Luong summit", lat: 20.47801, lng: 105.089032 },
  phoDoan: { name: "Pho Doan market", lat: 20.44719, lng: 105.182737 },
  suoiCham: { name: "Cham Stream (bamboo rafts, water wheels)", lat: 20.386718, lng: 105.20843 },
} satisfies Record<string, MapWaypoint>

export const puLuong: Destination = {
  slug: "pu-luong",
  name: "Pu Luong",
  updatedAt: "2026-11-07",
  province: "Thanh Hoa",
  provinceSlug: "thanh-hoa",
  region: "north",

  description:
    "Pu Luong is a nature reserve in the hills of Thanh Hoa province, about 4 hours from Hanoi: Thai stilt-house villages, rice terraces that turn gold in Sep-Oct, waterfalls and forest climbing to a 1,700m summit. One day on a motorbike covers the main sights - Ban Don and the S-curve road, Kho Muong and its Bat Cave, Hieu Waterfall - and the rest of the trip is for slowing down on a homestay balcony. Many people call it a little Bali, and it's easy to pair with Ninh Binh.",

  tagline: "Rice terraces, stilt houses and slow days in the hills",

  heroImage: heroUrl("pu-luong_apr7bu"),

  tags: ["nature", "trekking", "culture", "photography"],

  travelStyle: ["solo-friendly", "adventure", "hidden-gem", "budget"],

  gettingThere: [
    {
      from: "Hanoi",
      vehicle: "bus",
      duration: "about 4-5 hours",
      cost: "300,000-350,000 VND",
      notes: "29-seat buses (not sleepers) leave around 7am and 2pm; the morning bus picks up in the Old Quarter (for example outside St Joseph's Cathedral at 6:30am) and reaches most homestays around 11:40am. Your Hanoi hostel or your Pu Luong homestay can book it. Limousine vans cost about 300,000-350,000 VND.",
    },
    {
      from: "Hanoi",
      vehicle: "motorbike",
      duration: "about 5 hours",
      cost: "Petrol only",
      notes: "About 170-190km. Via Hoa Binh and Mai Chau is longer but easier; the road over Son - Ba - Muoi is shortest but has many steep passes.",
    },
    {
      from: "Thanh Hoa city / Tho Xuan Airport",
      vehicle: "taxi",
      duration: "about 2 hours",
      notes: "Thanh Hoa city is about 90-100km away and Tho Xuan Airport about 100km. Agree the drop-off point and price in writing before you get in - see the FAQ on transfers.",
    },
    {
      from: "Ninh Binh",
      vehicle: "taxi",
      notes: "About 130km - Pu Luong pairs well with a few days in Ninh Binh. See the Ninh Binh page.",
    },
  ],

  itineraries: [
    {
      duration: "2D1N",
      label: "Quick escape",
      days: [
        {
          day: 1,
          title: "Arrive, the S-curve road and Ban Don",
          stops: ["s-shape-rice-terraces", "don-village"],
          notes: "The 7am bus from Hanoi reaches most homestays around 11:40am. Eat at your accommodation - options near the main road are limited (homestay dishes are about 70,000-80,000 VND). Skip the terraces at midday: there's no shade. Ride out in the late afternoon to the S-curve road, lined with flags, and Ban Don, which has some of the best terrace views in the reserve.",
        },
        {
          day: 2,
          title: "Motorbike loop: Kho Muong, Bat Cave, Hieu Waterfall",
          distance: "~50km",
          stops: ["kho-muong-village", "kho-muong-cave", "hieu-waterfall", "hieu-village"],
          notes: "One day of riding covers the main sights. Kho Muong is a stilt-house village by a stream, reached along a cliff-side road. Kho Muong Bat Cave (10,000 VND including parking): stone steps go about a third of the way in, then it's bare, slippery rock and nearly dark - bring a proper torch and wear shoes, not sandals. Hieu Waterfall (free; parking 5,000 VND): near the end, take the lower path on Google Maps rather than the steep one signed to the hill. The tiered falls run for about 300m; come before or after the lunch-hour crowd. Afternoon bus back to Hanoi - book it through your homestay.",
        },
      ],
    },
    {
      duration: "3D2N",
      label: "Pu Luong at an easy pace - recommended",
      days: [
        {
          day: 1,
          title: "Arrive, the S-curve road and Ban Don",
          stops: ["s-shape-rice-terraces", "don-village"],
          notes: "The 7am bus from Hanoi reaches most homestays around 11:40am. Eat at your accommodation - options near the main road are limited (homestay dishes are about 70,000-80,000 VND). Skip the terraces at midday: there's no shade. Ride out in the late afternoon to the S-curve road, lined with flags, and Ban Don, which has some of the best terrace views in the reserve.",
        },
        {
          day: 2,
          title: "Motorbike loop: Kho Muong, Bat Cave, Hieu Waterfall",
          distance: "~50km",
          stops: ["kho-muong-village", "kho-muong-cave", "hieu-waterfall", "hieu-village"],
          notes: "One day of riding covers the main sights. Kho Muong is a stilt-house village by a stream, reached along a cliff-side road. Kho Muong Bat Cave (10,000 VND including parking): stone steps go about a third of the way in, then it's bare, slippery rock and nearly dark - bring a proper torch and wear shoes, not sandals. Hieu Waterfall (free; parking 5,000 VND): near the end, take the lower path on Google Maps rather than the steep one signed to the hill. The tiered falls run for about 300m; come before or after the lunch-hour crowd.",
        },
        {
          day: 3,
          title: "Pho Doan market, Cham Stream bamboo raft, water wheels",
          stops: [],
          mapPoints: [WP.phoDoan, WP.suoiCham],
          notes: "Pho Doan market is held only on Thursday and Sunday mornings - go early for local specialities. Then head south to the Cham Stream area via Chieng Lau village: the giant bamboo water wheels (about 10km from Ban Don; they turn mainly in the rainy season, entry about 25,000 VND), a bamboo raft or kayak on the stream (about 50,000-70,000 VND per person - prices change, so ask at the pier), and Chay Cave, about a 700m walk, with wild stalactites. You can swim in the stream on the way back. Afternoon bus back to Hanoi - book it through your homestay.",
        },
      ],
    },
    {
      duration: "3D2N",
      label: "Pu Luong, then on to Ninh Binh (one way)",
      days: [
        {
          day: 1,
          title: "Arrive, Ban Don, the S-curve road and Hieu Waterfall",
          stops: ["s-shape-rice-terraces", "don-village", "hieu-waterfall"],
          notes: "The 7am bus from Hanoi arrives before noon. After lunch, explore Ban Don and the S-curve road, then Hieu Waterfall (free; parking 5,000 VND) - take the lower path near the end. Back to your homestay by late afternoon.",
        },
        {
          day: 2,
          title: "Pho Doan market, Cham Stream, then to Ninh Binh",
          stops: [],
          mapPoints: [WP.phoDoan, WP.suoiCham],
          notes: "Pho Doan market is held only on Thursday and Sunday mornings - go early for local specialities. Then head south to the Cham Stream area via Chieng Lau village: the giant bamboo water wheels (about 10km from Ban Don; they turn mainly in the rainy season, entry about 25,000 VND), a bamboo raft or kayak on the stream (about 50,000-70,000 VND per person - prices change, so ask at the pier), and Chay Cave, about a 700m walk, with wild stalactites. You can swim in the stream on the way back. After lunch, take a car to Tam Coc in Ninh Binh (about 130km; tours leave around 3pm and arrive around 5:30-6pm). Night in Tam Coc.",
        },
        {
          day: 3,
          title: "Ninh Binh: Hang Mua, Bich Dong Pagoda, Tam Coc",
          stops: ["hang-mua", "bich-dong-pagoda", "tam-coc"],
          notes: "Climb Hang Mua in the cool morning (486 steps, 150,000 VND, from 7am). Ride on to Bich Dong Pagoda (free, 7:30am-4:30pm), then the Tam Coc boat past its three caves (250,000 VND per adult, entry and boat included). Bus back to Hanoi in the late afternoon. See the Ninh Binh page for more.",
        },
      ],
    },
    {
      duration: "5D4N",
      label: "With the Pu Luong summit trek",
      days: [
        {
          day: 1,
          title: "Arrive, the S-curve road and Ban Don",
          stops: ["s-shape-rice-terraces", "don-village"],
          notes: "The 7am bus from Hanoi reaches most homestays around 11:40am. Eat at your accommodation - options near the main road are limited (homestay dishes are about 70,000-80,000 VND). Skip the terraces at midday: there's no shade. Ride out in the late afternoon to the S-curve road, lined with flags, and Ban Don, which has some of the best terrace views in the reserve.",
        },
        {
          day: 2,
          title: "Motorbike loop: Kho Muong, Bat Cave, Hieu Waterfall",
          distance: "~50km",
          stops: ["kho-muong-village", "kho-muong-cave", "hieu-waterfall", "hieu-village"],
          notes: "One day of riding covers the main sights. Kho Muong is a stilt-house village by a stream, reached along a cliff-side road. Kho Muong Bat Cave (10,000 VND including parking): stone steps go about a third of the way in, then it's bare, slippery rock and nearly dark - bring a proper torch and wear shoes, not sandals. Hieu Waterfall (free; parking 5,000 VND): near the end, take the lower path on Google Maps rather than the steep one signed to the hill. The tiered falls run for about 300m; come before or after the lunch-hour crowd.",
        },
        {
          day: 3,
          title: "Pu Luong summit trek - up, and a night on the peak",
          stops: [],
          mapPoints: [WP.peak],
          notes: "The summit is about 1,700m, and the trail is steep, winding and rough in places. You must register and go with a local guide - book through your homestay or a local operator. The 2-day trek with a night camping on top is the comfortable option (for example Expats' Way, about 115 USD per person including camping, porter and meals). If you're fit, you can do it as a day trek instead - about 6-7 hours up and down - and drop the second trek day. Wear long sleeves and trousers, a hat and hiking shoes, and bring insect and leech repellent, water and snacks.",
        },
        {
          day: 4,
          title: "Down from the summit to Ban Don",
          stops: ["don-village"],
          mapPoints: [WP.peak, "don-village"],
          notes: "Views over the forest, fields and valleys from the top in the morning, then down to Ban Don by mid-afternoon to rest.",
        },
        {
          day: 5,
          title: "Pho Doan market, Cham Stream bamboo raft, water wheels",
          stops: [],
          mapPoints: [WP.phoDoan, WP.suoiCham],
          notes: "Pho Doan market is held only on Thursday and Sunday mornings - go early for local specialities. Then head south to the Cham Stream area via Chieng Lau village: the giant bamboo water wheels (about 10km from Ban Don; they turn mainly in the rainy season, entry about 25,000 VND), a bamboo raft or kayak on the stream (about 50,000-70,000 VND per person - prices change, so ask at the pier), and Chay Cave, about a 700m walk, with wild stalactites. You can swim in the stream on the way back. Afternoon bus back to Hanoi - book it through your homestay.",
        },
      ],
    },
  ],

  bestTimeSummary: "Sep-Oct is the most popular time, when the rice terraces ripen to gold. May-Jun is green, with fast streams and full waterfalls. Feb-Mar brings white ban flowers to the hillsides. Jul-Sep is the rainiest stretch, with muddy trails and leeches in the forest. Avoid Vietnamese public holidays, when the valley gets crowded.",
  bestMonths: [5, 6, 9, 10],
  avoidMonths: [7, 8],
  avoidSummary: "Jul-Aug is the wettest part of the year, with over 300mm of rain a month in the station data, and storms are more likely. Landslides can close mountain roads and trails turn muddy.",

  recommendedStay: "2-3 days, plus 2 for the summit trek",

  transport: "Rent a motorbike from your homestay - ask the owner directly (about 250,000 VND/day, petrol not included). Choose a manual or semi-automatic: automatic scooters can overheat their brakes on the long steep descents. If you don't ride, a xe om driver for the day costs about 400,000 VND. Some roads are narrow and cars can't get far into the villages.",

  rentals: [
    {
      vehicle: "motorbike",
      priceRange: "about 250,000 VND/day",
      notes: "Ask your homestay or guesthouse directly - most rent bikes or can find one. Petrol isn't included, so check the tank when you pick it up. A manual or semi-automatic is safer than an automatic on the steep downhills. You need an International Driving Permit (1968 convention) with the motorcycle category plus your home licence. A xe om driver for the day costs about 400,000 VND.",
      verifiedAt: "2026-11-07",
    },
  ],

  nearbyDestinations: ["ninh-binh", "ha-noi"],

  coordinates: {
    lat: 20.46,
    lng: 105.18,
  },
  mapPriority: 2,
  mapZoom: 11,
// ─── FAQ ─────────────────────────────────────────────────
  faqs: [
    {
      question: "How do I get to Pu Luong from Hanoi?",
      answer: "By bus: 29-seat buses (not sleepers) leave around 7am and 2pm, take about 4-5 hours and cost 300,000-350,000 VND. The morning bus picks up in the Old Quarter and reaches most homestays before noon; your hostel or homestay can book it. By motorbike it's about 170-190km and 5 hours, via Mai Chau (easier) or over Son - Ba - Muoi (shorter, steeper).",
    },
    {
      question: "How many days do I need in Pu Luong?",
      answer: "The sights are 10-20km apart and one day on a motorbike covers the main ones, so 2 days is enough for a quick visit. 3 days and 2 nights lets you add Pho Doan market and the Cham Stream raft without rushing. Add 2 days if you want to trek to the summit.",
    },
    {
      question: "How do I get around Pu Luong?",
      answer: "Rent a motorbike from your homestay - just ask the owner (about 250,000 VND/day, petrol extra). Choose a manual or semi-automatic for the steep descents. If you don't ride, hire a xe om driver for about 400,000 VND/day.",
    },
    {
      question: "Can I climb Pu Luong peak?",
      answer: "Yes, with registration and a local guide. The summit is about 1,700m on a steep, rough trail. The 2-day trek with a night camping on top is the easier way to do it; fit hikers can go up and down in one day, about 6-7 hours. Book through your homestay or a local operator, and bring hiking shoes, long clothes, insect and leech repellent, water and snacks.",
    },
    {
      question: "What should I know about Kho Muong Bat Cave?",
      answer: "It's 10,000 VND including parking. The steps only go about a third of the way in; beyond that it's dark, bare rock and slippery, so bring a real torch and wear proper shoes. Check its page for the current access situation before you go.",
    },
    {
      question: "When is Pho Doan market?",
      answer: "Thursday and Sunday mornings only. Plan your last day around it if you want to see it.",
    },
    {
      question: "How do I avoid transfer scams in Pu Luong?",
      answer: "Transfers to Thanh Hoa city or Tho Xuan Airport (about 100km, 2 hours) are where travellers get caught out: drivers change the route, hand you to another car or drop you short and ask for more money. Agree the drop-off point and the full price in writing before you get in, pay upfront if you can, or book a taxi directly. Also ask prices before ordering food - meals in the reserve cost more than in town.",
    },
    {
      question: "Where should I stay in Pu Luong?",
      answer: "Stilt-house homestays on the main road are cheapest and easy to reach by bus; lodges up among the rice fields are quieter, with better views, but a short ride from the road. Some include a simple breakfast. Book ahead for Sep-Oct and public holidays.",
    },
    {
      question: "When is the best time to visit Pu Luong?",
      answer: "Sep-Oct for golden rice terraces, May-Jun for green fields and full waterfalls, Feb-Mar for ban flowers. Jul-Sep is the rainiest, with muddy trails and leeches.",
    },
    {
      question: "Can I combine Pu Luong with Ninh Binh?",
      answer: "Yes - they're about 130km apart, so a few days in each works well. See the [Ninh Binh page](/destinations/ninh-binh).",
    },
  ] satisfies FaqItem[],
}
