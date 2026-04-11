import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const nhaPhaPrison: Location = {
  slug: "nha-pha-historical-site",
  name: "Di tích Nhà Pha",
  provinces: ["quang-ngai"],
  destination: "ly-son",
  lat: "15.386246450441275",
  lng: "109.14170348441878",
  address: "An Vĩnh, Lý Sơn, Quảng Ngãi",
  type: "history",
  categories: [],
  experiences: ["history", "culture"],
  tags: [
    "🏚️ Colonial-Era Ruins",
    "📜 Historical Site",
    "🇻🇳 Vietnamese Resistance History",
  ],
  bestTime: "Year-round",
  bestMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  entranceFee: "Free",
  openingHours: "Open during daylight hours",
  mapUrl: "https://www.google.com/maps?q=15.386246450441275,109.14170348441878",
  streetView: {embedUrl: "https://www.google.com/maps/embed?pb=!4v1775831997727!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRDJncmkxekFF!2m2!1d15.38619140746176!2d109.1417389374112!3f33.89405502628472!4f30.03900252187273!5f0.7820865974627469", },
  heroImage: heroUrl("nha-pha-prison-ly-son-island-4_mbem6i"),
  gallery: [
    "nha-pha-prison-ly-son-island-6_jpwe1r",
    "nha-pha-prison-ly-son-island-4_mbem6i",
    "nha-pha-prison-ly-son-island-5_ficyrx",
    "nha-pha-prison-ly-son-island-3_jvnjfv",
    "nha-pha-prison-ly-son-island-2_gmgngi",
    "nha-pha-prison-ly-son-island-1_mptfur",
  ],
  seoDescription:
    "Di tích Nhà Pha is a historical site on Lý Sơn preserving the ruins of a colonial-era detention facility used during the French and American war periods. A minor but historically significant stop for visitors interested in the island's layered past beyond its volcanic geology.",
  tips: [
    "This is a low-key historical site with minimal interpretation on-site - some background knowledge or a local guide will make the visit more meaningful",
    "Combine with the Hải Đội Hoàng Sa museum and the two communal houses for a fuller picture of Lý Sơn's historical layers",
  ],
  content: {
    intro:
      "Di tích Nhà Pha preserves the remnants of a detention facility from the colonial and war periods on Lý Sơn. The site adds a dimension to the island's history beyond its volcanic geology and maritime heritage - the island's isolation made it a location of strategic and punitive significance during periods of conflict. 'Nhà Pha' is a Vietnamese rendering of 'maison de force' - a French colonial term for a detention or forced labor facility.",
    howToGetThere:
      "Di tích Nhà Pha is in the An Vĩnh area near the main ferry port. Ask locally for precise directions - the site is not prominently signposted for tourists.",
    whatToExpect:
      "Structural ruins with limited on-site interpretation. The site is quiet and receives few foreign visitors. A local guide or prior reading will significantly improve the visit.",
    travelTips:
      "Di tích Nhà Pha suits visitors who want to understand Lý Sơn's full historical context rather than just its natural sites. Pair with both communal houses and the Hải Đội Hoàng Sa museum for a coherent half-day covering the island's past.",
  },
  insights: {
    highlights: [
      "Vietnam's tallest lighthouse at 45m, built by French in 1898, offers 360-degree island views from top",
      "Located on Lý Sơn island's eastern side, ideal spot for sunrise viewing over the sea",
      "Distinctive French colonial architecture resembling a spacecraft, unique among Vietnamese lighthouses",
    ],
    thingsToKnow: {
      crowds: null,
      difficulty: null,
      safety: null,
      accessibility: "Interior access may be restricted or closed for renovations; exterior viewing always possible",
      seasonal: null,
    },
    visitorTips: [
      "Arrive before late afternoon as interior access closes early; verify opening status before visiting",
      "Visit early morning for sunrise views from the eastern side of Lý Sơn island",
      "Combine visit with nearby attractions: Hòn Mù Cu, Núi Thới Lới, and Hang Câu",
    ],
    faq: [
      { question: "Can I go inside the lighthouse?", answer: "Interior access may be unavailable due to renovations or closing times. Verify current status before visiting. Exterior viewing is always possible." },
      { question: "What time should I arrive?", answer: "Arrive in the morning or early afternoon. Interior access closes in late afternoon. Plan for sunrise viewing from the eastern side." },
      { question: "What else can I see nearby?", answer: "Visit Hòn Mù Cu nearby, Núi Thới Lời, and Hang Câu. The lighthouse is located on Lý Sơn island with multiple other lighthouses to explore." },
    ],
    sentiment: {
      positive: "Visitors praise the distinctive French colonial architecture, impressive 45m height, panoramic island views, and unique design compared to other Vietnamese lighthouses",
      negative: "Interior access frequently restricted due to renovations or closing times; some find limited activities on the island",
    },
  },
}
