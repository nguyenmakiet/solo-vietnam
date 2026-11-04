import { Destination, MapWaypoint } from "./types"
import { heroUrl } from "@/lib/cloudinary"

// Map-only waypoints for itinerary mapPoints (places without a location page)
const WP = {
  anDinh: { name: "An Dinh Palace", lat: 16.456591, lng: 107.598271 },
  truongTien: { name: "Truong Tien Bridge", lat: 16.46911, lng: 107.5886005 },
} satisfies Record<string, MapWaypoint>

export const hue: Destination = {
  slug: "hue",
  name: "Hue",
  updatedAt: "2026-11-04",
  province: "Thua Thien Hue",
  provinceSlug: "hue",
  region: "central",

  description:
    "Hue was Vietnam's capital under the Nguyen Dynasty from 1802 to 1945, and its monuments are a UNESCO World Heritage Site: the walled Imperial City, royal tombs in the hills along the Perfume River, and pagodas like Thien Mu. The food is its own cuisine - bun bo, com hen, banh beo and dozens of small cakes - and the pace is slower than Da Nang or Hoi An. Give it two days at least: one for the Imperial City, one for the tombs.",

  tagline: "Imperial citadel, royal tombs and Perfume River evenings",

  heroImage: heroUrl("hue-citadel_g9szq6"),

  tags: ["history", "culture", "heritage", "food", "pagoda"],

  travelStyle: ["solo-friendly", "budget", "family", "easy"],

  gettingThere: [
    {
      from: "Da Nang",
      vehicle: "train",
      duration: "about 2.5-4 hours",
      cost: "from 330,000 VND (heritage train)",
      notes: "The heritage train runs along the coast around the Hai Van Pass: HD2 leaves Da Nang at 7:05am (arrives 11:03am) and HD4 at 3:20pm (arrives 6:15pm); southbound HD1 leaves Hue at 7:05am and HD3 at 2:30pm. Book ahead on dsvn.vn and pick a seat on the sea side. Regular trains take about 2.5 hours.",
    },
    {
      from: "Da Nang",
      vehicle: "bus",
      duration: "2-3 hours",
      cost: "from about 143,000 VND (limousine)",
      notes: "Limousine vans and shared cars go through the Hai Van Tunnel - faster than the train, but no sea views. To ride the Hai Van Pass, see the one-way motorbike rentals under Getting around.",
    },
    {
      from: "Hanoi",
      vehicle: "train",
      duration: "about 12.5-14 hours",
      cost: "400,000-900,000 VND",
      notes: "Overnight sleeper; pick an air-conditioned berth in hot weather. Book on dsvn.vn.",
    },
    {
      from: "Hanoi",
      vehicle: "bus",
      duration: "overnight, about 12 hours",
      cost: "250,000-300,000 VND",
      notes: "Sleeper buses leave around 6pm and arrive around 6am. Double cabins cost more.",
    },
    {
      from: "Hanoi / Ho Chi Minh City",
      vehicle: "fly",
      duration: "about 1h15 from Hanoi, 1h30 from Ho Chi Minh City",
      cost: "return from about 1,600,000 VND (Hanoi) or 1,300,000 VND (Ho Chi Minh City)",
      notes: "Phu Bai Airport is about 15km from the centre. Grab or Xanh SM costs about 150,000-250,000 VND, a metered taxi 200,000-300,000 VND (20-30 minutes), and the airport bus 50,000-60,000 VND (30-45 minutes; it leaves after flights arrive).",
    },
  ],

  itineraries: [
    {
      duration: "2D1N",
      label: "Essential Hue",
      days: [
        {
          day: 1,
          title: "Imperial City, Thien Mu Pagoda at sunset, Ca Hue on the river",
          stops: ["imperial-city-hue", "thien-mu-pagoda"],
          notes: "Start at the Imperial City when it opens (6:30am in summer, 7am in winter; 200,000 VND) and allow at least 3 hours. Don't miss Kien Trung Palace, the home of Emperors Khai Dinh and Bao Dai, restored in 2024. Sleeves and knee-length clothes are required at the citadel, tombs and pagodas. Rest through midday, then go to Thien Mu Pagoda for sunset (free). In the evening, take a Ca Hue folk music boat from Toa Kham wharf (about 1 hour, 100,000-150,000 VND per person; buy at the wharf or book ahead).",
        },
        {
          day: 2,
          title: "Royal tombs: Tu Duc, Thuy Xuan incense village, Minh Mang, Khai Dinh",
          stops: ["tu-duc-tomb", "minh-mang-tomb", "khai-dinh-tomb"],
          notes: "Be at Tu Duc Tomb at 7am, when it's cool and quiet (150,000 VND, open until 5:30pm). Stop at Thuy Xuan incense village nearby, then Minh Mang Tomb (150,000 VND, 7:30am-5:30pm). Save Khai Dinh Tomb for after 3:30pm when the sun softens (150,000 VND). The 4-site combo covers the Imperial City and all three tombs for 530,000 VND - see the FAQ. Don't try more than this in one day; the tombs are spread out, so rent a motorbike or hire a car.",
        },
      ],
    },
    {
      duration: "3D2N",
      label: "Tombs, citadel and the old city",
      days: [
        {
          day: 1,
          title: "Royal tombs: Tu Duc, Thuy Xuan incense village, Minh Mang, Khai Dinh",
          stops: ["tu-duc-tomb", "minh-mang-tomb", "khai-dinh-tomb"],
          notes: "Be at Tu Duc Tomb at 7am, when it's cool and quiet (150,000 VND, open until 5:30pm). Stop at Thuy Xuan incense village nearby, then Minh Mang Tomb (150,000 VND, 7:30am-5:30pm). Save Khai Dinh Tomb for after 3:30pm when the sun softens (150,000 VND). The 4-site combo covers the Imperial City and all three tombs for 530,000 VND - see the FAQ. Don't try more than this in one day; the tombs are spread out, so rent a motorbike or hire a car.",
        },
        {
          day: 2,
          title: "Imperial City, Thien Mu Pagoda at sunset, Ca Hue on the river",
          stops: ["imperial-city-hue", "thien-mu-pagoda"],
          notes: "Start at the Imperial City when it opens (6:30am in summer, 7am in winter; 200,000 VND) and allow at least 3 hours. Don't miss Kien Trung Palace, the home of Emperors Khai Dinh and Bao Dai, restored in 2024. Sleeves and knee-length clothes are required at the citadel, tombs and pagodas. Rest through midday, then go to Thien Mu Pagoda for sunset (free). In the evening, take a Ca Hue folk music boat from Toa Kham wharf (about 1 hour, 100,000-150,000 VND per person; buy at the wharf or book ahead).",
        },
        {
          day: 3,
          title: "Thuy Tien Lake, An Dinh Palace, Vi Da, Dong Ba Market",
          stops: [],
          mapPoints: [WP.anDinh, WP.truongTien],
          notes: "Start early at Thuy Tien Lake, west of the centre: a never-opened water park, now a lakeside walking and cycling path; its giant concrete dragon was kept. The dragon's interior is damp and run-down, so watch your footing. Then An Dinh Palace (50,000 VND), the last emperors' residence, best early before the crowds. Walk the old village lanes of Vi Da nearby. Cross Truong Tien Bridge to Dong Ba Market for lunch and souvenirs (bargaining is normal). End with a walk along the Perfume River. Bring cash - many street stalls don't take transfers.",
        },
      ],
    },
    {
      duration: "4D3N",
      label: "Hue plus Bach Ma National Park",
      days: [
        {
          day: 1,
          title: "Royal tombs: Tu Duc, Thuy Xuan incense village, Minh Mang, Khai Dinh",
          stops: ["tu-duc-tomb", "minh-mang-tomb", "khai-dinh-tomb"],
          notes: "Be at Tu Duc Tomb at 7am, when it's cool and quiet (150,000 VND, open until 5:30pm). Stop at Thuy Xuan incense village nearby, then Minh Mang Tomb (150,000 VND, 7:30am-5:30pm). Save Khai Dinh Tomb for after 3:30pm when the sun softens (150,000 VND). The 4-site combo covers the Imperial City and all three tombs for 530,000 VND - see the FAQ. Don't try more than this in one day; the tombs are spread out, so rent a motorbike or hire a car.",
        },
        {
          day: 2,
          title: "Imperial City, Thien Mu Pagoda at sunset, Ca Hue on the river",
          stops: ["imperial-city-hue", "thien-mu-pagoda"],
          notes: "Start at the Imperial City when it opens (6:30am in summer, 7am in winter; 200,000 VND) and allow at least 3 hours. Don't miss Kien Trung Palace, the home of Emperors Khai Dinh and Bao Dai, restored in 2024. Sleeves and knee-length clothes are required at the citadel, tombs and pagodas. Rest through midday, then go to Thien Mu Pagoda for sunset (free). In the evening, take a Ca Hue folk music boat from Toa Kham wharf (about 1 hour, 100,000-150,000 VND per person; buy at the wharf or book ahead).",
        },
        {
          day: 3,
          title: "Thuy Tien Lake, An Dinh Palace, Vi Da, Dong Ba Market",
          stops: [],
          mapPoints: [WP.anDinh, WP.truongTien],
          notes: "Start early at Thuy Tien Lake, west of the centre: a never-opened water park, now a lakeside walking and cycling path; its giant concrete dragon was kept. The dragon's interior is damp and run-down, so watch your footing. Then An Dinh Palace (50,000 VND), the last emperors' residence, best early before the crowds. Walk the old village lanes of Vi Da nearby. Cross Truong Tien Bridge to Dong Ba Market for lunch and souvenirs (bargaining is normal). End with a walk along the Perfume River. Bring cash - many street stalls don't take transfers.",
        },
        {
          day: 4,
          title: "Bach Ma National Park and Do Quyen Waterfall",
          stops: ["do-quyen-waterfall"],
          notes: "Bach Ma is about 40km from Hue. The park is open 7am-5pm (65,000 VND adults); the park shuttle costs 900,000 VND per trip for up to 12 people (1,300,000 VND return), so it's cheaper in a group. The trail to Do Quyen Waterfall is a real hike - bring good shoes and water. Trail access depends on the weather; in the rainy months (Sep-Jan) check before you go, or stay in Hue instead.",
        },
      ],
    },
  ],

  bestTimeSummary: "Feb-Apr is the easiest time: mild and comparatively dry. May-Aug is hot - visit the tombs early morning or late afternoon - but still one of the less rainy periods. Sep-Jan is the rainy season, and Oct-Nov bring the heaviest rain and storms, so leave spare days if you travel then.",
  bestMonths: [2, 3, 4, 5],

  recommendedStay: "2-4 days",

  transport: "Walk around the Imperial City and the riverside. The tombs, Thien Mu and Thuy Tien are spread out - rent a motorbike, or use Grab or Xanh SM. Cyclos are fun for an hour in the centre; agree the price before you get in.",

  rentals: [
    {
      vehicle: "motorbike",
      priceRange: "about 80,000-150,000 VND/day",
      notes: "Petrol is not included - fill up when you pick the bike up. Shops ask for your passport or ID; you also need an International Driving Permit (1968 convention) with the motorcycle category plus your home licence. Test the bike, check the papers, and get a written contract. Hotels can arrange a bike, which is convenient but usually 20,000-50,000 VND dearer and the bike quality is unchecked - renting direct is better. To ride the Hai Van Pass to Da Nang or Hoi An, ask about one-way drop-off and its fee before you book.",
      shops: [
        { name: "Dong Xanh Motorbikes", area: "Hue (also Da Nang and Hoi An)", address: "201 Tran Phu, Phuoc Vinh", phone: "0787 528 677", url: "https://dongxanhmotorbikes.com/?lang=en", notes: "WhatsApp and Zalo. Semi-automatic from 4 USD/day, scooters 6-10 USD/day. One-way drop-off in Da Nang or Hoi An costs 20 USD extra; luggage transfer free." },
        { name: "Hue Scooter Rental (Hidden Land Bikes)", address: "11 Ly Thuong Kiet, Phu Nhuan", url: "https://huescooterrental.com", notes: "Offices in Da Nang, Hoi An and Hue. One-way Da Nang - Hue rentals from about 400,000 VND." },
        { name: "Hue Motorbike Rental", phone: "0386 090 469", url: "https://huemotorbikerental.com/", notes: "Semi-automatic 100,000, scooters 130,000 VND/day; delivery to Hue station and Phu Bai Airport." },
        { name: "Kevin Motorbike", address: "38 Kiet 42 Nguyen Cong Tru, Phu Hoi", url: "https://www.facebook.com/share/19zmSEfPZN/", notes: "Leave your ID; drop-off at another location is possible for a delivery fee." },
      ],
      verifiedAt: "2026-11-04",
    },
  ],

  nearbyDestinations: ["da-nang", "hoi-an", "phong-nha-ke-bang"],

  faqs: [
    {
      question: "How many days do I need in Hue?",
      answer: "Two days covers the Imperial City and the main tombs. Three days adds An Dinh Palace, Thuy Tien Lake, Dong Ba Market and time for the food. With four, add a day hiking in Bach Ma National Park.",
    },
    {
      question: "Should I buy a combo ticket?",
      answer: "Yes if you're seeing more than two sites. The Imperial City is 200,000 VND and Tu Duc, Minh Mang and Khai Dinh tombs are 150,000 VND each. The 4-site combo (Imperial City plus those three tombs) is 530,000 VND for adults and 100,000 VND for children 7-12; the all-sites combo is 600,000 VND and valid for 5 days. Buy online on the [Hue Monuments Conservation Centre e-ticket site](https://eticket.hueworldheritage.org.vn/vedientu).",
    },
    {
      question: "Which royal tombs are worth it?",
      answer: "Tu Duc is the most peaceful, with a lake and lots of trees - go at 7am. Minh Mang is the most formal and symmetrical. Khai Dinh mixes Vietnamese and European styles and looks best after 3:30pm. Three tombs in a day is plenty.",
    },
    {
      question: "How do I take the heritage train from Da Nang?",
      answer: "HD2 leaves Da Nang at 7:05am and HD4 at 3:20pm; from Hue, HD1 leaves at 7:05am and HD3 at 2:30pm. Fares start at about 330,000 VND. Book on dsvn.vn ahead of time and choose a seat on the sea side for the views around the Hai Van Pass.",
    },
    {
      question: "How do I get from Phu Bai Airport to the city?",
      answer: "The airport is about 15km from the centre. Grab or Xanh SM costs about 150,000-250,000 VND and a metered taxi 200,000-300,000 VND (20-30 minutes). The airport bus costs 50,000-60,000 VND and leaves after flights arrive.",
    },
    {
      question: "Is there a dress code?",
      answer: "Yes, at the Imperial City, the tombs and pagodas: tops with sleeves, no bare shoulders, and shorts or skirts that cover the knee. Wear comfortable shoes - there's a lot of walking.",
    },
    {
      question: "Where can I hear Ca Hue?",
      answer: "On the dragon boats on the Perfume River in the evening, from Toa Kham wharf. A trip takes about an hour and costs about 100,000-150,000 VND per person. Buy at the wharf or book ahead in busy periods.",
    },
    {
      question: "When is the best time to visit?",
      answer: "Feb-Apr is mild and comparatively dry. May-Aug is hot but still one of the less rainy periods. Sep-Jan is the rainy season, with the heaviest rain and storms in Oct-Nov.",
    },
    {
      question: "What should I eat in Hue?",
      answer: "Bun bo Hue, com hen (clam rice), banh beo, banh nam and banh loc (small steamed rice and tapioca cakes), banh ep, and sweet che. Street food is cheap - small dishes from about 7,000-20,000 VND and meals from about 30,000 VND. Bring cash; many stalls don't take transfers. See [what to eat in Hue](/provinces/hue#h-food).",
    },
  ],

  emergencyContacts: [
    {
      type: "scam-report",
      name: "Hue Department of Tourism anti-scam hotline",
      phone: "0234 382 8288",
      notes: "Report overcharging and scams.",
      verifiedAt: "2026-11-04",
    },
    {
      type: "medical",
      name: "International Center, Hue Central Hospital",
      phone: "0234 3890 888",
      address: "3 Ngo Quyen",
      languages: ["English"],
      notes: "International wing of the main hospital, with English-speaking doctors.",
      sourceUrl: "https://waytovietnam.com/travel-guides/Hospitals/Hospitals_in_Hue.htm",
      verifiedAt: "2026-11-04",
    },
    {
      type: "medical",
      name: "Hue Central Hospital",
      phone: "0234 3833 325",
      address: "16 Le Loi",
      notes: "Large public hospital.",
      sourceUrl: "https://waytovietnam.com/travel-guides/Hospitals/Hospitals_in_Hue.htm",
      verifiedAt: "2026-11-04",
    },
    {
      type: "medical",
      name: "Hue International General Hospital",
      phone: "0234 3888 999",
      address: "2 Nguyen Tri Phuong",
      notes: "Private general hospital.",
      sourceUrl: "https://waytovietnam.com/travel-guides/Hospitals/Hospitals_in_Hue.htm",
      verifiedAt: "2026-11-04",
    },
    {
      type: "medical",
      name: "Hue University of Medicine and Pharmacy Hospital",
      phone: "0234 6278 944",
      address: "41 and 51 Nguyen Hue, Vinh Ninh",
      notes: "University teaching hospital.",
      sourceUrl: "https://waytovietnam.com/travel-guides/Hospitals/Hospitals_in_Hue.htm",
      verifiedAt: "2026-11-04",
    },
  ],

  coordinates: {
    lat: 16.4637,
    lng: 107.5909,
  },
  mapPriority: 1,
  mapRank: 9,
  mapZoom: 13,
}
