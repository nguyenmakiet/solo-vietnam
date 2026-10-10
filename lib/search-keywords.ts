// lib/search-keywords.ts
// Search-only keywords for Location items in public/search-index.json.
//
// These are NOT taxonomy values: they are never written into Location data,
// never rendered, and do not change type/categories/experiences/tags. They only
// let a theme query ("ruin of dynasties", "royal ruins", "ancient kingdom") find
// locations whose registered taxonomy already says the same thing.
//
// Derived purely from registered values (data/taxonomy), so they stay in sync
// with the frozen contract:
//   - dynasty: any location tagged with a Vietnamese dynastic period or Champa
//   - royal seat / ruins: a fortified seat or capital of a dynasty (citadel,
//     fortress, historic site, palace + a dynastic period tag) and every
//     Champa heritage site (Cham temple towers and sanctuaries)

import type { LocationTag } from "@/data/taxonomy/tags"
import type { LocationType } from "@/data/taxonomy/types"

const DYNASTIC_PERIOD_TAGS: readonly LocationTag[] = ["medieval-vietnam", "early-modern-vietnam", "nguyen-dynasty"]

const DYNASTIC_SEAT_TYPES: readonly LocationType[] = ["citadel", "fortress", "historic-site", "palace"]

const DYNASTY_KEYWORDS = ["dynasty", "royal", "ancient kingdom"]
const DYNASTIC_SEAT_KEYWORDS = ["ruins", "ancient capital", "royal citadel"]
const CHAMPA_KEYWORDS = ["dynasty", "royal", "ancient kingdom", "Champa kingdom", "ruins", "Cham towers"]

export function locationSearchKeywords(types: readonly string[], tags: readonly string[]): string[] {
  const keywords: string[] = []
  const hasDynasticPeriod = DYNASTIC_PERIOD_TAGS.some((t) => tags.includes(t))

  if (hasDynasticPeriod) {
    keywords.push(...DYNASTY_KEYWORDS)
    if (DYNASTIC_SEAT_TYPES.some((t) => types.includes(t))) keywords.push(...DYNASTIC_SEAT_KEYWORDS)
  }
  if (tags.includes("champa-heritage")) keywords.push(...CHAMPA_KEYWORDS)

  return [...new Set(keywords)]
}

// ─── Query normalisation (used by the search modal) ─────────────────────────

const STOPWORDS = new Set(["a", "an", "and", "the", "of", "in", "on", "at", "to", "for", "with", "from", "by", "or"])

/** "dynasties" → "dynasty", "ruins" → "ruin", "towers" → "tower"; short words and "-ss" are left alone. */
function singular(word: string): string {
  if (word.length > 4 && word.endsWith("ies")) return word.slice(0, -3) + "y"
  if (word.length > 3 && word.endsWith("s") && !word.endsWith("ss")) return word.slice(0, -1)
  return word
}

/** Meaningful search tokens: lowercase, stopwords dropped, singularised, at least 3 characters. */
export function searchTokens(query: string): string[] {
  return query
    .toLowerCase()
    .split(/[^\p{L}\p{N}'-]+/u)
    .filter((w) => w && !STOPWORDS.has(w))
    .map(singular)
    .filter((w) => w.length >= 3)
}
