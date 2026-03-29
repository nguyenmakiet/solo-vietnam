import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const fairyStream: Location = {
  slug: "fairy-stream",
  name: "Fairy Stream",
  provinces: ["binh-thuan"],
  destination: "phan-thiet",
  lat: "10.955760120620356",
  lng: "108.25941870282894",
  address: "Suối Tiên, Mũi Né, Phan Thiết, Bình Thuận",
  type: ["nature", "river"],
  categories: [],
  experiences: ["walking-tour", "photography"],
  tags: ["🏞️ Wading Stream", "🔴 Red Canyon Walls", "📸 Photography", "🚶 Barefoot Walk"],
  bestTime: "Nov – Apr (dry season; stream is shallow and clear)",
  entranceFee: "~10,000–20,000 VND (informal collection at entrance)",
  openingHours: "6:00 AM – 6:00 PM",
  mapUrl: "https://www.google.com/maps?q=10.955760120620356,108.25941870282894",
  streetView: {},
  heroImage: heroUrl("fairy-stream-phan-thiet_jdweht"),
  gallery: [
    "fairy-stream-phan-thiet-4_sl30pr",
    "fairy-stream-phan-thiet_2_tize8e",
    "fairy-stream-phan-thiet-6_wgc7hg",
  ],
  seoDescription:
    "Fairy Stream is Mũi Né's most unusual natural attraction - a shallow stream winding through a narrow canyon of red and yellow sandstone walls, bamboo forest, and dunes, waded barefoot for 2km to reach a small waterfall at the end.",
  tips: [
    "Go barefoot - the stream is ankle to knee-deep and the sandy bottom is clean; shoes are more hindrance than help",
    "Walk the full 2km to the end where the canyon widens and a small waterfall feeds the stream - most visitors turn back after 500m and miss the best section",
    "The canyon walls are tallest and most dramatic in the mid-section - the red and yellow layering is the result of different iron oxide concentrations in the sandstone",
    "Go in the morning - the light enters the canyon from the east in the morning hours and illuminates the red walls directly",
    "The stream dries to a trickle in extreme dry season (Feb–Apr) - the walk is still possible but less scenic without flowing water",
  ],
  content: {
    intro:
      "Fairy Stream - Suối Tiên - is a shallow freshwater stream that flows from inland dunes and forest to the sea through a narrow sandstone canyon 1km west of Mũi Né town centre. The canyon walls rise to 3–5 metres of layered red, orange, and yellow sandstone - the colours produced by varying concentrations of iron oxide in the compressed sand - interspersed with sections of bamboo overhanging the water and open dune gaps where the sky appears above. The stream itself is ankle to knee-deep in dry season, warm, and sandy-bottomed - waded barefoot for the entire 2km length to a small waterfall and pool at the upper end. The walk is simple and requires no equipment beyond the willingness to take off shoes and walk in water, which makes it genuinely accessible and genuinely enjoyable in a way that more organised natural attractions are not.",
    howToGetThere:
      "The Fairy Stream entrance is 1km west of Mũi Né town centre on Huỳnh Thúc Kháng Street - walkable from most accommodation in the main resort strip (15–20 minutes) or a short motorbike ride. The entrance is marked by a small gate and an informal ticket collection point. From the entrance, the stream runs inland - follow it upstream, wading through the water, for 2km to the end. Return by the same route.",
    whatToExpect:
      "The walk begins at a wide, shallow section of stream bordered by low dunes on both sides. After a few hundred metres the canyon walls begin to rise and the character changes - narrower, shadier in the morning, with the layered red sandstone visible on both sides. The midpoint has the tallest and most colourful canyon walls and is the most photographed section. The final section opens slightly before reaching the waterfall and pool at the far end - a shaded, cooler spot suitable for a short rest before the return walk. The total walking time is approximately 45–60 minutes each way at a leisurely pace.",
    travelTips:
      "Fairy Stream is the most pleasant surprise in Mũi Né - genuinely enjoyable, requiring no planning or expense, and noticeably different from anything else in the area. The combination of wading, canyon walls, bamboo, and dunes in a single 2km walk is unusual enough to feel worth doing even for travellers who are not natural walkers. The full 2km to the end is strongly recommended over the short walk most visitors do - the canyon is best in the middle and upper sections, not near the entrance. Combine with the Red Sand Dunes in the same afternoon - both are within 1km of each other near the western end of the Mũi Né resort strip.",
  },
}
