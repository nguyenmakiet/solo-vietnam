# bestMonths - post-Batch 2B verification and seasonal QA (6 locations)

Read-only review. **No location data, manifest, UI or CLAUDE.md was changed, and nothing was committed or pushed.** Every location object below was read in full: identity, status, `bestTime`, `bestMonths`, fees, opening hours, tips, content, every insights field and the FAQ.

## Phase 1 - Post-Batch 2B sanity check (main @ `5eeb56e`, PR #20 merged)

| Check | Result |
|---|---|
| Released total | **175** (`batch-1` 152 + `batch-2a` 8 + `batch-2b` 15); `audit:best-time -- --released` passes |
| `npx tsc --noEmit` | pass |
| `npm run audit:taxonomy` | pass |
| `npm run build` | pass |
| Batch 2B strips (built HTML, active months) | `white-sand-dunes` Apr-Aug · `mui-ne-fishing-village` Jun-Aug · `hoan-kiem-lake` Aug-Oct · `cat-ba-town` Apr-Oct · `ke-ga-lighthouse` all except Aug · `phong-nha-botanic-garden` all 12 · `west-lake` all except May · `tri-an-lake` all 12 - all match the data |
| Legacy card kept | `khau-coc-cha-pass`, `thien-mu-pagoda` |
| Batch 2A held locations | `can-gio-beach`, `quang-tri-ancient-citadel`, `jade-emperor-pagoda`, `hospital-cave` - all still on the legacy "Best Time to Visit" card |
| Accidental changes | `git diff 7ade021..5eeb56e` touches only the manifest, the 12 Batch 2B location files and the Batch 2B report |

**Phase 1 result: clean.** As in earlier releases, the build regenerates `public/search-index.json`, which is stale in git; it was restored and is not a Batch 2B issue.

## Phase 2 and 3 - Decisions

