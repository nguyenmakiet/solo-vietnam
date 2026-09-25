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
| 3 | 40-59 | `cat-ba-island` -> ... | - | next |

**Reviewed: 40 / 257. Remaining: 217.**

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

**D9 - Same-concept legacy labels are replaced in place (new in batch 2).**
When a legacy label expresses exactly the concept of the canonical tag being added, it is replaced at the
same position instead of adding a near-duplicate chip. Examples: `🕌 Cham Culture` -> `cham-culture`
(display "Cham Culture", unchanged) and `🇻🇳 East Sea Sovereignty History` -> `east-sea-sovereignty`.
The matching alias was added to `LEGACY_TAG_ALIASES`.

---

## Vocabulary state (after batch 2)

`status: "proposed"` = introduced by this review, pending the freeze.

| Field | Proposed values (batch introduced) |
|-------|-------------------------------------|
| `type` | `communal-house`, `valley`, `rice-fields` (1) · `national-park`, `bridge`, `building` (2) |
| `categories` | `nature`, `culture`, `history`, `architecture`, `religion`, `food` (1) - no new categories (R2) |
| `experiences` | `swimming`, `surfing`, `temple-visit` (1) · `fishing`, `kitesurfing`, `museum-visit` (2) |
| `tags` | `medieval-vietnam`, `east-sea-sovereignty`, `folk-religion`, `ethnic-minority-culture` (1, the last is PROVISIONAL per R3) · `khmer-architecture`, `cao-dai` (2) |

Phase 1 seed tags: `vietnam-war`, `french-influence`, `khmer-culture`, `cham-culture`, `buddhism`.
Working scope of `medieval-vietnam`: independent dynasties of the 10th-15th centuries (Ngô, Đinh, Tiền Lê, Lý, Trần, Hồ),
not the Nguyễn era.

`fishing` and `kitesurfing` already existed in the data as unregistered values (1 use each). They are now registered.

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

## New candidates (cumulative, recorded - not applied)

| ID | Field | Candidate | Evidence (batch) | Question |
|----|-------|-----------|------------------|----------|
| NC-1 | categories | `coast` / `beach` | an-bang, an-binh, back-beach, bai-mon, ba-hon-dam (1) · binh-son, can-gio-beach, bai-tu-long (2) | Developed beaches have no fitting theme. R2: keep collecting |
| NC-2 | categories | `adventure` | a-pa-chai, ba-ho (1) · binh-lieu, bu-gia-map, bidoup (2) | A broad theme for physical or remote trips? |
| NC-4 | tags | `cao-dai` | ba-den (1) · **applied** to cao-dai-holy-see (2), where it is central | Resolved as `proposed` |
| NC-6 | tags | `nguyen-dynasty` | an-hai (1) · ben-thanh (Gia Long origin of the name), bui-vien (named after a Nguyễn official) (2) | So far always background, never the focus |
| NC-7 | experiences | `cliff-jumping`, `paddleboarding`, `shellfish-foraging` | ba-ho, an-binh, angel-eye, ba-hon-dam (1) | Niche activities |
| NC-8 | experiences | `jet-skiing` | an-bang (1) | Vendor-level evidence only |
| NC-9 | type | `national-park` | ba-be (1) · **applied** to bidoup, bu-gia-map (2), which are the parks themselves | Resolved as `proposed` |
| NC-10 | type | `wetland`, `grassland`, `street` | bay-mau (wetland), bui-hui (grassland), bui-vien (street) (2) | Current types are reasonable, so they were left. `street` may recur (Train Street, walking streets) |
| NC-11 | categories | `nightlife`, `shopping` | bui-vien, ben-thanh, cafe-apartment (2) | Urban themes missing from the six. R2: keep collecting |
| NC-12 | experiences | `birdwatching` | bidoup, bau-sau (2) (legacy tag `🦅 Birdwatching` ×3) | Separate from `wildlife`? |
| NC-13 | experiences | `craft-workshop` | bay-mau (coconut-leaf weaving, candy workshops) (2) | In the original target examples. Only part of fuller tour packages here |
| NC-14 | experiences | `street-food` / `food-tour` | ben-thanh night market (2) | `food` (page-backed) covers it for now |
| NC-15 | tags | `border-region` | a-pa-chai (1) · ban-gioc, binh-lieu (2) | "Standing on the border" is a real traveler draw in the far north |

