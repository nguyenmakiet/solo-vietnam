import { Destination } from "./types"
import { heroUrl } from "@/lib/cloudinary"

export const ninhBinh: Destination = {
  slug: "ninh-binh",
  name: "Ninh Binh",
  province: "Ninh Binh",
  provinceSlug: "ninh-binh",
  region: "north",

  description:
    "Ninh Binh is Vietnam's inland Ha Long Bay - limestone karsts rising from rice paddies and river systems, ancient capital temples, and rowboat caves. It's quieter, cheaper, and more authentic than Ha Long, with the same dramatic scenery minus the cruise crowds. Two days here covers the highlights comfortably; three days lets you slow down and actually enjoy it.",

  tagline: "Karst mountains, ancient capitals, and rice fields by rowboat",

  heroImage: heroUrl("ninh-binh_qa9mtc"),

  tags: ["nature", "history", "culture", "boat-tour", "cycling"],

  travelStyle: ["solo-friendly", "budget", "family", "easy"],

  // ─── Getting There ───────────────────────────────────────
  gettingThere: [
    {
      from: "Hanoi",
      vehicle: "train",
      duration: "2 hours",
      cost: "from 60,000 VND",
      notes: "Ninh Binh station is central. Trains run regularly from Hanoi station.",
    },
    {
      from: "Hanoi",
      vehicle: "bus",
      duration: "2 hours",
      cost: "80,000–120,000 VND",
      notes: "From Giap Bat bus station. Limousine vans also available, more comfortable.",
    },
    {
      from: "Hanoi",
      vehicle: "motorbike",
      duration: "2.5 hours",
      cost: "Petrol only",
      notes: "100km via Highway 1. Straightforward ride, good option if you plan to explore by bike.",
    },
  ],

  // ─── Itineraries ─────────────────────────────────────────
  itineraries: [
    {
      duration: "1D",
      label: "Day trip from Hanoi",
      days: [
        {
          day: 1,
          title: "Trang An + Hang Mua + Hoa Lu",
          stops: [
            "trang-an",
            "hang-mua",
            "hoa-lu-ancient-capital",
          ],
          notes: "Start with Trang An boat tour (2.5–3 hours, 250,000 VND, choose Route 3 for the best caves). Lunch near the pier. Climb Hang Mua for panoramic views - 500 steps, worth every one. Quick stop at Hoa Lu ancient capital temples before heading back. Tight but doable.",
        },
      ],
    },
    {
      duration: "2D1N",
      label: "Ideal stay",
      days: [
        {
          day: 1,
          title: "Trang An + Hang Mua viewpoint",
          stops: [
            "trang-an",
            "hang-mua",
            "bich-dong-pagoda",
          ],
          notes: "Morning Trang An boat tour - go early to avoid tour groups. Afternoon: climb Hang Mua for sunset views over the karst landscape - one of the best viewpoints in northern Vietnam. Optional: Bich Dong pagoda is a short bike ride from Tam Coc.",
        },
        {
          day: 2,
          title: "Hoa Lu + Tam Coc + Van Long",
          stops: [
            "hoa-lu-ancient-capital",
            "tam-coc",
            "van-long-nature-reserve",
          ],
          notes: "Morning at Hoa Lu ancient capital temples (10th century, Vietnam's first). Tam Coc boat tour is shorter (2 hrs) and cheaper than Trang An - rowers use their feet. Van Long is the quietest boat tour in the area - almost no other tourists, best for wildlife spotting.",
        },
      ],
    },
    {
      duration: "3D2N",
      label: "Slow travel - full region",
      days: [
        {
          day: 1,
          title: "Trang An + Hang Mua",
          stops: [
            "trang-an",
            "hang-mua",
          ],
          notes: "Arrive, settle in. Trang An boat tour in the morning. Hang Mua at sunset - worth the extra wait.",
        },
        {
          day: 2,
          title: "Hoa Lu + Tam Coc + Bich Dong + cycling",
          stops: [
            "hoa-lu-ancient-capital",
            "tam-coc",
            "bich-dong-pagoda",
          ],
          notes: "Rent a bicycle for the day - the flat roads between Tam Coc, Bich Dong, and Hoa Lu are perfect cycling country. Rice fields on both sides, almost no traffic.",
        },
        {
          day: 3,
          title: "Van Long Nature Reserve + Bai Dinh Pagoda",
          stops: [
            "van-long-nature-reserve",
            "bai-dinh-pagoda",
          ],
          notes: "Van Long early morning - quietest and most wildlife-rich boat experience in the area. Bai Dinh Pagoda is Vietnam's largest - massive scale, worth a visit even if not religious. Depart afternoon.",
        },
      ],
    },
  ],

  // ─── Cost ────────────────────────────────────────────────
  cost: {
    budget: "250,000–500,000 VND/day",
    midRange: "500,000–1,000,000 VND/day",
    comfortable: "1,000,000+ VND/day",
    notes: "Trang An boat: 250,000 VND/person. Hang Mua: 100,000 VND. Tam Coc boat: 200,000 VND/boat. One of the cheapest destinations in Vietnam.",
  },

  // ─── Practical ───────────────────────────────────────────
  bestTimeSummary: "Sep–Nov golden rice season, clear skies. Apr–Jun also good. Avoid Jul–Aug heavy rain. Tết and major holidays make Bai Dinh extremely crowded.",

  recommendedStay: "2–3 days",

  transport: "Bicycle or motorbike rental from guesthouse - essential for getting between sites. Flat terrain makes cycling very easy. Grab works in town but slow to arrive in Tam Coc/Trang An area.",

  // ─── Nearby ──────────────────────────────────────────────
  nearbyDestinations: ["ha-long", "ha-noi", "pu-luong"],

  coordinates: {
    lat: 20.2549,
    lng: 105.9747,
  },
}
