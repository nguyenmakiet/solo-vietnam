import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const trungTrangCave: Location = {
  slug: "trung-trang-cave",
  name: "Trung Trang Cave",
  provinces: ["hai-phong"],
  destination: "cat-ba",
  lat: "20.788685844969777",
  lng: "106.99832793371839",
  address: "Cát Bà National Park, Hải Phòng",
  type: ["cave", "nature"],
  categories: [],
  experiences: ["caving", "photography", "trekking"],
  tags: ["🪨 Largest Cave on Cát Bà", "📸 Photography", "🦇 Bat Colony", "🥾 National Park"],
  bestTime: "Apr – Oct (dry season, trail accessible; cave open year-round)",
  entranceFee: "~40,000 VND (national park entry applies)",
  openingHours: "7:00 AM – 4:00 PM",
  mapUrl: "",
  heroImage: heroUrl("trung-trang-cave-hero_placeholder"),
  gallery: [],
  seoDescription:
    "Trung Trang Cave is the largest accessible cave on Cát Bà Island - a 300-metre limestone grotto inside the national park with stalactite formations, a bat colony, and a jungle approach through primary forest.",
  tips: [
    "The cave is 17km from Cát Bà town - combine with the national park trek or Hospital Cave on the same day to justify the drive",
    "The bat colony exits the cave at dusk - timing the visit for late afternoon gives the option of seeing the emergence",
    "The cave interior has installed lighting but some sections are dim - a phone torch improves the formation detail",
    "The jungle path to the cave from the national park road is itself scenic - look for macaques in the canopy overhead",
    "The cave is cool year-round - a brief respite from the outside heat and humidity",
  ],
  content: {
    intro:
      "Trung Trang Cave is the largest limestone cave on Cát Bà Island, located inside the national park 17km from Cát Bà town. The cave extends approximately 300 metres into the karst hillside with two main chambers and a connecting passage, housing stalactite and stalagmite formations and a resident bat colony of several thousand individuals. The cave was known to local people for generations and was used as a shelter during the Vietnam War - the same protective function that the karst geology provided to Hospital Cave on the other side of the island. The approach through the national park forest adds to the experience - the jungle path from the road is 15–20 minutes through primary forest.",
    howToGetThere:
      "Trung Trang Cave is inside Cát Bà National Park, 17km from Cát Bà town on the main road toward the park interior. By motorbike from town, about 25 minutes. The cave is on the same road as Hospital Cave and the national park trailheads - a northern Cát Bà day can cover all three efficiently.",
    whatToExpect:
      "A jungle path of 15–20 minutes leads from the road to the cave entrance. Inside, the first chamber is large and well-lit with notable stalactite formations on the ceiling. The passage to the second chamber is lower and narrower. The bat colony roosts in the upper sections of both chambers - the sound and smell of the roost are detectable before the bats are visible. The cave exit returns through the entrance.",
    travelTips:
      "Trung Trang is worth combining with Hospital Cave and the national park trailhead in a single northern Cát Bà day - all three are on the same road and together cover the island's main historical, natural, and geological sites. On its own, the cave is a 1-hour visit that does not justify the 17km drive from town.",
  },
}
