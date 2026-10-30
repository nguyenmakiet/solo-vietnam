// Page model for /experiences/[slug]: groups, best-time table, stats, meta
// and share image, all derived from the location data. Editorial overrides
// come from data/experience-pages.ts. Server only (reads every location).
import type { Location } from "@/data/location"
import type { Experience } from "@/data/experiences"
import { activeLocations } from "@/data/all-locations"
import { provinces } from "@/data/provinces"
import { destinations } from "@/data/destinations"
import { releasedBestMonths, formatMonths } from "@/data/best-months-release"
import { EXPERIENCE_PAGES, type ExperienceStats, type ExperienceTypeGroup } from "@/data/experience-pages"
import { OG_LAST_RESORT_IMAGE, ogImageUrl, realPhoto } from "@/lib/cloudinary"

export type Region = "north" | "central" | "south"

export const REGION_META: Record<Region, { label: string; href: string }> = {
  north: { label: "North Vietnam", href: "/north-vietnam" },
  central: { label: "Central Vietnam", href: "/central-vietnam" },
  south: { label: "South Vietnam", href: "/south-vietnam" },
}
const REGION_ORDER: Region[] = ["north", "central", "south"]

const PROVINCE_REGION = new Map(provinces.map((p) => [p.slug, p.region]))
const PROVINCE_NAME = new Map(provinces.map((p) => [p.slug, p.name]))
const DESTINATION = new Map(destinations.map((d) => [d.slug, d]))

// Region from data/provinces.ts, as on /locations: first province with one
export const locationRegion = (loc: Location): Region | null =>
  loc.provinces.map((p) => PROVINCE_REGION.get(p)).find((r) => r !== undefined) ?? null

export const provinceNames = (slugs: string[]) =>
  slugs.map((s) => PROVINCE_NAME.get(s) ?? s.replace(/-/g, " ")).join(", ")

const primaryType = (loc: Location) => (Array.isArray(loc.type) ? loc.type[0] : loc.type)
const byName = (a: Location, b: Location) => a.name.localeCompare(b.name)

// ─── Types ───────────────────────────────────────────────────────────────────

export type LocationGroup = { key: string; label: string | null; locations: Location[] }

export type RegionSection = {
  region: Region | null          // null = locations without a mapped province
  label: string
  href: string | null
  destinations: { slug: string; name: string }[] // destination pages that hold listed locations
  locations: Location[]          // every location of the region, in page order
  groups: LocationGroup[]        // non-empty groups only
}

export type MonthRow = { label: string; href?: string; months: number[] }

export type SeasonRegionRow = {
  region: Region
  label: string
  dated: number                  // locations with best months
  counts: number[]               // [12] locations marked for each month
  locations: MonthRow[]          // per-location months (dated only)
}

export type SplitDestination = { slug: string; name: string; rows: MonthRow[] }

export type ExperiencePage = {
  title: string
  description: string
  intro: string[]
  ogImage: string
  ogLocation: Location | null
  locations: Location[]          // page order (region, group, name)
  regions: RegionSection[]
  season: { rows: SeasonRegionRow[]; split: SplitDestination[]; undated: number }
  stats: ExperienceStats
  mapHref: string
}

// ─── Builders ────────────────────────────────────────────────────────────────

function groupByType(locs: Location[], typeGroups?: ExperienceTypeGroup[]): LocationGroup[] {
  const sorted = [...locs].sort(byName)
  if (!typeGroups?.length) return [{ key: "all", label: null, locations: sorted }]
  const buckets = new Map(typeGroups.map((g) => [g.key, [] as Location[]]))
  const fallback = typeGroups.find((g) => !g.types)
  for (const loc of sorted) {
    const t = primaryType(loc)
    const group = typeGroups.find((g) => g.types?.includes(t)) ?? fallback
    // No catch-all group configured: unmatched locations still get listed
    if (group) buckets.get(group.key)!.push(loc)
    else {
      if (!buckets.has("other")) buckets.set("other", [])
      buckets.get("other")!.push(loc)
    }
  }
  const groups: LocationGroup[] = typeGroups.map((g) => ({ key: g.key, label: g.label, locations: buckets.get(g.key)! }))
  if (buckets.has("other") && !typeGroups.some((g) => g.key === "other")) {
    groups.push({ key: "other", label: "Other", locations: buckets.get("other")! })
  }
  return groups.filter((g) => g.locations.length > 0)
}

function regionDestinations(locs: Location[]) {
  const slugs = [...new Set(locs.map((l) => l.destination).filter((d): d is string => Boolean(d && DESTINATION.has(d))))]
  return slugs
    .map((slug) => ({ slug, name: DESTINATION.get(slug)!.name }))
    .sort((a, b) => a.name.localeCompare(b.name))
}

function monthRow(loc: Location): MonthRow {
  return { label: loc.name, href: `/locations/${loc.slug}`, months: [...releasedBestMonths(loc)].sort((a, b) => a - b) }
}

// Months marked by at least half of the dated locations
function peakMonths(counts: number[], dated: number): number[] {
  if (dated === 0) return []
  return counts.flatMap((c, i) => (c * 2 >= dated && c > 0 ? [i + 1] : []))
}

