import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const muongHoaValley: Location = {
  slug: "muong-hoa-valley",
  name: "Muong Hoa Valley",
  provinces: ["lao-cai"],
  destination: "sapa",
  lat: "22.3143616370346",
  lng: "103.87703660862965",
  address: "Hậu Thào – Tả Van – Lao Chải, Sa Pa, Lào Cai",
  type: "nature",
  experiences: ["trekking", "photography", "culture", "homestay"],
  tags: ["🌾 Rice Terraces", "🥾 Trekking", "📸 Photography", "🏡 Homestay"],
  bestTime: "Sep – Oct (golden harvest) or May – Jun (green planting season)",
  entranceFee: "~70,000–90,000 VND at valley checkpoint",
  openingHours: "Open daily",
  mapUrl: "https://maps.google.com/?q=22.3100,103.8650",
  heroImage: heroUrl("muong-hoa-valley4_wuxzg7"),
  gallery: [
    "muong-hoa-valley_moijqr",
    "muong-hoa-valley2_sip11v",
    "muong-hoa-valley3_ebbyse",
  ],
  seoDescription:
    "Muong Hoa Valley — Sa Pa's most spectacular trekking corridor — stretches 15km through terraced rice fields, H'mong and Giáy villages, ancient carved rocks, and the Hoa Stream. Vietnam's largest terrace system changes colour with every season.",
  tips: [
    "September to early October is peak season for golden rice terraces — book homestays in Tả Van or Lao Chải at least 2 weeks ahead",
    "The Sa Pa Ancient Rock Field (8km²) is inside the valley near Hậu Thào — it's often skipped by tourists but genuinely worth the stop",
    "Trek from Cat Cat → Lao Chải → Tả Van for the classic full-valley route (about 10km, 4–5 hours with stops)",
    "Muong Hoa Stream runs the full length of the valley — the section near Tả Van with the bamboo bridge is the most photogenic",
    "Early morning fog lifting off the terraces is the signature Sa Pa shot — be in position by 6:30–7:30 AM",
  ],
  content: {
    intro:
      "Muong Hoa Valley is the most iconic landscape in Sa Pa — a 15km corridor of terraced rice fields that cascade down the hillsides between the Hoàng Liên mountain range and Bản Hồ village. Recognised as Vietnam's largest terrace system by the Vietnam Guinness Book of Records, the valley is home to four ethnic groups: Black H'mong, Red Dao, Giáy, and Tày — each with distinct textiles, architecture, and customs. The valley changes completely with the seasons: flooded silver terraces in May–June, lush green in July–August, gold during harvest in September–October, and bare fields under frost in winter. Running through it all is the Muong Hoa Stream, fed by 22 mountain streams, passing through every village in the valley.",
    howToGetThere:
      "Muong Hoa Valley starts roughly 4–6km southeast of Sa Pa town centre. The main access road runs from Sa Pa along Provincial Road 152 toward Lao Chải and Tả Van. There is a checkpoint with an entrance fee before the valley villages. From Sa Pa, you can trek down into the valley on foot (1.5–2 hours to Lao Chải), take a motorbike or xe ôm, or join a guided trek. Many visitors combine the valley with the Fansipan cable car, as the lower cable car station (Hoàng Liên Station) sits at the valley's edge.",
    whatToExpect:
      "The valley's main trekking route passes through Cat Cat, Y Linh Ho, Lao Chải, and Tả Van — each village with its own character. Lao Chải is predominantly Black H'mong and has the famous bamboo 'May Bridge' across the stream. Tả Van is Giáy, quieter, and has the most homestay options. The Ancient Rock Field near Hậu Thào contains nearly 200 carved megalithic stones believed to date back thousands of years — one of Vietnam's most mysterious archaeological sites. The valley floor is flat enough for easy walking, but trails between villages involve some climbing.",
    travelTips:
      "The valley is genuinely best experienced over two days, not as a rushed day trip from Sa Pa. Stay overnight in a Tả Van or Lao Chải homestay, have dinner with a local H'mong or Giáy family, and you'll wake up to the valley completely empty of day visitors. The morning light on the terraces from a homestay balcony is one of the most memorable scenes in northern Vietnam. If you're only doing one day, prioritise the Lao Chải to Tả Van section — it's the most varied and least crowded stretch.",
  },
}
