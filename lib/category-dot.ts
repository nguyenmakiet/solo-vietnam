// Maps a free-text tag / experience to one of the semantic category dots
// (globals.css: .ui-dot--water | --trek | --food | --highlight).
// Unmapped labels return null and render with the neutral ink-2 dot.

export type DotCategory = "water" | "trek" | "food" | "highlight"

const CATEGORY_KEYWORDS: Record<DotCategory, string[]> = {
  // Tags / experiences, plus place types (data/taxonomy/types.ts)
  water: [
    "beach", "beaches", "island", "bay", "river", "lake", "waterfall", "cruise", "boat-tour",
    "kayaking", "snorkeling", "diving", "swimming", "surfing", "kitesurfing", "coast",
    "stream", "cape", "lighthouse",
  ],
  trek: [
    "trekking", "hiking", "camping", "nature", "adventure", "mountain", "cave", "caving",
    "motorcycling", "cycling", "wildlife", "national-park",
    "forest", "valley", "pass", "rock-formation", "nature-reserve", "grassland", "sand-dunes",
    "rice-fields",
  ],
  food: ["food", "markets", "market", "street-food", "nightlife", "coffee"],
  highlight: [
    "history", "culture", "heritage", "hidden-gem", "must-see", "iconic", "photography",
    "pagoda", "temple", "church", "monument", "historic-site", "citadel", "palace", "tomb",
    "museum", "communal-house", "old-quarter", "fortress", "prison",
  ],
}

const LOOKUP = new Map<string, DotCategory>(
  (Object.keys(CATEGORY_KEYWORDS) as DotCategory[]).flatMap((cat) =>
    CATEGORY_KEYWORDS[cat].map((k) => [k, cat] as const)
  )
)

export function dotCategory(label: string): DotCategory | null {
  return LOOKUP.get(label.trim().toLowerCase().replace(/\s+/g, "-")) ?? null
}

/** Class for the 6px dot: "ui-dot ui-dot--trek", or plain "ui-dot" (ink-2) when unmapped. */
export function dotClass(label: string): string {
  const cat = dotCategory(label)
  return cat ? `ui-dot ui-dot--${cat}` : "ui-dot"
}
