import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const sShapeRiceTerraces: Location = {
  slug: "s-shape-rice-terraces",
  name: "S-Shape Rice Terraces",
  provinces: ["thanh-hoa"],
  destination: "pu-luong",
  lat: "20.449345402727413", // TODO: verify
  lng: "105.15796254177532", // TODO: verify
  address: "Thành Lâm, Bá Thước, Thanh Hóa",
  type: ["nature", "landmark"],
  categories: ["iconic"],
  experiences: ["photography", "walking-tour"],
  tags: ["🌾 S-Shaped Paddy", "📸 Iconic Viewpoint", "🌅 Sunset Spot", "🏞️ Pù Luông Highlight"],
  bestTime: "Late May - early Jun (green rice) and late Sep - early Oct (golden harvest); avoid Jul - Aug after harvest when fields are bare",
  bestMonths: [5, 6, 9, 10],
  entranceFee: "Free",
  openingHours: "Open 24/7 (best in golden hour)",
  mapUrl: "https://www.google.com/maps?q=20.449345402727413,105.15796254177532",
  streetView: {},
  heroImage: heroUrl("s-shape-rice-terraces-pu-luong_placeholder"), // TODO: upload and replace
  gallery: [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ],
  seoDescription:
    "The S-Shape Rice Terraces (Cánh đồng lúa hình chữ S) is the most photographed viewpoint in Pù Luông Nature Reserve - a curved sweep of stepped paddies seen from a hillside lookout above Don Village, at its best during the green and golden rice seasons.",
  tips: [
    "The viewpoint is best in golden hour - late afternoon light from the west catches the paddy curve and the surrounding limestone slopes; midday light is flat and less photogenic",
    "Two narrow rice windows define the visit: late May to early June for vivid green, and late September to early October for the golden harvest - outside these periods the field is either flooded mud or bare stubble",
    "The lookout itself is roadside and informal - there are no formal viewing platforms, just a widening on the shoulder where photographers and tour vans stop",
    "Drone photography from this viewpoint is common but check current Pù Luông Reserve restrictions before flying - rules tighten during sensitive farming periods",
    "Combine with Don Village in a single afternoon - the viewpoint is a 5 to 10 minute drive above the village core and most homestays will arrange a quick xe ôm trip up at sunset",
  ],
  content: {
    intro:
      "The S-Shape Rice Terraces (Cánh đồng lúa hình chữ S) is the single most photographed view in Pù Luông Nature Reserve - a curved sequence of stepped paddies that, seen from a hillside above Don Village, traces a clean S through the valley floor. The shape is a product of the natural contour of the slope rather than a designed feature, with each terrace following the bend of an underlying gradient and the cumulative line resolving into the recognisable S from a single elevated angle. The paddy is part of the working farmland of Don Village (Bản Đôn) and is planted, flooded, and harvested on the same calendar as the other rice fields in the valley. The viewpoint above the field is a roadside lookout on the route into the reserve, and is the natural sunset stop for travellers based in Don Village.",
    howToGetThere:
      "The viewpoint is reached from the main reserve road that enters Pù Luông from Phố Đoàn, on the section that climbs above Don Village before descending to the valley floor. From the centre of Don Village it is around 5 to 10 minutes by motorbike uphill - most homestays in the village will arrange a xe ôm or a guide to drive up for sunset. The lookout itself is roadside without a marked sign; locals know it well and tour vans stop here regularly, so the spot is easy to identify by the cluster of motorbikes parked on the shoulder during golden hour. From Phố Đoàn town the drive is around 15 to 20 minutes.",
    whatToExpect:
      "The viewpoint is a roadside widening rather than a built lookout - there is no platform, no entrance, and no facilities. The view down into the valley is the entire experience: the S-curve fills the foreground, with the rest of Don Village's paddy quilt and the limestone walls of the reserve framing the wider scene. The visit is short by design - 15 to 30 minutes is enough to take the photograph and absorb the view, and most travellers combine the stop with a longer ride through the reserve. The character of the field changes dramatically across the rice calendar: in late May the terraces fill with bright green seedlings, in late September the field turns gold as the grain ripens, and in the weeks between planting and growth or after harvest the same view can look bare. Drone footage of the curve is widely circulated and is what makes the spot recognisable internationally.",
    travelTips:
      "Time the visit to the rice calendar - this is the single most important factor for the S-Shape Rice Terraces, and a visit outside the green or golden windows will not show the field at its best. Sunset is the strongest light window; sunrise also works but the angle of light is less favourable for the S itself. The viewpoint pairs naturally with an overnight in Don Village, where the homestay hosts will know exactly when the local rice is at its colour peak and can save you a wasted trip in the off-windows. For travellers committed to photography, two consecutive evenings at golden hour give the best chance of a clean light - mountain weather in Pù Luông can shift quickly and a single evening is not always enough.",
  },
}
