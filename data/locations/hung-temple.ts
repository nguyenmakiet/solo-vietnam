import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const hungTemple: Location = {
  slug: "hung-temple",
  name: "Hùng Temple (Đền Hùng)",
  provinces: ["phu-tho"],
  destination: "",
  lat: "21.368643714922786",
  lng: "105.32575135886921",
  address: "Hy Cương, Việt Trì, Phú Thọ",
  type: ["temple", "heritage", "history", "cultural"],
  categories: [],
  experiences: ["history", "culture", "photography", "walking-tour"],
  tags: ["🏛️ National Pilgrimage", "🛕 Founding Myth", "📸 Photography", "⛰️ Sacred Hill"],
  bestTime: "Oct - Mar (cool dry season; avoid the Hùng Kings Festival on the 10th day of the 3rd lunar month when millions of pilgrims converge on the site)",
  bestMonths: [1, 2, 3, 10, 11, 12],
  entranceFee: "~30,000 VND",
  openingHours: "7:00 AM - 5:30 PM",
  mapUrl: "https://www.google.com/maps?q=21.368643714922786,105.32575135886921",
  streetView: {},
  heroImage: heroUrl("hung-temple-phu-tho_ql583r"),
  gallery: [
    "hung-temple-phu-tho-3_xiuvub",
    "hung-temple-phu-tho_ql583r",
    "hung-temple-phu-tho-5_anmlpq",
    "hung-temple-phu-tho-9_c8hrzc",
    "hung-temple-phu-tho-10_nfdywo",
    "hung-temple-phu-tho-8_kgvdub",
    "hung-temple-phu-tho-7_bvhags",
    "hung-temple-phu-tho-4_ytedz4",
  ],
  seoDescription:
    "Đền Hùng is Vietnam's most sacred national site - a hilltop temple complex in Phú Thọ dedicated to the Hùng Kings, the legendary founding fathers of the Vietnamese nation, and the destination of the country's largest annual pilgrimage.",
  tips: [
    "The Hùng Kings Festival (10th day of 3rd lunar month, usually Apr) draws millions of Vietnamese pilgrims - an extraordinary cultural spectacle but extremely crowded; visit a week before or after for a quieter experience",
    "The complex climbs a forested hill with four main temple levels - wear comfortable shoes and allow 2 hours to visit all levels properly",
    "The upper temple (Thượng Temple) at the summit gives views over the Phú Thọ valley and the confluence of the Red and Lô rivers - the landscape the Hùng Kings are said to have surveyed",
    "The site has deep meaning for Vietnamese visitors - be respectful of worshippers and the religious atmosphere throughout the complex",
    "Combine with a visit to the Hùng Kings Museum at the base of the hill which provides historical and archaeological context for the site",
  ],
  content: {
    intro:
      "Đền Hùng occupies a forested hill in Phú Thọ province, 85km northwest of Hanoi, at the site traditionally associated with the Hùng Kings - the legendary dynasty said to have founded the Vietnamese nation over 4,000 years ago. The Hùng Kings occupy a position in Vietnamese national identity that has no direct equivalent elsewhere: they are simultaneously historical ancestors, mythological figures, and the symbolic origin point of Vietnamese civilisation. Every Vietnamese person is considered a descendant of the Hùng Kings, and the annual pilgrimage to Đền Hùng on the 10th day of the third lunar month is the largest national religious gathering in the country. The temple complex spreads across the hill in four main levels connected by stone staircases through ancient forest, with the upper shrine at the summit marking the place where the last Hùng King is said to have ruled.",
    howToGetThere:
      "Đền Hùng is located in Hy Cương commune, Lâm Thao district, Phú Thọ province, approximately 85km northwest of Hanoi. By car or motorbike from Hanoi, follow Highway 32 or the Nội Bài-Lào Cai Expressway toward Việt Trì - the journey takes around 2 hours. Regular buses run from Hanoi's Mỹ Đình bus station to Việt Trì, from where local transport reaches the temple. Organised day tours from Hanoi are widely available. A large visitor centre and car park at the base of the hill serves as the starting point for the climb.",
    whatToExpect:
      "The path from the entrance gate climbs through old forest to four temple levels: Giếng Temple at the base, Trung Temple midway, Thượng Temple at the summit, and the associated Hậu Temple complex. Each level has its own shrine, offerings, and religious activity. The forest canopy over the staircase is dense and provides shade throughout the climb. The summit temple is the most significant - a modest structure with a view over the Phú Thọ basin. The entire complex is an active place of worship: incense smoke, offerings of fruit and flowers, and Vietnamese families making the climb as an act of filial and national devotion.",
    travelTips:
      "Đền Hùng is one of those sites where understanding the cultural significance transforms what might otherwise seem like a modest hilltop temple into something more interesting. The Hùng Kings narrative - disputed by historians but deeply held by Vietnamese people across all regions and political backgrounds - functions as the origin story of a nation, and the pilgrimage here is an expression of that identity. For foreign visitors, the site offers an insight into Vietnamese national consciousness that is difficult to access elsewhere. Outside the festival period the site is quiet and the forest walk is pleasant - a half-day from Hanoi combined with the nearby Vĩnh Phúc province or as a stop on the route north.",
  },
}
