"use client"

import { useState } from "react"

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "gallery", label: "Gallery" },
  { id: "how-to-get-there", label: "How to Get There" },
  { id: "what-to-expect", label: "What to Expect" },
  { id: "travel-tips", label: "Travel Tips" },
  { id: "insider-tips", label: "Insider Tips" },
]

export default function LocationTabs() {
  const [activeTab, setActiveTab] = useState("overview")

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
    setActiveTab(id)
  }

  return (
    <div className="tabs-wrap">
      <div className="tabs-inner">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => scrollTo(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  )
}
