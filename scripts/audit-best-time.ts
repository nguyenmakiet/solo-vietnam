/**
 * Read-only consistency audit: legacy `bestTime` text vs `bestMonths`.
 *
 * Steps 0 / 0.5 of the bestTime -> bestMonths / bestSeasonNote / bestTimeOfDay
 * migration. Runs BEFORE any data is moved, so the original text is still
 * there as evidence when bestMonths looks wrong. Never writes to data files.
 *
 * Semantic being audited (owner decision):
 *   bestMonths = every month the location is worth visiting / suitable to
 *   experience - a positive recommendation, NOT only the peak season.
 *   Months to avoid are left out; secondary seasons are included, except
 *   seasons that are worth seeing but dangerous (left out on purpose).
 *
 * Groups (first match wins):
 *   EMPTY          bestMonths = []
 *   CONFLICT       bestMonths contradicts the text: includes months the text
 *                  only describes negatively, includes months the text never
 *                  mentions, or covers only part of a recommended range
 *   NEEDS_RESEARCH text has no explicit months, so bestMonths cannot be
 *                  derived from it - provenance unknown, verify the source
 *   MULTI_SEASON   text recommends a whole additional season that bestMonths
 *                  leaves out - candidate to widen bestMonths
 *   SAFE           consistent with the text
 *
 * Evidence sources (each parsed separately): primary = bestTime and
 * bestSeasonNote; secondary = insights.thingsToKnow.seasonal, FAQ answers to
 * seasonal questions, and tips that talk about seasons (see evidenceOf). Shape (months / time / mixed) still describes
 * bestTime alone, because it drives the text migration.
 *
 * Month extraction is deliberately conservative: only explicit month names
 * (Jan / January ...), ranges between them and "Christmas" count. Historical
 * dates ("January 28, 1941") are ignored. Season words ("dry season", "Tet",
 * "summer") are reported but never converted to months. Ranges inside an
 * "if visiting in ..." conditional count for nothing. Everything here is a
 * heuristic flag for human review, not a verdict.
 *
 * Usage: npm run audit:best-time
 *        npm run audit:best-time -- --md reports/best-time-audit.md
 *        npm run audit:best-time -- --json reports/best-time-audit.json
 *        npm run audit:best-time -- --released   (release gate, exits 1 on failure)
 *        add --all to include the NON_PUBLIC draft locations
 */

import { writeFileSync, mkdirSync } from "fs"
import { dirname } from "path"
import { allLocations } from "../data/all-locations"
import { BEST_MONTHS_RELEASES, BEST_MONTHS_AUDIT_OVERRIDES } from "../data/best-months-release"

