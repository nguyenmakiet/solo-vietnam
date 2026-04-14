import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const hanoiOldQuarter: Location = {
  slug: "hanoi-old-quarter",
  name: "Hanoi Old Quarter",
  provinces: ["ha-noi"],
  destination: "ha-noi",
  lat: "21.035625405852137",
  lng: "105.85092919329092",
  address: "Hoàn Kiếm, Hà Nội",
  type: ["heritage", "city", "cultural"],
  categories: [],
  experiences: ["walking-tour", "food", "shopping", "culture", "history", "photography"],
  tags: ["🏘️ 36 Ancient Streets", "🛵 Chaotic & Alive", "🍜 Street Food Capital", "📷 Colonial Architecture"],
  bestTime: "Oct - Apr (cool dry season; the streets are more comfortable to walk and the weekend pedestrian zone is best enjoyed in cool weather)",
  bestMonths: [10, 11, 12, 1, 2, 3, 4],
  entranceFee: "Free",
  openingHours: "Open 24 hours; weekend pedestrian zone Fri evening - Sun night",
  mapUrl: "https://www.google.com/maps?q=21.035625405852137,105.85092919329092",
  streetView: { embedUrl: "https://www.google.com/maps/embed?pb=!4v1776181328845!6m8!1m7!1sNgxCjmRprqK7Hj3A94pkfg!2m2!1d21.03564147733415!2d105.8509153721518!3f72.94543194091789!4f9.339444644446715!5f0.7820865974627469", },
  heroImage: heroUrl("ha-noi-old-quater_dnfqym"),
  gallery: [
    "ha-noi-old-quater_dnfqym",
    "ha-noi-old-quater-8_huwlbe",
    "ha-noi-old-quater-2_dine2s",
    "ha-noi-old-quater-7_c9mkoj",
    "ha-noi-old-quater-6_auesps",
    "ha-noi-old-quater-5_e98fvf",
    "ha-noi-old-quater-4_hlov6m",
    "ha-noi-old-quater-3_pqsoun",
  ],
  seoDescription:
    "Hanoi's Old Quarter is a dense 36-street merchant district dating to the 13th century where each street historically traded a single craft - today it remains the commercial and cultural heart of the capital, with narrow lanes, ancient tube houses, street food, and the best urban walking in Vietnam.",
  tips: [
    "The 36 streets are named after their historic trade - Hàng Bạc (silver), Hàng Gai (silk), Hàng Đào (dyes) - navigating by trade names gives context to the street character",
    "The weekend pedestrian zone (Fri evening - Sun night) transforms the Old Quarter dramatically - if visiting on a weekend, plan to be here in the evening",
    "Early morning (6-8 AM) reveals the working character of the quarter before tourists emerge - fresh produce markets, street breakfast, delivery motorbikes",
    "The tube houses - narrow frontage, very deep interiors, sometimes 4-5 storeys - are the architectural signature; many have been converted to guesthouses and cafes with original structure intact",
    "Get deliberately lost - the Old Quarter rewards wandering off the main tourist streets; the parallel lanes one block off Hàng Gai and Hàng Bạc have more local character",
  ],
  content: {
    intro:
      "Hanoi's Old Quarter - the 36 streets (Phố Cổ) - occupies approximately one square kilometre north of Hoan Kiem Lake and represents one of the best-preserved medieval merchant districts in Southeast Asia. The district's structure dates to the Lý dynasty in the 13th century, when guilds of craftsmen and traders from surrounding villages established streets organised around specific trades: silver smiths on Hàng Bạc, silk merchants on Hàng Gai, paper sellers on Hàng Giấy. The street names, most beginning with 'Hàng' (goods/merchandise), preserve this guild geography even as the trades themselves have largely given way to tourism commerce, clothing manufacture, and general retail. The physical fabric - narrow lanes, ancient tube houses extending deep behind thin street frontages, layered Chinese, French colonial, and Vietnamese architectural influences - remains largely intact despite significant pressure from development and tourism.",
    howToGetThere:
      "The Old Quarter is the central district of Hanoi, immediately north of Hoan Kiem Lake. The lake itself is the most reliable orientation point - the Old Quarter begins at its northern shore. Most budget and mid-range accommodation in Hanoi is located within the Old Quarter, making it the default base for first-time visitors. Walking is the primary mode of navigation within the quarter - motorbikes are technically discouraged on the narrower lanes and prohibited during the weekend pedestrian zone.",
    whatToExpect:
      "The Old Quarter is less a destination than an environment - it rewards time spent walking, eating, and observing rather than checking off specific sites. The daytime character is commercial and busy, with motorbike traffic pressing through narrow lanes, shop fronts open to the street, and a continuous soundtrack of horns and vendors. The evening character shifts toward food - the street food culture of the Old Quarter is among the best in Hanoi, with pho, bún chả, bánh cuốn, and bia hơi available within steps of virtually any point in the district. The weekend pedestrian zone creates a third register entirely - the streets reclaimed from traffic become a genuine public space.",
    travelTips:
      "The Old Quarter is best experienced over multiple visits at different times of day rather than in a single walk-through. A morning visit for street breakfast (Hàng Chiếu area for bánh mì and cháo), an afternoon walk through the architectural streets (Mã Mây, Hàng Buồm, Hàng Bè), and an evening at Tạ Hiện for bia hơi covers the essential range of experiences. The narrow lanes are genuinely difficult to navigate by motorbike and the walking pace enforced by the crowds is actually appropriate for the environment - resist the urge to hire a cyclo for a circuit and walk instead.",
  },
}
