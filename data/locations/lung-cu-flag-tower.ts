import { Location } from "../location"
import { heroUrl } from "@/lib/cloudinary"

export const lungCuFlagTower: Location = {
  slug: "lung-cu-flag-tower",
  name: "Lũng Cú Flag Tower",
  provinces: ["ha-giang"],
  destination: "ha-giang-loop",
  lat: "23.363427116840306",
  lng: "105.31633882452529",
  address: "Lũng Cú, Đồng Văn, Hà Giang",
  type: "attraction",
  categories: [],
  experiences: ["history", "culture", "photography", "trekking"],
  tags: ["🚩 Northernmost Point", "🏔️ Viewpoint", "📸 Photography", "🇻🇳 Landmark"],
  bestTime: "Sep – Nov or Mar – Apr (clear skies)",
  bestMonths: [3, 4, 9, 10, 11],
  entranceFee: "20,000 VND/person",
  openingHours: "6:00 AM – 6:00 PM",
  mapUrl: "https://maps.google.com/?q=23.3786,105.3336",
  streetView: {embedUrl: "https://www.google.com/maps/embed?pb=!4v1775827324992!6m8!1m7!1sCAoSHENJQUJJaEI4SGhDeUpKMlhKdlVkT04xcGZYSFo.!2m2!1d23.36404281373051!2d105.3160746836883!3f331.7206511025033!4f-2.5287620502084707!5f0.7820865974627469", },
  heroImage: heroUrl("cot-co-lung-cu-05_wjln4b"),
  gallery: [
      "cot-co-lung-cu-02_ugfwyc",
      "cot-co-lung-cu-03_kbp2iv",
      "cot-co-lung-cu-01_crtpf8"
  ],
  seoDescription:
    "Lũng Cú Flag Tower - Vietnam's northernmost point on Dragon Mountain, where a massive national flag flies above the karst plateau with China visible across the valley below.",
  tips: [
    "The climb to the tower is 389 steps - take your time, the altitude makes it harder than it looks",
    "On a clear day you can see the Chinese border town of Lũng Cú Zhèn across the valley",
    "The H'Mông and Lô Lô villages at the base of the mountain are worth walking through before the climb",
    "Combine with Đồng Văn Old Town - it's 24km away, about 40 minutes by motorbike",
    "The flag measures 54m² (9m × 6m) - representing Vietnam's 54 ethnic groups. The symbolism makes this more than just a viewpoint.",
  ],
  content: {
    intro:
      "Lũng Cú Flag Tower stands at Vietnam's northernmost point on Dragon Mountain (Núi Rồng), at 1,700m elevation on the Đồng Văn Karst Plateau. The current tower - rebuilt and enlarged several times, most recently in 2010 - flies a 54 square metre national flag visible from across the valley. Standing here with China a few hundred metres away and the karst plateau stretching in every direction is one of the more affecting geographical experiences Vietnam offers.",
    howToGetThere:
      "Lũng Cú is 24km north of Đồng Văn town - about 40 minutes by motorbike on a winding but paved road. The route passes through H'Mông and Lô Lô minority villages and is scenic throughout. From Hà Giang city, the total distance is about 175km. Most travelers visit Lũng Cú as a day trip from Đồng Văn or as part of the Ha Giang Loop.",
    whatToExpect:
      "At the base of Dragon Mountain, a paved path leads through a Lô Lô minority village before the staircase begins. The 389 steps to the tower take 15–20 minutes at altitude. The tower itself is a concrete structure with the flag flying from the top - you can't climb inside but the 360° views from the top of the staircase take in China to the north, the karst plateau in every direction, and the Nho Quế River valley to the south.",
    travelTips:
      "Lũng Cú is most meaningful when you understand what you're looking at - read a little about the border history and the Lô Lô minority before visiting. The Lô Lô village at the base has a small cultural house open to visitors. The road from Đồng Văn to Lũng Cú and back is one of the Loop's most scenic stretches - don't rush it.",
  },
  insights: {
    highlights: [
      "Vietnam's northernmost point with 360-degree views of Đồng Văn Karst Plateau and Chinese mountains",
      "Symbolic 54-meter flagpole representing 54 ethnic groups; 279 steps commemorate 1979 Sino-Vietnamese War",
      "Scenic drive through terraced rice fields and winding mountain roads on Ha Giang Loop",
    ],
    thingsToKnow: {
      crowds: "Heavy tour group traffic, especially mid-morning to afternoon. Arrive by 8:30 a.m. for manageable crowds. Flag ceremony (10 minutes) requires waiting in line before accessing stairs.",
      difficulty: "Over 100-400 steps to climb depending on route. Steep hill climb required. Motorbike ride to base available for 30,000 VND. Road conditions can be challenging; check before traveling.",
      safety: null,
      accessibility: "Electric buggy available to reach gate for 30,000 VND; additional 100+ steps inside tower. Free toilets available at site.",
      seasonal: "Weather significantly impacts views. Fog and rain common; visibility to China border weather-dependent. January offers calmer, colder conditions. Check weather before visiting, especially avoid late afternoon trips (fog increases).",
    },
    visitorTips: [
      "Arrive early morning to avoid crowds and tour buses. Bring water and be physically prepared for steep climbs.",
      "Study the historical significance beforehand. Lolo ethnic culture, bronze drums, and fire dances offer cultural context.",
      "Visit nearby Northernmost Point and Lolo Chai ancient village at night for less-crowded alternatives with equally impressive views.",
    ],
    faq: [
      { question: "What is the entrance fee and how do I reach the top?", answer: "Entry: 35,000-40,000 VND per person. Motorcycle parking: 5,000 VND. Electric buggy to gate: 30,000 VND. Over 100 steps to climb; additional 100 steps inside tower to reach flag." },
      { question: "When is the best time to visit?", answer: "Early morning (8:30 a.m. or earlier) avoids crowds and tour groups. January offers clearer weather. Avoid late afternoon due to fog. Check weather forecast; visibility to China border is weather-dependent." },
      { question: "How difficult is the climb?", answer: "Steep with 100-400+ steps depending on route. Motorbike riders can take buggy option. Not recommended for those with mobility issues. Road conditions variable; some sections windy and steep, particularly from Dong Van." },
    ],
    sentiment: {
      positive: "Visitors praise stunning 360-degree views, meaningful historical significance, cultural heritage of Lolo ethnic group, and scenic mountain drive. Most rate it essential stop on Ha Giang Loop.",
      negative: "Some find it overcrowded with tour buses, overpriced for basic stair climb, and views duplicate other loop locations. Crowds create chaotic photography behavior and disrupted flag ceremonies.",
    },
  },
}