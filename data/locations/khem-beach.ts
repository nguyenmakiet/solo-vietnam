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
  bestMonths: [1, 2, 3, 4, 11, 12],
  entranceFee: "Free (public beach section); resort access varies",
  openingHours: "Open 24/7",
  mapUrl: "https://maps.google.com/?q=10.0289,104.0439",
  streetView: {embedUrl: "https://www.google.com/maps/embed?pb=!4v1775823366532!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ3U5T3VPZ3dF!2m2!1d10.03470318369725!2d104.0320096828678!3f201.38546082165098!4f-82.74351820072054!5f0.7820865974627469", },
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
  insights: {
    highlights: [
      "White sand beach with abundant palm trees providing natural shade throughout the day",
      "Well-maintained by dedicated cleaning staff; lifeguards on duty for swimmer safety",
      "Multiple beach clubs and restaurants; sunbeds available at 100-150k VND per 4 hours",
    ],
    thingsToKnow: {
      crowds: "Gets crowded by mid-morning; arrive before 8 am for peaceful experience. Morning peak time around 10 am when free sunbeds fill up quickly. Less crowded in northern Phu Quoc beaches.",
      difficulty: null,
      safety: "Lifeguards present. Some reports of security guards restricting access near Marriott hotel section. Water can be shallow in areas.",
      accessibility: "Easy parking for scooters nearby. Paid bathrooms and changing rooms (10,000 dong). Towel rental available (20k VND). No small shops; only restaurants with higher prices.",
      seasonal: "Can be busier during Tet holiday period (late December-early January). Water may contain floating trash due to sea currents and open ocean exposure.",
    },
    visitorTips: [
      "Arrive before 8 am to avoid crowds and secure free sunbeds before they fill up by 10 am",
      "Bring sun protection as tropical sun is strong by mid-morning; explore quieter spots further along shore",
      "Bring own towel to save money; skip restaurant drinks and meals as prices are high (250k+ per plate)",
    ],
    faq: [
      { question: "What time should I arrive to avoid crowds?", answer: "Arrive before 8 am for a peaceful, crowd-free experience. Free sunbeds fill up quickly by 10 am. Morning visits are significantly less crowded than afternoons." },
      { question: "How much do sunbeds cost and what else requires payment?", answer: "Sunbeds cost 100-150k VND per 4 hours (some free if you buy food/drinks). Bathrooms: 10k VND. Towel rental: 20k VND. Beach bar drinks: 50-150k VND. Meals: 250k+ VND." },
      { question: "Is the water clean and safe for swimming?", answer: "Water quality varies by area. Some sections have trash due to sea currents. Shallow waters make it suitable for families with small children. Lifeguards are present." },
    ],
    sentiment: {
      positive: "Most visitors praise white sand, palm tree shade, cleanliness efforts, and turquoise water. Many rate it best beach on Phu Quoc island with relaxing atmosphere and good amenities.",
      negative: "Significant plastic and trash pollution in water and sand from ocean currents. Overcrowding during peak hours. High prices for sunbeds, food, drinks, and facilities. Construction noise reported in some areas.",
    },
  },
}