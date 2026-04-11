import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const frenchVillageBaNa: Location = {
  slug: "french-village-ba-na",
  name: "French Village",
  provinces: ["da-nang"],
  destination: "ba-na-hills",
  lat: "15.997655145396397",
  lng: "107.98932655723252",
  address: "Bà Nà Hills, Hoà Ninh, Hoà Vang, Đà Nẵng",
  type: "attraction",
  categories: [],
  experiences: ["photography", "walking-tour", "food"],
  tags: ["🏰 French Colonial Architecture", "🎡 Fantasy Park", "🍷 Mountain Winery", "📸 Photography"],
  bestTime: "Mar – Aug (dry season, clearest skies, best for outdoor photography)",
  bestMonths: [3, 4, 5, 6, 7, 8],
  entranceFee: "Included in Bà Nà Hills ticket (~1,500,000 VND)",
  openingHours: "7:30 AM – 9:00 PM (within Bà Nà Hills complex)",
  mapUrl: "https://www.google.com/maps?q=15.997655145396397,107.98932655723252",
  streetView: {embedUrl: "https://www.google.com/maps/embed?pb=!4v1775802336159!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRDQ4TWJ2amdF!2m2!1d15.99772141975089!2d107.9941198829035!3f44.81667518592979!4f-4.621657097063633!5f0.7820865974627469", },
  heroImage: heroUrl("french-village-ba-na-hill2_wg42xj"),
  gallery: [
    "french-village-ba-na-hill4_x88wdl",
    "french-village-ba-na-hill_kffdfd",
    "french-village-ba-na-hill3_fhdo93",
  ],
  seoDescription:
    "The French Village at Bà Nà Hills is a meticulous recreation of a European mountain town at 1,487 metres - cobbled streets, a winery, a beer hall, a cathedral, and Fantasy Park, an indoor theme park built inside a recreated French fortress above the clouds.",
  tips: [
    "Fantasy Park inside the village is included in the ticket - the drop tower and 4D cinema are worth doing if mày have time after the Golden Bridge",
    "The winery produces its own Bà Nà Hills label wines - the tasting room is free to enter and the wines are surprisingly drinkable",
    "The village is most atmospheric in the early morning before tour groups arrive - the cobbled streets with mist rolling through genuinely resemble a mountain town in Europe",
    "The beer hall (Bavarian-style, inside the village) serves German-style draught beer - a surreal experience at 1,487 metres above the Vietnamese coast",
    "Debay Wine Cellar, carved into the mountain below the village, is one of the more unusual rooms in Vietnam - cool, dark, and genuinely old (built by the French in 1923)",
  ],
  content: {
    intro:
      "The French Village at Bà Nà Hills is a full-scale recreation of a European mountain resort town, built at 1,487 metres on the summit plateau of the Trường Sơn range. The original French hill station here was established in 1919 and destroyed during the wars - the current complex, built by Sun Group and completed between 2009 and 2016, is an interpretation rather than a restoration, recreating the aesthetic of the colonial era with modern construction. Cobbled streets wind between buildings styled after French provincial architecture - a cathedral, a wine cellar (the original Debay cellar from 1923 is genuine), a beer hall, restaurants, hotels, and gardens. At the centre of the village sits Fantasy Park, an indoor theme park occupying multiple floors of a recreated French fortress, with rides, a wax museum, a games hall, and a 4D cinema.",
    howToGetThere:
      "The French Village is only accessible via the Bà Nà Hills cable car system - the upper terminal opens directly into the village. From Đà Nẵng city centre, take a taxi or Grab to the Suối Mơ base station (45 minutes, 250,000–350,000 VND), then ride the cable car to the summit (20 minutes). The village is the central hub of the complex - the Golden Bridge is 15 minutes walk uphill from the village, and the lower gardens are accessible by a second internal cable car.",
    whatToExpect:
      "The village occupies a wide plateau at the summit, with the main street running several hundred metres between the cable car terminal and the cathedral. Side streets lead to the winery, the Debay Wine Cellar (carved into the rock face), the beer hall, and the hotels. Fantasy Park occupies a large multi-story building with an imposing facade - inside, the scale is significant, with dozens of rides and attractions spread across multiple levels. The outdoor gardens around the village are planted with temperate flowers - roses, hydrangeas, lavender - that don't grow on Vietnam's coast, adding to the European atmosphere. The temperature at the summit is consistently 5–7°C cooler than Đà Nẵng, and the village is designed for the climate with heated indoor spaces.",
    travelTips:
      "The French Village is the most divisive part of Bà Nà Hills - travellers who enjoy theme parks and the novelty of European architecture on a Vietnamese mountain find it charming and entertaining; travellers seeking authentic experiences find it disorienting. The Debay Wine Cellar is the one genuinely historic element - built by the French in 1923, it survived the wars and was incorporated into the modern complex. For travellers primarily visiting for the Golden Bridge, the village is a convenient place to eat lunch and shelter from afternoon rain before descending. The Fantasy Park rides are best for families with children - adults without children typically spend 30–45 minutes in the village before moving on.",
  },
  insights: {
    highlights: [
      "European-style architecture with cobblestone streets and charming buildings high in mountains",
      "Full amusement park with roller coaster, carousel, arcade games, and fair booths",
      "On-site hotels, restaurants, brewery, spa, and live music venues for extended stays",
    ],
    thingsToKnow: {
      crowds: null,
      difficulty: null,
      safety: null,
      accessibility: null,
      seasonal: "Cloudy mountain weather common; cool air typical at elevation",
    },
    visitorTips: [
      "Stay overnight in village hotels to experience sunset and sunrise from the mountains",
      "Hire a guide or plan extra time to explore entire Bảo Nhai complex beyond French Village",
      "Bring camera for numerous photo spots throughout cobblestone streets and architecture",
    ],
    faq: [
      { question: "What attractions are included besides the French architecture?", answer: "Amusement park with adjustable-speed roller coaster, carousel, arcade games, fun fair booths, brewery, restaurants, spa, and live music venues." },
      { question: "Is it worth staying overnight at Bảo Nhai?", answer: "Yes. Hotels inside French Village allow sunrise and sunset viewing from mountains and more exploration time of the entire complex." },
      { question: "What is the French Village architecture based on?", answer: "Inspired by early 20th-century French colonial style. Includes replicas like Saint Denis Church with vaulted roofs and clock tower." },
    ],
    sentiment: {
      positive: "Overwhelming praise for unique European experience in Vietnam, engaging activities for families, well-maintained architecture, and scenic mountain setting",
      negative: null,
    },
  },
}
