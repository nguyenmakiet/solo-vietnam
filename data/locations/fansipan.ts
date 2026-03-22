import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const fansipan: Location = {
  slug: "fansipan",
  name: "Fansipan",
  provinces: ["lao-cai"],
  destination: "sapa",
  lat: "22.303457926709047",
  lng: "103.77517218526022",
  address: "Hoàng Liên, Sa Pa, Lào Cai",
  type: "nature",
  experiences: ["trekking", "cable-car", "photography"],
  tags: ["🏔️ Rooftop of Indochina", "🚡 Cable Car", "🥾 Trekking", "📸 Photography"],
  bestTime: "Sep – Nov or Mar – May (clear skies, flowers in bloom)",
  entranceFee: "Cable car + funicular: ~800,000 VND round-trip. Hiking: free (permit required)",
  openingHours: "Cable car: 7:30 AM – 5:30 PM",
  mapUrl: "https://maps.google.com/?q=22.30317,103.77638",
  heroImage: heroUrl("fansipan_plpijw"),
  gallery: [
    "fansipan4_bgtdiz",
    "fansipan2_hck8x7",
    "fansipan5_sgsij0",
  ],
  seoDescription:
    "Fansipan - the Roof of Indochina at 3,147m - is Vietnam's highest peak, rising above Sa Pa's clouds in the Hoàng Liên Sơn range. Reach the summit by cable car in 15 minutes or conquer it on a 2–3 day trek through ancient forests.",
  tips: [
    "Go on a weekday and arrive before 9 AM - the summit gets extremely crowded on weekends and holidays",
    "Bring a warm jacket regardless of season - the summit is typically 10–15°C cooler than Sa Pa town, and wind chill makes it feel colder",
    "Take the funicular up and walk the 600 steps down - the descent passes the gardens, pagodas, and the Great Buddha statue",
    "If you want to hike, the Trạm Tôn pass route (11km, 1 day) is the most accessible - still book a licensed guide from Sa Pa",
    "The 'sea of clouds' effect is most common in early morning from October to December - check the forecast the night before",
  ],
  content: {
    intro:
      "At 3,147 metres, Fansipan is the highest point in Vietnam and all of Indochina - earning it the nickname 'Roof of Indochina'. It rises from the Hoàng Liên Sơn range inside Hoàng Liên National Park, 9km southwest of Sa Pa town. For most of its history, the summit was a gruelling 2–3 day trek through dense cloud forest, accessible only to fit hikers with a licensed guide. Since 2016, a world-record cable car - the longest three-rope gondola on earth at 6.3km - has made the summit reachable in 15 minutes. Both options remain valid: the cable car for accessibility and efficiency, the trek for genuine adventure and solitude. The summit complex is built around Buddhist and spiritual symbolism, with pagodas, a massive stupa, a Guanyin statue, and the Great Buddha at 1,600m - making Fansipan as much a pilgrimage as a nature experience.",
    howToGetThere:
      "The cable car departs from Sun World Fansipan Legend complex at the edge of Sa Pa town - a short taxi or motorbike ride from the town centre. From Sapa Station (1st floor of Sun Plaza), take the Muong Hoa funicular (6 min) to Hoàng Liên Station, then board the cable car to the summit (15 min). For trekking, the most common starting point is Trạm Tôn Pass on Highway 4D, about 15km from Sa Pa town by motorbike - guides and permits can be arranged through Sa Pa travel agencies.",
    whatToExpect:
      "The cable car ride delivers aerial views over terraced fields, forested ridges, and often a sea of clouds below. At the top station (2,800m), you can take a second funicular or climb 600 steps to reach the true summit at 3,147m. The summit area has photo platforms, a metal Fansipan marker, and sweeping views of the Hoàng Liên range on clear days. The descent via steps passes through a beautifully landscaped spiritual complex. Trekkers experience dense mossy forests, bamboo groves, and at higher elevations, rhododendrons and subalpine scrub - with overnight camps at 2,200m and 2,800m.",
    travelTips:
      "The cable car is efficient but can feel like a theme park on busy days - long queues, crowds at the top, and a commercialised summit complex. If you have 3 days to spare and reasonable fitness, the trek is infinitely more rewarding and far less visited. Either way, do not underestimate the cold: the summit is a different climate from Sa Pa. For the best photography, aim for the first cable car of the day in autumn when the cloud inversions are at their most dramatic.",
  },
}
