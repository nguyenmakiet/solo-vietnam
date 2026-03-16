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
  slug: "ba-na-hills",
  name: "Bà Nà Hills",
  province: "Da Nang",
  provinceSlug: "da-nang",
  region: "central",

  description:
    "Bà Nà Hills is Đà Nẵng's mountain resort at 1,487 metres — a French colonial hill station reinvented as one of Southeast Asia's most elaborate tourist attractions, home to the iconic Golden Bridge, a world-record cable car, and a recreated French village above the clouds.",

  tagline: "Above the clouds, held by giant stone hands",

  heroImage: heroUrl("ba-na-hill-3_bwhfwi"),

  highlights: [
    "Golden Bridge",
    "World-record cable car",
    "French Village",
    "Above the cloud layer",
    "Views over Đà Nẵng coastline",
  ],

  thingsToDo: [
    "Walk the Golden Bridge",
    "Ride the cable car above the clouds",
    "Explore the French Village",
    "Visit the Buddhist temples and gardens",
  ],

  tags: ["attraction", "cable-car", "photography", "theme-park"],

  gettingThere:
    "25km west of Đà Nẵng city centre — 45 minutes by taxi or Grab (250,000–350,000 VND one way). Most hotels offer shuttle transfers. No public bus available.",

  bestTime:
    "March – August for clear skies above the clouds. June – August the summit is sunny while the city below is overcast.",

  budgetPerDay: "$60 – $80 USD (ticket alone is ~1,500,000 VND)",

  recommendedStay: "Half day to 1 day",

  transport: "Taxi or hotel shuttle to base station, then cable car",

  nearbyDestinations: ["hoi-an", "da-nang"],

  coordinates: {
    lat: 15.9973,
    lng: 107.9889,
  },
},
// Thêm vào destinations array trong data/destinations.ts

{
  slug: "con-dao",
  name: "Côn Đảo",
  province: "Ba Ria - Vung Tau",
  provinceSlug: "ba-ria-vung-tau",
  region: "south",

  description:
    "Côn Đảo is Vietnam's most extraordinary island — a former French colonial penal colony with a dark and layered history, now one of Southeast Asia's most pristine marine environments, with near-empty beaches, world-class diving, and sea turtle nesting sites.",

  tagline: "Vietnam's most haunting — and most beautiful — island",

  heroImage: heroUrl("con-dao_vr623u"),

  highlights: [
    "Con Dao National Park",
    "Sea turtle nesting beaches",
    "Con Dao Prison",
    "Six Senses Beach",
    "World-class diving",
  ],

  thingsToDo: [
    "Snorkel and dive the coral reefs",
    "Watch sea turtles nest at night (May – October)",
    "Visit the colonial-era prison complex",
    "Explore the national park trails",
  ],

  tags: ["island", "diving", "history", "nature", "beach"],

  gettingThere:
    "Fly from Ho Chi Minh City (45 minutes, multiple daily flights on Vietnam Airlines and Bamboo Airways). No ferry service from the mainland.",

  bestTime:
    "March – September (dry season, calm seas, sea turtle nesting from May). Avoid October – February (rough seas, some diving sites inaccessible).",

  budgetPerDay: "$80 – $200 USD (limited mid-range options; mostly budget or luxury)",

  recommendedStay: "3 – 5 days",

  transport: "Motorbike rental or resort transfers",

  nearbyDestinations: ["phu-quoc", "vung-tau"],

  coordinates: {
    lat: 8.6843,
    lng: 106.6061,
  },
},
// Thêm vào destinations array trong data/destinations.ts

