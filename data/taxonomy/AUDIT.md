# Location Taxonomy - Audit & Migration Notes

Status: **Phase 0 (audit) + Phase 1 (architecture) done.** No Location data was changed.
Re-run the numbers at any time with `npm run audit:taxonomy` (read-only).

Snapshot below: 257 locations, audited 2026-09-25.

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
