import { Location } from "@/data/location"
import {
  Destination,
  DerivedDestinationData,
  EXPERIENCE_GROUP_CONFIG,
  Highlight,
  Region,
  WhatToDo,
} from "./types"

import { baNaHills } from "./ba-na-hills"
import { caoBang } from "./cao-bang"
import { catBa } from "./cat-ba"
import { conDao } from "./con-dao"
import { daNang } from "./da-nang"
import { daLat } from "./da-lat"
import { haGiangLoop } from "./ha-giang-loop"
import { haLong } from "./ha-long"
import { haNoi } from "./ha-noi"
import { hoChiMinhCity } from "./ho-chi-minh-city"
import { hoiAn } from "./hoi-an"
import { hue } from "./hue"
import { lySon } from "./ly-son"
import { mekongDelta } from "./mekong-delta"
import { nhaTrang } from "./nha-trang"
import { ninhBinh } from "./ninh-binh"
import { phanThiet } from "./phan-thiet"
import { phongNhaKeBang } from "./phong-nha-ke-bang"
import { phuQuoc } from "./phu-quoc"
import { puLuong } from "./pu-luong"
import { sapa } from "./sapa"

export type { Destination, DerivedDestinationData, Region }
export { EXPERIENCE_GROUP_CONFIG }

export const destinations: Destination[] = [
  baNaHills,
  caoBang,
  catBa,
  conDao,
  daNang,
  daLat,
  haGiangLoop,
  haLong,
  haNoi,
  hoChiMinhCity,
  hoiAn,
  hue,
  lySon,
  mekongDelta,
  nhaTrang,
  ninhBinh,
  phanThiet,
  phongNhaKeBang,
  phuQuoc,
  puLuong,
  sapa,
]

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug)
}

export function getDestinationsByRegion(region: Region): Destination[] {
  return destinations.filter((d) => d.region === region)
}

export function getDestinationsByTag(tag: string): Destination[] {
  return destinations.filter((d) => d.tags?.includes(tag))
}

export function deriveFromLocations(
  destinationSlug: string,
  allLocations: Location[]
): DerivedDestinationData {
  const locations = allLocations.filter((l) => l.destination === destinationSlug)

  // ── bestMonths ──────────────────────────────────────────────────────────────
  // Count how many locations include each month, then keep months present in
  // >= 30% of the matched locations.
  const monthCount: Record<number, number> = {}
  for (const loc of locations) {
    for (const month of loc.bestMonths ?? []) {
      monthCount[month] = (monthCount[month] ?? 0) + 1
    }
  }
  const threshold = locations.length * 0.3
  const bestMonths = Object.entries(monthCount)
    .filter(([, count]) => count >= threshold)
    .map(([month]) => Number(month))
    .sort((a, b) => a - b)

  // ── whatToDo ────────────────────────────────────────────────────────────────
  // Map location experiences to their group in EXPERIENCE_GROUP_CONFIG, dedupe
  // within each group, then sort groups by config order.
  const seenPerGroup: Record<string, Set<string>> = {}
  const groupedExperiences: Record<string, string[]> = {}

  for (const loc of locations) {
    for (const exp of loc.experiences ?? []) {
      for (const [groupKey, config] of Object.entries(EXPERIENCE_GROUP_CONFIG)) {
        if (config.experiences.includes(exp)) {
          if (!seenPerGroup[groupKey]) seenPerGroup[groupKey] = new Set()
          if (!seenPerGroup[groupKey].has(exp)) {
            seenPerGroup[groupKey].add(exp)
            if (!groupedExperiences[groupKey]) groupedExperiences[groupKey] = []
            groupedExperiences[groupKey].push(exp)
          }
        }
      }
    }
  }

  const whatToDo: WhatToDo = {}
  const sortedGroupKeys = Object.entries(EXPERIENCE_GROUP_CONFIG)
    .sort(([, a], [, b]) => a.order - b.order)
    .map(([key]) => key)
  for (const key of sortedGroupKeys) {
    if (groupedExperiences[key]) {
      whatToDo[key] = groupedExperiences[key]
    }
  }

  // ── highlights ──────────────────────────────────────────────────────────────
  // Collect insights.highlights from matched locations (optional field), dedupe
  // by text, cap at 10.
  const seenHighlights = new Set<string>()
  const highlights: Highlight[] = []
  for (const loc of locations) {
    for (const text of loc.insights?.highlights ?? []) {
      if (!seenHighlights.has(text) && highlights.length < 10) {
        seenHighlights.add(text)
        highlights.push({ locationSlug: loc.slug, text })
      }
    }
  }

  return {
    bestMonths,
    whatToDo,
    highlights,
    locationCount: locations.length,
  }
}
