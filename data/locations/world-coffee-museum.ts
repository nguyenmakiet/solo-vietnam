import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const worldCoffeeMuseum: Location = {
  slug: "world-coffee-museum",
  name: "World Coffee Museum",
  updatedAt: "2026-10-06",
  provinces: ["dak-lak"],
  destination: "",
  lat: 12.691043,
  lng: 108.044683,
  address: "Nguyễn Đình Chiểu, Tân Lợi, Buôn Ma Thuột, Đắk Lắk",
  type: ["museum"],
  categories: ["culture", "architecture", "food"],
  experiences: ["museum-visit", "photography", "food"],
  tags: [
    "☕ Vietnam's First World Coffee Museum",
    "🏛️ Nhà Rông-Inspired Architecture",
    "ethnic-minority-culture",
  ],
  bestMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  bestTimeOfDay: "Roughly 7-8 AM or 4-6 PM for the best natural light and a quieter visit - it's largely an indoor site, so the exact time matters mainly for photography and crowds",
  timeNeeded: {
    minMinutes: 60,
    maxMinutes: 180,
  },
  entranceFee: "Around 150,000 VND for adults (includes one small cup of coffee), roughly 40,000-50,000 VND for children (no coffee included), with a discounted student rate reported around 105,000 VND. Booking through Klook or similar platforms can be slightly cheaper per ticket, though it may not include combo extras available when buying in person - compare before deciding. If you only want to see the exterior architecture and grounds, this is viewable without a ticket.",
  openingHours: "8:00 AM-5:00 PM daily. The museum may open in the evening on major holidays or special occasions, so check the official website before visiting.",
  mapUrl: "https://www.google.com/maps?q=12.691043,108.044683",
  streetView: { embedUrl: "https://www.google.com/maps/embed?pb=!4v1791007944568!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdNRGcwLXpvNFFF!2m2!1d12.69018606298076!2d108.0442305737493!3f354.9472446539857!4f-47.56168173541211!5f0.7820865974627469" },
  heroImage: heroUrl("world-cafe-museum-dak-lak_yl6cv6"), 
  gallery: [
    "world-cafe-museum-dak-lak_yl6cv6",
    "world-cafe-museum-dak-lak-2_gxpgrl",
    "world-cafe-museum-dak-lak-3_cjtrtw",
    "world-cafe-museum-dak-lak-4_wepd3h",
    "world-cafe-museum-dak-lak-5_ipiakf",
    "world-cafe-museum-dak-lak-6_fzgntz",
  ], 
  seoDescription:
    "The World Coffee Museum (Bảo Tàng Thế Giới Cà Phê) in Buôn Ma Thuột, Đắk Lắk is Vietnam's first museum dedicated to coffee, with architecture inspired by Central Highlands longhouses and around 10,000 coffee artifacts sourced from Germany's Jens Burg collection - though many visitors find it feels more like a showcase for its owner, Trung Nguyên, than a deeply educational museum.",
  tips: [
    "Time needed: 1-3 hours",
    "If you mainly want photos of the striking exterior architecture, you can appreciate it from outside without buying a ticket - several visitors suggest skipping the entrance fee entirely if photography and a quick look around the grounds is your main goal",
    "The adult ticket includes one small cup of coffee; opinions vary on whether it's worth savouring or fairly basic, so temper your expectations",
    "Free audio guides are available by scanning QR codes at each exhibit area, with English-speaking staff on hand if you need help",
    "Consider booking tickets in advance through Klook for a small discount, though note you may still need to queue for a paper ticket on arrival, and combo deals bought in person can sometimes offer better overall value than the online ticket alone",
    "Many visitors find the exhibits feel more like a showcase for the museum's owner, Trung Nguyên, than an in-depth, impartial look at coffee history - go in with that expectation rather than anticipating a traditional, deeply academic museum experience",
    "Don't touch the artifacts, and follow staff guidance on photography restrictions in certain areas",
    "The museum sits just 5-10 minutes from central Buôn Ma Thuột by motorbike or taxi, with ample on-site parking",
  ],
  content: {
    richSections: [
      {
        id: "about",
        label: "About This Place",
        title: "What Makes World Coffee Museum Special",
        blocks: [
          {
            type: "paragraph",
            text: "The World Coffee Museum (Bảo Tàng Thế Giới Cà Phê) in Buôn Ma Thuột, Đắk Lắk, is Vietnam's first museum dedicated entirely to coffee, set within the Coffee City (Thành Phố Cà Phê) development on Nguyễn Đình Chiểu street, a site of more than 45 hectares - the museum building itself occupies a smaller footprint within this larger complex. Opened on November 24, 2018, the museum's architecture draws on the traditional nhà rông (communal house) and nhà dài (longhouse) styles of Central Highlands ethnic groups, with a distinctive curved interior said to shape the flow of sound through the space.",
          },
          { type: "heading", text: "The Collection" },
          {
            type: "paragraph",
            text: "Inside, around 10,000 coffee-related artifacts - sourced from the Jens Burg coffee museum in Germany, built up over 20 years - trace the history of major coffee civilizations including Ottoman, Roman, and Zen traditions, alongside traditional brewing tools, roasting equipment, old books, and documents. The museum has drawn international recognition, including praise from the Associated Press as a vivid, distinctive 'living museum', and a spot on Wanderlust magazine's list of top Vietnam destinations. Alongside its coffee exhibits, the museum also runs parallel displays on the people and nature of the Central Highlands, highlighting the cultural identity of groups including the M'nông, Ba Na, J'Rai, and Ê Đê, whose lives have long been intertwined with coffee cultivation in this region.",
          },
          { type: "heading", text: "Mixed Reviews" },
          {
            type: "paragraph",
            text: "That said, visitor opinion on the museum is genuinely split: many praise the architecture, cleanliness, and photogenic spaces, while a large number of others feel the content leans more toward promoting the museum's owner, Trung Nguyên coffee, than offering deep, impartial education about coffee - a perspective worth knowing before you visit, especially given the relatively high ticket price.",
          },
        ],
      },
      {
        id: "how-to-get-there",
        label: "How to Get There",
        title: "How to Get to World Coffee Museum",
        blocks: [
          {
            type: "paragraph",
            text: "The museum is about 5-10 minutes from central Buôn Ma Thuột by motorbike, taxi, or private car - a short, straightforward trip. Larger groups may want to arrange a car. The museum has a spacious, secure on-site parking area.",
          },
        ],
      },
      {
        id: "what-to-expect",
        label: "What to Expect",
        title: "What to Expect at World Coffee Museum",
        blocks: [
          { type: "heading", text: "Grounds and Design" },
          {
            type: "paragraph",
            text: "The grounds are spacious and green, with the nhà rông-inspired buildings forming a striking, highly photogenic silhouette from almost any angle. Inside, the design is minimalist - concrete walls, high domed ceilings drawing in natural light, a reading room, a film screening room, exhibition halls, and a basement level, all kept cool with strong air conditioning.",
          },
          { type: "heading", text: "Exhibits and Photo Spots" },
          {
            type: "paragraph",
            text: "Exhibits are organised thematically: old brewing tools, roasting machines, antique books, and displays tracing coffee's spread from its origins to Vietnam specifically. Distinctive photo spots include an area displaying hanging umbrellas associated with notable historical figures and a row of national flags. Each display area has a QR code for a free audio guide, though in practice many visitors browse without using them.",
          },
          { type: "heading", text: "Coffee Tasting and Crowds" },
          {
            type: "paragraph",
            text: "After the exhibits, there's a coffee-tasting area where the adult ticket price includes one small cup; additional drinks, including teas, are available to purchase separately. Crowds can build with tour groups and school trips, which some visitors find limits a fully relaxed, independent experience.",
          },
        ],
      },
      {
        id: "travel-tips",
        label: "Travel Tips",
        title: "Travel Tips for World Coffee Museum",
        blocks: [
          {
            type: "paragraph",
            text: "Given the genuinely mixed reception - some visitors find it a worthwhile, well-designed cultural stop, while many others feel it's overpriced for content that leans heavily toward brand promotion - it's worth calibrating your expectations before buying a ticket. If photography and the architecture are your main draw, you may be just as satisfied viewing the exterior without paying for entry.",
          },
          {
            type: "paragraph",
            text: "If you're a genuine coffee enthusiast willing to read the exhibit information closely, you're likely to get more out of the visit than someone expecting a quick, casual walkthrough. Either way, it remains one of the signature attractions in Buôn Ma Thuột and a common stop for visitors exploring Vietnam's coffee capital.",
          },
        ],
      },
    ],
  },
  insights: {
    highlights: [
      "A striking, highly photogenic building inspired by Central Highlands longhouse architecture, set within the sprawling 45-hectare Coffee City development",
      "Around 10,000 coffee artifacts sourced from Germany's Jens Burg collection, tracing coffee history across Ottoman, Roman, and Zen traditions",
      "Parallel exhibits on Central Highlands ethnic groups - M'nông, Ba Na, J'Rai, and Ê Đê - alongside the coffee-focused displays",
    ],
    thingsToKnow: {
      crowds: "Can get busy with tour groups and school trips, which affects how relaxed the experience feels",
      difficulty: "None - flat, accessible, indoor and outdoor areas",
      safety: null,
      accessibility: "On-site parking, flat walking throughout, air-conditioned interior",
      seasonal: "Minimal, since most of the visit is indoors",
    },
    visitorTips: [
      "If budget is a concern, the exterior architecture can be appreciated and photographed without buying a ticket",
      "Compare Klook pricing against buying in person, since combo deals purchased on-site sometimes offer better value than the online ticket alone",
      "Go in expecting a visually striking, photogenic space rather than a deeply academic museum experience, and you're less likely to be disappointed",
    ],
    faq: [
      { question: "Is the entrance fee worth it?", answer: "Opinions are genuinely divided. Many visitors feel 150,000 VND is high for the depth of content, and that the museum leans toward promoting its owner, Trung Nguyên, rather than offering impartial coffee education. Others, especially those who read the exhibits closely or are serious coffee enthusiasts, find it a worthwhile and visually impressive stop. If you mainly want photos of the architecture, you can skip the ticket and view the exterior for free." },
      { question: "Does the ticket include coffee?", answer: "Yes, the adult ticket includes one small cup of coffee at the end of the visit. Children's tickets typically don't include a coffee. Additional drinks can be purchased separately." },
      { question: "How long should I plan for a visit?", answer: "Most visitors spend 1-3 hours, depending on how closely you read the exhibits versus just walking through for photos." },
    ],
    sentiment: {
      positive: "Visitors consistently praise the striking, photogenic architecture inspired by Central Highlands longhouses, the clean and spacious air-conditioned interior, and - for some - genuinely informative exhibits on coffee history, especially when paired with the free audio guides and helpful English-speaking staff.",
      negative: "A large number of visitors feel the museum functions more as a showcase for its owner, Trung Nguyên, than a deeply educational or impartial museum, with some finding the content shallow, overpriced at 150,000 VND, and the gift shop items unremarkable compared to what's available elsewhere. A few also mention uncomfortable background noise levels inside.",
    },
  },
}
