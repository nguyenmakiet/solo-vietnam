import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const mocChauTeaHills: Location = {
  slug: "moc-chau-tea-hills",
  name: "Moc Chau Tea Hills",
  provinces: ["son-la"],
  destination: "",
  lat: "20.83246607015881",
  lng: "104.69295036642336",
  address: "Mộc Châu, Sơn La",
  type: ["nature", "attraction"],
  categories: [],
  experiences: ["photography", "cycling", "motorcycling", "culture", "homestay"],
  tags: ["🍵 Tea Plantations", "📸 Photography", "🛵 Motorbike Scenic", "🌿 Highland Agriculture"],
  bestTime: "Oct – Nov (autumn mist, golden light on the hills) and Mar – Apr (plum and peach blossoms)",
  entranceFee: "Free (some specific viewpoints charge 20,000 – 50,000 VND)",
  openingHours: "Open all day",
  mapUrl: "https://www.google.com/maps?q=moc+chau+tea+hills+son+la",
  streetView: {},
  heroImage: heroUrl("moc-chau-tea-hills-son-la_cvtebk"),
  gallery: [
    "moc-chau-tea-hills-son-la_cvtebk",
    "moc-chau-tea-hills-son-la-2_m8br5r",
    "moc-chau-tea-hills-son-la-3_icmhbv",
  ],
  seoDescription:
    "The Moc Chau Tea Hills are vast rolling plantations of trimmed green tea bushes covering the highland plateau of Son La province - one of the most photogenic agricultural landscapes in northern Vietnam, especially at dawn when mist fills the valleys between the rows.",
  tips: [
    "Arrive before 7:00 AM to catch the morning mist sitting in the valleys between the tea rows - by 9:00 AM it usually burns off",
    "The hills look completely different across the seasons - the flush of new growth in spring turns the bushes a vivid lime green, while dry season gives a deeper, moodier palette",
    "Rent a motorbike in Moc Chau town and self-navigate the plateau roads - the best views are often on side roads 2-5km off the main highway, not at the signposted stops",
    "Ask to watch the tea picking and processing at one of the small family operations - many welcome visitors and the hand-rolling of fresh leaves is worth seeing",
    "Combine with Moc Chau's other landscapes - the pine forests, sunflower fields (Nov), and mustard flower fields (Jan-Feb) are all within 10-20km of the tea hills",
  ],
  content: {
    intro:
      "The Moc Chau Tea Hills spread across the high plateau of Son La province at around 1,000 metres elevation, covering the rolling terrain in a carpet of neatly trimmed Camellia sinensis bushes. The plateau has been a tea-growing region since the French colonial period, when the cool climate and well-drained red basalt soil were identified as suitable for cultivation. Today the plantations are a mix of state cooperative land and family-run plots, with the harvested leaves going to processing factories that produce both green tea for domestic consumption and semi-fermented oolong for export. The visual appeal of the hills is the result of the trimming practice - the bushes are kept at waist height and shaped into smooth contoured rows that follow the natural slope of the land, creating a geometric wave pattern across the hillsides that photographs exceptionally well in low morning light.",
    howToGetThere:
      "Moc Chau is 200km from Hanoi on Highway 6, approximately 4 hours by bus or 4.5 hours by motorbike. Buses run from My Dinh bus station in Hanoi directly to Moc Chau town. From the town centre, the main tea hill areas are 2-8km away by motorbike - Lung Cuong hill is the most visited and signposted, while the wider plateau roads offer less-visited plantations. Renting a motorbike in Moc Chau town (around 150,000 VND/day) is the most practical way to explore the scattered hills.",
    whatToExpect:
      "The tea hills are an agricultural working landscape, not a curated attraction. The rows of bushes are interrupted by harvesting paths, small processing sheds, and the occasional water tank. Pickers work early in the morning with wicker baskets, moving methodically along the rows and selecting only the top two leaves and a bud. The smell of freshly cut tea leaves is distinctive - green and slightly astringent. The best photography positions are elevated points looking down the contoured rows, with the mist or valley backdrop behind. The light on the hills changes dramatically between dawn and mid-morning.",
    travelTips:
      "Moc Chau rewards slow travel more than most highland destinations. The plateau has enough variety - tea hills, pine forests, ethnic minority villages, fruit orchards - to fill 2-3 days without repeating the same ground. Accommodation ranges from basic guesthouses in town to homestays in Thai and H'mong villages on the plateau edge. The town itself is unremarkable but has good local food, particularly dishes using the plateau's dairy products - Moc Chau is one of the few places in Vietnam with a genuine fresh milk and yoghurt culture, a legacy of the state dairy farm established in the 1970s.",
  },
}
