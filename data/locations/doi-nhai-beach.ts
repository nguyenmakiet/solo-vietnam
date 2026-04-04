import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const doiNhaiBeach: Location = {
  slug: "doi-nhai-beach",
  name: "Đồi Nhái Beach",
  provinces: ["ba-ria-vung-tau"],
  destination: "vung-tau",
  lat: "10.378000",
  lng: "107.333000",
  address: "Phước Tỉnh, Long Điền, Bà Rịa - Vũng Tàu",
  type: ["beach", "nature"],
  categories: [],
  experiences: ["photography", "trekking", "beaches", "camping"],
  tags: ["🌄 Coastal Viewpoint", "🏕️ Wild Camping", "📸 Sunrise Photography", "🌊 Undeveloped Beach"],
  bestTime: "Nov – Apr (dry season; clear skies for viewpoint photography and calmer sea)",
  entranceFee: "Free",
  openingHours: "Open daily",
  mapUrl: "https://www.google.com/maps?q=10.378000,107.333000",
  streetView: { embedUrl: "" },
  heroImage: heroUrl("doi-nhai-beach-ba-ria-vung-tau"),
  gallery: [],
  seoDescription:
    "Đồi Nhái Beach is a 3.8km undeveloped stretch of coastline near Phước Tỉnh in Bà Rịa-Vũng Tàu - no facilities, no crowds, and one of the better sunrise spots on the southern coast within 100km of Ho Chi Minh City.",
  tips: [
    "The beach is 3.8km long and entirely undeveloped - bring everything you need including water, food, and sun protection",
    "The hill behind the beach is low and the ascent short - the viewpoint above is accessible without significant trekking ability, making it a viable sunrise stop even for non-hikers",
    "Combine with Phước Tỉnh fishing village (4.7km away) for a morning that covers both the working harbor at dawn and the beach at sunrise",
    "The beach is exposed to wind and suitable for windsurfing in the right conditions - check local conditions if this is the goal",
    "No accommodation at the site - the closest options are in Long Hải town or Phước Tỉnh village; camping on the beach is possible with standard gear",
  ],
  content: {
    intro:
      "Đồi Nhái Beach is a 3.8km stretch of undeveloped coastline in the Phước Tỉnh area of Long Điền district, Bà Rịa-Vũng Tàu province, on the Gulf of Thailand. The beach sits at the southwestern end of a section of coast that remains largely untouched between the fishing port of Phước Tỉnh and the resort areas further north. The sand is wide with a gentle slope into the water - suitable for swimming in calm conditions - and backed by low coastal scrub and a small hill rather than development. The hill above the beach provides a compact viewpoint over the beach arc and the open sea, with the quality of light at sunrise making it a draw for photographers based in Ho Chi Minh City who make the 100km drive for early morning shots.",
    howToGetThere:
      "Đồi Nhái Beach is near Phước Tỉnh in Long Điền district, approximately 100km from Ho Chi Minh City. From HCMC, take the Long Thành-Dầu Giây Expressway to Bà Rịa, then Provincial Road 44A south toward Long Điền and Phước Tỉnh. The beach is accessible from the Phước Tỉnh area by following the coastal track south. From Vũng Tàu city, the coastal road south is approximately 40km. The beach has no marked access point - local knowledge or satellite map navigation is needed to locate the approach track from the main road.",
    whatToExpect:
      "A wide, sandy, undeveloped beach with no facilities of any kind. Good swimming in calm dry-season conditions, unsuitable in rough weather. The water is clear in the dry season. The small hill behind the beach offers a viewpoint most rewarding at sunrise and in the late afternoon when the light is low. The surrounding coastal plain is agricultural and sparsely settled - the absence of development gives Đồi Nhái a different character from the resort beaches of Vũng Tàu proper.",
    travelTips:
      "Đồi Nhái Beach is worth knowing about as part of a broader Phước Tỉnh area day trip rather than as a standalone destination requiring a dedicated journey. The combination of Phước Tỉnh fishing harbor at dawn, Đồi Nhái Beach for a morning swim, and the coastal drive back to Vũng Tàu or HCMC via Long Hải covers a section of Bà Rịa-Vũng Tàu coast that most visitors completely skip. If mày is interested in the less-developed end of the southern coast day-trip options from HCMC, this area - together with Phước Hải and Lộc An nearby - is the right zone to explore.",
  },
}
