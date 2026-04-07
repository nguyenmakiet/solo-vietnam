import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const catBaCannonFort: Location = {
  slug: "cat-ba-cannon-fort",
  name: "Cát Bà Cannon Fort",
  provinces: ["hai-phong"],
  destination: "cat-ba",
  lat: "20.72699791562507",
  lng: "107.05415352678563",
  address: "Cát Bà, Hải Phòng",
  type: ["history", "nature"],
  categories: [],
  experiences: ["history", "photography", "trekking"],
  tags: ["💣 WWII Cannon Fort", "📸 Panoramic Views", "🏔️ Hilltop", "📖 History"],
  bestTime: "Year-round; clearest views Oct – Apr",
  bestMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  entranceFee: "~30,000 VND",
  openingHours: "7:00 AM – 5:00 PM",
  mapUrl: "https://www.google.com/maps?q=20.72699791562507,107.05415352678563",
  streetView: { embedUrl: "https://www.google.com/maps/embed?pb=!4v1774768522625!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ3NuTEdoMUFF!2m2!1d20.72553134415704!2d107.0519851983662!3f239.02503821532432!4f-14.659227288351687!5f0.7820865974627469",},
  heroImage: heroUrl("cat-ba-cannon-fort-hero_placeholder"),
  gallery: [],
  seoDescription:
    "Cát Bà Cannon Fort is a French and Japanese military installation from the 1940s on the hilltop above Cát Bà town - preserved cannons, bunkers, and tunnels with 360-degree views over Ha Long Bay, Lan Hà Bay, and Cát Bà Island's forested karst interior.",
  tips: [
    "The fort is a 20-minute uphill walk from Cát Bà town - wear shoes rather than sandals for the uneven stone path",
    "The 360-degree view from the top is the best elevated viewpoint on the island - Ha Long Bay to the north and Lan Hà Bay to the south simultaneously",
    "The original cannons are French-era, later used by the Japanese during WWII occupation - the guide at the entrance can provide historical context",
    "Go at sunset - the light on Ha Long Bay from the fort's western viewpoint is exceptional in the late afternoon",
    "The tunnel system under the fort is partially accessible - bring a torch for the lower sections",
  ],
  content: {
    intro:
      "Cát Bà Cannon Fort sits on a 177-metre hill directly above Cát Bà town, originally built by the French colonial administration and later occupied and expanded by the Japanese during their 1940–1945 occupation of Indochina. The fort includes several large coastal defence cannons still in their original mounts, concrete bunkers, ammunition stores, and a tunnel system dug into the hilltop limestone. The strategic value was clear: from the fort, the entire approaches to Ha Long Bay and the surrounding archipelago were visible and could be covered by the cannons. Today the fort is a minor historical site but a major viewpoint - the 360-degree panorama from the hilltop encompasses Ha Long Bay to the north, Lan Hà Bay to the south, Cát Bà town and harbour below, and the forested karst interior of the island in every inland direction.",
    howToGetThere:
      "The fort is a 20-minute uphill walk from the centre of Cát Bà town - the path begins near the main harbour and climbs steeply through vegetation to the hilltop. The entrance and ticket booth are at the base of the final approach. By motorbike, the road approaches closer to the fort but the final section is on foot regardless.",
    whatToExpect:
      "The fort complex has several concrete platforms with the original cannons - large coastal defence guns on rotating mounts, partially restored. Bunkers and ammunition stores are accessible between the platforms. The tunnel entrance leads into the hillside for approximately 50 metres before the accessible section ends. The views from the fort perimeter are the main draw - north over Ha Long Bay with the limestone karsts stretching to the horizon, south over Lan Hà Bay and its more sheltered waters, and directly below, the grid of Cát Bà town and the fishing boats in the harbour.",
    travelTips:
      "The Cannon Fort is a 45-minute visit that combines a moderate uphill walk with genuine historical interest and the best view on the island. The sunset from the western platform is the highlight - schedule the visit for late afternoon and watch the light change over Ha Long Bay. The fort works well as an add-on to a full day of kayaking or national park trekking.",
  },
}
