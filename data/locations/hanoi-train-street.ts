import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const hanoiTrainStreet: Location = {
  slug: "hanoi-train-street",
  name: "Hanoi Train Street",
  provinces: ["ha-noi"],
  destination: "ha-noi",
  lat: "21.018024290863416",
  lng: "105.8408455979318",
  address: "Phùng Hưng, Hoàn Kiếm, Hà Nội",
  type: ["attraction", "landmark", "cultural"],
  categories: [],
  experiences: ["photography", "culture", "walking-tour"],
  tags: ["🚂 Train Passes Meters Away", "📷 Iconic Photo Spot", "☕ Trackside Cafes", "🏘️ Residential Street"],
  bestTime: "Oct - Apr (cool dry season; the street and cafes are more pleasant in cooler weather)",
  bestMonths: [10, 11, 12, 1, 2, 3, 4],
  entranceFee: "Free (cafes along the track charge for drinks)",
  openingHours: "Accessible at all times; train passes approximately 3:30 PM and 7:30 PM daily (times subject to change)",
  mapUrl: "https://www.google.com/maps?q=21.018024290863416,105.8408455979318",
  streetView: { embedUrl: "https://www.google.com/maps/embed?pb=!4v1776104898915!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRHFwWlQtLWdF!2m2!1d21.01766052375262!2d105.840923505182!3f156.97242341779267!4f6.333860959990318!5f0.7820865974627469", },
  heroImage: heroUrl("ha-noi-train-street_ld1nae"),
  gallery: [
    "ha-noi-train-street-6_usz99b",
    "ha-noi-train-street-4_s3cvep",
    "ha-noi-train-street_ld1nae",
    "ha-noi-train-street-3_gfyjm8",
    "ha-noi-train-street-2_e7vy7f",
  ],
  seoDescription:
    "Hanoi Train Street is a narrow residential alley in the Old Quarter where a working railway line passes within centimetres of the houses, cafes, and daily life of the people who live alongside it - one of Hanoi's most photographed and contested urban scenes.",
  tips: [
    "The cafes along the track require you to purchase a drink to sit and wait for the train - this is reasonable given the volume of visitors they manage",
    "Train times are approximately 3:30 PM and 7:30 PM but are not guaranteed - check with cafe staff on arrival for the day's schedule",
    "When the train approaches, cafe staff will direct everyone to stand against the walls - follow instructions immediately as the clearance is genuinely very small",
    "The street was temporarily closed to tourists in 2019 following safety incidents - access has reopened but the situation may change; check current status before visiting",
    "The most photogenic angle is from the track looking toward the houses with the train approaching - this requires being positioned early before crowds fill the narrow space",
  ],
  content: {
    intro:
      "Hanoi Train Street refers to the narrow residential alleys - principally the section of Phùng Hưng street and the parallel lanes behind it - where the Hanoi to Ho Chi Minh City railway line runs through an extremely tight corridor between houses that were built up around the existing track over decades. The gap between the passing train and the building facades on either side is measured in centimetres rather than metres. The street has been inhabited continuously since before the railway was built under French colonial administration in the early 20th century, and the residents have adapted their daily lives entirely around the train schedule. What began as an incidental urban condition became one of the most photographed spots in Vietnam after images circulated widely online in the mid-2010s, transforming a working residential street into a significant tourist attraction with all the complications that entails.",
    howToGetThere:
      "Train Street is located in the Hoàn Kiếm district, approximately 700 metres west of Hoàn Kiếm Lake. The most commonly visited section runs along the back lanes parallel to Phùng Hưng street. From the Old Quarter, walk west along Hàng Bông or Hàng Gai and turn into the lanes behind Phùng Hưng - the cafes set up along the track are visible and staff typically direct visitors. The entrance points are on Lê Duẩn and the surrounding lanes. Most Old Quarter hotels are within 10-15 minutes walk.",
    whatToExpect:
      "The experience centres on sitting at one of the small cafes that have established themselves in the houses immediately adjacent to the track, ordering a drink, and waiting for the train to pass. When it does, the proximity is genuinely startling - the train moves slowly through this section and the sound, vibration, and visual scale of it passing at arm's length is the defining moment of the visit. Between trains, the street shows its residential character - laundry hanging, motorbikes parked, children playing in the narrow space. The cafes are simple and the drinks are overpriced relative to nearby streets, but the context justifies the premium for most visitors.",
    travelTips:
      "Train Street occupies an uncomfortable position between authentic urban life and managed tourist spectacle - the residents live here, the train is a real working service, and the safety considerations are genuine. The 2019 temporary closure followed incidents of tourists ignoring safety instructions. The current arrangement, where cafes act as informal crowd managers requiring drink purchases, is a reasonable compromise that keeps visitors off the track and generates some economic return for residents. Visiting with this context in mind - as guests in a working residential environment rather than customers at an attraction - makes for a more respectful and ultimately more interesting experience.",
  },
}
