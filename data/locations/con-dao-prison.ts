import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const conDaoPrison: Location = {
  slug: "con-dao-prison",
  name: "Con Dao Prison",
  provinces: ["vung-tau"],
  destination: "con-dao",
  lat: "8.689294969079059",
  lng: "106.6153057028259",
  address: "Côn Đảo, Bà Rịa - Vũng Tàu",
  type: ["heritage", "history"],
  categories: [],
  experiences: ["history", "culture", "walking-tour", "photography"],
  tags: ["🏛️ French Colonial Prison", "⛓️ Tiger Cages", "📖 Vietnam War History", "🕯️ Hàng Dương Cemetery"],
  bestTime: "Year-round; cooler and less humid Nov – Apr",
  bestMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  entranceFee: "~40,000 VND (covers multiple prison buildings)",
  openingHours: "7:30 AM – 11:30 AM · 1:30 PM – 5:00 PM",
  mapUrl: "https://www.google.com/maps?q=8.689294969079059,106.6153057028259",
  streetView: {},
  heroImage: heroUrl("con-dao-prison_mumzpe"),
  gallery: [
    "con-dao-prison2_raad3d",
    "con-dao-prison3_gq5pzn",
    "con-dao-prison4_yvfhmw",
  ],
  seoDescription:
    "Con Dao Prison is Vietnam's most significant historical site of incarceration - a French colonial penal complex used continuously from 1862 to 1975, known internationally for the Tiger Cages where political prisoners were kept in underground stone pits, and the burial place of revolutionary heroine Võ Thị Sáu.",
  tips: [
    "Hire a guide at the entrance - the buildings are well-preserved but the history is dense and the context makes a significant difference to what you see",
    "The Tiger Cages (Chuồng Cọp) are the most disturbing section - small stone cells with iron bar ceilings through which guards could pour lime on prisoners; allow extra time here",
    "Hàng Dương Cemetery, 2km from the prison complex, is where most prisoners who died on the island are buried - the grave of Võ Thị Sáu is a major pilgrimage site for Vietnamese visitors",
    "Visit in the morning when the complex is cooler - the open-air sections are exposed and the midday heat is intense",
    "The prison museum has English-language displays but the quality varies - the physical spaces convey more than the panels",
  ],
  content: {
    intro:
      "Con Dao Prison - Nhà Tù Côn Đảo - is a complex of 11 prison camps and associated buildings constructed by the French colonial administration from 1862 onward, used continuously for 113 years through the French colonial period, the Japanese occupation, and the American-supported South Vietnamese government, finally closing in 1975 after reunification. At its peak during the Vietnam War, the island held an estimated 10,000 prisoners - political detainees, Viet Cong fighters, and civilians deemed enemies of the South Vietnamese state - in conditions that became internationally notorious after American journalist Don Luce photographed the Tiger Cages in 1970. The Tiger Cages were underground stone cells measuring roughly 2.7 by 1.5 metres, with iron bar ceilings through which guards poured lime on prisoners who did not comply with orders. The photographs, published in Life magazine, became one of the most significant anti-war images of the Vietnam War era and contributed to shifting American public opinion. The complex is now a national historical relic site and the most visited attraction on Côn Đảo.",
    howToGetThere:
      "The prison complex is in the centre of Côn Đảo town, walking distance from most accommodation on the island. The main entrance is on Nguyễn Huệ Street. Multiple prison camps are spread across the town - the ticket covers all buildings and a map is provided at the entrance. Hàng Dương Cemetery, where many prisoners are buried, is 2km north of the town centre and best reached by motorbike.",
    whatToExpect:
      "The complex consists of multiple distinct prison areas, each with different periods of use and different conditions. The French-era colonial prison buildings are the most architecturally intact - thick stone walls, iron doors, and dark cells. The Tiger Cages (Camp 1) are the most visited section - a row of underground cells with the iron bar ceilings restored to their original configuration, with mannequins depicting prisoners in the positions described by survivors. The later US-era barrack-style camps hold larger numbers of cells and give a different sense of the scale of imprisonment. A museum building has photographs, documents, and personal effects. The entire complex takes 2–3 hours to visit properly.",
    travelTips:
      "Con Dao Prison is one of the most emotionally significant historical sites in Vietnam - more so than the War Remnants Museum in Ho Chi Minh City for many visitors, because the physical spaces are intact and the scale of suffering that occurred in them is directly tangible. It demands time and attention rather than a quick walk-through. The combination of the prison in the morning and Hàng Dương Cemetery in the late afternoon - when Vietnamese families often visit to pay respects, particularly on the anniversary of Võ Thị Sáu's execution (January 23) - gives the fullest picture of what Côn Đảo means in Vietnamese historical memory.",
  },
}
