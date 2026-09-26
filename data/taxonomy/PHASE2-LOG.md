# Phase 2 - Consolidation Log

Companion to [CONSOLIDATION-PROPOSAL.md](./CONSOLIDATION-PROPOSAL.md) (the analysis) and
[PHASE2-MANUAL-DECISIONS.md](./PHASE2-MANUAL-DECISIONS.md) (per-location decisions still open).
Branch: `claude/location-taxonomy-content-review`.

---

## 1. Owner decisions (round 1)

| # | Decision | Result |
|---|----------|--------|
| 1 | Status model | **Yes**: `canonical`, `proposed`, `deprecated`, `legacy-display`. Canonical does not require a public page |
| 2 | New canonical types | **Yes**: `street`, `historic-site`, `monument`, `theme-park`, `stream`, `rock-formation`, `farmland`. **No**: `sand-dunes` |
| 3 | Special/manual types | **Yes**: `cable-car`, `nature-reserve`, `grassland`. **No**: `zoo`, `memorial`, `ancient-capital`, `wetland`, `peninsula`, `volcano`, `hill` (not added to the taxonomy) |
| 4 | Religious-site experience | **Yes**: `temple-visit` → `religious-site-visit` (canonical). `temple-visit` deprecated, usages migrated |
| 5 | Hiking vs trekking | **Yes**: `hiking` canonical. Separate sibling concepts. Not merged, `hiking` is not a subtype of `trekking` |
| 6 | Categories | **Yes**: `coast`, `entertainment`, plus the six existing themes |
| 7 | Recognition | **Yes**: structured side-car instead of flat tags |
| 8 | French concepts | **Yes**: `french-colonial-era`, `french-influence`, `french-architecture` are three distinct concepts. None is inferred from another |
| - | Deferred (do NOT do yet) | Deprecating the six broad types · trekking page membership · narrowing `walking-tour` · IA for `photography`/`culture`/`history` · taxonomy UI redesign · public URL changes |
| - | Alias fix | `french-colonial` must not map to `french-influence`. It maps to `french-colonial-era` |

---

## 2. Round 1 - what was applied

### 2.1 Registry and code (no data change, no visible change)

| File | Change |
|------|--------|
| `data/taxonomy/shared.ts` | New status model (`canonical` / `proposed` / `deprecated` / `legacy-display`; the old `under-review` is gone). `TaxonomyMeta` gains `broader` (SUB relations), `replacedBy` (deprecated values) and `pendingDecision` (owner-deferred decisions) |
| `data/taxonomy/types.ts` | Every type carries its `theme` colour, and `LOCATION_TYPE_THEME` is derived from the registry. The 10 approved types are added as `canonical`. The six broad types are `canonical` + `pendingDecision` ("deprecation deferred by the owner - do not remove"). `stream` has `broader: river` and `rice-fields` has `broader: farmland`. New group `leisure`. New helper `expandLocationType()` |
| `data/location.ts` | `locationTheme` = `LOCATION_TYPE_THEME`. **All existing colours are identical** (verified: empty diff) |
| `data/taxonomy/categories.ts` | The six themes + `coast` + `entertainment` are `canonical`. Editorial badges are `canonical`, group `editorial` |
| `data/taxonomy/experiences.ts` | The 20 page-backed values carry `page` (their `/experiences/*` slug). `ExperienceValue` = entries with `page` (`PageBackedLocationExperience`), so pages and slugs are unchanged. `hiking` and `religious-site-visit` are `canonical` without a page. `temple-visit` is `deprecated`, `replacedBy: religious-site-visit`. `normalizeExperience()` resolves deprecated values to their replacement |
| `data/experiences.ts` | Type import renamed only (`CanonicalLocationExperience` → `PageBackedLocationExperience`) |
| `data/taxonomy/tags.ts` | Tag roles: `historical-period`, `topic`, `religion`, `ethnic-culture`, `cultural-influence`, `architectural-influence`. Ethnic tags moved out of `cultural-influence`, `east-sea-sovereignty` → `topic`. New `canonical` tags `french-colonial-era` and `french-architecture` (registered, **not applied** to any location). `french-influence` → `canonical`, with a description forbidding inference. Alias table split into `equivalent` / `implies`. **R21 fix**: `french-colonial` → `french-colonial-era` (implies); `french-vietnamese-architecture` → `french-architecture` (implies); `french-heritage` removed (ambiguous). New `tagStatus()` returns `legacy-display` for unregistered labels |
| `data/taxonomy/recognitions.ts` (new) | Recognition side-car (§4) |
| `scripts/audit-taxonomy.ts` | Adds a status-of-values-in-use report and consistency checks: registry `page` vs `data/experiences.ts`, and recognition slugs vs locations |
| `CLAUDE.md` | Notes: `temple-visit` deprecated, `hiking`/`religious-site-visit` canonical without page, designations go to `recognitions.ts` |

Other tags, the other proposed types (`cape`, `village`...) and the other proposed experiences (`swimming`...) keep
`status: "proposed"`. There was no owner decision on them yet.

### 2.2 Location data (approved per-location changes, 60 files)

Only `type` and `experiences` changed. Nothing was removed except the approved `temple-visit` migration.

**New specific type added as `type[0]` (broad/legacy values kept after it, R13):**

