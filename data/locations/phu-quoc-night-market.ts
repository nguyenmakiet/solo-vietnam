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
}