import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const westLake: Location = {
  slug: "west-lake",
  name: "West Lake",
  provinces: ["ha-noi"],
  destination: "",
  lat: "21.053478320090974",
  lng: "105.82609433344021",
  address: "Hồ Tây, Tây Hồ, Hà Nội",
  type: ["lake", "nature", "attraction"],
  categories: [],
  experiences: ["cycling", "walking-tour", "food", "photography", "culture"],
  tags: ["🚲 Lake Loop Cycling", "🌅 Sunset Views", "☕ Cafe District", "🛕 Ancient Pagodas"],
  bestTime: "Oct - Apr (cool dry season; cycling the perimeter is most comfortable in cool weather; lotus blooms Jun - Jul)",
  bestMonths: [10, 11, 12, 1, 2, 3, 4],
  entranceFee: "Free",
  openingHours: "Open 24 hours",
  mapUrl: "https://www.google.com/maps?q=21.053478320090974,105.82609433344021",
  streetView: { embedUrl: "https://www.google.com/maps/embed?pb=!4v1776265503714!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ0czTXY5M1FF!2m2!1d21.05323801658285!2d105.8260943334402!3f6.587298922391142!4f-12.357281024659542!5f0.7820865974627469", },
  heroImage: heroUrl("west-lake-ha-noi_gltgkq"),
  gallery: [
    "west-lake-ha-noi_gltgkq",
    "west-lake-ha-noi-2_c2fuop",
    "west-lake-ha-noi-3_jteemw",
    "west-lake-ha-noi-5_qevpxt",
    "west-lake-ha-noi-5_qevpxt",
  ],
  seoDescription:
    "West Lake is Hanoi's largest lake - a 500-hectare expanse in the Tây Hồ district ringed by upscale cafes, ancient pagodas, seafood restaurants, and a 17km cycling path that offers the most pleasant outdoor escape within the city limits.",
  tips: [
    "The 17km perimeter cycling loop takes 1.5-2 hours at a relaxed pace - bicycle rental is available at multiple points around the lake for around 50,000-80,000 VND per day",
    "The Tây Hồ district around the lake has become Hanoi's most concentrated expat and upscale cafe area - the lakeside cafes on the western shore are particularly good for sunset",
    "Tran Quoc Pagoda on the eastern shore and Quan Thanh Temple on the southern shore are the two main historical sites around the lake - both are easily combined into the cycling loop",
    "The fresh shrimp cake (bánh tôm Hồ Tây) is a Hanoi specialty associated with West Lake - several restaurants on the northern shore have served it for decades",
    "June and July bring lotus blooms to the shallower sections of the lake - early morning is the best time to see them before the heat closes the flowers",
  ],
  content: {
    intro:
      "West Lake - Hồ Tây - is the largest lake in Hanoi, covering approximately 500 hectares in the Tây Hồ district northwest of the Old Quarter. The lake occupies a former channel of the Red River and has been the setting for significant historical events and religious foundations across Vietnamese history - legend connects it to the founding mythology of the Vietnamese state through the story of the Golden Buffalo. The lake's shores hold some of Hanoi's oldest religious sites, including Tran Quoc Pagoda (claimed to be the city's oldest, dating to the 6th century) and Quan Thanh Temple. The surrounding Tây Hồ district has developed over the past two decades into Hanoi's most upscale residential and cafe district, with the lakeside streets attracting a concentration of specialty coffee shops, restaurants, and boutique businesses that give the area a distinct character from the Old Quarter.",
    howToGetThere:
      "West Lake is approximately 4km north of Hoan Kiem Lake in the Tây Hồ district. From the Old Quarter, take Grab or taxi north along Thanh Niên street - the road that runs between West Lake and the smaller Truc Bach Lake - in around 15-20 minutes. Cycling from the Old Quarter is possible and takes around 25-30 minutes via Thanh Niên. The lake perimeter is accessible from multiple entry points around its 17km circumference.",
    whatToExpect:
      "The lake experience is primarily outdoor and activity-based - cycling or walking the perimeter, stopping at cafes and pagodas along the way, and watching the light change over the water surface. The eastern shore (Thanh Niên road) is the most developed and has the best-known cafe strip. The western and northern shores are quieter and more residential in character. The southern end connects to Truc Bach Lake via the causeway road. The lake surface itself is used for leisure fishing and occasional water sports. The pagodas and temples around the perimeter provide historical counterpoints to the modern cafe culture.",
    travelTips:
      "West Lake is best understood as a neighbourhood destination rather than a single attraction - the experience is in spending a morning or afternoon moving around the perimeter, combining a cycle with a coffee stop, a pagoda visit, and a lunch of bánh tôm at one of the northern shore restaurants. It offers a significantly different register of Hanoi from the Old Quarter - quieter, more spacious, and with a local character that has not been as thoroughly shaped by tourism. The lotus blooms in June and July reward early morning visits specifically for the photography, though the heat at that time of year makes the cycling loop more demanding.",
  },
}
