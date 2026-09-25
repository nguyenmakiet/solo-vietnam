import type { TaxonomyMeta } from "./shared"

// ─── Location "type" ─────────────────────────────────────────
// Answers: "What is this place?" - the primary nature of the location.
//
// The keys below are exactly the values already used in production data
// (previously the LocationType union in data/location.ts). Values marked
// "under-review" describe a broad theme rather than what the place is -
// they stay valid until the vocabulary review decides where they belong.

export type LocationTypeGroup =
  | "water"
  | "terrain"
  | "settlement"
  | "urban"
  | "religious"
  | "heritage"
  | "broad"

export const LOCATION_TYPES = {
  beach: { label: "Beach", group: "water", status: "canonical" },
  island: { label: "Island", group: "water", status: "canonical" },
  bay: { label: "Bay", group: "water", status: "canonical" },
  river: { label: "River", group: "water", status: "canonical" },
  lake: { label: "Lake", group: "water", status: "canonical" },
  mountain: { label: "Mountain", group: "terrain", status: "canonical" },
  forest: { label: "Forest", group: "terrain", status: "canonical" },
  nature: {
    label: "Nature",
    group: "broad",
    status: "under-review",
    description: "Broad theme, overlaps with a future 'nature' category",
  },
  waterfall: { label: "Waterfall", group: "water", status: "canonical" },
  cave: { label: "Cave", group: "terrain", status: "canonical" },
  attraction: {
    label: "Attraction",
    group: "broad",
    status: "under-review",
    description: "Generic - does not say what the place is",
  },
  cultural: {
    label: "Cultural",
    group: "broad",
    status: "under-review",
    description: "Broad theme, overlaps with a future 'culture' category",
  },
  town: { label: "Town", group: "settlement", status: "canonical" },
  city: { label: "City", group: "settlement", status: "canonical" },
  market: { label: "Market", group: "urban", status: "canonical" },
  temple: { label: "Temple", group: "religious", status: "canonical" },
  pagoda: { label: "Pagoda", group: "religious", status: "canonical" },
  tomb: { label: "Tomb", group: "heritage", status: "canonical" },
  citadel: { label: "Citadel", group: "heritage", status: "canonical" },
  heritage: {
    label: "Heritage",
    group: "broad",
    status: "under-review",
    description: "Designation/theme rather than a kind of place",
  },
  history: {
    label: "History",
    group: "broad",
    status: "under-review",
    description: "Broad theme, overlaps with a future 'history' category",
  },
  landmark: {
    label: "Landmark",
    group: "broad",
    status: "under-review",
    description: "Generic - does not say what the place is",
  },
  museum: { label: "Museum", group: "heritage", status: "canonical" },

  // ── Proposed during the content review (CONTENT-REVIEW.md) ──
  "communal-house": {
    label: "Communal House",
    group: "heritage",
    status: "proposed",
    description: "Đình làng - village communal house",
  },
  valley: { label: "Valley", group: "terrain", status: "proposed" },
  "rice-fields": {
    label: "Rice Fields",
    group: "terrain",
    status: "proposed",
    description: "Farmed rice landscape - flat paddies or terraces (terrace split pending review)",
  },
} as const satisfies Record<string, TaxonomyMeta<LocationTypeGroup>>

export type LocationType = keyof typeof LOCATION_TYPES

export function isLocationType(value: string): value is LocationType {
  return Object.prototype.hasOwnProperty.call(LOCATION_TYPES, value)
}
