// Location card for the guide listing pages (province and experience pages).
// Same card language as the destination "Places to visit" grid; styles live
// in components/guide-pages.css (.gp-card*), so render it inside a .gp root.
import Link from "next/link"
import CloudinaryImage from "@/components/CloudinaryImage"
import PhotoPlaceholder from "@/components/PhotoPlaceholder"
import type { Location } from "@/data/location"
import { typeDisplayLabel } from "@/data/taxonomy/types"
import { formatMonths, isBestMonthsReleased } from "@/data/best-months-release"
import { stripInlineMarkdown } from "@/lib/rich-text"
import { dotClass } from "@/lib/category-dot"

const STATUS_LABEL: Partial<Record<NonNullable<Location["status"]>, { text: string; soft?: boolean }>> = {
  seasonal: { text: "Seasonal", soft: true },
  "partially-closed": { text: "Partially Closed", soft: true },
  "temporarily-closed": { text: "Temporarily Closed" },
  "seasonally-closed": { text: "Seasonally Closed" },
  closed: { text: "Closed" },
}

function realImage(heroImage?: string): string | null {
  if (!heroImage || heroImage.includes("placeholder")) return null
  return heroImage
}

export default function LocationCard({ location, sub }: { location: Location; sub?: string }) {
  const img = realImage(location.heroImage)
  const type = Array.isArray(location.type) ? location.type[0] : location.type
  const status = location.status ? STATUS_LABEL[location.status] : undefined
  const best = isBestMonthsReleased(location.slug) && location.bestMonths?.length
    ? formatMonths(location.bestMonths)
    : stripInlineMarkdown(location.bestSeasonNote ?? location.bestTimeOfDay ?? "").split("(")[0].trim()

  return (
    <Link href={`/locations/${location.slug}`} className="gp-card">
      <div className="gp-card-media">
        {img ? (
          <CloudinaryImage
            src={img}
            alt={location.name}
            fill
            sizes="(min-width: 1264px) 384px, (min-width: 900px) 30vw, (min-width: 640px) 50vw, 100vw"
          />
        ) : (
          <PhotoPlaceholder />
        )}
      </div>
      <div className="gp-card-body">
        <div className="gp-card-meta">
          <span className="ui-dot-label">
            <span className={dotClass(type)} aria-hidden="true" />
            {typeDisplayLabel(type)}
          </span>
          {status && <span className={`gp-status${status.soft ? " gp-status--soft" : ""}`}>{status.text}</span>}
        </div>
        <h3 className="gp-card-name">{location.name}</h3>
        {sub && <p className="gp-card-sub">{sub}</p>}
        {location.seoDescription && <p className="gp-card-desc">{location.seoDescription}</p>}
      </div>
      <div className="gp-card-foot">
        <span className="gp-card-best">{best}</span>
        <span className="gp-card-arrow" aria-hidden="true">→</span>
      </div>
    </Link>
  )
}
