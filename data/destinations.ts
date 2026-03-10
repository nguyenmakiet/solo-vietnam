export type Destination = {
  slug: string
  name: string
  province: string
  region: "north" | "central" | "south"
  description: string
}

export const destinations: Destination[] = [
  {
    slug: "sapa",
    name: "Sapa",
    province: "Lao Cai",
    region: "north",
    description: "Mountain town famous for trekking and rice terraces"
  },
  {
    slug: "ha-long",
    name: "Ha Long Bay",
    province: "Quang Ninh",
    region: "north",
    description: "UNESCO world heritage bay with limestone islands"
  },
  {
    slug: "hoi-an",
    name: "Hoi An",
    province: "Quang Nam",
    region: "central",
    description: "Ancient town known for lanterns and historic streets"
  },
  {
    slug: "phu-quoc",
    name: "Phu Quoc",
    province: "Kien Giang",
    region: "south",
    description: "Tropical island with beaches and snorkeling"
  }
]