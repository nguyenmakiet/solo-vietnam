export type ExperienceSlug =
  | "beaches"
  | "trekking"
  | "camping"
  | "caving"
  | "snorkeling"
  | "kayaking"
  | "food"
  | "culture"
  | "history"
  | "photography"
  | "markets"
  | "nightlife"
  | "walking-tours"
  | "cycling"
  | "boat-tours"
  | "cable-cars"
  | "homestays"
  | "wildlife"
  | "motorcycling"
  | "shopping"

export type ExperienceValue =
  | "beach"
  | "trekking"
  | "camping"
  | "caving"
  | "snorkeling"
  | "kayaking"
  | "food"
  | "culture"
  | "history"
  | "photography"
  | "markets"
  | "nightlife"
  | "walking-tour"
  | "cycling"
  | "boat-tour"
  | "cable-car"
  | "homestay"
  | "wildlife"
  | "motorcycling"
  | "shopping"

export type Experience = {
  slug: ExperienceSlug
  value: ExperienceValue
  label: string
  icon: string
  tagline: string
  heroColor: string // tailwind-style gradient fallback
}

export const experiences: Experience[] = [
  {
    slug: "beaches",
    value: "beach",
    label: "Beaches",
    icon: "🏖️",
    tagline: "White sand, turquoise water, and the sound of waves",
    heroColor: "#0ea5e9",
  },
  {
    slug: "trekking",
    value: "trekking",
    label: "Trekking",
    icon: "🥾",
    tagline: "Multi-day trails through Vietnam's wildest terrain",
    heroColor: "#16a34a",
  },
  {
    slug: "camping",
    value: "camping",
    label: "Camping",
    icon: "🏕️",
    tagline: "Sleep under the stars in Vietnam's most remote places",
    heroColor: "#854d0e",
  },
  {
    slug: "caving",
    value: "caving",
    label: "Caving",
    icon: "🪨",
    tagline: "Explore the world's most spectacular cave systems",
    heroColor: "#4338ca",
  },
  {
    slug: "snorkeling",
    value: "snorkeling",
    label: "Snorkeling",
    icon: "🐠",
    tagline: "Crystal clear water and vibrant reefs just below the surface",
    heroColor: "#0891b2",
  },
  {
    slug: "kayaking",
    value: "kayaking",
    label: "Kayaking",
    icon: "🛶",
    tagline: "Paddle through limestone karsts, rivers, and hidden lagoons",
    heroColor: "#0369a1",
  },
  {
    slug: "food",
    value: "food",
    label: "Food",
    icon: "🍜",
    tagline: "Street food, local markets, and dishes you'll dream about",
    heroColor: "#b45309",
  },
  {
    slug: "culture",
    value: "culture",
    label: "Culture",
    icon: "🎎",
    tagline: "Ethnic minorities, ancient traditions, and living heritage",
    heroColor: "#b91c1c",
  },
  {
    slug: "history",
    value: "history",
    label: "History",
    icon: "🏯",
    tagline: "Dynasties, wars, and the stories written into Vietnam's landscape",
    heroColor: "#92400e",
  },
  {
    slug: "photography",
    value: "photography",
    label: "Photography",
    icon: "📸",
    tagline: "The most photogenic landscapes, villages, and moments in Vietnam",
    heroColor: "#7c3aed",
  },
  {
    slug: "markets",
    value: "markets",
    label: "Markets",
    icon: "🛒",
    tagline: "Night markets, morning markets, and everything in between",
    heroColor: "#c2410c",
  },
  {
    slug: "nightlife",
    value: "nightlife",
    label: "Nightlife",
    icon: "🌙",
    tagline: "Beach bars, rooftop clubs, and street-side bia hơi",
    heroColor: "#6d28d9",
  },
  {
    slug: "walking-tours",
    value: "walking-tour",
    label: "Walking Tours",
    icon: "🚶",
    tagline: "Explore ancient towns and hidden alleys on foot",
    heroColor: "#0f766e",
  },
  {
    slug: "cycling",
    value: "cycling",
    label: "Cycling",
    icon: "🚲",
    tagline: "Rice fields, coastal roads, and countryside lanes by bike",
    heroColor: "#166534",
  },
  {
    slug: "boat-tours",
    value: "boat-tour",
    label: "Boat Tours",
    icon: "🚢",
    tagline: "Overnight cruises, river boats, and bamboo rafts",
    heroColor: "#1d4ed8",
  },
  {
    slug: "cable-cars",
    value: "cable-car",
    label: "Cable Cars",
    icon: "🚡",
    tagline: "World-record gondolas and mountain rides with jaw-dropping views",
    heroColor: "#0369a1",
  },
  {
    slug: "homestays",
    value: "homestay",
    label: "Homestays",
    icon: "🏡",
    tagline: "Sleep in ethnic minority villages and wake up to a different Vietnam",
    heroColor: "#065f46",
  },
  {
    slug: "wildlife",
    value: "wildlife",
    label: "Wildlife",
    icon: "🦋",
    tagline: "National parks, rare species, and untouched jungle",
    heroColor: "#14532d",
  },
  {
    slug: "motorcycling",
    value: "motorcycling",
    label: "Motorcycling",
    icon: "🏍️",
    tagline: "The best way to see Vietnam - on two wheels, on your own schedule",
    heroColor: "#b45309",
  },
  {
    slug: "shopping",
    value: "shopping",
    label: "Shopping",
    icon: "🛍️",
    tagline: "Silk, lacquerware, tailors, and night markets - Vietnam's best buys",
    heroColor: "#be185d",
  },
]

export function getExperienceBySlug(slug: string): Experience | undefined {
  return experiences.find((e) => e.slug === slug)
}
