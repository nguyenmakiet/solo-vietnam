// ─── Shared taxonomy metadata ────────────────────────────────
// Metadata lives in the taxonomy layer only - never as fields on Location.
//
// status:
//   "canonical"    - agreed value, safe to use in new Location files
//   "proposed"     - grounded in existing data, pending vocabulary review
//   "under-review" - value exists in production data but its meaning
//                    conflicts with the target semantics (see AUDIT.md)

export type TaxonomyStatus = "canonical" | "proposed" | "under-review"

export type TaxonomyMeta<Group extends string> = {
  label: string
  group: Group
  status: TaxonomyStatus
  filterable?: boolean
  description?: string
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
