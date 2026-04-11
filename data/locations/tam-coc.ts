import { Location } from "../location"
import { heroUrl } from "@/lib/cloudinary"

export const tamCoc: Location = {
  slug: "tam-coc",
  name: "Tam Cốc",
  provinces: ["ninh-binh"],
  destination:"ninh-binh",
  lat: "20.217617371413187",
  lng: "105.91576156501065",
  address: "Tam Cốc, Ninh Hải, Hoa Lư, Ninh Bình",
  type: "nature",
  categories: [],
  experiences: ["boat-tour", "cycling", "photography"],
  tags: ["🛶 Boat Tour", "🏔️ Karst", "🌾 Rice Fields", "📸 Photography"],
  bestTime: "Sep – Nov or Mar – Apr (avoid summer crowds and heat)",
  bestMonths: [3, 4, 9, 10, 11],
  entranceFee: "Boat tour: 150,000 VND/person",
  openingHours: "6:00 AM – 5:00 PM",
  mapUrl: "https://maps.google.com/?q=20.2253,105.9550",
  streetView: {embedUrl: "https://www.google.com/maps/embed?pb=!4v1775888074548!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ3VoTjZ2SGc.!2m2!1d20.21805370130474!2d105.9161806600398!3f256.9778666684793!4f-26.862696455827802!5f0.7820865974627469", },
  heroImage: heroUrl("tam-coc-ninh-binh2_an0hm8"),
  gallery: [
    "tam-coc-ninh-binh_iqqjsd",
    "tam-coc-ninh-binh4_xdjpf8",
    "tam-coc-ninh-binh3_ou7pw0",
  ],
  seoDescription:
    "Tam Cốc - three river caves cut through towering limestone karst in Ninh Bình, rowed by local women through flooded rice paddies that turn gold in harvest season. Vietnam's most scenic boat journey.",
  tips: [
    "Go on a weekday - weekends bring tour buses and the boat queue stretches for hours",
    "The 2-hour boat ride covers about 9km through three caves - bring sunscreen, there's no shade on the water",
    "Rowers often stop midway to sell drinks and souvenirs - you're not obligated to buy but a small tip at the end is expected",
    "Rent a bicycle at the dock to explore the surrounding villages and rice fields after the boat tour",
    "The best light for photography is early morning when mist sits over the water - arrive at opening time",
    "May–June and Sep–Oct are rice harvest seasons - the golden fields make the scenery dramatically better",
  ],
  content: {
    intro:
      "Tam Cốc - literally 'three caves' - is a 9km stretch of the Ngô Đồng River where limestone karst peaks rise directly from flooded rice paddies and the current carries flat-bottomed boats through three natural caves carved into the rock. The scenery shifts with the seasons: brilliant green paddies in summer, gold during harvest, and a quiet misty stillness in winter. It's one of the most photographed landscapes in northern Vietnam and earns every bit of the attention.",
    howToGetThere:
      "Tam Cốc is 7km southwest of Ninh Bình city. From Ninh Bình train station, take a taxi or grab (about 80,000–100,000 VND) or rent a bicycle for the flat 20-minute ride. From Hà Nội, trains and buses run to Ninh Bình regularly - the journey takes about 2 hours. Most travelers base themselves in Ninh Bình city or the Tam Cốc village guesthouses for 1–2 nights.",
    whatToExpect:
      "At the dock, you'll be assigned a wooden flat-bottomed boat rowed by a local - usually a woman who rows with her feet to keep her hands free. The route passes through Hang Cả, Hang Hai, and Hang Ba caves, each progressively smaller and darker. The caves are low - you'll need to duck in places. The full round trip takes about 2 hours. Outside the caves, the river winds through rice fields hemmed in by vertical karst walls. It's genuinely beautiful, though the dock area itself is crowded and commercial.",
    travelTips:
      "Tam Cốc is best combined with Tràng An (15km away) and Hoa Lư ancient capital (5km) into a full-day Ninh Bình itinerary. Bicycles can be rented near the dock for 50,000–80,000 VND/day - the cycling route through Thung Nham and the surrounding villages is one of the best in the north. Avoid visiting during Vietnamese public holidays when the site becomes genuinely overcrowded.",
  },
  insights: {
    highlights: [
      "Boat ride through three limestone caves along Ngo Dong River with traditional foot-rowing sampans",
      "Scenic karst landscape surrounded by rice paddies, limestone cliffs, and lush greenery",
      "Bich Dong Pagoda built into mountainside with multiple levels offering spiritual and natural atmosphere",
    ],
    thingsToKnow: {
      crowds: "Generally not overcrowded, but can vary by season and time of day. Early morning visits recommended to beat crowds. Rainy days tend to be less busy.",
      difficulty: null,
      safety: null,
      accessibility: "Boat tours require minimum group sizes: 4 passengers for locals, 2 for foreigners. Solo travelers may need to wait for others or pay extra. Electric buggy service available but has long waiting times.",
      seasonal: "Rice ripening season offers unique scenery. Visit in February for pleasant weather and fewer crowds. August is hot and humid. Tours operate year-round including rainy conditions.",
    },
    visitorTips: [
      "Bring sunscreen, hat, sunglasses, and water for 1.5-2 hour boat rides in intense sun exposure",
      "Decline unwanted souvenir purchases or photo deals upfront; negotiate prices before accepting items",
      "Visit midweek or late afternoon (4:30pm+) for fewer vendors and a more peaceful experience",
    ],
    faq: [
      { question: "How long is the boat ride and what's included?", answer: "Boat rides typically last 1.5-2 hours covering approximately 3km, passing through three caves, rice paddies, and limestone formations. Separate electric buggy service costs extra." },
      { question: "Are there aggressive souvenir sales and tip demands?", answer: "Multiple travelers report boatmen stopping mid-tour to sell embroidered items and requesting tips during or after tours. Experiences vary; some boatmen are pleasant, others persist despite refusals." },
      { question: "What are ticket prices and group requirements?", answer: "River ride costs 250,000-350,000 VND per person. Groups require 4 locals or 2 foreigners minimum. Solo travelers may wait 15+ minutes or pay extra to start. Electric buggy costs 100,000 VND." },
    ],
    sentiment: {
      positive: "Most visitors praise stunning natural scenery, peaceful atmosphere, unique boat experience with foot-rowing, and friendly local guides. Kong filming location adds cultural interest.",
      negative: "Several travelers report aggressive souvenir selling, inflated photo prices, persistent tip demands, boatmen holding boats hostage until purchases made, and poor service attitude from some operators.",
    },
  },
}