import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const vinpearlSafari: Location = {
  slug: "vinpearl-safari",
  name: "Vinpearl Safari",
  provinces: ["kien-giang"],
  destination: "phu-quoc",
  lat: "10.337243228996103",
  lng: "103.89206976788087",
  address: "Gành Dầu, Phú Quốc, Kiên Giang",
  type: ["attraction", "nature"],
  categories: [],
  experiences: ["wildlife", "photography", "walking-tour"],
  tags: ["🦁 Open Safari", "🦒 African Animals", "📸 Wildlife Photography", "🚌 Safari Bus"],
  bestTime: "Nov – Apr (dry season, animals most active in cooler temperatures)",
  bestMonths: [1, 2, 3, 4, 11, 12],
  entranceFee: "~750,000–1,000,000 VND",
  openingHours: "8:00 AM – 4:30 PM",
  mapUrl: "https://www.google.com/maps?q=10.337243228996103,103.89206976788087",
  streetView: {embedUrl: "https://www.google.com/maps/embed?pb=!4v1775894710092!6m8!1m7!1sCAoSHENJQUJJaEFHYnlmUWFEdFp6V2UxWGNJQUR4Xzg.!2m2!1d10.33704269564915!2d103.8914475320684!3f87.5526566871824!4f-1.3711459690784125!5f0.7820865974627469", },
  heroImage: heroUrl("vinpearl-safari-hero_placeholder"),
  gallery: [],
  seoDescription:
    "Vinpearl Safari is Vietnam's first and largest open-format wildlife park - 380 hectares of savannah and jungle habitat on Phú Quốc Island housing over 3,000 animals including lions, giraffes, white rhinos, zebras, and orangutans in semi-open enclosures.",
  tips: [
    "The open safari bus tour (included in ticket) covers the large mammal zones - go on the first bus of the morning for the most animal activity",
    "The walking zoo section has smaller animals, birds, and reptiles - allow at least 2 hours for both the safari and the walking section",
    "The white rhino enclosure is the most significant from a conservation standpoint - Vinpearl Safari participates in white rhino breeding programmes",
    "Bring a telephoto lens - the animals in the open safari zone are at distance and phone cameras struggle to capture the detail",
    "Avoid midday in peak season - the heat reduces animal activity and the crowds are at their largest between 10 AM and 2 PM",
  ],
  content: {
    intro:
      "Vinpearl Safari opened in 2015 as Vietnam's first open-format wildlife park, covering 380 hectares in the northern part of Phú Quốc Island. The park houses over 3,000 animals from 150 species across two main zones: an open safari area accessible by bus, where African megafauna - lions, giraffes, white rhinos, zebras, wildebeest, and hippos - roam in large semi-open enclosures; and a walking zoo area with smaller animals, primate enclosures, bird aviaries, and a reptile house. The white rhino population is one of the most significant in Southeast Asia - the park participates in international breeding programmes for the southern white rhino. The overall standard of the facility is notably higher than most Vietnamese zoos, with larger enclosures, more natural habitat design, and visible conservation messaging.",
    howToGetThere:
      "Vinpearl Safari is in the northern part of Phú Quốc Island near Gành Dầu, about 20km from Dương Đông town. By motorbike, approximately 30 minutes from the central tourist area. Taxi or Grab available. The park entrance is on the main road near the VinOasis resort complex.",
    whatToExpect:
      "Entry includes an open safari bus tour through the large mammal zones - the bus drives through the enclosures with the animals able to approach. The walking zoo section covers primate areas (orangutans, gibbons), big cat enclosures (lions, tigers), the bird aviary, a hippo pool, and a children's farm. A small aquarium is also included. The park is large enough to require 3–4 hours for a thorough visit.",
    travelTips:
      "Vinpearl Safari is the best wildlife facility in southern Vietnam by a significant margin. For families with children or travellers interested in wildlife who have limited time for national park trekking, it offers genuine animal encounters in reasonable conditions. The white rhino programme gives it conservation credibility beyond a typical tourist zoo. Combine with VinWonders on the same day if both are on the itinerary - the two are near each other in the northern part of the island.",
  },
  insights: {
    highlights: [
      "Open safari bus tour through large animal enclosures with giraffes, lions, rhinos, and zebras roaming freely",
      "Interactive animal feeding experiences with giraffes, elephants, and lemurs in dedicated zones",
      "Well-maintained walking zoo with spacious enclosures, clean facilities, and twice-daily bird shows",
    ],
    thingsToKnow: {
      crowds: "Peak hours cause long queues at safari bus entrance (15-20 minute waits common). Arrive early morning or late afternoon to avoid crowds and heat. Animal feeding food can sell out by noon.",
      difficulty: "Park is large; walking can be exhausting in heat. Buggy service available for additional fee. Stroller and wheelchair accessibility limited due to stairs and unclear alternative routes.",
      safety: "Safe, well-organized experience. Staff attempt to enforce animal interaction rules but cannot always prevent irresponsible visitor behavior like feeding animals inappropriate food.",
      accessibility: "Stroller-friendly paths in zoo section. Buggy service available (1,000,000 VND) but does not stop at enclosures. Layout has stairs with limited wheelchair accessibility and unclear signage for alternatives.",
      seasonal: "Visit early morning when animals are most active. Avoid midday heat. Heavy rain can cancel bird shows and create crowded, wet facilities.",
    },
    visitorTips: [
      "Bring cash for animal food, feeds, and some vendors; many stands do not accept cards",
      "Book VIP pass online in advance to avoid queues; check bird show schedule (10 AM, 2 PM) upon arrival",
      "Plan 3-4 hours minimum; arrive by 9 AM if combining with other attractions like Vinpearl Wonder",
    ],
    faq: [
      { question: "Can I feed the animals?", answer: "Yes, you can feed giraffes, elephants, and lemurs by purchasing food on-site with cash. Food often sells out by noon, especially giraffe and elephant feed." },
      { question: "How long does the safari bus tour take?", answer: "The safari bus tour lasts approximately 20-30 minutes. Queue wait times range from 15-20 minutes during peak hours. Plan accordingly." },
      { question: "Do I need to buy tickets online or at the gate?", answer: "Both options available. Online booking via Klook or official site is recommended to avoid queues, especially for combo tickets and VIP passes. Physical ticket booths exist along the road to the park." },
    ],
    sentiment: {
      positive: "Vast majority praise the safari bus experience, animal variety, cleanliness, staff friendliness, and interactive feeding opportunities. Visitors consistently recommend as a must-do Phu Quoc attraction.",
      negative: "Some enclosures reported as too small, particularly for big cats. Animal food shortages at peak times. Long safari bus queues during peak hours. Concerns about irresponsible visitor behavior and some malnourished-looking animals noted by minority of reviewers. Signage and information primarily in Vietnamese.",
    },
  },
}
