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
// UI and MUST stay untouched (status "legacy-display", see tagStatus()).
// The registered tags below are canonical (Phase 2), each grounded in the
// reviewed data - see CONSOLIDATION-PROPOSAL.md and PHASE2-LOG.md.
// Semantics, boundaries and the T1-T6 / E1-E6 rules: TAGS-DEFINITIONS.md
// (owner-approved, Tags Phase 1). A tag names the history, faith, people or
// influence that is a reason to visit - focus, not background - and is never
// inferred from another tag.

export type LocationTagGroup =
  | "historical-period"      // when: medieval-vietnam, nguyen-dynasty, french-colonial-era, vietnam-war, champa-heritage
  | "topic"                  // cross-period theme: east-sea-sovereignty
  | "religion"               // religious tradition
  | "ethnic-culture"         // identity of the people/culture that is the draw
  | "cultural-influence"     // foreign cultural influence
  | "architectural-influence" // built-form influence

export const LOCATION_TAGS = {
  "vietnam-war": {
    label: "Vietnam War",
    group: "historical-period",
    status: "canonical",
    filterable: true,
    description:
      "1955-1975 (kháng chiến chống Mỹ) and its direct legacy (war damage, Agent Orange, POWs, wartime infrastructure) where that war is the focus. Not the French war (1946-1954), earlier revolutionary history (independence-movement) or the 1979 border war",
  },
  "french-influence": {
    label: "French Influence",
    group: "cultural-influence",
    status: "proposed",
    filterable: true,
    description:
      "Non-architectural French *cultural* legacy that is part of the draw (cuisine and café culture, hill-station lifestyle, language). Distinct from french-colonial-era (period) and french-architecture (built form) - never inferred from either (R17, R26). Proposed (Tags Phase 1): no Location evidence yet; not assigned",
  },
  "khmer-culture": {
    label: "Khmer Culture",
    group: "ethnic-culture",
    status: "canonical",
    filterable: true,
  },
  "cham-culture": {
    label: "Cham Culture",
    group: "ethnic-culture",
    status: "canonical",
    filterable: true,
    description:
      "Living Cham communities (Bani, Cham Muslim, Balamon): villages, mosques, weaving, living festivals. Not Champa monuments alone - that is champa-heritage (Phase 2 split). Co-occurs with champa-heritage only where a Champa monument is also an active venue of a living Cham community",
  },
  "champa-heritage": {
    label: "Champa Heritage",
    group: "historical-period",
    status: "canonical",
    filterable: true,
    description:
      "Heritage of the historical Champa civilization and kingdom (c. 2nd-17th c.): Cham temple towers, sanctuaries and archaeological remains, ruined or in use. NOT living Cham culture - that is cham-culture. Does not imply hinduism. Not a site that merely stands on a former Cham sacred place",
  },
  buddhism: {
    label: "Buddhism",
    group: "religion",
    status: "canonical",
    filterable: true,
    description:
      "The Buddhist tradition of a site whose Buddhist identity is part of the draw (pagodas, monasteries, cave pagodas, pilgrimage mountains). Names the tradition - not 'is a religious site' (category religion / religious-site-visit)",
  },

  // ── Introduced by the content review (CONTENT-REVIEW.md), promoted to canonical in Phase 2 ──
  "medieval-vietnam": {
    label: "Medieval Vietnam",
    group: "historical-period",
    status: "canonical",
    filterable: true,
    description:
      "Independent dynasties of the 10th-15th c. (Ngô, Đinh, Tiền Lê, Lý, Trần, Hồ, early Lê to 1527) where that era is the focus. Not 1527-1802 (early-modern-vietnam) and not the Nguyễn era. Not a later rebuild whose visible draw is the rebuild, or a legend with nothing of the era to see",
  },
  "east-sea-sovereignty": {
    label: "East Sea Sovereignty",
    group: "topic",
    status: "canonical",
    filterable: true,
    description: "Hoàng Sa / Trường Sa maritime history, e.g. the Hải Đội Hoàng Sa",
  },
  "folk-religion": {
    label: "Vietnamese Folk Religion",
    group: "religion",
    status: "canonical",
    filterable: true,
    description:
      "Indigenous Vietnamese worship outside the organised religions where it is part of the draw: Mother Goddess (Đạo Mẫu), Tứ Pháp, Hùng Kings and deified heroes, village guardian spirits, whale worship, Bà Chúa Xứ",
  },
  "ethnic-minority-culture": {
    label: "Ethnic Minority Culture",
    group: "ethnic-culture",
    status: "canonical",
    filterable: true,
    description:
      "Living ethnic-minority culture where several groups together are the draw (E2), or where a single group without its own registered tag is the draw (E3 fallback, e.g. Hà Nhì, Dao, K'Ho). Use the per-group tag when one tagged group is the reason to visit (E1). Not for villages passed on the approach (E4)",
  },
  "khmer-architecture": {
    label: "Khmer Architecture",
    group: "architectural-influence",
    status: "canonical",
    filterable: true,
  },
  "cao-dai": {
    label: "Cao Đài",
    group: "religion",
    status: "canonical",
    filterable: true,
    description: "Caodaism - Vietnamese indigenous religion founded 1926. Cao Đài temples and the Holy See; not places that only mention it",
  },
  // Specific ethnic-culture tags: only where that group's culture is a
  // traveler-facing reason to visit, never for a mere mention (CONTENT-REVIEW R3).
  // Ethnic rules E1-E6 (TAGS-DEFINITIONS.md): one tagged group is the draw -> its
  // tag only; several groups together -> ethnic-minority-culture (+ a per-group
  // tag only for a group with its own named draw); Kinh culture is not tagged.
  "hmong-culture": {
    label: "H'Mông Culture",
    group: "ethnic-culture",
    status: "canonical",
    filterable: true,
  },
  "tay-culture": {
    label: "Tày Culture",
    group: "ethnic-culture",
    status: "canonical",
    filterable: true,
  },
  "thai-culture": {
    label: "Thái (Tai) Culture",
    group: "ethnic-culture",
    status: "canonical",
    filterable: true,
    description: "Vietnam's Thái ethnic group - not Thailand. Slug naming under review",
  },
  catholicism: {
    label: "Catholicism",
    group: "religion",
    status: "canonical",
    filterable: true,
  },
  taoism: {
    label: "Taoism",
    group: "religion",
    status: "canonical",
    filterable: true,
  },
  "nguyen-dynasty": {
    label: "Nguyễn Dynasty",
    group: "historical-period",
    status: "canonical",
    filterable: true,
    description:
      "1802-1945 - only where the dynasty is the focus (imperial Huế, royal tombs, imperial commissions), not background. Not the Nguyễn lords (1558-1777) - that is early-modern-vietnam",
  },
  "lolo-culture": {
    label: "Lô Lô Culture",
    group: "ethnic-culture",
    status: "canonical",
    filterable: true,
  },
  hinduism: {
    label: "Hinduism",
    group: "religion",
    status: "canonical",
    filterable: true,
    description:
      "Hindu religious identity where it is part of the draw - in Vietnam, Cham Hindu sanctuaries (Shiva, Po Nagar). Not implied by champa-heritage",
  },
  "giay-culture": {
    label: "Giáy Culture",
    group: "ethnic-culture",
    status: "canonical",
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
    description:
      "c. 1858-1954, only where colonial-period history is the focus (colonial institutions, defences, the colonial experience) - not merely built in the period or a French-era object in a place visited for something else. Does not imply french-influence or french-architecture. Not the independence movement against it (independence-movement)",
  },
  "french-architecture": {
    label: "French Architecture",
    group: "architectural-influence",
    status: "canonical",
    filterable: true,
    description:
      "French / European colonial design in historic built form (Gothic churches, colonial civic buildings, villas, Art Deco, Franco-Vietnamese hybrids) where the design is part of the draw. Not modern replicas or theme-park recreations. Not equivalent to french-influence (culture) or french-colonial-era (period)",
  },

  // ── Tags Phase 1 - owner-approved as proposed (TAGS-DEFINITIONS.md §4). Not assigned to any Location yet ──
  "early-modern-vietnam": {
    label: "Early Modern Vietnam (16th-18th c.)",
    group: "historical-period",
    status: "proposed",
    description:
      "1527-1802 only: Mạc dynasty, Revival Lê with the Trịnh lords, Nguyễn lords, Tây Sơn - where that era is the focus. Fills the gap between medieval-vietnam (to 1527) and nguyen-dynasty (from 1802); medieval-vietnam is not extended",
  },
  "independence-movement": {
    label: "Independence Movement (1930-1954)",
    group: "historical-period",
    status: "proposed",
    description:
      "Vietnamese independence / revolutionary movement centred on 1930-1954 (Hồ Chí Minh's life and leadership, the Việt Minh, the August Revolution, the French war) where it is the focus. Not a generic tag for all anti-colonial or revolutionary history outside this scope; not the Vietnam War (1955-1975)",
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
