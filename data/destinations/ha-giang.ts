import { Destination, FaqItem } from "./types"
import { heroUrl } from "@/lib/cloudinary"

export const haGiang: Destination = {
  slug: "ha-giang",
  name: "Ha Giang",
  updatedAt: "2026-10-23",
  // "Ha Giang Loop" is what travelers search for: kept in the page title
  seoTitle: "Ha Giang Loop & Ha Giang Travel Guide",
  province: "Ha Giang",
  provinceSlug: "ha-giang",
  region: "north",

  description:
    "The Ha Giang Loop is a motorbike route of about 350km through Vietnam's far north and the Dong Van Karst Plateau UNESCO Global Geopark - limestone passes, H'Mong and Lo Lo villages, buckwheat fields in autumn, and the Nho Que River canyon below Ma Pi Leng Pass, one of the deepest gorges in Southeast Asia. Ha Giang city is the starting point; the loop runs through Quan Ba, Yen Minh, Dong Van and Meo Vac, then back via Mau Due and Du Gia. Ride it yourself if you're confident on mountain roads, or sit behind a local Easy Rider - either way, go slow: this isn't a place to rush between photo stops.",

  tagline: "A 350km mountain loop through karst, passes and minority villages",

  heroImage: heroUrl("ha-giang-loop_e8myfw"),

  tags: ["motorcycling", "adventure", "nature", "culture", "trekking"],

  travelStyle: ["solo-friendly", "adventure", "challenging", "budget"],

  // ─── Getting There ───────────────────────────────────────
  gettingThere: [
    {
      from: "Hanoi",
      vehicle: "bus",
      duration: "6-7 hours",
      cost: "200,000-350,000 VND",
      notes: "Sleeper buses and limousine vans leave almost hourly from My Dinh, Luong Yen, Yen Nghia and Gia Lam bus stations. Overnight buses arrive early in the morning, ready to pick up a bike and start the loop. Most drop off near the rental shops in Ha Giang city.",
    },
    {
      from: "Hanoi",
      vehicle: "motorbike",
      duration: "8-10 hours",
      cost: "Petrol only",
      notes: "Experienced riders only - about 300km before the loop even starts. Some rental shops let you drop the bike back in Hanoi for a fee instead.",
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
          title: "Ha Giang → Quan Ba → Yen Minh → Lung Cu (night in Lo Lo Chai)",
          distance: "~160km",
          stops: ["ha-giang-city", "quan-ba-heaven-gate", "quan-ba-twin-mountains", "yen-minh-pine-forest", "tham-ma-pass", "hmong-king-palace", "lung-cu-flag-tower", "lo-lo-chai-village"],
          notes: "The longest day - leave by 7am and keep stops short. Quan Ba Heaven Gate and the Twin Mountains first, lunch in Yen Minh, then Tham Ma Pass and the Hmong King Palace (7:30am-5pm, 20,000-25,000 VND). Reach Lung Cu Flag Tower (8am-5pm, 25,000 VND) before it closes and sleep in Lo Lo Chai, the farthest point of the loop - try a night in a traditional rammed-earth Lo Lo house. Don't ride the passes after about 7pm.",
        },
        {
          day: 2,
          title: "Lo Lo Chai → Dong Van → Ma Pi Leng Pass → Nho Que River → Meo Vac",
          distance: "~60km",
          stops: ["dong-van-old-town", "ma-pi-leng-pass", "nho-que-river"],
          notes: "The best day of the loop. Dong Van Old Town in the morning - if it's Sunday, the market is busiest 7-10am. Then Ma Pi Leng Pass at your own pace, stopping at every viewpoint. For the Nho Que boat, don't search \"Nho Que River\" on Google Maps (it sends you toward Cao Bang) - search \"Tu San\" and follow the main road, not forest tracks. The boat is about 150,000 VND per person including the shuttle down to the pier (2026); aim to be there by 4pm. Night in Meo Vac.",
        },
        {
          day: 3,
          title: "Meo Vac → Mau Due → Du Gia → Ha Giang",
          distance: "~150km",
          stops: ["meo-vac-town", "mau-due-town", "du-gia-village", "du-gia-waterfall", "ha-giang-city"],
          notes: "Early start - the Meo Vac to Mau Due stretch has a lot of potholes. Lunch in Du Gia, a quiet Tay village in a river valley, and a swim at Du Gia Waterfall if the weather allows. Back in Ha Giang by late afternoon for the night bus to Hanoi.",
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
          stops: ["ha-giang-city", "quan-ba-heaven-gate", "quan-ba-twin-mountains", "lung-khuy-cave", "yen-minh-pine-forest", "yen-minh-town"],
          notes: "Relaxed first day to get used to the bike. Quan Ba Heaven Gate for the first big view over the Twin Mountains, then Lung Khuy Cave just beyond them (30,000-50,000 VND, about 1-2 hours with the walk up - go in daylight). Afternoon through the Yen Minh Pine Forest, a stretch of highland pine that changes the whole atmosphere. Night in Yen Minh.",
        },
        {
          day: 2,
          title: "Yen Minh → Tham Ma → Hmong King Palace → Lung Cu (night in Lo Lo Chai)",
          distance: "~80km",
          stops: ["yen-minh-town", "tham-ma-pass", "hmong-king-palace", "lung-cu-flag-tower", "lo-lo-chai-village"],
          notes: "Tham Ma Pass as the plateau opens up - some children here push flowers and hair braiding for money (see FAQ). Hmong King Palace (Vuong Family Mansion) at Sa Phin, then Lung Cu Flag Tower near Vietnam's northernmost point. Sleep in Lo Lo Chai below the tower, ideally in a rammed-earth Lo Lo house - the Lo Lo culture is found in very few places.",
        },
        {
          day: 3,
          title: "Lo Lo Chai → Dong Van → Ma Pi Leng Pass → Meo Vac",
          distance: "~60km",
          stops: ["dong-van-old-town", "ma-pi-leng-pass", "nho-que-river"],
          notes: "Short in distance, biggest in impact. Morning in Dong Van Old Town (Sunday market 7-10am). Ma Pi Leng Pass slowly, with every viewpoint. Nho Que boat from the Tu San pier - search \"Tu San\" on Google Maps, not \"Nho Que River\" - about 150,000 VND per person including the shuttle (2026). Night in Meo Vac; off the passes before dark.",
        },
        {
          day: 4,
          title: "Meo Vac → Mau Due → Du Gia → Ha Giang",
          distance: "~150km",
          stops: ["meo-vac-town", "mau-due-town", "du-gia-village", "du-gia-waterfall", "ha-giang-city"],
          notes: "Early start - potholes between Meo Vac and Mau Due. Lunch in Du Gia and a swim at the waterfall if it's warm. Back in Ha Giang by late afternoon.",
        },
      ],
    },
  ],

  // ─── Cost ────────────────────────────────────────────────
  cost: {
    budget: "400,000-700,000 VND/day",
    midRange: "700,000-1,200,000 VND/day",
    comfortable: "1,200,000-2,500,000 VND/day",
    notes: "Budget: self-ride rental bike + homestay + local food. Mid-range: Easy Rider (a local driver takes you on their bike, about 500,000-800,000 VND/day extra). Comfortable: car or jeep tour with accommodation included. Entry fees are small: Lung Cu Flag Tower 25,000 VND, Hmong King Palace 20,000-25,000 VND, Lung Khuy Cave 30,000-50,000 VND; the Nho Que boat is about 150,000 VND. Homestay beds from about 100,000 VND, private rooms 200,000-400,000 VND. Foreign visitors also need the border-area permit, about 10 USD. Bring cash: ATMs are scarce after Ha Giang city.",
  },

  // ─── Practical ───────────────────────────────────────────
  bestTimeSummary: "Oct-Nov is peak season: buckwheat flowers on the plateau and dry, clear days - book ahead. Sep has golden rice terraces around Hoang Su Phi and Quan Ba. Jan-Feb brings yellow mustard and peach and plum blossom with fewer crowds, but the plateau is cold, often foggy and can drop near freezing. Mar-Apr is mild and clear. Jun-Aug is the wettest period, with landslides and slippery roads; May is when the terraced fields fill with water.",
  bestMonths: [1, 2, 3, 4, 9, 10, 11],

  recommendedStay: "3-5 days for the full loop (4 is ideal)",

  transport: "By motorbike - the loop is the destination. A semi-automatic (Honda Wave/Blade, Yamaha Sirius) is the usual loop bike; avoid small scooters like the Vision with a passenger, they struggle on the climbs. Choose a well-maintained bike over the cheapest one and check brakes, tyres and lights before you leave. If you're not confident on mountain passes or don't have a valid licence, go with an Easy Rider or by car. Don't ride the passes after about 7pm, and don't trust Google Maps blindly on back roads - ask your homestay.",

  rentals: [
    {
      vehicle: "motorbike",
      priceRange: "150,000-250,000 VND/day (semi-automatic); 380,000-650,000 VND/day (manual clutch, e.g. Honda XR150)",
      notes: "Most shops include a helmet and raincoat, and ask for a passport rather than a cash deposit. Foreign riders need a valid licence (see FAQ). Some shops let you drop the bike in Dong Van, Meo Vac or even Hanoi for a fee.",
      shops: [
        { name: "Loopmoto", address: "286 Tran Phu or 52 Nguyen Du, Ha Giang city", phone: "0334 279 999", url: "https://loopmoto.vn", notes: "Semi-automatic and XR150; newer bikes." },
        { name: "MOTOGO", area: "Cau Me, near the bus station", phone: "0338 023 344", url: "https://motogo.vn", notes: "One-way drop-off in Dong Van or Meo Vac (300,000-350,000 VND) or Hanoi/Ninh Binh (400,000-500,000 VND)." },
        { name: "QT Motorbikes and Tours", area: "Lam Dong, Phuong Thien - about 1km from the bus station", phone: "0975 278 711", url: "https://www.facebook.com/share/1DRjvDyExk/", notes: "Also rents the Honda Air Blade automatic and the XR150." },
        { name: "Phuot House Motorbikes & Tours", address: "01 Nguyen Trai, Ha Giang city", phone: "0944 686 366", url: "https://www.roadkingshagiang.com/", notes: "Helmet, raincoat, luggage straps and 1 litre of petrol included. Self-drive tours check your riding on day 1." },
        { name: "Hong Hao", address: "10 Pham Hong Thai, Ha Giang city", phone: "0353 982 928", url: "https://www.facebook.com/share/1F1r5ED9gy/" },
        { name: "Giang Son", area: "Km 3 Cau Me, about 400m from the bus station", phone: "0941 719 955", url: "https://www.facebook.com/share/16Jyg47BwoN/" },
      ],
      verifiedAt: "2026-09-08",
    },
    {
      vehicle: "scooter",
      priceRange: "about 200,000 VND/day",
      notes: "An automatic like the Honda Air Blade 125 is fine for one rider; with a passenger, take a semi-automatic or manual instead.",
      verifiedAt: "2026-09-08",
    },
  ],

  // ─── Nearby ──────────────────────────────────────────────
  nearbyDestinations: ["cao-bang", "sapa"],

  coordinates: {
    lat: 23.1167,
    lng: 105.05,
  },
  mapPriority: 1,
  mapRank: 8,
  mapZoom: 11,

  // ─── FAQ ─────────────────────────────────────────────────
  faqs: [
    {
      question: "Do I need a special permit for the Ha Giang Loop?",
      answer: "Yes. Foreign visitors need a border-area permit for the districts along the loop - about 10 USD. Police checkpoints can turn you back or fine you without it, and homestays also register your stay with the local police. If you book a tour or an Easy Rider, they usually arrange it. Travelling independently, get it yourself at the [Immigration Office in Ha Giang city, 415 Tran Phu](https://maps.app.goo.gl/gmKdMonnkZE9LxpC8) (ward Ha Giang 2) the day before you ride - bring your passport.",
    },
    {
      question: "How do I get to Ha Giang from Hanoi?",
      answer: "By sleeper bus or limousine van from My Dinh, Luong Yen, Yen Nghia or Gia Lam bus stations - about 6-7 hours and 200,000-350,000 VND. Night buses arrive early in the morning, so you can pick up a bike and start riding the same day. Book ahead in Oct-Nov.",
    },
    {
      question: "How many days do you need for the Ha Giang Loop?",
      answer: "4 days and 3 nights is the sweet spot. 3 days works but the first day is long (about 160km on mountain roads). Don't cram in too many stops - the passes are slower and the distances longer than they look on a map, and tired riders are when accidents happen. A popular plan: first night in Lo Lo Chai, the farthest point, second in Dong Van or Meo Vac.",
    },
    {
      question: "What is the best time to visit Ha Giang?",
      answer: "Oct-Nov for buckwheat flowers and clear weather (busiest). Jan-Feb for mustard flowers and blossom with fewer people, but it's cold and foggy on the plateau. Mar-Apr is mild and clear. Jun-Aug is the wettest, with landslide risk.",
    },
    {
      question: "How much does the Ha Giang Loop cost?",
      answer: "Self-riding, budget around 400,000-700,000 VND a day: bike rental 150,000-250,000 VND, homestay from about 100,000 VND, simple meals, fuel and small entry fees. An Easy Rider adds about 500,000-800,000 VND a day. Carry cash - ATMs are rare once you leave Ha Giang city.",
    },
    {
      question: "Is the Ha Giang Loop safe?",
      answer: "Thousands ride it every year, but it demands respect. Roads are narrow, steep and unguarded in places, and conditions change fast in rain or fog. Don't ride the passes after dark (roughly 7pm), check your bike before each day, and ask locals about road conditions rather than trusting Google Maps on back roads. The main risks are riding-related, not personal safety.",
    },
    {
      question: "Should I self-ride or hire an Easy Rider?",
      answer: "Self-riding is cheaper and freer, but only if you're confident on a semi-automatic or manual bike on steep, gravelly mountain roads - Ha Giang is not the place to learn. An Easy Rider costs more but gives you a local driver, navigation and help if something goes wrong. If neither feels right, a car or jeep tour still covers the main viewpoints.",
    },
    {
      question: "Do I need an International Driving Permit (IDP)?",
      answer: "Yes, and the type matters. Vietnam recognises IDPs issued under the 1968 Vienna Convention that include the motorcycle category, carried with your home licence - and the two must match. IDPs issued under the 1949 Geneva Convention only (for example from the US, Canada or Australia) are not valid here, and police will treat you as unlicensed - which also usually voids your travel insurance after an accident. You can't get an IDP once you're in Vietnam.",
    },
    {
      question: "What should I know about the children at Tham Ma Pass?",
      answer: "Most children in Ha Giang are friendly, but at Tham Ma Pass some push flower baskets into your hands or start braiding your hair and then ask for money. If you don't want a photo with flowers, don't take them. If you want a braid, say clearly that only one or two children should do it and agree the price first - 20,000-30,000 VND is fair, no more than 50,000. Giving sweets instead of money is better for the kids.",
    },
    {
      question: "How do I find the Nho Que River boat?",
      answer: "Don't search \"Nho Que River\" on Google Maps - it can send you toward Cao Bang. Search \"Tu San\" instead, choose the car route and stay on the main road rather than forest tracks. Boats run roughly 7am-6:30pm and cost about 150,000 VND per person including the shuttle down to the pier (2026). Arrive by 4pm so you can ride back over Ma Pi Leng in daylight.",
    },
    {
      question: "Can you do the Ha Giang Loop in the rainy season?",
      answer: "Yes, with flexible plans. Jun-Aug brings frequent afternoon rain, slippery roads, low visibility and occasional landslides. Start early, carry a good poncho and keep a spare day. The upside is green landscapes, full waterfalls and few tourists.",
    },
    {
      question: "Do I need to book accommodation in advance?",
      answer: "In Oct-Nov and around Tet, book Dong Van, Meo Vac and Lo Lo Chai a few days ahead - options are limited. Choose somewhere clean, warm and close to your route rather than picking from photos alone; you'll only sleep there, but good rest matters for the next day's ride. Off-season, walking in is usually fine.",
    },
  ] satisfies FaqItem[],
}
