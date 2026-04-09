import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const crazyHouse: Location = {
  slug: "crazy-house",
  name: "Crazy House",
  provinces: ["lam-dong"],
  destination: "da-lat",
  lat: "11.934822914969137",
  lng: "108.43136784176984",
  address: "3 Huỳnh Thúc Kháng, Đà Lạt, Lâm Đồng",
  type: ["attraction", "cultural"],
  categories: [],
  experiences: ["photography", "walking-tour", "culture"],
  tags: ["🏠 Gaudi-Style Architecture", "📸 Photography", "🎨 Art & Design", "🏨 Functioning Guesthouse"],
  bestTime: "Year-round; visit early morning to avoid tour groups",
  bestMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  entranceFee: "~60,000 VND",
  openingHours: "8:00 AM – 7:00 PM",
  mapUrl: "https://www.google.com/maps?q=11.934822914969137,108.43136784176984",
  streetView: {embedUrl: "https://www.google.com/maps/embed?pb=!4v1775751962116!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRHNvUDdCc3dF!2m2!1d11.93465788669864!2d108.4307074156503!3f146.78337646065336!4f24.10129674630609!5f0.7820865974627469", },
  heroImage: heroUrl("crazy-house-da-lat_bsys2a"),
  gallery: [
    "crazy-house-da-lat_bsys2a",
  ],
  seoDescription:
    "The Crazy House is Đà Lạt's most extraordinary building - a Gaudí-inspired architectural fantasy of organic forms, cave-like rooms, giant animal sculptures, and winding exterior stairways designed by Vietnamese architect Đặng Việt Nga, still under construction after 30 years and operating as a functioning guesthouse.",
  tips: [
    "Arrive before 8:30 AM - tour groups arrive around 9 AM and the narrow walkways become very crowded",
    "The house is still being built and expanded - areas change between visits and there are often new rooms or structures under construction",
    "The roof walkways and exterior stairs are steep and have minimal railings - not suitable for visitors with vertigo",
    "Staying overnight in one of the themed rooms (Eagle, Tiger, Kangaroo) is possible and genuinely unique - book well in advance",
    "The architect, Đặng Việt Nga, is the daughter of former Vietnamese General Secretary Trường Chinh - the building reflects a life shaped by both communist politics and international modernist architecture",
  ],
  content: {
    intro:
      "The Crazy House - Biệt Thự Hằng Nga - is a private guesthouse in central Đà Lạt designed by architect Đặng Việt Nga, who studied architecture in Moscow and was influenced by Gaudí, Tolkien, and the organic forms of trees and caves. Construction began in 1990 and continues today - the building is never finished, growing organically over decades as new rooms, staircases, and sculptural elements are added to the existing structure. The building has no straight lines and no conventional rooms: cave-like chambers are connected by winding staircases on the exterior of giant sculpted trees, animal sculptures emerge from the walls, and themed rooms (named for animals and natural elements) have furniture built from the same organic concrete as the walls. It functions simultaneously as a tourist attraction, a working guesthouse, and an ongoing architectural project.",
    howToGetThere:
      "The Crazy House is in central Đà Lạt, on Huỳnh Thúc Kháng Street near Xuân Hương Lake - within walking distance of most accommodation in the city centre. By motorbike, 5 minutes from the central market. The building is impossible to miss - the organic sculptural forms are visible above the surrounding conventional buildings.",
    whatToExpect:
      "Visitors enter and are free to explore the full structure - all interior rooms, exterior walkways, rooftop areas, and garden. The themed rooms (viewable but occupied when booked) give an idea of the sleeping experience. Exterior staircases wind up the giant concrete tree trunks to roof terraces with views over Đà Lạt's pine-covered hills. Animal sculptures - a giant giraffe, an eagle, a bear - are built into the structure at various levels. The building is disorienting in the best possible way - there is no obvious circulation route and no map, so visitors find their own way through the structure.",
    travelTips:
      "The Crazy House is a 45-minute visit at a relaxed pace - enough time to see everything without feeling rushed. The early morning timing is important: the walkways are narrow and steep and the experience changes significantly between an uncrowded morning visit and a midday visit with tour groups. Staying overnight is the most complete experience but requires advance planning - the rooms are genuinely unusual accommodation.",
  },
}
