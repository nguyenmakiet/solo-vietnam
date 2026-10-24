import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const baiTruongBeach: Location = {
  slug: "bai-truong-beach",
  name: "Bai Truong (Long Beach)",
  updatedAt: "2026-10-24",
  provinces: ["kien-giang"],
  destination: "phu-quoc",
  lat: 10.152127,
  lng: 103.973292,
  address: "Phú Quốc special zone, An Giang (formerly Dương Đông ward / Dương Tơ commune, Phú Quốc city, Kiên Giang)",
  type: ["beach"],
  categories: ["nature", "coast"],
  experiences: ["beach", "swimming", "photography"],
  tags: [
    "🌅 Phú Quốc's Sunset Coast",
    "🏖️ 20 km of Sand",
    "🔥 Beach Bars & Fire Shows",
  ],
  bestMonths: [10, 11, 12, 1, 2, 3, 4, 5],
  bestSeasonNote: "Nov - Apr is the dry season and the best time: sunny, little rain, calmer seas and the most reliable sunsets - March is often the most stable. It's also peak season, so expect more visitors and service prices about 20-30% higher than in low season. October and the turn of April - May are good shoulder months. From May to October it's the rainy season, with heavy rain and possible storms; sunsets depend on the weather, but rain usually comes in short bursts, and the beach can feel almost empty.",
  bestTimeOfDay: "Late afternoon. Swim around 4:00-6:00 PM, when the sun is softer, then watch the sunset from about 5:30 to 6:30 PM. Arrive 30 minutes early to get a good spot. Avoid the midday sun.",
  timeNeeded: {
    minMinutes: 60,
    maxMinutes: 180,
  },
  entranceFee: "Free public beach. Sunbeds, umbrellas, water sports, massages, food and drinks are paid separately; many beach bars let you use a sunbed if you order a drink. Parking is free at some access points.",
  openingHours: "Open 24 hours.",
  mapUrl: "https://www.google.com/maps?q=10.152127,103.973292",
  streetView: { embedUrl: "" },
  heroImage: heroUrl("bai-truong-beach-hero_placeholder"),
  gallery: [],
  seoDescription:
    "Bãi Trường (Long Beach) is a roughly 20 km stretch of sand on Phú Quốc's west coast, from Dương Đông down towards An Thới - known for some of the island's best sunsets, beach bars and fire shows, with conditions that vary a lot by section.",
  tips: [
    "⚠️ Waves can be big and currents strong, especially when it's windy; the sand shelves steeply in places and there are few barriers marking deep water. Take care with children, and never swim where signs say no",
    "Conditions change a lot along the 20 km: some stretches are clean and calm, others murky, rough or littered - if one access point disappoints, try another",
    "Go in the late afternoon: swim from about 4 PM, then stay for sunset around 5:30-6:30 PM",
    "Many beach bars let you use a sunbed if you order a drink; in busy stretches, sunbeds and umbrellas can be hard to find",
    "Facilities vary: some access points have free parking and public freshwater taps, others have no showers or changing rooms",
    "Resorts line much of the beach, and some may discourage outsiders from lingering on the sand in front of them - use public access points",
    "Don't bring valuable jewellery, and keep an eye on your belongings while you swim",
    "Carry some cash for small vendors and snacks",
    "Near the airport end, you can watch planes passing low overhead at sunset",
    "Take your rubbish with you - there aren't always bins on the sand",
  ],
  content: {
    richSections: [
      {
        id: "about",
        label: "About This Place",
        title: "What Makes Bãi Trường Special",
        blocks: [
          {
            type: "paragraph",
            text: "Bãi Trường, often called Long Beach, isn't a single beach but the name for a long stretch of Phú Quốc's west coast, running about 20 km from the Dương Đông area south towards An Thới. The name simply means 'long beach', and it's often described as the longest on the island. It's also Phú Quốc's busiest tourism strip: Trần Hưng Đạo street runs behind it, lined with hotels, resorts, restaurants and bars, from simple guesthouses to big international resorts.",
          },
          {
            type: "paragraph",
            text: "What everyone comes for is the sunset. Facing due west with nothing blocking the view, the beach is one of the best places on Phú Quốc to watch the sun drop into the sea, turning the sky orange, purple and gold. Many visitors rank its sunsets as the best on the island. The water is usually less clear than at [Bãi Sao](/locations/sao-beach) or [Bãi Khem](/locations/khem-beach) in the south, but the wide beach and relaxed late-afternoon atmosphere win many people over.",
          },
        ],
      },
      {
        id: "how-to-get-there",
        label: "How to Get There",
        title: "How to Get to Bãi Trường",
        blocks: [
          {
            type: "paragraph",
            text: "Bãi Trường is close to Phú Quốc International Airport - the nearest stretches are only a few kilometres away - so a taxi or motorbike taxi from the airport takes just minutes. If you arrive by fast boat from the mainland, you'll dock at Bãi Vòng port on the east coast; from there, take a taxi or rent a motorbike and cross the island to Trần Hưng Đạo street. Many hotels and resorts have their own paths to the sand, and there are public access points along the road where you can ride a motorbike almost to the beach.",
          },
        ],
      },
      {
        id: "what-to-expect",
        label: "What to Expect",
        title: "What to Expect at Bãi Trường",
        blocks: [
          {
            type: "paragraph",
            text: "Expect a long sweep of sand fringed by coconut palms, with grey rocks here and there and beach bars playing chill music. The area has become much busier in recent years, with many Russian visitors.",
          },
          {
            type: "heading",
            text: "Things to Do",
          },
          {
            type: "bullets",
            items: [
              "Sunset watching: the main event. Find a spot on the sand or at a beach bar around 5:30 PM and watch the sun sink straight into the sea.",
              "Swimming: best in the late afternoon on calm days. Check the waves first - on windy days they get big and currents can be strong.",
              "Kayaking and paddleboarding: rent on the beach and paddle along the shore, ideally when the sea is calm.",
              "Surfing: possible on days when the waves pick up.",
              "Parasailing and banana boats: offered by water-sports operators along the busier, resort-lined stretches. Agree on price and duration first.",
              "Beach massage: many visitors recommend a massage on the sand while the sun goes down.",
              "Fire shows: some beach bars put on fire-dancing shows in the evening.",
              "Seafood and drinks: eat at restaurants right by the water, or try cheap street snacks like fried fish balls.",
              "Night market: after sunset, head to the [Phú Quốc Night Market](/locations/phu-quoc-night-market) for dinner and shopping.",
            ],
          },
          {
            type: "paragraph",
            text: "Experiences vary widely, so set your expectations. Some visitors find the water clean with small waves; others report big waves, strong currents, a steeply shelving beach and murky water when the waves stir up the sand. Some stretches are tidy, while elsewhere litter and a lack of bins spoil the view - and a few visitors were badly disappointed by rubbish. In the rainy season, the beach can be wonderfully empty between short storms.",
          },
          {
            type: "callout",
            variant: "warning",
            title: "Swim with care",
            text: "Bãi Trường is better for relaxing and sunsets than for long swims on rough days. Waves and currents can be strong, the seabed drops off in places, and many stretches have no lifeguards or barriers. Don't snorkel or dive without proper equipment and a guide.",
          },
        ],
      },
      {
        id: "travel-tips",
        label: "Travel Tips",
        title: "Travel Tips for Bãi Trường",
        blocks: [
          {
            type: "paragraph",
            text: "Treat Bãi Trường as your late-afternoon and evening base on Phú Quốc: spend the day at clearer beaches in the south, like [Bãi Sao](/locations/sao-beach) or [Bãi Khem](/locations/khem-beach), or on an island trip, then come back for a swim, a drink and sunset, and stay for dinner and a fire show. Bring sunglasses, a hat and sunscreen, keep valuables to a minimum, and pick your access point carefully - the beach changes a lot from one section to the next.",
          },
        ],
      },
    ],
  },
  insights: {
    highlights: [
      "Some of Phú Quốc's best sunsets, over an unobstructed western horizon",
      "A roughly 20 km stretch of sand lined with coconut palms, beach bars and resorts",
      "Evening fire shows, beach massages and seafood by the water",
    ],
    thingsToKnow: {
      crowds: "Busy around resorts and beach bars, especially in peak season; quieter in the rainy season and on some public stretches",
      difficulty: "Easy",
      safety: "Big waves and strong currents on windy days, steep drop-offs in places and few lifeguards; supervise children closely",
      accessibility: "Easy road access from Trần Hưng Đạo street; facilities vary by section",
      seasonal: "Nov - Apr is the dry season and best for sunsets; May - Oct brings rain and possible storms",
    },
    visitorTips: [
      "Arrive about 30 minutes before sunset",
      "Order a drink to use a beach-bar sunbed",
      "Try another access point if one stretch is dirty or rough",
    ],
    faq: [
      {
        question: "Is Bãi Trường good for swimming?",
        answer: "It depends on the day and the section. On calm days the water can be clean with small waves, but when it's windy the waves get big, currents can be strong and the water turns murky. Swim with care, especially with children.",
      },
      {
        question: "When is the best time to see the sunset at Bãi Trường?",
        answer: "Around 5:30-6:30 PM. Arrive about 30 minutes early to get a good spot. The dry season (November to April) gives the most reliable sunsets, with March often the most stable.",
      },
      {
        question: "Is Bãi Trường free?",
        answer: "Yes, the beach is public and free. Sunbeds, water sports, food and drinks cost extra, and many beach bars let you use a sunbed if you buy a drink.",
      },
      {
        question: "How far is Bãi Trường from the airport?",
        answer: "Very close - the nearest stretches are only a few kilometres from Phú Quốc International Airport, a short taxi ride away.",
      },
      {
        question: "Is Bãi Trường clean?",
        answer: "It varies. Some stretches are clean and tidy, while others have litter and few bins. If one access point is dirty, try another along Trần Hưng Đạo street.",
      },
    ],
    sentiment: {
      positive: "Visitors rave about the sunsets, the long, wide beach, coconut palms, relaxed beach bars with music and smoothies, fire shows in the evening, beach massages, affordable stays and the convenience of being close to the airport and town.",
      negative: "Common complaints are big waves, strong currents and a steep beach that make swimming hard on some days, murky water, litter and a lack of bins in places, missing showers or changing rooms, resorts that discourage outsiders, and difficulty finding sunbeds in busy stretches.",
    },
  },
}
