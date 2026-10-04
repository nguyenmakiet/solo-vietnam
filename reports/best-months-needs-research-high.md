# bestMonths - NEEDS_RESEARCH, High priority (owner decision sheet)

Inventory and decision sheet only. **No `bestMonths`, location content or release manifest was changed.** No external knowledge was used: every suggestion comes from what the location files already say.

**Scope.** The 59 unreleased NEEDS_RESEARCH locations on `main` @ `0fc8104` include 5 with a non-active `status`. The release gate blocks those, so they are left out here:

| Slug | Status |
|---|---|
| `kho-muong-cave` | temporarily-closed |
| `gieng-tien-peak` | temporarily-closed |
| `duc-pagoda` | temporarily-closed |
| `elephant-waterfall` | closed |
| `ho-chi-minh-mausoleum-complex` | seasonally-closed |

This sheet covers the **29 High-priority locations** among the remaining 54 active ones. That leaves 25 for the Medium/Low sheet.

**How to read it.**
- "Evidence" quotes or summarises `bestTime`, `insights.thingsToKnow.seasonal`, tips, content and FAQ. None of these files has a `bestSeasonNote` yet.
- "Current" is the existing `bestMonths`. None of these values comes from a month statement in `bestTime`; that is why they are flagged NEEDS_RESEARCH.
- Confidence:
  - **HIGH** - the file states the months clearly.
  - **MEDIUM** - seasonal evidence exists but needs an owner call.
  - **LOW / RESEARCH** - not enough evidence to decide.

## 1. Beach / island

| # | Location | Current bestMonths | Evidence currently in file | Suggested months | Confidence / reason |
|---|---|---|---|---|---|
| 1 | `bai-dai-cam-ranh-beach` | Jan-Aug | Seasonal: "Dry season (roughly January-August) is calmer and more reliable for a beach visit; the rainy season (roughly September-December) brings more rain and rougher seas that can disrupt plans". `bestTime`: time of day only. | `[1, 2, 3, 4, 5, 6, 7, 8]` (= current) | **HIGH** - the months are stated in the seasonal insight. |
| 2 | `ham-tien-beach` | Nov-Apr | FAQ: swimming "generally yes, especially in the dry season (roughly November to April)". Tip: calm "especially from November to April"; October "less predictable weather ... more cautious with water sports". Intro: "over 300 days of sunshine ... reliably good for beach visits even outside the peak dry season"; rip currents "outside the calm season". | `[11, 12, 1, 2, 3, 4]` (= current) | **HIGH** for Nov-Apr. Owner option: the intro says the beach is "reliably good ... even outside the peak dry season" - add May-Sep? Oct carries an explicit caution. |
| 3 | `six-senses-beach` | Mar-Sep | Seasonal: "Dry season (roughly Mar-Sep) gives the calmest, clearest water"; "the rainier Oct-Feb window brings bigger waves, though Côn Đảo is less affected". Tip: "Some visitors choose Oct-Feb specifically because Côn Đảo is less affected by rough seas". | `[3, 4, 5, 6, 7, 8, 9]` (= current) | **HIGH** for Mar-Sep. Owner option: Oct-Feb as a secondary season (the tip frames it positively). |
| 4 | `sunworld-beach-cat-ba` | Apr-Sep | Seasonal: "Swimming season Apr-Sep; the beach and evening venues continue year-round but water is cold Dec-Feb". Crowds: shoulder Apr-Jun, Sep-Nov "noticeably more relaxed". | `[4, 5, 6, 7, 8, 9]` (= current) | **HIGH** - swimming season stated. Owner option: Oct-Nov for the evening venues (the content says they run year-round). |
| 5 | `hang-cau-cliffs` | Apr-Aug | Tip and FAQ: "roughly April to August tends to have calmer water and better visibility"; outside these months snorkeling visibility "can drop noticeably". Around February: "colder water and stronger waves". | `[4, 5, 6, 7, 8]` (= current) | **HIGH** - the months are stated twice. |
| 6 | `pirate-islands` | Dec-Apr | Seasonal: "The sea is generally manageable for the crossing and water activities year-round, though roughly November-April tends to bring the calmest conditions and clearest water". `bestTime`: boat schedule only. | `[11, 12, 1, 2, 3, 4]` (adds Nov) | **HIGH** for Nov-Apr (the current value drops Nov from the stated window). Owner option: all 12 ("manageable ... year-round"). |
| 7 | `phuoc-tinh-fishing-village` | Nov-Apr | Seasonal: "Dry season (roughly November-April) brings calmer seas and generally higher fishing activity". `bestTime`: daily fish-market hours only. | `[11, 12, 1, 2, 3, 4]` (= current) | **HIGH** - stated. Owner option: the fish market runs daily, so year-round? Nothing says so. |
| 8 | `sa-vi-cape` | Apr-Sep | Seasonal: `null`. `bestTime`: "Any time of day works for the landmark itself" (time of day, not season). Tips: Trà Cổ Beach "especially April-July when the sea tends to be calm and clear"; "December-February brings noticeably colder, foggier conditions - a quieter, moodier alternative"; Trà Cổ beach "popular with Vietnamese families in summer"; Đình Trà Cổ festival "end of the 5th lunar month". | `[4, 5, 6, 7]` supported; Aug-Sep (summer families) and Dec-Feb (moody alternative) are owner calls | **MEDIUM** - the evidence is mostly about the neighbouring beach, and the landmark itself has no seasonal statement. |
| 9 | `dam-trau-beach` | Nov-Apr | Seasonal: "Less windy than other Côn Đảo beaches during the windier season (roughly from December onward)". `bestTime`: time of day, tide, plane-spotting. | **NEEDS_RESEARCH** | **LOW / RESEARCH** - no month recommendation; the only seasonal line compares wind with other beaches. |
| 10 | `doi-nhai-beach` | Nov-Apr | Seasonal: tide changes the beach; "windier months make for better kitesurfing conditions" (no months given). Swimming not recommended (no lifeguards). | **NEEDS_RESEARCH** | **LOW / RESEARCH** - no month evidence. |
| 11 | `ti-top-island` | Mar-May, Sep-Nov | Seasonal: hot, humid climb "if visiting in summer". Content: "On a clear autumn morning, visibility extends across the entire bay". | **NEEDS_RESEARCH** | **LOW / RESEARCH** - only a passing "autumn" visibility remark; nothing supports Mar-May. |
| 12 | `mui-tro-fishing-village` | Nov-Apr | Seasonal: `null`. Content: "The water is generally clear and calm in the dry season" (no months). | **NEEDS_RESEARCH** | **LOW / RESEARCH** - "dry season" is not defined in this file. |

