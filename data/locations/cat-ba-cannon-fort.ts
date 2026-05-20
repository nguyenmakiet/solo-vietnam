import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const catBaCannonFort: Location = {
  slug: "cat-ba-cannon-fort",
  name: "Cát Bà Cannon Fort",
  provinces: ["hai-phong"],
  destination: "cat-ba",
  lat: "20.72699791562507",
  lng: "107.05415352678563",
  address: "Cát Bà, Hải Phòng",
  type: ["history", "nature"],
  categories: [],
  experiences: ["history", "photography", "trekking"],
  tags: ["💣 WWII Cannon Fort", "📸 Panoramic Views", "🏔️ Hilltop", "📖 History"],
  bestTime: "Currently closed - the nearby Radio Tower viewpoint is open year-round; best at sunset Oct - Apr",
  bestMonths: [1, 2, 3, 4, 10, 11, 12],
  entranceFee: "Closed — no entry",
  openingHours: "Closed long-term as of late 2025",
  mapUrl: "https://www.google.com/maps?q=20.72699791562507,107.05415352678563",
  streetView: { embedUrl: "https://www.google.com/maps/embed?pb=!4v1774768522625!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ3NuTEdoMUFF!2m2!1d20.72553134415704!2d107.0519851983662!3f239.02503821532432!4f-14.659227288351687!5f0.7820865974627469" },
  heroImage: heroUrl("cannon-fort-cat-ba-hai-phong_pxdryc"),
  gallery: [
    "cannon-fort-cat-ba-hai-phong-3_bj9fpm",
    "cannon-fort-cat-ba-hai-phong-2_u7enme",
    "cannon-fort-cat-ba-hai-phong_pxdryc",
  ],
  seoDescription:
    "Cát Bà Cannon Fort is a French and Japanese military installation from the 1940s on the hilltop above Cát Bà town - currently closed long-term to visitors. The nearby Radio Tower viewpoint offers comparable panoramic views over Lan Hà Bay and Cát Bà town as an alternative.",
  tips: [
    "Cannon Fort is currently closed long-term and access is blocked - do not plan a visit without checking current status first",
    "The best alternative is the Radio Tower viewpoint nearby - follow the road up toward the fort until you hit the barrier, then look left for the paths leading up to the tower. Views over Lan Hà Bay are comparable to the fort",
    "The Radio Tower viewpoint has become the go-to sunset spot on Cat Ba since the fort closed in late 2025 - see /locations/radio-tower-cat-ba for full details",
    "If the fort reopens in future, the 360-degree view from the top is the best elevated viewpoint on the island - Ha Long Bay to the north and Lan Hà Bay to the south simultaneously",
  ],
  content: {
    intro:
      "Cát Bà Cannon Fort sits on a 177-metre hill directly above Cát Bà town, originally built by the French colonial administration and later occupied and expanded by the Japanese during their 1940–1945 occupation of Indochina. The fort includes several large coastal defence cannons still in their original mounts, concrete bunkers, ammunition stores, and a tunnel system dug into the hilltop limestone. The fort has been closed to visitors long-term as of late 2025 - access is blocked at the entrance and entry is not permitted. Visitors looking for panoramic views over Lan Hà Bay and Cát Bà town should head to the Radio Tower viewpoint nearby, which has become the practical alternative since the closure.",
    howToGetThere:
      "The fort road begins near the main harbour in Cát Bà town and climbs steeply through vegetation to the hilltop. The entrance is currently blocked. For the Radio Tower viewpoint alternative, follow the same road uphill until you reach the barrier blocking the fort entrance, then look left for the paths leading up to the tower.",
    whatToExpect:
      "The fort is currently inaccessible. If it reopens in future: the complex has several concrete platforms with original coastal defence cannons, bunkers, ammunition stores, and a partially accessible tunnel system. The views from the fort perimeter cover Ha Long Bay to the north, Lan Hà Bay to the south, and Cát Bà town directly below. For now, the Radio Tower viewpoint 550 metres away offers similar elevated views over Lan Hà Bay without the closure issues.",
    travelTips:
      "Do not plan your Cat Ba itinerary around Cannon Fort - it has been closed long-term since late 2025 with no confirmed reopening date. The Radio Tower viewpoint nearby is the current best alternative for sunset views over Lan Hà Bay. See /locations/radio-tower-cat-ba.",
  },
  insights: {
    highlights: [
      "Currently closed long-term - check current status before visiting",
      "For panoramic views and sunset, the nearby Radio Tower viewpoint is the recommended alternative - see /locations/radio-tower-cat-ba",
      "WWII-era fort with cannons, bunkers, and tunnels - historically significant if it reopens",
    ],
    thingsToKnow: {
      crowds: null,
      difficulty: "Currently inaccessible - fort is closed long-term",
      safety: "Fort is closed and access is blocked. Do not attempt to enter past the barrier.",
      accessibility: "Closed to visitors as of late 2025. Radio Tower viewpoint nearby is the accessible alternative.",
      seasonal: "Closed indefinitely - check current status before visiting",
    },
    visitorTips: [
      "The fort is closed - head to the Radio Tower viewpoint instead for comparable views over Lan Hà Bay (/locations/radio-tower-cat-ba)",
      "Follow the road up toward the fort until the barrier, then look left for paths up to the Radio Tower",
      "Allow 30-60 minutes for the Radio Tower visit - check local sunset time before going",
    ],
    faq: [
      {
        question: "Is Cannon Fort open to visitors?",
        answer: "No - Cannon Fort has been closed long-term as of late 2025. Access is blocked at the entrance. The nearby Radio Tower viewpoint (/locations/radio-tower-cat-ba) is the current best alternative for panoramic views over Lan Hà Bay and Cat Ba town.",
      },
      {
        question: "What is the best alternative to Cannon Fort for views on Cat Ba?",
        answer: "The Radio Tower viewpoint nearby is the go-to sunset and panoramic view spot since the fort closure. Follow the same road up toward the fort until the barrier, look left, and take the path up to the telecom tower. Full details at /locations/radio-tower-cat-ba.",
      },
      {
        question: "Will Cannon Fort reopen?",
        answer: "No confirmed reopening date as of 2026. The site is under long-term military closure. Check local sources or ask at your accommodation for the latest status before visiting.",
      },
    ],
    sentiment: {
      positive: "Historically significant site - if it reopens, the 360-degree views and WWII-era cannons and tunnels make it one of the more interesting stops on Cat Ba",
      negative: "Currently closed long-term with no confirmed reopening. Visitors who arrive expecting access will be turned away at the barrier.",
    },
  },
}