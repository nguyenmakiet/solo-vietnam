// Line icons for the 20 page-backed experiences (/experiences).
// One drawing style: 24px grid, 1.6 stroke, round caps and joins, no fill,
// colour from currentColor. Decorative only (aria-hidden) - the label sits next to it.
import type { ExperienceSlug } from "@/data/experiences"

const PATHS: Record<ExperienceSlug, React.ReactNode> = {
  beaches: (
    <>
      <path d="M3.5 12a8.5 8.5 0 0 1 17 0z" />
      <path d="M9 12c0-4 1.2-7 3-8.5 1.8 1.5 3 4.5 3 8.5" />
      <path d="M12 12v8" />
      <path d="M3 20.5h18" />
    </>
  ),
  trekking: (
    <>
      <path d="M2.5 20l6.5-11 3.8 6 2.7-3.8L21.5 20z" />
      <path d="M9 9V3.5l4 1.6-4 1.6" />
    </>
  ),
  camping: (
    <>
      <path d="M12 4.5L3.5 20" />
      <path d="M12 4.5L20.5 20" />
      <path d="M12 12.5L8.5 20" />
      <path d="M12 12.5l3.5 7.5" />
      <path d="M2 20h20" />
      <path d="M10.5 3l1.5 1.5L13.5 3" />
    </>
  ),
  caving: (
    <>
      <path d="M2.5 20C2.5 11.5 6.5 5 12 5s9.5 6.5 9.5 15" />
      <path d="M7.5 20c0-4.5 2-7.5 4.5-7.5s4.5 3 4.5 7.5" />
      <path d="M1.5 20h21" />
    </>
  ),
  snorkeling: (
    <>
      <path d="M2.5 12c2.8-3.6 6.6-4.8 10.5-3.2 1.6.7 2.8 1.8 3.7 3.2-.9 1.4-2.1 2.5-3.7 3.2-3.9 1.6-7.7.4-10.5-3.2z" />
      <path d="M16.7 12l4.3-3.2v6.4z" />
      <circle cx="6.8" cy="11.4" r=".6" fill="currentColor" stroke="none" />
      <path d="M10 9.4v5.2" />
      <circle cx="14.5" cy="4.5" r="1" />
      <circle cx="17.5" cy="3" r=".6" />
    </>
  ),
  kayaking: (
    <>
      <path d="M2 15.5c4.5 2.4 15.5 2.4 20 0-4.5-2.4-15.5-2.4-20 0z" />
      <path d="M6.5 4.5l11 15" />
      <path d="M4.6 4.7l2.6-2 1.8 2.6-2.6 2z" />
      <path d="M16.9 18.3l2.6-2 1.4 2.4-2.6 2z" />
    </>
  ),
  food: (
    <>
      <path d="M3 12h18c0 4.7-4 8.5-9 8.5S3 16.7 3 12z" />
      <path d="M8.5 20.5h7" />
      <path d="M13 12l3.5-9" />
      <path d="M16 12l4-8" />
      <path d="M8 9c0-1 .8-1.4.8-2.4S8 5.1 8 4.2" />
    </>
  ),
  culture: (
    <>
      <path d="M12 2v3" />
      <path d="M9 5h6" />
      <path d="M9 5C5.5 7.5 5.5 15.5 9 18h6c3.5-2.5 3.5-10.5 0-13" />
      <path d="M12 5v13" />
      <path d="M9 18h6" />
      <path d="M12 18v3.5M10.5 21.5h3" />
    </>
  ),
  history: (
    <>
      <path d="M2 8.5c4-.6 7.2-2.4 10-5 2.8 2.6 6 4.4 10 5" />
      <path d="M4 8.2h16" />
      <path d="M6 11.5h12" />
      <path d="M6.5 8.2V20M17.5 8.2V20" />
      <path d="M10 20v-4.5a2 2 0 0 1 4 0V20" />
      <path d="M3 20.5h18" />
    </>
  ),
  photography: (
    <>
      <rect x="2.5" y="7" width="19" height="13" rx="2" />
      <path d="M8 7l1.5-2.8h5L16 7" />
      <circle cx="12" cy="13.5" r="3.6" />
      <path d="M18 10h.01" />
    </>
  ),
  markets: (
    <>
      <path d="M3 9.5L5 4h14l2 5.5" />
      <path d="M3 9.5c0 1.4 1.3 2.5 3 2.5s3-1.1 3-2.5c0 1.4 1.3 2.5 3 2.5s3-1.1 3-2.5c0 1.4 1.3 2.5 3 2.5s3-1.1 3-2.5" />
      <path d="M4.5 12v8.5h15V12" />
      <path d="M9.5 20.5v-5h5v5" />
    </>
  ),
  nightlife: (
    <>
      <path d="M2.5 6h12L8.5 13z" />
      <path d="M8.5 13v7" />
      <path d="M5 20.5h7" />
      <path d="M11.5 6l2.2-2.5" />
      <path d="M21.5 8.4a3.4 3.4 0 1 1-3.6-5 2.7 2.7 0 0 0 3.6 5z" />
    </>
  ),
  "walking-tours": (
    <>
      <path d="M7.5 2.5c1.7 0 3 2.1 3 5s-1.3 5-3 5-3-2.1-3-5 1.3-5 3-5z" />
      <path d="M5.8 14.5h3.4l-.3 2.4a1.4 1.4 0 0 1-2.8 0z" />
      <path d="M16.5 6.5c1.7 0 3 2.1 3 5s-1.3 5-3 5-3-2.1-3-5 1.3-5 3-5z" />
      <path d="M14.8 18.5h3.4l-.3 2.1a1.4 1.4 0 0 1-2.8 0z" />
    </>
  ),
  cycling: (
    <>
      <circle cx="5.5" cy="16.5" r="3.5" />
      <circle cx="18.5" cy="16.5" r="3.5" />
      <path d="M5.5 16.5L9.5 9h6l3 7.5" />
      <path d="M9.5 9l3.5 7.5H5.5" />
      <path d="M8 6.5h3" />
      <path d="M15.5 9l-1-3h2.2" />
    </>
  ),
  "boat-tours": (
    <>
      <path d="M3 15h18l-2.6 4.5H5.6z" />
      <path d="M12 3v12" />
      <path d="M12 4l6.5 9H12" />
      <path d="M10 6.5L5.5 13H10" />
      <path d="M2 21.5c1.7 0 1.7-1 3.3-1s1.7 1 3.4 1 1.7-1 3.3-1 1.7 1 3.3 1 1.7-1 3.4-1 1.6 1 3.3 1" />
    </>
  ),
  "cable-cars": (
    <>
      <path d="M2 6.5l20-3.5" />
      <path d="M12 4.8V9" />
      <rect x="5.5" y="9" width="13" height="11" rx="2" />
      <path d="M5.5 14h13" />
      <path d="M12 14v6" />
    </>
  ),
  homestays: (
    <>
      <path d="M2.5 11L12 3.5l9.5 7.5" />
      <path d="M5 9.5V16h14V9.5" />
      <path d="M7 16v4.5M17 16v4.5M12 16v4.5" />
      <path d="M10.5 16v-3.5h3V16" />
      <path d="M3 20.5h18" />
    </>
  ),
  wildlife: (
    <>
      <path d="M12 20.5c-2.6 0-4.6-1.5-4.6-3.6 0-2.2 2.1-4.4 4.6-4.4s4.6 2.2 4.6 4.4c0 2.1-2 3.6-4.6 3.6z" />
      <ellipse cx="5.5" cy="11" rx="1.7" ry="2.2" />
      <ellipse cx="9.3" cy="6.6" rx="1.7" ry="2.3" />
      <ellipse cx="14.7" cy="6.6" rx="1.7" ry="2.3" />
      <ellipse cx="18.5" cy="11" rx="1.7" ry="2.2" />
    </>
  ),
  motorcycling: (
    <>
      <circle cx="5.5" cy="17.5" r="2.8" />
      <circle cx="18.5" cy="17.5" r="2.8" />
      <path d="M2.5 15.2c0-2 1.4-3.4 3.4-3.4h4.2l1.6 3.7h4.1l1.9-3.6" />
      <path d="M4 9.5h5" />
      <path d="M17.7 11.9L16 5.5h2.8" />
      <path d="M17.7 11.9l.8 5.6" />
    </>
  ),
  shopping: (
    <>
      <path d="M4.5 8h15l-1.2 12.5H5.7z" />
      <path d="M8.5 10.5V6.5a3.5 3.5 0 0 1 7 0v4" />
    </>
  ),
}

export default function ExperienceIcon({ slug, className }: { slug: ExperienceSlug; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {PATHS[slug]}
    </svg>
  )
}
