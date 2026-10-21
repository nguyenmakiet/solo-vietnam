import { Destination } from "./types"
import { heroUrl } from "@/lib/cloudinary"

export const hoiAn: Destination = {
  slug: "hoi-an",
  name: "Hoi An",
  updatedAt: "2026-10-21",
  province: "Quang Nam",
  provinceSlug: "quang-nam",
  region: "central",

  description:
    "Hoi An is one of Vietnam's best-preserved old trading ports - a UNESCO World Heritage town of yellow walls, wooden merchant houses, silk lanterns and the Thu Bon River, about 45 minutes from Da Nang. Walk the Old Town at 6-7am before the tour groups, take a lantern boat at sunset, and cycle out to the herb gardens, coconut forest and beach when the centre gets crowded. One night covers the highlights; two or three let you slow down, which is when Hoi An is at its best.",

  tagline: "Lanterns, tailors and cao lau you can only eat here",

  heroImage: heroUrl("hoi-an_qxhyjl"),

  tags: ["history", "food", "beach", "culture"],

  travelStyle: ["solo-friendly", "budget", "family", "easy"],

  gettingThere: [
    {
      from: "Da Nang",
      vehicle: "bus",
      duration: "about 1 hour",
      cost: "20,000-40,000 VND",
      notes: "Public buses run from Da Nang central bus station to Hoi An bus station, roughly 5:30am-5:30pm, every 20-30 minutes; route numbers have changed since the 2025 merger, so check the current one locally. A Grab car takes 45-50 minutes and costs about 300,000-450,000 VND; Grab bike is cheaper.",
    },
    {
      from: "Ho Chi Minh City",
      vehicle: "fly",
      duration: "about 1h20",
      cost: "400,000-1,600,000 VND one way",
      notes: "Fly into Da Nang, then about 45-50 minutes to Hoi An by car.",
    },
    {
      from: "Hanoi",
      vehicle: "fly",
      duration: "about 1h20",
      cost: "400,000-1,600,000 VND one way",
      notes: "Fly into Da Nang, then about 45-50 minutes to Hoi An by car.",
    },
    {
      from: "Hue",
      vehicle: "bus",
      duration: "3-4 hours",
      cost: "check locally",
      notes: "Direct buses and limousine vans daily. Riding south by motorbike over the Hai Van Pass is one of Vietnam's best-known coastal rides.",
    },
  ],

  itineraries: [
    {
      duration: "2D1N",
      label: "Quick highlights",
      days: [
        {
          day: 1,
          title: "Ancient Town + Japanese Bridge + Tailor",
          stops: [
            "hoi-an-ancient-town",
            "japanese-bridge",
          ],
          notes: "Arrive early morning - the Old Town at 7am is a completely different place from midday. Book a tailor on day 1 if you want anything made - needs 24-48 hours minimum. Buy the Old Town ticket (120,000 VND, covers 5 heritage sites). Evening: lanterns along the river. Also: Tan Ky Old House, Fujian Assembly Hall, night market.",
        },
        {
          day: 2,
          title: "Tra Que Village + Bay Mau Coconut Forest + An Bang Beach",
          stops: [
            "tra-que-village",
            "bay-mau-coconut-forest",
            "an-bang-beach",
          ],
          notes: "Cycle to Tra Que for a morning herb garden and cooking class. Afternoon: round basket boat through Bay Mau Coconut Forest. Late afternoon at An Bang Beach - less crowded than Cua Dai, better food options.",
        },
      ],
    },
    {
      duration: "3D2N",
      label: "Full experience",
      days: [
        {
          day: 1,
          title: "Ancient Town + Japanese Bridge + Evening lanterns",
          stops: [
            "hoi-an-ancient-town",
            "japanese-bridge",
          ],
          notes: "Dawn start. Book tailor immediately. Old Town ticket covers 5 sites. Evening: full moon lantern festival if timing works (14th lunar calendar each month). Also: Tan Ky Old House, Fujian Assembly Hall, Central Market.",
        },
        {
          day: 2,
          title: "Countryside + Coconut Forest + Beach",
          stops: [
            "tra-que-village",
            "bay-mau-coconut-forest",
            "an-bang-beach",
          ],
          notes: "Full day by bicycle. Tra Que cooking class in the morning. Basket boat at Bay Mau. Sunset at An Bang.",
        },
        {
          day: 3,
          title: "My Son Sanctuary day trip",
          stops: [
            "my-son-sanctuary",
          ],
          notes: "My Son is 40km from Hoi An - half day tour is easiest. Go early, it gets brutally hot by midday. Alternatively: slow morning, tailor pickup, final wander. Or day trip to Da Nang for Marble Mountains + Son Tra Peninsula.",
        },
      ],
    },
    {
      duration: "4D3N",
      label: "Full stay with day trips",
      days: [
        {
          day: 1,
          title: "Ancient Town + Tailor",
          stops: [
            "hoi-an-ancient-town",
            "japanese-bridge",
          ],
          notes: "Arrive, drop bags, book tailor immediately. Dawn walk is unmissable. Also: Tan Ky Old House, Fujian Assembly Hall.",
        },
        {
          day: 2,
          title: "Countryside + Bay Mau + An Bang Beach",
          stops: [
            "tra-que-village",
            "bay-mau-coconut-forest",
            "an-bang-beach",
          ],
          notes: "Full countryside and beach day by bicycle.",
        },
        {
          day: 3,
          title: "My Son Sanctuary + tailor pickup",
          stops: [
            "my-son-sanctuary",
          ],
          notes: "Go at opening (6am) to beat the heat and crowds. Back by noon. Afternoon: tailor pickup, final shopping.",
        },
        {
          day: 4,
          title: "Cooking class + slow Old Town farewell",
          stops: [
            "hoi-an-ancient-town",
          ],
          notes: "Morning cooking class (most include Central Market visit). Final walk through the Old Town. Lunch before departure.",
        },
      ],
    },
  ],

  cost: {
    budget: "400,000-800,000 VND/day",
    midRange: "800,000-1,500,000 VND/day",
    comfortable: "1,500,000+ VND/day",
    notes: "Old Town entry ticket 120,000 VND (5 sites). Tailor-made clothes 300,000-2,000,000+ VND. Cooking class 300,000-600,000 VND.",
  },

  bestTimeSummary: "Feb-Aug dry season is best. Full moon lantern festival monthly. Avoid Oct-Nov - Hoi An floods badly, sometimes for days.",
  bestMonths: [2, 3, 4, 5, 6, 7, 8],

  recommendedStay: "2-4 days",

  transport: "Bicycle rental is the best way around - flat terrain, short distances, most guesthouses provide free bikes. Walking works fine in the Old Town.",

  nearbyDestinations: ["da-nang", "hue"],

  coordinates: {
    lat: 15.8801,
    lng: 108.338,
  },
  mapPriority: 1,
  mapRank: 2,
  mapZoom: 13,
}
