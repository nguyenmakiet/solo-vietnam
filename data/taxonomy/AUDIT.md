# Location Taxonomy - Audit & Migration Notes

Status: **FROZEN (Phase 2 freeze).** The taxonomy is a stable data contract enforced by `npm run audit:taxonomy`.
The contract is below. The Phase 0/1 audit that follows it is kept as history (its numbers are from before the content review).
History: [CONTENT-REVIEW.md](./CONTENT-REVIEW.md) (review, R1-R31, D1-D12), [CONSOLIDATION-PROPOSAL.md](./CONSOLIDATION-PROPOSAL.md),
[PHASE2-LOG.md](./PHASE2-LOG.md) (owner decisions and before/after reports).

## Frozen contract

### Source of truth

The registries in `data/taxonomy/` are the single source of truth for the four Location taxonomy fields:

| Field | Registry | Values at freeze | Notes |
|-------|----------|------------------|-------|
| `type` | `types.ts` `LOCATION_TYPES` | 44 canonical (specific) · 6 deprecated (the broad types) | Each entry carries its theme colour (`theme`). `locationTheme` is derived from it. `type[0]` is the primary type (badge + colour) |
| `categories` | `categories.ts` `LOCATION_CATEGORIES` | 11 canonical: 8 themes + 3 editorial badges | Not rendered in the UI |
| `experiences` | `experiences.ts` `LOCATION_EXPERIENCES` | 28 canonical (20 page-backed, 8 without a page) · 2 proposed · 1 deprecated | `page` = the `/experiences/*` slug. `ExperienceValue` = the page-backed subset |
| `tags` | `tags.ts` `LOCATION_TAGS` | 25 canonical · 1 proposed (Tags Phase 2: `early-modern-vietnam`, `independence-movement` promoted) | Any unregistered tag string is a legacy display label (`legacy-display`). Semantics: [TAGS-DEFINITIONS.md](./TAGS-DEFINITIONS.md) |

Official designations are not taxonomy values: they live in the side-car `recognitions.ts` (93 records, all `verified: false`).

### Statuses

| Status | Meaning | Values at freeze |
|--------|---------|------------------|
| `canonical` | Approved, stable. Allowed in Location data | every other registered value |
| `proposed` | Registered and valid, intentionally pending an owner decision. Not in the canonical UI grouping (`EXPERIENCE_GROUP_CONFIG`) | experiences: `paragliding`, `rock-climbing`; tags: `french-influence` (not assigned to any Location). `early-modern-vietnam` and `independence-movement` were promoted to `canonical` in Tags Phase 2 |
| `deprecated` | Not allowed in Location data. Exactly one of: `replacedBy` (same field), `replacedByCategory` (a type whose concept moved to categories) or `noReplacement` (a broad type with no equivalent; the reason) | experiences: `temple-visit` → `religious-site-visit`; type: the six broad types (table below) |
| `legacy-display` | Tags only. A free-form label kept for display/compatibility (hero chips, `tags[0]` card subtitle). Never used for discovery | 754 distinct labels (827 uses) |

