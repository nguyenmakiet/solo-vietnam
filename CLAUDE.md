# CLAUDE.md

Project-level instructions for AI assistants working in this repository.

## Project Overview

`soloinvietnam.com` - programmatic SEO travel platform targeting Western and Japanese solo travelers in Vietnam.

- **Stack**: Next.js App Router, TailwindCSS, Vercel, Cloudinary (cloud name: `dl5kqhspv`)
- **URL architecture**: `/provinces/[slug]` -> `/destinations/[slug]` -> `/locations/[slug]`
- **Positioning**: neutral data platform (NOT a personal blog). Personal narrative belongs only in `/blog`.

---

## Naming Convention for Locations

This rule controls **slug**, **filename**, **`name` field**, and **`export const`** for every new location file in `data/locations/`.

### The pattern

```
[transliterated-place-name]-[english-category]
```

- **Place name**: transliterated Vietnamese without diacritics (`Bản Đôn` -> `don`, `Thác Hiêu` -> `hieu`, `Phong Nha` -> `phong-nha`).
- **Category**: translated to English (see table below).
- **Drop the Vietnamese category prefix** (`Bản`, `Thác`, `Hồ`...) - it becomes the English suffix instead.

### Example transformation

| Vietnamese name | Slug + filename       | `name` field      | `export const`    |
|-----------------|-----------------------|-------------------|-------------------|
| Bản Đôn         | `don-village`         | `Don Village`     | `donVillage`      |
| Thác Hiêu       | `hieu-waterfall`      | `Hieu Waterfall`  | `hieuWaterfall`   |
| Hang Sơn Đoòng  | `son-doong-cave`      | `Son Doong Cave`  | `sonDoongCave`    |
| Hồ Ba Bể        | `ba-be-lake`          | `Ba Be Lake`      | `baBeLake`        |
| Đèo Hải Vân     | `hai-van-pass`        | `Hai Van Pass`    | `haiVanPass`      |

### Category translation table

**Water features**

| Vietnamese | English suffix |
|------------|----------------|
| Thác       | `-waterfall`   |
| Hồ         | `-lake`        |
| Sông       | `-river`       |
| Suối       | `-stream` / `-spring` |
| Vịnh       | `-bay`         |
| Đầm / Phá  | `-lagoon`      |
| Biển / Bãi biển | `-beach`  |
| Đảo / Hòn  | `-island`      |
| Quần đảo   | `-archipelago` |

**Terrain**

| Vietnamese | English suffix |
|------------|----------------|
| Núi        | `-mountain`    |
| Đỉnh       | `-peak`        |
| Đèo        | `-pass`        |
| Hang / Động | `-cave`       |
| Thung lũng | `-valley`      |
| Cao nguyên | `-plateau`     |
| Đồi        | `-hill`        |
| Ruộng bậc thang | `-rice-terraces` |

**Protected areas / parks**

| Vietnamese | English suffix |
|------------|----------------|
| Vườn quốc gia | `-national-park` |
| Khu bảo tồn thiên nhiên | `-nature-reserve` |
| Khu dự trữ sinh quyển | `-biosphere-reserve` |
| Công viên  | `-park`        |
| Vườn       | `-garden`      |

**Settlements**

| Vietnamese | English suffix |
|------------|----------------|
| Bản / Buôn / Làng / Thôn | `-village` |
| Phố cổ     | `-old-quarter` / `-ancient-town` |
| Khu phố    | `-quarter`     |
| Thành phố  | `-city` (rarely needed in slugs) |

**Religious / spiritual**

| Vietnamese | English suffix |
|------------|----------------|
| Chùa       | `-pagoda`      |
| Đền        | `-temple`      |
| Nhà thờ    | `-cathedral` / `-church` |
| Tháp       | `-tower` / `-stupa` |
| Lăng       | `-mausoleum` / `-tomb` |
| Miếu       | `-shrine`      |

**Civic / architectural**

| Vietnamese | English suffix |
|------------|----------------|
| Quảng trường | `-square`    |
| Cầu        | `-bridge`      |
| Chợ        | `-market`      |
| Dinh       | `-palace`      |
| Thành / Thành cổ | `-citadel` / `-ancient-citadel` |
| Cố đô      | `-ancient-capital` |
| Bảo tàng   | `-museum`      |
| Nhà tù     | `-prison`      |
| Pháo đài   | `-fortress`    |
| Nhà hát    | `-opera-house` / `-theater` |
| Ga         | `-station`     |
| Bến        | `-pier` / `-wharf` |

