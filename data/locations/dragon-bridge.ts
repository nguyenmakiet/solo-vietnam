import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const dragonBridge: Location = {
  slug: "dragon-bridge",
  name: "Dragon Bridge",
  provinces: ["da-nang"],
  destination: "",
  lat: "16.06124852539428",
  lng: "108.22810029126948",
  address: "Cầu Rồng, Hải Châu, Đà Nẵng",
  type: "attraction",
  categories: [],
  experiences: ["photography", "walking-tour", "nightlife"],
  tags: ["🐉 Fire-Breathing Dragon", "📸 Photography", "🌉 Icon of Đà Nẵng", "🔥 Weekend Show"],
  bestTime: "Year-round; fire show every Saturday and Sunday night at 9 PM",
  bestMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  entranceFee: "Free",
  openingHours: "Open 24/7; fire and water show: Sat & Sun 9:00 PM",
  mapUrl: "https://www.google.com/maps?q=16.06124852539428,108.22810029126948",
  streetView: {embedUrl: "https://www.google.com/maps/embed?pb=!4v1775795861658!6m8!1m7!1s3wQ76oq2NbgvWfntAfiX8g!2m2!1d16.06276742021825!2d108.2301906136917!3f223.7685534407437!4f4.410776641076552!5f0.7820865974627469", },
  heroImage: heroUrl("da-nang_f93yq1"),
  gallery: [
    "dragon-bridge-da-nang_q6fdzx",
    "da-nang_f93yq1",
  ],
  seoDescription:
    "The Dragon Bridge is Đà Nẵng's most iconic landmark - a 666-metre steel bridge shaped like a dragon crossing the Hàn River, with a head that breathes real fire and water every Saturday and Sunday night at 9 PM.",
  tips: [
    "Arrive at the riverbank by 8:30 PM on weekends - the best viewing spots fill up 20–30 minutes before the show",
    "The south bank (Trần Hưng Đạo Street side) gives a full-length view of the dragon body; the north bank gets you closest to the fire-breathing head",
    "The bridge is best photographed from the riverbank at blue hour (6:30–7:30 PM) when the lights come on against the darkening sky",
    "During the show, the dragon breathes fire for about 2 minutes then switches to water - position yourself upwind of the head to avoid getting wet",
    "The surrounding riverfront has dozens of cafes and restaurants with bridge views - arrive early, get a seat with a view, and watch the show from there",
  ],
  content: {
    intro:
      "The Dragon Bridge - Cầu Rồng - opened in 2013 as the centrepiece of Đà Nẵng's transformation from a provincial city to a modern resort destination. The bridge spans 666 metres across the Hàn River, carrying six lanes of traffic, and is constructed in the shape of a dragon - the symbol of the Nguyễn lords who ruled the region and of Vietnam's ancient mythology. The dragon's body forms the arc of the bridge; its head extends beyond the road surface on the eastern bank, positioned to breathe fire and water over the river below. Every Saturday and Sunday at 9 PM, the head releases a three-minute show of alternating fire and water jets, drawing crowds of thousands to both riverbanks. The bridge is illuminated every night in shifting colours - yellow, red, blue, green - and has become the defining image of modern Đà Nẵng.",
    howToGetThere:
      "The Dragon Bridge crosses the Hàn River in central Đà Nẵng, connecting the city centre (Hải Châu District) on the west bank with the beach district (Sơn Trà) on the east. It's within walking distance of most central Đà Nẵng hotels - the bridge is visible from much of the city. The best viewing points are on Trần Hưng Đạo Street on the south bank and the riverfront promenade on the north bank. Grab and taxis drop off on either bank; parking for motorbikes is available along the riverfront.",
    whatToExpect:
      "During the day, the bridge is a functional road crossing and a photography subject - the dragon's scales and detailing are most visible in daylight. At night, the LED illumination transforms the bridge into a colour show visible from kilometres away. The weekend fire-and-water show draws large weekend crowds to the riverbank - a festive atmosphere with street food vendors, selfie sticks, and genuine excitement from both local and international visitors. The show itself is brief but visually dramatic: the dragon head tilts, fire jets 10–15 metres into the air, then switches to water that arcs over the river surface. The surrounding Hàn River promenade has been developed with walking paths, cafes, and boat tour operators.",
    travelTips:
      "The Dragon Bridge is worth visiting twice: once during the day for photography and once at night for the atmosphere. The weekend fire show is genuinely impressive and free - one of the better free spectacles in Vietnam. Weeknight visits are quieter and the illuminated bridge reflects beautifully in the river. If mày is in Đà Nẵng over a weekend, the show is non-negotiable. Combine with a riverside dinner beforehand - the restaurants on Bạch Đằng Street have direct views of the bridge from their terraces.",
  },
  insights: {
    highlights: [
      "Golden dragon-shaped bridge spanning Han River, illuminated with colorful LED lights at night",
      "Fire and water show Friday-Sunday at 9pm where dragon breathes flames then sprays water",
      "Night market and riverside restaurants/cafés with outdoor seating near bridge",
    ],
    thingsToKnow: {
      crowds: "Very crowded during weekend fire and water shows. Arrive early (by 7:30pm) for good viewing spots. Less crowded on weekdays when bridge is lit but show doesn't occur.",
      difficulty: null,
      safety: "Safe and well-organized. Security visible during shows. Traffic closed 15 minutes before show starts.",
      accessibility: "Easy access, free entry, no tickets required. Walkable across bridge or viewable from both riverbanks and nearby restaurants.",
      seasonal: "Show may be cancelled or disrupted by special events (Christmas decorations blocked views during one visit). Check online for latest schedule.",
    },
    visitorTips: [
      "Bring umbrella or raincoat if standing close to dragon's head during water show to avoid getting soaked",
      "View show from a distance or nearby restaurants/cafés for better perspective of entire bridge than standing on it",
      "Arrive 30+ minutes early on weekends to secure good viewing spot before 9pm show starts",
    ],
    faq: [
      { question: "When does the fire and water show happen?", answer: "Every Friday, Saturday, and Sunday at 9:00pm. Show lasts approximately 10-15 minutes. Always verify online before visiting as shows may be cancelled." },
      { question: "Where should I stand to watch the show?", answer: "View from both sides of streets, riverbanks, or nearby restaurants for best perspective. Avoid standing directly under dragon's head as fire is hot and water spray will drench you." },
      { question: "Is there a cost to visit and what else is nearby?", answer: "Completely free. Night market operates nearby with food stalls and merchandise. Multiple restaurants and bars with outside seating available for dining while watching." },
    ],
    sentiment: {
      positive: "Most visitors find it an iconic Da Nang landmark worth seeing, especially the weekend fire and water show. Appreciated for architectural design, riverside location, accessible evening atmosphere, and family-friendly experience.",
      negative: "Some find the show overhyped with crowds too dense for short 10-15 minute performance. Fire portion brief compared to water spray. Not recommended if visiting weekdays when show doesn't occur.",
    },
  },
}
