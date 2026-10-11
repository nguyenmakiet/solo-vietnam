"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import type { LocationType } from "@/data/location"
import { LOCATION_TAGS, isLocationTag, type LocationTagGroup } from "@/data/taxonomy/tags"
import { LOCATION_TYPES, isLocationType, typeDisplayLabel } from "@/data/taxonomy/types"
import { LOCATION_EXPERIENCES, experienceDisplayLabel, isLocationExperience } from "@/data/taxonomy/experiences"
import { LOCATION_CATEGORIES, isLocationCategory } from "@/data/taxonomy/categories"
import { dotClass } from "@/lib/category-dot"
import { isFilterableTag, type LocationCard } from "./location-card"
import PhotoPlaceholder from "@/components/PhotoPlaceholder"

// ─── Region types & mapping ───────────────────────────────────────────────────

type Region = "north" | "central" | "south"

const REGIONS: { value: Region; label: string }[] = [
  { value: "north",   label: "North" },
  { value: "central", label: "Central" },
  { value: "south",   label: "South" },
]

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

// A shortcut selects one type, one experience, or a set of categories.
const SHORTCUTS: { label: string; type?: string; exp?: string; categories?: string[] }[] = [
  { label: "Beaches",     type: "beach" },
  { label: "Islands",     type: "island" },
  { label: "Mountains",   type: "mountain" },
  { label: "Caves",       type: "cave" },
  { label: "Waterfalls",  type: "waterfall" },
  { label: "Trekking",    exp: "trekking" },
  { label: "Cultural",    categories: ["culture", "religion"] },
  { label: "Photography", exp: "photography" },
]

// ─── Helpers ──────────────────────────────────────────────────────────────────

const PAGE_SIZE = 24

function getTypes(loc: LocationCard): string[] {
  return loc.types
}

function primaryType(loc: LocationCard): LocationType {
  return loc.types[0]
}

// Card photo; falls back to the placeholder if the photo fails to load.
// An image can fail before hydration (onError is then never called), so the
// mount effect also checks for an already-broken image.
function CardImage({ src, alt }: { src: string | null; alt: string }) {
  const [failed, setFailed] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)
  useEffect(() => {
    const img = imgRef.current
    // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing with a load error that happened before hydration
    if (img && img.complete && img.naturalWidth === 0) setFailed(true)
  }, [src])
  if (!src || failed) return <PhotoPlaceholder />
  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}

function formatSlug(slug: string): string {
  return slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
}

// A type/experience is offered and applied as a filter only when the frozen
// taxonomy registry allows it: registered, canonical, and not explicitly
// marked `filterable: false`. Anything else in the URL (unknown, proposed,
// deprecated) is ignored when filtering but left in the URL untouched.
type FilterMeta = { status: string; filterable?: boolean }

function isFilterableMeta(meta: FilterMeta): boolean {
  return meta.status === "canonical" && meta.filterable !== false
}

function isFilterableType(value: string): boolean {
  return isLocationType(value) && isFilterableMeta(LOCATION_TYPES[value])
}

function isFilterableExperience(value: string): boolean {
  return isLocationExperience(value) && isFilterableMeta(LOCATION_EXPERIENCES[value])
}

// Categories: only the travel themes are filters. Editorial badges
// (hidden-gem, must-see, iconic) are not offered.
function isFilterableCategory(value: string): boolean {
  return (
    isLocationCategory(value) &&
    LOCATION_CATEGORIES[value].group === "theme" &&
    isFilterableMeta(LOCATION_CATEGORIES[value])
  )
}

const TAG_GROUPS: { group: LocationTagGroup; label: string }[] = [
  { group: "historical-period", label: "Historical period" },
  { group: "topic", label: "Topic" },
  { group: "religion", label: "Religion" },
  { group: "ethnic-culture", label: "Ethnic culture" },
  { group: "cultural-influence", label: "Cultural influence" },
  { group: "architectural-influence", label: "Architecture" },
]

function tagLabel(tag: string): string {
  return isLocationTag(tag) ? LOCATION_TAGS[tag].label : tag
}

// Backward compatibility for old `?type=` URLs whose broad type has moved to a
// category. Applied only when the type is no longer a filterable type, so it is
// inert while the type is still canonical. Other stale types stay ignored.
const LEGACY_TYPE_CATEGORY_ALIASES: Record<string, string> = {
  nature: "nature",
  cultural: "culture",
}

