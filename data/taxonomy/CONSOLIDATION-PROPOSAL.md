# Phase 2 - Taxonomy Consolidation Proposal

**Status: DRAFT FOR OWNER REVIEW. Analysis and design only.**
Nothing in this document has been applied. No Location data, taxonomy registry, alias, URL, `/experiences/*` page,
UI or IA was changed to produce it. Every change below is a *proposal* that needs explicit approval, step by step
(see [13. Migration plan](#13-proposed-phase-2-migration-plan)).

Evidence base:
- all 257 reviewed Locations (state after batch 8, commit `65c69d7`)
- [CONTENT-REVIEW.md](./CONTENT-REVIEW.md): batches 1-8, Checkpoints 1-5, R1-R31, D1-D12
- [AUDIT.md](./AUDIT.md), the registries in `data/taxonomy/*`
- a code audit of every consumer of the four fields ([11. Downstream impact](#11-downstream-impact-audit))

---

## 0. Summary

| Field | Today | Proposed end state |
|-------|-------|--------------------|
| `type` | 39 values: 17 canonical place types, 16 proposed, 6 broad `under-review` | ~40 specific place types in 5 groups, each with a colour. The 6 broad values are deprecated **after** every location has a specific type and the UI no longer depends on them. 5-8 new types need approval |
| `categories` | 6 proposed themes + 3 editorial badges | 6 themes become canonical. Badges are preserved in a separate `editorial` group. `coast` and `entertainment` are recommended as new themes (owner decision) |
| `experiences` | 20 page-backed canonical, 9 proposed, 8 unregistered | 20 page-backed values stay (R5). About 7 proposed values are promoted as "canonical without page". `temple-visit` is subsumed into `religious-site-visit` (no page on either). The 8 unregistered values are normalised. The generic trio (`photography`, `culture`, `walking-tour`) and `trekking` membership are **IA decisions**, with options below |
| `tags` | 20 registered (85 uses) + 754 distinct legacy labels mixing ~9 roles | One flat `tags: string[]` stays. The registry gains an explicit **role** per tag (period, religion, ethnic identity, cultural influence, architectural influence, topic). Legacy labels are formally **display labels**. Events and rankings stay out of the taxonomy. **Recognition** moves to a structured side-car model, not to `tags` |

Key design moves (no merges of related-but-different concepts):
1. **`broader` relations in the registry instead of merges.** `stream` → `river`, `rice-fields` → `farmland`, `hiking` ~ `trekking`
   (sibling, not broader). Filters and pages can expand along `broader` without rewriting data.
2. **Separate "canonical" from "has a public page"** for experiences. Today `canonical` means "page-backed" (R5). That
   blocks promoting `swimming` (50 uses) or `temple-visit` (33) without creating pages.
3. **Two kinds of alias:** `equivalent` (safe to replace a label, D9) vs `implies` (safe to derive a tag, never to replace).
   This also fixes the known-wrong French aliases (R21).
4. **Colour comes from the type registry**, not from a hand-maintained map, so type consolidation cannot silently change
   colours.
5. **Additive first, subtractive last.** Every removal or membership change comes after the additions it depends on, with a
   before/after diff.

---

## 1. Evidence base (257 locations)

| Measure | Value |
|---------|-------|
| Locations / files changed by the content review | 257 / 245 |
| Values removed from `type`/`categories`/`experiences` during the review | 0 |
| Avg. types / experiences per location | 2.59 / 4.32 |
| Primary type broad (`type[0]` ∈ broad) | 44 |
| Locations with **only** broad types | 29 |
| Locations with no theme category | 21 (8.2%) |
| `photography` / `culture` / `walking-tour` experience | 242 / 119 / 100 |
| `trekking` / `hiking` | 76 / 2 (~30% of `trekking` fits R12) |
| `temple-visit` / `religious-site-visit` | 33 / 7 |
| Tag instances: canonical / legacy | 85 / 827 (754 distinct legacy labels) |
| Locations mentioning an official designation | 60 (23%) |
| Stub records (no content) | 5 |

---

## 2. Consolidation principles

These extend R1-R31 for the migration phase. They are proposals too.

- **C1 - Merge only true equivalents.** A value is merged into another only when the relation is `EQ` (legend below).
- **C2 - Subsumption is not equivalence.** `SUB` (narrower → broader) may be migrated only when (a) the narrower value has no public
  page and (b) nothing is lost because another field carries the difference. Otherwise it is modelled with `broader`.
- **C3 - Cross-field moves are two steps.** First add the value in the right field, then (separately) deprecate the old one.
- **C4 - One status model** for all four registries: `canonical`, `proposed`, `deprecated` (still valid, not to be added,
  scheduled for removal), `legacy-display` (tags only). Experiences get an extra `page` property.
- **C5 - No public URL changes in Phase 2.** `/experiences/*` slugs, `/locations/*`, `/destinations/*` stay.
- **C6 - Every step ships with the validation suite** (tsc, lint, build, content snapshot, page-membership diff, colour diff,
  `tags[0]` diff, derived "What to do" diff) and a written before/after report.

### Relationship legend (used in every mapping table)

| Code | Meaning | Allowed action |
|------|---------|----------------|
| **EQ** | True 1:1 semantic equivalence (spelling, plural, alias) | Merge / alias |
| **SUB** | Old value is strictly narrower than the target; lossless only if another field keeps the difference | Model as `broader`; migrate only per C2 |
| **XF** | Same concept, wrong field (e.g. a theme stored as a type) | Add in the right field (C3), deprecate later |
| **REL** | Related but **not** equivalent | Keep both. Never merge |
| **AMB** | Depends on the location | MANUAL REVIEW per location |
| **DEP** | Not a valid concept for this field | Deprecate; normalise per location |

---

## 3. Status model (proposed registry change, code only)

```ts
type TaxonomyStatus = "canonical" | "proposed" | "deprecated" | "legacy-display"

type TaxonomyMeta<G> = {
  label: string
  group: G
  status: TaxonomyStatus
  filterable?: boolean
  description?: string
  broader?: string[]        // NEW: SUB relations (stream -> river)
  replacedBy?: string       // NEW: only for deprecated values with an EQ/SUB target
}

// experiences only
type ExperienceMeta = TaxonomyMeta<ExperienceGroup> & { page?: ExperienceSlug } // NEW: page-backed iff page is set
// types only
type TypeMeta = TaxonomyMeta<TypeGroup> & { theme: LocationTheme }              // NEW: colour lives in the registry
```

`ExperienceValue` (the page registry type) would become "values with `page`", not "values with `status: canonical`".
The 20 page-backed values keep their pages. Nothing public changes.

---

## 4. Field: `type`

**Semantics (R31):** what the place fundamentally *is*. One or more specific place kinds. `type[0]` = the primary kind
(badge, colour).

### 4.1 Proposed canonical values

| Group (colour) | Canonical (existing) | Promote from proposed | New - recommend | New - MANUAL (owner decides) |
|----------------|----------------------|-----------------------|-----------------|------------------------------|
| **water** (blue) | beach, island, bay, river, lake | cape | `stream` (SUB → river) | `lagoon`, `wetland` |
| **terrain / nature** (green) | mountain, forest, waterfall, cave | valley, pass, rice-fields, national-park | `sand-dunes`, `rock-formation`, `farmland` (rice-fields SUB → farmland) | `volcano`, `peninsula`, `hill`, `grassland`, `nature-reserve` |
| **settlement / urban** (amber) | city, town, market | village\*, old-quarter\*, bridge, station\* | `street` | - |
| **religious** (purple) | temple, pagoda, tomb | church | - | - |
| **heritage / civic** (purple / amber) | citadel, museum | communal-house, fortress, prison, palace, building, lighthouse | `historic-site`, `monument` | `memorial`, `ancient-capital` |
| **leisure** (new group) | - | - | `theme-park` | `cable-car` (as a *place*), `zoo` |

\* Current colours are kept exactly as they are today (e.g. `village`, `old-quarter`, `station` are purple, `bridge` amber).
Colour is moved into the registry unchanged ([4.7](#47-type0-and-theme-colours)).

Evidence for the recommended new types:

| New type | Locations (evidence) | Why a type, not a tag/category |
|----------|----------------------|--------------------------------|
| `street` | bui-vien-street, ta-hien-street, hanoi-train-street, phung-hung-mural-street (4) | The place *is* a street. NC-10 recurred 4× |
| `historic-site` | b52-wreck, cu-chi-tunnels, pac-bo-historic-site, nha-pha-historical-site, ho-chi-minh-childhood-home (5) + truong-son cemetery (MANUAL) | NC-17. Neither building nor landscape; today only broad types |
| `monument` | lung-cu-flag-tower, km0-ha-giang (2) + lung-po (MANUAL) | Built markers whose draw is the marker itself |
| `theme-park` | vinwonders-phu-quoc, french-village-ba-na (2) + ba-na-cable-car, vinpearl-safari (MANUAL) | NC-26. Entertainment venues fail every other type |
| `stream` | fairy-stream, mooc-spring, la-ngau-stream (3) + cua-tu, da-ploa (MANUAL: their draw is the waterfall) | CLAUDE.md suffix table already has `-stream` |
| `sand-dunes` | red-sand-dunes, white-sand-dunes (2) | NC-16. Both carry only `nature`/`attraction` today |
| `rock-formation` | to-vo-gate, hon-chong-rock-formation, plate-rock-reef (3) | NC-16. Today typed `landmark` or `beach` |
| `farmland` | moc-chau-tea-hills, ly-son-garlic-fields (2); `rice-fields` (4) gets `broader: farmland` | NC-32. Keeps `rice-fields` (the iconic Vietnam kind) without merging it |

### 4.2 Broad legacy types

| Broad value | Uses | What it actually encodes | Relation / target | Proposal |
|-------------|------|--------------------------|-------------------|----------|
| `nature` | 138 | Theme "nature" | **XF** → category `nature` (127/138 already have it) | Deprecate after (1) the 11 without the category get it, (2) every location has a specific type |
| `cultural` | 62 | Theme "culture" **or** "religion" | **XF + AMB** → category `culture` (41) or `religion` (19) | Deprecate after the "Cultural" shortcut is re-pointed ([11](#11-downstream-impact-audit)) |
| `history` | 31 | Theme "history" | **XF** → category `history` (29/31) | Deprecate |
| `heritage` | 50 | Mix of "old / historic" (39 have `history`) and "officially designated" | **AMB** → category `history` and/or recognition model | Deprecate after recognition model exists |
| `landmark` | 50 | "Notable / recognisable", used on everything | **REL**, no target (only 2/50 carry `iconic`). Not equivalent to `iconic` or `monument` | Deprecate without replacement. Monuments get `monument` |
| `attraction` | 35 | Commercial leisure + generic filler | **AMB** → `theme-park` / `street` / specific type | Deprecate |

All six stay valid (status `deprecated`, not removed) until step 12 of the plan. R13 is respected: removal is a later,
deliberate compatibility step.

### 4.3 The 29 locations with only broad types

| Location | Current | Proposed type (relation) |
|----------|---------|--------------------------|
| b52-wreck | history, landmark, attraction | `historic-site` |
| cu-chi-tunnels | heritage, history, attraction | `historic-site` |
| pac-bo-historic-site | history, nature | `historic-site` |
| nha-pha-historical-site | history, landmark | `historic-site` (MANUAL: colonial compound + lighthouse) |
| ho-chi-minh-childhood-home | history, cultural, heritage, landmark | `historic-site` |
| ho-chi-minh-mausoleum-complex | heritage, history, landmark | MANUAL: `tomb` (Lăng = mausoleum per CLAUDE.md) vs `historic-site` (the complex includes palace, museum, stilt house) |
| truong-son-national-cemetery | history, landmark | MANUAL: `historic-site` vs `memorial` |
| hoa-lu-ancient-capital | history, heritage | MANUAL: `ancient-capital` (CLAUDE.md suffix) vs `temple` (the visitable part is the Đinh/Lê temples) |
| lung-cu-flag-tower | attraction | `monument` |
| km0-ha-giang | landmark, attraction | `monument` |
| lung-po-red-river-source | nature, cultural | MANUAL: `monument` (flag tower) + `river` |
| hanoi-train-street | attraction, landmark, cultural | `street` |
| phung-hung-mural-street | attraction, cultural, landmark | `street` |
| vinwonders-phu-quoc | attraction | `theme-park` |
| french-village-ba-na | attraction | `theme-park` |
| ba-na-cable-car | attraction | MANUAL: `cable-car` (place) vs `theme-park` (Bà Nà Hills) |
| hon-thom-cable-car | attraction | MANUAL: `cable-car` (place) |
| vinpearl-cable-car | attraction | MANUAL: `cable-car` (place) |
| vinpearl-safari | attraction, nature | MANUAL: `zoo` vs `theme-park` |
| duck-stop-phong-nha | attraction, nature | MANUAL: `farmland` / farm (NC-23) |
| moc-chau-tea-hills | nature, attraction | `farmland` |
| ly-son-garlic-fields | nature | `farmland` |
| red-sand-dunes | nature, attraction | `sand-dunes` |
| to-vo-gate | landmark, nature | `rock-formation` |
| hang-mua | nature | MANUAL: `mountain` (the draw is the summit viewpoint) vs `cave` |
| son-tra-peninsula | nature, heritage | MANUAL: `peninsula` vs `nature-reserve` |
| tam-coc | nature | MANUAL: `river` (boat trip on the Ngô Đồng) + `cave` |
| trang-an | nature, heritage | MANUAL: `river` + `cave` (composite landscape) |
| radio-tower-cat-ba | landmark, attraction, nature | MANUAL: a viewpoint. `viewpoint` is deliberately not a type (CLAUDE.md, R18). Candidate: `mountain` |

Also 15 locations have a broad `type[0]` **followed** by a specific type. Simply dropping the broad value would make the
second value primary, and in several cases that value is wrong or weak (e.g. `bay-mau-coconut-forest` → `river`,
`thung-nham-bird-park` → `river`, `white-sand-dunes` → `lake`). They need the same per-location decision:

| Location | Current | Proposed |
|----------|---------|----------|
| tuyen-lam-lake, nho-que-river | nature, lake / nature, river | reorder only (EQ) |
| fairy-stream, mooc-spring | nature, river | + `stream` first |
| white-sand-dunes | nature, attraction, lake | + `sand-dunes` first |
| bui-vien-street, ta-hien-street | attraction, city | + `street` first |
| dong-van-old-town | cultural, town | MANUAL: `old-quarter` vs `town` (R10) |
| phong-nha-botanic-garden | nature, forest | MANUAL: garden vs `forest` |
| phuoc-tinh-fishing-village | nature, cultural, beach | MANUAL: `village` vs port town |
| a-pa-chai | landmark, mountain, nature | MANUAL: `monument` (triple-border marker) vs `mountain` |
| thuong-phuoc-border-gate | landmark, history, river | MANUAL: border crossing (no type) - keep `river`? |
| bay-mau-coconut-forest, thung-nham-bird-park, van-long-nature-reserve | nature, river | MANUAL: `wetland` / `nature-reserve` vs `river` |

### 4.4 Other type issues (keep, record, do not merge)

| Issue | Evidence | Proposal |
|-------|----------|----------|
| `town` on villages | 7 villages carry `village` + `town` (cat-cat, don, ham-ninh, hieu, kho-muong, ta-van, tra-que) | `town` on a village is **REL**, not equivalent. Remove `town` from those 7 in the subtractive phase (no colour impact: `village` is already first). Owner approval, since it changes `/locations?type=town` |
| `mountain` on passes | 7 passes carry `pass` + `mountain` | Keep both. A pass *is* on a mountain; `mountain` stays as a secondary type (REL, not wrong) |
| `temple` on a pagoda | ho-quoc-pagoda | Keep (R10). `pagoda` is primary |
| `citadel` on Mỹ Sơn | my-son-sanctuary | MANUAL: remove `citadel` (inaccurate) in the subtractive phase |
| `beach` on rock formations | hon-chong, plate-rock-reef | Solved by `rock-formation` first. `beach` stays secondary |
| `stream` vs `river` | 5 streams typed `river` or `waterfall` | `stream` with `broader: river`, so a `river` filter still finds them |

### 4.5 Entertainment venues

8 locations (ba-na-cable-car, french-village-ba-na, duck-stop, hon-thom-cable-car, sunworld-beach-cat-ba, vinpearl-cable-car,
vinpearl-safari, vinwonders-phu-quoc) fail both `type` and `categories`. Proposal:
- type: `theme-park` for amusement parks. `cable-car` as a place type and `zoo` are MANUAL (1-3 cases each). Note that a type
  `cable-car` and the experience `cable-car` would be different concepts in different fields (R31). That is allowed, but it
  may confuse editors. **The owner decides.**
- category: `entertainment` ([5](#5-field-categories)).
- `sunworld-beach-cat-ba` stays `beach` (it *is* a beach) + category `entertainment`.

### 4.6 Routes, waypoints and stubs

| Record | Current type | Finding |
|--------|--------------|---------|
| can-ti-bridge, ha-giang-city, mau-due-town, meo-vac-town, yen-minh-town | bridge / city / town ×3 | **Their types are correct.** The problem is missing content, not taxonomy. Proposal: no type change. Track completeness as a content status outside taxonomy (R18) |
| km0-ha-giang | landmark, attraction | `monument` (the marker) |
| ta-nang-phan-dung-trek | mountain, forest, nature | The location *is* a route. No `route`/`trail` type is proposed (1 case, and routes may become a separate entity like itineraries). MANUAL |

### 4.7 `type[0]` and theme colours

Today colour = `locationTheme[type[0]]`, a hand-maintained map in `data/location.ts` that must be exhaustive over `LocationType`.

| Current colour | Types |
|----------------|-------|
| blue | beach, island, bay, river, lake, cape |
| green | mountain, forest, nature, waterfall, cave, valley, rice-fields, national-park, pass |
| amber | city, town, market, attraction, history, museum, bridge, fortress |
| purple | cultural, heritage, temple, pagoda, tomb, citadel, landmark, communal-house, building, village, prison, station, church, old-quarter, palace, lighthouse |

Findings:
- The registry `group` and the colour disagree in places (`waterfall` is group water but green; `museum` is group heritage but
  amber; `bridge` urban/amber but `building` urban/purple). Colours were chosen to keep old visuals, not by group.
- **16 colour changes** happened in the review. If the broad types were simply removed today, **12 more locations would change
  colour** (e.g. 7 green → blue because `river`/`lake` would become primary), mostly for the wrong reason (§4.3).

Proposal:
1. Move the colour into each type's registry entry (`theme`), **with today's colours unchanged**. There is no visible change, and
   new types cannot be added without a colour.
2. Colours for new types: `street` amber, `historic-site` purple, `monument` purple, `theme-park` amber, `stream` blue,
   `sand-dunes` green, `rock-formation` green, `farmland` green.
3. Every type step publishes a colour diff (location, old → new) for approval.
4. Optional, later: derive colour from `group` and fix the inconsistencies. That is a visual change and needs its own approval.

---

## 5. Field: `categories`

**Semantics (R31):** broad travel themes. Not rendered anywhere in the UI today (D1). There are **no downstream dependencies**, which
makes this the safest field to consolidate.

| Value | Uses | Proposed status | Notes |
|-------|------|-----------------|-------|
| `nature` | 146 | **canonical** | |
| `history` | 64 | **canonical** | |
| `culture` | 58 | **canonical** | Target of the `culture` experience analysis (§6.2) |
| `architecture` | 44 | **canonical** | |
| `religion` | 33 | **canonical** | |
| `food` | 17 | **canonical** | |
| `hidden-gem` | 13 | canonical, group `editorial` | Not a theme (D1). Keep, since it is used in editorial flows. Long term an editorial badge, possibly shared with destination `travelStyle` |
| `must-see` | 3 | canonical, group `editorial` | |
| `iconic` | 2 | canonical, group `editorial` | **Not** equivalent to type `landmark` (REL) |
| `coast` (candidate) | ~51 coastal-type + ~12 non-coastal-type coastal places | **recommend: add** | R28. Its value comes from fishing villages, lighthouses, sea pagodas and the Lý Sơn coast, which no type expresses. It overlaps `nature` on ~38 (acceptable: themes are not exclusive) |
| `entertainment` (candidate) | 8 no-theme venues + nightlife streets (MANUAL) | **recommend: add** | The largest theme gap (NC-26) |
| `adventure` (NC-2) | - | **reject** | Intensity/difficulty is a travel attribute (R18) |
| `nightlife`, `shopping` (NC-11) | - | **reject as categories** | Already canonical experiences |

Cross-field additions before any type deprecation (C3):
- 11 locations with type `nature` but no category `nature` → add the category (EQ theme, XF).
- The 2 `history`-typed locations without category `history` → add it.
- `cultural` / `heritage` → `culture` / `religion` / `history`: per location (AMB).

---

## 6. Field: `experiences`

**Semantics (R31):** traveler-facing things to do. 20 values are page-backed (`/experiences/*`, sitemap, homepage, footer,
"Similar Experiences" on every location page).

### 6.1 Page-backed values (R5: never renamed or merged)

| Value | Page | Uses | Assessment | Proposal |
|-------|------|------|------------|----------|
| beach | /experiences/beaches | 45 | Discriminative | Keep. `swimming` is REL, not EQ |
| trekking | /experiences/trekking | 76 | Tagline "Multi-day trails through Vietnam's wildest terrain". Only ~23 match | **IA decision** §6.3 |
| camping | /experiences/camping | 41 | OK | Keep |
| caving | /experiences/caving | 16 | OK | Keep |
| snorkeling | /experiences/snorkeling | 20 | OK. `diving` REL | Keep |
| kayaking | /experiences/kayaking | 28 | OK. Some legacy uses are basket boats (MANUAL, bay-mau) | Keep |
| food | /experiences/food | 24 | OK. REL to category `food` | Keep |
| culture | /experiences/culture | 119 | Generic §6.2 | **IA decision** |
| history | /experiences/history | 78 | Generic (16 lack the `history` category) | **IA decision**, same pattern as culture |
| photography | /experiences/photography | 242 (94%) | Non-discriminative (R20) | **IA decision** §6.2 |
| markets | /experiences/markets | 11 | OK | Keep |
| nightlife | /experiences/nightlife | 8 | OK | Keep |
| walking-tour | /experiences/walking-tours | 100 | Generic §6.2 | **IA decision** |
| cycling | /experiences/cycling | 39 | OK | Keep |
| boat-tour | /experiences/boat-tours | 41 | OK | Keep |
| cable-car | /experiences/cable-cars | 8 | OK | Keep |
| homestay | /experiences/homestays | 13 | OK (D11) | Keep |
| wildlife | /experiences/wildlife | 38 | OK. `birdwatching` would be SUB | Keep |
| motorcycling | /experiences/motorcycling | 32 | OK | Keep |
| shopping | /experiences/shopping | 5 | OK | Keep |

### 6.2 The generic trio (+ `history`)

| Value | Evidence | Options | Recommendation |
|-------|----------|---------|----------------|
| `photography` | 242/257. The 15 without it are stubs, nightlife streets, markets, communal houses and a few commercial sites | **A** keep as is · **B** curate: keep only where photography *is* the activity (per-location review, ~200 removals) · **C** keep the data, hide the value from filters/shortcuts | **A now, C later** (UI change, needs approval). **B** changes page membership massively and is not recommended in Phase 2 |
| `culture` | 119. On 63 of them there is no `culture` category: pagodas, churches, citadels, tombs, prisons ("cultural sightseeing"). The `culture` category is on 58, 56 of them with the experience | **A** keep · **B** narrow membership to locations with category `culture` (page tagline "Ethnic minorities, ancient traditions, living heritage" matches that set) · **C** derive page membership from the category | Semantically **`culture` belongs in `categories`** (XF). Recommend **C** in a later IA phase. In Phase 2 keep the data (A) and stop adding the experience (R24 already) |
| `history` | 78, same shape (16 without category) | Same as `culture` | Same as `culture` |
| `walking-tour` | 100. 27 on `nature`-category places, overlaps `trekking` only 6×. Reads as "explore on foot", not a tour format | **A** keep · **B** narrow to built areas (old quarters, towns, villages, citadels, temple complexes), i.e. the page tagline "ancient towns and hidden alleys on foot" · **C** redefine the page | Recommend **B** as a later, approved membership change. The 27 nature-place uses become MANUAL candidates (removal or `hiking`, **not** automatic: REL) |

None of these is a merge. All options that change page membership are IA decisions outside the data migration.

### 6.3 Trekking vs hiking

| Reading (content-based, from the hiking/trekking log) | ~Count |
|-------------------------------------------------------|--------|
| True trekking (R12) | 23 |
| Hiking (day hike, trail or summit walk) | 25 |
| Neither (stairs, short walks, roadside, closed) | 28 |

Relation: `hiking` and `trekking` are **REL siblings**, not SUB and not EQ. A location may hold both (R12, D10 temporary).

Proposal (ordered):
1. Promote `hiking` to canonical without page (§3).
2. **Additive:** add `hiking` to the ~25 "hiking" locations (per the logged classification). `trekking` stays on them.
   `/experiences/trekking` is unchanged.
3. **Subtractive, IA decision:** remove `trekking` from the ~28 "neither" and optionally from the ~25 hiking-only locations.
   `/experiences/trekking` would drop from 76 to ~23-48 locations, matching its tagline. This is a page-membership change
   (R1) and needs explicit approval with the location list.
4. Later, optional: a `/experiences/hiking` page (new URL, out of Phase 2 scope).

### 6.4 Religious-site experiences

| Value | Uses | Sites |
|-------|------|-------|
| `temple-visit` | 33 | Pagodas 21, đền/Taoist/folk/Cao Đài/active Cham 8, Confucian 1, temples inside landscapes 3 |
| `religious-site-visit` | 7 | Churches only |

Relation: `temple-visit` is **SUB** of `religious-site-visit`. Every temple visit is a religious-site visit, and the tradition is
carried by the religion tag (`buddhism` 19, `catholicism` 7, `folk-religion` 5, `taoism` 2, `hinduism` 2, `cao-dai` 1) and by `type`
(pagoda/temple/church). C2 is satisfied: no page on either value, and nothing is lost.

Proposal: canonical **`religious-site-visit`** (neutral, one value). Migrate `temple-visit` → `religious-site-visit` on 33
locations with a `replacedBy` alias. No URL, page or filter-count impact except the `/locations` experience filter option label
(both values are listed there today). CLAUDE.md mentions `temple-visit` and must be updated in the same step.
**Alternative (owner):** keep both values (REL) if a separate "temples" discovery is wanted. Evidence does not require it.

### 6.5 Other proposed experiences

| Value | Uses | Relation to canonical | Proposal |
|-------|------|-----------------------|----------|
| `swimming` | 50 | REL to `beach` (also waterfalls, lakes, springs) | **canonical, no page** |
| `museum-visit` | 11 | REL to `history` | **canonical, no page** |
| `fishing` | 6 | distinct | **canonical, no page** |
| `diving` | 3 | REL to `snorkeling` (different skill/gear) | **canonical, no page** |
| `surfing` | 2 | REL to `kitesurfing` | **canonical, no page** |
| `kitesurfing` | 3 | REL to `surfing` | **canonical, no page** |
| `hiking` | 2 (+~25 planned) | REL sibling of `trekking` | **canonical, no page** |
| `temple-visit` | 33 | SUB → `religious-site-visit` | **deprecated**, `replacedBy` |
| `religious-site-visit` | 7 (+33) | - | **canonical, no page** |

### 6.6 The 8 unregistered values

| Value | Locations | Relation | Proposal |
|-------|-----------|----------|----------|
| `walking-tours` | tac-say-church | **EQ** → `walking-tour` (alias exists) | Migrate |
| `nature` | gieng-tien-peak, thoi-loi-mountain, to-vo-gate (all Lý Sơn) | **DEP / XF**: a theme, not an activity (CLAUDE.md says so explicitly). All three already have category `nature` | Remove |
| `architecture` | saigon-central-post-office | **DEP / XF**: category `architecture` is already present | Remove |
| `spirituality` | jade-emperor-pagoda | **DEP**: covered by `temple-visit` / `religious-site-visit` (already present) + `taoism` | Remove |
| `picnic` | pongour-waterfall | **DEP**: a travel attribute (R18) | Remove |
| `watersport` | an-bang-beach | **DEP**: a generic umbrella. `swimming`, `surfing`, `kayaking` are present (R1 MANUAL from batch 1) | Remove (owner confirms) |
| `paragliding` | khau-pha-pass | Distinct activity. At Khau Phạ it is *the* draw (paragliding festival) | Register `proposed` (MANUAL) or fold into an adventure-activities value (NC-24) |
| `rock-climbing` | lan-ha-bay | Distinct activity. Lan Hạ is the main climbing area | Register `proposed` (MANUAL), same NC-24 question |

These values appear today as options in the `/locations` experience filter ("Nature", "Picnic", "Watersport"...). Removing them
shrinks that option list. That is the only visible impact.

### 6.7 New experience candidates (from NC-*)

| Candidate | Evidence | Recommendation |
|-----------|----------|----------------|
| `paddleboarding` (SUP) | da-ploa, dau-tieng, thang-hen, tri-an, tuyen-lam, y-ty (≥6) | Register `proposed` |
| `traditional-performance` | ≥8 (Nhã nhạc, xòe, đờn ca tài tử, water puppets, Cham dance) | Register `proposed` |
| `birdwatching` | ≥5 (bidoup, bau-sau, tra-su, thung-nham, van-long) | MANUAL: SUB of `wildlife`. Register only if a separate discovery intent is wanted |
| `craft-workshop`, `cooking-class` | cat-cat, bay-mau, tra-que | MANUAL: REL, not the same activity. Few cases |
| adventure-park activities (`zipline`, `canyoning`/`abseiling`, `alpine-coaster`...) | dark-cave, datanla, do-quyen, yavly | MANUAL: one umbrella value vs several |
| `cliff-jumping`, `sandboarding`, `windsurfing`, `jet-skiing`, `spa`, `train-ride` | 1-3 each | Keep as evidence. Not registered |

### 6.8 `EXPERIENCE_GROUP_CONFIG` (destination "What to do")

A pre-existing mismatch, found in this audit and **not** caused by the review:
- It lists 8 values that no location uses: `waterfall`, `adventure`, `motorbiking`, `climbing`, `kite-surfing`, `cafe`, `sunset`,
  `cruise`. Three are near-spellings of real values: `motorbiking` ≈ `motorcycling`, `kite-surfing` ≈ `kitesurfing`, `climbing` ≈
  `rock-climbing`.
- It ignores 24 used values, including page-backed `camping`, `caving`, `boat-tour`, `food`, `markets`, `nightlife`,
  `walking-tour`, `cable-car`, `wildlife`, `motorcycling` and `shopping`. Destination "What to do" silently drops them.

Proposal: a separate, approved step. Fix the three spellings (EQ), then assign every canonical experience to a group. This
**changes destination pages** ("What to do" gains entries), so it needs sign-off. `types.ts` is "do not modify lightly".

---

## 7. Field: `tags`

### 7.1 Roles currently mixed in `tags` (R30)

Heuristic classification of all 912 tag instances (regex over labels, ±10%):

| Role | Instances | Distinct | As `tags[0]` | Examples |
|------|-----------|----------|--------------|----------|
| Canonical tags (registered) | 85 | 19 | 2 | `buddhism`, `vietnam-war`, `giay-culture` |
| Scenery / feature descriptors | ~429 | ~384 | ~126 | `🌾 Rice Terraces`, `🌅 Sunset Views`, `🐉 Dragon-Mouth Cave` |
| Activity-like labels | ~148 | ~130 | ~27 | `🥾 Jungle Trek`, `🏕️ Island Camping`, `🦅 Birdwatching` |
| History / period / event labels | ~78 | ~75 | ~26 | `🪖 War History`, `🇻🇳 Christmas Bombing 1972`, `🏛️ French Colonial Prison` |
| Rankings / superlatives | ~42 | ~40 | ~32 | `🏖️ Top 25 Beaches in the World`, `⛩️ Largest Pagoda in Vietnam` |
| Religion labels | ~41 | ~41 | ~17 | `🛕 Pilgrimage Site`, `⛪ Gothic Cathedral` |
| Practical attributes / seasons | ~32 | ~32 | ~8 | `🌊 Day Trip from HCMC`, `🌸 Rhododendron Season` |
| Recognition labels | ~23 | ~20 | ~6 | `🌊 UNESCO Heritage`, `⛰️ Special National Historical Relic` |
| Ethnic labels | ~23 | ~21 | ~6 | `🏠 Thai Stilt Houses`, `🎎 Ethnic Minority` |
| Editorial badges | ~11 | ~11 | ~2 | `📷 Hidden Gem`, `🌊 Off the Beaten Path` |

Almost every legacy label is unique (754 distinct among 827). **They are presentation, not vocabulary.** The field today does
four jobs: discovery taxonomy, display chips, the `/locations` card subtitle (`tags[0]`) and the first two chips on province cards.

### 7.2 Proposed tag model (no new Location field)

`tags: string[]` stays one flat array. Each entry is either:
- a **registered tag** (registry key, rendered via its label), with an explicit **role** (`group`), or
- a **legacy display label** (anything not in the registry): presentation only, never used for discovery, removed only under D6/D9.

Proposed registry roles:

| Role (`group`) | Purpose | Canonical values (proposed) | Candidates / MANUAL |
|----------------|---------|-----------------------------|---------------------|
| `historical-period` | "When": discovery by era | `medieval-vietnam` (8), `nguyen-dynasty` (4), `vietnam-war` (12), **`french-colonial-era`** (new, ≥20 evidence) | `prehistory` (4), `revolutionary-era` / resistance 1930-54 (9), `later-le-period` (Lê-Mạc-Trịnh-Nguyễn lords, 16th-18th c.), `sino-vietnamese-border-war` (2) |
| `topic` | Cross-period themes | `east-sea-sovereignty` (3) | - |
| `religion` | Religious tradition | `buddhism` 19, `catholicism` 7, `folk-religion` 5, `taoism` 2, `hinduism` 2, `cao-dai` 1 | `confucianism` (NC-37), `islam` (1 side feature) |
| `ethnic-culture` | Identity of the people/culture that is the draw | `hmong-culture` 3, `thai-culture` 3, `khmer-culture` 3, `tay-culture` 2, `lolo-culture` 1, `giay-culture` 1, `cham-culture` 4 (see split), `ethnic-minority-culture` 4 (multi-group) | `ha-nhi-culture` (2 partial cases). **Cham split**: `champa-heritage` (historic kingdom: my-son, po-nagar, nhan-tower) vs `cham-culture` (living community: bung-binh-thien) - AMB, owner decides |
| `cultural-influence` | Foreign cultural influence | `french-influence` (0 uses, keep registered, **do not apply**) | `chinese-influence`, `japanese-influence` (NC-28, Hội An) |
| `architectural-influence` | Built-form influence | `khmer-architecture` 1, **`french-architecture`** (new, ≥9: NC-34) | `chinese-architecture` (Hội An halls, Hmong King Palace) |
| *(not a tag)* `recognition` | Official designations | → structured model §8 | - |
| *(not a tag)* events | 1938 flood, 1963 crisis, 1972 battles... | stay in prose and legacy labels (NC-33); optional future side-car | - |
| *(not a tag)* rankings, attributes, editorial badges | | legacy display labels only (R18); badges belong with categories `editorial` | - |

Key distinctions kept (R17, R26, R27): `french-colonial-era` (period) ≠ `french-influence` (culture) ≠ `french-architecture` (built
form). The ethnic tags move out of the `cultural-influence` group, where they sit today, into `ethnic-culture`: identity is not
influence.

`ethnic-minority-culture` vs per-group tags: **REL**, not SUB-derivable. A per-group tag does not imply the umbrella (Khmer and Cham
are not usually called "minority culture" by travellers), and the umbrella does not imply any group. Keep both. Use the umbrella
only for genuinely multi-group places.

### 7.3 Subtitle / UI-only labels

- `tags[0]` = the `/locations` card subtitle. `tags.slice(0,2)` = province card chips. All tags = hero chips.
- Rule proposed for Phase 2: **registered tags are never inserted at index 0** (D7). D9 replacements at index 0 only when the
  display text stays identical (the two existing cases).
- Future (not Phase 2): a dedicated subtitle would need a new field or a derived value. That is out of scope (no fifth field).
  Until then, legacy labels are the subtitle source and are not removed from index 0 (D6a).

---

## 8. Recognition / designation: structured model

### 8.1 Why not flat tags

Evidence from 60 locations:
- **Level:** international (UNESCO, Ramsar, UN Tourism, Holy See), national-special, national, provincial.
- **Kind:** world heritage, geopark, biosphere, intangible, memory of the world, Ramsar, relic, scenic site, intangible (national),
  national treasure, marine protected area, nature reserve, national tourism area, minor basilica.
- **Scope:** the site itself, part of a larger property (Sửng Sốt inside Hạ Long Bay), an object inside the site (Tây Phương's
  National Treasure statues), or a nearby site (Thánh Địa Cát Tiên).
- **Multiplicity and dates:** Tuyền Lâm has relic 1988, scenic 1998, tourism area 2017.
- **Property grouping:** 17 UNESCO locations belong to ~9 properties (Hạ Long, Tràng An, Huế, Hội An, Thăng Long, Hồ citadel,
  Mỹ Sơn, Phong Nha-Kẻ Bàng, Yên Tử complex).

A flat tag (`unesco-heritage`) loses scope, level, year and property.

### 8.2 Proposed model (future structured data, not a Location field)

```ts
type Recognition = {
  scheme:
    | "unesco-world-heritage" | "unesco-geopark" | "unesco-biosphere" | "unesco-intangible"
    | "unesco-memory-of-the-world" | "ramsar"
    | "special-national-relic" | "national-relic" | "national-scenic-site"
    | "national-intangible-heritage" | "national-treasure" | "national-tourism-area"
    | "marine-protected-area" | "nature-reserve" | "minor-basilica" | "un-tourism-best-village"
  level: "international" | "national-special" | "national" | "provincial"
  property?: string        // e.g. "complex-of-hue-monuments", "trang-an-landscape-complex"
  year?: number
  scope: "site" | "part-of-property" | "object-in-site" | "nearby"
  verified: boolean        // anti-hallucination: false = TODO verify
  source?: string
}
```

Not recognitions: rankings and records (Forbes, TripAdvisor, Guinness, Vietnam Records). They stay as display labels.

### 8.3 Compatibility-layer representation (no fifth field)

1. **Side-car source of truth:** `data/taxonomy/recognitions.ts` = `Record<LocationSlug, Recognition[]>`, seeded from the
   CONTENT-REVIEW recognition table. Anything not verified from the location's own content is flagged `verified: false`.
2. **Derived discovery tags:** a helper `getRecognitionTags(slug)` returns coarse keys (`unesco-world-heritage`, `ramsar`,
   `national-relic`...) for search and filters. They are **not written** into `Location.tags`.
3. Legacy labels (`🌊 UNESCO Heritage`) stay as display text. Their alias kind is `implies`.
4. Later (a separate decision): render a badge, or add a real field in a future data-model phase.

Location files are untouched. The side-car can be validated against `allLocations` slugs in the audit script.

---

## 9. OLD → CANONICAL mapping tables

### 9.1 `type` (39 current values + new)

| Old value | Uses | Canonical target | Relation | Action (phase) |
|-----------|------|------------------|----------|----------------|
| beach, island, bay, river, lake, mountain, forest, waterfall, cave, town, city, market, temple, pagoda, tomb, citadel, museum | 3-43 | same | EQ (itself) | Keep canonical |
| cape, valley, pass, rice-fields, national-park, village, old-quarter, bridge, station, church, communal-house, fortress, prison, palace, building, lighthouse | 1-14 | same | - | Promote proposed → canonical |
| nature | 138 | category `nature` + a specific type | XF | Add missing categories, then deprecate (12) |
| cultural | 62 | category `culture` / `religion` + specific type | XF + AMB | Per location, then deprecate (12) |
| history | 31 | category `history` + specific type | XF | Deprecate (12) |
| heritage | 50 | category `history` / recognition model | AMB | Deprecate (12) |
| landmark | 50 | none (`monument` where it is one) | REL | Deprecate (12) |
| attraction | 35 | `theme-park` / `street` / specific | AMB | Per location, deprecate (12) |
| `town` on villages (7) | 7 | `village` (already present) | REL | Remove secondary `town` (subtractive, approval) |
| `citadel` on my-son | 1 | `temple` (present) | REL | MANUAL |
| `river` on streams (3-5) | 5 | `stream` (+ `broader: river`) | SUB | Add `stream` first. Keep `river` or drop it (broader makes it redundant) - owner |
| new | | `street`, `historic-site`, `monument`, `theme-park`, `stream`, `sand-dunes`, `rock-formation`, `farmland` | | Register (4) |
| new, MANUAL | | `cable-car`, `zoo`, `memorial`, `ancient-capital`, `wetland`, `nature-reserve`, `peninsula`, `volcano`, `hill`, `grassland`, `lagoon` | | Owner decides |

### 9.2 `categories`

| Old value | Uses | Canonical | Relation | Action |
|-----------|------|-----------|----------|--------|
| nature, history, culture, architecture, religion, food | 17-146 | same | - | Promote → canonical |
| hidden-gem, must-see, iconic | 13 / 3 / 2 | same, group `editorial` | - | Keep (status canonical, editorial) |
| (type) nature / history | 138 / 31 | nature / history | XF | Add where missing |
| (type) cultural | 62 | culture or religion | AMB | Per location |
| (experience) culture / history | 119 / 78 | culture / history | XF, **not** 1:1 per location (63 / 16 have a different theme) | No automatic copy. IA decision §6.2 |
| (experience) architecture | 1 | architecture | XF | Already present. Remove the experience |
| new | | `coast`, `entertainment` | | Owner decides (recommended) |

### 9.3 `experiences`

| Old value | Uses | Canonical target | Relation | Action | Page impact |
|-----------|------|------------------|----------|--------|-------------|
| 20 page-backed values | | same | - | Keep | none |
| walking-tours | 1 | walking-tour | **EQ** | Migrate (8) | walking-tours page +1 |
| temple-visit | 33 | religious-site-visit | **SUB** (C2 satisfied) | Migrate (8) | none (no page) |
| religious-site-visit | 7 | same | - | Promote canonical (no page) | none |
| swimming, museum-visit, fishing, diving, surfing, kitesurfing, hiking | 2-50 | same | - | Promote canonical (no page) | none |
| trekking (on hiking-type walks) | ~25 | + hiking | REL (add, don't replace) | Add hiking (6); trekking removal = IA (9) | trekking page -0 / -25 |
| trekking (on "neither") | ~28 | none | DEP per location | IA decision (9) | trekking page -28 |
| photography | 242 | same | - | Keep (IA later) | - |
| culture, history (experience) | 119 / 78 | category culture / history | XF, not 1:1 | IA later (9) | - |
| walking-tour on nature places | 27 | none / hiking | AMB | MANUAL (9) | walking-tours page -≤27 |
| nature | 3 | category nature (present) | DEP/XF | Remove (8) | filter option disappears |
| architecture | 1 | category architecture (present) | DEP/XF | Remove (8) | filter option disappears |
| spirituality | 1 | religious-site-visit (present) | DEP | Remove (8) | filter option disappears |
| picnic | 1 | none (attribute) | DEP | Remove (8) | filter option disappears |
| watersport | 1 | swimming/surfing/kayaking (present) | DEP (umbrella) | Remove (8), owner confirms | filter option disappears |
| paragliding | 1 | paragliding (register) | - | MANUAL | none |
| rock-climbing | 1 | rock-climbing (register) | - | MANUAL | none |
| EXPERIENCE_GROUP_CONFIG `motorbiking` / `kite-surfing` / `climbing` | 0 | motorcycling / kitesurfing / rock-climbing | EQ (config spelling) | Fix in (10) | destination "What to do" changes |

### 9.4 `tags` - registered values

| Old value | Uses | Canonical | Role | Relation | Action |
|-----------|------|-----------|------|----------|--------|
| vietnam-war, medieval-vietnam, nguyen-dynasty | 12 / 8 / 4 | same | historical-period | - | Promote |
| east-sea-sovereignty | 3 | same | topic | - | Promote, move group |
| buddhism, catholicism, folk-religion, taoism, hinduism, cao-dai | 1-19 | same | religion | - | Promote |
| hmong, thai, khmer, tay, lolo, giay culture | 1-3 | same | ethnic-culture | - | Promote, move group |
| ethnic-minority-culture | 4 | same | ethnic-culture | REL to per-group | Keep provisional → canonical after owner OK (R3) |
| cham-culture | 4 | `champa-heritage` (3) / `cham-culture` (1) | ethnic-culture / historical-period | AMB | MANUAL split |
| khmer-architecture | 1 | same | architectural-influence | - | Promote |
| french-influence | 0 | same | cultural-influence | - | Keep `proposed`, do not apply |
| new | | `french-colonial-era`, `french-architecture` | period / architectural | - | Register + apply from evidence (7) |
| new, MANUAL | | `confucianism`, `champa-heritage`, `prehistory`, `revolutionary-era`, `chinese-influence`, `japanese-influence`, `ha-nhi-culture` | | | Owner decides |

### 9.5 `tags` - legacy labels (by role)

| Legacy label class | Canonical | Relation | Action |
|--------------------|-----------|----------|--------|
| Exact experience duplicates (`📸 Photography`, `🏕️ Camping`...) | the experience | EQ | Already removed under D6 (except `tags[0]`). Continue D6 for any new ones |
| 1:1 concept labels (`🕌 Cham Culture`, `🎎 Giáy Culture`, `🪖 Vietnam War`...) | the tag | EQ | D9, done where found |
| `🪖 War History`, `🏛️ War History` | `vietnam-war`? | REL (generic "war") | Keep label. No tag unless the content is about the Vietnam War |
| `🛕 Buddhist Pilgrimage`, `🕌 Buddhist Caves` | `buddhism` | implies | Keep label. Tag present |
| `🏯 Cham Heritage` | `champa-heritage` / `cham-culture` | implies | Keep label |
| `🏙️ French Colonial`, `🏯 French Heritage`, `French-Vietnamese Architecture` | `french-colonial-era` / `french-architecture` | implies (**not** `french-influence`, R21) | Keep label. Fix aliases |
| Recognition labels (`🌊 UNESCO Heritage`...) | recognition side-car | implies | Keep label. Side-car record |
| Rankings, superlatives, attributes, seasons | none | - | Keep as display (R18) |
| Editorial badges (`📷 Hidden Gem`, `Off the Beaten Path`) | category `hidden-gem` | REL (hidden-gem ≠ off the beaten path) | Keep label. MANUAL whether to add `hidden-gem` |
| Activity-like labels (`🥾 Jungle Trek`, `🦅 Birdwatching`) | the experience, if any | REL (qualified) | Keep label (D6 only removes exact duplicates) |
| Scenery descriptors | none | - | Keep |

---

## 10. Proposed aliases

Today aliases are consumed **only** by `scripts/audit-taxonomy.ts`. No runtime/UI code calls `normalizeExperience`,
`normalizeLegacyTag` or `normalizeLocationTaxonomy`. Changing them has **no visible impact**.

Proposed split: `EQUIVALENT_*` (safe for D9 replacement and migration) vs `IMPLIES_*` (safe to derive a tag, never to replace a
label).

| Alias key | Today → | Proposed | Kind |
|-----------|---------|----------|------|
| `walking-tours` (experience) | walking-tour | walking-tour | equivalent |
| `temple-visit` (experience) | - | religious-site-visit | replacedBy (SUB), after step 8 |
| `vietnam-war-history` | vietnam-war | vietnam-war | equivalent |
| `vietnam-war-memorial` | vietnam-war | vietnam-war | implies (adds the memorial kind) |
| `east-sea-sovereignty-history` | east-sea-sovereignty | east-sea-sovereignty | equivalent |
| `french-colonial` | french-influence ❌ | french-colonial-era | implies (**R21 fix**) |
| `french-heritage` | french-influence ❌ | none (AMB: period or architecture) | **remove** |
| `french-vietnamese-architecture` | french-influence ❌ | french-architecture | implies (**R21 fix**) |
| `cham-heritage` | cham-culture | champa-heritage if split, else cham-culture | implies |
| `buddhist-pilgrimage`, `buddhist-caves` | buddhism | buddhism | implies |
| `unesco-heritage`, `unesco-world-heritage`, `unesco-biosphere`, `national-relic`... | - | recognition scheme keys | implies (side-car only) |
| type `stream` | - | `broader: river` | broader (not an alias) |
| type `rice-fields` | - | `broader: farmland` | broader |
| experience `birdwatching` (if registered) | - | `broader: wildlife` | broader |

---

## 11. Downstream impact audit

| Consumer | Code | Depends on | Impact of the proposals |
|----------|------|------------|-------------------------|
| `/experiences/[slug]` (20 pages, SSG) | `app/experiences/[slug]/page.tsx` | exact `l.experiences.includes(value)` | Membership changes **only** with the IA steps (trekking, walking-tour, generic trio) and the `walking-tours` fix (+1). Promotions and `temple-visit` migration: none |
| `/experiences` index | `app/experiences/page.tsx` | counts per value | Same as above |
| Sitemap | `app/sitemap.ts` | `experiences[].slug` | None (no slug changes) |
| "Similar Experiences" links on 257 location pages | `app/locations/[slug]/page.tsx` | page-backed values only | None. Proposed values never render here |
| Homepage cards / footer | `app/page.tsx`, `components/Footer.tsx` | hard-coded `/experiences/*` URLs | None. **Pre-existing:** `/experiences/islands`, `/experiences/waterfalls`, `/experiences/mountains` are linked from the homepage but do not exist (404). They are *types*, which is evidence for type-based landing pages later |
| `/locations` type filter | `LocationsClient.tsx` `allTypes` = every type value in data | data | New types appear automatically. Deprecated broad types remain as options until removed from data. Removing them removes the options |
| `/locations` experience filter | `allExperiences` = every experience value in data, `formatType` label | data | Shows proposed and unregistered values today ("Nature", "Picnic", "Temple visit"...). Step 8 removes 6 options and merges "Temple visit" into "Religious site visit" |
| `/locations` shortcuts | `SHORTCUTS` | type `beach`, `island`, `mountain`, `cave`, `waterfall`, **`cultural`**; exp `trekking`, **`photography`** | "Cultural" breaks if `cultural` is removed → must be re-pointed first (UI change, step 11). "Photography" = 242 locations (non-discriminative) |
| Filter URLs | `?type=…&experience=…` (client-side, bookmarkable) | raw values | Deprecated values in old links return fewer or no results once removed. Low traffic risk, not indexed (client-side state) |
| Map page | `app/map/page.tsx` | page-backed experience counts/filter | Same as the experience pages |
| Theme colours | `locationTheme[type[0]]` in location page, cards | `type[0]` | Every type step publishes a colour diff. Broad-type removal alone would change 12 colours (§4.7) |
| Type badges / labels | location page, experience and destination cards (`getTypeLabel`) | `type[0]` or all types, hyphen → space | New hyphenated types render correctly ("historic site") |
| `tags[0]` subtitle | `/locations` cards | `tags[0]` | Unchanged by the proposals (D6a, D7) |
| Province cards | `app/provinces/[slug]/page.tsx` | `tags.slice(0,2)` via `tagDisplayLabel` | Unchanged unless D6/D9 touch index 1 |
| Hero chips | location page | all tags via `tagDisplayLabel` | Registered tags show labels |
| Search index | `scripts/build-search-index.ts` → `public/search-index.json` (Fuse keys: name, description, tags) | raw type values + raw tags | Registered tags are indexed as keys (`giay-culture`), not labels ("Giáy Culture"). Proposal: index `tagDisplayLabel(tag)` and type labels (small script change, step 11). New types/tags become searchable automatically |
| Destination "What to do" | `deriveFromLocations` + `EXPERIENCE_GROUP_CONFIG` | exact experience strings | Pre-existing mismatch §6.8. Experience migrations change it only for grouped values (`hiking` is grouped: adding hiking changes "What to do" for destinations with those locations) |
| Nearby locations | `lib/nearbyLocations.ts` | passes `type` through | Label only |
| Aliases / normalizers | `data/taxonomy/*` | audit script only | None at runtime |
| JSON-LD / metadata | location pages | none use taxonomy | None |
| CLAUDE.md enum table | documentation | lists the original 22 types / 3 categories / 20 experiences | Must be regenerated from the registry at the freeze (step 13) |

---

## 12. Pre-existing issues found (not caused by the review, not fixed)

1. Homepage links to `/experiences/islands`, `/experiences/waterfalls`, `/experiences/mountains` → 404.
2. `EXPERIENCE_GROUP_CONFIG` references 8 unused values (3 misspelled) and ignores 24 used ones (§6.8).
3. The `/locations` experience filter lists unregistered values with raw formatting.
4. The search index uses canonical tag keys instead of labels.
5. `stripLeadingEmoji()` does not strip flag emoji (`🇻🇳 ...`).
6. The CLAUDE.md enum table is out of date.
7. The R21 French aliases are semantically wrong (audit output only).

---

## 13. Proposed Phase 2 migration plan

Order is chosen so that every step is additive before anything is removed, and so each step is independently reviewable and
revertible. **Each step requires explicit owner approval.** Each ships with the validation suite (C6) and a before/after report
(page membership, colour, `tags[0]`, derived "What to do", filter options).

| # | Step | Data change? | Visible change? | Depends on |
|---|------|--------------|-----------------|------------|
| 0 | **Owner decisions** on this document (§14) | no | no | - |
| 1 | Registry metadata: status model (C4), `page` for experiences, `broader`, tag roles/groups, alias kinds, R21 alias fix, audit script by role | no (code only) | none | 0 |
| 2 | Move colours into the type registry, unchanged (`locationTheme` derived) | no | none (colour diff must be empty) | 1 |
| 3 | Recognition side-car + helper + audit check (not rendered) | no Location data | none | 1 |
| 4 | Register approved new types; add specific types to the 29 broad-only and reorder the 15 broad-first locations | `type` additions/reorder | badges, colours (diff approved), type filter options | 1, 2 |
| 5 | Categories: promote themes; add missing `nature`/`history` (XF); apply `coast`/`entertainment` if approved | `categories` additions | none (not rendered) | 1 |
| 6 | Experiences, additive: promote proposed; add `hiking` from the log; register approved new values | `experiences` additions | experience filter options, "What to do" (hiking is grouped) | 1 |
| 7 | Tags, additive: `french-colonial-era`, `french-architecture` (+ approved MANUAL ones) from recorded evidence, never at index 0 | `tags` additions | hero chips | 1 |
| 8 | Experiences, normalising: `walking-tours` → `walking-tour`; `temple-visit` → `religious-site-visit`; remove the 5-6 DEP values | replacements/removals | walking-tours page +1; filter options | 6 |
| 9 | **IA decisions** (separate approval each): trekking membership; walking-tour on nature places; `photography`/`culture`/`history` handling | removals | `/experiences/*` membership | 6 |
| 10 | `EXPERIENCE_GROUP_CONFIG` spelling fix and complete grouping | config | destination "What to do" | 6 |
| 11 | UI compatibility: re-point the "Cultural" shortcut; filter labels from the registry; search index uses labels | code | shortcut, filter labels, search | 4, 5 |
| 12 | Deprecate broad types in data: remove `nature`/`cultural`/`history`/`heritage`/`landmark`/`attraction` (and secondary `town` on villages) | `type` removals | type filter options (colour diff must be empty thanks to 4) | 4, 5, 11 |
| 13 | Freeze: statuses to canonical/deprecated, regenerate the CLAUDE.md enum table from the registry, optional stricter unions | code + docs | none | all |

Steps 1-3 are safe to do first (no data change). Steps 4-7 add information only. Steps 8-12 remove or redirect and carry the
URL/IA risk. **None of them should be batched together.**

---

## 14. Decisions needed from the owner

| # | Decision | Recommendation |
|---|----------|----------------|
| O1 | Approve the status model, including "canonical without page" for experiences (§3) | Yes |
| O2 | New types: `street`, `historic-site`, `monument`, `theme-park`, `stream`, `sand-dunes`, `rock-formation`, `farmland` | Yes |
| O3 | MANUAL types: `cable-car` (place), `zoo`, `memorial`, `ancient-capital`, `wetland`, `nature-reserve`, `peninsula`, `volcano`, `hill`, `grassland` | Decide individually. Default: not added |
| O4 | The per-location type decisions in §4.3 marked MANUAL | Owner's local knowledge |
| O5 | Deprecate the six broad types (after steps 4, 5, 11) | Yes |
| O6 | Categories `coast` and `entertainment` | Yes to both |
| O7 | `temple-visit` → `religious-site-visit` (SUB migration) | Yes |
| O8 | Trekking page membership (keep 76 / ~48 / ~23) | Narrow to R12 (~23 + mixed cases) in a later IA step |
| O9 | `walking-tour` narrowing; `photography` / `culture` / `history` handling | Keep data now. Decide the IA later |
| O10 | Unregistered experiences: remove 6, MANUAL `paragliding`/`rock-climbing` | Yes |
| O11 | Register `paddleboarding`, `traditional-performance` | Yes |
| O12 | Tags: `french-colonial-era`, `french-architecture` | Yes |
| O13 | Cham split (`champa-heritage` vs `cham-culture`); `confucianism`; `ha-nhi-culture`; period candidates | Owner decides |
| O14 | Recognition side-car model (§8), not stored in `Location.tags` | Yes |
| O15 | Fix `EXPERIENCE_GROUP_CONFIG` (changes destination pages) | Yes, as its own step |
| O16 | Pre-existing homepage 404 links | Out of taxonomy scope. Record only |
