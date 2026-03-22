import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const sonDoongCave: Location = {
  slug: "son-doong-cave",
  name: "Son Doong Cave",
  provinces: ["quang-binh"],
  destination: "phong-nha-ke-bang",
  lat: "17.466399525611973",
  lng: "106.30214901899664",
  address: "Tân Trạch, Bố Trạch, Quảng Bình",
  type: ["nature","cave"],
  experiences: ["caving", "trekking", "camping", "photography"],
  tags: ["🏆 World's Largest Cave", "🏕️ Overnight Expedition", "📸 Photography", "🥾 Trekking"],
  bestTime: "Feb – Aug (expedition season; cave closes Sep – Jan)",
  entranceFee: "~$3,000 USD per person (4-day expedition, all-inclusive)",
  openingHours: "Expedition departures: Feb – Aug only",
  mapUrl: "",
  heroImage: heroUrl("son-doong-cave2_h7rhbn"),
  gallery: [
    "son-doong-cave6_uo6v0u",
    "son-doong-cave5_itsq2s",
    "son-doong-cave4_r6dbps",
  ],
  seoDescription:
    "Son Doong is the largest cave in the world - big enough to contain a 40-story skyscraper, with its own weather system, jungle, and river inside. Access is by 4-day expedition only, with a strict annual quota of 1,000 visitors, making it one of the most exclusive natural experiences on earth.",
  tips: [
    "Book at least 12–18 months in advance - Oxalis Adventure holds the only permit and the annual quota of ~1,000 spots sells out within hours of opening each year",
    "The $3,000 price is non-negotiable and genuinely covers everything: guides, porters, all meals, camping equipment, and safety team",
    "Fitness requirement is real - the 4-day route involves trekking, rope climbing ('The Great Wall of Vietnam' inside the cave), river crossings, and camping on cave floors",
    "A mirrorless camera with a fast wide-angle lens is the ideal kit - the cave's scale makes phone cameras inadequate for capturing the full chambers",
    "Oxalis runs a shorter 2-day Son Doong adjacent tour for those who can't do the full expedition - it doesn't enter Son Doong itself but accesses the nearby passage system",
  ],
  content: {
    intro:
      "Son Doong - Hang Sơn Đoòng, 'Mountain River Cave' - is the largest cave in the world by volume, discovered by a local farmer named Hồ Khanh in 1991 and left unreported for nearly two decades before a British Cave Research Association expedition entered and surveyed it in 2009. The numbers are staggering: the main passage is 5km long, 200 metres wide, and 150 metres high - large enough to house an entire New York City block of 40-story skyscrapers. Two dolines (collapsed ceiling sections) allow sunlight to enter the cave, creating two separate underground jungles where trees grow to 30 metres inside the mountain. The cave has its own weather system - clouds form inside the largest chamber. The Son River flows through the cave floor, and the walls display 400-million-year-old geological formations. Since opening to tourism in 2013, Son Doong has been accessible via a single licensed operator, Oxalis Adventure, with an annual permit quota that makes it one of the most sought-after natural experiences in the world.",
    howToGetThere:
      "Son Doong is only accessible through Oxalis Adventure (oxalisadventure.com) - they hold the sole permit issued by Quảng Bình province and the national park authority. There is no other legal way to enter the cave. Expeditions depart from Sơn Trạch village (Phong Nha town), 50km north of Đồng Hới. The expedition begins with a jungle trek of approximately 10km on Day 1 before reaching the cave entrance. Participants must fly or take the train to Đồng Hới, then transfer to Sơn Trạch. Booking is done entirely through Oxalis's website - spots open annually, typically in September for the following season, and sell out within hours.",
    whatToExpect:
      "The 4-day expedition follows a set route through Son Doong and the adjacent Hang Én cave system. Day 1 involves jungle trekking to Hang Én, where participants camp overnight on a beach inside the cave. Day 2 enters Son Doong itself - the scale of the first main chamber is the defining moment for most participants, described universally as incomprehensible until standing inside it. Day 2 and 3 are spent progressing through the cave, crossing the underground river, climbing 'The Great Wall of Vietnam' (a 90-metre calcite formation inside the cave), and camping in the cave's second jungle beneath the second doline. Day 4 is the exit and return trek. A team of approximately 25 support staff - guides, porters, cooks, safety specialists - accompanies each group of up to 10 participants.",
    travelTips:
      "Son Doong is categorically different from every other cave experience in Vietnam or anywhere else - the scale, the remoteness, the effort required, and the cost place it in a class of its own. It is not an upgrade from Paradise Cave; it's a fundamentally different category of experience, closer to a wilderness expedition than a sightseeing tour. The fitness requirement is genuine: participants must be comfortable with multi-day trekking, rope work, river crossings, and sleeping on cave floors. The reward - standing inside the world's largest cave, watching clouds form above a jungle that grows inside a mountain - is by most accounts the most extraordinary natural experience available on earth. For travellers who can afford it and meet the fitness requirements, no other destination in Vietnam comes close.",
  },
}