// Split URL types into the types kept as-is and the categories they alias to.
function resolveLegacyTypes(types: string[]): { types: string[]; categories: string[] } {
  const kept: string[] = []
  const categories: string[] = []
  for (const t of types) {
    const alias = LEGACY_TYPE_CATEGORY_ALIASES[t]
    if (alias && !isFilterableType(t) && isFilterableCategory(alias)) categories.push(alias)
    else kept.push(t)
  }
  return { types: kept, categories }
}

function getLocationRegion(loc: LocationCard): Region | null {
  return loc.region
}

// Old `?region=` values from before the 3-region split.
const LEGACY_REGION_ALIASES: Record<string, Region> = {
  mekong: "south",
  highlands: "central",
}

function parseRegion(value: string | null): Region | null {
  if (!value) return null
  if (REGIONS.some((r) => r.value === value)) return value as Region
  return LEGACY_REGION_ALIASES[value] ?? null
}

function parseUrlState() {
  if (typeof window === "undefined") return null
  const p = new URLSearchParams(window.location.search)
  return {
    region: parseRegion(p.get("region")),
    types: p.getAll("type"),
    experiences: p.getAll("experience"),
    categories: p.getAll("category"),
    tags: p.getAll("tag"),
    province: p.get("province") ?? "",
    months: p.getAll("month").map((m) => parseInt(m, 10)).filter(Boolean),
    page: Math.max(1, parseInt(p.get("page") ?? "1", 10)),
  }
}

function buildSearch(
  region: Region | null,
  types: string[],
  experiences: string[],
  categories: string[],
  tags: string[],
  province: string,
  months: number[],
  page: number
): string {
  const p = new URLSearchParams()
  if (region) p.set("region", region)
  types.forEach((t) => p.append("type", t))
  experiences.forEach((e) => p.append("experience", e))
  categories.forEach((c) => p.append("category", c))
  tags.forEach((t) => p.append("tag", t))
  if (province) p.set("province", province)
  months.forEach((m) => p.append("month", String(m)))
  if (page > 1) p.set("page", String(page))
  const s = p.toString()
  return s ? `?${s}` : ""
}

// ─── Icons ────────────────────────────────────────────────────────────────────

