import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const baDanhPagoda: Location = {
  slug: "ba-danh-pagoda",
  name: "Ba Danh Pagoda",
  provinces: ["ha-nam"],
  destination: "ha-nam",
  lat: "20.56929376391253",
  lng: "105.85284438092059",
  address: "Xã Liêm Sơn, Thanh Liêm, Hà Nam",
  type: ["pagoda", "cultural", "heritage"],
  categories: [],
  experiences: ["history", "culture", "photography", "walking-tour"],
  tags: ["🛕 Quietest Pagoda in Vietnam", "🌿 Riverside Setting", "📸 Photography", "🧘 Peaceful Retreat"],
  bestTime: "Oct – Apr (cool and dry season)",
  entranceFee: "Free",
  openingHours: "Open daily, dawn to dusk",
  mapUrl: "https://www.google.com/maps?q=20.583400,105.921200",
  streetView: { embedUrl: "" },
  heroImage: heroUrl("ba-danh-pagoda-ha-nam_xmlbi1"),
  gallery: [
    "ba-danh-pagoda-9_q96gj7",
    "ba-danh-pagoda-ha-nam_xmlbi1",
    "ba-danh-pagoda-2_wteeex",
    "ba-danh-pagoda_zeuck1",
    "ba-danh-pagoda-4_qdnjg0",
    "ba-danh-pagoda-6_ctynhg",
    "ba-danh-pagoda-7_p69os9",
    "ba-danh-pagoda-8_yw2fnh",
  ],
  seoDescription:
    "Ba Danh Pagoda in Hà Nam is known throughout Vietnam by a single proverb - 'as deserted as Ba Danh Pagoda' - a Buddhist complex set on a quiet peninsula between two rivers that genuinely lives up to its reputation for solitude.",
  tips: [
    "The proverb 'vắng như chùa Bà Đanh' (as deserted as Ba Danh Pagoda) is one of the most recognizable sayings in Vietnamese - mentioning it to locals at the site always gets a warm reaction",
    "The peninsula setting between the Đáy River and surrounding water means the approach road is scenic - worth taking slowly",
    "Combine with Ngũ Động Sơn Cave (also in Thanh Liêm district) for a half-day loop in southern Hà Nam",
    "The pagoda is genuinely quiet on weekdays - the proverb still holds",
    "Hà Nam is an easy 60km south of Hanoi via the Pháp Vân - Cầu Giẽ Expressway, making this a viable half-day trip from the capital",
  ],
  content: {
    intro:
      "Ba Danh Pagoda (Chùa Bà Đanh) sits on a small peninsula formed by a bend in the Đáy River in Thanh Liêm district, Hà Nam province, and holds a unique place in Vietnamese cultural consciousness. The pagoda gave rise to one of the most widely known proverbs in the Vietnamese language - 'vắng như chùa Bà Đanh' (as deserted as Ba Danh Pagoda) - a saying used to describe any place of unusual quietness. The proverb reportedly originated because the pagoda's riverside location, surrounded by dense forest and tiger-inhabited hills in earlier centuries, made worshippers reluctant to visit. Today the forest is tamed and the tigers long gone, but the pagoda retains a genuine stillness that the saying still captures. The complex dates to the Lê dynasty, dedicated to the goddess Pháp Vũ (deity of rain and weather), and sits within a walled compound of old trees, stone courtyards, and traditional wooden halls.",
    howToGetThere:
      "Ba Danh Pagoda is in Thanh Liêm district, approximately 8km from Phủ Lý city and 60km south of Hanoi. From Hanoi, take the Pháp Vân - Cầu Giẽ Expressway south to Phủ Lý, then follow signs toward Thanh Liêm. By motorbike or car the total journey from Hanoi takes about 1.5 hours. From Phủ Lý city, the pagoda is easily reached by motorbike in 20 minutes. There is no direct bus to the site - local transport from Phủ Lý bus station is the practical option for those without their own vehicle.",
    whatToExpect:
      "The pagoda compound is set within a walled enclosure on the river peninsula, surrounded by mature trees that create deep shade over the courtyards. The main worship halls contain statues of Pháp Vũ and associated deities, with lacquerwork and ceremonial objects in good condition. The riverside atmosphere - water on multiple sides, birdsong, minimal traffic noise - makes the visit notably calming. The site is small enough to cover in 30-45 minutes, but the setting rewards sitting quietly for longer. On weekdays the pagoda often has no other visitors.",
    travelTips:
      "Ba Danh is worth visiting precisely because of the gap between its cultural fame and its physical obscurity - one of Vietnam's most quoted proverbs points to a pagoda that almost nobody outside Hà Nam has actually seen. If mày is doing a day trip south of Hanoi and wants something with genuine character rather than another reconstructed heritage site with tour buses, this is a strong option. The proverb alone makes for good content - the story of why it became deserted (tigers, isolation, river floods) is more interesting than most temple origin stories.",
  },
}
