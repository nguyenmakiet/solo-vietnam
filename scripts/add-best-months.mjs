import { readFileSync, writeFileSync, readdirSync } from "fs"
import { join } from "path"

const MONTH_MAP = {
  jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6,
  jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12,
}

function parseMonthName(str) {
  const s = str.trim().toLowerCase().slice(0, 3)
  return MONTH_MAP[s] ?? null
}

function rangeMonths(start, end) {
  const months = []
  let m = start
  while (true) {
    months.push(m)
    if (m === end) break
    m = m === 12 ? 1 : m + 1
    // safety: if we've gone more than 12 steps, break
    if (months.length > 12) break
  }
  return months
}

function parseBestTime(bestTime) {
  const lower = bestTime.toLowerCase()

  // Year-round / all year
  if (/year.?round|all.?year/i.test(lower)) {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  }

  // Remove parenthetical notes
  const cleaned = bestTime.replace(/\([^)]*\)/g, " ")

  // Split on "or" or ";"
  const segments = cleaned.split(/\bor\b|;/i)

  const allMonths = new Set()

  for (const segment of segments) {
    // Find all "Month – Month" or "Month - Month" or single "Month" patterns
    // Look for month name tokens
    const monthPattern = /\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\b/gi
    const found = []
    let match
    while ((match = monthPattern.exec(segment)) !== null) {
      const num = parseMonthName(match[0])
      if (num) found.push({ num, index: match.index })
    }

    if (found.length === 0) continue

    // Check if segment contains a range dash between consecutive month tokens
    // Try to detect ranges by looking for dash/en-dash between month names
    const rangePat = /\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\s*[–\-]\s*(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*/gi
    const rangeMatches = []
    let rm
    while ((rm = rangePat.exec(segment)) !== null) {
      const s = parseMonthName(rm[1])
      const e = parseMonthName(rm[2])
      if (s && e) rangeMatches.push([s, e])
    }

    if (rangeMatches.length > 0) {
      for (const [s, e] of rangeMatches) {
        for (const m of rangeMonths(s, e)) allMonths.add(m)
      }
    } else {
      // No range dash found — treat each found month as a single month
      for (const { num } of found) allMonths.add(num)
    }
  }

  return [...allMonths].sort((a, b) => a - b)
}

function insertBestMonths(content, months) {
  // Insert bestMonths right after the bestTime line
  return content.replace(
    /([ \t]*bestTime:\s*"[^"]*",?\n)/,
    (match) => {
      const indent = match.match(/^([ \t]*)/)[1]
      const comma = match.trimEnd().endsWith(",") ? "" : ","
      const monthsLine = `${indent}bestMonths: [${months.join(", ")}],\n`
      // Ensure the bestTime line ends with a comma
      const bestTimeLine = match.trimEnd().endsWith(",")
        ? match
        : match.replace(/,?\n$/, ",\n")
      return bestTimeLine + monthsLine
    }
  )
}

const locationsDir = "c:/Users/Anh Kiet/solo-vietnam/data/locations"
const files = readdirSync(locationsDir).filter(f => f.endsWith(".ts"))

let processed = 0
let skipped = 0

for (const file of files) {
  const filePath = join(locationsDir, file)
  const content = readFileSync(filePath, "utf-8")

  // Skip if already has bestMonths
  if (content.includes("bestMonths:")) {
    skipped++
    continue
  }

  const bestTimeMatch = content.match(/bestTime:\s*"([^"]*)"/)
  if (!bestTimeMatch) {
    console.warn(`No bestTime found in ${file}`)
    skipped++
    continue
  }

  const bestTime = bestTimeMatch[1]
  const months = parseBestTime(bestTime)

  const newContent = insertBestMonths(content, months)

  if (newContent === content) {
    console.warn(`Could not insert bestMonths in ${file}`)
    skipped++
    continue
  }

  writeFileSync(filePath, newContent, "utf-8")
  processed++
}

console.log(`Done. Processed: ${processed}, Skipped: ${skipped}`)
