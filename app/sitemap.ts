import { MetadataRoute } from "next"
import { provinces } from "@/data/provinces"
import { allLocations } from "@/data/all-locations"
import { experiences } from "@/data/experiences"
import { destinations } from "@/data/destinations"
import fs from "fs"
import path from "path"
import matter from "gray-matter"

const BASE_URL = "https://www.soloinvietnam.com"

function getBlogEntries(): MetadataRoute.Sitemap {
  const blogDir = path.join(process.cwd(), "content/blog")
  if (!fs.existsSync(blogDir)) return []

  return fs
    .readdirSync(blogDir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "")
      const raw = fs.readFileSync(path.join(blogDir, file), "utf-8")
      const { data } = matter(raw)
      return {
        url: `${BASE_URL}/blog/${slug}`,
        lastModified: data.date ? new Date(data.date) : new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      }
    })
}

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
    {
      url: `${BASE_URL}/destinations`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/map`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // Placeholder - uncomment when /events route is live
    // {
    //   url: `${BASE_URL}/events`,
    //   lastModified: new Date(),
    //   changeFrequency: "daily",
    //   priority: 0.85,
    // },
  ]

  const provincePages: MetadataRoute.Sitemap = provinces.map((p) => ({
    url: `${BASE_URL}/provinces/${p.slug}`,
    lastModified: (p as any).datePublished ? new Date((p as any).datePublished) : new Date(),
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

  const destinationPages: MetadataRoute.Sitemap = destinations.map((d) => ({
    url: `${BASE_URL}/destinations/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }))

  const blogPages = getBlogEntries()

  return [
    ...staticPages,
    ...provincePages,
    ...locationPages,
    ...experiencePages,
    ...destinationPages,
    ...blogPages,
  ]
}