| Type | Locations |
|------|-----------|
| `street` | bui-vien-street, ta-hien-street, hanoi-train-street, phung-hung-mural-street |
| `historic-site` | b52-wreck, cu-chi-tunnels, pac-bo-historic-site, ho-chi-minh-childhood-home, truong-son-national-cemetery (`memorial` rejected → `historic-site`) |
| `monument` | lung-cu-flag-tower, km0-ha-giang |
| `theme-park` | vinwonders-phu-quoc, french-village-ba-na |
| `stream` | fairy-stream, mooc-spring, la-ngau-stream (`river` kept) |
| `rock-formation` | to-vo-gate, hon-chong-rock-formation, plate-rock-reef (`beach` kept) |
| `farmland` | moc-chau-tea-hills, ly-son-garlic-fields |
| `cable-car` | hon-thom-cable-car, vinpearl-cable-car |
| `nature-reserve` | van-long-nature-reserve, son-tra-peninsula (`peninsula` rejected → `nature-reserve`) |
| `grassland` | bui-hui-grassland (`forest` kept - removal is MANUAL) |

**Reorder only (EQ, D2):** tuyen-lam-lake (`lake` first), nho-que-river (`river` first).

**Experience migration:** `temple-visit` → `religious-site-visit` in place on all 33 locations that had it. None had both.

Not applied (they need a per-location decision, see [PHASE2-MANUAL-DECISIONS.md](./PHASE2-MANUAL-DECISIONS.md)):
ba-na-cable-car, vinpearl-safari, duck-stop, the MANUAL rows in proposal §4.3, the `coast`/`entertainment`
assignments, `hiking` additions and the French tags.

---

## 3. Before / after report (round 1)

| Check | Result |
|-------|--------|
| `tsc --noEmit` | clean |
| ESLint (taxonomy, script, changed location files) | clean |
| `next build` | success, 398 static pages (257 locations + 20 experiences, same as before) |
| Non-taxonomy content (`taxonomy-content-snapshot.ts`, 257 locations) | **identical** |
| Location count / slug order | 257, unchanged |
| Values removed | only `temple-visit` (33, owner-approved migration). No `type`, `categories` or `tags` value removed |
| Values added | `type`: street 4, historic-site 5, monument 2, theme-park 2, stream 3, rock-formation 3, farmland 2, cable-car 2, nature-reserve 2, grassland 1 · `experiences`: religious-site-visit +33 |
| `/experiences/*` page membership (20 pages) | **unchanged** |
| "Similar Experiences" links (257 location pages) | **unchanged** |
| Destination "What to do" | **unchanged** (neither value is in `EXPERIENCE_GROUP_CONFIG`) |
| `tags[0]` card subtitle / first two province-card chips | **unchanged** |
| `/locations` type filter options | +10 new types. None removed |
| `/locations` experience filter options | "Temple visit" removed. Those 33 locations now appear under "Religious site visit" |
| Search index | not committed. New type values become searchable on the next build |

**Primary type changed on 28 locations. Theme colour changed on 13:**

| Location | Before | After |
|----------|--------|-------|
| b52-wreck, ho-chi-minh-childhood-home, pac-bo-historic-site, truong-son-national-cemetery | history (amber) | historic-site (purple) |
| lung-cu-flag-tower | attraction (amber) | monument (purple) |
| to-vo-gate | landmark (purple) | rock-formation (green) |
| hon-chong-rock-formation, plate-rock-reef | beach (blue) | rock-formation (green) |
| fairy-stream, mooc-spring | nature (green) | stream (blue) |
| nho-que-river | nature (green) | river (blue) |
| tuyen-lam-lake | nature (green) | lake (blue) |

The other 15 primary-type changes keep their colour (street, theme-park and cable-car are amber like `attraction`; farmland,
grassland and nature-reserve are green like `nature`; `km0` and `cu-chi` stay purple; `la-ngau-stream` stays blue).
Cumulative colour changes since the start of the review: 16 + 13 = 29.

`npm run audit:taxonomy` after round 1: type canonical 628 / proposed 64 · categories canonical 380 · experiences canonical
1026 / proposed 75 / unregistered 10 · tags proposed 85 / legacy-display 827 · recognitions 93 records on 76 locations ·
consistency OK.

---

## 4. Recognition side-car

`data/taxonomy/recognitions.ts`, keyed by location slug. It is not rendered anywhere and not written into `Location.tags`.

```ts
Recognition = { scheme, level, scope, relicKind?, property?, year?, note?, source: "location-content", verified: false }
```

- **scheme** - UNESCO (world heritage, geopark, biosphere, intangible, memory of the world), Ramsar, UN Tourism best village,
  minor basilica, and Vietnamese heritage law (`vn-special-national-relic`, `vn-national-relic`, national intangible heritage,
  national treasure, national tourism area) + protected areas (nature reserve, marine protected area).
- **Refinement vs the proposal:** "national scenic site" is not a separate scheme. Under Vietnamese heritage law a scenic site
  is a *kind* of national relic (danh lam thắng cảnh), so it is `vn-national-relic` with `relicKind: "scenic"`.
