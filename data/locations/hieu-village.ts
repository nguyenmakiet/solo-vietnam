import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const hieuVillage: Location = {
  slug: "hieu-village",
  name: "Hieu Village",
  provinces: ["thanh-hoa"],
  destination: "pu-luong",
  lat: "20.465207207325047", // TODO: verify
  lng: "105.22192270503085", // TODO: verify
  address: "Cổ Lũng, Bá Thước, Thanh Hóa",
  type: ["cultural", "town"],
  categories: [],
  experiences: ["culture", "photography", "walking-tour"],
  tags: ["🌾 Rice Terraces", "💧 Waterfall Village", "🏠 Thai Stilt Houses", "🌉 Bamboo Bridge"],
  bestTime: "Late May - early Jun (green rice) and late Sep - early Oct (golden harvest)",
  bestMonths: [5, 6, 9, 10],
  entranceFee: "Free",
  openingHours: "Open 24/7",
  mapUrl: "https://www.google.com/maps?q=20.465207207325047,105.22192270503085", // TODO: verify with exact coords
  streetView: {},
  heroImage: heroUrl("hieu-village_fan7hp"), // TODO: upload and replace
  gallery: [
    "hieu-village_fan7hp",
    "hieu-village-4_bfsbzy",
    "hieu-village-2_dks4r5",
    "hieu-village-3_h2icnc",
  ],
  seoDescription:
    "Hieu Village (Bản Hiêu) is a traditional Thai village in Pù Luông Nature Reserve built around a multi-tiered waterfall - a quieter alternative to Don Village, with bamboo bridges, rice terraces stepping down to the stream, and homestays scattered along the water.",
  tips: [
    "Hieu Village is built directly on top of Hieu Waterfall - the village and the waterfall share the same stream, and the upper tiers run between houses and rice fields",
    "Most visitors come as a day trip from Don Village (around 7km away) but staying overnight in Hieu Village gives access to the waterfall in early morning before any visitors arrive",
    "The bamboo footbridge across the stream is the iconic photo spot in the village - sunrise and late afternoon are the strongest light windows",
    "The village is small and the path system follows the stream - it is easy to walk the entire settlement in 1 to 2 hours",
    "Cổ Lũng duck is a local specialty raised on the streams here - if your homestay offers it for dinner, it is worth ordering",
  ],
  content: {
    intro:
      "Hieu Village (Bản Hiêu) is a Thai village in Cổ Lũng commune, on the eastern side of Pù Luông Nature Reserve, built along the course of the Hiêu Stream which descends through the village in a series of waterfalls and pools. The village shares its identity with the water - rice terraces step down to the stream banks, bamboo footbridges cross between hamlets, and traditional stilt houses are arranged along the upper slopes above the waterfall tiers. Compared to Don Village, Hieu Village is smaller, less developed, and noticeably quieter, with a handful of family-run homestays rather than the larger retreats found elsewhere in the reserve. The combination of village life and the running water of Hieu Waterfall gives Hieu Village a distinctive atmosphere that is unlike any other settlement in Pù Luông, and it is the second most photographed village in the reserve after Don Village.",
    howToGetThere:
      "Hieu Village is around 7km from Don Village by road - a 20-minute motorbike ride through the reserve along a road that climbs and descends through forest and farmland. The route is well-paved but narrow and twisty, with steep sections that less confident motorbike riders may find demanding. Most homestays in Don Village can arrange a xe ôm transfer or a guide to ride with you. From Phố Đoàn market town, the direct distance to Hieu Village is around 12km. The final approach into the village is on a smaller road that descends to the stream.",
    whatToExpect:
      "The village is built around the Hiêu Stream, and the layout follows the water - houses on the slopes, terraces along the edges, and footpaths crossing back and forth on bamboo and concrete bridges. The waterfall (Hieu Waterfall) drops in tiers through the village itself, with the largest tier just below the main hamlet. Walking the village takes 1 to 2 hours and includes the bridges, the rice terraces, and access points to the upper waterfall pools. Local Thai families farm rice and raise Cổ Lũng ducks on the stream - the ducks are a regional delicacy and feature on most homestay menus. The village is genuinely small and you will likely encounter more farmers than other visitors outside of weekends.",
    travelTips:
      "Hieu Village pairs well with Don Village as a day trip or a one-night stop - the contrast between the larger, busier Don Village and the smaller, water-defined Hieu Village shows two different sides of Thai village life in Pù Luông. For photography, Hieu Village has more visual variety than Don Village because of the stream, the waterfall tiers, and the bamboo bridges - but the rice terraces here are smaller and less wide-angle dramatic. Solo travellers in particular often prefer Hieu Village for its slower pace and more personal homestay scale. Avoid weekends in peak season if you are looking for the quietest experience.",
  },
}
