import type { TaxonomyMeta } from "./shared"

// ─── Location "type" ─────────────────────────────────────────
// Answers: "What is this place?" - the primary nature of the location.
// type[0] is the primary type: it drives the badge and the theme colour.
//
// Every entry carries its theme colour (`theme`), so `locationTheme` in
// data/location.ts is derived from this registry and a new type cannot be
// added without a colour. Existing colours are unchanged.
//
// The six "broad" values (nature, attraction, cultural, heritage, history,
// landmark) describe a theme rather than what the place is. All six are
// deprecated (Phase 2 broad-type migration): no Location uses them and the audit
// fails if one reappears. Their replacement is fixed by the owner (AUDIT.md):
// a category, or `noReplacement` when nothing is equivalent. They stay in the
// registry for labels, colours and old URLs.

export type LocationTheme = "blue" | "green" | "amber" | "purple" | "gray"

export type LocationTypeGroup =
  | "water"
  | "terrain"
  | "settlement"
  | "urban"
  | "religious"
  | "heritage"
  | "leisure"
  | "broad"

type LocationTypeMeta = TaxonomyMeta<LocationTypeGroup> & { theme: LocationTheme }

export const LOCATION_TYPES = {
  beach: { label: "Beach", group: "water", status: "canonical", theme: "blue" },
  island: { label: "Island", group: "water", status: "canonical", theme: "blue" },
  bay: { label: "Bay", group: "water", status: "canonical", theme: "blue" },
  river: { label: "River", group: "water", status: "canonical", theme: "blue" },
  lake: { label: "Lake", group: "water", status: "canonical", theme: "blue" },
  mountain: { label: "Mountain", group: "terrain", status: "canonical", theme: "green" },
  forest: { label: "Forest", group: "terrain", status: "canonical", theme: "green" },
  nature: {
    label: "Nature",
    group: "broad",
    status: "deprecated",
    theme: "green",
    replacedByCategory: "nature",
    description: "Deprecated broad theme. Removed from all Location data - use category 'nature' with a specific place type",
  },
  waterfall: { label: "Waterfall", group: "water", status: "canonical", theme: "green" },
  cave: { label: "Cave", group: "terrain", status: "canonical", theme: "green" },
  attraction: {
    label: "Attraction",
    group: "broad",
    status: "deprecated",
    theme: "amber",
    noReplacement: "Generic - does not say what the place is; no type or category equivalent",
    description: "Deprecated broad type. Removed from all Location data - use a specific place type",
  },
  cultural: {
    label: "Cultural",
    group: "broad",
    status: "deprecated",
    theme: "purple",
    replacedByCategory: "culture",
    description:
      "Deprecated broad theme. Removed from all Location data - use category 'culture' (or 'religion' for places of worship) with a specific place type",
  },
  town: { label: "Town", group: "settlement", status: "canonical", theme: "amber" },
  city: { label: "City", group: "settlement", status: "canonical", theme: "amber" },
  market: { label: "Market", group: "urban", status: "canonical", theme: "amber" },
  temple: { label: "Temple", group: "religious", status: "canonical", theme: "purple" },
  pagoda: { label: "Pagoda", group: "religious", status: "canonical", theme: "purple" },
  tomb: { label: "Tomb", group: "heritage", status: "canonical", theme: "purple" },
  citadel: { label: "Citadel", group: "heritage", status: "canonical", theme: "purple" },
  heritage: {
    label: "Heritage",
    group: "broad",
    status: "deprecated",
    theme: "purple",
    noReplacement: "Theme or designation, not a kind of place; no single category equivalent (designations live in recognitions.ts)",
    description: "Deprecated broad type. Removed from all Location data - use a specific place type and theme categories",
  },
  history: {
    label: "History",
    group: "broad",
    status: "deprecated",
    theme: "amber",
    replacedByCategory: "history",
    description:
      "Deprecated in Phase 2 (broad-type migration step 1). Removed from all Location data - use category 'history' (and experience 'history'). Never use as a type",
  },
  landmark: {
    label: "Landmark",
    group: "broad",
    status: "deprecated",
    theme: "purple",
    noReplacement: "Generic - does not say what the place is; category 'iconic' is not equivalent",
    description: "Deprecated broad type. Removed from all Location data - use a specific place type",
  },
  museum: { label: "Museum", group: "heritage", status: "canonical", theme: "amber" },

  // ── Introduced by the content review (CONTENT-REVIEW.md), promoted to canonical in Phase 2 ──
  "communal-house": {
    label: "Communal House",
    group: "heritage",
    status: "canonical",
    theme: "purple",
    description: "Đình làng - village communal house",
  },
  valley: { label: "Valley", group: "terrain", status: "canonical", theme: "green" },
  "rice-fields": {
    label: "Rice Fields",
    group: "terrain",
    status: "canonical",
    theme: "green",
    description: "Farmed rice landscape - flat paddies or terraces",
    broader: ["farmland"],
  },
  "national-park": {
    label: "National Park",
    group: "terrain",
    status: "canonical",
    theme: "green",
    description: "Only when the location is the park itself, not a site inside it",
  },
  bridge: { label: "Bridge", group: "urban", status: "canonical", theme: "amber" },
  building: { label: "Building", group: "urban", status: "canonical", theme: "purple" },
  village: { label: "Village", group: "settlement", status: "canonical", theme: "purple" },
  fortress: { label: "Fortress", group: "heritage", status: "canonical", theme: "amber" },
  prison: { label: "Prison", group: "heritage", status: "canonical", theme: "purple" },
  station: { label: "Station", group: "urban", status: "canonical", theme: "purple", description: "Railway station" },
  church: {
    label: "Church",
    group: "religious",
    status: "canonical",
    theme: "purple",
    description: "Church or cathedral",
  },
  "old-quarter": {
    label: "Old Quarter",
    group: "settlement",
    status: "canonical",
    theme: "purple",
    description: "Historic town quarter (phố cổ)",
  },
  palace: {
    label: "Palace",
    group: "heritage",
    status: "canonical",
    theme: "purple",
    description: "Dinh / palace or grand residence",
  },
  pass: { label: "Mountain Pass", group: "terrain", status: "canonical", theme: "green" },
  lighthouse: { label: "Lighthouse", group: "heritage", status: "canonical", theme: "purple" },
  cape: { label: "Cape", group: "water", status: "canonical", theme: "blue", description: "Mũi - headland / cape" },

  // ── Phase 2 - owner-approved canonical types (CONSOLIDATION-PROPOSAL.md §4) ──
  street: {
    label: "Street",
    group: "urban",
    status: "canonical",
    theme: "amber",
    description: "The place is a street (walking, nightlife, mural or train street)",
  },
  "historic-site": {
    label: "Historic Site",
    group: "heritage",
    status: "canonical",
    theme: "purple",
    description: "Historic site that is neither a building nor a landscape: tunnels, wrecks, revolutionary bases, war cemeteries",
  },
  monument: {
    label: "Monument",
    group: "heritage",
    status: "canonical",
    theme: "purple",
    description: "Built marker whose draw is the marker itself: flag towers, km-zero markers",
  },
  "theme-park": {
    label: "Theme Park",
    group: "leisure",
    status: "canonical",
    theme: "amber",
    description: "Amusement / theme park or resort-park complex",
  },
  stream: {
    label: "Stream",
    group: "water",
    status: "canonical",
    theme: "blue",
    description: "Suối - stream or spring-fed creek",
    broader: ["river"],
  },
  "rock-formation": {
    label: "Rock Formation",
    group: "terrain",
    status: "canonical",
    theme: "green",
    description: "Natural rock arch, reef or formation that is the draw itself",
  },
  farmland: {
    label: "Farmland",
    group: "terrain",
    status: "canonical",
    theme: "green",
    description: "Agricultural landscape: tea hills, garlic fields, plantations (rice fields are a narrower type)",
  },
  "cable-car": {
    label: "Cable Car",
    group: "leisure",
    status: "canonical",
    filterable: false,
    theme: "amber",
    description: "The location is the cable car itself. Different concept from the 'cable-car' experience",
  },
  "nature-reserve": {
    label: "Nature Reserve",
    group: "terrain",
    status: "canonical",
    theme: "green",
    description: "Khu bảo tồn thiên nhiên - only when the location is the reserve itself",
  },
  grassland: { label: "Grassland", group: "terrain", status: "canonical", theme: "green" },
  "sand-dunes": {
    label: "Sand Dunes",
    group: "terrain",
    status: "canonical",
    theme: "green",
    description: "Sand dune landscape (Đồi cát). Restored in Phase 2 after the edge-case review (red and white dunes, Mũi Né)",
  },
} as const satisfies Record<string, LocationTypeMeta>

export type LocationType = keyof typeof LOCATION_TYPES

export function isLocationType(value: string): value is LocationType {
  return Object.prototype.hasOwnProperty.call(LOCATION_TYPES, value)
}

// Display label for a type value: the registry label for a registered type
// ("pass" -> "Mountain Pass"); otherwise the raw value made readable
// ("some-value" -> "Some value"), as the UI formatted it before.
export function typeDisplayLabel(type: string): string {
  if (isLocationType(type)) return LOCATION_TYPES[type].label
  const text = type.replace(/-/g, " ")
  return text.charAt(0).toUpperCase() + text.slice(1)
}

// Theme colour per type, derived from the registry.
export const LOCATION_TYPE_THEME = Object.fromEntries(
  Object.entries(LOCATION_TYPES).map(([key, meta]) => [key, meta.theme])
) as Record<LocationType, LocationTheme>

// Expand a type with its broader types (stream -> [stream, river]).
export function expandLocationType(value: LocationType): LocationType[] {
  const meta: LocationTypeMeta = LOCATION_TYPES[value]
  return [value, ...((meta.broader ?? []) as LocationType[])]
}