- **scope** - `site`, `within-designated-area` (e.g. Sửng Sốt in Hạ Long Bay), `part-of-site` (Tây Phương's statues,
  Văn Miếu's steles), `associated-practice` (Hùng Kings worship, Keo festival), `nearby` (Cần Giờ beach).
- **Anti-hallucination:** every record comes from the location's own content or an existing legacy label. Years are filled
  only when the content states them. `verified: false` everywhere = TODO: verify against the official register.
- 93 records on 76 locations. `ti-top-island` and `tu-duc-tomb` are **not** included: their content does not mention a
  designation, even though they lie in UNESCO properties. That is a content gap.
- `getRecognitionTags(slug)` derives coarse discovery keys (site and within-area scopes only) for future search/filter use.
- Rankings and records (Guinness, Forbes, TripAdvisor, Vietnam Records, Rough Guides) are excluded by design.

---

## 5. Next steps (still need approval)

In the proposal's plan order:
- the per-location decisions in [PHASE2-MANUAL-DECISIONS.md](./PHASE2-MANUAL-DECISIONS.md)
- promotion of the remaining `proposed` values
- normalising the unregistered experiences (step 8)
- the `EXPERIENCE_GROUP_CONFIG` fix (step 10)
- UI compatibility (step 11)

The deferred IA items (broad-type deprecation, trekking membership, `walking-tour`, generic trio) are untouched.

---

## 6. Owner decisions (round 2) and what was applied

The round-2 decisions override the "Suggested" column of PHASE2-MANUAL-DECISIONS.md. They were applied exactly. Where a
decision was ambiguous or did not fit the current data, it was **not guessed**: see §6.4.

### 6.1 Registry

| Change | Detail |
|--------|--------|
| Types promoted to `canonical` | communal-house, valley, rice-fields, national-park, bridge, building, village, fortress, prison, station, church, old-quarter, palace, pass, lighthouse, cape. **Every type is now canonical** (the six broad types stay canonical + `pendingDecision`) |
| Experiences promoted to `canonical` | swimming, surfing, fishing, kitesurfing, museum-visit, diving (no pages) |
| Experiences registered `proposed` | paragliding, rock-climbing (no pages) |
| Tags | `confucianism` registered `canonical` (group `religion`). `champa-heritage` registered: historic Champa heritage, separate from `cham-culture` (living Cham culture) |
| Alias | `cham-heritage` (legacy label "🏯 Cham Heritage") now implies `champa-heritage` instead of `cham-culture`, to follow the split |

### 6.2 Location data (125 files; only `type`, `categories`, `experiences`, `tags`)

**Type additions (new values placed first, in the order given by the owner; existing values kept after them):**

| Location | Before | After |
|----------|--------|-------|
| ba-na-cable-car | attraction | cable-car, theme-park, attraction |
| vinpearl-safari | attraction, nature | theme-park, attraction, nature |
| duck-stop-phong-nha | attraction, nature | farmland, attraction, nature |
| ho-chi-minh-mausoleum-complex | heritage, history, landmark | tomb, historic-site, heritage, history, landmark |
| hoa-lu-ancient-capital | history, heritage | historic-site, temple, history, heritage |
| nha-pha-historical-site | history, landmark | historic-site, prison, lighthouse, history, landmark |
| lung-po-red-river-source | nature, cultural | monument, river, nature, cultural |
| hang-mua | nature | mountain, cave, nature |
| tam-coc | nature | river, cave, rice-fields, nature |
| trang-an | nature, heritage | river, cave, nature, heritage |
| a-pa-chai | landmark, mountain, nature | monument, landmark, mountain, nature |
| cua-tu-stream, da-ploa-stream | waterfall, ... | waterfall, **stream**, ... (secondary) |

**Reorder only:** bay-mau-coconut-forest (`river` first), phong-nha-botanic-garden (`forest` first).
**Unchanged by decision:** radio-tower-cat-ba, red-sand-dunes, white-sand-dunes, thung-nham-bird-park,
thuong-phuoc-border-gate. dong-van-old-town was left unchanged here by mistake: "keep `town` first" did not match the data
(`cultural, town`). Corrected in §7.4.

**Type removals (A3, the only subtractive type changes):** `town` from cat-cat, don, ham-ninh, hieu, kho-muong, ta-van,
tra-que · `forest` from bui-hui-grassland · `citadel` from my-son-sanctuary · `river` from fairy-stream, mooc-spring,
la-ngau-stream.

**Categories:** `coast` on 60 (the 48 listed + the 12 owner-approved). `entertainment` on 10 (ba-na-cable-car,
french-village-ba-na, hon-thom-cable-car, vinpearl-cable-car, vinwonders-phu-quoc, sunworld-beach-cat-ba, vinpearl-safari,
duck-stop-phong-nha, bui-vien-street, ta-hien-street). No `nature` was added anywhere.

**Experiences:**
- `hiking` added to 21: a-pa-chai, ba-be-lake, ba-den-mountain, bac-son-valley, bai-mon-beach, bai-tu-long-bay, bau-sau,
  chua-chan-mountain, con-dao-national-park, do-quyen-waterfall, dray-nur-dray-sap-waterfalls, khau-coc-cha-pass, la-ngau-stream,
  langbiang-mountain, mau-son-mountain, minh-dam-mountain, mui-dien, pac-bo-historic-site, phong-nha-botanic-garden,
  radio-tower-cat-ba, yen-tu-mountain. `trekking` untouched.
- Removed (unregistered values): `walking-tours` (tac-say-church - removed, not migrated), `nature` (gieng-tien-peak,
  thoi-loi-mountain, to-vo-gate), `architecture` (saigon-central-post-office), `spirituality` (jade-emperor-pagoda), `picnic`
  (pongour-waterfall), `watersport` (an-bang-beach).

**Tags (appended; never at index 0):**
- `french-colonial-era` → 15: cat-ba-cannon-fort, con-dao-prison, dalat-railway-station, hoa-lo-prison, ke-ga-lighthouse,
  khai-dinh-tomb, kon-tum-wooden-church, long-bien-bridge, mau-son-mountain, mui-dien, nha-pha-historical-site,
  notre-dame-cathedral-saigon, quan-ba-heaven-gate, saigon-central-post-office, war-remnants-museum.
- `french-architecture` → 9: dalat-railway-station, hanoi-st-josephs-cathedral, hmong-king-palace, khai-dinh-tomb,
  kon-tum-wooden-church, long-bien-bridge, mang-lang-church, notre-dame-cathedral-saigon, saigon-central-post-office.
- `french-influence` → none.
- `cham-culture` → `champa-heritage` in place on my-son-sanctuary, nhan-tower, po-nagar-cham-towers. `cham-culture` stays on
  bung-binh-thien-lake.
- `confucianism` → temple-of-literature.

### 6.3 Before / after report (round 2)

| Check | Result |
|-------|--------|
| `tsc --noEmit` / ESLint | clean / clean |
| `next build` | success, 398 static pages (unchanged) |
| Non-taxonomy content snapshot (257) | **identical** |
| Location count / slug order | 257, unchanged |
| Taxonomy additions | type +23 values on 13 locations · categories coast 60, entertainment 10 · experiences hiking 21 · tags french-colonial-era 15, french-architecture 9, champa-heritage 3, confucianism 1 |
| Taxonomy removals | type: town 7, river 3, forest 1, citadel 1 · experiences: 8 removals of 6 unregistered values on 8 locations · tags: cham-culture 3 (replaced by champa-heritage) |
| `/experiences/*` membership (20 pages) | **unchanged** (no page-backed value was added or removed) |
| Public experience URLs | **unchanged** (`data/experiences.ts` and the sitemap untouched) |
| "Similar Experiences" links | unchanged |
| `tags[0]` and province-card first two tags | **unchanged** |
| Destination "What to do" | `hiking` now appears under "Nature & Outdoors" for 7 destinations: cao-bang, cat-ba, con-dao, da-lat, ha-long, hue, phong-nha-ke-bang. Nothing else changed |
| `/locations` type filter options | unchanged (all added types were already in use) |
| `/locations` experience filter options | 6 fewer: Architecture, Nature, Picnic, Spirituality, Walking tours, Watersport |
| Recognition side-car | 93 records / 76 locations, all slugs valid, **unchanged** (see §6.5) |
| `npm run audit:taxonomy` | type canonical 703 · categories canonical 450 · experiences canonical 1122 / proposed 2 · tags canonical 25 / proposed 85 / legacy-display 827 · consistency OK |

**Primary type changed on 13 locations. Colour changed on 7:**

| Location | Before | After |
|----------|--------|-------|
| bay-mau-coconut-forest, tam-coc, trang-an | nature (green) | river (blue) |
| duck-stop-phong-nha | attraction (amber) | farmland (green) |
| hoa-lu-ancient-capital, nha-pha-historical-site | history (amber) | historic-site (purple) |
| lung-po-red-river-source | nature (green) | monument (purple) |

Unchanged colour: a-pa-chai (monument, purple), ba-na-cable-car (cable-car, amber), hang-mua (mountain, green),
ho-chi-minh-mausoleum-complex (tomb, purple), phong-nha-botanic-garden (forest, green), vinpearl-safari (theme-park, amber).
Theme colours of all existing types are unchanged. Cumulative colour changes since the start of the review: 29 + 7 = 36.

### 6.4 Not applied - ambiguity or conflict (needs an owner answer)

| # | Decision | Issue | What was done |
|---|----------|-------|---------------|
| 1 | A2.6 phuoc-tinh-fishing-village: "Make `village` first" | The location has no `village` type today (`nature, cultural, beach`). "Make first" would require **adding** `village`, which the decision does not say | **Unchanged.** Confirm: add `village` as `type[0]`? |
| 2 | B vinpearl-safari: "add `entertainment` + keep/add `nature` as appropriate" | It has no `nature` category today. Whether to add it is left to judgement | `entertainment` added. `nature` **not** added. Confirm yes/no |
| 3 | D2 `confucianism` "the approved candidate(s)" | Candidates were temple-of-literature (central) and tu-duc-tomb (secondary). D8 requires the concept to be central | Applied to temple-of-literature only. Confirm tu-duc-tomb: no? |
| 4 | E promotion of tags | E lists types and experiences only. The 19 registered tags that were `proposed` stay `proposed`. `champa-heritage` was registered as `proposed` (same status as `cham-culture`). `confucianism` is `canonical` per D2 | Status quo. Confirm whether to promote the tags |
| 5 | `champa-heritage` group | The model needs a group. Put in `ethnic-culture` (same group as `cham-culture`, least change). Alternative: `historical-period` | Reversible metadata. Confirm |
| 6 | Order of multiple added types | The decisions list pairs such as "cable-car + theme-park". They were placed first **in the order listed**. The first one drives the colour | Confirm the listed order is the intended primary |

### 6.5 Recognition verification - blocked

Verifying against official sources failed: the environment's network policy blocks `whc.unesco.org`, `www.unesco.org`,
`rsis.ramsar.org`, `dsvh.gov.vn`, `baochinhphu.vn` and `en.wikipedia.org` (egress proxy). Only a web *search* tool responds,
and search-result summaries are not official sources. So **no record was verified**. All 93 stay `verified: false`, as
instructed. To proceed, allow those hosts in the environment's network settings, or verify offline. Content gaps found so
far are recorded in [CONTENT-BACKLOG.md](./CONTENT-BACKLOG.md), not fixed here.

---

## 7. Owner decisions (round 3) - the six round-2 ambiguities

| # | Decision | Applied |
|---|----------|---------|
| 1 | phuoc-tinh-fishing-village: add `village` as `type[0]` | `nature, cultural, beach` → `village, nature, cultural, beach` |
| 2 | vinpearl-safari: add both `entertainment` and `nature` | categories → `entertainment, nature` |
| 3 | `confucianism`: temple-of-literature only, not tu-duc-tomb | no change needed (already so) |
| 4 | Promote the remaining approved `proposed` tags | all 20 promoted to `canonical`, including `champa-heritage` and `ethnic-minority-culture` (its "PROVISIONAL" note replaced by its multi-group scope). None of the rejected candidates were registered, so none were promoted |
| 5 | `champa-heritage` group | `historical-period`, with a description stating it is the historical Champa civilization/kingdom, **not** living Cham culture (`cham-culture`) |
| 6 | Multiple added types keep the owner's order; `type[0]` drives the colour | confirmed. The round-2 order is kept, no data change |

### 7.1 Before / after report (round 3)

| Check | Result |
|-------|--------|
| `tsc --noEmit` / ESLint | clean / clean |
| `next build` | success, 398 static pages |
| Non-taxonomy content snapshot (257) | **identical** |
| Taxonomy additions | type `village` +1 (phuoc-tinh-fishing-village) · categories `nature` +1 (vinpearl-safari) |
| Taxonomy removals | none |
| Registry | 20 tags `proposed` → `canonical`. `champa-heritage` group `ethnic-culture` → `historical-period` |
| `/experiences/*` membership, public URLs (`data/experiences.ts`, sitemap) | unchanged |
| Theme colours | 1 change: phuoc-tinh-fishing-village green (`nature`) → purple (`village`). The type → colour map is unchanged |
| `tags[0]` / province-card first two tags | unchanged |
| Destination "What to do" | unchanged |
| `/locations` filter options (types, experiences) | unchanged (`village` was already an option) |
| Recognition side-car | unchanged: 93 records / 76 locations, all `verified: false`, slugs consistent |
| `npm run audit:taxonomy` | type canonical 704 · categories canonical 451 · experiences canonical 1122 / proposed 2 · tags canonical 110 / legacy-display 827 · consistency OK |

Cumulative colour changes since the start of the review: 36 + 1 = 37.

### 7.2 State after round 3

- Every registered `type`, `categories` value and tag is `canonical`.
- Experiences: the 20 page-backed values + 9 canonical without a page (hiking, religious-site-visit, swimming, surfing, fishing,
  kitesurfing, museum-visit, diving) are canonical. `paragliding` and `rock-climbing` are `proposed`. `temple-visit` is
  `deprecated` (0 uses).
- Legacy display labels in `tags`: 827 instances (`legacy-display`), untouched except the earlier D6/D9 cases.

### 7.3 Still open

- **Recognition verification:** blocked by network egress. 93 records stay `verified: false`. Gaps are in
  [CONTENT-BACKLOG.md](./CONTENT-BACKLOG.md).
- **Deferred by the owner, untouched:** broad-type deprecation, trekking page membership, `walking-tour` narrowing,
  `photography`/`culture`/`history` IA, taxonomy UI, public URL changes.
- **Plan steps not started (need approval):** `EXPERIENCE_GROUP_CONFIG` fix (proposal §6.8), UI compatibility (step 11:
  "Cultural" shortcut, filter labels, search index labels), the freeze/CLAUDE.md enum-table regeneration (step 13).
- **Known data gaps for a future broad-type deprecation:** radio-tower-cat-ba and red-sand-dunes still have only broad
  types. white-sand-dunes, thung-nham-bird-park and thuong-phuoc-border-gate keep a broad primary type by decision.

### 7.4 Correction - dong-van-old-town (implementation mismatch, not a new decision)

The round-2 decision A2.4 was "keep `town` first". The data had `cultural, town` (unchanged since the original data), so the
decision was not actually implemented. It was flagged in §7.3 of the round-3 report, and the owner confirmed the correction.

| Check | Result |
|-------|--------|
| Change | dong-van-old-town `type`: `cultural, town` → `town, cultural` (reorder only, nothing added or removed) |
| Theme colour | purple (`cultural`) → amber (`town`). Colour now follows `town` as the primary type. It had been purple since the original data. Cumulative colour changes: 37 + 1 = 38 |
| `tsc --noEmit` / ESLint / `next build` | clean / clean / success, 398 pages |
| Non-taxonomy content snapshot (257) | identical |
| Other taxonomy values | no other change in any location |
| `/experiences/*` membership, public URLs, `tags[0]`, province chips, "What to do", `/locations` filter options | unchanged |
| Recognition side-car | unchanged, consistency OK |

---

## 8. Downstream fix - `EXPERIENCE_GROUP_CONFIG` (after Phase 2, separate commit)

This is a config consistency fix, not a consolidation round. No taxonomy value or owner decision changed.
Destination "What to do" silently dropped every experience that was missing from `EXPERIENCE_GROUP_CONFIG`
(`data/destinations/types.ts`).

| Before | After |
|--------|-------|
| 8 values not in the registry: `waterfall`, `adventure`, `cafe`, `sunset`, `cruise` + 3 typos `motorbiking`, `kite-surfing`, `climbing` | typos fixed → `motorcycling`, `kitesurfing`. `climbing` → `rock-climbing` is `proposed`, so it is **not** listed (canonical only, owner decision). The 5 others removed (not experiences in the registry) |
| 15 used canonical values in no group: boat-tour, cable-car, camping, caving, fishing, food, kitesurfing, markets, motorcycling, museum-visit, nightlife, religious-site-visit, shopping, walking-tour, wildlife | all grouped. Every canonical experience is now in exactly one group |

Placement of the added values (presentation grouping only; reviewable):
- `nature`: + camping, caving, wildlife, fishing
- `culture`: + walking-tour, museum-visit, religious-site-visit
- `activities`: + cable-car
- `chill`: + boat-tour (takes the place of the retired "cruise")
- new group `food-and-local-life` ("Food & Local Life", order 5, after `chill`): food, markets, nightlife, shopping (mirrors
  the registry group of the same name)

Existing group labels, orders and placements are unchanged. **The config holds canonical experiences only** (owner decision):
proposed `paragliding` and `rock-climbing` and deprecated `temple-visit` are not listed until promoted.
`npm run audit:taxonomy` fails if the config lists any non-canonical value (unregistered, proposed or deprecated), if a
canonical experience is in no group, or if a value is in more than one group.

Result:
- Location taxonomy data is byte-identical.
- `/experiences/*` membership, public URLs, `tags[0]` and Similar Experiences are unchanged.
- "What to do" gains 117 pills across all 21 destinations. Nothing was removed or reordered.
- The build covers 257 location pages, 20 experience pages and 21 destination pages.

Follow-up (same commit, owner decision): the config holds canonical experiences only. `rock-climbing` was removed from
`activities`, and `paragliding` stays out. Both remain `proposed` in the registry and in location data (lan-ha-bay,
khau-pha-pass), and are not shown in "What to do" until promoted.

---

## 9. Taxonomy freeze (separate commit after `4c90b97`)

A contract and validation step only. No taxonomy decision was reopened, no value was promoted, demoted, added or removed,
and no Location data changed.

| Area | Result |
|------|--------|
| Registry vs 257 Locations | 0 unregistered `type`/`categories`/`experiences` values. Tags: 0 key-like unregistered values; 754 legacy display labels (827 uses) by design. 0 deprecated values in use. 0 duplicates |
| Statuses | type 49 canonical · categories 11 canonical · experiences 28 canonical + `paragliding`, `rock-climbing` proposed + `temple-visit` deprecated (→ `religious-site-visit`, 0 uses) · tags 24 canonical |
| `EXPERIENCE_GROUP_CONFIG` | canonical only, 28/28 exactly once. Group and experience order unchanged from `4c90b97` |
| Aliases / relationships | unchanged and checked: `french-colonial` implies `french-colonial-era`, no alias to `french-influence`; `hiking`/`trekking`, `champa-heritage`/`cham-culture` and the three French tags are distinct siblings; `broader`: `stream` → `river`, `rice-fields` → `farmland` |
| Guard | `npm run audit:taxonomy` now enforces the frozen contract and exits non-zero on a violation (AUDIT.md "Frozen contract"). Each rule was tested by injecting a violation and reverting it |
| Docs | CLAUDE.md taxonomy table regenerated from the registry (it still listed the 22/3/20 pre-review values). AUDIT.md gains the frozen contract; its Phase 0/1 audit is kept as history |

Still deferred (unchanged): broad-type deprecation, trekking page membership, `walking-tour`, `photography`/`culture`/`history`
IA, taxonomy UI, recognition verification (network-blocked), public URL changes.

---

## 10. Edge-case types before broad-type migration (owner decisions)

`sand-dunes` is restored as a canonical type (terrain, green). This reverses the round-2 rejection: the manual review showed
a reusable semantic case across both dune locations, and no existing type describes a dune landscape.

| Location | Before | After |
|----------|--------|-------|
| radio-tower-cat-ba | landmark, attraction, nature | mountain |
| red-sand-dunes | nature, attraction | sand-dunes |
| white-sand-dunes | nature, attraction, lake | sand-dunes, lake |
| thuong-phuoc-border-gate | landmark, history, river | monument, river |
| thung-nham-bird-park | nature, river | valley |

No categories, experiences or tags changed. The broad types remain in the registry and on all other locations.

---

## 11. Broad-type migration step 1 - `history` (owner decision D1 = B)

`history` is removed from every Location `type` and **deprecated** in the registry. Its concept lives on in category
`history` (29/30 already had it) and experience `history` (30/30, unchanged).

| Decision | Applied |
|----------|---------|
| D1 = B: remove from data and deprecate | `types.ts`: `status: "deprecated"`, `replacedByCategory: "history"`, `pendingDecision` dropped. Frozen list: `type.deprecated = ["history"]` |
| No category added to `can-gio-monkey-island` | Kept `categories: ["nature"]`. Its history angle (the separate Rừng Sác War Base, war-time defoliation) stays in experience `history` |
| No URL alias | `?type=history` is ignored by the `/locations` filter (non-canonical param, existing behavior): all results shown, param kept in the URL |
| Other broad types | Untouched: `nature`, `attraction`, `cultural`, `heritage`, `landmark` stay canonical with `pendingDecision` |

The replacement is in another field, so `replacedBy` (same field only) cannot name it. `replacedByCategory` (types only) was
added to `TaxonomyMeta`; the audit accepts it in place of `replacedBy`, checks that it is on a deprecated type and names a
canonical category, and pins `history` → category `history` as an owner invariant.

**Data** - 30 files, `type` line only, `"history"` removed, order of the remaining values unchanged:
b52-wreck, ben-hai-river, can-gio-monkey-island, cat-ba-cannon-fort, con-dao-prison, cu-chi-tunnels, eight-ladies-cave,
hmong-king-palace, ho-chi-minh-childhood-home, ho-chi-minh-mausoleum-complex, ho-dynasty-citadel, hoa-lo-prison,
hoa-lu-ancient-capital, hospital-cave, hung-temple, imperial-citadel-of-thang-long, imperial-city-hue, independence-palace,
long-bien-bridge, mac-dynasty-citadel, marble-mountains, minh-dam-mountain, my-son-sanctuary, nha-pha-historical-site,
pac-bo-historic-site, quang-tri-ancient-citadel, temple-of-literature, truong-son-national-cemetery,
vietnam-military-history-museum, war-remnants-museum.

`history` was never `type[0]` and every location keeps a specific type first, so no primary type, badge or colour changed and
no location became type-less or broad-only.

| Check | Result |
|-------|--------|
| `npm run audit:taxonomy` | OK. type 49 canonical + 1 deprecated (`history`, 0 uses). Re-adding `history` to a location fails the audit |
| Location data | 30 files, 30 lines, `type` only. Non-taxonomy content snapshot identical |
| `type[0]`, colour, categories, experiences, tags, `tags[0]`, Similar Experiences | unchanged for all 257 locations |
| `/experiences/*` membership, destination `bestMonths` / `whatToDo` / `highlights` | unchanged |
| `/locations` | "History" gone from the type filter (48 options). `?type=history` shows all 245 active locations; `?type=history&type=cave` = `?type=cave` (17). Cultural shortcut 61 |
| Location hero | the type line drops "History" (e.g. "Cave · History" → "Cave") |
| Search index | 29 location items (cat-ba-cannon-fort is closed, not indexed) lose only the "History" type label; nothing else changes |
| Build | 398 pages (257 location / 20 experience / 21 destination). No public URL change |

---

## 12. Broad-type migration infrastructure (before migrating the other five)

Owner decisions: D1' deprecate all five remaining broad types; D1'' `nature` → category `nature`, `cultural` → category
`culture`, `heritage` / `landmark` / `attraction` → `noReplacement`; D3 category filter with URL param `category=`; D4 Cultural
shortcut → categories `culture` + `religion`; D6 legacy `?type=` aliases; D8 category labels in search; D9 viewpoint rule.
No Location data changed in these phases.

| Phase | Commit | Change |
|-------|--------|--------|
| 1 (D8) | `62ef2c4` | Search index: location items also carry their canonical category labels, appended after type and tag labels and deduplicated. 189 items gain labels; nothing else in the index changes |
| 2 (D3 + D6) | `edffe60` | `/locations` "Category" filter (`?category=`), registry-gated to the 8 theme categories (badges not offered). OR within, AND across filters; unknown values ignored and kept in the URL. `?type=nature` → `category=nature`, `?type=cultural` → `category=culture`, applied only once the type is not filterable (the URL is normalised to the category). `history` / `heritage` / `landmark` / `attraction` stay ignored |
| 3 (D4) | `9f6b8c9` | Cultural shortcut → `?category=culture&category=religion`: 57 + 32 − 10 (both) = **79** unique active locations (was 61 via type `cultural`: 52 in common, 9 out, 27 in) |
| 4 (D1'' + D9) | `f696738` | `noReplacement` in `TaxonomyMeta`; a deprecated value needs exactly one of `replacedBy` / `replacedByCategory` / `noReplacement`. The audit pins the owner table for all six broad types (AUDIT.md). CLAUDE.md viewpoint rule: landform type + category `nature` |
| 5 | this commit | Full validation below |

**Validation at `f696738` against `994f06d`**

| Check | Result |
|-------|--------|
| Location data, taxonomy values, `type[0]`, colours, destination derived data, `/experiences/*` membership | identical (0 data files changed) |
| Non-taxonomy content snapshot | identical |
| `npm run audit:taxonomy` / tsc | OK. Each new contract rule failed when a violation was injected (11 cases) |
| ESLint | 64 problems (39 errors, 25 warnings), identical to the baseline |
| Build | 398 pages (257 location / 20 experience / 21 destination) |
| `/locations` (browser) | 245 locations; shortcuts Beaches 43, Islands 18, Mountains 32, Caves 17, Waterfalls 15, Trekking 74, Photography 235, Cultural 79; 48 type / 28 experience / 8 category options; homepage discovery links unchanged (forest 19, homestay 13, motorcycling 32, nightlife 8, citadel + history 5); no page errors |

**Dry run of the full five-type migration** (applied to a scratch working tree, validated, then reverted - not committed):
231 files, `type` line only; audit OK with type 44 canonical + 6 deprecated; tsc OK; build 398 pages; no location type-less; content,
`type[0]`, colours, derived data and experience pages identical. `/locations`: 43 type options; `?type=nature` → `?category=nature`
(143); `?type=cultural` → `?category=culture` (57); `?type=heritage|landmark|attraction|history` ignored (245); Cultural 79.
Search: only the five broad labels drop ("Nature" stays on 146 items through the category label). One expected new lint warning:
`BROAD_PENDING` becomes unused and is removed in the cleanup step.

Known behaviour to note: an old URL mixing a legacy type with a real type (`?type=nature&type=cave`) becomes `cave` AND category
`nature` once aliased (it was `nature` OR `cave`), because the alias moves the value to another filter.

---

## 13. Broad-type migration step 2 - `nature`, `cultural`, `heritage`, `landmark`, `attraction` (Phase 6)

One batch, per the audited plan (§12, D1' / D1''). All six broad types are now `deprecated` and used by no Location.

| Change | Applied |
|--------|---------|
| Location data | 231 files, `type` line only: the five values removed, the order of the remaining values unchanged. No location became type-less; `type[0]` was never a broad type, so no primary type, badge or colour changed |
| Registry | `nature` → `replacedByCategory: "nature"`, `cultural` → `replacedByCategory: "culture"`, `heritage` / `landmark` / `attraction` → `noReplacement` (reason). `pendingDecision` and the `BROAD_PENDING` constant removed. Frozen list: type deprecated = the six broad types. Type: 44 canonical + 6 deprecated |
| Categories | unchanged. The three audited edge cases (phoenix-unicorn-islands-my-tho, ta-pa-temple, an-nhut-rice-fields) keep their categories, as recommended in the audit |
| Docs | CLAUDE.md type table and mismatch rules; AUDIT.md contract |

Removed values: nature 134, cultural 62, heritage 50, landmark 48, attraction 32 (326 in 231 files).

| Check | Result |
|-------|--------|
| `npm run audit:taxonomy` | OK. Re-adding any of the six broad types to a location fails with its replacement; a wrong replacement in the registry fails the owner-table check |
| tsc / ESLint | OK / 64 problems, identical to the baseline (the `BROAD_PENDING` warning of the dry run is gone) |
| Build | 398 pages (257 / 20 / 21) |
| Exact diff | the 231 changed locations are exactly the audited list; only `type` changed. Non-taxonomy content snapshot identical. `type[0]`, colour, categories, experiences, tags, `tags[0]`, Similar Experiences, `/experiences/*` membership and destination derived data identical for all 257 |
| Search index | 227 location items change, only by losing the five broad labels (Landmark 46, Cultural 61, Attraction 31, Heritage 50, Nature 9). "Nature" stays on 146 items and "Culture" on 57 through category labels |
| `/locations` | 245 locations; 43 type / 28 experience / 8 category options. Shortcuts unchanged except Cultural = 79 (`category=culture&category=religion`). `?type=nature` → `?category=nature` (143), `?type=cultural` → `?category=culture` (57); `?type=heritage|landmark|attraction|history` ignored (245) |
| Mixed URLs | `?type=nature&type=cave` → `?type=cave&category=nature` (14, cave AND nature); `?type=cultural&type=pagoda` → pagoda AND culture (5); `?type=landmark&type=bridge` → bridge (6, landmark ignored); `?type=heritage&category=history` → history (62) |
| Homepage / experience pages | discovery links unchanged (forest 19, homestay 13, motorcycling 32, nightlife 8, citadel + history 5); experience pages list the same locations (history 76, culture 116, photography 235, beaches 45, trekking 74). Location heroes drop the broad labels (e.g. "Market · Ho Chi Minh City") |

---

## 14. Final cleanup and audit (after `be3af00`)

No Location data change.

| Area | Result |
|------|--------|
| Leftover references | None in code, config, blog content or root docs. `BROAD_PENDING` was already removed in `be3af00`. Destination `tags` (e.g. "heritage", "attraction" on destination cards) are editorial destination labels, not the Location taxonomy - left unchanged. The Phase 0/1 tables in AUDIT.md and the earlier sections of this log are kept as history |
| Dead code removed | The transitional audit branch for a canonical broad type with a `pendingDecision`, and the now unused `pendingDecision` field of `TaxonomyMeta`. The audit now requires all six broad types to be `deprecated` with the owner-table replacement (tested: a canonical `landmark` fails) |
| Stale comment | `data/location.ts` `categories` comment (themes + badges; themes are the `/locations` category filter) |
| Registry / contract | type 44 canonical + 6 deprecated; categories 11; experiences 28 canonical + 2 proposed + 1 deprecated; tags 24. Audit OK |
| Validation | tsc OK · ESLint 64 problems (baseline) · build 398 pages · search index identical to `be3af00`, no broad-only labels, no duplicates |
| Browser smoke | `/locations`, category filter, `?type=` aliases and mixed URLs, Cultural shortcut (79), homepage links and experience pages identical to Phase 6; site search works ("nature", "culture", "history", "heritage" return results; result click-through navigates); sitemap 390 URLs, none with a query string (257 locations, 20 experiences, 21 destinations); canonical `/locations` for filtered URLs, `/locations/<slug>` for location pages |

Note for Preview QA: `public/search-index.json` in git is stale; `npm run build` regenerates it before `next build`, so the
Vercel build serves the current index.
