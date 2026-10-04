# bestMonths - Batch 2B plan (medium-confidence EXPAND candidates)

Read-only plan. **No location data, manifest, UI, commit or PR was changed.**

## Phase 1 - Post-release sanity check (main @ `7ade021`, PR #19 merged)

| Check | Result |
|---|---|
| Released total | 160 (`batch-1` 152 + `batch-2a` 8) - `audit:best-time -- --released` passes |
| `npx tsc --noEmit` | pass |
| `npm run audit:taxonomy` | pass |
| `npm run build` | pass |
| Released pages show "Best Months to Visit" | `angel-eye-mountain` (12), `a-pa-chai` (7), `back-beach-vung-tau` (5), `bau-sau` (10), `cape-ca-na` (11), `son-doong-cave` (8), `tran-quoc-pagoda` (12), `vinpearl-cable-car` (10), `phoenix-unicorn-islands-my-tho` (9) - active-month counts match the data |
| Held locations keep the legacy "Best Time to Visit" card | `can-gio-beach`, `quang-tri-ancient-citadel`, `jade-emperor-pagoda`, `hospital-cave` (plus unreleased control `bai-dai-cam-ranh-beach`) |
| Cards | Province card for `tran-quoc-pagoda` shows "Year-round"; `can-gio-beach` keeps the legacy "Nov - Apr" |
| Accidental changes | `git diff 8827a72..7ade021` touches only the release manifest, the 7 Batch 2A location files and the Batch 2A report |

**Release is clean.** One note, not caused by Batch 2A: `npm run build` regenerates `public/search-index.json`, and the committed copy is stale relative to the data. Vercel rebuilds it on deploy, so it is not a blocker. Committing a refreshed copy, or untracking it, is a separate housekeeping decision.

## Phase 2 - Batch 2B final owner decisions (2026-10-04)

The decision table below replaces the earlier draft proposals. Where the owner replaced an earlier all-year or EXPAND proposal, only the final value is kept. "Source" means the owner's seasonal source given with the decision; it is not part of the current location content.

### Final decisions

| Location | Owner decision | Current → final bestMonths | Owner reason (summary) | Data change |
|---|---|---|---|---|
| `am-tien-cave` | EXPAND (final = current) | Jan-Apr, Sep-Nov → unchanged | Jan-Apr cool spring travel; Sep-Nov pleasant autumn for photography. May and Dec not supported; Jun not added. | none |
| `cat-ba-town` | EXPAND | Apr-Jun, Sep-Nov → Apr-Oct | Apr-Oct cool and suited to resort/beach activities; peak May-Jul. Not all-year. | yes |
| `cat-co-beach` | EXPAND | Apr-Aug → Apr-Oct | As in the draft report (Sep-Oct storm caveat, check forecast). | yes |
| `cat-tien-national-park` | EXPAND (final = current) | Nov-May → unchanged | Nov-May explicitly the best period; Jun-Oct wording not strong enough to add. Not all-year. | none |
| `diep-son-island` | EXPAND | Dec-Jun → Dec-Sep | As in the draft report (Jul-Sep quieter, higher chance of rain). | yes |
| `french-village-ba-na` | EXPAND (final = current) | Mar-Sep → unchanged | Mar-Sep explicitly ideal (mild sunshine, outdoor weather). Not all-year. | none |
| `hoan-kiem-lake` | EXPAND (narrows in practice) | Aug-Apr → Aug-Oct | Aug-Oct explicitly the best period (pleasant autumn, less harsh sun/rain). Not all-year. | yes |
| `mui-ne-fishing-village` | EXPAND (replaces in practice) | Nov-Apr → Jun-Aug | Source: Jun-Aug ideal (little rain, plenty of sun); Sep-Nov storms/heavy rain dangerous for coastal exploration. Not all-year. | yes |
| `one-pillar-pagoda` | EXPAND | Oct-Apr → all 12 | As in the draft report ("photogenic year-round"). | yes |
| `tri-an-lake` | EXPAND | Sep-Jun → all 12 | As in the draft report (Jul-Sep algae bloom). | yes |
| `tuyen-lam-lake` | EXPAND | Nov-May → Nov-Jun | As in the draft report ("Nov - May/Jun"). | yes |
| `west-lake` | EXPAND | Oct-Apr → all except May | As in the draft report; May excluded (no evidence). | yes |
| `white-sand-dunes` | EXPAND (replaces in practice) | Nov-Apr → Apr-Aug | Source: Apr-Aug most visually suitable (clear skies, white clouds, lotus season); Sep-Dec rainy, wet sand loses the white look. Not all-year. | yes |
| `ke-ga-lighthouse` | conflict resolved | Nov-Aug → all except Aug | Source: best periods Feb-Jul and Sep-Jan, so Aug excluded. | yes |
| `phong-nha-botanic-garden` | conflict resolved | Mar-Aug → all 12 | Source: beautiful year-round, Dec-Aug best; Sep-Nov only "slippery, check forecast" - a caution, not a dangerous-season exclusion. | yes |
| `khau-coc-cha-pass` | KEEP | Nov-Apr → unchanged | Wet-season riding is dangerous (dangerous-season rule). | none |
| `thien-mu-pagoda` | KEEP | unchanged | Jan pilgrimage only framed as "busier". | none |

