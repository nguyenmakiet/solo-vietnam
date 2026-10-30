"use client"

// Filter controls shared by /locations (app/locations/LocationsClient.tsx) and
// the experience pages (app/experiences/[slug]/ExperienceFilters.tsx): the
// Region and Best time chip rows, the Province search dropdown, their styles
// and the region / province / month match. One source, so both pages filter
// the same way.

import { useEffect, useRef, useState } from "react"

// ─── Region & months ─────────────────────────────────────────────────────────

export type Region = "north" | "central" | "south"

export const REGIONS: { value: Region; label: string }[] = [
  { value: "north",   label: "North" },
  { value: "central", label: "Central" },
  { value: "south",   label: "South" },
]

export const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

// Old `?region=` values from before the 3-region split.
const LEGACY_REGION_ALIASES: Record<string, Region> = {
  mekong: "south",
  highlands: "central",
}

export function parseRegion(value: string | null): Region | null {
  if (!value) return null
  if (REGIONS.some((r) => r.value === value)) return value as Region
  return LEGACY_REGION_ALIASES[value] ?? null
}

export function parseMonths(values: string[]): number[] {
  return values.map((m) => parseInt(m, 10)).filter(Boolean)
}

export function formatSlug(slug: string): string {
  return slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
}

// The filters both pages share. Any month matches (a location marked for
// Jan or Feb passes a Jan + Feb selection).
export type BaseFilterState = { region: Region | null; province: string; months: number[] }
export type BaseFilterItem = { region: Region | null; provinces: string[]; months: number[] }

export function matchesBaseFilters(item: BaseFilterItem, f: BaseFilterState): boolean {
  if (f.region !== null && item.region !== f.region) return false
  if (f.province && !item.provinces.includes(f.province)) return false
  if (f.months.length > 0 && !f.months.some((m) => item.months.includes(m))) return false
  return true
}

// ─── Styles (design tokens from app/globals.css) ─────────────────────────────

export const FOCUS = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"

// Chip row: free-standing pills with a small gap - no frame, no dividers
export const CHIP_ROW = "flex shrink-0 gap-1"

// Pill inside a chip row; selected = teal-ink fill. Inset focus ring so the
// scrolling month row never clips it.
export function segmentClass(active: boolean) {
  return `px-3 py-1.5 rounded-full text-[13px] font-medium whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-teal ${
    active ? "bg-teal-ink text-paper" : "text-ink hover:bg-line/50"
  }`
}

// Dropdown trigger: borderless text + chevron (stays a real control),
// teal when it has selections
export function triggerClass(hasSelection: boolean) {
  return `flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[13px] font-medium whitespace-nowrap transition-colors ${FOCUS} ${
    hasSelection ? "bg-teal/10 text-teal" : "text-ink hover:bg-line/50"
  }`
}

// Dropdown panel. Side and max height come from panelFit (set when a trigger
// opens) so the panel stays on screen and only scrolls when it must.
export const PANEL_BASE = "absolute top-full mt-1 bg-surface border border-line rounded-card z-30 max-w-[calc(100vw-3rem)]"
export const PANEL = `${PANEL_BASE} overflow-y-auto py-1.5`
export const OPTION = "flex items-center gap-2.5 px-3.5 py-1.5 hover:bg-paper cursor-pointer text-sm text-ink"
export const ROW_LABEL = "w-[76px] md:w-[88px] shrink-0 text-[11px] font-semibold tracking-[0.12em] uppercase text-ink-2 select-none"

export type PanelFit = { right: boolean; maxH: number }

// Open dropdown: anchor to the trigger's right edge when it sits in the right
// half of the screen, and grow down to the bottom of the viewport.
export function fitPanel(trigger: HTMLElement): PanelFit {
  const r = trigger.getBoundingClientRect()
  return {
    right: r.left + r.width / 2 > window.innerWidth / 2,
    maxH: Math.max(240, window.innerHeight - r.bottom - 16),
  }
}

export function IconChevron({ open }: { open: boolean }) {
  return (
    <svg className={`w-3 h-3 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  )
}

// ─── Rows ────────────────────────────────────────────────────────────────────

export function RegionFilterRow({ value, onToggle }: { value: Region | null; onToggle: (r: Region) => void }) {
  return (
    <div className="flex items-center pt-2.5 pb-1.5">
      <span className={ROW_LABEL}>Region</span>
      <div className={CHIP_ROW} role="group" aria-label="Region">
        {REGIONS.map((r) => (
          <button
            key={r.value}
            aria-pressed={value === r.value}
            onClick={() => onToggle(r.value)}
            className={segmentClass(value === r.value)}
          >
            {r.label}
          </button>
        ))}
      </div>
    </div>
  )
}

// Scrolls horizontally on narrow screens
export function MonthFilterRow({ value, onToggle }: { value: number[]; onToggle: (m: number) => void }) {
  return (
    <div className="flex items-center py-1.5 overflow-x-auto scrollbar-none">
      <span className={ROW_LABEL}>Best time</span>
      <div className={CHIP_ROW} role="group" aria-label="Best time to visit">
        {MONTHS.map((label, i) => {
          const m = i + 1
          const active = value.includes(m)
          return (
            <button
              key={m}
              aria-pressed={active}
              onClick={() => onToggle(m)}
              className={segmentClass(active)}
            >
              {label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

// ─── Province dropdown (search-style) ────────────────────────────────────────

interface ProvinceFilterProps {
  provinces: string[]
  value: string
  onChange: (province: string) => void
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProvinceFilter({ provinces, value, onChange, open, onOpenChange }: ProvinceFilterProps) {
  const [search, setSearch] = useState("")
  const [panelFit, setPanelFit] = useState<PanelFit>({ right: false, maxH: 400 })
  const ref = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const filtered = provinces.filter((p) => formatSlug(p).toLowerCase().includes(search.toLowerCase()))

  useEffect(() => {
    if (!open) return
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onOpenChange(false)
        setSearch("")
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [open, onOpenChange])

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  function select(p: string) {
    onChange(p)
    onOpenChange(false)
    setSearch("")
  }

  return (
    <div ref={ref} className="relative">
      <button
        aria-expanded={open}
        onClick={(e) => { setPanelFit(fitPanel(e.currentTarget)); onOpenChange(!open) }}
        className={triggerClass(value !== "")}
      >
        {value ? formatSlug(value) : "Province"}
        <IconChevron open={open} />
      </button>
      {open && (
        <div className={`${PANEL_BASE} w-56 ${panelFit.right ? "right-0" : "left-0"}`}>
          <div className="p-2 border-b border-line">
            <input
              ref={inputRef}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search province…"
              aria-label="Search province"
              className="w-full px-2.5 py-1.5 text-sm text-ink placeholder:text-ink-2 bg-surface border border-line rounded-input outline-none focus:border-teal"
            />
          </div>
          {/* 57px = search box row above */}
          <div className="overflow-y-auto py-1" style={{ maxHeight: panelFit.maxH - 57 }}>
            <button
              onClick={() => select("")}
              className={`w-full text-left px-3.5 py-1.5 text-sm hover:bg-paper ${!value ? "font-semibold text-teal" : "text-ink"}`}
            >
              All provinces
            </button>
            {filtered.map((p) => (
              <button
                key={p}
                onClick={() => select(p)}
                className={`w-full text-left px-3.5 py-1.5 text-sm hover:bg-paper ${value === p ? "font-semibold text-teal" : "text-ink"}`}
              >
                {formatSlug(p)}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
