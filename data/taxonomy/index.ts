// ─── Location taxonomy ───────────────────────────────────────
// Controlled vocabulary for the four Location taxonomy fields:
//   type        - what is this place?
//   categories  - which broad travel themes?
//   experiences - what can a traveler do here?
//   tags        - which specific interest / influence / period?
//
// Compatibility flow (production data is never rewritten here):
//   legacy Location data -> normalizeLocationTaxonomy() -> canonical taxonomy
//
// Nothing in the app consumes this yet - it is the foundation for gradual
// migration, validation and future discovery/filtering. See AUDIT.md.

import type { Location } from "../location"
import { isLocationCategory, type LocationCategory } from "./categories"
import { normalizeExperience, type LocationExperience } from "./experiences"
import { normalizeLegacyTag, type LocationTag } from "./tags"
import { isLocationType, type LocationType } from "./types"

export * from "./shared"
export * from "./types"
export * from "./categories"
export * from "./experiences"
export * from "./tags"

export type NormalizedLocationTaxonomy = {
  types: LocationType[]
  categories: LocationCategory[]
  experiences: LocationExperience[]
  tags: LocationTag[]
  // Raw values with no canonical mapping yet - reported, never dropped from source data.
  unmapped: {
    types: string[]
    categories: string[]
    experiences: string[]
    tags: string[]
  }
}

type TaxonomyFields = Pick<Location, "type" | "categories" | "experiences" | "tags">

function collect<T extends string>(
  values: readonly string[],
  normalize: (value: string) => T | null
): { mapped: T[]; unmapped: string[] } {
  const mapped = new Set<T>()
  const unmapped: string[] = []
  for (const value of values) {
    const canonical = normalize(value)
    if (canonical) mapped.add(canonical)
    else unmapped.push(value)
  }
  return { mapped: [...mapped], unmapped }
}

export function normalizeLocationTaxonomy(location: TaxonomyFields): NormalizedLocationTaxonomy {
  const rawTypes: string[] = Array.isArray(location.type) ? location.type : [location.type]
  const types = collect(rawTypes, (v) => (isLocationType(v) ? v : null))
  const categories = collect(location.categories ?? [], (v) => (isLocationCategory(v) ? v : null))
  const experiences = collect(location.experiences ?? [], normalizeExperience)
  const tags = collect(location.tags ?? [], normalizeLegacyTag)

  return {
    types: types.mapped,
    categories: categories.mapped,
    experiences: experiences.mapped,
    tags: tags.mapped,
    unmapped: {
      types: types.unmapped,
      categories: categories.unmapped,
      experiences: experiences.unmapped,
      tags: tags.unmapped,
    },
  }
}