### Edge cases

- **Already-English names** (rare): keep as-is. e.g. `train-street` stays `train-street`.
- **Compound features**: pick the most specific category. Hieu Waterfall flows through Hieu Village -> two separate location files (`hieu-waterfall.ts` and `hieu-village.ts`).
- **Diacritics in `address`, `seoDescription`, and `content.intro`**: keep Vietnamese diacritics in the address field and use the Vietnamese name parenthetically once in `seoDescription` and `content.intro` for SEO. Everywhere else, use the English-translated form.
- **Existing files don't need to be renamed.** Only new files going forward must follow this rule.

---

## Content Rules

- Always use hyphen (`-`) not em dash (`—`)
- Tone: informative, neutral, data-driven for location pages
- Blog MDX components: `<CloudImage publicId="">`, `<Warning>`, `<Tip>`, `<ScamCard>`
- Blog frontmatter: `title`, `description`, `date`, `author`, `tags`, `category`, `location`, `difficulty`, `duration`, `heroImage`

---

## Location File Structure

- Each location is a `.ts` file with structured data fields
- Fields include: `highlights`, `thingsToKnow`, `visitorTips`, `FAQ`, `sentiment`, `bestMonths` (number[]), nearby locations, similar experiences
- AI insights generated via Outscraper pipeline: max 30 reviews/location, min 30 words/review, prioritizing 3-4 star ratings
- **Anti-hallucination rule**: if data is uncertain, leave field empty or flag with `// TODO: verify` - never fabricate

### When generating new location `.ts` files

- Output valid TypeScript matching the `Location` type at `data/location.ts`
- Do not hallucinate Google ratings, review counts, or coordinates
- Leave `lat`/`lng` as empty strings with `// TODO: verify` if not confirmed
- Use `heroUrl("...-placeholder")` with `// TODO: upload and replace` for unconfirmed Cloudinary publicIds
- Skip the `insights` block until Outscraper data is available

### Taxonomy fields (frozen contract - never invent values)

The four taxonomy fields are a **frozen data contract** (Phase 2 freeze). Every value MUST come from the registry in `data/taxonomy/`. Do not invent values such as `"viewpoint"` or `"photo-spot"`. A new value needs an explicit owner decision and a registry entry first. `type` and `categories` fail TypeScript on an unknown value; `experiences` and `tags` fail `npm run audit:taxonomy`.

| Field | Source file | Allowed values |
|-------|-------------|----------------|
| `type` | `data/taxonomy/types.ts` -> `LOCATION_TYPES` (re-exported as `LocationType` from `data/location.ts`). `type[0]` is the primary type and sets the theme colour | Specific: `beach`, `island`, `bay`, `river`, `lake`, `mountain`, `forest`, `waterfall`, `cave`, `town`, `city`, `market`, `temple`, `pagoda`, `tomb`, `citadel`, `museum`, `communal-house`, `valley`, `rice-fields`, `national-park`, `bridge`, `building`, `village`, `fortress`, `prison`, `station`, `church`, `old-quarter`, `palace`, `pass`, `lighthouse`, `cape`, `street`, `historic-site`, `monument`, `theme-park`, `stream`, `rock-formation`, `farmland`, `cable-car`, `nature-reserve`, `grassland`, `sand-dunes`. Deprecated broad types (never use): `nature` -> category `nature`, `cultural` -> category `culture`, `history` -> category `history`, `heritage` / `landmark` / `attraction` -> no replacement (use a specific type) |
| `categories` | `data/taxonomy/categories.ts` -> `LOCATION_CATEGORIES` (re-exported as `LocationCategory`) | Themes: `nature`, `culture`, `history`, `architecture`, `religion`, `food`, `coast`, `entertainment`. Editorial badges: `hidden-gem`, `must-see`, `iconic` |
| `experiences` | `data/taxonomy/experiences.ts` -> `LOCATION_EXPERIENCES`. `ExperienceValue` (`data/experiences.ts`) = the page-backed subset | Canonical with an `/experiences/*` page: `beach`, `trekking`, `camping`, `caving`, `snorkeling`, `kayaking`, `food`, `culture`, `history`, `photography`, `markets`, `nightlife`, `walking-tour`, `cycling`, `boat-tour`, `cable-car`, `homestay`, `wildlife`, `motorcycling`, `shopping`. Canonical without a page: `swimming`, `surfing`, `fishing`, `kitesurfing`, `museum-visit`, `diving`, `hiking`, `religious-site-visit`. Proposed (valid, not in "What to do"): `paragliding`, `rock-climbing`. Deprecated (never use): `temple-visit` |
| `tags` | `data/taxonomy/tags.ts` -> `LOCATION_TAGS` | Registered tags: `vietnam-war`, `french-influence`, `khmer-culture`, `cham-culture`, `champa-heritage`, `buddhism`, `medieval-vietnam`, `east-sea-sovereignty`, `folk-religion`, `ethnic-minority-culture`, `khmer-architecture`, `cao-dai`, `hmong-culture`, `tay-culture`, `thai-culture`, `catholicism`, `taoism`, `nguyen-dynasty`, `lolo-culture`, `hinduism`, `giay-culture`, `confucianism`, `french-colonial-era`, `french-architecture`. Any other tag string is a legacy display label (emoji + text), kept for display only |

