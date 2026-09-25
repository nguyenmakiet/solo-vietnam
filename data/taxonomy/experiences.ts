import { toTaxonomyKey, type TaxonomyMeta } from "./shared"

// ─── Location "experiences" ──────────────────────────────────
// Answers: "What can a traveler do or experience here?" (includes activities).
//
// "canonical" keys are the values backed by a public /experiences/* page
// (the ExperienceValue union in data/experiences.ts). "proposed" keys come
// from the content review and have no page yet. Location.experiences stays
// typed as string[] during the transition - values outside this list still
// load and render; normalizeExperience() maps them where the meaning is clear.

export type LocationExperienceGroup =
  | "outdoor"
  | "water"
  | "culture"
  | "food-and-local-life"
  | "sightseeing"

export const LOCATION_EXPERIENCES = {
  beach: {
    label: "Beach",
    group: "water",
    status: "canonical",
    description: "Overlaps with type 'beach' - may become more specific activities (see AUDIT.md)",
  },
  trekking: { label: "Trekking", group: "outdoor", status: "canonical" },
  camping: { label: "Camping", group: "outdoor", status: "canonical" },
  caving: { label: "Caving", group: "outdoor", status: "canonical" },
  snorkeling: { label: "Snorkeling", group: "water", status: "canonical" },
  kayaking: { label: "Kayaking", group: "water", status: "canonical" },
  food: {
    label: "Food",
    group: "food-and-local-life",
    status: "canonical",
    description: "Overlaps with a future 'food' category (see AUDIT.md)",
  },
  culture: {
    label: "Culture",
    group: "culture",
    status: "canonical",
    description: "Overlaps with a future 'culture' category (see AUDIT.md)",
  },
  history: {
    label: "History",
    group: "culture",
    status: "canonical",
    description: "Overlaps with a future 'history' category (see AUDIT.md)",
  },
  photography: { label: "Photography", group: "sightseeing", status: "canonical" },
  markets: { label: "Markets", group: "food-and-local-life", status: "canonical" },
  nightlife: { label: "Nightlife", group: "food-and-local-life", status: "canonical" },
  "walking-tour": { label: "Walking Tour", group: "culture", status: "canonical" },
  cycling: { label: "Cycling", group: "outdoor", status: "canonical" },
  "boat-tour": { label: "Boat Tour", group: "water", status: "canonical" },
  "cable-car": { label: "Cable Car", group: "sightseeing", status: "canonical" },
  homestay: { label: "Homestay", group: "culture", status: "canonical" },
  wildlife: { label: "Wildlife", group: "outdoor", status: "canonical" },
  motorcycling: { label: "Motorcycling", group: "outdoor", status: "canonical" },
  shopping: { label: "Shopping", group: "food-and-local-life", status: "canonical" },

  // ── Proposed during the content review (CONTENT-REVIEW.md) ──
  swimming: { label: "Swimming", group: "water", status: "proposed" },
  surfing: { label: "Surfing", group: "water", status: "proposed" },
  "temple-visit": {
    label: "Temple Visit",
    group: "culture",
    status: "proposed",
    description: "Visiting an active place of worship - pagoda, temple, shrine",
  },
} as const satisfies Record<string, TaxonomyMeta<LocationExperienceGroup>>

export type LocationExperience = keyof typeof LOCATION_EXPERIENCES

// Experiences backed by a public /experiences/* page (status "canonical").
export type CanonicalLocationExperience = {
  [K in LocationExperience]: (typeof LOCATION_EXPERIENCES)[K]["status"] extends "canonical" ? K : never
}[LocationExperience]

export function isLocationExperience(value: string): value is LocationExperience {
  return Object.prototype.hasOwnProperty.call(LOCATION_EXPERIENCES, value)
}

// ─── Legacy aliases ──────────────────────────────────────────
// legacy value (as toTaxonomyKey output) -> canonical experience.
// Only unambiguous equivalences. Values found in data without a clear
// canonical target (swimming, diving, surfing, hiking...) are left unmapped
// and listed in AUDIT.md for the vocabulary review.
export const LEGACY_EXPERIENCE_ALIASES: Readonly<Record<string, LocationExperience>> = {
  "walking-tours": "walking-tour",
}

export function normalizeExperience(value: string): LocationExperience | null {
  if (isLocationExperience(value)) return value
  const key = toTaxonomyKey(value)
  if (isLocationExperience(key)) return key
  return LEGACY_EXPERIENCE_ALIASES[key] ?? null
}
