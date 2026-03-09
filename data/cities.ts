export type City = {
    slug: string
    name: string
    region: "north" | "central" | "south"
    tagline: string
    description: string
    heroImage: string // Unsplash URL hoặc local path sau này
    keywords: string[]
    highlights: string[]
    datePublished?: string  // ISO format: "2025-01-15"
    dateModified?: string  // cập nhật khi edit content
  }
  
  export const cities: City[] = [
    // === PHASE 1 — TOP DESTINATIONS ===
    {
      slug: "ha-noi",
      name: "Hanoi",
      region: "north",
      tagline: "Chaotic, charming, and completely addictive",
      description:
        "Vietnam's capital is a city of layers — French colonial architecture, ancient temples, and street food so good you'll plan your trip around it. Solo travelers love Hanoi for its walkable Old Quarter, cheap beer, and endless things to discover on foot.",
      heroImage: "https://res.cloudinary.com/dl5kqhspv/image/upload/w_1200,q_auto,f_auto/v1773068068/HN_215828_jylon5.jpg",
      keywords: ["solo travel hanoi", "hanoi solo traveler guide", "hanoi backpacker tips", "is hanoi safe solo"],
      highlights: ["Old Quarter", "Hoan Kiem Lake", "Street food scene", "Train Street"],
      datePublished: "2025-01-10",
    },
    {
      slug: "ha-giang",
      name: "Ha Giang",
      region: "north",
      tagline: "The most dramatic motorbike loop in Southeast Asia",
      description:
        "Ha Giang is Vietnam's wildest frontier — towering karst mountains, terraced rice fields, and roads that feel like they were built for adventure. The Ha Giang Loop is a rite of passage for solo travelers on two wheels.",
      heroImage: "https://res.cloudinary.com/dl5kqhspv/image/upload/w_1200,q_auto,f_auto/v1773068734/DSC_3806_gbnzmw.jpg",
      keywords: ["ha giang loop solo", "ha giang motorbike guide", "ha giang backpacker", "is ha giang safe"],
      highlights: ["Ha Giang Loop", "Dong Van Karst Plateau", "Lung Cu Flag Tower", "Local markets"],
    },
    {
      slug: "sapa",
      name: "Sapa",
      region: "north",
      tagline: "Misty mountains and rice terraces that go on forever",
      description:
        "Sapa is Vietnam's trekking capital. Home to ethnic minority villages and some of the most jaw-dropping rice terraces in Asia. Go in September–October for golden harvest season.",
      heroImage: "https://res.cloudinary.com/dl5kqhspv/image/upload/w_1200,q_auto,f_auto/v1773068939/_DSC0652_kbtnje.jpg",
      keywords: ["sapa trekking solo", "sapa solo travel guide", "sapa vietnam backpacker"],
      highlights: ["Fansipan Summit", "Muong Hoa Valley", "Cat Cat Village", "Rice terraces"],
    },
    {
      slug: "ninh-binh",
      name: "Ninh Binh",
      region: "north",
      tagline: "Ha Long Bay on land — without the crowds",
      description:
        "Ninh Binh is what Ha Long Bay would look like if it were on land. Ancient temples, limestone karsts, and flat rice paddies perfect for cycling. It's one of the most underrated destinations in Vietnam.",
      heroImage: "https://res.cloudinary.com/dl5kqhspv/image/upload/w_1200,q_auto,f_auto/v1773069212/IMG_2002_akjaj8.jpg",
      keywords: ["ninh binh solo travel", "ninh binh day trip", "ninh binh guide backpacker"],
      highlights: ["Trang An Grottoes", "Tam Coc", "Hoa Lu Ancient Capital", "Bich Dong Pagoda"],
    },
    {
      slug: "ha-long",
      name: "Ha Long Bay",
      region: "north",
      tagline: "1,600 islands. One unforgettable night on the water.",
      description:
        "Ha Long Bay is Vietnam's most iconic landscape — and for good reason. The key is picking the right cruise and avoiding the tourist traps. Solo travelers can join group cruises easily.",
      heroImage: "https://res.cloudinary.com/dl5kqhspv/image/upload/w_1200,q_auto,f_auto/v1773069420/DSC_6129_vmycp8.jpg",
      keywords: ["ha long bay solo travel", "ha long bay cruise solo", "ha long bay tips backpacker"],
      highlights: ["Overnight cruise", "Kayaking", "Sung Sot Cave", "Ti Top Island"],
    },
    {
      slug: "da-nang",
      name: "Da Nang",
      region: "central",
      tagline: "The perfect base for Central Vietnam",
      description:
        "Da Nang is the gateway to everything Central Vietnam has to offer — Hoi An, My Son, the Marble Mountains. Great beaches, easy to get around, and one of Vietnam's most liveable cities.",
      heroImage: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=1200",
      keywords: ["da nang solo travel", "da nang guide backpacker", "is da nang safe solo traveler"],
      highlights: ["My Khe Beach", "Marble Mountains", "Dragon Bridge", "Day trip to Hoi An"],
    },
    {
      slug: "hoi-an",
      name: "Hoi An",
      region: "central",
      tagline: "Lanterns, tailor shops, and the best Cao Lau in the world",
      description:
        "Hoi An's Ancient Town is a UNESCO World Heritage Site that somehow manages to stay magical despite the crowds. Go early morning or late evening. Rent a bicycle. Eat everything.",
      heroImage: "https://images.unsplash.com/photo-1567894340315-735d7c361db0?w=1200",
      keywords: ["hoi an solo travel", "hoi an backpacker guide", "hoi an ancient town tips"],
      highlights: ["Ancient Town", "Lantern Festival", "Cooking classes", "An Bang Beach"],
    },
    {
      slug: "phong-nha",
      name: "Phong Nha",
      region: "central",
      tagline: "Home to the world's largest cave system",
      description:
        "Phong Nha-Ke Bang is one of Vietnam's most spectacular national parks. Son Doong Cave is the world's largest. Even the 'smaller' caves here will blow your mind.",
      heroImage: "https://images.unsplash.com/photo-1594284680798-5f1b0cf21df5?w=1200",
      keywords: ["phong nha solo travel", "phong nha cave tours", "phong nha backpacker"],
      highlights: ["Phong Nha Cave", "Paradise Cave", "Dark Cave", "Son Doong (bucket list)"],
    },
    {
      slug: "da-lat",
      name: "Da Lat",
      region: "south",
      tagline: "Vietnam's hill station — cool air, pine forests, and great coffee",
      description:
        "Da Lat is unlike anywhere else in Vietnam. At 1,500m elevation, it's got a cool climate, French colonial villas, flower farms, and the best coffee scene outside of Saigon.",
      heroImage: "https://res.cloudinary.com/dl5kqhspv/image/upload/w_1200,q_auto,f_auto/v1773070271/DLDSC_6721_cawqog.jpg",
      keywords: ["da lat solo travel", "da lat backpacker guide", "dalat vietnam solo traveler"],
      highlights: ["Xuan Huong Lake", "Valley of Love", "Datanla Waterfall", "Crazy House"],
    },
    {
      slug: "ho-chi-minh-city",
      name: "Ho Chi Minh City",
      region: "south",
      tagline: "Saigon never sleeps — and neither will you",
      description:
        "Ho Chi Minh City is Vietnam's engine — loud, fast, overwhelming, and completely exhilarating. War history, world-class food, rooftop bars, and a nightlife scene that goes until sunrise.",
      heroImage: "https://res.cloudinary.com/dl5kqhspv/image/upload/w_1200,q_auto,f_auto/v1773070528/HCM20251108_132021524_dwzyqz.jpg",
      keywords: ["ho chi minh city solo travel", "saigon solo traveler guide", "hcmc backpacker tips", "is saigon safe solo"],
      highlights: ["War Remnants Museum", "Ben Thanh Market", "Cu Chi Tunnels", "Bui Vien Walking Street"],
    },
    {
      slug: "kien-giang",
      name: "Kien Giang",
      region: "south",
      tagline: "Mekong rivers, mangroves, and the gateway to Phu Quoc",
      description:
        "Kien Giang province is the jumping-off point for Phu Quoc island, but the mainland has plenty to offer too — mangrove forests, Ha Tien town, and a laid-back Mekong vibe.",
      heroImage: "https://res.cloudinary.com/dl5kqhspv/image/upload/w_1200,q_auto,f_auto/v1773070748/KG20260220_110302759_mq5u4b.jpg",
      keywords: ["kien giang travel", "kien giang vietnam guide", "ha tien vietnam"],
      highlights: ["Ha Tien", "Phu Quoc ferry", "Mangrove forests", "Rach Gia"],
      datePublished: "2025-01-10",
    },
    {
      slug: "phu-quoc",
      name: "Phu Quoc",
      region: "south",
      tagline: "Vietnam's island paradise — before it gets too developed",
      description:
        "Phu Quoc is Vietnam's largest island and one of Southeast Asia's best beach destinations. Crystal clear water, fresh seafood, and a relaxed vibe. Go now before it changes.",
      heroImage: "https://res.cloudinary.com/dl5kqhspv/image/upload/w_1200,q_auto,f_auto/v1773070949/PQ20240630_111617509.PORTRAIT_w1h8jq.jpg",
      keywords: ["phu quoc solo travel", "phu quoc backpacker guide", "phu quoc vietnam tips"],
      highlights: ["Long Beach", "Sao Beach", "Night Market", "Snorkeling & diving"],
    },
    {
      slug: "can-tho",
      name: "Can Tho",
      region: "south",
      tagline: "The heart of the Mekong Delta",
      description:
        "Can Tho is the gateway to the Mekong Delta — a maze of rivers, floating markets, and rice paddies. Wake up at 5am to catch Cai Rang floating market at its best.",
      heroImage: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=1200",
      keywords: ["can tho solo travel", "mekong delta solo guide", "can tho floating market"],
      highlights: ["Cai Rang Floating Market", "Ninh Kieu Wharf", "Binh Thuy Ancient House", "River boat tours"],
    },
  ]
  
  // Helper: lấy city theo slug
  export function getCityBySlug(slug: string): City | undefined {
    return cities.find((c) => c.slug === slug)
  }
  
  // Helper: lấy cities theo region
  export function getCitiesByRegion(region: City["region"]): City[] {
    return cities.filter((c) => c.region === region)
  }
  
  // Helper: capitalize slug thành display name đẹp
  export function formatCityName(slug: string): string {
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }