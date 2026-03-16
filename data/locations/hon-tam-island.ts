import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const honTamIsland: Location = {
  slug: "hon-tam-island",
  name: "Hòn Tằm Island",
  provinces: ["khanh-hoa"],
  destination: "nha-trang",
  lat: "12.177120449066654",
  lng: "109.24323947785186",
  address: "Hòn Tằm, Vịnh Nha Trang, Khánh Hoà",
  type: ["island", "beach"],
  experiences: ["beach", "swimming", "snorkeling", "boat-tour", "kayaking"],
  tags: ["🏝️ Private Island Resort", "🏖️ White Sand Beach", "🤿 Snorkeling", "🚢 Boat Tour"],
  bestTime: "Feb – Sep (dry season, calm water, best visibility)",
  entranceFee: "~200,000–350,000 VND day pass (resort facilities included)",
  openingHours: "8:00 AM – 5:00 PM; boat transfers from Cầu Đá pier",
  mapUrl: "",
  heroImage: heroUrl("hon-tam-island-hero_placeholder"),
  gallery: [],
  seoDescription:
    "Hòn Tằm is Nha Trang Bay's most developed private island — a resort island 5km offshore with white sand beaches, clear water, water sports, and coral snorkeling, reached by speedboat in 15 minutes from Cầu Đá pier.",
  tips: [
    "Book the day pass rather than a full resort stay if mày only want the beach — it includes all facilities and is a fraction of the room rate",
    "The snorkeling around the rocky headlands at the island's northern tip is better than the main beach area — ask the resort staff for the best snorkel spots",
    "Arrive on the first morning boat (8–8:30 AM) for the quietest beach experience — day visitors arrive in waves throughout the morning",
    "The island's eastern beach faces away from Nha Trang city and is quieter than the main western beach — worth exploring on foot",
    "Combine with a stop at Hòn Mun Island on the return journey — many boat tour operators run the two islands together",
  ],
  content: {
    intro:
      "Hòn Tằm — Silkworm Island — is a 90-hectare island 5km southeast of Nha Trang, developed as a private beach resort by Vingroup under the Hòn Tằm Resort brand. The island has two main beaches: the western beach facing Nha Trang city, with the resort facilities, water sports, and restaurant strip; and the quieter eastern beach facing the open sea. The waters around the island are part of Nha Trang Marine Protected Area — the same zone as Hòn Mun — and coral snorkeling is available from the rocky headlands, though the quality is secondary to Hòn Mun's dedicated dive sites. The island is the most developed of the bay's nineteen islands and the most straightforward beach day option for travellers based in Nha Trang city who want a private island experience without the logistics of a full-day boat tour.",
    howToGetThere:
      "Speedboats to Hòn Tằm depart from Cầu Đá pier in southern Nha Trang, approximately 6km from the central beach strip — 15 minutes by taxi or Grab from central Nha Trang. The boat journey takes about 15 minutes. Day pass tickets including the boat transfer are purchased at the Cầu Đá pier ticket office or online through the resort. Departures run throughout the morning from 8 AM.",
    whatToExpect:
      "The main western beach has a long sandy shore with sunbeds, umbrellas, beach bars, a swimming pool, and water sports equipment — jet skis, banana boats, kayaks, and snorkeling gear available for hire. The beach is clean and the water calm in dry season. Resort restaurants serve fresh seafood and Vietnamese dishes at mid-range prices. The eastern beach is accessible by a 15-minute walk across the island — less developed, facing the open sea, and noticeably quieter. Snorkeling from the rocky points at both ends of the western beach gives access to coral and reef fish.",
    travelTips:
      "Hòn Tằm is the right choice for travellers who want a polished beach day with facilities and easy logistics — the 15-minute boat transfer, good beach, and all-inclusive day pass make it the most effortless island day available from Nha Trang. For travellers prioritising snorkeling or diving quality, Hòn Mun's marine reserve is the better destination. The two islands can be combined on a single boat tour, which is the most efficient way to cover both.",
  },
}