## 2. Waterfall / outdoor nature

| # | Location | Current bestMonths | Evidence currently in file | Suggested months | Confidence / reason |
|---|---|---|---|---|---|
| 13 | `mooc-spring` | Feb-Aug | Seasonal: "Best visited roughly February-August on sunny days"; rainy season raises water and currents. FAQ: "roughly February through August"; "Avoid the rainy season from September onwards, when the water runs cold and currents can become genuinely dangerous". Tips: kayaking "even in the colder Dec-Feb season"; Vàng Anh blooms Feb-Apr. | `[2, 3, 4, 5, 6, 7, 8]` (= current) | **HIGH** - stated twice. Sep onward is explicitly dangerous (dangerous-season rule). |
| 14 | `red-sand-dunes` | all 12 | Seasonal: "Reasonably good year-round; very windy conditions are sometimes reported, which can affect comfort more than visibility". | `[1..12]` (= current) | **HIGH** - an explicit year-round suitability statement. |
| 15 | `khe-van-waterfall` | Jan-Aug | Tips: "drier months (roughly January-April) give a gentler, safer flow"; "rainy-season months bring a more dramatic, powerful flow but stronger, more dangerous currents"; "Visit May to September for the strongest water flow - ... more dangerous; the lowest, final tier remains the calmest and safest spot for a swim"; "Late October and November ... reed flower season ... highly photogenic". Seasonal and visitor tip: summer good for swimming. FAQ: "January has lower water levels but is still visitable". | `[1, 2, 3, 4]` supported (safe flow); Oct-Nov (reed season) supported; **May-Sep is an owner call** | **MEDIUM** - the content both recommends summer swimming (lowest tier) and calls the upper tiers dangerous then. Dec is unmentioned. |
| 16 | `pa-sy-waterfall` | Sep-Dec | Seasonal: "Roughly September through early December is often cited as a good weather window"; "Heavy rains around November-December have caused temporary closures in the past". FAQ: "roughly September through early December for the best weather". Swimming is not a draw in any season. | `[9, 10, 11]`, or keep `[9, 10, 11, 12]` | **MEDIUM** - "through early December" vs "heavy rains around November-December have caused closures". Owner decides Dec (and whether Nov stays). |
| 17 | `fairy-stream` | Nov-Apr | Seasonal: "Water flow is better in the rainy season (roughly November onward)". Tip: "The stream dries to a trickle in extreme dry season (Feb–Apr) - the walk is still possible but less scenic". | `[11, 12, 1]` supported; Feb-Apr ("possible but less scenic") and May-Oct (unmentioned) are owner calls | **MEDIUM** - also, this file puts the rainy season from November, while other Mũi Né-area files say otherwise (`white-sand-dunes`: Sep-Dec rainy; `mui-ne-fishing-village`: Sep-Nov storms). Worth an owner fact check. |
| 18 | `dau-tieng-lake` | Nov-Apr | Seasonal: "roughly December-April is the low-water period, when ... camping spots are easiest to find; roughly August-October is the flood season, when ... good camping spots become scarce. Mid-June is often cited as a sweet spot". Tip: dam releases "mostly Oct-Dec", announced only 1-2 days ahead - check before camping near the shore. | `[12, 1, 2, 3, 4, 6]` supported; Nov (release window), May and Jul are owner calls | **MEDIUM** - clear camping windows, but Nov is in the current value while sitting in the dam-release window. |
| 19 | `yen-minh-pine-forest` | Jan-Apr, Sep-Dec | Seasonal: `null`. Intro: "In the mornings, especially from October through February, mist collects in the forest". `bestTime`: time of day only. | `[10, 11, 12, 1, 2]` supported; Mar-Apr and Sep (in the current value) unsupported | **MEDIUM** - the mist season is stated; nothing else is. |
| 20 | `dark-cave` | Feb-Aug | Seasonal: water activities "may be restricted right after typhoons - check conditions if visiting during the rainier months"; cooler water in February. Tip: rainy-season river "reddish-brown and murky rather than the turquoise blue seen in most online photos, which are taken in the dry season"; prices drop "roughly mid-September to March". | **NEEDS_RESEARCH** | **LOW / RESEARCH** - "dry season" and "rainier months" are never given months in this file. |

