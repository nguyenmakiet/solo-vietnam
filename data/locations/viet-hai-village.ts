import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const vietHaiVillage: Location = {
  slug: "viet-hai-village",
  name: "Việt Hải Village",
  provinces: ["hai-phong"],
  destination: "cat-ba",
  lat: "20.787857336300597",
  lng: "107.05828009939815",
  address: "Việt Hải, Cát Bà, Hải Phòng",
  type: ["cultural", "nature"],
  categories: [],
  experiences: ["cycling", "culture", "photography", "homestay", "kayaking"],
  tags: ["🚲 Cycling Through Jungle", "🏡 Isolated Village", "📸 Photography", "🛶 Kayak Access"],
  bestTime: "Oct – May (dry season; jungle path is less slippery and the village rice fields are most photogenic)",
  entranceFee: "Free",
  openingHours: "Open 24/7",
  mapUrl: "",
  heroImage: heroUrl("viet-hai-village-hero_placeholder"),
  gallery: [],
  seoDescription:
    "Việt Hải is a completely isolated fishing and farming village inside Cát Bà National Park - reachable only by kayak through Lan Hà Bay or by cycling a jungle path through the national park, home to about 50 families who live without road access to the outside world.",
  tips: [
    "The jungle cycling route (8km one way from the national park gate) is the most rewarding approach - the path through the primary forest is one of the best cycling experiences in northern Vietnam",
    "Kayaking in from Lan Hà Bay combines the best water and land experience - paddle in, cycle around the village, kayak back",
    "The village has basic homestays - staying overnight gives access to the village completely empty of day visitors after 3 PM",
    "Rent bicycles in Cát Bà town rather than at the national park entrance - selection and condition is better in town",
    "The rice paddies surrounding the village are best in September–October when the harvest turns the fields gold against the karst backdrop",
  ],
  content: {
    intro:
      "Việt Hải is a small fishing and farming village of approximately 50 families living inside Cát Bà National Park, accessible only by two routes: a kayak through Lan Hà Bay and a 400-metre sea cave passage, or an 8km cycling path through the national park jungle. There is no road connection to the outside world. The village has existed in this isolation for generations - the families grow rice, keep water buffalo, and fish the bay - and was classified as part of the national park's buffer zone rather than relocated, creating a situation where a genuine rural community continues to function inside protected jungle. The combination of physical isolation, intact village life, and the dramatic arrival - either by sea through a cave or by jungle path - makes Việt Hải one of the most memorable experiences accessible from Cát Bà Island.",
    howToGetThere:
      "There are two routes to Việt Hải. By sea: kayak or boat from Cát Bà town through Lan Hà Bay to the cave entrance, through the cave passage (300 metres, requires crouching), and into the lagoon where the village dock is - about 2 hours paddling from Cát Bà town. By land: motorbike to the national park entrance, then bicycle on the jungle path for 8km (1.5–2 hours cycling) through the park to the village. Many visitors combine both - cycle in through the jungle, kayak out through the bay - as a full-day loop. Guides are available at the national park entrance for the jungle route.",
    whatToExpect:
      "The village is a cluster of traditional wooden houses, vegetable plots, rice paddies, and fish ponds in a flat valley surrounded by karst peaks inside the national park. Water buffalo graze on the paths. The inhabitants are accustomed to visitors but the village is not set up as a tourist attraction - there are no organised activities, no craft stalls, and no performers. A few families run basic homestays with meals. The kayak approach through the cave passage is particularly dramatic - a narrow, low tunnel with the sea on the floor and stalactites overhead, opening into the lagoon with the village visible on the far shore. The jungle cycling path passes through dense primary forest with bird noise and occasional macaque sightings.",
    travelTips:
      "Việt Hải is the most distinctive experience available from Cát Bà Island - genuinely isolated, genuinely working, and reached by genuinely adventurous means. The kayak-in, cycle-out combination (or reverse) is the best format for travellers with a full day. Overnight stays in a village homestay are available and strongly recommended - the village after the day visitors leave is one of the most peaceful environments in northern Vietnam. The difficulty of access is what preserves the village's character, and it makes the arrival feel earned regardless of which route mày takes.",
  },
}
