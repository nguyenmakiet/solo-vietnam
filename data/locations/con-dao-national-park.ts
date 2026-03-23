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
  entranceFee: "~20,000 VND park entry; diving/snorkeling tours: 300,000–600,000 VND",
  openingHours: "Park office: 7:00 AM – 5:00 PM; trails and beaches open daily",
  mapUrl: "",
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
}
