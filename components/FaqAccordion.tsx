"use client"

import { useState } from "react"
import { InlineRichText } from "@/app/locations/[slug]/RichText"
import { stripInlineMarkdown } from "@/lib/rich-text"
import DestinationSection from "@/components/DestinationSection"

export interface FaqItem {
  question: string
  answer: string
}

interface FaqAccordionProps {
  faqs: FaqItem[]
  title?: string
  /**
   * "destination" (default): split section of a destination page.
   * "blog": a plain h2 and the list, inside the blog article column
   * (styles: .bp-faq in app/blog/blog.css).
   */
  variant?: "destination" | "blog"
}

export default function FaqAccordion({ faqs, title = "Frequently Asked Questions", variant = "destination" }: FaqAccordionProps) {
  const [openSet, setOpenSet] = useState<Set<number>>(new Set([0]))

  const toggle = (idx: number) => {
    setOpenSet(prev => {
      const next = new Set(prev)
      next.has(idx) ? next.delete(idx) : next.add(idx)
      return next
    })
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(({ question, answer }) => ({
      "@type": "Question",
      "name": question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": stripInlineMarkdown(answer),
      },
    })),
  }

  const list = (
    <div className="faq-list">
      {faqs.map((faq, idx) => {
        const isOpen = openSet.has(idx)
        return (
          <div key={idx} className={`faq-item${isOpen ? " open" : ""}`}>
            <button
              className="faq-question"
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
            >
              <span>{faq.question}</span>
              <svg
                className={`faq-chevron w-5 h-5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {isOpen && (
              <div className="faq-answer">
                <p><InlineRichText text={faq.answer} /></p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {variant === "blog" ? (
        // id matches the blog's heading slugs (page.tsx), so a TOC entry can link to it
        <section className="bp-faq" aria-labelledby="frequently-asked-questions">
          <h2 id="frequently-asked-questions">{title}</h2>
          {list}
        </section>
      ) : (
        <DestinationSection id="h-faq" title={title} layout="split">
          {list}
        </DestinationSection>
      )}
    </>
  )
}