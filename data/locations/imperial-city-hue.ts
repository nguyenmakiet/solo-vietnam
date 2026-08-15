import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const imperialCity: Location = {
  slug: "imperial-city-hue",
  name: "Imperial City",
  provinces: ["hue"],
  destination: "hue",
  lat: 16.4677616052903,
  lng: 107.57931947854229,
  address: "Thuận Thành, Huế, Thừa Thiên Huế",
  type: ["citadel", "heritage", "history", "museum"],
  categories: [],
  experiences: ["history", "culture", "photography", "walking-tour"],
  tags: ["🏯 UNESCO Heritage", "👑 Nguyễn Dynasty", "📸 Photography", "🏛️ Imperial Architecture"],
  bestTime: "Jan - Apr (spring, cool and dry - ideal). Apr - Jun for Huế Festival. Avoid Oct - Nov (peak flood season).",
  bestMonths: [1, 2, 3, 4, 5, 6],
  entranceFee: "200,000 VND/adult & children 12+, 40,000 VND/child (7-12), free under 7. Combo ticket with royal tombs available. Áo dài rental nearby: ~100,000 VND/set.",
  openingHours: "Summer: 6:30 AM - 5:30 PM. Winter: 7:00 AM - 5:00 PM. Đại Nội by Night: separate evening program.",
  mapUrl: "https://www.google.com/maps?q=16.4677616052903,107.57931947854229",
  streetView: { embedUrl: "https://www.google.com/maps/embed?pb=!4v1775813626512!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRHEzTFNObWdF!2m2!1d16.46410503347066!2d107.581941720204!3f0.34018440097223124!4f-28.418483049825014!5f0.7820865974627469" },
  heroImage: heroUrl("imperial-citadel-hue3_isqtzb"),
  gallery: [
    "imperial-citadel-hue2_mzy6pe",
    "imperial-citadel-hue_hdqp43",
    "imperial-citadel-hue5_vqduoy",
  ],
  seoDescription:
    "Huế's Imperial City (Đại Nội) is the former seat of the Nguyễn Dynasty - a 3km² walled citadel of palaces, gates, pavilions, and ceremonial halls built 1804-1833, UNESCO World Heritage since 1993. Yellow roofs mark imperial authority; blue-green roofs mark secondary structures. Allow 3-4 hours minimum.",
  tips: [
    "Go early - go early - go early. The citadel gets hot and crowded by mid-morning. Arrive at opening time (6:30 AM summer, 7:00 AM winter) for the best light, coolest temperatures, and fewest people.",
    "Entrance and exit gates are different - note which gate you came in. Getting confused costs you significant time in a large complex.",
    "Wear flat shoes (not heels) - you will walk a lot across uneven stone surfaces and courtyard tiles.",
    "Bring a bottle of water from outside - drinks inside are overpriced. Bring a hat, nón lá (available to rent nearby), or handheld fan - midday sun in the open courtyards is intense.",
    "Nón lá + áo dài = the Huế photo combination. Áo dài rental near the entrance: ~100,000 VND/set. Saves time vs renting beforehand. Doubles as sun protection.",
    "Buy tickets online via Klook to skip the queue. If buying on-site, buy the combo ticket (Đại Nội + royal tombs) if you plan to visit Khải Định or Tự Đức - it's significantly cheaper than individual tickets.",
    "Photograph the bản đồ (site map) at the gate or download one on your phone before entering - the complex is large and signage inside is inconsistent.",
    "The roof color system: Yellow glazed tiles (hoàng lưu ly) = Emperor and the main ceremonial axis - only Ngọ Môn Gate, Điện Thái Hòa, and the central palaces. Blue-green glazed tiles (thanh lưu ly) = secondary structures (Crown Prince's palace to the east, libraries, theaters). The distinction is strict - a Nguyễn Dynasty royal hierarchy made visible in architectural material.",
    "From the top of Ngọ Môn Gate (Lầu Ngũ Phụng), look down along the central axis: a band of yellow tiles runs straight through the middle, surrounded by blue-green and grey. This is the clearest single view of the dynasty's power hierarchy.",
    "Key stops: Ngọ Môn Gate (start here) → Điện Thái Hòa (golden throne, main hall) → Thế Miếu + Hiển Lâm Các (royal ancestral temples) → Tử Cấm Thành / Forbidden Purple City → Duyệt Thị Đường (oldest royal theater in Vietnam) → Lầu Kiến Trung (recently restored, unique Á-Âu architecture) → Cửu Vị Thần Công (9 bronze cannons, 1803).",
    "Recommended full-day structure: Morning (opening until 11 AM) - Ngọ Môn → Điện Thái Hòa → Thế Miếu. Midday - cơm cung đình (royal cuisine) at restaurants near the citadel. Afternoon - Duyệt Thị Đường (Nhã nhạc court music performance at 10 AM and 3 PM), Forbidden Purple City ruins, Lầu Kiến Trung.",
    "Hire an audio guide (100,000 VND, available in English/French/Japanese) or a local guide at the entrance. Many buildings are labelled only in Vietnamese and the historical context is what makes the ruins meaningful.",
    "Lễ Đổi Gác (Guard-Changing Ceremony): held daily at Ngọ Môn at 8:00 AM (summer) / 8:30 AM (winter) - a reenactment of Nguyễn Dynasty guard protocol. The procession includes a military officer, a captain, 12 royal guards, and a 7-member Tiểu Nhạc ensemble, moving through Ngọ Môn → Điện Thái Hòa → ending at Duyệt Thị Đường. The ensemble performs 'Đăng Đàn Cung', the Nguyễn Dynasty's national anthem, throughout. This is a separate daytime event from the evening 'Đại Nội by Night' program - don't confuse the two when planning your visit.",
    "Đại Nội by Night: a separate evening program with illuminated palaces, court music, and traditional performances. Check current schedule at the ticket office.",
    "Huế Festival runs every two years (even years) in April-June - the citadel is the main venue with lit-up palaces and large-scale traditional performances. The most spectacular time to visit.",
    "The ruins in the northeast section were not restored - they remain as they were after the 1968 Tết Offensive. The contrast between the rebuilt grandeur and the roofless bombed-out shells is historically honest and deliberately preserved.",
  ],
  content: {
    intro:
      "Huế's Imperial City - Đại Nội, or Hoàng Thành - is the second walled enclosure of the Huế Citadel complex, built between 1804 and 1833 under Emperors Gia Long and Minh Mạng of the Nguyễn Dynasty, Vietnam's last imperial family. To build it, Gia Long personally selected the site, relocated 9 villages, reshaped rivers, and mobilised thousands of workers over 29 years. The result was 147 buildings across 3km², following the same cosmological principles as Beijing's Forbidden City - oriented south, surrounded by a moat, organised around an axis of increasingly sacred spaces from Ngọ Môn Gate to the Forbidden Purple City at the centre. The colour hierarchy made power visible in architecture: yellow glazed roof tiles (hoàng lưu ly) marked only the Emperor's axis; blue-green tiles marked everything secondary. Unlike Beijing's Forbidden City - where the great ceremonial courtyards remain largely open and bare - Đại Nội contains thousands of trees planted over two centuries, many originally selected by the court for symbolism, shade, fragrance, or seasonal flowers. The result is a palace complex that feels inhabitable rather than intimidating. UNESCO inscribed it in 1993. The 1968 Tết Offensive destroyed much of the northeast section; those ruins remain deliberately unrestored beside the rebuilt palaces, creating a site that is simultaneously a grand imperial monument and an honest record of what war does to history.",
    howToGetThere:
      "The Imperial City sits on the north bank of the Perfume River, about 1km from the main hotel district on the south bank. Walkable in 15-20 minutes, or by bicycle, xe ôm, or Grab. Main entrance: Ngọ Môn Gate (south facade). Áo dài rental shops cluster near the gate. Motorbike and car parking available outside. Entrance and exit gates are different - note your entry point.",
    whatToExpect:
      "The visit begins at Ngọ Môn Gate - the ceremonial southern entrance with the five-roofed Lầu Ngũ Phụng pavilion above, where emperors watched festivals from height. The yellow-tiled central axis leads through the Esplanade of Great Salutation to Điện Thái Hòa (Palace of Supreme Harmony) - the most intact building, with red lacquer columns, gilded throne, and the ornate 'nhất thi nhất họa' (one poem, one painting) carvings on every structural element. Beyond is the Forbidden Purple City (Tử Cấm Thành), the emperor's private residence - now mostly open foundations with a few restored pavilions including the recently rebuilt Lầu Kiến Trung (notable for its unusual Á-Âu blended architecture). Duyệt Thị Đường, Vietnam's oldest surviving royal theater, hosts Nhã nhạc court music performances at 10 AM and 3 PM. The Thế Miếu and Hiển Lâm Các in the southwest hold the ancestral altars of the Nguyễn kings. The northeast section - heavily damaged in 1968 - preserves the ruins as they stand: roofless walls, overgrown foundations, scattered tiles.",
    travelTips:
      "The Imperial City requires at least 3-4 hours for the main buildings; a full day covers everything comfortably. Arrive at opening time to avoid midday heat and the tourist groups that arrive by bus from 9 AM onwards. The combination of Imperial City, Thiên Mụ Pagoda, and one royal tomb (Khải Định for architecture, Tự Đức for scale and mood) is the standard Huế full-day itinerary. The combo ticket saves money if visiting the tombs. Huế's Imperial City is similar to but distinct from Beijing's Forbidden City: Beijing is monumental stone at 72 hectares with deliberately bare ceremonial courtyards; Đại Nội is 37 hectares, deeply integrated with lotus ponds, trees, and gardens, with architecture adapted to tropical monsoon conditions - lower buildings, elevated foundations for flood tolerance, covered corridors between palaces.",
  },
  insights: {
    highlights: [
      "147 buildings built 1804-1833 - the most complete imperial citadel complex in Southeast Asia",
      "Yellow vs blue-green roof tile hierarchy: imperial axis in yellow (hoàng lưu ly), all secondary structures in blue-green (thanh lưu ly) - visible from Ngọ Môn Gate looking south",
      "Daily Guard-Changing Ceremony (Lễ Đổi Gác) at 8:00/8:30 AM - 12 royal guards and a 7-member music ensemble reenact Nguyễn Dynasty protocol from Ngọ Môn to Duyệt Thị Đường",
      "Duyệt Thị Đường: Vietnam's oldest royal theater, still hosting Nhã nhạc court music performances at 10 AM and 3 PM",
      "Northeast ruins: deliberately unrestored since the 1968 Tết Offensive - bombed-out shells beside rebuilt palaces",
      "Lầu Kiến Trung: recently restored pavilion with unique Á-Âu (Asian-European) blended architecture",
    ],
    thingsToKnow: {
      crowds: "Busiest 9 AM - noon when tour groups arrive. Go at opening time for cool temperatures, soft light, and space. Weekdays quieter than weekends. Huế Festival months (April-June, even years) are the most atmospheric but busiest.",
      difficulty: "Extensive walking on uneven stone and tile surfaces. Flat shoes essential. No heels. Open courtyards are hot midday - hat and water required. Allow 3-4 hours minimum.",
      safety: "No touching exhibits. Dress modestly - covered shoulders and knees required in temple and shrine areas. Do not pick flowers or touch trees.",
      accessibility: "Electric vehicle shuttle 240,000-300,000 VND (45-60 min tour). Electric bicycle rental 100,000 VND/hour near Điện Thái Hòa. Audio guide 100,000 VND (English/French/Japanese). Entrance and exit gates are separate.",
      seasonal: "Jan-Apr: best - cool, dry, spring. Apr-Jun: Huế Festival years (even years) - spectacular but busy. Jul-Sep: hot but manageable. Oct-Nov: peak rain and flood season - avoid.",
    },
    visitorTips: [
      "Arrive at opening time - heat and crowds build quickly by 9 AM",
      "Time your visit for the daily Guard-Changing Ceremony at Ngọ Môn (8:00 AM summer / 8:30 AM winter)",
      "From Ngọ Môn Gate top: look down the central axis to see the yellow-tile imperial band surrounded by blue-green - the clearest view of the hierarchy",
      "Buy tickets on Klook to skip the queue; combo ticket if visiting royal tombs",
      "Nón lá + áo dài (~100,000 VND rental near gate) = practical sun protection + best photo prop",
      "Note entry and exit gates are different - photograph the site map at the entrance",
    ],
    faq: [
      {
        question: "What is the Guard-Changing Ceremony (Lễ Đổi Gác)?",
        answer: "A daily reenactment of Nguyễn Dynasty guard protocol, held at Ngọ Môn at 8:00 AM in summer and 8:30 AM in winter. The procession features a military officer, a captain, 12 royal guards, and a 7-member Tiểu Nhạc music ensemble, moving in sequence through Ngọ Môn, Điện Thái Hòa, and ending at Duyệt Thị Đường. Throughout the ceremony, the ensemble performs 'Đăng Đàn Cung' - the national anthem of the Nguyễn Dynasty. It's a separate daytime event from the evening 'Đại Nội by Night' program, so check timing carefully if you want to catch both.",
      },
      {
        question: "Why are some roofs yellow while others are blue-green?",
        answer: "The roof colours were part of the Nguyễn Dynasty's visual hierarchy. Yellow glazed tiles (hoàng lưu ly) represented imperial authority and were reserved for the Emperor and the main ceremonial axis - the most important structures, Ngọ Môn Gate and Điện Thái Hòa, are covered in yellow. Blue-green glazed tiles (thanh lưu ly) were used for secondary royal buildings: libraries, theaters, and the Crown Prince's residence. This distinction allowed visitors and officials to understand the hierarchy of the court immediately through architecture alone. From the upper level of Ngọ Môn Gate, the system becomes obvious: a continuous ribbon of yellow roofs runs along the central axis, surrounded by blue-green roofs on either side.",
      },
      {
        question: "Why does Huế's Imperial City feel greener than Beijing's Forbidden City?",
        answer: "Many visitors notice this immediately. While both complexes follow a strict central axis influenced by Confucian planning principles, Huế's Imperial City was designed for a tropical monsoon environment. Trees, lotus ponds, gardens, and shaded courtyards are integrated throughout - many trees were originally selected by the court for symbolism, shade, fragrance, or seasonal flowers. Covered corridors connect many buildings, helping people move during intense sun and heavy rain. Elevated foundations and drainage systems were built to cope with seasonal flooding from the Perfume River. Beijing's Forbidden City, by contrast, emphasizes vast ceremonial courtyards and monumental open spaces that project imperial power through scale and bare symmetry. Many travelers describe Huế as a palace-city within a garden, whereas Beijing's Forbidden City feels like a palace-city within a ceremonial landscape.",
      },
      {
        question: "How long does it take to visit the Imperial City?",
        answer: "At minimum 3-4 hours for the main buildings (Ngọ Môn, Điện Thái Hòa, Thế Miếu, Tử Cấm Thành, Duyệt Thị Đường). A full day covers everything including the ruins, gardens, and peripheral pavilions. Recommended structure: arrive at opening time, cover the central axis in the morning when cool, break for cơm cung đình (royal cuisine) at nearby restaurants, return for the 3 PM Nhã nhạc performance at Duyệt Thị Đường.",
      },
      {
        question: "What is Đại Nội by Night?",
        answer: "A separate evening program with illuminated palaces, court music performances, Nhã nhạc, traditional dance, and folk games in the courtyards. This is distinct from the daily daytime Guard-Changing Ceremony at Ngọ Môn. Check current schedule and ticket pricing at the entrance or with your hotel - the program has evolved over time and runs on specific evenings.",
      },
      {
        question: "Should I hire a guide or use the audio guide?",
        answer: "Strongly recommended for either. The complex is large and many buildings are labelled only in Vietnamese. The historical context - the cosmological planning, the dynasty politics, the 1968 battle, the ongoing restoration decisions - is what makes the ruins meaningful rather than just picturesque. Audio guide: 100,000 VND (English/French/Japanese) at the entrance. Local guide: arrange at the gate or through your hotel.",
      },
    ],
    sentiment: {
      positive: "Consistently praised for historical depth, the scale of the complex, the restored palaces, and the atmospheric contrast between grandeur and war-damaged ruins. The Guard-Changing Ceremony, Nhã nhạc performances, and Đại Nội by Night receive strong reviews.",
      negative: "Midday heat in the open courtyards is intense. Some buildings still under restoration. Signage inside is inconsistent - guide or audio guide is genuinely needed. Entry/exit gate confusion wastes time for some visitors.",
    },
  },
}
