import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const langbiangMountain: Location = {
  slug: "langbiang-mountain",
  name: "Langbiang Mountain",
  provinces: ["lam-dong"],
  destination: "da-lat",
  lat: "12.048102933200623", 
  lng: "108.44188630307653",
  address: "Lạc Dương, Lâm Đồng",
  type: "mountain",
  categories: [],
  experiences: ["trekking", "photography", "wildlife", "camping"],
  tags: ["🏔️ Highest Peak near Đà Lạt", "🥾 Trekking", "📸 Sunrise Views", "🌿 K'Ho Culture"],
  bestTime: "Nov – Apr (dry season, clearest summit views; sunrise trekking year-round)",
  entranceFee: "~50,000 VND park entry; jeep to mid-station: ~150,000 VND",
  openingHours: "5:30 AM – 5:00 PM",
  mapUrl: "https://www.google.com/maps?q=12.048102933200623,108.44188630307653",
  heroImage: heroUrl("langbiang-mountain-da-lat2_dlyoss"),
  gallery: [
    "langbiang-mountain-da-lat4_zcmgfq",
    "langbiang-mountain-da-lat3_cortj8",
    "langbiang-mountain-da-lat_mhfmzt",
  ],
  seoDescription:
    "Langbiang Mountain is the highest peak in the Đà Lạt plateau at 2,167 metres - a twin-peaked massif rising above pine forest north of the city, home to the K'Ho ethnic minority, with a summit trek rewarded by panoramic views over the entire Central Highlands.",
  tips: [
    "Start the summit trek before 6 AM to reach the top for sunrise - the light on the surrounding peaks and the cloud inversions in the valleys below are the best the mountain offers",
    "The jeep ride to the mid-station (1,950m) cuts 2 hours off the trek - worthwhile if mày only want the summit view without the full climb",
    "The full trek from base to summit takes 3–4 hours return - wear proper shoes, the trail is steep and muddy after rain",
    "The K'Ho cultural village at the base has traditional longhouses and craft demonstrations - worth 30 minutes before or after the trek",
    "Bring a warm layer - the summit is consistently 8–12°C cooler than Đà Lạt town, and wind at the peak makes it feel colder",
  ],
  content: {
    intro:
      "Langbiang Mountain rises to 2,167 metres north of Đà Lạt, making it the highest accessible peak in the Central Highlands and the dominant landform visible from the city. The mountain has two peaks - the higher northern summit (2,167m) and the southern peak (2,124m) - both visible from Đà Lạt as a distinctive twin silhouette against the sky. The name comes from K'Ho legend: Lang and Biang were young lovers from feuding tribes whose deaths, according to the story, led their families to make peace - the mountain is named for them, and the legend is central to the cultural identity of the K'Ho people who have lived on the Đà Lạt plateau for centuries. The mountain is within Bidoup-Núi Bà National Park, one of the four biodiversity centres of Vietnam, with primary forest on the upper slopes that shelters significant populations of birds and mammals. The trek to the summit is the most popular mountain hike accessible from Đà Lạt.",
    howToGetThere:
      "Langbiang Mountain is 12km north of Đà Lạt city centre in Lạc Dương District. By motorbike, the base station is approximately 25 minutes from central Đà Lạt on Highway 723. Grab rides are available but return trips can be difficult to book from the remote base - motorbike is the more practical option. From the base station, visitors can trek on foot (3–4 hours return to the summit) or take a jeep to the mid-station at 1,950m and walk the final 30 minutes to the summit from there. Jeep tickets are purchased at the base.",
    whatToExpect:
      "The base area has a K'Ho cultural village with traditional longhouses, a small museum, and craft and food stalls. The trek begins at the base station and climbs through pine forest before transitioning to primary montane forest on the upper slopes. The trail is well-defined but steep - trekking poles are helpful on the descent. The summit plateau has a small observation platform and clear views (on good days) over the entire Đà Lạt plateau, the Bidoup range, and on exceptionally clear days, the distant coast. Cloud inversions in the valleys below the summit are common in the early morning, particularly in the dry season. The jeep mid-station has a cafe and restrooms.",
    travelTips:
      "Langbiang is the best full-day outdoor activity available from Đà Lạt - more demanding and more rewarding than Datanla Waterfall or Tuyền Lâm Lake. The sunrise trek is the recommended format: depart Đà Lạt by motorbike at 4:30–5:00 AM, arrive at the base by 5:30 AM, trek or jeep to the summit for sunrise at 6:00–6:30 AM. The experience of standing at 2,167 metres above a sea of clouds in the Đà Lạt plateau at dawn, before any other trekkers arrive, is one of the best mornings available in the Central Highlands. The full trek without the jeep is the more satisfying option for fit hikers - the forest on the lower slopes is beautiful and the sense of having earned the summit makes the view better.",
  },
}
