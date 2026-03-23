import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const duGiaVillage: Location = {
  slug: "du-gia-village",
  name: "Du Già Village",
  provinces: ["ha-giang"],
  destination: "ha-giang-loop",
  lat: "22.930340238883847",
  lng: "105.22274726498522",
  address: "Du Già, Yên Minh, Hà Giang",
  type: ["cultural", "nature"],
  categories: [],
  experiences: ["homestay", "trekking", "culture", "photography", "cycling"],
  tags: ["🏡 Tày Homestay", "🌊 River Valley", "🥾 Trekking", "📸 Photography"],
  bestTime: "Sep – Nov (golden rice season, clearest skies) or Mar – Apr",
  entranceFee: "Free",
  openingHours: "Open 24/7",
  mapUrl: "",
  heroImage: heroUrl("du-gia-village-hero_placeholder"),
  gallery: [],
  seoDescription:
    "Du Già is the most beautiful village on the eastern Ha Giang Loop - a Tày settlement in a river valley surrounded by limestone karst, rice terraces, and waterfalls, with some of the best homestay accommodation on the entire loop and a genuine community that exists independently of tourism.",
  tips: [
    "Stay overnight in a Tày homestay rather than riding through - Du Già completely changes after the day riders leave and the evening is the best part",
    "The trail from Du Già village to Du Già Waterfall (3km each way) is the best easy trek on the eastern loop - flat, scenic, and almost no other visitors",
    "Book your homestay before arriving - the village has limited beds and the best places fill up in peak season (October)",
    "The rice terraces around Du Già are at their most golden in late September to early October - the valley views from the road above the village are exceptional at this time",
    "Du Già is on the less-ridden eastern loop variant - if mày have ridden the standard loop before, the eastern variant via Du Già and Yên Minh adds genuinely new scenery",
  ],
  content: {
    intro:
      "Du Già is a Tày minority village in a valley on the Nhiệm River, 80km southeast of Hà Giang city on the eastern variant of the Ha Giang Loop. The village is surrounded by rice terraces cut into the valley walls, limestone karst towers rising above the terraces, and the Nhiệm River running through the valley floor. Unlike many Ha Giang villages that have developed primarily around motorbike tourism, Du Già retains a working agricultural character - the Tày families here grow rice, keep livestock, and maintain traditional wooden stilt houses alongside the tourism activity. The combination of river, terraces, karst, and a genuine village community makes Du Già consistently rated as the most complete single-stop experience on the loop by travellers who take the eastern variant.",
    howToGetThere:
      "Du Già is on the eastern Ha Giang Loop, approximately 80km from Hà Giang city via Bắc Mê District. The route follows the Gâm River valley before climbing to Du Già - about 2.5–3 hours by motorbike from Hà Giang city. The eastern loop via Du Già and Yên Minh is an alternative to the standard western loop via Quản Bạ and Đồng Văn - both eventually converge at Mèo Vạc before continuing on the main loop. Du Già can also be approached from Yên Minh District, making it a flexible stop whether riding the loop clockwise or anti-clockwise.",
    whatToExpect:
      "The village consists of traditional Tày stilt houses, some converted to homestays, spread along the river valley road. The river is clear and rocky - swimmable in dry season in the pools below the village. The surrounding rice terraces are cultivated at multiple elevations, creating the layered green-gold landscape visible from the road approaching the village. Homestays typically offer dinner and breakfast of local Tày food - river fish, mountain vegetables, and rice - eaten communally with the family. The trail to Du Già Waterfall begins at the southern end of the village and follows the river upstream through forest.",
    travelTips:
      "Du Già is the eastern loop's equivalent of Lô Lô Chải or Tả Van on other northern routes - a village where staying overnight transforms the experience from a scenic stop into a cultural encounter. Riders who rush through on a day loop miss what makes Du Già worth visiting. The village works best as a second night on a 4-day loop: Hà Giang city → Du Già (night 1, eastern route) → Yên Minh → Đồng Văn (night 2) → Mèo Vạc → Hà Giang city.",
  },
}
