import { Destination, FaqItem} from "./types"
import { heroUrl } from "@/lib/cloudinary"

export const puLuong: Destination = {
  slug: "pu-luong",
  name: "Pu Luong",
  province: "Thanh Hoa",
  provinceSlug: "thanh-hoa",
  region: "north",

  description:
    "Pu Luong is the answer to the question: what does Sa Pa look like without the development? A 17,000-hectare nature reserve of Thai stilt-house villages, stepped rice terraces, and karst peaks in Thanh Hoa province, four hours from Hanoi. The homestay culture is genuine, the crowds are manageable even in peak season, and the cycling and trekking between Don, Hieu, and Kho Muong villages is some of the best in northern Vietnam.",

  tagline: "Sa Pa scenery, four hours from Hanoi, with a fraction of the crowds",

  heroImage: heroUrl("pu-luong_apr7bu"),

  tags: ["nature", "trekking", "culture", "photography"],

  travelStyle: ["solo-friendly", "adventure", "hidden-gem", "budget"],

  gettingThere: [
    {
      from: "Hanoi",
      vehicle: "bus",
      duration: "4–5 hours",
      cost: "150,000–250,000 VND",
      notes: "Bus from My Dinh station to Pho Doan market town (the access hub). From Pho Doan, homestays arrange the final 5–15km transfer to individual villages by xe om or 4WD.",
    },
    {
      from: "Hanoi",
      vehicle: "motorbike",
      duration: "5 hours",
      cost: "Petrol only",
      notes: "Via QL6 through Hoa Binh and Mai Chau. Scenic and rewarding if you have the experience.",
    },
  ],

  itineraries: [
    {
      duration: "2D1N",
      label: "Village and terraces",
      days: [
        {
          day: 1,
          title: "Don Village + S-Shape Rice Terraces viewpoint",
          stops: [
            "don-village",
            "s-shape-rice-terraces",
          ],
          notes: "Arrive Don Village by midday. S-Shape Rice Terraces viewpoint is 3km from Don - the most photographed spot in Pu Luong, and deservedly so. Evening: family dinner at the homestay, rice wine by the fire.",
        },
        {
          day: 2,
          title: "Hieu Waterfall + Hieu Village + cycling back",
          stops: [
            "hieu-waterfall",
            "hieu-village",
          ],
          notes: "Trek or cycle from Don to Hieu (8km through terraces). Hieu Waterfall has tiered pools for swimming. Return by bicycle along the valley road - flat, easy, spectacular.",
        },
      ],
    },
    {
      duration: "3D2N",
      label: "Full reserve experience",
      days: [
        {
          day: 1,
          title: "Don Village + terraces",
          stops: [
            "don-village",
            "s-shape-rice-terraces",
          ],
          notes: "Arrive, settle in Thai stilt house. Afternoon walk through the rice fields.",
        },
        {
          day: 2,
          title: "Don → Hieu → Kho Muong trek",
          stops: [
            "hieu-waterfall",
            "hieu-village",
            "kho-muong-village",
            "kho-muong-cave",
          ],
          notes: "Full day guided trek: Don → Hieu (8km) → Kho Muong (5km further). Kho Muong is the most remote valley in the reserve - barely any tourists. Kho Muong Cave needs a village guide. Stay overnight in Kho Muong homestay.",
        },
        {
          day: 3,
          title: "Return journey + cycling",
          stops: [],
          notes: "Return to Pho Doan by motorbike or cycle part of the valley road. Bus back to Hanoi.",
        },
      ],
    },
  ],

  cost: {
    budget: "400,000–700,000 VND/day",
    midRange: "700,000–1,200,000 VND/day",
    comfortable: "1,200,000+ VND/day",
    notes: "Homestay with meals typically included: 300,000–500,000 VND/night. Local guide: 200,000–300,000 VND/day. Bicycle rental: 50,000–100,000 VND/day.",
  },

  bestTimeSummary: "Late May–early Jun (green rice) and late Sep–early Oct (golden harvest) for the terraces. Dec–Feb mornings cold but clear and uncrowded.",

  recommendedStay: "2–3 days",

  transport: "Walking and cycling between villages. Xe om for longer transfers. Motorbike rental possible but not essential if staying in one village.",

  nearbyDestinations: ["ninh-binh", "ha-noi"],

  coordinates: {
    lat: 20.42,
    lng: 105.07,
  },
// ─── FAQ ─────────────────────────────────────────────────
  faqs: [
    {
      question: "How do I get to Pù Luông from Hanoi?",
      answer: "Several bus operators run direct routes to Pu Luong - the easiest way to book is through your accommodation, which can arrange tickets on your behalf. Departures typically run twice daily at 7:00 AM and 2:00 PM, with journey time around 4 hours. Tickets cost approximately 320,000-350,000 VND per person. Buses are standard 29-seat coaches with fixed seats - not sleeper buses. Renting a motorbike in Hanoi and riding directly is also popular - the route through Mai Chau is scenic and manageable for experienced riders.",
    },
    {
      question: "How many days do you need in Pù Luông?",
      answer: "Two nights / three days is the sweet spot for most travelers - enough time for a full valley trek, a visit to a local market, and at least one sunrise over the rice terraces without feeling rushed. One night is possible but leaves little room to slow down, which defeats the purpose of coming here. Three nights suits travelers who want to explore deeper into the nature reserve, visit more remote villages, or simply do nothing but sit on a balcony and watch the valley fill with morning mist.",
    },
    {
      question: "What is the best time to visit Pù Luông?",
      answer: "September-October is peak season when the rice terraces turn golden before harvest - the most photographed period and the main draw for most visitors. May-June offers bright green terraces just after planting, with fewer crowds than autumn. November-April is cooler and drier, with clear skies good for trekking. December-February can get cold at night - temperatures occasionally drop below 10°C. Avoid the summer rainy season (July-August) when trails get muddy and leeches are common on forest paths.",
    },
    {
      question: "How much does a trip to Pù Luông cost?",
      answer: "Pu Luong is one of the more affordable destinations in northern Vietnam. Budget travelers staying at a basic homestay can manage 2 nights for around $30-50 USD including accommodation and meals. Mid-range eco-lodge and retreat stays run 700,000-2,000,000 VND per night with meals often included. Guided trekking tours from Hanoi typically cost $80-150 USD for a 2-day / 1-night package covering transport, accommodation, meals, and guide fees.",
    },
    {
      question: "What is there to do in Pù Luông?",
      answer: "Pu Luong rewards slow travel more than activity-chasing. The core experience is trekking through rice terraces between Thai and Muong minority villages - paths connect settlements that see few visitors outside of guided tours. Sunrise viewpoints above the valley floor are the highlight for most travelers. Beyond trekking, the Ban Hieu waterfall and natural swimming pools are popular stops. Cycling between villages on flat valley roads is a relaxed way to explore without a guide. Evenings at a homestay - sharing a meal with a local family, sometimes with rice wine - are often what travelers remember most.",
    },
    {
      question: "Do I need a guide in Pù Luông?",
      answer: "Not strictly required, but recommended for first-time visitors. The trail network between villages is not always clearly marked, and having a local guide opens access to homestays, introductions to village life, and routes that don't appear on any map. If you're an experienced trekker comfortable with navigation and have offline maps downloaded, the main valley paths between Ban Hieu, Ban Son, and Pu Luong village are manageable independently. For anything deeper into the nature reserve, a guide adds significant value.",
    },
    {
      question: "How do I get around Pù Luông?",
      answer: "Attractions in Pu Luong are spread out across the valley - distances between villages and viewpoints are too far to walk comfortably if you want to cover multiple spots in a day. The most flexible option is renting a motorbike for around 200,000-250,000 VND/day. However, roads here are narrow and steep in sections - if you're not confident riding on hilly terrain, this is not the place to learn. The easier alternative is hiring a xe om (motorbike taxi) for around 400,000 VND/day. Your driver knows the roads, handles the hills, and can wait while you explore each stop - well worth it for travelers who prefer not to ride themselves.",
    },
    {
      question: "Where should I stay in Pù Luông?",
      answer: "Accommodation in Pu Luong splits into two distinct categories depending on your budget and preferred experience. Budget homestays along Provincial Road CT02 and surrounding villages sit 2-5km from the main village centers - simple rooms, basic facilities, and a more local atmosphere for around 200,000 VND/night. At the other end, eco-lodges and retreat-style properties - both in the central valley and deeper inside the villages - offer proper beds, hot showers, and often stunning terrace views. Prices range from 700,000 VND to 2,000,000 VND per night.",
    },
    {
      question: "Is Pù Luông suitable for all fitness levels?",
      answer: "Most of the walking in Pu Luong involves gentle valley paths and moderate hillside climbs between villages - accessible for travelers with average fitness. The terrain is not technical, and most guided treks are designed to be completed without prior hiking experience. The more challenging option is trekking up into the nature reserve's forested ridges - steeper, longer, and better suited to travelers who are comfortable with 4-6 hour walking days on uneven ground.",
    },
    {
      question: "Is Pù Luông safe?",
      answer: "Pu Luong is one of the safer destinations in Vietnam for independent and solo travelers. Crime is minimal, locals are accustomed to foreign visitors, and the area sees a steady stream of tourists without the scams or hustle found in more commercial destinations. The main safety considerations are practical - leech season during wet months, slippery paths after rain, and limited medical facilities in the area. Carry a basic first aid kit and know that the nearest hospital is in Ngoc Lac or Thanh Hoa city.",
    },
    {
      question: "What should I know about the local culture in Pù Luông?",
      answer: "Pu Luong is home primarily to Thai and Muong ethnic minority communities whose way of life remains closely tied to the agricultural calendar. Visitors are generally welcomed warmly, but a few considerations make a meaningful difference. Ask before photographing people, especially inside homes or during daily activities. Dress modestly when visiting villages - shoulders and knees covered is appropriate. If invited into a home for rice wine, accepting graciously is part of the hospitality culture, though declining politely is also understood. Buying directly from village producers - woven textiles, local honey, homemade rice wine - is a more meaningful way to support the community than purchasing the same items in Hanoi souvenir shops.",
    },
  ] satisfies FaqItem[],
}
