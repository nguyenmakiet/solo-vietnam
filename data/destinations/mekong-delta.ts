import { Destination, MapWaypoint } from "./types"
import { heroUrl } from "@/lib/cloudinary"

// Map-only waypoints for itinerary mapPoints (places without a location page)
const WP = {
  ninhKieu: { name: "Ninh Kieu wharf", lat: 10.0336754, lng: 105.788643 },
  myTho: { name: "My Tho", lat: 10.3526139, lng: 106.3643306 },
  benTre: { name: "Ben Tre", lat: 10.3151914, lng: 106.3134235 },
  chauDoc: { name: "Chau Doc", lat: 10.7107881, lng: 105.1202512 },
  triTon: { name: "Tri Ton", lat: 10.4293654, lng: 105.0015133 },
  traVinh: { name: "Tra Vinh", lat: 9.8870461, lng: 106.34497 },
  socTrang: { name: "Soc Trang", lat: 9.622732, lng: 105.983491 },
  bacLieu: { name: "Bac Lieu", lat: 9.29935, lng: 105.723718 },
  giaRai: { name: "Gia Rai", lat: 9.238124, lng: 105.456822 },
  caMau: { name: "Ca Mau", lat: 9.176205, lng: 105.150808 },
} satisfies Record<string, MapWaypoint>

