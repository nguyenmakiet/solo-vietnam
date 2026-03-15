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
  experiences: ["seafood", "local-life", "photography", "fishing"],
  tags: ["🎣 Fishing Village", "🦀 Seafood", "🏡 Local Life", "🌅 Sunrise"],
  bestTime: "Nov – Apr (dry season; early morning for freshest catch)",
  entranceFee: "Free",
  openingHours: "Open 24/7 — best at 5–8am",
  mapUrl: "https://maps.google.com/?q=10.1792,104.0700",
  heroImage: heroUrl("ham-ninh-placeholder"),
  gallery: [],
  seoDescription:
    "Hàm Ninh Fishing Village on Phú Quốc's east coast — wooden stilt houses over the water, fresh crab straight off the boats, and a world away from the resort side of the island.",
  tips: [
    "Come for breakfast — stilt restaurants serve the freshest crab and oysters at the lowest prices on the island",
    "The east coast road from Hàm Ninh to Bãi Sao is one of the most scenic rides on Phú Quốc",
    "Bargain politely at the market — prices are fair but vendors expect a friendly negotiation",
    "Go early — by 10am the morning catch is gone and prices at the market go up",
  ],
  content: {
    intro:
      "Hàm Ninh is the oldest surviving fishing village on Phú Quốc, sitting on the east coast about 15km from Dương Đông. Rows of wooden houses on stilts extend over the shallow bay, and local fishermen unload their catch every morning. The village market is the best place on the island to buy sea urchin, oysters, and the famous Phú Quốc crab at market price — no tourist markup, no resort menu.",
    howToGetThere:
      "From Dương Đông town, head south on the main road then turn east toward the coast — about 15km, 20–25 minutes by motorbike. The road passes through the national park fringe and is well-paved. No public transport runs this route. Motorbike rental in town costs 150,000–200,000 VND/day. Hàm Ninh is a natural stop on the way to or from Bãi Sao Beach.",
    whatToExpect:
      "The village is small and genuine — a cluster of stilt houses over the water, a concrete pier where boats dock in the morning, and a handful of open-air seafood restaurants built on platforms above the bay. The crab is the main draw: blue swimmer crab steamed and eaten with salt, lime, and chilli. Oysters, sea urchin, and grilled squid round out the menu. It's rough around the edges but the seafood quality is exceptional.",
    travelTips:
      "Hàm Ninh pairs perfectly with Bãi Sao Beach — eat breakfast at the village then head to the beach for the morning before the day-trippers arrive. The combined ride from Dương Đông takes about 40 minutes in total. Bring cash — no ATMs in the village. If you're buying directly from the market rather than a restaurant, point and ask the price before agreeing.",
  },
}