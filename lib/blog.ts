import fs from "fs"
import path from "path"
import matter from "gray-matter"
import readingTime from "reading-time"

const BLOG_DIR = path.join(process.cwd(), "content/blog")

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  category: string
  tags: string[]
  heroImage?: string
  author?: string
  readingTime: string
  content: string
}

export interface BlogPostMeta extends Omit<BlogPost, "content"> {}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return []

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"))

  return files
    .map((filename) => {
      const slug = filename.replace(".mdx", "")
      const filePath = path.join(BLOG_DIR, filename)
      const raw = fs.readFileSync(filePath, "utf-8")
      const { data } = matter(raw)
      const stats = readingTime(raw)

      return {
        slug,
        title: data.title ?? "",
        description: data.description ?? "",
        date: data.date ?? "",
        category: data.category ?? "general",
        tags: data.tags ?? [],
        heroImage: data.heroImage ?? null,
        author: data.author ?? "Solo Vietnam",
        readingTime: stats.text,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(raw)
  const stats = readingTime(raw)

  return {
    slug,
    title: data.title ?? "",
    description: data.description ?? "",
    date: data.date ?? "",
    category: data.category ?? "general",
    tags: data.tags ?? [],
    heroImage: data.heroImage ?? null,
    author: data.author ?? "Solo Vietnam",
    readingTime: stats.text,
    content,
  }
}

export function getAllCategories(): string[] {
  const posts = getAllPosts()
  const cats = new Set(posts.map((p) => p.category))
  return Array.from(cats)
}

export interface TocItem {
  id: string
  text: string
  level: number
}

export function extractToc(content: string): TocItem[] {
  const headingRegex = /^(#{1,3})\s+(.+)$/gm
  const items: TocItem[] = []
  let match

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length
    const text = match[2].replace(/[*_`]/g, "").trim()
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")

    items.push({ id, text, level })
  }

  return items
}
