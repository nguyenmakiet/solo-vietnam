import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const imperialCity: Location = {
  slug: "imperial-city-hue",
  name: "Imperial City",
  provinces: ["hue"],
  destination: "hue",
  lat: "16.4677616052903",
  lng: "107.57931947854229",
  address: "Thuận Thành, Huế, Thừa Thiên Huế",
  type: "cultural",
  categories: [],
  experiences: ["history", "culture", "photography", "walking-tour"],
  tags: ["🏯 UNESCO Heritage", "👑 Nguyễn Dynasty", "📸 Photography", "🏛️ Imperial Architecture"],
  bestTime: "Feb – Apr or Sep – Nov (dry season, comfortable temperatures)",
  entranceFee: "~200,000 VND (Forbidden Purple City included)",
  openingHours: "7:00 AM – 5:30 PM (last entry 5:00 PM)",
  mapUrl: "https://www.google.com/maps?q=16.4677616052903,107.57931947854229",
  streetView: {},
  heroImage: heroUrl("imperial-citadel-hue3_isqtzb"),
  gallery: [
    "imperial-citadel-hue2_mzy6pe",
    "imperial-citadel-hue_hdqp43",
    "imperial-citadel-hue5_vqduoy",
  ],
  seoDescription:
    "Huế's Imperial City is the former seat of the Nguyễn Dynasty - a 3km² walled citadel of palaces, gates, pavilions, and ceremonial halls on the Perfume River, modelled on Beijing's Forbidden City and the most complete imperial complex in Southeast Asia.",
  tips: [
    "Buy the combo ticket that includes all inner citadel areas - the individual gate tickets add up to more than the combined pass",
    "Start at Ngọ Môn Gate and work inward - the Điện Thái Hòa (Supreme Harmony Palace) and the Forbidden Purple City are the two centrepieces",
    "Visit on a weekday morning for the lowest crowds - the citadel is large enough that it never feels truly packed, but mornings are noticeably quieter",
    "Many sections of the citadel are still in ruins from the 1968 Tết Offensive - the contrast between restored grandeur and bombed-out shells is part of what makes the site historically powerful",
    "The Imperial City at night during the Huế Festival (held every two years, even years) is extraordinary - the palaces are lit and traditional performances fill the courtyards",
  ],
  content: {
    intro:
      "Huế's Imperial City - Đại Nội - was built between 1804 and 1833 under Emperor Gia Long, the founder of the Nguyễn Dynasty, and served as the political, cultural, and spiritual centre of Vietnam until 1945 when Emperor Bảo Đại abdicated and the dynasty ended. The complex follows the same cosmological principles as Beijing's Forbidden City - oriented to face south, surrounded by a moat, organised around an axis of increasingly sacred spaces from the outer citadel to the Forbidden Purple City at the centre. At its peak, the Imperial City contained over 140 buildings across 3 square kilometres. The 1968 Tết Offensive reduced large sections to rubble, and decades of neglect after reunification left much of the remainder in decay. UNESCO recognition in 1993 triggered a restoration programme that continues today - roughly half the complex has been rebuilt or stabilised, making Đại Nội simultaneously a grand imperial monument and an honest record of war's destruction.",
    howToGetThere:
      "The Imperial City is in the centre of Huế, on the north bank of the Perfume River - about 1km from the main tourist hotel district on the south bank. It's walkable from most central hotels (15–20 minutes), easily reached by bicycle, xe ôm, or Grab. The main entrance is through Ngọ Môn Gate on the south facade. Parking is available outside the gate for motorbikes and cars. Most travellers combine the Imperial City with an afternoon on the south bank - the Perfume River separates the two halves of Huế's historic geography.",
    whatToExpect:
      "The visit begins at Ngọ Môn Gate - the ceremonial southern entrance with a viewing terrace from which emperors watched festivals below. Inside, the Esplanade of the Great Salutation leads to Điện Thái Hòa (Palace of Supreme Harmony), the most intact and most photographed building in the complex, with its red lacquer columns, gilded throne, and ornate roof. Beyond lies the Forbidden Purple City - the emperor's private residence, now mostly open foundations and a few restored pavilions. The east and west wings contain temples, libraries, theatres, and gardens in various states of restoration. The northeast section, heavily damaged in 1968, preserves the ruins as they stand - roofless walls, overgrown foundations, scattered tiles.",
    travelTips:
      "The Imperial City requires at least 2–3 hours to cover properly - rushing it in 90 minutes leaves half the complex unseen. Hire an audio guide at the entrance (available in English, French, Japanese) or join a guided tour to get context for the buildings, as many are unmarked or labelled only in Vietnamese. The combination of the Imperial City, Thiên Mụ Pagoda, and one royal tomb - either Khải Định or Tự Đức - is the standard Huế full-day itinerary and genuinely covers the city's three most historically significant sites.",
  },
}
