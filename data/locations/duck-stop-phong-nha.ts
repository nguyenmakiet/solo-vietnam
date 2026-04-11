import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const duckStopPhongNha: Location = {
  slug: "duck-stop-phong-nha",
  name: "The Duck Stop",
  provinces: ["quang-binh"],
  destination: "phong-nha-ke-bang",
  lat: "17.604600505245507",
  lng: "106.36632612569426",
  address: "Sơn Trạch, Bố Trạch, Quảng Bình",
  type: ["attraction", "town"],
  categories: [],
  experiences: ["food", "nightlife", "culture", "walking-tour"],
  tags: ["🍺 Traveller Bar", "🌅 Sunset River Views", "🍜 Local Food", "🎵 Live Music"],
  bestTime: "Year-round; evenings only",
  bestMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  entranceFee: "Free",
  openingHours: "4:00 PM – midnight",
  mapUrl: "https://www.google.com/maps?q=17.604600505245507,106.36632612569426",
  streetView: {},
  heroImage: heroUrl("duck-stop-phong-nha-hero_placeholder"),
  gallery: [],
  seoDescription:
    "The Duck Stop is Phong Nha's best-known traveller bar - a riverside terrace on the Son River in Sơn Trạch village where solo travellers, guides, and caving operators converge in the evening, with cold beer, local food, sunset views, and the best information on what's actually worth doing in the national park.",
  tips: [
    "Arrive by 5 PM for a riverside table at sunset - the Son River light at dusk, with the karst mountains behind, is one of the best evening views in central Vietnam",
    "The staff and regulars here know the national park better than most guidebooks - ask about current cave conditions, which tours are worth it, and what's changed recently",
    "The food is a mix of Western comfort food and Vietnamese staples - the local dishes are better value and better quality than the backpacker menu",
    "This is the best place in Phong Nha to find other travellers for sharing cave tour costs - group tours to Paradise Cave and Dark Cave are significantly cheaper per person",
    "The Duck Stop also runs their own tours - ask at the bar for current offerings, as they often have access to smaller group sizes than the main operators",
  ],
  content: {
    intro:
      "The Duck Stop has been the social hub of Sơn Trạch village - the base town for Phong Nha-Kẻ Bàng National Park - for over a decade, evolving from a simple guesthouse bar into the de facto information centre and gathering point for independent travellers visiting the caves. It sits on the bank of the Son River with a terrace that faces west, giving sunset views over the water and the karst ridgeline beyond. The bar is run by a Vietnamese-Australian family and has maintained a genuine traveller atmosphere rather than becoming a polished tourist operation - the clientele on any given evening includes solo motorbike travellers, cave expedition guides, researchers, and the kind of long-term Vietnam travellers who end up staying in Phong Nha longer than planned.",
    howToGetThere:
      "The Duck Stop is in central Sơn Trạch village, 50km north of Đồng Hới on the Son River bank. Most accommodation in Sơn Trạch is within walking distance. From Đồng Hới, take a bus or taxi to Sơn Trạch (about 1 hour) - the Duck Stop is one of the first things travellers find in the village. The bar is on the main street running along the river; the entrance and terrace face the water.",
    whatToExpect:
      "The bar has indoor and outdoor seating, with the riverside terrace being the main reason to come. Cold beer - Huda, Larue, and imported options - is the primary offering, alongside a food menu that runs from bánh mì and phở to burgers and pasta. The atmosphere in the evening is reliably sociable - solo travellers meet each other here, guides offer informal advice, and the bar functions as a noticeboard for current cave conditions, tour availability, and what's happening in the national park. Live music occurs occasionally but not on a fixed schedule. The views from the terrace at sunset and in the early evening, with the river traffic and the karst mountains in the background, are genuinely excellent.",
    travelTips:
      "The Duck Stop is the most useful stop in Phong Nha for independent travellers - more practical information is exchanged here in one evening than can be found in most guidebooks. The staff are experienced at helping people plan their cave itinerary, find tour partners to share costs, and understand what the different cave experiences actually involve. It's also simply a pleasant place to end a day of caving and jungle trekking. For travellers on their first night in Phong Nha, starting at the Duck Stop before planning the next day's activities is the most efficient approach.",
  },
  insights: {
    highlights: [
      "Interactive duck feeding experience where you become a 'duck leader' and hand-feed ducks in water",
      "Family-run operation with knowledgeable guides; includes farm tour, Vietnamese pancakes, and drink",
      "Original Duck Stop location in Phong Nha with better service than copycat operations",
    ],
    thingsToKnow: {
      crowds: "Visit late afternoon or outside tour group hours for a more intimate experience and better TikTok-style photos",
      difficulty: null,
      safety: null,
      accessibility: "Wear shorts as you will get wet and dirty during duck interaction. Provided shoes protect your footwear",
      seasonal: "Open during lunar new year when most attractions close. Best during dry weather, but possible in rain",
    },
    visitorTips: [
      "Arrange Grab ride in advance; drivers rarely travel to this area. Ask driver to wait or arrange return ride upfront",
      "Base package 100k VND includes drink, pancake, and duck experience. Optional 150k VND adds buffalo feeding and fishing",
      "Arrive without tour groups for better photos. Staff provide photos and videos during your visit",
    ],
    faq: [
      { question: "How much does it cost and what's included?", answer: "100,000 VND includes duck feeding experience, Vietnamese pancake, and drink. 150,000 VND adds buffalo and fishing activities. Staff provide shoes and wash facilities." },
      { question: "How do I get there from Phong Nha town?", answer: "Take Grab, taxi, or bike. Grab rarely serves the area, so negotiate driver to wait or arrange return trip beforehand. Cycling from town is flat and easy." },
      { question: "Is this the real Duck Stop or a copy?", answer: "This is the original Duck Stop in Phong Nha, which reviewers recommend over copycat locations. Better service and animal care standards." },
    ],
    sentiment: {
      positive: "Uniformly praised as hilarious, memorable, and exceptional value. Visitors highlight genuine friendliness, excellent animal care, and unexpected entertainment quality",
      negative: null,
    },
  },
}
