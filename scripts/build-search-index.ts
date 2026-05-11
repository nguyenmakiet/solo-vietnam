/**
 * scripts/build-search-index.ts
 *
 * Generates /public/search-index.json for Fuse.js client-side search.
 * Run via:  npm run build:search-index
 *
 * Each item has:
 *   type, slug, name, nameAscii, url, description, province, region, tags, heroImage
 *
 * nameAscii strips Vietnamese diacritics so Fuse.js can match
 * "hon son" → "Hòn Sơn", "ha giang" → "Hà Giang", etc.
 */

import fs from "fs"
import path from "path"
import matter from "gray-matter"

import { allLocations } from "../data/all-locations"
import { destinations } from "../data/destinations"
import { provinces } from "../data/provinces"

// ─── Types ────────────────────────────────────────────────────────────────────

type SearchItem = {
  type: "location" | "destination" | "province" | "blog"
  slug: string
  name: string
  /** Diacritic-free lowercase — enables "ha giang" to match "Hà Giang" in Fuse */
  nameAscii: string
  url: string
  description: string
  province?: string   // province slug (first province for locations)
  region?: string     // "north" | "central" | "south"
  tags: string[]
  heroImage?: string
  category?: string   // blog posts only
}

// ─── Utils ────────────────────────────────────────────────────────────────────

/**
 * Strips Vietnamese diacritics using Unicode NFD decomposition.
 * đ/Đ handled explicitly since it has no combining mark equivalent.
 * Examples:
 *   "Hà Giang"  → "ha giang"
 *   "Đèo Hải Vân" → "deo hai van"
 *   "Hòn Sơn"   → "hon son"
 */
function toAscii(str: string): string {
  if (!str) return ""
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")  // strip all combining diacritical marks
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .replace(/[^\x00-\x7F]/g, "")    // strip any remaining non-ASCII
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim()
}

function truncate(str: string | undefined | null, max = 160): string {
  if (!str) return ""
  const s = str.trim()
  if (s.length <= max) return s
  return s.slice(0, max).replace(/\s+\S*$/, "") + "…"
}

// ─── Build index ─────────────────────────────────────────────────────────────

const items: SearchItem[] = []

// 1. Locations ─────────────────────────────────────────────────────────────────
for (const loc of allLocations) {
  if (loc.status === "closed" || loc.status === "unverified") continue

  const typeTags: string[] = Array.isArray(loc.type) ? loc.type : [loc.type]

  items.push({
    type: "location",
    slug: loc.slug,
    name: loc.name,
    nameAscii: toAscii(loc.name),
    url: `/locations/${loc.slug}`,
    description: truncate(loc.seoDescription),
    province: loc.provinces?.[0],
    tags: [...new Set([...typeTags, ...(loc.tags ?? [])])],
    heroImage: loc.heroImage ?? undefined,
  })
}

// 2. Destinations ──────────────────────────────────────────────────────────────
for (const dest of destinations) {
  items.push({
    type: "destination",
    slug: dest.slug,
    name: dest.name,
    nameAscii: toAscii(dest.name),
    url: `/destinations/${dest.slug}`,
    description: truncate(dest.tagline ?? dest.description),
    province: dest.provinceSlug,
    region: dest.region,
    tags: dest.tags ?? [],
    heroImage: dest.heroImage ?? undefined,
  })
}

// 3. Provinces ─────────────────────────────────────────────────────────────────
for (const prov of provinces) {
  items.push({
    type: "province",
    slug: prov.slug,
    name: prov.name,
    nameAscii: toAscii(prov.name),
    url: `/provinces/${prov.slug}`,
    description: truncate(prov.description),
    region: prov.region,
    tags: prov.tags ?? [],
    heroImage: prov.heroImage ?? undefined,
  })
}

// 4. Blog posts ────────────────────────────────────────────────────────────────
const blogDir = path.join(process.cwd(), "content/blog")

if (fs.existsSync(blogDir)) {
  for (const file of fs.readdirSync(blogDir).sort()) {
    if (!file.endsWith(".mdx")) continue
    const slug = file.replace(/\.mdx$/, "")
    const raw = fs.readFileSync(path.join(blogDir, file), "utf-8")
    const { data } = matter(raw)

    items.push({
      type: "blog",
      slug,
      name: data.title ?? slug,
      nameAscii: toAscii(data.title ?? slug),
      url: `/blog/${slug}`,
      description: truncate(data.description),
      tags: Array.isArray(data.tags) ? data.tags : [],
      heroImage: data.heroImage
        ? `https://res.cloudinary.com/dl5kqhspv/image/upload/w_200,h_130,c_fill,q_auto,f_auto/${data.heroImage}`
        : undefined,
      category: data.category ?? undefined,
    })
  }
}

// ─── Write output ─────────────────────────────────────────────────────────────

const outPath = path.join(process.cwd(), "public/search-index.json")

fs.writeFileSync(outPath, JSON.stringify(items))

const counts = {
  location: items.filter((i) => i.type === "location").length,
  destination: items.filter((i) => i.type === "destination").length,
  province: items.filter((i) => i.type === "province").length,
  blog: items.filter((i) => i.type === "blog").length,
}

console.log(`✓ search-index.json — ${items.length} total items`)
console.log(`  locations:    ${counts.location}`)
console.log(`  destinations: ${counts.destination}`)
console.log(`  provinces:    ${counts.province}`)
console.log(`  blog:         ${counts.blog}`)
console.log(`  output:       ${outPath}`)
