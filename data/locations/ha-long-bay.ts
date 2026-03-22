import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const haLongBay: Location = {
  slug: "ha-long-bay",
  name: "Ha Long Bay",
  provinces: ["quang-ninh"],
  destination: "ha-long",
  lat: "20.922560502308073",
  lng: "106.99130992781454",
  address: "Vịnh Hạ Long, Quảng Ninh",
  type: "nature",
  experiences: ["boat-tour", "kayaking", "caving", "photography", "swimming"],
  tags: ["🌊 UNESCO World Heritage", "🚢 Overnight Cruise", "🪨 Karst Landscape", "📸 Photography"],
  bestTime: "Sep – Nov (clear skies, calm water, best visibility) or Mar – Apr",
  entranceFee: "290,000 VND bay entrance + cruise/boat fee (varies by operator)",
  openingHours: "Year-round; cruise departures typically 7:30 AM – 12:00 PM from pier",
  mapUrl: "https://maps.google.com/?q=20.9101,107.1839",
  heroImage: heroUrl("ha-long-4_bdow9b"),
  gallery: [
    "ha-long-bay_llgame",
    "ha-long-bay-02_c55iey",
    "DSC_6150_pbgw7o",
  ],
  seoDescription:
    "Ha Long Bay - Vietnam's most iconic landscape and a UNESCO World Heritage Site - is 1,553 square kilometres of emerald water, nearly 2,000 limestone karst islands, sea caves, and floating villages in the Gulf of Tonkin. The only way to see it properly is by overnight cruise.",
  tips: [
    "A 2-day 1-night cruise is the minimum to see the bay properly - day trips spend most of their time travelling and give you only 3–4 hours on the water",
    "Book your cruise at least 2 weeks in advance in September–October and during Tết - quality boats sell out fast during peak season",
    "Mid-range cruises (around $100–150/night/person all-inclusive) offer much better value than budget options - the difference in boat quality and food is significant",
    "Check whether your cruise departs from Tuần Châu or Hạ Long International Port - they're on opposite sides of the city and affect your transfer logistics",
    "Avoid Ha Long Bay entirely from June to August if you're sensitive to crowds - July and August see the highest volume of domestic tourism and afternoon storms are common",
  ],
  content: {
    intro:
      "Ha Long Bay is Vietnam's most recognised natural landmark - a UNESCO World Heritage Site covering 1,553 square kilometres of the Gulf of Tonkin, dotted with 1,969 limestone karst islands rising from green-grey water. The Vietnamese name means 'descending dragon bay,' from a legend that a dragon mother and her children descended into the sea and formed the islands with their bodies and tail sweeps. The bay's core zone - 434 square kilometres, 775 islands - holds the main attractions: Sung Sot Cave, Ti Top Island, Cửa Vạn floating village, and the countless unnamed channels and lagoons that make the bay feel inexhaustible. Northeast of the core zone lies Bái Tử Long Bay; south lies Lan Hà Bay and Cát Bà Island. All three share the same karst landscape - Ha Long is simply the most developed and most visited of the three.",
    howToGetThere:
      "Ha Long Bay is approximately 170km east of Hanoi - around 2.5–3.5 hours by road via the Hạ Long Expressway. Most cruise operators include shuttle bus transfers from Hanoi as part of their package, picking up from Old Quarter hotels and depositing at the pier. The two main departure points are Tuần Châu International Marina (most Ha Long Bay Route 2 cruises) and Hạ Long International Passenger Port (Bái Tử Long cruises). There is also a seaplane service from Hanoi's Nội Bài Airport to Tuần Châu, cutting travel time to 45 minutes.",
    whatToExpect:
      "The overnight cruise is the standard Ha Long Bay format - guests board in the late morning, cruise to anchor spots, visit caves and islands by tender or kayak during the day, eat on board, sleep on the boat, and return to pier the following afternoon. The quality of the experience depends heavily on the boat. Budget junks pack 20+ cabins and run on tight schedules; mid-range boats offer smaller groups, better food, and more flexible itineraries; luxury cruises add private sun decks, spas, and cooking classes. The bay's main sightseeing route (Route 2) covers Sung Sot Cave, Ti Top Island, Soi Sim Island, and various caves and islets. The scenery - particularly at dawn and dusk when mist settles over the water between the karsts - is genuinely as dramatic as any photo suggests.",
    travelTips:
      "The single most important decision for Ha Long Bay is which boat you book. The bay's scenery is fixed - the karsts don't change - but the experience on board, the food, the crew, and the itinerary pacing vary enormously. Read recent reviews on TripAdvisor and compare inclusions carefully: some budget cruises charge extra for kayaking and cooking classes that mid-range boats include as standard. If your priority is fewer people and better beaches, consider Bái Tử Long Bay instead - the landscape is identical, the boats are slightly pricier, and the experience is meaningfully less crowded.",
  },
}
