# bestMonths - Batch 3 owner sheet (12 locations)

A worksheet for owner decisions. **No data has been changed for these locations.** For each row, the "Proposed default" is what will be applied if you answer **OK**. Otherwise, write the months you want (and a short reason if it changes the season text).

Every location object was read in full. The regex audit only reads `bestTime`, so several "conflicts" turn out to be supported by `insights.thingsToKnow.seasonal`, tips or FAQ. Those are marked **(supported elsewhere)**.

Months: 1 = Jan ... 12 = Dec. "Lunar Jan-Mar" ≈ solar Feb-Apr.

## A. Former CONFLICT rows (8)

| # | Location | Current bestMonths | Evidence in the file | Question for owner | Proposed default | Owner answer |
|---|---|---|---|---|---|---|
| 1 | `ba-ho-waterfall` | Jan-Aug | `bestTime`: Feb-Aug "most reliably safe" (dry season, swimming); Dec-Jan "sometimes" jade-green water "at the tail end of flood season, so check conditions"; **"Avoid Sep-Nov"** (flash floods). Safety/FAQ: flash floods "roughly September to November". | Is the Dec-Jan jade-green window worth considering? Today Jan is in and Dec is out, which splits the same window. | `[12, 1, 2, 3, 4, 5, 6, 7, 8]` - include Dec (the danger warning only covers Sep-Nov; Dec-Jan carries a "check conditions" caveat) | |
| 2 | `bai-nhat` (file `nhat-beach.ts`) | Mar-Oct | **(supported elsewhere)** `bestTime` is time-of-day only, but insights.seasonal and FAQ say "best conditions roughly March to October: calmer water, warmer weather, less wind". Tip: "November to December brings green algae season - the boulders turn vivid green". | Keep Mar-Oct, or add Nov-Dec for the green-algae photography season ("windier conditions" outside Mar-Oct)? | `[3, 4, 5, 6, 7, 8, 9, 10]` KEEP | |
| 3 | `bich-dong-pagoda` | Mar-Jun | `bestTime`: late May (golden rice), Mar-Apr (dry, cool). insights.seasonal: "Late May-early Jun: golden rice ... Jan-Mar (lunar): festival season, lively atmosphere. Apr: dry, cool. Rainy season (Jun-Oct): lush green but slippery steps". Tip: lunar festival season is a "good time to visit". | Add the lunar festival season (≈ solar Feb)? Jun is supported (early-June harvest). Should the rainy season (Jul-Oct, "lush green but slippery steps") be included? | `[2, 3, 4, 5, 6]` - add Feb (festival); Jul-Oct stay out | |
| 4 | `dong-van-market` | Jan-Mar, Oct-Dec | **(supported elsewhere)** insights.seasonal: "Runs year-round. Oct-Mar is the richest atmosphere when highland communities are less busy with farming. Oct-Nov adds buckwheat flowers". `bestTime`: Sunday morning. | Keep Oct-Mar, or open to all 12 (the market runs every Sunday all year)? | `[10, 11, 12, 1, 2, 3]` KEEP | |
| 5 | `hieu-village` | May-Jun, Sep-Oct | **(supported elsewhere)** insights.seasonal: rice "green in late May-early June and gold in late September-early October". `bestTime`: June has the strongest waterfall flow + first harvest. | Keep the two rice windows? | `[5, 6, 9, 10]` KEEP | |
| 6 | `hmong-king-palace` | all 12 | `bestTime`: "Sep - Nov (buckwheat flower season; best weather for the Ha Giang loop overall)". Tip: "Visit in October for nearby buckwheat flower fields, or anytime for the Yên Minh pine forest along the approach road". insights.seasonal is `null`. A stone heritage compound; nothing discourages any month. | Is the palace worth visiting year-round (heritage compound, not weather-dependent)? If yes, add one sentence saying so. | owner confirms year-round → `[1..12]` + one sentence. If not confirmed → `[9, 10, 11]` | |
| 7 | `ho-dynasty-citadel` | Jan-Apr, Oct-Dec | `bestTime` is time-of-day only ("if visiting in summer (May-Aug), stick to early morning or late afternoon"). insights.seasonal: "Hot and dry inside the citadel in summer; plan visits to avoid peak heat. Ongoing restoration work (2025-2028)". | Which months? Summer heat is described as a time-of-day issue, not an avoid. Restoration 2025-2028 may close parts of the site (no `status` set). | owner decides. Suggest `[10, 11, 12, 1, 2, 3, 4]` KEEP (cool season) + a season sentence; or all 12 with a heat caveat | |
| 8 | `viet-hai-village` | Feb-Jun, Oct-Dec | `bestTime`: Feb-Mar (spring fog) or Jun (rice harvest); **"Avoid Jul-Aug when rough seas can prevent boat access"**. Tips: "July and August often have rough seas that prevent boat access - use the trek route in those months" (12km jungle trek is the alternative). | Apr-May and Oct-Dec are not mentioned anywhere - keep them? Should Jul-Aug stay out (boat), given the trek route still works? | owner fills. Strictly supported: `[2, 3, 6]`. Keep current if you know Apr-May / Oct-Dec are fine | |

