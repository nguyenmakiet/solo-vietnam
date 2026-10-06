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
