import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const hoaLoPrison: Location = {
  slug: "hoa-lo-prison",
  name: "Hoa Lo Prison",
  provinces: ["ha-noi"],
  destination: "ha-noi",
  lat: "21.025370023417228",
  lng: "105.8467212199111",
  address: "1 Hỏa Lò, Trần Hưng Đạo, Hoàn Kiếm, Hà Nội",
  type: ["history", "heritage"],
  categories: ["must-see"],
  experiences: ["history", "culture", "walking-tour", "photography"],
  tags: ["⛓️ French Colonial Prison", "✈️ Hanoi Hilton", "🪖 POW History", "🏛️ Colonial Architecture"],
  bestTime: "Oct – Apr (cooler, drier weather makes walking between exhibits more comfortable)",
  bestMonths: [10, 11, 12, 1, 2, 3, 4],
  entranceFee: "30,000 VND",
  openingHours: "8:00 AM – 5:00 PM daily; last entry 4:30 PM",
  mapUrl: "https://www.google.com/maps?q=21.025370023417228,105.8467212199111",
  streetView: {embedUrl: "https://www.google.com/maps/embed?pb=!4v1776264121102!6m8!1m7!1susEexTLIyshxiuhGVxLVpw!2m2!1d21.02525347331919!2d105.8466070445072!3f302.17350429350586!4f6.775459368556653!5f0.7820865974627469", },
  heroImage: heroUrl("hoa-lo-prison-ha-noi_prx3gx"),
  gallery: [
    "hoa-lo-prison-ha-noi_prx3gx",
    "hoa-lo-prison-ha-noi-2_g8usir",
    "hoa-lo-prison-ha-noi-3_gbv3hu",
  ],
  seoDescription:
    "Hoa Lo Prison — nicknamed the 'Hanoi Hilton' by American POWs — is a preserved French colonial prison in central Hanoi, used to incarcerate Vietnamese political prisoners before 1954 and American pilots during the Vietnam War. One of Hanoi's most historically significant sites.",
  tips: [
    "The museum is relatively compact — most visitors complete it in 60–90 minutes; read the panels carefully rather than rushing through",
    "The guillotine and underground cell sections document the French colonial period in detail — this is the less internationally known but equally important part of the site's history",
    "The American POW section includes personal items and photographs donated by former prisoners; John McCain's flight suit is among the displayed items",
    "Audio guides are available at the entrance and add considerable context to both the French colonial and American War sections",
    "The museum is a short walk from Hoan Kiem Lake — combine both in a morning itinerary",
  ],
  content: {
    intro:
      "Hoa Lo Prison — Nhà tù Hỏa Lò — was built by the French colonial administration in 1896 on the site of a village known for producing pottery and stoves, from which the name derives: hỏa lò means 'fiery furnace' or 'stove'. Originally designed to hold 450 prisoners, the complex at times held over 2,000, becoming a central site of Vietnamese revolutionary history as the French used it to incarcerate independence activists, including many future leaders of the Democratic Republic of Vietnam. After the French departure in 1954, the prison was used by North Vietnam, most notably during the Vietnam War when American pilots shot down over Hanoi were held there — a period during which the prison was nicknamed the 'Hanoi Hilton' by US prisoners of war, the bitter irony of the name a reflection of the conditions they experienced. The original complex was largely demolished in the 1990s to make way for the Hanoi Towers development; the preserved section — the main entrance block and several cell buildings — now operates as a museum covering both phases of the prison's history.",
    howToGetThere:
      "Hoa Lo Prison is located at 1 Hỏa Lò Street in the Hoàn Kiếm district of central Hanoi, approximately 500m southwest of Hoan Kiem Lake. It is walkable from the Old Quarter (10–15 minutes) and from most accommodation in the city centre. The surrounding streets are busy; the entrance is clearly marked with a large gate facing Hỏa Lò Street. No dedicated parking; motorbikes can be left on nearby side streets.",
    whatToExpect:
      "The museum is divided into two main sections. The French colonial section occupies the majority of the preserved buildings and covers the construction of the prison, the conditions in which Vietnamese political prisoners were held, accounts of escape attempts, and the use of the guillotine — which is displayed on site. The exhibits include shackles, cell reconstructions, and photographs of prisoners. The American War section documents the experiences of US pilots held at Hoa Lo from the mid-1960s onward, including personal items, photographs, and accounts of daily life in captivity. The North Vietnamese government's presentation of this period emphasises the humane treatment of prisoners — a characterisation disputed by many former POWs, including Senator John McCain, whose flight suit is displayed in the collection.",
    travelTips:
      "Hoa Lo is one of Hanoi's most historically layered sites — the intersection of French colonial oppression, Vietnamese revolutionary history, and American war memory in a single location makes it more complex than most museum visits. The French colonial period section is typically less familiar to international visitors than the American War section, but is equally worth time. The prison pairs naturally with the Temple of Literature (2km away) and Hoan Kiem Lake (500m) for a half-day historical itinerary in central Hanoi. For visitors who also visit Con Dao Prison in the south, the comparison between the two colonial prison systems is instructive.",
  },
  insights: {
    highlights: [
      "Original French colonial guillotine used for executing Vietnamese political prisoners",
      "American POW section including John McCain's flight suit and personal artefacts",
      "Intact colonial-era cell blocks and underground holding areas",
    ],
    thingsToKnow: {
      crowds: "Moderate; busy with domestic tourists and school groups in the morning",
      difficulty: "Flat site; no physical difficulty",
      safety: "Safe; centrally located in Hoàn Kiếm district",
      accessibility: "Main exhibits are ground-floor accessible; some underground sections have steps",
      seasonal: "Open year-round; no seasonal variation",
    },
    visitorTips: [
      "Read the French colonial section thoroughly — it provides essential context for understanding Vietnamese attitudes toward foreign occupation",
      "The American POW section presents events from the North Vietnamese government's perspective — cross-reference with memoirs by former POWs for a fuller picture",
      "Visit Hoan Kiem Lake and Ngoc Son Temple immediately after — they are a 10-minute walk away",
    ],
    faq: [
      { question: "How long does Hoa Lo Prison take to visit?", answer: "60–90 minutes is sufficient for most visitors; those reading all panels will need up to 2 hours." },
      { question: "Is English signage available?", answer: "Yes, all major exhibits have English translations alongside Vietnamese." },
      { question: "Who was John McCain and why is he associated with Hoa Lo?", answer: "John McCain was a US Navy pilot shot down over Hanoi in 1967 and held as a POW at Hoa Lo for over five years. He later became a US Senator and presidential candidate. His flight suit is displayed in the museum." },
    ],
    sentiment: {
      positive: "Visitors frequently cite the French colonial section as unexpectedly moving; the physical preservation of cell blocks gives the history a tangible immediacy",
      negative: "Some international visitors find the American POW section's framing one-sided; the museum is smaller than expected given its historical significance",
    },
  },
}
