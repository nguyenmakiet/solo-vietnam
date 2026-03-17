import { MetadataRoute } from "next"
import { provinces } from "@/data/provinces"
import { allLocations } from "@/data/all-locations"
import { experiences } from "@/data/experiences"
// import { destinations } from "@/data/destinations" // bỏ comment khi destinations layer xong

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.soloinvietnam.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/provinces`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/north-vietnam`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/central-vietnam`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/south-vietnam`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/experiences`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // {
    //   url: `${BASE_URL}/destinations`,
    //   lastModified: new Date(),
    //   changeFrequency: "monthly",
    //   priority: 0.85,
    // },
    {
      url: `${BASE_URL}/map`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ]

  const provincePages: MetadataRoute.Sitemap = provinces.map((p) => ({
    url: `${BASE_URL}/provinces/${p.slug}`,
    lastModified: p.datePublished ? new Date(p.datePublished) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }))

  const locationPages: MetadataRoute.Sitemap = allLocations.map((l) => ({
    url: `${BASE_URL}/locations/${l.slug}`,
    lastModified: (l as any).updatedAt
      ? new Date((l as any).updatedAt)
      : (l as any).datePublished
        ? new Date((l as any).datePublished)
        : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }))

  const experiencePages: MetadataRoute.Sitemap = experiences.map((e) => ({
    url: `${BASE_URL}/experiences/${e.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  // const destinationPages: MetadataRoute.Sitemap = destinations.map((d) => ({
  //   url: `${BASE_URL}/destinations/${d.slug}`,
  //   lastModified: (d as any).updatedAt
  //     ? new Date((d as any).updatedAt)
  //     : new Date(),
  //   changeFrequency: "monthly" as const,
  //   priority: 0.8,
  // }))

  return [
    ...staticPages,
    ...provincePages,
    ...locationPages,
    ...experiencePages,
    // ...destinationPages,
  ]
}
