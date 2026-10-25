//"use client" // needed for TOC active state - wrap in a layout instead if preferred

import { notFound } from "next/navigation"
import Link from "next/link"
import { MDXRemote } from "next-mdx-remote/rsc"
import { getPostBySlug, extractToc, getAllPosts } from "@/lib/blog"
import { heroUrl, ogImageUrl, ogPaddedUrl } from "@/lib/cloudinary"
import BlogToc from "./BlogToc"
import CloudImage from "@/components/CloudImage"
import CloudinaryImage from "@/components/CloudinaryImage"
import CloudVideo from "@/components/CloudVideo"
import VietnamWarThreePlacesMap from "@/components/VietnamWarThreePlacesMap"
import HighestPeaksMap from "@/components/HighestPeaksMap"
import "../blog.css"
import remarkGfm from "remark-gfm"

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
const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
// MDX custom components
const components = {
  // Warning box: <Warning>text</Warning>
  Warning: ({ children }: { children: React.ReactNode }) => (
    <aside className="mdx-warning">
      <p className="mdx-callout-label">Warning</p>
      {children}
    </aside>
  ),
  // Tip box: <Tip>text</Tip>
  Tip: ({ children }: { children: React.ReactNode }) => (
    <aside className="mdx-tip">
      <p className="mdx-callout-label">Tip</p>
      {children}
    </aside>
  ),
  // Scam card: <ScamCard title="..." risk="high|medium|low">text</ScamCard>
  ScamCard: ({ title, risk = "medium", children }: { title: string; risk?: string; children: React.ReactNode }) => (
    <div className={`mdx-scam-card risk-${risk}`}>
      <div className="scam-card-header">
        <h3 className="scam-card-title">{title}</h3>
        <span className={`scam-card-badge risk-${risk}`}>
          {risk.charAt(0).toUpperCase() + risk.slice(1)} Risk
        </span>
      </div>
      <div className="scam-card-body">{children}</div>
    </div>
  ),
  CloudImage,
  CloudVideo,
  // Editorial map: <VietnamWarThreePlacesMap />
  VietnamWarThreePlacesMap,
  // Leaflet map of the 10 highest peaks: <HighestPeaksMap />
  HighestPeaksMap,
  // The page title is the only h1: a "# heading" inside a post renders as a section h2
  h1: ({ children }: { children: React.ReactNode }) => {
    const text = typeof children === "string" ? children : ""
    return <h2 id={slugify(text)}>{children}</h2>
  },
  h2: ({ children }: { children: React.ReactNode }) => {
    const text = typeof children === "string" ? children : ""
    const id = slugify(text)
    return <h2 id={id}>{children}</h2>
  },
  h3: ({ children }: { children: React.ReactNode }) => {
    const text = typeof children === "string" ? children : ""
    const id = slugify(text)
    return <h3 id={id}>{children}</h3>
  },
  table: ({ children }: { children: React.ReactNode }) => (
    <div className="bp-table-wrap"><table>{children}</table></div>
  ),
  a: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  ),
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      description: "Travel insights and practical tips for solo travelers in Vietnam.",
      alternates: { canonical: `https://www.soloinvietnam.com/blog/${slug}` },
    }
  }

  let description = post.description?.trim() || ""

  if (!description) {
    const stripped = post.content
      .replace(/#{1,6}\s+/g, "")
      .replace(/[*_`~]/g, "")
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/\n+/g, " ")
      .trim()

    description = stripped.length <= 155
      ? stripped
      : stripped.slice(0, 155).replace(/\s+\S*$/, "")
  }

  description = description || "Travel insights and practical tips for solo travelers in Vietnam."

  // Share image: ogImage (whole picture, padded) when set, else the hero photo
  const shareImage = post.ogImage
    ? ogPaddedUrl(post.ogImage)
    : post.heroImage ? ogImageUrl(heroUrl(post.heroImage)) : null

  return {
    title: post.title,
    description,
    openGraph: {
      title: post.title,
      description,
      url: `https://www.soloinvietnam.com/blog/${slug}`,
      images: shareImage ? [{ url: shareImage, width: 1200, height: 630 }] : [],
    },
    ...(shareImage && {
      twitter: { card: "summary_large_image", title: post.title, description, images: [shareImage] },
    }),
    alternates: { canonical: `https://www.soloinvietnam.com/blog/${slug}` },
  }
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
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

  const catLabel = categoryLabel(post.category)

  return (
    <div className="bp">
      <header className="bp-head">
        <div className="bp-container">
          <nav className="bp-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep" aria-hidden="true">/</span>
            <Link href="/blog">Blog</Link>
            <span className="sep" aria-hidden="true">/</span>
            <Link href={`/blog?category=${post.category}`}>{catLabel}</Link>
          </nav>
          <p className="bp-kicker">{catLabel}</p>
          <h1 className="bp-title">{post.title}</h1>
          {post.description && <p className="bp-lead">{post.description}</p>}
          <p className="bp-meta">
            <span>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
            <span aria-hidden="true">·</span>
            <span>{post.readingTime}</span>
            {post.author && (
              <>
                <span aria-hidden="true">·</span>
                <span>{post.author}</span>
              </>
            )}
          </p>
        </div>
      </header>

      {post.heroImage && (
        <div className="bp-hero-media">
          <CloudinaryImage
            src={`https://res.cloudinary.com/dl5kqhspv/image/upload/${post.heroImage}`}
            alt={post.title}
            fill
            sizes="(min-width: 1200px) 1200px, 100vw"
            priority
          />
        </div>
      )}

      <div className="bp-container bp-layout">
        <article className="bp-prose">
          {/* Contents for phones and tablets; desktop has the sidebar */}
          {toc.length > 0 && (
            <details className="bp-toc-inline">
              <summary>Contents</summary>
              <BlogToc items={toc} />
            </details>
          )}
          <MDXRemote
            source={post.content}
            components={components}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
              },
            }}
          />
        </article>

        <aside className="bp-sidebar" aria-label="Article navigation">
          {toc.length > 0 && (
            <div className="bp-side-block">
              <p className="bp-side-label">Contents</p>
              <BlogToc items={toc} />
            </div>
          )}
          <div className="bp-side-block">
            <p className="bp-side-label">Also Read</p>
            <Link href="/blog?category=safety" className="bp-side-link">Safety Tips for Solo Travelers</Link>
            <Link href="/blog?category=transport" className="bp-side-link">Getting Around Vietnam</Link>
          </div>
        </aside>
      </div>

      <section className="bp-cta" aria-label="More from the blog">
        <div className="bp-container bp-cta-inner">
          <div>
            <p className="bp-cta-label">Keep reading</p>
            <p className="bp-cta-title">The Solo Vietnam Blog</p>
          </div>
          <Link href="/blog" className="ui-btn">All posts →</Link>
        </div>
      </section>
    </div>
  )
}
