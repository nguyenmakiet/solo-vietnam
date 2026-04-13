import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const honKhoIsland: Location = {
  slug: "hon-kho-island",
  name: "Hon Kho Island",
  provinces: ["binh-dinh"],
  destination: "",
  lat: "13.764548186649696",
  lng: "109.29977458585735",
  address: "Hòn Khô, Nhơn Hải, Quy Nhơn, Bình Định",
  type: ["island", "beach", "nature"],
  categories: [],
  experiences: ["beach", "snorkeling", "boat-tour", "photography"],
  tags: ["🏝️ Day Trip Island", "🐠 Coral Reefs", "🚤 Boat Tour", "📷 Rocky Coastline"],
  bestTime: "Mar - Sep (dry season; sea conditions calm enough for boat access; avoid Oct - Jan when rough seas make the crossing dangerous)",
  bestMonths: [3, 4, 5, 6, 7, 8, 9],
  entranceFee: "Boat tour ~150,000 - 200,000 VND per person (includes island access)",
  openingHours: "Daylight hours; boat departures typically 7:00 AM - 2:00 PM",
  mapUrl: "https://www.google.com/maps?q=13.764548186649696,109.29977458585735",
  streetView: { embedUrl: "https://www.google.com/maps/embed?pb=!4v1776105168831!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRHVsb3U3c1FF!2m2!1d13.76555808832058!2d109.2965300958454!3f352.98792843217154!4f-33.25140924114143!5f0.7820865974627469", },
  heroImage: heroUrl("hon-kho-island-binh-dinh-8_fmluyq"),
  gallery: [
    "hon-kho-island-binh-dinh-2_uochbc",
    "hon-kho-island-binh-dinh-3_achdrk",
    "hon-kho-island-binh-dinh-5_y9ujdp",
    "hon-kho-island-binh-dinh-6_glgofj",
    "hon-kho-island-binh-dinh-9_newdip",
    "hon-kho-island-binh-dinh-8_fmluyq",
    "hon-kho-island-binh-dinh_gzjryu",
    "hon-kho-island-binh-dinh-7_zeeno7",
  ],
  seoDescription:
    "Hon Kho Island is a small uninhabited rocky island off the coast of Quy Nhơn in Bình Định province, known for its clear turquoise waters, coral reefs, and dramatic boulder-strewn coastline accessible by short boat trip from Nhơn Hải fishing village.",
  tips: [
    "Book boat tours through guesthouses in Quy Nhơn the evening before - independent boat hire from Nhơn Hải fishing village is cheaper but requires more negotiation",
    "Bring your own snorkelling gear if possible - rental quality at the island is inconsistent",
    "The island has no shade infrastructure - bring sun protection, hat, and enough water for the full day",
    "The rocky terrain requires sturdy footwear - flip flops are inadequate for exploring beyond the main landing beach",
    "Morning departures have the calmest sea conditions and best underwater visibility for snorkelling",
  ],
  content: {
    intro:
      "Hòn Khô - literally 'Dry Island' in Vietnamese - is a small uninhabited island approximately 4 kilometres off the coast of Nhơn Hải commune, south of Quy Nhơn city in Bình Định province. The island is characterised by dramatic granite boulder formations, clear shallow water with accessible coral reefs, and the absence of any permanent development beyond basic visitor facilities. It has become the most popular day trip destination from Quy Nhơn, typically visited as part of a boat tour that also covers the surrounding reefs and occasionally the nearby Hòn Hải island. The combination of relatively undeveloped coastline, decent snorkelling, and photogenic rock formations makes it one of the more rewarding beach day trips available from central Vietnam's less-visited cities.",
    howToGetThere:
      "Hòn Khô is accessed by boat from Nhơn Hải fishing village, approximately 18km south of Quy Nhơn city centre. From Quy Nhơn, follow the coastal road south through Ghềnh Ráng to Nhơn Hải - the drive takes around 30-40 minutes by motorbike. Most visitors join organised boat tours departing from Quy Nhơn's tourism pier or book through their accommodation. Independent boat hire is available directly from Nhơn Hải village and is typically cheaper than organised tours. The boat crossing takes approximately 15-20 minutes in calm conditions.",
    whatToExpect:
      "The island visit centres on the main beach area where boats land, offering calm shallow water suitable for swimming and basic snorkelling over nearshore coral. The surrounding rocky coastline has several photogenic formations accessible on foot at low tide. Snorkelling around the island's outer edges offers clearer water and more coral diversity than the main beach. Most boat tours include a floating seafood lunch on the water between island stops - freshness and quality is generally good given the fishing village context. The island has basic toilet facilities but no restaurants or shops.",
    travelTips:
      "Hòn Khô works best as part of a full-day boat tour rather than an isolated visit - the surrounding reef areas and the journey between stops are as enjoyable as the island itself. The tour format varies between operators: some focus on snorkelling, others on island hopping with less time in the water. Clarify the itinerary before booking. The island sees significant visitor numbers on weekends and Vietnamese public holidays - weekday visits are noticeably quieter. Water clarity for snorkelling is best from April to July before any late season rain affects visibility.",
  },
}
