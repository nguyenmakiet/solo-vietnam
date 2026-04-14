import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const independencePalace: Location = {
  slug: "independence-palace",
  name: "Independence Palace",
  provinces: ["ho-chi-minh-city"],
  destination: "ho-chi-minh-city",
  lat: "10.777204981398915",
  lng: "106.69534501075161",
  address: "135 Nam Kỳ Khởi Nghĩa, Bến Thành, Quận 1, Thành phố Hồ Chí Minh",
  type: ["heritage", "history", "landmark"],
  categories: [],
  experiences: ["history", "culture", "photography", "walking-tour"],
  tags: ["🏛️ Fall of Saigon", "🪖 War History", "🏢 1960s Architecture", "🚗 Tank on Lawn"],
  bestTime: "Nov - Apr (dry season; outdoor grounds more comfortable; interior is air-conditioned year-round)",
  bestMonths: [11, 12, 1, 2, 3, 4],
  entranceFee: "~40,000 VND",
  openingHours: "7:30 AM - 11:00 AM and 1:00 PM - 4:00 PM daily; closed during government events",
  mapUrl: "https://www.google.com/maps?q=10.777204981398915,106.69534501075161",
  streetView: { embedUrl: "https://www.google.com/maps/embed?pb=!4v1776182765759!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJREUwUEhrR0E.!2m2!1d10.77791998129385!2d106.6961609774284!3f223.8923314066046!4f9.516195071873938!5f0.7820865974627469", },
  heroImage: heroUrl("independence-palace-ho-chi-minh-city_wssznl"),
  gallery: [
    "independence-palace-ho-chi-minh-city-4_qonewe",
    "independence-palace-ho-chi-minh-city_wssznl",
    "independence-palace-ho-chi-minh-city-5_xhqcjc",
    "independence-palace-ho-chi-minh-city-8_thrtjd",
    "independence-palace-ho-chi-minh-city-2_s88dpi",
    "independence-palace-ho-chi-minh-city-7_oo3d0d",
    "independence-palace-ho-chi-minh-city-3_mxqisv",
    "independence-palace-ho-chi-minh-city-6_wlawtm",
    "independence-palace-ho-chi-minh-city-9_hwtqrg",
  ],
  seoDescription:
    "Independence Palace is the former seat of the South Vietnamese government in Saigon - the building where the Vietnam War effectively ended on April 30, 1975 when North Vietnamese tanks crashed through its gates, preserved exactly as it was on that day.",
  tips: [
    "A guided tour (included with entry or bookable separately) dramatically improves the visit - the basement war rooms, communications bunker, and rooftop helipad require context to fully understand",
    "The building is preserved exactly as it was on April 30, 1975 - furniture, phones, maps, and personal items remain in place, which gives the interior a genuinely eerie character",
    "The two tanks on the front lawn are reproductions of the tanks that crashed through the gates on April 30, 1975 - the originals are in the War Remnants Museum nearby",
    "Combine with the War Remnants Museum (15 minutes walk) for a full day covering the Vietnam War from multiple perspectives",
    "The building occasionally closes for government functions without advance notice - check on arrival",
  ],
  content: {
    intro:
      "Independence Palace - known during the South Vietnamese period as the Presidential Palace and to Vietnamese as Dinh Thống Nhất (Reunification Palace) - is the building where the Vietnam War ended. On April 30, 1975, North Vietnamese Army tanks crashed through the palace gates and troops raised the flag of the National Liberation Front from the rooftop, marking the fall of Saigon and the end of the conflict. The current building was designed by Vietnamese architect Ngô Viết Thụ and completed in 1966, replacing an earlier French colonial palace destroyed in a bombing attack on President Ngô Đình Diệm in 1962. It served as the seat of the South Vietnamese government from its completion until the war's end, and has been preserved essentially unchanged since April 30, 1975 - furniture, communications equipment, maps, and personal effects remain in place throughout the building.",
    howToGetThere:
      "Independence Palace is located in central District 1, approximately 1km northwest of Ben Thanh Market. From Ben Thanh, walk northwest along Nam Kỳ Khởi Nghĩa street - the palace grounds are visible on the right. From the Notre-Dame Cathedral area, the palace is a 5-minute walk southwest. Grab or taxi from anywhere in District 1 takes under 10 minutes.",
    whatToExpect:
      "The visit covers the full building on multiple floors: the formal reception rooms used for state functions on the upper floors, the private living quarters and meeting rooms of the president and his family, the operations rooms and map rooms used during the war, and the basement communications bunker and war rooms that retain their original equipment. The rooftop helipad from which the last South Vietnamese officials evacuated is accessible. The building's 1960s architectural design - open plan, modernist, with significant use of wood and traditional Vietnamese decorative motifs - is genuinely impressive as a piece of mid-century design. The preservation of the entire building in its 1975 state gives it a time-capsule character unlike most historical sites.",
    travelTips:
      "Independence Palace is one of the most historically significant sites in Vietnam and rewards visitors who arrive with knowledge of the events of April 30, 1975 and the broader arc of the Vietnam War. Without this context, the building is an interesting piece of architecture with old furniture. With it, walking through the rooms where decisions were made during one of the 20th century's defining conflicts - and standing on the lawn where the tanks came through the gates - has a weight that purely architectural interest cannot provide. The combination with the War Remnants Museum, which covers the conflict from a very different perspective, makes for the most complete single-day engagement with Vietnam War history available in Ho Chi Minh City.",
  },
}
