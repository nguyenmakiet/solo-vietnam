import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const vanLongNatureReserve: Location = {
  slug: "van-long-nature-reserve",
  name: "Vân Long Nature Reserve",
  provinces: ["ninh-binh"],
  destination: "ninh-binh",
  lat: "20.37269717802166",
  lng: "105.88325487973674",
  address: "Gia Vân, Gia Viễn, Ninh Bình",
  type: ["nature", "river"],
  categories: [],
  experiences: ["boat-tour", "wildlife", "photography", "kayaking"],
  tags: ["🦒 Delacour's Langur", "🚣 Rowing Boat", "📸 Photography", "🌿 Wetland Reserve"],
  bestTime: "Oct – Apr (dry season, lowest water, best wildlife visibility)",
  bestMonths: [1, 2, 3, 4, 10, 11, 12],
  entranceFee: "~40,000 VND + boat: ~150,000 VND per boat (shared)",
  openingHours: "6:00 AM – 5:00 PM",
  mapUrl: "https://www.google.com/maps?q=20.37269717802166,105.88325487973674",
  streetView: {},
  heroImage: heroUrl("van-long-natural-reserve-ninh-binh_lcegpd"),
  gallery: [
    "van-long-natural-reserve-ninh-binh2_no69la",
    "van-long-natural-reserve-ninh-binh3_jfdaqk",
    "van-long-natural-reserve-ninh-binh_lcegpd",
  ],
  seoDescription:
    "Vân Long Nature Reserve is Vietnam's largest inland wetland - a flooded valley of karst peaks, submerged rice fields, and clear shallow water navigated by rowing boat, home to Vietnam's largest population of the critically endangered Delacour's langur.",
  tips: [
    "Go at 6–7 AM for the best langur sightings - the monkeys descend to the cliff base to feed in the early morning and are reliably visible before 8 AM",
    "Request a quiet rower rather than an electric boat - the langurs are sensitive to engine noise and the rowing boats allow much closer approach",
    "Bring binoculars - the langurs are on the cliff faces, sometimes 100+ metres away, and are hard to appreciate without magnification",
    "Vân Long is significantly less visited than Tràng An and Tam Cốc - visit it first on a Ninh Bình trip before the crowds arrive at the more popular sites",
    "The water level is lowest in February–March, exposing more of the karst rock and making the landscape more dramatic - but any dry season month is excellent",
  ],
  content: {
    intro:
      "Vân Long Nature Reserve is Vietnam's largest inland wetland protected area - 2,736 hectares of flooded karst valley in Gia Viễn District, 20km northwest of Ninh Bình city. The reserve was established specifically to protect the Delacour's langur (Trachypithecus delacouri), a black-and-white monkey endemic to northern Vietnam and one of the world's 25 most endangered primates - only 200–300 individuals survive, and Vân Long holds the largest single population of approximately 40–50 animals. The landscape is a submerged valley of karst peaks rising from shallow clear water, navigated by wooden rowing boats through channels between the limestone formations. The combination of endemic wildlife, intact wetland ecosystem, and boat navigation through karst makes Vân Long the most complete nature experience in Ninh Bình - and the least crowded, receiving perhaps 10% of the visitors that Tràng An draws.",
    howToGetThere:
      "Vân Long Nature Reserve is 20km northwest of Ninh Bình city in Gia Viễn District. By motorbike from Ninh Bình, the journey takes about 35–40 minutes on flat provincial roads. The boat dock and ticket office are at the reserve entrance in Gia Vân village. Most accommodation in Ninh Bình can arrange transport to Vân Long. There is no public bus directly to the reserve - motorbike or private transport is the standard approach.",
    whatToExpect:
      "The boat tour takes 1.5–2 hours, navigated by a local rower through the wetland channels between the karst peaks. The water is shallow and clear - the limestone bottom visible in many sections. The langur population inhabits the cliff faces of several specific karst peaks in the reserve, and experienced rowers know exactly where to look. Sightings of 3–10 individuals on a single tour are typical in the early morning. The landscape is wide and open - different from the enclosed cave-and-river experience of Tràng An, with broad views over the flooded valley and mountain reflections in the still water. Waterbirds including herons, kingfishers, and cormorants are common throughout.",
    travelTips:
      "Vân Long is the best wildlife experience in Ninh Bình and one of the best in northern Vietnam. The Delacour's langur is a genuinely rare animal - there are more giant pandas in the world than Delacour's langurs - and seeing them in the wild at Vân Long is a privilege that few travellers to Vietnam take advantage of. The early morning timing is non-negotiable for langur sightings. Pair with Hoa Lư Ancient Capital in the afternoon - both are in the western part of Ninh Bình province and the combination covers the province's best wildlife and best history in a single day.",
  },
}
