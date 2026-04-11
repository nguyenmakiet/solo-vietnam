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
  insights: {
    highlights: [
      "World's longest cable car ride at 8km, offering 15-20 minutes of panoramic sea and island views",
      "Aquatopia Water Park with multiple slides, lazy pool, and clean facilities included with ticket",
      "All-inclusive ticket covers cable car, water park, theme park, beach access, and complimentary beer",
    ],
    thingsToKnow: {
      crowds: "Expect 5,000-7,000+ visitors daily. Peak hours are midday; go early morning or late afternoon. Cable car doesn't operate 11:30am-1:30pm. Exit queues can be long when entire park leaves simultaneously.",
      difficulty: "Water park slides require climbing 100-200 steps with no lift access, which can be tiring. Pedestrian-only bridge access with scooter parking further away.",
      safety: "Cable car occasionally stops for 5-minute technical repairs; this is normal. Staff enforce strict swimwear rules (no zippers on shorts for certain slides). Safe overall but crowded.",
      accessibility: "Limited lift access to water slides; stairs required. Pedestrian bridge to water park area requires walking to distant scooter parking.",
      seasonal: "Construction ongoing on parts of the island; some rides and areas may be under renovation. Sunset cable car ride (around 5pm departure) offers magical views.",
    },
    visitorTips: [
      "Book tickets via Klook app to skip queues; scan QR code at entrance. Alternatively, buy at ticket counters.",
      "Arrive early to get free sun beds at beach; visit cable car before or after 11:30am-1:30pm closure. Claim complimentary beer at restaurants.",
      "Plan 4-6 hours minimum; avoid peak lunch hours 11:30am-1:30pm. Time return trip for 3pm-4pm or sunset to minimize exit queues.",
    ],
    faq: [
      { question: "What's included in the ticket price?", answer: "Cable car, water park access, theme park, beach, one complimentary beer or juice. Food costs extra. Kiss Bridge show requires separate ticket." },
      { question: "Why does the cable car stop operating at midday?", answer: "Cable car closes 11:30am-1:30pm daily. Plan accordingly—visit island in morning or afternoon." },
      { question: "How crowded does it get and when is best to visit?", answer: "Very crowded daily with 5,000-7,000 visitors. Go early morning or late afternoon to avoid heat and crowds. Early arrival secures free sun beds." },
    ],
    sentiment: {
      positive: "Overwhelming praise for cable car views, modern facilities, cleanliness, and staff service. All-inclusive pricing and complimentary beer appreciated.",
      negative: "Construction visible on island; some rides under renovation. No cable car-only ticket option. Locker fees expensive (100,000 VND). Shower facilities need improvement. Crowds overwhelming. Cafeteria-style lunch chaotic. Some rides still under maintenance.",
    },
  },
}