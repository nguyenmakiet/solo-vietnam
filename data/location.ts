export type LocationType =
  | "beach"
  | "island"
  | "bay"
  | "river"
  | "lake"
  | "mountain"
  | "forest"
  | "nature"
  | "waterfall"
  | "cave"
  | "attraction"
  | "cultural"
  | "town"
  | "city"
  | "market"
  | "temple"
  | "pagoda"
  | "tomb"
  | "citadel"
  | "heritage"
  | "history"
  | "landmark"


export type LocationTheme = "blue" | "green" | "amber" | "purple" | "gray"

export const locationTheme: Record<LocationType, LocationTheme> = {
        // water
        beach: "blue",
        island: "blue",
        bay: "blue",
        river: "blue",
        lake: "blue",
      
        // nature
        mountain: "green",
        forest: "green",
        nature: "green",
        waterfall: "green",
        cave: "green",
      
        // urban
        city: "amber",
        town: "amber",
        market: "amber",
        attraction: "amber",
      
        // culture / history
        cultural: "purple",
        heritage: "purple",
        temple: "purple",
        pagoda: "purple",
        tomb: "purple",
        citadel: "purple",
        history: "amber",
        landmark: "purple",
      }

export type LocationCategory = "hidden-gem" | "must-see" | "iconic"

export type Location = {
  slug: string
  name: string
  provinces: string[]
  destination?: string
  lat: number | string
  lng: number | string
  address: string
  type: LocationType | LocationType[]
  categories?: LocationCategory[]
  experiences: string[]
  tags: string[]
  entranceFee?: string
  openingHours?: string
  bestTime: string
  bestMonths?: number[]
  mapUrl: string
  streetView?: { lat?: number | string; lng?: number | string; embedUrl?: string }
  heroImage?: string
  gallery: string[]
  tips: string[]
  seoDescription: string
  content: {
    intro: string
    howToGetThere: string
    whatToExpect: string
    travelTips: string
  }
  insights?: LocationInsights  // optional vì không phải location nào cũng có
}
export type LocationInsights = {
  highlights: string[]
  thingsToKnow: {
    crowds: string | null
    difficulty: string | null
    safety: string | null
    accessibility: string | null
    seasonal: string | null
  }
  visitorTips: string[]
  faq: {
    question: string
    answer: string
  }[]
  sentiment: {
    positive: string
    negative: string | null
  }
}
