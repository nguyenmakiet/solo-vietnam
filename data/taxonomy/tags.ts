import { stripLeadingEmoji } from "../../lib/text"
import { toTaxonomyKey, type TaxonomyMeta } from "./shared"

// ─── Location "tags" ─────────────────────────────────────────
// Answers: "What specific interest, historical connection, cultural
// influence or architectural characteristic does this place represent?"
// e.g. religion (category) vs buddhism (tag), culture vs khmer-culture.
//
// Production Location.tags are currently free-form display labels with a
// leading emoji (e.g. "🏛️ French Colonial"). They are rendered as-is in the
// UI and MUST stay untouched. The canonical tags below are a small proposed
// seed, each grounded in labels that already exist in the data. The full
// vocabulary is pending review - see AUDIT.md.

export type LocationTagGroup =
  | "historical-period"
  | "cultural-influence"
  | "architecture-style"
  | "religion"

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
    status: "proposed",
    filterable: true,
  },
  "khmer-culture": {
    label: "Khmer Culture",
    group: "cultural-influence",
    status: "proposed",
    filterable: true,
  },
  "cham-culture": {
    label: "Cham Culture",
    group: "cultural-influence",
    status: "proposed",
    filterable: true,
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
    group: "historical-period",
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
    group: "cultural-influence",
    status: "proposed",
    filterable: true,
    description: "Living highland ethnic communities (Tày, Nùng, Hà Nhì, H'Mông...) - per-group tags pending review",
  },
} as const satisfies Record<string, TaxonomyMeta<LocationTagGroup>>

export type LocationTag = keyof typeof LOCATION_TAGS

export function isLocationTag(value: string): value is LocationTag {
  return Object.prototype.hasOwnProperty.call(LOCATION_TAGS, value)
}

// ─── Legacy aliases ──────────────────────────────────────────
// legacy display label (as toTaxonomyKey output, emoji stripped) -> canonical tag.
// e.g. "🏛️ French Colonial" -> "french-colonial" -> "french-influence".
// Only labels whose meaning is unambiguous. Generic labels such as
// "War History" or "Colonial Architecture" are deliberately NOT mapped.
export const LEGACY_TAG_ALIASES: Readonly<Record<string, LocationTag>> = {
  "vietnam-war-history": "vietnam-war",
  "vietnam-war-memorial": "vietnam-war",
  "french-colonial": "french-influence",
  "french-heritage": "french-influence",
  "french-vietnamese-architecture": "french-influence",
  "cham-heritage": "cham-culture",
  "buddhist-pilgrimage": "buddhism",
  "buddhist-caves": "buddhism",
}

// Display text for a tag: canonical tags show their label, legacy
// emoji labels keep rendering exactly as before (emoji stripped).
export function tagDisplayLabel(tag: string): string {
  return isLocationTag(tag) ? LOCATION_TAGS[tag].label : stripLeadingEmoji(tag)
}

export function normalizeLegacyTag(label: string): LocationTag | null {
  const key = toTaxonomyKey(label)
  if (isLocationTag(key)) return key
  return LEGACY_TAG_ALIASES[key] ?? null
}
