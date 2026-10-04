"use client"

import { useEffect, useRef, useState } from "react"

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "things-to-know", label: "Things to Know" },
  { id: "gallery", label: "Gallery" },
  { id: "how-to-get-there", label: "How to Get There" },
  { id: "what-to-expect", label: "What to Expect" },
  { id: "travel-tips", label: "Travel Tips" },
  { id: "insider-tips", label: "Insider Tips" },
  { id: "faq", label: "FAQ" },
  { id: "nearby", label: "Nearby locations" },
]

// `available`: section ids that exist on this page; tabs for missing sections are not shown
export default function LocationTabs({ available }: { available?: string[] }) {
  const tabs = available ? TABS.filter((t) => available.includes(t.id)) : TABS
  const [activeTab, setActiveTab] = useState(tabs[0]?.id ?? "overview")
  const innerRef = useRef<HTMLDivElement>(null)
  const clickLock = useRef(0)

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    // sections carry scroll-margin-top, so they land below the sticky bars
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
    clickLock.current = Date.now()
    setActiveTab(id)
  }

  // Highlight the section being read while scrolling
  useEffect(() => {
    const els = tabs.map((t) => document.getElementById(t.id)).filter(Boolean) as HTMLElement[]
    if (els.length === 0) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (Date.now() - clickLock.current < 900) return // let a clicked jump settle
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActiveTab(visible[0].target.id)
      },
      { rootMargin: "-120px 0px -60% 0px" }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [available?.join(",")])

  // Keep the active tab visible in the horizontally scrolling bar
  useEffect(() => {
    const inner = innerRef.current
    const btn = inner?.querySelector<HTMLElement>(`[data-tab="${activeTab}"]`)
    if (!inner || !btn) return
    const left = btn.offsetLeft - 16
    const right = btn.offsetLeft + btn.offsetWidth + 16 - inner.clientWidth
    if (inner.scrollLeft > left) inner.scrollTo({ left, behavior: "smooth" })
    else if (inner.scrollLeft < right) inner.scrollTo({ left: right, behavior: "smooth" })
  }, [activeTab])

  return (
    <nav className="tabs-wrap" aria-label="On this page">
      <div className="tabs-inner" ref={innerRef}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            data-tab={tab.id}
            aria-current={activeTab === tab.id ? "location" : undefined}
            className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => scrollTo(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  )
}
