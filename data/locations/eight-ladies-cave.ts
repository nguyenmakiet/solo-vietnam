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
  streetView: {embedUrl: "https://www.google.com/maps/embed?pb=!4v1775801089371!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRGhuLWZWTGc.!2m2!1d17.50247438160497!2d106.2602072288575!3f110.12498890988888!4f15.421060228421183!5f0.7820865974627469", },
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
  insights: {
    highlights: [
      "Memorial site commemorating 8 volunteers trapped and killed by cave collapse during 1972 US bombing",
      "Located on Route DT562, 2.5 km from crossroads bridge in Quang Binh Province",
      "Includes shrine, worship area, memorial wall, and TV presentation about the historical event",
    ],
    thingsToKnow: {
      crowds: "Quiet and serene site with minimal visitor activity",
      difficulty: null,
      safety: null,
      accessibility: "Cave entrance blocked; visitors cannot enter cave. 50m walk from parking area to cave site",
      seasonal: null,
    },
    visitorTips: [
      "Hire a tour guide to learn detailed connections between this site and other caves in Phong Nha area",
      "Site is primarily about history and story rather than cave exploration itself",
      "Located along Ho Chi Minh West Trail near other war-related historical sites in region",
    ],
    faq: [
      { question: "Can I enter the cave?", answer: "No, the cave entrance is blocked and marked not to enter. Visitors can only view it from outside." },
      { question: "What happened at this cave in 1972?", answer: "Eight young volunteers ran into the cave to escape US bombing on November 14, 1972. A massive rock collapsed and sealed the entrance, trapping them inside. All died." },
      { question: "How long does it take to visit?", answer: "A few minutes of contemplation is typically sufficient. Site includes parking area, memorial wall, TV presentation, and a 50m walk to the cave." },
    ],
    sentiment: {
      positive: "Most visitors find the site deeply moving and historically significant, appreciating the respectful memorial and Vietnamese reverence for the fallen",
      negative: "Some visitors felt disappointed by limited physical exploration, noting there is not much to see beyond inscriptions and the restricted cave",
    },
  },
}
