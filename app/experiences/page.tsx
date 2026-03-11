// app/experiences/page.tsx
import Link from "next/link"

const EXPERIENCES = [
  {
    category: "Motorbike Touring",
    emoji: "🏍️",
    items: [
      {
        slug: "motorbike-north-to-south",
        title: "North to South by Motorbike",
        description: "The ultimate Vietnam solo ride — Hanoi to Ho Chi Minh City along the Ho Chi Minh Road and coastal highways.",
        tags: ["motorbike", "epic", "adventure"],
        duration: "3 – 6 weeks",
        difficulty: "Challenging",
        comingSoon: true,
      },
      {
        slug: "ha-giang-loop",
        title: "Ha Giang Loop",
        description: "Vietnam's most dramatic motorbike route through karst mountains, rice terraces, and ethnic minority villages in the far north.",
        tags: ["motorbike", "north", "nature"],
        duration: "4 – 7 days",
        difficulty: "Challenging",
        comingSoon: true,
      },
      {
        slug: "ho-chi-minh-road",
        title: "Ho Chi Minh Road",
        description: "The legendary wartime supply route — now a quiet highland road through jungle, mountain passes, and forgotten villages.",
        tags: ["motorbike", "history", "central"],
        duration: "1 – 2 weeks",
        difficulty: "Moderate",
        comingSoon: true,
      },
      {
        slug: "mekong-delta-motorbike",
        title: "Mekong Delta Loop",
        description: "Flat, easy riding through coconut groves, river ferries, and riverside markets — ideal for first-time motorbike travelers.",
        tags: ["motorbike", "south", "river"],
        duration: "3 – 5 days",
        difficulty: "Easy",
        comingSoon: true,
      },
    ],
  },
  {
    category: "Adventure",
    emoji: "🧗",
    items: [
      {
        slug: "trekking-fansipan",
        title: "Trekking Fansipan",
        description: "Summiting Vietnam's highest peak — the Roof of Indochina — on foot through cloud forest.",
        tags: ["trekking", "mountain", "north"],
        duration: "2 – 3 days",
        difficulty: "Hard",
        comingSoon: true,
      },
    ],
  },
  {
    category: "Culture & History",
    emoji: "🏛️",
    items: [
      {
        slug: "hoi-an-old-town",
        title: "Hoi An Old Town",
        description: "A UNESCO-listed ancient trading port frozen in time — lanterns, tailor shops, and the best banh mi in Vietnam.",
        tags: ["culture", "history", "central"],
        duration: "2 – 3 days",
        difficulty: "Easy",
        comingSoon: true,
      },
      {
        slug: "hue-imperial-city",
        title: "Hue Imperial City",
        description: "Vietnam's last imperial capital — royal tombs, citadel ruins, and a refined cuisine unlike anywhere else.",
        tags: ["history", "culture", "central"],
        duration: "1 – 2 days",
        difficulty: "Easy",
        comingSoon: true,
      },
      {
        slug: "dien-bien-phu-battlefield",
        title: "Dien Bien Phu Battlefield",
        description: "Walk the valley that changed 20th century history — where Vietnamese forces ended French colonialism in Indochina.",
        tags: ["history", "north"],
        duration: "1 day",
        difficulty: "Easy",
        comingSoon: true,
      },
    ],
  },
  {
    category: "Nature & Wildlife",
    emoji: "🌿",
    items: [
      {
        slug: "cat-tien-national-park",
        title: "Cat Tien National Park",
        description: "One of Vietnam's last lowland rainforests — night safaris, gibbons at dawn, and ancient Cham ruins in the jungle.",
        tags: ["nature", "wildlife", "south"],
        duration: "2 – 3 days",
        difficulty: "Moderate",
        comingSoon: true,
      },
      {
        slug: "mekong-delta-boat-tour",
        title: "Mekong Delta by Boat",
        description: "Weaving through canals, floating markets, and coconut groves in the river delta that feeds all of Vietnam.",
        tags: ["nature", "river", "south"],
        duration: "1 – 3 days",
        difficulty: "Easy",
        comingSoon: true,
      },
      {
        slug: "phong-nha-caves",
        title: "Phong Nha Caves",
        description: "The world's largest cave system — from the tourist-friendly Paradise Cave to the jaw-dropping Son Doong.",
        tags: ["nature", "caves", "central"],
        duration: "2 – 4 days",
        difficulty: "Moderate",
        comingSoon: true,
      },
    ],
  },
  {
    category: "Food & Markets",
    emoji: "🍜",
    items: [
      {
        slug: "street-food-hanoi",
        title: "Hanoi Street Food Trail",
        description: "Bun cha, pho, banh cuon, egg coffee — navigating the Old Quarter's best street food stalls like a local.",
        tags: ["food", "city", "north"],
        duration: "1 – 2 days",
        difficulty: "Easy",
        comingSoon: true,
      },
      {
        slug: "floating-markets-mekong",
        title: "Cai Rang Floating Market",
        description: "The Mekong Delta's most iconic market — wholesalers trading fruit and vegetables from wooden boats at dawn.",
        tags: ["food", "culture", "south"],
        duration: "Half day",
        difficulty: "Easy",
        comingSoon: true,
      },
    ],
  },
  {
    category: "Islands & Beaches",
    emoji: "🏖️",
    items: [
      {
        slug: "phu-quoc-island",
        title: "Phu Quoc Island",
        description: "Vietnam's largest island — white sand beaches, fresh seafood, and the world's best fish sauce before it gets over-developed.",
        tags: ["beach", "island", "south"],
        duration: "3 – 5 days",
        difficulty: "Easy",
        comingSoon: true,
      },
      {
        slug: "nam-du-islands",
        title: "Nam Du Islands",
        description: "A remote archipelago off the Kien Giang coast — almost no tourists, crystal water, and hammock-level relaxation.",
        tags: ["island", "beach", "south"],
        duration: "2 – 3 days",
        difficulty: "Easy",
        comingSoon: true,
      },
      {
        slug: "con-dao-islands",
        title: "Con Dao Islands",
        description: "Vietnam's most haunting destination — pristine beaches, sea turtles, and a prison history that shaped modern Vietnam.",
        tags: ["island", "history", "south"],
        duration: "3 – 4 days",
        difficulty: "Easy",
        comingSoon: true,
      },
    ],
  },
]

