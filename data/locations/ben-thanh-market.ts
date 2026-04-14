import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const benThanhMarket: Location = {
  slug: "ben-thanh-market",
  name: "Ben Thanh Market",
  provinces: ["ho-chi-minh-city"],
  destination: "ho-chi-minh-city",
  lat: "10.772695965273028",
  lng: "106.69811735493076",
  address: "Lê Lợi, Bến Thành, Quận 1, Thành phố Hồ Chí Minh",
  type: ["market", "landmark", "attraction"],
  categories: [],
  experiences: ["shopping", "food", "culture", "photography"],
  tags: ["🏛️ HCMC Icon", "🛍️ Souvenir Central", "🍜 Food Hall", "📷 Landmark Clocktower"],
  bestTime: "Year-round; morning hours (7-10 AM) for the food section before heat builds; avoid midday heat",
  bestMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  entranceFee: "Free",
  openingHours: "6:00 AM - 6:00 PM daily (night market outside from 6:00 PM - midnight)",
  mapUrl: "https://www.google.com/maps?q=10.772695965273028,106.69811735493076",
  streetView: { embedUrl: "https://www.google.com/maps/embed?pb=!4v1776158011596!6m8!1m7!1sph8SWXeDzp6BTFE6kSKvZw!2m2!1d10.77198508385018!2d106.6983600756288!3f331.39747251430134!4f16.931405188318266!5f0.7820865974627469", },
  heroImage: heroUrl("ben-thanh-market-ho-chi-minh-city_kkyqjg"),
  gallery: [
    "ben-thanh-market-ho-chi-minh-city-2_ykdmyp",
    "ben-thanh-market-ho-chi-minh-city-4_of6y39",
    "ben-thanh-market-ho-chi-minh-city_kkyqjg",
    "ben-thanh-market-ho-chi-minh-city-3_bahfo5",
    "ben-thanh-market-ho-chi-minh-city-5_pjwpza",
    "ben-thanh-market-ho-chi-minh-city-6_g43jkk",
    "ben-thanh-market-ho-chi-minh-city-7_rhl4a1",
  ],
  seoDescription:
    "Ben Thanh Market is the defining landmark of central Ho Chi Minh City - a 1914 French colonial covered market with a distinctive clocktower entrance selling food, clothing, souvenirs, and local produce, surrounded by an evening street food market.",
  tips: [
    "Bargaining is expected for clothing, souvenirs, and dry goods - opening prices for tourists are typically 2-3x the fair price; start at 40-50% of the asking price",
    "The food stalls inside the market serve genuine local food at reasonable prices - the pho, bánh mì, and fresh juice sections are the best value in the building",
    "The market is heavily touristed and prices reflect this - for serious shopping, the surrounding streets and the nearby Bình Tây Market in Chợ Lớn offer better value",
    "The night market that sets up outside the market perimeter from 6 PM is more atmospheric than the interior and has better street food options",
    "The clocktower entrance on the south side facing the roundabout is the iconic photograph - best light in the morning before the surrounding traffic gets heavy",
  ],
  content: {
    intro:
      "Ben Thanh Market has occupied its current site at the centre of District 1 since 1914, when French colonial authorities constructed the current building to replace an earlier market on the same location. The building - a large covered hall with a central clocktower entrance that has become the primary visual symbol of Ho Chi Minh City - covers approximately 13,000 square metres and houses hundreds of stalls selling food, clothing, textiles, souvenirs, and household goods. It functions simultaneously as a working local market serving the surrounding district and as one of the most visited tourist destinations in southern Vietnam, a combination that creates a particular commercial atmosphere where prices for identical goods can vary dramatically depending on the vendor's assessment of who is buying. The surrounding traffic roundabout and the adjacent metro station entrance have made the market's clocktower the default orientation landmark for central District 1.",
    howToGetThere:
      "Ben Thanh Market is located at the heart of District 1, at the intersection of Lê Lợi, Trần Hưng Đạo, and Lê Lai streets. It is visible from most points in central District 1 and within walking distance of the majority of hotels in the area. The Ben Thanh metro station (Line 1) is immediately adjacent. From Bui Vien street, the market is a 10-minute walk north.",
    whatToExpect:
      "The market interior is divided into sections: food and produce toward the interior, clothing and textiles around the perimeter, souvenirs and handicrafts concentrated near the main tourist entrances. The food section is the most authentic part of the market - fresh produce, dried goods, and a cluster of food stalls serving cooked food. The souvenir and clothing sections are heavily oriented toward tourist trade. The outside perimeter hosts additional stalls and, from 6 PM, a night market with street food and outdoor dining that many visitors prefer to the interior.",
    travelTips:
      "Ben Thanh Market is worth visiting once for orientation and atmosphere even if serious shopping is not the goal - the building itself and the energy of a large covered market are interesting independently of whether anything is purchased. For buying souvenirs, the market is convenient but not the best value in the city - the same lacquerware, silk items, and coffee that sell here are available for less at the wholesale areas near Bình Tây Market in Chợ Lớn or at the street vendors on Bùi Viện. The food stalls inside are consistently good value and represent the most straightforward way to eat cheaply in central District 1.",
  },
}