## 3. Rice field / seasonal landscape

| # | Location | Current bestMonths | Evidence currently in file | Suggested months | Confidence / reason |
|---|---|---|---|---|---|
| 21 | `s-shape-rice-terraces` | May-Jun, Sep-Oct | Seasonal: "Only worth a dedicated visit during the green (late May-mid June) or golden (late September-early October) rice windows; outside these the field can look bare or muddy". Tip and FAQ say the same. | `[5, 6, 9, 10]` (= current) | **HIGH** - stated four times, including when not to go. |
| 22 | `don-village` | May-Jun, Sep-Oct | Seasonal: green late May-early June, gold late September-early October; "outside these windows the fields are in fallow or early-growth stages". FAQ the same. Tip: "Pù Luông is significantly cooler than the lowlands in summer, making it a popular highland escape". | `[5, 6, 9, 10]` (= current) | **HIGH** - stated. Owner option: a summer highland-escape month (Jul-Aug)? The tip is positive but generic. |
| 23 | `kho-muong-village` | May-Jun, Sep-Oct | Seasonal: green late May-early June, golden late September-early October "matching the wider Pù Luông rice calendar". Tip: valley microclimate cooler in summer, milder in winter. | `[5, 6, 9, 10]` (= current) | **HIGH** - stated. |
| 24 | `ta-pa-fields` | Jul-Nov | Seasonal: "Most vivid during the July-November rice season, especially September to early November"; "quieter, greener, and less dramatic outside this window". Tip and FAQ: harvest "can extend into early December". | `[7, 8, 9, 10, 11]` (= current) | **HIGH** - stated. Owner option: Dec ("can extend into early December" in some years). |
| 25 | `vinh-trung-fields` | Aug-Nov | Seasonal: "August-November (flood season) gives the reflective water shots the area is known for; November-April brings golden ripening or harvested rice instead, with a different but still attractive character". FAQ the same. | `[8, 9, 10, 11]` HIGH; adding Dec-Apr is supported ("still attractive") | **MEDIUM** - under the "all worthwhile months" rule the content supports Aug-Apr (all except May-Jul). Owner decides whether the non-flood look qualifies. |
| 26 | `masara-hill` | Jan-Apr, Nov-Dec | Seasonal: "November-December is best for the pink grass; the rainy season makes roads muddy and treacherous". Intro: green Jan-Feb, golden Mar-Apr; rainy season "(roughly June-October) ... a better season to admire from a distance than to plan a visit around". FAQ: Nov-Dec, peak mid-late Nov; by January faded. | `[11, 12, 1, 2, 3, 4]` (= current) | **HIGH** - Nov-Dec is the peak; Jan-Apr are described as distinct looks; Jun-Oct is "treacherous" (dangerous-season rule). May is unmentioned. |

