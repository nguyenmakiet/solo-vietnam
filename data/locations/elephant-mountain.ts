import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const elephantMountain: Location = {
  slug: "elephant-mountain",
  name: "Elephant Mountain",
  provinces: ["dak-lak"],
  destination: "buon-ma-thuot",
  lat: "12.481628765573047",
  lng: "108.23313331512834",
  address: "Buôn Ma Thuột, Đắk Lắk",
  type: ["mountain", "nature"],
  categories: [],
  experiences: ["trekking", "photography", "wildlife", "culture"],
  tags: ["🐘 Elephant Territory", "🌄 Highland Views", "🥾 Trekking", "☕ Coffee Country"],
  bestTime: "Nov – Apr (dry season; trails accessible and views clear)",
  bestMonths: [1, 2, 3, 4, 11, 12],
  entranceFee: "",
  openingHours: "Open daily",
  mapUrl: "https://www.google.com/maps?q=12.666700,108.050000",
  streetView: { embedUrl: "https://www.google.com/maps/embed?pb=!4v1775273788518!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRHV2TlhHV1E.!2m2!1d12.48145191803785!2d108.2334295588426!3f282.1063773796864!4f-25.386943170115657!5f0.7820865974627469", },
  heroImage: heroUrl("elephant-mountain-dak-lak_wyo8ke"),
  gallery: [
    "elephant-mountain-dak-lak-6_f6afy4",
    "elephant-mountain-dak-lak_wyo8ke",
    "elephant-mountain-dak-lak-8_rdkiue",
    "elephant-mountain-dak-lak-2_krom9i",
    "elephant-mountain-dak-lak-4_ogx2ip",
    "elephant-mountain-dak-lak-3_rbejgm",
    "elephant-mountain-dak-lak-5_mketth",
  ],
  seoDescription:
    "Elephant Mountain near Buôn Ma Thuột rises above the Central Highlands coffee belt and takes its name from the wild elephant herds that have roamed its forested slopes for centuries - still one of the few places in Vietnam where elephants exist in semi-wild conditions.",
  tips: [
    "Do not attempt to approach wild or semi-wild elephants without a licensed local guide - injuries from unguided encounters are documented",
    "The dry season (November to April) is essential for trekking - the red laterite trails turn into mud channels during the wet months",
    "Buôn Ma Thuột is the coffee capital of Vietnam - build in time at a local coffee shop before or after the trek, the quality of farm-fresh robusta here is not comparable to anything in the city",
    "Hire guides through reputable operators in Buôn Ma Thuột rather than informal fixers at the trailhead - knowledge of elephant behavior and Ede community etiquette matters here",
    "Early morning starts (before 7:00) give the best chance of wildlife activity and the most comfortable trekking temperatures",
  ],
  content: {
    intro:
      "Elephant Mountain (Núi Voi) rises from the coffee and rubber plantations of the Central Highlands outside Buôn Ma Thuột, named for the wild elephant populations that have historically roamed its forested slopes. Đắk Lắk province contains one of Vietnam's last significant wild elephant populations - estimates put the number at 80-100 individuals - and the forests around Buôn Ma Thuột, including the Elephant Mountain area, are part of their remaining territory. The mountain sits within a landscape that is simultaneously one of Vietnam's most productive agricultural zones (Đắk Lắk produces roughly 30% of the country's coffee) and one of its most culturally significant for highland minority communities, particularly the Ede and M'nông peoples whose ancestral relationship with elephants defines much of the regional identity.",
    howToGetThere:
      "Buôn Ma Thuột is the capital of Đắk Lắk province and has a domestic airport with daily flights from Ho Chi Minh City (1 hour) and Hanoi (1.5 hours). By road from HCMC, the journey via Highway 14 takes approximately 5-6 hours. From Buôn Ma Thuột city center, Elephant Mountain and the surrounding trekking areas are accessible by motorbike or with a guide vehicle - most trekking operators in the city run transfers as part of their packages. The specific access point depends on the route and operator.",
    whatToExpect:
      "Trekking on and around Elephant Mountain takes place through a mix of secondary forest, coffee plantation edges, and highland terrain. The views from higher elevations over the Đắk Lắk plateau - flat red-earthed farmland broken by forest patches and distant ridges - are distinctive and unlike anything in northern Vietnam. Wildlife sightings beyond birds and smaller animals are not guaranteed and depend heavily on season and guide knowledge. The cultural component - visiting Ede villages in the area, understanding the traditional relationship between highland communities and elephants - is as worthwhile as the trekking itself.",
    travelTips:
      "Buôn Ma Thuột is one of the most underrated bases in Vietnam for travelers who want something genuinely different from the coastal and northern circuits. The combination of elephant conservation context, Ede and M'nông culture, and the best coffee in the country in its place of origin creates an experience that does not exist anywhere else. Elephant Mountain is the landscape anchor for that combination. Mày should budget at least 2 nights in Buôn Ma Thuột - one day for the mountain and surrounding area, one day for Lak Lake and a village stay if time allows.",
  },
}
