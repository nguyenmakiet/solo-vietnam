import { Location } from "../location"
import { heroUrl } from "@/lib/cloudinary"

export const dongVanOldTown: Location = {
  slug: "dong-van-old-town",
  name: "Đồng Văn Old Town",
  provinces: ["ha-giang"],
  destination: "ha-giang-loop",
  lat: "23°16'26.0\"N",
  lng: "105°21'44.0\"E",
  address: "Phố Cổ Đồng Văn, Đồng Văn, Hà Giang",
  type: ["cultural","town"],
  categories: [],
  experiences: ["culture", "history", "photography", "walking-tour", "food", "markets"],
  tags: ["🏘️ Old Town", "📸 Photography", "🍜 Local Food", "🌙 Night Market"],
  bestTime: "Sep – Nov (buckwheat flowers) or Mar – Apr (cherry blossoms)",
  bestMonths: [3, 4, 9, 10, 11],
  entranceFee: "Free",
  openingHours: "Open 24/7",
  mapUrl: "https://maps.google.com/?q=23.2739,105.3622",
  streetView: {embedUrl: "https://www.google.com/maps/embed?pb=!4v1775795554946!6m8!1m7!1sCAoSHENJQUJJaERQdUVJNjVaYjBBQTdvR2NQUTFEa1k.!2m2!1d23.27842036018012!2d105.3614566593666!3f359.0336625264263!4f-26.821763445450244!5f0.7820865974627469", },
  heroImage: heroUrl("dong-van-old-town_yytvko"),
  gallery: [
    "dong-van-6_b6rdz6",
    "dong-van-5_g9ejgq",
    "dong-van_pjocwa"
  ],
  seoDescription:
    "Đồng Văn Old Town - a preserved French colonial and Qing-era stone quarter perched at 1,600m on Vietnam's northernmost plateau, surrounded by dramatic karst peaks and H'Mông villages.",
  tips: [
    "The old quarter is most atmospheric in the early morning before tour groups arrive - walk the stone alleys before 7am",
    "The Sunday market draws H'Mông, Lô Lô, and Pu Péo minorities from surrounding villages - one of the most genuine markets in the north",
    "Nights are cold year-round at this elevation - bring a layer even in summer",
    "The corn wine (rượu ngô) sold at stalls in the old quarter is the real thing - stronger than it looks",
    "Most guesthouses inside the old quarter are family-run - book ahead during buckwheat flower season (Oct–Nov) when rooms fill fast",
  ],
  content: {
    intro:
      "Đồng Văn Old Town sits at 1,600m on the Đồng Văn Karst Plateau, just 20km from the Chinese border. The historic quarter is a rare surviving cluster of Qing-dynasty merchant houses and French colonial shopfronts built from local stone - dark grey, thick-walled, and built to withstand the plateau's bitter winters. The surrounding landscape of jagged limestone peaks makes it one of the most dramatic town settings in Vietnam.",
    howToGetThere:
      "Đồng Văn is 150km north of Hà Giang city - about 4.5 to 5 hours by motorbike along the famous Hà Giang Loop via Quản Bạ, Yên Minh, and Mèo Vạc passes. The road is well-paved but demanding, with steep switchbacks and sheer drops. Buses run from Hà Giang city to Đồng Văn daily but are slow and infrequent. Most travelers do the loop on a motorbike hired in Hà Giang city (150,000–200,000 VND/day for a semi-auto).",
    whatToExpect:
      "The old quarter covers just a few blocks of stone-paved lanes lined with restored merchant houses, small guesthouses, and local restaurants. In the evening the main square comes alive with food stalls selling thắng cố, bánh cuốn Đồng Văn, and corn wine. The atmosphere is genuinely local - most visitors are Vietnamese weekenders and a small number of foreign travelers doing the loop. The surrounding plateau stretches out in every direction with karst peaks cutting the skyline.",
    travelTips:
      "Đồng Văn is best used as a base for 1–2 nights rather than a quick stop. From here you can day-trip to Mã Pí Lèng Pass (20km), Lũng Cú Flag Tower (24km), and the Séo Lủng H'Mông village market. The Sunday market starts at dawn and winds down by mid-morning - arriving late means missing the best of it. ATMs exist in town but are unreliable - bring enough cash from Hà Giang city.",
  },
  insights: {
    highlights: [
      "Sunday morning H'mong minority market with local homemade foods and traditional crafts",
      "Night atmosphere with lantern-lit streets, cultural performances, and ethnic dance participation",
      "Ancient stone houses with French colonial architecture from 1880s, some nearly 200 years old",
    ],
    thingsToKnow: {
      crowds: "Very busy during holidays, festivals, and weekends. Sunday morning market is peak time for local activity",
      difficulty: null,
      safety: null,
      accessibility: null,
      seasonal: "Visit in winter for better weather. December may have fewer international visitors",
    },
    visitorTips: [
      "Arrive Sunday morning to experience the weekly H'mong market; afternoon arrivals miss it",
      "Visit at night for lantern-lit ambiance, cultural performances, and lively restaurant scene",
      "Budget 150,000 VND for bus from Ha Giang (6 hours); return bus departs from old market square at 10am",
    ],
    faq: [
      { question: "When is the best time to visit Dong Van Ancient Street?", answer: "Sunday morning for the weekly H'mong market and local activities. Evening/night for lantern-lit atmosphere and cultural performances. Winter offers better weather conditions." },
      { question: "What activities and experiences are available?", answer: "Sunday markets, traditional games (cotton ball throwing 10k VND), ethnic dances with locals, bonfires, weekend coffee shop performances, street food, massage services, and souvenir shopping." },
      { question: "How do I get to Dong Van from Ha Giang?", answer: "Regular buses depart from Ha Giang, costing about 150,000 VND and taking approximately 6 hours. Return buses depart from the old market square area." },
    ],
    sentiment: {
      positive: "Travelers consistently praise the authentic cultural experience, well-preserved ancient architecture, vibrant night atmosphere, friendly locals, affordable prices, and excellent food and coffee offerings",
      negative: "Some visitors expected perfectly polished streetscapes but found the town more rugged and worn, though most appreciated this authentic character rather than viewed it negatively",
    },
  },
}