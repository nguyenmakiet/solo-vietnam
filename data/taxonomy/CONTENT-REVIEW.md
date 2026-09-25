# Location Taxonomy - Content Review Log

Location-by-location review of the four taxonomy fields (`type`, `categories`, `experiences`, `tags`).
The vocabulary is **not frozen** - it evolves from what the real content needs. Consolidation and the
canonical freeze happen after the full review.

- Branch: `claude/location-taxonomy-content-review` (from the Phase 1 architecture branch)
- Scope: only the four taxonomy fields. No prose, SEO, slug, coordinates, images or `updatedAt` changes.
- Order: `allLocations` order in `data/all-locations.ts`, ~20 per batch.
- Checkpoint: pause after ~50-100 locations to reassess the vocabulary before continuing.

## Progress

| Batch | Range (index) | Locations | Files changed | Status |
|-------|---------------|-----------|---------------|--------|
| 1 | 0-19 | `a-pa-chai` -> `bai-mon-beach` | 19 | done |
| 2 | 20-39 | `bai-tu-long-bay` -> ... | - | next |

**Reviewed: 20 / 257. Remaining: 237.**

---

## Working semantic decisions

These are the rules the review applies. Each can be revisited at the checkpoint.

**D1 - Editorial badges and themes coexist in `categories`.**
`hidden-gem`, `must-see` and `iconic` stay exactly where they are (`group: "editorial"`). Broad travel themes
are added alongside them (`group: "theme"`), badges first. `categories` is not rendered anywhere today, so
this has no UI impact. Whether badges eventually move to their own field is left for the consolidation.

**D2 - Broad legacy `type` values are kept for now.**
`nature`, `cultural`, `heritage`, `history`, `attraction` and `landmark` answer "which theme?" rather than
"what is this place?", but the `/locations` type filters and the "Cultural" shortcut button (`type: "cultural"`)
depend on them. Removing them location-by-location would make those filters silently incomplete during the
transition. So the review **adds** the specific place type (and puts it first, since `type[0]` drives the
badge and theme colour) and records the broad value as "deprecated - remove at consolidation".
The equivalent theme goes into `categories`.

