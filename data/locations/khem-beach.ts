import { Location } from "../location"
import { heroUrl } from "@/lib/cloudinary"

export const khemBeach: Location = {
  slug: "khem-beach",
  name: "Khem Beach",
  provinces: ["kien-giang"],
  destination: "phu-quoc",
  lat: "10.0366035",
  lng: "104.0308698,92",
  address: "An Thới, Phú Quốc, Kiên Giang",
  type: "beach",
  categories: [],
  experiences: ["beach", "swimming", "photography"],
  tags: ["🏖️ Beach", "🌊 Clear Water", "🌅 Sunset", "🏨 Resort"],
  bestTime: "Nov – Apr (dry season, calm water)",
  entranceFee: "Free (public beach section); resort access varies",
  openingHours: "Open 24/7",
  mapUrl: "https://maps.google.com/?q=10.0289,104.0439",
  streetView: {},
  heroImage: heroUrl("khem-beach2_sbrhql"),
  gallery: [
    "khem-beach2_sbrhql",
    "khem-beach_l6quut",
  ],
  seoDescription:
    "Khem Beach - one of Phú Quốc's most beautiful and least crowded beaches, a long arc of fine white sand on the southern coast backed by jungle hills and lapped by exceptionally clear water.",
  tips: [
    "The public section of Khem Beach is at the northern end - the southern section is occupied by a private resort",
    "The water here is calmer and clearer than Bãi Sao on most days due to the sheltered bay position",
    "No facilities on the public section - bring water and food",
    "The road down to Khem Beach is steep and rough at the end - go slowly on a motorbike",
  ],
  content: {
    intro:
      "Khem Beach sits on Phú Quốc's southern coast near An Thới, largely hidden from the main tourist trail by a steep jungle hill. The beach is a long, gently curving arc of fine white sand with water that runs from pale turquoise in the shallows to deep blue further out. A private resort occupies the southern section, but the northern end remains public and is often nearly empty even in peak season.",
    howToGetThere:
      "From Dương Đông, head south about 25km to An Thới then follow signs toward Khem Beach - the last section of road is steep and unpaved in parts. The total journey takes 40–45 minutes by motorbike. No public transport runs to Khem Beach. Motorbike rental is the most practical option.",
    whatToExpect:
      "The public section of the beach has no facilities - no sunbeds, no restaurants, no toilets. What it does have is exceptional water clarity, soft sand, and very few people. The jungle hillside comes right down to the beach in places, giving it a secluded, slightly wild feel. The resort at the southern end has a restaurant open to non-guests for a fee.",
    travelTips:
      "Khem Beach is best visited as part of a southern Phú Quốc day that combines the Hòn Thơm Cable Car and Bãi Sao Beach. Bring everything you need - snacks, water, sunscreen - as there are no vendors on the public beach. The beach faces west and gets excellent late afternoon light.",
  },
}