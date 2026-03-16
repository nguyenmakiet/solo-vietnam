import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const cuaDaiBeach: Location = {
  slug: "cua-dai-beach",
  name: "Cửa Đại Beach",
  provinces: ["quang-nam"],
  destination: "hoi-an",
  lat: "15.902162713109306",
  lng: "108.35901183162761",
  address: "Cửa Đại, Hội An, Quảng Nam",
  type: "beach",
  experiences: ["beach", "swimming", "cycling", "photography"],
  tags: ["🏖️ Hội An Beach", "🚲 Cycling Distance", "🌊 Swimming", "📸 Photography"],
  bestTime: "Mar – Aug (dry season, calm water; avoid Oct – Jan storm season)",
  entranceFee: "Free",
  openingHours: "Open 24/7",
  mapUrl: "",
  heroImage: heroUrl("cua-dai-beach-hero_placeholder"),
  gallery: [],
  seoDescription:
    "Cửa Đại Beach is the closest beach to Hội An Ancient Town — 4km east on a flat cycling road, with a wide sandy shore, a strip of seafood restaurants, and views of the Cham Islands on the horizon.",
  tips: [
    "Cycle from Hội An town — 4km on a flat road through rice fields and villages, one of the best easy rides in central Vietnam",
    "Cửa Đại has experienced significant erosion in recent years — the beach is narrower than it was historically, particularly at the northern end",
    "The seafood restaurants on the beachfront road serve fresh catch at reasonable prices — better value than the tourist restaurants in the Ancient Town",
    "An Bàng Beach (3km north) is less developed and more scenic — if choosing between the two, An Bàng is the better beach experience",
    "The Cham Islands are visible on the horizon on clear days — boat trips to the islands depart from the Cửa Đại pier",
  ],
  content: {
    intro:
      "Cửa Đại Beach sits at the mouth of the Thu Bồn River, 4km east of Hội An Ancient Town, where the river meets the South China Sea. It's the most accessible beach from Hội An — flat cycling distance from the Ancient Town on a road through rice paddies and the coastal village of Cửa Đại — and serves as the primary beach day option for visitors based in Hội An. The beach faces east over the South China Sea toward the Cham Islands, which are visible as low dark shapes on the horizon on clear days. The beachfront has a strip of hotels, guesthouses, and seafood restaurants that has developed organically over decades. The beach has suffered notable erosion in recent years due to upstream dam construction affecting sediment flows — the northern section in particular has lost significant width.",
    howToGetThere:
      "Cửa Đại Beach is 4km from Hội An Ancient Town on a flat road — 20–25 minutes by bicycle, 10 minutes by motorbike. Bicycles are widely available for rent in Hội An for 50,000–80,000 VND per day. The road from town passes through rice fields, vegetable farms, and the Cửa Đại village. The beach access points are at the end of the main road.",
    whatToExpect:
      "The beach is wide in the southern section near the river mouth and narrower toward the north. The seafood restaurant strip runs parallel to the beach on the main road — most restaurants have beach or garden seating. The water is calm in dry season and suitable for swimming. The pier at the river mouth is the departure point for Cham Islands boat trips. Sunbed and umbrella rental is available from beach vendors.",
    travelTips:
      "Cửa Đại is a solid but unspectacular beach — convenient for Hội An visitors who want a beach day without committing to a longer trip, but An Bàng (3km north) is consistently more photogenic and less crowded. The cycling approach is the main reason to choose Cửa Đại over An Bàng — the flat road through the countryside is the same quality and the beach is the end of the ride rather than the whole point.",
  },
}
