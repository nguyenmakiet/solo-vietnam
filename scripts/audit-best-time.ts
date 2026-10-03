/**
 * Read-only consistency audit: legacy `bestTime` text vs `bestMonths`.
 *
 * Step 0 of the bestTime -> bestMonths / bestSeasonNote / bestTimeOfDay
 * migration. Runs BEFORE any data is moved, so the original text is still
 * there as evidence when bestMonths looks wrong. Never writes to data files.
 *
 * Month extraction is deliberately conservative: only explicit month names
 * (Jan / January ...) and ranges between them count. Season words ("dry
 * season", "Tet", "summer") are reported but never converted to months -
 * those need a human decision.
 *
 * Usage: npm run audit:best-time
 *        npm run audit:best-time -- --md reports/best-time-audit.md
 */

import { writeFileSync, mkdirSync } from "fs"
import { dirname } from "path"
import { allLocations } from "../data/all-locations"

const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
// Capitalised only, so the verb "may" and "march" never count as months
const MONTH = String.raw`(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|June?|July?|Aug(?:ust)?|Sep(?:t(?:ember)?)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\b`
const QUALIFIER = String.raw`(?:(?:early|mid|late|end of|the end of|start of)[\s-]+)?`
const RANGE_RE = new RegExp(
  String.raw`\b(${MONTH})(?:\s*(?:-|–|—|to|through|until|till|and)\s*${QUALIFIER}(${MONTH}))?`,
  "g",
)
// Clause boundaries: ; ( ) sentence ends, contrast conjunctions, and a spaced
// hyphen that is not itself a month range ("Sep - Oct")
const CLAUSE_SPLIT = new RegExp(
  String.raw`[;()]|\.\s|,\s*(?=(?:but|while|whereas|though|although|avoid)\b)|\s[-–—]\s(?!${QUALIFIER}${MONTH})`,
)
const NEGATIVE_RE = /\b(avoid|closed?|closes|closure|not recommended|typhoons?|storms?|flood(?:s|ing|ed)?|heavy rain|slippery|dangerous|off-season|scorching|too hot|unsafe|suspended|muddy|rough(?:er)?|difficult|harder|limited|less suited|unpredictable|delay|cancel(?:led)?)\b/i
const SEASON_RE = /\b(dry season|rainy season|wet season|monsoon|spring|summer|autumn|fall|winter|t[eế]t|lunar|festival)\b/gi
const YEAR_ROUND_RE = /\b(year[- ]round|all year|any time of (?:the )?year)\b/i
const TIME_OF_DAY_RE = /\b(\d{1,2}(?::\d{2})?\s*(?:-\s*\d{1,2}(?::\d{2})?\s*)?(?:AM|PM|am|pm)|sunrise|sunset|morning|afternoon|evening|night|midday|noon|dawn|dusk|weekdays?|weekends?)\b/i

type Shape = "empty" | "months" | "time" | "mixed" | "season-only"
type Severity = "error" | "warn" | "ok"

type Row = {
  slug: string
  bestTime: string
  bestMonths: number[]
  shape: Shape
  positive: number[]
  negative: number[]
  seasons: string[]
  severity: Severity
  issues: string[]
}

function monthNum(token: string): number {
  return MONTH_NAMES.indexOf(token.slice(0, 3)) + 1
}

function expand(start: number, end: number): number[] {
  const out = [start]
  for (let m = start; m !== end && out.length < 12; ) {
    m = m === 12 ? 1 : m + 1
    out.push(m)
  }
  return out
}

function extractMonths(clause: string): number[] {
  const months = new Set<number>()
  for (const match of clause.matchAll(RANGE_RE)) {
    const start = monthNum(match[1])
    const end = match[2] ? monthNum(match[2]) : start
    // "Jan and Mar" lists two months, it is not a range
    const isList = /\band\b/.test(match[0])
    for (const m of isList ? [start, end] : expand(start, end)) months.add(m)
  }
  return [...months]
}

const fmt = (ms: number[]) => (ms.length ? [...ms].sort((a, b) => a - b).map((m) => MONTH_NAMES[m - 1]).join(", ") : "-")
const diff = (a: number[], b: number[]) => a.filter((m) => !b.includes(m)).sort((x, y) => x - y)

function auditLocation(slug: string, bestTime: string, bestMonths: number[]): Row {
  const text = bestTime.trim()
  const issues: string[] = []
  let severity: Severity = "ok"
  const flag = (level: Severity, msg: string) => {
    issues.push(msg)
    if (level === "error" || severity === "ok") severity = level
  }

  const positive = new Set<number>()
  const negative = new Set<number>()
  for (const clause of text.split(CLAUSE_SPLIT).filter(Boolean)) {
    const target = NEGATIVE_RE.test(clause) ? negative : positive
    for (const m of extractMonths(clause)) target.add(m)
  }
  const seasons = [...new Set([...text.matchAll(SEASON_RE)].map((m) => m[1].toLowerCase()))]
  const yearRound = YEAR_ROUND_RE.test(text)
  const hasMonths = positive.size + negative.size > 0
  const hasTime = TIME_OF_DAY_RE.test(text)

  const shape: Shape = !text
    ? "empty"
    : hasMonths || yearRound
      ? hasTime ? "mixed" : "months"
      : hasTime ? "time" : "season-only"

  if (bestMonths.length === 0) flag("error", "bestMonths is empty")
  if (bestMonths.some((m) => !Number.isInteger(m) || m < 1 || m > 12)) flag("error", "bestMonths has a value outside 1-12")
  if (new Set(bestMonths).size !== bestMonths.length) flag("warn", "bestMonths has duplicates")
  if (!text) flag("warn", "bestTime is empty - bestMonths has no textual evidence")
  if (/[–—]/.test(text)) flag("warn", "en/em dash in bestTime")

  const pos = [...positive]
  const neg = [...negative]
  if (yearRound && bestMonths.length < 12 && !hasMonths) {
    flag("warn", `text says year-round but bestMonths has ${bestMonths.length} months`)
  }
  if (pos.length) {
    const missing = diff(pos, bestMonths)
    // Months the text recommends but bestMonths omits are the clearest signal
    if (missing.length) flag(neg.length ? "warn" : "error", `text recommends ${fmt(missing)} but bestMonths omits them`)
    const extra = diff(bestMonths, [...pos, ...neg])
    if (extra.length && !yearRound) flag("warn", `bestMonths includes ${fmt(extra)} not mentioned in text`)
  }
  const negIncluded = neg.filter((m) => bestMonths.includes(m))
  if (negIncluded.length) flag("warn", `bestMonths includes ${fmt(negIncluded)}, which the text describes negatively`)
  if (!hasMonths && !yearRound && text) {
    flag("warn", seasons.length
      ? `season words only (${seasons.join(", ")}) - bestMonths cannot be verified from text`
      : "no month info in text - bestMonths cannot be verified from text")
  }

  return { slug, bestTime: text, bestMonths, shape, positive: pos, negative: neg, seasons, severity, issues }
}

