import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const trangAn: Location = {
  slug: "trang-an",
  name: "Trang An",
  provinces: ["ninh-binh"],
  destination: "ninh-binh",
  lat: "20.253239649044314",
  lng: "105.91915249378707",
  address: "Tràng An, Hoa Lư, Ninh Bình",
  type: ["nature","heritage"],
  experiences: ["boat-tour", "caving", "photography", "culture", "history"],
  tags: ["🚣 Boat Tour", "🪨 UNESCO Heritage", "⛩️ Temples", "📸 Photography"],
  bestTime: "Sep – Nov or Mar – Apr (dry season, clearest water)",
  entranceFee: "~250,000 VND (includes boat and rower)",
  openingHours: "7:00 AM – 5:00 PM",
  mapUrl: "https://maps.google.com/?q=20.2800,105.9100",
  heroImage: heroUrl("trang-an-hero_placeholder"),
  gallery: [],
  seoDescription:
    "Trang An is Vietnam's only UNESCO World Heritage Site recognised for both natural and cultural values — a labyrinth of karst mountains, jade-green rivers, ancient caves, and centuries-old temples navigated entirely by wooden rowboat.",
  tips: [
    "The 3-cave route (Route 1, about 2.5 hours) covers Hang Tối, Hang Nấu Rượu, and Hang Sinh Dược — the most scenic combination of water, caves, and temples",
    "Your boat rower will likely be a local woman — tipping 30,000–50,000 VND at the end is standard and genuinely appreciated",
    "Go on a weekday if possible — Trang An is far less crowded than Tam Cốc and the atmosphere at the cave entrances is completely different when it's quiet",
    "Bring a headlamp or phone torch — the caves are partially lit but sections are genuinely dark",
    "The water level affects the experience significantly — after heavy rain the rivers run murky brown; the blue-green colour appears in dry season",
  ],
  content: {
    intro:
      "Trang An is Vietnam's most complete natural and cultural landscape — a UNESCO World Heritage Site that earned its inscription for both geology and history simultaneously, the only place in Vietnam with that dual recognition. The landscape is a dense cluster of karst towers rising from interconnected rivers, lakes, and valleys, threaded by 48 caves and grottoes. Archaeological excavations inside the caves found human remains and tools dating back 30,000 years, placing Trang An among the oldest continuously inhabited landscapes in Southeast Asia. The temples and shrines built into the cliffs and island summits — Phủ Khống, Phủ Đột, Đền Trình — add a spiritual layer that Tam Cốc and Hang Mua don't have. The whole complex is navigated by wooden rowboat, with a local rower guiding you through low cave passages, open valleys, and flooded archways.",
    howToGetThere:
      "Trang An Scenic Landscape Complex is 7km northwest of Ninh Bình city, clearly signposted from National Highway 1A. From Ninh Bình town, take a xe ôm or taxi (about 15–20 minutes, 80,000–120,000 VND). From Hanoi, Trang An is 90km south — most visitors take the train or bus to Ninh Bình and then a local taxi. The boat departure area has a large dock with multiple jetties; buy your ticket at the entrance gate and wait for a boat assignment. Parking is plentiful for self-drive visitors.",
    whatToExpect:
      "The tour is conducted entirely by wooden rowboat — you sit in the boat and the rower (almost always a local woman) navigates using her feet and oars. Three main routes are available: Route 1 (3 caves, temples, 2.5 hours), Route 2 (the valley loop, 3 hours), and Route 3 (Hang Tối focus, 2.5 hours). All routes pass through at least three caves, with low archways that require ducking. The scenery alternates between open valley with karst reflections in calm water and dark, dripping cave passages. Temple stops allow you to disembark, climb steps, and look out over the landscape. The final stretch of most routes passes through a wide open valley with views of the full karst range.",
    travelTips:
      "Trang An and Tam Cốc are the two main boat-tour experiences in Ninh Bình, and they're genuinely different. Trang An is larger, more cave-heavy, and has the UNESCO cultural layer with temples; Tam Cốc is shorter, more scenic for rice field views, and easier to reach. If you only have time for one, Trang An offers more variety. If you have a full day in Ninh Bình, pair Trang An in the morning with Hang Mua climb in the afternoon — the two complement each other perfectly.",
  },
}
