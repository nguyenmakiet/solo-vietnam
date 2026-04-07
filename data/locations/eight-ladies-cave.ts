import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const eightLadiesCave: Location = {
  slug: "eight-ladies-cave",
  name: "Eight Ladies Cave",
  provinces: ["quang-binh"],
  destination: "phong-nha-ke-bang",
  lat: "17.502701222486007",
  lng: "106.26089697322949",
  address: "Tân Trạch, Bố Trạch, Quảng Bình",
  type: ["cave", "history"],
  categories: [],
  experiences: ["history", "culture", "trekking", "photography"],
  tags: ["🕯️ Vietnam War Memorial", "⛰️ Sacred Cave", "📖 History", "🥾 Jungle Trek"],
  bestTime: "Feb – Aug (dry season, trails accessible)",
  bestMonths: [2, 3, 4, 5, 6, 7, 8],
  entranceFee: "Free (guided trek required: ~200,000–300,000 VND)",
  openingHours: "By guided trek only; departs morning",
  mapUrl: "https://www.google.com/maps?q=17.502701222486007,106.26089697322949",
  streetView: {},
  heroImage: heroUrl("eight-ladies-cave-hero_placeholder"),
  gallery: [],
  seoDescription:
    "Eight Ladies Cave is one of Vietnam's most sacred war memorials - a limestone cave in Phong Nha-Kẻ Bàng where eight young female volunteers were killed by American bombing in 1972 while sheltering inside, reached by a jungle trek and visited as a place of pilgrimage by Vietnamese travellers.",
  tips: [
    "This is a sacred memorial site - approach it with the same respect mày would give any war memorial",
    "A local guide is required to reach the cave - book through accommodation in Sơn Trạch the evening before",
    "The trek takes about 2–3 hours return through jungle - wear proper shoes and bring water",
    "The cave itself is small and the experience is primarily about the history and the setting rather than geological formations",
    "Vietnamese visitors often bring incense and offerings - this is completely appropriate and the guides will explain the significance if asked",
  ],
  content: {
    intro:
      "Eight Ladies Cave - Hang Tám Cô - is a small limestone cave in the forest near Tân Trạch village that has become one of the most visited war memorial sites in Quảng Bình province. On November 14, 1972, eight young women from the 759th Youth Volunteer Unit - aged between 17 and 24 - were sheltering in the cave when American aircraft bombed the area, blocking the entrance and trapping them inside. They died from lack of oxygen. Their names, preserved in local records and in the national memory, are: Trần Thị Tơ, Hoàng Thị Nhị, Trần Thị Vân, Hoàng Thị Loan, Nguyễn Thị Văn, Lê Thị Mai, Nguyễn Thị Phúc, and Võ Thị Hường. The cave was designated a national historical relic in 1995 and is now a place of pilgrimage for Vietnamese travellers, particularly around the anniversary of the incident. A small altar and memorial inside the cave entrance receives incense and offerings year-round.",
    howToGetThere:
      "The cave is not accessible independently - a local guide is required for both navigation and as a matter of respect for the site. Guides can be arranged through accommodation in Sơn Trạch village, with treks typically departing in the morning. The trek is approximately 3–4km each way through national park forest - the trail is not marked and without a guide the route is impossible to follow. The full excursion takes 4–5 hours return including time at the cave. Transport to the trailhead is by motorbike with the guide.",
    whatToExpect:
      "The trek passes through lowland jungle and hill forest inside the national park - the route itself is scenic and the forest is dense and largely undisturbed. The cave entrance is a modest opening in the karst hillside, unremarkable from the outside. Inside, the memorial altar with incense, photographs, and offerings marks the site. The guides who lead these treks often have personal or family connections to the war period and speak about the eight women and the broader context of the volunteer units with directness and emotion. The atmosphere is quiet and serious - this is not a cave tour in the usual sense.",
    travelTips:
      "Eight Ladies Cave is one of the most emotionally significant sites in Phong Nha for travellers interested in the human history of the Vietnam War. It requires effort to reach and the cave itself is not visually spectacular - the value is entirely in the history, the setting, and the guided context. Travellers who make the trek consistently describe it as one of the most affecting experiences of their Vietnam trip. It pairs naturally with a visit to the Phong Nha cave system in the afternoon - the contrast between the geological wonder of the caves and the human story of Eight Ladies Cave on the same day is a powerful combination.",
  },
}