const TAG_COLORS: Record<string, string> = {
  adventure: "bg-orange-100 text-orange-700",
  motorbike: "bg-red-100 text-red-700",
  nature: "bg-emerald-100 text-emerald-700",
  beach: "bg-sky-100 text-sky-700",
  island: "bg-teal-100 text-teal-700",
  history: "bg-amber-100 text-amber-700",
  culture: "bg-rose-100 text-rose-700",
  food: "bg-yellow-100 text-yellow-700",
  mountain: "bg-slate-100 text-slate-700",
  trekking: "bg-lime-100 text-lime-700",
  caves: "bg-purple-100 text-purple-700",
  river: "bg-cyan-100 text-cyan-700",
  city: "bg-zinc-100 text-zinc-700",
  epic: "bg-pink-100 text-pink-700",
  north: "bg-blue-100 text-blue-700",
  central: "bg-green-100 text-green-700",
  south: "bg-orange-100 text-orange-700",
  wildlife: "bg-emerald-100 text-emerald-700",
}

const DIFFICULTY_COLORS: Record<string, string> = {
  Easy: "text-emerald-600",
  Moderate: "text-amber-600",
  Challenging: "text-orange-600",
  Hard: "text-red-600",
}

export default function ExperiencesPage() {
  const totalCount = EXPERIENCES.reduce((acc, cat) => acc + cat.items.length, 0)

  return (
    <main className="min-h-screen bg-[#F7F4EF]">

      {/* Hero header */}
      <section className="bg-[#1C1C1A] text-white px-6 pt-20 pb-16 relative overflow-hidden">
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
            <span className="text-white/60">Experiences</span>
          </nav>

          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A84C] mb-4">
            Solo Travel Guide
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold leading-tight mb-4"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Experiences
          </h1>
          <p className="text-[#A09880] text-lg max-w-xl leading-relaxed">
            The best things to do in Vietnam — curated for solo travelers who want more than a tour group itinerary.
          </p>

          {/* Stats row */}
          <div className="flex gap-8 mt-10 pt-10 border-t border-white/10">
            <div>
              <div className="text-2xl font-bold text-white">{totalCount}</div>
              <div className="text-xs text-[#A09880] uppercase tracking-widest mt-0.5">Experiences</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">{EXPERIENCES.length}</div>
              <div className="text-xs text-[#A09880] uppercase tracking-widest mt-0.5">Categories</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">3</div>
              <div className="text-xs text-[#A09880] uppercase tracking-widest mt-0.5">Regions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming soon notice */}
      <div className="max-w-5xl mx-auto px-6 pt-10">
        <div className="bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-xl px-5 py-4 flex items-start gap-3">
          <span className="text-xl mt-0.5">✍️</span>
          <div>
            <p className="text-sm font-semibold text-[#7a5c1e] mb-1">Guides in progress</p>
            <p className="text-sm text-[#8a6d2f]">
              We are actively working on detailed write-ups for each experience — full guides will be added soon.
  In the meantime, feel free to{" "}
              <Link href="/destinations" className="underline hover:text-[#C9A84C] transition-colors">
                browse our destinations
  </Link>{" "}
  for inspiration.
