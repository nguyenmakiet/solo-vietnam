import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const anBinhIsland: Location = {
  slug: "an-binh-island",
  name: "Đảo Bé (An Bình Island)",
  provinces: ["quang-ngai"],
  destination: "ly-son",
  lat: "15.427950714721403",
  lng: "109.08039442282168",
  address: "An Bình, Lý Sơn, Quảng Ngãi",
  type: "island",
  categories: [],
  experiences: ["beach", "snorkeling", "photography", "boat-tour"],
  tags: [
    "🏝️ Outer Island",
    "🤿 Best Snorkeling on Lý Sơn",
    "🐠 Coral Reefs",
    "⛵ Boat Trip Required",
  ],
  bestTime: "Mar - Aug (calm seas and best underwater visibility); day trips only - limited overnight options",
  entranceFee: "Free (boat ticket from Lý Sơn port ~50,000 VND one way)",
  openingHours: "Boat departures from Lý Sơn main port from ~7 AM daily (seasonal)",
  mapUrl: "https://www.google.com/maps?q=15.427950714721403,109.08039442282168",
  heroImage: heroUrl("ly-son-island-small-island-11_owd8qu"),
  gallery: [
    "ly-son-island-small-island-12_xqekqu",
    "ly-son-island-small-island-10_zttftr",
    "ly-son-small-island_hg9qi6",
    "ly-son-small-island2_suqqtm",
    "ly-son-small-island3_hyykrs",
    "ly-son-small-island4_ogbns0",
    "ly-son-small-island5_mst87m",
    "ly-son-small-island6_d09for",
    "ly-son-small-island9_kvkior",
  ],
  seoDescription:
    "Đảo Bé - An Bình Island - is a small outer island 3 nautical miles west of Lý Sơn's main island, reachable by a 15-minute boat ride. With clearer water, more intact coral reefs, and a fraction of the crowds of the main island, it is the best snorkeling location in the Lý Sơn archipelago and a quieter alternative for a half-day by the sea.",
  tips: [
    "Boats to Đảo Bé depart from Lý Sơn's main port in the morning - check schedules at the pier the evening before as times vary by season",
    "The island has a small permanent community and a few basic food stalls - bring water and snacks if you plan to spend most of the day there",
    "Snorkeling gear can be rented on the island or brought from the main island - the coral is accessible directly from the beach without a boat",
    "The boat crossing is 15 minutes in calm conditions but can be rough outside the dry season - avoid if seas are choppy",
    "A coracle (thuyền thúng) can be hired on the island to reach slightly deeper snorkeling spots further from shore",
  ],
  content: {
    intro:
      "Đảo Bé - officially An Bình Island - is the smaller of the two main islands in the Lý Sơn archipelago, sitting about 3 nautical miles west of the main island. It has a small permanent population, a handful of homestays, and a coastline with cleaner coral and clearer water than most spots on the larger island. The boat crossing takes 15 minutes from Lý Sơn's main port. Most visitors come as a half-day or full-day trip from the main island rather than staying overnight. The island is small enough to walk around in a couple of hours, and the beach on the southern side is the main draw - white sand, shallow turquoise water, and coral reefs within easy snorkeling distance of the shore.",
    howToGetThere:
      "Boats to Đảo Bé depart from the main ferry port in An Vĩnh on Lý Sơn's main island. High-speed boats take around 15 minutes. Tickets can be purchased at the pier - book the morning of or the evening before during peak season. There is no direct connection from the mainland to Đảo Bé.",
    whatToExpect:
      "The island has one main beach on the southern side where most visitors spend their time. The water is clear and the coral reef accessible from the beach - no boat required to snorkel. A tram tours the island perimeter for visitors who want an overview. There are murals painted across the village walls. Food options are very limited - a few basic stalls near the beach. Overnight accommodation exists but is minimal - most people do a day trip.",
    travelTips:
      "Đảo Bé works best as a dedicated half-day from the main island rather than a rushed add-on. If snorkeling is a priority, this is the right choice over Hang Câu - the coral is more intact and the water typically clearer. Budget a full morning or afternoon and take the earliest available boat to maximize time before the midday heat.",
  },
}
