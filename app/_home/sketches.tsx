// Homepage-only field sketches. Single-weight ink lines, drawn to mean
// something (karst, a road, a route, the activity) - never decoration.

type SvgProps = { className?: string }

/** Hand-drawn underline swash, sits under "Find it." */
export function Swash({ className }: SvgProps) {
  return (
    <svg className={className} viewBox="0 0 240 18" preserveAspectRatio="none" aria-hidden="true">
      <path d="M3 12 C 46 5, 98 3, 146 6 S 214 11, 237 4" />
      <path d="M22 15 C 70 10, 128 9, 196 11" />
    </svg>
  )
}

/** Curved arrow pointing down-left, for a handwritten note */
export function NoteArrow({ className }: SvgProps) {
  return (
    <svg className={className} viewBox="0 0 64 48" aria-hidden="true">
      <path d="M58 6 C 46 4, 22 10, 12 38" />
      <path d="M5 30 L12 40 L20 31" />
    </svg>
  )
}

/**
 * Karst skyline with a winding road and a pin - the hero horizon.
 * Peaks echo Ninh Binh / Ha Long limestone; the road is the Ha Giang switchback.
 */
export function KarstHorizon({ className }: SvgProps) {
  return (
    <svg className={className} viewBox="0 0 1200 150" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      {/* far ridge */}
      <path
        className="fn-sk-far"
        d="M0 112 C 40 108, 60 70, 84 72 C 104 74, 108 104, 132 104 C 160 104, 170 52, 196 50 C 222 48, 228 100, 262 102 C 300 104, 318 82, 346 84 C 380 86, 396 108, 430 106 C 462 104, 470 60, 500 58 C 528 56, 536 98, 566 100 C 600 102, 640 92, 672 94 C 710 96, 720 66, 748 64 C 778 62, 786 104, 820 104 C 860 104, 872 46, 902 44 C 930 42, 940 100, 976 102 C 1010 104, 1030 84, 1060 86 C 1094 88, 1104 106, 1140 104 C 1168 102, 1184 96, 1200 98"
      />
      {/* near karst towers */}
      <path
        className="fn-sk-near"
        d="M0 134 C 30 132, 44 96, 62 94 C 80 92, 84 128, 108 130 L 214 132 C 232 132, 236 78, 256 74 C 276 70, 282 126, 304 130 L 520 132 C 540 132, 548 92, 566 90 C 584 88, 588 124, 610 130 L 862 132 C 880 132, 888 70, 910 66 C 932 62, 934 120, 956 128 C 978 134, 992 100, 1010 98 C 1028 96, 1032 128, 1056 132 L 1200 134"
      />
      {/* road */}
      <path
        className="fn-sk-road"
        d="M140 146 C 260 142, 330 124, 400 128 C 470 132, 452 112, 520 112 C 600 112, 640 128, 720 124 C 790 120, 780 104, 846 104"
      />
      {/* pin at the end of the road */}
      <g className="fn-sk-pin" transform="translate(846 86)">
        <path d="M0 18 C -9 6, -9 -4, 0 -6 C 9 -4, 9 6, 0 18 Z" />
        <circle cy={1} r={2.4} />
      </g>
    </svg>
  )
}

/* ── Vibe sketches ─────────────────────────────────────────────────────────── */

export function WaveSketch({ className }: SvgProps) {
  return (
    <svg className={className} viewBox="0 0 64 48" aria-hidden="true">
      <circle cx="46" cy="12" r="6" />
      <path d="M4 28 C 12 22, 18 22, 24 28 S 36 34, 44 28 S 56 22, 62 26" />
      <path d="M4 38 C 12 32, 18 32, 24 38 S 36 44, 44 38 S 56 32, 62 36" />
    </svg>
  )
}

export function RidgeSketch({ className }: SvgProps) {
  return (
    <svg className={className} viewBox="0 0 64 48" aria-hidden="true">
      <path d="M2 42 L18 16 L26 26 L38 6 L62 42" />
      <path d="M32 16 L38 6 L44 16" />
      <path d="M14 42 C 22 38, 26 36, 30 32 S 38 28, 40 22" strokeDasharray="2 4" />
    </svg>
  )
}

export function TentSketch({ className }: SvgProps) {
  return (
    <svg className={className} viewBox="0 0 64 48" aria-hidden="true">
      <path d="M6 42 L28 10 L50 42 Z" />
      <path d="M28 10 L28 42 M22 42 L28 30 L34 42" />
      <path d="M2 42 H62" />
      <path d="M50 10 l1.5 3 3 .5 -2.2 2 .6 3 -2.9 -1.5 -2.9 1.5 .6 -3 -2.2 -2 3 -.5 z" />
    </svg>
  )
}

export function BowlSketch({ className }: SvgProps) {
  return (
    <svg className={className} viewBox="0 0 64 48" aria-hidden="true">
      <path d="M8 24 H56 C 56 36, 46 44, 32 44 C 18 44, 8 36, 8 24 Z" />
      <path d="M40 22 L60 4 M44 22 L62 8" />
      <path d="M20 18 C 16 14, 24 10, 20 4 M30 18 C 26 14, 34 10, 30 4" />
    </svg>
  )
}

export const VIBE_SKETCH = {
  beaches: WaveSketch,
  trekking: RidgeSketch,
  camping: TentSketch,
  food: BowlSketch,
} as const
