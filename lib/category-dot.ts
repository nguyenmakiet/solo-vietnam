// Maps a free-text tag / experience to one of the semantic category dots
// (globals.css: .ui-dot--water | --trek | --food | --highlight).
// Unmapped labels return null and render with the neutral ink-2 dot.

export type DotCategory = "water" | "trek" | "food" | "highlight"

const CATEGORY_KEYWORDS: Record<DotCategory, string[]> = {
  water: [
    "beach", "beaches", "island", "bay", "river", "lake", "waterfall", "cruise", "boat-tour",
    "kayaking", "snorkeling", "diving", "swimming", "surfing", "kitesurfing", "coast",
  ],
  trek: [
    "trekking", "hiking", "camping", "nature", "adventure", "mountain", "cave", "caving",
    "motorcycling", "cycling", "wildlife", "national-park",
  ],
  food: ["food", "markets", "street-food", "nightlife", "coffee"],
  highlight: [
    "history", "culture", "heritage", "hidden-gem", "must-see", "iconic", "photography",
    "pagoda", "temple",
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
