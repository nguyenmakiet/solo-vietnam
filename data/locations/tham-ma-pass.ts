import { Location } from "../location"
import { heroUrl } from "@/lib/cloudinary"

export const thamMaPass: Location = {
  slug: "tham-ma-pass",
  name: "Thẩm Mã Pass",
  provinces: ["ha-giang"],
  destination: "ha-giang-loop",
  lat: "23.170578279202783",
  lng: "105.19445930795216",
  address: "Thẩm Mã, Đồng Văn, Hà Giang",
  type: ["mountain", "nature"],
  experiences: ["photography", "trekking", "cycling", "motorcycling"],
  tags: ["🏍️ Motorbike", "🏔️ Mountain Pass", "📸 Photography", "🌾 Rice Terraces"],
  bestTime: "Sep – Nov (golden terraces) or Mar – Apr (spring flowers)",
  entranceFee: "Free",
  openingHours: "Open 24/7",
  mapUrl: "https://maps.google.com/?q=23.2833,105.2500",
  heroImage: heroUrl("tham-ma-pass_qbc8z5"),
  gallery: [
    "tham-ma-pass-1_d3zyko",
    "tham-ma-pass_qbc8z5",
    "tham-ma-pass-2_pe99li",
  ],
  seoDescription:
    "Thẩm Mã Pass — a lesser-known but stunning mountain pass on the Hà Giang Loop between Yên Minh and Đồng Văn, with sweeping views over terraced valleys and karst peaks that rival the more famous passes.",
  tips: [
    "Less crowded than Mã Pí Lèng — stop here for photos without the tourist crowds",
    "The descent into Đồng Văn from Thẩm Mã gives some of the best karst plateau views on the entire loop",
    "Road surface is good but watch for loose gravel on the corners",
    "The viewpoint at the top has no facilities — bring water and snacks",
  ],
  content: {
    intro:
      "Thẩm Mã Pass sits between Yên Minh and Đồng Văn on the Hà Giang Loop, less famous than Mã Pí Lèng but no less dramatic in its own way. The pass crests above a wide valley of terraced fields hemmed in by limestone karst, with the Đồng Văn plateau opening up ahead. It's one of the moments on the loop where the landscape shifts from forested mountain to open rocky plateau — a transition that marks the entry into the most remote section of the route.",
    howToGetThere:
      "Thẩm Mã Pass is on the main Loop road between Yên Minh (30km west) and Đồng Văn (25km east). Riders doing the standard loop clockwise from Hà Giang city pass through it on day 2 or 3, after Quản Bạ and Yên Minh. There's no reason to make a special trip — it's a natural part of the route.",
    whatToExpect:
      "The pass has a small viewpoint area at the top where riders typically stop for photos. The view takes in terraced valleys dropping away to the south and the rocky karst plateau stretching north toward Đồng Văn. The road is well-surfaced and the corners are manageable. The descent toward Đồng Văn is particularly scenic as the landscape opens into the plateau.",
    travelTips:
      "Don't rush through Thẩm Mã in the race to reach Đồng Văn — the views here are genuinely worth 20 minutes. The pass is most photogenic in the morning light when mist still sits in the valley below. If you're doing the loop over 3 days, Thám Mã typically falls on day 2 between Yên Minh and Đồng Văn overnight.",
  },
}