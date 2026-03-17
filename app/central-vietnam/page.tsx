// app/central-vietnam/page.tsx
import Link from "next/link"
import { regions } from "@/data/regions"
import { provinces } from "@/data/provinces"

const TAG_COLORS: Record<string, string> = {
  beach:    "bg-sky-100 text-sky-700",
  nature:   "bg-emerald-100 text-emerald-700",
  island:   "bg-teal-100 text-teal-700",
  history:  "bg-amber-100 text-amber-700",
  culture:  "bg-rose-100 text-rose-700",
  food:     "bg-yellow-100 text-yellow-700",
  wildlife: "bg-lime-100 text-lime-700",
  city:     "bg-zinc-100 text-zinc-700",
  adventure:"bg-orange-100 text-orange-700",
}

export default function RegionPage() {
  const region = regions.central
  const { label, emoji, color, tagline, description, destinations } = region

  // Filter provinces từ data có sẵn — không hardcode lại
  const regionProvinces = provinces.filter(p => p.region === "central")

  return (
    <main className="min-h-screen bg-[#F7F4EF]">

      {/* Hero */}
      <section className="bg-[#1C1C1A] text-white px-6 pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`, backgroundSize: "128px" }}
        />
        <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: color }} />

        <div className="max-w-5xl mx-auto relative">
          <nav className="flex items-center gap-2 text-xs text-[#A09880] mb-8">
            <Link href="/" className="hover:text-[#C9A84C] transition-colors font-medium">Home</Link>
            <span className="text-[#4a4a46]">/</span>
            <Link href="/destinations" className="hover:text-[#C9A84C] transition-colors">Destinations</Link>
            <span className="text-[#4a4a46]">/</span>
            <span className="text-white/60">{label}</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">{emoji}</span>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color }}>
              Solo Travel Guide
            </p>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
            {label}
          </h1>
          <p className="text-[#A09880] text-lg max-w-2xl leading-relaxed mb-2">{tagline}</p>
          <p className="text-[#6b6456] text-sm max-w-2xl leading-relaxed">{description}</p>

          <div className="flex gap-8 mt-10 pt-10 border-t border-white/10">
            <div>
              <div className="text-2xl font-bold">{regionProvinces.length}</div>
              <div className="text-xs text-[#A09880] uppercase tracking-widest mt-0.5">Provinces</div>
            </div>
            <div>
              <div className="text-2xl font-bold">{destinations.length}</div>
              <div className="text-xs text-[#A09880] uppercase tracking-widest mt-0.5">Destinations</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-20">

        {/* Destinations */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-2xl font-bold text-[#1C1C1A]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
              Destinations
            </h2>
            <span className="text-sm text-[#A09880]">{destinations.length} places</span>
            <div className="flex-1 h-px bg-[#E0D9CF] ml-2" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {destinations.map((dest) => dest.hasGuide ? (
              <Link key={dest.slug} href={`/destinations/${dest.slug}`}
                className="group block bg-white rounded-2xl border border-[#E8E2D9] hover:border-[#C9A84C] hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="h-1 w-full" style={{ backgroundColor: color, opacity: 0.7 }} />
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#1C1C1A] mb-1 group-hover:text-[#C9A84C] transition-colors"
                    style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>{dest.name}</h3>
                  <p className="text-[11px] text-[#A09880] mb-2">{dest.province}</p>
                  <p className="text-[12px] text-[#7a7060] italic leading-relaxed mb-4">{dest.tagline}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {dest.tags.map(tag => (
                      <span key={tag} className={`text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full ${TAG_COLORS[tag] ?? "bg-gray-100 text-gray-600"}`}>{tag}</span>
                    ))}
                  </div>
                  <div className="text-[11px] font-semibold text-[#C9A84C]">Explore guide →</div>
                </div>
              </Link>
            ) : (
              <div key={dest.slug} className="bg-white rounded-2xl border border-[#E8E2D9] overflow-hidden opacity-75">
                <div className="h-1 w-full bg-[#E0D9CF]" />
                <div className="p-5">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-lg font-bold text-[#1C1C1A]"
                      style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>{dest.name}</h3>
                    <span className="text-[10px] font-semibold uppercase tracking-widest bg-[#F0EBE3] text-[#A09880] px-2 py-0.5 rounded-full shrink-0 ml-2">Soon</span>
                  </div>
                  <p className="text-[11px] text-[#A09880] mb-2">{dest.province}</p>
                  <p className="text-[12px] text-[#9a9080] italic leading-relaxed mb-4">{dest.tagline}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {dest.tags.map(tag => (
                      <span key={tag} className={`text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full opacity-60 ${TAG_COLORS[tag] ?? "bg-gray-100 text-gray-600"}`}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Provinces — filter trực tiếp từ provinces.ts */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-2xl font-bold text-[#1C1C1A]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
              Provinces
            </h2>
            <span className="text-sm text-[#A09880]">{regionProvinces.length} provinces</span>
            <div className="flex-1 h-px bg-[#E0D9CF] ml-2" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {regionProvinces.map((prov) => (
              <Link key={prov.slug} href={`/provinces/${prov.slug}`}
                className="group flex items-start gap-4 bg-white rounded-xl border border-[#E8E2D9] hover:border-[#C9A84C] hover:shadow-md transition-all duration-200 p-4">
                <div className="w-2 h-2 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: color }} />
                <div className="min-w-0">
                  <div className="font-semibold text-[#1C1C1A] text-sm group-hover:text-[#C9A84C] transition-colors truncate"
                    style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>{prov.name}</div>
                  <div className="text-[11px] text-[#A09880] mt-0.5 truncate">{prov.knownFor}</div>
                </div>
                <span className="text-[#D0C9BE] group-hover:text-[#C9A84C] transition-colors ml-auto shrink-0 text-sm">→</span>
              </Link>
            ))}
          </div>
        </section>

      </div>

    {/* CTA */}
      <section className="bg-[#1C1C1A] text-white py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-2" style={{ color }}>Explore the map</p>
            <h2 className="text-3xl font-bold" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
              Browse 100+ locations
            </h2>
            <p className="text-[#A09880] mt-2 text-sm">Filter by experience — beaches, trekking, caves, food, and more.</p>
          </div>
          <Link href="/map"
            className="shrink-0 text-[#1C1C1A] font-semibold text-sm px-7 py-3.5 rounded-full transition-colors"
            style={{ backgroundColor: color }}>
            Open interactive map →
          </Link>
        </div>
      </section>

    </main>
  )
}