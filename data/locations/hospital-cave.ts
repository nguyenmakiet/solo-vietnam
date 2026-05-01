import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const hospitalCave: Location = {
  slug: "hospital-cave",
  name: "Hospital Cave",
  provinces: ["hai-phong"],
  destination: "cat-ba",
  lat: "20.77004838620462",
  lng: "107.02138423927063",
  address: "Cát Bà, Hải Phòng",
  type: ["cave", "history"],
  categories: [],
  experiences: ["history", "culture", "photography", "walking-tour"],
  tags: ["🏥 Viet Cong Underground Hospital", "📖 Vietnam War History", "🪨 Limestone Cave", "📸 Photography"],
  bestTime: "Year-round (cave interior is climate-controlled by the limestone)",
  bestMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  entranceFee: "~40,000 VND",
  openingHours: "7:00 AM – 4:00 PM",
  mapUrl: "https://www.google.com/maps?q=20.77004838620462,107.02138423927063",
  streetView: {embedUrl: "https://www.google.com/maps/embed?pb=!4v1775813162929!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRHFoYjc1SHc.!2m2!1d20.76990970226949!2d107.0209777110019!3f124.60093412344892!4f-13.893504602363691!5f0.7820865974627469", },
  heroImage: heroUrl("hospital-cave-cat-ba-hai-phong_cuzhw0"),
  gallery: [
    "hospital-cave-cat-ba-hai-phong-10_oksefe",
    "hospital-cave-cat-ba-hai-phong-7_mjxgqe",
    "hospital-cave-cat-ba-hai-phong-8_nzeyad",
    "hospital-cave-cat-ba-hai-phong-9_jrj9aa",
    "hospital-cave-cat-ba-hai-phong-2_z5s6ju",
    "hospital-cave-cat-ba-hai-phong-3_cb4lvn",
    "hospital-cave-cat-ba-hai-phong-4_vx04nz",
    "hospital-cave-cat-ba-hai-phong-5_vjs1gb",
    "hospital-cave-cat-ba-hai-phong-6_wzieji",
  ],
  seoDescription:
    "Hospital Cave is a three-storey limestone cave complex on Cát Bà Island that served as a secret Viet Cong hospital and military headquarters during the American War - treating up to 150 patients at a time while completely hidden from US aerial surveillance between 1963 and 1975.",
  tips: [
    "Hire the local guide at the entrance - they have detailed knowledge of specific rooms and the medical operations that took place here",
    "The cave has three levels connected by internal staircases - each level had a different function, from operating rooms to dormitories to communications",
    "The cinema room on the second level - where patients and staff watched films for morale - is one of the more unexpected features",
    "The cave is naturally cool year-round - bring a light layer if mày are sensitive to the cold after the outside heat",
    "The stalactite formations in the upper levels are a reminder that this is still a natural limestone cave that happened to be repurposed for military use",
  ],
  content: {
    intro:
      "Hospital Cave - Hang Quân Y - is a three-storey limestone cave complex on Cát Bà Island that operated as a secret military hospital and command centre for the Viet Cong from 1963 to 1975, hidden entirely within the karst hillside above the island's eastern shore. The cave was developed over years of excavation into a fully functioning underground facility - operating rooms, patient wards, a pharmacy, staff dormitories, a communications centre, a kitchen, and a cinema room for morale - capable of treating up to 150 patients simultaneously. The natural limestone provided complete concealment from US aerial surveillance and radar, and the cave's location on Cát Bà Island placed it within the Ha Long Bay karst system where the density of limestone peaks made aerial bombing too imprecise to target effectively. The cave was never discovered during the war and is preserved today essentially as it was at the time of abandonment in 1975.",
    howToGetThere:
      "Hospital Cave is 10km from Cát Bà town on the main road toward the national park - about 15 minutes by motorbike. The entrance is on the right side of the road, signposted. A guide is available at the entrance ticket booth. Most visitors combine the cave with the national park on the same day - both are on the same road heading northeast from Cát Bà town.",
    whatToExpect:
      "The cave entrance opens into the first level - the largest and best-lit space, with original medical equipment on display: operating tables, pharmaceutical cabinets, medical instruments. Internal staircases lead to the second level, which housed patient wards and the cinema room - a small cave chamber with a screen and rows of simple seats. The third level at the top was used for communications and command functions. The cave is well-signed in Vietnamese and English. The stalactite formations in the upper levels, undisturbed by the military use of the lower sections, give the cave a natural dimension alongside the historical one.",
    travelTips:
      "Hospital Cave is one of the best-preserved examples of Viet Cong underground infrastructure in northern Vietnam - more accessible and more complete than most comparable sites. The combination of natural cave and wartime repurposing creates an unusual atmosphere: stalactites above operating tables, natural rock walls around dormitories, a cinema room in a limestone chamber. It takes about 45 minutes to tour properly with the guide. Combine with Cát Bà National Park in the same half-day - both are 10–15km from town on the same road and together form the best historical-natural combination day trip on the island.",
  },
  insights: {
    highlights: [
      "Secret hospital built into limestone cave during Vietnam War with three-story concrete bunker complex",
      "Local guides on-site explain history of hospital operations, patient capacity, and construction details",
      "Elevated entrance offers views of Cát Bà Island countryside and Ha Long Bay area",
    ],
    thingsToKnow: {
      crowds: "Morning hours extremely crowded with cruise ship tour groups; visit afternoon for quieter experience",
      difficulty: "Steep staircase climb (approximately 100 steps) required to reach cave entrance; not suitable for mobility issues",
      safety: null,
      accessibility: "Third floor closed due to rock collapse; stairs and uneven terrain throughout complex",
      seasonal: null,
    },
    visitorTips: [
      "Hire on-site local guide for 20-45 minute tour; guides provide essential historical context and enhance understanding",
      "Bring water and wear comfortable shoes; visit in afternoon to avoid cruise ship crowds and morning heat",
      "Expect mostly concrete bunker interior rather than natural cave; parking available free at entrance",
    ],
    faq: [
      { question: "How long does a visit take?", answer: "20-45 minutes depending on guide pace and exploration. Most visitors spend 20-30 minutes." },
      { question: "What is the entrance fee?", answer: "50,000 VND per person. Guided tour is included with ticket; tipping guides is appreciated but optional." },
      { question: "Is the guide necessary to understand the site?", answer: "Guides significantly enhance experience through historical explanations. Mannequins and displays provide basic context, but guides add valuable details." },
    ],
    sentiment: {
      positive: "Visitors consistently praise the historical significance, preserved construction, and knowledgeable guides as compelling reasons to visit",
      negative: "Small site with limited artifacts; mostly concrete bunker rather than natural cave; can feel rushed on crowded cruise itineraries",
    },
  },
}
