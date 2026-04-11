import { Location } from "../location"
import { heroUrl } from "@/lib/cloudinary"

export const phuQuocNightMarket: Location = {
  slug: "phu-quoc-night-market",
  name: "Phú Quốc Night Market",
  provinces: ["kien-giang"],
  destination: "phu-quoc",
  lat: "10.2158553",
  lng: "103.9602497,54",
  address: "Chợ Đêm Phú Quốc, Dương Đông, Phú Quốc, Kiên Giang",
  type: "market",
  categories: [],
  experiences: ["food", "markets", "nightlife", "walking-tour"],
  tags: ["🌙 Night Market", "🦞 Seafood", "🛍️ Shopping", "🍢 Street Food"],
  bestTime: "Nov – Apr (dry season; less rain in the evening)",
  bestMonths: [1, 2, 3, 4, 11, 12],
  entranceFee: "Free",
  openingHours: "5:00 PM – 11:00 PM daily",
  mapUrl: "https://maps.google.com/?q=10.2131,103.9589",
  streetView: {},
  heroImage: heroUrl("phu-quoc-night-market-placeholder"),
  gallery: [],
  seoDescription:
    "Phú Quốc Night Market in Dương Đông - the island's most atmospheric evening gathering, where seafood grills smoke over charcoal, vendors sell pearl jewelry and fish sauce, and the whole town comes out after dark.",
  tips: [
    "Go hungry - the grilled seafood stalls in the middle section are the main event",
    "Prices are fixed at most stalls - haggling is acceptable for souvenirs but not for food",
    "The fish sauce and pepper stalls near the entrance sell genuine Phú Quốc products - good to bring back as gifts",
    "Arrive by 6pm to get a table at the seafood stalls before the peak crowd hits",
    "The market gets very crowded Dec–Jan - arrive early or go on a weeknight",
  ],
  content: {
    intro:
      "Phú Quốc Night Market opens every evening along the Dương Đông riverfront, transforming a quiet street into a smoky, fragrant sprawl of seafood grills, souvenir stalls, and local food vendors. It's the most social spot on the island after dark - locals and tourists mix around shared tables while smoke from charcoal grills drifts across the river. The market is genuinely lively without being overwhelming.",
    howToGetThere:
      "The night market is in central Dương Đông town, walking distance from most hotels in the main tourist area. From the main street (Trần Hưng Đạo), follow signs toward the river. The market runs along Bạch Đằng street beside the Dương Đông River. No transport needed if you're staying in town - it's a 5–15 minute walk from most guesthouses.",
    whatToExpect:
      "The market is divided into sections: seafood grills dominate the center, souvenir and clothing stalls line the edges, and a handful of stalls sell local specialties like Phú Quốc fish sauce, kampot pepper, and dried seafood. The seafood is ordered by weight - point at what you want, agree on the price, and it goes straight onto the grill. Squid, tiger prawns, scallops, and crab are the most popular choices.",
    travelTips:
      "The night market is a reliable dinner option but not a bargain - seafood prices are tourist-facing. For cheaper eating, the local restaurants one block back from the market serve the same dishes at lower prices. The pearl jewelry stalls sell genuine Phú Quốc pearls but quality varies significantly - only buy from stalls with certification if you're spending serious money.",
  },
  insights: {
    highlights: [
      "Massive seafood selection with fresh fish, prawns, crabs, and local specialties throughout market",
      "Exotic street food options including rolled ice cream, coconut ice cream, and tropical fruits",
      "Pearl jewelry stalls offering local products at competitive prices with bargaining opportunities",
    ],
    thingsToKnow: {
      crowds: "Very busy and crowded, especially after 8 PM. Peak hours mean packed lanes and noise. Busiest time is 8 PM onwards. Arrives lively around 6 PM, quieter if you visit earlier",
      difficulty: null,
      safety: "Generally feels safe. Avoid taxis outside market; use Grab instead. Beware of counterfeit goods and poor-quality items. Ask prices before buying to avoid overcharging. Choose crowded restaurants for food safety",
      accessibility: null,
      seasonal: null,
    },
    visitorTips: [
      "Arrive after 7 PM for lively atmosphere but before 8 PM peak crowds. Market opens from 3 PM, fully lights up at 6 PM",
      "Buy small portions of multiple dishes to share and experience more variety. Ask for prices upfront to avoid being overcharged",
      "Skip seafood displayed on ice; order from busy restaurants. Try exotic fruits, exotic meats like frog and crocodile, and locally-made crafts",
    ],
    faq: [
      { question: "What time should I visit the night market?", answer: "Market lights up at 6 PM daily. Best time is after 7 PM for lively energy without peak 8 PM+ crowds. Stalls open from 3 PM; market closes around midnight depending on tourist numbers" },
      { question: "Is the food safe to eat at the night market?", answer: "Choose restaurants that look clean and busy. Avoid seafood displayed on ice as it may be less fresh. Crowded stalls typically indicate good quality and food safety" },
      { question: "Are prices expensive compared to other Vietnam markets?", answer: "Prices are reasonable but higher than Ben Thanh Market in Ho Chi Minh City. Bargaining is possible at some stalls. Compare prices between stalls before purchasing" },
    ],
    sentiment: {
      positive: "Travelers consistently recommend this as a must-visit destination for authentic local food experience, vibrant atmosphere, fresh seafood variety, and unique souvenirs. Praised for energy, colors, and overall experience despite tourist crowds",
      negative: "Prices higher than other Vietnam markets. Some find it overly touristy and crowded during peak hours. Counterfeit goods and poor-quality items present. Aggressive vendor sales tactics can be annoying. One visit may be sufficient for some",
    },
  },
}