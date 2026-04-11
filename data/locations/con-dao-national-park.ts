import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const conDaoNationalPark: Location = {
  slug: "con-dao-national-park",
  name: "Con Dao National Park",
  provinces: ["vung-tau"],
  destination: "con-dao",
  lat: "8.700380477433058",
  lng: "106.59713651574016",
  address: "Côn Đảo, Bà Rịa - Vũng Tàu",
  type: "nature",
  categories: [],
  experiences: ["wildlife", "trekking", "snorkeling", "photography", "kayaking"],
  tags: ["🐢 Sea Turtle Nesting", "🌿 Marine National Park", "🐠 Coral Reefs", "🥾 Jungle Trails"],
  bestTime: "May – Sep (sea turtle nesting season; dry and calm seas)",
  bestMonths: [5, 6, 7, 8, 9],
  entranceFee: "~20,000 VND park entry; diving/snorkeling tours: 300,000–600,000 VND",
  openingHours: "Park office: 7:00 AM – 5:00 PM; trails and beaches open daily",
  mapUrl: "https://www.google.com/maps?q=8.700380477433058,106.59713651574016",
  streetView: {},
  heroImage: heroUrl("con-dao-national-park-hero_placeholder"),
  gallery: [],
  seoDescription:
    "Con Dao National Park protects 80% of the Con Dao archipelago - 14 islands of pristine coral reefs, sea turtle nesting beaches, hawksbill habitat, and jungle trails through one of Vietnam's least disturbed coastal ecosystems.",
  tips: [
    "Book a sea turtle watching tour through the national park office - it's strictly managed, guides lead small groups to nesting beaches at night from May to October",
    "The best snorkeling is around Hon Tai and Hon Tre Lon islands - arrange a boat from the national park jetty or through your accommodation",
    "The Dam Tre lagoon kayaking route is the park's best half-day activity - calm water, mangroves, and almost no other visitors",
    "Register at the park office before any jungle trek - trails are unmarked and a guide is strongly recommended for anything beyond the main paths",
    "Bring reef-safe sunscreen only - the national park enforces strict no-chemical-sunscreen rules at snorkeling sites",
  ],
  content: {
    intro:
      "Con Dao National Park covers 80% of the Con Dao archipelago - 14 islands and approximately 14,000 hectares of marine environment in the South China Sea, 185km from Ho Chi Minh City. Established in 1993, the park protects some of the most intact coral reef systems remaining in Vietnam, along with nesting beaches for green sea turtles and hawksbill turtles - Côn Đảo is one of the most important sea turtle conservation sites in Southeast Asia, with documented nesting activity going back decades. The terrestrial park covers dense evergreen forest with populations of black squirrels, long-tailed macaques, and over 180 bird species. The combination of intact marine environment, low visitor numbers, and functioning conservation infrastructure makes Con Dao National Park qualitatively different from most protected areas in Vietnam - the reefs are genuinely healthy, the turtles genuinely nest here, and the jungle genuinely feels wild.",
    howToGetThere:
      "The national park headquarters is in Côn Đảo town - a short walk or motorbike ride from most accommodation on the island. Boat trips to the outer islands and snorkeling sites depart from the park jetty near the headquarters. The park office arranges guided treks, boat tours, and the sea turtle watching programme. All sea turtle watching must be booked through the park office - independent access to nesting beaches at night is prohibited. Côn Đảo itself is reached by flight from Ho Chi Minh City (45 minutes).",
    whatToExpect:
      "The park's activities divide into marine and terrestrial. Marine: snorkeling and diving around the outer islands, particularly Hon Tai, Hon Tre Lon, and Hon Cau, where coral coverage and fish diversity are among the highest in southern Vietnam. Kayaking through Dam Tre lagoon - a sheltered bay of calm water, mangroves, and sandbanks - is the park's best accessible water activity. Terrestrial: jungle trails through the main island's forested interior, ranging from short nature walks to full-day treks to the island's highest point. Sea turtle watching: from May to October, park rangers lead small groups (maximum 10 people) to nesting beaches at night to observe green turtles coming ashore to lay eggs - one of the most extraordinary wildlife experiences available in Vietnam.",
    travelTips:
      "Con Dao National Park is the primary reason to visit Côn Đảo for nature travellers - the history and the prison are compelling, but the marine environment is what makes the island genuinely exceptional. The sea turtle programme is the single most sought-after experience and books up weeks in advance in peak season (July–August) - contact the park office before your trip, not after arrival. The diving here is consistently rated among the best in Vietnam by divers who have also dived Phú Quốc and Nha Trang - lower visibility than some sites, but far higher fish and coral density.",
  },
  insights: {
    highlights: [
      "Diverse wildlife including endemic Côn Đảo black squirrels, monkeys, monitor lizards, and wild boar in rainforest setting",
      "Multiple trail options leading to caves, beaches, waterfalls, and Đầm Tre lagoon with marked stone paths",
      "Sea turtle conservation tours available, including baby turtle release experiences and snorkeling in coral reefs",
    ],
    thingsToKnow: {
      crowds: "Generally few visitors on trails; you may have beaches mostly to yourself, making it peaceful but potentially isolated",
      difficulty: "Moderate to challenging hikes with steep descents to beaches and climbs back up. Moss-covered stone paths are slippery. Heat and humidity can be intense; proper hiking shoes recommended over flip-flops",
      safety: "Aggressive monkeys at entrance—do not linger or access backpacks around them. Wild boar present in forest. Jellyfish in water requires protective clothing like rash guards",
      accessibility: "Scooter/motorbike accessible to entrance. Well-maintained marked trails with some paved sections. Visitor Centre has toilets",
      seasonal: "Waterfall visibility depends on rainfall; dry season produces minimal water flow. Best visited during rainy season for waterfall views. Hike in early morning for best waterfall experience and cooler temperatures",
    },
    visitorTips: [
      "Bring plenty of water, phone battery, and data. Wear proper hiking boots with grip; moss-covered paths are slippery hazards",
      "Plan at least 2 days to explore multiple sites like Đầm Tre lagoon (4-5 hours) and Hòn Bảy Cạnh islet. Start early morning hikes",
      "Use turtle tour guides for English-language information; main office staff speak limited English. Book sea turtle tours in person if foreign credit cards don't work online",
    ],
    faq: [
      { question: "How much does entrance cost and what are ticket details?", answer: "Entrance is 50,000-60,000 VND per person per day. Buy tickets at Visitor Centre ticket office. Ticket validity is 12 hours per day. COVID declaration required at ticket office" },
      { question: "Why is the waterfall not impressive?", answer: "Waterfall is weather-dependent and diminishes significantly in dry season. It originates from a small stream, not heavy water flow. Best visited during rainy season or after rain" },
      { question: "What wildlife should I expect to see?", answer: "Endemic Côn Đảo black squirrels, monkeys, monitor lizards, wild boar, birds, crabs, and various smaller lizards. Aggressive monkeys congregate at trail entrance—maintain distance" },
    ],
    sentiment: {
      positive: "Most visitors praise wildlife diversity, well-maintained trails, and forest experiences. Sea turtle conservation tours highly appreciated. Many found solitude and peaceful exploration rewarding despite challenging conditions",
      negative: "Significant complaints about litter and plastic waste throughout park despite protected status. Moss-covered stone paths create genuine slip hazards. Beaches rocky with limited swimming. Waterfall underwhelming in dry season. Beach quality varies; some areas dirty with washed-up trash. Limited English-speaking staff",
    },
  },
}
