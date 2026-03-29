import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const phongNhaCave: Location = {
  slug: "phong-nha-cave",
  name: "Phong Nha Cave",
  provinces: ["quang-binh"],
  destination: "phong-nha-ke-bang",
  lat: "17.58187380883147",
  lng: "106.28397697966346",
  address: "Sơn Trạch, Bố Trạch, Quảng Bình",
  type: ["nature","cave"],
  categories: [],
  experiences: ["caving", "boat-tour", "photography"],
  tags: ["🚣 Boat Cave Tour", "🪨 Stalactites", "📸 Photography", "🌊 Underground River"],
  bestTime: "Feb – Aug (dry season; cave closes during flood season Sep – Dec)",
  entranceFee: "~150,000 VND + boat fee ~350,000 VND (shared)",
  openingHours: "7:00 AM – 4:00 PM (closed during flood season)",
  mapUrl: "https://www.google.com/maps?q=17.58187380883147,106.28397697966346",
  streetView: {},
  heroImage: heroUrl("phong-nha-cave8_quatqt"),
  gallery: [
    "phong-nha-cave4_rkecfp",
    "phong-nha-cave2_tp6udg",
    "phong-nha-cave_x8yx8z",
  ],
  seoDescription:
    "Phong Nha Cave is the oldest and most historically significant cave in the Phong Nha-Kẻ Bàng UNESCO World Heritage Site - a 7.7km limestone grotto with an underground river, navigated by wooden boat through cathedral chambers of ancient stalactites and glowing formations.",
  tips: [
    "The cave is only accessible by boat from Sơn Trạch village - the 30-minute river journey through the jungle is itself worth the trip",
    "Visit in the morning for the best light at the cave entrance - afternoon tours get dimmer natural light at the mouth",
    "The boat tour covers 1.5km inside the cave and 1.5km on the exterior Son River - the full round trip takes about 1.5 hours",
    "Phong Nha closes entirely from September to late November due to flooding - check conditions before planning",
    "Combine with Paradise Cave on the same day - they're different experiences and close enough to do both without backtracking",
  ],
  content: {
    intro:
      "Phong Nha Cave is the crown jewel of Phong Nha-Kẻ Bàng National Park and one of the oldest cave systems in Asia - formed approximately 400 million years ago, making the limestone older than most of the world's mountain ranges. The cave stretches 7.7km into the karst massif, with the Son River flowing through its base, and holds nine chambers connected by an underground waterway. UNESCO inscribed the site in 2003 specifically for its geological significance: the cave contains the world's longest underground river, the highest and widest underground passages, and the most beautiful subterranean lakes of any cave in Asia. The entry experience is unique - visitors board wooden boats at Sơn Trạch village and travel 30 minutes up the Son River through dense jungle before the cave entrance appears: a 25-metre-high arch of dripping limestone rising from the water.",
    howToGetThere:
      "Phong Nha Cave is accessed by boat from the boat dock at Sơn Trạch village, 50km north of Đồng Hới city. From Đồng Hới, take a taxi, motorbike, or the local bus to Sơn Trạch (about 50 minutes). Boats depart from the dock throughout the morning and are shared with other visitors - tickets include the boat fee. Most travellers stay in Sơn Trạch village (commonly called 'Phong Nha town') which has accommodation, restaurants, and easy access to all the national park caves.",
    whatToExpect:
      "The boat ride to the cave entrance takes 30 minutes along the Son River, through a landscape of karst cliffs and jungle. At the cave mouth, the boat enters directly into the cave system - the transition from bright river light to the cave's interior darkness is immediate and dramatic. Inside, the boat navigates through the first chambers, passing stalactites and stalagmites that reach from floor to ceiling, underground pools lit by the boat's lights, and sections of the river where the ceiling drops to within metres of the water. The cave walls show ancient Cham inscriptions and altars - the cave was used as a Hindu sanctuary from the 9th to 11th centuries. The deepest point accessible by boat is approximately 1.5km inside. The return journey is by the same route.",
    travelTips:
      "Phong Nha Cave is the most accessible of the four major caves in the national park - no hiking, no permits, no physical requirements. The boat tour format makes it suitable for all ages and fitness levels. For travellers with limited time, Phong Nha Cave and Paradise Cave together in one day covers the park's two most distinct experiences: the underground river boat tour and the dry cave walk. Son Doong requires a separate multi-day expedition. The cave closes during flood season (approximately September to November) - this is the single most important scheduling consideration for a Quảng Bình trip.",
  },
}