Release set (`batch-2b`): the 15 EXPAND / resolved locations above. `khau-coc-cha-pass` and `thien-mu-pagoda` are unchanged and not added to the manifest in this batch.

### `ke-ga-lighthouse` - boat-access contradiction (open content/access issue)

- Owner source: best periods Feb-Jul and Sep-Jan → final bestMonths excludes only Aug.
- Existing `insights.thingsToKnow.seasonal`: "rough conditions in the rainy season (May-Oct) can suspend boat crossings entirely". The boat is the only access to the islet.
- Existing `bestTime`: "May - Aug is still generally visitable"; "Sep - Oct brings occasional rain showers".
- Handling: the month decision is applied as the owner decided. The existing evidence says crossings *can* be suspended, not that May-Jul / Sep-Oct are materially inaccessible, so it does not block the decision. The three statements still disagree (the access insight, the bestTime "May - Aug visitable", and the new Aug exclusion) and must be reconciled in a later content pass. No wording was changed in this batch.

### Strip vs displayed text - implementation finding

Released locations show the legacy `bestTime` directly under the month strip until the text migration. For five locations the final months contradict that displayed text. Content changes are out of scope for this batch, so these need an owner call before release:

| Location | Final strip | Displayed `bestTime` says | Severity |
|---|---|---|---|
| `white-sand-dunes` | Apr-Aug | "Nov – Apr (dry season, calmest weather; ...)" | Direct - the recommended window is the opposite of the strip |
| `mui-ne-fishing-village` | Jun-Aug | "Nov - Apr (dry season); early morning any time of year for the fish market" | Direct - same; the FAQ also says "worth visiting any time of year" |
| `hoan-kiem-lake` | Aug-Oct | "Aug - Oct ... most pleasant. Oct - Apr more broadly for cool dry season ...; ... year-round" | Partial - Nov-Apr is recommended as a broader window |
| `cat-ba-town` | Apr-Oct | "Apr - Jun and Sep - Nov (shoulder seasons avoid summer crowds ...)" | Partial - Nov recommended but excluded; Jul-Aug included while the text steers away from them |
| `ke-ga-lighthouse` | all except Aug | "May - Aug is still generally visitable" | Minor - Aug |

The other 10 are consistent with their text. Where the text mentions an excluded season with caveats (`am-tien-cave`, `cat-co-beach`, `cat-tien-national-park`, `french-village-ba-na`), it only needs an audit override.

Also note: the final values for `hoan-kiem-lake`, `mui-ne-fishing-village`, `white-sand-dunes` and `cat-tien-national-park` follow a "best / ideal period" reading, while CLAUDE.md defines `bestMonths` as every month reasonably worth considering. This is an owner decision; record it if it is meant to override the semantic for these locations.

**Owner resolution (2026-10-04): align text for the 5.** Only the season wording of these five was rewritten to match the final months and the owner's source reasons. No other content was touched:

- `white-sand-dunes` - `bestTime` season sentence → "Apr - Aug is the most visually striking period - clear skies, white clouds, and lotus season on the lake. Sep - Dec is the rainy season, when wet sand loses its characteristic white look." The time-of-day part is unchanged.
- `mui-ne-fishing-village` - `bestTime`, `insights.thingsToKnow.seasonal` and the best-time FAQ answer → Jun-Aug ideal, Sep-Nov storms dangerous for coastal exploration; removed "any time of year" / "regardless of season".
- `hoan-kiem-lake` - `bestTime` and `insights.thingsToKnow.seasonal` → Aug-Oct only; removed "Oct - Apr more broadly" and "year-round".
- `cat-ba-town` - `bestTime`, `insights.thingsToKnow.crowds` and `insights.thingsToKnow.seasonal` → Apr-Oct main season, peak May-Jul.
- `ke-ga-lighthouse` - `bestTime` → "The best periods are Feb - Jul and Sep - Jan ..."; "May - Aug" → "May - Jul". `insights.thingsToKnow.seasonal` (boat-access claim) is intentionally left unchanged, see the access contradiction above.

## Resolution log - Batch 2B release

- Released: 15 locations as `batch-2b`; total released 175.
- `bestMonths` changed (12): `cat-ba-town`, `cat-co-beach`, `diep-son-island`, `hoan-kiem-lake`, `mui-ne-fishing-village`, `one-pillar-pagoda`, `tri-an-lake`, `tuyen-lam-lake`, `west-lake`, `white-sand-dunes`, `ke-ga-lighthouse`, `phong-nha-botanic-garden` (`updatedAt` bumped).
- Released without a data change (3): `am-tien-cave`, `cat-tien-national-park`, `french-village-ba-na`.
- Unchanged and not released: `khau-coc-cha-pass`, `thien-mu-pagoda`.
- Audit overrides (regex disagrees, reviewed): `am-tien-cave`, `cat-co-beach`, `cat-tien-national-park`, `french-village-ba-na`, `white-sand-dunes`.
