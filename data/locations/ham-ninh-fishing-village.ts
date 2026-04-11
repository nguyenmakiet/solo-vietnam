import { Location } from "../location"
import { heroUrl } from "@/lib/cloudinary"

export const hamNinhFishingVillage: Location = {
  slug: "ham-ninh-fishing-village",
  name: "Hàm Ninh Fishing Village",
  provinces: ["kien-giang"],
  destination: "phu-quoc",
  lat: "10.1807873",
  lng: "104.0458055,926",
  address: "Hàm Ninh, Phú Quốc, Kiên Giang",
  type: "town",
  categories: [],
  experiences: ["culture", "food", "photography", "walking-tour"],
  tags: ["🎣 Fishing Village", "🦀 Seafood", "🏡 Local Life", "🌅 Sunrise"],
  bestTime: "Nov – Apr (dry season; early morning for freshest catch)",
  bestMonths: [1, 2, 3, 4, 11, 12],
  entranceFee: "Free",
  openingHours: "Open 24/7 - best at 5–8am",
  mapUrl: "https://maps.google.com/?q=10.1792,104.0700",
  streetView: {embedUrl: "https://www.google.com/maps/embed?pb=!4v1775804063774!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRDRqZlRwMUFF!2m2!1d10.18304055851125!2d104.0499126072916!3f80.45560573208829!4f7.231187851613882!5f0.4000000000000002", },
  heroImage: heroUrl("ham-ninh-placeholder"),
  gallery: [],
  seoDescription:
    "Hàm Ninh Fishing Village on Phú Quốc's east coast - wooden stilt houses over the water, fresh crab straight off the boats, and a world away from the resort side of the island.",
  tips: [
    "Come for breakfast - stilt restaurants serve the freshest crab and oysters at the lowest prices on the island",
    "The east coast road from Hàm Ninh to Bãi Sao is one of the most scenic rides on Phú Quốc",
    "Bargain politely at the market - prices are fair but vendors expect a friendly negotiation",
    "Go early - by 10am the morning catch is gone and prices at the market go up",
  ],
  content: {
    intro:
      "Hàm Ninh is the oldest surviving fishing village on Phú Quốc, sitting on the east coast about 15km from Dương Đông. Rows of wooden houses on stilts extend over the shallow bay, and local fishermen unload their catch every morning. The village market is the best place on the island to buy sea urchin, oysters, and the famous Phú Quốc crab at market price - no tourist markup, no resort menu.",
    howToGetThere:
      "From Dương Đông town, head south on the main road then turn east toward the coast - about 15km, 20–25 minutes by motorbike. The road passes through the national park fringe and is well-paved. No public transport runs this route. Motorbike rental in town costs 150,000–200,000 VND/day. Hàm Ninh is a natural stop on the way to or from Bãi Sao Beach.",
    whatToExpect:
      "The village is small and genuine - a cluster of stilt houses over the water, a concrete pier where boats dock in the morning, and a handful of open-air seafood restaurants built on platforms above the bay. The crab is the main draw: blue swimmer crab steamed and eaten with salt, lime, and chilli. Oysters, sea urchin, and grilled squid round out the menu. It's rough around the edges but the seafood quality is exceptional.",
    travelTips:
      "Hàm Ninh pairs perfectly with Bãi Sao Beach - eat breakfast at the village then head to the beach for the morning before the day-trippers arrive. The combined ride from Dương Đông takes about 40 minutes in total. Bring cash - no ATMs in the village. If you're buying directly from the market rather than a restaurant, point and ask the price before agreeing.",
  },
  insights: {
    highlights: [
      "Fresh seafood restaurants with live catch selection on floating piers",
      "Sunrise and sunset views from the fishing village waterfront",
      "Authentic local fishing village experience with reasonable prices compared to tourist areas",
    ],
    thingsToKnow: {
      crowds: "Less crowded than main Phu Quoc attractions; quieter in early mornings",
      difficulty: null,
      safety: "Area has cleanliness issues; trash visible in some areas. Exercise caution with restaurant hygiene standards",
      accessibility: "Difficult to find taxis for return trips; main pier partially demolished and broken at beginning, limiting coastal walks",
      seasonal: null,
    },
    visitorTips: [
      "Arrive early morning for quieter experience and breakfast service; negotiate seafood prices before ordering",
      "Choose live seafood from tanks; restaurants cook fresh to order within 10-30 minutes",
      "Bring cash or Wise for payment; avoid inflated prices for street fruits and some restaurants targeting tourists",
    ],
    faq: [
      { question: "Is the coastal pier still walkable?", answer: "No. The main pier is partially demolished and broken at the beginning, limiting access for scenic coastal walks." },
      { question: "How fresh is the seafood?", answer: "Very fresh. Restaurants keep live seafood in tanks and cook immediately after selection. Expect 10-30 minute preparation times." },
      { question: "Is it expensive compared to other Phu Quoc areas?", answer: "Cheaper than Phu Quoc Night Market but pricier than Saigon. Prices are reasonable for fresh seafood, though some restaurants charge tourist rates." },
    ],
    sentiment: {
      positive: "Visitors praise fresh seafood quality, authentic local atmosphere, and helpful staff at floating restaurants",
      negative: "Cleanliness concerns, trash visible in areas, difficulty finding return taxis, partially demolished pier, and mixed value-for-money experiences",
    },
  },
}