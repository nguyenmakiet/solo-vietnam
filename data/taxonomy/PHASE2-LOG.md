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
**Unchanged by decision:** radio-tower-cat-ba, red-sand-dunes, white-sand-dunes, thung-nham-bird-park, dong-van-old-town,
thuong-phuoc-border-gate.

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
