# Phase 2 - Per-location decisions for owner review

> **Round 2 status:** the owner answered sections A-F. The decisions were applied exactly and **override the "Suggested"
> column below**. See [PHASE2-LOG.md §6](./PHASE2-LOG.md#6-owner-decisions-round-2-and-what-was-applied). Six items were
> ambiguous and were not guessed ([PHASE2-LOG.md §6.4](./PHASE2-LOG.md#64-not-applied---ambiguity-or-conflict-needs-an-owner-answer)).
> Recognition verification is blocked by network access (§6.5). Content gaps are in [CONTENT-BACKLOG.md](./CONTENT-BACKLOG.md).
> The tables below are kept as the round-1 record.

Round 1 applied only what was approved and had one clear target ([PHASE2-LOG.md](./PHASE2-LOG.md)). The rows below were
**not applied** in round 1. Each needed an owner answer; "Suggested" was only a starting point.

Legend for the relation column: **EQ** 1:1 · **SUB** narrower → broader · **XF** right concept, wrong field · **REL** related,
not equivalent · **AMB** depends on the place.

---

## A. `type`

### A1. Locations that still have only broad types (12)

These block a future deprecation of the broad types. The rejected values (`zoo`, `memorial`, `ancient-capital`, `wetland`,
`peninsula`, `volcano`, `hill`, `sand-dunes`) are not options.

| Location | Current | Options | Suggested |
|----------|---------|---------|-----------|
| ba-na-cable-car | attraction | `cable-car` / `theme-park` (the record is "Bà Nà Hills & Cable Car") | `theme-park`, `cable-car` (both, theme-park first?) |
| vinpearl-safari | attraction, nature | `theme-park` (REL: a safari park) / keep `attraction` | `theme-park` |
| duck-stop-phong-nha | attraction, nature | `farmland` (a working duck farm, NC-23) / keep | `farmland` |
| ho-chi-minh-mausoleum-complex | heritage, history, landmark | `tomb` (Lăng = mausoleum) / `historic-site` (the complex also has the palace, museum and stilt house) | `tomb`, `historic-site` |
| hoa-lu-ancient-capital | history, heritage | `historic-site` / `temple` (the visitable part is the Đinh and Lê temples) / `citadel` (REL) | `historic-site`, `temple` |
| nha-pha-historical-site | history, landmark | `historic-site` / `prison` (the file is `nha-pha-prison.ts`) / `lighthouse` | `historic-site` |
| lung-po-red-river-source | nature, cultural | `monument` (flag tower) + `river` (confluence) | `monument`, `river` |
| hang-mua | nature | `mountain` (the draw is the summit viewpoint) / `cave` | `mountain` |
| tam-coc | nature | `river` (boat trip on the Ngô Đồng) + `cave` + `rice-fields` | `river`, `cave` |
| trang-an | nature, heritage | `river` + `cave` (composite karst landscape) | `river`, `cave` |
| radio-tower-cat-ba | landmark, attraction, nature | `mountain` (hilltop viewpoint) / keep (viewpoint is not a type, R18) | keep, or `mountain` |
| red-sand-dunes | nature, attraction | `sand-dunes` was rejected → no specific type fits. `grassland` / `beach` do not fit | **keep as is** (a known gap for broad-type deprecation) |

### A2. Broad primary type followed by a specific one (8)

Dropping the broad value would promote the second value. That is wrong for several of them.

| Location | Current | Question | Suggested |
|----------|---------|----------|-----------|
| a-pa-chai | landmark, mountain, nature | Triple-border marker (`monument`) or the mountain? | `monument` first |
| bay-mau-coconut-forest | nature, river | A water-coconut forest waterway: `forest` / `river` (`wetland` rejected) | `forest` first |
| thung-nham-bird-park | nature, river | Bird park in wetland karst: `nature-reserve` (REL: is it formally a reserve?) / `river` | owner |
| dong-van-old-town | cultural, town | `old-quarter` vs `town` (R10) | `old-quarter` first, keep `town` |
| phong-nha-botanic-garden | nature, forest | Named a garden, but it is a forest reserve with trails | reorder: `forest` first |
| phuoc-tinh-fishing-village | nature, cultural, beach | `village` vs a port town | `village` first |
| thuong-phuoc-border-gate | landmark, history, river | Border crossing - no type. Keep `river`? | reorder: `river` first, or keep |
| white-sand-dunes | nature, attraction, lake | `sand-dunes` rejected. `lake` would become primary if reordered | **keep as is** |

### A3. Secondary type values that look wrong (removal = subtractive, R1)

| Location(s) | Value | Relation | Question |
|-------------|-------|----------|----------|
| cat-cat, don, ham-ninh, hieu, kho-muong, ta-van, tra-que (villages) | `town` | REL (a village is not a town) | Remove `town`? Colour unaffected (`village` is first). `/locations?type=town` loses 7 |
| bui-hui-grassland | `forest` | REL (the content says there are no tall trees across most of it) | Remove `forest`? |
| my-son-sanctuary | `citadel` | REL | Remove `citadel`? |
| fairy-stream, mooc-spring, la-ngau-stream | `river` | SUB (`stream` has `broader: river`) | Keep `river` (safe) or drop it (the registry already expresses it) |
| cua-tu-stream, da-ploa-stream | (no `stream`) | - | Add `stream` as a secondary type? (primary stays `waterfall`) |

---

## B. `categories` (new themes approved, not yet assigned)

`categories` is not rendered anywhere. There is no visible impact.

### B1. `coast`

| Group | Locations | Suggested |
|-------|-----------|-----------|
| Coastal type, clearly on the sea (48) | an-bang-beach, ba-hon-dam-islands, back-beach-vung-tau, bai-mon-beach, bai-tu-long-bay, binh-son-beach, can-gio-beach, cape-ca-na, cat-co-beach, co-thach-beach, co-to-island, cu-mi-beach, cua-dai-beach, dam-trau-beach, diep-son-island, doc-let-beach, doi-nhai-beach, pirate-islands, ha-long-bay, ham-tien-beach, hang-cau-cliffs, hang-rai, hon-chong-rock-formation, hon-kho-island, hon-mun-island, hon-son-island, hon-tam-island, hon-yen-island, ke-ga-lighthouse, khem-beach, ky-co-beach, lan-ha-bay, mui-dien, mui-tro-fishing-village, my-khe-beach, nam-du-islands, bai-nhat, phuoc-binh-beach, phuoc-hai-fishing-village, phuoc-tinh-fishing-village, phu-quy-island, plate-rock-reef, rach-vem-fishing-village, sa-vi-cape, sao-beach, six-senses-beach, sunworld-beach-cat-ba, ti-top-island | add `coast` (one approval for the batch) |
| Coastal type but **not** on the sea | an-binh-island (Mekong river island), phoenix-unicorn-islands-my-tho (Mekong), can-gio-monkey-island (mangrove estuary) | not `coast` (last one: owner) |
| Coastal place, non-coastal type | mui-ne-fishing-village, ham-ninh-fishing-village, hang-pagoda, ho-quoc-pagoda, son-tra-peninsula, thoi-loi-mountain, to-vo-gate, gieng-tien-peak, an-hai-communal-house, an-vinh-communal-house, nha-pha-historical-site, cat-ba-cannon-fort | owner, per location (this group is the reason `coast` exists, R28) |

### B2. `entertainment`

| Locations | Suggested |
|-----------|-----------|
| ba-na-cable-car, french-village-ba-na, hon-thom-cable-car, vinpearl-cable-car, vinwonders-phu-quoc, sunworld-beach-cat-ba | add |
| vinpearl-safari | `entertainment` and/or `nature`? |
| duck-stop-phong-nha | `entertainment` (farm show) or `food` / `culture`? |
| bui-vien-street, ta-hien-street | Is nightlife "entertainment"? (REL - owner) |

### B3. Cross-field additions from broad types (XF, before any type deprecation)

| Missing | Locations | Note |
|---------|-----------|------|
| category `nature` where type has `nature` (11) | back-beach-vung-tau, binh-son-beach, can-gio-beach, cat-ba-cannon-fort, duck-stop-phong-nha, ham-tien-beach, phoenix-unicorn-islands-my-tho, phuoc-hai-fishing-village, phuoc-tinh-fishing-village, ta-pa-temple, vinpearl-safari | **Not automatic.** Several were deliberately left without `nature` in the review (developed beaches, a temple, a safari park). The better answer for most is `coast` / `entertainment` above, not `nature` |
| category `history` where type has `history` (2) | can-gio-monkey-island, thuong-phuoc-border-gate | Both were reviewed as weak history. Suggest: no |

---

## C. `experiences`

### C1. Add `hiking` (canonical since round 1) where the review log reads the walk as hiking

Adding `hiking` does **not** change `/experiences/trekking` (`trekking` stays - the membership decision is deferred). It **does**
change destination "What to do": `hiking` is in the `nature` group of `EXPERIENCE_GROUP_CONFIG`.

a-pa-chai, ba-den-mountain, ba-be-lake, bac-son-valley, bai-mon-beach, bai-tu-long-bay, bau-sau, bui-hui-grassland,
chua-chan-mountain, con-dao-national-park, do-quyen-waterfall, dray-nur-dray-sap-waterfalls, du-gia-village, du-gia-waterfall,
khau-coc-cha-pass, khe-van-waterfall, la-ngau-stream, langbiang-mountain (both), mau-son-mountain, minh-dam-mountain, mui-dien,
pac-bo-historic-site, phong-nha-botanic-garden, radio-tower-cat-ba, son-tra-peninsula, yen-tu-mountain (26).

Also open: `nho-que-river` has a legacy `hiking`, but the review reads its walking as "neither".

### C2. Unregistered experience values (proposal §6.6)

| Location | Value | Relation | Suggested |
|----------|-------|----------|-----------|
| tac-say-church | `walking-tours` | EQ → `walking-tour` | migrate (walking-tours page +1) |
| gieng-tien-peak, thoi-loi-mountain, to-vo-gate | `nature` | XF (category `nature` present) | remove |
| saigon-central-post-office | `architecture` | XF (category present) | remove |
| jade-emperor-pagoda | `spirituality` | DEP (`religious-site-visit` present) | remove |
| pongour-waterfall | `picnic` | DEP (attribute, R18) | remove |
| an-bang-beach | `watersport` | DEP (umbrella) | remove |
| khau-pha-pass | `paragliding` | - | register `proposed`? |
| lan-ha-bay | `rock-climbing` | - | register `proposed`? |

Each removal takes one option out of the `/locations` experience filter.

---

## D. `tags`

### D1. French concepts (three distinct tags, none inferred from another)

Registered in round 1, **applied nowhere**. Candidates from the review evidence. Each needs its own decision per location.

| Tag | Candidate locations (evidence) |
|-----|--------------------------------|
| `french-colonial-era` (period) | con-dao-prison, dalat-railway-station, cat-ba-cannon-fort, hoa-lo-prison, ke-ga-lighthouse, long-bien-bridge, khai-dinh-tomb, nha-pha-historical-site, mau-son-mountain (hill station), mui-dien (lighthouse), quan-ba-heaven-gate (1939 gate), notre-dame-cathedral-saigon, kon-tum-wooden-church, saigon-central-post-office, war-remnants-museum · weaker: ben-thanh-market, cat-cat-village, moc-chau-tea-hills, son-tra-peninsula, ti-top-island |
| `french-architecture` (built form) | hanoi-st-josephs-cathedral, kon-tum-wooden-church (French-Bahnar fusion), notre-dame-cathedral-saigon, mang-lang-church, dalat-railway-station, khai-dinh-tomb, hmong-king-palace, long-bien-bridge (engineering), saigon-central-post-office · weaker: tu-duc-tomb |
| `french-influence` (culture) | none confident. Weak: mang-lang-church (quốc ngữ book), Đà Lạt hill-station culture. Explicitly **not**: phat-diem-cathedral (Vietnamese style), ben-thanh-market, french-village-ba-na (replica) |

### D2. Other open tag decisions

| Item | Question |
|------|----------|
| `cham-culture` split | `champa-heritage` (my-son, po-nagar, nhan-tower) vs `cham-culture` (bung-binh-thien living community)? |
| `confucianism` | Register? (temple-of-literature central, tu-duc-tomb secondary) |
| `ha-nhi-culture` | Register? (y-ty partial, a-pa-chai rejected) |
| Period candidates | `prehistory` (4), `revolutionary-era` (9), later-Lê period, 1979 border war |
| Promotions | Promote the remaining `proposed` tags (religion, ethnic, period) to `canonical`? `ethnic-minority-culture` stays provisional (R3) unless decided |

---

## E. Remaining `proposed` values (promotion to canonical)

| Field | Values still `proposed` |
|-------|-------------------------|
| type | communal-house, valley, rice-fields, national-park, bridge, building, village, fortress, prison, station, church, old-quarter, palace, pass, lighthouse, cape |
| experiences | swimming, surfing, fishing, kitesurfing, museum-visit, diving |
| tags | all 19 registered tags except the three `french-*` tags |

---

## F. Recognition side-car follow-ups

- All 93 records are `verified: false`: they come from location content, not the official registers. Verification is a content
  task.
- Content gaps: ti-top-island, tu-duc-tomb, minh-mang-tomb, khai-dinh-tomb and other sites inside UNESCO properties do not mention
  the designation in their own content, so they have no record.
- Rendering (badge, filter) is a later UI decision.