| Location | Decision | Proposed months | Evidence | Contradiction / risk | Research needed | Implementation note |
|---|---|---|---|---|---|---|
| `ke-ga-lighthouse` (released) | **KEEP** approved months | `[1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12]` (unchanged) | Owner source: best periods Feb-Jul and Sep-Jan. `bestTime`: Nov-Apr calmest; May-Jul hot; Sep-Oct "occasional rain showers ... check the forecast". Tips and content: boats "run continuously during operating hours", "on demand throughout operating hours", the crossing "only takes a few minutes", with two boat types (motorised canoe at higher tide, basket boat "when conditions allow"). March low tide sometimes allows walking across the reef. | `insights.thingsToKnow.seasonal`: "rough conditions in the rainy season (May-Oct) **can** suspend boat crossings entirely". This describes a weather-day risk ("can"), not a seasonal closure, and nothing in the object says crossings are routinely unavailable in any month. So the evidence does **not** show the approved months are materially inaccessible, and the months are safe to keep. Remaining risks: (1) the access caveat is not visible in the season text shown under the strip; (2) Aug is excluded while May-Jul and Sep-Oct (the same rainy window) are included, and no content explains why Aug specifically. | Optional, not blocking: how often crossings are suspended in Aug-Oct, which would explain the Aug exclusion. | Content fix (later batch): bring the caveat into the season text ("rough seas on some rainy-season days (roughly May-Oct) can suspend the crossing - check conditions locally"), and reword the insight so it no longer reads as a seasonal shutdown. |
| `phong-nha-botanic-garden` (released) | **KEEP** all 12 | `[1..12]` (unchanged) | Owner source: beautiful year-round, Dec-Aug best, Sep-Nov slippery / check forecast. `bestTime`: Mar-Aug "safest trekking", clearest water; Sep-Feb "fuller waterfalls and lush forest" with "slippery trails, stronger currents, and more leeches". Content (whatToExpect): in the wet months (roughly Sep-Feb) the waterfall is "far more dramatic", the forest greener and mistier; the streams run "higher, faster, and murkier - not really swimmable", the trails slippery, leeches more active. Safety: "some visitors have slipped on wet rocks"; trail well-marked, rope-assisted sections. | Nothing calls any month dangerous. The wet season is a different experience (dramatic waterfall, misty forest) with difficulty caveats, and swimming is a secondary activity next to the trek. Under difficult ≠ dangerous, all 12 stand. **Content contradiction:** `insights.thingsToKnow.seasonal` says "Best visited April-June when water flows most abundantly", against both `bestTime` and content, which put the fullest flow in Sep-Feb. Minor framing gap: the owner's "Dec-Aug best" vs content's "Sep-Feb wet" for Dec-Feb. Neither changes the months. | No for the months. Optional: confirm the peak-flow season. | Content fix (later batch): rewrite the seasonal insight to match the content (Mar-Aug clear water and safest trekking; Sep-Feb fullest flow, but streams too fast and murky to swim, slippery trails, leeches). |
| `can-gio-beach` | **KEEP months, HOLD release** | `[11, 12, 1, 2, 3, 4]` (unchanged) | `bestTime`: Nov-Apr dry season; locals swim "through the warmer months too"; tip and insight: "Avoid August". Tips, intro, highlights, safety, accessibility and FAQ all say the main beach (Bãi biển 30/4) has been **fenced for a land-reclamation / resort project since 2025**, with completion targeted ~2029-2030 and reopening not assumed. Alternative nearby spots offer sea views and some swimming. `status` is unset. | The seasonal data is consistent. The blocker is status: the location's core experience (this beach) is materially unavailable for years, yet `status` says nothing and the page would show a "Best Months to Visit" strip for a fenced beach. This is a publish-gate (status) issue, not a seasonal one. | No - the content already documents the closure. | Status fix (owner): set `status: "temporarily-closed"` with a `statusNote` (main beach fenced for construction since 2025; nearby alternatives such as the old ferry pier). The page then shows the existing status banner, and under the policy below it stays unreleased until the beach reopens. Months stay as-is. |
| `quang-tri-ancient-citadel` | **NARROW** (owner sign-off) | `[12, 1, 2, 3, 4, 5]` | The only seasonal evidence in the whole object is `bestTime`: "Dec - May (after Tết through spring is often cited as the most comfortable window; dry season overall runs roughly Feb - Aug, avoiding both the hot, dry 'gió Lào' winds of early-mid summer and the flooding that affects the area Sep - Nov)". `insights.thingsToKnow.seasonal` is `null`; the crowds note only concerns holidays. | Dec-May is the only window the text recommends. Jun-Aug is mentioned only as part of a "dry season" that the same sentence qualifies with "avoiding ... the hot, dry gió Lào winds of early-mid summer" - discouraging language, not a recommendation. No passage presents summer as worthwhile. Keeping Jun-Aug would rest on a reading the text does not support; Dec-May is supported directly. Residual risk: Aug ("late summer") is not separately discouraged, but it is not recommended either, so it stays out. | No. The owner can override with firsthand experience (e.g. keep Jun-Aug as a hot but visitable window). | Rewrite `bestTime` into one unambiguous sentence (Dec-May most comfortable; early-mid summer brings hot, dry gió Lào winds; Sep-Nov flooding), and fill the `null` seasonal insight from the same sentence. Add to a release batch after that. |
| `jade-emperor-pagoda` | **NEEDS owner confirmation** (not external research) | `[1..12]` if confirmed; otherwise stays unreleased | `bestTime`: "Early morning year-round offers the quietest atmosphere" plus lunar-day crowd notes; `insights.thingsToKnow.seasonal`: "Most active around Tết ... spectacular but very crowded". Content describes enclosed, smoke-filled prayer halls plus an open rear courtyard; nothing discourages any month. | 12 months is not contradicted, but it is not established either. "Early morning year-round" is a time-of-day phrase, and unlike the released indoor sites (`kim-lien-temple`, `voi-phuc-temple` style wording) there is no explicit statement that the visit is weather-independent or worthwhile in any season. Treating the enclosed halls as proof would be inference. | No external research. **Missing:** one explicit, owner-confirmed suitability statement, e.g. "Year-round - the main halls are indoors, so weather matters little; ...". | After confirmation: add that sentence to `bestTime` (and optionally the seasonal insight), keep `[1..12]`, release. |
| `hospital-cave` | **KEEP months, REMAIN UNRELEASED** | `[1..12]` (unchanged) | `status: "temporarily-closed"`; `statusNote`: both entrances gated as of 2026. `bestTime`: "Year-round (exterior only, 10-15 minutes - or skip entirely)"; opening hours: exterior accessible anytime; insight: "Accessible year-round. Cave interior closed regardless of season." | Months are factually consistent, but a "Best Months to Visit" strip on a page whose main experience is closed (and which says "skip entirely") is misleading. The current gate would **not** stop it: `--released` only blocks `closed` / `unverified`. | No. | Do not release while the status is non-active. Wording: drop "or skip entirely" from the season text (it is already covered in tips and FAQ) when the location is next touched. See the policy recommendation below. |

## Summary

### Phase 1
Clean: 175 released, all checks pass, strips and legacy cards render as expected, no accidental changes.

### Final decisions by category

