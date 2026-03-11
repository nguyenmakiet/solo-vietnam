// app/destinations/page.tsx
import Link from "next/link"
import { destinations } from "@/data/destinations"

const REGION_LABELS: Record<string, string> = {
  north: "North Vietnam",
  central: "Central Vietnam",
  south: "South Vietnam",
}

const REGION_EMOJI: Record<string, string> = {
  north: "🏔️",
  central: "🌊",
  south: "🌴",
}

const TAG_COLORS: Record<string, string> = {
  beach:    "bg-sky-100 text-sky-700",
  nature:   "bg-emerald-100 text-emerald-700",
  island:   "bg-teal-100 text-teal-700",
  nightlife:"bg-violet-100 text-violet-700",
  history:  "bg-amber-100 text-amber-700",
  culture:  "bg-rose-100 text-rose-700",
  food:     "bg-orange-100 text-orange-700",
  mountain: "bg-slate-100 text-slate-700",
  city:     "bg-zinc-100 text-zinc-700",
}

export default function DestinationsPage() {
  const grouped = destinations.reduce<Record<string, typeof destinations>>(
    (acc, dest) => {
      const r = dest.region
      if (!acc[r]) acc[r] = []
      acc[r].push(dest)
      return acc
    },
    {}
  )

  const regionOrder = ["north", "central", "south"]

  return (
    <main className="min-h-screen bg-[#F7F4EF]">

      {/* ── Hero header ── */}
      <section className="bg-[#1C1C1A] text-white px-6 pt-20 pb-16 relative overflow-hidden">
        {/* Subtle grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: "128px",
          }}
        />
        <div className="max-w-5xl mx-auto relative">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-[#A09880] mb-8">
            <Link href="/" className="hover:text-[#C9A84C] transition-colors font-medium">
              Home
            </Link>
            <span className="text-[#4a4a46]">/</span>
            <span className="text-white/60">Destinations</span>
          </nav>

          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A84C] mb-4">
            Solo Travel Guide
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold leading-tight mb-4"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Destinations
          </h1>
          <p className="text-[#A09880] text-lg max-w-xl leading-relaxed">
            Handpicked places across Vietnam — with honest guides for solo travelers.
          </p>

          {/* Stats row */}
          <div className="flex gap-8 mt-10 pt-10 border-t border-white/10">
            <div>
              <div className="text-2xl font-bold text-white">{destinations.length}</div>
              <div className="text-xs text-[#A09880] uppercase tracking-widest mt-0.5">Destinations</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">63</div>
              <div className="text-xs text-[#A09880] uppercase tracking-widest mt-0.5">Provinces</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">3</div>
              <div className="text-xs text-[#A09880] uppercase tracking-widest mt-0.5">Regions</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Region sections ── */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-20">
        {regionOrder.map((region) => {
          const dests = grouped[region]
          if (!dests?.length) return null

          return (
            <section key={region}>
              {/* Region heading */}
              <div className="flex items-center gap-3 mb-8">
                <span className="text-2xl">{REGION_EMOJI[region]}</span>
                <h2
                  className="text-2xl font-bold text-[#1C1C1A]"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  {REGION_LABELS[region]}
                </h2>
                <span className="ml-2 text-sm text-[#A09880] font-medium">
                  {dests.length} {dests.length === 1 ? "destination" : "destinations"}
                </span>
                <div className="flex-1 h-px bg-[#E0D9CF] ml-4" />
              </div>

              {/* Cards grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {dests.map((dest, i) => (
                  <Link
                    key={dest.slug}
                    href={`/destinations/${dest.slug}`}
                    className="group block bg-white rounded-2xl overflow-hidden border border-[#E8E2D9] hover:border-[#C9A84C] hover:shadow-lg transition-all duration-300"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    {/* Image */}
                    <div className="relative h-44 overflow-hidden bg-[#E8E2D9]">
                      {dest.heroImage ? (
                        <img
                          src={dest.heroImage}
                          alt={dest.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-4xl">
                          {REGION_EMOJI[dest.region]}
                        </div>
                      )}
                      {/* Province badge */}
                      <div className="absolute top-3 left-3">
                        <span className="text-[10px] font-semibold uppercase tracking-widest bg-black/50 text-white/90 px-2.5 py-1 rounded-full backdrop-blur-sm">
                          {dest.province}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <h3
                        className="text-lg font-bold text-[#1C1C1A] mb-1 group-hover:text-[#C9A84C] transition-colors"
                        style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                      >
                        {dest.name}
                      </h3>

                      {dest.tagline && (
                        <p className="text-[12px] text-[#A09880] italic mb-3 leading-relaxed line-clamp-2">
                          {dest.tagline}
                        </p>
                      )}

                      {/* Tags */}
                      {dest.tags?.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {dest.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className={`text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full ${TAG_COLORS[tag] ?? "bg-gray-100 text-gray-600"}`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Meta row */}
                      <div className="flex items-center justify-between pt-3 border-t border-[#F0EBE3]">
                        <div className="flex items-center gap-3 text-[11px] text-[#A09880]">
                          {dest.budgetPerDay && (
                            <span>💰 {dest.budgetPerDay}</span>
                          )}
                          {dest.recommendedStay && (
                            <span>🕐 {dest.recommendedStay}</span>
                          )}
                        </div>
                        <span className="text-[11px] font-semibold text-[#C9A84C] group-hover:translate-x-0.5 transition-transform">
                          Guide →
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )
        })}
      </div>

      {/* ── Browse provinces CTA ── */}
      <section className="bg-[#1C1C1A] text-white py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A84C] mb-2">
              Explore by province
            </p>
            <h2
              className="text-3xl font-bold"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Browse all 63 provinces
            </h2>
            <p className="text-[#A09880] mt-2 text-sm">
              Interactive map with local food, culture, and travel tips.
            </p>
          </div>
          <Link
            href="/provinces"
            className="shrink-0 bg-[#C9A84C] hover:bg-[#b8973d] text-[#1C1C1A] font-semibold text-sm px-7 py-3.5 rounded-full transition-colors"
          >
            View province map →
          </Link>
        </div>
      </section>

    </main>
  )
}