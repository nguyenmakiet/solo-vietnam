import { Location } from "../location"
import { heroUrl } from "@/lib/cloudinary"

export const saoBeach: Location = {
  slug: "sao-beach",
  name: "Bãi Sao Beach",
  provinces: ["kien-giang"],
  destination: "phu-quoc",
  lat: "10°03'27.9\"N",
  lng: "104°02'12.3\"E",
  address: "Bãi Sao, An Thới, Phú Quốc, Kiên Giang",
  type: "beach",
  experiences: ["swimming", "snorkeling", "sunbathing", "seafood"],
  tags: ["🏖️ Beach", "🤿 Snorkeling", "🦞 Seafood", "🌊 Clear Water"],
  bestTime: "Nov – Apr (dry season, calm water)",
  entranceFee: "Free",
  openingHours: "Open 24/7",
  mapUrl: "https://maps.google.com/?q=10.0134,104.0498",
  heroImage: heroUrl("bai-sao-phu-quoc_ffa6xo"),   // ← public ID
  gallery: [
    "bai-sao-phu-quoc4_mkqxuw",
    "bai-sao-phu-quoc-3_qyf4lw",
    "bai-sao-phu-quoc-2_cezour",
  ],
  seoDescription:
    "Bãi Sao Beach on Phú Quốc island — powdery white sand, crystal-clear turquoise water, and far fewer crowds than the main tourist strip. One of the most beautiful beaches in Southeast Asia.",
  tips: [
    "Arrive before 9am to get the best stretch of sand before day-trippers show up",
    "Rent a motorbike from Dương Đông town — taxis charge a premium for the distance",
    "The seafood shacks at the north end of the beach are cheaper than the resort end",
    "Water is calmest November through April — avoid June to October when swells pick up",
  ],
  content: {
    intro:
      "Bãi Sao sits on the southeastern tip of Phú Quốc island, about 25km from Dương Đông town. The beach stretches for nearly 7km with impossibly white sand and shallow, calm water ideal for swimming. Unlike the resort-heavy north of the island, Bãi Sao still feels genuinely relaxed — a handful of casual seafood shacks, sunbed rentals, and clear water that rivals anything in Thailand.",
    howToGetThere:
      "From Dương Đông town, take the main road south toward An Thới then follow signs east to Bãi Sao — about 25km, 35–40 minutes by motorbike. Motorbike rental in town costs around 150,000–200,000 VND/day. Grab taxis are available but expensive for this distance. No public buses run this route.",
    whatToExpect:
      "The beach is wide and long enough that it never feels truly packed, even on weekends. The water is shallow for 50–100m out, making it safe for non-swimmers. A handful of beach bars and seafood restaurants line the back of the beach. Sunbeds and umbrellas can be rented for around 50,000–100,000 VND. Snorkeling gear is available to rent at a few stalls near the central section.",
    travelTips:
      "Bãi Sao is best as a half-day trip combined with Ham Ninh fishing village on the way back. The road between the two is one of the most scenic on the island. Bring cash — ATMs don't exist out here. If you're staying in the south near An Thới, Bãi Sao is a 10-minute ride and worth visiting every morning.",
  },
}