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