{
  slug: "phan-thiet",
  name: "Phan Thiết",
  province: "Binh Thuan",
  provinceSlug: "binh-thuan",
  region: "south",

  description:
    "Phan Thiết is Vietnam's kite-surfing capital and sand dune destination — a 20km coastal strip of fishing villages, red and white sand dunes, and a fairy stream, with the strongest and most consistent winds on the Vietnamese coast.",

  tagline: "Red dunes, white dunes, and the wind that never stops",

  heroImage: heroUrl("phan-thiet_lf0web"),

  highlights: [
    "White Sand Dunes",
    "Red Sand Dunes",
    "Fairy Stream",
    "Kite surfing",
    "Fishing village sunrise",
  ],

  thingsToDo: [
    "Slide down the White Sand Dunes at sunrise",
    "Walk the Red Sand Dunes at sunset",
    "Wade through Fairy Stream to the dunes",
    "Take a kite-surfing lesson on the beach",
  ],

  tags: ["beach", "nature", "adventure", "kite-surfing"],

  gettingThere:
    "Bus from Ho Chi Minh City (4–5 hours, ~150,000 VND). Sleeper buses run overnight. Train to Phan Thiết then taxi 25km to Mũi Né.",

  bestTime:
    "November – April (dry season, strong winds for kite-surfing, clear skies). May – October is rainy and windy but still accessible.",

  budgetPerDay: "$20 – $50 USD",

  recommendedStay: "2 – 3 days",

  transport: "Motorbike rental or resort shuttle",

  nearbyDestinations: ["da-lat", "vung-tau"],

  coordinates: {
    lat: 10.9333,
    lng: 108.2833,
  },
},
// Thêm vào destinations array trong data/destinations.ts

{
  slug: "mekong-delta",
  name: "Mekong Delta",
  province: "Can Tho",
  provinceSlug: "can-tho",
  region: "south",

  description:
    "The Mekong Delta is Vietnam's rice bowl — a vast network of rivers, canals, floating markets, and coconut groves spreading across the southern tip of the country, where life moves by boat and the pace is slower than anywhere else in Vietnam.",

  tagline: "Rivers, coconuts, and floating markets at dawn",

  heroImage: heroUrl("mekong-delta_wqegef"),

  highlights: [
    "Cái Răng Floating Market",
    "Bến Tre Coconut Village",
    "Canal boat tours",
    "River sunsets",
    "Mekong homestays",
  ],

  thingsToDo: [
    "Visit Cái Răng Floating Market at dawn",
    "Explore Bến Tre by bicycle and boat",
    "Stay overnight in a riverside homestay",
    "Cycle through coconut palm groves",
  ],

  tags: ["nature", "culture", "food", "boat-tour"],

  gettingThere:
    "Bus from Ho Chi Minh City to Cần Thơ (3.5–4 hours, ~120,000 VND). Express buses depart from Miền Tây bus station. Cần Thơ is the main hub for the delta.",

  bestTime:
    "Nov – Apr (dry season, lower water levels, floating market most active). Avoid Sep – Oct (flood season in upper delta).",

  budgetPerDay: "$15 – $35 USD",

  recommendedStay: "2 – 3 days",

  transport: "Boat, bicycle, and motorbike",

  nearbyDestinations: ["phu-quoc", "con-dao"],

  coordinates: {
    lat: 10.0452,
    lng: 105.7469,
  },
},
// Thêm vào destinations array trong data/destinations.ts

{
  slug: "phong-nha-ke-bang",
  name: "Phong Nha – Kẻ Bàng",
  province: "Quang Binh",
  provinceSlug: "quang-binh",
  region: "central",

  description:
    "Phong Nha-Kẻ Bàng National Park is Vietnam's cave capital — a UNESCO World Heritage Site of 400-million-year-old limestone karst hiding the world's largest cave system, underground rivers, jungle trails, and one of the most intact ecosystems in Southeast Asia.",

  tagline: "The world's largest caves are underneath this jungle",

  heroImage: heroUrl("phong-nha-ke-bang_fgbd2u"),

  highlights: [
    "Son Doong Cave",
    "Paradise Cave",
    "Phong Nha Cave",
    "Dark Cave",
    "Mooc Spring",
  ],

  thingsToDo: [
    "Explore Phong Nha Cave by boat",
    "Walk the Paradise Cave boardwalk",
    "Zip line and swim at Dark Cave",
    "Trek to Mooc Spring",
    "Join a Son Doong expedition",
  ],

  tags: ["cave", "nature", "adventure", "trekking"],

  gettingThere:
    "Fly or take the train to Đồng Hới (50km south), then bus or taxi to Sơn Trạch village (1 hour). Overnight trains from Hanoi (~9 hours) or Hue (~3 hours).",

  bestTime:
    "Feb – Aug (dry season, caves open). Avoid Sep – Nov (flooding closes most caves).",

  budgetPerDay: "$25 – $50 USD (Son Doong expedition: ~$3,000 USD total)",

  recommendedStay: "2 – 4 days",

  transport: "Motorbike rental or bicycle from Sơn Trạch village",

  nearbyDestinations: ["hue", "da-nang"],

  coordinates: {
    lat: 17.5553,
    lng: 106.2833,
  },
},
// Thêm vào destinations array trong data/destinations.ts