## 4. Other outdoor

| # | Location | Current bestMonths | Evidence currently in file | Suggested months | Confidence / reason |
|---|---|---|---|---|---|
| 27 | `quan-ba-heaven-gate` | Jan-Apr, Sep-Dec | Tips: "Aug-Sep brings golden rice harvest, Oct-Dec brings buckwheat flowers, and Dec-Feb/Mar brings a flower-valley bloom as a colder alternative window - Sep-Nov and Mar-Apr are generally the best overall months"; "Avoid Jun-Jul specifically, when heavier rain and fog make the road slippery and views unreliable". Intro: Oct-Nov cloud inversions. | `[8, 9, 10, 11, 12, 1, 2, 3, 4]` (adds Aug) | **HIGH** - every month Aug-Apr is named positively; Jun-Jul is an explicit avoid; May is unmentioned. |
| 28 | `khau-pha-pass` | May-Jun, Sep-Oct | Tips: "September to October is peak season" (harvest + paragliding festival); "**Avoid the June-August rainy season** specifically if possible - slippery roads and landslide risk". Seasonal: fog hazards year-round. | `[9, 10]` (drops May and Jun) | **HIGH** - the current value includes Jun, inside an explicit avoid window, and May is unsupported. |
| 29 | `quan-ba-twin-mountains` | Mar-May, Sep-Nov | Seasonal and FAQ: "Generally best September-November for cooler weather and clearer skies". Tips: "green rice fields run roughly May-Aug, turning golden Sep-Oct; buckwheat flower season (roughly Oct-Dec) and the Jan-Mar window also draw visitors"; "Sep-Nov and Mar-Apr are generally the best overall months". Oct-Nov cloud inversions. | `[9, 10, 11, 12, 1, 2, 3, 4]` supported; May-Aug (green rice) is an owner call | **MEDIUM** - May-Aug is described only as green rice; the neighbouring `quan-ba-heaven-gate` file says to avoid Jun-Jul in the same area. |

## Summary

**Total High-priority locations: 29**, out of 54 active NEEDS_RESEARCH. The 5 non-active ones are excluded.

### Enough evidence to decide now - 16
The suggested value comes straight from the file. 12 match the current value; 3 change it (adding a month or removing an unsupported one). `red-sand-dunes` keeps all 12.

| Slug | Suggested months | vs current |
|---|---|---|
| `bai-dai-cam-ranh-beach` | Jan-Aug | same |
| `ham-tien-beach` | Nov-Apr | same |
| `six-senses-beach` | Mar-Sep | same |
| `sunworld-beach-cat-ba` | Apr-Sep | same |
| `hang-cau-cliffs` | Apr-Aug | same |
| `pirate-islands` | Nov-Apr | **adds Nov** |
| `phuoc-tinh-fishing-village` | Nov-Apr | same |
| `mooc-spring` | Feb-Aug | same |
| `red-sand-dunes` | all 12 | same |
| `s-shape-rice-terraces` | May-Jun, Sep-Oct | same |
| `don-village` | May-Jun, Sep-Oct | same |
| `kho-muong-village` | May-Jun, Sep-Oct | same |
| `ta-pa-fields` | Jul-Nov | same |
| `masara-hill` | Nov-Apr | same |
| `quan-ba-heaven-gate` | Aug-Apr | **adds Aug** |
| `khau-pha-pass` | Sep-Oct | **drops May and Jun** |

