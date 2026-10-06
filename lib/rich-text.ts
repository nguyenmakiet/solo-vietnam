// Inline markdown subset for RichTextString fields (see data/location.ts).
// Rendered by app/locations/[slug]/RichText.tsx; checked by scripts/audit-links.ts.
//   **bold**             - may wrap a link: **[label](url)**
//   [label](/path)       - internal link (same tab)
//   [label](https://...) - external link (new tab)
export const INLINE_PATTERN = /\*\*(.+?)\*\*|\[([^\]]+)\]\((\/[^)\s]*|https?:\/\/[^)\s]+)\)/g

/** Plain-text form of a RichTextString, for cards, meta tags and other non-rich contexts. */
export function stripInlineMarkdown(text: string): string {
  return text.replace(new RegExp(INLINE_PATTERN.source, "g"), (_, bold: string | undefined, label: string | undefined) =>
    bold !== undefined ? stripInlineMarkdown(bold) : label!
  )
}

// ── Readability: split long paragraphs ───────────────────────────────────────

const ABBREVIATIONS = new Set([
  "approx", "st", "mt", "dr", "mr", "mrs", "ms", "no", "vs", "etc", "e.g", "i.e", "ca", "jan", "feb", "mar",
  "apr", "jun", "jul", "aug", "sep", "sept", "oct", "nov", "dec",
])

/** Splits text into sentences at . ! ? followed by whitespace and an uppercase letter, digit or opening quote. */
export function splitSentences(text: string): string[] {
  const sentences: string[] = []
  const boundary = /([.!?])(["'”’)]*)\s+(?=["'“‘(]?[\p{Lu}\d])/gu
  let start = 0
  let m: RegExpExecArray | null
  while ((m = boundary.exec(text)) !== null) {
    const end = m.index + m[1].length + m[2].length
    if (m[1] === ".") {
      const word = text.slice(start, m.index).split(/\s+/).pop()?.toLowerCase() ?? ""
      // "approx." / "St." / "e.g." or a lone initial ("Hồ Chí Minh T. ...") is not a sentence end
      if (ABBREVIATIONS.has(word.replace(/^[("'“‘]+/, "")) || /^\p{L}$/u.test(word)) continue
    }
    sentences.push(text.slice(start, end))
    start = boundary.lastIndex
  }
  sentences.push(text.slice(start))
  return sentences.filter((s) => s.trim().length > 0)
}

const countWords = (s: string) => s.trim().split(/\s+/).length
// A chunk must not end inside **bold** or a [label](url) link.
const isBalanced = (s: string) =>
  (s.match(/\*\*/g)?.length ?? 0) % 2 === 0 && (s.match(/\[/g)?.length ?? 0) === (s.match(/\]/g)?.length ?? 0)

/**
 * Display-only safety net for legacy content written as one long block:
 * a paragraph over `maxWords` is split at sentence boundaries into chunks of
 * roughly `targetWords`. Paragraphs the author already broke with a blank
 * line are left alone when short enough. Content data is never changed.
 */
export function splitLongParagraph(text: string, maxWords = 90, targetWords = 60): string[] {
  if (countWords(text) <= maxWords) return [text]
  const chunks: string[] = []
  let current = ""
  for (const sentence of splitSentences(text)) {
    current = current ? `${current} ${sentence}` : sentence
    if (countWords(current) >= targetWords && isBalanced(current)) {
      chunks.push(current)
      current = ""
    }
  }
  if (current) {
    // Fold a short tail into the previous chunk instead of leaving a stub paragraph
    if (chunks.length > 0 && countWords(current) < targetWords / 2) chunks[chunks.length - 1] += ` ${current}`
    else chunks.push(current)
  }
  return chunks
}
