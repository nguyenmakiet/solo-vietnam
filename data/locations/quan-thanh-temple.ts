import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const quanThanhTemple: Location = {
  slug: "quan-thanh-temple",
  name: "Quan Thanh Temple",
  updatedAt: "2026-10-06",
  provinces: ["ha-noi"],
  destination: "ha-noi",
  lat: 21.043075560648294, 
  lng: 105.8364996802918,
  address: "190 Quán Thánh, Ba Đình, Hà Nội",
  type: ["temple"],
  categories: ["history", "religion", "architecture"],
  experiences: ["religious-site-visit", "history"],
  tags: [
    "🐢 Bronze Huyền Thiên Trấn Vũ Statue",
    "🧭 Guardian of Thăng Long's North",
    "taoism",
    "early-modern-vietnam",
  ],
  bestMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  bestTimeOfDay: "Early morning for the quietest, most contemplative visit - it gets busier on the 1st and 15th of the lunar month",
  timeNeeded: {
    minMinutes: 30,
    maxMinutes: 45,
  },
  entranceFee: "10,000 VND per person, free for young children",
  openingHours: "8:00 AM-5:00 PM daily; extended to 6:00 AM-8:00 PM on the 1st and 15th of the lunar month; open all night on Lunar New Year's Eve",
  mapUrl: "https://www.google.com/maps?q=21.043075560648294,105.8364996802918",
  streetView: { embedUrl: "https://www.google.com/maps/embed?pb=!4v1790606052355!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRHFvXzdyWXc.!2m2!1d21.04290847381086!2d105.8364883722618!3f113.87059931018103!4f20.481972631949574!5f0.7820865974627469" },
  heroImage: heroUrl("quan-thanh-temple_z0ftrb"), 
  gallery: [
    "quan-thanh-temple_z0ftrb",
    "quan-thanh-temple-2_vckdui",
    "quan-thanh-temple-3_qda4gd",
    "quan-thanh-temple-4_hkvk5m",
    "quan-thanh-temple-5_bxs6hh",
  ], 
  seoDescription:
    "Quan Thanh Temple (Đền Quán Thánh), formally Trấn Vũ Quán (鎮武觀), is the northern guardian of the Thăng Long Tứ Trấn - the four sacred temples of old Thăng Long (Hanoi) - dedicated to the Taoist deity Huyền Thiên Trấn Vũ, right beside West Lake, and home to one of Hanoi's largest bronze statues, cast in 1677.",
  tips: [
    "Time needed: 30-45 minutes",
    "Dress modestly (shoulders and knees covered) before you arrive - vendors right outside the entrance sell scarves at inflated prices to visitors who show up underdressed",
    "Entry is ticketed at 10,000 VND per person, bought at a booth beside the entrance and scanned in via QR code - free for young children",
    "Visit early morning on a weekday for the quietest experience - the 1st and 15th of the lunar month, along with festival days, draw noticeably larger crowds",
    "Info boards inside are mainly in Vietnamese - a translation app is handy if the QR code information system isn't working for you",
    "There's a small shop inside doing Chinese-character calligraphy and engravings, alongside woodblock prints and items like lotus tea - worth a look if that interests you",
    "Don't touch or lean on the antique artifacts, and only place incense in the designated spots",
    "Combine with nearby Chùa Trấn Quốc, Đền Bạch Mã, Chùa Một Cột, or Đền Ngọc Sơn, and consider a walk along West Lake right next to the temple",
    "If you want festival atmosphere, visit on the 3rd day of the third lunar month; for a quiet visit, avoid this date, the 1st and 15th, and major holidays",
  ],
  content: {
    richSections: [
      {
        id: "about",
        label: "About This Place",
        title: "What Makes Quan Thanh Temple Special",
        blocks: [
          {
            type: "paragraph",
            text: "Quan Thanh Temple (Đền Quán Thánh), formally known as Trấn Vũ Quán (鎮武觀), is the northern guardian of the Thăng Long Tứ Trấn - the four sacred temples believed to protect the old citadel of Thăng Long from each cardinal direction. It sits on Quán Thánh street in Ba Đình district, right beside West Lake (Hồ Tây), at the corner where Thanh Niên street meets Quán Thánh street.",
          },
          { type: "heading", text: "Huyền Thiên Trấn Vũ and the Temple's Name" },
          {
            type: "paragraph",
            text: "The temple is dedicated to Huyền Thiên Trấn Vũ, a Taoist deity and one of the four guardians of Thăng Long's approaches; local legend holds that he was sent by the Jade Emperor to defeat a nine-tailed fox spirit troubling Long Đỗ village, and that Lý Thái Tổ founded the temple here upon moving the capital to Thăng Long (1010-1028) specifically to ward off evil spirits and protect the new citadel. The name 'Quán' comes from 'Đạo Quán' (道觀), meaning a place of Taoist worship - the temple is known today by both names, Quán Thánh and Trấn Vũ Quán.",
          },
          { type: "heading", text: "Restorations and the 1794 Bronze Gong" },
          {
            type: "paragraph",
            text: "It has been restored multiple times across the Lê and Nguyễn dynasties; notably, under Lê Hy Tông, Lord Trịnh Tạc assigned his son Trịnh Căn to oversee a major rebuilding of Trấn Vũ Quán, during which the craftsman Vũ Công Chấn cast a bronze statue of Huyền Thiên Trấn Vũ in 1677 to replace an earlier wooden one - at 3.96m tall, it's one of the largest bronze statues in Hanoi, its firm yet fluid posture reflecting Taoist artistic sensibility. In 1794, under the Tây Sơn emperor Cảnh Thịnh, Admiral Lê Văn Ngữ had a large bronze ceremonial gong (khánh) cast and placed in the main hall, which survives at the temple today. Quan Thanh Temple was recognised as a national historical relic in 1962, the same year as nearby Chùa Trấn Quốc.",
          },
        ],
      },
      {
        id: "how-to-get-there",
        label: "How to Get There",
        title: "How to Get to Quan Thanh Temple",
        blocks: [
          {
            type: "paragraph",
            text: "Quan Thanh Temple is at 190 Quán Thánh street, Ba Đình district, right on the shore of West Lake - a central, easy-to-find location. By personal vehicle, taxi, or ride-hailing app, it's a straightforward trip from most parts of central Hanoi. By bus, routes 14, 33, and 50 all stop within a short walk of the temple. It's also a stop on the Hanoi City Tour double-decker bus route, if you're using that to get around.",
          },
        ],
      },
      {
        id: "what-to-expect",
        label: "What to Expect",
        title: "What to Expect at Quan Thanh Temple",
        blocks: [
          { type: "heading", text: "Layout and the Phoenix Gate" },
          {
            type: "paragraph",
            text: "The complex is laid out in traditional East Asian temple style, common to Taoist sites across the region: a triple gate (tam quan), front and middle halls, a worship courtyard, and the rear sanctuary. The outer gate is a highlight in itself, with pillars formed by four phoenixes set back-to-back, topped by an intricately carved nghê (a Vietnamese guardian-lion figure), and further decorated with carvings of carp leaping the dragon gate (a symbol of transformation and success) and a tiger descending the mountain.",
          },
          { type: "heading", text: "The Bronze Statue of Trấn Vũ" },
          {
            type: "paragraph",
            text: "Inside the main hall stands the temple's centrepiece: the 3.96m bronze statue of Huyền Thiên Trấn Vũ, cast in 1677, which visitors consistently single out as the most impressive feature. The buildings combine timber framing, plastered brick, and cement, with finely worked wooden pillars, rafters, and beams, and red brick that takes on a warm glow with age.",
          },
          { type: "heading", text: "Shop, Garden and Tickets" },
          {
            type: "paragraph",
            text: "A small shop inside sells calligraphy, woodblock prints, and items like lotus tea. Some visitors mention a centuries-old mango tree in the temple garden. Entry is ticketed (10,000 VND, scanned via QR code), and while the temple is compact enough to see in well under an hour, its atmosphere is consistently described as peaceful and dignified, if occasionally busier around lunar festival dates.",
          },
        ],
      },
      {
        id: "travel-tips",
        label: "Travel Tips",
        title: "Travel Tips for Quan Thanh Temple",
        blocks: [
          {
            type: "paragraph",
            text: "Quan Thanh Temple pairs naturally with a walk along West Lake and a stop at nearby Chùa Trấn Quốc, and fits into a wider look at the Thăng Long Tứ Trấn alongside Bạch Mã, Kim Liên, and Voi Phục, though each temple sits in a different part of the city, so treat the full set as a loose Hanoi-wide theme rather than a single afternoon. The temple is small, so most visitors treat it as a brief, worthwhile stop rather than a half-day destination in itself - pairing it with the lake and other nearby sights makes for a fuller outing. Autumn (roughly September-November), when Hanoi's weather turns cooler and clearer, is often mentioned as a particularly pleasant time to visit, on top of the temple being an easy year-round stop given how much of the experience is indoors.",
          },
        ],
      },
    ],
  },
  insights: {
    highlights: [
      "The northern guardian of the Thăng Long Tứ Trấn, dedicated to the Taoist deity Huyền Thiên Trấn Vũ",
      "A 3.96m bronze statue of Huyền Thiên Trấn Vũ, cast in 1677 and among the largest bronze statues in Hanoi",
      "An elaborately carved outer gate with back-to-back phoenix pillars, a nghê figure, and carp-and-tiger motifs",
    ],
    thingsToKnow: {
      crowds: "Generally calm on ordinary days; noticeably busier on the 1st and 15th of the lunar month and around the 3rd-day-of-third-month festival",
      difficulty: "None - small, flat, easy to see in well under an hour",
      safety: null,
      accessibility: "Central, street-level location right on West Lake; ticketed entry via QR code",
      seasonal: "Minimal, since most of the visit is indoors - though September-November's cooler, clearer weather is often mentioned as especially pleasant",
    },
    visitorTips: [
      "Dress modestly before you arrive to avoid paying inflated prices for a scarf from vendors outside",
      "Buy your ticket at the booth beside the entrance and be ready to scan a QR code to get in",
      "It occasionally closes outside its stated hours, so if visiting for a specific purpose, it's worth confirming it's open before making a special trip",
    ],
    faq: [
      { question: "Who is worshipped at Quan Thanh Temple?", answer: "Huyền Thiên Trấn Vũ, a Taoist deity considered a guardian of the north in Vietnamese folk belief, and one of the four guardian spirits of the old Thăng Long citadel." },
      { question: "What is Quan Thanh Temple's significance in history?", answer: "It's one of the Thăng Long Tứ Trấn, guarding the northern approach to the old citadel of Thăng Long, and was recognised as a national historical relic in 1962." },
      { question: "Is there an entrance fee?", answer: "Yes, 10,000 VND per person, free for young children. Tickets are bought at a booth by the entrance and scanned via QR code." },
    ],
    sentiment: {
      positive: "Visitors consistently praise the bronze Huyền Thiên Trấn Vũ statue, the peaceful, dignified atmosphere, the detailed woodwork and gate carvings, and the convenient West Lake location.",
      negative: "Several visitors find the temple small with not a great deal to see beyond a short visit, a few arrived to find it unexpectedly closed, and some are put off by the entrance fee for what is otherwise a fairly quick stop.",
    },
  },
}
