import { Destination, FaqItem } from "./types"
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
      from: "Cat Bi Airport (Hai Phong)",
      vehicle: "cable car",
      duration: "30 min transfer + 15 min cable car",
      cost: "110,000 VND combo ticket",
      notes: "Take a taxi/Grab to the Sunworld cable car terminal. One-way cable car ticket: 70,000 VND. Recommended: buy the combo (one-way cable car + shuttle bus to Cat Ba town centre) for 110,000 VND.",
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
          notes: "Morning: join a kayak tour of Lan Ha Bay - dramatically fewer boats than Ha Long, better for swimming and exploration. Afternoon: Cat Co 1 or Cat Co 3 beaches for swimming. Evening: seafood in Cat Ba town. Optional: bioluminescence night kayak tour (~$28 USD) - a guide leads you through the bay in darkness to see plankton glow in the water. Book in advance, runs most nights. Only worthwhile if you're not exhausted from the day.",
        },
        {
          day: 2,
          title: "Cat Ba National Park + Trung Trang Cave + Hospital Cave",
          stops: [
            "hospital-cave",
            "trung-trang-cave",
            "cat-ba-national-park",
          ],
          notes: "Hospital Cave first (free) - the Viet Cong's wartime underground hospital, genuinely fascinating. Then buy the 120,000 VND ticket for Trung Trang Cave and the national park summit trek (Ngu Lam Peak). Optional: continue the full 12km jungle trek through to Viet Hai Village (160,000 VND, ~5–6 hours one way) - only if you have the energy and an early start. Arrange a boat back from Viet Hai rather than trekking back.",
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
          notes: "Arrive, drop bags, swim at Cat Co beach. Cat Ba town for evening seafood and cold bia hoi. Optional: bioluminescence night kayak tour (~$28 USD) - book on arrival if interested, runs most nights. A relaxed first day is the right context for this.",
        },
        {
          day: 2,
          title: "Lan Ha Bay full day kayak + Viet Hai Village",
          stops: [
            "lan-ha-bay",
            "viet-hai-village",
          ],
          notes: "Full day kayak through Lan Ha Bay. Viet Hai is an isolated fishing village accessible only by kayak through a sea cave or jungle cycling trail - one of the most memorable experiences in northern Vietnam. Rest well tonight - tomorrow is active.",
        },
        {
          day: 3,
          title: "Cat Ba National Park + Trung Trang Cave + Radio Tower viewpoint",
          stops: [
            "hospital-cave",
            "trung-trang-cave",
            "cat-ba-national-park",
            "radio-tower",
          ],
          notes: "Morning: Trung Trang Cave and summit trek (120,000 VND ticket). Hospital Cave is free - do it on the way. Afternoon: Radio Tower for panoramic views over Lan Ha Bay - one of the best viewpoints on the island. Ferry back to Hai Phong or Ha Long City.",
        },
      ],
    },
  ],

  cost: {
    budget: "400,000–700,000 VND/day",
    midRange: "700,000–1,500,000 VND/day",
    comfortable: "1,500,000+ VND/day",
    notes: "Lan Ha Bay kayak tour: 300,000–500,000 VND. National park + Trung Trang Cave combo ticket: 120,000 VND. Full jungle trek to Viet Hai: 160,000 VND. Hospital Cave: free. Bioluminescence night tour: ~$28 USD.",
  },

  bestTimeSummary: "Apr–Jun and Sep–Nov dry season, calm seas, best kayaking visibility. Avoid Jul–Aug peak domestic season - crowded and more expensive.",

  recommendedStay: "2–3 days",

  transport: "Motorbike or bicycle rental on the island. Kayak for Lan Ha Bay. Walking works for Cat Ba town.",

  nearbyDestinations: ["ha-long", "ha-noi"],

  coordinates: {
    lat: 20.7271,
    lng: 107.0469,
  },
  // ─── FAQ ─────────────────────────────────────────────────
  faqs: [
    {
      question: "Do I need a permit to visit Cát Bà Island or Lan Hạ Bay?",
      answer: "No special permit is required for foreign visitors to Cát Bà Island or Lan Ha Bay. Both are open to tourists with a standard Vietnamese visa. You will need to pay entrance fees to Cat Ba National Park if you plan to trek inside the park boundaries.",
    },
    {
      question: "How do I get to Cát Bà from Hanoi?",
      answer: "The most common route is by bus-ferry combo from Hanoi - journey time is approximately 3.5-4 hours total. Buses depart from Hanoi's My Dinh or Gia Lam station, connecting to a ferry at Got pier (Hai Phong) or Dinh Vu, arriving at Cat Ba town. Several operators sell door-to-door tickets for around 150,000-250,000 VND. Alternatively, travel via Hai Phong city and take a local ferry - slower but cheaper. From Halong Bay cruise terminals, speedboat transfers to Cat Ba are also available.",
    },
    {
      question: "How many days do you need on Cát Bà Island?",
      answer: "Two days / one night is the minimum to see the highlights - enough for a Lan Ha Bay boat tour and a quick explore of Cat Ba town. Three days / two nights is more comfortable, allowing time for national park trekking, kayaking, and a slower pace on the water. If bioluminescence kayaking is on your list, factor in an evening activity on top of your daytime itinerary.",
    },
    {
      question: "What is the best time to visit Cát Bà?",
      answer: "March-May and September-November are the best windows - warm temperatures, lower humidity, and calmer seas for boat tours and kayaking. May-August is peak season with the warmest water but also the most tourists and occasional tropical storms. December-February is cooler and quieter - boat tours still run but rougher seas can occasionally cause cancellations. Avoid visiting during major Vietnamese holidays (Tet, April 30 - May 1) when the island gets extremely crowded.",
    },
    {
      question: "What is the difference between Lan Hạ Bay and Hạ Long Bay?",
      answer: "Both bays share the same dramatic karst limestone scenery - thousands of islands rising from emerald green water. The key difference is crowds and administration. Ha Long Bay falls under Quang Ninh province and is one of Vietnam's most visited destinations, with heavy cruise traffic. Lan Ha Bay is administered by Hai Phong province, sits immediately south of Ha Long, and receives significantly fewer visitors. For most independent travelers, Lan Ha Bay offers a comparable - and arguably better - experience with less congestion, lower prices, and more flexibility to explore by kayak. That said, combined tours covering both bays in one trip are widely available from Cat Ba - a practical option if you want to see the full picture without doubling up on logistics.",
    },
    {
      question: "How much does a trip to Cát Bà cost?",
      answer: "Budget travelers can manage 2 days / 1 night for around $30-50 USD. This covers a basic guesthouse (150,000-300,000 VND/night), simple meals (50,000-100,000 VND/meal), and a day boat tour of Lan Ha Bay (150,000-300,000 VND/person on a group tour). Mid-range travelers opting for better accommodation and a private or small-group kayaking tour should budget $80-150 USD for the same duration. Bioluminescence kayaking tours typically cost 400,000-600,000 VND per person and run in the evening separately from daytime bay tours.",
    },
    {
      question: "Is Cát Bà safe for solo travelers?",
      answer: "Cat Ba is generally safe and well-suited for solo travel. The island is small, infrastructure for tourists is established, and the main town is easy to navigate on foot or by rented motorbike. Standard precautions apply - use reputable boat tour operators, wear life jackets on water activities, and agree on prices before getting into any vehicle. Solo female travelers report feeling comfortable on the island, though standard Vietnam travel awareness applies in town at night.",
    },
    {
      question: "Should I rent a motorbike on Cát Bà?",
      answer: "Yes - renting a motorbike is the best way to explore beyond Cat Ba town. The island's interior roads are narrow and scenic, and several viewpoints, beaches, and national park trailheads are not accessible by foot from town. Daily rental rates run around 100,000-150,000 VND for a basic automatic scooter. Roads are paved but can be steep and winding in the national park area. An automatic scooter is sufficient - no need for a manual motorbike unlike mountain routes elsewhere in Vietnam.",
    },
    {
      question: "What can I do on Lan Hạ Bay?",
      answer: "Lan Ha Bay is best experienced by boat - day tours from Cat Ba town run regularly and typically include kayaking through limestone caves and lagoons, swimming stops, and visits to floating fishing villages. Beyond standard day tours, Lan Ha Bay is one of the few places in northern Vietnam where bioluminescence kayaking is reliably reported - paddle after dark and the water glows blue-green around your kayak, caused by bioluminescent plankton (the same phenomenon local tour operators market as \"plankton kayaking\" or \"plankton tour\"). Rock climbing on the karst formations is also popular - several operators in Cat Ba town offer guided half-day and full-day climbing sessions.",
    },
    {
      question: "Should I do an overnight cruise on Lan Hạ Bay?",
      answer: "An overnight cruise is worth considering if you have the budget and want a more immersive experience on the water. Sleeping on the bay means you catch sunrise over the karst islands before day-trippers arrive - the early morning light and quieter atmosphere are noticeably different from a standard day tour. Most overnight cruises from Cat Ba cover Lan Ha Bay and range from budget wooden boats (~$50-80 USD/person) to mid-range vessels with en-suite cabins (~$120-200 USD/person). Itineraries typically include kayaking, cave visits, swimming, and all meals on board. If budget is a constraint, a day tour plus a plankton kayaking tour in the evening (bioluminescence kayaking) covers most of the highlights at a fraction of the cost.",
    },
    {
      question: "Do I need to book boat tours in advance?",
      answer: "During peak season (May-August) and on weekends year-round, booking 1-2 days ahead is recommended - especially for small-group or private kayaking tours. Bioluminescence tours have limited capacity and sell out faster than standard day tours. Off-peak, same-day booking is generally possible by walking along the waterfront in Cat Ba town where operators have open desks. That said, booking ahead always guarantees better operator selection rather than defaulting to whoever has availability.",
    },
  ] satisfies FaqItem[],
}