Several of these also have an optional owner extension (listed in their rows): `ham-tien-beach`, `six-senses-beach`, `sunworld-beach-cat-ba`, `pirate-islands`, `phuoc-tinh-fishing-village`, `don-village`, `ta-pa-fields`.

### Needs owner confirmation - 8
`sa-vi-cape`, `khe-van-waterfall`, `pa-sy-waterfall`, `fairy-stream`, `dau-tieng-lake`, `yen-minh-pine-forest`, `vinh-trung-fields`, `quan-ba-twin-mountains`

### Genuinely needs research - 5
No usable month evidence in the file: `dam-trau-beach`, `doi-nhai-beach`, `ti-top-island`, `mui-tro-fishing-village`, `dark-cave`.

### Notes
- A pattern across this group: many of these locations are not really "unsupported". `bestTime` is time-of-day only, but the seasonal insight, tips or FAQ state the months. Once approved, they will need audit overrides (the regex only reads `bestTime`), as in Batches 2D and 3.
- **Fact check worth doing:** `fairy-stream` puts the rainy season from November, which conflicts with other Mũi Né-area files in this repo.
- **Remaining after this sheet:** 25 Medium/Low NEEDS_RESEARCH locations (temples, pagodas, historic sites, city spots), plus the 5 non-active ones that wait on status.

## Resolution log - Batch 4 (2026-10-04, owner decisions)

Released as `batch-4` (21). Total released: 216/258.

- **Owner source-based decisions (5):**
  - `dam-trau-beach` → all 12
  - `doi-nhai-beach` → Dec-Apr
  - `ti-top-island` → Jun-Jul
  - `mui-tro-fishing-village` → Jun-Aug
  - `dark-cave` → Mar-Jul
- **Sheet suggestions applied (16):** the "enough evidence" group above.
  - Months changed for 3: `pirate-islands` (+Nov), `quan-ba-heaven-gate` (+Aug), `khau-pha-pass` (→ Sep-Oct).
  - The other 13 already had the suggested months.
  - No optional extensions were added.
- **Content:** no wording changed. Two soft mismatches were left for the owner:
  - `ti-top-island`: "On a clear autumn morning, visibility extends across the entire bay".
  - `mui-tro-fishing-village`: "clear and calm in the dry season", with no months given.
- **Audit overrides:** 21 added, because `bestTime` is time-of-day only for all of them.
- **Not processed:** the 8 owner-decision rows (`sa-vi-cape`, `khe-van-waterfall`, `pa-sy-waterfall`, `fairy-stream`, `dau-tieng-lake`, `yen-minh-pine-forest`, `vinh-trung-fields`, `quan-ba-twin-mountains`) and the 25 Medium/Low locations.

## Resolution log - Batch 5 (2026-10-04, owner decisions on the 8 remaining rows)

| Location | bestMonths before → after | Content change |
|---|---|---|
| `sa-vi-cape` | Apr-Sep (unchanged) | - |
| `khe-van-waterfall` | Jan-Aug → Jan-Apr + Oct-Nov | Tip, seasonal insight and visitor tip no longer recommend May-Sep; they describe it as the strongest but dangerous flow (dangerous-season rule) |
| `pa-sy-waterfall` | Sep-Dec (unchanged, owner keeps Dec) | - |
| `fairy-stream` | Nov-Apr → Mar + Nov | Seasonal insight rewritten from the owner's source; "Feb–Apr" removed from the trickle tip |
| `dau-tieng-lake` | Nov-Apr → Dec-Apr + Jun | - |
| `yen-minh-pine-forest` | Jan-Apr + Sep-Dec → Mar-Apr + Sep-Nov | Seasonal insight filled from the owner's source (was null) |
| `vinh-trung-fields` | Aug-Nov → Aug-Apr | - |
| `quan-ba-twin-mountains` | Mar-May + Sep-Nov → Sep-Apr | - |

Released as `batch-5` (8), each with an audit override. Total released: 224/258.
