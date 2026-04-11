import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const japaneseBridge: Location = {
  slug: "japanese-bridge",
  name: "Japanese Bridge",
  provinces: ["quang-nam"],
  destination: "hoi-an",
  lat: "15.877113853056763",
  lng: "108.32614848011536",
  address: "Nguyễn Thị Minh Khai, Hội An, Quảng Nam",
  type: "cultural",
  categories: [],
  experiences: ["history", "culture", "photography", "walking-tour"],
  tags: ["🌉 Iconic Landmark", "📸 Photography", "🏯 400-Year-Old Bridge", "🎑 UNESCO Heritage"],
  bestTime: "Feb – Apr or Oct – Nov (dry season, golden hour light is exceptional)",
  bestMonths: [2, 3, 4, 10, 11],
  entranceFee: "Included in Hội An Old Town ticket (~120,000 VND)",
  openingHours: "Open daily; best visited early morning or after 5 PM",
  mapUrl: "https://www.google.com/maps?q=15.877113853056763,108.32614848011536",
  streetView: {embedUrl: "https://www.google.com/maps/embed?pb=!4v1775813802661!6m8!1m7!1sTRBkhpIRO3CsbddPyBYlJg!2m2!1d15.87677500786681!2d108.3261378184943!3f342.74486220899666!4f8.12834574850173!5f0.8087096132671725", },
  heroImage: heroUrl("japanese-bridge-quang-nam2_yrhdb8"),
  gallery: [
    "japanese-bridge-quang-nam4_zt5jyi",
    "japanese-bridge-quang-nam3_d761ud",
    "japanese-bridge-quang-nam_cvgrht",
  ],
  seoDescription:
    "The Japanese Covered Bridge is Hội An's most iconic structure - a 400-year-old roofed bridge built by Japanese merchants in the early 1600s, spanning a small canal at the western edge of the Ancient Town, with a small temple built into its northern side.",
  tips: [
    "Visit before 7:30 AM or after 5:30 PM - the bridge is one of the most photographed spots in Vietnam and is genuinely mobbed during midday",
    "The best photos of the bridge are taken from the canal bank on either side, not from the bridge itself - walk down to water level for the classic shot",
    "The small temple (Chùa Cầu) built into the bridge is dedicated to the northern god Trấn Võ - it's tiny but worth stepping inside",
    "The bridge appears on the 20,000 VND banknote - hold one up for the comparison photo, it's a classic",
    "At night the bridge is lit and reflects on the canal - the lantern-lit evening view is different from the daytime look and worth a second visit",
  ],
  content: {
    intro:
      "The Japanese Covered Bridge - Chùa Cầu, literally 'Pagoda Bridge' - was built by the Japanese merchant community in Hội An in the early 17th century, believed to date to around 1593, making it over 400 years old. At the time, Hội An was one of Southeast Asia's most active trading ports, and a substantial Japanese quarter had developed on the western side of the canal. The bridge connected the Japanese and Chinese merchant quarters across the waterway, and a small temple was built into its northern side - dedicated to a deity who, according to Japanese belief, controlled earthquakes by restraining a mythical underground monster. The bridge has been repaired and rebuilt multiple times since its construction; its current form dates largely to an 18th-century restoration. It appears on the Vietnamese 20,000 đồng banknote and is the symbol of Hội An as a city.",
    howToGetThere:
      "The Japanese Bridge is at the western end of Trần Phú Street, the main street of Hội An Ancient Town, at its intersection with Nguyễn Thị Minh Khai. It's a short walk from anywhere in the Ancient Town - most visitors encounter it naturally while exploring the old streets. The bridge is within the Ancient Town ticketed zone; entry requires the Hội An Old Town combined ticket (120,000 VND), which also covers admission to several other heritage houses, assembly halls, and museums within the Ancient Town.",
    whatToExpect:
      "The bridge is small - about 18 metres long and 3 metres wide - roofed with dark timber and tile, and wide enough for two people to pass comfortably. The interior has a slightly arched wooden walkway with a low balustrade on both sides, looking down to the canal below. The Chùa Cầu temple occupies a small room on the northern side, containing a shrine and incense. The bridge itself takes about 5 minutes to cross. The real value is the surrounding area - the canal views from either bank, the old merchant houses lining the waterfront, and the lanterns that frame the bridge at dusk.",
    travelTips:
      "The Japanese Bridge is a mandatory stop in Hội An but should not be rushed or reduced to a photo op. The surrounding western end of the Ancient Town - Nguyễn Thị Minh Khai Street, the canal bank, the small streets feeding off Trần Phú - is less crowded than the central market area and has better preserved shophouse architecture. Early morning is the only time the bridge is genuinely peaceful; by 9 AM the tour groups arrive and the bridge becomes a queue. The evening lantern view is the best compromise between crowd and atmosphere if morning isn't possible.",
  },
  insights: {
    highlights: [
      "17th-century Japanese-built wooden bridge connecting Japanese and Chinese quarters with pagoda shrine",
      "Featured on Vietnam's 20,000 VND banknote; UNESCO World Heritage Site within Hoi An Ancient Town",
      "Evening atmosphere with lantern-lit boats on river and illuminated bridge provides iconic photo opportunities",
    ],
    thingsToKnow: {
      crowds: "Extremely crowded during day and evening hours; visit before 8 AM for peaceful experience and better photos",
      difficulty: null,
      safety: null,
      accessibility: "Narrow wooden plank side attachment requires lifting prams/strollers to cross bridge",
      seasonal: "Bridge recently renovated in 2024; flooding reported but bridge remains functional; river flooding occurs seasonally",
    },
    visitorTips: [
      "Visit before 8 AM to avoid crowds, enjoy cooler weather, and photograph without tourist obstruction",
      "Entrance exterior is free; entry to inner shrine requires Hoi An Ancient Town ticket (120,000 VND covers five heritage sites)",
      "Look for monkey and dog statues at bridge ends; historically significant shrine burned incense for 400+ years",
    ],
    faq: [
      { question: "Do I need a ticket to cross the bridge?", answer: "No, walking across the bridge exterior is free. Only entering the inner shrine requires an Old Town ticket (120,000 VND), which covers five heritage attractions." },
      { question: "When is the best time to visit?", answer: "Early morning before 8 AM offers quiet, peaceful atmosphere with better light and minimal crowds. Evening is beautiful when lanterns light up, but expect heavy tourist presence." },
      { question: "How long does a visit take?", answer: "Walking across the bridge takes 5-10 minutes. Accessing the shrine interior adds minimal time. Plan additional time exploring surrounding Ancient Town streets and shops." },
    ],
    sentiment: {
      positive: "Universally recognized as iconic symbol of Hoi An with stunning architecture; visitors value historical significance and evening ambiance despite crowds",
      negative: "Overcrowding makes photography difficult; recent renovation made bridge look newer, losing some historical aesthetic for some visitors",
    },
  },
}
