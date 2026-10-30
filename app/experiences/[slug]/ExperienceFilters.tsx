"use client"

// Client-side filtering for /experiences/[slug]. The cards, groups and
// headings are rendered on the server; these components only hide what the
// current filter excludes. The first render (server and hydration) has no
// filter, so crawlers and no-JS visitors get the full list. Controls, styles
// and the match itself are the /locations ones (components/LocationFilters).
//
// Filter state lives in the URL (?region=&month=&province=, same names as
// /locations) via replaceState; the canonical stays the bare page URL.

import { createContext, useContext, useEffect, useMemo, useState } from "react"
import Link from "next/link"
import {
  FOCUS, MonthFilterRow, ProvinceFilter, RegionFilterRow,
  matchesBaseFilters, parseMonths, parseRegion,
  type BaseFilterItem, type BaseFilterState, type Region,
} from "@/components/LocationFilters"

type FilterContext = {
  state: BaseFilterState
  active: boolean
  matches: (slug: string) => boolean
  setRegion: (r: Region) => void
  setProvince: (p: string) => void
  toggleMonth: (m: number) => void
  clear: () => void
}

const EMPTY: BaseFilterState = { region: null, province: "", months: [] }
const Ctx = createContext<FilterContext | null>(null)

function useFilters(): FilterContext {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error("Experience filter components must sit inside ExperienceFilterProvider")
  return ctx
}

export function ExperienceFilterProvider({
  items,
  children,
}: {
  items: Record<string, BaseFilterItem>
  children: React.ReactNode
}) {
  const [state, setState] = useState<BaseFilterState>(EMPTY)
  const [urlRead, setUrlRead] = useState(false)

  // Read the URL after hydration, so the server HTML is always the full list
  useEffect(() => {
    function apply() {
      const p = new URLSearchParams(window.location.search)
      setState({
        region: parseRegion(p.get("region")),
        province: p.get("province") ?? "",
        months: parseMonths(p.getAll("month")),
      })
    }
    apply()
    // eslint-disable-next-line react-hooks/set-state-in-effect -- the URL is only readable after hydration
    setUrlRead(true)
    window.addEventListener("popstate", apply)
    return () => window.removeEventListener("popstate", apply)
  }, [])

  useEffect(() => {
    if (!urlRead) return
    const p = new URLSearchParams()
    if (state.region) p.set("region", state.region)
    state.months.forEach((m) => p.append("month", String(m)))
    if (state.province) p.set("province", state.province)
    const s = p.toString()
    const url = `${window.location.pathname}${s ? `?${s}` : ""}${window.location.hash}`
    if (url !== window.location.pathname + window.location.search + window.location.hash) history.replaceState(null, "", url)
  }, [urlRead, state])

  const value = useMemo<FilterContext>(() => {
    const active = state.region !== null || state.province !== "" || state.months.length > 0
    return {
      state,
      active,
      matches: (slug) => !active || (items[slug] ? matchesBaseFilters(items[slug], state) : false),
      setRegion: (r) => setState((s) => ({ ...s, region: s.region === r ? null : r })),
      setProvince: (province) => setState((s) => ({ ...s, province })),
      toggleMonth: (m) => setState((s) => ({ ...s, months: s.months.includes(m) ? s.months.filter((x) => x !== m) : [...s.months, m] })),
      clear: () => setState(EMPTY),
    }
  }, [state, items])

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

// Renders its children while at least one of `slugs` passes the filter.
// Wraps a card (one slug), a type group or a whole region.
export function FilterGate({ slugs, children }: { slugs: string[]; children: React.ReactNode }) {
  const { matches } = useFilters()
  return slugs.some(matches) ? <>{children}</> : null
}

// "12" unfiltered, "3 of 12" while a filter is on
export function FilterCount({ slugs }: { slugs: string[] }) {
  const { matches, active } = useFilters()
  const n = slugs.filter(matches).length
  return <>{active ? `${n} of ${slugs.length}` : slugs.length}</>
}

export function FilterEmpty({ slugs }: { slugs: string[] }) {
  const { matches, clear } = useFilters()
  if (slugs.some(matches)) return null
  return (
    <div className="gp-empty">
      No places match these filters
      <br />
      <button type="button" onClick={clear} className="gp-filter-clear">Clear filters</button>
    </div>
  )
}

export function ExperienceFilterBar({
  provinces,
  slugs,
  mapHref,
}: {
  provinces: string[]
  slugs: string[]
  mapHref: string
}) {
  const { state, active, matches, setRegion, setProvince, toggleMonth, clear } = useFilters()
  const [provOpen, setProvOpen] = useState(false)
  const shown = slugs.filter(matches).length

  return (
    <div className="gp-filters">
      <RegionFilterRow value={state.region} onToggle={setRegion} />
      <MonthFilterRow value={state.months} onToggle={toggleMonth} />
      {/* -ml-3 lines the trigger text up with the row labels above */}
      <div className="flex items-center gap-1 pt-1.5 pb-2.5 -ml-3 flex-wrap">
        <ProvinceFilter
          provinces={provinces}
          value={state.province}
          onChange={setProvince}
          open={provOpen}
          onOpenChange={setProvOpen}
        />
        {active && (
          <button
            onClick={clear}
            className={`px-2 py-1.5 text-[13px] font-medium text-teal underline underline-offset-4 decoration-1 hover:text-signal-text ${FOCUS}`}
          >
            Clear filters
          </button>
        )}
        <p className="ml-auto pl-3 text-[13px] text-ink-2" aria-live="polite">
          Showing <span className="text-ink font-medium">{shown}</span> of{" "}
          <span className="text-ink font-medium">{slugs.length}</span>
        </p>
        <Link href={mapHref} className={`ml-2 px-3 py-1.5 rounded-full border border-teal text-teal text-[13px] font-semibold whitespace-nowrap hover:bg-teal hover:text-surface transition-colors ${FOCUS}`}>
          View on map
        </Link>
      </div>
    </div>
  )
}
