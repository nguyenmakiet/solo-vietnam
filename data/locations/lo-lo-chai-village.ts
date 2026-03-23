import { Location } from "../location"
import { heroUrl } from "@/lib/cloudinary"

export const loLoChaiVillage: Location = {
  slug: "lo-lo-chai-village",
  name: "Lô Lô Chải Village",
  provinces: ["ha-giang"],
  destination:"ha-giang-loop",
  lat: "23.36452656422781", 
  lng: "105.31069880257382",
  address: "Lô Lô Chải, Lũng Cú, Đồng Văn, Hà Giang",
  type: "cultural",
  categories: [],
  experiences: ["culture", "homestay", "photography", "walking-tour"],
  tags: ["🎎 Ethnic Culture", "📸 Photography", "🏡 Homestay", "🌾 Village Life"],
  bestTime: "Sep – Nov or Mar – Apr (clear skies, festivals)",
  entranceFee: "Free",
  openingHours: "Open 24/7",
  mapUrl: "https://maps.google.com/?q=23.3533,105.3300",
  heroImage: heroUrl("lo-lo-chai-04_ajdcgh"),
  gallery: [
      "lo-lo-chai-01_o1msxb",
      "lo-lo-chai-02_pk9o8u",
      "lo-lo-chai-03_ffhglk",
  ],
  seoDescription:
    "Lô Lô Chải Village - one of Vietnam's most intact ethnic minority villages, home to the Lô Lô people at the foot of Lũng Cú's Dragon Mountain, with traditional stone houses, distinctive indigo textiles, and a culture found nowhere else in the world.",
  tips: [
    "Stay overnight in a Lô Lô homestay rather than day-tripping from Đồng Văn - the village is completely different after the day visitors leave",
    "The Lô Lô are known for their distinctive patchwork indigo textiles - genuinely handmade pieces are sold directly by village women",
    "Ask your homestay host about the Lô Lô drum ceremony - one of the most unique musical traditions in northern Vietnam",
    "The village is at the base of Dragon Mountain - combine with the Lũng Cú Flag Tower climb in the same morning",
    "Respect privacy when photographing - always ask before pointing a camera at people, especially elders",
  ],
  content: {
    intro:
      "Lô Lô Chải sits at the foot of Dragon Mountain, just 2km from the Lũng Cú Flag Tower at Vietnam's northernmost point. It's home to the Lô Lô - one of Vietnam's smallest ethnic groups with fewer than 4,000 people remaining - who have lived on this plateau for centuries. The village is a cluster of traditional stone and mud-brick houses with carved wooden doors, surrounded by buckwheat fields in autumn and corn in summer. The Lô Lô are famous for their intricate patchwork textiles and their bronze drum ceremonies, which mark the rhythm of births, deaths, and harvests.",
    howToGetThere:
      "Lô Lô Chải is 2km from the Lũng Cú Flag Tower and 26km north of Đồng Văn town. From Đồng Văn, take the road north toward Lũng Cú - the village is signposted on the left just before the flag tower turnoff. The road is paved and takes about 45 minutes by motorbike from Đồng Văn. Most travelers visit as part of a Lũng Cú day trip from Đồng Văn.",
    whatToExpect:
      "The village is small - a few dozen households spread across a gentle slope below the mountain. Stone walls divide vegetable plots and the paths between houses are narrow and quiet. Lô Lô women wear distinctive traditional dress of black indigo cloth embroidered with geometric patterns in red, yellow, and white - you'll see them working on textiles outside their homes. Several families run basic homestays with home-cooked meals. The atmosphere is genuinely calm and unhurried.",
    travelTips:
      "Lô Lô Chải is one of the few places on the Hà Giang Loop where staying overnight makes a real difference to the experience. The village empties of day visitors by late afternoon and the evenings - dinner with a local family, sitting around the fire, hearing the sounds of the plateau at night - are what make the Loop memorable rather than just scenic. Book homestays through your Đồng Văn guesthouse or directly with families in the village.",
  },
}