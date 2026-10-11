import type { LocationType } from "@/data/location"
import { LOCATION_TAGS, isLocationTag } from "@/data/taxonomy/tags"

// ─── Card data for /locations ───────────────────────────────────────────────
// Built on the server (toLocationCard in app/locations/page.tsx) so the client
// only receives the fields the listing filters on and renders - not the full
// Location content (same approach as app/map/page.tsx). Shared by the server
// page and the client component: keep it free of "use client" and of data
// imports, so nothing heavy is pulled into the client bundle.

export type LocationCard = {
  slug: string
  name: string
  types: LocationType[]   // type[0] = primary type (badge + dot)
  categories: string[]
  experiences: string[]
  tags: string[]          // registered, filterable tags only (no legacy labels)
  provinces: string[]
  region: "north" | "central" | "south" | null  // from data/provinces.ts (first province with a region)
  months: number[]        // released bestMonths (empty if not released)
  image: string | null    // 600x400 card crop; null = no photo yet
  subtitle: string        // tags[0] display label, else short seoDescription
}

// Tags: only registered, canonical, filterable tags (history, faith, people,
// influence). Legacy emoji display labels are never filters.
export function isFilterableTag(value: string): boolean {
  if (!isLocationTag(value)) return false
  const meta: { status: string; filterable?: boolean } = LOCATION_TAGS[value]
  return meta.status === "canonical" && meta.filterable !== false
}
