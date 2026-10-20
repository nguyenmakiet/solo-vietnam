import type { Metadata } from "next"
import Link from "next/link"
import { getAllPosts, getAllCategories } from "@/lib/blog"
import CloudinaryImage from "@/components/CloudinaryImage"
import PhotoPlaceholder from "@/components/PhotoPlaceholder"
import "./blog.css"
import { OG_FALLBACK_IMAGE } from "@/lib/cloudinary"

export const metadata: Metadata = {
  title: "Blog | Solo in Vietnam",
  description: "Read travel guides, safety tips, and local insights for solo travelers exploring Vietnam.",
  openGraph: {
    description: "Read travel guides, safety tips, and local insights for solo travelers exploring Vietnam.",
    url: "https://www.soloinvietnam.com/blog",
    images: [{ url: OG_FALLBACK_IMAGE, width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://www.soloinvietnam.com/blog",
  },
}

const CATEGORY_LABELS: Record<string, string> = {
  scams: "Scams",
  safety: "Safety",
  transport: "Transport",
  food: "Food",
  accommodation: "Accommodation",
  general: "General",
  adventure: "Adventure",
  insights: "Insights",
  "history-culture": "History & Culture",
  "travel-planning": "Travel Planning",
  "travel-tips": "Travel Tips",
}
// Any category without a label above: "some-category" -> "Some Category"
const categoryLabel = (cat: string) =>
  CATEGORY_LABELS[cat] ?? cat.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")

export default async function BlogIndexPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const { category } = await searchParams
  const allPosts = getAllPosts()
  const categories = getAllCategories()

  const filtered = category
    ? allPosts.filter((p) => p.category === category)
    : allPosts

  const lead = !category ? filtered[0] : undefined
  const rest = lead ? filtered.slice(1) : filtered

  return (
    <div className="bp">
      <header className="bp-head">
        <div className="bp-container">
          <nav className="bp-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep" aria-hidden="true">/</span>
            <span className="current" aria-current="page">Blog</span>
          </nav>
          <p className="bp-kicker">Travel Guides &amp; Tips</p>
          <h1>The Solo Vietnam Blog</h1>
          <p className="bp-lead">Honest advice for independent travelers - scams to avoid, routes to ride, places to discover.</p>
        </div>
      </header>

      {/* Category filter */}
      <nav className="bp-filter" aria-label="Filter posts by category">
        <div className="bp-container bp-filter-inner">
          <Link href="/blog" className="bp-filter-link" aria-current={!category ? "page" : undefined}>
            All Posts
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/blog?category=${cat}`}
              className="bp-filter-link"
              aria-current={category === cat ? "page" : undefined}
            >
              {categoryLabel(cat)}
            </Link>
          ))}
        </div>
      </nav>

      <main className="bp-container bp-main">
        {filtered.length === 0 ? (
          <div className="bp-empty">No posts yet in this category.</div>
        ) : (
          <>
            {lead && <PostCard post={lead} featured />}
            {rest.length > 0 && (
              <div className="bp-grid">
                {rest.map((post) => <PostCard key={post.slug} post={post} />)}
              </div>
            )}
          </>
        )}
      </main>
    </div>
  )
}

function PostCard({ post, featured = false }: { post: ReturnType<typeof getAllPosts>[number]; featured?: boolean }) {
  return (
    <Link href={`/blog/${post.slug}`} className={`bp-card${featured ? " bp-card--featured" : ""}`}>
      <div className="bp-card-media">
        {post.heroImage ? (
          <CloudinaryImage
            src={`https://res.cloudinary.com/dl5kqhspv/image/upload/${post.heroImage}`}
            alt={post.title}
            fill
            sizes={featured ? "(min-width: 1024px) 720px, 100vw" : "(min-width: 1264px) 384px, (min-width: 900px) 30vw, (min-width: 640px) 50vw, 100vw"}
            priority={featured}
          />
        ) : (
          <PhotoPlaceholder />
        )}
      </div>
      <div className="bp-card-body">
        <p className="bp-card-meta">
          <span className="bp-card-cat">{categoryLabel(post.category)}</span>
          <span aria-hidden="true">·</span>
          <span>{post.readingTime}</span>
        </p>
        <h2 className="bp-card-title">{post.title}</h2>
        <p className="bp-card-desc">{post.description}</p>
        <p className="bp-card-foot">
          <span>
            {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </span>
          <span className="bp-card-read">Read more →</span>
        </p>
      </div>
    </Link>
  )
}
