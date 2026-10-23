// ============================================================
// Destination Type — soloinvietnam.com
// Schema v3 — final
// ============================================================
//
// ARCHITECTURE:
// Destination = editorial layer + aggregation layer từ locations
//
// Source of truth: location files (/data/locations/[slug].ts)
//
// ✅ Hardcode trong destination file:
//    - gettingThere, itineraries, cost, travelStyle, bestTimeSummary
//    - bestMonths (editorial, bắt buộc - month strip trên destination page)
//    - fallback fields (dùng tạm khi location data chưa đủ)
//
// ❌ KHÔNG hardcode (derive runtime qua deriveFromLocations()):
//    - whatToDo    → group(location.experiences[]) → UI categories
//    - highlights  → top location.insights.highlights[] với slug + text
//
// Fallback fields tự động bị bỏ qua khi derived result đã có data.
// Xóa dần fallback khi locations đã fill đầy đủ.
// ============================================================

import type { FaqItem } from "@/components/FaqAccordion"
export type { FaqItem }

export type Region = "north" | "central" | "south"

export type TravelStyle =
  | "solo-friendly"
  | "budget"
  | "luxury"
  | "adventure"
  | "hidden-gem"
  | "family"
  | "easy"
  | "challenging"

// ─── Getting There ───────────────────────────────────────────
// Flexible — không fix cứng 3 cột HN/HCM/ĐN
export type TransportOption = {
  from: string      // "Hà Nội" | "HCM" | "Đà Nẵng" | "Hải Phòng"...
  vehicle: string   // "bus" | "train" | "fly" | "ferry" | "motorbike"
  duration: string  // "6–7 tiếng"
  cost: string      // "200.000–350.000 VND"
  notes?: string
}

// ─── Itinerary ───────────────────────────────────────────────
export type ItineraryDay = {
  day: number
  title: string     // "Hà Giang → Quản Bạ → Yên Minh"
  distance?: string // "~100km"
  stops: string[]   // location slugs theo thứ tự
  notes?: string
  // Map only: points in travel order, used instead of stops on the route map.
  // A string is a location slug (numbered pin + link), an object a waypoint
  // with no page (grey pin). stops keeps its role as the page links.
  // Checked by `npm run audit:best-time`
  mapPoints?: (string | MapWaypoint)[]
  // "straight" skips road routing and draws a dashed straight line (boat days)
  mapRouting?: "road" | "straight"  // default "road"
}

export type MapWaypoint = { name: string; lat: number; lng: number }

export type Itinerary = {
  duration: string  // "3N2Đ" | "4N3Đ"
  label: string     // "Lịch trình cơ bản" | "Lịch trình đầy đủ"
  days: ItineraryDay[]
}

// ─── Day Trip ────────────────────────────────────────────────
// A side trip from this destination that has no destination of its own
// (e.g. Ba Na Hills from Da Nang). Rendered as its own section
export type DayTrip = {
  title: string                 // section heading: "Day trip: Ba Na Hills"
  summary: string
  gettingThere?: TransportOption[]
  plan?: { stops: string[]; notes?: string } // location slugs in visiting order
  cost?: string
  tips?: string[]
}

// ─── Emergency contacts ──────────────────────────────────────
// Destination-specific help numbers, shown under "Emergency & help" below the
// national 112-115 row (data/emergency.ts). Checked by `npm run audit:best-time`
export type EmergencyContactType = "tourist-hotline" | "scam-report" | "medical" | "police" | "other"

export interface EmergencyContact {
  type: EmergencyContactType
  name: string
  phone: string
  altPhones?: string[]
  hours?: string
  languages?: string[]
  address?: string
  notes?: string
  sourceUrl?: string       // editor reference only, not rendered
  verifiedAt: string        // YYYY-MM-DD, date the number was last confirmed
}

// ─── Cost ────────────────────────────────────────────────────
export type CostRange = {
  budget: string      // "400.000–700.000 VND/ngày"
  midRange: string    // "700.000–1.200.000 VND/ngày"
  comfortable: string // "1.200.000+ VND/ngày"
  notes?: string
}

// ─── What To Do ──────────────────────────────────────────────
// Record thay vì fixed shape → flexible khi thêm category mới
// key = category slug, value = list of activity strings
// Ví dụ: { nature: [...], culture: [...], food: [...] }
export type WhatToDo = Record<string, string[]>

// ─── Experience Group Config ─────────────────────────────────
// Bridge giữa data layer (location.experiences[]) và UI layer
// Thêm category mới ở đây — không cần đụng vào component
export type ExperienceGroupConfig = {
  label: string         // Hiển thị trên UI: "Nature & Outdoors"
  order: number         // Thứ tự hiển thị
  experiences: string[] // experience slugs thuộc group này
}

