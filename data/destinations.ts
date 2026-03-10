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
    tags?: string[]
    gettingThere?: string
    bestTime?: string
    budgetPerDay?: string
    recommendedStay?: string
    transport?: string
  }
  
  export const destinations: Destination[] = [
    {
      slug: "sapa",
      name: "Sapa",
      province: "Lao Cai",
      provinceSlug: "lao-cai",
      region: "north",
      description: "Sapa is Vietnam's trekking capital. Home to ethnic minority villages and some of the most jaw-dropping rice terraces in Asia.",
      tagline: "Misty mountains and rice terraces that go on forever",
      heroImage: "https://images.unsplash.com/photo-1557660559-3f32234bd0d2?w=1200",
      highlights: ["Fansipan Summit", "Muong Hoa Valley", "Cat Cat Village", "Rice terraces", "Local markets"],
      tags: ["🏔️ Mountain", "🌿 Nature", "🏕️ Camping"],
      gettingThere: "Overnight train from Hanoi (8 hrs) or bus from Hanoi (5 hrs). Most travelers take the train.",
      bestTime: "September – November for golden rice terraces. March – May for clear skies.",
      budgetPerDay: "$20 – $40 USD",
      recommendedStay: "2 – 3 days",
      transport: "Walking & guided treks",
    },
    {
      slug: "ha-long",
      name: "Ha Long Bay",
      province: "Quang Ninh",
      provinceSlug: "quang-ninh",
      region: "north",
      description: "Ha Long Bay is Vietnam's most iconic landscape — 1,600 limestone islands rising from emerald waters. The key is picking the right cruise.",
      tagline: "1,600 islands. One unforgettable night on the water.",
      heroImage: "https://images.unsplash.com/photo-1573270689103-d7a4e42b609a?w=1200",
      highlights: ["Overnight cruise", "Kayaking", "Sung Sot Cave", "Ti Top Island", "Floating villages"],
      tags: ["🏖️ Beach", "🌿 Nature", "🚢 Cruising"],
      gettingThere: "Bus from Hanoi to Ha Long City (3.5 hrs). Most cruises include transfers.",
      bestTime: "October – April for clear skies. Avoid July–August (peak crowds).",
      budgetPerDay: "$80 – $150 USD (cruise included)",
      recommendedStay: "1 – 2 nights on a cruise",
      transport: "Cruise boat",
    },
    {
      slug: "hoi-an",
      name: "Hoi An",
      province: "Quang Nam",
      provinceSlug: "quang-nam",
      region: "central",
      description: "Hoi An's Ancient Town is a UNESCO World Heritage Site that somehow manages to stay magical despite the crowds. Go early morning or late evening.",
      tagline: "Lanterns, tailor shops, and the best Cao Lau in the world",
      heroImage: "https://images.unsplash.com/photo-1567894340315-735d7c361db0?w=1200",
      highlights: ["Ancient Town", "Lantern Festival", "Cooking classes", "An Bang Beach", "Tailors"],
      tags: ["🏛️ History", "🍜 Food", "🏖️ Beach"],
      gettingThere: "Fly to Da Nang (30 min from HCMC), then grab a taxi or bus to Hoi An (45 min).",
      bestTime: "February – July. Full moon lantern festival is monthly.",
      budgetPerDay: "$25 – $50 USD",
      recommendedStay: "2 – 3 days",
      transport: "Bicycle rental",
    },
    {
      slug: "phu-quoc",
      name: "Phu Quoc",
      province: "Kien Giang",
      provinceSlug: "kien-giang",
      region: "south",
      description: "Phu Quoc is Vietnam's largest island and one of Southeast Asia's best beach destinations. Crystal clear water, fresh seafood, and a relaxed vibe.",
      tagline: "Vietnam's island paradise — before it gets too developed",
      heroImage: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200",
      highlights: ["Long Beach", "Sao Beach", "Night Market", "Snorkeling & Diving", "Pepper Farms"],
      tags: ["🏖️ Beach", "🌿 Nature", "🎉 Nightlife"],
      gettingThere: "Fly direct from HCMC (45 min) or Hanoi (2 hrs). Ferry from Rach Gia or Ha Tien also available.",
      bestTime: "November – April (dry season). Avoid May–October (rainy, rough seas).",
      budgetPerDay: "$25 – $50 USD",
      recommendedStay: "2 – 4 days",
      transport: "Motorbike rental",
    },
  ]
  
  export function getDestinationBySlug(slug: string): Destination | undefined {
    return destinations.find((d) => d.slug === slug)
  }
  
  export function getDestinationsByProvince(provinceSlug: string): Destination[] {
    return destinations.filter((d) => d.provinceSlug === provinceSlug)
  }