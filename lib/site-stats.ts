// Site-wide location-count claim - single source of truth.
// Derived at build time from the location data so it never drifts.
// Counts every public location page: /locations/[slug] is generated and
// listed in the sitemap for all of allLocations, including temporarily-closed,
// closed, seasonally-closed and unverified ones (they keep their page with a
// status notice). Floored to the nearest 10: 263 -> "260+".
import { allLocations } from "@/data/all-locations"

export const LOCATION_COUNT = allLocations.length
export const LOCATION_COUNT_LABEL = `${Math.floor(LOCATION_COUNT / 10) * 10}+`
