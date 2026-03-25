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
  entranceFee: "Free",
  openingHours: "Open during daylight hours",
  mapUrl: "",
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
}
