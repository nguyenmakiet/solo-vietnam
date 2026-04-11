import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const coThachBeach: Location = {
  slug: "co-thach-beach",
  name: "Cổ Thạch Beach",
  provinces: ["binh-thuan"],
  destination: "",
  lat: "11.17800572228083",
  lng: "108.71644682210062",
  address: "Bình Thạnh, Tuy Phong, Bình Thuận",
  type: ["beach", "nature", "landmark"],
  categories: [],
  experiences: ["photography", "beach", "walking-tour"],
  tags: ["🪨 Moss-Covered Rocks", "📸 Photography", "🌅 Sunrise Spot", "🏖️ Uncrowded Beach"],
  bestTime: "Jan - Aug (dry season; the moss on the rocks is greenest after the wet season ends around Dec - Jan, making early dry season the best combination of good weather and vivid colour)",
  bestMonths: [1, 2, 3, 4, 5, 6, 7, 8],
  entranceFee: "Free",
  openingHours: "Open daily",
  mapUrl: "https://www.google.com/maps?q=11.17800572228083,108.71644682210062",
  streetView: {embedUrl: "https://www.google.com/maps/embed?pb=!4v1775750281281!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRG03ZHotaHdF!2m2!1d11.17580499970811!2d108.7136467069068!3f34.375401986568406!4f-28.877948925748314!5f0.7820865974627469", },
  heroImage: heroUrl("co-thach-beach-4_us0alu"),
  gallery: [
    "co-thach-beach-2_eisxkc",
    "co-thach-beach-3_mmueba",
    "co-thach-beach_tmymsm",

  ],
  seoDescription:
    "Cổ Thạch Beach is a photogenic stretch of coastline in northern Bình Thuận where moss-covered granite boulders and tide pools create one of the most distinctive beach landscapes in southern Vietnam - largely undeveloped and rarely crowded.",
  tips: [
    "Sunrise is the best time for photography - the low light catches the texture of the moss and reflects in the tide pools between the boulders",
    "Visit in the early dry season (Dec - Feb) when the moss is at its most vivid green - the combination of bright moss and morning light produces the images that have made the beach well known",
    "Wear shoes suitable for walking on wet rock - the boulder and tide pool area requires scrambling and bare feet on the moss are slippery",
    "The beach is 40km north of Phan Thiết - combine with a stop at Vĩnh Hảo mineral water springs nearby or continue south toward Mũi Né for a full coastal day",
    "There are no facilities at the beach itself - bring water and food from Tuy Phong town 10km away",
  ],
  content: {
    intro:
      "Cổ Thạch Beach occupies a stretch of coastline in Bình Thạnh commune, Tuy Phong district, in the northern part of Bình Thuận province. The beach is defined by a field of moss-covered granite boulders that extends from the shore into the shallow water, creating a landscape of green-carpeted rock, tide pools, and clear sea that is unlike the sandy beaches of Mũi Né further south. The moss growth on the granite is heaviest in the period following the wet season - from December through February the rocks carry a vivid green coverage that has made the beach one of the more circulated images of the Bình Thuận coast on Vietnamese travel photography. The beach itself is undeveloped: no resort infrastructure, no facilities beyond the occasional drink vendor, and visitor numbers low enough that the rocks and tide pools can be explored in relative solitude outside of weekends.",
    howToGetThere:
      "Cổ Thạch Beach is located in Bình Thạnh commune, approximately 40km north of Phan Thiết city and 170km northeast of Ho Chi Minh City. By motorbike from Phan Thiết or Mũi Né, follow Highway 1A north toward Phan Rang - the beach is signposted from the highway near Tuy Phong district. The journey from Mũi Né takes about 1 hour. From HCMC, the drive is approximately 3 hours north on Highway 1A. The beach is directly accessible from the coastal road - a short path leads from the roadside to the boulder field.",
    whatToExpect:
      "The boulder field extends along the beach for several hundred metres and out into the shallow water for 50-100 metres at low tide. The granite surface is carpeted with green moss in the cooler months and the formations create natural channels, pools, and platforms. The tide pools hold small marine life - sea urchins, small fish, crabs - visible in the clear water between the rocks. Beyond the boulder zone the beach opens into a more conventional sandy stretch. The overall atmosphere is quiet and the scale is manageable - an hour of walking and scrambling covers the main formation. The surrounding landscape is typical northern Bình Thuận: sparse scrub, fishing villages, and the semi-arid character of the coast before it transitions to the wetter conditions further south.",
    travelTips:
      "Cổ Thạch is a photography destination first and a beach destination second - the moss-covered boulders are the reason to come, and the light conditions at sunrise or on overcast mornings are significantly better than in flat midday sun. The beach fits naturally into a coastal ride between HCMC and Mũi Né, or as a northern extension of a Mũi Né base. The undeveloped character of the beach is its main asset - it offers a version of the Bình Thuận coast before the resort development that transformed Mũi Né, and the lack of facilities keeps it quiet. Carry supplies from Tuy Phong town and plan the visit around the light.",
  },
  insights: {
    highlights: [
      "Unique multicolored pebble and stone beach with geological significance",
      "Green moss covers rocks February-April, creating photo opportunities",
      "Spectacular sunrise and sunset views over clear, calm waters",
    ],
    thingsToKnow: {
      crowds: "Crowded on weekends and holidays. Peak visitation during moss season (February-April) when young people visit for photos",
      difficulty: null,
      safety: "Local scams reported; some vendors attempt to overcharge tourists. Beggars present at nearby pagoda",
      accessibility: "Easily accessible by car or motorbike from main towns",
      seasonal: "Moss season February-April transforms rocks bright green. Strong waves possible depending on conditions. Best visited mid-week to avoid crowds",
    },
    visitorTips: [
      "Visit mid-week February-April for moss season and fewer crowds than weekends",
      "Bring cash; negotiate prices at local restaurants and accommodations to avoid overcharging",
      "Stay 1-2 days maximum; limited quality food options extend longer stays",
    ],
    faq: [
      { question: "When is the best time to visit Co Thach Beach?", answer: "February-April for the green moss phenomenon. Mid-week visits avoid weekend crowds. Sunrise is popular viewing time." },
      { question: "What are the main concerns about cleanliness?", answer: "Significant trash and garbage reported on beach and in water. Local visitors contribute to litter. Sanitation management is poor." },
      { question: "Are accommodations and food affordable?", answer: "Local guesthouses and restaurants offer affordable prices but quality varies. Negotiate rates. Seafood is fresh and cheap; overall meal quality inconsistent." },
    ],
    sentiment: {
      positive: "Visitors praise unique colored stone formations, moss season beauty, spectacular sunrises/sunsets, fresh seafood, and peaceful atmosphere away from main tourist areas",
      negative: "Beach cleanliness is major concern with widespread trash, sewage issues, and poor management. Local vendors overcharge tourists. Limited quality accommodation and food options",
    },
  },
}
