import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const baNaCableCar: Location = {
  slug: "ba-na-cable-car",
  name: "Bà Nà Cable Car",
  provinces: ["da-nang"],
  destination: "ba-na-hills",
  lat: "16.025928263564783", 
  lng: "108.03455022954422",
  address: "Suối Mơ Station, Hoà Ninh, Hoà Vang, Đà Nẵng",
  type: "attraction",
  categories: [],
  experiences: ["cable-car", "photography"],
  tags: ["🚡 World Record Cable Car", "☁️ Through the Clouds", "📸 Aerial Views", "🌿 Forest Canopy"],
  bestTime: "Mar – Aug (clearest visibility; cable car operates year-round)",
  entranceFee: "Included in Bà Nà Hills ticket (~1,500,000 VND)",
  openingHours: "First departure: 7:30 AM · Last return: 9:00 PM",
  mapUrl: "https://www.google.com/maps?q=16.025928263564783,108.03455022954422",
  heroImage: heroUrl("cable-car-ba-na-hill2_oh8unw"),
  gallery: [
    "cable-car-ba-na-hill_vmlxge",
    "cable-car-ba-na-hill4_ieufop",
    "cable-car-ba-na-hill3_e6d40c",
  ],
  seoDescription:
    "The Bà Nà Hills cable car held three Guinness World Records simultaneously - longest single-wire system, greatest height difference, and longest non-stop wire - carrying passengers 5,801 metres from the forest floor to 1,487 metres through the cloud layer above Đà Nẵng.",
  tips: [
    "The ride takes about 20 minutes each way - sit on the right side going up for the best views over the forest canopy and the first glimpse of clouds",
    "The cable car runs in all weather including light rain - heavy storms may cause temporary suspension, check with staff at the base station",
    "Morning departures (7:30–8:30 AM) have the shortest queues and the best chance of clear visibility through the cloud layer",
    "The transition through the cloud layer is the most memorable part of the ride - you enter grey mist and emerge into sunshine above within 30–60 seconds",
    "There are multiple cable car lines within the complex - the main Suối Mơ to Ga Tàu line is the record-holder and the one most visitors take first",
  ],
  content: {
    intro:
      "The Bà Nà Hills cable car system was built by the French company Poma between 2009 and 2013 and held three Guinness World Records simultaneously upon completion: longest single-wire cable car system (5,801 metres), greatest height difference between base and summit stations (1,291 metres), and longest non-stop wire. The records have since been surpassed by Fansipan's cable car in Sa Pa, but the Bà Nà system remains one of the most dramatic cable car rides in the world for a different reason: the journey passes through a distinct cloud layer that sits permanently over the mountain at approximately 800–1,000 metres, creating a 30-second passage from overcast grey to clear blue sky that passengers consistently describe as one of the most unexpected moments of their Vietnam trip.",
    howToGetThere:
      "The base station (Suối Mơ Station) is 25km west of Đà Nẵng city centre, accessible by taxi, Grab, or hotel shuttle. From central Đà Nẵng, the drive takes approximately 45 minutes. Grab rides cost approximately 250,000–350,000 VND one way. Most hotels in Đà Nẵng and Hội An offer day-tour packages that include return transfer and the Bà Nà Hills entrance ticket. The cable car is the only way to reach the summit complex - there is no road access for visitors.",
    whatToExpect:
      "The gondolas hold 8 passengers and are fully enclosed with large glass windows on all sides. The ride begins over dense tropical forest, climbing steeply above the tree canopy before entering the cloud layer. Inside the cloud, visibility drops to near zero and the temperature drops noticeably. The emergence from cloud into sunshine - looking down at a sea of white cloud stretching to the horizon - is the defining moment of the ride. The summit station opens directly into the French Village complex. Multiple cable car lines operate within the complex, connecting different sections of the mountain - the internal lines are shorter and used to move between the village, the Golden Bridge area, and the lower gardens.",
    travelTips:
      "The cable car is simultaneously the transport to the summit and one of the main experiences of Bà Nà Hills - unlike most cable cars which are purely functional, this one is worth experiencing for the cloud transition alone. The ride down in the late afternoon, when the light turns golden and the cloud layer below glows, is often more scenic than the morning ascent. Queues for the return cable car can be long in the late afternoon as tour groups leave simultaneously - aim to descend before 4 PM or after 6 PM to avoid the worst of the wait.",
  },
}
