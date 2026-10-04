# bestMonths - Batch 2A plan (12 held-back SAFE locations)

Read-only review. **No location data, UI, manifest or commit was changed.** Each location object was read in full: `bestTime`, `bestMonths`, `status`, `openingHours`, tips, content, `insights.thingsToKnow.seasonal` and FAQ. Decisions follow the `bestMonths` semantic in CLAUDE.md.

## Decisions

| Location | Current bestMonths | Decision | Proposed bestMonths | Evidence | Reason | Research needed? |
|---|---|---|---|---|---|---|
| `a-pa-chai` | Jan-Apr, Sep-Dec | NARROW | `[1, 2, 3, 4, 10, 11, 12]` | bestTime: "wet season May - Sep makes the trail muddy and dangerous underfoot"; insights.seasonal: "Wet season (May-Sep) brings a real risk of impassable roads and a muddy, dangerous trail". Sep only appears positively as "Sep-Oct for golden rice terraces en route". | A real contradiction, and the existing rule resolves it: a season that is worth seeing but dangerous stays out (the same rule as Datanla and Phi Liêng). The danger warning is about the location itself; the rice is "en route". Drop Sep. Small wording fix: "Sep-Oct for golden rice" -> "Oct for golden rice", so the season text does not recommend an excluded month. | No |
| `back-beach-vung-tau` | Nov-Apr | NARROW | `[12, 1, 2, 3, 4]` | bestTime and two FAQ answers say "Nov - Apr". The same bestTime says "avoid Aug - Nov specifically if a clean beach matters"; content, insights.seasonal and the negative sentiment all describe the Aug-Nov debris as "a genuine drawback" and "a real chance of debris and reduced water quality". Oct also has typhoon risk. | A boundary overlap on Nov. The conditional is about the beach itself (water and sand quality), which is the location's core experience, and the content calls it a genuine drawback, so it is a material discouragement. Excluding Nov is the conservative reading of the content's own avoid window. Wording fix needed: change "Nov - Apr" to "Dec - Apr" in bestTime and both FAQs, or reword the debris window if the owner knows it ends in Oct. | No (optional: confirm when the debris season ends) |
| `son-doong-cave` | Jan-Aug | REWRITE | unchanged `[1, 2, 3, 4, 5, 6, 7, 8]` | openingHours: "Expedition departures: Jan – Aug only"; insights.seasonal: "Open Jan–Aug ... Closed Sep–Jan"; tips, insights and FAQ all describe Jan–Mar as the best photography season. Only the phrase "closes Sep – Jan" conflicts. | Not a data error. Five independent statements put Jan inside the season, so "closes Sep – Jan" means the closure runs until the season reopens in Jan. bestMonths is right; the wording is wrong. Rewrite "cave closes Sep – Jan" -> "closed Sep - Dec" in bestTime and insights.seasonal (also replaces the en dashes). | No |
| `quang-tri-ancient-citadel` | Jan-Aug, Dec | REWRITE | owner choice: unchanged `[12, 1, 2, 3, 4, 5, 6, 7, 8]` or `[12, 1, 2, 3, 4, 5]` | bestTime: "Dec - May ... most comfortable window; dry season overall runs roughly Feb - Aug, avoiding both the hot, dry 'gió Lào' winds of early-mid summer and the flooding ... Sep - Nov". insights.seasonal is `null`; no other seasonal text. | The sentence contradicts itself: a Feb-Aug "dry season" cannot avoid the early-mid summer winds it contains. Sep-Nov flooding is clearly excluded either way. The only open question is Jun-Aug: hot but visitable (keep, heat goes in the note), or discouraged (narrow). That is an editorial call; one sentence then makes it unambiguous. | No |
| `hospital-cave` | All 12 | REWRITE | unchanged `[1..12]`, but recommend **not releasing the strip** while the status is non-active | status: `temporarily-closed`; statusNote: both entrances gated. bestTime: "Year-round (exterior only, 10-15 minutes - or skip entirely)"; insights.seasonal: "Accessible year-round. Cave interior closed regardless of season." | The 12 months are factually consistent (the exterior is accessible any time), but a "Best Months to Visit" strip on a page that tells readers they can skip it is not meaningful. The current release gate only blocks `closed` / `unverified`, so this would pass the gate as-is. Fix: remove "or skip entirely" from the season text (it is already in tips and FAQ), and record the policy that non-active statuses (`temporarily-closed`, `seasonally-closed`) do not get a strip. | No |
| `bau-sau` | Jan-Apr, Nov-Dec | EXPAND | `[1, 2, 3, 4, 7, 8, 9, 10, 11, 12]` | bestTime: wet season Jul - Oct "makes the trek ... difficult but the forest sounds and atmosphere are at their most intense"; content: "harder going on the trail but the forest is at its most atmospheric"; insights.seasonal: rainy season "is worth experiencing for a different kind of visit". | Three separate passages present Jul-Oct as a worthwhile secondary season. The caveat is "difficult / harder going" and wading, never "dangerous", so the dangerous-season rule does not apply (the same reading as Pongour and Dray Nur's "slippery"). May-Jun are not mentioned and stay out. Implementation note: the regex reads "difficult" as negative, so this needs an audit override. | No |
| `can-gio-beach` | Jan-Apr, Nov-Dec | KEEP | unchanged `[11, 12, 1, 2, 3, 4]` | bestTime: Nov - Apr best, "though locals swim right through the warmer months too"; tip and insights.seasonal: "Avoid August specifically". | "Locals swim through the warmer months" describes local behaviour, not a recommendation, and no other passage recommends May-Oct. The evidence is not strong enough to expand; the current months are fully supported. Separate issue for the owner: the main beach has been fenced for construction since 2025 (until ~2029-2030) while `status` is unset. | No |
| `cape-ca-na` | Feb-Aug | EXPAND | `[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]` | bestTime: Sep - Dec "less suited to swimming, though it's still fine for the drive-through views, the seafood, and local culture"; insights.seasonal: "drive-through scenery and seafood are still worthwhile"; FAQ: "coastal views and seafood remain worthwhile". experiences include `motorcycling`. | Three passages explicitly call Sep-Dec worthwhile for the scenic coastal drive, which is a core experience here (on the Highway 1A coastal route), not an incidental one. Jan is never mentioned anywhere, so it is not added. That leaves an 11-month strip with a January gap, which looks odd. | Optional: owner confirms Jan |
| `phoenix-unicorn-islands-my-tho` | Jan-Feb, Jun-Dec | KEEP | unchanged `[11, 12, 1, 2, 6, 7, 8, 9, 10]` | bestTime: Nov - Feb "most consistently recommended"; Jun - Aug "peak fruit season ... though with a real chance of rain"; Sep - Nov flood season "with seasonal specialties"; "Avoid Mar - May if the basket boat ride matters to you ... many smaller canals can experience noticeably lower water levels". | Every included month comes from a positive range, and the only excluded months (Mar-May) are the conditional avoid. The basket boat ride through the water-coconut canals is the location's signature activity (content and tips), so a conditional tied to it is a material exclusion. Same principle as Back Beach - record it once. | No |
| `jade-emperor-pagoda` | All 12 | REWRITE | unchanged `[1..12]` once the owner confirms | bestTime: "Early morning year-round offers the quietest atmosphere" plus lunar-calendar crowd notes; insights.seasonal: "Most active around Tết ... spectacular but very crowded". No season is discouraged anywhere. | Nothing contradicts 12 months, but nothing states seasonal suitability either: "early morning year-round" is a time-of-day phrase, and no passage says the site is indoor or weather-independent (unlike the Batch 2 quick-win temples). This needs an explicit statement, not research. If the owner confirms year-round suitability, add one season sentence (e.g. "Year-round; ...") so the strip is backed by the text. | No (owner confirmation) |
| `vinpearl-cable-car` | All 12 | NARROW | `[2, 3, 4, 5, 6, 7, 8, 9, 10, 11]` | bestTime: "Feb - Aug for the clearest visibility over the bay (cable car operates year-round)"; "autumn offers cooler, quieter weather". insights.seasonal only covers day vs night and wind. | Feb-Aug is recommended, and "autumn" (Sep-Nov) is offered as a positive alternative. "Operates year-round" is a facility statement and does not add months under the policy. Dec-Jan are never mentioned, so the current 12 is not supported. Note: reading "autumn" as Sep-Nov is the standard month mapping; reword it as "Sep - Nov" during migration so the note matches the strip. | Optional: owner confirms Dec-Jan |
| `tran-quoc-pagoda` | Jan-Apr, Oct-Dec | EXPAND | `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]` | bestTime: "Oct - Apr (cool dry season; sunset visits in any season are worthwhile for the West Lake light)". Tip: "open year-round, but avoid public holidays, Tết, and the 1st and 15th of the lunar month if you'd rather stroll and pray in relative quiet". | "Sunset visits in any season are worthwhile" is an explicit seasonal-suitability statement, not just "open". The tip's avoid is about specific crowd days, not seasons. Nothing discourages summer. Oct-Apr stays as the comfort note in bestSeasonNote. | No |

## Summary

| Decision | Count | Locations |
|---|---|---|
| KEEP | 2 | `can-gio-beach`, `phoenix-unicorn-islands-my-tho` |
| EXPAND | 3 | `bau-sau`, `cape-ca-na`, `tran-quoc-pagoda` |
| NARROW | 3 | `a-pa-chai`, `back-beach-vung-tau`, `vinpearl-cable-car` |
| CONFLICT | 0 | - |
| REWRITE | 4 | `son-doong-cave`, `quang-tri-ancient-citadel`, `hospital-cave`, `jade-emperor-pagoda` |
| NEEDS_RESEARCH | 0 | - |

None of the 12 strictly needs external research. Every issue can be resolved from the existing content plus an owner decision or a wording fix.

## Ready for Batch 2

These can be released after owner sign-off on the decision, with no research and no content rewrite:

- `phoenix-unicorn-islands-my-tho` - KEEP
- `can-gio-beach` - KEEP (subject to the beach-construction question under Owner Decisions)
- `bau-sau` - EXPAND to `[1, 2, 3, 4, 7, 8, 9, 10, 11, 12]` (needs an audit override)
- `tran-quoc-pagoda` - EXPAND to all 12
- `cape-ca-na` - EXPAND to `[2..12]` (or all 12 if the owner confirms Jan)
- `vinpearl-cable-car` - NARROW to `[2..11]` (or keep 12 if the owner confirms Dec-Jan)

## Requires Research

None required. Optional confirmations, which do not block release because the proposed values already avoid guessing:

- `back-beach-vung-tau` - when the Aug-Nov debris season actually ends (decides whether Nov can come back)
- `cape-ca-na` - January (closes the 11-month gap)
- `vinpearl-cable-car` - December-January

## Requires Content Rewrite

The months are right or nearly settled, but the wording must change before release:

- `son-doong-cave` - "closes Sep – Jan" -> "closed Sep - Dec" (bestTime + insights.seasonal). Months unchanged.
- `quang-tri-ancient-citadel` - rewrite the self-contradicting season sentence once the owner decides on Jun-Aug; insights.seasonal is null and can be filled from the same sentence.
- `hospital-cave` - drop "or skip entirely" from the season text; see the status policy under Owner Decisions.
- `jade-emperor-pagoda` - add an explicit year-round season statement if the owner confirms.
- `a-pa-chai` - "Sep-Oct for golden rice" -> "Oct for golden rice" (goes with the NARROW).
- `back-beach-vung-tau` - "Nov - Apr" -> "Dec - Apr" in bestTime and two FAQ answers (goes with the NARROW).

## Owner Decisions

The evidence is enough; these should be decided once and recorded (CLAUDE.md "`bestMonths` semantic" and the review log):

1. **Conditional avoids tied to the core experience exclude months.** Applies to `back-beach-vung-tau` (clean beach) and `phoenix-unicorn-islands-my-tho` (basket boat ride). A conditional about something incidental would not exclude.
2. **"Difficult" is not "dangerous".** Applies to `bau-sau`. Secondary seasons with "difficult / harder / slippery" stay in; "dangerous / treacherous" stays out. This keeps it consistent with Pongour and Dray Nur (in) and Datanla, Phi Liêng and A Pa Chai (out).
3. **Non-active statuses do not get a month strip.** Applies to `hospital-cave` (`temporarily-closed`). Recommend extending the `--released` gate to block `temporarily-closed` and `seasonally-closed` as well as `closed` / `unverified`.
4. **Beach under construction:** `can-gio-beach` has its main beach fenced since 2025 but no `status`. Decide whether it ships a strip now or waits until the status is set.
5. **Quang Trị Jun-Aug:** hot but visitable (keep), or discouraged (narrow to Dec-May).
6. **Jade Emperor year-round:** confirm from firsthand experience, then add the season sentence.

## Implementation plan (once approved)

1. Apply the approved `bestMonths` changes and wording fixes, and bump `updatedAt`.
2. Add the approved slugs to `BEST_MONTHS_RELEASES["batch-2a"]` in `data/best-months-release.ts`. Add audit overrides with reasons where the regex disagrees (expected: `bau-sau`, `phoenix-unicorn-islands-my-tho`, possibly `back-beach-vung-tau` and `cape-ca-na`).
3. If decision 3 is approved, extend the gate in `scripts/audit-best-time.ts` to block non-active statuses.
4. Run `tsc`, `audit:taxonomy`, `audit:best-time -- --released` and `build`.

## Resolution log - 2026-10-04 (owner decisions)

Released as `batch-2a` (8 locations):

| Location | bestMonths before → after | Wording change |
|---|---|---|
| `a-pa-chai` | Jan-Apr, Sep-Dec → Jan-Apr, Oct-Dec | "Sep-Oct for golden rice" → "Oct for golden rice" |
| `back-beach-vung-tau` | Nov-Apr → Dec-Apr | "Nov - Apr" → "Dec - Apr" in bestTime and two FAQ answers |
| `bau-sau` | Jan-Apr, Nov-Dec → Jan-Apr, Jul-Dec | - |
| `cape-ca-na` | Feb-Aug → Feb-Dec | - |
| `vinpearl-cable-car` | All 12 → Feb-Nov | - |
| `tran-quoc-pagoda` | Jan-Apr, Oct-Dec → All 12 | - |
| `son-doong-cave` | unchanged (Jan-Aug) | "cave closes Sep – Jan" → "cave closed Sep - Dec" (bestTime, insights.seasonal) |
| `phoenix-unicorn-islands-my-tho` | unchanged | - |

Held, not released:
- `can-gio-beach` - unchanged; waiting until the construction / status issue is clarified.
- `quang-tri-ancient-citadel`, `jade-emperor-pagoda` - pending owner confirmation.
- `hospital-cave` - no month strip while `temporarily-closed`; the non-active status policy will be handled separately.
