"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { useRouter } from "next/navigation"
import Fuse from "fuse.js"
import "./search-modal.css"

// ─── Types ────────────────────────────────────────────────────────────────────

type SearchItem = {
  type: "location" | "destination" | "province" | "blog"
  slug: string
  name: string
  nameAscii: string
  url: string
  description: string
  province?: string
  region?: string
  tags: string[]
  heroImage?: string
  category?: string
}

type Props = {
  open: boolean
  onClose: () => void
}

// ─── Config ───────────────────────────────────────────────────────────────────

const TYPE_CONFIG: Record<string, { label: string; cls: string; fallback: string }> = {
  location:    { label: "Location",    cls: "sm-badge--location",    fallback: "🏞️" },
  destination: { label: "Destination", cls: "sm-badge--destination", fallback: "🗺️" },
  province:    { label: "Province",    cls: "sm-badge--province",    fallback: "📍" },
  blog:        { label: "Blog",        cls: "sm-badge--blog",        fallback: "✍️" },
}

// ─── Utils ────────────────────────────────────────────────────────────────────

/**
 * Rewrite any Cloudinary URL to a small 96×96 thumbnail.
 */
function toThumb(url: string | undefined): string | undefined {
  if (!url) return undefined
  return url.replace(
    /\/image\/upload\/[^/]+\//,
    "/image/upload/w_96,h_96,c_fill,q_auto,f_auto/"
  )
}

/**
 * Highlight matched character ranges in a string.
 * Only highlights if indices are contiguous (avoids weird fuzzy highlights).
 */
