import { Destination } from "./types"
import { heroUrl } from "@/lib/cloudinary"

export const hoiAn: Destination = {
  slug: "hoi-an",
  name: "Hoi An",
  province: "Quang Nam",
  provinceSlug: "quang-nam",
  region: "central",

  description:
    "Hoi An is Vietnam's best-preserved ancient trading port - a UNESCO World Heritage town of yellow walls, wooden merchant houses, silk lanterns, and the Thu Bon River. Go early morning before the tour groups arrive, eat your way through the local market, get something made at a tailor, and cycle out to the rice fields or beach when the Old Town gets too crowded. It rewards slow travel more than any other city in Vietnam.",

  tagline: "Lanterns, tailor shops, and the best Cao Lau in the world",

  heroImage: heroUrl("hoi-an_qxhyjl"),

  tags: ["history", "food", "beach", "culture"],

  travelStyle: ["solo-friendly", "budget", "family", "easy"],

  gettingThere: [
    {
      from: "Da Nang",
      vehicle: "bus",
      duration: "45 minutes",
      cost: "30,000–50,000 VND",
      notes: "Bus No.1 runs frequently. Grab is ~150,000–200,000 VND and more convenient with luggage.",
    },
    {
      from: "Ho Chi Minh City",
      vehicle: "fly",
      duration: "1 hour 15 min",
      cost: "from 600,000 VND",
      notes: "Fly into Da Nang, then 45 min to Hoi An by bus or taxi.",
    },
    {
      from: "Hanoi",
      vehicle: "fly",
      duration: "1 hour 15 min",
      cost: "from 600,000 VND",
      notes: "Fly into Da Nang, then 45 min to Hoi An.",
    },
    {
      from: "Hue",
      vehicle: "bus",
      duration: "3–3.5 hours",
      cost: "100,000–150,000 VND",
      notes: "Direct buses daily. If heading south, consider the Hai Van Pass route by motorbike - one of Vietnam's best coastal rides.",
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
            "tan-ky-old-house",
            "fujian-assembly-hall",
            "night-market",
          ],
          notes: "Arrive early morning - the Old Town at 7am is a completely different place from midday. Book a tailor on day 1 if you want anything made - needs 24–48 hours minimum. Buy the Old Town ticket (120,000 VND, covers 5 heritage sites). Evening: lanterns along the river.",
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
            "tan-ky-old-house",
            "fujian-assembly-hall",
            "central-market",
          ],
          notes: "Dawn start. Book tailor immediately. Old Town ticket covers 5 sites. Evening: full moon lantern festival if timing works (14th lunar calendar each month).",
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
            "tan-ky-old-house",
            "fujian-assembly-hall",
          ],
          notes: "Arrive, drop bags, book tailor immediately. Dawn walk is unmissable.",
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
          notes: "Sunrise tour to beat the heat and crowds. Back by noon. Afternoon: tailor pickup, final shopping.",
        },
        {
          day: 4,
          title: "Cooking class + slow Old Town farewell",
          stops: [
            "hoi-an-ancient-town",
            "central-market",
          ],
          notes: "Morning cooking class (most include Central Market visit). Final walk through the Old Town. Lunch before departure.",
        },
      ],
    },
  ],

  cost: {
    budget: "400,000–800,000 VND/day",
    midRange: "800,000–1,500,000 VND/day",
    comfortable: "1,500,000+ VND/day",
    notes: "Old Town entry ticket 120,000 VND (5 sites). Tailor-made clothes 300,000–2,000,000+ VND. Cooking class 300,000–600,000 VND.",
  },

  bestTimeSummary: "Feb–Aug dry season is best. Full moon lantern festival monthly. Avoid Oct–Nov - Hoi An floods badly, sometimes for days.",

  recommendedStay: "2–4 days",

  transport: "Bicycle rental is the best way around - flat terrain, short distances, most guesthouses provide free bikes. Walking works fine in the Old Town.",

  nearbyDestinations: ["da-nang", "hue", "ba-na-hills"],

  coordinates: {
    lat: 15.8801,
    lng: 108.338,
  },
}
