import { Location } from "../location"
import { heroUrl } from "@/lib/cloudinary"

export const honThomCableCar: Location = {
  slug: "hon-thom-cable-car",
  name: "Hòn Thơm Cable Car",
  provinces: ["kien-giang"],
  destination: "phu-quoc",
  lat: "10.0269723",
  lng: "104.0046602,858",
  address: "An Thới, Phú Quốc, Kiên Giang",
  type: "attraction",
  categories: [],
  experiences: ["cable-car", "beach", "swimming", "photography"],
  tags: ["🚡 Cable Car", "🏝️ Island", "🌊 Sea View", "🎢 Theme Park"],
  bestTime: "Nov – Apr (clear skies, calm sea)",
  bestMonths: [1, 2, 3, 4, 11, 12],
  entranceFee: "750,000 VND/adult return (includes cable car + Hòn Thơm Nature Park)",
  openingHours: "8:00 AM – 8:00 PM",
  mapUrl: "https://maps.google.com/?q=10.0089,104.0303",
  streetView: {embedUrl: "https://www.google.com/maps/embed?pb=!4v1775812963074!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ2U1X19EbWdF!2m2!1d10.00823904159859!2d104.009871972602!3f342.07790677638303!4f-15.25677330009961!5f0.7820865974627469", },
  heroImage: heroUrl("hon-thom-cable-car-hero_zxbtjc"),
  gallery: [
    "hon-thom-cable-car_h148ot",
    "hon-thom-cable-car-03_pz1rvq",
    "hon-thom-cable-car-02_lhjxu7",
  ],
  seoDescription:
    "Hòn Thơm Cable Car - the world's longest non-stop three-rope cable car crossing 8km of open sea from Phú Quốc to Hòn Thơm island, with panoramic views of the southern island archipelago.",
  tips: [
    "Book tickets online in advance during peak season (Dec–Jan) - queues at the station can be long",
    "The cable car ride takes about 15 minutes each way - sit on the right side going over for the best island views",
    "Hòn Thơm Nature Park on the island has a water park and beach - factor in 3–4 hours minimum",
    "The last cable car back is at 8pm - don't miss it or you'll need a boat back",
  ],
  content: {
    intro:
      "The Hòn Thơm Cable Car holds a Guinness World Record as the longest non-stop three-rope cable car in the world, crossing 7,899m of open sea between An Thới on Phú Quốc's southern tip and Hòn Thơm island. The 15-minute crossing at 50m above the water gives uninterrupted views of the southern island archipelago - on a clear day you can see four or five islands stretching toward the horizon.",
    howToGetThere:
      "The cable car station is at An Thới, about 25km south of Dương Đông town - 35–40 minutes by motorbike. From town, take the main road south all the way to the tip of the island. Taxis and Grab are available but expensive for this distance. The station has a large car park and motorbike parking.",
    whatToExpect:
      "The cable car cabins hold up to 30 people and run continuously. The crossing takes 15 minutes each way. On Hòn Thơm island, the Sun World Nature Park has a beach area, water slides, restaurants, and walking trails. The beach on the island's far side is clean and less crowded than Phú Quốc's main beaches. The whole experience - cable car, island, and back - takes about half a day.",
    travelTips:
      "The cable car is worth doing once for the views and the experience of the crossing. The theme park on Hòn Thơm is firmly aimed at families with children - if that's not your scene, a couple of hours on the island beach is enough before heading back. Combine with Bãi Sao Beach nearby for a full southern Phú Quốc day.",
  },
}