export const mekongDelta: Destination = {
  slug: "mekong-delta",
  name: "Mekong Delta",
  province: "Can Tho",
  provinceSlug: "can-tho",
  region: "south",

  description:
    "The Mekong Delta is Vietnam's rice bowl: a maze of rivers, canals and coconut groves stretching from Saigon to the southern tip of the country. Most visitors stop at My Tho and Can Tho for the floating markets, but the delta runs much further - Khmer pagodas in Tra Vinh and Soc Trang, flooded cajuput forest and palm-studded fields around Chau Doc, and the mangroves of Ca Mau Cape at the very end of the road. Go slow, and go early.",

  tagline: "Rivers, coconuts, and floating markets at dawn",

  heroImage: heroUrl("mekong-delta_wqegef"),

  tags: ["nature", "culture", "food", "boat-tour"],

  travelStyle: ["solo-friendly", "budget", "family"],

  gettingThere: [
    {
      from: "Ho Chi Minh City",
      vehicle: "bus",
      duration: "3.5-4 hours",
      cost: "120,000-200,000 VND",
      notes: "From Mien Tay bus station. Can Tho is the main hub - frequent departures.",
    },
    {
      from: "Ho Chi Minh City",
      vehicle: "bus",
      duration: "2 hours",
      cost: "80,000-120,000 VND",
      notes: "My Tho is about 70km from HCMC. Plan a full day - most boat trips run 8am to 5pm.",
    },
    {
      from: "Ho Chi Minh City",
      vehicle: "motorbike",
      duration: "5-6 hours",
      cost: "Fuel only",
      notes: "To Chau Doc (An Giang). Base for Tra Su, Vinh Trung and Tri Ton.",
    },
    {
      from: "Ho Chi Minh City",
      vehicle: "motorbike",
      duration: "7-8 hours",
      cost: "Fuel only",
      notes: "To Ca Mau. Ca Mau Cape (Dat Mui) is a further 2h south.",
    },
  ],

  itineraries: [
    {
      duration: "1D",
      label: "Day trip from HCMC",
      days: [
        {
          day: 1,
          title: "My Tho + Phoenix & Unicorn Islands",
          stops: ["phoenix-unicorn-islands-my-tho"],
          notes: "My Tho is the closest delta town to HCMC (about 70km). Boat through the canals to Ben Tre for coconut candy making and river life. A full day: leave around 8am, back by early evening. Touristy, but a fair first taste of the delta.",
          mapPoints: [WP.myTho, "phoenix-unicorn-islands-my-tho", WP.benTre],
          mapRouting: "straight",
        },
      ],
    },
    {
      duration: "2D1N",
      label: "Can Tho + Cai Rang floating market",
      days: [
        {
          day: 1,
          title: "Arrive in Can Tho, Ninh Kieu riverside",
          stops: [],
          notes: "Arrive in the afternoon. Walk the Ninh Kieu riverside and night market. Book your boat for the next morning and get an early night.",
          mapPoints: [WP.ninhKieu],
        },
        {
          day: 2,
          title: "Cai Rang floating market at dawn + canal villages",
          stops: ["cai-rang-floating-market"],
          notes: "Leave Ninh Kieu pier by boat before 5:30am - the market is busiest at first light and food boats sell out by around 7am. Back for breakfast, then a slower canal ride through the smaller waterways before heading home.",
          mapPoints: [WP.ninhKieu, "cai-rang-floating-market"],
          mapRouting: "straight",
        },
      ],
    },
    {
      duration: "3D2N",
      label: "Classic delta: My Tho to Chau Doc",
      days: [
        {
          day: 1,
          title: "My Tho & Ben Tre islands, on to Can Tho",
          stops: ["phoenix-unicorn-islands-my-tho"],
          notes: "Morning on the islands between My Tho and Ben Tre: coconut workshops, canal rowing boats, fruit gardens. Continue west to Can Tho in the afternoon and sleep near Ninh Kieu.",
          mapPoints: [WP.myTho, "phoenix-unicorn-islands-my-tho", WP.benTre, WP.ninhKieu],
        },
        {
          day: 2,
          title: "Cai Rang at dawn, ride to Chau Doc",
          stops: ["cai-rang-floating-market"],
          notes: "Floating market at first light, back by mid-morning. Can Tho to Chau Doc is about 3h by motorbike (allow 2.5-3.5h). Sleep in Chau Doc.",
          mapPoints: ["cai-rang-floating-market", WP.chauDoc],
        },
        {
          day: 3,
          title: "Tra Su cajuput forest + Vinh Trung fields",
          stops: ["tra-su-cajuput-forest", "vinh-trung-fields"],
          notes: "Tra Su is best early morning when the birds are active, and at its most dramatic in flood season (Sep-Nov). Vinh Trung's palm-lined fields are a short ride away in Tinh Bien. Chau Doc back to HCMC is about 5.5h by motorbike (allow 5-6h) - a long day after the forest, so many people add a night in Chau Doc or continue to Tri Ton instead.",
          mapPoints: [WP.chauDoc, "tra-su-cajuput-forest", "vinh-trung-fields", WP.chauDoc],
        },
      ],
    },
    {
      duration: "5D4N",
      label: "Khmer temples & the coast to Ca Mau Cape",
      days: [
        {
          day: 1,
          title: "HCMC to Tra Vinh, Ba Om Lake",
          stops: ["ba-om-lake"],
          notes: "HCMC to Tra Vinh is about 3.5h by motorbike (allow 3-4h). Late afternoon at Ba Om, the square Khmer lake ringed by old trees. In mid-November it hosts the Ok Om Bok lantern festival.",
          mapPoints: [WP.traVinh, "ba-om-lake"],
        },
        {
          day: 2,
          title: "Soc Trang Khmer pagodas",
          stops: ["khleang-pagoda", "som-rong-pagoda", "bat-pagoda-soc-trang", "chen-kieu-pagoda"],
          notes: "Tra Vinh to Soc Trang is about 2h (allow 1.5-2.5h). Kh'leang and Som Rong are both in town, Bat Pagoda and Chen Kieu a short ride out. A full temple day - dress modestly and go early to beat the heat. Sleep in Soc Trang.",
          mapPoints: [WP.traVinh, "khleang-pagoda", "som-rong-pagoda", "bat-pagoda-soc-trang", "chen-kieu-pagoda", WP.socTrang],
        },
        {
          day: 3,
          title: "Bac Lieu coast, on to Ca Mau",
          stops: ["xiem-can-pagoda", "tac-say-church"],
          notes: "Soc Trang to Bac Lieu is about 1.5h (allow 1-2h). Xiem Can sits near the coast; Tac Say is in Gia Rai, on the road to Ca Mau. Bac Lieu to Ca Mau is about 2.5h (allow 2-3h), so this is the longest riding day. Sleep in Ca Mau.",
          mapPoints: [WP.socTrang, "xiem-can-pagoda", WP.bacLieu, WP.giaRai, "tac-say-church", WP.caMau],
        },
        {
          day: 4,
          title: "Ca Mau Cape, the southern tip of Vietnam",
          stops: ["mui-ca-mau-national-park"],
          notes: "Ca Mau to Dat Mui is about 2h each way (allow 1.5-2.5h). Start early: mangrove walk, the landmark at the tip, back to Ca Mau by afternoon. Best in the Nov-Apr dry season. Sleep in Ca Mau.",
          mapPoints: [WP.caMau, "mui-ca-mau-national-park", WP.caMau],
        },
        {
          day: 5,
          title: "Ride back to HCMC",
          stops: [],
          notes: "Ca Mau to HCMC is about 7.5h by motorbike (allow 7-8h). Leave early and break the ride in Can Tho for lunch.",
          mapPoints: [WP.caMau],
        },
      ],
    },
    {
      duration: "2D1N",
      label: "That Son: An Giang's forests and Khmer hills",
      days: [
        {
          day: 1,
          title: "Tra Su cajuput forest + Vinh Trung fields",
          stops: ["tra-su-cajuput-forest", "vinh-trung-fields"],
          notes: "Base yourself in Chau Doc. Tra Su at opening for the birds, then the palm-dotted fields of Vinh Trung. Tra Su peaks in flood season (Sep-Nov).",
          mapPoints: [WP.chauDoc, "tra-su-cajuput-forest", "vinh-trung-fields"],
        },
        {
          day: 2,
          title: "Tri Ton: Ta Pa temple and fields",
          stops: ["ta-pa-temple", "ta-pa-fields"],
          notes: "Chau Doc to Tri Ton is about 1h (allow 30min-1.5h). Climb to Ta Pa temple for the view, then the fields below - green Jul-Nov, golden at harvest.",
          mapPoints: [WP.chauDoc, WP.triTon, "ta-pa-temple", "ta-pa-fields"],
        },
      ],
    },
  ],

  cost: {
    budget: "250,000-500,000 VND/day",
    midRange: "500,000-1,000,000 VND/day",
    comfortable: "1,000,000+ VND/day",
    notes: "One of the most affordable regions in Vietnam. Shared boats from 50,000 VND, private boats from 400,000 VND, island tours around 200,000-300,000 VND. Homestay with meals: 200,000-400,000 VND/night.",
  },

  bestTimeSummary: "Nov-Apr dry season is the safest window for floating markets, Khmer temples and Ca Mau - and covers the Ok Om Bok (mid-Nov) and Chol Chnam Thmay (mid-Apr) festivals. Sep-Nov is flood season in An Giang and Dong Thap: Tra Su is at its best (peak in October), but some rural roads flood. May-Aug is hot with afternoon showers, though fruit season peaks.",
  bestMonths: [1, 2, 3, 4, 11, 12],

  recommendedStay: "2-6 days",

  transport: "Boat for canals and waterways. Bicycle for flat river roads. Bus between towns. Grab available in Can Tho city.",

  nearbyDestinations: ["phu-quoc", "con-dao", "ho-chi-minh-city"],

  coordinates: {
    lat: 10.0452,
    lng: 105.7469,
  },
  mapPriority: 2,
  mapZoom: 9,
}
