import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const donVillage: Location = {
  slug: "don-village",
  name: "Don Village",
  provinces: ["thanh-hoa"],
  destination: "pu-luong",
  lat: "20.442325670852664", // TODO: verify
  lng: "105.15306511972044", // TODO: verify
  address: "Thành Lâm, Bá Thước, Thanh Hóa",
  type: ["cultural", "town"],
  categories: [],
  experiences: ["culture", "photography", "walking-tour", "cycling"],
  tags: ["🌾 Rice Terraces", "🏠 Thai Stilt Houses", "🛏️ Homestay Hub", "📸 Photography"],
  bestTime: "Late May - early Jun (green rice) and late Sep - early Oct (golden harvest)",
  bestMonths: [5, 6, 9, 10],
  entranceFee: "Free",
  openingHours: "Open 24/7",
  mapUrl: "https://www.google.com/maps?q=20.442325670852664,105.15306511972044", // TODO: verify with exact coords
  streetView: {},
  heroImage: heroUrl("don-village-pu-luong-thanh-hoa_j5nnbg"), // TODO: upload and replace
  gallery: [
    "don-village-pu-luong-thanh-hoa_j5nnbg",
    "don-village-pu-luong-thanh-hoa-7_lzsk8v",
    "don-village-pu-luong-thanh-hoa-6_yx9r41",
    "don-village-pu-luong-thanh-hoa-5_ntmmek",
    "don-village-pu-luong-thanh-hoa-4_pn6h24",
    "don-village-pu-luong-thanh-hoa-3_grymjf",
    "don-village-pu-luong-thanh-hoa-2_bqxmwk",
    "don-village-pu-luong-thanh-hoa-8_sqsno6",
  ],
  seoDescription:
    "Don Village (Bản Đôn) is the most popular Thai village in Pù Luông Nature Reserve - a hillside settlement of traditional stilt houses set above a wide bowl of terraced rice fields, and the main base for homestays, retreats, and trekking in the reserve.",
  tips: [
    "Don Village is the busiest settlement in Pù Luông - book homestays well in advance for the rice harvest weeks in late May and late September when the terraces are at their photogenic peak",
    "The viewpoint above the village (a 10-minute walk from the main road) gives the best wide-angle shot of the rice bowl - go at sunrise for mist sitting in the valley below the terraces",
    "Most homestays here are run by Thai families and include dinner with the family - this is the cultural core of the visit, more than any single sight",
    "Cycle the loop road around the valley floor in the early morning - it is flat near the rice fields and gives slow access to the terrace edges and water buffalo",
    "Pù Luông is malaria-free and significantly cooler than the lowlands in summer - one of the few highland escapes within 4 hours of Hanoi",
  ],
  content: {
    intro:
      "Don Village (Bản Đôn) is the most established and most photographed Thai village inside Pù Luông Nature Reserve in Bá Thước District, Thanh Hóa Province. The village sits on a sloping hillside above a wide bowl of stepped rice terraces, with traditional Thai stilt houses arranged along the contour and a small road descending into the valley floor. Over the past decade Don Village has become the de facto base for visitors to Pù Luông, with the largest concentration of homestays, eco-lodges, and small retreats in the reserve. Despite the development, the village retains a working agricultural character - families still farm the terraces, water buffalo work the paddies, and daily life proceeds at the pace of the rice cycle. The defining image of Don Village is the rice bowl itself: in late May it is luminous green, in late September it turns gold for harvest, and outside these windows it sits in shades of brown and pale yellow under a backdrop of forested limestone ridges.",
    howToGetThere:
      "Don Village is approximately 170km southwest of Hanoi and around 130km from Thanh Hóa city. The most common access is by private car or motorbike from Hanoi via the QL6 highway through Hòa Bình, then south through Mai Châu and into Bá Thước - a 4 to 5 hour drive. Direct sleeper buses run from Mỹ Đình bus station in Hanoi to Phố Đoàn, the small market town near Pù Luông, from where a xe ôm or pre-arranged homestay pickup covers the final 8km to Don Village. Most travellers reach Don Village as part of a 2 to 3 day Pù Luông itinerary rather than a day trip.",
    whatToExpect:
      "Days in Don Village are slow by design. Mornings are spent walking or cycling through the terraces below the village, watching mist clear off the valley floor and farmers move between paddies. The viewpoint above the village is a short uphill walk from the main road and is the standard sunrise spot. Most homestays serve Thai-style family meals - sticky rice, grilled river fish, bamboo-cooked vegetables, and rice wine - and many offer guided treks to neighbouring villages such as Hieu Village, Kho Muong Village, and Bản Nủa. The middle of the day tends to be hot and bright; activity resumes in the late afternoon when the light softens for photography. Evenings are quiet, with limited nightlife by design.",
    travelTips:
      "Don Village rewards a 2-night stay rather than a flying visit - one full day is needed to walk down into the terraces, visit a neighbouring village, and catch both sunrise and sunset light. The village is the easiest entry point to Pù Luông for first-time visitors, with the most homestay options across budgets, but it is also the most developed and the most visited. Travellers seeking a quieter, less photographed experience should pair Don Village with a night in Kho Muong Village or Hieu Village for contrast. Outside the rice harvest weeks, Don Village is significantly less crowded and homestays are easier to book on short notice.",
  },
}
