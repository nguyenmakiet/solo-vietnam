import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const khoMuongCave: Location = {
  slug: "kho-muong-cave",
  name: "Kho Muong Cave",
  provinces: ["thanh-hoa"],
  destination: "pu-luong",
  lat: "20.48417144014872", // TODO: verify
  lng: "105.13857469704293", // TODO: verify
  address: "Thành Sơn, Bá Thước, Thanh Hóa",
  type: "cave",
  categories: ["hidden-gem"],
  experiences: ["photography", "walking-tour", "wildlife"],
  tags: ["🕳️ Karst Cave", "🦇 Bat Colony", "🥾 Guided Tour", "🌿 Reserve Wildlife"],
  bestTime: "Year-round (dry season Nov - Apr is easiest underfoot)",
  bestMonths: [11, 12, 1, 2, 3, 4],
  entranceFee: "10,000 VND (collected by villager)",
  openingHours: "Daylight hours",
  mapUrl: "https://maps.google.com/?q=20.48417144014872,105.13857469704293", // TODO: verify with exact coords
  streetView: {},
  heroImage: heroUrl("kho-muong-cave_ue28wz"), 
  gallery: [
    "kho-muong-cave_ue28wz",
    "kho-muong-cave-5_mxoabh",
    "kho-muong-cave-3_soy2cj",
    "kho-muong-cave-4_wcbybw",
    "kho-muong-cave-2_awedkt",
    "kho-muong-cave-8_r0bw21",
    "kho-muong-cave-6_ezell3",
    "kho-muong-cave-9_nwb5dl",
    "kho-muong-cave-7_qiphcs",
  ],
  seoDescription:
    "Kho Muong Cave (Hang Kho Mường) is a large karst cave at the head of Kho Muong Village inside Pù Luông Nature Reserve - a fossil cave with a wide entrance, a resident bat colony, and a roughly 1km walking section accessed only with a local guide.",
  tips: [
    "The cave is only visited with a local guide arranged through homestays in Kho Muong Village - independent entry is not allowed",
    "Bring a proper headlamp - the village provides basic torches but the chambers are large and dark, and a real headlamp transforms the visit",
    "Expect bats - the cave has an active colony and they are part of the experience, not a hazard",
    "Wear closed shoes with grip - the floor is uneven, with mud after rain and loose rock throughout",
    "The cave is part of an underground river system that connects to other karst features in the reserve - some sections are dry fossil passage, others have seasonal water",
  ],
  content: {
    intro:
      "Kho Muong Cave (Hang Kho Mường) is the largest known cave inside Pù Luông Nature Reserve, located at the head of the closed valley that holds Kho Muong Village. The cave entrance is a wide arched opening at the base of a limestone wall, around 15 minutes' walk uphill from the village core, and inside the passage opens into a sequence of large chambers with a roughly 1km walking section accessible to visitors. Geologically, Kho Muong Cave is part of the wider karst system that defines Pù Luông - a fossil cave once carved by an underground river that has since shifted to lower levels, leaving the upper passages dry. An active bat colony lives in the upper roof of the main chamber and is one of the cave's defining features. Visits are managed by Kho Muong Village, with local guides leading small groups through the accessible section in around 1 to 1.5 hours.",
    howToGetThere:
      "The cave is reached from Kho Muong Village, the only access point. From the village, a marked path leads uphill through farmland and into the forested slope at the valley head, reaching the cave entrance in around 15 minutes of walking. There is no road access - the final approach is on foot only. Most visitors are guests at homestays in Kho Muong Village who arrange the cave visit through their host. Day visitors from Don Village typically combine the cave with a half-day in the village; the road into Kho Muong Village is the steepest in the reserve and is the main barrier to access.",
    whatToExpect:
      "The cave begins with a wide, well-lit entrance chamber that gradually narrows into the main passage. The accessible 1km section includes several large chambers separated by lower connecting passages, with stalactite and stalagmite formations throughout. The bat colony is in the upper roof of the main chamber and is most active at the entrance during dawn and dusk - mid-day visits typically pass under a quiet roost. The cave floor is uneven, with rock, dried mud, and occasional bat guano, and a head torch is genuinely needed beyond the entrance light. The full guided visit takes 1 to 1.5 hours and includes both the geological highlights and the village-level interpretation of how the cave fits into the local landscape.",
    travelTips:
      "Kho Muong Cave is the natural pairing for an overnight in Kho Muong Village and is the main reason most visitors stay that side of the reserve. It is not technically difficult and has no rope or harness sections - a fit walker with a proper headlamp will manage it without issue. It is, however, a wild cave rather than a developed show cave: there are no walkways, no lighting, and no railings, and the experience depends entirely on the guide and your own torch. For travellers comparing Pù Luông's caves, Kho Muong Cave is the standard recommendation; deeper or more technical caving in Pù Luông requires private guides and is not part of the standard village offering.",
  },
}
