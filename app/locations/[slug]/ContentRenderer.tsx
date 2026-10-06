import { Location, ContentBlock, RichSection } from "@/data/location"
import RichText, { InlineRichText } from "./RichText"

// ── Block renderers ──────────────────────────────────────────────────────────

function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "heading":
      return (
        // block.icon is not rendered: it was hidden in CSS and would pollute the heading text
        <h3 className="rc-h">
          <span className="rc-h-text">{block.text}</span>
        </h3>
      )

    case "paragraph":
      return <RichText text={block.text} />

    case "bullets":
      return (
        <ul className="rc-ul">
          {block.items.map((item, i) => (
            <li key={i}><InlineRichText text={item} /></li>
          ))}
        </ul>
      )

    case "table":
      return (
        <div className="rc-table-wrap">
          <table className="rc-table">
            <thead>
              <tr>{block.headers.map(h => <th key={h}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j}><InlineRichText text={cell} /></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )

    case "callout":
      return (
        <div className={`rc-callout rc-callout--${block.variant}`}>
          {block.title && <div className="rc-callout-title">{block.title}</div>}
          <p><InlineRichText text={block.text} /></p>
        </div>
      )

    case "quickfacts":
      return (
        <div className="qf-grid">
          {block.facts.map((f, i) => (
            <div key={i} className="qf-card">
              {f.icon && <span className="qf-icon" aria-hidden="true">{f.icon}</span>}
              <div className="qf-label">{f.label}</div>
              <div className="qf-value">{f.value}</div>
            </div>
          ))}
        </div>
      )

    case "divider":
      return <hr className="rc-div" />
  }
}

// ── Single rich section ──────────────────────────────────────────────────────
// Heading outline: h1 location name (page.tsx) > h2 section title > h3 rich
// "heading" blocks. The uppercase section label is a decorative eyebrow, not a heading.

function RichSectionCard({ section }: { section: RichSection }) {
  return (
    <section id={section.id} className="section-anchor">
      <p className="section-label">{section.label}</p>
      <div className="content-section">
        <h2 className="content-title">{section.title}</h2>
        <div className="content-body">
          {section.blocks.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Legacy fallback (existing string fields) ─────────────────────────────────

function LegacyContent({ location }: { location: Location }) {
  const c = location.content
  return (
    <>
      {c.intro && (
        <section id="about" className="section-anchor">
          <p className="section-label">About This Place</p>
          <div className="content-section">
            <h2 className="content-title">What Makes {location.name} Special</h2>
            <div className="content-body"><RichText text={c.intro} /></div>
          </div>
        </section>
      )}
      {c.howToGetThere && (
        <section id="how-to-get-there" className="section-anchor">
          <p className="section-label">How to Get There</p>
          <div className="content-section">
            <h2 className="content-title">How to Get to {location.name}</h2>
            <div className="content-body"><RichText text={c.howToGetThere} /></div>
          </div>
        </section>
      )}
      {c.whatToExpect && (
        <section id="what-to-expect" className="section-anchor">
          <p className="section-label">What to Expect</p>
          <div className="content-section">
            <h2 className="content-title">What to Expect at {location.name}</h2>
            <div className="content-body"><RichText text={c.whatToExpect} /></div>
          </div>
        </section>
      )}
      {c.travelTips && (
        <section id="travel-tips" className="section-anchor">
          <p className="section-label">Travel Tips</p>
          <div className="content-section">
            <h2 className="content-title">Travel Tips for {location.name}</h2>
            <div className="content-body"><RichText text={c.travelTips} /></div>
          </div>
        </section>
      )}
    </>
  )
}

// ── Main export ──────────────────────────────────────────────────────────────

export default function ContentRenderer({ location }: { location: Location }) {
  if (location.content.richSections && location.content.richSections.length > 0) {
    return (
      <>
        {location.content.richSections.map(section => (
          <RichSectionCard key={section.id} section={section} />
        ))}
      </>
    )
  }
  return <LegacyContent location={location} />
}
