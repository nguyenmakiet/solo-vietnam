//"use client" // needed for TOC active state — wrap in a layout instead if preferred

import { notFound } from "next/navigation"
import Link from "next/link"
import { MDXRemote } from "next-mdx-remote/rsc"
import { getPostBySlug, extractToc } from "@/lib/blog"
import BlogToc from "./BlogToc"
import "../blog.css"
import remarkGfm from "remark-gfm"

const CATEGORY_LABELS: Record<string, string> = {
  scams: "⚠️ Scams",
  safety: "🛡️ Safety",
  transport: "🚗 Transport",
  food: "🍜 Food",
  accommodation: "🏨 Accommodation",
  general: "📝 General",
}

// MDX custom components
const components = {
  // Warning box: <Warning>text</Warning>
  Warning: ({ children }: { children: React.ReactNode }) => (
    <div className="mdx-warning">{children}</div>
  ),
  // Tip box: <Tip>text</Tip>
  Tip: ({ children }: { children: React.ReactNode }) => (
    <div className="mdx-tip">{children}</div>
  ),
  // Scam card: <ScamCard title="..." risk="high|medium|low">text</ScamCard>
  ScamCard: ({ title, risk = "medium", children }: { title: string; risk?: string; children: React.ReactNode }) => (
    <div className={`mdx-scam-card risk-${risk}`}>
      <div className="scam-card-header">
        <span className="scam-card-icon">
          {risk === "high" ? "🔴" : risk === "medium" ? "🟡" : "🟢"}
        </span>
        <h3 className="scam-card-title">{title}</h3>
        <span className={`scam-card-badge risk-${risk}`}>
          {risk.charAt(0).toUpperCase() + risk.slice(1)} Risk
        </span>
      </div>
      <div className="scam-card-body">{children}</div>
    </div>
  ),
  // Cloudinary image
  CloudImage: ({ publicId, alt, caption }: { publicId: string; alt: string; caption?: string }) => (
    <figure className="mdx-figure">
      <img
        src={`https://res.cloudinary.com/dl5kqhspv/image/upload/w_900,q_auto,f_auto/${publicId}`}
        alt={alt}
        className="mdx-img"
      />
      {caption && <figcaption className="mdx-caption">{caption}</figcaption>}
    </figure>
  ),
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const toc = extractToc(post.content)

  return (
    <div className="blog-detail">

      {/* Breadcrumb */}
      <nav className="breadcrumb blog-breadcrumb">
        <Link href="/">Home</Link>
        <span className="sep">›</span>
        <Link href="/blog">Blog</Link>
        <span className="sep">›</span>
        <Link href={`/blog?category=${post.category}`}>
          {CATEGORY_LABELS[post.category] ?? post.category}
        </Link>
        <span className="sep">›</span>
        <span className="current">{post.title}</span>
      </nav>

      {/* Hero */}
      <header
        className="blog-hero"
        style={post.heroImage ? {
          backgroundImage: `url(https://res.cloudinary.com/dl5kqhspv/image/upload/w_1600,h_600,c_fill,q_auto,f_auto/${post.heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        } : {}}
      >
        {post.heroImage && (
          <div className="blog-hero-overlay" />
        )}
        <div className="blog-hero-inner">
          <div className="blog-hero-badge">
            {CATEGORY_LABELS[post.category] ?? post.category}
          </div>
          <h1>{post.title}</h1>
          <p className="blog-hero-desc">{post.description}</p>
          <div className="blog-hero-meta">
            <span>📅 {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
            <span>·</span>
            <span>⏱️ {post.readingTime}</span>
            <span>·</span>
            <span>✍️ {post.author}</span>
          </div>
        </div>
      </header>

      {/* Content + Sidebar */}
      <div className="blog-layout">

        {/* Main Content */}
        <article className="blog-content">
          <MDXRemote
          source={post.content}
          components={components}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
            }
          }}
        />
        </article>

        {/* Sidebar */}
        <aside className="blog-sidebar">

          {/* Table of Contents */}
          {toc.length > 0 && (
            <div className="sidebar-card toc-card">
              <div className="sidebar-card-label">Table of Contents</div>
              <BlogToc items={toc} />
            </div>
          )}

          {/* Related Posts placeholder */}
          <div className="sidebar-card">
            <div className="sidebar-card-label">Also Read</div>
            <div className="sidebar-related">
              <Link href="/blog?category=safety" className="sidebar-related-link">
                🛡️ Safety Tips for Solo Travelers
              </Link>
              <Link href="/blog?category=transport" className="sidebar-related-link">
                🚗 Getting Around Vietnam
              </Link>
            </div>
          </div>

        </aside>
      </div>

    </div>
  )
}
