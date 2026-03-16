import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const nguomPucCave: Location = {
  slug: "nguom-puc-cave",
  name: "Nguồm Pục Cave",
  provinces: ["cao-bang"],
  destination: "cao-bang",
  lat: "",
  lng: "",
  address: "Hà Quảng, Cao Bằng",
  type: ["cave", "nature"],
  experiences: ["caving", "photography", "trekking"],
  tags: ["🪨 Limestone Cave", "📸 Photography", "🌊 Underground Stream", "🥾 Jungle Approach"],
  bestTime: "Feb – Aug (dry season, lower underground water levels)",
  entranceFee: "~20,000 VND",
  openingHours: "7:00 AM – 5:00 PM",
  mapUrl: "",
  heroImage: heroUrl("nguom-puc-cave-hero_placeholder"),
  gallery: [],
  seoDescription:
    "Nguồm Pục Cave is a large limestone cave system in Hà Quảng District — less visited than Nguồm Ngao near Bản Giốc, with its own underground stream, dramatic stalactite chambers, and a jungle approach that makes it one of the most atmospheric cave experiences in Cao Bằng.",
  tips: [
    "Bring your own torch or headlamp — the cave has some lighting but the installed lights don't cover all sections",
    "The underground stream runs through the lower cave passage — wear shoes you can get wet in dry season when the stream is low enough to wade",
    "Combine with Pác Bó Historic Site on the same day — both are in Hà Quảng District and 15km apart",
    "The cave is cooler than outside by 5–8°C — bring a light layer if mày are sensitive to cold",
    "The jungle path from the road to the cave entrance is about 10 minutes — the approach through the forest adds to the atmosphere",
  ],
  content: {
    intro:
      "Nguồm Pục Cave is a limestone cave system in Hà Quảng District, 50km north of Cao Bằng city, formed by the same karst geology that creates Nguồm Ngao Cave near Bản Giốc and the cave systems of Phong Nha-Kẻ Bàng to the south. The cave has multiple chambers connected by passages of varying size, with an underground stream running through the lower sections in wet season and a navigable dry passage in dry season. The stalactite and stalagmite formations are varied — columns, curtains, and flowstone — lit by a combination of installed lights and natural light near the entrance. The cave is significantly less visited than Nguồm Ngao despite similar geological quality, partly because it's further from the Bản Giốc tourist circuit and partly because it lacks the marketing infrastructure of its more famous neighbour. This makes it one of the more atmospheric cave experiences in Cao Bằng — the chance of having the chambers to yourself is genuine.",
    howToGetThere:
      "Nguồm Pục Cave is 50km north of Cao Bằng city in Hà Quảng District, near Pác Bó Historic Site. By motorbike from Cao Bằng, the journey takes about 1.5 hours. The cave is accessible from the main road via a short dirt track and a 10-minute jungle path. It can be combined with Pác Bó in a single day from Cao Bằng — the two sites are approximately 15km apart by motorbike. Local guesthouses in Cao Bằng city can provide directions and guidance on the route.",
    whatToExpect:
      "The cave entrance opens into a wide first chamber with good natural light and the first stalactite formations visible immediately. The path leads deeper through progressively darker chambers — the installed lighting illuminates the main route but some side passages are unlit. The underground stream passage is the most dramatic section — a low-ceilinged corridor where the stream flows over smooth limestone, the walls reflecting the torch light. The cave system extends further than the standard visitor route, but the accessible sections take about 45–60 minutes to explore thoroughly. The exit is back through the entrance.",
    travelTips:
      "Nguồm Pục is the right cave for travellers who have already done Nguồm Ngao and want a second Cao Bằng cave experience — or for those who prefer a less visited site over the more polished tourist infrastructure of Nguồm Ngao. The quality of the formations is comparable and the solitude is markedly better. The 1.5-hour motorbike ride from Cao Bằng through the northern karst landscape is scenic enough to justify the trip regardless of the cave. Combine with Pác Bó Historic Site for a full northern Cao Bằng day.",
  },
}
