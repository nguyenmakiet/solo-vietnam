import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const sungSotCave: Location = {
  slug: "sung-sot-cave",
  name: "Sung Sot Cave",
  provinces: ["quang-ninh"],
  destination: "ha-long",
  lat: "20.8442292975383",
  lng: "107.09146231299174",
  address: "Đảo Bồ Hòn, Vịnh Hạ Long, Quảng Ninh",
  type: ["nature","cave"],
  categories: [],
  experiences: ["caving", "photography"],
  tags: ["🪨 Largest Cave in Ha Long", "📸 Photography", "🧗 Hiking", "🌊 UNESCO Heritage"],
  bestTime: "Oct – Dec or Apr – Jun (low crowds, comfortable temperatures)",
  entranceFee: "~300,000 VND (included in most cruise packages)",
  openingHours: "7:30 AM – 4:30 PM (accessible by cruise only)",
  mapUrl: "https://maps.google.com/?q=20.8810,107.1140",
  streetView: {},
  heroImage: heroUrl("sung-sot-cave-hero_placeholder"),
  gallery: [
  ],
  seoDescription:
    "Sung Sot Cave - the largest and most spectacular limestone grotto in Ha Long Bay - hides two vast cathedral chambers, surreal stalactite formations, and a panoramic viewpoint over the bay, all inside Bồ Hòn Island in the heart of the UNESCO World Heritage Site.",
  tips: [
    "Schedule your visit before 9 AM or after 3 PM - between 10 AM and 2 PM the cave gets genuinely overcrowded with tour groups",
    "After exiting the cave, climb a little further up for the panoramic viewpoint over the bay - most visitors skip it and miss one of the best views in Ha Long",
    "Don't rush the second chamber - it's the size of a football stadium and the stalactite formations near the back are the most dramatic in the cave",
    "Wear non-slip shoes - the stone walkway inside is smooth and gets slippery in humidity",
    "The cave is lit with coloured LEDs which look tacky in photos - switch to natural/daylight white balance and shoot near the entrance for the best results",
  ],
  content: {
    intro:
      "Sung Sot - literally 'Surprise' - was named by a French scientist in 1901 who squeezed through a narrow gap in the limestone and emerged into a chamber so vast he could only exclaim 'Grotte de la Surprise.' It's the largest cave in Ha Long Bay, covering over 10,000 square metres across two main chambers on Bồ Hòn Island, 14km from Bãi Cháy pier. The first chamber is intimate - a 300-square-metre waiting room with a shallow freshwater lake and a domed ceiling streaked with stalactites. The passage beyond opens without warning into the second chamber: nearly 30 metres high, wide enough to hold a thousand people, and filled with rock formations that local guides point out as horses, swords, and generals from the legend of Thánh Gióng - the mythical warrior who left his weapons here after defeating Chinese invaders.",
    howToGetThere:
      "Sung Sot Cave is only accessible by boat - there's no independent way to reach it from shore. It's included on Ha Long Bay sightseeing Route 2, departing from Tuần Châu or Hạ Long International Passenger Port. Day cruise tickets for Route 2 typically cost 290,000 VND for the bay entrance fee plus around 200,000 VND for the boat, with the cave entrance fee on top. Most 1-night and 2-night overnight cruises include Sung Sot Cave in their standard itinerary. The cave is about 1 hour by boat from Tuần Châu pier.",
    whatToExpect:
      "From the boat dock on Bồ Hòn Island, a path of over 100 stone steps winds up through lush vegetation before reaching the cave entrance at 25 metres above sea level. Inside, a lit 800-metre walkway guides visitors through both chambers - the total visit takes 45–60 minutes including the exit climb to the viewpoint. The ceiling of the second chamber reaches 30 metres at its highest point. An exit path loops back down the island's other side with views of the bay below. The scale of the second chamber genuinely surprises most visitors, even those who've been to other Ha Long caves.",
    travelTips:
      "Sung Sot is Ha Long Bay's most visited cave and the crowds reflect that - arriving in the midday window means sharing the path with dozens of tour groups simultaneously. Cruise itineraries that schedule Sung Sot early in the morning or late afternoon give a noticeably better experience. If you're choosing between Ha Long Bay caves, Sung Sot's second chamber is uniquely large and worth prioritising - it's in a different scale to the other caves on the bay.",
  },
}