{
  slug: "cao-bang",
  name: "Cao Bằng",
  province: "Cao Bang",
  provinceSlug: "cao-bang",
  region: "north",

  description:
    "Cao Bằng is Vietnam's most remote northern province — a dramatic landscape of limestone karst, jungle-covered mountains, and deep valleys on the Chinese border, home to Bản Giốc Waterfall, the revolutionary history of Pác Bó, and some of the most pristine highland scenery in the country.",

  tagline: "Vietnam's wild north — waterfalls, caves, and revolutionary history",

  heroImage: heroUrl("cao-bang-01_kiniec"),

  highlights: [
    "Bản Giốc Waterfall",
    "Pác Bó Historic Site",
    "Thang Hen Lake",
    "Phia Oắc National Park",
    "Nguồm Pục Cave",
  ],

  thingsToDo: [
    "Visit Bản Giốc Waterfall at sunrise",
    "Explore Pác Bó — where Hồ Chí Minh returned to Vietnam in 1941",
    "Trek through Phia Oắc National Park",
    "Swim in the blue waters of Thang Hen Lake",
  ],

  tags: ["nature", "history", "trekking", "waterfall", "adventure"],

  gettingThere:
    "Bus from Hanoi to Cao Bằng city (6–7 hours, ~200,000 VND). Limousine vans are faster and more comfortable. Most attractions are 90–120km from Cao Bằng city by motorbike.",

  bestTime:
    "Sep – Nov (golden rice season, clear skies, best waterfall flow after rainy season). Mar – May also good.",

  budgetPerDay: "$15 – $30 USD",

  recommendedStay: "3 – 4 days",

  transport: "Motorbike — essential for reaching most attractions",

  nearbyDestinations: ["ha-giang", "bac-kan"],

  coordinates: {
    lat: 22.6657,
    lng: 106.2522,
  },
},
// Thêm vào destinations array trong data/destinations.ts

{
  slug: "ha-giang-loop",
  name: "Ha Giang Loop",
  province: "Ha Giang",
  provinceSlug: "ha-giang",
  region: "north",

  description:
    "The Ha Giang Loop is Vietnam's most dramatic motorbike route — a 350km circuit through the Đồng Văn Karst Plateau UNESCO Global Geopark, past sheer limestone passes, H'mong villages, buckwheat fields, and the deepest river gorge in Southeast Asia.",

  tagline: "Vietnam's most epic road — 350km of karst, passes, and minority villages",

  heroImage: heroUrl("ha-giang-loop_e8myfw"),

  highlights: [
    "Mã Pí Lèng Pass",
    "Đồng Văn Old Quarter",
    "Nho Que River",
    "Lung Cu Flag Tower",
    "Quan Ba Heaven Gate",
  ],

  thingsToDo: [
    "Ride the full Ha Giang Loop over 3–4 days",
    "Stop at Mã Pí Lèng Pass viewpoint",
    "Take a boat on Nho Que River",
    "Visit H'mong and Lô Lô minority villages",
    "Watch the sunset from Quan Ba Heaven Gate",
  ],

  tags: ["motorcycling", "adventure", "nature", "culture", "trekking"],

  gettingThere:
    "Bus from Hanoi to Hà Giang city (6–7 hours, ~200,000 VND). Limousine vans available. Rent a motorbike in Hà Giang city — semi-automatic is recommended for beginners.",

  bestTime:
    "Sep – Nov (golden rice terraces, buckwheat flowers in Oct–Nov, clearest skies). Mar – Apr for triangle flowers.",

  budgetPerDay: "$20 – $40 USD",

  recommendedStay: "3 – 5 days for the full loop",

  transport: "Motorbike — the loop is the destination",

  nearbyDestinations: ["ha-giang", "cao-bang"],

  coordinates: {
    lat: 23.1167,
    lng: 105.0500,
  },
},
// Thêm vào destinations array trong data/destinations.ts

