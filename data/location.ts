import type { LocationType } from "./taxonomy/types"
import type { LocationCategory } from "./taxonomy/categories"

// Taxonomy vocabularies (values + metadata) live in data/taxonomy/.
// Re-exported here so existing imports keep working unchanged.
export type { LocationType, LocationCategory }

export type LocationTheme = "blue" | "green" | "amber" | "purple" | "gray"

export const locationTheme: Record<LocationType, LocationTheme> = {
        // water
        beach: "blue",
        island: "blue",
        bay: "blue",
        river: "blue",
        lake: "blue",
      
        // nature
        mountain: "green",
        forest: "green",
        nature: "green",
        waterfall: "green",
        cave: "green",
      
        // urban
        city: "amber",
        town: "amber",
        market: "amber",
        attraction: "amber",
      
        // culture / history
        cultural: "purple",
        heritage: "purple",
        temple: "purple",
        pagoda: "purple",
        tomb: "purple",
        citadel: "purple",
        history: "amber",
        landmark: "purple",
        museum: "amber",

        // proposed during the taxonomy content review
        "communal-house": "purple",
        valley: "green",
        "rice-fields": "green",
        "national-park": "green",
        bridge: "amber",
        building: "purple",
      }

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
  categories?: LocationCategory[] // broad travel themes (currently editorial badges - see data/taxonomy/AUDIT.md)
  experiences: string[] // what can a traveler do here?
  tags: string[] // specific interest / influence / period (currently emoji display labels)
  entranceFee?: string
  openingHours?: string
  bestTime: string
  bestMonths?: number[]
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
