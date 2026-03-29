import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const paradiseCave: Location = {
  slug: "paradise-cave",
  name: "Paradise Cave",
  provinces: ["quang-binh"],
  destination: "phong-nha-ke-bang",
  lat: "17.519727624952477",
  lng: "106.22333853972053",
  address: "Sơn Trạch, Bố Trạch, Quảng Bình",
  type: ["nature","cave"],
  categories: [],
  experiences: ["caving", "photography", "trekking"],
  tags: ["🪨 Largest Dry Cave in Asia", "📸 Photography", "🥾 Boardwalk", "✨ Formations"],
  bestTime: "Feb – Aug (dry season; most stable conditions)",
  entranceFee: "~250,000 VND + electric buggy ~50,000 VND (optional)",
  openingHours: "7:00 AM – 4:00 PM",
  mapUrl: "https://www.google.com/maps?q=17.519727624952477,106.22333853972053",
  streetView: {},
  heroImage: heroUrl("paradise-cave_eccstr"),
  gallery: ["paradise-cave_eccstr",],
  seoDescription:
    "Paradise Cave is the longest dry cave in Asia at 31km - a cathedral of white and gold stalactites up to 40 metres high, discovered only in 2005 and opened to visitors in 2010, with a 1km boardwalk through chambers so vast they dwarf everything inside them.",
  tips: [
    "The standard 1km boardwalk tour is impressive but the 7km extended tour (bookable separately, requires fitness) goes into chambers the day-tour crowds never reach",
    "The cave is consistently 18–20°C inside - bring a light layer regardless of outside temperature",
    "Photography is permitted but tripods are not - a phone with night mode or a camera with good high-ISO performance works better than flash",
    "Go on a weekday morning - Paradise Cave gets very busy with domestic tour groups on weekends, and the boardwalk becomes crowded",
    "The electric buggy from the entrance to the cave mouth saves 2km of walking in the heat - worth the small extra cost",
  ],
  content: {
    intro:
      "Paradise Cave - Thiên Đường in Vietnamese - was discovered by a local man in 2005 and surveyed by the British Cave Research Association the following year. What they found was the longest dry cave in Asia: 31km of passages, with chambers reaching 150 metres wide and 72 metres high, containing one of the densest concentrations of stalactite and stalagmite formations of any cave in the world. The cave remained closed to the public until 2010, when a 1km elevated boardwalk was installed through the first section. Even at 1km - barely 3% of the cave's total length - the scale is overwhelming. The formations are predominantly white and gold limestone, with some sections showing rare pink and red mineral deposits. The silence inside, broken only by dripping water and the sound of other visitors, adds to the cathedral atmosphere.",
    howToGetThere:
      "Paradise Cave is 18km southwest of Sơn Trạch village, inside Phong Nha-Kẻ Bàng National Park. From Sơn Trạch, take a motorbike or taxi along the national park road - the journey takes about 25–30 minutes. An entrance ticket booth is at the park gate; from there, an optional electric buggy runs 2km to the cave mouth, or it's a 25-minute walk through the forest. Most travellers combine Paradise Cave with Phong Nha Cave or Dark Cave in the same day, as all three are within the same national park area.",
    whatToExpect:
      "From the cave entrance, an elevated wooden boardwalk leads 1km into the cave interior, descending gradually through three main chambers. The first chamber opens immediately into a vast space - the ceiling disappears upward and the boardwalk looks miniature against the surrounding formations. Stalactites hang in curtains and columns from the ceiling; stalagmites rise from the cave floor in clusters, some reaching 15–20 metres. The lighting is carefully positioned to highlight formations without overexposing the space. The deepest point of the standard tour is about 1km in, where the boardwalk ends at a platform overlooking the continuing cave passage - the remaining 30km stretches into darkness beyond. The return is via the same boardwalk.",
    travelTips:
      "Paradise Cave is the most visually spectacular of the accessible Phong Nha caves - larger and more dramatic than Phong Nha Cave itself, though it lacks the underground river experience. The 1km boardwalk is suitable for all fitness levels and takes about 45–60 minutes. The 7km extended tour is available for small groups with advance booking through the national park office - it requires good fitness, a headlamp, and goes into sections of the cave that have almost no visitor infrastructure. For travellers who want the standard experience, the 1km tour is the right choice; for serious cave enthusiasts, the 7km extension is one of the best caving experiences in Southeast Asia outside of Son Doong itself.",
  },
}
