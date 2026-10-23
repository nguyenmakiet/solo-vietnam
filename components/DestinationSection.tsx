// Layout wrapper for destination page sections (app/destinations/[slug]).
// Sections pick one of three patterns instead of setting their own widths:
//   full  - content spans the 1200px container (maps, itinerary cards)
//   grid  - title, then 2 or 3 equal columns, or "auto" (as many 260px+
//           columns as fit) for short, uniform lists
//   split - title on a rail (300px, 240px below 1280px) beside a 720px
//           content column (long or practical content)
//   pair  - title, then a wide and a narrow column (about 60/40) that each
//           keep their own height; one child takes the full width
// Below 1024px split, pair and full are a single column; grid keeps its
// list's mobile/tablet columns (3 -> 2 columns from 641px, 3 from 901px;
// auto -> as many 230px+ columns as fit; 2 -> one column).
// Styles: .ds* in app/destinations/[slug]/destination.css (scoped under .dp).

type Layout = "full" | "grid" | "split" | "pair"

type Props = {
  /** id of the section heading; the section is aria-labelledby it */
  id: string
  title: React.ReactNode
  layout: Layout
  /** grid only, default 2 */
  cols?: 2 | 3 | "auto"
  /** element for the content wrapper; "ol"/"ul" let a list be the grid itself */
  bodyAs?: "div" | "ol" | "ul"
  /** extra class on the content wrapper (the list's own styles) */
  bodyClassName?: string
  /** split only: extra content under the title on the rail */
  rail?: React.ReactNode
  /** split only: keep the rail in view while the content scrolls (default false) */
  stickyRail?: boolean
  className?: string
  children: React.ReactNode
}

export default function DestinationSection({
  id,
  title,
  layout,
  cols = 2,
  rail,
  stickyRail = false,
  className,
  bodyAs: Body = "div",
  bodyClassName,
  children,
}: Props) {
  const classes = [
    "dp-section",
    "ds",
    `ds--${layout}`,
    layout === "grid" ? `ds--cols-${cols}` : null,
    layout === "split" && stickyRail ? "ds--sticky" : null,
    className,
  ]
    .filter(Boolean)
    .join(" ")

  const heading = <h2 id={id} className="section-label">{title}</h2>
  const bodyClass = bodyClassName ? `ds-body ${bodyClassName}` : "ds-body"

  if (layout === "split") {
    return (
      <section className={classes} aria-labelledby={id}>
        <div className="ds-rail">
          {heading}
          {rail}
        </div>
        <Body className={bodyClass}>{children}</Body>
      </section>
    )
  }

  return (
    <section className={classes} aria-labelledby={id}>
      {heading}
      <Body className={bodyClass}>{children}</Body>
    </section>
  )
}
