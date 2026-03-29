import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const pirateIslands: Location = {
  slug: "pirate-islands",
  name: "Pirate Islands",
  provinces: ["kien-giang"],
  destination: "kien-giang",
  lat: "11.118715657111162",
  lng: "107.0268243097165",
  address: "Quần đảo Hải Tặc, Kiên Giang",
  type: ["island", "beach", "nature"],
  categories: [],
  experiences: ["beach", "snorkeling", "kayaking", "boat-tour", "camping", "photography", "fishing"],
  tags: ["🏝️ Pirate Islands", "🤿 Snorkeling", "⛺ Camping", "🐠 Unspoilt Reef"],
  bestTime: "Nov – Apr (calm seas, clear water visibility; the islands are unreachable in monsoon season May – Oct when sea conditions are dangerous)",
  entranceFee: "No entrance fee; boat charter costs vary (full-day from Rach Gia: ~1,200,000 – 1,800,000 VND for the boat)",
  openingHours: "Weather dependent; accessible only in dry season",
  mapUrl: "https://www.google.com/maps?q=hai+tac+islands+kien+giang",
  heroImage: heroUrl("pirate-island-kien-giang_ocsqhk"),
  gallery: [
    "pirate-island-kien-giang-3_mgmif5",
    "pirate-island-kien-giang_ocsqhk",
    "pirate-island-kien-giang-10_hnfvvx",
    "pirate-island-kien-giang-9_e4kwem",
    "pirate-island-kien-giang-8_lngzea",
    "pirate-island-kien-giang-2_dk0e0u",
    "pirate-island-kien-giang-5_ltoeps",
    "pirate-island-kien-giang-4_f0arwf",
    "pirate-island-kien-giang-6_iweva1",
  ],
  seoDescription:
    "The Hai Tac Islands are a remote archipelago of 16 islands in the Gulf of Thailand off the Kien Giang coast, historically known as the Pirate Islands. One of the least visited island groups in Vietnam, with coral reefs, white sand beaches, and almost no tourist infrastructure.",
  tips: [
    "Charter a boat from Ha Tien or Rach Gia - Ha Tien is closer at around 2 hours by speedboat vs 3-4 hours from Rach Gia. Negotiate the full boat price upfront including fuel and the return trip.",
    "Bring everything mày need - food, water, snorkeling gear, and camping equipment if staying overnight. The islands have minimal facilities and no reliable places to buy supplies.",
    "The islands are only reachable from November to April when the Gulf of Thailand is calm - do not attempt the crossing outside this window regardless of local assurances about conditions.",
    "Tien Hai island is the only one with a small permanent community and a basic guesthouse - this is the most practical base for multi-day visits.",
    "The reefs around the smaller uninhabited islands are in better condition than those near Tien Hai - ask the boat captain to anchor near the outer islands for snorkeling.",
  ],
  content: {
    intro:
      "The Hai Tac Islands - Pirate Islands in direct translation - are an archipelago of 16 islands and numerous rock outcrops scattered across the Gulf of Thailand approximately 40km southwest of Ha Tien in Kien Giang province. The name reflects the islands' historical use as a base for pirates operating in the Gulf during the 18th and 19th centuries, when the shallow reef-strewn waters and hidden anchorages made the archipelago difficult for larger vessels to navigate safely. Today the islands are among the least visited in Vietnam - lacking the ferry infrastructure of Phu Quoc or the tourism development of Nam Du - and retain a rawness that is increasingly rare in the Gulf of Thailand. The larger islands have small fishing communities, and the surrounding reefs support populations of reef fish, sea turtles, and hard coral in reasonable condition given the low boat traffic. The beaches on the smaller uninhabited islands are undeveloped white sand, accessible only by the fishing boats that occasionally stop for shelter.",
    howToGetThere:
      "The primary departure points are Ha Tien (approximately 2 hours by speedboat) and Rach Gia (3-4 hours). There are no scheduled ferry services to the Hai Tac Islands - access requires chartering a local fishing boat or speedboat. In Ha Tien, boat operators at the main pier can arrange charters, typically for full-day or overnight trips. The crossing should only be made in calm weather - the Gulf of Thailand can develop swells quickly and the open crossing has no shelter. A reliable local operator who knows the islands and the weather patterns is essential.",
    whatToExpect:
      "The Hai Tac Islands offer raw, unpolished island access rather than a resort experience. The main island of Tien Hai has a fishing village, a small temple, and basic accommodation in family guesthouses. The surrounding smaller islands are largely uninhabited and accessible by the chartered boat - a typical day involves anchoring off different islands for snorkeling, swimming, and beach time, with the captain preparing simple seafood caught that morning. The coral reefs vary in condition across the archipelago - the sections with less boat traffic have noticeably healthier cover. Camping on the beach of an uninhabited island overnight is possible with the right equipment and a cooperative boat captain, and gives access to the islands at dawn and dusk when the light and the solitude are at their best.",
    travelTips:
      "The Hai Tac Islands sit in the same Gulf of Thailand waters as the more famous destinations of Phu Quoc and Nam Du, but attract a fraction of the visitors due to the lack of ferry connections and the limited accommodation. For travellers who have already done Phu Quoc and are looking for something with more edge and less infrastructure, Hai Tac is a logical next step. The logistics require more planning than a typical island trip - boat charter negotiation, supply preparation, and weather monitoring - but the reward is access to islands that feel genuinely remote. Ha Tien makes the most practical base: it is a pleasant small town with good food, a manageable size, and proximity to the Cambodian border crossing at Xa Xia for those moving between Vietnam and Cambodia.",
  },
}
