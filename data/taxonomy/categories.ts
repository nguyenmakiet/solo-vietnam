import type { TaxonomyMeta } from "./shared"

// ─── Location "categories" ───────────────────────────────────
// Target meaning: "What broad travel themes does this place belong to?"
// (e.g. nature, culture, history, architecture, religion, food).
//
// SEMANTIC CONFLICT - the values currently in production data are
// editorial badges ("hidden-gem", "must-see", "iconic"), not themes.
// They are kept here unchanged so existing Locations stay valid. Where
// these badges should live long-term is an open decision - see AUDIT.md.
// Theme values are intentionally NOT added yet (vocabulary review pending).

export type LocationCategoryGroup = "editorial" | "theme"

export const LOCATION_CATEGORIES = {
  "hidden-gem": {
    label: "Hidden Gem",
    group: "editorial",
    status: "under-review",
    description: "Editorial badge, not a travel theme",
  },
  "must-see": {
    label: "Must See",
    group: "editorial",
    status: "under-review",
    description: "Editorial badge, not a travel theme",
  },
  iconic: {
    label: "Iconic",
    group: "editorial",
    status: "under-review",
    description: "Editorial badge, not a travel theme",
  },

  // ── Broad travel themes - proposed during the content review ──
  nature: { label: "Nature", group: "theme", status: "proposed" },
  culture: { label: "Culture", group: "theme", status: "proposed" },
  history: { label: "History", group: "theme", status: "proposed" },
  architecture: { label: "Architecture", group: "theme", status: "proposed" },
  religion: { label: "Religion", group: "theme", status: "proposed" },
  food: { label: "Food", group: "theme", status: "proposed" },
} as const satisfies Record<string, TaxonomyMeta<LocationCategoryGroup>>

export type LocationCategory = keyof typeof LOCATION_CATEGORIES

export function isLocationCategory(value: string): value is LocationCategory {
  return Object.prototype.hasOwnProperty.call(LOCATION_CATEGORIES, value)
}
