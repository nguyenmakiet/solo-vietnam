import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const hieuWaterfall: Location = {
  slug: "hieu-waterfall",
  name: "Hieu Waterfall",
  provinces: ["thanh-hoa"],
  destination: "pu-luong",
  lat: "20.46548088770793", // TODO: verify
  lng: "105.2224454532903", // TODO: verify
  address: "Hieu Village, Cổ Lũng, Bá Thước, Thanh Hóa",
  type: "waterfall",
  categories: [],
  experiences: ["photography", "walking-tour"],
  tags: ["💧 Multi-tier Waterfall", "🏊 Swimming Pools", "🌿 Forest Setting", "📸 Photography"],
  bestTime: "May - Oct (full water flow); driest months Feb - Apr have weaker flow",
  bestMonths: [5, 6, 7, 8, 9, 10],
  entranceFee: "~10,000 - 20,000 VND (collected by village)",
  openingHours: "Open 24/7 (best in daylight)",
  mapUrl: "https://www.google.com/maps?q=20.46548088770793,105.2224454532903", // TODO: verify with exact coords
  streetView: {},
  heroImage: heroUrl("hieu-waterfall_otqemx"),
  gallery: [
    "hieu-waterfall_otqemx",
    "hieu-waterfall-8_wqtatq",
    "hieu-waterfall-2_infv03",
    "hieu-waterfall-3_uuzy31",
    "hieu-waterfall-6_gobugq",
    "hieu-waterfall-7_m598uf",
    "hieu-waterfall-4_wh6pai",
    "hieu-waterfall-5_mn9ral",
    "hieu-waterfall-9_twokxb",
  ],
  seoDescription:
    "Hieu Waterfall (Thác Hiêu) is a multi-tiered waterfall running through Hieu Village in Pù Luông Nature Reserve - around 800m of cascades dropping through forest, bamboo bridges, and Thai rice terraces, with swimming pools at several tiers.",
  tips: [
    "The waterfall has multiple tiers spread over roughly 800m - the lower tier near the parking area is the most photographed, but the upper tiers inside the village are quieter and equally scenic",
    "The water is genuinely cold even in summer because it emerges from a karst spring upstream - swimming is refreshing rather than relaxing",
    "May to October has the strongest flow - February to April the falls thin out significantly and the lower tiers can look modest by comparison",
    "Wear shoes with grip - the rocks at the tier edges are slippery, especially after rain or near the swimming pools",
    "Local Thai families collect a small entrance fee at the lower tier to maintain the path and bridges - this is normal and expected",
  ],
  content: {
    intro:
      "Hieu Waterfall (Thác Hiêu) is the defining natural feature of the eastern side of Pù Luông Nature Reserve - a series of waterfalls and cascades on the Hiêu Stream that drop through Hieu Village over a roughly 800m stretch of forested slope. The water originates from a karst spring upstream and runs cold year-round, descending through a sequence of distinct tiers separated by short stretches of stream and Thai rice terraces. The lower tier, near the small parking area at the edge of the village, is the largest single drop and the most commonly photographed; the upper tiers are integrated with the village itself, running between stilt houses, under bamboo footbridges, and beside paddy fields. Several tiers form natural swimming pools that are deep enough for a proper swim. Hieu Waterfall is one of the few waterfalls in northern Vietnam where the water, the village, and the rice landscape are all part of a single connected setting.",
    howToGetThere:
      "Hieu Waterfall is reached through Hieu Village in Cổ Lũng commune, around 7km from Don Village by motorbike on the main reserve road - a 20-minute ride. Most homestays in Don Village can arrange a xe ôm or guide. From Phố Đoàn market town, the village and waterfall are around 12km. Visitors typically park at the lower entrance to the village near the lowest tier of the falls, then follow the path uphill through the village to reach the upper tiers. The full waterfall walk from lowest to highest tier takes around 30 to 45 minutes one way.",
    whatToExpect:
      "The visit is a slow walk uphill alongside the stream, with the path moving between forest, bamboo bridges, and rice terrace edges. Each tier is a distinct stop - some are wide curtain falls, others are narrow chutes feeding into clear pools. The lower tier is the busiest and the easiest to photograph from below. The middle tiers, set inside the village, are the most atmospheric, with houses and rice fields framing the water. The upper tiers are quieter and require a steeper walk on rougher path. Several pools are deep enough to swim, and on hot days local children swim in the lower pools. The water is cold and clear; the surrounding forest is genuinely shaded and significantly cooler than the open valley.",
    travelTips:
      "Hieu Waterfall is best paired with an overnight in Hieu Village rather than a rushed day trip - early morning before other visitors arrive is when the upper tiers feel most remote, and late afternoon light hitting the lower tier is the strongest photography window. The waterfall is entirely self-guided - there are no formal facilities, no guides, and no guardrails. Bring water shoes if you intend to swim, and a dry bag for camera equipment. After heavy rain the path can become slippery and the pools cloudy; allow a day for clarity to return.",
  },
}
