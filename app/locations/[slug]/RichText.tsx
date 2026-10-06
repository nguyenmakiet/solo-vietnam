import React from "react"
import Link from "next/link"

// Syntax: see lib/rich-text.ts
import { INLINE_PATTERN } from "@/lib/rich-text"

function parseInline(text: string, keyPrefix: string): React.ReactNode[] {
  const pattern = new RegExp(INLINE_PATTERN.source, "g")
  const nodes: React.ReactNode[] = []
  let last = 0
  let match: RegExpExecArray | null

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) {
      nodes.push(text.slice(last, match.index))
    }
    const key = `${keyPrefix}-${match.index}`
    if (match[1] !== undefined) {
      nodes.push(<strong key={key}>{parseInline(match[1], key)}</strong>)
    } else if (match[3].startsWith("/")) {
      nodes.push(
        <Link key={key} href={match[3]} className="rt-link">
          {match[2]}
        </Link>
      )
    } else {
      nodes.push(
        <a
          key={key}
          href={match[3]}
          target="_blank"
          rel="noopener noreferrer"
          className="rt-link"
        >
          {match[2]}
        </a>
      )
    }
    last = pattern.lastIndex
  }

  if (last < text.length) {
    nodes.push(text.slice(last))
  }

  return nodes
}

export function InlineRichText({ text }: { text: string }) {
  return <>{parseInline(text, "i")}</>
}

export default function RichText({ text }: { text: string }) {
  const paragraphs = text.split(/\n\n+/)
  return (
    <>
      {paragraphs.map((para, i) => (
        <p key={i} className={i > 0 ? "rt-para" : undefined}>
          {parseInline(para, `p${i}`)}
        </p>
      ))}
    </>
  )
}
