import type { EmergencyContact, EmergencyContactType } from "@/data/destinations/types"
import { NATIONAL_EMERGENCY, NATIONAL_EMERGENCY_SOURCE } from "@/data/emergency"
import "./emergency-contacts.css"

const GROUPS: { type: EmergencyContactType; label: string }[] = [
  { type: "medical", label: "Medical" },
  { type: "scam-report", label: "Report scams or overcharging" },
  { type: "tourist-hotline", label: "Tourist help" },
  { type: "police", label: "Police" },
  { type: "other", label: "Other" },
]

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

// tel: href: drop spaces, keep digits, + and * (shortcodes)
const telHref = (phone: string) => `tel:${phone.replace(/[^0-9+*]/g, "")}`

// "2023-12-19" -> "Dec 2023"
function checkedLabel(date: string) {
  const [y, m] = date.split("-").map(Number)
  return m >= 1 && m <= 12 ? `${MONTHS[m - 1]} ${y}` : date
}

export default function EmergencyContacts({ contacts = [] }: { contacts?: EmergencyContact[] }) {
  return (
    <section className="dp-section ec" aria-labelledby="h-emergency">
      <h2 id="h-emergency" className="section-label">Emergency &amp; help</h2>

      <div className="ec-national">
        <ul className="ec-national-list">
          {NATIONAL_EMERGENCY.map((n) => (
            <li key={n.phone}>
              <a href={telHref(n.phone)} className="ec-national-num">{n.phone}</a>
              <span className="ec-national-label">{n.label}</span>
            </li>
          ))}
        </ul>
        <p className="ec-national-note">
          Free from any phone. {NATIONAL_EMERGENCY[0].notes}.{" "}
          <a href={NATIONAL_EMERGENCY_SOURCE} target="_blank" rel="noopener noreferrer">Source</a>
        </p>
      </div>

      {GROUPS.map(({ type, label }) => {
        const group = contacts.filter((c) => c.type === type)
        if (!group.length) return null
        return (
          <div key={type} className="ec-group">
            <h3 className="ec-group-label">{label}</h3>
            <ul className="ec-list">
              {group.map((c) => (
                <li key={`${c.name}-${c.phone}`} className="ec-contact">
                  <p className="ec-name">{c.name}</p>
                  <p className="ec-phones">
                    <a href={telHref(c.phone)}>{c.phone}</a>
                    {c.altPhones?.map((p) => (
                      <span key={p}>
                        <span className="ec-sep" aria-hidden="true">·</span>
                        <a href={telHref(p)}>{p}</a>
                      </span>
                    ))}
                  </p>
                  {(c.hours || (c.languages && c.languages.length > 0)) && (
                    <p className="ec-meta">
                      {c.hours}
                      {c.hours && c.languages && c.languages.length > 0 && <span className="ec-sep" aria-hidden="true">·</span>}
                      {c.languages && c.languages.length > 0 && c.languages.join(", ")}
                    </p>
                  )}
                  {c.address && <p className="ec-meta">{c.address}</p>}
                  {c.notes && <p className="ec-notes">{c.notes}</p>}
                  <p className="ec-source">
                    <a href={c.sourceUrl} target="_blank" rel="noopener noreferrer">Source, checked {checkedLabel(c.verifiedAt)}</a>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )
      })}
    </section>
  )
}
