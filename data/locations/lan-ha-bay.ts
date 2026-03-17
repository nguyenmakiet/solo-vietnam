import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const lanHaBay: Location = {
  slug: "lan-ha-bay",
  name: "Lan Hà Bay",
  provinces: ["hai-phong"],
  destination: "cat-ba",
  lat: "20.731973471390784",
  lng: "107.05945027622396",
  address: "Cát Bà, Hải Phòng",
  type: ["bay", "nature"],
  experiences: ["kayaking", "boat-tour", "swimming", "photography", "snorkeling"],
  tags: ["🛶 Kayaking", "🌊 Cleaner than Ha Long", "🏖️ Hidden Beaches", "📸 Photography"],
  bestTime: "Apr – Jun or Sep – Nov (calm water, best visibility, fewest boats)",
  entranceFee: "Included in kayak/boat tour (~350,000–600,000 VND/person)",
  openingHours: "Tours depart from Cát Bà town daily from 8:00 AM",
  mapUrl: "",
  heroImage: heroUrl("lan-ha-bay-hai-phong4_lgkwrs"),
  gallery: [
    "lan-ha-bay-hai-phong2_pcid4b",
    "lan-ha-bay-hai-phong3_n1qg1l",
    "lan-ha-bay-hai-phong_y82hco",
  ],
  seoDescription:
    "Lan Hà Bay is the southern section of the Ha Long Bay karst system — 400 limestone islands, hidden beaches, floating fishing villages, and some of the clearest water in the Gulf of Tonkin, with a fraction of Ha Long's boat traffic and far better kayaking conditions.",
  tips: [
    "Book a full-day kayaking tour rather than a boat tour — Lan Hà is best experienced at water level, paddling between the karsts, not from a cruise deck",
    "The hidden beaches accessible only by kayak through narrow cave passages are the highlight — ask your guide specifically for the cave beach route",
    "Water visibility is consistently better than Ha Long Bay's main route — snorkeling from the kayak is worthwhile, especially around the rocky outcrops",
    "Dark Cave (a different one from Phong Nha) near Cát Bà town is accessible on some Lan Hà tours — worth including if available",
    "Early morning (departing before 8 AM) gives the calmest water and the best light on the limestone for photography",
  ],
  content: {
    intro:
      "Lan Hà Bay occupies the southern section of the same limestone karst system as Ha Long Bay, with approximately 400 islands spread across calm water south of Cát Bà Island. Administratively, Lan Hà falls within Hải Phòng province rather than Quảng Ninh — which means it sits outside the main Ha Long Bay management zone and receives significantly fewer cruise boats. The water quality is consistently rated higher than Ha Long Bay's main tourist route, the beaches are cleaner and less visited, and the kayaking conditions — narrow passages between karsts, cave beaches accessible only through low archways, floating villages — are more varied and more intimate than anything available on Ha Long Bay's standard cruise itinerary. Lan Hà Bay has been gaining recognition among travellers who have already done Ha Long Bay and are looking for the same landscape without the crowds, and among kayaking-focused travellers who want to actually paddle rather than sit on a cruise boat.",
    howToGetThere:
      "Lan Hà Bay is accessed by boat or kayak tour from Cát Bà town. Tour operators in the town run full-day and half-day excursions — boats depart from the main pier in Cát Bà town from around 8 AM. Kayak tours (paddling the bay in sea kayaks rather than sitting on a motorboat) are the recommended format and available from most operators. Overnight boat tours on Lan Hà Bay are also available — a smaller-scale version of the Ha Long Bay overnight cruise experience but with fewer other boats.",
    whatToExpect:
      "The bay has several distinct zones. The floating fishing village at Ba Trái Đào has traditional wooden houses on pontoons with fish farms visible below the surface. The cave beach passages — narrow archways through the limestone that open into enclosed lagoons with small beaches — are the most dramatic kayaking terrain. Open water sections between the karsts provide long paddles with karst scenery on all sides. Rocky outcrops around several islands have shallow snorkeling with modest coral and reef fish. The light on the limestone in the early morning and late afternoon gives the same dramatic photography conditions as Ha Long Bay without the density of tourist boats in the frame.",
    travelTips:
      "Lan Hà Bay is the strongest argument for basing yourself in Cát Bà town rather than joining a Ha Long Bay overnight cruise from the mainland. The bay is geologically identical to Ha Long but the experience is qualitatively better for independent travellers who want to paddle, swim, and explore rather than be guided through a fixed itinerary with 50 other passengers. A full day on Lan Hà Bay — leaving Cát Bà town at 8 AM and returning at 5 PM — is the best single day available from the island.",
  },
}
