export type Province = {
    slug: string
    name: string
    region: "north" | "central" | "south"
    description?: string
    bestTime?: string
    capital?: string
    knownFor?: string
    tags?: string[]
    food?: { name: string; description: string; emoji: string }[]
  }
  
  export const provinces: Province[] = [
    {
      slug: "lao-cai",
      name: "Lao Cai",
      region: "north",
      description: "Home to Sapa's famous rice terraces and ethnic minority villages, Lao Cai is the gateway to Vietnam's mountainous northwest.",
      bestTime: "Sep – Nov, Mar – May",
      capital: "Lao Cai City",
      knownFor: "Sapa trekking",
      tags: ["🏔️ Mountain", "🌿 Nature", "🏕️ Camping"],
      food: [
        { emoji: "🍖", name: "Thắng cố", description: "Traditional horse meat stew from the Hmong people" },
        { emoji: "🌽", name: "Cơm lam", description: "Sticky rice cooked in bamboo tubes over open fire" },
        { emoji: "🐟", name: "Cá hồi nướng", description: "Grilled salmon from Sapa's cold mountain streams" },
      ],
    },
    {
      slug: "quang-ninh",
      name: "Quang Ninh",
      region: "north",
      description: "Home to Ha Long Bay — one of the world's most iconic seascapes. Over 1,600 limestone islands rising from emerald waters.",
      bestTime: "Oct – Apr",
      capital: "Ha Long City",
      knownFor: "Ha Long Bay cruises",
      tags: ["🏖️ Beach", "🌿 Nature", "🚢 Cruising"],
      food: [
        { emoji: "🦪", name: "Hàu sữa", description: "Fresh oysters — best eaten raw with lime and chili" },
        { emoji: "🦑", name: "Mực nhảy", description: "Live squid grilled right on the boat" },
        { emoji: "🍜", name: "Bánh cuốn Hạ Long", description: "Steamed rice rolls with local seafood filling" },
      ],
    },
    {
      slug: "quang-nam",
      name: "Quang Nam",
      region: "central",
      description: "A province steeped in history — home to the UNESCO-listed Ancient Town of Hoi An and the My Son Hindu sanctuary.",
      bestTime: "Feb – Jul",
      capital: "Tam Ky",
      knownFor: "Hoi An Ancient Town",
      tags: ["🏛️ History", "🍜 Food", "🏖️ Beach"],
      food: [
        { emoji: "🍜", name: "Cao lầu", description: "Thick noodles with pork and crispy croutons — only authentic in Hoi An" },
        { emoji: "🥗", name: "White Rose dumplings", description: "Delicate shrimp dumplings shaped like white roses" },
        { emoji: "🥙", name: "Bánh mì Phượng", description: "The famous banh mi that Anthony Bourdain called the best sandwich" },
      ],
    },
    {
      slug: "kien-giang",
      name: "Kien Giang",
      region: "south",
      description: "A province of contrasts — from the vibrant streets of Rach Gia to the pristine beaches of Phu Quoc island.",
      bestTime: "Nov – Apr",
      capital: "Rach Gia",
      knownFor: "Phu Quoc island",
      tags: ["🏖️ Beach", "🌿 Nature", "🍜 Food"],
      food: [
        { emoji: "🍜", name: "Bún quậy", description: "Stirred noodle soup unique to Phu Quoc — silky broth, fresh herbs" },
        { emoji: "🐟", name: "Gỏi cá trích", description: "Fresh herring salad with coconut, a Phu Quoc specialty" },
        { emoji: "🦐", name: "Nhum nướng", description: "Grilled sea urchin with scallion oil — best eaten on the beach" },
        { emoji: "🫙", name: "Nước mắm Phú Quốc", description: "The island's famous fish sauce — the best in Vietnam" },
      ],
    },
  ]
  
  export function getProvinceBySlug(slug: string): Province | undefined {
    return provinces.find((p) => p.slug === slug)
  }