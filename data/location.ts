export type LocationType =
  | "beach"
  | "island"
  | "nature"
  | "attraction"
  | "cultural"
  | "town"
  | "market"
  | "waterfall"
  | "cave"

export type Location = {
  slug: string
  name: string
  provinces: string[]
  destination: string
  lat: number
  lng: number
  address: string
  type: LocationType
  experiences: string[]
  tags: string[]
  entranceFee?: string
  openingHours?: string
  bestTime: string
  mapUrl: string
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