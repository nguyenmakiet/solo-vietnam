import { Destination } from "./types"
import { heroUrl } from "@/lib/cloudinary"

export const catBa: Destination = {
  slug: "cat-ba",
  name: "Cat Ba",
  province: "Hai Phong",
  provinceSlug: "hai-phong",
  region: "north",

  description:
    "Cat Ba is the largest island in the Ha Long Bay archipelago and the smarter alternative to a standard Ha Long cruise. A rugged national park, Lan Ha Bay's quieter limestone waters, hidden beaches, and a genuine fishing town at its centre - with far fewer tourists than the main Ha Long circuit. Base yourself here to kayak Lan Ha Bay, trek the national park, and get the same dramatic karst scenery without the floating hotel crowds.",

  tagline: "Ha Long Bay's wilder, less-visited island neighbour",

  heroImage: heroUrl("cat-ba_bbsqrp"),

  tags: ["island", "nature", "kayaking", "trekking", "beach"],

  travelStyle: ["solo-friendly", "adventure", "budget", "hidden-gem"],

  gettingThere: [
    {
      from: "Hai Phong",
      vehicle: "ferry",
      duration: "45 min–1.5 hours",
      cost: "80,000–200,000 VND",
      notes: "Fast ferry or slow ferry from Hai Phong port. Hai Phong is 1.5 hours from Hanoi by bus.",
    },
    {
      from: "Ha Long City",
      vehicle: "ferry",
      duration: "45 minutes",
      cost: "150,000–200,000 VND",
      notes: "Speedboat from Tuan Chau pier. Good option if combining with Ha Long Bay cruise.",
    },
    {
      from: "Hanoi",
      vehicle: "bus",
      duration: "4.5 hours total",
      cost: "200,000–350,000 VND",
      notes: "Combined bus + ferry ticket available from Hanoi. Most direct option for travelers coming straight from Hanoi.",
    },
  ],

  itineraries: [
    {
      duration: "2D1N",
      label: "Island highlights",
      days: [
        {
          day: 1,
          title: "Lan Ha Bay kayaking + Cat Co beaches",
          stops: [
            "lan-ha-bay",
            "cat-co-beach",
          ],
          notes: "Morning: join a kayak tour of Lan Ha Bay - dramatically fewer boats than Ha Long, better for swimming and exploration. Afternoon: Cat Co 1 or Cat Co 3 beaches for swimming. Evening: seafood in Cat Ba town - much cheaper than on cruise boats.",
        },
        {
          day: 2,
          title: "Cat Ba National Park trek + Hospital Cave",
          stops: [
            "cat-ba-national-park",
            "hospital-cave",
          ],
          notes: "Morning trek through the national park to the summit viewpoint - 2-3 hours, rewarded with views over Lan Ha Bay. Hospital Cave in the afternoon - the Viet Cong's wartime underground hospital, fascinating history.",
        },
      ],
    },
    {
      duration: "3D2N",
      label: "Full island experience",
      days: [
        {
          day: 1,
          title: "Arrive + Cat Co beaches + town",
          stops: [
            "cat-co-beach",
          ],
          notes: "Arrive, drop bags, swim. Cat Ba town for evening seafood and cold bia hoi.",
        },
        {
          day: 2,
          title: "Lan Ha Bay full day kayak + Viet Hai Village",
          stops: [
            "lan-ha-bay",
            "viet-hai-village",
          ],
          notes: "Full day kayak through Lan Ha Bay. Viet Hai is an isolated fishing village accessible only by kayak through a sea cave or jungle cycling trail - one of the most memorable experiences in northern Vietnam.",
        },
        {
          day: 3,
          title: "Cat Ba National Park + Hospital Cave + depart",
          stops: [
            "cat-ba-national-park",
            "hospital-cave",
          ],
          notes: "Morning summit trek. Hospital Cave before lunch. Ferry back to Hai Phong or Ha Long City.",
        },
      ],
    },
  ],

  cost: {
    budget: "400,000–700,000 VND/day",
    midRange: "700,000–1,500,000 VND/day",
    comfortable: "1,500,000+ VND/day",
    notes: "Lan Ha Bay kayak tour: 300,000–500,000 VND. National park entry: 60,000 VND. Hospital Cave: 60,000 VND. Much cheaper than Ha Long cruise equivalents.",
  },

  bestTimeSummary: "Apr–Jun and Sep–Nov dry season, calm seas, best kayaking visibility. Avoid Jul–Aug peak domestic season - crowded and more expensive.",

  recommendedStay: "2–3 days",

  transport: "Motorbike or bicycle rental on the island. Kayak for Lan Ha Bay. Walking works for Cat Ba town.",

  nearbyDestinations: ["ha-long", "ha-noi"],

  coordinates: {
    lat: 20.7271,
    lng: 107.0469,
  },
}