const rows = allLocations
  .map((l) => auditLocation(l.slug, l.bestTime ?? "", l.bestMonths ?? []))
  .sort((a, b) => a.slug.localeCompare(b.slug))

const count = <T>(xs: T[], pred: (x: T) => boolean) => xs.filter(pred).length
const shapes: Shape[] = ["months", "time", "mixed", "season-only", "empty"]

console.log("BEST TIME CONSISTENCY AUDIT\n")
console.log(`Locations: ${rows.length}`)
console.log("Shape:   " + shapes.map((s) => `${s}=${count(rows, (r) => r.shape === s)}`).join("  "))
console.log(`Result:  error=${count(rows, (r) => r.severity === "error")}  warn=${count(rows, (r) => r.severity === "warn")}  ok=${count(rows, (r) => r.severity === "ok")}\n`)
for (const r of rows.filter((r) => r.severity === "error")) {
  console.log(`❌ ${r.slug}\n   bestTime:   ${r.bestTime}\n   bestMonths: ${fmt(r.bestMonths)}\n   ${r.issues.join("\n   ")}\n`)
}

const mdIndex = process.argv.indexOf("--md")
if (mdIndex !== -1) {
  const out = process.argv[mdIndex + 1] ?? "reports/best-time-audit.md"
  const esc = (s: string) => s.replace(/\|/g, "\\|")
  const icon = { error: "❌", warn: "⚠️", ok: "✅" }
  const lines: string[] = [
    "# Best time consistency audit",
    "",
    "Generated by `npm run audit:best-time -- --md`. Read-only: compares the legacy `bestTime` text with `bestMonths` before the migration to `bestSeasonNote` / `bestTimeOfDay`.",
    "",
    "Month extraction counts explicit month names only. Season words are listed but never converted to months. Months inside a clause with avoid / closed / typhoon / flood... are treated as negative.",
    "",
    "## Summary",
    "",
    "| Shape | Count | Meaning |",
    "|-------|-------|---------|",
    `| months | ${count(rows, (r) => r.shape === "months")} | months/seasons only - candidate for \`bestSeasonNote\` (or nothing, if the month strip says it all) |`,
    `| time | ${count(rows, (r) => r.shape === "time")} | time of day only - candidate for \`bestTimeOfDay\` |`,
    `| mixed | ${count(rows, (r) => r.shape === "mixed")} | months and time of day - manual split |`,
    `| season-only | ${count(rows, (r) => r.shape === "season-only")} | season words or other text, no explicit months - manual |`,
    `| empty | ${count(rows, (r) => r.shape === "empty")} | no text |`,
    "",
    `Result: ❌ ${count(rows, (r) => r.severity === "error")} · ⚠️ ${count(rows, (r) => r.severity === "warn")} · ✅ ${count(rows, (r) => r.severity === "ok")}`,
    "",
  ]
  const section = (title: string, pick: (r: Row) => boolean) => {
    const picked = rows.filter(pick)
    lines.push(`## ${title} (${picked.length})`, "")
    if (!picked.length) return lines.push("None.", "")
    lines.push("| | Location | Shape | bestTime | bestMonths | Text months (+ / -) | Issues |", "|---|---|---|---|---|---|---|")
    for (const r of picked) {
      lines.push(`| ${icon[r.severity]} | \`${r.slug}\` | ${r.shape} | ${esc(r.bestTime) || "_(empty)_"} | ${fmt(r.bestMonths)} | ${fmt(r.positive)} / ${fmt(r.negative)} | ${esc(r.issues.join("; ")) || "-"} |`)
    }
    lines.push("")
  }
  section("❌ Errors - text recommends months that bestMonths omits", (r) => r.severity === "error")
  section("Mixed months + time of day - manual split", (r) => r.shape === "mixed")
  section("⚠️ Month warnings (months / season-only)", (r) => r.severity === "warn" && (r.shape === "months" || r.shape === "season-only"))
  section("Time of day only - bestMonths has no textual evidence", (r) => r.shape === "time")
  section("Empty bestTime", (r) => r.shape === "empty")
  section("✅ Consistent", (r) => r.severity === "ok")
  mkdirSync(dirname(out), { recursive: true })
  writeFileSync(out, lines.join("\n"))
  console.log(`Markdown report written to ${out}`)
}
