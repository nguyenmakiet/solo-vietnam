import { LOCATION_TYPE_THEME, type LocationTheme, type LocationType } from "./taxonomy/types"
import type { LocationCategory } from "./taxonomy/categories"

// Taxonomy vocabularies (values + metadata) live in data/taxonomy/.
// Re-exported here so existing imports keep working unchanged.
export type { LocationType, LocationCategory, LocationTheme }

// Theme colour per type. Source of truth: the `theme` of each entry in
// data/taxonomy/types.ts (colours unchanged from the former hand-written map).
export const locationTheme: Record<LocationType, LocationTheme> = LOCATION_TYPE_THEME

export type ContentBlock =
  | { type: "heading"; text: string; icon?: string }
  | { type: "paragraph"; text: string }
  | { type: "bullets"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "callout"; variant: "info" | "warning" | "tip"; text: string; title?: string }
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
  status?: "active" | "closed" | "seasonal" | "unverified" | "temporarily-closed" | "seasonally-closed"
  // "temporarily-closed": one-off, unplanned closure (incident, safety risk) with no fixed reopening pattern.
  // "seasonally-closed": recurring, predictable closure on a yearly schedule (e.g. annual maintenance closure).
  statusNote?: string // short reason/date shown in UI alongside a non-"active" status, e.g. "Suspended since Sept 2026 - rockfall risk, reserve management request"
  name: string
  updatedAt?: string // ISO date "YYYY-MM-DD" - update whenever content in this file changes
  provinces: string[]
  destination?: string
  lat: number | string
  lng: number | string
  address: string
  // Taxonomy fields - vocabularies and semantics in data/taxonomy/.
  // experiences/tags stay string[] during the transition (legacy values allowed).
  type: LocationType | LocationType[] // what is this place?
  categories?: LocationCategory[] // travel themes + editorial badges (data/taxonomy/categories.ts); themes are the /locations category filter
  experiences: string[] // what can a traveler do here?
  tags: string[] // specific interest / influence / period (currently emoji display labels)
  entranceFee?: string
  openingHours?: string
  // Every month the location is worth visiting / suitable to experience - a positive
  // recommendation, not only the peak season. Months to avoid are left out, and so are
  // seasons that are worth seeing but dangerous (put those in the season note instead).
  // User-facing and used by filters + destination derivation. Audit: npm run audit:best-time
  bestMonths?: number[]
  bestSeasonNote?: string // seasonal context the month strip cannot show; may name months, must agree with bestMonths
  bestTimeOfDay?: string // recommended time of day, with its nuance
  // Total time a traveler should allocate for the visit / experience, in minutes only.
  // Multi-day experiences are normalised to total minutes (1 day = 1440, "2 days 1 night" = 2880).
  // Left out when the content gives no reliable duration - see reports/time-needed-migration.md
  timeNeeded?: { minMinutes: number; maxMinutes: number }
  mapUrl: string
  streetView?: { lat?: number | string; lng?: number | string; embedUrl?: string }
  heroImage?: string
  gallery: string[]
  tips: string[]
  seoDescription: string
  content: {
    intro?: string
    howToGetThere?: string
    whatToExpect?: string
    travelTips?: string
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
  visitorTips: string[]
  faq: {
    question: string
    answer: string
  }[]
  sentiment: {
    positive: string
    negative: string | null
  }
}
