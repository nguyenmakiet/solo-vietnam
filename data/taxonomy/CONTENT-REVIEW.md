# Location Taxonomy - Content Review Log

Location-by-location review of the four taxonomy fields (`type`, `categories`, `experiences`, `tags`).
The vocabulary is **not frozen**. It evolves from what the real content needs. Consolidation and the
canonical freeze happen after the full review. The goal is to review each location accurately and collect
good evidence for that consolidation, not to reach a clean vocabulary after every batch.

- Branch: `claude/location-taxonomy-content-review` (from the Phase 1 architecture branch)
- Scope: only the four taxonomy fields. No prose, SEO, slug, coordinates, images or `updatedAt` changes.
- Order: `allLocations` order in `data/all-locations.ts`, ~20 per batch.
- Checkpoint: pause after ~50-100 locations to reassess the vocabulary before continuing.

## Progress

| Batch | Range (index) | Locations | Files changed | Status |
|-------|---------------|-----------|---------------|--------|
| 1 | 0-19 | `a-pa-chai` -> `bai-mon-beach` | 19 | done (corrected in batch 2, see below) |
| 2 | 20-39 | `bai-tu-long-bay` -> `can-gio-monkey-island` | 19 | done |
| 3 | 40-59 | `can-ti-bridge` -> `dalat-railway-station` | 20 | done |
| - | - | **Checkpoint 1** (60 reviewed) | - | [see below](#checkpoint-1---60-locations-reviewed) |
| 4 | 60-79 | `dam-trau-beach` -> `elephant-mountain` | 19 (+2 ethnic-tag follow-ups) | done |
| 5 | 80-99 | `elephant-waterfall` -> `hieu-village` | 19 | done |
| - | - | **Checkpoint 2** (100 reviewed) | - | [see below](#checkpoint-2---100-locations-reviewed) |
| 6 | 100-149 (50) | `hieu-waterfall` -> `ma-pi-leng-pass` | 48 | done |
| - | - | **Checkpoint 3** (150 reviewed) | - | [see below](#checkpoint-3---150-locations-reviewed) |
| 7 | 150-199 (50) | next after checkpoint | - | waiting |

**Reviewed: 150 / 257. Remaining: 107.** Batch size is 50 from batch 6 onward (R23). Review depth is unchanged.

Note: batch 3 was requested as "from `cat-ba-island`". No location with that slug exists; `allLocations`
index 40 is `can-ti-bridge`, so batch 3 starts there and covers the Cát Bà locations (`cat-ba-cannon-fort`,
`cat-ba-national-park`, `cat-ba-town`).

---

## Review rules

### Owner rules (set after batch 1)

- **R1 - No automatic removal, rename or merge of values that have dependencies.** This covers any existing
  value with a public URL, significant usage or a known downstream dependency (for example `/experiences/*` pages,
  the `/locations` filters, destination "What to do"). The proposed change is recorded as MANUAL REVIEW and
  decided at consolidation. In practice this review now only **adds** `type`/`categories`/`experiences` values,
  or reorders `type` (D2).
- **R2 - No premature new categories.** Geographic or environmental themes (`coast`, `beach`...) are recorded as
  candidates only. The six initial themes are the only categories in use.
- **R3 - Ethnic/cultural granularity is undecided.** Evidence is collected in
  [Ethnic culture evidence](#ethnic-culture-evidence). No new ethnic tags are applied, and a mention of an ethnic group
  is not enough for a tag.
- **R4 - Recognition/status concepts** (UNESCO, Ramsar, national relic, intangible heritage...) are tracked as a separate
  candidate concept in [Recognition / status candidates](#recognition--status-candidates). They are not added to `tags`.
- **R5 - The public experience architecture stays stable.** Proposed experiences get no `/experiences/*` page.
  `ExperienceValue` (page registry) = the 20 `canonical` values. Existing public experiences are never renamed or merged.
- **R6 - UI changes are minimal compatibility fixes only.** No taxonomy UI or information-architecture redesign.
- **R8 - D9 is strict (set after batch 2).** Replace a legacy label only when it is 1:1 with the canonical tag.
  Related-but-different concepts (for example "French Architecture" vs `french-influence`) keep both, and the case
  is marked MANUAL REVIEW.
- **R9 - Hiking vs trekking is high priority.** Existing `trekking` and `hiking` are preserved. Each review
  classifies what the walk actually is and records the evidence. No migration.
- **R10 - Do not force type specificity.** `type` should describe what the place fundamentally is. When two
  readings are both reasonable, the existing value is kept and the case is marked MANUAL REVIEW.
- **R11 - Proposed values stay provisional.** Usage, evidence, synonyms and overlaps are collected. Nothing is
  promoted to `canonical` before the freeze.
- **Rules locked after Checkpoint 1:**
  - **R12 - Working definitions for hiking/trekking.** `hiking` = a day hike or trail walk, including moderate trails.
    `trekking` = longer, more demanding, multi-hour/multi-day or an established trekking route. A location may have both.
    `walking-tour` is a tour format, not a synonym of either. Legacy `trekking` is never removed or renamed. The
    classification is recorded per location (see D10 for when `hiking` is added).
  - **R13 - Broad legacy types stay** (`nature`, `cultural`, `landmark`, `heritage`, `attraction`, `history`). A clearly
    correct specific type may be added. Their removal is a later, deliberate compatibility step.
  - **R14 - Categories stay broad** (the six themes). Place kinds (`waterfall`, `beach`, `bay`, `national-park`...) belong
    to `type`, not categories. `nature` is not split. A new category is recorded only when a genuinely different
    broad theme recurs.
  - **R15 - Specific ethnic-culture tags are allowed as candidates** (`hmong-culture`, `tay-culture`...) when that group's
    culture is a meaningful traveler-facing reason to visit. A mention is not enough. `ethnic-minority-culture` stays
    provisional, and the final granularity is open.
  - **R16 - Recognition stays recorded, not applied.** `tags` is the likely eventual home. No fifth taxonomy field.
  - **R17 - Period vs cultural influence vs architectural influence are kept distinct.** Being built in the French colonial
    period does not imply `french-influence`.
  - **R18 - Travel attributes are not taxonomy.** Seasonal phenomena, viewpoints (sunrise/sunset/clouds),
    permits/access, closures, difficulty, suitability, development level and geographic extremes/borders are recorded
    as product/data-model candidates. They stay out of the four fields.
- **Rules set after Checkpoint 2:**
  - **R19 - Religious-site experience: collect evidence, no migration.** `temple-visit` is preserved and not renamed. Visits to
    churches, mosques, shrines, communal houses and other religious sites are recorded in
    [Religious-site evidence](#religious-site-evidence). The end state may be a neutral `religious-site-visit` or specific
    visit values. That is decided at consolidation.
  - **R20 - `photography` is generic / non-discriminative.** It is never *added* just because a place is photogenic.
    Existing uses are preserved and counted. It is a consolidation candidate (taxonomy value vs legacy presentation data).
  - **R21 - Known compatibility-layer issue: the French aliases.** `LEGACY_TAG_ALIASES` maps `french-colonial`,
    `french-heritage` and `french-vietnamese-architecture` -> `french-influence`. This is **semantically incorrect** under R17 and is
    **not** used as semantic truth in this review. Location data and the compatibility layer stay untouched until consolidation.
    Three concepts are kept apart: historical/colonial period, French cultural influence, French architectural influence.
  - **R22 - `coast`, `entertainment`, `theme-park` stay candidates.** Evidence is collected, including whether coastal
    concepts belong to `type`, `categories` or both. Frequency alone does not decide it.
  - **R23 - Batch size 50 from batch 6.** Review depth, validation and reporting are unchanged.
- **R7 - The philosophy stays the same.** Review the whole object and preserve valid legacy values. New concepts are
  `proposed`, ambiguous cases are MANUAL REVIEW, nothing is forced into an imperfect value, and leaving a location
  unchanged is fine.

### Working decisions

**D1 - Editorial badges and themes coexist in `categories`.**
`hidden-gem`, `must-see` and `iconic` stay as they are (`group: "editorial"`). Themes are added alongside
(`group: "theme"`), badges first. `categories` is not rendered anywhere, so there is no UI impact.

**D2 - Broad legacy `type` values stay; a specific type is added first.**
`nature`, `cultural`, `heritage`, `history`, `attraction` and `landmark` answer "which theme?", but the `/locations` filters
and the "Cultural" shortcut depend on them (R1). The specific place type is added and put first, because `type[0]`
drives the badge and theme colour. The broad value is recorded as a consolidation candidate.

**D3 - `hiking` vs `trekking` is undecided.** `trekking` is never removed (R1). `hiking` is not applied.
Observations go to [Hiking/trekking observations](#hikingtrekking-observations).

**D4 - `boat-tour` stays; `boat-trip` is not introduced.** A plain access crossing is not a boat tour on its own.

**D5 - Page-backed experiences are never removed (R1, R5).** Debatable ones are recorded as MANUAL REVIEW.

**D6 - Legacy tags that duplicate an experience are removed; other legacy labels stay.**
A legacy tag is removed only when, after stripping the emoji, it names **exactly** an experience the location has
(for example `📸 Photography`, `🏕️ Camping`, `🚣 Boat Tour`). Qualified labels (`🏕️ Island Camping`, `🥾 Jungle Trek`) and
editorial descriptors stay, because they are visible hero/card content. Tags have no public URL or filter,
so this does not fall under R1.

**D7 - Canonical tags are appended after legacy labels.**
This keeps `tags[0]` (the `/locations` card subtitle) stable. `tagDisplayLabel()` renders canonical tags by label.

**D8 - A tag needs the concept to be central to the place, not just mentioned.**

**D10 - When `hiking` is added (batch 4) - a TEMPORARY migration-safety rule.** It is not the final semantic rule:
after consolidation a location may carry both `hiking` and `trekking` (for example a national park with short
trails and multi-day routes). It is added only to a location that has **no** `trekking` and whose
content clearly describes a day hike or trail walk. For locations that carry `trekking`, the hiking/trekking reading
is **recorded only**, because adding `hiking` there would be a partial migration ahead of the consolidation decision.
In batches 4-5 no location met the condition, so `hiking` is still unregistered.

**D6a - `tags[0]` is never removed under D6 (batch 5).** It is the `/locations` card subtitle. Example: `🏖️ Beach` on
`ham-tien-beach` duplicates the `beach` experience but stays.

**D11 - Accommodation/stay experiences (owner clarification after batch 4).** `homestay` is an existing
**canonical, page-backed** experience (`/experiences/homestays`), not a proposed one. It stays as is. Related stay
concepts (eco-lodge, farm-stay, overnight cruise, cave camping...) are **not** created. Recurrences are recorded in
[Accommodation / stay evidence](#accommodation--stay-evidence) and the boundary is decided at consolidation.

**D9 - 1:1 legacy labels are replaced in place (new in batch 2, strict per R8).**
Only when a legacy label is effectively 1:1 with the canonical tag being added is it replaced at the same
position, instead of adding a near-duplicate chip. Otherwise both are kept. Examples: `🕌 Cham Culture` -> `cham-culture`
(display "Cham Culture", unchanged) and `🇻🇳 East Sea Sovereignty History` -> `east-sea-sovereignty`.
The matching alias was added to `LEGACY_TAG_ALIASES`.
Applied so far: `🕌 Cham Culture` (bung-binh-thien), `🇻🇳 East Sea Sovereignty History` (an-hai, an-vinh),
`📖 Vietnam War History` (con-dao-prison), `🎎 H'mong Culture` -> `hmong-culture` (cat-cat, batch 4). Not applied: `🪖 War History` / `🏛️ War History` (generic "war"
is not 1:1 with the Vietnam War), `🏛️ French Colonial Prison` (period/place, not "influence"),
`🕯️ Vietnam War Memorial` (adds the memorial/site kind), `🎎 Ethnic Minority` (the target tag is provisional),
`🏠 Thai Stilt Houses` / `🛖 Tày Homestay` / `🏡 Tày & H'mông Village` (architecture or lodging, not the culture as a whole).

---

## Vocabulary state (after batch 6)

`status: "proposed"` = introduced by this review, pending the freeze.

| Field | Proposed values (batch introduced) |
|-------|-------------------------------------|
| `type` | `communal-house`, `valley`, `rice-fields` (1) · `national-park`, `bridge`, `building` (2) · `village`, `fortress`, `prison`, `station` (3) · `church`, `old-quarter` (5) · `palace`, `pass`, `lighthouse` (6) |
| `categories` | `nature`, `culture`, `history`, `architecture`, `religion`, `food` (1) - no new categories (R2) |
| `experiences` | `swimming`, `surfing`, `temple-visit` (1) · `fishing`, `kitesurfing`, `museum-visit` (2) · `diving` (3) · `hiking` (6, first D10 application) |
| `tags` | `medieval-vietnam`, `east-sea-sovereignty`, `folk-religion`, `ethnic-minority-culture` (1, the last is PROVISIONAL per R3) · `khmer-architecture`, `cao-dai` (2) · `hmong-culture`, `tay-culture`, `thai-culture` (4) · `catholicism` (5) · `taoism`, `nguyen-dynasty`, `lolo-culture` (6) |

Phase 1 seed tags: `vietnam-war`, `french-influence`, `khmer-culture`, `cham-culture`, `buddhism`.
Working scope of `medieval-vietnam`: independent dynasties of the 10th-15th centuries (Ngô, Đinh, Tiền Lê, Lý, Trần, Hồ),
not the Nguyễn era.

`fishing`, `kitesurfing` and `diving` already existed in the data as unregistered values. They are now registered.
The four batch-3 types come straight from the CLAUDE.md naming-suffix table (`-village`, `-fortress`, `-prison`, `-station`).

---

## Batch 1 - index 0-19

Legend: `+` added, `-` removed. "Kept" = reviewed, still reasonable.

| # | Location | type | categories | experiences | tags |
|---|----------|------|------------|-------------|------|
| 0 | `a-pa-chai` | kept | + nature, culture | kept | - 📸 Photography; + ethnic-minority-culture (provisional, R3) |
| 1 | `am-tien-cave` | kept | + nature, history | + cycling, kayaking, temple-visit (trekking kept - MANUAL REVIEW) | - 📸 Photography; + medieval-vietnam |
| 2 | `angel-eye-mountain` | kept | + nature | kept | - 🏕️ Camping, - 📸 Photography |
| 3 | `an-bang-beach` | kept | + nature | + swimming, surfing, kayaking (watersport kept - MANUAL REVIEW) | kept |
| 4 | `an-binh-island` | kept | + nature | + swimming, kayaking, camping | kept |
| 5 | `an-hai-communal-house` | + communal-house (primary) | + history, culture, architecture | kept | 🇻🇳 East Sea Sovereignty History → east-sea-sovereignty (D9) |
| 6 | `an-nhut-rice-fields` | + rice-fields (primary) | + nature, food | + cycling | kept |
| 7 | `an-vinh-communal-house` | + communal-house (primary) | + history, culture, architecture | kept | 🇻🇳 East Sea Sovereignty History → east-sea-sovereignty (D9) |
| 8 | `b52-wreck` | kept - MANUAL REVIEW | + history | kept | + vietnam-war |
| 9 | `ba-be-lake` | kept | + nature, culture | + culture | + ethnic-minority-culture (provisional, R3) |
| 10 | `ba-danh-pagoda` | kept | + religion, culture, architecture | + temple-visit | - 📸 Photography; + buddhism, folk-religion |
| 11 | `ba-den-mountain` | kept | + nature, religion | + temple-visit | - 🚡 Cable Car; + buddhism, folk-religion |
| 12 | `ba-ho-waterfall` | kept | + nature | + kayaking | - 📸 Photography |
| 13 | `ba-hon-dam-islands` | kept | + nature | + swimming | - 🤿 Snorkeling |
| 14 | `ba-na-cable-car` | kept - MANUAL REVIEW | none - MANUAL REVIEW | kept | kept |
| 15 | `ba-om-lake` | kept | + culture, religion, nature | + temple-visit | - 📸 Photography; + khmer-culture |
| 16 | `bac-son-valley` | + valley (primary) | hidden-gem; + nature, culture | kept | - 📸 Photography; + ethnic-minority-culture (provisional, R3) |
| 17 | `back-beach-vung-tau` | kept | + food (coastal theme: R2 candidate) | kept | kept |
| 18 | `bai-dinh-pagoda` | kept | + religion, culture, architecture | + temple-visit | - 📸 Photography; + buddhism |
| 19 | `bai-mon-beach` | kept | hidden-gem; + nature | + camping | - 📸 Photography |

**Corrections applied in batch 2 (owner rules R1/R7):**
- `am-tien-cave`: `trekking` restored. The removal is now MANUAL REVIEW (200-250 steps, no trail).
- `an-bang-beach`: `watersport` restored. Replacing it with the specific activities is MANUAL REVIEW.
  The legacy value is generic but not wrong, and it appears in the `/locations` experience filter.
- `an-hai`/`an-vinh`: D9 near-duplicate fix (see above).
- `ethnic-minority-culture` on `a-pa-chai`, `ba-be-lake`, `bac-son-valley` is kept but is **provisional** (R3).
  Consolidation may replace it with per-group tags or remove it.

---

## Batch 2 - index 20-39

| # | Location | type | categories | experiences | tags |
|---|----------|------|------------|-------------|------|
| 20 | `bai-tu-long-bay` | + bay (primary; it is a bay, not one island) | + nature | + swimming, beach (Ngọc Vừng beach), caving (Thiên Cảnh Sơn, Cặp La caves) | - 🛶 Kayaking, - 📸 Photography |
| 21 | `ban-gioc-waterfall` | "nature" → + waterfall (primary) | + nature | kept (wildlife, trekking: no evidence - MANUAL REVIEW) | - 📸 Photography |
| 22 | `bat-pagoda-soc-trang` | kept | + religion, culture, architecture, nature (bat colony is half the draw) | + temple-visit | - 📸 Photography; + khmer-culture, khmer-architecture (Naga roofs, Kemnar columns), buddhism |
| 23 | `bau-sau` | kept | + nature | + cycling (9km cycle leg of the approach) | kept |
| 24 | `bay-mau-coconut-forest` | kept (wetland: NC-10) | + nature, culture | + fishing (hands-on nets and traps) | - 📸 Photography |
| 25 | `ben-hai-river` | + bridge (primary; Hiền Lương Bridge) | + history | + museum-visit (two exhibition halls) | - 📸 Photography; + vietnam-war (17th-parallel DMZ) |
| 26 | `ben-thanh-market` | kept | + food, culture | + markets | kept (french-influence rejected, D8) |
| 27 | `bich-dong-pagoda` | kept | + religion, culture, architecture ('chữ Tam' vertical plan) | + temple-visit | - 📸 Photography; + buddhism |
| 28 | `bidoup-nui-ba-national-park` | + national-park (primary) | + nature | kept | - 🏕️ Camping |
| 29 | `binh-lieu-border-mountains` | kept | hidden-gem; + nature, culture | kept | - 📸 Photography (ethnic tags: evidence only, R3) |
| 30 | `binh-son-beach` | kept | none - coastal theme candidate (R2) | + kitesurfing | - 🪁 Kitesurfing, - 📸 Photography |
| 31 | `bu-gia-map-national-park` | + national-park (primary) | + nature | + swimming (Tuyệt Tình Cốc pool, streams) | - 🏕️ Camping |
| 32 | `bui-hui-grassland` | kept (grassland: NC-10) | + nature | kept | - 🏕️ Camping |
| 33 | `bui-vien-street` | kept (street: NC-10) | none - nightlife theme candidate (R2) | kept | kept |
| 34 | `bung-binh-thien-lake` | kept | + nature, culture | + fishing (netting cá linh with locals) | - 🚣 Boat Tour, - 📸 Photography; 🕌 Cham Culture → cham-culture (D9) |
| 35 | `cafe-apartment-saigon` | + building (primary) | + architecture, food | + shopping (boutiques) | kept |
| 36 | `cai-rang-floating-market` | kept | + food, culture | kept | - 📸 Photography |
| 37 | `cao-dai-holy-see` | kept | + religion, architecture, culture | + temple-visit | + cao-dai |
| 38 | `can-gio-beach` | kept | + food (coastal theme: R2 candidate) | kept | kept |
| 39 | `can-gio-monkey-island` | + island moved to primary (was 4th) | + nature | kept | - 🚤 Boat Tour |

**Files modified in batch 2 (19):** `bai-tu-long-bay`, `ban-gioc-waterfall`, `bat-pagoda-soc-trang`, `bau-sau`,
`bay-mau-coconut-forest`, `ben-hai-river`, `ben-thanh-market`, `bich-dong-pagoda`, `bidoup-nui-ba-national-park`,
`binh-lieu-border-mountains`, `binh-son-beach`, `bu-gia-map-national-park`, `bui-hui-grassland`, `bung-binh-thien-lake`,
`cafe-apartment-saigon`, `cai-rang-floating-market`, `cao-dai-holy-see`, `can-gio-beach`, `can-gio-monkey-island`.
Plus batch-1 corrections: `am-tien-cave`, `an-bang-beach`, `an-hai-communal-house`, `an-vinh-communal-house`.
Reviewed, no change: `bui-vien-street`.

---

## Batch 3 - index 40-59

| # | Location | type | categories | experiences | tags |
|---|----------|------|------------|-------------|------|
| 40 | `can-ti-bridge` | + bridge (primary; the name is the only content) | none | none (stub - see MANUAL) | none |
| 41 | `cape-ca-na` | kept (cape: NC-16) | + nature | + swimming (sheltered coves) | - 📸 Photography |
| 42 | `cat-ba-cannon-fort` | + fortress (primary) | + history | kept | - 📖 History (exact dup of `history`, D6) |
| 43 | `cat-ba-national-park` | + national-park (primary) | + nature | kept | kept |
| 44 | `cat-ba-town` | kept | + food | + markets (waterfront night market) | kept |
| 45 | `cat-cat-village` | + village (primary; `town` kept - MANUAL) | + culture | kept | - 📸 Photography (🎎 H'mong Culture kept - R3) |
| 46 | `cat-co-beach` | kept | + nature | + kayaking (rental at all three coves) | - 🌊 Swimming, - 📸 Photography |
| 47 | `cat-tien-national-park` | + national-park (primary) | + nature | kept | kept |
| 48 | `chua-chan-mountain` | kept | + nature, religion | + cable-car, temple-visit (Bửu Quang cave pagoda) | - 📸 Photography; + buddhism |
| 49 | `co-thach-beach` | kept | + nature | kept | - 📸 Photography |
| 50 | `co-to-island` | kept | + nature | + swimming, motorcycling (island explored by motorbike) | kept |
| 51 | `con-dao-national-park` | "nature" → + national-park (primary) | + nature | + diving (content: snorkeling **and diving**) | kept |
| 52 | `con-dao-prison` | + prison (primary) | + history | + museum-visit (Côn Đảo Museum on the same ticket) | 📖 Vietnam War History → vietnam-war (D9, 1:1) |
| 53 | `crazy-house` | + building (primary) | + architecture | kept | - 📸 Photography |
| 54 | `cu-chi-tunnels` | kept - MANUAL (war-relic, NC-17) | + history | kept | + vietnam-war (🪖 War History kept - not 1:1) |
| 55 | `cu-mi-beach` | kept | + nature (undeveloped fishing beach, dunes) | kept | - 📸 Photography |
| 56 | `cua-dai-beach` | kept | none - beach under reconstruction; coastal theme (NC-1) | kept | - 🌊 Swimming, - 📸 Photography |
| 57 | `cua-tu-stream` | kept (stream: NC-16) | + nature | + swimming (natural pools are central) | - 🏕️ Camping |
| 58 | `da-ploa-stream` | kept (stream: NC-16) | + nature | + camping, fishing (net or rod by campers) | - 🏕️ Camping (now dup), - 📸 Photography |
| 59 | `dalat-railway-station` | + station (primary) | + history, architecture | kept (train ride: NC-18) | - 📸 Photography (french-influence: MANUAL) |

**Files modified in batch 3 (20):** `can-ti-bridge`, `cape-ca-na`, `cat-ba-cannon-fort`, `cat-ba-national-park`,
`cat-ba-town`, `cat-cat-village`, `cat-co-beach`, `cat-tien-national-park`, `chua-chan-mountain`, `co-thach-beach`,
`co-to-island`, `con-dao-national-park`, `con-dao-prison`, `crazy-house`, `cu-chi-tunnels`, `cu-mi-beach`,
`cua-dai-beach`, `cua-tu-stream`, `da-ploa-stream`, `dalat-railway-station`.

---

## Batch 4 - index 60-79

**Ethnic-tag follow-ups on earlier batches (R15):**
- `cat-cat-village`: `🎎 H'mong Culture` -> `hmong-culture` (D9, 1:1). The Black H'mong village *is* the destination.
- `ba-be-lake`: + `tay-culture` (Pác Ngòi Tày homestays, legend and festival are central).
  `ethnic-minority-culture` is kept (provisional).
- Not changed: `bac-son-valley` (Tày, Nùng, Dao together, no single group), `a-pa-chai` (a single Hà Nhì village on the
  approach; one location is too little evidence for `ha-nhi-culture`), `binh-lieu`, `bui-hui` (secondary).

| # | Location | type | categories | experiences | tags |
|---|----------|------|------------|-------------|------|
| 60 | `dam-trau-beach` | kept | + nature | + swimming | kept |
| 61 | `dark-cave` | `cave` moved to primary (was 2nd) | + nature | kept (`trekking` - no trek described: MANUAL) | - 🛶 Kayaking |
| 62 | `datanla-waterfall` | kept | + nature | + cable-car (2km+ cable car) | - 📸 Photography |
| 63 | `dau-tieng-lake` | kept | + nature | + fishing (50+ species, "a major draw") | - 🚴 Cycling, - 🏕️ Camping |
| 64 | `diep-son-island` | kept | + nature | + kayaking (rental), homestay (overnight stay recommended) | - 📸 Photography |
| 65 | `dinh-mountain` | kept | + nature | + swimming (Suối Tiên/Suối Đá pools), temple-visit (Chùa Hang Mai, Phật Quang) | kept |
| 66 | `doc-let-beach` | kept | + nature | kept | - 📸 Photography |
| 67 | `doi-nhai-beach` | kept | + nature | kept (`swimming` not added: the content advises against swimming) | kept |
| 68 | `don-village` | + village (primary; `town` kept - MANUAL) | + culture, nature | + homestay (the Pù Luông homestay hub) | - 📸 Photography; + thai-culture |
| 69 | `dong-van-market` | kept | + culture, food | kept | - 📷 Photography; + hmong-culture (H'Mông food and textiles dominate) |
| 70 | `dong-van-old-town` | kept (old quarter: NC-22) | + culture, architecture, history | kept | kept (hmong-culture, french-influence: MANUAL) |
| 71 | `do-quyen-waterfall` | kept | + nature | kept | kept |
| 72 | `dragon-bridge` | + bridge (primary) | + architecture | kept | - 📸 Photography |
| 73 | `dray-nur-dray-sap-waterfalls` | kept | + nature | kept | - 📸 Photography |
| 74 | `du-gia-village` | + village (primary) | + culture, nature | kept | + tay-culture (Tày homestay families are the draw) |
| 75 | `du-gia-waterfall` | kept | + nature | kept | - 📸 Photography |
| 76 | `duc-pagoda` | kept | + religion, nature (volcanic crater rim) | + temple-visit | + buddhism |
| 77 | `duck-stop-phong-nha` | kept - MANUAL (farm: NC-23) | none - MANUAL | kept (`wildlife` = domestic ducks: MANUAL) | kept |
| 78 | `eight-ladies-cave` | kept | + history | kept | - 📖 History; + vietnam-war (`🕯️ Vietnam War Memorial` kept - not 1:1) |
| 79 | `elephant-mountain` | kept (rock formation: NC-16) | + nature | kept | kept |

**Files modified in batch 4 (19):** `dam-trau-beach`, `dark-cave`, `datanla-waterfall`, `dau-tieng-lake`, `diep-son-island`,
`dinh-mountain`, `doc-let-beach`, `doi-nhai-beach`, `don-village`, `dong-van-market`, `dong-van-old-town`, `do-quyen-waterfall`,
`dragon-bridge`, `dray-nur-dray-sap-waterfalls`, `du-gia-village`, `du-gia-waterfall`, `duc-pagoda`, `eight-ladies-cave`,
`elephant-mountain`. Plus the ethnic-tag follow-ups: `cat-cat-village`, `ba-be-lake`.
Reviewed, no change: `duck-stop-phong-nha`.

---

## Batch 5 - index 80-99

| # | Location | type | categories | experiences | tags |
|---|----------|------|------------|-------------|------|
| 80 | `elephant-waterfall` | kept | + nature | kept (site closed long-term) | kept (`🚫 Long-Term Closure` = travel attribute, R18) |
| 81 | `fairy-stream` | kept (stream: NC-16) | + nature | kept (a 2km wading walk - not a hike, D10) | - 📸 Photography |
| 82 | `fansipan` | "nature" → + mountain (primary) | + nature | kept | - 🥾 Trekking, - 📸 Photography |
| 83 | `french-village-ba-na` | kept - MANUAL (theme park: NC-26) | none - MANUAL | kept | - 📸 Photography (french-influence rejected: 2014 replica) |
| 84 | `gieng-tien-peak` | kept (volcanic crater: NC-16) | + nature | kept (legacy `nature` experience kept, R1) | - 📸 Photography |
| 85 | `golden-bridge` | "attraction" → + bridge (primary) | + architecture | kept | kept |
| 86 | `pirate-islands` | kept (archipelago) | + nature | + swimming | - 🤿 Snorkeling, - ⛺ Camping |
| 87 | `ha-giang-city` | kept | none | none | none - **stub record** (only an SEO line) |
| 88 | `ha-long-bay` | `bay` moved to primary | + nature | kept | - 📸 Photography (`🌊 UNESCO World Heritage` = recognition, kept) |
| 89 | `ham-ninh-fishing-village` | + village (primary; `town` kept - MANUAL) | + food, culture | + markets (seafood market) | kept |
| 90 | `ham-tien-beach` | kept | none - coastal theme (NC-1) | + swimming, kitesurfing ("top kitesurfing destination") | - 📸 Photography (`🏖️ Beach` kept: tags[0], D6a) |
| 91 | `hang-cau-cliffs` | kept | + nature | kept | - 🤿 Snorkeling, - 🛶 Kayaking, - 📸 Photography |
| 92 | `hang-en` | `cave` moved to primary | + nature | + swimming (cave pool, underground river crossing) | kept |
| 93 | `hang-mua` | kept - MANUAL (karst peak vs viewpoint) | + nature | kept | - 📸 Photography (`🏔️ Viewpoint` = attribute, R18) |
| 94 | `hang-pagoda` | kept | + religion, history | + temple-visit | + buddhism (cham-culture rejected: pre-17th-c. Cham shrine origin is background) |
| 95 | `hang-rai` | kept | hidden-gem; + nature | + swimming, snorkeling ("calm enough on good days") | - 📸 Photography |
| 96 | `hanoi-st-josephs-cathedral` | + church (primary) | + religion, architecture, history | kept (temple-visit: MANUAL - see synonyms) | + catholicism (french-influence: MANUAL) |
| 97 | `hanoi-old-quarter` | + old-quarter (primary) | + culture, food, history, architecture | kept | + medieval-vietnam (the Lý/Trần-era guild-street structure is its identity) |
| 98 | `hanoi-train-street` | kept (street: NC-10, now 2 cases) | + culture | kept | kept |
| 99 | `hieu-village` | + village (primary; `town` kept - MANUAL) | + culture, nature | + swimming (natural pool), homestay (~13 homestays) | + thai-culture |

**Files modified in batch 5 (19):** `elephant-waterfall`, `fairy-stream`, `fansipan`, `french-village-ba-na`, `gieng-tien-peak`,
`golden-bridge`, `pirate-islands`, `ha-long-bay`, `ham-ninh-fishing-village`, `ham-tien-beach`, `hang-cau-cliffs`, `hang-en`,
`hang-mua`, `hang-pagoda`, `hang-rai`, `hanoi-st-josephs-cathedral`, `hanoi-old-quarter`, `hanoi-train-street`, `hieu-village`.
Reviewed, no change: `ha-giang-city` (stub).

---

## Batch 6 - index 100-149 (50 locations)

| # | Location | type | categories | experiences | tags |
|---|----------|------|------------|-------------|------|
| 100 | `hieu-waterfall` | kept | + nature | + swimming (pools at several tiers) | - 📸 Photography |
| 101 | `hmong-king-palace` | + palace (primary) | + history, architecture, culture | kept | + hmong-culture (Vương clan residence; french-influence as *architectural* fusion: MANUAL) |
| 102 | `hoan-kiem-lake` | kept | + culture, history | + temple-visit (Ngọc Sơn Temple) | kept (medieval-vietnam: Lê Lợi legend only - rejected) |
| 103 | `ho-chi-minh-childhood-home` | kept - MANUAL (historic house) | + history | kept | - 📸 Photography |
| 104 | `ho-chi-minh-mausoleum-complex` | kept - MANUAL (`tomb`?) | + history | + museum-visit (Ho Chi Minh Museum in the complex) | kept (soviet-influence: MANUAL) |
| 105 | `ho-dynasty-citadel` | kept | + history, architecture | kept | + medieval-vietnam (Hồ dynasty, 1397-1402) |
| 106 | `ho-quoc-pagoda` | + pagoda (primary; `temple` kept) | + religion, architecture | + temple-visit | - 📸 Photography; + buddhism |
| 107 | `hoa-lo-prison` | + prison (primary) | must-see; + history | + museum-visit (it operates as a museum) | + vietnam-war (the POW section is half the museum) |
| 108 | `hoa-lu-ancient-capital` | kept - MANUAL (ancient capital) | + history, culture | + temple-visit (Đền Đinh, Đền Lê) | - 🚲 Cycling; + medieval-vietnam (968-1010 capital) |
| 109 | `hoi-an-ancient-town` | + old-quarter (primary) | + culture, history, architecture, food | + shopping (silk, tailors, lanterns) | - 📸 Photography (japanese/chinese influence: NC-28) |
| 110 | `hon-chong-rock-formation` | kept (rock formation: NC-16) | + nature | kept (`beach` on a rock outcrop: MANUAL) | - 📸 Photography |
| 111 | `hon-kho-island` | kept | + nature | + swimming | - 🚤 Boat Tour |
| 112 | `hon-mun-island` | kept | + nature | kept | - 🚢 Boat Tour |
| 113 | `hon-son-island` | kept | + nature | + swimming, **hiking** (Ma Thiên Lãnh, 1.5-2h; no `trekking` present - D10) | - 🤿 Snorkeling |
| 114 | `hon-tam-island` | kept | none - resort/entertainment (NC-26) | kept (mud baths: NC-29) | - 🚢 Boat Tour |
| 115 | `hon-thom-cable-car` | kept - MANUAL (a cable car is the place) | none - entertainment (NC-26) | kept | kept |
| 116 | `hon-yen-island` | kept | + nature | + camping (recommended overnight) | kept (`📷 Hidden Gem` = editorial badge inside tags) |
| 117 | `hospital-cave` | kept | + history | kept (closed) | 📖 Vietnam War History → vietnam-war (D9, 1:1); - 📸 Photography |
| 118 | `hung-temple` | kept | + religion, history, culture | + temple-visit | - 📸 Photography; + folk-religion (Hùng King worship) |
| 119 | `imperial-citadel-of-thang-long` | kept | + history, architecture | + museum-visit (artifact exhibition halls) | + medieval-vietnam (Lý/Trần palace layers; vietnam-war layer: MANUAL) |
| 120 | `imperial-city-hue` | kept | + history, architecture, culture | kept | 👑 Nguyễn Dynasty → nguyen-dynasty (D9, 1:1); - 📸 Photography |
| 121 | `independence-palace` | + palace (primary) | + history, architecture (1966 Ngô Viết Thụ design) | kept | + vietnam-war (where the war ended) |
| 122 | `jade-emperor-pagoda` | kept | must-see; + religion, culture | + temple-visit (legacy `spirituality` kept) | + taoism (`🏮 Taoist Pagoda` kept - not 1:1) |
| 123 | `japanese-bridge` | "cultural" → + bridge (primary) | + history, architecture, culture | kept (inner shrine: religious-site evidence) | - 📸 Photography (japanese-influence: NC-28) |
| 124 | `k50-waterfall` | kept | hidden-gem; + nature | + swimming (pools above the falls) | - 📸 Photography |
| 125 | `ke-ga-lighthouse` | + lighthouse (primary) | + history | kept | - 📸 Photography (French-built 1897-99: period evidence, NC-20) |
| 126 | `keo-pagoda` | kept | + religion, architecture, history | + temple-visit | + buddhism, folk-religion (Dương Không Lộ cult, 'tiền Phật hậu Thánh') |
| 127 | `khai-dinh-tomb` | "cultural" → + tomb (primary) | + history, architecture | kept | - 📸 Photography; + nguyen-dynasty (`👑 Nguyễn Tomb` kept - not 1:1; french-influence: MANUAL) |
| 128 | `khau-coc-cha-pass` | + pass (primary) | + nature | kept | kept |
| 129 | `khau-pha-pass` | + pass (primary) | + nature | kept (legacy `paragliding` kept) | - 📸 Photography |
| 130 | `khe-van-waterfall` | `waterfall` moved to primary | + nature, culture (Sán Chỉ soong co tradition) | kept | kept |
| 131 | `khem-beach` | kept | + nature | + swimming | kept |
| 132 | `kho-muong-cave` | kept | hidden-gem; + nature | + caving (self-guided descent by torch) | kept |
| 133 | `kho-muong-village` | + village (primary; `town` kept) | hidden-gem; + culture, nature | + homestay, trekking (1-2 day guided treks: "trekking hub") | + thai-culture |
| 134 | `km0-ha-giang` | kept | none (a route marker) | kept | kept |
| 135 | `kon-tum-wooden-church` | + church (primary) | + religion, architecture, history, culture | kept (church: religious-site evidence) | - 📸 Photography; + catholicism (Bahnar fusion: ethnic evidence; french-influence: MANUAL) |
| 136 | `ky-co-beach` | kept | + nature | + camping ("the best version of this beach") | - 🤿 Snorkeling, - 📸 Photography |
| 137 | `la-ngau-stream` | kept (stream: NC-16) | hidden-gem; + nature | + swimming | - 🏕️ Camping, - 📸 Photography |
| 138 | `la-vang-sanctuary` | + church (primary; `temple` kept) | + religion, history | kept (church: religious-site evidence) | + catholicism, vietnam-war (the 1972 ruined bell tower is a central memorial) |
| 139 | `lan-ha-bay` | kept | + nature | kept | kept (`🛶 Kayaking` is tags[0] - D6a) |
| 140 | `langbiang-mountain` | kept | + nature | kept | - 🥾 Trekking (K'Ho village at the base: ethnic evidence) |
| 141 | `linh-phuoc-pagoda` | kept | + religion, architecture | + temple-visit | - 📸 Photography; + buddhism |
| 142 | `lo-lo-chai-village` | "cultural" → + village (primary) | + culture | kept | - 📸 Photography, - 🏡 Homestay; + lolo-culture |
| 143 | `long-bien-bridge` | + bridge (primary) | + history, architecture | kept | kept (`🏯 French Heritage` -> R21 alias not used; vietnam-war bomb repairs: MANUAL) |
| 144 | `long-son-pagoda` | kept | + religion | + temple-visit | - 📸 Photography; + buddhism |
| 145 | `lung-cu-flag-tower` | kept - MANUAL (monument) | + history | kept | - 📸 Photography |
| 146 | `lung-po-red-river-source` | kept - MANUAL (confluence / border marker) | + nature, history | kept | kept |
| 147 | `ly-son-garlic-fields` | kept - MANUAL (farmland) | + culture, nature | kept | kept |
| 148 | `mac-dynasty-citadel` | kept | + history, architecture | kept | - 📸 Photography (Mạc dynasty = 16th-17th c.: period NC) |
| 149 | `ma-pi-leng-pass` | + pass (primary) | + nature | kept | - 📸 Photography |

**Files modified in batch 6 (48):** every location from index 100 to 149 except `hon-thom-cable-car` and `km0-ha-giang`
(reviewed, no change).

---

## Manual review (cumulative)

| Location | Field | Proposed change / question |
|----------|-------|----------------------------|
| `am-tien-cave` | experiences | Remove `trekking`? The content describes a 200-250-step staircase, not a trail (R1: public `/experiences/trekking`) |
| `an-bang-beach` | experiences | Remove generic `watersport` now that `swimming`/`surfing`/`kayaking` are present? (appears in `/locations` filter) |
| `ban-gioc-waterfall` | experiences | `wildlife` and `trekking` have no support in the content |
| `bay-mau-coconut-forest` | experiences | `kayaking` - the boats are basket boats (thúng chai), not kayaks |
| `bui-hui-grassland` | type | `forest` - the content says there are no tall trees across most of the grassland |
| all | type | Broad values (`nature`, `cultural`, `heritage`, `history`, `attraction`, `landmark`) - remove at consolidation (D2) |
| `b52-wreck` | type | All broad values. Needs a specific type: `war-relic`? `memorial`? |
| `ba-na-cable-car` | type, categories | Hilltop resort / theme park. `theme-park`/`resort` type? `entertainment` theme? |
| `back-beach-vung-tau`, `binh-son-beach`, `can-gio-beach` | categories | Developed city beaches - `nature` would mislead. Coastal theme? (NC-1) |
| `bui-vien-street` | categories | A nightlife street - no fitting theme. `nightlife` theme? (NC-11) |
| `bai-mon-beach` | experiences | `swimming` possible but rip currents are warned about - not added |
| `angel-eye-mountain`, `an-nhut-rice-fields`, `ba-danh-pagoda`, `bai-dinh-pagoda`, `bich-dong-pagoda`, `cao-dai-holy-see` | experiences | `walking-tour` is used for any walk on foot (P3) |
| `ba-om-lake` | tags | `khmer-architecture` fits the Âng Pagoda on the shore, but the location is the lake |
| `bai-tu-long-bay` | tags | `medieval-vietnam` (Vân Đồn trading port from the Lý era, 1288 Battle of Vân Đồn) - real history, but secondary to the karst bay |
| `bay-mau-coconut-forest` | tags | `vietnam-war` (revolutionary base, forest bombed) - part of the story, secondary to the boat experience |
| `ben-thanh-market`, `cafe-apartment-saigon` | categories | `history`/`architecture` are real but secondary. Keep themes to the primary draw? |
| `can-ti-bridge` | all | Stub record - only an SEO line. `bridge` was added from the name. Nothing else can be inferred (content gap, not taxonomy) |
| `cat-cat-village` | type | `town` - it is a village, not a town (R1: `town` filter) |
| `cat-ba-cannon-fort` | type, experiences | `nature` type and `trekking` for a closed hilltop fort |
| `cu-chi-tunnels`, `b52-wreck` | type | No specific type fits. `war-relic` / `historic-site`? (NC-17) |
| `cape-ca-na` | type | `beach` vs a cape/headland (NC-16). Both readings are reasonable (R10) |
| `cua-tu-stream`, `da-ploa-stream` | type | `waterfall`/`river` vs `stream` (NC-16). The current types are reasonable (R10) |
| `dalat-railway-station` | tags | `french-influence`? A French colonial Art Deco station in a French-founded hill town. The architecture also borrows Central Highlands longhouse roofs. "French architecture" is not automatically `french-influence` (R8) |
| `don-village`, `cat-cat-village` | type | `town` on a village (R1/R13: `town` filter). `du-gia-village` had no `town` |
| `thai-culture` | tags | Slug naming: "thai" reads as Thailand. `thai-culture` vs `tai-culture` vs `thai-ethnic-culture`? |
| `dong-van-old-town` | tags | `hmong-culture` (H'Mông rammed-earth houses, H'Mông and Lô Lô at the cultural nights) - mixed-group; `french-influence` (French watchtower and colonial stone buildings beside the H'Mông houses) - R17 |
| `dong-van-market` | tags | `🎎 Ethnic Minority` label vs the provisional `ethnic-minority-culture`. Not replaced |
| `dark-cave`, `datanla-waterfall`, `dray-nur-dray-sap-waterfalls`, `elephant-mountain` | experiences | `trekking` where the content describes a zipline, a 1km forest walk, a connecting trail or a 10-20 min rock climb |
| `duck-stop-phong-nha` | experiences, categories | `wildlife` for a domestic duck farm. No theme fits (agritourism: NC-23) |
| `dragon-bridge` | tags | Lý-dynasty dragon *design* - a motif, not `medieval-vietnam` history (rejected, see below) |
| `LEGACY_TAG_ALIASES` (Phase 1) | tags | `french-colonial`, `french-heritage`, `french-vietnamese-architecture` -> `french-influence` conflict with R17 (period ≠ influence). They are unused by the UI, and the compatibility layer is untouched. Re-point or drop at consolidation |
| `hanoi-st-josephs-cathedral` | tags | `french-influence`: French-designed neo-Gothic cathedral modelled on Notre-Dame, French stained glass. This is the strongest *architectural*-influence case so far. Is `french-influence` cultural or architectural? (R17) |
| `hanoi-st-josephs-cathedral` | experiences | `temple-visit` for a church - the value name is Asian-temple-specific (see synonyms) |
| `ham-ninh-fishing-village`, `hieu-village` | type | `town` on a village (now 4 villages with `town`) |
| `hang-mua` | type | Only `nature`. Karst peak with steps (`mountain`?) vs a viewpoint (attribute, R18) |
| `hanoi-train-street`, `bui-vien-street` | type | `street` (2 cases now, plus CLAUDE.md's `train-street` edge case) |
| `ha-giang-city`, `can-ti-bridge` | all | Stub records - content gap, taxonomy cannot be judged |
| `ho-chi-minh-childhood-home`, `ho-chi-minh-mausoleum-complex` | type | Historic house / mausoleum complex - no fitting type (`tomb` reads oddly for the mausoleum complex) |
| `ho-chi-minh-mausoleum-complex` | tags | `soviet-influence` - Soviet architect, Stripped Classicism. Strong architectural-influence case (R17) |
| `hoa-lu-ancient-capital` | type | Ancient capital (CLAUDE.md `-ancient-capital`) - only broad types today |
| `hmong-king-palace`, `khai-dinh-tomb`, `kon-tum-wooden-church`, `hanoi-st-josephs-cathedral`, `dalat-railway-station` | tags | French *architectural* influence is central in all five. Decide whether `french-influence` means cultural or architectural influence, or split it (R17, R21) |
| `imperial-citadel-of-thang-long`, `long-bien-bridge` | tags | `vietnam-war` as a secondary layer (D67 bunker; bomb repairs) |
| `hon-chong-rock-formation` | experiences | `beach` on a rock outcrop |
| `hon-thom-cable-car`, `ba-na-cable-car` | type | The place *is* a cable car / resort - no type fits |
| `lung-cu-flag-tower`, `lung-po-red-river-source`, `ly-son-garlic-fields` | type | Monument, border confluence, farmland - only broad types |
| `hon-yen-island` | tags | `📷 Hidden Gem` is an editorial badge stored as a tag. It belongs with the categories badges (consolidation) |
| `cat-tien-national-park` | tags | Thánh Địa Cát Tiên Hindu temple ruins - a separate archaeological site, about an hour away. Tag it here? (NC-19) |

## New candidates (cumulative, recorded - not applied)

| ID | Field | Candidate | Evidence (batch) | Question |
|----|-------|-----------|------------------|----------|
| NC-1 | categories | `coast` / `beach` | an-bang, an-binh, back-beach, bai-mon, ba-hon-dam (1) · binh-son, can-gio-beach, bai-tu-long (2) · cua-dai, cat-co, cu-mi, cape-ca-na, co-thach, co-to (3) | Developed beaches have no fitting theme. R2: keep collecting |
| NC-2 | categories | `adventure` | a-pa-chai, ba-ho (1) · binh-lieu, bu-gia-map, bidoup (2) | A broad theme for physical or remote trips? |
| NC-4 | tags | `cao-dai` | ba-den (1) · **applied** to cao-dai-holy-see (2), where it is central | Resolved as `proposed` |
| NC-6 | tags | `nguyen-dynasty` | an-hai (1) · ben-thanh (Gia Long origin of the name), bui-vien (named after a Nguyễn official) (2) | So far always background, never the focus |
| NC-7 | experiences | `cliff-jumping`, `paddleboarding`, `shellfish-foraging` | ba-ho, an-binh, angel-eye, ba-hon-dam (1) · cua-tu (jump + rock slide), da-ploa (SUP) (3) · du-gia-waterfall (3.5m/6m jumps), doi-nhai, dau-tieng (foraging) (4) | `cliff-jumping` now has 3 strong cases |
| NC-8 | experiences | `jet-skiing` | an-bang (1) | Vendor-level evidence only |
| NC-9 | type | `national-park` | ba-be (1) · **applied** to bidoup, bu-gia-map (2), which are the parks themselves | Resolved as `proposed` |
| NC-10 | type | `wetland`, `grassland`, `street` | bay-mau (wetland), bui-hui (grassland), bui-vien (street) (2) | Current types are reasonable, so they were left. `street` may recur (Train Street, walking streets) |
| NC-11 | categories | `nightlife`, `shopping` | bui-vien, ben-thanh, cafe-apartment (2) | Urban themes missing from the six. R2: keep collecting |
| NC-12 | experiences | `birdwatching` | bidoup, bau-sau (2) (legacy tag `🦅 Birdwatching` ×3) | Separate from `wildlife`? |
| NC-13 | experiences | `craft-workshop` | bay-mau (coconut-leaf weaving, candy workshops) (2) · cat-cat (weaving, dyeing, silver-work demos) (3) | In the original target examples |
| NC-14 | experiences | `street-food` / `food-tour` | ben-thanh night market (2) | `food` (page-backed) covers it for now |
| NC-15 | tags | `border-region` | a-pa-chai (1) · ban-gioc, binh-lieu (2) | "Standing on the border" is a real traveler draw in the far north |
| NC-16 | type | `cape` / `headland`, `stream`, `rock-formation` (elephant-mountain, batch 4), `volcanic-crater` (gieng-tien, batch 5), `stream` again (fairy-stream, batch 5) | cape-ca-na; cua-tu-stream, da-ploa-stream (3) (ba-ho, bai-mon adjacent) | Both are in the CLAUDE.md suffix table (`-stream`). Kept as MANUAL per R10 |
| NC-17 | type | `war-relic` / `historic-site` | b52-wreck (1) · cu-chi-tunnels (3) | Places that are neither buildings nor landscapes |
| NC-18 | experiences | `train-ride` | dalat-railway-station (3) | A distinct traveler activity (the Trại Mát tourist train) |
| NC-19 | tags | `hindu-heritage` / `oc-eo` | cat-tien (Thánh Địa Cát Tiên) (3) | Pairs with `cham-culture` for Hindu sites in the south? |
| NC-20 | tags | `french-colonial-period` (history), separate from `french-influence` (culture/architecture) | con-dao-prison, dalat-railway-station, cat-ba-cannon-fort, ben-thanh-market, cat-cat-village (hydro ruins) (2-3) · hoa-lo-prison, ke-ga-lighthouse, long-bien-bridge, kon-tum-wooden-church, khai-dinh-tomb (6) | The colonial *period* is a frequent historical context. The *influence* has 0 confident uses so far |
| NC-22 | type | `old-quarter` / `ancient-town` | dong-van-old-town (4) · **applied** to hanoi-old-quarter (5) | Proposed. Đồng Văn stays `town` (either reading is reasonable) |
| NC-23 | type / experiences | `farm` / agritourism | duck-stop (4) | A working farm visit. No type, theme or experience fits |
| NC-24 | experiences | adventure-park activities: `zipline`, `alpine-coaster`, `canyoning`/`abseiling`, `via-ferrata`, `rafting` | dark-cave, datanla, do-quyen (4) | Recurring at commercial adventure sites. One `adventure-activities` value or several? |
| NC-25 | experiences | `windsurfing`, `sandboarding`, `stand-up-paddle` | doi-nhai (windsurf), doc-let (sandboard), dau-tieng, da-ploa (SUP) (3-4) | Niche water/beach sports. Relates to NC-7 |
| NC-26 | categories | `entertainment` / theme parks | ba-na-cable-car (1) · datanla (4) · french-village-ba-na, golden-bridge (inside Bà Nà), duck-stop (5) · hon-thom-cable-car (Sun World), hon-tam-island (resort) (6) | The only recurring *broad theme* among the no-theme locations besides coast (R14, R22) |
| NC-27 | tags | revolutionary history / `ho-chi-minh` | ho-chi-minh-childhood-home, ho-chi-minh-mausoleum-complex (6); hoa-lo (French-era political prisoners) | A period/topic between colonial resistance and the Vietnam War |
| NC-28 | tags | `japanese-influence`, `chinese-influence` (Hoa) | hoi-an-ancient-town, japanese-bridge, jade-emperor-pagoda (Cantonese founder), hmong-king-palace (Chinese layout) (6); dong-van-old-town (4) | Same family as `french-influence`/`soviet-influence`: needs the cultural-vs-architectural decision first |
| NC-29 | experiences | `spa` / mud bath | hon-tam-island (6), dark-cave (4) | Wellness experience - recurring at 2 places |
| NC-30 | experiences | `traditional-performance` | imperial-city-hue (Nhã nhạc), lo-lo-chai (folk performances), khe-van (soong co singing) (6); don-village (xòe), dong-van-old-town (cultural nights), cai-rang (đờn ca tài tử), bay-mau (4, 2, 2) | Recurs in 7+ locations - a real traveler activity |
| NC-31 | tags | `mac-dynasty` / a dynastic period scheme | mac-dynasty-citadel (6) | Period tags now: medieval, Mạc, Nguyễn, colonial, WWII, revolutionary, Vietnam War. A coherent period scheme is needed |
| NC-21 | tags | `wwii` / `japanese-occupation` | cat-ba-cannon-fort, con-dao-prison (3) | Rare. Probably belongs under a period scheme with NC-6 and NC-20 |

## Recognition / status candidates

Tracked separately (R4). Not in `tags`. Destination concept undecided: tags, metadata or another controlled field.

| Recognition | Locations (from content) |
|-------------|--------------------------|
| UNESCO World Heritage | bai-tu-long-bay (shares the Hạ Long karst listing), bich-dong-pagoda (Tràng An complex) |
| UNESCO Global Geopark | angel-eye-mountain (Non Nước Cao Bằng) |
| UNESCO Biosphere Reserve | can-gio-monkey-island, can-gio-beach (Cần Giờ Mangrove), cat-tien-national-park |
| Ramsar site | ba-be-lake, con-dao-national-park (2013), cat-tien-national-park (Bàu Sấu wetland) |
| National (Historic-Cultural / Artistic) Relic | an-hai (1995), an-vinh (2013), ba-danh-pagoda (1994), bat-pagoda-soc-trang (1999), dalat-railway-station (2001) |
| National Scenic Site | chua-chan-mountain (2012) |
| Special National Historical Relic | eight-ladies-cave (Road 20 - Quyết Thắng complex; legacy label `⛰️ Special National Historical Relic`) |
| UNESCO Global Geopark (batch 4) | dong-van-market, dong-van-old-town (Đồng Văn Karst Plateau) |
| Batch 5 | ha-long-bay (UNESCO World Heritage; legacy label), elephant-waterfall (National Scenic Site 2001; legacy label `💧 National Scenic Site`), gieng-tien-peak (national heritage 2020), hang-pagoda (national heritage site; legacy label) |
| Batch 6 - UNESCO World Heritage | ho-dynasty-citadel, hoa-lu-ancient-capital (Tràng An), hoi-an-ancient-town, japanese-bridge (Hội An), imperial-citadel-of-thang-long, imperial-city-hue |
| Batch 6 - UNESCO Intangible Heritage | hung-temple (Worship of Hùng Kings, 2012) |
| Batch 6 - Special national relic / national heritage | ho-chi-minh-childhood-home (special, 2012), keo-pagoda (special; legacy `🏛️ National Relic`), mac-dynasty-citadel (1962), jade-emperor-pagoda (1994) |
| Batch 6 - other | ma-pi-leng-pass (UNESCO Geopark), hon-mun-island (national marine protected area 2001), lo-lo-chai-village (UN Tourism Best Tourism Village 2025 - international, non-UNESCO), la-vang-sanctuary (Minor Basilica - a religious designation) |
| Record listings / media rankings | co-thach-beach (Vietnam Records Book 2011), crazy-house, cai-rang (Rough Guides), dam-trau-beach (Travel + Leisure Top 25, legacy label `🏖️ Top 25 Beaches in the World`), duck-stop (TripAdvisor award) - editorial trivia, not recognition |
| National intangible cultural heritage | an-vinh (Khao Lề Thế Lính ceremony), cai-rang-floating-market (2016) |

Note: several legacy display labels already carry these (`🌊 UNESCO Biosphere`, `🏞️ National Park`...). They stay as display text.

## Ethnic culture evidence

Tracked for the granularity decision (R3). "Central" = a traveler-facing reason to visit, not just a mention.

| Location | Groups | Central? | Currently tagged |
|----------|--------|----------|------------------|
| `a-pa-chai` | Hà Nhì | yes (Sín Thầu village is a highlight) | ethnic-minority-culture (provisional) |
| `ba-be-lake` | Tày | yes (Pác Ngòi homestay, legend, Lồng Tồng) | ethnic-minority-culture (provisional) |
| `bac-son-valley` | Tày, Nùng, Dao | yes (stilt-house villages, Lồng Tồng) | ethnic-minority-culture (provisional) |
| `binh-lieu-border-mountains` | Dao, Tày, Sán Chỉ, Hoa | partly ("the cultural layer" beside the ridge trek) | none |
| `bui-hui-grassland` | H'rê | secondary (camping and scenery first) | none |
| `bung-binh-thien-lake` | Cham (Muslim) | yes | cham-culture |
| `ba-om-lake`, `bat-pagoda-soc-trang` | Khmer | yes | khmer-culture |
| `cat-cat-village` | Black H'mong | **yes** - the whole point of the village (legacy label `🎎 H'mong Culture`) | none (R3) |
| `cat-tien-national-park` | Mạ, Stiêng (Tà Lài village, buffer zone) | secondary | none |
| `co-to-island` | Hoa (early settlers, left 1978) | history only | none |
| `cat-cat-village` (follow-up) | Black H'mong | yes | **hmong-culture** (batch 4) |
| `ba-be-lake` (follow-up) | Tày | yes | ethnic-minority-culture + **tay-culture** (batch 4) |
| `don-village` | Thái (majority), Mường | yes (Thái stilt houses, xòe dance, Thái meals) | **thai-culture** |
| `du-gia-village` | Tày, H'mông, Dao | yes for Tày (homestay families) | **tay-culture** |
| `dong-van-market` | H'Mông, Tày, Nùng, Lô Lô | yes; H'Mông food/textiles dominate | **hmong-culture** |
| `dong-van-old-town` | H'Mông, Lô Lô, Kinh, Tày, Nùng | mixed (architecture + weekend nights) | none - MANUAL |
| `datanla-waterfall` | K'ho | name and legend only | none |
| `dray-nur-dray-sap-waterfalls` | Ê Đê | name and legend; nearby villages | none |
| `elephant-mountain` | M'nông | nearby village as an add-on | none |
| `hieu-village` | Thái (with Kinh, Mường at Phố Đoàn market) | yes (Thái village, stilt houses, homestays) | **thai-culture** |
| `hang-en` | Bru-Vân Kiều (Bản Đoòng) | secondary (lunch stop on the trek) | none |
| `fansipan` | H'Mông | name etymology only | none |
| `hmong-king-palace` | H'Mông (Vương clan) | yes - the clan's residence is the site | **hmong-culture** |
| `kho-muong-village` | White Thái | yes | **thai-culture** |
| `lo-lo-chai-village` | Black Lô Lô (+ H'Mông) | yes - UN Best Tourism Village for its Lô Lô community | **lolo-culture** |
| `khe-van-waterfall` | Sán Chỉ, Tày, Dao | partly - the soong co singing meeting place is a real draw, secondary to the falls | none (evidence) |
| `kon-tum-wooden-church` | Bahnar | partly - Bahnar stilt-house construction, a Bahnar-dressed Virgin, rông houses nearby | none (evidence) |
| `langbiang-mountain` | K'Ho | secondary - cultural village at the base; legacy `🌿 K'Ho Culture` | none (evidence) |
| `k50-waterfall`, `lung-cu-flag-tower` | Bahnar; Lô Lô | villages passed en route | none |
| `ma-pi-leng-pass` | 16 groups built the road | history only | none |

Early signal: the northern-highland locations usually involve **several** groups at once (Bắc Sơn, Bình Liêu), while
Khmer and Cham locations are single-group and tied to distinct religious/architectural traditions. Cát Cát is
the first single-group highland location where the group *is* the destination, so it is the strongest case yet for a
per-group tag. Batch 4 adds three more such cases (Bản Đôn - Thái, Du Già - Tày, Đồng Văn market - H'Mông). In the
Central Highlands (K'ho, Ê Đê, M'nông) the groups so far appear only in names, legends or side trips.

## Rejected (cumulative)

| Location | Value | Why |
|----------|-------|-----|
| `ba-na-cable-car` | `french-influence` | The "French Village" is a modern replica |
| `bai-dinh-pagoda` | `medieval-vietnam` | The 11th-century part is small beside the 2003+ complex |
| `am-tien-cave` | `buddhism` | Buddhist retreat is part of the story, not the focus |
| `an-hai-communal-house` | `cham-culture` | Cham-origin deities are a detail |
| `ben-thanh-market` | `french-influence` | French-built 1912-14, but the traveler draw is the market, not the colonial legacy (the owner's example of what not to infer) |
| `cafe-apartment-saigon` | `vietnam-war` | American advisors once lived there - background only |
| `cat-cat-village` | `french-influence` | Ruins of a colonial hydro station beside the waterfall - a detail |
| `crazy-house` | `soviet-influence` | The architect studied in Moscow. The building is expressionist, not Soviet |
| `cape-ca-na` | `cham-culture` | Only the place-name etymology is Cham |
| `cu-chi-tunnels` | D9 on `🪖 War History` | Generic "war history" is not 1:1 with `vietnam-war`, so both are kept |
| `dragon-bridge` | `medieval-vietnam` | The Lý-dynasty dragon is a 2013 design motif, not a historical connection |
| `dinh-mountain` | `vietnam-war` | The US helipad on Đỉnh La Bàn is a backstory for the viewpoint, not the draw |
| `dark-cave` | `swimming` removal / `trekking` removal | Not removed (R1). `trekking` recorded as unsupported |
| `a-pa-chai` | `ha-nhi-culture` | One village on the approach is too little for a per-group tag (R15) |
| `french-village-ba-na` | `french-influence` | 2014 replica. The 1923 Debay Wine Cellar is the only historic element (colonial-period evidence, NC-20) |
| `hang-mua` | `medieval-vietnam` | The Trần Thái Tông legend explains the name only |
| `pirate-islands` | `east-sea-sovereignty` | The 1958 sovereignty marker is in the Gulf of Thailand; the tag is scoped to Hoàng Sa/Trường Sa |
| `hoan-kiem-lake` | `medieval-vietnam` | The Lê Lợi sword legend names the lake; the site's draw is the lake walk and Ngọc Sơn |
| `lung-cu-flag-tower` | `medieval-vietnam` | Lý Thường Kiệt's flag is a founding legend for a 2010 tower |
| `keo-pagoda` | `medieval-vietnam` | Founded 1061, but the standing pagoda is 1630 (Lê Trung Hưng) |
| `long-bien-bridge` | `french-influence` via `🏯 French Heritage` | R21 - the alias is not semantic truth |
| `hoi-an-ancient-town`, `japanese-bridge` | `french-influence` | French facades are one layer of several; the Japanese/Chinese layers are the draw (NC-28) |

## Hiking/trekking observations

| Location | Current | Content says | Better fit |
|----------|---------|--------------|------------|
| `a-pa-chai` | trekking | final approach is a roughly 1h climb or a few hundred metres | hiking (today) |
| `am-tien-cave` | trekking | 200-250 stone steps | neither |
| `angel-eye-mountain` | trekking | 15-20 min climb; separate guided summit trek | trekking (guided) |
| `ba-den-mountain` | trekking | forest trails to 986m; "not for hardcore trekkers" | hiking |
| `ba-ho-waterfall` | trekking | rugged rock scramble, half-day | either |
| `ba-be-lake` | trekking | village walks | hiking / walking |
| `bac-son-valley` | trekking | 1,200 steps to a viewpoint | hiking |
| `bai-mon-beach` | trekking | trail down to the beach | hiking |
| `bai-tu-long-bay` | trekking | walk through forest to a cave | hiking |
| `ban-gioc-waterfall` | trekking | no walking route described | neither |
| `bau-sau` | trekking | 5km forest walk after cycling | hiking |
| `bidoup-nui-ba-national-park` | trekking | 26-27km two-day summit route; 3km day walks | trekking (both exist) |
| `binh-lieu-border-mountains` | trekking | 5-6h ridge trek | trekking |
| `bu-gia-map-national-park` | trekking | 8-11km, 2 days, "2/10 difficulty" | trekking (easy) |
| `bui-hui-grassland` | trekking | 30-min trail to the sim forest | hiking / walking |
| `cat-ba-cannon-fort` | trekking | hilltop fort, closed | neither |
| `cat-ba-national-park` | trekking | 12km jungle traverse (3-4h one way) + 1.5-2km routes | trekking (both exist) |
| `cat-tien-national-park` | trekking | six routes; Bàu Sấu 7h round trip | trekking |
| `chua-chan-mountain` | trekking | power-pole trail, 4-6h round trip; content says "hikers" | hiking |
| `con-dao-national-park` | trekking | ~7.5km day trek; 30-min forest walk to a beach | hiking |
| `cua-tu-stream` | trekking | stream trek in water; day trip to Gate 3 or 2 days to Gate 7 | trekking |
| `da-ploa-stream` | trekking | 15-20 min walk upstream to camp | neither |

| `dark-cave` | trekking | zipline, kayak, cave swim - no walking route | neither |
| `datanla-waterfall` | trekking | ~1km forest walk, 200 gradual steps | neither / short walk |
| `dinh-mountain` | trekking | colour-coded 5-13km trails; "casual trekkers"; 2-3h light visit or full day | both |
| `do-quyen-waterfall` | trekking | 689 steep steps + full-day loop (Hải Vọng Đài, Ngũ Hồ) in primary forest | hiking (full-day) |
| `dray-nur-dray-sap-waterfalls` | trekking | connecting forest trail between two falls | hiking / walking |
| `du-gia-village` | trekking | trail upstream to the waterfall | hiking |
| `du-gia-waterfall` | trekking | short river trail | hiking / walking |
| `elephant-mountain` | trekking | 10-20 min climb on bare granite | neither |

| `fansipan` | trekking | 2-3 day summit trek through cloud forest (alongside the cable car) | trekking |
| `gieng-tien-peak` | trekking | steps to Chùa Đục; crater rim closed | neither |
| `hang-en` | trekking | 11km each way, 12+ river crossings, 2 days with porters | trekking |
| `hang-mua` | trekking | 486 stone steps, 20-45 min | neither (stair climb) |
| `hang-rai` | trekking | walking coral rock platforms at low tide | neither |

| `k50-waterfall` | trekking | permit-only guided jungle trek, river crossings | trekking |
| `khau-coc-cha-pass` | trekking | 30-40 min hike each way to Pác Thốc viewpoint | hiking |
| `khau-pha-pass` | trekking | a road pass; no walking route described | neither |
| `khe-van-waterfall` | trekking | walk-in through villages, scramble between tiers | hiking |
| `kho-muong-village` | trekking (added) | guided 1-2 day treks to Don Village and Bản Pồn | trekking |
| `la-ngau-stream` | trekking | optional trek upstream to Hồ Tiên | hiking |
| `langbiang-mountain` | trekking | "genuinely demanding full-day hike" to Núi Bà; Radar Hill is a jeep ride | trekking/hiking (both) |
| `lung-cu-flag-tower` | trekking | 839 steps | neither |
| `ma-pi-leng-pass` | trekking | a road pass | neither |
| `hon-son-island` | **hiking** (added, D10) | Ma Thiên Lãnh trail, 1.5-2 h to the viewpoint | hiking |

**Tally after 150 locations (44 `trekking`, 1 `hiking`):** about 14 fit "trekking" under R12, about 17 read as hiking and
about 13 are neither. Only ~32% of `trekking` matches R12. For the first time D10 applied (`hon-son-island`).

**Tally after 100 locations (35 `trekking` values, 0 `hiking`):** about 11 fit "trekking" under R12, about 14 read as
hiking, and about 10 are neither (stairs, short walks, closed sites, zipline parks). Only ~31% of current `trekking`
values match the R12 definition.

**Tally after 80 locations (30 `trekking` values, 0 `hiking`):** about 9 fit "trekking" under R12, about 14 read as
hiking (day hike or trail walk), and about 7 are neither. With R12, "both" is a real outcome (bidoup, cat-ba-np,
dinh-mountain). `hiking` has not been added anywhere yet (D10).

**Tally after 60 locations (22 `trekking` values, 0 `hiking`):** about 8 fit "trekking" (multi-hour or multi-day, rugged
or guided), about 10 describe day hikes, and 4 describe neither (stairs, short walks, closed site).
The content itself often says "hike"/"hikers" where the data says `trekking` (ba-ho, bau-sau, chua-chan).

---

## Emerging patterns

- **P1 - Themes cover most places, but not urban leisure or developed beaches.** 55 of 60 locations received themes (not `ba-na-cable-car`, `binh-son-beach`, `bui-vien-street`, `can-ti-bridge`, `cua-dai-beach`).
  Gaps: developed beaches (NC-1) and nightlife/shopping streets (NC-11). Everything else fit the six.
- **P2 - `type` needs specific place types.** Batch 2 added 7 primary-type corrections. Several are existing values that
  had been left out (`bay`, `waterfall`, `island`). `nature` was even the only type of Bản Giốc.
- **P3 - `walking-tour` means "explore on foot".** It now appears on 6 reviewed temple and landscape sites.
- **P4 - Religious places use three layers:** `religion` theme + `temple-visit` experience + a tradition tag.
  7 religious sites so far. Tradition tags: `buddhism` (5), `folk-religion` (2), `khmer-culture` (2), `cao-dai` (1).
- **P5 - Exact experience-duplicate tags are common.** `📸 Photography` was removed from 19 of 40, plus `Camping`,
  `Boat Tour`, `Kayaking`, `Snorkeling`, `Cable Car` and `Kitesurfing` duplicates.
- **P6 - Border locations are a recurring draw** (A Pa Chải, Bản Giốc, Bình Liêu). See NC-15.
- **P7 - Recognition is mentioned often** (15 of 60 locations, not counting record listings). This supports R4's separate concept.
- **P11 - Adventure parks form a cluster** (Dark Cave, Datanla, Đỗ Quyên's Jungle Boss package): ziplines, coasters,
  abseiling. None of the current experiences cover them (NC-24).
- **P12 - Villages consistently carried `cultural` + `town`.** Batch 4 added `village` to two more. `town` on villages
  is a recurring MANUAL case that the consolidation will need to handle alongside R13.
- **P13 - Specific ethnic tags now have 5 applications** across H'Mông (2), Tày (2) and Thái (1). All are cases
  where one group is the reason to visit. Multi-group places remain untagged.
- **P14 - `photography` is on 92 of 100 reviewed locations** (242 of 257 overall). As a filter it no longer discriminates.
- **P15 - Theme parks and replicas cluster at Bà Nà** (3 locations) plus Datanla and the Duck Stop. They consistently
  fail the six categories.
- **P16 - Closures are frequent** (cat-ba-cannon-fort, elephant-waterfall, gieng-tien rim, duc-pagoda path, cua-dai,
  can-gio-beach). This is `status`/`statusNote` territory, and some duplicate it in legacy tags (R18).
- **P17 - Historical-period tags are multiplying** (`medieval-vietnam` 5, `vietnam-war` 9, `nguyen-dynasty` 2,
  `east-sea-sovereignty` 2, plus candidates Mạc, colonial, WWII, revolutionary). A single coherent period scheme is needed
  before freezing (NC-31).
- **P18 - "Influence" is the next structural question.** French (architectural, ≥ 5 strong cases), Japanese/Chinese (Hội An),
  Soviet (the mausoleum), Khmer. They all need the same cultural-vs-architectural decision (R17, R21).
- **P19 - Colonial-era French *architecture* is common, colonial *period* even more so, French *cultural* influence rare.**
  This reinforces R21.
- **P8 - Experiences are under-recorded rather than wrong.** Almost every change in batch 2 was an **addition**
  that the prose clearly supports (swimming, fishing, caving, cycling). Only 4 values look unsupported (MANUAL REVIEW).
- **P9 - Many primary types were broad even when the place is obvious** (batch 3: fortress, prison, station, village,
  building, bridge). The CLAUDE.md naming-suffix table predicted almost every new type.
- **P10 - Stub records exist** (`can-ti-bridge`). This is a content-completeness issue that taxonomy cannot fix.

---

## Checkpoint 1 - 60 locations reviewed

Purpose: check that the emerging taxonomy is coherent before continuing. **Nothing is frozen here** (R11).
Counts are uses among the 60 reviewed locations. Values also used by unreviewed locations show the total.

### 1. Proposed `type` values (10)

| Value | Uses | Source / note |
|-------|------|---------------|
| `national-park` | 5 | Only when the location *is* the park (bidoup, bu-gia-map, cat-ba-np, cat-tien, con-dao-np) |
| `communal-house` | 2 | an-hai, an-vinh |
| `bridge` | 2 | ben-hai (Hiền Lương), can-ti |
| `building` | 2 | cafe-apartment, crazy-house |
| `valley` | 1 | bac-son |
| `rice-fields` | 1 | an-nhut (terrace split pending) |
| `village` | 1 | cat-cat |
| `fortress` | 1 | cat-ba-cannon-fort |
| `prison` | 1 | con-dao-prison |
| `station` | 1 | dalat-railway-station |

Broad legacy types in the reviewed 60: `nature` 33, `cultural` 13, `attraction` 10, `landmark` 10, `heritage` 8, `history` 6.
They are still the **primary** type for 6 places where no specific type fits yet: a-pa-chai (`landmark`, a border
marker on a peak), b52-wreck, cu-chi-tunnels, ba-na-cable-car, bui-vien-street, bay-mau-coconut-forest.

### 2. Proposed `categories` (6 themes + 3 editorial badges)

| Theme | Uses (of 60) |
|-------|--------------|
| `nature` | 35 (58%) |
| `culture` | 17 |
| `architecture` | 10 |
| `history` | 9 |
| `religion` | 8 |
| `food` | 7 |

Badges unchanged: `hidden-gem` 3 in the reviewed range (bac-son, bai-mon, binh-lieu), `must-see` 0, `iconic` 0. No theme: 5 locations (see P1).

### 3. Proposed `experiences` (no public pages, R5)

| Value | Reviewed | Total in data |
|-------|----------|---------------|
| `swimming` | 16 | 29 (13 unreviewed, legacy) |
| `temple-visit` | 9 | 9 |
| `fishing` | 3 | 4 |
| `museum-visit` | 2 | 2 |
| `diving` | 1 | 3 |
| `surfing` | 1 | 2 |
| `kitesurfing` | 1 | 2 |

### 4. Proposed / seed `tags`

| Value | Uses | Group |
|-------|------|-------|
| `buddhism` | 6 | religion |
| `vietnam-war` | 4 | historical-period |
| `ethnic-minority-culture` | 3 | cultural-influence (**provisional**, R3) |
| `khmer-culture` | 2 | cultural-influence |
| `east-sea-sovereignty` | 2 | historical-period |
| `folk-religion` | 2 | religion |
| `cham-culture` | 1 | cultural-influence |
| `khmer-architecture` | 1 | architecture-style |
| `medieval-vietnam` | 1 | historical-period |
| `cao-dai` | 1 | religion |
| `french-influence` | **0** | cultural-influence (Phase 1 seed - no location has justified it yet) |

### 5. Candidate synonyms / duplicates

| Pair | Fields | Observation |
|------|--------|-------------|
| `hiking` ↔ `trekking` | experiences | See section 7 |
| `boat-tour` ↔ "boat trip" | experiences / legacy tags | Tags use "Boat Trip", "Boat Tour", "Bamboo Raft", "Basket Boat" for the same idea |
| `walking-tour` ↔ walking | experiences | Used as "explore on foot" (P3) |
| `kitesurfing` ↔ `kite-surfing` | data ↔ `EXPERIENCE_GROUP_CONFIG` | Spelling mismatch. The config spelling matches no data |
| `beach` (experience) ↔ `swimming` ↔ `beach` (type) | experiences / type | Three layers for one place kind |
| `nature` (type) ↔ `nature` (category) | type / categories | Same word, and the category now carries the meaning |
| `cultural` (type) ↔ `culture` (category, experience) | all three | Triplicated |
| `history` (type, experience, category) | all three | Triplicated |
| `food` (experience, page) ↔ `food` (category) | experiences / categories | Both are defensible; the experience backs `/experiences/food` |
| `markets` (experience) ↔ `market` (type) | experiences / type | Consistent, not a conflict |
| `caving` (experience) ↔ `cave` (type) | experiences / type | Consistent |
| `wildlife` ↔ birdwatching (NC-12) | experiences | Subset or separate? |
| `river` ↔ stream, `town` ↔ `village`, `rice-fields` ↔ rice terraces | type | Granularity questions (NC-16, MANUAL) |
| `khmer-culture` ↔ `khmer-architecture` | tags | Co-occur on bat-pagoda. Keep both only when the architecture is itself a draw |
| `vietnam-war` ↔ "War History" legacy labels | tags | Not 1:1 (R8). The labels stay |

### 6. Values that may need consolidation

- **The six broad legacy types** - the category layer now carries the meaning (D2). They are needed for the
  `/locations` filters and the "Cultural" shortcut, so removing them is an IA decision.
- **`nature` category at 58%** - probably too broad to be a useful filter alone. It hints at sub-themes
  (coast, mountains, forest...), which is the NC-1 question from another angle.
- **Page-backed theme experiences** (`culture` 119 total, `history`, `food`, `beach`) overlap with categories. Keeping
  them is required for `/experiences/*` (R5). Whether they stay *semantically* is a consolidation question.
- **Low-use proposed values** (1 use: valley, rice-fields, village, fortress, prison, station, surfing, kitesurfing, diving,
  cham-culture, khmer-architecture, medieval-vietnam, cao-dai) are expected this early. Re-check at 120 reviewed.
- **`french-influence` has 0 uses** after 60 locations. Colonial-*period* history appears 5 times (NC-20). The seed may be
  the wrong shape: "period" vs "influence".
- **`watersport`** (legacy, generic) and **`walking-tour`** semantics.
- **`EXPERIENCE_GROUP_CONFIG`** still drops 11 page-backed experiences from destination "What to do" (pre-existing).

### 7. Hiking vs trekking evidence

22 `trekking` values in the reviewed 60, 0 `hiking`:

| Reading | Count | Locations |
|---------|-------|-----------|
| Trekking (multi-hour/multi-day, rugged or guided) | ~8 | angel-eye (guided summit), bidoup, binh-lieu, bu-gia-map, cat-ba-np (12km), cat-tien, cua-tu, ba-ho (borderline) |
| Hiking (day walk/climb, marked trail) | ~10 | a-pa-chai, ba-den, ba-be, bac-son, bai-mon, bai-tu-long, bau-sau, bui-hui, chua-chan, con-dao-np |
| Neither (stairs, 15-min walk, closed site, no route) | 4 | am-tien, ban-gioc, cat-ba-cannon-fort, da-ploa |

Signals: the prose often says "hike"/"hikers" where the data says `trekking`. Several national parks offer **both**
(short trails + multi-day routes), so one location can legitimately need both values. Any decision should also
cover what happens to `/experiences/trekking` (currently 75 locations).

### 8. Ethnic / cultural evidence

- Tagged: `khmer-culture` (2), `cham-culture` (1) - single-group, tied to religion and architecture.
  `ethnic-minority-culture` (3, provisional) - all northern-highland places where the culture is central.
- Untagged evidence: cat-cat (Black H'mong, central), binh-lieu (Dao, Tày, Sán Chỉ, Hoa - partial), bui-hui (H'rê - secondary),
  cat-tien (Mạ, Stiêng - secondary).
- Pattern: highland places mostly involve **several** groups. Cát Cát is the first where **one** group is the destination.
  Legacy labels already name groups (`🎎 H'mong Culture`, `🛖 Tày Homestay`).
- Open: one broad tag, per-group tags, or both (broad group + specific members)?

### 9. Recognition / status evidence

15 of 60 locations mention a recognition (details in [Recognition / status candidates](#recognition--status-candidates)):
UNESCO World Heritage 2, UNESCO Geopark 1, UNESCO Biosphere 3, Ramsar 3, national relic 5, national intangible heritage 2,
national scenic site 1. Record listings (Vietnam Records Book, "world's strangest buildings") also appear. They read as
editorial trivia, not recognition.

### 10. Recurring new dimensions

These keep appearing, mostly through legacy tags and prose, and do not fit any of the four fields cleanly.
**Owner decision (R18): these are travel attributes / product-data-model candidates, not taxonomy.** The four fields
stay unchanged. Recurrences continue to be noted here.

| Dimension | Evidence | Current home |
|-----------|----------|--------------|
| **Recognition / status** | 15 locations | Tracked separately (R4) |
| **Seasonal phenomena** (blooms, harvest, moss, turtle nesting, butterflies, bioluminescence, reed flowers) | ≥ 10 locations; legacy tags `🌸 Sim Blossom`, `🌾 Reed Flower Season`, `🦋 Butterfly Season`, `✨ Bioluminescence` | `bestMonths` covers timing only, not the phenomenon |
| **Viewpoint / time-of-day** (sunrise, sunset, sea of clouds, panoramic view) | very frequent legacy tags (`🌅 Sunrise Spot`, `Sunset Views`, `📸 Panoramic Views`) | CLAUDE.md says `viewpoint` is not a value. Is it a type, experience or tag? |
| **Access / logistics** (boat required, border permit, day trip from HCMC, closed) | legacy tags `⛵ Boat Trip Required`, `🚗 Day Trip from HCMC`, `🚢 2 Hours from Saigon`; `status` field | Partly covered by `status` / `statusNote` |
| **Difficulty / traveler fit** (beginner trek, family-friendly, fitness needed) | `🥾 Beginner Trek`, Bù Gia Mập "2/10", Bà Hồ "reasonably fit" | Prose only |
| **Development level** (undeveloped, commercialised, off the beaten path) | `🏖️ Undeveloped Beach`, `🌊 Off the Beaten Path`, Cát Cát commercialisation | Overlaps with the `hidden-gem` badge |
| **Geographic distinction** (border, extreme point, largest/highest) | a-pa-chai, ban-gioc, binh-lieu, dalat station | NC-15 (`border-region`) |

### Checkpoint conclusion

The four-field model holds: every reviewed location fit without forcing, except a handful of MANUAL cases.
The structural questions to settle before or at consolidation are:
1. hiking vs trekking and the `/experiences/trekking` implication
2. the fate of the broad legacy types vs the `/locations` filters
3. ethnic tag granularity
4. where recognition lives
5. whether `nature` needs sub-themes (coast etc.)
6. period vs influence tags (`french-influence` vs colonial period)

---

## Checkpoint 2 - 100 locations reviewed

Nothing is frozen or consolidated here (R11). "Reviewed" = uses among the first 100 locations. "/N" = total uses in all
257 when some come from unreviewed legacy data.

### 1. Vocabulary growth 60 → 100

| Field | Proposed values at 60 | at 100 | Added in batches 4-5 |
|-------|-----------------------|--------|----------------------|
| `type` | 10 | 12 | `church`, `old-quarter` |
| `categories` (themes) | 6 | 6 | none (R14) |
| `experiences` | 7 | 7 | none |
| `tags` | 11 (incl. 5 seed) | 15 | `hmong-culture`, `tay-culture`, `thai-culture`, `catholicism` |

Growth is slowing: batches 4-5 added 2 types, 0 experiences and 4 tags over 40 locations, against 10 types and 7
experiences in the first 60. Most new *usage* now lands on values that already exist (`village` 1→5, `bridge` 2→4,
`swimming` 16→27, `temple-visit` 9→12).

### 2. Proposed values by field (usage)

- **type (12):** `village` 5, `national-park` 5, `bridge` 4, `communal-house` 2, `building` 2, `valley` 1, `rice-fields` 1,
  `fortress` 1, `prison` 1, `station` 1, `church` 1, `old-quarter` 1.
- **categories (6 themes):** `nature` 61, `culture` 25, `architecture` 15, `history` 14, `religion` 11, `food` 10.
  9 locations have no theme (3 Bà Nà, 2 stubs, 3 developed beaches, the Duck Stop).
- **experiences (7):** `swimming` 27 (/36), `temple-visit` 12, `fishing` 5, `kitesurfing` 3, `museum-visit` 2,
  `surfing` 1 (/2), `diving` 1 (/3).
- **tags (15):** `buddhism` 8, `vietnam-war` 5, `ethnic-minority-culture` 3 (provisional), `khmer-culture` 2,
  `medieval-vietnam` 2, `east-sea-sovereignty` 2, `folk-religion` 2, `hmong-culture` 2, `tay-culture` 2, `thai-culture` 2,
  `cham-culture` 1, `khmer-architecture` 1, `cao-dai` 1, `catholicism` 1, `french-influence` **0**.

Broad legacy types (kept, R13): `nature` 55, `cultural` 22, `attraction` 15, `landmark` 15, `heritage` 11, `history` 7.
They are still the primary type of 12 locations where no specific type is clearly right.

### 3. Hiking vs trekking

35 `trekking`, 0 `hiking` in the reviewed 100. Classified under R12:

| Reading | Count | Share |
|---------|-------|-------|
| Trekking (multi-hour/multi-day, demanding or established route) | ~11 | 31% |
| Hiking (day hike / trail walk) | ~14 | 40% |
| Neither (stairs, short walks, closed sites, ziplines) | ~10 | 29% |

- "Both" is real: bidoup, cat-ba-np, dinh-mountain and fansipan (cable car + trek) offer day trails and long routes.
- D10 has not fired yet. No location without `trekking` has clearly described a day hike, so `hiking` is still unused.
- The ~29% "neither" group is the strongest sign that legacy `trekking` was applied loosely.
  `/experiences/trekking` (75 locations overall) is where this becomes visible.

### 4. Ethnic-culture evidence

| Tag | Locations | Basis |
|-----|-----------|-------|
| `hmong-culture` | cat-cat, dong-van-market | single dominant group, the reason to visit |
| `tay-culture` | ba-be, du-gia-village | Tày homestay families central |
| `thai-culture` | don-village, hieu-village | Thái villages of Pù Luông |
| `khmer-culture` | ba-om, bat-pagoda | Khmer temples |
| `cham-culture` | bung-binh-thien | Cham Muslim villages |
| `ethnic-minority-culture` (provisional) | a-pa-chai, ba-be, bac-son | the broad tag; ba-be now also has `tay-culture` |

Untagged but recorded: multi-group places (bac-son, binh-lieu, dong-van-old-town) and mention-only groups (K'ho, Ê Đê,
M'nông, H'rê, Bru-Vân Kiều, Mạ, Stiêng). Pattern: a per-group tag works when one group *is* the destination. The broad
tag's remaining role would be multi-group places, and those are also the least clear-cut cases.
`thai-culture` naming: MANUAL (Thailand ambiguity; `tai-culture` with label "Thái (Tai) Culture" is the candidate).

### 5. Accommodation / stay evidence

| Concept | Current home | Locations (reviewed) |
|---------|--------------|----------------------|
| Homestay (village/family) | `homestay` - **canonical, page-backed** (12 overall) | ba-be, diep-son, don-village, du-gia-village, hieu-village; legacy labels `🛖 Tày Homestay`, `🛏️ Homestay Hub` |
| Camping (wild or organised) | `camping` - canonical (18 reviewed) | incl. `🏕️ Wild Camping` (doi-nhai), `🏕️ Island Camping` (ba-hon-dam), organised camp sites (da-ploa) |
| Camping inside a cave | `camping` + `caving` | hang-en (`🏕️ Camp Inside the Cave`) |
| Overnight cruise | `boat-tour` (no stay concept) | ha-long-bay (`🚢 Overnight Cruise`); bai-tu-long, lan-ha likely later |
| Ranger-station overnight | none | bau-sau (`🌙 Overnight Stay`) |
| Eco-lodges / retreats | none | don-village (prose) |
| Stay inside an attraction | none | crazy-house (`🏨 Functioning Guesthouse`), french-village (Mercure) |

The recurring stay concepts are overnight cruise (1, likely more in the bays) and eco-lodge/retreat (1). Neither
recurs enough yet (D11). Question for consolidation: is "stay" an experience at all, or a separate travel attribute
like the R18 list? `homestay` is the one stay concept that is clearly an *experience*, because the cultural exchange is the draw.

### 6. Official designation evidence

22 of 100 reviewed locations mention a designation:

| Designation | Count | Examples |
|-------------|-------|----------|
| UNESCO World Heritage | 3 | ha-long-bay, bai-tu-long-bay, bich-dong-pagoda (Tràng An) |
| UNESCO Global Geopark | 3 | angel-eye (Non Nước Cao Bằng), dong-van-market, dong-van-old-town |
| UNESCO Biosphere Reserve | 3 | cat-tien, can-gio-beach, can-gio-monkey-island |
| Ramsar site | 3 | ba-be, con-dao-np, cat-tien |
| National / special national relic | 8 | an-hai, an-vinh, ba-danh, bat-pagoda, dalat-station, eight-ladies (special), gieng-tien, hang-pagoda |
| National scenic site | 2 | chua-chan, elephant-waterfall |
| National intangible cultural heritage | 2 | an-vinh (ceremony), cai-rang |

Several are already legacy display labels (`🌊 UNESCO World Heritage`, `⛰️ Special National Historical Relic`,
`💧 National Scenic Site`, `🏛️ National Heritage Site`). If `tags` becomes the home (R16), D9 could convert them 1:1 with no
visible change. Media rankings (Travel + Leisure, Rough Guides, Vietnam Records Book, TripAdvisor) are a separate,
non-official group.

### 7. Proposed values that now look like duplicates / synonyms

| Candidate | Observation | Suggestion for consolidation |
|-----------|-------------|------------------------------|
| `temple-visit` | Fits pagodas/temples. At a cathedral it reads wrong (hanoi-st-josephs, MANUAL). Co-occurs with `buddhism` in 8 of 12 uses | Rename to a neutral worship-site value, or scope to Asian temples and add a church equivalent? |
| `village` + legacy `town` | 4 of 5 villages still carry `town` (R13 keeps it) | The legacy `town` on villages is misleading. A migration-step candidate |
| `old-quarter` vs `town`/`city` | hanoi-old-quarter has old-quarter + city; dong-van-old-town kept as `town` | Same family as village/town |
| `ethnic-minority-culture` vs per-group tags | ba-be carries both | The broad tag may be redundant wherever a group tag applies |
| `french-influence` + the Phase 1 aliases | 0 uses. The aliases map *colonial-period* labels into it (conflicts with R17) | Split into period vs influence (NC-20), or drop the seed |
| `kitesurfing` vs `kite-surfing` (`EXPERIENCE_GROUP_CONFIG`) | The config spelling matches nothing | Spelling fix belongs to the destination config (out of scope, R5) |
| `swimming` vs `beach` experience | `beach` (page-backed) means "beach time". `swimming` is the activity; 27 uses and growing | Not duplicates, but they overlap on every beach |
| `photography` | On 92% of locations | Low information as a filter (P14) |

### 8. Dimensions that recur enough for a future data-model discussion (R18: not taxonomy)

| Dimension | Evidence at 100 | Existing field |
|-----------|-----------------|----------------|
| **Official designation** | 22 locations | none. Likely `tags` (R16) |
| **Closure / access status** | ≥ 6 locations with closures or reconstruction; legacy `🚫 Long-Term Closure` | `status` + `statusNote` exist, but closures still leak into legacy tags and prose |
| **Seasonal phenomena** | ≥ 15 locations (blooms, harvests, cloud seas, sunbeams, turtle nesting, snow, bioluminescence) | `bestMonths` covers timing, not *what* happens |
| **Viewpoint / light** (sunrise, sunset, cloud sea) | very common legacy tags; hang-mua, gieng-tien, elephant-waterfall | none |
| **Stay type** | see section 5 | `homestay`/`camping` experiences only |
| **Effort / difficulty** | ~30 walking-related locations need it to disambiguate hiking vs trekking vs stairs | none - it would also help the D3 decision |
| **Content completeness** | 2 stub records (can-ti-bridge, ha-giang-city) | none - an editorial/data-quality flag rather than taxonomy |
| **Authenticity / replica** | Bà Nà cluster (French Village, Golden Bridge) | none - explains several "rejected" tags |

### Checkpoint 2 conclusion

The model still holds: the four fields absorbed 100 locations with growth now slowing. What changed since
Checkpoint 1:
- The ethnic-tag rule (R15) works in practice.
- `hiking` vs `trekking` has a quantified picture: only ~31% of `trekking` fits R12.
- A real inconsistency sits in the Phase 1 compatibility layer (the `french-influence` aliases).

The candidate categories with genuine recurrence are **coast** and **entertainment/theme parks**, the two groups of
no-theme locations.

---

## Checkpoint 3 - 150 locations reviewed

Nothing is frozen or consolidated here (R11). "a/b" = uses among the 150 reviewed / uses in all 257.

### 1. Vocabulary growth

| Field | at 60 | at 100 | at 150 | Added in batch 6 |
|-------|-------|--------|--------|------------------|
| `type` (proposed) | 10 | 12 | 15 | `palace`, `pass`, `lighthouse` |
| `categories` (themes) | 6 | 6 | 6 | none |
| `experiences` (proposed) | 7 | 7 | 8 | `hiking` (D10) |
| `tags` (proposed + seed) | 11 | 15 | 18 | `taoism`, `nguyen-dynasty`, `lolo-culture` |

Batch 6 (50 locations) added 7 values in total, against 6 in batches 4-5 (40 locations). All 7 come from the CLAUDE.md
suffix table or recurring evidence. New *usage* dominates: `temple-visit` 12→20, `swimming` 27→36, `vietnam-war` 5→9,
`medieval-vietnam` 2→5, `village` 5→7, `bridge` 4→6.

### 2. Proposed values by field

- **type (15):** `village` 7, `bridge` 6, `national-park` 5, `church` 3, `pass` 3, `communal-house` 2, `building` 2, `prison` 2,
  `old-quarter` 2, `palace` 2, `valley` 1, `rice-fields` 1, `fortress` 1, `station` 1, `lighthouse` 1.
- **categories (6 themes):** `nature` 81, `culture` 38, `history` 37, `architecture` 29, `religion` 19, `food` 11.
  12 of 150 have no theme.
- **experiences (8):** `swimming` 36/42, `temple-visit` 20, `fishing` 5, `museum-visit` 5, `kitesurfing` 3, `diving` 2/3,
  `surfing` 1/2, `hiking` 1/2.
- **tags (18):** `buddhism` 12, `vietnam-war` 9, `medieval-vietnam` 5, `folk-religion` 4, `ethnic-minority-culture` 3 (provisional),
  `hmong-culture` 3, `thai-culture` 3, `catholicism` 3, `khmer-culture` 2, `east-sea-sovereignty` 2, `tay-culture` 2,
  `nguyen-dynasty` 2, `cham-culture` 1, `khmer-architecture` 1, `cao-dai` 1, `taoism` 1, `lolo-culture` 1,
  `french-influence` **0**.

Broad legacy types remain primary for 20 of 150, almost all places with no fitting specific type (memorials, monuments,
cable cars, farmland, historic houses).

### 3. Hiking vs trekking

| Reading (R12) | at 100 | at 150 |
|---------------|--------|--------|
| Trekking | ~11 | ~14 |
| Hiking | ~14 | ~17 |
| Neither (stairs, road passes, short walks, closed sites) | ~10 | ~13 |
| **Total `trekking` values** | 35 | 44 |

- `hiking` applied once (D10: hon-son-island). Legacy `hiking` exists once in unreviewed data (nho-que-river).
- Only ~32% of `trekking` fits R12. The "neither" group grew with road passes, where `trekking` stands in for "an
  outdoor/adventurous place".
- "Both" cases: bidoup, cat-ba-np, dinh-mountain, fansipan, langbiang.

### 4. Religious-site evidence

| Site kind | Locations (reviewed) | `temple-visit` applied? |
|-----------|----------------------|-------------------------|
| Buddhist pagoda | ba-danh, bai-dinh, bat-pagoda, bich-dong, duc, hang, ho-quoc, keo, linh-phuoc, long-son | yes (10) |
| Pagoda on a mountain / by a lake | ba-den, chua-chan, dinh-mountain, ba-om, am-tien | yes (5) |
| Temple (đền) - kings, founders, heroes | hung-temple, hoa-lu (Đền Đinh/Lê), hoan-kiem (Ngọc Sơn) | yes (3) |
| Taoist / Chinese folk temple | jade-emperor-pagoda | yes |
| Cao Đài temple | cao-dai-holy-see | yes |
| Catholic church / cathedral / basilica | hanoi-st-josephs, kon-tum-wooden-church, la-vang-sanctuary | **no** (the value name does not fit) |
| Communal house (đình) | an-hai, an-vinh | no (village tutelary worship + memorial) |
| Shrine inside another site | japanese-bridge (Bắc Đế Trấn Võ), hon-yen / hon-son / an-hai (Lăng Ông whale-worship shrines) | no (secondary) |
| Mosque | bung-binh-thien (Cham mosques around the lake) | no (seen from the boat / village walk) |

Observations: `temple-visit` works for every East/Southeast Asian worship site reviewed (20 uses). It fails only on
Christian sites (3). No mosque or standalone shrine has been the *main* site yet. Two end states remain open: a neutral
`religious-site-visit`, or `temple-visit` plus specific values (e.g. `church-visit`). The data so far slightly favours the
neutral value, since the religion itself is already carried by tags (`buddhism`, `catholicism`, `taoism`, `cao-dai`,
`folk-religion`).

### 5. Ethnic-culture evidence

| Tag | Uses | Locations |
|-----|------|-----------|
| `hmong-culture` | 3 | cat-cat, dong-van-market, hmong-king-palace |
| `thai-culture` | 3 | don-village, hieu-village, kho-muong-village (all Pù Luông) |
| `tay-culture` | 2 | ba-be, du-gia-village |
| `khmer-culture` | 2 | ba-om, bat-pagoda |
| `cham-culture` | 1 | bung-binh-thien |
| `lolo-culture` | 1 | lo-lo-chai-village |
| `ethnic-minority-culture` (provisional) | 3 | a-pa-chai, ba-be, bac-son |

Evidence without a tag: Sán Chỉ (khe-van), Bahnar (kon-tum, k50), K'Ho (langbiang, datanla), Ê Đê, M'nông, H'rê,
Bru-Vân Kiều, Mạ, Stiêng - all secondary or mention-only. Pattern holds: per-group tags fit places where one group is the
destination (6 groups, 12 applications). The broad tag has not been applied since batch 1.

### 6. Designation / recognition evidence

37 of 150 reviewed locations mention a designation (22 at 100):

| Designation | Count |
|-------------|-------|
| UNESCO World Heritage | 9 |
| UNESCO Global Geopark | 4 |
| UNESCO Biosphere Reserve | 3 |
| UNESCO Intangible Cultural Heritage | 1 (hung-temple) |
| Ramsar site | 3 |
| National / special national relic | 12 |
| National scenic site | 2 |
| National intangible cultural heritage | 2 |
| Other (marine protected area, UN Tourism Best Village, Minor Basilica) | 3 |

UNESCO World Heritage now clusters by *property*: Hạ Long/Bái Tử Long, Tràng An (Bích Động, Hoa Lư), Hội An (town + bridge),
Huế, Thăng Long, Hồ citadel. Consolidation may want the property, not just a flag.

### 7. Generic / non-discriminative values

| Value | Field | Share of reviewed | Note |
|-------|-------|-------------------|------|
| `photography` | experiences | **141/150 (94%)** | R20 - never added, consolidation candidate |
| `nature` | categories | 81/150 (54%) | Broad by design (R14), but half the dataset |
| `nature` | type | 72/150 (48%) | Legacy broad type (R13) |
| `culture` | experiences | 72/150 (48%) | Page-backed; overlaps the `culture` category |
| `walking-tour` | experiences | 61/150 (41%) | Used as "explore on foot" (P3), rarely an actual tour |
| `history` | experiences | 49/150 (33%) | Page-backed; overlaps the `history` category |

### 8. Synonyms / aliases

| Pair | Status |
|------|--------|
| `temple-visit` ↔ church/other worship visits | Section 4 |
| `hiking` ↔ `trekking` | Section 3 |
| `pass` ↔ `mountain` | Passes keep `mountain` (legacy). Not synonyms, but `mountain` on a road pass is loose |
| `village` ↔ legacy `town` | 5 of 7 villages still carry `town` |
| `old-quarter` ↔ `town`/`city` | hoi-an keeps `town`; hanoi-old-quarter keeps `city` |
| `church` ↔ legacy `temple` | la-vang keeps `temple` (R1) - a loose legacy value |
| `pagoda` ↔ legacy `temple` | ho-quoc keeps `temple` |
| `nguyen-dynasty` ↔ `👑 Nguyễn Dynasty` (replaced, D9) / `👑 Nguyễn Tomb` (kept) | D9 applied only where 1:1 |
| `french-influence` ↔ `french-colonial`/`french-heritage`/`french-vietnamese-architecture` aliases | **Known issue (R21)** |
| `kitesurfing` ↔ `kite-surfing` (`EXPERIENCE_GROUP_CONFIG`) | Config spelling, out of scope |
| `🏡 Homestay`, `🥾 Trekking`, `🚲 Cycling`... legacy tags ↔ experiences | Removed under D6 (except tags[0]) |

### 9. Emerging taxonomy dimensions

Dimensions that recur and seem to belong **inside** the four fields but need structure:
- **Historical period scheme** (tags): medieval, Mạc, Nguyễn, French colonial, WWII/Japanese, revolutionary, Vietnam War,
  East Sea sovereignty. 7 values in use or candidate (NC-20, 21, 27, 31).
- **Influence** (tags): French, Japanese, Chinese, Soviet, Khmer. Needs the cultural-vs-architectural decision (P18).
- **Religious tradition** (tags): buddhism 12, folk-religion 4, catholicism 3, taoism 1, cao-dai 1. Coherent and working well.
- **Traditional performance** (experiences, NC-30): 7+ locations.

Dimensions that recur but are travel attributes (R18), not taxonomy: designation (37), seasonal phenomena, closures/suspensions
(kho-muong-cave, hospital-cave, elephant-waterfall, cat-ba-cannon-fort...), viewpoints, difficulty, stay type, content
completeness (3 stub or marker records: can-ti-bridge, ha-giang-city, km0-ha-giang).

### 10. Issues that could threaten the four-field model

None breaks it: all 150 locations were reviewed without forcing and without deleting values. Four tensions are worth deciding
before the final migration:

1. **`tags` does two jobs.** It is visible display content (hero chips, card subtitle, province cards, search) *and* the
   taxonomy field. D6, D6a, D7 and D9 exist only to manage that overlap. At consolidation, canonical tags and legacy display
   labels will need a clear coexistence rule (e.g. canonical tags rendered by label, editorial labels phased out or kept as
   presentation data). This is the most significant structural tension.
2. **`type[0]` drives presentation.** Choosing a more accurate primary type changes theme colours (4 in batch 6, 9 cumulative).
   Taxonomy correctness and visual theming are coupled.
3. **Broad legacy types are load-bearing for the `/locations` filters** (R13). Removing them is an IA migration, not a data
   cleanup.
4. **Categories have a stable 8% gap** (12/150): entertainment/resorts (5), developed beaches (3), stubs/markers (3), nightlife (1).

On the coast question (R22), the evidence so far says the coastal *place kinds* are already handled by `type` (`beach`,
`island`, `bay`, `lighthouse`, and a cape candidate). What is missing is a *theme* for developed beach/leisure places that are
not "nature". That points to `categories` for any coastal concept. Entertainment behaves the same way: a theme gap
(`categories`), with `theme-park` a possible `type` for the Bà Nà / Sun World cases.

---

## Validation log

| Check | Batch 1 | Batch 2 | Batch 3 | Batch 4 | Batch 5 | Batch 6 |
|-------|---------|---------|---------|---------|---------|---------|
| `tsc --noEmit` | clean | clean | clean | clean | clean | clean |
| ESLint (changed files) | no new warnings | no new warnings | no new warnings | no new warnings | no new warnings | no new warnings |
| `next build` | success | success | success | success | success | success (257 location + 20 experience pages) |
| Non-taxonomy content (`taxonomy-content-snapshot.ts`, all 257 vs base) | identical | identical | identical | identical | identical | identical |
| Location count / slug order | 257, unchanged | 257, unchanged | 257, unchanged | 257, unchanged | 257, unchanged | 257, unchanged |
| `type`/`categories`/`experiences` values removed vs original data | 2 (restored in batch 2) | **0** | **0** | **0** | **0** | **0** |

Visible side effects, cumulative vs the original data:
- `/experiences/*` counts: beach 44->45, camping 34->36, caving 12->13, kayaking 22->26, culture 118->119,
  markets 5->6, cycling 36->39, shopping 2->3. No page lost a location.
- `/locations` type filter: new `bridge` 1, `building` 1, `communal-house` 2, `national-park` 2, `rice-fields` 1, `valley` 1.
  `bay` 2->3, `waterfall` 15->16. No option lost a location.
- Primary type changed for 11 locations (badge text). Theme colour changed only for `can-gio-monkey-island`
  (green -> blue, `island`).
- `/locations` card subtitle (`tags[0]`): unchanged everywhere. The second tag changed on 5 province-page cards
  (D6/D9 removals).
- Destination "What to do": batch 1 changed the order in 4 destinations and added `surfing` to Hội An. Batch 2 changed nothing.
  Batch 3 added `diving` to Côn Đảo.
- Batch 3: `/experiences/*` camping 36->37, kayaking 26->27, markets 6->7, cable-car 5->6, motorcycling 31->32.
  9 primary-type changes. Theme colour changed for `can-ti-bridge` (purple -> amber, `bridge`) and `crazy-house`
  (amber -> purple, `building`). `tags[0]` unchanged everywhere.
- Batch 4: `/experiences/*` kayaking 27->28, cable-car 6->7, homestay 9->11. 4 primary-type changes, no theme colour changes.
  `tags[0]` changed only on `cat-cat-village` (`🎎 H'mong Culture` -> `hmong-culture`; displays "H'Mông Culture"
  instead of "H'mong Culture"). Destination "What to do": Pù Luông gains `homestay`.
- Batch 5: `/experiences/*` snorkeling 19->20, markets 7->8, homestay 11->12. 8 primary-type changes. Theme colour changed for
  `ha-long-bay` (green -> blue, `bay`) and `ham-ninh-fishing-village` (amber -> purple, `village`). `tags[0]` unchanged
  everywhere. Destination "What to do": Pù Luông gains `swimming`.
- Batch 6: `/experiences/*` trekking 75->76, camping 37->39, caving 13->14, homestay 12->13, shopping 3->4 (no page lost a
  location). 17 primary-type changes. Theme colour changed for `hoa-lo-prison`, `hoi-an-ancient-town` (amber -> purple) and
  `japanese-bridge`, `long-bien-bridge` (purple -> amber). `tags[0]` unchanged everywhere. Destination "What to do":
  Phú Quốc gains `swimming`, Pù Luông gains `trekking`.

## Code changes supporting the review

- `data/taxonomy/*`: proposed values (see vocabulary table), `CanonicalLocationExperience`, alias
  `east-sea-sovereignty-history`.
- `tagDisplayLabel()` for the 3 places that render location tags. Legacy output is unchanged.
- Hyphenated type values render with spaces in type labels.
- `locationTheme` entries for new types, with colours chosen to match the value they replace as primary where possible.
- `scripts/taxonomy-content-snapshot.ts` and `npm run audit:taxonomy` for validation.

Not changed: search index structure, `EXPERIENCE_GROUP_CONFIG`, `/experiences` pages, filter UI, compatibility aliases
(except one addition), `experiences`/`tags` strictness.

Pre-existing issue, not changed: `stripLeadingEmoji()` does not strip flag emoji (`🇻🇳 ...`).
