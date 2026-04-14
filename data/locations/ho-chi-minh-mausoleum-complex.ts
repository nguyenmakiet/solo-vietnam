import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const hoChiMinhMausoleumComplex: Location = {
  slug: "ho-chi-minh-mausoleum-complex",
  name: "Ho Chi Minh Mausoleum Complex",
  provinces: ["ha-noi"],
  destination: "ha-noi",
  lat: "21.036779537375388",
  lng: "105.83472510393055",
  address: "Hùng Vương, Ba Đình, Hà Nội",
  type: ["heritage", "history", "landmark"],
  categories: [],
  experiences: ["history", "culture", "walking-tour", "photography"],
  tags: ["🏛️ National Mausoleum", "🇻🇳 Uncle Ho", "⚓ Ba Dinh Square", "🌿 Presidential Stilt House"],
  bestTime: "Oct - Apr (cool dry season; the mausoleum is closed for maintenance Jul - Oct annually)",
  bestMonths: [10, 11, 12, 1, 2, 3, 4],
  entranceFee: "Free",
  openingHours: "Tue - Thu and Sat - Sun: 7:30 AM - 10:30 AM; closed Mon, Fri, and Jul - Oct for maintenance",
  mapUrl: "https://www.google.com/maps?q=21.036779537375388,105.83472510393055",
  streetView: { embedUrl: "https://www.google.com/maps/embed?pb=!4v1776181903331!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRDRscDNMOVFF!2m2!1d21.03666878313551!2d105.8350983218787!3f262.5881498555228!4f9.004452945037116!5f0.7820865974627469", },
  heroImage: heroUrl("ho-chi-minh-mausoleum-ha-noi_zrpob2"),
  gallery: [
    "ho-chi-minh-mausoleum-ha-noi_zrpob2",
    "ho-chi-minh-mausoleum-complex-ha-noi-6_dwbbfy",
    "ho-chi-minh-mausoleum-complex-ha-noi-8_yyw1eh",
    "ho-chi-minh-mausoleum-complex-ha-noi-5_dssve2",
    "ho-chi-minh-mausoleum-complex-ha-noi-4_afk9er",
    "ho-chi-minh-mausoleum-complex-ha-noi-7_rcqkrj",
  ],
  seoDescription:
    "The Ho Chi Minh Mausoleum Complex in Hanoi's Ba Dinh Square contains the preserved body of Vietnam's founding leader, alongside his former residence, presidential palace, and museum - the most significant political pilgrimage site in Vietnam.",
  tips: [
    "The mausoleum closes annually from July to October for maintenance - plan accordingly if this is a priority visit",
    "Strict dress code enforced: no shorts, sleeveless tops, or hats inside the mausoleum; no photography inside the viewing hall",
    "Queues form early on weekends and Vietnamese holidays - arrive before 8:00 AM for shorter waits; the viewing is brief (2-3 minutes walking past the body)",
    "The stilt house where Ho Chi Minh lived from 1958 to 1969 (preferring it to the Presidential Palace) is the most humanising element of the complex - do not skip it",
    "The complex grounds are large and pleasant to walk - allow 2-3 hours to cover the mausoleum queue, Presidential Palace exterior, stilt house, and garden",
  ],
  content: {
    intro:
      "The Ho Chi Minh Mausoleum Complex occupies a significant portion of the Ba Đình district in western Hanoi, centred on Ba Đình Square - the site where Hồ Chí Minh declared Vietnamese independence on September 2, 1945. The mausoleum itself, completed in 1975, holds the embalmed body of Hồ Chí Minh in a climate-controlled chamber and receives hundreds of thousands of Vietnamese visitors annually, predominantly in organised group pilgrimages from provinces across the country. The surrounding complex includes the Presidential Palace (the French colonial residence that Ho Chi Minh refused to inhabit), the modest stilt house where he actually lived and worked from 1958 until his death in 1969, a large garden with carp ponds, and the Ho Chi Minh Museum. The combination of the formal mausoleum ritual with the intimate stilt house gives the complex an unusual emotional range.",
    howToGetThere:
      "The mausoleum complex is located in the Ba Đình district, approximately 3km west of Hoan Kiem Lake. From the Old Quarter, take a taxi or Grab (10-15 minutes) or walk west along Điện Biên Phủ street (30-35 minutes). The One Pillar Pagoda is immediately adjacent and typically combined in the same visit. Entry to the mausoleum queue is from the Hùng Vương street side of Ba Đình Square.",
    whatToExpect:
      "The mausoleum visit follows a strictly managed process: bags and cameras must be deposited before entering, visitors queue in an orderly line and file slowly through the darkened viewing chamber in silence past the glass sarcophagus containing Ho Chi Minh's embalmed body. The viewing takes approximately 2-3 minutes. The experience is solemn and the Vietnamese pilgrims who make up the majority of visitors treat it with corresponding reverence. After the mausoleum, the complex grounds can be explored freely - the Presidential Palace exterior and the stilt house with its original furnishings and the two fish ponds are the highlights. The Ho Chi Minh Museum adjacent to the square covers his life and the independence movement.",
    travelTips:
      "The mausoleum complex rewards visitors who approach it as a window into Vietnamese political culture and the cult of personality around Hồ Chí Minh rather than simply as a historical site. Observing the Vietnamese pilgrims - many travelling long distances specifically for this visit, some visibly emotional - gives the experience a dimension that purely historical framing misses. The stilt house is the most unexpectedly affecting part of the complex: the deliberate simplicity of how Ho Chi Minh chose to live, in contrast to the French colonial grandeur of the Presidential Palace next door, communicates something about his self-presentation that no museum label can fully convey.",
  },
}