**Common mismatches to avoid:**
- `"nature"` is a category (the broad type is deprecated), NOT an experience - do not put it in `type` or `experiences`
- `"viewpoint"` does not exist in any registry - for a scenic lookout use the landform type (`mountain`, `pass`, `cape`, `rock-formation`, `valley`...) plus `categories: ["nature"]`. Never use the deprecated broad types (`nature`, `landmark`...) for it
- `"photo-spot"` does not exist - use `categories: ["iconic"]` or `["must-see"]` for photogenic locations
- `hiking` and `trekking` are separate sibling concepts - a location may have both
- The six broad types (`nature`, `cultural`, `history`, `heritage`, `landmark`, `attraction`) are `deprecated` - every location needs a specific place type; the theme goes in `categories`. E.g. `"history"` -> `categories: ["history"]` (and the `history` experience where it applies), with a specific place type such as `historic-site`, `citadel` or `museum`
- Chùa → `pagoda` even when English content calls it a 'temple'. Classification follows the site's religious identity, not the generic English translation.
- `"temple-visit"` is `deprecated` - use `"religious-site-visit"` for any active place of worship (the tradition goes in a religion tag such as `buddhism`)
- `champa-heritage` (historical Champa) and `cham-culture` (living Cham culture) are distinct. So are `french-colonial-era`, `french-influence` and `french-architecture` - never infer one from another
- Append registered tags after the legacy display labels - `tags[0]` is the `/locations` card subtitle
- Official designations (UNESCO, Ramsar, national relic...) go in `data/taxonomy/recognitions.ts`, not in `tags`

**Before writing a new location file**, re-read `data/taxonomy/` (types, categories, experiences, tags) to confirm the current valid values, and run `npm run audit:taxonomy` - it must pass.

The taxonomy is frozen - see `data/taxonomy/AUDIT.md` ("Frozen contract") for the rules and validation. History: `data/taxonomy/CONTENT-REVIEW.md` (location-by-location review, owner rules R1-R31, decisions D1-D12), `data/taxonomy/CONSOLIDATION-PROPOSAL.md` and `data/taxonomy/PHASE2-LOG.md` (Phase 2 decisions). Do not bulk-rewrite existing Location taxonomy values.

---

## Destinations Architecture

### Core principle

**Destination = editorial layer + aggregation layer from locations.**
**Location files are the source of truth. Destination files are the editorial layer.**

- `bestMonths`, `whatToDo`, and `highlights` are **never hardcoded** in destination files
- They are **derived at runtime** via `deriveFromLocations()` in `data/destinations/index.ts`
- Destination files only hardcode editorial content that cannot be derived

### File structure

Each destination lives in its own file:

```
data/destinations/
  types.ts          ← Destination type + helper types (do not modify lightly)
  index.ts          ← Re-exports all destinations + deriveFromLocations()
  ha-giang-loop.ts
  sapa.ts
  cat-ba.ts
  ...
```

Do **not** use the old single-file `data/destinations.ts`. It has been replaced.

### Destination type — what to hardcode vs derive