export const EXPERIENCE_GROUP_CONFIG: Record<string, ExperienceGroupConfig> = {
  // Canonical experiences only (data/taxonomy/experiences.ts). Every canonical
  // experience must appear in exactly one group, otherwise destination
  // "What to do" silently drops it. Proposed (paragliding, rock-climbing) and
  // deprecated (temple-visit) values are not listed until promoted.
  // `npm run audit:taxonomy` checks this.
  nature: {
    label: "Nature & Outdoors",
    order: 1,
    experiences: ["trekking", "hiking", "swimming", "kayaking", "cycling", "snorkeling", "diving", "camping", "caving", "wildlife", "fishing"],
  },
  culture: {
    label: "Culture & History",
    order: 2,
    experiences: ["culture", "homestay", "photography", "history", "walking-tour", "museum-visit", "religious-site-visit"],
  },
  activities: {
    label: "Activities & Adventure",
    order: 3,
    experiences: ["motorcycling", "surfing", "kitesurfing", "cable-car"],
  },
  chill: {
    label: "Chill & Relax",
    order: 4,
    experiences: ["beach", "boat-tour"],
  },
  "food-and-local-life": {
    label: "Food & Local Life",
    order: 5,
    experiences: ["food", "markets", "nightlife", "shopping"],
  },
}

// ─── Highlight ───────────────────────────────────────────────
// Structured thay vì string[] — linkable, reusable, SEO-friendly
export type Highlight = {
  locationSlug: string  // link về location page
  text: string          // highlight text từ location.insights.highlights[]
}

// ─── Main Destination Type ───────────────────────────────────
export type Destination = {
  // Core identity
  slug: string
  name: string
  province: string
  provinceSlug: string
  region: Region

  // <title> without the site suffix; default "{name} Travel Guide". For a
  // search term that differs from the place name (Ha Giang -> Ha Giang Loop)
  seoTitle?: string

  // Hero content
  description: string
  tagline?: string
  heroImage?: string

  // Classification
  tags?: string[]
  travelStyle?: TravelStyle[]

  // ── Editorial fields (hardcode) ──────────────────────────

  gettingThere?: TransportOption[]
  itineraries?: Itinerary[]
  cost?: CostRange
  bestTimeSummary?: string  // string ngắn cho card/hero
  // Editorial month strip (1-12, ascending). Not derived from locations;
  // keep it consistent with bestTimeSummary. Checked by `npm run audit:best-time`
  bestMonths: number[]
  // Editorial months to avoid (1-12, ascending), marked on the climate chart.
  // Must not overlap bestMonths; avoidSummary (why) is required with it.
  // Checked by `npm run audit:best-time`
  avoidMonths?: number[]
  avoidSummary?: string
  recommendedStay?: string
  transport?: string
  nearbyDestinations?: string[]
  faqs?: FaqItem[]
  dayTrips?: DayTrip[]
  emergencyContacts?: EmergencyContact[]

  coordinates?: {
    lat: number
    lng: number
  }

  // ── /map destination layer ───────────────────────────────
  // Label tier on /map: 1 = name shown at the default (whole-country) zoom,
  // 2 and 3 = name shown only once zoomed in (count-only bubble before that)
  mapPriority?: 1 | 2 | 3
  // Label rank on /map within tier 1 (1 = placed first, wins label collisions).
  // Destinations without one rank after all ranked ones, by tier then location count
  mapRank?: number
  // Max zoom when /map flies to this destination's locations
  mapZoom?: number

  // Editorial gallery. Not rendered yet. Planned fallback: hero images of up to
  // 8 locations in this destination, reusing existing image sizes to avoid new
  // Cloudinary transformations. Checked by `npm run audit:best-time`
  gallery?: {
    publicId: string
    alt: string
    caption?: string
    locationSlug?: string
  }[]
  // Date of the last content review, "YYYY-MM-DD". Checked by `npm run audit:best-time`
  updatedAt?: string

  // ── Fallback fields ──────────────────────────────────────
  // Dùng tạm khi location data chưa đủ để derive
  // Tự động bị bỏ qua khi deriveFromLocations() trả về data
  // TODO: xóa dần khi locations đã fill đầy đủ
  whatToDoFallback?: WhatToDo
  highlightsFallback?: Highlight[]
}

// ─── Derived Result Type ─────────────────────────────────────
// Output của deriveFromLocations() — consumed bởi UI component
export type DerivedDestinationData = {
  // Grouped theo EXPERIENCE_GROUP_CONFIG, sorted by order
  whatToDo: WhatToDo

  // Top highlights với slug để link về location page
  highlights: Highlight[]

  // Meta
  locationCount: number
}