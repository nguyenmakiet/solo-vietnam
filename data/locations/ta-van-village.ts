import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const taVanVillage: Location = {
  slug: "ta-van-village",
  name: "Tả Van Village",
  provinces: ["lao-cai"],
  destination: "sapa",
  lat: "22.303361298569694",
  lng: "103.88751788652911",
  address: "Tả Van, Sa Pa, Lào Cai",
  type: ["cultural", "town"],
  categories: [],
  experiences: ["homestay", "culture", "trekking", "photography"],
  tags: ["🏡 Homestay", "🎎 Giáy Culture", "🌾 Rice Terraces", "🥾 Trekking"],
  bestTime: "Sep – Oct (golden terraces) or Mar – Apr (green and clear)",
  bestMonths: [3, 4, 9, 10],
  entranceFee: "Free (included in Muong Hoa Valley entrance fee)",
  openingHours: "Open 24/7",
  mapUrl: "https://maps.google.com/?q=22.2970,103.8730",
  streetView: {},
  heroImage: heroUrl("ta-van-village3_nj8yue"),
  gallery: [
    "ta-van-village_owdapo",
    "ta-van-village4_tzti6u",
    "ta-van-village2_oy9scu",
  ],
  seoDescription:
    "Tả Van Village - home of the Giáy people deep in Muong Hoa Valley - is the best homestay base in Sa Pa. Surrounded by sweeping terraced fields, 10km from Sa Pa town, it offers an authentic overnight experience that most visitors to Cat Cat or Fansipan never reach.",
  tips: [
    "Book your homestay at least a week ahead in September–October - the golden rice season fills Tả Van completely",
    "Ask your homestay host to arrange a traditional Giáy dinner - the food is different from H'mong cuisine and worth trying",
    "The walk from Lao Chải to Tả Van along the valley floor (about 3km) is one of the best easy treks in Sa Pa - flat, scenic, and quiet in the early morning",
    "Tả Van is the end of the main trekking route from Sa Pa town - from here you can extend to Giang Tả Chải or Bản Hồ for a multi-day loop",
    "The Giáy people celebrate the Roóng Poọc (Swinging Festival) in spring - if your visit coincides, it's one of the most genuine festival experiences in the Sa Pa area",
  ],
  content: {
    intro:
      "Tả Van sits at the far end of Muong Hoa Valley, 10km from Sa Pa town, and is the main village of the Giáy ethnic group - one of the smaller minorities in the Sa Pa area, distinct from the more commonly seen H'mong and Red Dao. The village is surrounded on all sides by terraced rice fields that are consistently rated among the most beautiful in the valley, especially in late September when the harvest turns the hillsides gold. Unlike Cat Cat - which is close to town and heavy with day visitors - Tả Van is quiet, genuine, and far better suited for an overnight stay.",
    howToGetThere:
      "Tả Van is at the end of the main Muong Hoa Valley road, about 10km from Sa Pa town centre. You can reach it by motorbike along Provincial Road 152 (30–40 minutes from Sa Pa), or trek the full valley route from Cat Cat through Lao Chải to Tả Van - a full day's walk of about 10km. Most trekkers go with a local guide arranged in Sa Pa. There is no direct bus to Tả Van.",
    whatToExpect:
      "The village is quiet and spread out along the valley floor, with wooden stilt houses, vegetable gardens, and rice paddies immediately beside the path. Giáy families run homestays that typically include breakfast and dinner - home-cooked meals using local vegetables, free-range chicken, and rice from the surrounding fields. The pace of life here is slow and unhurried. In the evenings, the village settles into near silence. From Tả Van you can continue further into the valley toward Giang Tả Chải and Bản Hồ for more remote trekking.",
    travelTips:
      "Tả Van is the best overnight base in the Sa Pa valley system for travellers who want genuine immersion rather than just a scenic walk. The difference between day-tripping from Sa Pa town and staying the night here is enormous - the village completely changes after 5 PM. If you only have one night in the Sa Pa area and want to remember it clearly, spend it in Tả Van rather than in a hotel in Sa Pa town.",
  },
}
