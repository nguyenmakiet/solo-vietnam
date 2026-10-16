import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const samSonBeach: Location = {
  slug: "sam-son-beach",
  name: "Sam Son Beach",
  updatedAt: "2026-10-15",
  provinces: ["thanh-hoa"],
  destination: "",
  lat: 19.7431,
  lng: 105.906307,
  address: "Sầm Sơn ward, Thanh Hóa (formerly Sầm Sơn city, Thanh Hóa)",
  type: ["beach"],
  categories: ["nature", "coast"],
  experiences: ["beach", "swimming", "food", "photography"],
  tags: [
    "🌊 Northern Vietnam's Busiest Beach",
    "🏖️ Four Bathing Zones A-D",
    "🌅 Sunrise Over the Sea",
  ],
  bestMonths: [5, 6, 7, 8, 9, 10],
  bestSeasonNote: "May - Aug is peak season, when millions of visitors come for the beach - expect crowds even on weekdays, and book accommodation early. The 30/4 - 1/5 holiday is the busiest time of all. Autumn (roughly Sep - Oct) is cooler and quieter, with more space on the sand and steadier prices - better for a relaxed break than for hot-weather swimming.",
  bestTimeOfDay: "6-9 AM for cool air, soft light, clearer water and fewer people (sunrise is around 5 AM). Or 3:30-5 PM, when the heat eases and the beach is at its liveliest. Swimming isn't allowed at midday or after 5 PM, when lifeguards are off duty.",
  timeNeeded: {
    minMinutes: 120,
    maxMinutes: 240,
  },
  entranceFee: "Free beach access. Parking, deckchairs, showers and food are paid separately - check prices before you use them.",
  openingHours: "Open 24 hours. Swimming is permitted only during lifeguard hours - not at midday and not after 5 PM.",
  mapUrl: "https://www.google.com/maps?q=19.7431,105.906307",
  streetView: { embedUrl: "" },
  heroImage: heroUrl("sam-son-beach-hero_placeholder"),
  gallery: [],
  seoDescription:
    "Sầm Sơn is Thanh Hóa's most famous beach and one of the busiest in northern Vietnam - a 9 km crescent of flat, fine sand about 180 km from Hanoi, with four bathing zones, strong waves, lifeguards, seafood and lively summer crowds.",
  tips: [
    "⚠️ Waves here are strong and constant, and rip currents can form on rough days. Swim only in lifeguarded areas, don't go far out, and warm up first to avoid cramps",
    "Swimming is not allowed at midday or after 5 PM, when lifeguards finish their shift",
    "Pick your zone: Beach A for rocks and photos, Beach B for families with children and older people, Beach C for the widest sand and most services, Beach D for quiet and fishing boats",
    "Get to the beach around 5 AM for sunrise, photos and an empty beach. Sunset around 5:30 PM in the Vlasta Sầm Sơn area is another popular photo spot",
    "Book accommodation early in summer - even weekdays are packed, and the best rooms and villas sell out days or weeks ahead",
    "Go at the start of the week if you can: summer weekends are extremely crowded and restaurants have long waits",
    "Check the menu or ask prices before ordering seafood. For better value, eat at restaurants further back from the seafront",
    "Buy nem chua (Thanh Hóa's famous fermented pork) from large, established shops",
    "You can't park on the roadside along the beach - plan to use a paid car park",
    "Combine the beach with Trường Lệ mountain, Hòn Trống Mái rocks, Độc Cước temple and Cô Tiên temple nearby",
  ],
  content: {
    richSections: [
      {
        id: "about",
        label: "About This Place",
        title: "What Makes Sam Son Beach Special",
        blocks: [
          {
            type: "callout",
            variant: "info",
            title: "Is Sầm Sơn right for you?",
            text: "**Go if** you want a lively, affordable family beach close to Hanoi, with plenty of hotels, seafood and things going on. **Skip it if** you're after clear water and peace and quiet - head to the quieter Vinh Sơn beach nearby, or further south to [Cửa Lò](/locations/cua-lo-beach), which many visitors find cleaner and calmer.",
          },
          {
            type: "paragraph",
            text: "Sầm Sơn is the most famous beach in Thanh Hóa province, about 180 km from Hanoi and 16 km from Thanh Hóa city. The beach curves for about 9 km in a crescent from the foot of Trường Lệ mountain to the Quảng Cư area. It is very wide, flat and covered in fine sand, with no sudden deep spots, sinking mud or hidden rocks underwater.",
          },
          {
            type: "paragraph",
            text: "For many people in northern Vietnam, Sầm Sơn is the default summer beach - one of the busiest beaches in the country, with new hotels, homestays and entertainment opening every year. That popularity is both its appeal and its biggest drawback: it's lively and well served, but very crowded, and the water is not always clear.",
          },
        ],
      },
      {
        id: "how-to-get-there",
        label: "How to Get There",
        title: "How to Get to Sam Son Beach",
        blocks: [
          {
            type: "paragraph",
            text: "From Hanoi, it takes just over 2 hours by car on the expressway (Pháp Vân - Cầu Giẽ, then the Ninh Bình - Cao Bồ - Mai Sơn and Mai Sơn - QL45 sections). Buses run throughout the day from Giáp Bát and Mỹ Đình bus stations, and trains run to Thanh Hóa, 16 km away.",
          },
          {
            type: "paragraph",
            text: "From Ho Chi Minh City or the south, fly to Thọ Xuân airport in Thanh Hóa (about 2 hours), then take a taxi or private car - about 1.5 hours to Sầm Sơn. Note that roadside parking along the beach isn't allowed, so drivers often have to circle to find a paid car park.",
          },
        ],
      },
      {
        id: "what-to-expect",
        label: "What to Expect",
        title: "What to Expect at Sam Son Beach",
        blocks: [
          {
            type: "paragraph",
            text: "Sầm Sơn is not a calm, glassy beach. Waves roll in strongly and constantly, and on rough days dangerous rip currents can form. Lifeguards are on duty at all the main bathing areas, but swimming is only allowed during their shifts - not at midday and not after 5 PM. Near the shore the water can look murky, partly from natural sediment.",
          },
          {
            type: "heading",
            text: "Choosing a Bathing Zone",
          },
          {
            type: "table",
            headers: ["Zone", "Character", "Best for"],
            rows: [
              ["Beach A", "Busiest; gently sloping with strong waves; boats and rocky outcrops - watch the sharp rocks near the mountain", "Photos and atmosphere"],
              ["Beach B", "More moderate waves; lots of snack stalls along the beach", "Families with young children and older people"],
              ["Beach C", "Widest and flattest sand, big waves, clean and busy; restaurants, cafés and karaoke along the front; most events held here", "Convenience and nightlife"],
              ["Beach D", "Quieter, near the fishing boats, shaded by casuarina trees", "A calmer, more local feel"],
            ],
          },
          {
            type: "heading",
            text: "Around Sầm Sơn",
          },
          {
            type: "paragraph",
            text: "Trường Lệ mountain, at the southern end of the beach, is great for a walk or a run among the trees with sea breezes - you may meet herds of goats and the famous Hòn Trống Mái (cock-and-hen) rocks. At its foot, Độc Cước temple is where locals pray for luck and good fortune, with views over the whole beach, and Cô Tiên temple sits higher on the mountain. Vinh Sơn beach is quieter, with bluer water and good photo spots, if you want to escape the main crowds.",
          },
          {
            type: "callout",
            variant: "warning",
            title: "Swim safely",
            text: "Stay in marked, lifeguarded areas, don't swim far out when waves are strong, and avoid the water entirely on rough days. Do a few warm-up stretches before swimming - the strong surf makes cramps more likely.",
          },
        ],
      },
      {
        id: "travel-tips",
        label: "Travel Tips",
        title: "Travel Tips for Sam Son Beach",
        blocks: [
          {
            type: "paragraph",
            text: "Be realistic about Sầm Sơn: visitors consistently describe it as crowded and hectic, with strong waves and water that is often cloudy. It's not the place for pristine water - it's the place for a lively, affordable family beach break close to Hanoi.",
          },
          {
            type: "paragraph",
            text: "To get the best of it, swim early in the morning or late afternoon, go midweek if you can, book your room well ahead in summer, and choose your bathing zone to suit your group. For seafood, check prices before ordering and look a little away from the seafront for better value; buy nem chua from established shops.",
          },
          {
            type: "callout",
            variant: "tip",
            title: "Morning or afternoon?",
            text: "Mornings (6-9 AM) are calmer, cooler and better for families, sunrise and a quiet walk. Afternoons (3:30-5 PM) are livelier and more social - good for playing on the sand and then heading to dinner.",
          },
        ],
      },
    ],
  },
  insights: {
    highlights: [
      "A 9 km crescent of wide, flat, fine sand with no hidden rocks or sudden deep spots",
      "Four bathing zones (A-D) to suit different groups, with lifeguards on duty",
      "Close to Hanoi, with Trường Lệ mountain, Hòn Trống Mái rocks and local temples nearby",
    ],
    thingsToKnow: {
      crowds: "Very crowded in summer, including weekdays; the 30/4 - 1/5 holiday is the busiest. Quieter in autumn",
      difficulty: "Easy",
      safety: "Strong, constant waves and occasional rip currents. Swim only during lifeguard hours (not midday, not after 5 PM) and in marked areas",
      accessibility: "Flat seafront, but no roadside parking - use paid car parks",
      seasonal: "May - Aug for swimming; Sep - Oct is cooler and quieter",
    },
    visitorTips: [
      "Swim at 6-9 AM or 3:30-5 PM",
      "Ask prices before ordering seafood",
      "Book accommodation well ahead in summer",
    ],
    faq: [
      {
        question: "Is it better to swim at Sầm Sơn in the morning or afternoon?",
        answer: "Mornings (6-9 AM) are cooler, calmer and less crowded, with clearer water - better for families and sunrise. Afternoons (3:30-5 PM) are livelier. Avoid midday heat, and note that swimming isn't allowed after 5 PM, when lifeguards go off duty.",
      },
      {
        question: "Which bathing zone at Sầm Sơn is best?",
        answer: "Beach A for rocks and photos, Beach B for families with children or older people, Beach C for the widest sand and most services, and Beach D for a quieter, more local feel.",
      },
      {
        question: "Is Sầm Sơn safe for swimming?",
        answer: "Yes, within lifeguarded areas and hours, but the waves are strong and rip currents can form on rough days. Don't swim far out, and stay out of the water when the sea is rough.",
      },
      {
        question: "How do I get to Sầm Sơn from Hanoi?",
        answer: "It's about 180 km - just over 2 hours by car on the expressway. Buses also run all day from Giáp Bát and Mỹ Đình bus stations.",
      },
    ],
    sentiment: {
      positive: "Visitors enjoy the long, wide beach, affordable prices, good hotel and service options (especially around Beach C), lively summer atmosphere and fun times with friends and family. Many note big improvements in infrastructure in recent years.",
      negative: "The most common complaints are overcrowding (even on weekdays in summer), strong waves, murky or dirty water near the shore, a hectic atmosphere, parking difficulties and long waits at restaurants.",
    },
  },
}
