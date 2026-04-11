import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const tiTopIsland: Location = {
  slug: "ti-top-island",
  name: "Ti Top Island",
  provinces: ["quang-ninh"],
  destination: "ha-long",
  lat: "20.85912770557982",
  lng: "107.08129113548287",
  address: "Đảo Ti Tốp, Vịnh Hạ Long, Quảng Ninh",
  type: "island",
  categories: [],
  experiences: ["beach", "swimming", "trekking", "photography", "kayaking"],
  tags: ["🏖️ Crescent Beach", "🏔️ Summit Viewpoint", "🛶 Kayaking", "📸 Photography"],
  bestTime: "Sep – Nov or Mar – May (clear skies, fewer domestic crowds)",
  bestMonths: [3, 4, 5, 9, 10, 11],
  entranceFee: "Included in Ha Long Bay Route 2 sightseeing ticket",
  openingHours: "Open during cruise hours (typically 7:30 AM – 5:00 PM)",
  mapUrl: "https://maps.google.com/?q=20.8658,107.1020",
  streetView: {embedUrl: "https://www.google.com/maps/embed?pb=!4v1775889205422!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ1QtLUROcmdF!2m2!1d20.85786593775521!2d107.0809216448357!3f4.27079449322294!4f-13.171432863232567!5f0.7820865974627469", },
  heroImage: heroUrl("ti-top-island-hero_placeholder"),
  gallery: [

  ],
  seoDescription:
    "Ti Top Island - named after Soviet cosmonaut Gherman Titov, who visited with President Hồ Chí Minh in 1962 - is Ha Long Bay's most iconic stop: a crescent-shaped white sand beach for swimming and a 400-step summit climb rewarded with a 360° panorama of the bay.",
  tips: [
    "Climb to the summit first before the beach - once you're in the water you won't want to do the 400 steps after",
    "The summit view is one of the best panoramic shots in all of Ha Long Bay - go early morning before the haze builds up for the clearest photos",
    "Ti Top is the only officially designated swimming spot in Ha Long Bay - bring your swimwear and make use of it",
    "Kayak rentals (around 150,000 VND/hour) are available at the island - paddling around the limestone karsts at water level beats any view from the top",
    "The beach gets very crowded from 10 AM to 2 PM - ask your cruise to arrive before 9 AM or after 3 PM if possible",
  ],
  content: {
    intro:
      "Ti Top Island sits in the heart of Ha Long Bay, about 8km southeast of Bãi Cháy Harbour, and holds two distinct draws: a crescent-shaped white sand beach and a 110-metre summit with 360° views over the bay. The island was named by President Hồ Chí Minh himself, in honour of Soviet cosmonaut Gherman Stepanovich Titov - the second human in space - who toured Ha Long Bay with him in 1962. Before that, the island was marked on maps simply as 'Cát Nàng'. Today it's one of the most visited stops on the bay, and the only place in Ha Long Bay where swimming is officially permitted by the management board. The beach is small - around 500 square metres - but the sand is clean, the water calm, and the karst backdrop is unlike anywhere else.",
    howToGetThere:
      "Ti Top Island is part of Ha Long Bay sightseeing Route 2 and is included in almost all day and overnight cruise itineraries. The island is not reachable independently - you must arrive by boat from Tuần Châu or Hạ Long International Passenger Port. Most cruise itineraries stop here for 1–1.5 hours, which is enough for both the beach and the summit climb. Day cruise tickets are available at the port if you haven't booked in advance.",
    whatToExpect:
      "The island has a clear two-part structure: the beach at the base and the summit at the top, connected by 400 steep steps with rest platforms along the way. The beach has freshwater showers, swim gear rentals, a bar, and deckchairs. The climb takes around 20–30 minutes at a comfortable pace, and the summit has a pavilion and viewing platform. The panorama from the top - limestone karsts in every direction, cruise ships threading through the channels below, the bay's green-grey water - is the definitive Ha Long Bay aerial view. On a clear autumn morning, visibility extends across the entire bay.",
    travelTips:
      "Ti Top works best as part of an overnight cruise rather than a rushed day trip - if your cruise arrives before 9 AM, the beach is uncrowded and the summit light is at its best. The combination of beach and summit in one stop makes it genuinely satisfying for an hour and a half. If you're choosing between Ti Top and Sung Sot Cave on a short itinerary, do both - they're close together on Route 2 and each offers something completely different.",
  },
  insights: {
    highlights: [
      "360-degree panoramic views of limestone karsts and emerald waters from summit after 400-step climb",
      "Crescent-shaped white sand beach at base with calm, clear water for swimming",
      "Stone staircase with rope railings, accessible to most fitness levels including families and older travelers",
    ],
    thingsToKnow: {
      crowds: "Extremely crowded during peak times when large cruise boats arrive. Single path used for both up and down traffic causes congestion and queuing. Early morning visits (7:45 AM) still experience heavy crowds.",
      difficulty: "Steep 400-450 stone steps with high step gradient. Challenging in humidity. Not recommended for those 60+ with limited time or lower physical fitness. Most complete climb in 10-15 minutes at steady pace.",
      safety: "Single path for two-way traffic creates congestion and safety concerns, especially in rain. Wet narrow stairs at water's edge lack railings and require assistance. Rope railings present on main stairs.",
      accessibility: "Suitable for families, older travelers, and kids at steady pace. Sturdy shoes or sandals with grip recommended; flip-flops not suitable. Mid-point break available. No hiking boots required.",
      seasonal: "Hot and humid conditions make climbing difficult. Humidity makes stairs more challenging.",
    },
    visitorTips: [
      "Wear sturdy shoes or sandals with grip; avoid flip-flops for better stability on steep stairs",
      "Arrive early or immediately upon beach arrival to avoid cruise boat crowds and queuing",
      "Bring water for the climb; basic facilities include changing rooms, showers, and drink stalls at base",
    ],
    faq: [
      { question: "How long does the climb take?", answer: "10-15 minutes at a steady pace, though timing varies by fitness level and crowds. Allow extra time during peak tourist periods." },
      { question: "Is the climb suitable for older people or those with mobility limitations?", answer: "Possible at steady pace, but 45 minutes may be insufficient for those 60+. Steep gradient and high steps challenge those with lower fitness. Mid-point viewing area available." },
      { question: "What should I know about crowds and timing?", answer: "Visit early morning (before 7:45 AM) to avoid crowds. Single staircase creates severe congestion with two-way traffic. Peak times cause queuing and difficulty enjoying the summit viewing area." },
    ],
    sentiment: {
      positive: "Visitors consistently praise the panoramic 360-degree views as the best in Ha Long Bay, worth the physical effort. Beach, facilities, and accessibility for various ages appreciated.",
      negative: "Severe overcrowding and single staircase causing dangerous two-way traffic. Poor sanitation (unsanitary toilets, permanently closed showers). Water pollution (gasoline smell, trash). Insufficient time allocation on cruises. Beach pollution from grey water.",
    },
  },
}