**D3 - `hiking` vs `trekking` is not decided; `hiking` is not applied yet.**
`trekking` stays wherever it is defensible. It is removed only where the content shows no trail at all
(e.g. a 200-step staircase). Locations where "hiking" is the better word are listed in
[Hiking/trekking observations](#hikingtrekking-observations) as input for the decision.
Working definitions under discussion: *trekking* = long, rugged or multi-day trail walking, often guided;
*hiking* = a day walk or climb of up to a few hours on a trail.

**D4 - `boat-tour` stays; `boat-trip` is not introduced.**
Same reason as D3: `boat-tour` has 41 uses and the public `/experiences/boat-tours` page.
A plain access crossing (ferry to an island) is not treated as a boat tour on its own.

**D5 - Page-backed experiences are kept when still true.**
`culture`, `history`, `food` and `beach` overlap with themes, but they drive the public `/experiences/*` pages.
They are kept wherever they describe the place, and only removed when wrong.
New experiences are registered as `status: "proposed"` and have no page yet. `ExperienceValue`
(the page registry type) still covers only the 20 page-backed values.

**D6 - Legacy tags that duplicate an experience are removed; other legacy labels are kept.**
A legacy tag is removed only when, after stripping the emoji, it names **exactly** an experience that the
location already has (for example `📸 Photography` with `photography`, or `🏕️ Camping` with `camping`).
Qualified labels such as `🏕️ Island Camping`, `🚴 Lake Cycling` and `🥾 Jungle Trek` are kept.
Editorial descriptor labels (`👁️ 50m Natural Rock Hole`) are visible content in the hero, the card subtitle and
province cards, so they stay until consolidation decides where display labels live.

**D7 - Canonical tags are appended after the legacy labels.**
This keeps `tags[0]` (the `/locations` card subtitle) and the first two tags (province cards) stable.
`tagDisplayLabel()` renders canonical tags with their label ("Vietnam War") and legacy labels exactly as before.

**D8 - A tag needs the concept to be central to the place, not just mentioned.**
Keyword presence is never enough. Examples from batch 1:
- Bà Nà "French Village" is a 2000s pastiche -> **not** `french-influence`.
- Bái Đính's 11th-century origin is secondary to a 2003+ complex -> **not** `medieval-vietnam`.

---

## Vocabulary state (after batch 1)

`status: "proposed"` = introduced by this review, pending the freeze.

| Field | Added in this review | Notes |
|-------|----------------------|-------|
| `type` | `communal-house`, `valley`, `rice-fields` | `locationTheme` entries added (same colours as the values they replace as primary) |
| `categories` | `nature`, `culture`, `history`, `architecture`, `religion`, `food` | all six candidate themes are now in use |
| `experiences` | `swimming`, `surfing`, `temple-visit` | `swimming` was already in data (21 uses) |
| `tags` | `medieval-vietnam`, `east-sea-sovereignty`, `folk-religion`, `ethnic-minority-culture` | plus the Phase 1 seed: `vietnam-war`, `french-influence`, `khmer-culture`, `cham-culture`, `buddhism` |

Working scope of `medieval-vietnam`: independent dynasties of the 10th-15th centuries (Ngô, Đinh, Tiền Lê,
Lý, Trần, Hồ). The Nguyễn era (1802-1945) is out of scope.

---

## Batch 1 - index 0-19 (2026-09-25)

Legend: `+` added, `-` removed, `→` reordered/replaced. "Kept" = reviewed, still correct.

| # | Location | type | categories | experiences | tags |
|---|----------|------|------------|-------------|------|
| 0 | `a-pa-chai` | kept | + nature, culture | kept | - 📸 Photography; + ethnic-minority-culture (Hà Nhì village of Sín Thầu is a highlight) |
| 1 | `am-tien-cave` | kept | + nature, history | - trekking (200-250 steps, no trail); + cycling, kayaking (lake rentals), temple-visit (cave shrine + pagoda) | - 📸 Photography; + medieval-vietnam (Đinh-dynasty execution ground, Hoa Lư citadel boundary) |
| 2 | `angel-eye-mountain` | kept | + nature | kept | - 🏕️ Camping, - 📸 Photography |
| 3 | `an-bang-beach` | kept | + nature | - watersport → + swimming, surfing, kayaking (named in the content) | kept |
| 4 | `an-binh-island` | kept | + nature | + swimming, kayaking, camping (beach camping described) | kept |
| 5 | `an-hai-communal-house` | + communal-house (primary) | + history, culture, architecture | kept | + east-sea-sovereignty |
| 6 | `an-nhut-rice-fields` | + rice-fields (primary) | + nature, food (weekend countryside food market) | + cycling | kept |
| 7 | `an-vinh-communal-house` | + communal-house (primary) | + history, culture, architecture | kept | + east-sea-sovereignty |
| 8 | `b52-wreck` | kept - MANUAL REVIEW | + history | kept | + vietnam-war |
| 9 | `ba-be-lake` | kept | + nature, culture | + culture (Tày village homestay, legend, festival) | + ethnic-minority-culture |
| 10 | `ba-danh-pagoda` | kept | + religion, culture, architecture | + temple-visit | - 📸 Photography; + buddhism, folk-religion (Tứ Pháp worship) |
| 11 | `ba-den-mountain` | kept | + nature, religion | + temple-visit | - 🚡 Cable Car; + buddhism, folk-religion (Bà Đen goddess cave shrine) |
| 12 | `ba-ho-waterfall` | kept | + nature | + kayaking (included in the ticket) | - 📸 Photography |
| 13 | `ba-hon-dam-islands` | kept | + nature | + swimming | - 🤿 Snorkeling |
| 14 | `ba-na-cable-car` | kept - MANUAL REVIEW | none - MANUAL REVIEW | kept | kept (🏰 French Village ≠ french-influence) |
| 15 | `ba-om-lake` | kept | + culture, religion, nature | + temple-visit (Âng Pagoda, active Khmer temple) | - 📸 Photography; + khmer-culture |
| 16 | `bac-son-valley` | + valley (primary) | hidden-gem kept; + nature, culture | kept | - 📸 Photography; + ethnic-minority-culture (Tày, Nùng, Dao stilt-house villages) |
| 17 | `back-beach-vung-tau` | kept | + food - MANUAL REVIEW (see below) | kept | kept |
| 18 | `bai-dinh-pagoda` | kept | + religion, culture, architecture | + temple-visit | - 📸 Photography; + buddhism |
| 19 | `bai-mon-beach` | kept | hidden-gem kept; + nature | + camping (overnight camp is the main recommendation) | - 📸 Photography |

**Files modified (19):** `a-pa-chai`, `am-tien-cave`, `angel-eye-mountain`, `an-bang-beach`, `an-binh-island`,
`an-hai-communal-house`, `an-nhut-rice-fields`, `an-vinh-communal-house`, `b52-wreck`, `ba-be-lake`,
`ba-danh-pagoda`, `ba-den-mountain`, `ba-ho-waterfall`, `ba-hon-dam-islands`, `ba-om-lake`, `bac-son-valley`,
`back-beach-vung-tau`, `bai-dinh-pagoda`, `bai-mon-beach` (all under `data/locations/`).
Reviewed, no change: `ba-na-cable-car`.

Deprecated broad `type` values seen in this batch (kept per D2): `nature` ×10, `cultural` ×7, `landmark` ×3,
`heritage` ×2, `attraction` ×3, `history` ×1.

### Manual review

| Location | Field | Question |
|----------|-------|----------|
| `b52-wreck` | type | `history · landmark · attraction` - all broad. Needs a specific type: `war-relic`? `memorial`? |
| `ba-na-cable-car` | type, categories | A hilltop resort / theme park reached by cable car. Candidate type `theme-park` or `resort`, candidate theme `entertainment`? |
| `back-beach-vung-tau` | categories | A developed urban resort beach. `nature` would be misleading, so only `food` was added. Needs a coastal theme (see NC-1). |
| `bai-mon-beach` | experiences | `swimming` possible but the content warns of rip currents - not added |
| `ba-om-lake` | tags | `khmer-architecture` applies to the Âng Pagoda on the lake shore, but the location is the lake - not added |
| `ba-den-mountain` | tags | The highlights mention Cao Đài history - candidate `cao-dai`? (NC-4) |
| `angel-eye-mountain`, `an-nhut-rice-fields`, `ba-danh-pagoda`, `bai-dinh-pagoda` | experiences | `walking-tour` is used for any walk on foot, not only guided town walks (see P3) |

### New candidates (NC) - recorded, not applied

| ID | Field | Candidate | Evidence | Question |
|----|-------|-----------|----------|----------|
| NC-1 | categories | `coast` / `beach` theme | an-bang, an-binh, back-beach, bai-mon, ba-hon-dam | `nature` fits wild beaches but not urban resort beaches. There are 43 beach-type locations |
| NC-2 | categories | `adventure` | a-pa-chai, ba-ho | A broad theme for remote or physical trips? |
| NC-3 | tags | per-ethnic-group tags (`tay-culture`, `ha-nhi-culture`...) | a-pa-chai, ba-be, bac-son | `khmer-culture` and `cham-culture` are group-specific, while highland groups currently share `ethnic-minority-culture`. Split or keep broad? |
| NC-4 | tags | `cao-dai` | ba-den-mountain | Distinct Vietnamese religion. Tây Ninh Holy See likely later in the review |
| NC-5 | tags | designation tags (`unesco-heritage`, `unesco-geopark`, `ramsar-site`, `national-relic`) | angel-eye (UNESCO Geopark), ba-be (Ramsar), an-hai/an-vinh (national relic) | Are designations discovery tags or metadata? |
| NC-6 | tags | `nguyen-dynasty` | an-hai (built 1815-1820, Nguyễn style) | A period tag for 1802-1945? Not applied: the dynasty is the setting, not the focus |
| NC-7 | experiences | `cliff-jumping`, `paddleboarding` (SUP), `shellfish-foraging` | ba-ho, an-binh, angel-eye, ba-hon-dam | Niche activities - worth their own values? |
| NC-8 | experiences | `jet-skiing` | an-bang | In the original target examples. Only vendor-level evidence so far |
| NC-9 | type | `national-park` | ba-be-lake (lake inside Ba Bể NP) | Only a candidate when the location *is* the park |

### Rejected

| Location | Value | Why |
|----------|-------|-----|
| `ba-na-cable-car` | `french-influence` | The "French Village" is a modern replica, not historic French influence |
| `bai-dinh-pagoda` | `medieval-vietnam` | The 11th-century cave pagoda is a small part of a 2003+ complex |
| `am-tien-cave` | `buddhism` | The Buddhist retreat is part of the story but not the focus of the site |
| `an-hai-communal-house` | `cham-culture` | Cham-origin deities on the altars are a detail, not the focus |

### Hiking/trekking observations

| Location | Current | Content says | Better fit |
|----------|---------|--------------|------------|
| `a-pa-chai` | trekking | final approach is a roughly 1h climb or a few hundred metres, historically 4-5h | hiking (today) |
| `am-tien-cave` | trekking (removed) | 200-250 stone steps | neither |
| `angel-eye-mountain` | trekking | 15-20 min climb; separate guided trek to the summit | trekking (guided) |
| `ba-den-mountain` | trekking | forest trails to 986m; "not for hardcore trekkers" | hiking |
| `ba-ho-waterfall` | trekking | rugged rock scramble, half-day | either |
| `ba-be-lake` | trekking | village walks | hiking / walking |
| `bac-son-valley` | trekking | 1,200 steps to a viewpoint; "good for trekking" Nov-Jan | hiking |
| `bai-mon-beach` | trekking | trail from the lighthouse road down to the beach | hiking |

### Emerging patterns (batch 1)

- **P1 - `categories` was effectively empty.** Only 18 of 257 locations had an editorial badge, so every location
  receives its themes from scratch. The six candidate themes covered 19 of 20 locations. The exception is a
  theme park (`ba-na-cable-car`), and a developed beach only fits partly (NC-1).
- **P2 - `type` is dominated by broad values.** 10 of 20 carry `nature`. The missing specific types are village-scale
  places (communal house, valley, rice fields). The CLAUDE.md naming-suffix table (`-valley`, `-village`,
  `-pass`, `-rice-terraces`...) is a good source for the future type vocabulary.
- **P3 - `walking-tour` means "explore on foot".** It appears on fields, valleys and pagoda grounds, not just
  guided walks. Either rename the concept (`walking`) or accept the broader meaning. It backs `/experiences/walking-tours`.
- **P4 - Religious places need two layers.** `religion` (theme) + `temple-visit` (experience) + a tradition tag
  (`buddhism`, `folk-religion`, `khmer-culture`). Vietnamese sites often mix Buddhism and folk religion:
  2 of the 4 pagoda sites here were tagged with both, and Bái Đính also has a Mother Goddess cave that was judged secondary.
- **P5 - Legacy experience-duplicate tags are common.** `📸 Photography` was removed from 9 locations.
  After D6 most hero tag rows still carry 2-4 editorial descriptors, which read well as display text but are not taxonomy.
- **P6 - Ethnic culture needs a decision (NC-3)** before the northern-highland batches, where it will appear constantly.

---

## Validation (batch 1)

- `tsc --noEmit`: clean. ESLint on changed files: no new warnings.
- `next build`: success, 257 location pages prerendered.
- `scripts/taxonomy-content-snapshot.ts`: every non-taxonomy field of all 257 locations is byte-identical to the base.
- Location count 257 -> 257, slug order unchanged.
- Visible side effects (all expected):
  - `/experiences/*` counts: trekking 75->74, camping 34->36, kayaking 22->26, culture 118->119, cycling 36->38.
  - `/locations` type filter: new options `communal-house` (2), `rice-fields` (1), `valley` (1). No existing type lost a location.
  - Primary type changed for 4 locations (badge label changed, theme colour unchanged).
  - Card subtitle (`tags[0]`): unchanged for all locations.
  - Destination "What to do" (derived, config untouched): order changes for hoi-an, ly-son, nha-trang, ninh-binh.
    Hội An gains `surfing` (An Bàng offers surfing).

## Code changes made to support the review

- `data/taxonomy/*`: new `proposed` values (see vocabulary table). `CanonicalLocationExperience` type added.
  `ExperienceValue` now = page-backed experiences only (verified identical to the previous 20-value union).
- `tagDisplayLabel()` in `data/taxonomy/tags.ts`, used by the 3 places that render **location** tags
  (location hero, `/locations` card subtitle, province page location cards). Output is unchanged for every legacy label.
- Type labels replace `-` with a space (location hero badge, experience and destination cards), so
  `communal-house` shows as "communal house". Output is unchanged for all single-word types.
- `data/location.ts` `locationTheme`: entries for the new types.
- `scripts/taxonomy-content-snapshot.ts`: read-only proof that only taxonomy fields changed.

Not changed: search index structure, `EXPERIENCE_GROUP_CONFIG`, filter UI, compatibility aliases, strictness of `experiences`/`tags` (still `string[]`).

Pre-existing issue noticed, not changed: `stripLeadingEmoji()` does not strip flag emoji (`🇻🇳 Christmas Bombing 1972` renders with the flag).
