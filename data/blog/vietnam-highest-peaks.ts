// Vietnam's 10 highest peaks, for the blog map (components/HighestPeaksMap.tsx).
// Names, coordinates and provinces come from the location files; only the
// ranking and elevation live here. Elevations are the figures the location
// content gives (several peaks have competing survey figures - see each file).

export type RankedPeak = {
  rank: number
  /** Location slug in data/locations/ */
  slug: string
  /** Metres */
  elevation: number
  /**
   * Display-only nudge of the numbered marker, in screen pixels [x, y]. For
   * two summits so close that their numbers would overlap at every zoom; the
   * popup and the link still use the real coordinates.
   */
  markerOffset?: [number, number]
}

export const VIETNAM_HIGHEST_PEAKS: RankedPeak[] = [
  { rank: 1, slug: "fansipan", elevation: 3143 },
  { rank: 2, slug: "pu-si-lung-mountain", elevation: 3076 },
  { rank: 3, slug: "pu-ta-leng-mountain", elevation: 3049 },
  { rank: 4, slug: "ky-quan-san-mountain", elevation: 3046 },
  { rank: 5, slug: "khang-su-van-mountain", elevation: 3012 },
  { rank: 6, slug: "ta-lien-son-mountain", elevation: 2996 },
  { rank: 7, slug: "ta-chi-nhu-mountain", elevation: 2979 },
  // Po Ma Lung and Chung Nhia Vu are ~120 m apart in their location files:
  // the two numbers sit side by side, touching at the summits
  { rank: 8, slug: "po-ma-lung-mountain", elevation: 2967, markerOffset: [-14, 0] },
  { rank: 9, slug: "nhiu-co-san-mountain", elevation: 2965 },
  { rank: 10, slug: "chung-nhia-vu-mountain", elevation: 2918, markerOffset: [14, 0] },
]

/** Ranks shown in the default view: the Hoang Lien Son cluster around Sa Pa */
export const PEAK_CLUSTER_RANKS = [1, 3, 4, 5, 6, 8, 9, 10]
