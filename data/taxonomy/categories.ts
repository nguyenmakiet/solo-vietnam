import type { TaxonomyMeta } from "./shared"

// ─── Location "categories" ───────────────────────────────────
// Answers: "What broad travel themes does this place belong to?"
//
// Two groups share this field (CONTENT-REVIEW D1):
//   editorial - badges ("hidden-gem", "must-see", "iconic"), not themes
//   theme     - broad travel themes. Owner-approved in Phase 2: the six
//               original themes plus "coast" and "entertainment".
// Place kinds (beach, waterfall, national-park...) belong to `type` (R14).
// `categories` is not rendered anywhere in the UI today.

export type LocationCategoryGroup = "editorial" | "theme"

export const LOCATION_CATEGORIES = {
  "hidden-gem": {
    label: "Hidden Gem",
    group: "editorial",
    status: "canonical",
    description: "Editorial badge, not a travel theme",
  },
  "must-see": {
    label: "Must See",
    group: "editorial",
    status: "canonical",
    description: "Editorial badge, not a travel theme",
  },
  iconic: {
    label: "Iconic",
    group: "editorial",
    status: "canonical",
    description: "Editorial badge, not a travel theme. Not equivalent to type 'landmark'",
  },

  // ── Broad travel themes ──
  nature: { label: "Nature", group: "theme", status: "canonical" },
  culture: { label: "Culture", group: "theme", status: "canonical" },
  history: { label: "History", group: "theme", status: "canonical" },
  architecture: { label: "Architecture", group: "theme", status: "canonical" },
  religion: { label: "Religion", group: "theme", status: "canonical" },
  food: { label: "Food", group: "theme", status: "canonical" },
  coast: {
    label: "Coast",
    group: "theme",
    status: "canonical",
    description: "Seaside places, including coastal places whose type is not coastal (fishing villages, lighthouses, sea pagodas)",
  },
  entertainment: {
    label: "Entertainment",
    group: "theme",
    status: "canonical",
    description: "Built leisure and amusement: theme parks, resort cable cars, entertainment beaches",
  },
} as const satisfies Record<string, TaxonomyMeta<LocationCategoryGroup>>

export type LocationCategory = keyof typeof LOCATION_CATEGORIES

export function isLocationCategory(value: string): value is LocationCategory {
  return Object.prototype.hasOwnProperty.call(LOCATION_CATEGORIES, value)
}
