import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const nguomNgaoCave: Location = {
  slug: "nguom-ngao-cave",
  name: "Nguom Ngao Cave",
  provinces: ["cao-bang"],
  destination: "cao-bang",
  lat: "22.845576774719714",
  lng: "106.70639496631787",
  address: "Đàm Thủy, Trùng Khánh, Cao Bằng",
  type: ["nature", "cave"],
  categories: [],
  experiences: ["caving", "photography"],
  tags: ["🪨 Stalactite Cave", "📸 Photography", "🧗 Cave Walk", "🌿 Off the Beaten Path"],
  bestTime: "Oct – Apr (dry season, easier road access)",
  bestMonths: [1, 2, 3, 4, 10, 11, 12],
  entranceFee: "~30,000 VND",
  openingHours: "7:00 AM – 5:00 PM",
  mapUrl: "https://www.google.com/maps?q=22.845576774719714,106.70639496631787",
  streetView: {},
  heroImage: heroUrl("nguom-ngao-cave-hero_placeholder"),
  gallery: [],
  seoDescription:
    "Nguom Ngao Cave - 'Tiger Cave' in the Tày language - is one of Vietnam's most spectacular limestone grottos: a 2.1km passage of cathedral-scale chambers, extraordinary stalactite and stalagmite formations, and near-total silence, just 3km from Bản Giốc Waterfall.",
  tips: [
    "Bring a jacket - the cave interior stays at around 16–18°C year-round, noticeably cold after the heat outside",
    "The guided tour covers 900m of the cave's 2.1km total length - the section open to visitors contains the most impressive formations",
    "Photography is permitted - the cave is well-lit but a wide-angle lens captures the chamber scale far better than a phone camera",
    "Visit Nguồm Ngao immediately after Bản Giốc Waterfall - they're 3km apart and the cave makes a natural second stop on the same morning",
    "The name means 'Tiger Cave' in Tày - tigers were reportedly sighted at the entrance in the past; ask your guide about the local history",
  ],
  content: {
    intro:
      "Nguồm Ngao means 'Tiger Cave' in the Tày language - the ethnic minority group that has lived in this karst region for centuries. The cave extends 2.1km into the limestone massif, with three main chambers connected by narrow passages, and was formed over millions of years by the same underground river system that feeds Bản Giốc Waterfall 3km away. The formations inside are among the densest and most varied of any cave in northern Vietnam: stalactites ranging from needle-thin to column-thick, flowstone curtains, cave coral, and stalagmites that have grown into shapes locals name after animals and figures. The largest chamber is 80 metres wide and 40 metres high - the ceiling out of torch range. The cave was only opened to visitors in 1994 after systematic exploration by Vietnamese geologists, and receives a fraction of the tourist traffic of Ha Long Bay's caves, giving it a stillness and atmosphere that's genuinely rare.",
    howToGetThere:
      "Nguồm Ngao is 3km from Bản Giốc Waterfall, along a paved road in Đàm Thủy commune. From the waterfall, follow the main road back toward Trùng Khánh - the cave entrance is signposted on the left. By motorbike, it's under 10 minutes from Bản Giốc. The cave has a small ticket booth, a parking area, and guides available at the entrance. Most visitors combine it with Bản Giốc as a single half-day stop.",
    whatToExpect:
      "A guide escorts visitors through approximately 900 metres of the cave - the section open to public access - which covers the first two main chambers and the connecting passages. The tour takes 45–60 minutes. The chambers vary dramatically in scale: some sections are intimate, with formations at arm's reach; others open into vast vaulted spaces where the ceiling disappears. The cave is electrically lit throughout the visitor section, with spotlights on the most notable formations. The temperature inside is constant at around 16–18°C - cool enough to feel immediately after the outside heat. The final chamber has a natural opening that allows daylight to filter in, creating an unusual interplay of artificial and natural light on the formations.",
    travelTips:
      "Nguồm Ngao is significantly less visited than Ha Long Bay's caves despite being comparably impressive - partly because Cao Bằng is remote, partly because it doesn't have the marketing infrastructure. The result is a cave experience that feels genuinely exploratory rather than like a managed tourist attraction. The combination of Bản Giốc Waterfall in the morning and Nguồm Ngao Cave before lunch is the most efficient pairing in Cao Bằng province, and one of the best half-days in northern Vietnam.",
  },
}
