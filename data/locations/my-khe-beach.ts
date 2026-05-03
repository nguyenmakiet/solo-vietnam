import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const myKheBeach: Location = {
  slug: "my-khe-beach",
  name: "Mỹ Khê Beach",
  provinces: ["da-nang"],
  destination: "da-nang",
  lat: "16.056869445948998",
  lng: "108.24813952737027",
  address: "Mỹ Khê, Sơn Trà, Đà Nẵng",
  type: "beach",
  categories: [],
  experiences: ["beach", "swimming", "surfing", "photography"],
  tags: ["🏖️ Forbes Top 6 Beach", "🌊 Swimming", "🏄 Surfing", "🌅 Sunrise"],
  bestTime: "Mar – Aug (dry season, calm water, minimal rain)",
  bestMonths: [3, 4, 5, 6, 7, 8],
  entranceFee: "Free",
  openingHours: "Open 24/7",
  mapUrl: "https://www.google.com/maps?q=16.056869445948998,108.24813952737027",
  streetView: {embedUrl: "https://www.google.com/maps/embed?pb=!4v1775831138486!6m8!1m7!1sCAoSHENJQUJJaENzR3h1UmROQ2lDd3pRTXBISkVaQzA.!2m2!1d16.06617329164233!2d108.2497981810549!3f346.93574064018156!4f-17.832242318034545!5f0.7820865974627469", },
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
  insights: {
    highlights: [
      "Long stretch of fine white sand, very soft and clean throughout",
      "Well-maintained boardwalk with restaurants, cafés, and beach facilities nearby",
      "Popular for surfing during suitable seasons with gentle to moderate waves",
    ],
    thingsToKnow: {
      crowds: "Morning is peaceful and quiet; becomes crowded with vendors by evening. December-January are quieter months. Swimming area is restricted and can feel crowded due to lifeguard safety measures.",
      difficulty: null,
      safety: "Strong undertow and sea currents limit safe swimming areas. Lifeguards restrict swimming to designated zones. Security guards monitor swimmers. Safe shallow water in some areas.",
      accessibility: "Free beach access. Beach chairs available for rent (40,000 VND). Public toilets, changing rooms, and foot washers available. Flat boardwalk good for walking.",
      seasonal: "December-January: cooler weather, good water temperature, calmer conditions. Winter months bring stronger waves and rougher seas. October: cloudy weather possible.",
    },
    visitorTips: [
      "Visit early morning for peaceful atmosphere and avoid evening crowds and aggressive vendors",
      "Stick to designated swimming areas marked by lifeguards; strong currents make unrestricted swimming dangerous",
      "Wear shoes or use foot washers as fine sand is difficult to remove from skin and clothes",
    ],
    faq: [
      { question: "Is it safe to swim at My Khe Beach?", answer: "Swimming is restricted to designated lifeguard-supervised areas due to strong undertow and currents. Follow lifeguard instructions. Shallow areas near shore are generally safe for wading." },
      { question: "When is the best time to visit for swimming versus surfing?", answer: "December-January offers calm conditions ideal for swimming. Waves are stronger during winter months, better for surfing. Check conditions before visiting." },
      { question: "How crowded does the beach get?", answer: "Early morning is peaceful and empty. Evening (sunset time) becomes crowded with tourists and vendors. December-January are quieter months overall than peak seasons." },
    ],
    sentiment: {
      positive: "Overwhelmingly praised for soft sand, cleanliness, boardwalk amenities, and peaceful mornings. Excellent for walking, relaxation, and water sports.",
      negative: "Strong currents and undertow restrict swimming. Some sections have litter. Evening crowds and persistent vendors can be overwhelming. Water clarity varies.",
    },
  },
}
