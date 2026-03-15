export type LocationType =
  | "beach"
  | "island"
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

export type LocationTheme = "blue" | "green" | "amber" | "purple" | "gray"

export const locationTheme: Record<LocationType, LocationTheme> = {
  beach: "blue",
  island: "blue",
  mountain: "green",
  forest: "green",
  nature: "green",
  waterfall: "green",
  cave: "green",
  city: "amber",
  town: "amber",
  market: "amber",
  cultural: "amber",
  attraction: "amber",
  temple: "purple",
}

export type Location = {
  slug: string
  name: string
  provinces: string[]
  destination: string
  lat: number | string   // accept cả "10°03'27.9\"N" lẫn 10.0744
  lng: number | string
  address: string
  type: LocationType
  experiences: string[]
  tags: string[]
  entranceFee?: string
  openingHours?: string
  bestTime: string
  mapUrl: string
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
}