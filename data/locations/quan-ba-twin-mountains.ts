import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const quanBaTwinMountains: Location = {
  slug: "quan-ba-twin-mountains",
  name: "Quản Bạ Twin Mountains",
  provinces: ["ha-giang"],
  destination: "ha-giang-loop",
  lat: "23.06521535060752",
  lng: "105.00120271105881",
  address: "Quản Bạ, Hà Giang",
  type: ["mountain", "nature"],
  categories: [],
  experiences: ["photography", "trekking", "motorcycling", "culture"],
  tags: ["🏔️ Núi Đôi", "📸 Ha Giang Icon", "🌾 Rice Terraces", "🏍️ Loop Landmark"],
  bestTime: "Sep – Nov (rice harvest, cloud inversions) or Mar – May (green terraces)",
  bestMonths: [3, 4, 5, 9, 10, 11],
  entranceFee: "Free (viewpoints); climbing fee if applicable",
  openingHours: "Open 24/7",
  mapUrl: "https://www.google.com/maps?q=23.06521535060752,105.00120271105881",
  streetView: {embedUrl: "https://www.google.com/maps/embed?pb=!4v1775882325735!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ1IwTjM1cWdF!2m2!1d23.05894500647083!2d104.9973329878738!3f40.6737910730495!4f2.674621612158475!5f0.7820865974627469", },
  heroImage: heroUrl("nui-doi-quan-ba-ha-giang_unaeou"),
  gallery: [
    "nui-doi-quan-ba-ha-giang_unaeou",
    "quan-ba-twins-mountains-ha-giang_gciu0t",
    "quan-ba-twins-mountains-ha-giang-2_v4s8bf",
  ],
  seoDescription:
    "The Quản Bạ Twin Mountains - Núi Đôi, 'Double Mountains' - are two symmetrical limestone peaks rising from the Quản Bạ Valley floor, an icon of the Ha Giang Loop and the subject of a Tày legend about a fairy who left her twin children behind when she was called back to heaven.",
  tips: [
    "The best view of both mountains together is from the Heaven Gate descent road or from the hillside viewpoint above Quản Bạ town - not from the valley floor",
    "Early morning with cloud inversion is the definitive Núi Đôi shot - both peaks appear to float above the mist with the valley invisible below",
    "The Tày legend of the Twin Mountains is one of the most poignant in Ha Giang - ask a local guide to tell it properly",
    "The rice terraces surrounding the mountains are cultivated by H'mong and Tày families - the farming landscape framing the peaks is as photogenic as the mountains themselves",
    "A trail leads to the base of the northern peak from Quản Bạ town - not a technical climb but a significant uphill walk with good views back over the valley",
  ],
  content: {
    intro:
      "The Twin Mountains - Núi Đôi - are two near-identical limestone peaks rising approximately 400 metres from the Quản Bạ Valley floor, side by side, their symmetry so precise that they appear deliberately placed. The peaks are the visual centrepiece of the Quản Bạ section of the Ha Giang Loop and appear in more photographs of the route than almost any other single landmark. The Tày people's legend explains the mountains as the petrified bodies of twin infants left behind by a celestial fairy who was summoned back to heaven by the Jade Emperor - she left her children in the valley, and they became mountains waiting for her return. The peaks are surrounded by rice terraces worked by H'mong and Tày minority families, and the combination of the geometric mountain forms rising from the layered green and gold terraces is one of the most compositionally distinctive landscapes in northern Vietnam.",
    howToGetThere:
      "The Twin Mountains are in the Quản Bạ Valley, visible from the Heaven Gate descent road 46km north of Hà Giang city. The main viewpoints are along the descent road from Heaven Gate (the peaks are visible for the entire 10km descent) and from the hillside above Quản Bạ town. The valley floor around the peaks is accessible by motorbike on a side road from Quản Bạ town - riding the loop of roads around the mountains gives ground-level views of the surrounding rice terraces. The town of Quản Bạ is the nearest accommodation base.",
    whatToExpect:
      "From the Heaven Gate descent road, both peaks are visible simultaneously against the valley backdrop. The view changes continuously as the road switchbacks down - different angles, different distances, different proportions of terrace and mountain and sky. From the valley floor, the peaks are massive and close - the scale only apparent when standing beneath them. The trail to the base of the northern peak begins from a signposted path in Quản Bạ town and takes about 40 minutes to reach the lower slopes. The surrounding terrace roads are excellent for slow motorbike riding or walking - the farms and villages around the mountains are active and unhurried.",
    travelTips:
      "Núi Đôi is a photograph destination first and a trekking destination second - the views of the peaks from the descent road and the hillside above town are the primary draw. Allow at least 30–45 minutes in the Quản Bạ area for the mountains specifically - the descent road offers multiple stopping points and the views change enough to justify pausing at two or three spots. In cloud inversion conditions (dawn in October–November), the peaks above the mist are one of the most exceptional natural photographs available on the loop.",
  },
  insights: {
    highlights: [
      "Two symmetrical mountains visible from Highway 4C near Tam Sơn town, Quản Bạ district",
      "Viewing platform accessible by climbing approximately 100 steps with panoramic valley views",
      "Convenient roadside stop 40-46km north of Hà Giang city on Đồng Văn plateau route",
    ],
    thingsToKnow: {
      crowds: "Popular checkpoint for motorbike tours; visitors should park vehicles carefully to avoid blocking traffic",
      difficulty: "Staircase climb moderate difficulty; upper road has sharp curves requiring caution. Path occasionally slippery",
      safety: null,
      accessibility: "Limited infrastructure; bring food and water as few facilities nearby. Minimal directional signage",
      seasonal: "Best September-November with cool weather and buckwheat flowers. December less scenic. Morning visits recommended; fog and clouds often obscure views after 4pm",
    },
    visitorTips: [
      "Visit September-November for clearest views and optimal weather conditions",
      "Arrive early morning before fog and clouds reduce visibility",
      "Park vehicles carefully away from highway traffic flow",
    ],
    faq: [
      { question: "When is the best time to visit for clear views?", answer: "September through November offers the clearest skies and coolest weather. Avoid afternoon visits after 4pm when fog and clouds typically obscure the mountains." },
      { question: "How difficult is the climb to the viewpoint?", answer: "Moderate difficulty with approximately 100 steps to reach the viewing platform. The upper road has sharp curves requiring caution and paths can be slippery." },
      { question: "What facilities are available at the site?", answer: "Limited infrastructure with few facilities nearby. Bring your own food and water. Minimal directional signage is available, so arrive prepared." },
    ],
    sentiment: {
      positive: "Most visitors praise the distinctive twin mountain formation and strategic location on the Đồng Văn route, finding it worthwhile as a convenient photo stop",
      negative: "Some report fog and clouds obscure views; expectations set by internet reviews often exceed actual appearance; climbing stairs tiring for some visitors",
    },
  },
}
