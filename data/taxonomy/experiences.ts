import { toTaxonomyKey, type TaxonomyMeta } from "./shared"

// ─── Location "experiences" ──────────────────────────────────
// Answers: "What can a traveler do or experience here?" (includes activities).
//
// Status and public pages are separate (Phase 2 status model):
//   - `page` = the /experiences/[slug] page backing the value. Only the 20
//     page-backed values form ExperienceValue (data/experiences.ts). Pages,
//     slugs and membership are unchanged by the consolidation (R5).
//   - `status: "canonical"` = agreed vocabulary, with or without a page.
//   - `status: "deprecated"` + `replacedBy` = still valid in old data, not to
//     be added; normalizeExperience() maps it to the replacement.
// Location.experiences stays typed as string[] during the transition.

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
    status: "canonical", page: "beaches",
    description: "Overlaps with type 'beach' - may become more specific activities (see AUDIT.md)",
  },
  trekking: {
    label: "Trekking",
    group: "outdoor",
    status: "canonical",
    page: "trekking",
    description: "Longer, demanding, multi-hour/multi-day route (R12). A sibling of 'hiking', not a supertype",
  },
  camping: { label: "Camping", group: "outdoor", status: "canonical", page: "camping" },
  caving: { label: "Caving", group: "outdoor", status: "canonical", page: "caving" },
  snorkeling: { label: "Snorkeling", group: "water", status: "canonical", page: "snorkeling" },
  kayaking: { label: "Kayaking", group: "water", status: "canonical", page: "kayaking" },
  food: {
    label: "Food",
    group: "food-and-local-life",
    status: "canonical", page: "food",
    description: "Overlaps with a future 'food' category (see AUDIT.md)",
  },
  culture: {
    label: "Culture",
    group: "culture",
    status: "canonical", page: "culture",
    description: "Overlaps with a future 'culture' category (see AUDIT.md)",
  },
  history: {
    label: "History",
    group: "culture",
    status: "canonical", page: "history",
    description: "Overlaps with a future 'history' category (see AUDIT.md)",
  },
  photography: { label: "Photography", group: "sightseeing", status: "canonical", page: "photography" },
  markets: { label: "Markets", group: "food-and-local-life", status: "canonical", page: "markets" },
  nightlife: { label: "Nightlife", group: "food-and-local-life", status: "canonical", page: "nightlife" },
  "walking-tour": { label: "Walking Tour", group: "culture", status: "canonical", page: "walking-tours" },
  cycling: { label: "Cycling", group: "outdoor", status: "canonical", page: "cycling" },
  "boat-tour": { label: "Boat Tour", group: "water", status: "canonical", page: "boat-tours" },
  "cable-car": { label: "Cable Car", group: "sightseeing", status: "canonical", page: "cable-cars" },
  homestay: { label: "Homestay", group: "culture", status: "canonical", page: "homestays" },
  wildlife: { label: "Wildlife", group: "outdoor", status: "canonical", page: "wildlife" },
  motorcycling: { label: "Motorcycling", group: "outdoor", status: "canonical", page: "motorcycling" },
  shopping: { label: "Shopping", group: "food-and-local-life", status: "canonical", page: "shopping" },

  // ── Introduced by the content review (CONTENT-REVIEW.md) - canonical without a page unless marked proposed ──
  swimming: { label: "Swimming", group: "water", status: "canonical" },
  surfing: { label: "Surfing", group: "water", status: "canonical" },
  "temple-visit": {
    label: "Temple Visit",
    group: "culture",
    status: "deprecated",
    replacedBy: "religious-site-visit",
    description: "Consolidated into religious-site-visit (Phase 2, owner decision). Do not add",
  },
  fishing: {
    label: "Fishing",
    group: "water",
    status: "canonical",
    description: "Hands-on fishing (nets, traps, lines), not just watching fishermen",
  },
  kitesurfing: { label: "Kitesurfing", group: "water", status: "canonical" },
  "museum-visit": { label: "Museum Visit", group: "culture", status: "canonical" },
  diving: { label: "Diving", group: "water", status: "canonical", description: "Scuba diving" },
  hiking: {
    label: "Hiking",
    group: "outdoor",
    status: "canonical",
    description: "Day hike / trail walk (R12). A sibling of 'trekking', not a subtype - a location may have both",
  },
  "religious-site-visit": {
    label: "Religious Site Visit",
    group: "culture",
    status: "canonical",
    description: "Visiting any active place of worship (pagoda, temple, shrine, church...). The tradition is carried by a religion tag",
  },

  // ── Phase 2 - owner-registered as proposed (no page, not canonical) ──
  paragliding: { label: "Paragliding", group: "outdoor", status: "proposed" },
  "rock-climbing": { label: "Rock Climbing", group: "outdoor", status: "proposed" },
} as const satisfies Record<string, TaxonomyMeta<LocationExperienceGroup> & { page?: string }>

export type LocationExperience = keyof typeof LOCATION_EXPERIENCES

type ExperienceEntry = (typeof LOCATION_EXPERIENCES)[LocationExperience]

// Experiences backed by a public /experiences/* page (entries with `page`).
export type PageBackedLocationExperience = {
  [K in LocationExperience]: (typeof LOCATION_EXPERIENCES)[K] extends { page: string } ? K : never
}[LocationExperience]

export function isLocationExperience(value: string): value is LocationExperience {
  return Object.prototype.hasOwnProperty.call(LOCATION_EXPERIENCES, value)
}

// Display label for an experience value: the registry label for a registered
// experience ("boat-tour" -> "Boat Tour"); otherwise the raw value made
// readable ("some-value" -> "Some value").
export function experienceDisplayLabel(value: string): string {
  if (isLocationExperience(value)) return LOCATION_EXPERIENCES[value].label
  const text = value.replace(/-/g, " ")
  return text.charAt(0).toUpperCase() + text.slice(1)
}

// ─── Legacy aliases ──────────────────────────────────────────
// legacy value (as toTaxonomyKey output) -> experience. Only true 1:1
// equivalences (EQ). Deprecated registry values resolve via `replacedBy`.
export const LEGACY_EXPERIENCE_ALIASES: Readonly<Record<string, LocationExperience>> = {
  "walking-tours": "walking-tour",
}

function resolveReplacement(value: LocationExperience): LocationExperience {
  const entry: ExperienceEntry & { replacedBy?: string } = LOCATION_EXPERIENCES[value]
  return entry.replacedBy && isLocationExperience(entry.replacedBy) ? entry.replacedBy : value
}

export function normalizeExperience(value: string): LocationExperience | null {
  if (isLocationExperience(value)) return resolveReplacement(value)
  const key = toTaxonomyKey(value)
  if (isLocationExperience(key)) return resolveReplacement(key)
  return LEGACY_EXPERIENCE_ALIASES[key] ?? null
}