| Category | Locations |
|---|---|
| KEEP (released, no change) | `ke-ga-lighthouse`, `phong-nha-botanic-garden` |
| NARROW (pending owner sign-off) | `quang-tri-ancient-citadel` → Dec-May |
| KEEP months, hold for status | `can-gio-beach`, `hospital-cave` |
| Owner confirmation needed | `jade-emperor-pagoda` |
| NEEDS external research | none (only optional checks) |

### Ready for the next release
- `quang-tri-ancient-citadel` - after owner sign-off on Dec-May and the one-sentence `bestTime` rewrite.
- `jade-emperor-pagoda` - after owner confirmation of year-round suitability and the added sentence.
- `ke-ga-lighthouse` and `phong-nha-botanic-garden` are already released and stay as they are. Their content fixes can ride along with the next batch.

### Requires external research
None is required. Optional only:
- `ke-ga-lighthouse` - crossing reliability in Aug-Oct (would explain or revisit the Aug exclusion).
- `phong-nha-botanic-garden` - which season has peak waterfall flow.

### Requires content / status fixes
- `ke-ga-lighthouse` - surface the boat-crossing caveat in the season text; reword the seasonal insight.
- `phong-nha-botanic-garden` - fix the seasonal insight that contradicts content on peak flow.
- `quang-tri-ancient-citadel` - rewrite the ambiguous `bestTime`; fill the `null` seasonal insight.
- `jade-emperor-pagoda` - add an explicit year-round suitability sentence (after confirmation).
- `can-gio-beach` - set `status: "temporarily-closed"` + `statusNote` for the fenced main beach.
- `hospital-cave` - drop "or skip entirely" from the season text.

### Policy recommendation (not implemented)

**Extend the release gate so `temporarily-closed` and `seasonally-closed` are blocked like `closed` and `unverified`.**

- Why: a "Best Months to Visit" strip is a positive recommendation, and these statuses mean the core experience is currently unavailable or unavailable for part of the year. The location page already shows a status banner for exactly these three statuses (`app/locations/[slug]/page.tsx`), so the gate would simply follow what the UI already treats as non-active.
- Impact today: **zero on the released set.** All 7 locations with a non-active status (`cat-ba-cannon-fort`, `elephant-waterfall` closed; `duc-pagoda`, `gieng-tien-peak`, `hospital-cave`, `kho-muong-cave` temporarily closed; `ho-chi-minh-mausoleum-complex` seasonally closed) are unreleased.
- Change: one line in `scripts/audit-best-time.ts` (the status check in `--released`), plus a sentence in CLAUDE.md.
- Possible later refinement: a `seasonally-closed` location could show a strip if its `bestMonths` excludes the closure window. Keep it blocked until a concrete case needs this.
- Related: decide whether long-running construction closures like `can-gio-beach` should use `temporarily-closed` (recommended), so the same gate covers them.

## Resolution log - post-Batch-2B cleanup release (2026-10-04, owner-approved)

| Location | bestMonths | Change | Release |
|---|---|---|---|
| `can-gio-beach` | unchanged (Nov-Apr) | `status: "temporarily-closed"` + `statusNote` taken from the existing content (main beach fenced since 2025, project expected to run until around 2029-2030, nearby alternatives) | stays unreleased (gate) |
| `quang-tri-ancient-citadel` | Dec-Aug → Dec-May | `bestTime` rewritten (Dec-May most comfortable; early-mid summer gió Lào; Sep-Nov flooding risk); seasonal insight filled | `batch-2c` |
| `jade-emperor-pagoda` | unchanged (all 12) | `bestTime` opens with the owner-approved year-round sentence; early-morning and lunar/Tết crowd guidance kept | `batch-2c` |
| `hospital-cave` | unchanged | removed "or skip entirely" from `bestTime` | stays unreleased (gate) |
| `ke-ga-lighthouse` | unchanged | boat-crossing caveat added to `bestTime`; seasonal insight reworded as a weather-dependent risk on some days | already released |
| `phong-nha-botanic-garden` | unchanged (all 12) | seasonal insight rewritten to match content (Mar-Aug clearer water / safer trekking; Sep-Feb fuller waterfall, slippery trails, fast murky streams not suitable for swimming, leeches) | already released |

- Release gate: `--released` now rejects `closed`, `unverified`, `temporarily-closed` and `seasonally-closed`. This was tested by adding `can-gio-beach` and `hospital-cave` to a scratch copy of the manifest: both were rejected with "status is temporarily-closed". The policy is documented in CLAUDE.md.
- Audit override added: `quang-tri-ancient-citadel` (the regex does not read "risk of flooding" as negative).
- Released total: 177.
