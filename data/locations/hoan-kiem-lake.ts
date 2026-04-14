import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const hoanKiemLake: Location = {
  slug: "hoan-kiem-lake",
  name: "Hoan Kiem Lake",
  provinces: ["ha-noi"],
  destination: "ha-noi",
  lat: "21.027833338357237",
  lng: "105.85226838963871",
  address: "Hồ Hoàn Kiếm, Hoàn Kiếm, Hà Nội",
  type: ["lake", "landmark", "attraction"],
  categories: [],
  experiences: ["walking-tour", "culture", "history", "photography"],
  tags: ["🐢 Turtle Lake", "🏙️ Hanoi Heart", "🌅 Morning Walks", "🏯 Ngoc Son Temple"],
  bestTime: "Oct - Apr (cool dry season; weekend pedestrian zone creates the best atmosphere)",
  bestMonths: [10, 11, 12, 1, 2, 3, 4],
  entranceFee: "Free (lake perimeter); Ngoc Son Temple entrance ~30,000 VND",
  openingHours: "Open 24 hours; weekend pedestrian zone Fri evening - Sun night",
  mapUrl: "https://www.google.com/maps?q=21.027833338357237,105.85226838963871",
  streetView: { embedUrl: "https://www.google.com/maps/embed?pb=!4v1776182112375!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQzd6LUhBWlE.!2m2!1d21.02847425615956!2d105.8525795258783!3f65.11314800136046!4f-26.60861371689785!5f0.7820865974627469", },
  heroImage: heroUrl("hoan-kiem-lake_zetimd"),
  gallery: [
    "hoan-kiem-lake-8_pashe6",
    "hoan-kiem-lake-7_imbvne",
    "hoan-kiem-lake-2_abfidz ",
    "hoan-kiem-lake-5_k8seww",
    "hoan-kiem-lake-6_xnrsel",
    "hoan-kiem-lake_zetimd",
    "hoan-kiem-lake-3_bvoyjs",
    "hoan-kiem-lake_zetimd",
  ],
  seoDescription:
    "Hoan Kiem Lake is the symbolic heart of Hanoi - a scenic urban lake in the Old Quarter surrounded by shaded walkways, French colonial buildings, and the legendary Ngoc Son Temple, home to Vietnam's founding myth of the restored sword.",
  tips: [
    "Visit on a Friday evening or weekend when the surrounding streets become a pedestrian zone - the transformation of the area is dramatic and locals come out in large numbers",
    "Early morning (5:30-7:00 AM) is when Hanoians use the lake for exercise - outdoor aerobics classes, badminton, tai chi - the most authentic time to visit",
    "The Turtle Tower on the small island in the lake centre cannot be accessed but is the most photographed element - best shot from the south end of the lake",
    "The red Huc Bridge leading to Ngoc Son Temple is one of the most iconic images in Hanoi - morning light from the east side of the lake gives the best angle",
    "The lake perimeter walk takes about 20-25 minutes at a leisurely pace - combine with a coffee at one of the lakeside cafes for a longer visit",
  ],
  content: {
    intro:
      "Hoan Kiem Lake - Lake of the Restored Sword - sits at the geographical and symbolic centre of Hanoi, occupying a 12-hectare basin in the Hoàn Kiếm district surrounded by the city's most historically significant streets. The lake's name derives from a 15th-century legend in which Emperor Lê Lợi, having used a magical sword to drive out Ming Chinese occupiers, returned the sword to a giant golden turtle in the lake. The turtle - the Hồ Gươm soft-shell turtle, a critically endangered species - was a real animal observed in the lake for centuries, with the last confirmed sighting occurring before the death of the final known individual in 2016. The lake functions as Hanoi's primary public living room: morning exercise ground, weekend gathering place, navigation landmark, and the backdrop against which the city's public life has unfolded for centuries.",
    howToGetThere:
      "Hoan Kiem Lake is the central landmark of Hanoi's Old Quarter and within walking distance of virtually every hotel in the Hoàn Kiếm district. From the main backpacker area around Tạ Hiện street, the lake is a 5-minute walk south. The lake is the primary navigation reference point for the entire Old Quarter - all directions in central Hanoi are given relative to it.",
    whatToExpect:
      "The lake perimeter is a continuous shaded walkway lined with trees, benches, and views across the water to the Turtle Tower and Ngoc Son Temple. The northern end connects via the red Huc Bridge to Ngoc Son Temple island. The surrounding streets change character dramatically between weekday and weekend - on Friday evenings through Sunday nights, the roads around the lake are closed to traffic and become a pedestrian zone filled with street food, street performers, families, and visitors. The weekend atmosphere is among the most enjoyable public spaces in Vietnam.",
    travelTips:
      "Hoan Kiem Lake is best experienced at multiple times of day rather than as a single visit - the morning exercise culture, the midday tourist activity, and the weekend evening pedestrian zone are three completely different experiences of the same place. The lake also functions as the best orientation point for first-time visitors to Hanoi - spending an hour walking the perimeter on arrival gives a reliable mental map of the Old Quarter. The Ngoc Son Temple visit adds meaningful historical context to the lake's legend and is worth the modest entrance fee.",
  },
}
