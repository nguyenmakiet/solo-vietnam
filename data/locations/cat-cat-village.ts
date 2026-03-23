import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const catCatVillage: Location = {
  slug: "cat-cat-village",
  name: "Cat Cat Village",
  provinces: ["lao-cai"],
  destination: "sapa",
  lat: "22.33089349327537", 
  lng: "103.83069280337017",
  address: "San Sả Hồ, Sa Pa, Lào Cai",
  type: ["cultural","town"],
  categories: [],
  experiences: ["culture", "history", "photography", "walking-tour"],
  tags: ["🎎 H'mong Culture", "💧 Waterfall", "📸 Photography", "🚶 Walking Trail"],
  bestTime: "Mar – May or Sep – Nov (best light, comfortable weather)",
  entranceFee: "~90,000 VND",
  openingHours: "7:00 AM – 6:00 PM",
  mapUrl: "https://maps.google.com/?q=22.3301,103.8325",
  heroImage: heroUrl("cat-cat-village2_l6tzcr"),
  gallery: [
    "cat-cat-village_jla31i",
    "cat-cat-village4_u44m5s",
    "cat-cat-village3_jjbkqt ",
  ],
  seoDescription:
    "Cat Cat Village sits 2.5km below Sa Pa town in a steep valley - an original Black H'mong settlement with traditional indigo weaving, a 100m waterfall, and a walking trail that gives an easy introduction to highland village life.",
  tips: [
    "Go early (7–8 AM) or late afternoon (4–5 PM) - midday crowds make the narrow paths uncomfortably busy, especially on weekends",
    "The waterfall at the bottom of the valley is genuinely impressive and worth the walk down - factor in the climb back up",
    "Women weaving and selling indigo textiles are the real craftspeople of the village - buying directly from them is the most ethical way to take something home",
    "The French once built a small hydro station in the village during the colonial era - the ruins are still visible near the waterfall",
    "Wear proper shoes - the path is paved with steps but steep, uneven, and slippery when wet",
  ],
  content: {
    intro:
      "Cat Cat is the closest traditional village to Sa Pa town - just 2.5km down a steep valley, making it the easiest and most visited H'mong settlement in the area. It's a Black H'mong village that has existed for generations, and despite heavy tourist footfall, it retains genuine cultural substance: women in traditional indigo-dyed dress, hand-loomed textiles, terraced fields cut into the hillside, and a 100m waterfall that powered a French-era hydroelectric station. The village path is a loop of about 3km through the settlement, down to the waterfall, and back - walkable in 1.5–2 hours without rushing.",
    howToGetThere:
      "Cat Cat Village is 2.5km from Sa Pa town centre, easily reachable on foot downhill (30 minutes), by motorbike, or by xe ôm. The entrance is clearly signposted from Sa Pa's main road. There is an entrance fee booth at the top of the village path. Most visitors walk down and take a xe ôm back up to avoid the steep return climb, though fit walkers find the uphill manageable in 30–40 minutes.",
    whatToExpect:
      "The path descends through the village past H'mong households, craft stalls, and vegetable gardens before reaching the valley floor and waterfall. The route is well-maintained and wide enough to handle the tourist flow, but still scenic - framed by terraced fields above and forested slopes below. Local women sell hand-embroidered textiles, hemp cloth bags, and jewellery along the path. The waterfall itself drops through a gorge and is photogenic in all seasons. A small suspension bridge at the base adds to the drama.",
    travelTips:
      "Cat Cat is Sa Pa's most accessible village introduction - good for families, first-time visitors, or anyone with limited trekking ability. It's significantly more commercialised than Lao Chải or Tả Van deeper in the valley, but that doesn't make it inauthentic - the H'mong families here genuinely live and work here. If you want deeper cultural immersion, use Cat Cat as a warm-up and continue trekking down into Muong Hoa Valley toward Lao Chải and Tả Van.",
  },
}
