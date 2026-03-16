import { Location } from "../location"
import { heroUrl } from "@/lib/cloudinary"

export const maPiLengPass: Location = {
  slug: "ma-pi-leng-pass",
  name: "Mã Pí Lèng Pass",
  provinces: ["ha-giang"],
  destination: "dong-van",
  lat: "23.24315558513546",
  lng: "105.39773522066236",
  address: "Mã Pí Lèng, Mèo Vạc, Hà Giang",
  type: ["mountain", "attraction", "nature"],
  experiences: ["photography", "trekking", "cycling", "motorcycling"],
  tags: ["🏍️ Motorbike", "🏔️ Mountain Pass", "📸 Photography", "🌊 Canyon Views"],
  bestTime: "Sep – Nov (golden rice terraces) or Mar – Apr (spring blossoms)",
  entranceFee: "Free",
  openingHours: "Open 24/7 — best at sunrise",
  mapUrl: "https://maps.google.com/?q=23.1900,105.3800",
  heroImage: heroUrl("ma-pi-leng-ha-giang_wxkyiu"),
  gallery: [
      "ma-pi-leng-ha-giang_2_kaidch",
      "ma-pi-leng-ha-giang-03_b7ns2u",
      "ma-pi-leng-ha-giang-04_wymyuz"
  ],
  seoDescription:
    "Mã Pí Lèng Pass — Vietnam's most dramatic mountain road, a 20km switchback carved into sheer limestone cliffs above the turquoise Nho Quế River canyon, 1,500m below.",
  tips: [
    "The viewpoint at the summit has a café — stop here for coffee and the best unobstructed view down into the Nho Quế canyon",
    "The road is narrow with no guardrails in places — go slowly, especially on blind corners",
    "Morning light hits the canyon best — arrive at the summit between 7–9am",
    "The road gets slippery in rain and fog — check the weather before riding in wet season",
    "The Happiness Road (Đường Hạnh Phúc) through Mã Pí Lèng was built by hand by ethnic minorities in the 1960s — one of Vietnam's great engineering feats",
  ],
  content: {
    intro:
      "Mã Pí Lèng is widely considered the most spectacular mountain pass in Vietnam — a 20km stretch of the Happiness Road clinging to sheer limestone cliffs above the Nho Quế River gorge. At the summit, the road reaches 1,500m and the canyon drops almost vertically to the turquoise river below. The scale is genuinely staggering. It connects Đồng Văn to Mèo Vạc and is the centerpiece of the Hà Giang Loop.",
    howToGetThere:
      "Mã Pí Lèng Pass is on the road between Đồng Văn and Mèo Vạc — about 20km from each town. Most travelers ride through it as part of the Hà Giang Loop, approaching from Đồng Văn going east toward Mèo Vạc. The pass itself takes 30–45 minutes to cross at a comfortable pace with stops. From Hà Giang city, Đồng Văn is about 4.5 hours by motorbike.",
    whatToExpect:
      "The road winds through dramatic karst landscape before the canyon opens up suddenly on the descent toward Mèo Vạc. The summit viewpoint has a small café and a cluster of souvenir stalls. The view down into the Nho Quế gorge is the defining image of northern Vietnam — turquoise water threading between vertical limestone walls thousands of metres high. The road surface is generally good but narrow, with sheer drops on one side and no barriers.",
    travelTips:
      "Most people ride through Mã Pí Lèng as part of a 3–4 day Hà Giang Loop starting and ending in Hà Giang city. Renting a semi-auto motorbike in Hà Giang costs 150,000–200,000 VND/day. If you're not confident riding mountain roads, hiring an Easy Rider guide from Hà Giang is a safer option. The pass is equally spectacular in both directions — Đồng Văn to Mèo Vạc gives the best canyon views on the right-hand side going down.",
  },
}