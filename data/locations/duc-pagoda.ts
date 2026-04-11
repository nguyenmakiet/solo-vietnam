import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const ducPagoda: Location = {
  slug: "duc-pagoda",
  name: "Chùa Đục",
  provinces: ["quang-ngai"],
  destination: "ly-son",
  lat: "15.38906217491256",
  lng: "109.10196741829073",
  address: "An Hải, Lý Sơn, Quảng Ngãi",
  type: "pagoda",
  categories: [],
  experiences: ["culture", "photography"],
  tags: [
    "⛩️ Volcanic Rock Pagoda",
    "🗿 27m Quan Âm Statue",
    "🌊 Sea-facing Shrine",
    "🧗 100+ Stone Steps",
  ],
  bestTime: "Year-round; morning for cooler temperatures on the climb",
  bestMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  entranceFee: "Free",
  openingHours: "Open daily, roughly 6 AM - 6 PM",
  mapUrl: "https://www.google.com/maps?q=15.38906217491256,109.10196741829073",
  streetView: {embedUrl: "https://www.google.com/maps/embed?pb=!4v1775797150810!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQzR6ZURkTmc.!2m2!1d15.3891926383565!2d109.1019320422545!3f201.71477093827542!4f34.19694956143347!5f0.7820865974627469", },
  heroImage: heroUrl("duc-pagoda-ly-son-island-5_usxytn"),
  gallery: [
    "duc-pagoda-ly-son-island-4_psnhm0",
    "duc-pagoda-ly-son-island-7_onlopf",
    "duc-pagoda-ly-son-island-3_l13no3",
    "duc-pagoda-ly-son-island-2_zhjyv1",
    "duc-pagoda-ly-son-island-8_u5h0ip",
    "duc-pagoda-ly-son-island-6_ithirv",
  ],
  seoDescription:
    "Chùa Đục is a pagoda built into the volcanic rock face of Núi Giếng Tiền on Lý Sơn's eastern coast, accessed by over 100 stone steps cut into the cliff. The complex is dominated by a 27-meter white Quan Âm statue facing the sea, believed by locals to protect the island from storms and typhoons.",
  tips: [
    "The climb is more than 100 steps cut into the volcanic rock - wear shoes with grip and go slowly in wet weather",
    "The 27m Quan Âm statue at the top is the island's largest religious monument and frames well against the sea in morning light",
    "Dress conservatively - this is an active place of worship",
    "Chùa Đục is within a few hundred meters of Cổng Tò Vò - always visit both in the same stop",
    "The view from the pagoda terrace over the garlic fields and Cổng Tò Vò below is one of the better elevated perspectives on the island's eastern side",
  ],
  content: {
    intro:
      "Chùa Đục sits on the lower slopes of Núi Giếng Tiền - one of Lý Sơn's extinct volcanic craters - accessed by a flight of more than 100 stone steps carved into the cliff face. The pagoda complex is built into and around the volcanic rock, with the stone itself forming part of the structure. The centerpiece is a 27-meter white Quan Âm statue at the upper terrace, facing out to sea. Local belief holds that the statue protects the island's fishing communities from typhoons - a significant concern in a region that sits directly in the path of storms moving through the South China Sea. The surrounding slopes are covered with old sea almond trees (bàng biển) whose shade makes the climb bearable in the midday heat.",
    howToGetThere:
      "Chùa Đục is on the eastern side of Lý Sơn, a few hundred meters from Cổng Tò Vò. From the ferry port, follow the main road toward An Hải and look for the turnoff toward Cổng Tò Vò - Chùa Đục is signed from the same road. By motorbike from the port, around 10-15 minutes.",
    whatToExpect:
      "The stone staircase rises steeply through the cliff vegetation before opening onto the pagoda terraces. The lower levels have altars set into the rock face. The upper terrace with the Quan Âm statue has open views over the sea and the garlic fields below. The complex is quiet most mornings outside peak season. There are no facilities at the pagoda - water and snacks should be carried.",
    travelTips:
      "Chùa Đục and Cổng Tò Vò are always visited together as part of the island's eastern loop - ride between them in a few minutes. The garlic fields are also in this area. Allocate around half a day for the eastern cluster (port - Cổng Tò Vò - Chùa Đục - garlic fields) before crossing to the northern cluster (Hang Câu - Núi Thới Lới).",
  },
  insights: {
    highlights: [
      "Climb steep stone steps to hilltop with panoramic island views and volcanic crater rim",
      "Ancient temple built into natural caves on mountainside with spiritual atmosphere",
      "Located near Cổng Tò Vò; excellent sunrise viewing from nearby beach",
    ],
    thingsToKnow: {
      crowds: "Minimal tourist crowds, especially on weekdays and during midday visits",
      difficulty: "Steep stone stairs and inclined paths require moderate fitness; dense vegetation and uneven terrain on upper sections",
      safety: "Visit during daytime only. Dangerous to stand near volcanic crater rim edge. Upper area has military outpost and can be disorienting; some visitors report getting lost",
      accessibility: "Road to temple passes through cemetery; narrow road difficult for cars; limited shade during midday",
      seasonal: null,
    },
    visitorTips: [
      "Visit late afternoon or early evening for better lighting and cooler temperatures than midday",
      "Park vehicles at food stalls near entrance; support local vendors selling island produce and water",
      "Combine visit with nearby Cổng Tò Vò and sunrise viewing from adjacent beach",
    ],
    faq: [
      { question: "Is it safe to visit alone?", answer: "Yes, but visit during daytime. Upper areas near volcanic rim are dangerous. Dense vegetation can cause disorientation on summit paths." },
      { question: "Will I see good views from the top?", answer: "Views of western island and Lý Sơn islet exist, but dense vegetation and overgrown trees now obstruct much of the panoramic volcanic crater vista." },
      { question: "How do I get there from Cổng Tò Vò?", answer: "Follow main road about 200 meters uphill from Cổng Tò Vò. Route passes through large cemetery. Park at food stalls near temple entrance." },
    ],
    sentiment: {
      positive: "Visitors appreciate spiritual atmosphere, historical significance, cultural importance to Lý Sơn island residents, unique cave temple architecture, and surrounding natural landscape",
      negative: "Vegetation overgrowth blocks expected panoramic views; infrastructure underdeveloped; narrow access road; limited shading; cemetery location may discomfort some visitors",
    },
  },
}
