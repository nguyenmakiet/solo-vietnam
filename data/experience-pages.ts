// Editorial layer for the /experiences/[slug] pages. Every field is optional:
// an experience without an entry gets the generic page (generated title and
// description, locations grouped by region, best-time table, map link,
// og:image from a representative location). The page model is built in
// lib/experience-page.ts from the location data; nothing here may restate
// facts that the location files do not hold.
import type { LocationType } from "./location"
import type { ExperienceSlug } from "./experiences"

// Numbers computed from the location data (lib/experience-page.ts), so copy
// that quotes them stays true as locations are added
export type ExperienceStats = {
  label: string                 // experience label, e.g. "Beaches"
  total: number                 // listed locations
  provinceCount: number
  byRegion: { north: number; central: number; south: number }
  byGroup: Record<string, number> // type group key -> count (typeGroups only)
  peakByRegion: { north: string; central: string; south: string } // months marked by at least half of a region's locations, "" when none
  splitDestinations: string[]   // destinations whose listed locations share no best month (e.g. Phu Quoc)
}

// Sub-groups inside each region, matched on the location's primary type
// (type[0]). The first group whose `types` contains it wins; a group without
// `types` takes everything left over and should come last.
export type ExperienceTypeGroup = {
  key: string
  label: string
  types?: LocationType[]
}

export type ExperiencePageConfig = {
  metaTitle?: string
  metaDescription?: (s: ExperienceStats) => string
  // Paragraphs above the list. Plain text, no markdown
  intro?: (s: ExperienceStats) => string[]
  typeGroups?: ExperienceTypeGroup[]
  // Location whose hero photo is the og:image; otherwise picked from the data
  ogLocationSlug?: string
}

export const EXPERIENCE_PAGES: Partial<Record<ExperienceSlug, ExperiencePageConfig>> = {
  beaches: {
    metaTitle: "Beaches in Vietnam by Region and Season | Solo in Vietnam",
    metaDescription: (s) =>
      `${s.total} beaches, islands and coastal spots in Vietnam for solo travelers, grouped by North, Central and South, with the months each place is marked as best to visit.`,
    typeGroups: [
      { key: "beaches", label: "Beaches", types: ["beach"] },
      { key: "islands-bays", label: "Islands & bays", types: ["island", "bay"] },
      { key: "other-coastal", label: "Other coastal" },
    ],
    // intro: not set, so the page shows only the tagline. Nguyen writes the
    // intro himself; the draft below (built only from computed stats) is kept
    // as a reference and is never rendered. To use an intro, add `intro` here.
    // const list = (items: string[]) =>
    //   items.length <= 1 ? items.join("") : `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`
    //
    // intro: (s) => {
    //   const peaks = [
    //     s.peakByRegion.north && `in the North for ${s.peakByRegion.north}`,
    //     s.peakByRegion.central && `on the Central coast for ${s.peakByRegion.central}`,
    //     s.peakByRegion.south && `in the South for ${s.peakByRegion.south}`,
    //   ].filter((p): p is string => Boolean(p))
    //   return [
    //     `This page lists ${s.total} places in Vietnam where the beach is part of the visit: ${s.byGroup.beaches ?? 0} beaches, ${s.byGroup["islands-bays"] ?? 0} islands and bays, and ${s.byGroup["other-coastal"] ?? 0} other coastal spots such as cable cars, a lighthouse, fishing villages and rock formations. They are spread over ${s.provinceCount} provinces: ${s.byRegion.north} in the North, ${s.byRegion.central} on the Central coast and ${s.byRegion.south} in the South.`,
    //     peaks.length > 0
    //       ? `The coasts do not share one season. Going by the best months on each location page, most places are marked ${list(peaks)}.${s.splitDestinations.length > 0 ? ` In ${list(s.splitDestinations)}, the places listed share no best month, so the table below shows them one by one.` : ""}`
    //       : "",
    //     "Use the filters to narrow the list by region, month or province, or open the same places on the map. Each card links to a location page with the details.",
    //   ].filter(Boolean)
    // },
  },
  snorkeling: { ogLocationSlug: "nam-du-islands" },
  trekking: { ogLocationSlug: "ta-xua-mountain" },
  camping: { ogLocationSlug: "bui-hui-grassland" },
  caving: { ogLocationSlug: "son-doong-cave" },
  kayaking: { ogLocationSlug: "lan-ha-bay" },
  "boat-tours": { ogLocationSlug: "trang-an" },
  food: { ogLocationSlug: "hanoi-old-quarter" },
  cycling: { ogLocationSlug: "tam-coc" },
  nightlife: { ogLocationSlug: "bui-vien-street" },
  culture: { ogLocationSlug: "hoi-an-ancient-town" },
  homestays: { ogLocationSlug: "ta-van-village" },
  wildlife: { ogLocationSlug: "cat-tien-national-park" },
  motorcycling: { ogLocationSlug: "ma-pi-leng-pass" },
  "cable-cars": { ogLocationSlug: "ba-na-cable-car" },
}
