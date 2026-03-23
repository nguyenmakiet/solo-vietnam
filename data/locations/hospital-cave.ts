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
  entranceFee: "~40,000 VND",
  openingHours: "7:00 AM – 4:00 PM",
  mapUrl: "",
  heroImage: heroUrl("hospital-cave-hero_placeholder"),
  gallery: [],
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
}
