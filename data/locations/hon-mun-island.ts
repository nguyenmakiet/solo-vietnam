import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const honMunIsland: Location = {
  slug: "hon-mun-island",
  name: "Hòn Mun Island",
  provinces: ["khanh-hoa"],
  destination: "nha-trang",
  lat: "12.17068371125258",
  lng: "109.30185373625723",
  address: "Hòn Mun, Vịnh Nha Trang, Khánh Hòa",
  type: ["island", "nature"],
  categories: [],
  experiences: ["snorkeling", "diving", "photography", "boat-tour"],
  tags: ["🤿 Best Diving in Nha Trang", "🐠 Coral Reef", "🏝️ Marine Reserve", "🚢 Boat Tour"],
  bestTime: "Feb – Sep (dry season, best visibility for diving and snorkeling)",
  entranceFee: "~50,000 VND marine park fee; diving tours: 600,000–1,200,000 VND",
  openingHours: "Accessible by boat tour daily; departures 7:30 AM – 8:30 AM",
  mapUrl: "https://www.google.com/maps?q=12.17068371125258,109.30185373625723",
  streetView: {},
  heroImage: heroUrl("hon-mun-island-hero_placeholder"),
  gallery: [],
  seoDescription:
    "Hòn Mun Island is the centrepiece of Nha Trang Marine Protected Area - the best diving and snorkeling site in Nha Trang Bay, with the highest coral coverage and fish diversity of any island in the bay, 10km offshore from Nha Trang city.",
  tips: [
    "Book a diving or snorkeling tour rather than going independently - the marine protected area requires licensed operators and the guides know the best reef sections",
    "Visibility is best from March to July - the dry season water is clearest and the coral colours are most vivid",
    "The north side of the island has the most intact coral - ask your tour operator to include this section rather than the more trafficked southern approach",
    "Bring reef-safe sunscreen only - the marine park enforces restrictions on chemical sunscreens that damage coral",
    "Combine Hòn Mun with Hòn Tằm or Hòn Một on a full-day island hopping tour - the bay has 19 islands and most tours cover 3–4 stops",
  ],
  content: {
    intro:
      "Hòn Mun - 'Ebony Island' - is a small rocky island 10km southeast of Nha Trang city, designated as a marine protected area and the core diving site of Nha Trang Bay. The island's underwater environment is the most biodiverse in the bay: coral coverage on the northern and eastern reefs reaches 60–70% in the healthiest sections, supporting populations of parrotfish, angelfish, moray eels, sea turtles, and occasional reef sharks. The island itself is steep and largely inaccessible on land - visitors approach by boat and enter the water directly from the surface. Nha Trang Bay was designated a Marine Protected Area in 2001, with Hòn Mun as its core zone, limiting the type and volume of activity permitted around the reef. Despite this, the site receives significant pressure from the volume of tourism in Nha Trang - diving and snorkeling quality varies considerably depending on which operator mày uses and which sections of reef they access.",
    howToGetThere:
      "Hòn Mun is only accessible by boat. Diving and snorkeling tours depart from Cầu Đá pier in southern Nha Trang city, approximately 5km from the central beach strip. The boat journey takes about 45 minutes. Multiple operators run daily tours - prices vary significantly based on group size, equipment quality, and which reefs are included. Day tours typically depart 7:30–8:00 AM and return by 3:00–4:00 PM, covering 3–4 islands with a snorkeling or diving stop at Hòn Mun. Dedicated diving tours with certified instruction are also available for beginners.",
    whatToExpect:
      "The diving and snorkeling experience at Hòn Mun ranges from excellent to disappointing depending on conditions and operator. At its best - calm water, good visibility, northern reef sections - the coral density and fish variety are among the best in southern Vietnam. The reef begins at 3–5 metres depth and extends to 20+ metres on the deeper dive sites. Snorkelers access the shallower sections directly from the surface; divers descend through the coral slope to the deeper formations. The island surface is steep and rocky with minimal beach - the experience is entirely water-based. Most tours anchor in a sheltered bay for lunch before moving to the next island.",
    travelTips:
      "Hòn Mun's quality depends heavily on the operator - bargain basement island hopping tours (some as cheap as 150,000 VND) access overcrowded reef sections with poor equipment; mid-range and dedicated diving operators provide a significantly better experience. If diving specifically is the priority, book with a PADI-certified dive centre in Nha Trang rather than a general island tour. The marine park fee is separate from the tour cost and collected at the pier. October and November bring rough seas and suspended tours - check conditions before booking.",
  },
}
