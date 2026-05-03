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
//    - fallback fields (dùng tạm khi location data chưa đủ)
//
// ❌ KHÔNG hardcode (derive runtime qua deriveFromLocations()):
//    - bestMonths  → frequency(location.bestMonths[]) >= 30% locations
//    - whatToDo    → group(location.experiences[]) → UI categories
//    - highlights  → top location.insights.highlights[] với slug + text
//
// Fallback fields tự động bị bỏ qua khi derived result đã có data.
// Xóa dần fallback khi locations đã fill đầy đủ.
// ============================================================

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
}

export type Itinerary = {
  duration: string  // "3N2Đ" | "4N3Đ"
  label: string     // "Lịch trình cơ bản" | "Lịch trình đầy đủ"
  days: ItineraryDay[]
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
  nature: {
    label: "Nature & Outdoors",
    order: 1,
    experiences: ["trekking", "hiking", "waterfall", "swimming", "kayaking", "cycling", "snorkeling", "diving"],
  },
  culture: {
    label: "Culture & History",
    order: 2,
    experiences: ["culture", "homestay", "photography", "history"],
  },
  activities: {
    label: "Activities & Adventure",
    order: 3,
    experiences: ["adventure", "motorbiking", "climbing", "surfing", "kite-surfing"],
  },
  chill: {
    label: "Chill & Relax",
    order: 4,
    experiences: ["cafe", "beach", "sunset", "cruise"],
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
  recommendedStay?: string
  transport?: string
  nearbyDestinations?: string[]

  coordinates?: {
    lat: number
    lng: number
  }

  // ── Fallback fields ──────────────────────────────────────
  // Dùng tạm khi location data chưa đủ để derive
  // Tự động bị bỏ qua khi deriveFromLocations() trả về data
  // TODO: xóa dần khi locations đã fill đầy đủ
  bestMonthsFallback?: number[]
  whatToDoFallback?: WhatToDo
  highlightsFallback?: Highlight[]
}

// ─── Derived Result Type ─────────────────────────────────────
// Output của deriveFromLocations() — consumed bởi UI component
export type DerivedDestinationData = {
  // Months xuất hiện trong >= 30% locations thuộc destination
  // Dùng frequency thay vì union để tránh noisy data
  bestMonths: number[]

  // Grouped theo EXPERIENCE_GROUP_CONFIG, sorted by order
  whatToDo: WhatToDo

  // Top highlights với slug để link về location page
  highlights: Highlight[]

  // Meta
  locationCount: number
}