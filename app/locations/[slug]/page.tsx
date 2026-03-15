"use client"

import Link from "next/link"
import { useState, use } from "react"
import { Location, locationTheme } from "@/data/location"
import { baiTuLongBay } from "@/data/locations/bai-tu-long-bay"
import { bichDongPagoda } from "@/data/locations/bich-dong-pagoda"
import { catCatVillage } from "@/data/locations/cat-cat-village"
import { dongVanOldTown } from "@/data/locations/dong-van-old-town"
import { fansipan } from "@/data/locations/fansipan"
import { haLongBay } from "@/data/locations/ha-long-bay"
import { hamNinhFishingVillage } from "@/data/locations/ham-ninh-fishing-village"
import { hangMua } from "@/data/locations/hang-mua"
import { honThomCableCar } from "@/data/locations/hon-thom-cable-car"
import { hoQuocPagoda } from "@/data/locations/ho-quoc-pagoda"
import { khemBeach } from "@/data/locations/khem-beach"
import { loLoChaiVillage } from "@/data/locations/lo-lo-chai-village"
import { lungCuFlagTower } from "@/data/locations/lung-cu-flag-tower"
import { maPiLengPass } from "@/data/locations/ma-pi-leng-pass"
import { muongHoaValley } from "@/data/locations/muong-hoa-valley"
import { nhoQueRiver } from "@/data/locations/nho-que-river"
import { phuQuocNightMarket } from "@/data/locations/phu-quoc-night-market"
import { saoBeach } from "@/data/locations/sao-beach"
import { sungSotCave } from "@/data/locations/sung-sot-cave"
import { tamCoc } from "@/data/locations/tam-coc"
import { taVanVillage } from "@/data/locations/ta-van-village"
import { thamMaPass } from "@/data/locations/tham-ma-pass"
import { tiTopIsland } from "@/data/locations/ti-top-island"
import { trangAn } from "@/data/locations/trang-an"
import "./location.css"

