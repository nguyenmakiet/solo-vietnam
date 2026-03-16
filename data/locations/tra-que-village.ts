import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const traQueVillage: Location = {
  slug: "tra-que-village",
  name: "Trà Quế Village",
  provinces: ["quang-nam"],
  destination: "hoi-an",
  lat: "15.902579357686461",
  lng: "108.33718030263948",
  address: "Trà Quế, Cẩm Hà, Hội An, Quảng Nam",
  type: ["town", "cultural"],
  experiences: ["culture", "food", "cycling", "photography", "walking-tour"],
  tags: ["🌿 Herb Village", "👨‍🍳 Cooking Class", "🚲 Cycling", "📸 Photography"],
  bestTime: "Feb – Apr or Sep – Nov (cool and dry, herbs at their most fragrant)",
  entranceFee: "Free to enter; cooking class ~200,000–350,000 VND",
  openingHours: "Open daily from 7:00 AM",
  mapUrl: "",
  heroImage: heroUrl("tra-que-village-hero_placeholder"),
  gallery: [],
  seoDescription:
    "Trà Quế is a 200-year-old herb farming village 3km from Hội An Ancient Town — a dense patchwork of organic herb plots tended by hand using traditional methods, where visitors can join farmers for a morning, learn to cook Vietnamese dishes, and eat lunch in the fields.",
  tips: [
    "Book a cooking class that starts in Trà Quế and includes the morning farm work before moving to the kitchen — working the soil and harvesting herbs before cooking them is the complete experience",
    "Arrive by bicycle — the 3km ride from Hội An passes through coconut groves and rice paddies and is one of the best easy cycles near the Ancient Town",
    "Early morning (7–8 AM) is when the farmers are most active and the light on the herb plots is best for photography",
    "The village grows over 20 varieties of herbs specifically for Hội An's cuisine — white rose dumplings, Cao Lầu noodles, and bánh mì all use herbs sourced here",
    "Visit in February–March when the village holds its traditional herb festival — one of the more genuine local festivals in the Hội An area",
  ],
  content: {
    intro:
      "Trà Quế is a herb farming village that has supplied Hội An's kitchens for over 200 years — a compact patchwork of irrigated plots growing more than 20 varieties of herbs and vegetables using organic methods and seaweed from the Thu Bồn River as fertiliser. The village sits between a small lagoon and the river, 3km north of Hội An Ancient Town, and has been farmed continuously by the same families across multiple generations. The herbs grown here — rau răm, húng quế, tía tô, kinh giới, and others — are the aromatic foundation of Hội An's most iconic dishes: Cao Lầu, White Rose dumplings, and Mì Quảng. Unlike many 'cultural villages' in Vietnam that have been staged for tourism, Trà Quế is a working farm first — the tourism activity, mainly cooking classes and farm experience sessions, is layered onto an agricultural operation that would exist regardless.",
    howToGetThere:
      "Trà Quế is 3km north of Hội An Ancient Town, easily reached by bicycle (15–20 minutes), motorbike, or on foot. The route from town follows Hai Bà Trưng Street north, crossing the Thu Bồn River tributary and continuing through coconut palm groves. Bicycles are widely available for rent in Hội An for 50,000–80,000 VND per day. Cooking class operators typically offer pickup from Hội An hotels if cycling isn't preferred. The village has no formal entrance gate — the herb plots begin immediately off the road.",
    whatToExpect:
      "Visitors can walk freely through the herb plots and observe or join the farmers at work — transplanting seedlings, weeding, harvesting, and applying the seaweed fertiliser that gives Trà Quế herbs their distinctive intensity. Cooking classes run by local families typically begin with a farm tour and hands-on planting session, followed by a market visit or ingredient gathering, and a cooking lesson for 3–4 traditional Hội An dishes, finishing with a meal of everything prepared. The village itself is small and visually beautiful — rows of herbs in different shades of green, farmers in conical hats, the lagoon visible beyond the plots.",
    travelTips:
      "Trà Quế works best as a half-day activity combined with cycling — ride out in the morning, do a cooking class or farm visit, and ride back through a different route via the rice fields. It's one of the most genuinely local experiences available near Hội An, and the cooking classes here — taught in the village by farming families rather than in a dedicated cooking school — are more authentic than the tourist-oriented cooking schools in town. The herbs and vegetables used are grown metres from where you cook them, which makes a noticeable difference in flavour.",
  },
}
