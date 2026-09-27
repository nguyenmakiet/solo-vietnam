# Location Architecture - Phase 0 Audit (AUDIT ONLY)

**Status: factual inventory for owner review.** Nothing was changed. No Location data, schema, taxonomy, application code, filter, URL, search index, content or configuration was modified. This report records the current implementation only. It does not propose a schema, rename, merge, create, delete or migrate anything.

| Item | Value |
|---|---|
| Baseline | `main` b188819 (merge of PR #11), 2026-09-27 |
| Canonical type | `data/location.ts` (`Location`, `LocationInsights`, `RichSection`, `ContentBlock`) |
| Data | 257 files in `data/locations/*.ts`, aggregated in `data/all-locations.ts` (`allLocations`, `activeLocations`) |
| Method | Runtime dump of `allLocations` via `tsx` (every field and nested path, with value types and emptiness); source reads of every consumer; cross-reference checks against destinations, provinces, the Outscraper pipeline and hard-coded links |

---

## 1. Executive summary

1. **One canonical type, strictly enforced.** Every Location file declares `export const x: Location = {...}`, so TypeScript's excess-property check guarantees that **no data field exists outside the type**. The type is looser than the data, though:
   - 9 fields typed optional are present on every record;
   - two unions allow shapes no record uses (`type` as a single string, `status: "active"` and `"seasonal"`);
   - `streetView.lat` and `streetView.lng` are never used in data.
2. **Three different "active" definitions are in use**, so the same record can appear or disappear depending on the surface:

   | Surface | Which Locations |
   |---|---|
   | `activeLocations` | status absent / `active` / `seasonal` |
   | search index | everything except `closed` and `unverified` |
   | detail pages, sitemap, nearby, province map | all 257, including 6 `unverified` stubs |

3. **Several fields carry more than one job.**
   - `seoDescription` is not the HTML meta description (that is templated). It is rendered as visible hero text, card fallback text and the search description.
   - `tags[0]` is the listing-card subtitle.
   - `destination` is both a relation key and a display label (`replace(/-/g," ")`).
   - `type[0]` sets the theme colour.
4. **Coordinates are dual-typed.** 204 records have numbers and 53 have numeric strings, and there are four separate `toDecimal`/`parseFloat` implementations. `mapUrl` coordinates differ from `lat`/`lng` by more than 0.01° in 24 records, and `streetView` points differ by more than 0.05° in 6.
5. **Cross-reference drift.**
   - 13 destination itinerary stop slugs point to no Location.
   - 9 stops point to non-active Locations.
   - 3 Locations use province slug `ba-ria-vung-tau`, which is not in `data/provinces.ts`.
   - 6 active Hue Locations (province `hue`) have no region in the `/locations` region filter, which maps `thua-thien-hue`.
6. **Pipeline divergence.**
   - `insights` in 192 of the 194 Location files that have a matching Outscraper JSON no longer equal that JSON (files were edited after injection).
   - 50 Locations have insights but no JSON.
   - `inject_insights.py` resolves files by slug, so the 2 filename/slug mismatches cannot be injected.
7. **Low structural variance otherwise.** 256 of 257 records share one `content` shape; only `ba-den-mountain` uses `richSections`.

## 2. Current canonical Location schema

Source: `data/location.ts` (the taxonomy unions come from `data/taxonomy/*`).

```ts
type Location = {
  slug: string
  status?: "active" | "closed" | "seasonal" | "unverified" | "temporarily-closed" | "seasonally-closed"
  statusNote?: string
  name: string
  updatedAt?: string            // comment: ISO "YYYY-MM-DD"
  provinces: string[]
  destination?: string
  lat: number | string
  lng: number | string
  address: string
  type: LocationType | LocationType[]
  categories?: LocationCategory[]
  experiences: string[]
  tags: string[]
  entranceFee?: string
  openingHours?: string
  bestTime: string
  bestMonths?: number[]
  mapUrl: string
  streetView?: { lat?: number | string; lng?: number | string; embedUrl?: string }
  heroImage?: string
  gallery: string[]
  tips: string[]
  seoDescription: string
  content: { intro?: string; howToGetThere?: string; whatToExpect?: string; travelTips?: string; richSections?: RichSection[] }
  insights?: LocationInsights
}
type LocationInsights = {
  highlights: string[]
  thingsToKnow: { crowds: string|null; difficulty: string|null; safety: string|null; accessibility: string|null; seasonal: string|null }
  visitorTips: string[]
  faq: { question: string; answer: string }[]
  sentiment: { positive: string; negative: string|null }
}
type RichSection = { id: string; label: string; title: string; blocks: ContentBlock[] }
type ContentBlock =
  | { type: "heading"; text; icon? } | { type: "paragraph"; text } | { type: "bullets"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] } | { type: "callout"; variant: "info"|"warning"|"tip"; text; title? }
  | { type: "quickfacts"; facts: { label; value; icon? }[] } | { type: "divider" }
```

Related exports:
- `locationTheme: Record<LocationType, LocationTheme>`, derived from `LOCATION_TYPE_THEME` in `data/taxonomy/types.ts`.
- `experiences` and `tags` are typed `string[]`, but are validated against the frozen registries by `npm run audit:taxonomy`, not by TypeScript.

No runtime schema exists (no zod or JSON Schema). No field has a default value in the type. Defaults are applied ad hoc by consumers (§5).

## 3. Full field inventory

Presence and emptiness are over all **257** records (244 active). "Empty" means `""`, `[]`, `{}` or `null`.

| Field | TS type | Req. | Present | Empty | Observed shape / notes |
|---|---|---|---:|---:|---|
| `slug` | string | yes | 257 | 0 | unique; 2 differ from filename (`nha-pha-prison.ts` → `nha-pha-historical-site`, `nhat-beach.ts` → `bai-nhat`) |
| `status` | 6-value union | opt | 13 | 0 | `unverified` 6, `temporarily-closed` 4, `closed` 2, `seasonally-closed` 1. `active` and `seasonal` are **never used**; active = absent |
| `statusNote` | string | opt | 7 | 0 | exactly the 7 closed / temporarily-closed / seasonally-closed records; never on `unverified` |
| `name` | string | yes | 257 | 0 | unique; 137 contain Vietnamese diacritics (for example "Đình làng An Hải"); mixed English and Vietnamese naming |
| `updatedAt` | string? | opt | **257** | 0 | all ISO dates, 2026-08-24 to 2026-09-22 |
| `provinces` | string[] | yes | 257 | 0 | 252 with one value, 4 with two, 1 with three; 52 distinct slugs |
| `destination` | string? | opt | **257** | **82 `""`** | 21 distinct destination slugs; empty string, never absent |
| `lat` / `lng` | number \| string | yes | 257 | 0 | **204 number, 53 numeric string** (45 active); no DMS strings, although consumers parse DMS; all inside Vietnam's bounding box; no duplicate coordinates |
| `address` | string | yes | 257 | 0 | free text with diacritics; 24 under 25 characters |
| `type` | `LocationType \| LocationType[]` | yes | 257 | 0 | **always an array** (1 value: 186; 2: 62; 3: 8; 4: 1) |
| `categories` | `LocationCategory[]?` | opt | **257** | 7 `[]` | 452 values (the 5 stubs + `km0-ha-giang` + `thuong-phuoc-border-gate` are empty) |
| `experiences` | string[] | yes | 257 | 6 `[]` | 875 values (the 5 stubs + `elephant-waterfall`) |
| `tags` | string[] | yes | 257 | 5 `[]` | 968 values: 827 legacy emoji labels + 141 registered; `tags[0]` is always an emoji label |
| `entranceFee` | string? | opt | **257** | 0 | 166 distinct strings; 142 start with "Free"; 88 longer than 120 characters (prose) |
| `openingHours` | string? | opt | **257** | 0 | 186 distinct; 34 longer than 120 characters; "Open daily", "Open 24/7" and "Open 24 hours" all coexist |
| `bestTime` | string | yes | 257 | 5 `""` (stubs) | prose, up to about 700 characters; 194 contain "(" (the experiences and province pages split on it) |
| `bestMonths` | number[]? | opt | **257** | 5 `[]` | values 1-12, no duplicates; **50 unsorted**; length distribution 1-12 |
| `mapUrl` | string | yes | 257 | 0 | all `...?q=lat,lng`; 235 on `www.google.com/maps`, 22 on `maps.google.com` |
| `streetView` | object? | opt | 252 | 14 `{}` + 9 with `embedUrl: ""` | only the `embedUrl` key is ever used (238 non-empty); `lat` and `lng` sub-keys never used; absent on 5 stubs |
| `heroImage` | string? | opt | **257** | 5 `""` | always a **full Cloudinary URL** built at file load by `heroUrl()` (1200×630 transform baked in) |
| `gallery` | string[] | yes | 257 | 34 `[]` (28 active) | 1274 entries, all **Cloudinary publicIds** (not URLs); 2 records have duplicate entries; in 145 records the hero publicId is also in the gallery |
| `tips` | string[] | yes | 257 | 5 `[]` | 2565 entries, 4-18 per record |
| `seoDescription` | string | yes | 257 | 0 | 52-492 characters; only 5 are under 100 |
| `content.intro` / `howToGetThere` / `whatToExpect` / `travelTips` | string? | opt | 256 each | 5 `""` each (stubs) | markdown-ish rich text (RichText) |
| `content.richSections` | `RichSection[]?` | opt | 1 | - | only `ba-den-mountain` (4 sections, 49 blocks; every block type except `divider` is used) |
| `insights` | `LocationInsights?` | opt | 244 | - | missing on 13: the 6 `unverified` records + 7 active (b52-wreck, bui-vien-street, hanoi-old-quarter, independence-palace, phoenix-unicorn-islands-my-tho, tac-say-church, tran-quoc-pagoda) |
| `insights.highlights` | string[] | yes (in insights) | 244 | 0 | 3-12 per record (174 have exactly 3) |
| `insights.thingsToKnow.*` | string \| null | yes | 244 | nulls: crowds 16, difficulty 69, safety 63, accessibility 14, seasonal 19 | sa-vi-cape has all five null |
| `insights.visitorTips` | string[] | yes | 244 | 0 | 866 entries, 3-6 per record |
| `insights.faq` | `{question,answer}[]` | yes | 244 | 0 | 934 entries, 1-8 per record |
| `insights.sentiment` | `{positive, negative\|null}` | yes | 244 | negative null 9 | **not read by any consumer** |

**Fields in data but missing from the type:** none. TypeScript's excess-property check makes this impossible.

**Referenced by code but absent from the type:**
- `(l as any).datePublished` in `app/sitemap.ts`. It is dead code, because no record has it.
- The Outscraper JSON also carries `google_rating` and `google_review_count`. They are never injected and are not in the type.

**In the type but unused, or used by nothing in data:**

| Item | State |
|---|---|
| `status: "active"` and `"seasonal"` | no record uses them; the destination and province pages have a dead `"seasonal"` badge |
| `type` as a single `LocationType` | every record uses an array |
| `streetView.lat` / `streetView.lng` | no record uses them; the code path exists |
| `ContentBlock` `"divider"` | not used |
| `insights.sentiment` | present in data, read by nothing |

**Source-level observations:**
- 24 files start with a UTF-8 BOM.
- 6 files use a relative import (`../location`) instead of `@/data/location`.
- 6 files carry `// TODO` comments (unverified GPS, missing photos).
- 5 records are near-empty stubs (can-ti-bridge, ha-giang-city, mau-due-town, meo-vac-town, yen-minh-town), all `unverified`.

## 4. Real-data inventory

| Metric | Count |
|---|---:|
| Location records | 257 |
| Active (`activeLocations`: status absent / `active` / `seasonal`) | 244 |
| Non-active | 13 (6 unverified, 4 temporarily-closed, 2 closed, 1 seasonally-closed) |
| Distinct top-level shapes | 3: full with insights (244), full without insights (8: the 7 active + phung-hung-mural-street), stub without streetView (5) |
| Distinct `content` shapes | 2: four legacy strings (256), `richSections` only (1) |
| Distinct `streetView` shapes | 3: `{embedUrl}` (238, 9 of them empty), `{}` (14), absent (5) |

**Representative value examples**

| Field | Examples |
|---|---|
| `entranceFee` | "Free" (89 exact); "30,000 VND"; "Free; camping service fees apply if using…"; "50,000 VND/adult, 25,000 VND/child, per Resolution 52/2026…" (a 200+ character mix of price, date and commentary) |
| `openingHours` | "Open daily" (26), "Open 24/7" (26), "Open 24 hours" (8), "7:00 AM - 5:00 PM", "7:00 - 17:00 daily", "7:00 AM – 4:00 PM" (en dash) |
| `bestTime` | "Morning (roughly 8-10 AM) has soft light…" - time of day, while other records hold seasons or months: the field mixes time-of-day and season semantics |

**Suspicious outliers**
- `mapUrl` coordinates more than 0.01° from `lat`/`lng`: **24** records. Examples:
  - hon-son-island: map 10.0458 vs lat 9.8068;
  - hmong-king-palace: map 23.18 vs 23.26;
  - ha-long-bay: lng 107.18 vs 106.99.
- `streetView` embed point more than 0.05° from `lat`/`lng`: **6** records (bu-gia-map-national-park, ha-long-bay, hang-en, lan-ha-bay, nho-que-river, son-doong-cave). Some are plausibly intentional for large areas.
- Em dash (the CLAUDE.md content rule forbids it) appears in `seoDescription` 3, `content` 3, `insights` 3, `tips` 2, `entranceFee` 3 and `name` 1.
- The `insights.visitorTips` / `tips` exact-duplicate overlap is negligible (1 record, vinpearl-safari).

## 5. Field usage / consumer map

Consumers found:
- pages: `app/locations/[slug]/page.tsx` (with ContentRenderer, GalleryLightbox, NearbyLocations, GetDirectionsButton, LocationTabs), `app/locations/{page,LocationsClient}.tsx`, `app/experiences/{page,[slug]/page}.tsx`, `app/destinations/[slug]/page.tsx`, `app/provinces/[slug]/page.tsx`, `app/map/page.tsx`, `app/sitemap.ts`;
- components and libraries: `components/VietnamMap.tsx`, `components/Search/SearchModal.tsx` (via `public/search-index.json`), `lib/nearbyLocations.ts`, `data/destinations/index.ts` (`deriveFromLocations`);
- scripts: `scripts/build-search-index.ts`, `scripts/audit-taxonomy.ts`, `scripts/taxonomy-content-snapshot.ts`, `scripts/add-best-months.mjs` (writes files), `check.js`, `outscraper/inject_insights.py` (writes files).

There is **no JSON-LD / structured data** for Locations, no analytics dependency, no API routes, and no admin tooling beyond the scripts. Blog MDX hard-links 17 location slugs (all resolve).

| Field | Read by | Interpretation | Public effect | URL / indexing |
|---|---|---|---|---|
| `slug` | every surface; `generateStaticParams` (all 257); sitemap (all 257); search index; itinerary stops; blog links; `inject_insights.py` (as a filename) | identity and URL key | everything | **URL key** `/locations/{slug}`; canonical and OG URL |
| `name` | detail h1 and title template; cards; nearby; map; search (`name`, `nameAscii`); itinerary stop labels | display + search | high | in `<title>` |
| `status` | `activeLocations` filter; detail alert (3 closed states); destination and province badges (dead branches under `activeLocations`); search index excludes `closed` and `unverified`; itinerary map data | visibility + banner | high | stubs still statically generated and **in the sitemap** |
| `statusNote` | detail alert only | display | low | - |
| `provinces` | `provinces[0]` → metadata "area" (title and description); card subtitle; `/locations?province=` filter; province page lists; region via a hard-coded `PROVINCE_TO_REGION` (LocationsClient); VietnamMap counts (allLocations); search `province` | relation + display (first only in most places) | high | in `<title>`; `?province=` listing canonical → `/provinces/{p}` |
| `destination` | breadcrumb, hero badge, bottom CTA (display via `replace(/-/g," ")`); destination page membership; `deriveFromLocations` (allLocations, **including non-active**) | relation + display label | high | internal links `/destinations/{d}` |
| `lat` / `lng` | detail map iframe, GetDirections, nearby (haversine, 150 km, allLocations), `/map` markers (activeLocations), itinerary map | coordinates, parsed by 4 separate helpers | high | - |
| `address` | detail overview card | display | low | - |
| `type` | `type[0]` → theme colour and card badge; all types → hero badge label; `/locations?type=` filter (canonical + filterable only); search labels | classification + display | high | `?type=` query URLs; legacy aliases `nature` and `cultural` |
| `categories` | `/locations?category=` filter (themes only); search labels; **not rendered** | theme filter | medium | `?category=` query URLs |
| `experiences` | `/experiences/[slug]` membership and counts; `/map` experience filter; detail "Similar Experiences"; `/locations?experience=`; `deriveFromLocations` whatToDo | activity | high | `/experiences/*` page content |
| `tags` | detail hero chips (all, via `tagDisplayLabel`); **`tags[0]` = /locations card subtitle**; province cards `tags.slice(0,2)`; search labels | display + search | medium | - |
| `entranceFee`, `openingHours` | detail overview cards (rendered when truthy) | display | low | - |
| `bestTime` | detail overview; experience cards (`split("(")[0]`); destination cards (full); province cards (`split("(")[0]`) | display | low-medium | - |
| `bestMonths` | `/locations?month=` filter and counts; `deriveFromLocations` (≥30% threshold) | filter + aggregation | medium | `?month=` query URLs |
| `mapUrl` | **no UI consumer** found | - | none | - |
| `streetView` | gallery lightbox (`embedUrl`, or constructed from `streetView.lat`/`lng`); truthiness also gates the gallery block | display | low | - |
| `heroImage` | detail hero background; OG image; cards (listing does a string replace of the transform `w_1200,h_630` → `w_600,h_400`); province cards; search thumb; "placeholder" substring → fallback image | display + OG | medium | OG image |
| `gallery` | GalleryLightbox (publicIds → URLs); `check.js` | display | low | - |
| `tips` | detail "Insider Tips", **concatenated after** `insights.visitorTips` | display | low | - |
| `seoDescription` | detail hero paragraph (visible); listing-card fallback (70 characters); experience, destination and province cards; search description (160 characters). **Not** the `<meta name="description">` (templated from name + area) | display + search | medium | not in HTML meta |
| `content.*` | ContentRenderer: `richSections` if present, else the 4 legacy strings; LocationTabs has **hard-coded** anchors (`how-to-get-there`, `what-to-expect`, `travel-tips`) that do not exist on the richSections page | display | medium | on-page SEO text |
| `insights.thingsToKnow` | detail "Things to Know" (non-null entries) | display | low | - |
| `insights.visitorTips` | detail "Insider Tips" (first) | display | low | - |
| `insights.faq` | detail FAQ (`<details>`; no FAQPage schema) | display | low | - |
| `insights.highlights` | **only** `deriveFromLocations` → destination highlights (max 10); not rendered on the Location page | aggregation | medium (destination pages) | - |
| `insights.sentiment` | none | - | none | - |
| `updatedAt` | detail breadcrumb "Updated …"; sitemap `lastModified` | freshness | low | **sitemap lastmod** |

## 6. Structural inconsistencies

| # | Finding | Quantified |
|---|---|---|
| S1 | Coordinates as number vs numeric string | 204 / 53; four independent parsers (`toDecimal` ×2 copied, `parseFloat` ×2) |
| S2 | Optional in the type, always present in data | `updatedAt`, `destination`, `categories`, `entranceFee`, `openingHours`, `bestMonths`, `heroImage` (257/257); `streetView` 252; `insights` 244 |
| S3 | "No value" encoded several ways | `destination: ""` (82); `streetView: {}` (14) vs `{embedUrl:""}` (9) vs absent (5); `heroImage: ""` (5); `insights` absent (13) vs thingsToKnow `null`s |
| S4 | `type` declared as scalar or array, always an array | 257 arrays |
| S5 | Image references in two formats | `heroImage` = full transformed URL; `gallery` = bare publicIds; the listing rewrites the hero URL transform by string replace |
| S6 | `content` has two mutually exclusive shapes | 256 legacy / 1 `richSections` |
| S7 | Same concept, several places | tips: `tips` + `insights.visitorTips` + `content.travelTips` (+ FAQ); timing: `bestTime` (prose) + `bestMonths` (derived from bestTime by `add-best-months.mjs`) + `insights.thingsToKnow.seasonal`; location: `lat/lng` + `mapUrl` q= + `streetView` point + `address` |
| S8 | Unsorted arrays | `bestMonths` unsorted in 50 records |
| S9 | Duplicates | gallery duplicates in 2 records; hero publicId repeated in gallery in 145 |
| S10 | Naming conventions | 2 filename ≠ slug; `name` mixes English and Vietnamese (137 with diacritics; the CLAUDE.md naming rule applies to new files only); 24 files with BOM; 2 import styles |
| S11 | Cross-reference drift | 13 itinerary stops with no Location (e.g. `radio-tower` vs `radio-tower-cat-ba`, `thoai-loi-mountain` vs `thoi-loi-mountain`, `perfume-river`, `linh-ung-pagoda`); 9 stops on non-active Locations; `ba-ria-vung-tau` province slug (3 Locations) not in `provinces.ts` (which has `vung-tau`); `hue` missing from `PROVINCE_TO_REGION` (6 active Locations drop out of every region filter) |
| S12 | Pipeline vs data | insights ≠ source JSON in 192/194; 50 Locations have insights with no JSON; 1 JSON (`ben-tre-coconut-village`) has no Location |
| S13 | Free-text fields holding structured facts | `entranceFee` (166 distinct; prices, dates, commentary), `openingHours` (186 distinct, mixed formats) |
| S14 | Coordinate disagreement | `mapUrl` vs `lat/lng` over 0.01° in 24; `streetView` over 0.05° in 6 |

## 7. Semantic overlap observations

Classification only. No decision is implied.

| Field(s) | Classification | Observation |
|---|---|---|
| `type` | clear current responsibility | frozen registry; `type[0]` = primary (theme and badge) |
| `categories` | clear current responsibility | themes are filters; badges (`hidden-gem`, `must-see`, `iconic`) are stored but not rendered |
| `experiences` | clear current responsibility | frozen registry and owner definitions; drives experience pages |
| `tags` | **overlapping responsibility / legacy concern** | one array holds two populations: 827 legacy emoji display labels (`tags[0]` = card subtitle) and 141 registered tags (discovery). Ordering is the only thing separating the roles (D7) |
| `highlights` (insights) vs `tips` vs `visitorTips` vs `content.travelTips` vs FAQ | **overlapping** | three tip-like lists render in two places; highlights render only on destination pages, not on the Location page |
| `insights` (whole block) | **ambiguous / legacy concern** | named and documented as the AI (Outscraper) output, but 192/194 have diverged from the pipeline and 50 were never pipeline-generated; `sentiment` unused |
| `bestTime` vs `bestMonths` vs `thingsToKnow.seasonal` | **overlapping** | prose vs derived numbers vs AI text; `bestTime` mixes time-of-day and season |
| `entranceFee`, `openingHours` | **ambiguous** | display prose; no structure; optional in the type but always present |
| `address` / `lat` / `lng` / `mapUrl` / `streetView` | **overlapping** | four encodings of position; `mapUrl` unused by the UI yet disagrees with `lat/lng` in 24 |
| `seoDescription` | **ambiguous responsibility** | its name says meta description; in practice it is visible hero copy, card copy and search text. The real meta description is a template |
| `status` / `statusNote` | **needs owner decision** | visibility semantics differ per surface; `unverified` stubs are published and in the sitemap; `seasonal` and `active` are unused |
| `destination` | **overlapping** | relation key and display label; `""` means none |
| `provinces` | **ambiguous** | array, but most consumers use only `[0]`; the slug vocabulary is not validated against `provinces.ts` |
| `name` | legacy / compatibility concern | naming rule applies to new files only; existing names mix languages |
| subtitle / display fields | **overlapping** | card subtitle = `tags[0]`, else a `seoDescription` excerpt; there is no dedicated subtitle field |

## 8. Dependency and risk map

| Field | Risk | Why |
|---|---|---|
| `slug` | **critical** | URL key; static params; sitemap; canonical/OG; internal links (itineraries, blog MDX, nearby, search); `inject_insights.py` filenames. Any change breaks URLs and indexing and needs redirects |
| `status` | **high** | changes visibility on 3 different "active" definitions; stubs are indexed; search inclusion differs from the listing |
| `provinces` | **high** | `<title>` area text; province pages; `?province=` filter and canonical; region filter via a hard-coded map; VietnamMap counts; unvalidated vocabulary |
| `type` | **high** | theme colour of every page and card; filter URLs with legacy aliases; frozen registry; `locationTheme` is exhaustive over the union |
| `experiences` | **high** | `/experiences/*` page content and counts; map filter; destination "What to do"; frozen registry |
| `destination` | **high** | destination page membership; derived bestMonths, whatToDo and highlights (over allLocations, including non-active); breadcrumb and CTA |
| `lat` / `lng` | **high** (migration) | 4 parsers; nearby (150 km), maps, directions; dual type |
| `tags` | medium-high | card subtitle (`tags[0]`), hero chips, province cards, search; D7 ordering contract |
| `seoDescription` | medium | visible hero text and search descriptions; renaming or moving would change visible copy and search |
| `heroImage` / `gallery` | medium | OG images; card URL string-replace depends on the exact `heroUrl` transform |
| `bestMonths` | medium | month filter URLs; destination derivation threshold |
| `insights.*` | medium | destination highlights; detail sections; pipeline re-injection would overwrite manual edits |
| `categories` | medium | category filter URLs; search labels |
| `updatedAt` | low-medium | sitemap lastmod |
| `content.*` | medium (UI) | tabs hard-code anchor ids; two rendering paths |
| `entranceFee`, `openingHours`, `address`, `bestTime`, `tips`, `statusNote` | low | display only (`bestTime` has a `split("(")` dependency) |
| `mapUrl`, `insights.sentiment`, `streetView.lat/lng` | low | no public consumer found |

Backward compatibility already in place:
- `/locations` legacy `?type=nature|cultural` aliases;
- `LEGACY_TAG_ALIAS_TABLE` and `LEGACY_EXPERIENCE_ALIASES`;
- `status`-less records are treated as active.

## 9. Existing constraints / decisions discovered

These are recorded as binding constraints for later phases. They are not reinterpreted here.

1. **CLAUDE.md:**
   - naming convention for new Location files (slug, filename, `name`, `export const`), with existing files not renamed;
   - anti-hallucination rules (`lat/lng` empty with `// TODO: verify`, placeholder hero, no insights before Outscraper);
   - hyphen, not em dash;
   - after adding a Location: register it in `all-locations.ts` alphabetically and set `destination`.
2. **Destinations architecture (CLAUDE.md, `data/destinations/`):**
   - `bestMonths`, `whatToDo` and `highlights` are **derived** from Locations and never hardcoded (≥30% month threshold, `EXPERIENCE_GROUP_CONFIG`, max 10 highlights);
   - fallback fields in destinations;
   - do not use the old `data/destinations.ts`, which still exists as a legacy file (1080 lines); all consumers import `data/destinations/index`.
3. **Taxonomy frozen contract** (`data/taxonomy/AUDIT.md`, `TAGS-DEFINITIONS.md`, CONTENT-REVIEW rules R1-R31, decisions D1-D12, PHASE2-LOG):
   - the 4 taxonomy fields come only from the registries;
   - `type[0]` is primary;
   - D7: registered tags go after legacy labels, `tags[0]` is the card subtitle;
   - legacy labels are editorial display chips and stay untouched;
   - no bulk rewrite of taxonomy values;
   - `recognitions.ts` is a side-car keyed by slug, "**not a new Location field**", and not read by any page.
4. **Tags Phase 2 and 3:** the definitions T1-T6 and E1-E6, the `french-colonial-era` exception, the secondary-layer rule, and the final assignments.
5. **Experience definitions (owner-approved):** trekking, hiking, walking-tour, photography, culture and homestay rules.
6. **CONTENT-BACKLOG.md:**
   - recognition gaps;
   - the physical-effort / accessibility signal requirement ("not an experience");
   - stub records;
   - the quang-tri wording issue.
7. **Code-comment decisions:**
   - `status` comments define `temporarily-closed` (one-off) vs `seasonally-closed` (recurring);
   - `updatedAt` must be updated on every content change;
   - taxonomy comments say `experiences`/`tags` stay `string[]` during the transition.

## 10. Open architecture questions (owner decisions)

1. **Visibility:**
   - What is the single definition of a "published" Location?
   - Should `unverified` stubs have static pages and sitemap entries?
   - Should `temporarily-closed` and `seasonally-closed` appear in search but not in listings, as they do today?
2. **seoDescription:** Is it meta description, visible summary, or both? Today the real meta description is a template.
3. **Tags dual role:** Should the display-subtitle role (`tags[0]`) stay coupled to the tag array?
4. **Tip-like content:**
   - What distinct purpose do `tips`, `insights.visitorTips` and `content.travelTips` have?
   - Should `insights.highlights` appear on the Location page?
   - Is `sentiment` needed?
5. **Insights provenance:** Is `insights` still "AI pipeline output" (re-injectable), or editorial content owned in the `.ts` files? Re-running `inject_insights.py` would overwrite 192 edited blocks.
6. **Timing:** What are the roles of `bestTime` (time of day vs season), `bestMonths` and `thingsToKnow.seasonal`, and which is authoritative?
7. **Position data:**
   - Is `lat/lng` authoritative over `mapUrl` and `streetView`?
   - Should numeric strings remain allowed?
   - What should happen with the 24 `mapUrl` disagreements?
8. **Practical info:** Should `entranceFee` and `openingHours` stay free prose, or gain structure? Is it acceptable that they are optional in the type but always present in data?
9. **Province vocabulary:**
   - `ba-ria-vung-tau` vs `vung-tau`, and `hue` vs `thua-thien-hue`: which is canonical?
   - Should `provinces` be validated against `provinces.ts`?
   - How should the post-2025 provincial mergers (mentioned in content) be handled?
10. **Destination relation:** Is `""` the intended "no destination"? Should derivations include non-active Locations?
11. **Itinerary integrity:** 13 dangling stop slugs and 9 non-active stops. Are they fixed in data, or tolerated?
12. **Content model:** Is `richSections` (1 Location) the intended future path, or an experiment? LocationTabs anchors assume the legacy shape.
13. **Naming:** Keep mixed-language `name` values and the 2 filename/slug mismatches as-is (per the "existing files don't need to be renamed" rule)?

## 11. Recommended next investigation steps

These are investigations only; none of them changes anything.

1. **Visibility matrix:** tabulate every surface × status (13 non-active records), including metadata, sitemap and `robots`, to size the published-stub question.
2. **Coordinate verification:** for the 24 `mapUrl` and 6 `streetView` disagreements, determine which value is correct, using owner knowledge or maps (no edits).
3. **Cross-reference report:** list the 13 dangling itinerary stops with the likely intended Location (or none), and the 9 non-active stops, for the owner.
4. **Province vocabulary audit:** reconcile `provinces` slugs with `provinces.ts`, `PROVINCE_TO_REGION`, `VietnamMap` maps and `regions.ts`; document the merger situation.
5. **Content-role sampling:** sample about 20 Locations to compare `tips`, `visitorTips`, `travelTips`, `highlights` and FAQ side by side and measure real semantic overlap (beyond the exact-string check).
6. **Insights provenance diff:** classify the 192 diverged insights blocks (editorial rewrite vs pipeline update) before any decision on re-injection.
7. **Practical-info profiling:** tokenise `entranceFee`, `openingHours` and `bestTime` to see how much is structured-extractable versus narrative.
8. **SEO baseline:** capture the current titles, meta descriptions, OG images and sitemap entries for all 257 pages, as a regression baseline for any future schema work.
9. **Consumer contract list:** turn §5 into a checklist of invariants (`tags[0]` subtitle, `type[0]` theme, `split("(")` on bestTime, the `heroUrl` transform string-replace, tab anchors) for later migration testing.

---

### Validation (read-only)

- `npx tsc --noEmit`: pass.
- `npm run audit:taxonomy`: OK - no violations.
- `npm run lint`: 64 problems (39 errors). This is the unchanged pre-existing baseline; this audit touched no code.
- The only file added is this report. `public/search-index.json` was not regenerated.
- Note: this report sits in `data/locations/`, which is otherwise all `.ts`. The scripts that list that directory filter on `.ts` (`add-best-months.mjs`, `check.js`) or resolve `{slug}.ts` (`inject_insights.py`), so the `.md` file does not affect them.
