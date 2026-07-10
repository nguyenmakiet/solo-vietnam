import React from "react"

function parseInline(text: string, keyOffset: number): React.ReactNode[] {
  const pattern = /\*\*(.+?)\*\*|\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g
  const nodes: React.ReactNode[] = []
  let last = 0
  let match: RegExpExecArray | null

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) {
      nodes.push(text.slice(last, match.index))
    }
    if (match[1] !== undefined) {
      nodes.push(<strong key={keyOffset + match.index}>{match[1]}</strong>)
    } else {
      nodes.push(
        <a
          key={keyOffset + match.index}
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

export default function RichText({ text }: { text: string }) {
  const paragraphs = text.split(/\n\n+/)
  return (
    <>
      {paragraphs.map((para, i) => (
        <p key={i} className={i > 0 ? "rt-para" : undefined}>
          {parseInline(para, i * 10000)}
        </p>
      ))}
    </>
  )
}