</p>
          </div>
        </div>
      </div>

      {/* Category sections */}
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        {EXPERIENCES.map((cat) => (
          <section key={cat.category}>

            {/* Category heading */}
            <div className="flex items-center gap-3 mb-7">
              <span className="text-2xl">{cat.emoji}</span>
              <h2
                className="text-2xl font-bold text-[#1C1C1A]"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                {cat.category}
              </h2>
              <span className="ml-2 text-sm text-[#A09880] font-medium">
                {cat.items.length} {cat.items.length === 1 ? "experience" : "experiences"}
              </span>
              <div className="flex-1 h-px bg-[#E0D9CF] ml-4" />
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {cat.items.map((item) => (
                <div
                  key={item.slug}
                  className="group bg-white rounded-2xl overflow-hidden border border-[#E8E2D9] relative"
                >
                  {item.comingSoon && (
                    <div className="absolute top-3 right-3 z-10">
                      <span className="text-[10px] font-semibold uppercase tracking-widest bg-[#1C1C1A]/80 text-[#C9A84C] px-2.5 py-1 rounded-full backdrop-blur-sm">
                        Coming soon
                      </span>
                    </div>
                  )}

                  <div className="h-1 w-full bg-[#C9A84C] opacity-60" />

                  <div className="p-5">
                    <h3
                      className="text-lg font-bold text-[#1C1C1A] mb-2 leading-snug pr-20"
                      style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                    >
                      {item.title}
                    </h3>

                    <p className="text-[12px] text-[#7a7060] leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {item.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className={`text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full ${TAG_COLORS[tag] ?? "bg-gray-100 text-gray-600"}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Meta */}
                    <div className="flex items-center gap-3 pt-3 border-t border-[#F0EBE3] text-[11px] text-[#A09880]">
                      <span>🕐 {item.duration}</span>
                      <span className={`font-semibold ${DIFFICULTY_COLORS[item.difficulty]}`}>
                        {item.difficulty}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* CTA footer */}
      <section className="bg-[#1C1C1A] text-white py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A84C] mb-2">
              Not sure where to start?
            </p>
            <h2
              className="text-3xl font-bold"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Browse destinations first
            </h2>
            <p className="text-[#A09880] mt-2 text-sm">
              Explore Vietnam province by province — with local food, culture, and travel tips.
            </p>
          </div>
          <Link
            href="/destinations"
            className="shrink-0 bg-[#C9A84C] hover:bg-[#b8973d] text-[#1C1C1A] font-semibold text-sm px-7 py-3.5 rounded-full transition-colors"
          >
            View destinations →
          </Link>
        </div>
      </section>

    </main>
  )
}