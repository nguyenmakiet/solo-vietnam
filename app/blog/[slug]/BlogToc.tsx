"use client"

import { useEffect, useState } from "react"
import type { TocItem } from "@/lib/blog"

interface Props {
  items: TocItem[]
}

export default function BlogToc({ items }: Props) {
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "0px 0px -70% 0px", threshold: 0 }
    )

    items.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [items])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <nav className="toc-nav">
      {items.map((item) => (
        <button
          key={item.id}
          className={`toc-item level-${item.level} ${activeId === item.id ? "active" : ""}`}
          onClick={() => scrollTo(item.id)}
        >
          {item.text}
        </button>
      ))}
    </nav>
  )
}