## Recognition / status candidates

Tracked separately (R4). Not in `tags`. Destination concept undecided: tags, metadata or another controlled field.

| Recognition | Locations (from content) |
|-------------|--------------------------|
| UNESCO World Heritage | bai-tu-long-bay (shares the Hạ Long karst listing), bich-dong-pagoda (Tràng An complex) |
| UNESCO Global Geopark | angel-eye-mountain (Non Nước Cao Bằng) |
| UNESCO Biosphere Reserve | can-gio-monkey-island, can-gio-beach (Cần Giờ Mangrove) |
| Ramsar site | ba-be-lake |
| National (Historic-Cultural / Artistic) Relic | an-hai (1995), an-vinh (2013), ba-danh-pagoda (1994), bat-pagoda-soc-trang (1999) |
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

Early signal: the northern-highland locations usually involve **several** groups at once (Bắc Sơn, Bình Liêu), while
Khmer and Cham locations are single-group and tied to distinct religious/architectural traditions.

## Rejected (cumulative)

| Location | Value | Why |
|----------|-------|-----|
| `ba-na-cable-car` | `french-influence` | The "French Village" is a modern replica |
| `bai-dinh-pagoda` | `medieval-vietnam` | The 11th-century part is small beside the 2003+ complex |
| `am-tien-cave` | `buddhism` | Buddhist retreat is part of the story, not the focus |
| `an-hai-communal-house` | `cham-culture` | Cham-origin deities are a detail |
| `ben-thanh-market` | `french-influence` | French-built 1912-14, but the traveler draw is the market, not the colonial legacy (the owner's example of what not to infer) |
| `cafe-apartment-saigon` | `vietnam-war` | American advisors once lived there - background only |

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

So far 15 `trekking` values: about 5 fit "trekking" well and about 8 describe hikes or walks. This is the input for the D3 decision.

---

## Emerging patterns

- **P1 - Themes cover most places, but not urban leisure or developed beaches.** 37 of 40 locations received themes (not `ba-na-cable-car`, `binh-son-beach`, `bui-vien-street`).
  Gaps: developed beaches (NC-1) and nightlife/shopping streets (NC-11). Everything else fit the six.
- **P2 - `type` needs specific place types.** Batch 2 added 7 primary-type corrections. Several are existing values that
  had been left out (`bay`, `waterfall`, `island`). `nature` was even the only type of Bản Giốc.
- **P3 - `walking-tour` means "explore on foot".** It now appears on 6 reviewed temple and landscape sites.
- **P4 - Religious places use three layers:** `religion` theme + `temple-visit` experience + a tradition tag.
  7 religious sites so far. Tradition tags: `buddhism` (5), `folk-religion` (2), `khmer-culture` (2), `cao-dai` (1).
- **P5 - Exact experience-duplicate tags are common.** `📸 Photography` was removed from 19 of 40, plus `Camping`,
  `Boat Tour`, `Kayaking`, `Snorkeling`, `Cable Car` and `Kitesurfing` duplicates.
- **P6 - Border locations are a recurring draw** (A Pa Chải, Bản Giốc, Bình Liêu). See NC-15.
- **P7 - Recognition is mentioned often** (11 of 40 locations). This supports R4's separate concept.
- **P8 - Experiences are under-recorded rather than wrong.** Almost every change in batch 2 was an **addition**
  that the prose clearly supports (swimming, fishing, caving, cycling). Only 4 values look unsupported (MANUAL REVIEW).

---

## Validation log

| Check | Batch 1 | Batch 2 |
|-------|---------|---------|
| `tsc --noEmit` | clean | clean |
| ESLint (changed files) | no new warnings | no new warnings |
| `next build` | success | success |
| Non-taxonomy content (`taxonomy-content-snapshot.ts`, all 257 vs base) | identical | identical |
| Location count / slug order | 257, unchanged | 257, unchanged |
| `type`/`categories`/`experiences` values removed vs original data | 2 (restored in batch 2) | **0** |

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
