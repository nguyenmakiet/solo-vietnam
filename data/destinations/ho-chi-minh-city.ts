import { Destination, MapWaypoint } from "./types"
import { heroUrl } from "@/lib/cloudinary"

// Map-only waypoints for itinerary mapPoints (places without a location page)
const WP = {
  myTho: { name: "My Tho", lat: 10.3526139, lng: 106.3643306 },
  benTre: { name: "Ben Tre", lat: 10.3151914, lng: 106.3134235 },
} satisfies Record<string, MapWaypoint>

export const hoChiMinhCity: Destination = {
  slug: "ho-chi-minh-city",
  name: "Ho Chi Minh City",
  updatedAt: "2026-11-02",
  province: "Ho Chi Minh City",
  provinceSlug: "ho-chi-minh-city",
  region: "south",

  description:
    "Ho Chi Minh City - still called Saigon by most people - is Vietnam's largest city: French colonial buildings next to glass towers, war history a short walk from rooftop bars, and street food late into the night. District 1 is easy to cover on foot, and the city is a good base for day trips to the Cu Chi Tunnels, the Mekong Delta around My Tho, and the mangroves of Can Gio.",

  tagline: "Colonial landmarks, war history and street food until late",

  heroImage: heroUrl("coffee-apartment-ho-chi-minh-city_blkaw8"),

  tags: ["city", "history", "food", "culture", "nightlife"],

  travelStyle: ["solo-friendly", "budget", "family"],

  gettingThere: [
    {
      from: "Tan Son Nhat Airport",
      vehicle: "bus",
      duration: "45-60 minutes",
      cost: "15,000-20,000 VND",
      notes: "Bus 109 stops near the T3 domestic terminal exit and runs via Truong Son and Pham Ngu Lao to near Ben Thanh Market, from about 5:30am every 20-30 minutes. Grab or Xanh SM costs about 150,000-250,000 VND, a metered taxi 170,000-280,000 VND, and fixed-price counter taxis 250,000-400,000 VND. Tan Son Nhat has domestic flights from most Vietnamese cities.",
    },
    {
      from: "My Tho (Mekong Delta)",
      vehicle: "bus",
      duration: "about 2 hours",
      cost: "100,000-150,000 VND",
      notes: "Buses run between My Tho and Mien Tay bus station. See the Mekong Delta page for the delta itself.",
    },
  ],

  itineraries: [
    {
      duration: "2D1N",
      label: "City highlights and Cu Chi",
      days: [
        {
          day: 1,
          title: "District 1: War Remnants Museum, Independence Palace, the colonial block, Nguyen Hue",
          stops: ["war-remnants-museum", "independence-palace", "notre-dame-cathedral-saigon", "saigon-central-post-office", "ben-thanh-market", "cafe-apartment-saigon"],
          notes: "Be at the War Remnants Museum when it opens at 7:30am (40,000 VND, audio guide 80,000 VND) - it's heavy going, allow 1.5-3 hours. Independence Palace is a short walk away: tickets from 40,000 VND per adult (2026), open 7am-6pm. Notre-Dame Cathedral is closed inside for restoration, so you see it from outside; the Central Post Office is right next to it. Lunch at Ben Thanh Market (6am-6pm). Rest through the hottest hours, then walk Nguyen Hue walking street in the evening and go up The Cafe Apartment at no. 42 (stairs free, elevator 5,000 VND, often refunded if you order). The night market outside Ben Thanh starts around 6pm, and on Saturday and Sunday nights Bui Vien becomes a walking street from 7pm.",
        },
        {
          day: 2,
          title: "Jade Emperor Pagoda, then the Cu Chi Tunnels",
          stops: ["jade-emperor-pagoda", "cu-chi-tunnels"],
          notes: "Jade Emperor Pagoda opens at 7am and is free - go early. Then head to the Cu Chi Tunnels, about 70km northwest: bus 13 from Ben Thanh, a taxi (about 500,000 VND one way), or a tour. Entry is 35,000 VND plus 100,000 VND for the guided tour; open until 5pm, allow 2-3 hours on site.",
        },
      ],
    },
    {
      duration: "3D2N",
      label: "City, Cu Chi and a Mekong day trip",
      days: [
        {
          day: 1,
          title: "District 1: War Remnants Museum, Independence Palace, the colonial block, Nguyen Hue",
          stops: ["war-remnants-museum", "independence-palace", "notre-dame-cathedral-saigon", "saigon-central-post-office", "ben-thanh-market", "cafe-apartment-saigon"],
          notes: "Be at the War Remnants Museum when it opens at 7:30am (40,000 VND, audio guide 80,000 VND) - it's heavy going, allow 1.5-3 hours. Independence Palace is a short walk away: tickets from 40,000 VND per adult (2026), open 7am-6pm. Notre-Dame Cathedral is closed inside for restoration, so you see it from outside; the Central Post Office is right next to it. Lunch at Ben Thanh Market (6am-6pm). Rest through the hottest hours, then walk Nguyen Hue walking street in the evening and go up The Cafe Apartment at no. 42 (stairs free, elevator 5,000 VND, often refunded if you order). The night market outside Ben Thanh starts around 6pm, and on Saturday and Sunday nights Bui Vien becomes a walking street from 7pm.",
        },
        {
          day: 2,
          title: "Jade Emperor Pagoda, then the Cu Chi Tunnels",
          stops: ["jade-emperor-pagoda", "cu-chi-tunnels"],
          notes: "Jade Emperor Pagoda opens at 7am and is free - go early. Then head to the Cu Chi Tunnels, about 70km northwest: bus 13 from Ben Thanh, a taxi (about 500,000 VND one way), or a tour. Entry is 35,000 VND plus 100,000 VND for the guided tour; open until 5pm, allow 2-3 hours on site.",
        },
        {
          day: 3,
          title: "Day trip: Thoi Son islet near My Tho (Mekong Delta)",
          stops: ["phoenix-unicorn-islands-my-tho"],
          notes: "Bus from Mien Tay bus station to My Tho takes about 2 hours (100,000-150,000 VND). Boat tours from the My Tho yacht port cost about 150,000-450,000 VND per person, private boats from about 1,000,000 VND. Typical stops: coconut candy workshops, a rowing boat down the small canals, a horse cart ride, don ca tai tu folk music and fruit gardens (best fruit season Jul-Oct). Con Phung islet and Vinh Trang pagoda are nearby. See the Mekong Delta page for more.",
          mapPoints: [WP.myTho, "phoenix-unicorn-islands-my-tho", WP.benTre],
          mapRouting: "straight",
        },
      ],
    },
    {
      duration: "4D3N",
      label: "City, Cu Chi, Mekong and Can Gio",
      days: [
        {
          day: 1,
          title: "District 1: War Remnants Museum, Independence Palace, the colonial block, Nguyen Hue",
          stops: ["war-remnants-museum", "independence-palace", "notre-dame-cathedral-saigon", "saigon-central-post-office", "ben-thanh-market", "cafe-apartment-saigon"],
          notes: "Be at the War Remnants Museum when it opens at 7:30am (40,000 VND, audio guide 80,000 VND) - it's heavy going, allow 1.5-3 hours. Independence Palace is a short walk away: tickets from 40,000 VND per adult (2026), open 7am-6pm. Notre-Dame Cathedral is closed inside for restoration, so you see it from outside; the Central Post Office is right next to it. Lunch at Ben Thanh Market (6am-6pm). Rest through the hottest hours, then walk Nguyen Hue walking street in the evening and go up The Cafe Apartment at no. 42 (stairs free, elevator 5,000 VND, often refunded if you order). The night market outside Ben Thanh starts around 6pm, and on Saturday and Sunday nights Bui Vien becomes a walking street from 7pm.",
        },
        {
          day: 2,
          title: "Jade Emperor Pagoda, then the Cu Chi Tunnels",
          stops: ["jade-emperor-pagoda", "cu-chi-tunnels"],
          notes: "Jade Emperor Pagoda opens at 7am and is free - go early. Then head to the Cu Chi Tunnels, about 70km northwest: bus 13 from Ben Thanh, a taxi (about 500,000 VND one way), or a tour. Entry is 35,000 VND plus 100,000 VND for the guided tour; open until 5pm, allow 2-3 hours on site.",
        },
        {
          day: 3,
          title: "Day trip: Thoi Son islet near My Tho (Mekong Delta)",
          stops: ["phoenix-unicorn-islands-my-tho"],
          notes: "Bus from Mien Tay bus station to My Tho takes about 2 hours (100,000-150,000 VND). Boat tours from the My Tho yacht port cost about 150,000-450,000 VND per person, private boats from about 1,000,000 VND. Typical stops: coconut candy workshops, a rowing boat down the small canals, a horse cart ride, don ca tai tu folk music and fruit gardens (best fruit season Jul-Oct). Con Phung islet and Vinh Trang pagoda are nearby. See the Mekong Delta page for more.",
          mapPoints: [WP.myTho, "phoenix-unicorn-islands-my-tho", WP.benTre],
          mapRouting: "straight",
        },
        {
          day: 4,
          title: "Day trip: Can Gio mangroves and Monkey Island",
          stops: ["can-gio-monkey-island"],
          notes: "Can Gio is about 50km south, via the Binh Khanh ferry. Monkey Island is open 7am-5pm; entry is 100,000 VND for foreigners (35,000 VND for Vietnamese) and includes the monkey show. A canoe trip deeper into the Rung Sac mangrove reserve costs about 600,000-1,000,000 VND return, depending on group size. The main beach at Can Thanh (30/4 Beach) has been fenced off since 2025 for a land reclamation and resort project expected to run until around 2029-2030; the old ferry pier nearby still has sea views.",
        },
      ],
    },
  ],

  bestTimeSummary: "Dec-Apr is the dry season and the easiest time to visit - Jan-Mar get almost no rain. May-Nov is the rainy season, with heavy afternoon showers; Sep-Oct are the wettest months. The city stays busy all year, so plan museums and cafes for rainy afternoons.",
  bestMonths: [1, 2, 3, 4, 12],

  recommendedStay: "2-4 days",

  transport: "Walk within District 1. Use Grab or Xanh SM for longer distances - easier than street taxis and less risk of being overcharged. Metro Line 1 runs from Ben Thanh to Suoi Tien, 5am-10pm Mon-Thu and 5am-11pm Fri-Sun (last departures). The riverbus along the Saigon River costs 15,000 VND, from 8:30am with the last boat at 10pm. Avoid the 8-9:30am and 5:30-7pm rush hours.",

  rentals: [
    {
      vehicle: "motorbike",
      priceRange: "about 100,000-200,000 VND/day",
      notes: "For most visitors Grab or Xanh SM is easier than riding in Saigon traffic. If you rent: shops usually ask for a 1-4 million VND deposit or your ID. You need an International Driving Permit (1968 convention) with the motorcycle category plus your home licence. Get a written contract, check brakes, lights and tyres and photograph the bike before you ride. Hotels can arrange a bike, which is convenient but usually 20,000-50,000 VND dearer and the bike quality is unchecked - renting direct is better. Listed for reference only - we're not affiliated, compare reviews.",
      shops: [
        { name: "Saigon Motorbike Rental", area: "District 1", address: "70/1A Tran Dinh Xu, Co Giang, District 1", phone: "0988 717 016", url: "https://saigonmotorbikerental.com/", notes: "English-speaking line and WhatsApp. Semi-automatic (Wave/Blade) 150,000, Honda Air Blade 200,000, Suzuki EN150 manual 350,000 VND/day in the city; riding outside the city adds 30,000 VND/day for the first two." },
        { name: "Tigit Motorbikes", area: "Cat Lai", address: "24 Nguyen Thanh Son, Cat Lai", url: "https://www.tigitmotorbikes.com/", notes: "Pay by card or cash with a pre-authorised deposit; prices listed on their site." },
        { name: "Bike Saigon", area: "Tan Binh, District 3, Go Vap", address: "14 Pham Cu Luong, Tan Son Hoa, Tan Binh (near the airport); 400 Le Van Sy, District 3; 891 Nguyen Kiem, Go Vap", phone: "0974 424 163", url: "https://www.bikesaigon.vn/home", notes: "Motorbikes from about 180,000 VND/day; book by phone or Zalo." },
      ],
      verifiedAt: "2026-11-02",
    },
  ],

  nearbyDestinations: ["mekong-delta", "con-dao", "phu-quoc", "da-lat"],

  faqs: [
    {
      question: "How many days do I need in Ho Chi Minh City?",
      answer: "Two days covers District 1 and the Cu Chi Tunnels. Add a day for a Mekong Delta trip to Thoi Son near My Tho, and another for the Can Gio mangroves.",
    },
    {
      question: "How do I get from Tan Son Nhat Airport to District 1?",
      answer: "Bus 109 costs 15,000-20,000 VND and runs from about 5:30am every 20-30 minutes; it takes 45-60 minutes to near Ben Thanh Market, and the stop is near the T3 domestic exit. Grab or Xanh SM costs about 150,000-250,000 VND, a metered taxi 170,000-280,000 VND, and the fixed-price taxi counters 250,000-400,000 VND.",
    },
    {
      question: "How much is Independence Palace and when is it open?",
      answer: "Tickets start from 40,000 VND per adult (2026). It's open 7am-6pm; the ticket office at the 135 Nam Ky Khoi Nghia gate sells 7am-6pm, the 106 Nguyen Du gate 8am-4pm. It can close for government events. See the [official site](https://dinhdoclap.gov.vn/en/) for all ticket types.",
    },
    {
      question: "Can I visit the Cu Chi Tunnels without a tour?",
      answer: "Yes. The tunnels are about 70km northwest of the centre: take bus 13 from Ben Thanh or a taxi (about 500,000 VND one way). Entry is 35,000 VND plus 100,000 VND for the guided tour, open 7am-5pm.",
    },
    {
      question: "Is the metro useful for visitors?",
      answer: "Metro Line 1 runs from Ben Thanh to Suoi Tien in the east of the city. A single trip is 7,000-20,000 VND in cash (6,000-19,000 VND cashless), a day pass 40,000 VND and a 3-day pass 90,000 VND. It runs 5am-10pm Mon-Thu and 5am-11pm Fri-Sun (last departures).",
    },
    {
      question: "Is Ho Chi Minh City safe? What scams should I watch for?",
      answer: "The main risks are phone snatching and overcharging. Snatching by passing motorbikes is much less common than it used to be but still happens: keep your phone away from the road side, hold it firmly and carry your bag on the side away from traffic. To avoid being overcharged, agree prices before you eat, ride or buy, and use Grab or Xanh SM rather than street taxis.",
    },
    {
      question: "When is the best time to visit?",
      answer: "Dec-Apr is the dry season. May-Nov is the rainy season, with heavy afternoon showers, wettest in Sep-Oct. The city works year-round - keep museums and cafes for rainy afternoons.",
    },
    {
      question: "How do I do a Mekong Delta day trip from Ho Chi Minh City?",
      answer: "Take a bus from Mien Tay bus station to My Tho (about 2 hours, 100,000-150,000 VND), then a boat tour to Thoi Son islet from the My Tho yacht port (about 150,000-450,000 VND per person, private boats from about 1,000,000 VND). See the [Mekong Delta page](/destinations/mekong-delta) for longer routes.",
    },
  ],

  emergencyContacts: [
    {
      type: "tourist-hotline",
      name: "Ho Chi Minh City Department of Tourism",
      phone: "028 3824 2902",
      hours: "Office hours",
      notes: "Tourist information and complaints about services.",
      verifiedAt: "2026-11-02",
    },
    {
      type: "medical",
      name: "Family Medical Practice Ho Chi Minh City",
      phone: "028 3822 7848",
      altPhones: ["091 3234 911"],
      hours: "24 hours",
      address: "Diamond Plaza, 34 Le Duan, District 1",
      notes: "International clinic. The second number is the emergency doctor.",
      sourceUrl: "https://hochiminhcity.mfa.gov.sg/consular-services/list-of-hospitals/",
      verifiedAt: "2025-11-06",
    },
    {
      type: "medical",
      name: "Columbia Asia Saigon",
      phone: "028 3823 8888",
      address: "8 Alexandre de Rhodes, District 1",
      notes: "International clinic with an emergency room.",
      sourceUrl: "https://hochiminhcity.mfa.gov.sg/consular-services/list-of-hospitals/",
      verifiedAt: "2025-11-06",
    },
    {
      type: "medical",
      name: "FV Hospital",
      phone: "028 5411 3333",
      address: "6 Nguyen Luong Bang, District 7",
      notes: "Private international hospital.",
      sourceUrl: "https://hochiminhcity.mfa.gov.sg/consular-services/list-of-hospitals/",
      verifiedAt: "2025-11-06",
    },
    {
      type: "medical",
      name: "International SOS Clinic",
      phone: "028 3829 8424",
      hours: "24 hours",
      address: "167A Nam Ky Khoi Nghia",
      notes: "International clinic; also handles medical evacuation.",
      sourceUrl: "https://hochiminhcity.mfa.gov.sg/consular-services/list-of-hospitals/",
      verifiedAt: "2025-11-06",
    },
    {
      type: "medical",
      name: "Cho Ray Hospital",
      phone: "028 3855 4137",
      address: "201B Nguyen Chi Thanh",
      notes: "Large public hospital.",
      sourceUrl: "https://hochiminhcity.mfa.gov.sg/consular-services/list-of-hospitals/",
      verifiedAt: "2025-11-06",
    },
  ],

  coordinates: {
    lat: 10.776,
    lng: 106.7,
  },
  mapPriority: 1,
  mapRank: 12,
  mapZoom: 13,
}