| Field | Where | Notes |
|-------|-------|-------|
| `slug`, `name`, `region`, `province`... | Hardcode | Core identity |
| `description`, `tagline`, `heroImage` | Hardcode | Editorial |
| `gettingThere: TransportOption[]` | Hardcode | Flexible, not fixed to 3 cities |
| `itineraries: Itinerary[]` | Hardcode | Editorial — human-ordered stops |
| `cost: CostRange` | Hardcode | budget / midRange / comfortable |
| `bestTimeSummary` | Hardcode | Short string for card/hero display |
| `travelStyle[]` | Hardcode | Classification tags |
| `bestMonths` | **Derived** | frequency(location.bestMonths[]) >= 30% |
| `whatToDo` | **Derived** | group(location.experiences[]) via EXPERIENCE_GROUP_CONFIG |
| `highlights` | **Derived** | top location.insights.highlights[] as Highlight[] |
| `bestMonthsFallback` | Fallback only | Used when derived result is empty |
| `whatToDoFallback` | Fallback only | Used when derived result is empty |
| `highlightsFallback` | Fallback only | Used when derived result is empty |

### deriveFromLocations() logic

```ts
deriveFromLocations(destinationSlug, allLocations): DerivedDestinationData
```

- **bestMonths**: months appearing in >= 30% of matching locations, sorted ascending
- **whatToDo**: experiences grouped via `EXPERIENCE_GROUP_CONFIG`, sorted by `order`
- **highlights**: `{ locationSlug, text }[]` from `location.insights.highlights[]`, max 10, deduplicated
- **locationCount**: count of matching locations

### Fallback logic (in UI component, not in deriveFromLocations)

```ts
const bestMonths = derived.bestMonths.length > 0
  ? derived.bestMonths
  : destination.bestMonthsFallback ?? []

const whatToDo = Object.keys(derived.whatToDo).length > 0
  ? derived.whatToDo
  : destination.whatToDoFallback ?? {}

const highlights = derived.highlights.length > 0
  ? derived.highlights
  : destination.highlightsFallback ?? []
```

Fallback fields should be removed as location data becomes complete.

### EXPERIENCE_GROUP_CONFIG

Defined in `data/destinations/types.ts`. Controls how `location.experiences[]` maps to UI categories:

| Group | Label | Experiences |
|-------|-------|-------------|
| `nature` | Nature & Outdoors | trekking, hiking, swimming, kayaking, cycling, snorkeling, diving, camping, caving, wildlife, fishing |
| `culture` | Culture & History | culture, homestay, photography, history, walking-tour, museum-visit, religious-site-visit |
| `activities` | Activities & Adventure | motorcycling, surfing, kitesurfing, cable-car |
| `chill` | Chill & Relax | beach, boat-tour |
| `food-and-local-life` | Food & Local Life | food, markets, nightlife, shopping |

To add a new category or experience mapping, update `EXPERIENCE_GROUP_CONFIG` in `types.ts` only — do not hardcode groupings in components.
Values must be **canonical** experiences (`data/taxonomy/experiences.ts`) - proposed and deprecated values stay out until promoted; every canonical experience must be in exactly one group (checked by `npm run audit:taxonomy`).

### Adding a new destination

1. Create `data/destinations/[slug].ts` — export a named const matching the `Destination` type
2. Add import and export to `data/destinations/index.ts`
3. Add to the `destinations[]` array in `index.ts`
4. Do NOT add to the old `data/destinations.ts`

### After adding a new location file

1. Add import to `data/all-locations.ts` (alphabetical)
2. Add to the `allLocations` array (alphabetical)
3. Set `destination` field on the location to the correct destination slug — this is how `deriveFromLocations()` finds it

---

## AI Workflow for This Project

| Task | Tool |
|------|------|
| Research + content synthesis | Claude chat |
| Schema design + architecture decisions | Claude chat |
| Draft new destination `.ts` files | Claude chat |
| Refactor code, update imports, fix TypeScript | Claude in VS Code |
| Write `deriveFromLocations()` and helpers | Claude in VS Code |
| File organization, rename, batch local tasks | Cowork |

---

## Scam Content

25 confirmed scams across 5 categories: Transport, Money, Street, Service, Authority.
Use `<ScamCard>` component in blog only.

---

## Blog Workflow

1. Owner writes raw draft
2. Claude edits for structure and SEO
3. Owner re-injects personal voice

Key: preserve authenticity, don't over-polish.

---

## Owner Context

- Vietnamese, based in Ho Chi Minh City
- Firsthand experience at 200+ Vietnam locations
- JLPT N2 Japanese (future Japanese content planned)
- Communicates in English/Vietnamese for this project