function highlightName(
  name: string,
  indices: readonly [number, number][]
): React.ReactNode {
  if (!indices.length) return name

  const parts: React.ReactNode[] = []
  let last = 0

  for (const [start, end] of indices) {
    if (start > last) parts.push(name.slice(last, start))
    parts.push(
      <mark key={start} className="sm-highlight">
        {name.slice(start, end + 1)}
      </mark>
    )
    last = end + 1
  }

  if (last < name.length) parts.push(name.slice(last))
  return parts
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function SearchModal({ open, onClose }: Props) {
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchItem[]>([])
  const [activeIdx, setActiveIdx] = useState(0)
  const [fuse, setFuse] = useState<Fuse<SearchItem> | null>(null)
  const [loading, setLoading] = useState(false)
  const [matchMap, setMatchMap] = useState<Map<string, readonly [number, number][]>>(new Map())

  // ── Load index lazily on first open ───────────────────────────────────────
  useEffect(() => {
    if (!open || fuse) return
    setLoading(true)
    fetch("/search-index.json")
      .then((r) => r.json())
      .then((data: SearchItem[]) => {
        setFuse(
          new Fuse(data, {
            keys: ["name", "nameAscii", "description", "tags"],
            threshold: 0.3,
            ignoreLocation: true,
            includeMatches: true,
          })
        )
        setLoading(false)
      })
  }, [open, fuse])

  // ── Manage body scroll + auto-focus ───────────────────────────────────────
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
      const t = setTimeout(() => inputRef.current?.focus(), 50)
      return () => clearTimeout(t)
    } else {
      document.body.style.overflow = ""
      setQuery("")
      setResults([])
      setActiveIdx(0)
      setMatchMap(new Map())
    }
    return () => { document.body.style.overflow = "" }
  }, [open])

  // ── Run search on every keystroke ─────────────────────────────────────────
  useEffect(() => {
    if (!fuse || !query.trim()) {
      setResults([])
      setActiveIdx(0)
      setMatchMap(new Map())
      return
    }

    const rawHits = fuse.search(query, { limit: 8 })
    const hits = rawHits.map((r) => r.item)
    const newMatchMap = new Map(
      rawHits.map((r) => [
        `${r.item.type}-${r.item.slug}`,
        r.matches?.find((m) => m.key === "name")?.indices ?? [],
      ])
    )

    setResults(hits)
    setMatchMap(newMatchMap)
    setActiveIdx(0)
  }, [query, fuse])

  // ── Keyboard navigation ───────────────────────────────────────────────────
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose()
          break
        case "ArrowDown":
          e.preventDefault()
          setActiveIdx((i) => Math.min(i + 1, results.length - 1))
          break
        case "ArrowUp":
          e.preventDefault()
          setActiveIdx((i) => Math.max(i - 1, 0))
          break
        case "Enter":
          if (results[activeIdx]) navigate(results[activeIdx])
          break
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, results, activeIdx])

  // ── Scroll active item into view ──────────────────────────────────────────
  useEffect(() => {
    const el = listRef.current?.children[activeIdx] as HTMLElement | undefined
    el?.scrollIntoView({ block: "nearest" })
  }, [activeIdx])

  const navigate = useCallback(
    (item: SearchItem) => {
      router.push(item.url)
      onClose()
    },
    [router, onClose]
  )

  if (!open) return null

  return (
    <div
      className="sm-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Site search"
    >
      {/* Stop backdrop click from closing when clicking inside */}
      <div className="sm-modal" onClick={(e) => e.stopPropagation()}>

        {/* ── Input ── */}
        <div className="sm-input-row">
          <svg className="sm-input-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="1.6" />
            <path d="M13 13l3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>

          <input
            ref={inputRef}
            className="sm-input"
            placeholder="Search locations, destinations, guides…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            aria-label="Search"
            aria-autocomplete="list"
            aria-controls="sm-results-list"
          />

          <button
            className="sm-close-btn"
            onClick={onClose}
            aria-label="Close search"
          >
            <svg viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* ── Body ── */}
        <div className="sm-body">
          {loading && (
            <div className="sm-empty">Loading…</div>
          )}

          {!loading && !query && (
            <div className="sm-empty">
              <span className="sm-empty-icon">🗺️</span>
              <span>Start typing to search locations, destinations, blog posts…</span>
              <span className="sm-empty-hint">Try "Hoi An", "Ha Giang", "trekking", or "safety"</span>
            </div>
          )}

          {!loading && query && results.length === 0 && (
            <div className="sm-empty">
              No results for <strong>"{query}"</strong>
            </div>
          )}

          {results.length > 0 && (
            <ul
              id="sm-results-list"
              ref={listRef}
              className="sm-results"
              role="listbox"
              aria-label="Search results"
            >
              {results.map((item, i) => {
                const cfg = TYPE_CONFIG[item.type] ?? TYPE_CONFIG.location
                const thumb = toThumb(item.heroImage)
                const meta = item.province
                  ? item.province.replace(/-/g, " ")
                  : item.region ?? ""
                const key = `${item.type}-${item.slug}`

                return (
                  <li
                    key={key}
                    id={`sm-result-${i}`}
                    className={`sm-result${i === activeIdx ? " selected" : ""}`}
                    onMouseEnter={() => setActiveIdx(i)}
                    onClick={() => navigate(item)}
                    role="option"
                    aria-selected={i === activeIdx}
                  >
                    {/* Thumbnail */}
                    <div className="sm-thumb">
                      {thumb ? (
                        <img
                          src={thumb}
                          alt=""
                          loading="lazy"
                          onError={(e) => {
                            const img = e.target as HTMLImageElement
                            if (!img.src.includes("coming-soon.jpg")) {
                              img.src = "/images/coming-soon.jpg"
                            }
                          }}
                        />
                      ) : (
                        <span className="sm-thumb-fallback">{cfg.fallback}</span>
                      )}
                    </div>

                    {/* Name + meta */}
                    <div className="sm-result-text">
                      <div className="sm-result-name">
                        {highlightName(item.name, matchMap.get(key) ?? [])}
                      </div>
                      {meta && <div className="sm-result-meta">{meta}</div>}
                    </div>

                    {/* Type badge */}
                    <span className={`sm-badge ${cfg.cls}`}>{cfg.label}</span>
                  </li>
                )
              })}
            </ul>
          )}
        </div>

      </div>
    </div>
  )
}
