import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const benHaiRiver: Location = {
  slug: "ben-hai-river",
  name: "Bến Hải River & Hiền Lương Bridge",
  provinces: ["quang-tri"],
  destination: "dong-ha",
  lat: "17.005352993989394",
  lng: "107.05091365024349",
  address: "Vĩnh Linh – Gio Linh, Quảng Trị",
  type: ["history", "landmark", "river"],
  categories: [],
  experiences: ["history", "culture", "photography", "walking-tour", "cycling"],
  tags: ["🌉 Reunification Bridge", "🏳️ DMZ History", "📸 Photography", "🚗 DMZ Road Trip"],
  bestTime: "Feb – Aug (dry season; avoid Sep–Nov typhoon season)",
  bestMonths: [2, 3, 4, 5, 6, 7, 8],
  entranceFee: "Free (Hiền Lương Bridge Museum: ~10,000–20,000 VND)",
  openingHours: "Open daily; museum typically 7:00–11:30 and 13:30–17:00",
  mapUrl: "https://www.google.com/maps?q=17.065800,107.064400",
  streetView: { embedUrl: "https://www.google.com/maps/embed?pb=!4v1775229992256!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ2toS2ZBRXc.!2m2!1d17.00396902825991!2d107.0520874754901!3f7.371032364575967!4f2.680967981127708!5f0.7820865974627469" },
  heroImage: heroUrl("ben-hai-river-quang-tri-2_vtz2qv"),
  gallery: [
    "ben-hai-river-quang-tri-4_ulaort",
    "ben-hai-river-quang-tri-2_vtz2qv",
    "ben-hai-river-quang-tri-3_mdpyka",
    "ben-hai-river-quang-tri_fb20zk",
  ],
  seoDescription:
    "The Bến Hải River and Hiền Lương Bridge mark the former demilitarized zone that divided Vietnam at the 17th parallel from 1954 to 1975 - one of the most historically significant and quietly moving sites on the Vietnam War trail in Quảng Trị.",
  tips: [
    "The Hiền Lương Bridge is a reconstruction - the original was destroyed during the war - but the site includes the original flagpole base, memorials, and a small museum with genuine artifacts",
    "Stand on the bridge and look both ways: the river is narrow and unremarkable-looking, which is part of what makes the history so affecting - a small waterway that divided families for 21 years",
    "This is a natural anchor point for a full DMZ day trip from Đông Hà or Đồng Hới - combine with Khe Sanh Combat Base, Vinh Mốc Tunnels, and Trường Sơn National Cemetery",
    "The museum captions are primarily in Vietnamese; having some prior knowledge of the Geneva Accords and the partition of Vietnam enriches the visit significantly",
    "Bring a hat - the riverbank site is flat and exposed, with no shade over the bridge or memorial areas",
  ],
  content: {
    intro:
      "The Bến Hải River was, for 21 years, the line that divided Vietnam. Under the Geneva Accords of 1954, the river at the 17th parallel became the temporary demarcation line between North and South Vietnam - a partition intended to last two years until national reunification elections that never happened. The Hiền Lương Bridge across the river, on what was then Highway 1, became the physical symbol of that division: the north half painted red, the south half painted yellow, with a flagpole on each bank in a constant competition of height and flag size. Families separated overnight and did not reunite for over two decades. Today the bridge has been reconstructed and the site developed as a memorial. It is one of the most historically resonant points on the entire Vietnam War trail, and one of the least touristically inflated.",
    howToGetThere:
      "The Bến Hải River crossing is on National Highway 1A, approximately 22km north of Đông Hà and 100km north of Huế. By car or motorbike along Highway 1A, the bridge is clearly signposted. Đông Hà is the most practical base for DMZ exploration - it has good guesthouse options and is the hub from which most DMZ tour operators run day trips. The bridge is also accessible by local bus running between Đông Hà and Đồng Hới along Highway 1A.",
    whatToExpect:
      "The site includes the reconstructed Hiền Lương Bridge across the river, the restored original flagpole (with the North Vietnamese flag flying), a small museum with wartime photographs and artifacts, and several memorials along the northern riverbank. The bridge itself is walkable and the crossing takes only a few minutes - the historical weight comes from understanding what you're standing on, not from the physical scale of the site. The surrounding landscape is flat, agricultural, and quiet. Allow 1–1.5 hours for the site with the museum.",
    travelTips:
      "The Bến Hải River hits differently depending on how much history mày brings to it. Visitors who arrive knowing the Geneva Accords, the flag pole wars, and the personal stories of separation tend to find the site profoundly moving. Visitors who arrive cold often find it underwhelming - a small bridge over a small river. The right preparation is a half-hour of reading beforehand. The DMZ as a whole is one of the most historically dense corridors in Vietnam, and Bến Hải is its emotional center. It belongs on any serious itinerary through central Vietnam.",
  },
  insights: {
    highlights: [
      "Bridge painted half-blue (North) and half-yellow (South) symbolizing Vietnam's 1954-1975 division at 17th Parallel",
      "Monuments on both sides depicting families separated during war, with 38.6-meter flag poles built by competing sides",
      "Small museum displaying historical photos and artifacts from the Vietnam War period",
    ],
    thingsToKnow: {
      crowds: null,
      difficulty: null,
      safety: null,
      accessibility: "Wheelchair-friendly grounds but no museum access. No disabled toilet facilities. Uneven terrain with minimal shade",
      seasonal: "Very hot mid-August with minimal shade; bring water and sun protection",
    },
    visitorTips: [
      "Pay 50,000 VND entrance fee to walk the bridge; free views available from outside the paid area",
      "Hire a guide or bring someone who reads Vietnamese to understand plaques and historical context",
      "North side is well-maintained; south side grounds are poorly maintained with overgrown grass and bushes",
    ],
    faq: [
      { question: "Can I walk across the old bridge?", answer: "Yes, for 50,000 VND entrance fee. The bridge is half-blue (North) and half-yellow (South), divided at the center. A modern bridge nearby is free." },
      { question: "Is the original bridge still standing?", answer: "No. The original was destroyed in 1967 bombing. Current bridge is reconstructed. Only the old archway entrance remnants remain." },
      { question: "What should I know before visiting?", answer: "Expect extreme heat with minimal shade. Museum and plaques are in Vietnamese. Many visitors find 50,000 VND expensive for limited indoor exhibits." },
    ],
    sentiment: {
      positive: "Visitors appreciate the historical significance and symbolic value of the bridge as a powerful reminder of Vietnam's division and reunification",
      negative: "Site maintenance is poor on south side; museum is dated with dirty displays; entrance fee considered overpriced relative to attractions; lack of English signage and facility upkeep",
    },
  },
}
