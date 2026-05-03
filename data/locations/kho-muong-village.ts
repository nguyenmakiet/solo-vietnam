import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const khoMuongVillage: Location = {
  slug: "kho-muong-village",
  name: "Kho Muong Village",
  provinces: ["thanh-hoa"],
  destination: "pu-luong",
  lat: "20.44871826696882", // TODO: verify
  lng: "105.15321491096157", // TODO: verify
  address: "Thành Sơn, Bá Thước, Thanh Hóa",
  type: ["cultural", "town"],
  categories: ["hidden-gem"],
  experiences: ["culture", "photography", "walking-tour", "history"],
  tags: ["🏞️ Remote Valley", "🏠 Thai Stilt Houses", "🌾 Rice Terraces", "🕳️ Cave Access"],
  bestTime: "Late May - early Jun (green rice) and late Sep - early Oct (golden harvest)",
  bestMonths: [5, 6, 9, 10],
  entranceFee: "Free",
  openingHours: "Open 24/7",
  mapUrl: "https://maps.google.com/?q=20.44871826696882,105.15321491096157", // TODO: verify with exact coords
  streetView: {},
  heroImage: heroUrl("kho-muong-village_kgv6ld"), // TODO: upload and replace
  gallery: [
    "kho-muong-village_kgv6ld",
    "kho-muong-village-8_klezcb",
    "kho-muong-village-7_jsqcnj",
    "kho-muong-village-5_l7c5qg",
    "kho-muong-village-10_im7fsn",
    "kho-muong-village-4_dcf7s5",
    "kho-muong-village-3_zsvoh2",
    "kho-muong-village-2_umy8gu",
    "kho-muong-village-6_rpgje2",
  ],
  seoDescription:
    "Kho Muong Village (Bản Kho Mường) is the most remote Thai village inside Pù Luông Nature Reserve - a small settlement at the bottom of a narrow karst valley, accessed by a steep mountain road, with traditional homestays and the entrance to Kho Muong Cave at the valley head.",
  tips: [
    "The road into Kho Muong Village is the steepest in Pù Luông - confident motorbike riders only, or arrange a 4WD transfer through your homestay",
    "Stay overnight rather than visit as a day trip - the valley is quiet, the homestays are family-scale, and the early morning mist on the rice fields is the main draw",
    "Kho Muong Cave is a 15-minute walk from the village and is included in most homestay overnight stays as a guided visit",
    "The village is significantly less developed than Don Village or Hieu Village - expect basic amenities, intermittent electricity, and no cafes or shops outside homestays",
    "Bring cash from Phố Đoàn - there are no ATMs and homestays accept cash only",
  ],
  content: {
    intro:
      "Kho Muong Village (Bản Kho Mường) is a small Thai village in Thành Sơn commune, hidden at the bottom of a narrow karst valley on the western side of Pù Luông Nature Reserve. It is widely considered the most remote and least developed of the main villages inside the reserve, reached by a steep, twisting mountain road that descends sharply into the valley floor. Around 60 households of Thai farmers live in traditional stilt houses arranged along the valley bottom, with rice terraces stepping up toward the surrounding limestone walls. The village sits directly beneath the mouth of Kho Muong Cave, a large karst cave that gives the valley its closed, basin-like character. Tourism here is small in scale and largely centred on a handful of family homestays - there are no retreats, no large lodges, and no infrastructure beyond what the village itself uses. For travellers who specifically want to experience Pù Luông without the photography crowds of Don Village, Kho Muong Village is the standard recommendation.",
    howToGetThere:
      "Kho Muong Village is approximately 12km from Don Village, but the road takes around 45 minutes due to its steep gradient and switchbacks. The drive is genuinely demanding - one of the steepest sections in the reserve, with sharp drops on the valley side. Most travellers arrange a 4WD or xe ôm transfer through their homestay; self-driving the road on a motorbike requires confidence on steep, narrow surfaces. From Phố Đoàn the distance is around 20km. Some hikers walk in from Don Village over a 4 to 5 hour mountain trail with a local guide, which is the most rewarding way to arrive but should not be attempted without a guide.",
    whatToExpect:
      "The village is genuinely small and a single afternoon is enough to walk its full length. The valley floor is given to rice farming, with terraces stepping up the slopes and water buffalo grazing between paddies. Homestay life is the main cultural experience - shared meals, rice wine, and conversations with Thai families who have lived here across generations. The cave (Kho Muong Cave) is at the valley head, a 15-minute walk from the village core, and is the natural day-trip from any homestay. Trekking routes lead from Kho Muong Village to other villages including Don Village and Bản Pồn - a 1 to 2 day guided trek is one of the more rewarding ways to see the inner reserve. Outside of these activities the rhythm is genuinely slow and the village is quiet from sunset onward.",
    travelTips:
      "Kho Muong Village is the recommended counterpoint to Don Village for travellers staying multiple nights in Pù Luông - one night in Don Village for the wide rice bowl and easy access, one night in Kho Muong Village for the remoteness and quieter homestay scale. The village is not a good fit for travellers who need reliable internet, charging-heavy equipment, or rapid logistics. Expect 24/7 access to nature and limited access to comfort. The road in is the single largest filter for visitors and keeps the village protected by default - this is also its main appeal.",
  },
}
