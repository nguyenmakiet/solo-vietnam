import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const hangCauCliffs: Location = {
  slug: "hang-cau-cliffs",
  name: "Hang Câu",
  provinces: ["quang-ngai"],
  destination: "ly-son",
  lat: "15.388917622220426",
  lng: "109.13405569310561",
  address: "An Hải, Lý Sơn, Quảng Ngãi",
  type: "beach",
  categories: [],
  experiences: ["photography", "swimming", "snorkeling", "kayaking"],
  tags: [
    "🌊 Volcanic Cliff Beach",
    "🤿 Snorkeling",
    "🛶 Kayaking",
    "📸 Photography",
  ],
  bestTime: "Mar - Aug (calm water, good visibility for snorkeling); afternoon when tide is lower",
  bestMonths: [3, 4, 5, 6, 7, 8],
  entranceFee: "Free",
  openingHours: "Open 24/7",
  mapUrl: "https://www.google.com/maps?q=15.388917622220426,109.13405569310561",
  streetView: {embedUrl: "https://www.google.com/maps/embed?pb=!4v1775810316747!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRHE4Xzd1N0FF!2m2!1d15.38925497441249!2d109.1339227857855!3f215.05144712861676!4f20.24099134952236!5f0.7820865974627469", },
  heroImage: heroUrl("hang-cau-ly-son-island-9_jt1s8r"),
  gallery: [
    "hang-cau-ly-son-island-8_bcwriw",
    "hang-cau-ly-son-island-7_y7vlvh",
    "hang-cau-ly-son-island-6_uka8iz",
    "hang-cau-ly-son-island-5_nguwfa",
    "hang-cau-ly-son-island_dd2pif",
    "hang-cau-ly-son-island-2_z45wbo",
    "hang-cau-ly-son-island-3_e5tdvl",
    "hang-cau-ly-son-island-4_cwvf20",
  ],
  seoDescription:
    "Hang Câu is Lý Sơn's most dramatic coastal spot - a beach at the base of Núi Thới Lới where vertical basalt cliffs meet turquoise water and coral reefs. The combination of volcanic cliff faces, clear water, and accessible snorkeling makes it the island's top swimming and photography destination.",
  tips: [
    "Visit in the afternoon when the tide has receded - the beach widens and the cliff face is fully exposed for photography",
    "The water is clearest from March to August - outside these months visibility for snorkeling drops significantly",
    "Kayak and snorkel gear rental is available from vendors near the beach entrance",
    "The cliff walls are volcanic basalt formed millions of years ago - the rock textures and colors photograph particularly well in late afternoon light",
    "Hang Câu is directly below Núi Thới Lới - combine both in the same visit by climbing the mountain first and descending to the beach",
  ],
  content: {
    intro:
      "Hang Câu sits at the base of Núi Thới Lới on Lý Sơn's northern shore - a stretch of beach flanked by near-vertical basalt cliff faces that drop directly into the sea. The cliffs are the remnants of volcanic activity that shaped the island millions of years ago, their dark layered faces worn into sharp geometric forms by centuries of wave erosion. The water in front of the cliffs is clear and shallow close to shore, with coral reefs accessible without a boat. The combination of volcanic geology overhead and blue water below makes Hang Câu the island's strongest visual location - most of Lý Sơn's widely circulated travel photography is shot here.",
    howToGetThere:
      "Hang Câu is on the northern coast of Lý Sơn, directly below Núi Thới Lới. From the ferry port in An Vĩnh, follow the coastal road east and north - the beach is signposted and about 15-20 minutes by motorbike. Most visitors come directly from the Thới Lới summit by riding back down the mountain road and continuing a short distance to the beach.",
    whatToExpect:
      "The beach itself is a mix of sand and volcanic rock. The cliff face rises directly from the water on the western edge of the beach. Snorkeling is accessible without a boat - wade in from the beach and the coral begins within a short distance. Kayak rental is available near the entrance. The area has a few small food stalls. The beach gets crowded during peak season (Jun - Aug) and on weekends.",
    travelTips:
      "Hang Câu and Núi Thới Lới are the island's northern cluster - pair with a morning summit climb, then spend the afternoon swimming or snorkeling at the beach. If snorkeling is the priority, also consider a half-day trip to Đảo Bé where coral coverage and water clarity are generally considered better.",
  },
  insights: {
    highlights: [
      "Crystal clear water ideal for swimming and snorkeling with excellent visibility",
      "Fresh seafood restaurants serving braised fish, crab, and steamed red fish daily",
      "Scenic clifftop and rocky beach setting with ocean breezes and bird watching",
    ],
    thingsToKnow: {
      crowds: "Quiet and uncrowded, especially in low season (February). Limited Western tourism on the island",
      difficulty: "Strong waves and coral present when swimming; exercise caution when entering water",
      safety: "Food safety concerns reported; one case of food poisoning from uncooked/rotten seafood with unresolved refund",
      accessibility: null,
      seasonal: "Winter months (February) are cold with strong waves; afternoon is best time for fresh fish availability",
    },
    visitorTips: [
      "Watch for coral when swimming and snorkeling; stay alert to wave conditions",
      "Bring supplies for beach camping; garbage disposal is a problem, bring bags for cleanup",
      "Order seafood in afternoon when fresh stock arrives; verify cooking time with staff before ordering",
    ],
    faq: [
      { question: "Is the seafood at restaurants here safe to eat?", answer: "Seafood is generally fresh and highly rated, but food safety incidents have occurred. One visitor experienced food poisoning from uncooked/rotten items. Check food quality carefully and verify cooking." },
      { question: "When is the best time to visit for swimming?", answer: "Avoid February when water is cold and waves are strong. Afternoon visits offer calmer conditions and fresh seafood. Better weather expected outside winter months." },
      { question: "Is snorkeling possible here?", answer: "Yes, snorkeling is excellent with clear water and coral. Be cautious of dead coral areas and watch for strong currents when entering the water." },
    ],
    sentiment: {
      positive: "Mostly praised for stunning natural scenery, clear water, fresh seafood, and peaceful atmosphere. Many call it a must-visit on Ly Son Island",
      negative: "Garbage scattered across beach, abandoned/poorly maintained restaurants, inconsistent food quality and hygiene standards, slow service, and reported food poisoning incident",
    },
  },
}
