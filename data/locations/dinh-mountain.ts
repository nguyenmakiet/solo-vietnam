import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const dinhMountain: Location = {
  slug: "dinh-mountain",
  name: "Núi Dinh (Dinh Mountain)",
  provinces: ["ba-ria-vung-tau"],
  destination: "",
  lat: "10.537592530622792",
  lng: "107.12929659066629",
  address: "Mỹ Xuân, Tân Thành, Bà Rịa – Vũng Tàu",
  type: ["mountain", "nature", "temple"],
  categories: [],
  experiences: ["trekking", "photography", "culture", "camping"],
  tags: ["⛰️ Coastal Peak", "🥾 Summit Trek", "🛕 Summit Pagoda", "🌅 Sea Views"],
  bestTime: "Nov – Apr (dry season; wet season trails are slippery and visibility from the summit is poor)",
  entranceFee: "Free",
  openingHours: "Open daily",
  mapUrl: "https://www.google.com/maps?q=10.537592530622792,107.12929659066629",
  streetView: {},
  heroImage: heroUrl("dinh-mountain-4_kxaybx"),
  gallery: [
    "dinh-mountain-3_vcw0xt",
    "dinh-mountain_urjvqa",
    "dinh-mountain-4_kxaybx",
    "dinh-mountain-6_utpoe4",
    "dinh-mountain-5_ak3bxp",
    "dinh-mountain-8_pzzed7",
    "dinh-mountain-2_vdywfp",
  ],
  seoDescription:
    "Núi Dinh is a 504m coastal peak in Bà Rịa–Vũng Tàu province - the highest point in the region, with forested trails, a summit pagoda, and panoramic views over the Vũng Tàu peninsula and the South China Sea.",
  tips: [
    "Start early - the summit gets hot by mid-morning and the forest trail offers limited shade on the upper section",
    "The trail passes several small pagodas and shrines on the way up - the mountain has religious significance and sees regular Vietnamese pilgrim traffic",
    "Views from the summit extend across the Vũng Tàu peninsula and on clear days to the offshore oil platforms in the South China Sea",
    "The mountain is 30km from Vũng Tàu city - combine with a Vũng Tàu beach day or the Christ the King statue for a full day in the province",
    "Bring water - no reliable refreshment stops exist on the trail above the lower pagodas",
  ],
  content: {
    intro:
      "Núi Dinh rises 504 metres from the flat coastal plains of Bà Rịa–Vũng Tàu province, making it the highest peak in the region between Ho Chi Minh City and the sea. The mountain sits in Tân Thành district, roughly equidistant between Biên Hòa and Vũng Tàu city, and is visible as an isolated forested peak from much of the surrounding lowland. The summit holds a pagoda complex that draws Vietnamese pilgrims alongside trekkers, giving the mountain the dual character common to accessible peaks across southern Vietnam - part nature trail, part religious site. The forested slopes support secondary jungle that provides shade through most of the ascent, and the summit viewpoint gives an unobstructed panorama across the coastal province toward the sea.",
    howToGetThere:
      "Núi Dinh is located in Mỹ Xuân commune, Tân Thành district, approximately 30km from Vũng Tàu city and 60km from Ho Chi Minh City. By motorbike from Vũng Tàu, follow National Highway 51 northwest - the mountain is well signposted from the highway. From HCMC, take the HCMC–Long Thành–Dầu Giây Expressway then continue south on QL51. There is no regular public transport to the trailhead; motorbike is the standard approach. A small parking area at the base marks the start of the trail.",
    whatToExpect:
      "The trail climbs through secondary forest with several small shrines and rest points along the route. The ascent takes 1.5–2 hours at a moderate pace. Several pagoda complexes are encountered on the way - the mountain is an active pilgrimage site and the shrines are maintained and visited regularly. The upper section opens out with improving views as the tree cover thins. The summit pagoda sits at the highest accessible point, with a viewpoint platform giving 360-degree sightlines across the province. On clear days the Vũng Tàu peninsula, the Cần Giờ mangrove coast, and the offshore oil platforms are all visible.",
    travelTips:
      "Núi Dinh is well suited to travellers combining a Vũng Tàu beach trip with something more active. The peak is close enough to the city to work as a morning activity before spending the afternoon on the beach. The religious dimension of the mountain - multiple active pagodas, regular pilgrim traffic - adds cultural texture to what would otherwise be a straightforward hill walk. For visitors based in HCMC, Núi Dinh is a slightly more adventurous alternative to Chứa Chan Mountain in Đồng Nai, with the advantage of coastal views from the summit.",
  },
}
