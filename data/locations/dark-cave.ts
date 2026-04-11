import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const darkCave: Location = {
  slug: "dark-cave",
  name: "Dark Cave",
  provinces: ["quang-binh"],
  destination: "phong-nha-ke-bang",
  lat: "17.574355688827836",
  lng: "106.25458261828979",
  address: "Sơn Trạch, Bố Trạch, Quảng Bình",
  type: "nature",
  categories: [],
  experiences: ["caving", "kayaking", "swimming", "trekking"],
  tags: ["🧗 Adventure Cave", "🛶 Kayaking", "💧 Mud Bath", "🎢 Zip Line"],
  bestTime: "Feb – Aug (dry season, river level stable for kayaking)",
  bestMonths: [2, 3, 4, 5, 6, 7, 8],
  entranceFee: "~450,000 VND (all activities included)",
  openingHours: "7:30 AM – 4:00 PM",
  mapUrl: "https://www.google.com/maps?q=17.574355688827836,106.25458261828979",
  streetView: {embedUrl: "https://www.google.com/maps/embed?pb=!4v1775754964535!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRDI0dUszOGdF!2m2!1d17.57434997734719!2d106.2516421754264!3f142.15513560570668!4f7.232951463300054!5f0.7820865974627469", },
  heroImage: heroUrl("dark-cave-hero_placeholder"),
  gallery: [],
  seoDescription:
    "Dark Cave is Phong Nha's most adventurous experience - a zip line over the Son River, kayaking into a pitch-black cave, swimming through underground passages, and a mineral mud bath inside the cave chamber, all packaged into one of Vietnam's best adventure activities.",
  tips: [
    "Wear clothes you don't mind getting completely ruined - the mud bath is full-body and genuinely fun, not a spa experience",
    "Bring a waterproof phone case or leave your phone at the locker - the cave swim and kayak sections will soak everything",
    "Book the morning slot (7:30–8:00 AM) for smaller groups - afternoon sessions tend to be larger and more chaotic",
    "The zip line across the Son River is the opener - it sets the tone for the whole experience and is genuinely exhilarating",
    "The cave sections are completely dark without the guide's torch - embrace it rather than fight it, the darkness is part of the experience",
  ],
  content: {
    intro:
      "Dark Cave - Hang Tối - is the outlier in Phong Nha-Kẻ Bàng National Park: while the other caves are visited for their geological formations and historical significance, Dark Cave is explicitly an adventure activity. The experience begins with a zip line over the Son River, continues with kayaking into the cave entrance, transitions into a swim through underground passages in complete darkness, and culminates in a mineral mud bath inside one of the cave's chambers - a natural pool of fine grey-white mud with a consistency unlike any spa. The cave itself is 5km long and contains impressive stalactite formations, but the focus here is on experience rather than sightseeing. It attracts a younger, more active crowd than the other Phong Nha caves, and the atmosphere on a busy morning - zip lines, splashing, laughter echoing off cave walls - is completely different from the cathedral quiet of Paradise Cave.",
    howToGetThere:
      "Dark Cave is on the Son River, about 3km north of Sơn Trạch village on the road toward the national park. From Sơn Trạch, it's a 10-minute motorbike ride or short taxi. The activity base is on the riverbank with a clearly marked entrance, lockers, changing rooms, and a restaurant. Tickets are purchased at the base and include all activities - there's no à la carte option. Most travellers do Dark Cave in the morning and combine it with a boat tour to Phong Nha Cave in the afternoon, as the two are close and logistically easy to pair.",
    whatToExpect:
      "The activity runs in a set sequence: gear up at the base, zip line across the Son River (about 400 metres), swim across the river to the cave entrance, kayak into the cave for several hundred metres, then disembark and wade/swim deeper into the cave in the dark. The mud bath chamber is roughly 400 metres inside - a wide, low-ceilinged room with a pool of mineral-rich mud about chest-deep. After the mud bath, the route reverses: swim back out, kayak back to the river, and return by wooden boat to the base. The full experience takes 2–3 hours. Lockers, showers, and a restaurant are available at the base.",
    travelTips:
      "Dark Cave is the most fun of the Phong Nha activities for travellers who want something physically engaging rather than purely scenic. The combination of zip line, kayaking, cave swimming, and mud bath in a single ticket is genuinely good value and well-organised. It's not suitable for people uncomfortable with enclosed spaces, darkness, or open water. The mud bath is the highlight - the mineral content makes the mud unusually buoyant and the texture is unlike anything available in a standard spa. Rinse off in the river after - the mud takes multiple washes to fully remove.",
  },
  insights: {
    highlights: [
      "Zipline 400m across Chay River to cave entrance with stunning mountain views",
      "Explore dark cave passages with headlamps, swim in blue lagoons, reach mud bath",
      "Water park with kayaking, paddle boards, smaller ziplines, and inflatable activities",
    ],
    thingsToKnow: {
      crowds: "Tour groups arrive around 1pm. Visit morning for fewer people. Can get busy in afternoons.",
      difficulty: "Moderate. Cave passages are narrow, muddy, and slippery. Weight limit 40-90kg on main zipline. Cold water in February.",
      safety: "Guide supervision varies; some reports of guides being disengaged during cave exploration. Ensure proper instruction before activities. Water is clean but cold.",
      accessibility: "Overweight visitors can take boat instead of zipline. Rope bridge obstacle course noted as nearly impossible for most people.",
      seasonal: "Avoid visiting immediately after typhoons as water activities are restricted. Water is cold in February.",
    },
    visitorTips: [
      "Arrive morning around 10am before tour groups. Bring extra clothing and waterproof shoes for cave walking.",
      "Book directly at Dark Cave restaurant/ticket office or through Klook. No advance booking required.",
      "Spend full day: cave takes 1-2 hours, water park offers several hours of additional activities.",
    ],
    faq: [
      { question: "What are the ticket prices?", answer: "Water park only 150k VND, with zipline 250k VND, full cave and mud bath package 450k VND. Locker deposit 50k VND (refundable). Summer discounts up to 50% available." },
      { question: "Is the cave tour long?", answer: "Cave exploration is approximately 1-2 hours total: 1km trek inside with headlamps, blue lagoon swimming, narrow muddy passages, then mud bath area before kayaking return." },
      { question: "Can I do activities if I exceed the weight limit?", answer: "Yes. Visitors over 90kg can take boat to cave entrance instead of the 400m zipline. Staff weigh guests if uncertain about limits." },
    ],
    sentiment: {
      positive: "Most visitors praise the unique experience combining zipline adventure, cave exploration with mud bath, and water activities as a memorable half to full day activity.",
      negative: "Some reports of inconsistent guide quality, with occasional disengagement and lack of supervision in cave. Water park equipment aging in places. Staff at river area reported as occasionally rude or unwelcoming.",
    },
  },
}
