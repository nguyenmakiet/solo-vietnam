// Last-resort share image (OG_LAST_RESORT_IMAGE in lib/cloudinary.ts) for a
// page with no image of its own at all: text on the site's paper and
// teal-ink colours. Pages with a site-level image keep OG_FALLBACK_IMAGE.
// Rendered once at build time by Next.js (no Cloudinary upload or transformation).
import { ImageResponse } from "next/og"

export const dynamic = "force-static"

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#f6f3ec",
          color: "#1b2427",
          borderBottom: "24px solid #12353c",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, fontWeight: 600, letterSpacing: 6, textTransform: "uppercase", color: "#2b6a6f" }}>
          soloinvietnam.com
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 92, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>Solo in Vietnam</div>
          <div style={{ display: "flex", marginTop: 24, fontSize: 38, color: "#5b676a" }}>
            Travel guides for solo travelers - North, Central and South
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
