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
  bestMonths: [1, 2, 3, 4, 10, 11, 12],
  entranceFee: "~20,000 VND",
  openingHours: "7:00 AM – 5:00 PM",
  mapUrl: "https://www.google.com/maps?q=20.283351716721526,105.91444612825703",
  streetView: {embedUrl: "https://www.google.com/maps/embed?pb=!4v1775919891167!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQzR2OVRsM0FF!2m2!1d20.2816815269168!2d105.9115505134598!3f155.94168654130553!4f-35.89584643338258!5f0.7820865974627469", },
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
  insights: {
    highlights: [
      "Scenic lake loop walk or bike ride surrounded by limestone cliffs and peaceful landscape",
      "Cave temple with underground sacred water pool and 200-step climb for panoramic views",
      "Stone wall path in north section of lake ideal for photography",
    ],
    thingsToKnow: {
      crowds: "Mostly Vietnamese visitors, can experience school groups and crowds depending on timing. Less crowded during off-peak hours.",
      difficulty: "200 steps to cave are steep and rough. Lake loop is flat and easy. Cave climb physically demanding but not long distance.",
      safety: null,
      accessibility: "West gate entrance sometimes closed. Must use bikes rented onsite; personal bikes not allowed inside. Motorbikes and electric buses prohibited.",
      seasonal: "Weather dependent; best visited on cool, clear days. Hot weather makes cycling around lake uncomfortable.",
    },
    visitorTips: [
      "Use east entrance if west gate is closed. Rent bikes onsite to explore the lake loop easily",
      "Keep parking ticket when leaving to avoid disputes with bike rental staff",
      "Visit during cooler times of day for comfortable cycling; check weather before going",
    ],
    faq: [
      { question: "Can I bring my own bike or motorbike inside?", answer: "No. Personal bikes and motorbikes are prohibited. You must rent bikes from the site or walk. Rental costs 50k VND for single, 100k for tandem bikes." },
      { question: "How long does it take to visit?", answer: "Lake loop walk takes 15-20 minutes. With cycling and cave exploration, allow 1-2 hours. Cave climb with 200 steps adds 30-45 minutes if you attempt it." },
      { question: "What is the entrance fee and parking cost?", answer: "Entry ticket 50k VND per person. Car parking 20k VND, motorbike parking 50k VND. Bike rental separate: 50k for single bike, 100k for tandem." },
    ],
    sentiment: {
      positive: "Most visitors praise the peaceful, scenic lake setting and find it an excellent place for relaxation and photography. Many call it a hidden gem worth visiting despite modest size.",
      negative: "Recurring complaints about high pricing relative to experience, forced bike rental system despite having own bikes, and unfriendly ticket staff. Stone door/citadel entrance now permanently closed contrary to promotional photos.",
    },
  },
}
