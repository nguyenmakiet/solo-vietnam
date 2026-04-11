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
  categories: [],
  experiences: ["beach", "swimming", "photography"],
  tags: ["🏖️ Beach", "🤿 Snorkeling", "🦞 Seafood", "🌊 Clear Water"],
  bestTime: "Nov – Apr (dry season, calm water)",
  bestMonths: [1, 2, 3, 4, 11, 12],
  entranceFee: "Free",
  openingHours: "Open 24/7",
  mapUrl: "https://maps.google.com/?q=10.0134,104.0498",
  streetView: {embedUrl: "https://www.google.com/maps/embed?pb=!4v1775883553047!6m8!1m7!1sCAoSHENJQUJJaENyVno5WVBqY21kN0t2Y3l1QVg2Z0o.!2m2!1d10.0533821626795!2d104.0365416263174!3f187.29732574293993!4f-26.714565732041905!5f0.7820865974627469", },
  heroImage: heroUrl("bai-sao-phu-quoc_ffa6xo"),   // ← public ID
  gallery: [
    "bai-sao-phu-quoc4_mkqxuw",
    "bai-sao-phu-quoc-3_qyf4lw",
    "bai-sao-phu-quoc-2_cezour",
  ],
  seoDescription:
    "Bãi Sao Beach on Phú Quốc island - powdery white sand, crystal-clear turquoise water, and far fewer crowds than the main tourist strip. One of the most beautiful beaches in Southeast Asia.",
  tips: [
    "Arrive before 9am to get the best stretch of sand before day-trippers show up",
    "Rent a motorbike from Dương Đông town - taxis charge a premium for the distance",
    "The seafood shacks at the north end of the beach are cheaper than the resort end",
    "Water is calmest November through April - avoid June to October when swells pick up",
  ],
  content: {
    intro:
      "Bãi Sao sits on the southeastern tip of Phú Quốc island, about 25km from Dương Đông town. The beach stretches for nearly 7km with impossibly white sand and shallow, calm water ideal for swimming. Unlike the resort-heavy north of the island, Bãi Sao still feels genuinely relaxed - a handful of casual seafood shacks, sunbed rentals, and clear water that rivals anything in Thailand.",
    howToGetThere:
      "From Dương Đông town, take the main road south toward An Thới then follow signs east to Bãi Sao - about 25km, 35–40 minutes by motorbike. Motorbike rental in town costs around 150,000–200,000 VND/day. Grab taxis are available but expensive for this distance. No public buses run this route.",
    whatToExpect:
      "The beach is wide and long enough that it never feels truly packed, even on weekends. The water is shallow for 50–100m out, making it safe for non-swimmers. A handful of beach bars and seafood restaurants line the back of the beach. Sunbeds and umbrellas can be rented for around 50,000–100,000 VND. Snorkeling gear is available to rent at a few stalls near the central section.",
    travelTips:
      "Bãi Sao is best as a half-day trip combined with Ham Ninh fishing village on the way back. The road between the two is one of the most scenic on the island. Bring cash - ATMs don't exist out here. If you're staying in the south near An Thới, Bãi Sao is a 10-minute ride and worth visiting every morning.",
  },
  insights: {
    highlights: [
      "Soft white sand and crystal-clear turquoise water with calm, shallow bay ideal for swimming",
      "Less crowded than nearby Khem Beach with a more relaxed, local atmosphere",
      "Water sports available including jet skis, parasailing, banana boats, and paddleboarding",
    ],
    thingsToKnow: {
      crowds: "Significantly quieter than Khem Beach. Morning visits before 10am are least crowded; afternoon brings busloads of tourists and increased water sports noise",
      difficulty: null,
      safety: null,
      accessibility: "Free public beach access via Grab taxi drop-off point with parking for cars/scooters. Paid access through beach clubs (60,000-100,000 VND) with food credit options. No public showers or restrooms; showers available only with food purchase",
      seasonal: "After rainy season, increased debris and dried leaves wash ashore. Windy conditions can create choppy waters",
    },
    visitorTips: [
      "Visit early morning (before 10am) on the right side near Highland Coffee to avoid jet ski noise and crowds",
      "Bring your own towel to avoid 150,000 VND sunbed charges, or use free public beach access instead of paid club entrances",
      "Wear shoes or use a towel to avoid sand flies; be aware significant litter exists in undeveloped beach areas",
    ],
    faq: [
      { question: "Do I have to pay to access Sao Beach?", answer: "Free public access via Grab drop-off point. Paid beach clubs charge 60,000-100,000 VND entrance (often credited toward food/drinks). Sunbeds cost 150,000 VND separately." },
      { question: "When is the best time to visit to avoid crowds and noise?", answer: "Early morning before 10am is quietest. Afternoon brings busloads of tourists and water sports noise. Visit weekdays if possible for fewer crowds." },
      { question: "Is the beach clean and is there trash in the water?", answer: "Significant litter exists in undeveloped areas and along coastline, mostly concentrated away from sunbed zones. Managed beach club areas are well-maintained. No trash bins available." },
    ],
    sentiment: {
      positive: "Beautiful natural scenery with white sand and clear water. Peaceful atmosphere compared to other Phu Quoc beaches. Good value food and drinks with friendly vendors",
      negative: "Widespread plastic waste and litter on beach and in water. Jet ski noise and gasoline smell disrupt experience. Poor waste management and lack of public amenities. Crowded afternoon conditions",
    },
  },
}