## B. Other held rows (4)

| # | Location | Current bestMonths | Evidence in the file | Question for owner | Proposed default | Owner answer |
|---|---|---|---|---|---|---|
| 9 | `an-binh-island` | Apr-Aug | `bestTime`: Apr-Aug calm seas, clearest water; "Sep - Dec seas are rougher and **best avoided**"; late Dec-Apr green moss is "a niche draw for photographers even though it overlaps with rougher sailing conditions early in that window". Tip: crossing "can be rough outside the dry season - avoid if seas are choppy". | Add the moss season (Jan-Mar), or keep Apr-Aug? | `[4, 5, 6, 7, 8]` KEEP | |
| 10 | `ta-van-village` | Jan-Apr, Sep-Oct, Dec | `bestTime`: Sep-Oct golden terraces ("some sources cite Aug-Sep"), Mar-Apr green, Dec-Feb "worth considering". insights.seasonal: "Rice harvest season (roughly **late August**-September)". | Add Aug (late-Aug harvest)? | `[1, 2, 3, 4, 8, 9, 10, 12]` - add Aug | |
| 11 | `independence-palace` | Nov-Apr | `bestTime`: Nov-Apr "outdoor grounds more comfortable; interior is air-conditioned year-round". The main experience is the preserved interior. | Is it worth visiting year-round (the interior is the draw; the heat only affects the grounds)? If yes, add one sentence saying so. | owner confirms → `[1..12]` + sentence. If not → KEEP `[11, 12, 1, 2, 3, 4]` | |
| 12 | `notre-dame-cathedral-saigon` | Nov-Apr | Interior closed for restoration since 2017 (exterior + square only). `bestTime`: Nov-Apr; "exterior is photogenic year-round but rain makes the square uncomfortable"; December Christmas lights. No `status` set. | (a) Should a location whose interior has been closed for years get a strip (consider `status: "temporarily-closed"` like Can Gio, which would block release)? (b) If released: keep Nov-Apr, or all 12 ("photogenic year-round")? | owner decides (a). If released: KEEP `[11, 12, 1, 2, 3, 4]` | |

## Notes

- Several rows (2, 4, 5) are already supported by the location's own insights. Answering OK releases them without data changes, each with an audit override.
- Rows 6 and 11 need one owner-confirmed sentence each, like `jade-emperor-pagoda`.
- Row 12 is a status question first.
- Name note: the file is `data/locations/nhat-beach.ts`, but the slug is `bai-nhat` (the earlier "name correction" was wrong; `bai-nhat` is correct).

## Resolution log - Batch 3 (2026-10-04, owner decisions)

| Location | bestMonths before → after | Wording change |
|---|---|---|
| `bai-nhat` | Mar-Oct (unchanged) | - |
| `dong-van-market` | Oct-Mar (unchanged) | - |
| `hieu-village` | May-Jun + Sep-Oct (unchanged) | - |
| `an-binh-island` | Apr-Aug (unchanged) | - |
| `ba-ho-waterfall` | Jan-Aug → Dec-Aug | - (Dec-Jan is already in the text) |
| `bich-dong-pagoda` | Mar-Jun → Feb-Jun | `bestTime`: "late May - early June", plus "Lunar Jan - Mar (around Feb) for the festival season" (from the existing seasonal insight) |
| `ta-van-village` | + Aug | - (late-Aug harvest is already in the text) |
| `hmong-king-palace` | all 12 (unchanged) | `bestTime` opens with the owner-confirmed year-round sentence |
| `independence-palace` | Nov-Apr → all 12 | `bestTime` opens with the owner-confirmed year-round sentence (the interior is the main experience) |
| `ho-dynasty-citadel` | Oct-Apr → Nov-Aug | `bestTime` and the seasonal insight rewritten from the source: Nov-Apr ideal; May-Aug visitable early or late in the day; Sep-Oct unstable weather / heavy rain. Restoration note kept |
| `viet-hai-village` | Feb-Jun + Oct-Dec → Feb-Mar, Jun, Oct-Dec | `bestTime`: added "Oct–Dec is quieter with good conditions" (from the existing seasonal insight). The sheet originally said Oct-Dec was unmentioned; corrected, and the owner chose to include it |
| `notre-dame-cathedral-saigon` | Nov-Apr → all 12 | `bestTime`: year-round for the exterior and square, with the interior closed for restoration. `status` stays active: the exterior is a valid visit, and the interior closure is already explicit throughout the content |

Released as `batch-3` (12). Audit overrides: `an-binh-island`, `bai-nhat`, `bich-dong-pagoda`, `dong-van-market`, `hieu-village`. Total released: 195.
