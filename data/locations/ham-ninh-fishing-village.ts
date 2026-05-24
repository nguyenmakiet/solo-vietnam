import { Location } from "../location"
import { heroUrl } from "@/lib/cloudinary"

export const hamNinhFishingVillage: Location = {
  slug: "ham-ninh-fishing-village",
  name: "Hàm Ninh Fishing Village",
  provinces: ["kien-giang"],
  destination: "phu-quoc",
  lat: "10.1807873",
  lng: "104.0458055",
  address: "Hàm Ninh, Phú Quốc, Kiên Giang",
  type: ["town", "cultural"],
  categories: [],
  experiences: ["culture", "food", "photography", "walking-tours"],
  tags: ["🎣 Oldest Fishing Village", "🦀 Seafood", "🌅 Sunrise Spot", "🪵 Wooden Bridge"],
  bestTime: "Nov – Apr (dry season; early morning for freshest catch, sunrise, and best atmosphere)",
  bestMonths: [1, 2, 3, 4, 11, 12],
  entranceFee: "Free",
  openingHours: "Open 24/7 - best visited 5–9 AM for morning catch and breakfast",
  mapUrl: "https://maps.google.com/?q=10.1792,104.0700",
  streetView: { embedUrl: "https://www.google.com/maps/embed?pb=!4v1775804063774!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRDRqZlRwMUFF!2m2!1d10.18304055851125!2d104.0499126072916!3f80.45560573208829!4f7.231187851613882!5f0.4000000000000002", },
  heroImage: heroUrl("ham-ninh-placeholder"),
  gallery: [],
  seoDescription:
    "Hàm Ninh Fishing Village on Phú Quốc's east coast is the island's oldest surviving fishing community - wooden stilt houses over the water, fresh crab and oysters straight off the morning boats, and a world away from the resort side of the island.",
  tips: [
    "Come early - the morning catch arrives between 5-8 AM and the freshest seafood is gone by 10 AM. Prices also go up once the morning rush passes.",
    "The stilt restaurants over the water serve the freshest crab and oysters at significantly lower prices than anywhere on the west coast or in Dương Đông",
    "Choose live seafood directly from the tanks - restaurants cook to order and preparation takes 10-30 minutes",
    "Bring cash - no ATMs in the village. Negotiate prices politely before ordering, especially for seafood sold by weight",
    "Some restaurants target tourists with inflated prices - walk along the pier and compare before sitting down",
    "The main coastal pier is partially demolished at the beginning - access for coastal walks is limited",
    "Hàm Ninh pairs well with Bãi Sao Beach nearby - breakfast at the village then beach for the morning before day-trippers arrive",
    "The east coast road between Hàm Ninh and Bãi Sao is one of the most scenic rides on Phú Quốc - take it slowly",
  ],
  content: {
    intro:
      "Hàm Ninh is the oldest surviving fishing village on Phú Quốc, sitting on the east coast approximately 15km from Dương Đông town. Rows of wooden houses on stilts extend over the shallow bay, and local fishermen unload their morning catch daily. The village operates on a different rhythm from the resort developments on the island's western coast - the stilt restaurants over the water serve fresh blue swimmer crab, oysters, sea urchin, and grilled squid at market prices without tourist markup. Hàm Ninh is the most authentic remaining piece of pre-resort Phú Quốc and is best experienced early in the morning when the boats are coming in and the seafood is at its freshest.",
    howToGetThere:
      "From Dương Đông town, head south on the main road then turn east toward the coast - approximately 15km, 20-25 minutes by motorbike. The road is well-paved and passes through the national park fringe. No public transport serves this route. Motorbike rental in Dương Đông costs 150,000-200,000 VND/day. Note: finding return taxis or ride-hail from Hàm Ninh can be difficult - plan the return trip in advance or use the motorbike. Hàm Ninh is a natural stop on the way to or from Bãi Sao Beach.",
    whatToExpect:
      "The village is small and unpolished - a cluster of stilt houses over the water, a concrete pier where boats dock in the morning, and open-air seafood restaurants built on platforms above the bay. The crab is the main draw: blue swimmer crab steamed and eaten with salt, lime, and chilli. The seafood quality is exceptional when fresh, though cleanliness standards in some areas and some restaurants are mixed. The main coastal pier is partially demolished at the entrance, limiting the coastal walk. The market is the best place on the island to buy sea urchin, oysters, and Phú Quốc crab at market price.",
    travelTips:
      "Hàm Ninh works best as part of a Phú Quốc east coast morning - breakfast at the village then Bãi Sao Beach before the day-trippers arrive from the resort areas. The combined ride from Dương Đông takes about 40 minutes total. Bring enough cash for breakfast and market purchases. Be selective about which stall or restaurant you choose - the quality and pricing vary significantly between vendors. Early morning visits are strongly recommended over midday when the catch is gone and the heat is at its worst.",
  },
  insights: {
    highlights: [
      "Fresh blue swimmer crab, oysters, and sea urchin at market prices - the best-value seafood on Phú Quốc island",
      "Authentic wooden stilt houses over the water - the oldest surviving fishing village on the island, unchanged from the pre-resort era",
      "Morning atmosphere 5-9 AM when fishing boats return and the catch is laid out fresh on the pier",
    ],
    thingsToKnow: {
      crowds: "Much quieter than western Phú Quốc attractions. Mornings are busiest with locals; midday is slow. Significantly less crowded than Dương Đông Night Market.",
      difficulty: "Flat and easy walking. The coastal pier is partially demolished at the start, limiting the walk.",
      safety: "Some cleanliness concerns - trash visible in certain areas and hygiene standards vary between restaurants. Choose restaurants with visible live tanks and high turnover.",
      accessibility: "Easy flat access throughout the village. Return transport is difficult - plan ahead as taxis and ride-hail are unreliable in this area.",
      seasonal: "Best Nov-Apr in the dry season. Rainy season (May-Oct) brings rougher seas and less fresh catch availability.",
    },
    visitorTips: [
      "Arrive before 8 AM for the best seafood selection and prices - the morning catch is the whole point of the visit",
      "Choose live seafood from tanks and confirm prices before ordering - sold by weight, so agree on the total before cooking begins",
      "Bring cash - no ATMs in the village. Budget 150,000-300,000 VND per person for a seafood breakfast.",
    ],
    faq: [
      {
        question: "Is the coastal pier still walkable?",
        answer: "Partially - the main pier is damaged at the beginning, which limits the full coastal walk. The stilt restaurant platforms are accessible but the full perimeter walk is not currently possible.",
      },
      {
        question: "How fresh is the seafood?",
        answer: "Very fresh in the morning. Restaurants keep live seafood in tanks and cook immediately after selection - expect 10-30 minutes preparation time. By midday the selection thins significantly.",
      },
      {
        question: "Is it cheaper than other Phú Quốc seafood options?",
        answer: "Cheaper than resort restaurants and comparable or slightly lower than Dương Đông Night Market for equivalent quality. Some vendors charge tourist rates - compare prices between stalls before committing.",
      },
    ],
    sentiment: {
      positive: "Consistently praised for fresh seafood quality, authentic local fishing village atmosphere, and the stilt restaurant experience over the water. Morning visits draw the strongest reviews.",
      negative: "Cleanliness concerns in some areas, difficulty finding return transport, the partially demolished pier limiting the coastal walk, and inconsistent pricing between vendors targeting tourists versus locals.",
    },
  },
}
