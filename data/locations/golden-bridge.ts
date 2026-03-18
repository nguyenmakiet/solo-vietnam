import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const goldenBridge: Location = {
  slug: "golden-bridge",
  name: "Golden Bridge",
  provinces: ["da-nang"],
  destination: "ba-na-hills",
  lat: "15.994957886478177",
  lng: "107.996595959818",
  address: "Bà Nà Hills, Hoà Ninh, Hoà Vang, Đà Nẵng",
  type: "attraction",
  experiences: ["photography", "walking-tour"],
  tags: ["🌉 Giant Stone Hands", "📸 Most Photographed in Vietnam", "☁️ Above the Clouds", "🌅 Panoramic Views"],
  bestTime: "Mar – Aug (clearest views; avoid Nov – Jan when fog can obscure the hands)",
  entranceFee: "Included in Bà Nà Hills ticket (~1,500,000 VND)",
  openingHours: "7:30 AM – 9:00 PM (within Bà Nà Hills complex)",
  mapUrl: "",
  heroImage: heroUrl("golden-bridge-ba-na-hill2_ft8pzk"),
  gallery: [
    "golden-bridge-ba-na-hill3_e1xnkp",
    "golden-bridge-ba-na-hill4_ioflnr",
    "golden-bridge-ba-na-hill_f75gzs",
  ],
  seoDescription:
    "The Golden Bridge is Vietnam's most photographed structure — a 150-metre pedestrian walkway held by two giant weathered stone hands emerging from the mountain at 1,400 metres, with views over the Đà Nẵng coastline and the cloud layer below.",
  tips: [
    "Go to the Golden Bridge first thing after arriving at the summit — by 10 AM it's packed with tour groups and getting a clean shot without people is nearly impossible",
    "Overcast days actually produce better photos than full sun — the diffused light eliminates harsh shadows on the hands and gives the bridge an ethereal quality",
    "The bridge is 150 metres long — walk to the far end for the best view back toward the hands with the mountain behind",
    "The hands are made of wire mesh covered in fibreglass sculpted to look like ancient stone — the ageing effect is convincing in person",
    "Bring a wide-angle lens or use portrait mode on your phone — standard focal lengths struggle to fit both hands and the full bridge in a single frame",
  ],
  content: {
    intro:
      "The Golden Bridge opened in June 2018 and within weeks had become one of the most shared travel images in the world — a slender golden walkway emerging from dense mountain forest, apparently held aloft by two enormous stone hands weathered to look ancient. The bridge extends 150 metres from the mountainside at an elevation of approximately 1,400 metres, suspended above a steep forested slope, with views on clear days extending over the entire Đà Nẵng coastline and out to the South China Sea. The design is entirely fabricated — the hands are wire mesh and fibreglass, deliberately aged to suggest they have held the bridge for centuries — but the visual effect is genuinely striking and the engineering required to build a pedestrian bridge at this elevation and angle was substantial. It was designed by TA Landscape Architecture and has since won multiple international design awards.",
    howToGetThere:
      "The Golden Bridge is only accessible via the Bà Nà Hills complex — there is no independent route. From the upper cable car terminal at Bà Nà Hills, follow the path through the French Village approximately 15 minutes uphill to the bridge entrance. Signage within the complex is clear. The Bà Nà Hills complex is 25km west of Đà Nẵng city centre; most visitors arrive by taxi, Grab, or hotel shuttle to the base cable car station.",
    whatToExpect:
      "The bridge deck is gold-painted steel with glass panel sections in the floor, giving views straight down to the forested slope below. The two hands emerge from the mountainside at either end of the bridge — each approximately 20 metres tall, sculpted to look like rough ancient stone. The walkway is wide enough for four people across and has a low railing on both sides. On clear days, the views from the far end of the bridge — coastline, city, islands, and the cloud layer several hundred metres below — are exceptional. On foggy days, the bridge sits in or above the cloud layer, which creates a completely different and equally photogenic atmosphere. The surrounding area has gardens and viewpoints.",
    travelTips:
      "The Golden Bridge is the reason most international visitors go to Bà Nà Hills — the French Village, theme park, and other attractions are secondary for most travellers. The bridge itself takes 15–20 minutes to walk at a leisurely pace. The crowd management is the main challenge: tour groups from Đà Nẵng and Hội An arrive in waves between 9 AM and 2 PM, making a quiet experience difficult. The first cable car of the day (departing around 7:30 AM) gives the best chance of having the bridge with manageable crowds. The ticket price for Bà Nà Hills is the highest of any single attraction in central Vietnam — evaluate whether the Golden Bridge specifically is worth it, since it's accessible only as part of the full complex ticket.",
  },
}