const allLocations: Location[] = [
  baiTuLongBay,
  bichDongPagoda,
  catCatVillage,
  dongVanOldTown,
  fansipan,
  haLongBay,
  hamNinhFishingVillage,
  hangMua,
  honThomCableCar, //da co image
  hoQuocPagoda,
  khemBeach,
  loLoChaiVillage, //da co image
  lungCuFlagTower,
  maPiLengPass, //da co image
  muongHoaValley,
  nhoQueRiver,
  phuQuocNightMarket,
  saoBeach, //da co image
  sungSotCave,
  tamCoc,
  taVanVillage,
  thamMaPass,
  tiTopIsland,
  trangAn,
]

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "gallery", label: "Gallery" },
  { id: "how-to-get-there", label: "How to Get There" },
  { id: "what-to-expect", label: "What to Expect" },
  { id: "travel-tips", label: "Travel Tips" },
  { id: "insider-tips", label: "Insider Tips" },
]
function toDecimal(val: number | string): number {
  if (typeof val === "number") return val
  const match = val.match(/(\d+)°(\d+)'([\d.]+)"([NSEW])/)
  if (!match) return parseFloat(val)
  const [, d, m, s, dir] = match
  const decimal = Number(d) + Number(m) / 60 + Number(s) / 3600
  return dir === "S" || dir === "W" ? -decimal : decimal
}
export default function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)   // ← đổi từ params.slug
  const location = allLocations.find((l) => l.slug === slug)
  if (!location) return null

  const theme = locationTheme[location.type] ?? "gray"
  const [activeTab, setActiveTab] = useState("overview")

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
    setActiveTab(id)
  }

  return (
    <div className={`lp theme-${theme}`}>

      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <Link href="/">Home</Link>
        <span className="sep">›</span>
        <Link href={`/destinations/${location.destination}`}>
          {location.destination.replace(/-/g, " ")}
        </Link>
        <span className="sep">›</span>
        <span className="current">{location.name}</span>
      </nav>

      {/* Hero */}
      <header
        className="hero"
        style={location.heroImage ? {
          backgroundImage: `url(${location.heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        } : {}}
      >
        {location.heroImage && (
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.3) 100%)"
          }} />
        )}
        <div className="hero-inner">
          <div className="hero-badge">
            📍 {location.type} · {location.destination.replace(/-/g, " ")}
          </div>
          <h1>{location.name}</h1>
          <p className="hero-seo">{location.seoDescription}</p>
          <div className="hero-tags">
            {location.tags.map((t) => (
              <span key={t} className="hero-tag">{t}</span>
            ))}
          </div>
        </div>
      </header>

      {/* Map */}
      <div className="map-wrap">
        <iframe
          src={`https://maps.google.com/maps?q=${toDecimal(location.lat)},${toDecimal(location.lng)}&z=15&output=embed`}
          allowFullScreen
          loading="lazy"
        />
      </div>

      {/* Tabs */}
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

      <main className="content-wrap">

        {/* Overview */}
        <div id="overview" className="section-anchor">
          <p className="section-label">Overview</p>
          <div className="overview-grid">
            <div className="overview-card">
              <div className="oc-label">Best Time to Visit</div>
              <div className="oc-val">📅 {location.bestTime}</div>
            </div>
            {location.entranceFee && (
              <div className="overview-card">
                <div className="oc-label">Entry Fee</div>
                <div className="oc-val">🎟️ {location.entranceFee}</div>
              </div>
            )}
            {location.openingHours && (
              <div className="overview-card">
                <div className="oc-label">Opening Hours</div>
                <div className="oc-val">🕐 {location.openingHours}</div>
              </div>
            )}
            <div className="overview-card">
              <div className="oc-label">Address</div>
              <div className="oc-val">📌 {location.address}</div>
            </div>
          </div>
        </div>

          {/* Gallery */}
          <div id="gallery" className="section-anchor">
            <p className="section-label">Gallery</p>
            {location.gallery.length > 0 ? (
              <div className="gallery-grid">
                {location.gallery.map((publicId) => (
                  <img
                    key={publicId}
                    src={`https://res.cloudinary.com/dl5kqhspv/image/upload/w_600,h_450,c_fill,q_auto,f_auto/${publicId}`}
                    alt={location.name}
                    className="gallery-img"
                  />
                ))}
              </div>
            ) : (
              <div className="gallery-grid">
                <div className="gallery-empty">Photos coming soon</div>
              </div>
            )}
          </div>

        {/* How to Get There */}
        <div id="how-to-get-there" className="section-anchor">
          <p className="section-label">How to Get There</p>
          <div className="content-section">
            <h3>🚗 Getting There</h3>
            <p>{location.content.howToGetThere}</p>
          </div>
        </div>

        {/* What to Expect */}
        <div id="what-to-expect" className="section-anchor">
          <p className="section-label">What to Expect</p>
          <div className="content-section">
            <h3>👀 On the Ground</h3>
            <p>{location.content.whatToExpect}</p>
          </div>
        </div>

        {/* Travel Tips */}
        <div id="travel-tips" className="section-anchor">
          <p className="section-label">Travel Tips</p>
          <div className="content-section">
            <h3>🧳 Tips</h3>
            <p>{location.content.travelTips}</p>
          </div>
        </div>

        {/* Insider Tips */}
        {location.tips.length > 0 && (
          <div id="insider-tips" className="section-anchor">
            <p className="section-label">Insider Tips</p>
            <div className="tips-list">
              {location.tips.map((tip, i) => (
                <div key={i} className="tip-item">
                  <div className="tip-dot" />
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="bottom-cta">
          <div>
            <div className="cta-label">Explore more</div>
            <div className="cta-title">
              {location.destination.replace(/-/g, " ")} — Full Guide
            </div>
          </div>
          <Link href={`/destinations/${location.destination}`}>
            View destination guide →
          </Link>
        </div>

      </main>
    </div>
  )
}