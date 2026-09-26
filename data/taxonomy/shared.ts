// ─── Shared taxonomy metadata ────────────────────────────────
// Metadata lives in the taxonomy layer only - never as fields on Location.
//
// status (Phase 2 status model, owner-approved - see CONSOLIDATION-PROPOSAL.md):
//   "canonical"      - agreed value, safe to use in new Location files.
//                      Canonical does NOT imply a public page (see experiences `page`).
//   "proposed"       - grounded in the reviewed data, pending an owner decision
//   "deprecated"     - still valid in data, not to be added to new files;
//                      `replacedBy` names the target when one exists
//   "legacy-display" - tags only: a free-form display label that is not in the
//                      registry (presentation, never used for discovery).
//                      Never set in a registry entry - see tagStatus().

export type TaxonomyStatus = "canonical" | "proposed" | "deprecated" | "legacy-display"

export type RegistryStatus = Exclude<TaxonomyStatus, "legacy-display">

export type TaxonomyMeta<Group extends string> = {
  label: string
  group: Group
  status: RegistryStatus
  filterable?: boolean
  description?: string
  // SUB relations: this value is a narrower kind of the listed values
  // (e.g. stream -> river). Used for expansion, never for rewriting data.
  broader?: readonly string[]
  // deprecated values only: the value that replaces it (EQ or SUB).
  replacedBy?: string
  // A decision explicitly deferred by the owner (e.g. deprecation of broad types).
  pendingDecision?: string
}

// Formatting-only normalization: "Walking Tours" -> "walking-tours".
// Handles case, whitespace, underscores and Vietnamese diacritics.
// It never changes meaning - semantic mapping belongs in the alias tables.
export function toTaxonomyKey(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/đ/gi, "d")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}
