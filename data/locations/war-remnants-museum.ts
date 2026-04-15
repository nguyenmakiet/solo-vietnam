import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const warRemnantsMuseum: Location = {
  slug: "war-remnants-museum",
  name: "War Remnants Museum",
  provinces: ["ho-chi-minh-city"],
  destination: "ho-chi-minh-city",
  lat: "10.779534930802145",
  lng: "106.69218502415347",
  address: "28 Võ Văn Tần, Phường 6, Quận 3, Thành phố Hồ Chí Minh",
  type: ["history", "heritage"],
  categories: ["must-see"],
  experiences: ["history", "culture", "photography", "walking-tour"],
  tags: ["🪖 Vietnam War", "📸 War Photography", "⚔️ Agent Orange", "🚁 Military Hardware"],
  bestTime: "Year-round; mornings are quieter and cooler",
  bestMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  entranceFee: "40,000 VND",
  openingHours: "7:30 AM – 6:00 PM daily",
  mapUrl: "https://www.google.com/maps?q=10.779534930802145,106.69218502415347",
  heroImage: heroUrl("war-remnants-museum_hcmc_hero"),
  streetView: { embedUrl: "https://www.google.com/maps/embed?pb=!4v1776265244936!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJREU2LUtXandF!2m2!1d10.77924821520708!2d106.6924896247323!3f283.32282647817425!4f16.770404134508738!5f0.7820865974627469", },
  gallery: [],
  seoDescription:
    "The War Remnants Museum in Ho Chi Minh City is Vietnam's most visited war museum, documenting the human cost of the Vietnam War through photographs, military hardware, and exhibits on the effects of Agent Orange — a sober and essential stop for understanding the country's modern history.",
  tips: [
    "Arrive early — the museum gets crowded mid-morning, particularly with school groups; the first hour after opening (7:30 AM) is the quietest",
    "The Agent Orange / Dioxin exhibit on the third floor is the most emotionally difficult section — take breaks between floors if needed",
    "US military vehicles, aircraft, and artillery are displayed in the courtyard and are free to view even without entering the main building",
    "Photography is permitted throughout — the Requiem gallery on the upper floor, featuring work by war photographers who were killed during the conflict, is the most powerful collection",
    "Allow at least 2 hours; serious visitors often need 3 — there is significant written content alongside the photographs",
  ],
  content: {
    intro:
      "The War Remnants Museum — Bảo tàng Chứng tích Chiến tranh — is a four-storey museum in District 3 of Ho Chi Minh City dedicated to documenting the Vietnam War from the Vietnamese perspective. Originally opened in 1975 as the Exhibition House for US and Puppet Crimes, the museum holds an extensive collection of photographs, military equipment, weapons, and personal testimonies covering the period from French colonialism through the end of the American War in 1975. The most internationally recognised exhibits are the Agent Orange / Dioxin gallery, which documents the long-term health consequences of chemical defoliant use on Vietnamese civilians across generations, and the Requiem gallery, which displays the work of photographers from multiple countries — including American, Vietnamese, Japanese, and French journalists — who were killed while covering the conflict. Outside, the courtyard houses a collection of decommissioned US military hardware: helicopters, tanks, artillery pieces, and an F-5A fighter jet. The museum is the most visited paid attraction in Ho Chi Minh City and draws both international tourists and Vietnamese school groups.",
    howToGetThere:
      "The museum is located at 28 Võ Văn Tần in District 3, about 1km from the Reunification Palace (Independence Palace) and 1.5km from Ben Thanh Market. It is easily reached on foot from the backpacker area around Phạm Ngũ Lão Street (15–20 minute walk) or by Grab from anywhere in the city centre. There is no direct metro access yet; the nearest stations on the current metro line are several kilometres away. Street parking for motorbikes is available on nearby side streets.",
    whatToExpect:
      "The museum is spread across three main floors plus the outdoor courtyard. The ground floor covers the international movement against the Vietnam War. The upper floors document specific aspects of the conflict: military operations, war crimes investigations, the press corps, and the effects of chemical warfare. The Requiem gallery, dedicated to photographers who died during the war, contains some of the most iconic images of 20th-century conflict photography. The Agent Orange exhibit is clinically documented but confronting — it includes photographs of affected individuals across multiple generations and maps of defoliant application zones. The outdoor exhibits of US military hardware are accessible without entering the building and give a sense of the material scale of the conflict.",
    travelTips:
      "The museum presents the war from a specific political perspective — that of the victorious North Vietnamese government — and visitors should approach the exhibits with that context in mind. Some sections are deliberately graphic. The museum pairs naturally with the Independence Palace (400m away), which documents the same period from the perspective of the South Vietnamese government. For a broader understanding of the war's geography, the Cu Chi Tunnels (40km northwest) show the underground infrastructure used by Viet Cong fighters during the conflict. Combined, these three sites give the fullest picture of the war available in the Ho Chi Minh City area.",
  },
  insights: {
    highlights: [
      "Requiem gallery displaying work of war photographers killed during the Vietnam conflict",
      "Agent Orange / Dioxin exhibit documenting multigenerational health impacts on Vietnamese civilians",
      "Outdoor courtyard with decommissioned US military aircraft, tanks, and artillery",
    ],
    thingsToKnow: {
      crowds: "Busy from mid-morning; quietest in the first hour after opening at 7:30 AM",
      difficulty: "No physical difficulty; emotionally demanding content throughout",
      safety: "Safe; centrally located in District 3",
      accessibility: "Lift available between floors; outdoor courtyard is wheelchair accessible",
      seasonal: "Open year-round; no seasonal variation in the exhibits",
    },
    visitorTips: [
      "Read the contextual panels carefully — the photographs are more meaningful with the written documentation",
      "The courtyard military hardware is free to view without a ticket — useful if short on time",
      "Combine with Independence Palace and Notre-Dame Cathedral for a full District 1–3 historical half-day",
    ],
    faq: [
      { question: "How long does the museum take?", answer: "Most visitors spend 1.5–2 hours; those reading all exhibits carefully will need 3 hours." },
      { question: "Is photography allowed inside?", answer: "Yes, photography is permitted throughout the museum including the Requiem gallery." },
      { question: "Is the content suitable for children?", answer: "Some exhibits are graphic; parental discretion is advised for younger children, particularly the Agent Orange and war crimes sections." },
    ],
    sentiment: {
      positive: "Visitors consistently rate the Requiem photography gallery and the honesty of the Agent Orange documentation as the most impactful elements",
      negative: "Some international visitors note the one-sided political framing; the English translations are occasionally rough in secondary panels",
    },
  },
}
