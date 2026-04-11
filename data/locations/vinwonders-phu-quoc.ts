import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const vinWondersPhuQuoc: Location = {
  slug: "vinwonders-phu-quoc",
  name: "VinWonders Phú Quốc",
  provinces: ["kien-giang"],
  destination: "phu-quoc",
  lat: "10.340924472067309",
  lng: "103.8546052948659",
  address: "Bãi Dài, Gành Dầu, Phú Quốc, Kiên Giang",
  type: "attraction",
  categories: [],
  experiences: ["cable-car", "beach", "photography", "walking-tour"],
  tags: ["🎡 Theme Park", "🚡 Over-Sea Cable Car", "🏖️ Private Beach", "🎠 Family Activities"],
  bestTime: "Nov – Apr (dry season, best weather for outdoor areas)",
  bestMonths: [1, 2, 3, 4, 11, 12],
  entranceFee: "~900,000–1,300,000 VND (all-inclusive)",
  openingHours: "9:00 AM – 9:00 PM",
  mapUrl: "https://www.google.com/maps?q=10.340924472067309,103.8546052948659",
  streetView: {embedUrl: "https://www.google.com/maps/embed?pb=!4v1775894808228!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRG11ZVRkOGdF!2m2!1d10.33897502480739!2d103.846219973563!3f359.79354905617805!4f-16.897357835676758!5f0.7820865974627469", },
  heroImage: heroUrl("vinwonders-phu-quoc-hero_placeholder"),
  gallery: [],
  seoDescription:
    "VinWonders Phú Quốc is Vietnam's largest theme park - a resort island connected to Phú Quốc by the world's longest over-sea cable car, with water parks, rides, aquariums, and a private beach on the northern tip of the island.",
  tips: [
    "Buy tickets online in advance - significant discounts are available versus walk-up prices and the queues at the gate can be long on peak days",
    "The cable car alone is worth the trip - 7,899 metres over the sea to Hòn Thơm Island, one of the world's longest cable car routes",
    "Arrive early and go to the water park first - it gets crowded by midday and the queues for the slides are long in peak season",
    "The aquarium section is the best in southern Vietnam - the tunnel walk-through tank is genuinely impressive",
    "Families with children get the most value - adult visitors without children often find the ticket price high relative to the experience",
  ],
  content: {
    intro:
      "VinWonders Phú Quốc is the flagship attraction of Vingroup's resort development on Phú Quốc Island - a large-scale theme park and entertainment complex on the northern coast, connected to the main island by a cable car that crosses 7,899 metres of open sea to Hòn Thơm Island (An Thới archipelago). The complex includes a water park, thrill rides, live performance venues, a large aquarium, an indoor games area, a private beach, and dining facilities. The cable car that provides access is currently the world's longest non-stop three-cable gondola - a significant engineering achievement that has become one of the most visited attractions on the island in its own right.",
    howToGetThere:
      "The VinWonders cable car base station is at the southern tip of Phú Quốc Island near An Thới town, about 25km from Dương Đông (the main tourist town). By motorbike from Dương Đông, about 35–40 minutes on the coastal road. Taxi or Grab available from most resort areas. The cable car crosses to Hòn Thơm Island where the main theme park is located.",
    whatToExpect:
      "The cable car journey (15–20 minutes each way) provides aerial views over the An Thới archipelago and the Cambodian coastline on clear days. On Hòn Thơm Island, the complex is divided into themed zones - water park, adventure rides, cultural zone, nature trail, and beach. The aquarium is among the best in Vietnam with a large walk-through tunnel. The private beach on the island's southern shore is clean and calm.",
    travelTips:
      "VinWonders is best suited for families with children or travellers specifically interested in the cable car experience. For independent travellers focused on Phú Quốc's natural environment (beaches, snorkeling, national park), the high ticket price and theme park format may not align with what they came for. The cable car as a standalone experience - the aerial view over the archipelago - is genuinely spectacular regardless of what awaits at the other end.",
  },
}