All six broad types are `deprecated` and used by no Location: `history` in migration step 1 (PHASE2-LOG §11), `nature`,
`cultural`, `heritage`, `landmark` and `attraction` in step 2 (PHASE2-LOG §13). Their replacement is the owner decision below
(D1', D1''), enforced by the audit:

| Broad type | Replacement |
|------------|-----------------------------|
| `history` | `replacedByCategory: "history"` |
| `nature` | `replacedByCategory: "nature"` |
| `cultural` | `replacedByCategory: "culture"` |
| `heritage` | `noReplacement` - no type or category equivalent (designations live in `recognitions.ts`) |
| `landmark` | `noReplacement` - generic; category `iconic` is not equivalent |
| `attraction` | `noReplacement` - generic |

`/locations` keeps old URLs working: `?type=nature` and `?type=cultural` alias to `?category=nature` / `?category=culture`;
`?type=history|heritage|landmark|attraction` are ignored.

Relationships (existing, frozen):
- `broader` (narrower → broader, never used to rewrite data): `stream` → `river`, `rice-fields` → `farmland`.
- Siblings, never aliased or nested: `hiking` / `trekking`; `champa-heritage` (historical Champa, `historical-period`) /
  `cham-culture` (living Cham culture, `ethnic-culture`); `french-colonial-era` / `french-influence` / `french-architecture`
  (never inferred from each other).
- Aliases (`LEGACY_TAG_ALIAS_TABLE`, compatibility layer only; nothing in the UI uses them):
  `equivalent` = true 1:1, safe to replace a label; `implies` = the label implies the tag but says more.
  `french-colonial` implies `french-colonial-era` (R21 fix); no alias targets `french-influence`.
  `LEGACY_EXPERIENCE_ALIASES` holds equivalents only (`walking-tours` → `walking-tour`).

### Rules for Location data

1. Every `type`, `categories` and `experiences` value is a registered key. Every `tags` value is a registered key or a legacy display
   label; a key-like string (`lowercase-hyphenated`) that is not registered is an error (a misspelt tag).
2. No `deprecated` value in any field.
3. No duplicate value within a field.
4. New registered tags are appended after legacy labels (`tags[0]` is the card subtitle).
5. Changing the vocabulary (a new value, a status change, a new relationship) needs an explicit owner decision. Then update the
   registry, the frozen lists in `scripts/audit-taxonomy.ts`, this contract and CLAUDE.md together.

### Experience definitions (owner-approved, after the Experience audit)

Assign an experience only when the Location content supports it at this location - not for activities at other places,
prohibited or hypothetical activities, or transport-only mentions.

| Experience | Use when | Do not use when |
|------------|----------|-----------------|
| `hiking` | A day hike or trail walk | The effort is only a staircase or a climb to a viewpoint, however demanding (physical effort is a separate follow-up signal - CONTENT-BACKLOG.md §4) |
| `trekking` | A demanding multi-hour or multi-day trek | The walk is only stairs, a climb to a viewpoint, or walking around a site. Applies to new assignments: the `trekking` values that existed at the Experience audit are kept by owner decision, even where they would not qualify today |
| `walking-tour` | Walking is the primary way to explore a substantial area or route: old quarters, streets, villages, pedestrian areas, heritage routes, large heritage complexes (e.g. Huế Imperial City, Mỹ Sơn) | Visitors can merely walk around a single attraction |
| `photography` | The location has photography-focused value significant enough to be a reason/activity for visiting: iconic viewpoints or compositions, sunrise/sunset, landscape, architecture, wildlife/bird, street/people photography, distinctive photo spots | The place is merely scenic or attractive, or tourists can normally take photos there |
| `culture` | The traveler can actively experience living culture: ethnic village life, crafts, performances, festivals, local traditions | Only a theme or backdrop - category `culture` remains the broader editorial classification |
| `homestay` | Staying in a homestay is an actual traveler experience offered at the location | The content only mentions homestays or accommodation options |

`hiking` and `trekking` stay siblings: a location may have both when it offers both.

### Tag definitions (owner-approved, Tags Phase 1)

Full semantics and boundaries for every registered tag: [TAGS-DEFINITIONS.md](./TAGS-DEFINITIONS.md).

- **T1 - Question.** A tag names the history, faith, people or foreign influence that is a reason to visit. It is not a place kind (`type`), a theme (`categories`), an activity (`experiences`) or a designation (`recognitions.ts`).
- **T2 - Focus.** Focus, not background: being built in a period, standing in a region, or a passing mention does not qualify. For period tags, a secondary historical layer qualifies only when the content presents it as a distinct reason to visit. Tags Phase 2 exception, `french-colonial-era` only: it applies when French colonial history or surviving colonial-era heritage is a meaningful, explicitly documented part of the location's historical identity (TAGS-DEFINITIONS §7.1).
- **Folk religion.** `folk-religion` follows the worship practised at the site, not the body that administers it (TAGS-DEFINITIONS §7.3).
- **T3 - Content.** Supported by the location's own content.
- **T4 - Independence.** No tag implies another: the French trio, `champa-heritage` / `cham-culture` / `hinduism`, and the ethnic tags are each decided on their own evidence.
- **T5 - Coexistence.** Tags coexist with `type`, `categories` and `experiences` and replace none of them.
- **T6 - Order.** A registered tag is never at `tags[0]` (D7).

Period tags are consecutive, not overlapping:

| Tag | Span |
|---|---|
| `medieval-vietnam` | 10th c.-1527 |
| `early-modern-vietnam` | 1527-1802 |
| `nguyen-dynasty` | 1802-1945, not the Nguyễn lords |
| `french-colonial-era` | c. 1858-1954, overlaps `nguyen-dynasty` by design |
| `independence-movement` | centred on 1930-1954 |
| `vietnam-war` | 1955-1975 |

`champa-heritage` is the Champa civilisation, parallel to this sequence.

Ethnic rules:
- **E1 - One group.** One tagged group is the draw → its tag only.
- **E2 - Several groups.** Several groups together → `ethnic-minority-culture`, plus a per-group tag only for a group with its own named draw.
- **E3 - Fallback.** A group without a tag is the draw → `ethnic-minority-culture`. Never invent a per-group tag.
- **E4 - At the location.** Villages on the approach road, statistics or legends do not qualify.
- **E5 - Majority culture.** Kinh culture is not tagged.
- **E6 - Tag vs experience.** The ethnic tag (which people) is independent of the `culture` experience (active participation).

Legacy emoji labels are editorial display chips: they are out of scope for these rules and are not renamed, migrated or removed.

### `EXPERIENCE_GROUP_CONFIG` (destination "What to do")

`data/destinations/types.ts`. It contains **canonical experiences only**, and every canonical experience appears in exactly one group.
Group order at freeze: `nature` (1), `culture` (2), `activities` (3), `chill` (4), `food-and-local-life` (5).

### Validation - `npm run audit:taxonomy`

Read-only. It prints the usage report and then enforces the contract. It **exits non-zero** if:

| Check | Fails when |
|-------|------------|
| Location values | a Location uses an unregistered `type`/`categories`/`experiences` value, a key-like unregistered tag, or a duplicate value |
| Deprecated values | a Location uses any `deprecated` value |
| Frozen statuses | the set of `proposed` or `deprecated` values in any registry differs from the frozen list |
| Registry integrity | an invalid status, a `deprecated` value without exactly one of `replacedBy` / `replacedByCategory` / `noReplacement`, `replacedBy` on a non-deprecated value or pointing to a non-canonical value, `replacedByCategory` outside `type`, on a non-deprecated value or pointing to a non-canonical category, `noReplacement` outside the broad types, on a non-deprecated value or without a reason, a `broader` target that is missing/non-canonical/self/cyclic, or a `page` on a non-canonical value or outside experiences |
| Public pages | a registry `page` disagrees with `data/experiences.ts` (slug or count) |
| `EXPERIENCE_GROUP_CONFIG` | a non-canonical (unregistered, proposed, deprecated) experience is listed, a canonical experience is missing, or one is in several groups |
| Broad types | the broad type set differs from the owner table above, a broad type is not `deprecated`, or it has another replacement than the table |
| Aliases | an alias key shadows a registered key, an alias targets a non-canonical value, or a tag alias kind is not `equivalent`/`implies` |
| Owner invariants | `french-colonial` does not imply `french-colonial-era`; any alias targets `french-influence`; the sibling pairs above become aliased, nested or replaced, or stop being canonical; `temple-visit` is not replaced by `religious-site-visit` |
| Recognition side-car | a record points to an unknown location slug |

Run it before committing any Location file.

---

# Phase 0 / Phase 1 audit (history)

Snapshot below: 257 locations, audited 2026-09-25, **before** the content review and Phase 2.

## Target semantics

| Field | Question | Example |
|-------|----------|---------|
| `type` | What is this place? | `temple`, `beach`, `museum` |
| `categories` | Which broad travel themes? | `religion`, `culture`, `architecture` |
| `experiences` | What can a traveler do here? | `snorkeling`, `temple-visit`, `photography` |
| `tags` | Which specific interest / influence / period? | `khmer-culture`, `french-influence`, `vietnam-war` |

Metadata (`label`, `group`, `status`, `filterable`, `description`) lives in `data/taxonomy/*`, never on Location.

## Architecture (Phase 1)

```
data/taxonomy/
  shared.ts       TaxonomyMeta, TaxonomyStatus, toTaxonomyKey() (formatting-only)
  types.ts        LOCATION_TYPES        -> LocationType
  categories.ts   LOCATION_CATEGORIES   -> LocationCategory
  experiences.ts  LOCATION_EXPERIENCES  -> LocationExperience + LEGACY_EXPERIENCE_ALIASES
  tags.ts         LOCATION_TAGS         -> LocationTag + LEGACY_TAG_ALIASES
  index.ts        re-exports + normalizeLocationTaxonomy()
scripts/audit-taxonomy.ts   read-only report (future Phase 5 validation)
```

- `LocationType`, `LocationCategory` (`data/location.ts`) and `ExperienceValue` (`data/experiences.ts`)
  are now derived from the taxonomy consts. The unions are **identical** to the previous ones
  (verified with a type-level equality check), so every existing import and data file compiles unchanged.
- `Location.experiences` and `Location.tags` stay `string[]` (transitional). Strict unions would break
  existing data.
- Nothing in the UI consumes the taxonomy layer yet.

## Findings

### 1. `type` - 23 values, 594 uses, all in the existing union

- 255/257 locations use an array (up to 5 values). `type[0]` drives the theme colour and the badge label.
- Theme-like values that don't answer "what is this place?" (marked `under-review`):

| Value | Uses | Issue |
|-------|------|-------|
| `nature` | 138 | broad theme -> future category `nature` |
| `cultural` | 62 | broad theme -> future category `culture` |
| `landmark` | 50 | generic |
| `heritage` | 50 | designation/theme |
| `attraction` | 35 | generic |
| `history` | 31 | broad theme -> future category `history` |

- Place types present in the target model but missing today: `village`, `building`, `church`/`cathedral`,
  `pass`, `valley`, `national-park`, `bridge`, `prison`, ... (the CLAUDE.md naming table already lists these
  as slug suffixes). Not added - vocabulary review pending.

### 2. `categories` - SEMANTIC CONFLICT

- Current values are **editorial badges**, not themes: `hidden-gem` (13), `must-see` (3), `iconic` (2).
  Only 18 locations have a non-empty value.
- Not rendered anywhere in the app today (no component reads `location.categories`).
- **Decision needed** before any theme value (`nature`, `culture`, `history`, `architecture`, `religion`, `food`)
  is added: where do editorial badges go? Options:
  1. Keep badges inside `categories` alongside themes, distinguished by `group: "editorial"` (zero migration).
  2. Move badges to a separate editorial field later (touches 18 files; adds a field).

### 3. `experiences` - 34 values, 980 uses

- 20 canonical values (existing `ExperienceValue`) cover 943 uses.
- Alias created (unambiguous): `walking-tours` -> `walking-tour` (1 use, `tac-say-church`).
- Unmapped - need a vocabulary decision:

| Value | Uses | Proposal |
|-------|------|----------|
| `swimming` | 21 | add as canonical (in target model) |
| `nature` | 3 | not an experience - it is a type/category; remove on migration |
| `diving` | 2 | add as canonical |
| `surfing` | 1 | add as canonical |
| `fishing` | 1 | add as canonical |
| `kitesurfing` | 1 | add as canonical (spelling to decide: `kitesurfing` vs `kite-surfing`) |
| `paragliding` | 1 | add as canonical |
| `rock-climbing` | 1 | add as canonical |
| `hiking` | 1 | `trekking` is canonical today (75 uses + `/experiences/trekking` URL). Decide: alias `hiking -> trekking`, or two separate values |
| `watersport` | 1 | too generic - split into specific activities |
| `spirituality` | 1 | theme -> category `religion` |
| `architecture` | 1 | theme -> category `architecture` |
| `picnic` | 1 | decide |

- Theme-like canonical experiences that overlap with future categories: `culture` (118), `history` (78),
  `food` (24), `beach` (44). They have `/experiences/*` pages, so they stay. Long-term they may become
  categories + more specific experiences (`museum-visit`, `street-food`, `swimming`, ...).

### 4. `tags` - 778 unique labels, 1013 uses

- Free-form display strings with a leading emoji (`"🏛️ French Colonial"`), rendered in the hero, cards and
  search index via `stripLeadingEmoji()`. 5 locations have no tags.
- 732 unique after stripping emoji + lowercasing: 37 labels exist in several variants differing only by emoji or letter case (`🚣/🚤/🚢/🛶 Boat Tour`,
  `🏯/🎑/🏛️/🌊/🪨 UNESCO Heritage`, ...).
- Many tags duplicate experiences (`📸 Photography` 118, `🏕️ Camping` 11, `🥾 Trekking`, `🤿 Snorkeling` ...).
- Most tags are editorial descriptors (`👁️ 50m Natural Rock Hole`) - they are display content, not taxonomy.
- Proposed canonical seed (grounded in existing labels, `status: "proposed"`):
  `vietnam-war`, `french-influence`, `khmer-culture`, `cham-culture`, `buddhism`.
  12 legacy labels (13 uses) resolve to them via `LEGACY_TAG_ALIASES`.
- Deliberately NOT mapped (ambiguous): `War History`, `War Memorial`, `Colonial Architecture`,
  `Colonial Heritage`, `French Colonial Prison`, `UNESCO Heritage`, `Nguyễn Dynasty`, `Mạc Dynasty`.
- Candidate tags for review: `nguyen-dynasty` / `imperial-vietnam`, `unesco-heritage`, `ethnic-minority-culture`,
  `hindu-culture`, `catholicism`, `gothic-architecture`, `colonial-architecture`, `east-sea-sovereignty`.
  No data for `soviet-influence` or `medieval-vietnam` yet.
- Open question: canonical tags probably need to live **alongside** the display labels (the labels are visible
  content), not replace them.

### 5. Existing code that depends on specific values

| Place | Dependency |
|-------|------------|
| `data/location.ts` `locationTheme` | `Record<LocationType, ...>` - exhaustive, TS flags any new type |
| `app/locations/LocationsClient.tsx` | shortcut buttons use `beach`, `island`, `mountain`, `cave`, `waterfall`, `cultural` (type) and `trekking`, `photography` (experience); filters list every raw type/experience |
| `app/experiences/*`, `app/map/page.tsx`, location page "Similar Experiences" | match `location.experiences` against `experiences[].value` |
| `scripts/build-search-index.ts` | merges `type` + raw `tags` into search tags |
| `data/destinations/types.ts` `EXPERIENCE_GROUP_CONFIG` | see below |

**Pre-existing mismatch (not changed):** `EXPERIENCE_GROUP_CONFIG` (drives destination "What to do") lists
values that no location uses (`waterfall`, `adventure`, `motorbiking`, `climbing`, `kite-surfing`, `cafe`,
`sunset`, `cruise`) and omits 11 canonical values (`camping`, `caving`, `food`, `markets`, `nightlife`,
`walking-tour`, `boat-tour`, `cable-car`, `wildlife`, `motorcycling`, `shopping`), which are silently
dropped from derived `whatToDo`. Fixing it changes destination pages, so it is left for a separate decision
(it could later be derived from `LOCATION_EXPERIENCES[*].group`).

## Next phases

- Phase 2: review the proposals above and promote values to `canonical`.
- Phase 3: extend alias tables only for decided equivalences.
- Phase 4: migrate Locations file by file (new/edited files first).
- Phase 5: turn `audit-taxonomy` into a CI check once unmapped counts reach zero.
- Phase 6: discovery/filter UI built on `group` + `filterable`.
- Phase 7: narrow `experiences`/`tags` to the canonical unions and delete the alias tables.