{
  slug: "ninh-binh",
  name: "Ninh Bình",
  province: "Ninh Binh",
  provinceSlug: "ninh-binh",
  region: "north",

  description:
    "Ninh Bình is Vietnam's inland Ha Long Bay — a landscape of limestone karsts rising from rice paddies and river systems, home to the ancient capital of Hoa Lư, the boat caves of Tràng An, the cycling corridors of Tam Cốc, and some of the most varied scenery within a single province in the country.",

  tagline: "Karst mountains, ancient capitals, and rice fields by rowboat",

  heroImage: heroUrl("ninh-binh-02_ueq2ix"),

  highlights: [
    "Tràng An UNESCO Heritage Site",
    "Tam Cốc boat tour",
    "Hoa Lư Ancient Capital",
    "Hang Mua viewpoint",
    "Bái Đính Pagoda",
  ],

  thingsToDo: [
    "Boat through Tràng An's cave system",
    "Cycle through Tam Cốc rice fields",
    "Climb Hang Mua for panoramic views",
    "Explore Hoa Lư's 10th-century temples",
    "Visit Bái Đính — Vietnam's largest pagoda complex",
  ],

  tags: ["nature", "history", "culture", "boat-tour", "cycling"],

  gettingThere:
    "Train from Hanoi (2 hours, from 60,000 VND) or bus from Giáp Bát station (2 hours, ~80,000 VND). Ninh Bình station is central. Most attractions are 5–15km from the town centre.",

  bestTime:
    "Sep – Nov (golden rice harvest, clear skies). Apr – Jun also good. Avoid Tết and major holidays when Bái Đính gets extremely crowded.",

  budgetPerDay: "$15 – $35 USD",

  recommendedStay: "2 – 3 days",

  transport: "Bicycle or motorbike rental from Ninh Bình town",

  nearbyDestinations: ["ha-long", "ha-noi"],

  coordinates: {
    lat: 20.2549,
    lng: 105.9747,
  },
},
// Thêm vào destinations array trong data/destinations.ts

{
  slug: "cat-ba",
  name: "Cát Bà",
  province: "Hai Phong",
  provinceSlug: "hai-phong",
  region: "north",

  description:
    "Cát Bà is Vietnam's largest island in the Ha Long Bay archipelago — a rugged island of national park jungle, karst peaks, hidden beaches, and Lan Hà Bay's quieter limestone waters, with a genuine fishing town at its centre and fewer tourists than Ha Long's main cruise circuit.",

  tagline: "Ha Long Bay's wilder, less-visited island neighbour",

  heroImage: heroUrl("cat-ba_bbsqrp"),

  highlights: [
    "Lan Hà Bay kayaking",
    "Cát Bà National Park",
    "Cát Cò beaches",
    "Hospital Cave",
    "Việt Hải Village",
  ],

  thingsToDo: [
    "Kayak through Lan Hà Bay's limestone karsts",
    "Trek through Cát Bà National Park to the summit",
    "Swim at Cát Cò 1 and Cát Cò 3 beaches",
    "Visit Hospital Cave — the Viet Cong's wartime underground hospital",
    "Cycle to Việt Hải fishing village",
  ],

  tags: ["island", "nature", "kayaking", "trekking", "beach"],

  gettingThere:
    "Ferry from Hải Phòng city to Cát Bà town (45 min–1.5 hours depending on ferry type). Speedboat from Tuần Châu pier (Ha Long) also available. Most travellers come via Hải Phòng.",

  bestTime:
    "Apr – Jun or Sep – Nov (dry season, calm seas, best visibility for kayaking). Avoid Jul–Aug (peak domestic season, very crowded).",

  budgetPerDay: "$25 – $60 USD",

  recommendedStay: "2 – 3 days",

  transport: "Motorbike rental, bicycle, or kayak",

  nearbyDestinations: ["ha-long", "hai-phong"],

  coordinates: {
    lat: 20.7271,
    lng: 107.0469,
  },
},
]

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug)
}

export function getDestinationsByProvince(provinceSlug: string): Destination[] {
  return destinations.filter((d) => d.provinceSlug === provinceSlug)
}