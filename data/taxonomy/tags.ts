import { stripLeadingEmoji } from "../../lib/text"
import { toTaxonomyKey, type TaxonomyMeta, type TaxonomyStatus } from "./shared"

// ─── Location "tags" ─────────────────────────────────────────
// Answers: "What specific interest, historical connection, cultural
// influence or architectural characteristic does this place represent?"
// e.g. religion (category) vs buddhism (tag), culture vs khmer-culture.
// Recognition / official designations are NOT tags: see recognitions.ts.
//
// Production Location.tags are currently free-form display labels with a
// leading emoji (e.g. "🏛️ French Colonial"). They are rendered as-is in the
// UI and MUST stay untouched. The canonical tags below are a small proposed
// seed, each grounded in labels that already exist in the data. The full
// vocabulary is pending review - see AUDIT.md.

export type LocationTagGroup =
  | "historical-period"      // when: medieval-vietnam, nguyen-dynasty, french-colonial-era, vietnam-war
  | "topic"                  // cross-period theme: east-sea-sovereignty
  | "religion"               // religious tradition
  | "ethnic-culture"         // identity of the people/culture that is the draw
  | "cultural-influence"     // foreign cultural influence
  | "architectural-influence" // built-form influence

export const LOCATION_TAGS = {
  "vietnam-war": {
    label: "Vietnam War",
    group: "historical-period",
    status: "proposed",
    filterable: true,
  },
  "french-influence": {
    label: "French Influence",
    group: "cultural-influence",
    status: "canonical",
    filterable: true,
    description: "French *cultural* influence. Distinct from french-colonial-era (period) and french-architecture (built form) - never inferred from either (R17, R26)",
  },
  "khmer-culture": {
    label: "Khmer Culture",
    group: "ethnic-culture",
    status: "proposed",
    filterable: true,
  },
  "cham-culture": {
    label: "Cham Culture",
    group: "ethnic-culture",
    status: "proposed",
    filterable: true,
    description: "Living Cham culture and communities. Historic Champa heritage is champa-heritage (Phase 2 split)",
  },
  "champa-heritage": {
    label: "Champa Heritage",
    group: "ethnic-culture",
    status: "proposed",
    filterable: true,
    description: "Heritage of the historic Champa kingdom (temple towers, sanctuaries). Living Cham culture is cham-culture",
  },
  buddhism: {
    label: "Buddhism",
    group: "religion",
    status: "proposed",
    filterable: true,
  },

  // ── Proposed during the content review (CONTENT-REVIEW.md) ──
  "medieval-vietnam": {
    label: "Medieval Vietnam",
    group: "historical-period",
    status: "proposed",
    filterable: true,
    description: "Working scope: independent dynasties 10th-15th c. (Ngô, Đinh, Tiền Lê, Lý, Trần, Hồ). Not the Nguyễn era",
  },
  "east-sea-sovereignty": {
    label: "East Sea Sovereignty",
    group: "topic",
    status: "proposed",
    filterable: true,
    description: "Hoàng Sa / Trường Sa maritime history, e.g. the Hải Đội Hoàng Sa",
  },
  "folk-religion": {
    label: "Vietnamese Folk Religion",
    group: "religion",
    status: "proposed",
    filterable: true,
    description: "Mother Goddess, Tứ Pháp and local deity worship",
  },
  "ethnic-minority-culture": {
    label: "Ethnic Minority Culture",
    group: "ethnic-culture",
    status: "proposed",
    filterable: true,
    description: "Living highland ethnic communities (Tày, Nùng, Hà Nhì, H'Mông...) - PROVISIONAL, granularity undecided",
  },
  "khmer-architecture": {
    label: "Khmer Architecture",
    group: "architectural-influence",
    status: "proposed",
    filterable: true,
  },
  "cao-dai": {
    label: "Cao Đài",
    group: "religion",
    status: "proposed",
    filterable: true,
    description: "Caodaism - Vietnamese indigenous religion founded 1926",
  },
  // Specific ethnic-culture tags: only where that group's culture is a
  // traveler-facing reason to visit, never for a mere mention (CONTENT-REVIEW R3).
  "hmong-culture": {
    label: "H'Mông Culture",
    group: "ethnic-culture",
    status: "proposed",
    filterable: true,
  },
  "tay-culture": {
    label: "Tày Culture",
    group: "ethnic-culture",
    status: "proposed",
    filterable: true,
  },
  "thai-culture": {
    label: "Thái (Tai) Culture",
    group: "ethnic-culture",
    status: "proposed",
    filterable: true,
    description: "Vietnam's Thái ethnic group - not Thailand. Slug naming under review",
  },
  catholicism: {
    label: "Catholicism",
    group: "religion",
    status: "proposed",
    filterable: true,
  },
  taoism: {
    label: "Taoism",
    group: "religion",
    status: "proposed",
    filterable: true,
  },
  "nguyen-dynasty": {
    label: "Nguyễn Dynasty",
    group: "historical-period",
    status: "proposed",
    filterable: true,
    description: "1802-1945 - only where the dynasty is the focus (imperial Huế, royal tombs), not background",
  },
  "lolo-culture": {
    label: "Lô Lô Culture",
    group: "ethnic-culture",
    status: "proposed",
    filterable: true,
  },
  hinduism: {
    label: "Hinduism",
    group: "religion",
    status: "proposed",
    filterable: true,
    description: "Cham Hindu sanctuaries and temples (Shiva, Po Nagar)",
  },
  "giay-culture": {
    label: "Giáy Culture",
    group: "ethnic-culture",
    status: "proposed",
    filterable: true,
  },

  // ── Phase 2 - owner-approved ──
  confucianism: {
    label: "Confucianism",
    group: "religion",
    status: "canonical",
    filterable: true,
    description: "Confucian tradition where it is central to the place (e.g. a Temple of Literature)",
  },

  // ── Phase 2 - owner-approved (three distinct French concepts, CONSOLIDATION-PROPOSAL.md §7) ──
  "french-colonial-era": {
    label: "French Colonial Era",
    group: "historical-period",
    status: "canonical",
    filterable: true,
    description: "Period context, c. 1858-1954. Being built in this period does not imply french-influence or french-architecture",
  },
  "french-architecture": {
    label: "French Architecture",
    group: "architectural-influence",
    status: "canonical",
    filterable: true,
    description: "French architectural influence on the built form. Not equivalent to french-influence (culture) or french-colonial-era (period)",
  },
} as const satisfies Record<string, TaxonomyMeta<LocationTagGroup>>

