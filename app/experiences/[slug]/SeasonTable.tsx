// "Best time by region" for an experience page. Every value is computed from
// the released bestMonths of the listed locations (lib/experience-page.ts);
// nothing here is hand-written per experience.
import Link from "next/link"
import { formatMonths } from "@/data/best-months-release"
import type { ExperiencePage, MonthRow } from "@/lib/experience-page"

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const MONTHS_FULL = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

function MonthHead({ first }: { first: string }) {
  return (
    <thead>
      <tr>
        <th scope="col">{first}</th>
        {MONTHS.map((m, i) => (
          <th key={m} scope="col" abbr={MONTHS_FULL[i]}>{m}</th>
        ))}
      </tr>
    </thead>
  )
}

// One row per location: a filled cell for each month it is marked for
function LocationMonthsTable({ rows, caption }: { rows: MonthRow[]; caption: string }) {
  return (
    <div className="gp-season-scroll">
      <table className="gp-season gp-season--locations">
        <caption className="gp-sr">{caption}</caption>
        <MonthHead first="Place" />
        <tbody>
          {rows.map((row) => (
            <tr key={row.label}>
              <th scope="row">
                {row.href ? <Link href={row.href}>{row.label}</Link> : row.label}
                <span className="gp-season-sub">{formatMonths(row.months)}</span>
              </th>
              {MONTHS.map((m, i) => {
                const on = row.months.includes(i + 1)
                return (
                  <td key={m} className={on ? "is-on" : undefined}>
                    <span className="gp-sr">{on ? "Yes" : "No"}</span>
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function SeasonTable({ season, label }: { season: ExperiencePage["season"]; label: string }) {
  if (season.rows.length === 0) return null
  return (
    <>
      <p className="gp-section-intro">
        Each cell counts the places in this list marked as worth visiting in that month (the best months on each location page).
        Darker means more of the region&apos;s places agree.
        {season.undated > 0 && ` ${season.undated} ${season.undated === 1 ? "place has" : "places have"} no month data yet and ${season.undated === 1 ? "is" : "are"} not counted.`}
      </p>
      <div className="gp-season-scroll">
        <table className="gp-season">
          <caption className="gp-sr">{label}: number of places marked good per month, by region</caption>
          <MonthHead first="Region" />
          <tbody>
            {season.rows.map((row) => (
              <tr key={row.region}>
                <th scope="row">
                  <a href={`#region-${row.region}`}>{row.label}</a>
                  <span className="gp-season-sub">{row.dated} {row.dated === 1 ? "place" : "places"}</span>
                </th>
                {row.counts.map((c, i) => (
                  <td
                    key={i}
                    style={{ "--f": row.dated ? c / row.dated : 0 } as React.CSSProperties}
                    title={`${MONTHS_FULL[i]}: ${c} of ${row.dated}`}
                  >
                    {c > 0 ? c : <span aria-hidden="true">-</span>}
                    {c === 0 && <span className="gp-sr">0</span>}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Destinations whose places share no best month: one value would be wrong */}
      {season.split.map((d) => (
        <div key={d.slug} className="gp-season-split">
          <h3 className="gp-season-title">
            <Link href={`/destinations/${d.slug}`}>{d.name}</Link>: seasons differ by place
          </h3>
          <p className="gp-section-intro">
            The {d.rows.length} places listed in {d.name} share no best month, so they are shown one by one instead of as one value.
          </p>
          <LocationMonthsTable rows={d.rows} caption={`${d.name}: best months per place`} />
        </div>
      ))}

      {season.rows.map((row) => (
        <details key={row.region} className="gp-season-detail">
          <summary>Best months per place - {row.label} ({row.dated})</summary>
          <LocationMonthsTable rows={row.locations} caption={`${row.label}: best months per place`} />
        </details>
      ))}
    </>
  )
}
