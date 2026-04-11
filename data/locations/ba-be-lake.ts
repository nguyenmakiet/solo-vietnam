import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const baBeLake: Location = {
  slug: "ba-be-lake",
  name: "Ba Be Lake",
  provinces: ["bac-kan"],
  destination: "",
  lat: "22.409302543262182",
  lng: "105.6225488972304",
  address: "Vườn Quốc gia Ba Bể, Bắc Kạn",
  type: ["lake", "nature", "forest"],
  categories: [],
  experiences: ["boat-tour", "kayaking", "trekking", "wildlife", "photography", "homestay", "camping"],
  tags: ["🏞️ National Park", "🚣 Freshwater Lake", "🦅 Wildlife Sanctuary", "🛖 Tày Homestay"],
  bestTime: "Sep - Nov and Mar - May (best water levels and clearest skies; avoid Jan - Feb cold and Jul - Aug peak rain season)",
  bestMonths: [3, 4, 5, 9, 10, 11],
  entranceFee: "~40,000 VND national park entrance; boat hire additional ~200,000-400,000 VND per trip",
  openingHours: "Open daily; boat tours typically 7:00 AM - 5:00 PM",
  mapUrl: "https://www.google.com/maps?q=22.4080,105.6255",
  streetView: { embedUrl: "https://www.google.com/maps/embed?pb=!4v1775903364072!6m8!1m7!1sCAoSHENJQUJJaERrN3VabGI3N3c0QTV5aTZnYkVaN1o.!2m2!1d22.40503519723336!2d105.6182517581162!3f47.12853681512251!4f-6.301399648484335!5f0.7820865974627469", },
  heroImage: heroUrl("ba-be-lake-bac-kan_placeholder"),
  gallery: [],
  seoDescription:
    "Ba Be Lake is Vietnam's largest natural freshwater lake - a 8km-long body of water set within a national park of karst limestone mountains, primary forest, and Tày ethnic minority villages in Bắc Kạn province, one of the most genuinely wild nature destinations in the northern highlands.",
  tips: [
    "The boat trip through the Năng River gorge to Puong Cave and Dau Dang Waterfall is the essential half-day circuit - book through your homestay the evening before to secure a morning departure",
    "Homestays in the Tày village of Bó Lù on the lakeshore are the recommended accommodation option - basic but clean, with home-cooked meals and the best access to early morning lake atmosphere",
    "Kayak rental is available and the lake is calm enough for inexperienced paddlers in good weather - morning hours before any afternoon wind picks up are the best time",
    "The forest trails around the lake require a local guide to navigate properly; the national park office can arrange this - the biodiversity is exceptional with over 400 vertebrate species including bears, hornbills, and freshwater dolphins (rarely sighted)",
    "The road from Bắc Kạn town to Ba Be is 60km of winding mountain road - the journey takes 1.5-2 hours by motorbike; factor this into planning if doing a day trip from Hanoi",
  ],
  content: {
    intro:
      "Ba Be Lake sits within Ba Be National Park in Bắc Kạn province, approximately 240km north of Hanoi, and represents one of the most complete natural landscapes remaining in northern Vietnam. The lake itself consists of three connected bodies of water - Ba Be means 'three lakes' in the local Tày language - stretching approximately 8km through a valley of karst limestone mountains covered in primary forest. Recognised as a Ramsar Wetland of International Importance and a UNESCO candidate site, the national park encompasses 23,000 hectares of forest, river systems, caves, and wetland supporting one of the highest levels of biodiversity in the country. The resident Tày ethnic minority communities have lived around the lake for centuries, and their stilt-house villages and traditional boat-based way of life are an integral part of the Ba Be experience.",
    howToGetThere:
      "Ba Be is located in Bắc Kạn province, approximately 240km north of Hanoi. By motorbike from Hanoi, the standard route follows Highway 3 north through Thái Nguyên and Bắc Kạn city (roughly 5 hours). By bus, daily departures from Mỹ Đình bus station in Hanoi serve Bắc Kạn city, from where local transport or a pre-arranged pickup can reach the lake (additional 1.5 hours). Most independent travellers either ride their own motorbike or join an organised tour. Some visitors combine Ba Be with the Bắc Hà market area to the northwest as part of a northern loop, though the two destinations are not close to each other.",
    whatToExpect:
      "The lake visit centres on boat travel - the water is the highway through the park. The main circuit covers the lake itself, the narrow Năng River gorge with its towering limestone walls, Puong Cave (a 300-metre cavern through which the river flows, with a large bat colony), and Dau Dang Waterfall at the park's northern boundary. The lake surface in morning light, with mist rising from the water and karst peaks reflected below, is one of the quieter natural spectacles available in northern Vietnam. Birdlife is abundant and visible without specialist equipment. The Tày villages around the lake offer genuine homestay experiences - family meals, evening conversation through limited shared language, and the rhythm of lake life at dawn.",
    travelTips:
      "Ba Be is an unhurried destination that rewards two nights over one - the first afternoon orients you to the lake, the boat trip covers the main circuit, and a second morning allows for early paddling, forest walks, or simply sitting with the landscape. Visitors trying to do it in a single overnight from Hanoi typically spend more time in transit than at the lake. The national park has a clear management structure and tourism here is generally low-impact - follow guide recommendations about wildlife approach distances and avoid single-use plastics on the water. Late September to early November is peak season for colour and clarity; the lake fills and the forest greens after the rains end.",
  },
}
