import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const anBangBeach: Location = {
  slug: "an-bang-beach",
  name: "An Bàng Beach",
  provinces: ["quang-nam"],
  destination: "hoi-an",
  lat: "15.913659812360246",
  lng: "108.3404344460877",
  address: "Cẩm An, Hội An, Quảng Nam",
  type: "beach",
  experiences: ["swimming", "beach", "dining", "relaxation"],
  tags: ["🏖️ Beach", "🍹 Beachside Cafes", "🌊 Swimming", "🚲 Cycling Distance from Hội An"],
  bestTime: "Mar – Sep (dry season, calm water; avoid Oct – Jan which is storm season)",
  entranceFee: "Free",
  openingHours: "Open 24/7",
  mapUrl: "",
  heroImage: heroUrl("an-bang-beach-hero_placeholder"),
  gallery: [],
  seoDescription:
    "An Bàng Beach is Hội An's best beach — 4km from the Ancient Town, with a long stretch of fine sand, a relaxed strip of cafes and beach bars, and none of the resort overdevelopment that has overtaken Đà Nẵng's coastline to the north.",
  tips: [
    "Cycle from Hội An Ancient Town — it's 4km on a flat road through rice fields and fishing villages, one of the nicest easy rides in central Vietnam",
    "The beach is swimmable from March to September; October through January brings strong currents and rough water — flags indicate safety conditions",
    "The beachside cafe strip is best in the late afternoon — most places have low seating right on the sand and serve food until late evening",
    "An Bàng is significantly less developed than Mỹ Khê in Đà Nẵng — if you want a beach day without resort infrastructure, this is the right choice",
    "Arrive before 9 AM on weekends — the beach is popular with both expats and domestic tourists and gets busy by mid-morning in peak season",
  ],
  content: {
    intro:
      "An Bàng Beach sits 4km east of Hội An Ancient Town on the South China Sea coast — close enough to cycle to, far enough to feel separate. It's a 3km stretch of pale sand with a gentle gradient into the water, backed by a low-key strip of cafes, beach bars, and small guesthouses that have grown organically rather than been developed by resort chains. The beach has been on international travel radar since the mid-2000s when it appeared on 'best beaches in Asia' lists, but the development has remained restrained compared to Đà Nẵng's coastline. The water is warm and clear in dry season, the sand is clean, and the atmosphere — plastic chairs, seafood, cold beer, locals and travellers mixed — is as close to the original Hội An beach experience as still exists.",
    howToGetThere:
      "An Bàng Beach is 4km from Hội An Ancient Town, accessible by bicycle (20–25 minutes on flat roads through the countryside), motorbike, or Grab. The route from town passes through rice fields and fishing villages — the cycling is itself enjoyable. Bicycles are available for rent throughout Hội An for around 50,000–80,000 VND per day. There is no public bus directly to the beach. Parking at the beach is easy and free for motorbikes.",
    whatToExpect:
      "The beach has a north and south section separated by a small stream. The south section is more developed with cafe and bar seating; the north is quieter with fewer facilities. Most cafes offer sunbed rental (free with a drink order or around 50,000 VND standalone) and serve food ranging from fresh seafood to Western comfort food. The water is generally calm from March to September, with small to moderate waves. Lifeguard flags operate in peak season — green for safe, red for dangerous. The sand is clean and the beach is regularly maintained by local businesses.",
    travelTips:
      "An Bàng is the beach for travellers based in Hội An who want a half-day by the sea without committing to a full Đà Nẵng day trip. The combination of cycling there through the Vietnamese countryside, a few hours on the sand, lunch at one of the beachfront restaurants, and cycling back through a different route makes for one of the most satisfying easy days in central Vietnam. If you're based in Đà Nẵng rather than Hội An, Mỹ Khê is more convenient — An Bàng makes most sense as a Hội An beach day.",
  },
}
