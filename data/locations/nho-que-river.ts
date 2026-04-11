import { Location } from "../location"
import { heroUrl } from "@/lib/cloudinary"

export const nhoQueRiver: Location = {
  slug: "nho-que-river",
  name: "Nho Quế River",
  provinces: ["ha-giang"],
  destination: "ha-giang-loop",
  lat: "23.23164528112462",
  lng: "105.42652150718125",
  address: "Nho Quế River, Mèo Vạc, Hà Giang",
  type: ["nature","river"],
  categories: [],
  experiences: ["photography", "kayaking", "boat-tour", "hiking"],
  tags: ["🌊 Turquoise River", "🏔️ Canyon", "🛶 Boat Tour", "📸 Photography"],
  bestTime: "Sep – Nov or Mar – May (clearest water, best light)",
  bestMonths: [3, 4, 5, 9, 10, 11],
  entranceFee: "Boat tour: 150,000–200,000 VND/person",
  openingHours: "7:00 AM – 5:00 PM (boat tours)",
  mapUrl: "https://maps.google.com/?q=23.1550,105.4100",
  streetView: {embedUrl: "https://www.google.com/maps/embed?pb=!4v1775832383230!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQzZxWmZjamdF!2m2!1d23.17683018762244!2d105.4794520224838!3f83.86273787168946!4f3.4168110275333987!5f0.7820865974627469", },
  heroImage: heroUrl("nho-que_mu1ha3"),
  gallery: [
    "nho-que-river-ha-giang_iiehla",
    "nho-que2_licobx",
    "nho-que-river-ha-giang-2_ke4t6n",
  ],
  seoDescription:
    "Nho Quế River - a ribbon of impossible turquoise threading through the deepest canyon in Southeast Asia, seen from above at Mã Pí Lèng Pass and explored by boat from Mèo Vạc.",
  tips: [
    "The boat tour departs from Mèo Vạc town - ask at your guesthouse to arrange, or walk to the river landing 2km from town",
    "The water color is most vivid on sunny mornings - overcast days make it look grey",
    "The canyon is best seen from two angles: from above at Mã Pí Lèng Pass and from the water on the boat tour",
    "Bring a waterproof bag for your camera on the boat - the river can be choppy",
  ],
  content: {
    intro:
      "The Nho Quế River runs through the deepest canyon in Southeast Asia, carving a gorge between the limestone walls of the Đồng Văn Karst Plateau in shades of turquoise that seem almost artificially vivid in good light. From the Mã Pí Lèng viewpoint 1,500m above, the river looks like a thread of blue-green silk. From the water, the canyon walls rise hundreds of metres on both sides and the scale becomes genuinely overwhelming.",
    howToGetThere:
      "The river is accessed from Mèo Vạc town, about 20km east of the Mã Pí Lèng summit. Boat tours depart from a landing point 2km from Mèo Vạc - guesthouses in town can arrange tickets and transport. Most Ha Giang Loop riders cross Mã Pí Lèng and continue to Mèo Vạc, making the boat tour a natural afternoon activity after the pass.",
    whatToExpect:
      "The boat tour covers about 8km of the canyon, taking 1–1.5 hours return. The boats are small motorized wooden vessels holding 4–6 people. The canyon narrows dramatically in places, with sheer walls rising on both sides. The water color shifts from pale green in the shallows to a deep jade in the deeper sections. Swallows nest in the cliff walls and the sound of the motor echoes off the limestone. It's one of the most striking boat journeys in Vietnam.",
    travelTips:
      "The Nho Quế boat tour is best done in the afternoon after crossing Mã Pí Lèng in the morning - this gives you both perspectives on the canyon in one day. Stay overnight in Mèo Vạc rather than rushing back to Đồng Văn - the town is small and genuine, with good local food and a much calmer atmosphere than the more touristy Đồng Văn.",
  },
}