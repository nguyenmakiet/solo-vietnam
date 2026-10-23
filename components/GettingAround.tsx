import type { RentalOption, RentalVehicle } from "@/data/destinations/types"
import "./getting-around.css"

const VEHICLE_LABELS: Record<RentalVehicle, string> = {
  motorbike: "Motorbike",
  scooter: "Scooter",
  bicycle: "Bicycle",
  car: "Car",
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

// tel: href: drop spaces, keep digits, + and * (shortcodes)
const telHref = (phone: string) => `tel:${phone.replace(/[^0-9+*]/g, "")}`

// "2026-09-08" -> "Sep 2026"
function checkedLabel(date: string) {
  const [y, m] = date.split("-").map(Number)
  return m >= 1 && m <= 12 ? `${MONTHS[m - 1]} ${y}` : date
}

export default function GettingAround({ rentals }: { rentals: RentalOption[] }) {
  return (
    <section className="dp-section ga" aria-labelledby="h-getting-around">
      <h2 id="h-getting-around" className="section-label">Getting around</h2>
      <div className="ga-list">
        {rentals.map((r) => (
          <div key={r.vehicle} className="ga-option">
            <p className="ga-vehicle">{VEHICLE_LABELS[r.vehicle]}</p>
            <p className="ga-price">{r.priceRange}</p>
            {r.notes && <p className="ga-notes">{r.notes}</p>}
            {r.shops && r.shops.length > 0 && (
              <>
                <ul className="ga-shops">
                  {r.shops.map((s) => (
                    <li key={s.name} className="ga-shop">
                      <p className="ga-shop-name">
                        {s.url ? (
                          <a href={s.url} target="_blank" rel="nofollow noopener">{s.name}</a>
                        ) : (
                          s.name
                        )}
                      </p>
                      {(s.address || s.area || s.phone) && (
                        <p className="ga-shop-meta">
                          {s.address ?? s.area}
                          {(s.address || s.area) && s.phone && <span className="ga-sep" aria-hidden="true">·</span>}
                          {s.phone && <a href={telHref(s.phone)}>{s.phone}</a>}
                        </p>
                      )}
                      {s.notes && <p className="ga-shop-notes">{s.notes}</p>}
                    </li>
                  ))}
                </ul>
                <p className="ga-disclaimer">Listed for reference - we&apos;re not affiliated. Compare reviews before you book.</p>
              </>
            )}
            <p className="ga-checked">Checked {checkedLabel(r.verifiedAt)}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