function IconChevron({ open }: { open: boolean }) {
  return (
    <svg className={`w-3 h-3 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  )
}

// ─── Styles (design tokens from app/globals.css) ─────────────────────────────

const FOCUS = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
const SERIF = { fontFamily: "var(--font-serif), 'Source Serif 4', serif" }

// Segmented group: one 1px frame with hairline dividers, not a row of boxed chips
const SEGMENTED = "inline-flex shrink-0 border border-line rounded-button bg-surface divide-x divide-line overflow-hidden"

// Segment inside a group; selected = teal-ink fill. Inset focus ring so the
// group's overflow (and the scrolling month row) never clips it.
function segmentClass(active: boolean) {
  return `px-2.5 md:px-3 py-1.5 text-[13px] font-medium whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-teal ${
    active ? "bg-teal-ink text-paper" : "text-ink hover:bg-paper"
  }`
}

// Dropdown trigger: quiet framed select (stays a real control for usability),
// teal when it has selections
function triggerClass(hasSelection: boolean) {
  return `flex items-center gap-1.5 px-2.5 md:px-3 py-1.5 rounded-button border text-[13px] font-medium whitespace-nowrap transition-colors ${FOCUS} ${
    hasSelection ? "border-teal text-teal bg-surface" : "border-line text-ink hover:border-ink-2"
  }`
}

const PANEL = "absolute top-full left-0 mt-1 bg-surface border border-line rounded-card z-30 max-h-64 overflow-y-auto py-1.5"
const OPTION = "flex items-center gap-2.5 px-3.5 py-1.5 hover:bg-paper cursor-pointer text-sm text-ink"
const ROW_LABEL = "w-[76px] md:w-[88px] shrink-0 text-[11px] font-semibold tracking-[0.12em] uppercase text-ink-2 select-none"

// ─── Component ────────────────────────────────────────────────────────────────

interface Props {
  locations: LocationCard[]
  initialProvince?: string
}

export default function LocationsClient({ locations, initialProvince }: Props) {
  const [region, setRegion] = useState<Region | null>(null)
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [selectedExperiences, setSelectedExperiences] = useState<string[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [province, setProvince] = useState(initialProvince ?? "")
  const [selectedMonths, setSelectedMonths] = useState<number[]>([])
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  // Sync from URL after mount
  useEffect(() => {
    const init = parseUrlState()
    if (!init) return
    if (init.region) setRegion(init.region)
    // Old broad-type URLs (?type=nature) become the category they moved to.
    const legacy = resolveLegacyTypes(init.types)
    const categories = [...new Set([...init.categories, ...legacy.categories])]
    if (legacy.types.length) setSelectedTypes(legacy.types)
    if (init.experiences.length) setSelectedExperiences(init.experiences)
    if (categories.length) setSelectedCategories(categories)
    if (init.tags.length) setSelectedTags(init.tags)
    if (init.province) setProvince(init.province)
    if (init.months.length) setSelectedMonths(init.months)
    if (init.page > 1) setVisibleCount(init.page * PAGE_SIZE)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [typeOpen, setTypeOpen] = useState(false)
  const [expOpen, setExpOpen] = useState(false)
  const [catOpen, setCatOpen] = useState(false)
  const [tagOpen, setTagOpen] = useState(false)
  const [provOpen, setProvOpen] = useState(false)
  const [provSearch, setProvSearch] = useState("")

  const typeRef = useRef<HTMLDivElement>(null)
  const expRef = useRef<HTMLDivElement>(null)
  const catRef = useRef<HTMLDivElement>(null)
  const tagRef = useRef<HTMLDivElement>(null)
  const provRef = useRef<HTMLDivElement>(null)
  const provInputRef = useRef<HTMLInputElement>(null)

  const allTypes = useMemo(() => {
    const set = new Set<string>()
    locations.forEach((l) => getTypes(l).forEach((t) => set.add(t)))
    return Array.from(set).filter(isFilterableType).sort()
  }, [locations])

  const allExperiences = useMemo(() => {
    const set = new Set<string>()
    locations.forEach((l) => l.experiences.forEach((e) => set.add(e)))
    return Array.from(set).filter(isFilterableExperience).sort()
  }, [locations])

  const allCategories = useMemo(() => {
    const set = new Set<string>()
    locations.forEach((l) => l.categories.forEach((c) => set.add(c)))
    return Array.from(set).filter(isFilterableCategory).sort()
  }, [locations])

  // Tag options grouped as in the registry, with how many locations carry each
  const tagGroups = useMemo(() => {
    const counts = new Map<string, number>()
    locations.forEach((l) => l.tags.forEach((t) => counts.set(t, (counts.get(t) ?? 0) + 1)))
    const present = Array.from(counts.keys()).filter(isFilterableTag)
    return TAG_GROUPS.map(({ group, label }) => ({
      label,
      tags: present
        .filter((t) => isLocationTag(t) && LOCATION_TAGS[t].group === group)
        .sort((a, b) => tagLabel(a).localeCompare(tagLabel(b)))
        .map((t) => ({ tag: t, count: counts.get(t) ?? 0 })),
    })).filter((g) => g.tags.length > 0)
  }, [locations])

  const allProvinces = useMemo(() => {
    const set = new Set<string>()
    locations.forEach((l) => l.provinces.forEach((p) => set.add(p)))
    return Array.from(set).sort()
  }, [locations])

  const filteredProvinces = useMemo(
    () => allProvinces.filter((p) => formatSlug(p).toLowerCase().includes(provSearch.toLowerCase())),
    [allProvinces, provSearch]
  )

  // Count per month (for unfiltered base, so badges always show totals)
  const monthCounts = useMemo(() => {
    const counts: Record<number, number> = {}
    for (let m = 1; m <= 12; m++) counts[m] = 0
    locations.forEach((loc) => {
      loc.months.forEach((m) => { counts[m] = (counts[m] ?? 0) + 1 })
    })
    return counts
  }, [locations])

  // Selected values that are valid filters. The raw selections stay in state
  // (and therefore in the URL); stale ones are simply not applied.
  const activeTypes = useMemo(() => selectedTypes.filter(isFilterableType), [selectedTypes])
  const activeExperiences = useMemo(() => selectedExperiences.filter(isFilterableExperience), [selectedExperiences])
  const activeCategories = useMemo(() => selectedCategories.filter(isFilterableCategory), [selectedCategories])
  const activeTags = useMemo(() => selectedTags.filter(isFilterableTag), [selectedTags])

  const filtered = useMemo(() => {
    return locations.filter((loc) => {
      if (region !== null) {
        if (getLocationRegion(loc) !== region) return false
      }
      if (activeTypes.length > 0) {
        if (!activeTypes.some((t) => getTypes(loc).includes(t))) return false
      }
      if (activeExperiences.length > 0) {
        if (!activeExperiences.some((e) => loc.experiences.includes(e))) return false
      }
      if (activeCategories.length > 0) {
        if (!activeCategories.some((c) => loc.categories.includes(c))) return false
      }
      if (activeTags.length > 0) {
        if (!activeTags.some((t) => loc.tags.includes(t))) return false
      }
      if (province) {
        if (!loc.provinces.includes(province)) return false
      }
      if (selectedMonths.length > 0) {
        if (!selectedMonths.some((m) => loc.months.includes(m))) return false
      }
      return true
    })
  }, [locations, region, activeTypes, activeExperiences, activeCategories, activeTags, province, selectedMonths])

  const visible = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length
  const currentPage = Math.ceil(visibleCount / PAGE_SIZE)

  useEffect(() => {
    const search = buildSearch(region, selectedTypes, selectedExperiences, selectedCategories, selectedTags, province, selectedMonths, 1)
    history.replaceState(null, "", `/locations${search}`)
  }, [region, selectedTypes, selectedExperiences, selectedCategories, selectedTags, province, selectedMonths])

  useEffect(() => {
    const href = province
      ? `https://www.soloinvietnam.com/provinces/${province}`
      : "https://www.soloinvietnam.com/locations"
    let link = document.querySelector<HTMLLinkElement>("link[rel='canonical']")
    if (!link) {
      link = document.createElement("link")
      link.rel = "canonical"
      document.head.appendChild(link)
    }
    link.href = href
  }, [province])

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (typeRef.current && !typeRef.current.contains(e.target as Node)) setTypeOpen(false)
      if (expRef.current && !expRef.current.contains(e.target as Node)) setExpOpen(false)
      if (catRef.current && !catRef.current.contains(e.target as Node)) setCatOpen(false)
      if (tagRef.current && !tagRef.current.contains(e.target as Node)) setTagOpen(false)
      if (provRef.current && !provRef.current.contains(e.target as Node)) {
        setProvOpen(false)
        setProvSearch("")
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  useEffect(() => {
    if (provOpen) provInputRef.current?.focus()
  }, [provOpen])

  function toggleRegion(r: Region) {
    setRegion((prev) => (prev === r ? null : r))
    setVisibleCount(PAGE_SIZE)
  }

  function toggleType(t: string) {
    setSelectedTypes((prev) => prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t])
    setVisibleCount(PAGE_SIZE)
  }

  function toggleExperience(e: string) {
    setSelectedExperiences((prev) => prev.includes(e) ? prev.filter((x) => x !== e) : [...prev, e])
    setVisibleCount(PAGE_SIZE)
  }

  function toggleCategory(c: string) {
    setSelectedCategories((prev) => prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c])
    setVisibleCount(PAGE_SIZE)
  }

  function toggleTag(t: string) {
    setSelectedTags((prev) => prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t])
    setVisibleCount(PAGE_SIZE)
  }

  // Shortcut with several categories: select them all, or clear them all when
  // every one is already selected.
  function toggleCategorySet(set: string[]) {
    setSelectedCategories((prev) =>
      set.every((c) => prev.includes(c)) ? prev.filter((x) => !set.includes(x)) : [...new Set([...prev, ...set])]
    )
    setVisibleCount(PAGE_SIZE)
  }

  function selectProvince(p: string) {
    setProvince(p)
    setProvOpen(false)
    setProvSearch("")
    setVisibleCount(PAGE_SIZE)
  }

  function toggleMonth(m: number) {
    setSelectedMonths((prev) => prev.includes(m) ? prev.filter((x) => x !== m) : [...prev, m])
    setVisibleCount(PAGE_SIZE)
  }

  function clearFilters() {
    setRegion(null)
    setSelectedTypes([])
    setSelectedExperiences([])
    setSelectedCategories([])
    setSelectedTags([])
    setProvince("")
    setSelectedMonths([])
    setVisibleCount(PAGE_SIZE)
  }

  function loadMore() {
    const nextPage = currentPage + 1
    setVisibleCount(nextPage * PAGE_SIZE)
    history.pushState(null, "", `/locations${buildSearch(region, selectedTypes, selectedExperiences, selectedCategories, selectedTags, province, selectedMonths, nextPage)}`)
  }

  const hasActiveFilters = region !== null || activeTypes.length > 0 || activeExperiences.length > 0 || activeCategories.length > 0 || activeTags.length > 0 || province !== "" || selectedMonths.length > 0

  return (
    <main className="min-h-screen bg-paper text-ink">

      {/* ── Header: editorial index opening, paper not a dark hero ── */}
      <section className="pt-6 pb-4 md:pt-9 md:pb-5">
        <div className="max-w-6xl mx-auto px-6">
          {/* Breadcrumb doubles as the section label: HOME / LOCATIONS */}
          <nav className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase mb-2" aria-label="Breadcrumb">
            <Link href="/" className={`text-ink-2 hover:text-signal-text ${FOCUS}`}>Home</Link>
            <span className="text-line" aria-hidden="true">/</span>
            <span className="text-teal" aria-current="page">Locations</span>
          </nav>
          <h1
            className="text-[30px] md:text-[42px] font-bold leading-[1.1] tracking-[-0.5px] text-ink mb-2"
            style={SERIF}
          >
            Locations in Vietnam
          </h1>
          <p className="text-[15px] md:text-base text-ink-2 max-w-2xl leading-relaxed">
            {locations.length}+ places across Vietnam - beaches, mountains, caves, temples, waterfalls and hidden gems worth going solo.
          </p>

          {/* ── Experience shortcuts: text links between thin rules ── */}
          {/* One row: scrolls sideways on narrow screens (like the month row) so dividers never start a wrapped line */}
          <div className="mt-4 pt-3 border-t border-line flex items-center overflow-x-auto scrollbar-none">
            <span className="shrink-0 text-[11px] font-semibold tracking-[0.12em] uppercase text-ink-2 mr-3 select-none">
              Explore by
            </span>
            {SHORTCUTS.map((s, i) => {
              const active = s.type
                ? selectedTypes.includes(s.type)
                : s.exp
                  ? selectedExperiences.includes(s.exp)
                  : s.categories
                    ? s.categories.every((c) => selectedCategories.includes(c))
                    : false
              return (
                <button
                  key={s.label}
                  aria-pressed={active}
                  onClick={() => {
                    if (s.type) toggleType(s.type)
                    else if (s.exp) toggleExperience(s.exp)
                    else if (s.categories) toggleCategorySet(s.categories)
                  }}
                  className={`shrink-0 whitespace-nowrap text-sm leading-none px-2.5 py-1 transition-colors ${i > 0 ? "border-l border-line" : ""} focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-teal ${
                    active
                      ? "text-teal font-semibold underline underline-offset-4 decoration-1"
                      : "text-ink hover:text-teal"
                  }`}
                >
                  {s.label}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Filter bar ── */}
      {/* Sticks below the site navbar: 60px + 1px border (components/header.css) */}
      <div className="sticky top-[61px] z-20 bg-paper border-y border-line">
        <div className="max-w-6xl mx-auto px-6">

          {/* Row 1 — Region */}
          <div className="flex items-center pt-2.5 pb-1.5">
            <span className={ROW_LABEL}>Region</span>
            <div className={SEGMENTED} role="group" aria-label="Region">
              {REGIONS.map((r) => (
                <button
                  key={r.value}
                  aria-pressed={region === r.value}
                  onClick={() => toggleRegion(r.value)}
                  className={segmentClass(region === r.value)}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>

          {/* Row 2 — Best time (scrolls horizontally on narrow screens) */}
          <div className="flex items-center py-1.5 overflow-x-auto scrollbar-none">
            <span className={ROW_LABEL}>Best time</span>
            <div className={SEGMENTED} role="group" aria-label="Best time to visit">
              {MONTHS.map((label, i) => {
                const m = i + 1
                const active = selectedMonths.includes(m)
                return (
                  <button
                    key={m}
                    aria-pressed={active}
                    onClick={() => toggleMonth(m)}
                    className={segmentClass(active)}
                  >
                    {label}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Row 3 — Dropdowns + result count */}
          <div className="flex items-center gap-1.5 pt-2 pb-2.5 flex-wrap border-t border-line mt-1">

            {/* Type */}
            <div ref={typeRef} className="relative">
              <button
                aria-expanded={typeOpen}
                onClick={() => { setTypeOpen(!typeOpen); setExpOpen(false); setCatOpen(false); setTagOpen(false); setProvOpen(false) }}
                className={triggerClass(activeTypes.length > 0)}
              >
                Type{activeTypes.length > 0 ? ` · ${activeTypes.length}` : ""}
                <IconChevron open={typeOpen} />
              </button>
              {typeOpen && (
                <div className={`${PANEL} min-w-[190px]`}>
                  {allTypes.map((t) => (
                    <label key={t} className={OPTION}>
                      <input type="checkbox" checked={selectedTypes.includes(t)} onChange={() => toggleType(t)} className="accent-teal w-3.5 h-3.5" />
                      {typeDisplayLabel(t)}
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Experience */}
            <div ref={expRef} className="relative">
              <button
                aria-expanded={expOpen}
                onClick={() => { setExpOpen(!expOpen); setTypeOpen(false); setCatOpen(false); setTagOpen(false); setProvOpen(false) }}
                className={triggerClass(activeExperiences.length > 0)}
              >
                Experience{activeExperiences.length > 0 ? ` · ${activeExperiences.length}` : ""}
                <IconChevron open={expOpen} />
              </button>
              {expOpen && (
                <div className={`${PANEL} min-w-[210px]`}>
                  {allExperiences.map((e) => (
                    <label key={e} className={OPTION}>
                      <input type="checkbox" checked={selectedExperiences.includes(e)} onChange={() => toggleExperience(e)} className="accent-teal w-3.5 h-3.5" />
                      {experienceDisplayLabel(e)}
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Category (travel themes) */}
            <div ref={catRef} className="relative">
              <button
                aria-expanded={catOpen}
                onClick={() => { setCatOpen(!catOpen); setTypeOpen(false); setExpOpen(false); setTagOpen(false); setProvOpen(false) }}
                className={triggerClass(activeCategories.length > 0)}
              >
                Category{activeCategories.length > 0 ? ` · ${activeCategories.length}` : ""}
                <IconChevron open={catOpen} />
              </button>
              {catOpen && (
                <div className={`${PANEL} min-w-[190px]`}>
                  {allCategories.map((c) => (
                    <label key={c} className={OPTION}>
                      <input type="checkbox" checked={selectedCategories.includes(c)} onChange={() => toggleCategory(c)} className="accent-teal w-3.5 h-3.5" />
                      {LOCATION_CATEGORIES[c as keyof typeof LOCATION_CATEGORIES].label}
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Heritage (registered tags: period, faith, people, influence) */}
            {tagGroups.length > 0 && (
              <div ref={tagRef} className="relative">
                <button
                  aria-expanded={tagOpen}
                  onClick={() => { setTagOpen(!tagOpen); setTypeOpen(false); setExpOpen(false); setCatOpen(false); setProvOpen(false) }}
                  className={triggerClass(activeTags.length > 0)}
                >
                  Heritage{activeTags.length > 0 ? ` · ${activeTags.length}` : ""}
                  <IconChevron open={tagOpen} />
                </button>
                {tagOpen && (
                  <div className={`${PANEL} min-w-[240px] max-h-80`}>
                    {tagGroups.map((g) => (
                      <div key={g.label} role="group" aria-label={g.label}>
                        <p className="px-3.5 pt-2 pb-1 text-[10px] font-semibold tracking-[0.12em] uppercase text-ink-2 select-none">
                          {g.label}
                        </p>
                        {g.tags.map(({ tag, count }) => (
                          <label key={tag} className={OPTION}>
                            <input type="checkbox" checked={selectedTags.includes(tag)} onChange={() => toggleTag(tag)} className="accent-teal w-3.5 h-3.5" />
                            <span className="flex-1">{tagLabel(tag)}</span>
                            <span className="text-xs text-ink-2">{count}</span>
                          </label>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Province — search-style */}
            <div ref={provRef} className="relative">
              <button
                aria-expanded={provOpen}
                onClick={() => { setProvOpen(!provOpen); setTypeOpen(false); setExpOpen(false); setCatOpen(false); setTagOpen(false) }}
                className={triggerClass(province !== "")}
              >
                {province ? formatSlug(province) : "Province"}
                <IconChevron open={provOpen} />
              </button>
              {provOpen && (
                <div className="absolute top-full left-0 mt-1 bg-surface border border-line rounded-card z-30 w-56">
                  <div className="p-2 border-b border-line">
                    <input
                      ref={provInputRef}
                      type="text"
                      value={provSearch}
                      onChange={(e) => setProvSearch(e.target.value)}
                      placeholder="Search province…"
                      aria-label="Search province"
                      className="w-full px-2.5 py-1.5 text-sm text-ink placeholder:text-ink-2 bg-surface border border-line rounded-input outline-none focus:border-teal"
                    />
                  </div>
                  <div className="max-h-52 overflow-y-auto py-1">
                    <button
                      onClick={() => selectProvince("")}
                      className={`w-full text-left px-3.5 py-1.5 text-sm hover:bg-paper ${!province ? "font-semibold text-teal" : "text-ink"}`}
                    >
                      All provinces
                    </button>
                    {filteredProvinces.map((p) => (
                      <button
                        key={p}
                        onClick={() => selectProvince(p)}
                        className={`w-full text-left px-3.5 py-1.5 text-sm hover:bg-paper ${province === p ? "font-semibold text-teal" : "text-ink"}`}
                      >
                        {formatSlug(p)}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Clear */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className={`px-2 py-1.5 text-[13px] font-medium text-teal underline underline-offset-4 decoration-1 hover:text-signal-text ${FOCUS}`}
              >
                Clear filters
              </button>
            )}

            {/* Result count — quiet, pushed right */}
            <p className="ml-auto text-xs text-ink-2" aria-live="polite">
              Showing <span className="text-ink font-medium">{visible.length}</span> of{" "}
              <span className="text-ink font-medium">{filtered.length}</span> locations
            </p>
          </div>

        </div>
      </div>

      {/* ── Content ── */}
      <div className="max-w-6xl mx-auto px-6 pt-6 pb-16 md:pt-8">

        {/* No results */}
        {filtered.length === 0 && (
          <div className="text-center py-24">
            <p className="text-xl font-semibold text-ink mb-2" style={SERIF}>No locations found</p>
            <p className="text-ink-2 text-sm mb-6">Try adjusting your filters to see more results.</p>
            <button
              onClick={clearFilters}
              className={`px-5 py-2.5 rounded-button border border-teal text-teal text-sm font-semibold hover:bg-teal hover:text-surface transition-colors ${FOCUS}`}
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Grid */}
        {filtered.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
            {visible.map((loc) => {
              const type = primaryType(loc)
              return (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className={`group flex flex-col bg-surface border border-line rounded-card overflow-hidden hover:border-ink-2 transition-colors ${FOCUS}`}
                >
                  {/* Image: edge to edge, no radius */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-paper">
                    <CardImage src={loc.image} alt={loc.name} />
                  </div>

                  {/* Body */}
                  <div className="p-3 md:p-4">
                    <span className="ui-dot-label mb-1.5">
                      <span className={dotClass(type)} aria-hidden="true" />
                      {typeDisplayLabel(type)}
                    </span>
                    <h2
                      className="text-[15px] md:text-base font-semibold text-ink leading-snug line-clamp-2 mb-1 group-hover:underline underline-offset-2 decoration-1"
                      style={SERIF}
                    >
                      {loc.name}
                    </h2>
                    {loc.provinces.length > 0 && (
                      <p className="text-[10px] text-ink-2 font-medium mb-1.5 uppercase tracking-[0.08em]">
                        {formatSlug(loc.provinces[0])}
                      </p>
                    )}
                    <p className="text-xs text-ink-2 leading-relaxed line-clamp-2">
                      {loc.subtitle}
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>
        )}

        {/* Load more — teal outline: a catalogue control, not a promo CTA */}
        {hasMore && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={loadMore}
              className={`px-7 py-3 rounded-button border border-teal text-teal text-sm font-semibold bg-surface hover:bg-teal hover:text-surface transition-colors ${FOCUS}`}
            >
              Load more
              <span className="ml-2 text-xs font-normal opacity-80">({filtered.length - visibleCount} remaining)</span>
            </button>
          </div>
        )}
      </div>
    </main>
  )
}
