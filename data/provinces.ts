export type Province = {
  slug: string
  name: string
  region: "north" | "central" | "south"
}

export const provinces: Province[] = [
  {
    slug: "lao-cai",
    name: "Lao Cai",
    region: "north",
  },
  {
    slug: "quang-ninh",
    name: "Quang Ninh",
    region: "north",
  },
  {
    slug: "quang-nam",
    name: "Quang Nam",
    region: "central",
  },
  {
    slug: "kien-giang",
    name: "Kien Giang",
    region: "south",
  },
]