const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
// Capitalised only, so the verb "may" and "march" never count as months
const MONTH = String.raw`(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|June?|July?|Aug(?:ust)?|Sep(?:t(?:ember)?)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\b`
const QUALIFIER = String.raw`(?:early|mid|late|end of|the end of|start of)[\s-]+`
const RANGE_RE = new RegExp(
  String.raw`(${QUALIFIER})?\b(${MONTH})(?:\s*(-|–|—|to|through|until|till|and)\s*(${QUALIFIER})?(${MONTH}))?`,
  "gi",
)
// Clause boundaries: ; sentence ends, contrast conjunctions. Parentheses and
// spaced hyphens stay inside the clause so "Sep - Dec is the rainy season -
// avoid" keeps its negative context.
const CLAUSE_SPLIT = /;|\.\s|,?\s+(?=(?:but|while|whereas|though|although)\b)/
// Phrases that contain a negative word but say nothing against a month
const NEUTRAL_RE = /\bavoid\w*\s+(?:the\s+)?(?:[\w-]+\s+){0,4}?crowds\b|\bnot too hot\b/gi
// Verbs that point at the months after them ("avoid Sep-Nov")
const FORWARD_RE = /^(avoid\w*|not recommended)$/i
const NEGATIVE_RE = /\b(avoid\w*|closed?|closes|closure|not recommended|typhoons?|storms?|heavy rain|slippery|dangerous|treacherous|hazardous|off-season|scorching|too hot|unsafe|suspended|muddy|rough(?:er)?|difficult|harder|limited|less suited|less ideal|not suitable|unpredictable|delay\w*|cancel\w*|disrupt\w*|flooding|flash floods?|risk of flood\w*)\b/gi
// Strong danger words: a "..., but unsafe" clause with no months of its own
// marks the last range of the clause before it ("May - Oct is green, but the
// rock gets slippery and unsafe")
const DANGER_RE = /\b(unsafe|dangerous|hazardous|treacherous|not safe)\b/i
const CONTRAST_START_RE = /^\s*(but|though|although|while|whereas)\b/i
// Historical dates are not seasonal evidence: "January 28, 1941", "28 June 1972", "June 1998"
const HISTORIC_DATE_RE = new RegExp(String.raw`\b(?:\d{1,2}(?:st|nd|rd|th)?\s+)?${MONTH}\s*(?:\d{1,2}(?:st|nd|rd|th)?,?\s*)?(?:1[0-9]{3}|20[0-9]{2})\b`, "g")
// "if visiting in summer (May-Aug), ..." - a conditional, not a recommendation
const CONDITIONAL_RE = /\bif (?:you(?:'re| are) )?visiting\b[^;.]*/gi
// Seasonal FAQ questions and tips worth reading as evidence
const SEASONAL_CUE_RE = /\b(best time|best months?|best window|when (?:to|should)|season|dry|rainy|wet|monsoon|bloom\w*|harvest|flood|weather|typhoon|winter|summer|spring|autumn|avoid)\b/i
const SEASON_RE = /\b(dry season|rainy season|wet season|monsoon|spring|summer|autumn|fall|winter|t[eế]t|lunar|festival)\b/gi
const YEAR_ROUND_RE = /\b(year[- ]round|all year|any time of (?:day or )?(?:the )?year|(?:in )?any (?:weather or )?season|any season works|weather-independent)\b/gi
// "open year-round", "operates year-round", "early morning year-round" describe
// a facility or a time of day, not seasonal suitability
const YEAR_ROUND_NOT_SEASONAL_RE = /\b(open|opens|operat\w*|runs?|running|accessible|available|air-conditioned|active|morning|evening|sunrise|sunset|visits are good)\W+(?:\w+\W+){0,2}$/i
const TIME_OF_DAY_RE = /\b(\d{1,2}(?::\d{2})?\s*(?:-\s*\d{1,2}(?::\d{2})?\s*)?(?:AM|PM|am|pm)|sunrise|sunset|morning|afternoon|evening|night|midday|noon|dawn|dusk|weekdays?|weekends?)\b/i

type Shape = "empty" | "months" | "time" | "mixed" | "season-only"
type Group = "EMPTY" | "CONFLICT" | "NEEDS_RESEARCH" | "MULTI_SEASON" | "SAFE"
const GROUPS: Group[] = ["EMPTY", "CONFLICT", "NEEDS_RESEARCH", "MULTI_SEASON", "SAFE"]

type MonthRange = { text: string; months: number[]; negative: boolean; softStart: boolean; softEnd: boolean; at: number }

type Row = {
  slug: string
  bestTime: string
  bestMonths: number[]
  shape: Shape
  ranges: MonthRange[]
  group: Group
  reasons: string[]
  notes: string[]
}

const monthNum = (token: string) => MONTH_NAMES.indexOf(token.slice(0, 3).replace(/^./, (c) => c.toUpperCase())) + 1
const sorted = (ms: Iterable<number>) => [...new Set(ms)].sort((a, b) => a - b)
const fmt = (ms: Iterable<number>) => {
  const list = sorted(ms)
  return list.length ? list.map((m) => MONTH_NAMES[m - 1]).join(", ") : "-"
}

function expand(start: number, end: number): number[] {
  const out = [start]
  for (let m = start; m !== end && out.length < 12; ) {
    m = m === 12 ? 1 : m + 1
    out.push(m)
  }
  return out
}

const blank = (m: string) => " ".repeat(m.length)

function extractRanges(text: string): MonthRange[] {
  const ranges: MonthRange[] = []
  const masked = text.replace(HISTORIC_DATE_RE, blank).replace(CONDITIONAL_RE, blank)
  for (const raw of masked.split(CLAUSE_SPLIT)) {
    if (!raw) continue
    const clause = raw.replace(NEUTRAL_RE, blank)
    const start = ranges.length
    for (const m of clause.matchAll(/\bChristmas(?: Eve)?\b/g)) {
      ranges.push({ text: m[0], months: [12], negative: false, softStart: false, softEnd: false, at: m.index ?? 0 })
    }
    // RANGE_RE is case-insensitive for the qualifiers; re-check the month
    // tokens are capitalised so "may" / "march" as words never count
    for (const m of clause.matchAll(RANGE_RE)) {
      if (!/^[A-Z]/.test(m[2])) continue
      const start = monthNum(m[2])
      const end = m[5] && /^[A-Z]/.test(m[5]) ? monthNum(m[5]) : start
      const isList = m[3]?.toLowerCase() === "and" // "Jan and Mar" lists two months
      const months = isList ? [start, end] : expand(start, end)
      ranges.push({ text: m[0].trim(), months, negative: false, softStart: !!m[1], softEnd: !!m[4], at: m.index ?? 0 })
    }
    // Attribute each negative word to one range in the clause: "avoid" to the
    // next range after it, anything else to the nearest range
    const local = ranges.slice(start)
    if (!local.length && start > 0 && CONTRAST_START_RE.test(clause) && DANGER_RE.test(clause)) {
      ranges[start - 1].negative = true
    }
    for (const w of clause.matchAll(NEGATIVE_RE)) {
      if (!local.length) break
      const at = w.index ?? 0
      const after = local.find((r) => r.at > at)
      const target = FORWARD_RE.test(w[1]) && after
        ? after
        : local.reduce((a, b) => (Math.abs(b.at - at) < Math.abs(a.at - at) ? b : a))
      target.negative = true
    }
  }
  return ranges
}

// Seasonal text worth reading as evidence. Primary sources are the editorial
// season fields (bestTime, bestSeasonNote). Secondary ones - the generated
// seasonal insight, seasonal FAQ answers and tips - often name months
// descriptively ("Dec-Feb is cold", "accessible year-round"), so they only
// confirm that a month is mentioned and contribute "avoid" statements; they
// never raise MULTI_SEASON or "year-round" on their own.
type Evidence = { primary: string[]; secondary: string[]; insight: string }
const clean = (xs: unknown[]) => xs.filter((x): x is string => typeof x === "string" && x.trim().length > 0).map((x) => x.trim())

function evidenceOf(loc: any): Evidence {
  const secondary: unknown[] = [loc.insights?.thingsToKnow?.seasonal]
  for (const f of loc.insights?.faq ?? []) {
    if (SEASONAL_CUE_RE.test(f.question ?? "")) secondary.push(f.answer)
  }
  for (const t of [...(loc.tips ?? []), ...(loc.insights?.visitorTips ?? [])]) {
    if (SEASONAL_CUE_RE.test(t)) secondary.push(t)
  }
  return {
    primary: clean([loc.bestTime, loc.bestSeasonNote]),
    secondary: clean(secondary),
    insight: typeof loc.insights?.thingsToKnow?.seasonal === "string" ? loc.insights.thingsToKnow.seasonal : "",
  }
}

function isYearRound(text: string): boolean {
  for (const m of text.matchAll(YEAR_ROUND_RE)) {
    if (!YEAR_ROUND_NOT_SEASONAL_RE.test(text.slice(0, m.index ?? 0))) return true
  }
  return false
}

function auditLocation(slug: string, bestTime: string, bestMonths: number[], evidence: Evidence): Row {
  const text = bestTime.trim()
  const ranges = evidence.primary.flatMap(extractRanges)
  const extra = evidence.secondary.flatMap(extractRanges)
  const yearRound = evidence.primary.some(isYearRound)
  // A year-round statement in the seasonal insight confirms 12 months, but
  // (like all secondary evidence) never flags a missing season by itself
  const yearRoundSupported = yearRound || isYearRound(evidence.insight)
  const hasTime = TIME_OF_DAY_RE.test(text)
  const seasons = [...new Set([...text.matchAll(SEASON_RE)].map((m) => m[1].toLowerCase()))]
  const ownRanges = extractRanges(text)

  const shape: Shape = !text
    ? "empty"
    : ownRanges.length || isYearRound(text)
      ? hasTime ? "mixed" : "months"
      : hasTime ? "time" : "season-only"

  const all = [...ranges, ...extra]
  const positive = new Set(all.filter((r) => !r.negative).flatMap((r) => r.months))
  const negative = new Set(all.filter((r) => r.negative).flatMap((r) => r.months).filter((m) => !positive.has(m)))
  const inBest = (m: number) => bestMonths.includes(m)

  const conflict: string[] = []
  const multi: string[] = []
  const notes: string[] = []

  const negIncluded = [...negative].filter(inBest)
  if (negIncluded.length) conflict.push(`includes ${fmt(negIncluded)}, which the text only describes negatively`)
  if (all.length && !yearRoundSupported) {
    const unmentioned = bestMonths.filter((m) => !positive.has(m) && !negative.has(m))
    if (unmentioned.length) conflict.push(`includes ${fmt(unmentioned)}, never mentioned in the text`)
  }
  const positiveRanges = ranges.filter((r) => !r.negative)
  for (const r of positiveRanges) {
    const missing = r.months.filter((m, i) => {
      if (inBest(m)) return false
      // A "late Oct" / "mid Nov" endpoint may legitimately be left out
      if (i === 0 && r.softStart) return false
      if (i === r.months.length - 1 && r.softEnd) return false
      return true
    })
    if (!missing.length) continue
    // Months of this range that only it recommends. If none of them made it
    // into bestMonths, the whole season was left out (MULTI_SEASON); if some
    // did, bestMonths cut a recommended range in half (CONFLICT).
    const own = r.months.filter((m) => !positiveRanges.some((o) => o !== r && o.months.includes(m)))
    if (!own.some(inBest)) multi.push(`text recommends "${r.text}" (${fmt(missing)}) - not in bestMonths`)
    else conflict.push(`covers only part of "${r.text}" - missing ${fmt(missing)}`)
  }
  if (yearRound && bestMonths.length < 12) multi.push(`text says year-round but bestMonths has ${bestMonths.length} months`)

  if (/[–—]/.test(text)) notes.push("en/em dash")
  if (shape === "mixed") notes.push("mixed months + time of day - manual split")
  if (seasons.length && !ownRanges.length) notes.push(`season words only: ${seasons.join(", ")}`)
  if (new Set(bestMonths).size !== bestMonths.length) notes.push("bestMonths has duplicates")
  if (bestMonths.some((m) => !Number.isInteger(m) || m < 1 || m > 12)) conflict.push("bestMonths has a value outside 1-12")

  let group: Group
  let reasons: string[]
  if (bestMonths.length === 0) {
    group = "EMPTY"
    reasons = [text ? "bestMonths is empty although bestTime has text" : "bestMonths and bestTime are both empty"]
  } else if (conflict.length) {
    group = "CONFLICT"
    reasons = [...conflict, ...multi]
  } else if (!all.length && !yearRoundSupported) {
    group = "NEEDS_RESEARCH"
    reasons = ["no explicit months in bestTime, bestSeasonNote, seasonal insight, seasonal FAQ or tips - bestMonths has no textual source"]
  } else if (multi.length) {
    group = "MULTI_SEASON"
    reasons = multi
  } else {
    group = "SAFE"
    reasons = []
  }

  return { slug, bestTime: text, bestMonths, shape, ranges, group, reasons, notes }
}

// Draft / internal locations that are not displayed publicly (owner decision).
// Excluded from the public audit; pass --all to include them.
const NON_PUBLIC = new Set(["can-ti-bridge", "ha-giang-city", "mau-due-town", "meo-vac-town", "yen-minh-town"])
const includeAll = process.argv.includes("--all")

const rows = allLocations
  .filter((l) => includeAll || !NON_PUBLIC.has(l.slug))
  .map((l) => auditLocation(l.slug, l.bestTime ?? "", l.bestMonths ?? [], evidenceOf(l)))
  .sort((a, b) => a.slug.localeCompare(b.slug))

const byGroup = (g: Group) => rows.filter((r) => r.group === g)
const count = (pred: (r: Row) => boolean) => rows.filter(pred).length
const shapes: Shape[] = ["months", "time", "mixed", "season-only", "empty"]

console.log("BEST TIME CONSISTENCY AUDIT\n")
console.log(`Locations: ${rows.length}`)
console.log("Shape:  " + shapes.map((s) => `${s}=${count((r) => r.shape === s)}`).join("  "))
console.log("Group:  " + GROUPS.map((g) => `${g}=${byGroup(g).length}`).join("  ") + "\n")
for (const g of ["EMPTY", "CONFLICT"] as Group[]) {
  for (const r of byGroup(g)) {
    console.log(`${g === "EMPTY" ? "∅" : "❌"} ${r.slug}\n   bestTime:   ${r.bestTime || "(empty)"}\n   bestMonths: ${fmt(r.bestMonths)}\n   ${r.reasons.join("\n   ")}\n`)
  }
}

const jsonIndex = process.argv.indexOf("--json")
if (jsonIndex !== -1) {
  const out = process.argv[jsonIndex + 1] ?? "reports/best-time-audit.json"
  mkdirSync(dirname(out), { recursive: true })
  writeFileSync(out, JSON.stringify(rows.map(({ ranges, ...r }) => r), null, 2))
  console.log(`JSON written to ${out}`)
}

const mdIndex = process.argv.indexOf("--md")
if (mdIndex !== -1) {
  const out = process.argv[mdIndex + 1] ?? "reports/best-time-audit.md"
  const esc = (s: string) => s.replace(/\|/g, "\\|")
  const textMonths = (r: Row) => {
    const pos = r.ranges.filter((x) => !x.negative).flatMap((x) => x.months)
    const neg = r.ranges.filter((x) => x.negative).flatMap((x) => x.months)
    return `${fmt(pos)}${neg.length ? ` / avoid: ${fmt(neg)}` : ""}`
  }
  const meta: Record<Group, { title: string; action: string }> = {
    EMPTY: { title: "EMPTY - bestMonths = []", action: "Research and fill bestMonths (and the text) from scratch." },
    CONFLICT: { title: "CONFLICT - bestMonths contradicts the seasonal text", action: "Factual review: decide which side is right and fix the other." },
    NEEDS_RESEARCH: { title: "NEEDS_RESEARCH - bestMonths cannot be derived from the seasonal text", action: "Provenance unknown. Do not treat as verified - confirm the months from a source or firsthand notes." },
    MULTI_SEASON: { title: "MULTI_SEASON - text recommends seasons bestMonths leaves out", action: "Under the \"all worthwhile months\" semantic, widen bestMonths if the extra season is genuinely worth visiting; keep the trade-off in bestSeasonNote." },
    SAFE: { title: "SAFE - consistent with the seasonal text", action: "No month change needed. Still listed with migration notes (dashes, mixed text)." },
  }
  const lines: string[] = [
    "# Best time consistency audit",
    "",
    "Generated by `npm run audit:best-time -- --md`. Read-only: compares the legacy `bestTime` text with `bestMonths` before the migration to `bestSeasonNote` / `bestTimeOfDay`.",
    "",
    "**Semantic:** `bestMonths` = every month the location is worth visiting / suitable to experience (positive recommendation, not only peak season). Months to avoid are excluded; secondary seasons are included.",
    "",
    "Evidence = bestTime + bestSeasonNote + seasonal insight + seasonal FAQ answers + seasonal tips. Heuristics, not verdicts: only explicit month names (and Christmas) count; historical dates and \"if visiting in ...\" conditionals are ignored; season words are never converted to months; a month range in a clause with avoid / closed / typhoon / slippery / rough / flooding... counts as negative.",
    "",
    "## Summary",
    "",
    "| Group | Count | Action |",
    "|-------|-------|--------|",
    ...GROUPS.map((g) => `| ${g} | ${byGroup(g).length} | ${meta[g].action} |`),
    "",
    "| bestTime shape | Count |",
    "|----------------|-------|",
    ...shapes.map((s) => `| ${s} | ${count((r) => r.shape === s)} |`),
    "",
  ]
  for (const g of GROUPS) {
    const picked = byGroup(g)
    lines.push(`## ${meta[g].title} (${picked.length})`, "", meta[g].action, "")
    if (!picked.length) {
      lines.push("None.", "")
      continue
    }
    lines.push("| Location | Shape | bestTime | bestMonths | Text months | Reasons | Notes |", "|---|---|---|---|---|---|---|")
    for (const r of picked) {
      lines.push(`| \`${r.slug}\` | ${r.shape} | ${esc(r.bestTime) || "_(empty)_"} | ${fmt(r.bestMonths)} | ${textMonths(r)} | ${esc(r.reasons.join("; ")) || "-"} | ${esc(r.notes.join("; ")) || "-"} |`)
    }
    lines.push("")
  }
  mkdirSync(dirname(out), { recursive: true })
  writeFileSync(out, lines.join("\n"))
  console.log(`Markdown report written to ${out}`)
}

// Release gate: every slug in data/best-months-release.ts must be public,
// active (not closed / unverified / temporarily- or seasonally-closed), have a valid bestMonths and be SAFE (or carry a reviewed override)
if (process.argv.includes("--released")) {
  const failures: string[] = []
  const bySlug = new Map(rows.map((r) => [r.slug, r]))
  for (const [batch, slugs] of Object.entries(BEST_MONTHS_RELEASES)) {
    for (const slug of slugs) {
      const loc = allLocations.find((l) => l.slug === slug)
      const row = bySlug.get(slug)
      const fail = (msg: string) => failures.push(`${batch} ${slug}: ${msg}`)
      if (!loc) { fail("not in allLocations"); continue }
      if (!row) { fail("not a public location"); continue }
      // Non-active locations never get the month strip
      if (loc.status && ["closed", "unverified", "temporarily-closed", "seasonally-closed"].includes(loc.status)) fail(`status is ${loc.status}`)
      if (row.group === "EMPTY") fail("bestMonths is empty")
      if (row.bestMonths.some((m) => !Number.isInteger(m) || m < 1 || m > 12)) fail("bestMonths has a value outside 1-12")
      if (new Set(row.bestMonths).size !== row.bestMonths.length) fail("bestMonths has duplicates")
      if (row.group !== "SAFE" && !BEST_MONTHS_AUDIT_OVERRIDES[slug]) fail(`${row.group}: ${row.reasons.join("; ")}`)
    }
  }
  for (const slug of Object.keys(BEST_MONTHS_AUDIT_OVERRIDES)) {
    if (!Object.values(BEST_MONTHS_RELEASES).flat().includes(slug)) failures.push(`override for unreleased slug: ${slug}`)
  }
  const stale = Object.keys(BEST_MONTHS_AUDIT_OVERRIDES).filter((slug) => bySlug.get(slug)?.group === "SAFE")
  if (stale.length) console.log(`\nStale overrides (location is SAFE without them - safe to remove): ${stale.join(", ")}`)
  const total = Object.values(BEST_MONTHS_RELEASES).flat().length
  if (failures.length) {
    console.log(`\nRELEASE GATE FAILED (${failures.length}):\n  ${failures.join("\n  ")}`)
    process.exit(1)
  }
  console.log(`\nRelease gate passed: ${total} released locations.`)
}

