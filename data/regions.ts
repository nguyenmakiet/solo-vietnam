// data/regions.ts

export type RegionDestination = {
    slug: string
    name: string
    province: string
    tagline: string
    tags: string[]
    hasGuide: boolean
  }
  
  export type RegionData = {
    slug: string
    label: string
    emoji: string
    color: string
    tagline: string
    description: string
    destinations: RegionDestination[]
  }
  
  export const regions: Record<"north" | "central" | "south", RegionData> = {
    north: {
      slug: "north-vietnam",
      label: "North Vietnam",
      emoji: "🏔️",
      color: "#3b82f6",
      tagline: "Ancient mountains, rice terraces, and the cultural heartland of Vietnam.",
      description:
        "North Vietnam spans from the limestone karst of Ha Long Bay to the remote highland valleys of Ha Giang and Dien Bien. Hanoi anchors the region with millennia of history, while ethnic minority communities in the mountains maintain traditions unchanged for centuries.",
      destinations: [
        { slug: "ha-long-bay",   name: "Ha Long Bay",        province: "Quang Ninh", tagline: "2,000 limestone islands rising from emerald water - one of the world's great seascapes", tags: ["nature", "island"],    hasGuide: false },
        { slug: "sapa",          name: "Sapa",               province: "Lao Cai",    tagline: "Highland town surrounded by rice terraces and H'Mong villages in the clouds",             tags: ["nature", "culture"],   hasGuide: false },
        { slug: "ha-giang-loop", name: "Ha Giang Loop",      province: "Ha Giang",   tagline: "Vietnam's most dramatic motorbike route through karst mountains and ethnic villages",       tags: ["nature", "adventure"], hasGuide: false },
        { slug: "ninh-binh",     name: "Ninh Binh",          province: "Ninh Binh",  tagline: "Trang An's river caves and the ancient capital of Hoa Lu - Halong Bay on land",           tags: ["nature", "history"],   hasGuide: false },
        { slug: "ban-gioc",      name: "Ban Gioc Waterfall", province: "Cao Bang",   tagline: "Vietnam's most spectacular waterfall thundering on the China border",                      tags: ["nature"],              hasGuide: false },
        { slug: "mu-cang-chai",  name: "Mu Cang Chai",       province: "Yen Bai",    tagline: "The most beautiful rice terraces in Vietnam - golden in September, green in June",         tags: ["nature", "culture"],   hasGuide: false },
        { slug: "mai-chau",      name: "Mai Chau Valley",    province: "Hoa Binh",   tagline: "Peaceful valley of White Thai stilt houses, bicycle rides, and weaving workshops",         tags: ["culture", "nature"],   hasGuide: false },
        { slug: "cat-ba-island", name: "Cat Ba Island",      province: "Hai Phong",  tagline: "The largest island in Ha Long Bay - kayaking, rock climbing, and langur spotting",        tags: ["island", "nature"],    hasGuide: false },
      ],
    },
  
    central: {
      slug: "central-vietnam",
      label: "Central Vietnam",
      emoji: "🌊",
      color: "#22c55e",
      tagline: "Ancient kingdoms, white sand beaches, and Vietnam's finest cuisine.",
      description:
        "Central Vietnam is where history runs deepest - Cham towers, imperial citadels, UNESCO heritage towns, and the Ho Chi Minh Trail all converge here. The coast offers some of Vietnam's most beautiful beaches, while the Central Highlands preserve the traditions of Bahnar, Gia Rai, and Ede peoples.",
      destinations: [
        { slug: "hoi-an",    name: "Hoi An",            province: "Quang Nam",      tagline: "UNESCO ancient town of lanterns, tailors, and Vietnam's best banh mi",              tags: ["culture", "history"], hasGuide: false },
        { slug: "hue",       name: "Hue Imperial City", province: "Thua Thien-Hue", tagline: "Vietnam's last imperial capital - royal tombs, citadel, and refined royal cuisine", tags: ["history", "culture"], hasGuide: false },
        { slug: "da-nang",   name: "Da Nang",           province: "Da Nang",        tagline: "Vietnam's most liveable city - beaches, Marble Mountains, and great food",           tags: ["city", "beach"],     hasGuide: false },
        { slug: "phong-nha", name: "Phong Nha Caves",   province: "Quang Binh",     tagline: "The world's largest cave system - from Paradise Cave to the epic Son Doong",         tags: ["nature"],            hasGuide: false },
        { slug: "da-lat",    name: "Da Lat",            province: "Lam Dong",       tagline: "Vietnam's highland rose city - pine forests, flower farms, and cool mountain air",   tags: ["nature", "city"],    hasGuide: false },
        { slug: "nha-trang", name: "Nha Trang",         province: "Khanh Hoa",      tagline: "Vietnam's premier beach resort city - diving, snorkeling, and fresh seafood",        tags: ["beach", "nature"],   hasGuide: false },
        { slug: "mui-ne",    name: "Mui Ne",            province: "Binh Thuan",     tagline: "Red and white sand dunes, kite surfing, and dragon fruit as far as you can see",     tags: ["beach", "nature"],   hasGuide: false },
        { slug: "my-son",    name: "My Son Cham Ruins", province: "Quang Nam",      tagline: "Ancient Cham temple complex in a jungle valley - Vietnam's Angkor Wat",              tags: ["history", "culture"],hasGuide: false },
        { slug: "ly-son",    name: "Lý Sơn",            province: "Quang Ngai",     tagline: "Volcanic craters, black-sand beaches, and Vietnam's garlic island",                   tags: ["island", "beach"],   hasGuide: false },
      ],
    },
  
    south: {
      slug: "south-vietnam",
      label: "South Vietnam",
      emoji: "🌴",
      color: "#f97316",
      tagline: "The Mekong Delta, tropical islands, and Vietnam's most dynamic city.",
      description:
        "South Vietnam stretches from the sprawling streets of Ho Chi Minh City down through the Mekong Delta to the islands of Kien Giang. It's a region of contrasts - urban energy and river stillness, beaches and rice paddies, colonial history and modern hustle.",
      destinations: [
        { slug: "phu-quoc",  name: "Phu Quoc",               province: "Kien Giang",     tagline: "Vietnam's island paradise - before it gets too developed",                       tags: ["beach", "island"],    hasGuide: true  },
        { slug: "nam-du",    name: "Nam Du Islands",          province: "Kien Giang",     tagline: "Remote archipelago with crystal water and almost no tourists",                   tags: ["island", "nature"],   hasGuide: false },
        { slug: "con-dao",   name: "Con Dao Islands",         province: "Ba Ria-Vung Tau",tagline: "Pristine beaches, sea turtles, and a haunting prison history",                   tags: ["island", "history"],  hasGuide: false },
        { slug: "cat-tien",  name: "Cat Tien National Park",  province: "Dong Nai",       tagline: "One of Vietnam's last lowland rainforests - night safaris and gibbons at dawn",  tags: ["nature", "wildlife"], hasGuide: false },
        { slug: "ba-den",    name: "Ba Den Mountain",         province: "Tay Ninh",       tagline: "The Black Lady Mountain - cable car, temples, and panoramic delta views",        tags: ["nature", "culture"],  hasGuide: false },
        { slug: "cai-rang",  name: "Cai Rang Floating Market",province: "Can Tho",        tagline: "Century-old wholesale market on the Mekong - boats trading fruit at dawn",      tags: ["culture", "food"],    hasGuide: false },
      ],
    },
  }