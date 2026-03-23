import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const myKheBeach: Location = {
  slug: "my-khe-beach",
  name: "Mỹ Khê Beach",
  provinces: ["da-nang"],
  destination: "",
  lat: "16.056869445948998",
  lng: "108.24813952737027",
  address: "Mỹ Khê, Sơn Trà, Đà Nẵng",
  type: "beach",
  categories: [],
  experiences: ["beach", "swimming", "surfing", "photography"],
  tags: ["🏖️ Forbes Top 6 Beach", "🌊 Swimming", "🏄 Surfing", "🌅 Sunrise"],
  bestTime: "Mar – Aug (dry season, calm water, minimal rain)",
  entranceFee: "Free",
  openingHours: "Open 24/7",
  mapUrl: "",
  heroImage: heroUrl("my-khe-beach-hero_placeholder"),
  gallery: [],
  seoDescription:
    "Mỹ Khê Beach is Đà Nẵng's most famous stretch of coastline - 9km of white sand on the South China Sea, named by Forbes as one of the world's most luxurious beaches, and the closest major beach to a Vietnamese city centre.",
  tips: [
    "Sunrise at Mỹ Khê is one of the best in Vietnam - the beach faces east and the light hits the water directly from 5:30–6:30 AM",
    "The northern section near the Son Tra Peninsula is the least crowded - walk 15–20 minutes from the main beach strip for noticeably fewer people",
    "Surfing conditions are best from September to December when swells arrive from the northeast - several surf schools operate along the beach",
    "Avoid swimming between October and January - the northeast monsoon brings strong currents and red flags are common",
    "The beachside seafood restaurants on Phạm Văn Đồng Street are significantly cheaper than the resort restaurants directly on the sand",
  ],
  content: {
    intro:
      "Mỹ Khê Beach stretches 9km along the eastern edge of Đà Nẵng, running from the Son Tra Peninsula in the north to the Marble Mountains in the south - one of the longest urban beaches in Southeast Asia. Forbes named it one of the six most luxurious beaches on earth in 2005, a distinction that helped fuel Đà Nẵng's rapid development into a resort city. The beach faces directly east into the South China Sea, which gives it exceptional sunrise light and consistent surf conditions in the northeast monsoon season. The sand is fine and white, the water clear in dry season, and the beach is wide enough that even on busy weekends there's room to breathe. A promenade of resort hotels, seafood restaurants, and beach bars runs the length of the strip - the infrastructure is more developed than anywhere else on Vietnam's coast outside of Phú Quốc.",
    howToGetThere:
      "Mỹ Khê Beach is 3km east of Đà Nẵng city centre, easily reached by Grab, taxi, or bicycle. From Đà Nẵng International Airport, the beach is about 10 minutes by taxi (around 80,000–100,000 VND). The main beach access points are along Võ Nguyên Giáp Street and Phạm Văn Đồng Street, which run parallel to the shoreline. There are public showers and changing facilities at several points along the beach. Parking is available at multiple access points for motorbikes and cars.",
    whatToExpect:
      "The beach has a well-maintained promenade with sun loungers, umbrellas, and beach bar seating for most of its length. The water is calm and shallow for 50–100 metres from shore in dry season, making it suitable for swimming and wading. Lifeguards patrol the main swimming zones from approximately 6 AM to 6 PM during peak season. The northern end near Son Tra is rockier and less developed; the central section has the highest concentration of resort hotels and beach clubs; the southern end near Non Nước village transitions toward the Marble Mountains. Early morning brings joggers, swimmers, and local fishermen; evenings are dominated by seafood restaurants and sunset crowds.",
    travelTips:
      "Mỹ Khê is the most accessible beach in central Vietnam - less remote than An Bàng in Hội An, less crowded than Phú Quốc's main beaches in peak season, and with better infrastructure than most alternatives. It works equally well as a half-day beach stop for travellers based in Đà Nẵng city or as the primary reason to visit. The combination of Mỹ Khê in the morning, Marble Mountains in the afternoon, and Ba Nà Hills or the Dragon Bridge at night is the standard Đà Nẵng day itinerary - covering the city's three most distinct attractions in a single day.",
  },
}
