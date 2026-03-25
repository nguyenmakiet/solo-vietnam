import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const catBaNationalPark: Location = {
  slug: "cat-ba-national-park",
  name: "Cát Bà National Park",
  provinces: ["hai-phong"],
  destination: "cat-ba",
  lat: "20.793772701115774",
  lng: "106.98943675013382",
  address: "Cát Bà, Hải Phòng",
  type: ["forest", "nature"],
  categories: [],
  experiences: ["trekking", "wildlife", "photography", "camping"],
  tags: ["🐒 Golden-Headed Langur", "🌿 Island Jungle", "🥾 Summit Trek", "🦜 Endemic Wildlife"],
  bestTime: "Apr – Jun or Sep – Nov (dry season, trails accessible, best wildlife sightings)",
  entranceFee: "~85,000 VND",
  openingHours: "7:00 AM – 4:00 PM",
  mapUrl: "https://www.google.com/maps?q=20.793772701115774,106.98943675013382",
  heroImage: heroUrl("cat-ba_national_park_pdjf7o"),
  gallery: [
    "cat-ba_national_park_pdjf7o",
    "cat-ba-national-park_efwqds",
  ],
  seoDescription:
    "Cát Bà National Park covers 17,000 hectares of the island's rugged interior - the last habitat of the critically endangered golden-headed langur, with jungle trails to a 331-metre summit viewpoint over Ha Long Bay and Lan Hà Bay simultaneously.",
  tips: [
    "Hire a guide at the park entrance - the trails are poorly marked and the primary forest sections are disorienting without a local guide",
    "The summit trail (Trail 1) is 18km return and takes 6–8 hours - start before 7 AM and bring plenty of water",
    "The golden-headed langur is one of the world's rarest primates with fewer than 70 individuals remaining - sightings are possible but not guaranteed; ask the park rangers which areas have had recent activity",
    "The shorter Trail 3 (4km loop) is suitable for less experienced hikers and still passes through primary forest with good bird and butterfly activity",
    "Combine the park with a Lan Hà Bay kayak tour - jungle in the morning, water in the afternoon is the best Cát Bà day",
  ],
  content: {
    intro:
      "Cát Bà National Park was established in 1986 and covers 17,363 hectares - roughly two-thirds of Cát Bà Island - making it one of the few national parks in Vietnam that protects both terrestrial and marine ecosystems simultaneously. The park's most significant conservation responsibility is the golden-headed langur (Trachypithecus poliocephalus), the world's most endangered primate: with fewer than 70 individuals remaining exclusively on Cát Bà Island, it has a smaller wild population than any other non-human primate on earth. The island's karst terrain - steep limestone peaks, dense evergreen forest, freshwater lakes, and cliffs dropping to the sea - provides habitat that has sheltered this population through centuries of hunting pressure, though it remains critically small. The park's terrestrial section offers trails through primary forest to a 331-metre summit with simultaneous views over Ha Long Bay to the north and Lan Hà Bay to the south - one of the finest coastal panoramas in northern Vietnam.",
    howToGetThere:
      "The national park entrance is 15km from Cát Bà town by motorbike or bicycle - about 25 minutes by motorbike on the main island road. The road passes through the park's southern buffer zone before reaching the main trailhead. Guides are available at the entrance and are strongly recommended for all trails beyond the shortest loop. Bicycles can be rented in Cát Bà town for the approach road but are not suitable for the trails themselves.",
    whatToExpect:
      "The park has three main trails of increasing difficulty. Trail 3 (4km) is a loop through lowland forest suitable for most visitors - good for birds, butterflies, and forest atmosphere without significant elevation. Trail 1 (18km return) climbs to the 331-metre summit through primary forest - demanding, requiring a full day, but rewarded by the panoramic bay views from the top. Trail 2 connects the park with the Hospital Cave area. The forest interior is dense and humid with large fig trees, climbing plants, and the sounds of cicadas and birds that replace all other ambient noise within minutes of leaving the trailhead.",
    travelTips:
      "Cát Bà National Park is the best reason to spend more than one night on the island - the beach and kayaking can be done in a day, but the park requires an early start and a full day commitment. The summit trail is one of the more demanding day hikes accessible from a Vietnamese island town, and the view - Ha Long Bay on one side, Lan Hà Bay on the other, the island's forested karst ridgeline in between - justifies every step. For wildlife travellers, the golden-headed langur is the rarest animal accessible from any tourist destination in Vietnam.",
  },
}
