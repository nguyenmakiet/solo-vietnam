import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const saigonCentralPostOffice: Location = {
  slug: "saigon-central-post-office",
  name: "Saigon Central Post Office",
  provinces: ["ho-chi-minh-city"],
  destination: "ho-chi-minh-city",
  lat: "10.779864930790652",
  lng: "106.69990840101588",
  address: "2 Công Xã Paris, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh",
  type: ["landmark", "heritage", "cultural"],
  categories: ["iconic"],
  experiences: ["photography", "culture", "architecture", "walking-tour"],
  tags: ["🏛️ Gustave Eiffel", "📮 Working Post Office", "🏙️ French Colonial", "📸 Architecture"],
  bestTime: "Year-round; mornings for photography before crowds; open daily including weekends",
  bestMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  entranceFee: "Free",
  openingHours: "7:00 AM – 7:00 PM Mon–Fri · 7:00 AM – 6:00 PM Sat · 8:00 AM – 6:00 PM Sun",
  mapUrl: "https://www.google.com/maps?q=10.779864930790652,106.69990840101588",
  streetView: {embedUrl: "https://www.google.com/maps/embed?pb=!4v1776264706784!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ2M4c19BN2dF!2m2!1d10.78014658052121!2d106.7000887251299!3f49.66963418157104!4f24.180007243195035!5f0.7820865974627469", },
  heroImage: heroUrl("saigon-central-post-office_hero"),
  gallery: [],
  seoDescription:
    "The Saigon Central Post Office is a functioning French colonial post office designed by Gustave Eiffel's firm and completed in 1891, featuring a stunning barrel-vaulted interior hall, vintage tile maps of Indochina, and a portrait of Ho Chi Minh — one of Ho Chi Minh City's most photographed colonial landmarks.",
  tips: [
    "Arrive at opening (7 AM) for the best photography — the morning light comes through the side windows and the hall is empty before tour groups arrive at 8:30 AM",
    "The building is a working post office — you can send postcards and letters from here, which adds a genuine reason to visit beyond sightseeing",
    "The two large tile maps on the interior walls date from the original construction and show the telegraph network of Indochina circa 1892 — worth examining closely",
    "The portrait of Ho Chi Minh on the rear wall replaced the original French official portraits after 1975 and is now itself a historical document of the transition",
    "Notre-Dame Cathedral is directly across the plaza (50m) — visit both in the same stop; the cathedral has been under renovation but the exterior remains accessible",
  ],
  content: {
    intro:
      "The Saigon Central Post Office — Bưu điện Trung tâm Sài Gòn — is a French colonial-era post office completed in 1891, designed by the architectural firm of Gustave Eiffel, who was also responsible for the structural engineering of the Eiffel Tower built two years earlier. The building faces Notre-Dame Cathedral across a small plaza in the heart of District 1, forming the most intact example of French civic architecture in Ho Chi Minh City. The interior is a single large hall with a barrel-vaulted iron-and-glass ceiling, yellow and cream painted walls, and large tile maps of Southern Vietnam and the Indochina telegraph network mounted on either side of the main entrance. The hall remains in full operation as a post office: phone booths, postal counters, and a gift shop line the walls, and a large portrait of Ho Chi Minh faces visitors from the rear wall. Despite its tourist appeal, the building functions as it was built to function — letters and parcels move through it daily — which gives it a vitality that purely museum-converted colonial buildings lack.",
    howToGetThere:
      "The post office is at 2 Công Xã Paris in District 1, directly opposite Notre-Dame Cathedral and a 5-minute walk from Dong Khoi Street. It is within easy walking distance of most central hotels. The surrounding area — the former French colonial civic quarter — contains the most concentrated cluster of colonial-era buildings in the city. Grab rides from Ben Thanh Market take about 5 minutes.",
    whatToExpect:
      "The main hall is the entire attraction: a single large vaulted space approximately 60 metres long, with the iron ceiling structure visible above and the original tile floors intact. The building is well maintained and the yellow paint scheme has been kept close to the original colonial colours. On weekdays the hall is busy with postal customers alongside tourists; weekends are quieter on the functional side but busier with visitors. The gift shop along the right wall sells stamps, postcards, lacquerware, and souvenirs — the stamps in particular are worth browsing. The vaulted ceiling and the light from the tall windows create genuinely good conditions for interior architectural photography.",
    travelTips:
      "The post office pairs naturally with Notre-Dame Cathedral directly across the plaza, and the whole Công Xã Paris area rewards a slow walk — the surrounding streets contain the former City Hall (now the People's Committee building, lit at night), the Opera House, and the Continental Hotel, forming the most complete remaining example of a French colonial civic district in Southeast Asia. An evening walk through this quarter, when the buildings are illuminated, is one of the most atmospheric experiences in Ho Chi Minh City. The post office itself closes by 7 PM but the exterior and plaza remain accessible.",
  },
  insights: {
    highlights: [
      "Barrel-vaulted Eiffel-designed interior hall — among the finest French colonial interiors in Southeast Asia",
      "Original 1892 tile maps of Indochina's telegraph network mounted on the interior walls",
      "Fully functioning post office where visitors can send postcards from one of Vietnam's most beautiful buildings",
    ],
    thingsToKnow: {
      crowds: "Busy with tour groups from 9 AM – noon; quiet early morning and mid-afternoon",
      difficulty: "No physical difficulty; flat and accessible interior",
      safety: "Safe; central District 1 location",
      accessibility: "Ground floor fully accessible; no barriers to entry",
      seasonal: "Open year-round; interior is air-conditioned",
    },
    visitorTips: [
      "Buy a postcard from the gift shop and send it from the counter — it takes 5 minutes and arrives delivered with a Saigon postmark",
      "Photograph the hall from the rear (near the Ho Chi Minh portrait) looking toward the entrance for the best perspective of the vaulted ceiling",
      "The building is free to enter and requires no ticket — just walk in through the main doors",
    ],
    faq: [
      { question: "Is the post office free to visit?", answer: "Yes, entry is completely free. It is a functioning public building open to all visitors." },
      { question: "Can I send mail from here?", answer: "Yes, the post office operates full postal services. Postcards to Europe or Australia typically take 2–3 weeks." },
      { question: "Was it really designed by Gustave Eiffel?", answer: "The building was designed by the colonial public works department with structural engineering attributed to Eiffel's firm, completed in 1891 — two years after the Eiffel Tower." },
    ],
    sentiment: {
      positive: "Visitors are consistently impressed by the scale and condition of the interior hall; sending postcards from the building is cited as a memorable detail",
      negative: "Some visitors find it overcrowded with tour groups mid-morning; the gift shop is considered overpriced relative to street vendors nearby",
    },
  },
}
