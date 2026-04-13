import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const honYenIsland: Location = {
  slug: "hon-yen-island",
  name: "Hon Yen Island",
  provinces: ["phu-yen"],
  destination: "",
  lat: "13.225688161973299",
  lng: "109.30868667111528",
  address: "Hòn Yến, An Hải, Tuy An, Phú Yên",
  type: ["island", "beach", "nature"],
  categories: [],
  experiences: ["beach", "snorkeling", "boat-tour", "photography", "wildlife"],
  tags: ["🦞 Lobster Island", "🐠 Coral Snorkelling", "🏝️ Tidal Access", "📷 Hidden Gem"],
  bestTime: "Feb - Aug (dry season; tidal access possible at low tide Jan - Apr; avoid Sep - Dec rough seas)",
  bestMonths: [2, 3, 4, 5, 6, 7, 8],
  entranceFee: "Boat tour ~100,000 - 150,000 VND per person",
  openingHours: "Daylight hours; tidal access window varies by season",
  mapUrl: "https://www.google.com/maps?q=13.225688161973299,109.30868667111528",
  streetView: { embedUrl: "https://www.google.com/maps/embed?pb=!4v1776105474260!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRHU5T19pd0FF!2m2!1d13.22618997544958!2d109.3073999962672!3f295.7058649426591!4f-72.05340581638391!5f0.7820865974627469", },
  heroImage: heroUrl("hon-yen-phu-yen_suscwc"),
  gallery: [
    "hon-yen-phu-yen-4_ndnrry",
    "hon-yen-phu-yen-6_angqiw",
    "hon-yen-phu-yen_suscwc",
    "hon-yen-phu-yen-2_yd13sd",
    "hon-yen-phu-yen-3_lem5bm",
    "hon-yen-phu-yen-1_tgqxvh",
  ],
  seoDescription:
    "Hon Yen Island is a small coral island off the coast of Phú Yên province accessible by boat or on foot at low tide, known for its clear shallow reefs, lobster farming, and the unhurried atmosphere of one of central Vietnam's least-visited island day trips.",
  tips: [
    "Check tide tables before visiting - the island is accessible on foot across the reef flat at low tide during certain months, which is the best way to experience it",
    "The island is known for lobster farming - several floating restaurants near the island serve freshly caught lobster at significantly lower prices than mainland restaurants",
    "Bring snorkelling gear from the mainland - rental is limited and unreliable at the island",
    "The reef flat exposed at low tide is sharp coral rock - water shoes are essential for the tidal walk",
    "Combine with a visit to Gành Đá Đĩa (the basalt columns) nearby for a full day in Phú Yên's An Hải area",
  ],
  content: {
    intro:
      "Hòn Yến sits off the coast of An Hải commune in Tuy An district, Phú Yên province, and occupies a different register from the busier island destinations further north and south. The island is small, lightly visited, and known principally for two things: the coral reef that surrounds it, which is accessible by snorkelling or at low tide on foot across the exposed reef flat, and the lobster farming operations in the surrounding waters, which supply several floating restaurants near the island with fresh seafood at prices well below the mainland norm. Phú Yên as a whole receives significantly fewer international visitors than its neighbours Khánh Hòa and Bình Định, and Hòn Yến reflects this - it is a genuinely low-key destination that rewards visitors looking for something removed from the standard Vietnam beach circuit.",
    howToGetThere:
      "Hòn Yến is located approximately 25km north of Tuy Hòa city, the provincial capital of Phú Yên. From Tuy Hòa, follow Highway 1A north to Chí Thạnh, then take the coastal road east toward An Hải. Boat access to the island is arranged from the An Hải coastline - local fishermen offer boat hire and the journey takes around 15-20 minutes. Some visitors walk across the reef flat at low tide during the January-April period when water levels allow. Tuy Hòa is connected to major cities by train and domestic flights.",
    whatToExpect:
      "The island has a small interior with some vegetation and basic facilities. The main activity is snorkelling the surrounding reef, which has good coral cover in the shallower sections accessible without diving equipment. The floating restaurants moored near the island are a genuine highlight - lobster, sea urchin, and fresh fish served on platforms over the water at prices that reflect the fishing village supply chain rather than tourist markup. The low-tide reef walk, when conditions allow, gives access to the island without a boat and passes over exposed coral formations that are unusual in this coastal context.",
    travelTips:
      "Hòn Yến is best approached as a half-day excursion combined with other Phú Yên coastal attractions - Gành Đá Đĩa (the hexagonal basalt columns, one of Vietnam's most distinctive geological formations) is approximately 15km away and makes a natural combination. The island sees very few foreign visitors and English is essentially unavailable - basic Vietnamese or a Vietnamese-speaking companion helps with boat hire negotiation and ordering at the floating restaurants. The seafood lunch at the floating restaurants is the most memorable part of the visit for many travellers and should not be skipped.",
  },
}
