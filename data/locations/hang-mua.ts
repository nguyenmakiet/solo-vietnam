import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const hangMua: Location = {
  slug: "hang-mua",
  name: "Hang Mua",
  provinces: ["ninh-binh"],
  destination: "ninh-binh",
  lat: "20.229409892562945",
  lng: "105.93389756500189",
  address: "Hang Múa, Ninh Hải, Hoa Lư, Ninh Bình",
  type: "nature",
  experiences: ["trekking", "photography"],
  tags: ["🏔️ Viewpoint", "🪨 500 Stone Steps", "📸 Photography", "🌾 Panoramic View"],
  bestTime: "Sep – Nov or Mar – May (clear skies, golden rice in Oct)",
  entranceFee: "~100,000 VND",
  openingHours: "7:00 AM – 6:00 PM",
  mapUrl: "https://maps.google.com/?q=20.2180,105.9560",
  heroImage: heroUrl("hang-mua-ninh-binh_k573hb"),
  gallery: [
    "hang-mua-ninh-binh2_b9var5",
    "hang-mua-ninh-binh-3_kuupwn",
    "hang-mua-ninh-binh-4_ewqlyw",
  ],
  seoDescription:
    "Hang Mua is Ninh Bình's most rewarding viewpoint - a 500-step climb up a limestone karst rewarded with a panoramic view over the Tam Cốc valley, rice fields, and the full sweep of the Hoa Lư karst landscape that stretches to the horizon.",
  tips: [
    "Climb in the early morning (7–8 AM) or late afternoon (4–5 PM) - the midday heat on the exposed stone steps is brutal and the light is flat for photos",
    "October is the best single month - the golden rice fields below combined with the karst panorama is the image most people associate with Ninh Bình",
    "The steps are uneven and steep in places - wear shoes with grip, not sandals",
    "After the main summit, a second path continues along the ridge to a dragon statue at the far end - most visitors miss it and it's worth the extra 10 minutes",
    "Hang Mua is 1.5km from Tam Cốc boat dock - easy to combine in the same afternoon on bicycle",
  ],
  content: {
    intro:
      "Hang Mua - 'Dancing Cave' - takes its name from a grotto at the base of the limestone massif where, according to local legend, the Trần Dynasty kings brought performers to dance for their entertainment during royal visits. Today, the cave is a minor footnote; the reason people come is the 500 stone steps carved up the side of the karst to a summit at 98 metres, from which the entire Tam Cốc valley unfolds below. It's one of the best viewpoints in northern Vietnam - the valley floor is a patchwork of rice fields, rivers, and karst islands, extending to the distant mountains that mark the boundary of Cúc Phương National Park. The view at golden hour in October, when the harvest rice glows in flat afternoon light, is one of the most photographed landscapes in Vietnam.",
    howToGetThere:
      "Hang Mua is 1.5km from the Tam Cốc boat dock, easily reached by bicycle (10 minutes) or on foot (20 minutes) along a flat riverside road. From Ninh Bình city, it's 10km south - about 25 minutes by motorbike or xe ôm. The entrance is at the base of the karst, clearly signposted. Most visitors combine Hang Mua with Tam Cốc in the same half-day: boat tour in the morning, climb in the afternoon.",
    whatToExpect:
      "The climb involves 500 stone steps built directly into the karst face - steep in places, with rope handrails on the most exposed sections. The ascent takes 20–30 minutes at a steady pace. At the top, a small pagoda and terrace provide the main viewpoint, with 360° views over the Tam Cốc valley, the Ngô Đồng River threading through the karsts below, and on clear days, the mountains of Cúc Phương on the horizon. A second ridge path leads further along to a dragon statue overlooking a different aspect of the valley. At the base, a garden with bonsai and traditional structures surrounds Hang Mua cave itself, which can be explored briefly before or after the climb.",
    travelTips:
      "Hang Mua is the most time-efficient viewpoint in Ninh Bình - 30 minutes up, 20 minutes down, and the view rivals anything in the region. It's far less visited than Trang An and Tam Cốc, so even on a moderately busy day the summit feels uncrowded. The combination of boat tour at Tam Cốc in the morning and Hang Mua climb in the afternoon is the single best half-day itinerary in Ninh Bình province.",
  },
}
