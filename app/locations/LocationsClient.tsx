"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import { Location, LocationType, locationTheme } from "@/data/location"

// ─── Region types & mapping ───────────────────────────────────────────────────

type Region = "north" | "central" | "south" | "mekong" | "highlands"

const REGIONS: { value: Region; label: string }[] = [
  { value: "north",     label: "North" },
  { value: "central",   label: "Central" },
  { value: "south",     label: "South" },
  { value: "mekong",    label: "Mekong" },
  { value: "highlands", label: "Highlands" },
]

const PROVINCE_TO_REGION: Record<string, Region> = {
  // North
  "ha-noi": "north", "hai-phong": "north", "quang-ninh": "north",
  "bac-ninh": "north", "bac-giang": "north", "bac-kan": "north",
  "cao-bang": "north", "dien-bien": "north", "ha-giang": "north",
  "hai-duong": "north", "hung-yen": "north", "hoa-binh": "north",
  "lai-chau": "north", "lang-son": "north", "lao-cai": "north",
  "nam-dinh": "north", "ninh-binh": "north", "phu-tho": "north",
  "son-la": "north", "thai-binh": "north", "thai-nguyen": "north",
  "tuyen-quang": "north", "vinh-phuc": "north", "yen-bai": "north",
  "ha-nam": "north",
  // Central (North Central + South Central coast)
  "thanh-hoa": "central", "nghe-an": "central", "ha-tinh": "central",
  "quang-binh": "central", "quang-tri": "central", "thua-thien-hue": "central",
  "da-nang": "central", "quang-nam": "central", "quang-ngai": "central",
  "binh-dinh": "central", "phu-yen": "central", "khanh-hoa": "central",
  "ninh-thuan": "central", "binh-thuan": "central",
  // Highlands
  "kon-tum": "highlands", "gia-lai": "highlands",
  "dak-lak": "highlands", "dak-nong": "highlands", "lam-dong": "highlands",
  // South (mainland)
  "ho-chi-minh-city": "south", "ba-ria-vung-tau": "south", "vung-tau": "south",
  "binh-duong": "south", "binh-phuoc": "south", "dong-nai": "south",
  "tay-ninh": "south",
  // Mekong Delta
  "long-an": "mekong", "an-giang": "mekong", "bac-lieu": "mekong",
  "ben-tre": "mekong", "ca-mau": "mekong", "can-tho": "mekong",
  "dong-thap": "mekong", "hau-giang": "mekong", "kien-giang": "mekong",
  "tien-giang": "mekong", "tra-vinh": "mekong", "soc-trang": "mekong",
  "vinh-long": "mekong",
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const PAGE_SIZE = 24
const DEFAULT_IMAGE = "/images/coming-soon.jpg"

function getTypes(loc: Location): string[] {
  return Array.isArray(loc.type) ? loc.type : [loc.type]
}

function primaryType(loc: Location): LocationType {
  return Array.isArray(loc.type) ? loc.type[0] : loc.type
}

function themeColors(loc: Location): string {
  const theme = locationTheme[primaryType(loc)]
  const map: Record<string, string> = {
    blue: "bg-sky-100 text-sky-700",
    green: "bg-emerald-100 text-emerald-700",
    amber: "bg-amber-100 text-amber-700",
    purple: "bg-purple-100 text-purple-700",
    gray: "bg-gray-100 text-gray-700",
  }
  return map[theme] ?? "bg-gray-100 text-gray-700"
}

function cardImageUrl(heroImage: string | undefined): string {
  if (!heroImage || heroImage.includes("placeholder")) return DEFAULT_IMAGE
  return heroImage.replace("w_1200,h_630,c_fill", "w_600,h_400,c_fill")
}

function formatSlug(slug: string): string {
  return slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
}

function formatType(type: string): string {
  const s = type.replace(/-/g, " ")
  return s.charAt(0).toUpperCase() + s.slice(1)
}

function truncate(str: string, max: number): string {
  return str.length > max ? str.slice(0, max - 1) + "…" : str
}

function getLocationRegion(loc: Location): Region | null {
  for (const p of loc.provinces) {
    const r = PROVINCE_TO_REGION[p]
    if (r) return r
  }
  return null
}

function parseUrlState() {
  if (typeof window === "undefined") return null
  const p = new URLSearchParams(window.location.search)
  return {
    region: p.get("region") as Region | null,
    types: p.getAll("type"),
    experiences: p.getAll("experience"),
    province: p.get("province") ?? "",
    page: Math.max(1, parseInt(p.get("page") ?? "1", 10)),
  }
}

function buildSearch(
  region: Region | null,
  types: string[],
  experiences: string[],
  province: string,
  page: number
): string {
  const p = new URLSearchParams()
  if (region) p.set("region", region)
  types.forEach((t) => p.append("type", t))
  experiences.forEach((e) => p.append("experience", e))
  if (province) p.set("province", province)
  if (page > 1) p.set("page", String(page))
  const s = p.toString()
  return s ? `?${s}` : ""
}

// ─── Component ────────────────────────────────────────────────────────────────

interface Props {
  locations: Location[]
  initialProvince?: string
}

export default function LocationsClient({ locations, initialProvince }: Props) {
  const [region, setRegion] = useState<Region | null>(null)
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [selectedExperiences, setSelectedExperiences] = useState<string[]>([])
  const [province, setProvince] = useState(initialProvince ?? "")
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  // Sync from URL after mount (avoids SSR/client hydration mismatch)
  useEffect(() => {
    const init = parseUrlState()
    if (!init) return
    if (init.region) setRegion(init.region)
    if (init.types.length) setSelectedTypes(init.types)
    if (init.experiences.length) setSelectedExperiences(init.experiences)
    if (init.province) setProvince(init.province)
    if (init.page > 1) setVisibleCount(init.page * PAGE_SIZE)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [typeOpen, setTypeOpen] = useState(false)
  const [expOpen, setExpOpen] = useState(false)
  const [provOpen, setProvOpen] = useState(false)
  const [provSearch, setProvSearch] = useState("")

  const typeRef = useRef<HTMLDivElement>(null)
  const expRef = useRef<HTMLDivElement>(null)
  const provRef = useRef<HTMLDivElement>(null)
  const provInputRef = useRef<HTMLInputElement>(null)

  const allTypes = useMemo(() => {
    const set = new Set<string>()
    locations.forEach((l) => getTypes(l).forEach((t) => set.add(t)))
    return Array.from(set).sort()
  }, [locations])

  const allExperiences = useMemo(() => {
    const set = new Set<string>()
    locations.forEach((l) => l.experiences.forEach((e) => set.add(e)))
    return Array.from(set).sort()
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

  const filtered = useMemo(() => {
    return locations.filter((loc) => {
      if (region !== null) {
        if (getLocationRegion(loc) !== region) return false
      }
      if (selectedTypes.length > 0) {
        if (!selectedTypes.some((t) => getTypes(loc).includes(t))) return false
      }
      if (selectedExperiences.length > 0) {
        if (!selectedExperiences.some((e) => loc.experiences.includes(e))) return false
      }
      if (province) {
        if (!loc.provinces.includes(province)) return false
      }
      return true
    })
  }, [locations, region, selectedTypes, selectedExperiences, province])

  const visible = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length
  const currentPage = Math.ceil(visibleCount / PAGE_SIZE)

  useEffect(() => {
    const search = buildSearch(region, selectedTypes, selectedExperiences, province, 1)
    history.replaceState(null, "", `/locations${search}`)
  }, [region, selectedTypes, selectedExperiences, province])

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

  function selectProvince(p: string) {
    setProvince(p)
    setProvOpen(false)
    setProvSearch("")
    setVisibleCount(PAGE_SIZE)
  }

  function clearFilters() {
    setRegion(null)
    setSelectedTypes([])
    setSelectedExperiences([])
    setProvince("")
    setVisibleCount(PAGE_SIZE)
  }

  function loadMore() {
    const nextPage = currentPage + 1
    setVisibleCount(nextPage * PAGE_SIZE)
    history.pushState(null, "", `/locations${buildSearch(region, selectedTypes, selectedExperiences, province, nextPage)}`)
  }

  const hasActiveFilters = region !== null || selectedTypes.length > 0 || selectedExperiences.length > 0 || province !== ""

  return (
    <main className="min-h-screen bg-[#F7F4EF]">

      {/* ── Header ── */}
      <section className="bg-[#1C1C1A] text-white px-6 pt-20 pb-10">
        <div className="max-w-6xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-[#A09880] mb-8">
            <Link href="/" className="hover:text-[#C9A84C] transition-colors font-medium">Home</Link>
            <span className="text-[#4a4a46]">/</span>
            <span className="text-white/60">Locations</span>
          </nav>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A84C] mb-3">
            Solo Travel Guide
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold leading-tight mb-3"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Locations in Vietnam
          </h1>
          <p className="text-[#A09880] text-base">
            Browse {locations.length}+ locations across Vietnam
          </p>
        </div>
      </section>

      {/* ── Filter bar ── */}
      <div className="sticky top-0 z-20 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-6">

          {/* Row 1 — Region chips */}
          <div className="flex items-center gap-1.5 pt-3 pb-2 border-b border-gray-100 flex-wrap">
            {REGIONS.map((r) => (
              <button
                key={r.value}
                onClick={() => toggleRegion(r.value)}
                className={`px-3.5 py-1 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${
                  region === r.value
                    ? "bg-[#1C1C1A] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>

          {/* Row 2 — Dropdowns + result count */}
          <div className="flex items-center gap-3 py-2 flex-wrap">

            {/* Type */}
            <div ref={typeRef} className="relative">
              <button
                onClick={() => { setTypeOpen(!typeOpen); setExpOpen(false); setProvOpen(false) }}
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  selectedTypes.length > 0 ? "text-[#1C1C1A]" : "text-gray-500 hover:text-gray-800"
                }`}
              >
                Type{selectedTypes.length > 0 ? ` (${selectedTypes.length})` : ""}
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {typeOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-30 min-w-[180px] max-h-64 overflow-y-auto py-1">
                  {allTypes.map((t) => (
                    <label key={t} className="flex items-center gap-2 px-3 py-1.5 hover:bg-gray-50 cursor-pointer text-sm">
                      <input type="checkbox" checked={selectedTypes.includes(t)} onChange={() => toggleType(t)} className="accent-[#1C1C1A]" />
                      {formatType(t)}
                    </label>
                  ))}
                </div>
              )}
            </div>

            <span className="text-gray-200 text-lg leading-none select-none">|</span>

            {/* Experience */}
            <div ref={expRef} className="relative">
              <button
                onClick={() => { setExpOpen(!expOpen); setTypeOpen(false); setProvOpen(false) }}
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  selectedExperiences.length > 0 ? "text-[#1C1C1A]" : "text-gray-500 hover:text-gray-800"
                }`}
              >
                Experience{selectedExperiences.length > 0 ? ` (${selectedExperiences.length})` : ""}
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-30 min-w-[210px] max-h-64 overflow-y-auto py-1">
                  {allExperiences.map((e) => (
                    <label key={e} className="flex items-center gap-2 px-3 py-1.5 hover:bg-gray-50 cursor-pointer text-sm">
                      <input type="checkbox" checked={selectedExperiences.includes(e)} onChange={() => toggleExperience(e)} className="accent-[#1C1C1A]" />
                      {formatType(e)}
                    </label>
                  ))}
                </div>
              )}
            </div>

            <span className="text-gray-200 text-lg leading-none select-none">|</span>

            {/* Province — search-style */}
            <div ref={provRef} className="relative">
              <button
                onClick={() => { setProvOpen(!provOpen); setTypeOpen(false); setExpOpen(false) }}
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                  province ? "text-[#1C1C1A]" : "text-gray-500 hover:text-gray-800"
                }`}
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                </svg>
                {province ? formatSlug(province) : "Province"}
              </button>
              {provOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-30 w-56">
                  <div className="p-2 border-b border-gray-100">
                    <input
                      ref={provInputRef}
                      type="text"
                      value={provSearch}
                      onChange={(e) => setProvSearch(e.target.value)}
                      placeholder="Search province…"
                      className="w-full px-2 py-1.5 text-sm border border-gray-200 rounded outline-none focus:border-gray-400"
                    />
                  </div>
                  <div className="max-h-52 overflow-y-auto py-1">
                    <button
                      onClick={() => selectProvince("")}
                      className={`w-full text-left px-3 py-1.5 text-sm hover:bg-gray-50 ${!province ? "font-medium text-[#1C1C1A]" : "text-gray-600"}`}
                    >
                      All provinces
                    </button>
                    {filteredProvinces.map((p) => (
                      <button
                        key={p}
                        onClick={() => selectProvince(p)}
                        className={`w-full text-left px-3 py-1.5 text-sm hover:bg-gray-50 ${province === p ? "font-medium text-[#1C1C1A]" : "text-gray-600"}`}
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
              <>
                <span className="text-gray-200 text-lg leading-none select-none">|</span>
                <button
                  onClick={clearFilters}
                  className="text-xs text-gray-400 hover:text-gray-700 transition-colors"
                >
                  Clear
                </button>
              </>
            )}

            {/* Result count — pushed right */}
            <p className="ml-auto text-xs text-gray-400">
              Showing <span className="text-gray-700 font-medium">{visible.length}</span> of{" "}
              <span className="text-gray-700 font-medium">{filtered.length}</span> locations
            </p>
          </div>

        </div>
      </div>

      {/* ── Content ── */}
      <div className="max-w-6xl mx-auto px-6 py-8">

        {/* No results */}
        {filtered.length === 0 && (
          <div className="text-center py-24">
            <p className="text-4xl mb-4">🗺️</p>
            <p className="text-lg font-medium text-gray-800 mb-2">No locations found</p>
            <p className="text-gray-500 text-sm mb-6">Try adjusting your filters to see more results.</p>
            <button
              onClick={clearFilters}
              className="px-5 py-2 bg-[#1C1C1A] text-white rounded-full text-sm font-medium hover:bg-black transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Grid */}
        {filtered.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {visible.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-gray-200 hover:-translate-y-0.5"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={cardImageUrl(loc.heroImage)}
                    alt={loc.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement
                      img.onerror = null
                      img.src = DEFAULT_IMAGE
                    }}
                  />
                  {/* Type badge */}
                  <span className={`absolute top-2 right-2 text-[10px] font-semibold px-2 py-0.5 rounded-full ${themeColors(loc)}`}>
                    {formatType(primaryType(loc))}
                  </span>
                </div>

                {/* Body */}
                <div className="p-3">
                  <h2
                    className="text-sm font-semibold text-gray-900 leading-snug line-clamp-2 mb-1"
                    style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                  >
                    {loc.name}
                  </h2>
                  {loc.provinces.length > 0 && (
                    <p className="text-[10px] text-gray-400 font-medium mb-1.5 uppercase tracking-wide">
                      {formatSlug(loc.provinces[0])}
                    </p>
                  )}
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                    {truncate(loc.seoDescription, 90)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Load more */}
        {hasMore && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={loadMore}
              className="px-8 py-3 bg-[#1C1C1A] text-white rounded-full text-sm font-medium hover:bg-black transition-colors"
            >
              Load more
              <span className="ml-2 text-white/50 text-xs">({filtered.length - visibleCount} remaining)</span>
            </button>
          </div>
        )}
      </div>
    </main>
  )
}
