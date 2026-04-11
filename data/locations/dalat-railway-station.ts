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
  streetView: {embedUrl: "https://www.google.com/maps/embed?pb=!4v1775754093252!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRE9ucHpsTkE.!2m2!1d11.94137854276266!2d108.4542950599012!3f50.744024410119614!4f11.604244342107876!5f0.7820865974627469", },
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
  insights: {
    highlights: [
      "French colonial Art Deco architecture from the 1930s with three triangular peaks inspired by Lang Biang Mountains",
      "Tourist train ride to Trai Mat with live music (saxophone or violin) and complimentary warm artichoke tea",
      "Documentary room and vintage steam locomotives available for photos inside preserved train carriages",
    ],
    thingsToKnow: {
      crowds: "Can get busy with tour groups during peak times; visiting early morning or weekends may offer fewer crowds",
      difficulty: null,
      safety: null,
      accessibility: "Easy walk from Da Lat city center; accessible by Grab app; narrow road access to location",
      seasonal: null,
    },
    visitorTips: [
      "Book return train tickets 2 hours after arrival at Trai Mat to allow time exploring Linh Phuoc Pagoda and Trai Mat Town",
      "Bring earplugs if sensitive to loud saxophone/violin music played continuously during the train journey",
      "Step outside train doors for unique perspective views; visit early morning to avoid crowds and capture best photos",
    ],
    faq: [
      { question: "How much is the entrance fee and what does it include?", answer: "Entrance fee is 50,000 VND per person (increased from 5,000 VND). Includes access to station building, vintage train carriages, documentary room, and souvenir market. Train ride tickets are separate." },
      { question: "How long should I plan to spend at the station?", answer: "Allow 30 minutes for the station itself. Budget 2-3 hours total if taking the 30-minute round-trip train to Trai Mat and exploring Linh Phuoc Pagoda or Trai Mat Town." },
      { question: "Are trains running regularly and how do I book tickets?", answer: "Train schedules are limited; check timetables at station or book advance tickets through apps for potentially cheaper prices. Round-trip tickets cost approximately 124,000 VND (as of December 2025)." },
    ],
    sentiment: {
      positive: "Most visitors appreciate the historic French colonial architecture, vintage charm, and nostalgic atmosphere as a worthwhile cultural experience with good photo opportunities",
      negative: "Recent 10-fold entrance fee increase from 5,000 to 50,000 VND perceived as poor value; some report limited scenery on train route (residential areas and farming), run-down maintenance of grounds, and lack of staff assistance beyond ticket office",
    },
  },
}
