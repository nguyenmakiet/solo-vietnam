import { Destination, FaqItem } from "./types"
import { heroUrl } from "@/lib/cloudinary"

export const catBa: Destination = {
  slug: "cat-ba",
  name: "Cat Ba",
  updatedAt: "2026-11-07",
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
      from: "Hanoi",
      vehicle: "bus",
      duration: "a little over 3 hours",
      cost: "280,000 VND one way",
      notes: "Cat Ba Express runs bus plus crossing to Cat Ba town. From Hanoi: 6am, 7:45am, 10:45am, 2pm. From Cat Ba town: 9:30am, 12:30pm, 3:30pm, 5pm. Booking: 0848 244 999.",
    },
    {
      from: "Cat Hai (Hai Phong) - cable car",
      vehicle: "cable car",
      duration: "about 10 minutes",
      cost: "70,000 VND one way; 110,000 VND with the bus to Cat Ba town",
      notes: "Sun World cable car from Cat Hai to Phu Long. Closed on Tuesdays; 3 morning and 3 afternoon departures, the last around 3:45pm. From Phu Long it's about 22km to Cat Ba town, so the 110,000 VND ticket with the shuttle bus is the easy option. Buy at the station or online at booking.sunworld.vn. You can't take a motorbike - leave it at the car park near the station.",
    },
    {
      from: "Cat Hai (Hai Phong) - Dong Bai ferry",
      vehicle: "ferry",
      duration: "about 25-40 minutes, plus waiting",
      cost: "about 10,000-12,000 VND per person; 45,000 VND with a motorbike",
      notes: "Car and motorbike ferry from Dong Bai to Cai Vieng. Cheap, but on weekends and holidays the wait can be 1-4 hours. Cai Vieng is about 20km from Cat Ba town.",
    },
    {
      from: "Got pier (Hai Phong) - speedboat",
      vehicle: "boat",
      duration: "about 10 minutes",
      cost: "about 110,000 VND",
      notes: "Fast boats from Got pier to Phu Long, then a bus or ride into town.",
    },
    {
      from: "Hai Phong city (Binh pier)",
      vehicle: "boat",
      duration: "45 minutes - 1 hour",
      cost: "200,000-350,000 VND",
      notes: "Speedboat from Binh pier straight to Cat Ba, no bus transfer needed.",
    },
    {
      from: "Ha Long (Tuan Chau)",
      vehicle: "ferry",
      duration: "about 50 minutes",
      cost: "75,000 VND per person; 100,000 VND with a motorbike",
      notes: "Ferries from Tuan Chau to Gia Luan on Cat Ba. Tuan Chau to Gia Luan: 7:30am, 9am, 11:30am, 1:30pm, 3pm. Gia Luan to Tuan Chau: 9am, 11:30am, 1pm, 3pm, 4pm. Extra boats in peak season (25 Apr - 5 Sep) when busy. Sailings need good weather and at least 30 passengers; be at the pier 15 minutes early. See the Ha Long page.",
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
          notes: "Morning: join a kayak tour of Lan Ha Bay - dramatically fewer boats than Ha Long, better for swimming and exploration. Afternoon: Cat Co 1 or Cat Co 3 beaches for swimming. Evening: seafood in Cat Ba town. Optional: bioluminescence night kayak tour (around 400,000-700,000 VND) - a guide leads you through the bay in darkness to see plankton glow in the water. Book in advance, runs most nights. Only worthwhile if you're not exhausted from the day.",
        },
        {
          day: 2,
          title: "Cat Ba National Park + Trung Trang Cave + Hospital Cave",
          stops: [
            "hospital-cave",
            "trung-trang-cave",
            "cat-ba-national-park",
          ],
          notes: "Hospital Cave first - a secret hospital built inside the rock in the 1960s. It is currently closed, so you can only see the outside; check locally before going. Then buy the 120,000 VND ticket for Trung Trang Cave and the national park summit trek (Ngu Lam Peak). Optional: continue the full 12km jungle trek through to Viet Hai Village (160,000 VND, ~5-6 hours one way) - only if you have the energy and an early start. Arrange a boat back from Viet Hai rather than trekking back.",
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
          notes: "Arrive, drop bags, swim at Cat Co beach. Cat Ba town for evening seafood and cold bia hoi. Optional: bioluminescence night kayak tour (around 400,000-700,000 VND) - book on arrival if interested, runs most nights. A relaxed first day is the right context for this.",
        },
        {
          day: 2,
          title: "Lan Ha Bay full day kayak + Viet Hai Village",
          stops: [
            "lan-ha-bay",
            "viet-hai-village",
          ],
          notes: "Full day kayak through Lan Ha Bay. Viet Hai is an isolated village inside the national park, reached by boat from Ben Beo pier and then a short ride or walk, or by a long jungle trek - one of the most memorable experiences in northern Vietnam. Rest well tonight - tomorrow is active.",
        },
        {
          day: 3,
          title: "Cat Ba National Park + Trung Trang Cave + Radio Tower viewpoint",
          stops: [
            "hospital-cave",
            "trung-trang-cave",
            "cat-ba-national-park",
            "radio-tower-cat-ba",
          ],
          notes: "Morning: Trung Trang Cave and summit trek (120,000 VND ticket). Hospital Cave is on the way (currently closed - exterior only). Afternoon: Radio Tower for panoramic views over Lan Ha Bay - one of the best viewpoints on the island. Ferry back to Hai Phong or Ha Long City.",
        },
      ],
    },
  ],

  bestTimeSummary: "Apr-Jun and Oct-Nov are the best windows: warm, calm enough for kayaking, and outside the Jul-Aug domestic rush. June is already rainy but it is beach season. Jul-Sep is the wettest stretch and typhoons can cancel boat trips at short notice. Dec-Mar is cool and often foggy - quiet, but not swimming weather.",
  bestMonths: [4, 5, 6, 10, 11],

  recommendedStay: "2-3 days",

  transport: "Rent a motorbike - about 150,000 VND/day, easiest through your guesthouse or hotel - or an electric motorbike. Walking works in Cat Ba town and to the Cat Co beaches. Kayak or boat for Lan Ha Bay. The cable car station and ferry piers are about 20-22km from town, so take the shuttle bus or arrange a ride.",

  rentals: [
    {
      vehicle: "motorbike",
      priceRange: "about 150,000 VND/day",
      notes: "Most guesthouses and hotels rent bikes - just ask the owner. You need an International Driving Permit (1968 convention) with the motorcycle category plus your home licence. Check the brakes, lights and tyres and take photos before you ride off. Roads in the national park area are steep and winding.",
      shops: [
        { name: "Cat Ba electric motorbike rental", area: "Cat Ba town", address: "56 Nui Ngoc", phone: "0384 787 675", notes: "New electric motorbikes; delivery around the town centre." },
        { name: "Dung Yen Motorbike", area: "Cat Ba town", url: "https://www.facebook.com/share/1FKfGarWPw/" },
      ],
      verifiedAt: "2026-11-07",
    },
  ],

  nearbyDestinations: ["ha-long", "ha-noi"],

  coordinates: {
    lat: 20.7271,
    lng: 107.0469,
  },
  mapPriority: 2,
  mapZoom: 12,
  // ─── FAQ ─────────────────────────────────────────────────
  faqs: [
    {
      question: "Do I need a permit to visit Cát Bà Island or Lan Hạ Bay?",
      answer: "No special permit is required for foreign visitors to Cát Bà Island or Lan Ha Bay. Both are open to tourists with a standard Vietnamese visa. You will need to pay entrance fees to Cat Ba National Park if you plan to trek inside the park boundaries.",
    },
    {
      question: "How do I get to Cát Bà from Hanoi?",
      answer: "The simplest is the Cat Ba Express bus: 280,000 VND one way, a little over 3 hours to Cat Ba town, leaving Hanoi at 6am, 7:45am, 10:45am and 2pm (booking 0848 244 999). By your own transport, drive to Cat Hai and cross by cable car, ferry or speedboat - see the next question.",
    },
    {
      question: "Cable car, ferry or speedboat - how do I cross to the island?",
      answer: "From Cat Hai, the Sun World cable car to Phu Long takes about 10 minutes: 70,000 VND one way, or 110,000 VND including the bus into Cat Ba town (about 22km). It's closed on Tuesdays and the last car leaves around 3:45pm; buy at the station or [online](https://booking.sunworld.vn/en). The Dong Bai ferry is cheapest (about 10,000-12,000 VND, 45,000 VND with a motorbike) but on weekends and holidays the wait can be 1-4 hours. Speedboats run from Got pier to Phu Long (about 110,000 VND, 10 minutes) and from Binh pier in Hai Phong city direct to Cat Ba (200,000-350,000 VND, 45 minutes - 1 hour).",
    },
    {
      question: "How do I get from Ha Long to Cát Bà?",
      answer: "Take the ferry from Tuan Chau to Gia Luan, about 50 minutes: 75,000 VND per person, 100,000 VND with a motorbike. Departures from Tuan Chau: 7:30am, 9am, 11:30am, 1:30pm, 3pm; back from Gia Luan: 9am, 11:30am, 1pm, 3pm, 4pm. Ferries need good weather and at least 30 passengers. See the [Ha Long page](/destinations/ha-long).",
    },
    {
      question: "How many days do you need on Cát Bà Island?",
      answer: "Two days / one night is the minimum to see the highlights - enough for a Lan Ha Bay boat tour and a quick explore of Cat Ba town. Three days / two nights is more comfortable, allowing time for national park trekking, kayaking, and a slower pace on the water. If bioluminescence kayaking is on your list, factor in an evening activity on top of your daytime itinerary.",
    },
    {
      question: "What is the best time to visit Cát Bà?",
      answer: "April-June and October-November are the best windows - warm temperatures, lower humidity, and calmer seas for boat tours and kayaking. May-August is peak season with the warmest water but also the most tourists and occasional tropical storms. December-February is cooler and quieter - boat tours still run but rougher seas can occasionally cause cancellations. Avoid visiting during major Vietnamese holidays (Tet, April 30 - May 1) when the island gets extremely crowded.",
    },
    {
      question: "What is the difference between Lan Hạ Bay and Hạ Long Bay?",
      answer: "Both have the same limestone karst scenery. Ha Long is the famous one, easier to reach from Hanoi, with more upscale cruises and hotels, and very busy in May-Aug. Lan Ha Bay, reached from Cat Ba, has fewer boats, and Cat Ba adds trekking, cycling and beaches - usually for less money. You can do both by taking the Tuan Chau - Gia Luan ferry. See the [Ha Long page](/destinations/ha-long).",
    },
    {
      question: "How much does a trip to Cát Bà cost?",
      answer: "Main costs: the Lan Ha Bay sightseeing fee is 120,000 VND (children 60,000 VND); a shared afternoon bay tour costs about 380,000 VND on a 3-star boat or 500,000 VND on a 5-star boat; the plankton (bioluminescence) tour about 28 USD. National park tickets are 120,000 VND for the Ngu Lam peak - Trung Trang Cave route or 160,000 VND for the whole park. A motorbike is about 150,000 VND/day. Prices change with boat class and season.",
    },
    {
      question: "Is Cát Bà safe for solo travelers?",
      answer: "Cat Ba is generally safe and well-suited for solo travel. The island is small, infrastructure for tourists is established, and the main town is easy to navigate on foot or by rented motorbike. Standard precautions apply - use reputable boat tour operators, wear life jackets on water activities, and agree on prices before getting into any vehicle. Solo female travelers report feeling comfortable on the island, though standard Vietnam travel awareness applies in town at night.",
    },
    {
      question: "Should I rent a motorbike on Cát Bà?",
      answer: "Yes - it's the easiest way to reach the national park, viewpoints and beaches outside town. Expect about 150,000 VND/day; most guesthouses and hotels rent bikes, and electric motorbikes are available too. Roads in the national park area are steep and winding, so ride carefully.",
    },
    {
      question: "What can I do on Lan Hạ Bay?",
      answer: "Bay tours from Cat Ba take in kayaking, swimming and floating fishing villages; afternoon tours usually run from about 2:30pm and finish around 4-6pm with sunset. The Lan Ha sightseeing fee is 120,000 VND; shared tours cost about 380,000-500,000 VND depending on the boat. At night you can join a plankton tour (about 28 USD): pickup at your hotel around 7pm and boats leave Ben Beo around 7:30pm to paddle among glowing bioluminescent plankton. Rock climbing on the karsts is also offered by operators in Cat Ba town.",
    },
    {
      question: "Should I do an overnight cruise on Lan Hạ Bay?",
      answer: "If budget allows, a night on the water means sunrise over the karsts before day boats arrive. Overnight Lan Ha cruises cost about 3,000,000-6,000,000 VND per person per night, usually with kayaking, cave visits, swimming and meals included. If not, a day tour plus the evening plankton tour covers most of the highlights for much less.",
    },
    {
      question: "Do I need to book boat tours in advance?",
      answer: "During peak season (May-August) and on weekends year-round, booking 1-2 days ahead is recommended - especially for small-group or private kayaking tours. Bioluminescence tours have limited capacity and sell out faster than standard day tours. Off-peak, same-day booking is generally possible by walking along the waterfront in Cat Ba town where operators have open desks. That said, booking ahead always guarantees better operator selection rather than defaulting to whoever has availability.",
    },
  ] satisfies FaqItem[],
}
