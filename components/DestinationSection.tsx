// Layout wrapper for destination page sections (app/destinations/[slug]).
// Sections pick one of three patterns instead of setting their own widths:
//   full  - content spans the 1200px container (maps, itinerary cards)
//   grid  - title, then 2 or 3 equal columns (short, uniform lists)
//   split - title on a rail (300px, 240px below 1280px) beside a 720px
//           content column (long or practical content)
// Below 1024px every pattern is a single column, the same as before.
// Styles: .ds* in app/destinations/[slug]/destination.css (scoped under .dp).

type Layout = "full" | "grid" | "split"

type Props = {
  /** id of the section heading; the section is aria-labelledby it */
  id: string
  title: React.ReactNode
  layout: Layout
  /** grid only, default 2 */
  cols?: 2 | 3
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

  if (layout === "split") {
    return (
      <section className={classes} aria-labelledby={id}>
        <div className="ds-rail">
          {heading}
          {rail}
        </div>
        <div className="ds-body">{children}</div>
      </section>
    )
  }

  return (
    <section className={classes} aria-labelledby={id}>
      {heading}
      <div className="ds-body">{children}</div>
    </section>
  )
}
