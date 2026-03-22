import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const phongNhaBotanicGarden: Location = {
  slug: "phong-nha-botanic-garden",
  name: "Phong Nha Botanic Garden",
  provinces: ["quang-binh"],
  destination: "phong-nha-ke-bang",
  lat: "17.55254653358196",
  lng: "106.30196116431941",
  address: "Sơn Trạch, Bố Trạch, Quảng Bình",
  type: ["nature", "forest"],
  experiences: ["trekking", "wildlife", "photography", "cycling"],
  tags: ["🌿 Jungle Trails", "🦋 Wildlife", "🚲 Cycling", "📸 Photography"],
  bestTime: "Feb – Aug (dry season, trails accessible; wildlife most active early morning)",
  entranceFee: "~40,000 VND",
  openingHours: "7:00 AM – 5:00 PM",
  mapUrl: "",
  heroImage: heroUrl("phong-nha-botanic-garden-hero_placeholder"),
  gallery: [],
  seoDescription:
    "Phong Nha Botanic Garden is a 2,000-hectare protected forest reserve on the edge of Phong Nha-Kẻ Bàng National Park - a network of jungle trails, a canopy walkway, and some of the most accessible wildlife habitat in central Vietnam, 7km from Sơn Trạch village.",
  tips: [
    "Arrive before 7:30 AM for the best wildlife sightings - langurs and deer are most active in the first hour after dawn before visitors arrive",
    "The canopy walkway is the highlight - book at the entrance and allow 1.5 hours for the full loop including the elevated sections",
    "Bring insect repellent - the trails pass through dense jungle and mosquitoes are present year-round",
    "The garden is excellent by bicycle from Sơn Trạch village - 7km on a flat road through the countryside and the cycle back is one of the nicest easy rides in the area",
    "Combine with Mooc Spring on the same morning - both are on the same road and 10 minutes apart by bicycle",
  ],
  content: {
    intro:
      "Phong Nha Botanic Garden sits on the eastern boundary of Phong Nha-Kẻ Bàng National Park, 7km north of Sơn Trạch village, covering 2,000 hectares of protected lowland and hill forest. It was established as a research and conservation facility and has been developed with a network of walking trails, a canopy walkway, and wildlife observation points that make the national park's interior accessible without requiring a full expedition guide. The garden protects a section of the evergreen forest that covers the karst mountains - the same forest that hides Son Doong, Paradise Cave, and the park's other cave systems beneath it. Wildlife recorded in the garden includes red-shanked douc langurs, sambar deer, civets, and over 150 bird species. The canopy walkway, suspended 15–20 metres above the forest floor, gives an aerial perspective over the dense jungle canopy and the karst ridgeline beyond.",
    howToGetThere:
      "The botanic garden is 7km north of Sơn Trạch village on the road toward the national park interior. By bicycle from Sơn Trạch, the journey takes about 25–30 minutes on a flat road. By motorbike, it's 10 minutes. The entrance is on the left side of the road with a car park and ticket booth. Most accommodation in Sơn Trạch has bicycles available for rent - the cycle to the garden through the countryside is part of the experience.",
    whatToExpect:
      "The garden has several trail options ranging from 1km to 5km, all looping through different sections of the lowland forest. The canopy walkway is a separate ticketed addition that adds significantly to the experience - a series of suspension bridges and elevated platforms at 15–20 metres, looking out over the forest canopy and the karst mountains. The forest floor trails pass through bamboo groves, along a stream, and through sections of primary forest where the tree canopy closes overhead. Wildlife sightings depend on time of day and season - early morning on the less-visited trails gives the best chance of seeing langurs in the canopy above.",
    travelTips:
      "The botanic garden is the most accessible nature experience in Phong Nha - no guide required, no booking ahead, suitable for any fitness level. It's consistently overlooked by visitors who focus on the caves, which makes the trails unusually quiet even in peak season. The canopy walkway in particular is worth the small additional fee - the perspective over the jungle and the karst ridgeline is different from anything available at the cave sites. Combine with Mooc Spring (10 minutes away by bicycle) for a complete morning of jungle and water before an afternoon cave tour.",
  },
}
