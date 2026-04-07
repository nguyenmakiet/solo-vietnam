import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const dalatRailwayStation: Location = {
  slug: "dalat-railway-station",
  name: "Đà Lạt Railway Station",
  provinces: ["lam-dong"],
  destination: "da-lat",
  lat: "11.941882324564023",
  lng: "108.45471880283058",
  address: "1 Quang Trung, Đà Lạt, Lâm Đồng",
  type: ["heritage", "attraction"],
  categories: [],
  experiences: ["history", "photography", "culture", "walking-tour"],
  tags: ["🚂 1938 French Colonial Station", "📸 Photography", "🏛️ Heritage Architecture", "🚃 Tourist Train"],
  bestTime: "Year-round; morning light is best for exterior photography",
  bestMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  entranceFee: "Free to enter; tourist train to Trại Mát: ~152,000 VND return",
  openingHours: "7:30 AM – 5:30 PM",
  mapUrl: "https://www.google.com/maps?q=11.941882324564023,108.45471880283058",
  streetView: {},
  heroImage: heroUrl("da-lat-railway-station2_kxpr5y"),
  gallery: [
    "da-lat-railway-station_pzn8hd",
    "da-lat-railway-station4_rmamp1",
    "da-lat-railway-station3_sj6ekh",
  ],
  seoDescription:
    "Đà Lạt Railway Station is the best-preserved French colonial railway station in Vietnam - a 1938 Art Deco building with a distinctive three-peaked roof, still operating a tourist train to the village of Trại Mát through pine forest and flower farms.",
  tips: [
    "The tourist train to Trại Mát departs when enough passengers are present (minimum 5) - arrive early morning for the best chance of a prompt departure",
    "The Linh Phước Pagoda in Trại Mát is the main reason to take the train - combine the train ride with a visit to the pagoda",
    "The station building's Art Deco interior - original wooden benches, vintage tiles, and the ticket windows - is worth 20 minutes even without taking the train",
    "The station clock tower and the three-peaked roof are the most photographed elements - best shot from the platform approach path in morning light",
    "The original Đà Lạt – Phan Rang rack-and-pinion railway (one of only 5 in the world) was destroyed during the wars and the tourist section is a fraction of the original line",
  ],
  content: {
    intro:
      "Đà Lạt Railway Station was built by the French in 1938 as the terminus of the Đà Lạt–Phan Rang railway - a remarkable mountain railway that included a 9km rack-and-pinion section to climb the 1,500-metre escarpment from the coast to the plateau. The station building is one of the finest examples of Art Deco architecture in Vietnam: a long low structure with a distinctive three-peaked roof meant to evoke the three peaks of Langbiang Mountain, yellow ochre walls, and original tiled interiors. The railway was severely damaged during the Vietnam War and the full line was never rebuilt. What operates today is a 7km tourist section from the station to Trại Mát village, running on original French-era track through pine forest and flower farms.",
    howToGetThere:
      "The station is 1km from Đà Lạt's central market on Quang Trung Street - easily walkable from most accommodation in the city centre. The tourist train to Trại Mát departs from the main platform when a minimum of 5 passengers is present; departure times are therefore irregular, with more frequent departures in the morning during peak season.",
    whatToExpect:
      "The station interior has original wooden ticket windows, period benches, vintage signage, and tiled floors - largely unchanged since 1938. A small display area shows historical photographs of the original Đà Lạt–Phan Rang railway. The tourist train uses vintage carriages on the 30-minute journey to Trại Mát through pine forest and agricultural land. Trại Mát village has Linh Phước Pagoda as the primary attraction, 5 minutes walk from the Trại Mát station.",
    travelTips:
      "The station is worth visiting as architecture even if mày don't take the train - the building is one of the most elegant colonial structures in the Central Highlands. The train to Trại Mát is a pleasant 30-minute ride primarily for the experience of travelling on a preserved colonial railway. Combine the train with Linh Phước Pagoda in Trại Mát for a half-morning excursion from central Đà Lạt.",
  },
}
