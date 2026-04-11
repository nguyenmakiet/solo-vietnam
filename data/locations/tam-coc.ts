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
}