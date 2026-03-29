import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const amTienCave: Location = {
  slug: "am-tien-cave",
  name: "Am Tiên Cave",
  provinces: ["ninh-binh"],
  destination: "ninh-binh",
  lat: "20.283351716721526",
  lng: "105.91444612825703",
  address: "Trường Yên, Hoa Lư, Ninh Bình",
  type: ["cave", "nature"],
  categories: [],
  experiences: ["trekking", "caving", "photography", "history"],
  tags: ["🪨 Hidden Cave", "🥾 Karst Climb", "📸 Photography", "🦇 Bat Colony"],
  bestTime: "Oct – Apr (dry season, trail accessible; avoid rainy season when path is slippery)",
  entranceFee: "~20,000 VND",
  openingHours: "7:00 AM – 5:00 PM",
  mapUrl: "https://www.google.com/maps?q=20.283351716721526,105.91444612825703",
  streetView: {},
  heroImage: heroUrl("am-tien-cave-hero_placeholder"),
  gallery: [],
  seoDescription:
    "Am Tiên Cave is a hidden grotto on the karst hillside above the Hoa Lư valley - reached by a steep climb of 200 stone steps, with a bat colony inside the cave and views from the hilltop over the ancient capital's rice fields and limestone peaks.",
  tips: [
    "The 200 steps are steep and uneven - wear proper footwear, not sandals, and take your time on the descent which is harder than the climb",
    "The bat colony inside the cave is most active at dawn and dusk - thousands of bats exit the cave at sunset in a stream that lasts several minutes",
    "Combine with Hoa Lư Ancient Capital on the same half-day - the cave entrance is 2km from the Đinh and Lê temples",
    "The hilltop viewpoint above the cave gives the best overhead view of the Hoa Lư valley enclosed by karst - worth the extra climb past the cave entrance",
    "Bring a torch - the cave interior is dark and the installed lighting covers only the entrance section",
  ],
  content: {
    intro:
      "Am Tiên Cave sits in the karst hillside above the Hoa Lư valley, 2km from the Đinh and Lê temple complexes of the ancient capital. The cave is a natural limestone grotto at the top of a steep karst ridge, reached by 200 stone steps cut directly into the cliff face. Inside, the cave is home to a colony of thousands of bats - their guano-rich floor and the smell of the cave are evidence of a roost that has been established for generations. The cave also contains a small Buddhist altar, as do most accessible caves in the Ninh Bình karst - the practice of establishing shrines in cave entrances reflects a widespread Vietnamese religious tradition of associating limestone grottos with spiritual power. The hilltop above the cave gives the best aerial perspective available over the Hoa Lư valley - the enclosed basin of rice fields and karst peaks that once formed the natural fortress of Vietnam's first capital.",
    howToGetThere:
      "Am Tiên Cave is 2km from Hoa Lư Ancient Capital's temple complexes, in Trường Yên village. By bicycle from the Đinh and Lê temples, the cave entrance is about 10 minutes along the same road. By motorbike from Ninh Bình city, 25 minutes. The stone staircase to the cave is signposted from the road - a clear path leads from the ticket booth at the base to the cave entrance 200 steps above. The cave is typically visited as an add-on to a Hoa Lư day rather than as a standalone destination.",
    whatToExpect:
      "The climb is steep but manageable - the steps are cut directly into the karst rock and are uneven in places. The view from halfway up already gives good sightlines over the valley. At the top, the cave entrance opens into a dark chamber where the bat colony roosted - the smell is strong and the sounds of the bats are audible even during the day. The altar inside the entrance has incense and offerings. Beyond the cave, a further path climbs to the hilltop viewpoint - the extra 10–15 minutes of climbing gives a panorama that is significantly better than from the cave mouth.",
    travelTips:
      "Am Tiên is a good addition to a Hoa Lư half-day for travellers who want a physical element to complement the temple visits. The climb is short enough to be accessible but demanding enough to feel earned. The bat exodus at sunset - if mày time the visit correctly - is one of those natural spectacles that is reliably impressive: the cave mouth releases a continuous ribbon of bats for 3–5 minutes as the colony exits for the night. The hilltop viewpoint above the cave gives the most satisfying overview of the Hoa Lư valley landscape.",
  },
}
