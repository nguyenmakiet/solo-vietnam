import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const cuChiTunnels: Location = {
  slug: "cu-chi-tunnels",
  name: "Cu Chi Tunnels",
  provinces: ["ho-chi-minh-city"],
  destination: "",
  lat: "11.141519428740597",
  lng: "106.461571250992",
  address: "Phú Hiệp, Củ Chi, Thành phố Hồ Chí Minh",
  type: ["heritage", "history", "attraction"],
  categories: [],
  experiences: ["history", "culture", "photography", "walking-tour"],
  tags: ["🪖 War History", "🕳️ Underground Tunnels", "🌿 Jungle Warfare", "📷 Living Museum"],
  bestTime: "Nov - Apr (dry season; rainy season makes tunnel access muddy and humid)",
  bestMonths: [11, 12, 1, 2, 3, 4],
  entranceFee: "~110,000 VND (Ben Dinh); ~90,000 VND (Ben Duoc)",
  openingHours: "7:00 AM - 5:00 PM",
  mapUrl: "https://www.google.com/maps?q=11.1416,106.4619",
  streetView: { embedUrl: "https://www.google.com/maps/embed?pb=!4v1775903510723!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRE9qdUw4bHdF!2m2!1d11.14139261872694!2d106.4621329297128!3f122.9925722937489!4f-23.206150953665357!5f0.7820865974627469", },
  heroImage: heroUrl("cu-chi-tunnels-ho-chi-minh_placeholder"),
  gallery: [],
  seoDescription:
    "Cu Chi Tunnels is a 250km network of underground passages used by Viet Cong guerrillas during the Vietnam War - one of the most remarkable feats of military engineering in history, now preserved as a living war museum 40km northwest of Ho Chi Minh City.",
  tips: [
    "Ben Dinh (the more popular site) is closer to HCMC and more tourist-polished; Ben Duoc is larger, less crowded, and has a more authentic atmosphere - worth the extra 20km if you have transport",
    "The tunnel crawl sections open to visitors have been widened from the originals - they are still extremely tight, low, and dark; skip if you are claustrophobic",
    "Wear dark, loose clothing you don't mind getting dirty - the tunnels are dusty and the jungle sections are humid",
    "A guided tour is strongly recommended - the context provided about daily life underground, the booby trap displays, and the tactical significance of each section dramatically improves the visit",
    "The on-site shooting range lets visitors fire AK-47s and M16s for a fee - it is loud and the queue moves slowly; factor this in if you want to try it",
  ],
  content: {
    intro:
      "The Cu Chi Tunnels are a 250-kilometre network of underground passages constructed by Viet Cong guerrillas beneath the jungle northwest of Saigon during the Vietnam War. At their peak the tunnels housed thousands of fighters along with field hospitals, weapons factories, command centres, and kitchens - an entire functioning military infrastructure buried beneath a landscape that American forces controlled on the surface. The tunnels were built by hand over two decades, beginning in the late 1940s during the resistance against French colonial forces and expanding dramatically through the 1960s. Today two sections of the network - Ben Dinh and Ben Duoc - are preserved as open-air museums, allowing visitors to walk the jungle paths, inspect the ingeniously disguised trap systems, and crawl through sections of the original tunnels.",
    howToGetThere:
      "Cu Chi is approximately 40km northwest of Ho Chi Minh City. The easiest option for most visitors is an organised half-day or full-day tour from District 1, which handles transport and includes a guide - these depart daily from the backpacker areas around Phạm Ngũ Lão street. Independent travellers can take a bus from Chợ Lớn bus station (routes 13 or 94) to Củ Chi town, then a xe ôm to the site. Motorbike rental from HCMC is straightforward for those comfortable riding in Vietnamese traffic - the route follows Highway 22 and takes around 1.5 hours.",
    whatToExpect:
      "The visit covers jungle walking trails connecting displays of original trapdoor entrances, ventilation shafts, booby trap reconstructions, and tunnel cross-section models showing the three-level structure. Visitors can descend into short crawlable tunnel sections (typically 20-50 metres) that have been widened from their original 60cm width. The site also includes a film screening showing wartime propaganda footage shot at Cu Chi, a weapons display, and a section showing how the Viet Cong manufactured shoes and weapons from scavenged materials. Ben Dinh is the more compact and visitor-ready site; Ben Duoc covers more ground, includes a large war memorial temple, and sees fewer tour groups.",
    travelTips:
      "Cu Chi works best as a half-day trip combined with a return to HCMC in the afternoon - the site itself takes 2-3 hours to cover properly. The historical weight of the place is best absorbed with a knowledgeable guide rather than wandering the displays independently. Most visitors come as part of a group tour, which is fine, but booking a private guide through the site allows for a more focused and less rushed experience. The shooting range is entirely optional and the noise carries across the site - some visitors find it jarring given the context.",
  },
}
