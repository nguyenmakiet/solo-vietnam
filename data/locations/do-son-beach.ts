import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const doSonBeach: Location = {
  slug: "do-son-beach",
  name: "Do Son Beach",
  updatedAt: "2026-10-16",
  provinces: ["hai-phong"],
  destination: "",
  lat: 20.68721,
  lng: 106.795379,
  address: "Đồ Sơn ward, Hải Phòng (formerly Đồ Sơn district, Hải Phòng)",
  type: ["beach"],
  categories: ["nature", "coast"],
  experiences: ["beach", "swimming", "food"],
  tags: [
    "🏖️ Nostalgic Northern Beach",
    "🏛️ French-Era Villas",
    "🐃 Buffalo Fighting Festival",
    "french-colonial-era",
  ],
  bestMonths: [5, 6, 7, 8, 9],
  bestSeasonNote: "Summer (May - Aug) is the only real swimming season, with sunshine and little rain. From September the sea starts to cool, but visitors still come for the Đồ Sơn buffalo fighting festival. From October to April the weather isn't suitable for swimming. Holiday weekends such as 30/4 - 1/5 get very crowded.",
  bestTimeOfDay: "5:00-7:30 AM for sunrise (around 5:15 in summer), fresh air, calm water and fishermen working close to shore; 4:00-6:30 PM for swimming once the sun has softened.",
  timeNeeded: {
    minMinutes: 60,
    maxMinutes: 180,
  },
  entranceFee: "Most of Đồ Sơn's beaches are free. Some attractions charge entry, typically 20,000-50,000 VND per person - for example Bảo Đại's villa and the Đồi Rồng resort area. Some beachside cafés add a chair fee on top of drinks without saying so up front - ask before you sit down.",
  openingHours: "Open 24 hours. Swim only in designated areas and follow lifeguard notices.",
  mapUrl: "https://www.google.com/maps?q=20.68721,106.795379",
  streetView: { embedUrl: "" },
  heroImage: heroUrl("do-son-beach-hero_placeholder"),
  gallery: [],
  seoDescription:
    "Đồ Sơn, about 20 km from central Hải Phòng and 120 km from Hanoi, was northern Vietnam's go-to beach in the 1980s and 90s - today a nostalgic, low-key seaside town with brown, silty water, French-era villas, the new Đồi Rồng artificial beach and the Đồ Sơn buffalo fighting festival.",
  tips: [
    "Set your expectations: the water often looks brown and cloudy, partly from sediment carried by nearby rivers and stirred up by waves - but colour alone can't tell you whether it's safe to swim, and rubbish on the sand and in the water is a frequent complaint",
    "For clean, clear water and gentle waves - especially with children - use the Đồi Rồng artificial beach rather than the natural beaches",
    "Zone 1 has rocks and big waves and isn't suitable for swimming; Zone 2 is the main swimming beach; Zone 3 is quieter and more private",
    "Ask before you sit down at a beachside café: some add a chair fee on top of drinks and only tell you when you leave",
    "Skip the electric tourist carts - visitors report heavy overcharging, and a ride-hailing car is often cheaper",
    "Check seafood prices before ordering; many visitors find them high",
    "Expect persistent beach vendors, especially in the old zones",
    "Watch your step in the water: in places there's a layer of smelly mud just under the sand",
    "Easy day trip from Hanoi (about 120 km, 2-4 hours) - go early, swim, eat seafood and visit a couple of sights",
    "Beyond the beach, visit Bảo Đại's villa, Cô Đôi Thượng Ngàn temple, Đồi Rồng, or take a trip out to Hòn Dáu island",
  ],
  content: {
    richSections: [
      {
        id: "about",
        label: "About This Place",
        title: "What Makes Do Son Beach Special",
        blocks: [
          {
            type: "callout",
            variant: "info",
            title: "Is Đồ Sơn right for you?",
            text: "**Go if** you're in Hải Phòng and want an easy seaside break, nostalgia, seafood and a bit of history - or you're bringing kids to the Đồi Rồng artificial beach. **Skip it if** you want clear water and a beautiful natural beach: the water here is brown and the sand dark. Head instead to the [Cát Cò beaches](/locations/cat-co-beach) on Cát Bà, or further south to [Cửa Lò](/locations/cua-lo-beach).",
          },
          {
            type: "paragraph",
            text: "Đồ Sơn is the seaside town of Hải Phòng, about 20 km from the city centre and 120 km from Hanoi. In the 1980s and 1990s it was the beach of northern Vietnam - a holiday memory for generations of state employees, workers and school groups. The French had already picked it as a resort during the colonial era, and many European-style villas and old buildings still hide among the trees, giving Đồ Sơn a character unlike other northern beaches.",
          },
          {
            type: "paragraph",
            text: "After the Đổi Mới reforms, private hotels arrived, but the beach gradually lost its shine. Đồ Sơn gained a reputation for dark sand and grey, murky water, and visitors moved on to Sầm Sơn, Hạ Long and Cát Bà. The Vạn Hoa casino, often described as Vietnam's first, was left abandoned. After about two decades in decline, Đồ Sơn has recently shown signs of revival, helped by the Đồi Rồng resort area (opened in 2020), Hải Phòng's food-tour boom and sports events.",
          },
          {
            type: "heading",
            text: "Why Is the Water Brown?",
          },
          {
            type: "paragraph",
            text: "Đồ Sơn sits near the mouths of big rivers, including the Red River and Thái Bình River systems. Sediment carried by these rivers and stirred up with fine sand by the waves is part of why the water often looks brown and cloudy. However, colour alone cannot tell you whether the water is safe for swimming - water quality varies by location and conditions, and past reports have also noted murky water and pollution concerns here. Swim in designated areas, and choose the Đồi Rồng beach if water quality matters to you. Further offshore the water is noticeably clearer, so a boat or canoe trip is the best way to see blue water.",
          },
        ],
      },
      {
        id: "how-to-get-there",
        label: "How to Get There",
        title: "How to Get to Do Son Beach",
        blocks: [
          {
            type: "paragraph",
            text: "From Hanoi, Đồ Sơn is about 120 km - roughly 2-4 hours by car or bus depending on traffic, and an easy day trip. From central Hải Phòng it is about 20 km, 20-30 minutes on a wide two-lane road, with newer links from the coastal road and expressway. Take bus route 03 or book a ride-hailing car; once there, a ride-hailing car is usually cheaper than the electric tourist carts.",
          },
        ],
      },
      {
        id: "what-to-expect",
        label: "What to Expect",
        title: "What to Expect at Do Son Beach",
        blocks: [
          {
            type: "paragraph",
            text: "Đồ Sơn isn't one beach but several zones, each with a different feel. Choose the zone to match what you want.",
          },
          {
            type: "table",
            headers: ["Area", "Character", "Best for"],
            rows: [
              ["Zone 1", "Jagged rocks and big waves, not suitable for swimming; plenty of restaurants and fairly quiet; no children's play areas", "Relaxing, sea views and photos"],
              ["Zone 2", "The best-known and busiest zone, with hotels, seafood restaurants and services; long, wide, gently sloping beach with moderate waves", "Swimming for all ages - where most visitors stay"],
              ["Zone 3", "Separate and further away, with a small beach mostly used by day-trippers; home to Hòn Dáu island and Doson Resort", "Quiet, privacy and families with young children"],
              ["Đồi Rồng", "Modern resort complex in the Vạn Hương area (end of Zone 2, next to Zone 3), opened in summer 2020, with an artificial beach of white sand and blue water over 1 km long", "Clean water and gentle swimming, especially with kids"],
            ],
          },
          {
            type: "paragraph",
            text: "Swimming conditions vary by zone and day: Zone 2 is shallow and usually calm, while Zone 1 has strong waves. Some visitors find the sand dark and coarse, with smelly mud a few centimetres below the surface in places, and rubbish and floating water hyacinth are common complaints. On holiday weekends the beaches are packed; on ordinary weekdays and off-season, they can be almost deserted, with many seafood restaurants empty. Locals who prefer natural surf-style swimming often head to the 295 beach area or Phủ Công.",
          },
          {
            type: "heading",
            text: "Beyond the Beach",
          },
          {
            type: "paragraph",
            text: "Đồ Sơn's history is part of its appeal. You can visit Bảo Đại's villa, one of the colonial-era buildings on the hills, wander past old French villas under the trees, stop at Cô Đôi Thượng Ngàn temple, or take a trip to Hòn Dáu island. In September, the Đồ Sơn buffalo fighting festival draws big crowds.",
          },
        ],
      },
      {
        id: "travel-tips",
        label: "Travel Tips",
        title: "Travel Tips for Do Son Beach",
        blocks: [
          {
            type: "paragraph",
            text: "Đồ Sơn is a bit like Vũng Tàu in the south: once the obvious beach closest to the big city, now overtaken by clearer, more polished destinations. For many northerners it's mainly a place of memories. Reviews are blunt - murky water, rubbish, pushy vendors, overpriced seafood and electric carts, and hidden chair fees - though plenty of Hải Phòng locals still love it for an easy evening by the sea.",
          },
          {
            type: "paragraph",
            text: "If you come, make it about more than swimming: combine a dip at Đồi Rồng or Zone 2 with the French-era villas, Bảo Đại's villa and a seafood meal (ask prices first). Go early in the morning or late afternoon, avoid holiday weekends, and confirm any extra charges before you sit down or order.",
          },
          {
            type: "callout",
            variant: "tip",
            title: "Want blue water?",
            text: "Take a boat or canoe out from the shore - the water further out is much clearer than near the beach.",
          },
        ],
      },
    ],
  },
  insights: {
    highlights: [
      "Northern Vietnam's classic beach of the 1980s and 1990s, now a nostalgic seaside town close to Hải Phòng",
      "French colonial-era villas and Bảo Đại's villa hidden among the trees",
      "Đồi Rồng artificial beach with white sand and clear water, and the Đồ Sơn buffalo fighting festival in September",
    ],
    thingsToKnow: {
      crowds: "Very crowded on holiday weekends; often quiet or almost empty on weekdays and off-season",
      difficulty: "Easy",
      safety: "Zone 1 has rocks and big waves - don't swim there. Swim in designated areas, stay close to shore on windy days, and watch for mud and debris underfoot",
      accessibility: "Flat beachfront and good roads; distances between zones are long, so use a car rather than the overpriced electric carts",
      seasonal: "May - Aug for swimming; September for the buffalo fighting festival; Oct - Apr too cool for swimming",
    },
    visitorTips: [
      "Swim at Đồi Rồng or Zone 2, not Zone 1",
      "Ask about chair fees and seafood prices before you sit down or order",
      "Use a ride-hailing car instead of the electric tourist carts",
    ],
    faq: [
      {
        question: "Is there an entrance fee for Đồ Sơn?",
        answer: "Most of Đồ Sơn's beaches are free. Some attractions, such as Bảo Đại's villa and the Đồi Rồng resort area, charge around 20,000-50,000 VND per person.",
      },
      {
        question: "Can I visit Đồ Sơn as a day trip from Hanoi?",
        answer: "Yes. It's about 120 km, roughly 2 hours by car in good traffic. Leave early and you'll have time to swim, eat seafood and see a couple of sights.",
      },
      {
        question: "Why is the water at Đồ Sơn brown?",
        answer: "Partly because of sediment carried by nearby rivers and stirred up by the waves. But colour alone can't tell you whether the water is safe for swimming - water quality varies by location and conditions, and murky water and rubbish are common complaints. The water is much clearer further offshore, and the Đồi Rồng artificial beach is the cleanest option for swimming.",
      },
      {
        question: "Is Đồ Sơn safe for swimming?",
        answer: "Zone 2 is shallow and usually calm, and the Đồi Rồng artificial beach is gentle and clean. Avoid swimming in Zone 1, which has rocks and big waves, stay in designated areas, don't swim far out, and follow lifeguard notices, especially on windy days.",
      },
      {
        question: "What else is there to do in Đồ Sơn besides swimming?",
        answer: "Visit Bảo Đại's villa and the old French villas, Cô Đôi Thượng Ngàn temple, the Đồi Rồng resort area, or Hòn Dáu island - or just sit by the sea with a coffee. In September, catch the buffalo fighting festival.",
      },
    ],
    sentiment: {
      positive: "Visitors appreciate the convenient location near Hải Phòng, the wide, breezy beach, the nostalgic atmosphere and history, Bảo Đại's villa, and the easy weekend day trip. Many Hải Phòng locals still love it as a place to unwind.",
      negative: "The most common complaints are brown, murky water, dark sand, rubbish and floating debris, mud under the sand, pushy vendors, hidden chair fees, overpriced seafood and electric carts, crowds on holidays and an empty, underwhelming feel off-season.",
    },
  },
}