// Destinations whose listed locations (2+ with months) share no best month:
// one value would misstate them, so they are listed per location
function splitDestinations(locs: Location[]): SplitDestination[] {
  const byDest = new Map<string, Location[]>()
  for (const loc of locs) {
    if (!loc.destination || releasedBestMonths(loc).length === 0) continue
    byDest.set(loc.destination, [...(byDest.get(loc.destination) ?? []), loc])
  }
  const out: SplitDestination[] = []
  for (const [slug, group] of byDest) {
    if (group.length < 2) continue
    const shared = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].filter((m) =>
      group.every((l) => releasedBestMonths(l).includes(m))
    )
    if (shared.length > 0) continue
    out.push({
      slug,
      name: DESTINATION.get(slug)?.name ?? slug.replace(/-/g, " "),
      rows: [...group].sort(byName).map(monthRow),
    })
  }
  return out.sort((a, b) => a.name.localeCompare(b.name))
}

// Representative photo: the configured location, else an iconic / must-see
// one, else the first with a photo in the configured first type group (the
// experience's core type), else the first with a photo. The URL is the
// location page's own og:image, so no new Cloudinary variant is created.
function pickOgLocation(locs: Location[], preferred?: string, typeGroups?: ExperienceTypeGroup[]): Location | null {
  const withPhoto = [...locs].filter((l) => realPhoto(l.heroImage)).sort(byName)
  if (preferred) {
    const hit = withPhoto.find((l) => l.slug === preferred)
    if (hit) return hit
  }
  const score = (l: Location) => {
    const cats = l.categories ?? []
    const core = typeGroups?.[0]?.types?.includes(primaryType(l)) ? 1 : 0
    return (cats.includes("iconic") ? 4 : 0) + (cats.includes("must-see") ? 2 : 0) + core
  }
  return withPhoto.reduce<Location | null>((best, l) => (!best || score(l) > score(best) ? l : best), null)
}

export function buildExperiencePage(experience: Experience): ExperiencePage {
  const config = EXPERIENCE_PAGES[experience.slug] ?? {}
  const matched = activeLocations.filter((l) => l.experiences.includes(experience.value))

  const regionKeys: (Region | null)[] = [...REGION_ORDER, null]
  const regions: RegionSection[] = regionKeys.flatMap((region) => {
    const locs = matched.filter((l) => locationRegion(l) === region)
    if (locs.length === 0) return []
    const groups = groupByType(locs, config.typeGroups)
    return [{
      region,
      label: region ? REGION_META[region].label : "Other",
      href: region ? REGION_META[region].href : null,
      destinations: regionDestinations(locs),
      locations: groups.flatMap((g) => g.locations),
      groups,
    }]
  })
  const locations = regions.flatMap((r) => r.locations)

  const seasonRows: SeasonRegionRow[] = REGION_ORDER.flatMap((region) => {
    const dated = matched.filter((l) => locationRegion(l) === region && releasedBestMonths(l).length > 0).sort(byName)
    if (dated.length === 0) return []
    const counts = Array.from({ length: 12 }, (_, i) => dated.filter((l) => releasedBestMonths(l).includes(i + 1)).length)
    return [{ region, label: REGION_META[region].label, dated: dated.length, counts, locations: dated.map(monthRow) }]
  })
  const split = splitDestinations(matched)

  const byGroup: Record<string, number> = {}
  for (const r of regions) for (const g of r.groups) byGroup[g.key] = (byGroup[g.key] ?? 0) + g.locations.length
  const peak = (region: Region) => {
    const row = seasonRows.find((r) => r.region === region)
    const months = row ? peakMonths(row.counts, row.dated) : []
    return months.length > 0 ? formatMonths(months) : ""
  }
  const count = (region: Region) => matched.filter((l) => locationRegion(l) === region).length
  const stats: ExperienceStats = {
    label: experience.label,
    total: matched.length,
    provinceCount: new Set(matched.flatMap((l) => l.provinces)).size,
    byRegion: { north: count("north"), central: count("central"), south: count("south") },
    byGroup,
    peakByRegion: { north: peak("north"), central: peak("central"), south: peak("south") },
    splitDestinations: split.map((s) => s.name),
  }

  const ogLocation = pickOgLocation(matched, config.ogLocationSlug, config.typeGroups)

  return {
    title: config.metaTitle ?? `${experience.label} in Vietnam | Solo in Vietnam`,
    description: config.metaDescription?.(stats) ?? genericDescription(stats),
    intro: config.intro?.(stats) ?? [],
    ogImage: ogLocation ? ogImageUrl(ogLocation.heroImage!) : OG_LAST_RESORT_IMAGE,
    ogLocation,
    locations,
    regions,
    season: { rows: seasonRows, split, undated: matched.filter((l) => releasedBestMonths(l).length === 0).length },
    stats,
    mapHref: `/map?mode=all&exp=${experience.value}`,
  }
}

function genericDescription(s: ExperienceStats): string {
  if (s.total === 0) return `${s.label} in Vietnam for solo travelers - locations coming soon.`
  const regions = (["north", "central", "south"] as const).filter((r) => s.byRegion[r] > 0).map((r) => REGION_META[r].label.replace(" Vietnam", ""))
  return `${s.label} in Vietnam for solo travelers: ${s.total} ${s.total === 1 ? "place" : "places"} grouped by region (${regions.join(", ")}), with the best months and practical notes for each location.`
}
