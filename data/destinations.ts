import { heroUrl } from "@/lib/cloudinary"

export type Destination = {
  slug: string
  name: string
  province: string
  provinceSlug: string
  region: "north" | "central" | "south"

  description: string
  tagline?: string
  heroImage?: string

  highlights?: string[]
  thingsToDo?: string[]

  tags?: string[]

  gettingThere?: string
  transport?: string

  bestTime?: string
  budgetPerDay?: string
  recommendedStay?: string

  nearbyDestinations?: string[]

  coordinates?: {
    lat: number
    lng: number
  }
}

export const destinations: Destination[] = [
  {
    slug: "sapa",
    name: "Sapa",
    province: "Lao Cai",
    provinceSlug: "lao-cai",
    region: "north",

    description:
      "Sapa is Vietnam's trekking capital. Home to ethnic minority villages and some of the most jaw-dropping rice terraces in Asia.",

    tagline: "Misty mountains and rice terraces that go on forever",

    heroImage: heroUrl("sapa_yxtsoq"),

    highlights: [
      "Fansipan Summit",
      "Muong Hoa Valley",
      "Cat Cat Village",
      "Rice terraces",
      "Local markets",
    ],

    thingsToDo: [
      "Trek through Muong Hoa Valley",
      "Ride the Fansipan cable car",
      "Visit Cat Cat Village",
      "Explore local ethnic markets",
    ],

    tags: ["mountain", "nature", "trekking", "camping"],

    gettingThere:
      "Overnight train from Hanoi (8 hrs) or bus from Hanoi (5 hrs). Most travelers take the train.",

    bestTime:
      "September – November for golden rice terraces. March – May for clear skies.",

    budgetPerDay: "$20 – $40 USD",

    recommendedStay: "2 – 3 days",

    transport: "Walking & guided treks",

    nearbyDestinations: ["ha-giang", "bac-ha"],

    coordinates: {
      lat: 22.3364,
      lng: 103.8438,
    },
  },

  {
    slug: "ha-long",
    name: "Ha Long Bay",
    province: "Quang Ninh",
    provinceSlug: "quang-ninh",
    region: "north",

    description:
      "Ha Long Bay is Vietnam's most iconic landscape — 1,600 limestone islands rising from emerald waters. The key is picking the right cruise.",

    tagline: "1,600 islands. One unforgettable night on the water.",

    heroImage: heroUrl("ha-long_vmycp8"),

    highlights: [
      "Overnight cruise",
      "Kayaking",
      "Sung Sot Cave",
      "Ti Top Island",
      "Floating villages",
    ],

    thingsToDo: [
      "Take an overnight cruise",
      "Kayak between limestone islands",
      "Explore Sung Sot Cave",
      "Swim at Ti Top Island",
    ],

    tags: ["beach", "nature", "cruise"],

    gettingThere:
      "Bus from Hanoi to Ha Long City (3.5 hrs). Most cruises include transfers.",

    bestTime:
      "October – April for clear skies. Avoid July–August (peak crowds).",

    budgetPerDay: "$80 – $150 USD (cruise included)",

    recommendedStay: "1 – 2 nights on a cruise",

    transport: "Cruise boat",

    nearbyDestinations: ["cat-ba", "ninh-binh"],

    coordinates: {
      lat: 20.9101,
      lng: 107.1839,
    },
  },

  {
    slug: "hoi-an",
    name: "Hoi An",
    province: "Quang Nam",
    provinceSlug: "quang-nam",
    region: "central",

    description:
      "Hoi An's Ancient Town is a UNESCO World Heritage Site that somehow manages to stay magical despite the crowds. Go early morning or late evening.",

    tagline: "Lanterns, tailor shops, and the best Cao Lau in the world",

    heroImage: heroUrl("hoi-an_qxhyjl"),

    highlights: [
      "Ancient Town",
      "Lantern Festival",
      "Cooking classes",
      "An Bang Beach",
      "Tailors",
    ],

    thingsToDo: [
      "Walk through the Ancient Town",
      "Join a Vietnamese cooking class",
      "Relax at An Bang Beach",
      "Cycle through nearby rice fields",
    ],

    tags: ["history", "food", "beach", "culture"],

    gettingThere:
      "Fly to Da Nang (30 min from HCMC), then grab a taxi or bus to Hoi An (45 min).",

    bestTime: "February – July. Full moon lantern festival is monthly.",

    budgetPerDay: "$25 – $50 USD",

    recommendedStay: "2 – 3 days",

    transport: "Bicycle rental",

    nearbyDestinations: ["da-nang", "my-son"],

    coordinates: {
      lat: 15.8801,
      lng: 108.338,
    },
  },

  {
    slug: "phu-quoc",
    name: "Phu Quoc",
    province: "Kien Giang",
    provinceSlug: "kien-giang",
    region: "south",

    description:
      "Phu Quoc is Vietnam's largest island and one of Southeast Asia's best beach destinations. Crystal clear water, fresh seafood, and a relaxed vibe.",

    tagline: "Vietnam's island paradise — before it gets too developed",

    heroImage: heroUrl("phu-quoc_w1h8jq"),

    highlights: [
      "Long Beach",
      "Sao Beach",
      "Night Market",
      "Snorkeling & Diving",
      "Pepper Farms",
    ],

    thingsToDo: [
      "Relax on Sao Beach",
      "Snorkel around nearby islands",
      "Explore Phu Quoc Night Market",
      "Visit local pepper farms",
    ],

    tags: ["beach", "nature", "island", "nightlife"],

    gettingThere:
      "Fly direct from HCMC (45 min) or Hanoi (2 hrs). Ferry from Rach Gia or Ha Tien also available.",

    bestTime:
      "November – April (dry season). Avoid May–October (rainy, rough seas).",

    budgetPerDay: "$25 – $50 USD",

    recommendedStay: "2 – 4 days",

    transport: "Motorbike rental",

    nearbyDestinations: ["ha-tien", "nam-du"],

    coordinates: {
      lat: 10.2899,
      lng: 103.984,
    },
  },
  {
    slug: "nha-trang",
    name: "Nha Trang",
    province: "Khanh Hoa",
    provinceSlug: "khanh-hoa",
    region: "central",
  
    description:
      "Nha Trang is Vietnam's most famous beach city, known for its long sandy coastline, vibrant nightlife, and easy access to beautiful nearby islands.",
  
    tagline: "Sun, seafood, and island hopping",
  
    heroImage: heroUrl("nha-tràng_x9cnbm"),
  
    highlights: [
      "Nha Trang Beach",
      "Hon Mun Island",
      "Po Nagar Cham Towers",
      "VinWonders Theme Park",
      "Island hopping tours",
    ],
  
    thingsToDo: [
      "Go island hopping in Nha Trang Bay",
      "Snorkel around Hon Mun Island",
      "Visit Po Nagar Cham Towers",
      "Relax at Nha Trang Beach",
    ],
  
    tags: ["beach", "island", "nightlife", "nature"],
  
    gettingThere:
      "Fly into Cam Ranh International Airport (30 minutes from Nha Trang). Trains and buses from Da Nang or Ho Chi Minh City also available.",
  
    bestTime:
      "January – August for sunny beach weather. September – November can be rainy.",
  
    budgetPerDay: "$25 – $60 USD",
  
    recommendedStay: "2 – 3 days",
  
    transport: "Taxi, Grab, or motorbike rental",
  
    nearbyDestinations: ["da-lat", "mui-ne"],
  
    coordinates: {
      lat: 12.2388,
      lng: 109.1967,
    },
  },
  
  {
    slug: "da-lat",
    name: "Da Lat",
    province: "Lam Dong",
    provinceSlug: "lam-dong",
    region: "south",
  
    description:
      "Da Lat is Vietnam's mountain escape — cool weather, pine forests, waterfalls, and one of the country's most unique coffee cultures.",
  
    tagline: "Vietnam's little mountain escape",
  
    heroImage: heroUrl("da-lat_abfvxq"),
  
    highlights: [
      "Xuan Huong Lake",
      "Langbiang Mountain",
      "Crazy House",
      "Coffee farms",
      "Waterfalls",
    ],
  
    thingsToDo: [
      "Watch the sunrise at Langbiang Mountain",
      "Visit the Crazy House",
      "Explore Da Lat waterfalls",
      "Drink specialty coffee at local cafes",
    ],
  
    tags: ["mountain", "nature", "coffee", "cool-weather"],
  
    gettingThere:
      "Fly into Lien Khuong Airport (30 minutes from Da Lat) or take a bus from Ho Chi Minh City (6–7 hours).",
  
    bestTime:
      "December – March for cool dry weather and flower blooms.",
  
    budgetPerDay: "$20 – $40 USD",
  
    recommendedStay: "2 – 3 days",
  
    transport: "Motorbike rental",
  
    nearbyDestinations: ["nha-trang", "mui-ne"],
  
    coordinates: {
      lat: 11.9404,
      lng: 108.4583,
    },
  },
  
  {
    slug: "ha-giang",
    name: "Ha Giang",
    province: "Ha Giang",
    provinceSlug: "ha-giang",
    region: "north",
  
    description:
      "Ha Giang is Vietnam's ultimate motorbike adventure. The Ha Giang Loop takes travelers through dramatic limestone mountains, deep valleys, and remote ethnic villages.",
  
    tagline: "Vietnam's most epic motorbike loop",
  
    heroImage: heroUrl("ha-giang_xqwfog"),
  
    highlights: [
      "Ha Giang Loop",
      "Ma Pi Leng Pass",
      "Dong Van Karst Plateau",
      "Nho Que River",
      "Lung Cu Flag Tower",
    ],
  
    thingsToDo: [
      "Ride the Ha Giang Loop",
      "Take photos at Ma Pi Leng Pass",
      "Boat ride on Nho Que River",
      "Visit Dong Van Old Quarter",
    ],
  
    tags: ["mountain", "motorbike", "adventure", "nature"],
  
    gettingThere:
      "Bus from Hanoi to Ha Giang City (6–7 hours). Most travelers start the motorbike loop from there.",
  
    bestTime:
      "September – November for golden rice terraces. March – April for flower season.",
  
    budgetPerDay: "$20 – $40 USD",
  
    recommendedStay: "3 – 5 days",
  
    transport: "Motorbike",
  
    nearbyDestinations: ["sapa", "cao-bang"],
  
    coordinates: {
      lat: 22.8233,
      lng: 104.9836,
    },
  }
]

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug)
}

export function getDestinationsByProvince(provinceSlug: string): Destination[] {
  return destinations.filter((d) => d.provinceSlug === provinceSlug)
}