import Link from "next/link"
import { getAllPosts, getAllCategories } from "@/lib/blog"
import "./blog.css"

const CATEGORY_LABELS: Record<string, string> = {
  scams: "⚠️ Scams",
  safety: "🛡️ Safety",
  transport: "🚗 Transport",
  food: "🍜 Food",
  accommodation: "🏨 Accommodation",
  general: "📝 General",
}

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

  return (
    <div className="blog-index">

      {/* Hero */}
      <header className="bi-hero">
        <div className="bi-hero-inner">
          <div className="bi-hero-badge">✍️ Travel Guides & Tips</div>
          <h1>The Solo Vietnam Blog</h1>
          <p>Honest advice for independent travelers — scams to avoid, routes to ride, places to discover.</p>
        </div>
      </header>

      {/* Category Filter */}
      <div className="bi-filter-wrap">
        <div className="bi-filter-inner">
          <Link
            href="/blog"
            className={`bi-cat-btn ${!category ? "active" : ""}`}
          >
            All Posts
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/blog?category=${cat}`}
              className={`bi-cat-btn ${category === cat ? "active" : ""}`}
            >
              {CATEGORY_LABELS[cat] ?? cat}
            </Link>
          ))}
        </div>
      </div>

      {/* Posts Grid */}
      <main className="bi-main">
        {filtered.length === 0 ? (
          <div className="bi-empty">No posts yet in this category.</div>
        ) : (
          <div className="bi-grid">
            {filtered.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="bi-card">
                {post.heroImage && (
                  <div className="bi-card-img-wrap">
                    <img
                      src={`https://res.cloudinary.com/dl5kqhspv/image/upload/w_800,h_450,c_fill,q_auto,f_auto/${post.heroImage}`}
                      alt={post.title}
                      className="bi-card-img"
                    />
                  </div>
                )}
                <div className="bi-card-body">
                  <div className="bi-card-meta">
                    <span className="bi-card-cat">
                      {CATEGORY_LABELS[post.category] ?? post.category}
                    </span>
                    <span className="bi-card-time">{post.readingTime}</span>
                  </div>
                  <h2 className="bi-card-title">{post.title}</h2>
                  <p className="bi-card-desc">{post.description}</p>
                  <div className="bi-card-footer">
                    <span className="bi-card-date">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span className="bi-card-read">Read more →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>

    </div>
  )
}
