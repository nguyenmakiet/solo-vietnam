import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const chamIsland: Location = {
  slug: "cham-island",
  name: "Cham Island",
  updatedAt: "2026-10-16",
  provinces: ["quang-nam"],
  destination: "hoi-an",
  lat: 15.958462,
  lng: 108.506038,
  address: "Tân Hiệp commune, Đà Nẵng (formerly Tân Hiệp commune, Hội An city, Quảng Nam)",
  type: ["island", "beach"],
  categories: ["nature", "coast"],
  experiences: ["beach", "swimming", "homestay", "food", "photography", "culture"],
  tags: [
    "🏝️ Island Escape off Hội An",
    "🐠 Coral Reefs & Snorkelling",
    "🚫 Plastic-Bag-Free Island",
  ],
  bestMonths: [3, 4, 5, 6, 7, 8],
  bestSeasonNote: "Mar - Aug is the season: clear skies, calm seas and little rain. May - Jun usually brings the calmest water and the best visibility for snorkelling; Jul - Aug is peak season, hot and busy, when the ngô đồng trees flower - book boats and rooms at least 2 weeks ahead. September is a transition month with occasional big waves. From October to February, storms, strong winds and rough seas are common, and most tourist boats stop running.",
  bestTimeOfDay: "Take an early canoe (around 8:00-8:30 AM) for calmer water and fewer people. Day-trippers leave from early afternoon, so the island is at its quietest from about 2:30 PM. If you stay overnight, catch the sunrise at Eo Gió.",
  timeNeeded: {
    minMinutes: 480,
    maxMinutes: 2880,
  },
  entranceFee: "The public canoe ticket from Cửa Đại is about 350,000 VND per adult (2026), which includes the canoe fare (260,000 VND), the sightseeing fee (70,000 VND) and the environment and security fee (20,000 VND). Children under 12 months travel free; children from 1 to under 8 pay 50% of the adult price. Snorkelling, diving, boat trips and other activities are paid separately.",
  openingHours: "Boats run only in suitable weather, mostly Mar - Sep. Canoes usually leave Cửa Đại around 8:00-9:00 AM, and the last boat back is usually around 3:30 PM - check times when you buy your ticket.",
  mapUrl: "https://www.google.com/maps?q=15.958462,108.506038",
  streetView: { embedUrl: "https://www.google.com/maps/embed?pb=!4v1792135501669!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRG0yNGFWTnc.!2m2!1d15.94140852883532!2d108.498844911314!3f162.4109709054327!4f3.048472792882791!5f0.7820865974627469" },
  heroImage: heroUrl("cham-island_iiwiph"),
  gallery: [
    "cham-island_iiwiph",
    "cham-island-2_qpq5ds",
    "cham-island-3_gtf8ee",
  ],
  seoDescription:
    "Cù Lao Chàm is a cluster of eight islands about 18 km off Cửa Đại beach near Hội An, a UNESCO World Biosphere Reserve with more than 950 marine species, white-sand beaches, coral reefs, a plastic-bag ban and a quiet fishing village, reached by a 15-20 minute canoe ride.",
  tips: [
    "⚠️ Boats are cancelled whenever the sea is rough, sometimes with only a night's or a morning's notice, and visitors do get stuck on the island. Don't book a flight or important plans on the day you return - leave a buffer day",
    "Wear a life jacket on the canoe and on every snorkelling or boat trip, even if the crew doesn't insist. In February 2022, a canoe returning from Cù Lao Chàm capsized in big waves about 3 km off Cửa Đại, and 17 people died",
    "Book through a licensed tour operator so you're covered by accident insurance, and avoid unofficial tours",
    "Check the forecast 48 hours before you go, especially from September to November, when storms can arrive with little warning",
    "If you travel independently, buy a round-trip ticket on the mainland and confirm your return boat before you leave - the last canoe back is usually around 3:30 PM",
    "Arrive at the port about 20 minutes early; canoes leave on time",
    "Plastic bags are banned on the island - bring a cloth bag or backpack, and skip plastic straws",
    "Bring enough cash for the whole trip: ATMs are rare and can run out of money in peak season, some places don't take card or transfer, and phone signal can be patchy",
    "Watch your bags and snacks - there are many monkeys on the island",
    "If you get seasick, take medication before boarding - the canoe ride can be very bumpy",
    "Talk to a doctor before diving if you have heart problems or high blood pressure",
    "Don't touch or stand on the coral when snorkelling",
    "Food at Tân Hiệp market is cheaper than at Bãi Làng and Bãi Ông",
    "Bring SPF 50+ sunscreen and easy sandals - you'll walk a lot, so skip heels",
    "Stay one night if you can: the island empties after the day boats leave, and you get both sunset and sunrise",
  ],
  content: {
    richSections: [
      {
        id: "about",
        label: "About This Place",
        title: "What Makes Cù Lao Chàm Special",
        blocks: [
          {
            type: "paragraph",
            text: "Cù Lao Chàm is a cluster of eight islands covering about 15 km² in Tân Hiệp commune, off the coast of Hội An. The largest is Hòn Lao (also called Hòn Cù Lao), where around 3,000 people live; the smaller islands are Hòn Khô Mẹ, Hòn Khô Con, Hòn Lá, Hòn Dài, Hòn Mồ, Hòn Tai and Hòn Ông. Since the 2025 administrative changes, Tân Hiệp is a commune of Đà Nẵng; before that it belonged to Hội An city in Quảng Nam province.",
          },
          {
            type: "paragraph",
            text: "In 2009 UNESCO recognised Cù Lao Chàm as a World Biosphere Reserve for its rich ecosystems: more than 950 marine species, coral reefs and forested hills. The same year, the island banned plastic bags, and today it is also working to cut out plastic straws and other single-use plastic. The result is an island that still feels both unspoilt and lived-in - clear water, quiet beaches, a small fishing village and a few traces of history.",
          },
          {
            type: "paragraph",
            text: "Development is deliberately light. There are homestays and simple guesthouses rather than resorts, and once the day-trip boats leave in the early afternoon, the island goes very quiet. It is also a frontline military island, so arrivals and departures are controlled.",
          },
        ],
      },
      {
        id: "how-to-get-there",
        label: "How to Get There",
        title: "How to Get to Cù Lao Chàm",
        blocks: [
          {
            type: "paragraph",
            text: "Cù Lao Chàm is about 18 km from Cửa Đại beach in Hội An and about 45 km from central Đà Nẵng. Canoes leave from Cửa Đại port, about 10 km from Hội An's old town, and the crossing takes about 15-20 minutes on a calm day, longer in choppy water. Most canoes leave around 8:00-9:00 AM, and the last boat back is usually around 3:30 PM.",
          },
          {
            type: "table",
            headers: ["Item", "Price (2026)"],
            rows: [
              ["Canoe ticket (adult)", "about 350,000 VND in total"],
              ["- canoe fare", "260,000 VND"],
              ["- sightseeing fee", "70,000 VND"],
              ["- environment and security fee", "20,000 VND"],
              ["Children under 12 months", "Free"],
              ["Children 1 to under 8", "50% of the adult price"],
            ],
          },
          {
            type: "paragraph",
            text: "Wooden boats still run, taking about 1.5 hours, but they now mainly carry cargo, and passengers are locals travelling with the goods - plan on the canoe.",
          },
          {
            type: "paragraph",
            text: "On the island, you can rent a motorbike (about 150,000-200,000 VND a day) or take a motorbike taxi with your luggage (about 60,000 VND a trip). The concrete coastal road makes it easy to ride around much of Hòn Lao.",
          },
        ],
      },
      {
        id: "what-to-expect",
        label: "What to Expect",
        title: "What to Expect on Cù Lao Chàm",
        blocks: [
          {
            type: "heading",
            text: "Beaches",
          },
          {
            type: "paragraph",
            text: "Hòn Lao has a string of white-sand beaches with clear blue water: Bãi Ông, Bãi Chồng, Bãi Bìm, Bãi Bắc, Bãi Làng, Bãi Hương and Bãi Xếp. Bãi Làng and Bãi Hương are next to the fishing village, with homes and homestays. Bãi Ông is where most day-trip groups go, and it's also the starting point for snorkelling and water sports.",
          },
          {
            type: "heading",
            text: "Snorkelling and Diving",
          },
          {
            type: "paragraph",
            text: "Almost every tour includes snorkelling over the coral. Independent travellers can buy at the port or through their guesthouse. Options include sea walking, shallow snorkelling and scuba diving, at about 200,000 to 1,000,000 VND per session depending on the type. Experiences vary a lot: on calm days some visitors find the water crystal clear and the coral beautiful; on choppy days others report poor visibility, few fish and boats drifting close to swimmers. Some also felt that a 'diving' package was more of a guided photo session - ask exactly what's included before you pay.",
          },
          {
            type: "heading",
            text: "Around the Island",
          },
          {
            type: "bullets",
            items: [
              "Tân Hiệp market (Cù Lao Chàm market), right by the boat dock, sells local forest and sea products and souvenirs.",
              "The old Cham well, also called the Xóm Cấm well, sits at a junction of the concrete road in Xóm Cấm. It still supplies fresh water and comes with local legends; its age is uncertain, with figures from about 200 years to several centuries.",
              "Eo Gió, on the east side above Bãi Hương and about 3 km from Bãi Làng, is a saddle between two arcs of hills and cliffs - a great sunrise spot, reached by a concrete road lined with wildflowers, with a view of the Cù Lao Chàm lighthouse.",
              "Hải Tạng pagoda, built in 1758 at the foot of the hills on the west side of Hòn Lao, faces the island's only rice field. It is surrounded by a stone wall, said to keep out pythons and snakes, and keeps a large bronze bell with dragon motifs said to be in an early Lê style. There is no resident monk; an elderly couple looks after it.",
              "A small museum near the village introduces the island's marine life and history.",
            ],
          },
          {
            type: "heading",
            text: "Other Activities",
          },
          {
            type: "table",
            headers: ["Activity", "What to know", "Price (2026)"],
            rows: [
              ["Boat trip around the islands", "Half day, up to 10 people per boat", "about 700,000 VND per boat"],
              ["Boat to the swiftlet nests", "Cù Lao Chàm is the only place in former Quảng Nam province where swiftlets live", "about 300,000 VND per boat"],
              ["Kayak", "Rent on the spot and explore the coast", "about 150,000 VND per hour"],
              ["Parasailing", "10-15 minutes, up to about 70 m, towed by a canoe", "check locally"],
              ["Fishing with fishermen", "Early morning, alongside local fishermen; basket boats can also be hired", "check locally"],
              ["Beach camping", "Book in advance through an organiser, often with a seafood BBQ", "check locally"],
            ],
          },
          {
            type: "paragraph",
            text: "Fresh seafood is a highlight - a simple set lunch near the dock costs around 150,000 VND - and many visitors also enjoy the herbal tea made from locally gathered leaves. Facilities are basic: some shower areas have little or no privacy.",
          },
          {
            type: "callout",
            variant: "warning",
            title: "Weather decides everything",
            text: "Boats depend completely on the sea. When the weather turns, authorities can stop all boats at short notice, and visitors have missed flights and had to rearrange work and family plans after being stranded on the island. Out of season (Oct - Feb), many boats don't run at all. Build flexibility into your plans.",
          },
        ],
      },
      {
        id: "travel-tips",
        label: "Travel Tips",
        title: "Travel Tips for Cù Lao Chàm",
        blocks: [
          {
            type: "paragraph",
            text: "A day trip from Hội An or Đà Nẵng covers the highlights: a canoe out in the morning, snorkelling, the village, the market and lunch, and a boat back in the afternoon. But the island is at its best after the day-trippers leave. Stay a night in a homestay near Bãi Làng or Bãi Hương (a double room costs around 500,000-550,000 VND), watch the sunset, and get up early for sunrise at Eo Gió.",
          },
          {
            type: "paragraph",
            text: "With a second day, explore on foot. Visitors who walked the island's winding road describe hours of near-silence: rock falls and hanging vines, monkeys in the trees, birdsong and wide views over the East Sea, with barely another person in sight. Ride one side of the island on a motorbike and walk the other.",
          },
          {
            type: "callout",
            variant: "tip",
            title: "Peak season",
            text: "In July and August, book boats, rooms and activities at least 2 weeks in advance.",
          },
        ],
      },
    ],
  },
  insights: {
    highlights: [
      "Eight islands in a UNESCO World Biosphere Reserve with more than 950 marine species",
      "White-sand beaches, clear water and coral reefs, 15-20 minutes by canoe from Hội An",
      "Sunrise at Eo Gió, Hải Tạng pagoda and a quiet fishing village after the day boats leave",
    ],
    thingsToKnow: {
      crowds: "Busy with day-trippers in the morning and around midday, especially Jul - Aug; very quiet after about 2:30 PM and out of season",
      difficulty: "Easy, though the canoe ride can be rough and you'll walk or ride a lot on the island",
      safety: "Boats can be cancelled at short notice in bad weather. Wear a life jacket on every boat. Watch out for monkeys taking belongings",
      accessibility: "Reached only by canoe from Cửa Đại; concrete roads on the main island, but facilities are basic",
      seasonal: "Mar - Aug is best; Sep is unsettled; Oct - Feb brings storms and most tourist boats stop",
    },
    visitorTips: [
      "Take the 8:00-8:30 AM canoe",
      "Bring enough cash and a cloth bag",
      "Leave a buffer day before your flight",
    ],
    faq: [
      {
        question: "How much does it cost to get to Cù Lao Chàm?",
        answer: "The public canoe ticket from Cửa Đại is about 350,000 VND per adult (2026), including the canoe fare, sightseeing fee and environment and security fee. Children under 12 months go free, and children from 1 to under 8 pay half.",
      },
      {
        question: "Is a day trip enough?",
        answer: "A full day covers the main sights, snorkelling and lunch. If you can, stay one night in a homestay: the island is much quieter after the day boats leave, and you can see both sunset and sunrise.",
      },
      {
        question: "When can I go to Cù Lao Chàm?",
        answer: "Mar - Aug is the best time, with calm seas and little rain. From October to February, storms and rough seas are common and most tourist boats stop running.",
      },
      {
        question: "Is the snorkelling good?",
        answer: "It depends on the sea. On calm days in the season, the water can be very clear and the coral beautiful; on choppy days visibility can be poor. Ask what's included before booking, and always wear a life jacket.",
      },
      {
        question: "What happens if the weather turns bad?",
        answer: "Boats can be cancelled at short notice, and you may have to stay on the island until the sea calms down. Don't schedule a flight or important plans on the day you return.",
      },
      {
        question: "Can I bring plastic bags?",
        answer: "No. Plastic bags have been banned on the island since 2009, and it is also cutting back on plastic straws and other single-use plastics. Bring a cloth bag or backpack.",
      },
    ],
    sentiment: {
      positive: "Visitors love the clear water, fine white-sand beaches, coral, fresh seafood, clean plastic-free environment, friendly locals, cheap homestays and the deep quiet of the island once the day-trippers leave. Many call it one of the most beautiful islands in Vietnam.",
      negative: "Common complaints are boats cancelled by bad weather that leave visitors stranded, poor visibility and rough water at snorkelling spots on some days, 'diving' packages that feel like photo sessions, lax life-jacket practices on some tours, showers without privacy, monkeys grabbing belongings and very basic facilities.",
    },
  },
}