export type LocationTag = keyof typeof LOCATION_TAGS

export function isLocationTag(value: string): value is LocationTag {
  return Object.prototype.hasOwnProperty.call(LOCATION_TAGS, value)
}

// ─── Legacy aliases ──────────────────────────────────────────
// legacy display label (as toTaxonomyKey output, emoji stripped) -> tag.
// Two kinds (Phase 2):
//   "equivalent" - true 1:1 meaning. Safe for D9 in-place replacement.
//   "implies"    - the label implies the tag, but says more (a site kind,
//                  a place...). Safe to derive the tag, never to replace
//                  the label.
// Ambiguous labels (e.g. "French Heritage": period or architecture?) and
// generic ones ("War History") are deliberately NOT mapped.
export type TagAliasKind = "equivalent" | "implies"

export const LEGACY_TAG_ALIAS_TABLE: Readonly<Record<string, { tag: LocationTag; kind: TagAliasKind }>> = {
  "vietnam-war-history": { tag: "vietnam-war", kind: "equivalent" },
  "vietnam-war-memorial": { tag: "vietnam-war", kind: "implies" },
  "east-sea-sovereignty-history": { tag: "east-sea-sovereignty", kind: "equivalent" },
  // R21 fix: the French labels no longer map to french-influence.
  "french-colonial": { tag: "french-colonial-era", kind: "implies" },
  "french-vietnamese-architecture": { tag: "french-architecture", kind: "implies" },
  "cham-heritage": { tag: "champa-heritage", kind: "implies" },
  "buddhist-pilgrimage": { tag: "buddhism", kind: "implies" },
  "buddhist-caves": { tag: "buddhism", kind: "implies" },
}

// Backward-compatible flat view: alias key -> tag (both kinds).
export const LEGACY_TAG_ALIASES: Readonly<Record<string, LocationTag>> = Object.fromEntries(
  Object.entries(LEGACY_TAG_ALIAS_TABLE).map(([key, { tag }]) => [key, tag])
)

// Display text for a tag: canonical tags show their label, legacy
// emoji labels keep rendering exactly as before (emoji stripped).
export function tagDisplayLabel(tag: string): string {
  return isLocationTag(tag) ? LOCATION_TAGS[tag].label : stripLeadingEmoji(tag)
}

// Registry status of a tag. Anything not in the registry is a legacy
// display label (presentation only, never used for discovery).
export function tagStatus(tag: string): TaxonomyStatus {
  return isLocationTag(tag) ? LOCATION_TAGS[tag].status : "legacy-display"
}

export function normalizeLegacyTag(label: string): LocationTag | null {
  const key = toTaxonomyKey(label)
  if (isLocationTag(key)) return key
  return LEGACY_TAG_ALIASES[key] ?? null
}
