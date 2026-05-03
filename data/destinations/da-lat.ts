import { Destination } from "./types"
import { heroUrl } from "@/lib/cloudinary"

export const daLat: Destination = {
  slug: "da-lat",
  name: "Da Lat",
  province: "Lam Dong",
  provinceSlug: "lam-dong",
  region: "south",

  description:
    "Da Lat is Vietnam's mountain escape - a former French hill station at 1,500m with cool weather year-round, pine forests, flower farms, waterfalls, and one of the country's most distinctive coffee cultures. It's also the adventure sports capital of the Central Highlands: canyoning, mountain biking, and trekking. The city itself is architecturally eccentric - French villas, Soviet-era buildings, and the Crazy House all in the same street.",

  tagline: "Vietnam's little mountain escape",

  heroImage: heroUrl("da-lat_abfvxq"),

  tags: ["mountain", "nature", "food", "adventure"],

  travelStyle: ["solo-friendly", "budget", "family", "adventure"],

  gettingThere: [
    {
      from: "Ho Chi Minh City",
      vehicle: "bus",
      duration: "6–7 hours",
      cost: "150,000–250,000 VND",
      notes: "Overnight sleeper buses run direct. Day buses also available from Mien Dong bus station.",
    },
    {
      from: "Ho Chi Minh City",
      vehicle: "fly",
      duration: "1 hour",
      cost: "from 700,000 VND",
      notes: "Fly into Lien Khuong Airport, 30km south of Da Lat. Taxi ~150,000 VND.",
    },
    {
      from: "Nha Trang",
      vehicle: "bus",
      duration: "4 hours",
      cost: "100,000–150,000 VND",
      notes: "Scenic mountain road - great if combining the two destinations.",
    },
    {
      from: "Mui Ne",
      vehicle: "bus",
      duration: "4–5 hours",
      cost: "100,000–150,000 VND",
    },
  ],

  itineraries: [
    {
      duration: "2D1N",
      label: "Quick city escape",
      days: [
        {
          day: 1,
          title: "Crazy House + Xuan Huong Lake + coffee tour",
          stops: [
            "crazy-house",
            "tuyen-lam-lake",
          ],
          notes: "Crazy House is genuinely unlike anything else in Vietnam - worth the 60,000 VND entry. Xuan Huong Lake for the evening stroll. Da Lat has some of the best specialty coffee in Vietnam - dedicate time to the cafe scene.",
        },
        {
          day: 2,
          title: "Langbiang Mountain + waterfalls",
          stops: [
            "langbiang-mountain",
            "datanla-waterfall",
            "elephant-waterfall",
          ],
          notes: "Langbiang sunrise is spectacular if you're willing to be there at 5am. Elephant Waterfall is the most dramatic in the area. Datanla has a canyoning option for the adventurous.",
        },
      ],
    },
    {
      duration: "3D2N",
      label: "Full highland experience",
      days: [
        {
          day: 1,
          title: "City exploration + Crazy House + coffee",
          stops: [
            "crazy-house",
            "dalat-railway-station",
          ],
          notes: "Arrive, explore on foot. Da Lat Railway Station is the most charming in Vietnam - still runs tourist trains to Trai Mat village. Afternoon: wander the flower markets and French Quarter.",
        },
        {
          day: 2,
          title: "Langbiang + Tuyen Lam Lake",
          stops: [
            "langbiang-mountain",
            "tuyen-lam-lake",
          ],
          notes: "Early start for Langbiang summit. Tuyen Lam Lake by motorbike in the afternoon - pine forests, quiet roads, floating restaurants on the water.",
        },
        {
          day: 3,
          title: "Waterfalls + coffee farms",
          stops: [
            "elephant-waterfall",
            "datanla-waterfall",
          ],
          notes: "Elephant Waterfall is 25km from the city - combine with a visit to a local coffee or tea farm. Da Lat produces some of Vietnam's best arabica. Canyoning at Datanla if you want the adrenaline.",
        },
      ],
    },
  ],

  cost: {
    budget: "300,000–600,000 VND/day",
    midRange: "600,000–1,200,000 VND/day",
    comfortable: "1,200,000+ VND/day",
    notes: "Motorbike rental: 100,000–150,000 VND/day. Langbiang entry: 50,000 VND. Canyoning tours: 500,000–800,000 VND. Specialty coffee: 30,000–80,000 VND per cup.",
  },

  bestTimeSummary: "Dec–Mar cool and dry, ideal. Can visit year-round - even rainy season (May–Oct) has cool weather and fewer crowds.",

  recommendedStay: "2–3 days",

  transport: "Motorbike rental is the best way around - roads are good and traffic is manageable. Walking works well in the city centre.",

  nearbyDestinations: ["nha-trang", "phan-thiet", "ho-chi-minh-city"],

  coordinates: {
    lat: 11.9404,
    lng: 108.4583,
  },
}
