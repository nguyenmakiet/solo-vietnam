import { LOCATION_TYPE_THEME, type LocationTheme, type LocationType } from "./taxonomy/types"
import type { LocationCategory } from "./taxonomy/categories"
import type { Coordinate } from "../lib/coordinates"

// Taxonomy vocabularies (values + metadata) live in data/taxonomy/.
// Re-exported here so existing imports keep working unchanged.
export type { LocationType, LocationCategory, LocationTheme }

// Theme colour per type. Source of truth: the `theme` of each entry in
// data/taxonomy/types.ts (colours unchanged from the former hand-written map).
export const locationTheme: Record<LocationType, LocationTheme> = LOCATION_TYPE_THEME

// A string field rendered through RichText / InlineRichText on the location page.
// Only fields typed RichTextString may contain inline markdown (syntax: lib/rich-text.ts):
// **bold**, [label](/path) internal links and [label](https://...) external links.
// Every other string field is plain text - `npm run audit:links` rejects links there.
export type RichTextString = string

export type ContentBlock =
  | { type: "heading"; text: string; icon?: string }
  | { type: "paragraph"; text: RichTextString }
  | { type: "bullets"; items: RichTextString[] }
  | { type: "table"; headers: string[]; rows: RichTextString[][] }
  | { type: "callout"; variant: "info" | "warning" | "tip"; text: RichTextString; title?: string }
  | { type: "quickfacts"; facts: Array<{ label: string; value: string; icon?: string }> }
  | { type: "divider" }

export type RichSection = {
  id: string
  label: string
  title: string
  blocks: ContentBlock[]
}

export type Location = {
  slug: string
  status?: "active" | "closed" | "seasonal" | "unverified" | "temporarily-closed" | "seasonally-closed" | "partially-closed"
  // "temporarily-closed": one-off, unplanned closure (incident, safety risk) with no fixed reopening pattern.
  // "seasonally-closed": recurring, predictable closure on a yearly schedule (e.g. annual maintenance closure).
  // "partially-closed": still open and worth visiting, but some areas are closed or restricted (e.g. restoration works).
  //   Counts as active everywhere (listings, Best Months strip, month aggregates); only adds a notice + badge.
  statusNote?: string // short reason/date shown in UI alongside a non-"active" status, e.g. "Suspended since Sept 2026 - rockfall risk, reserve management request"
  name: string
  updatedAt?: string // ISO date "YYYY-MM-DD" - update whenever content in this file changes
  provinces: string[]
  destination?: string
  lat: Coordinate // decimal degrees; "" only for an unconfirmed value flagged `// TODO: verify`
  lng: Coordinate
  address: string
  // Taxonomy fields - vocabularies and semantics in data/taxonomy/.
  // experiences/tags stay string[] during the transition (legacy values allowed).
  type: LocationType | LocationType[] // what is this place?
  categories?: LocationCategory[] // travel themes + editorial badges (data/taxonomy/categories.ts); themes are the /locations category filter
  experiences: string[] // what can a traveler do here?
  tags: string[] // specific interest / influence / period (currently emoji display labels)
  entranceFee?: RichTextString
  openingHours?: RichTextString
  // Every month the location is worth visiting / suitable to experience - a positive
  // recommendation, not only the peak season. Months to avoid are left out, and so are
  // seasons that are worth seeing but dangerous (put those in the season note instead).
  // User-facing and used by filters + destination derivation. Audit: npm run audit:best-time
  bestMonths?: number[]
  bestSeasonNote?: RichTextString // seasonal context the month strip cannot show; may name months, must agree with bestMonths
  bestTimeOfDay?: RichTextString // recommended time of day, with its nuance
  // Total time a traveler should allocate for the visit / experience, in minutes only.
  // "A full day" (no clock window given) = 480, a typical morning-to-afternoon allocation.
  // Multi-day experiences are normalised to total minutes by day count ("2 days 1 night" = 2880).
  // Left out when the content gives no reliable duration - see reports/time-needed-migration.md
  timeNeeded?: { minMinutes: number; maxMinutes: number }
  mapUrl: string
  streetView?: { lat?: Coordinate; lng?: Coordinate; embedUrl?: string }
  heroImage?: string
  gallery: string[]
  tips: RichTextString[]
  seoDescription: string
  content: {
    intro?: RichTextString
    howToGetThere?: RichTextString
    whatToExpect?: RichTextString
    travelTips?: RichTextString
    richSections?: RichSection[]
  }
  insights?: LocationInsights  // optional vì không phải location nào cũng có
}
export type LocationInsights = {
  highlights: string[]
  thingsToKnow: {
    crowds: string | null
    difficulty: string | null
    safety: string | null
    accessibility: string | null
    seasonal: string | null
  }
  visitorTips: RichTextString[]
  faq: {
    question: string
    answer: RichTextString
  }[]
  sentiment: {
    positive: string
    negative: string | null
  }
}
