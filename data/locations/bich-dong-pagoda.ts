import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const bichDongPagoda: Location = {
  slug: "bich-dong-pagoda",
  name: "Bich Dong Pagoda",
  provinces: ["ninh-binh"],
  destination: "",
  lat: "20.217618252880175",
  lng: "105.91579657358032",
  address: "Bích Động, Ninh Hải, Hoa Lư, Ninh Bình",
  type: "cultural",
  experiences: ["culture", "photography", "hiking", "sightseeing"],
  tags: ["⛩️ Cave Pagoda", "🪨 Limestone Grotto", "📸 Photography", "🏔️ Viewpoint"],
  bestTime: "Oct – Apr (dry season, cooler temperatures, clear skies)",
  entranceFee: "Free",
  openingHours: "6:00 AM – 6:00 PM",
  mapUrl: "https://maps.google.com/?q=20.2310,105.9530",
  heroImage: heroUrl("bich-dong-pagoda-hero_placeholder"),
  gallery: [],
  seoDescription:
    "Bích Động Pagoda — the 'Second Grotto of the South' — is an 18th-century Buddhist complex built across three levels inside and around a limestone karst, combining cave shrines, cliff-carved steps, and a hilltop terrace with sweeping views over the Ninh Bình valley.",
  tips: [
    "The upper pagoda (Chùa Thượng) requires a steep climb to reach — go slowly as the stone steps are worn smooth and can be slippery after rain",
    "Arrive before 8 AM on weekdays for the most peaceful experience — the cave shrines feel genuinely spiritual when quiet, less so when full of tour groups",
    "Bring incense if you want to make offerings — it's available at the entrance gate for a small cost",
    "From the upper terrace, the view down the valley toward Tam Cốc is excellent — bring a telephoto lens to capture the karst ridgeline at distance",
    "The pagoda is 2km from Tam Cốc dock — easily cycled in under 10 minutes on the flat road through the rice fields",
  ],
  content: {
    intro:
      "Bích Động — 'Jade Grotto' — was named in 1773 by Trịnh Sâm, a lord of the Trịnh dynasty, who arrived by boat and was so struck by the emerald cave walls that he carved the name into the stone. The pagoda complex predates the name by nearly 70 years: it was founded in 1705 during the reign of Emperor Lê Dụ Tông by two wandering monks, Trí Kiên and Trí Thể, who found the limestone karst honeycombed with natural caves and decided to build. The result is a three-level religious complex — Chùa Hạ (Lower), Chùa Trung (Middle), and Chùa Thượng (Upper) — each at a progressively higher elevation inside and around the limestone massif. The lower pagoda sits at the base; the middle pagoda is built directly inside a cave chamber with a stalactite ceiling; the upper pagoda perches on an open terrace at the summit with views across the valley. All three are still active places of worship.",
    howToGetThere:
      "Bích Động Pagoda is 2km northwest of the Tam Cốc boat dock, along a flat road through rice fields. On bicycle, it takes under 10 minutes from Tam Cốc village. From Ninh Bình city, it's about 10km southwest — 20–25 minutes by motorbike. The pagoda is signposted from the main road in Ninh Hải commune. There is a small parking area at the base. Entry is free, though donations are welcome at the shrine.",
    whatToExpect:
      "The visit begins at Chùa Hạ, a traditional Vietnamese pagoda with a courtyard and garden at the foot of the karst. Stone steps lead upward to Chùa Trung — built inside a natural cave chamber with a low ceiling hung with stalactites and a dim interior lit by incense smoke and candles. This is the most atmospheric section of the complex. Further steps continue to Chùa Thượng, an open-air terrace pagoda at the summit with panoramic views of the surrounding valley. The full ascent and descent takes 30–45 minutes. A second, smaller cave — Hang Tối ('Dark Cave') — is accessible from the main path and can be explored briefly.",
    travelTips:
      "Bích Động is consistently underrated relative to Trang An and Tam Cốc — it's free, far less crowded, and the cave pagoda atmosphere is genuinely unlike anything else in the region. The combination of active Buddhist shrine inside a limestone cave, hill climb, and valley viewpoint in a single 45-minute visit makes it an extremely efficient use of time in Ninh Bình. It pairs perfectly with Tam Cốc: boat tour in the morning, bicycle to Bích Động and Hang Mua in the afternoon.",
  },
}
