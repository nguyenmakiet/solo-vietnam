# timeNeeded migration

Adds `Location.timeNeeded = { minMinutes, maxMinutes }`: the total time a traveler should allocate for the visit or experience the Location record describes. Minutes are the only unit; multi-day experiences are normalised to total minutes. Values come only from each location's existing content - nothing was researched or guessed.

## Method

- Every string in every Location object was scanned: metadata, `bestSeasonNote` / `bestTimeOfDay`, `tips`, `content.*` (including `richSections` blocks, tables and quick facts), `insights.*` (highlights, things to know, visitor tips, FAQ, sentiment), `entranceFee`, `openingHours` and tags. Each sentence containing duration language (minutes, hours, days, nights, half/full day, overnight, allow / spend / budget, "time needed", ...) was reviewed in the context of its location, and a value was decided by hand per location.
- Excluded by definition: travel time to the location, opening hours, waiting/queue time, the length of a tour or trip that bundles other places, and a stay at a destination that the content uses as a base for other activities.
- A sub-activity (a climb, a single boat leg, a show) is used only when it is the location's main experience; otherwise the location is left unresolved.
- Several statements that agree or overlap are merged into one range (class M). Statements that cannot be reconciled are NEEDS_RESEARCH.
- `updatedAt` was not changed; no existing text was edited.

## Normalisation rules (owner-approved)

| Source phrase | Minutes |
|---|---|
| 1 hour | 60 |
| an explicit clock window, e.g. "a full day (7:30 AM to 6 PM)" | as stated (630) |
| "a full day" with no clock window | **480** - a typical morning-to-afternoon allocation, not 24 hours |
| multi-day by day count: "2 days 1 night" / "2 days" | 2880 |
| "3 days 2 nights" / "3 days" | 4320 |
| "half a day" without hours | no canonical conversion - left NEEDS_RESEARCH |
| nights only ("minimum 2 nights", "1-2 nights", "2 nights 1 day") | no canonical conversion - left NEEDS_RESEARCH |

"A full day" = 480 is applied to 10 locations: `bau-sau`, `cat-ba-national-park`, `con-dao-national-park`, `cua-tu-stream`, `dinh-mountain`, `hoi-an-ancient-town`, `imperial-city-hue`, `phoenix-unicorn-islands-my-tho`, `son-tra-peninsula`, `vinpearl-safari`.

"Half a day" without hours affects 10 locations, left NEEDS_RESEARCH: `an-bang-beach`, `dau-tieng-lake`, `doi-nhai-beach`, `dray-nur-dray-sap-waterfalls`, `hon-thom-cable-car`, `mooc-spring`, `my-khe-beach`, `o-quy-ho-pass`, `thang-hen-lake`, `tuyen-lam-lake`.

## Summary

| | Count |
|---|---|
| Total locations scanned | 263 (incl. 5 draft stubs) |
| `timeNeeded` added | 164 |
| Not enough evidence (UNRESOLVED) | 71 |
| Evidence present but unclear or conflicting (NEEDS_RESEARCH) | 28 |
| Conflicting duration evidence | 15 (4 reconciled into a range, 11 left NEEDS_RESEARCH) |
| Populated values requiring manual review | 17 |

Of the 164 populated locations, 17 have a `maxMinutes` above 1,440 (multi-day).

## Distribution

| Bucket | by minMinutes | by maxMinutes |
|---|---|---|
| < 30 min | 14 | 6 |
| 30-60 min | 85 | 47 |
| 1-2 hours | 31 | 39 |
| 2-4 hours | 13 | 36 |
| 4-8 hours | 10 | 14 |
| 8-24 hours | 3 | 4 |
| 1-2 days | 7 | 13 |
| 2-3 days | 1 | 4 |
| 3+ days | 0 | 1 |

## Evidence classification

| Class | Count |
|---|---|
| Direct explicit duration | 120 |
| Activity/experience duration | 11 |
| Multiple duration statements | 28 |
| Manual interpretation | 5 |
| Unresolved (UNRESOLVED + NEEDS_RESEARCH) | 99 |

## Conflicts

| Location | Evidence | Chosen range | Reason |
|---|---|---|---|
| `ba-be-lake` | "Minimum 2 nights" (elapsed duration unclear) vs boat circuit 1-5h / 3-5h (FAQ, travelTips, visitorTips) | NEEDS_RESEARCH | Cannot be reconciled with confidence |
| `bai-tu-long-bay` | "2 nights or 3 days 2 nights" standard (4320); accessibility "2-3 night cruise minimum" (up to 4D3N = 5760) (howToGetThere, tips, accessibility) | 3 days - 4 days | Statements describe different visit lengths of the same experience; the range covers both |
| `cai-rang-floating-market` | Boat trip from Ninh Kiều is the visit: "Total door-to-door: about 3-3.5 hours", "Budget 3 hours total"; 1.5-2h is the time at the market itself (tips, travelTips, FAQ) | 3h - 3h30 | Statements describe different visit lengths of the same experience; the range covers both |
| `cat-tien-national-park` | "Minimum 2 nights" (elapsed unclear) vs rushed single day; Bàu Sấu 7h round trip (FAQ, travelTips) | NEEDS_RESEARCH | Cannot be reconciled with confidence |
| `diep-son-island` | Day-trip island time 1-2.5h vs "most rewarding for visitors who stay overnight" (elapsed unclear) (howToGetThere, travelTips) | NEEDS_RESEARCH | Cannot be reconciled with confidence |
| `do-quyen-waterfall` | "about 3 hours" from Km 16 trailhead vs 2026 landslide adding 2-3h on foot; full day for the combined loop (tips, howToGetThere, safety) | NEEDS_RESEARCH | Cannot be reconciled with confidence |
| `don-village` | "Time needed: 2 nights is the practical minimum" vs "2-3 day stay" (partly because of 4-5h travel each way) - elapsed duration unclear (tips, howToGetThere, FAQ) | NEEDS_RESEARCH | Cannot be reconciled with confidence |
| `golden-bridge` | Bridge "takes 15-20 minutes" vs FAQ "How long should I spend there? Plan a full day" (whole Bà Nà complex) (travelTips, FAQ) | NEEDS_RESEARCH | Cannot be reconciled with confidence |
| `ha-long-bay` | Day routes 3-4h / 5-7h; overnight "strongly recommended (minimum 2 days, 1 night)" (tips, whatToExpect, FAQ) | 3h - 2 days | Statements describe different visit lengths of the same experience; the range covers both |
| `lung-po-red-river-source` | "Allow 30-45 minutes" vs "allow 1-2 hours at the site" (tips, accessibility, whatToExpect) | NEEDS_RESEARCH | Cannot be reconciled with confidence |
| `mui-ca-mau-national-park` | Boat tour 1.5-2h; day trip vs "a night there changes the experience" (elapsed unclear) (visitorTips, travelTips) | NEEDS_RESEARCH | Cannot be reconciled with confidence |
| `ngoc-son-temple` | "Time needed: 45-75 minutes for the temple alone" vs "the full visit takes 20-30 minutes" (tips, whatToExpect, FAQ) | NEEDS_RESEARCH | Cannot be reconciled with confidence |
| `nho-que-river` | Boat tour "typically taking 1-1.5 hours return"; per-boat pricing quotes "45-60 minutes" for small boats (whatToExpect, entranceFee) | 45 min - 1h30 | Statements describe different visit lengths of the same experience; the range covers both |
| `son-doong-cave` | "6-day expedition" (entrance fee line) vs day-by-day itinerary ending "Day 4 exits" (entranceFee, whatToExpect) | NEEDS_RESEARCH | Cannot be reconciled with confidence |
| `ta-nang-phan-dung-trek` | "Standard format 2 nights 1 day" (includes an overnight bus) vs "over 2-3 days" - elapsed duration unclear (tips, FAQ) | NEEDS_RESEARCH | Cannot be reconciled with confidence |

## Unresolved locations

### NEEDS_RESEARCH (28) - duration evidence exists but is unclear or conflicting

| Location | Status | Reason | Source |
|---|---|---|---|
| `ba-be-lake` | active | "Minimum 2 nights" (elapsed duration unclear) vs boat circuit 1-5h / 3-5h | FAQ, travelTips, visitorTips |
| `bac-son-valley` | active | "one or two nights rather than a day trip" - elapsed duration unclear; climb 40-50 min and loop 2h are sub-activities | travelTips |
| `bui-hui-grassland` | active | "allow a full day or overnight for the round trip" includes the drive; "best experienced overnight" - elapsed duration unclear | tips, travelTips |
| `cat-tien-national-park` | active | "Minimum 2 nights" (elapsed unclear) vs rushed single day; Bàu Sấu 7h round trip | FAQ, travelTips |
| `con-dao-prison` | active | 45-60 min per camp; full complex "most of a day" (not quantifiable) | tips, whatToExpect, FAQ |
| `dau-tieng-lake` | active | "1 night or 2 nights" camping (elapsed unclear); "half-day" for sunrise only | tips |
| `diep-son-island` | active | Day-trip island time 1-2.5h vs "most rewarding for visitors who stay overnight" (elapsed unclear) | howToGetThere, travelTips |
| `do-quyen-waterfall` | active | "about 3 hours" from Km 16 trailhead vs 2026 landslide adding 2-3h on foot; full day for the combined loop | tips, howToGetThere, safety |
| `doi-nhai-beach` | active | "Half a day for a visit, or an overnight stay" | tips |
| `don-village` | active | "Time needed: 2 nights is the practical minimum" vs "2-3 day stay" (partly because of 4-5h travel each way) - elapsed duration unclear | tips, howToGetThere, FAQ |
| `dong-van-old-town` | active | "rewards staying 1-2 nights" - elapsed duration unclear | travelTips |
| `dray-nur-dray-sap-waterfalls` | active | "combined visit takes half a day" | tips, FAQ |
| `golden-bridge` | active | Bridge "takes 15-20 minutes" vs FAQ "How long should I spend there? Plan a full day" (whole Bà Nà complex) | travelTips, FAQ |
| `hon-son-island` | active | "Minimum 2 nights" - elapsed duration unclear | tips, FAQ |
| `hon-thom-cable-car` | active | "fills a half to full day"; "an hour or two on the island beach" if skipping the water park | whatToExpect, FAQ |
| `lung-po-red-river-source` | active | "Allow 30-45 minutes" vs "allow 1-2 hours at the site" | tips, accessibility, whatToExpect |
| `mooc-spring` | active | "A typical half-day plan" (about 8:45 AM to 11:30 AM plus lunch) - no stated total | travelTips |
| `mui-ca-mau-national-park` | active | Boat tour 1.5-2h; day trip vs "a night there changes the experience" (elapsed unclear) | visitorTips, travelTips |
| `my-khe-beach` | active | "a half-day beach stop" | travelTips |
| `ngoc-son-temple` | active | "Time needed: 45-75 minutes for the temple alone" vs "the full visit takes 20-30 minutes" | tips, whatToExpect, FAQ |
| `o-quy-ho-pass` | active | "plan at least half a day" | travelTips |
| `phu-quy-island` | active | "2 nights 1 day or 3 nights 2 days" / "Minimum 2 nights" - elapsed duration unclear | whatToExpect, travelTips |
| `son-doong-cave` | active | "6-day expedition" (entrance fee line) vs day-by-day itinerary ending "Day 4 exits" | entranceFee, whatToExpect |
| `ta-nang-phan-dung-trek` | active | "Standard format 2 nights 1 day" (includes an overnight bus) vs "over 2-3 days" - elapsed duration unclear | tips, FAQ |
| `thang-hen-lake` | active | "Easy half-day trip" / "The ideal visit is a half-day" (includes the drive) | tips, travelTips |
| `tuyen-lam-lake` | active | "best as a half-day excursion"; "doesn't require a full day" | travelTips |
| `viet-hai-village` | active | Day trip = 3-4h trek in + village + boat out (no total); overnight recommended | tips, travelTips |
| `y-ty` | active | "rewards two to three nights" - elapsed duration unclear | travelTips |

### UNRESOLVED (71) - no usable visit duration in the content

| Location | Status | Reason | Source |
|---|---|---|---|
| `an-bang-beach` | active | Only "half-day or full-day add-on" | travelTips |
| `an-nhut-rice-fields` | active | No visit duration | - |
| `an-vinh-communal-house` | active | No visit duration | - |
| `angel-eye-mountain` | active | Only the 15-20 min climb to the opening (one leg of the visit) | whatToExpect, FAQ |
| `ba-hon-dam-islands` | active | Only boat schedule (out 7:30/9:00, back 14:00/16:00) and overnight advice | tips, howToGetThere |
| `back-beach-vung-tau` | active | No visit duration | - |
| `bai-mon-beach` | active | Only 20 min trail and overnight-camp suggestion | - |
| `ban-gioc-waterfall` | active | No visit duration | - |
| `binh-son-beach` | active | No visit duration | - |
| `bu-gia-map-national-park` | active | "Total ~4-5 hours" is the motorbike ride from HCMC (travel) | tips |
| `bui-vien-street` | active | No visit duration | - |
| `can-gio-beach` | temporarily-closed | "for a day" / "a full day" describe the whole Cần Giờ day trip (ferry, mangroves, town, seafood), not the beach | tips, travelTips |
| `can-ti-bridge` | unverified | Draft stub, no content | - |
| `cao-dai-holy-see` | active | Only the 45-minute noon ceremony (one part of the visit) | tips, FAQ |
| `cat-ba-cannon-fort` | closed | Fort closed; 30-60 min is for the nearby Radio Tower viewpoint | visitorTips |
| `cat-ba-town` | active | Town is a base: 30-45 min walking loop vs "2-3 night base" for other activities - neither is the town visit itself | tips, travelTips |
| `crazy-house` | active | Only "most people are done in under an hour" (no lower bound) | sentiment |
| `cu-mi-beach` | active | No visit duration | - |
| `cua-dai-beach` | active | No visit duration | - |
| `doc-let-beach` | active | No visit duration | - |
| `dragon-bridge` | active | Only the show length (5 min active, 12-15 min overall) and arrive-early advice - no total visit time | tips, FAQ |
| `du-gia-village` | active | No visit duration (overnight homestay suggestion only) | - |
| `du-gia-waterfall` | active | Only the 5-15 min walk from parking | howToGetThere |
| `ha-giang-city` | unverified | Draft stub, no content | - |
| `ham-ninh-fishing-village` | active | No visit duration | - |
| `hang-mua` | active | Only climb times (20-45 min up, ~20 min down) - no total visit time | whatToExpect, travelTips, FAQ |
| `hang-rai` | active | No visit duration | - |
| `hanoi-old-quarter` | active | No visit duration | - |
| `hanoi-train-street` | active | No visit duration | - |
| `hon-kho-island` | active | No visit duration | - |
| `hon-mun-island` | active | Only full-day multi-island tours | - |
| `hon-tam-island` | active | No visit duration | - |
| `hon-yen-island` | active | No visit duration | - |
| `independence-palace` | active | No visit duration | - |
| `jade-emperor-pagoda` | active | No visit duration | - |
| `k50-waterfall` | active | Trek length given only as distance (up to 7-8km); "day-two detour" hints at multi-day but no duration | tips, whatToExpect |
| `keo-pagoda` | active | No visit duration | - |
| `khau-pha-pass` | active | "Allocate the whole day for Tú Lệ to Mù Cang Chải" is a riding stage (travel), not the pass visit | travelTips |
| `khem-beach` | active | No visit duration | - |
| `kon-tum-wooden-church` | active | "1.5 days" is for Kon Tum town, not the church | travelTips |
| `ky-co-beach` | active | No visit duration ("arriving at 3 PM gives two and a half hours" is a timing tip) | - |
| `lo-lo-chai-village` | active | Day trip vs overnight, no duration | - |
| `lung-cu-flag-tower` | active | "839 steps ... allow time" - no duration | whatToExpect |
| `ly-son-garlic-fields` | active | No visit duration | - |
| `mau-due-town` | unverified | Draft stub, no content | - |
| `mau-son-mountain` | active | No visit duration (2 hours is the drive up) | - |
| `meo-vac-town` | unverified | Draft stub, no content | - |
| `moc-chau-tea-hills` | active | "2-3 days" describes the whole Mộc Châu plateau, not the tea hills | travelTips |
| `mui-ne-fishing-village` | active | No visit duration | - |
| `notre-dame-cathedral-saigon` | active | Only "30-45 minutes" for a combined visit with the Central Post Office | tips |
| `phi-lieng-waterfall` | active | Day trip vs overnight camp - no duration | travelTips |
| `phong-nam-valley` | active | No visit duration | - |
| `phuoc-binh-beach` | active | No visit duration | - |
| `phuoc-hai-fishing-village` | active | "About 1.5 hours" is the bus from Saigon (travel) | tips |
| `pongour-waterfall` | active | "half-day commitment" refers to the drive from Đà Lạt; only a 20 min path | sentiment |
| `rach-vem-fishing-village` | active | No visit duration | - |
| `sa-vi-cape` | active | Only "well under an hour" | FAQ |
| `saigon-central-post-office` | active | No visit duration | - |
| `sao-beach` | active | No visit duration | - |
| `sunworld-beach-cat-ba` | active | No visit duration | - |
| `ta-dung-lake` | active | Overnight recommended, half-day/full-day combinations - no duration for the lake itself | travelTips |
| `ta-hien-street` | active | No visit duration | - |
| `ta-van-village` | active | Overnight recommended, no duration | - |
| `tac-say-church` | active | "2-day, 1-night trip" describes a Mekong Delta itinerary, not the shrine visit | travelTips |
| `tay-phuong-pagoda` | active | Only the 15-minute climb (239 steps) | FAQ |
| `thung-nham-bird-park` | active | Only "The cave section adds 15-20 minutes to the tour" (tour length not given) | whatToExpect |
| `tra-su-cajuput-forest` | active | Only the 30-minute rowboat leg (one part of the visit) | whatToExpect |
| `tri-an-lake` | active | No visit duration | - |
| `vinpearl-cable-car` | active | Only the 8-12 min crossing; full day applies to the island theme park | tips |
| `white-sand-dunes` | active | Only the 10-15 min walk and a 4-hour multi-stop jeep tour | whatToExpect, tips |
| `yen-minh-town` | unverified | Draft stub, no content | - |

## Manual review

Populated values that rest on a judgement call (owner check recommended):

| Location | timeNeeded | Why |
|---|---|---|
| `a-pa-chai` | 3h - 4h | Marker visit 3-4h round trip from Border Post 317; "2-3 days" includes travel from Điện Biên Phủ (excluded) |
| `bidoup-nui-ba-national-park` | 1h30 - 2 days | Short trails 1.5-3h; summit is a 2-day trek |
| `chua-chan-mountain` | 2h - 2 days | Cable car + trail 2-4h; power-pole trail 4-6h; "2 days and 1 night is the more rewarding way" |
| `co-to-island` | 2 days - 3 days | "Time needed: 2-3 days is the standard trip length" (content says this accounts for travel time) |
| `da-ploa-stream` | 1 day | "Time needed: 1 day and 1 night if camping overnight" (1 day = 1440) |
| `fansipan` | 1h30 - 3 days | Cable car route "Total 1.5-3 hours from Sapa center"; trek "2 nights 3 days" standard (2-3 days) |
| `french-village-ba-na` | 30 min - 45 min | "adults without children typically spend 30-45 minutes"; overnight stay recommended but not quantified |
| `hoan-kiem-lake` | 20 min - 25 min | Perimeter walk "about 1.7km, 20-25 minutes" |
| `khau-coc-cha-pass` | 1h30 | Hike to Pác Thốc viewpoint: "Budget around 1.5 hours round trip" |
| `kho-muong-village` | 45 min - 1h30 | "Time needed: 45-90 minutes to walk through the village", overnight strongly recommended (not quantified) |
| `lan-ha-bay` | 9h | Recommended full day "departing Cát Bà town at 8 AM and returning at 5 PM" = 540 min; half-day and overnight tours also exist |
| `langbiang-mountain` | 5h | Núi Bà summit trek "roughly 5 hours round trip"; the easier Đồi Ra-đa outing has no duration |
| `muong-hoa-valley` | 2h - 2 days | Lao Chải-Tả Van 2-3h; Cat Cat-Tả Van 4-5h; 15km traverse a full day; "best experienced over two days" |
| `ta-xua-mountain` | 2 days | "Standard trek: 2 days, 2 nights" (2 days = 2880; Day 1 ~8h, Day 2 ~6h of trekking) |
| `west-lake` | 1h30 - 3h | 17km cycling loop "1.5-2 hours" relaxed; "2-3 hours" tiring for many riders |
| `yavly-waterfall` | 30 min - 2 days | "Time needed: 30 minutes to 1 hour if just passing through ... or 2 days/1 night if camping" |
| `yen-tu-mountain` | 3h - 6h | Cable car only ~3h; cable up/walk down 3-4h; full walk 4-6h one way (descent not stated) |

Every NEEDS_RESEARCH row above also needs a source or an owner decision.

## Populated values (164)

| Location | minMinutes | maxMinutes | Readable | Class | Source | Evidence |
|---|---|---|---|---|---|---|
| `a-pa-chai` | 180 | 240 | 3h - 4h | A | whatToExpect, FAQ | Marker visit 3-4h round trip from Border Post 317; "2-3 days" includes travel from Điện Biên Phủ (excluded) |
| `am-tien-cave` | 120 | 180 | 2h - 3h | D | whatToExpect, FAQ | "Allow about 2-3 hours" |
| `an-binh-island` | 360 | 360 | 6h | D | tips, travelTips, FAQ | "about 6 hours (half a day)"; overnight optional |
| `an-hai-communal-house` | 30 | 45 | 30 min - 45 min | D | tips | "Allow about 30-45 minutes" |
| `b52-wreck` | 10 | 15 | 10 min - 15 min | D | tips, whatToExpect | "takes around 10-15 minutes" |
| `ba-danh-pagoda` | 30 | 45 | 30 min - 45 min | D | whatToExpect | "covered in 30-45 minutes" |
| `ba-den-mountain` | 180 | 600 | 3h - 10h | M | richSections, FAQ | Summit-only 3-4h; full day 8-10h; 2D1N camping is an optional trekker variant |
| `ba-ho-waterfall` | 240 | 300 | 4h - 5h | D | travelTips | "Allow 4-5 hours for the full round trip" |
| `ba-na-cable-car` | 630 | 630 | 10h30 | I | FAQ | "A full day (7:30 AM to 6 PM)" = 630 min; half-day "possible but rushed" |
| `ba-om-lake` | 60 | 120 | 1h - 2h | M | whatToExpect, visitorTips, FAQ | "1-1.5 hours" and "1-2 hours" |
| `bach-ma-temple` | 30 | 30 | 30 min | D | tips | "Time needed: about 30 minutes" |
| `bai-dai-cam-ranh-beach` | 60 | 240 | 1h - 4h | D | tips | "Time needed: 1-4 hours" |
| `bai-dinh-pagoda` | 180 | 240 | 3h - 4h | D | tips, travelTips, visitorTips | "at least 3-4 hours (half a day)" |
| `bai-nhat` | 30 | 120 | 30 min - 2h | D | tips | "as little as 30 minutes ... up to 2 hours" |
| `bai-tu-long-bay` | 4320 | 5760 | 3 days - 4 days | M | howToGetThere, tips, accessibility | "2 nights or 3 days 2 nights" standard (4320); accessibility "2-3 night cruise minimum" (up to 4D3N = 5760) |
| `bat-pagoda-soc-trang` | 120 | 180 | 2h - 3h | D | whatToExpect | "Budget 2-3 hours" |
| `bau-sau` | 480 | 2880 | 8h - 2 days | M | FAQ | "Allow a full day" (full day = 480); overnight "strongly recommended" (2 days 1 night = 2880) |
| `bay-mau-coconut-forest` | 40 | 50 | 40 min - 50 min | A | whatToExpect, sentiment | Basket-boat round trip "about 50 minutes" / "roughly 40-minute ride" |
| `ben-hai-river` | 90 | 150 | 1h30 - 2h30 | D | whatToExpect | "1.5-2.5 hours" |
| `ben-thanh-market` | 45 | 120 | 45 min - 2h | D | tips | "45 minutes ... up to 2 hours" |
| `bich-dong-pagoda` | 45 | 90 | 45 min - 1h30 | M | FAQ | "45-60 minutes"; "around 90 minutes" for photography |
| `bidoup-nui-ba-national-park` | 90 | 2880 | 1h30 - 2 days | M | visitorTips, FAQ, tips | Short trails 1.5-3h; summit is a 2-day trek |
| `binh-lieu-border-mountains` | 300 | 360 | 5h - 6h | A | tips, whatToExpect, FAQ | Ridge trek to Marker 1305 "5-6 hours including photography stops" |
| `bung-binh-thien-lake` | 60 | 90 | 1h - 1h30 | D | tips | "plan for 1-1.5 hours here" |
| `cafe-apartment-saigon` | 60 | 120 | 1h - 2h | D | travelTips | "a stop of an hour or two" |
| `cai-rang-floating-market` | 180 | 210 | 3h - 3h30 | M | tips, travelTips, FAQ | Boat trip from Ninh Kiều is the visit: "Total door-to-door: about 3-3.5 hours", "Budget 3 hours total"; 1.5-2h is the time at the market itself |
| `can-gio-monkey-island` | 60 | 180 | 1h - 3h | D | visitorTips | "plan 1-3 hours" |
| `cape-ca-na` | 30 | 60 | 30 min - 1h | D | travelTips | "Budget 30-60 minutes at the cape itself" |
| `cat-ba-national-park` | 90 | 480 | 1h30 - 8h | M | whatToExpect, tips, travelTips | Route 1 1.5-2h; Route 2 3-4h one way; "a full day if you're doing the Việt Hải trek or the summit" (full day = 480) |
| `cat-cat-village` | 120 | 180 | 2h - 3h | D | FAQ, tips | "Budget 2-3 hours minimum"; also "Allow a half day" |
| `cat-co-beach` | 120 | 180 | 2h - 3h | D | travelTips | "2-3 hours is enough" |
| `chua-chan-mountain` | 120 | 2880 | 2h - 2 days | M | FAQ, whatToExpect | Cable car + trail 2-4h; power-pole trail 4-6h; "2 days and 1 night is the more rewarding way" |
| `co-thach-beach` | 60 | 60 | 1h | A | whatToExpect | "An hour or so of walking and scrambling covers the main formation" |
| `co-to-island` | 2880 | 4320 | 2 days - 3 days | D | tips, travelTips | "Time needed: 2-3 days is the standard trip length" (content says this accounts for travel time) |
| `con-dao-national-park` | 480 | 480 | 8h | D | tips, FAQ | ~7.5km day trek circuit: "Allow a full day" (full day = 480) |
| `cu-chi-tunnels` | 120 | 180 | 2h - 3h | D | travelTips | "the site itself takes 2-3 hours" |
| `cua-tu-stream` | 480 | 2880 | 8h - 2 days | M | intro, travelTips, FAQ | Day trip to Gate 3 = "a full day" (480); "1-night 2-day" / 2-day Gate 7 camp (2880) |
| `da-ploa-stream` | 1440 | 1440 | 1 day | D | tips | "Time needed: 1 day and 1 night if camping overnight" (1 day = 1440) |
| `dalat-railway-station` | 45 | 150 | 45 min - 2h30 | D | tips, travelTips | "about 45 minutes" station only; "about 2.5 hours" with the round-trip train |
| `dam-trau-beach` | 60 | 240 | 1h - 4h | D | tips | "Time needed: 1-4 hours" |
| `dark-cave` | 180 | 240 | 3h - 4h | D | tips, whatToExpect, FAQ | "Time needed: 3-4 hours" |
| `datanla-waterfall` | 60 | 240 | 1h - 4h | D | tips, travelTips | "Allow 1-4 hours" |
| `dinh-mountain` | 120 | 480 | 2h - 8h | D | tips, whatToExpect | "Time needed: 2-3 hours ... 4-6 hours or a full day" (full day = 480) |
| `dong-van-market` | 120 | 120 | 2h | D | FAQ | "give it at least 2 hours" |
| `duc-pagoda` | 45 | 60 | 45 min - 1h | D | tips | "Time needed: 45-60 minutes" |
| `duck-stop-phong-nha` | 30 | 60 | 30 min - 1h | D | whatToExpect | "full visit ... closer to 30 minutes to an hour" |
| `eight-ladies-cave` | 15 | 30 | 15 min - 30 min | D | tips, FAQ | "Time needed: 15-30 minutes for the memorial site itself" |
| `elephant-mountain` | 45 | 60 | 45 min - 1h | D | tips | "Time needed: 45-60 minutes for the climb and photos" |
| `elephant-waterfall` | 30 | 45 | 30 min - 45 min | D | tips | "Time needed: 30-45 minutes" (viewing only, falls closed) |
| `fairy-stream` | 60 | 120 | 1h - 2h | D | tips | "Time needed: 1-2 hours" |
| `fansipan` | 90 | 4320 | 1h30 - 3 days | M | FAQ, howToGetThere, difficulty | Cable car route "Total 1.5-3 hours from Sapa center"; trek "2 nights 3 days" standard (2-3 days) |
| `french-village-ba-na` | 30 | 45 | 30 min - 45 min | D | FAQ | "adults without children typically spend 30-45 minutes"; overnight stay recommended but not quantified |
| `gieng-tien-peak` | 30 | 60 | 30 min - 1h | D | tips | "Time needed: 30 minutes to 1 hour" |
| `ha-long-bay` | 180 | 2880 | 3h - 2 days | M | tips, whatToExpect, FAQ | Day routes 3-4h / 5-7h; overnight "strongly recommended (minimum 2 days, 1 night)" |
| `ham-tien-beach` | 60 | 120 | 1h - 2h | D | tips | "Time needed: 1-2 hours" |
| `hang-cau-cliffs` | 45 | 120 | 45 min - 2h | D | tips | "Time needed: 45 minutes to 2 hours" |
| `hang-en` | 2880 | 2880 | 2 days | D | seoDescription, travelTips | "2-day 1-night trek" / "two days and one night" |
| `hang-pagoda` | 45 | 60 | 45 min - 1h | D | tips | "Time needed: 45 minutes to 1 hour" |
| `hanoi-st-josephs-cathedral` | 30 | 60 | 30 min - 1h | D | tips | "Budget 30 minutes to an hour" |
| `hieu-village` | 60 | 120 | 1h - 2h | D | tips, whatToExpect | "Time needed: 1-2 hours to walk the whole village" (overnight optional) |
| `hieu-waterfall` | 60 | 120 | 1h - 2h | D | tips, FAQ | "1 hour" walking tiers; "1.5-2 hours" with swimming |
| `hmong-king-palace` | 30 | 60 | 30 min - 1h | M | tips, whatToExpect, FAQ | "30-45 minute stop"; "30-60 minutes" |
| `ho-chi-minh-childhood-home` | 30 | 45 | 30 min - 45 min | D | tips | "Time needed: 30-45 minutes for the Làng Sen house itself" (+1-2h optional for the separate Hoàng Trù complex) |
| `ho-chi-minh-mausoleum-complex` | 120 | 180 | 2h - 3h | D | tips | "Time needed: 2-3 hours" |
| `ho-dynasty-citadel` | 60 | 180 | 1h - 3h | M | tips, travelTips, FAQ | "1-1.5 hours" main walls; "2-3 hours" thorough; "1-3 hours" |
| `ho-quoc-pagoda` | 60 | 90 | 1h - 1h30 | D | tips | "Time needed: About 1-1.5 hours" |
| `hoa-lo-prison` | 60 | 120 | 1h - 2h | M | tips, FAQ | "1.5 to 2 hours" with audio guide; "60-90 minutes" without |
| `hoa-lu-ancient-capital` | 90 | 120 | 1h30 - 2h | D | travelTips, FAQ | "Allow 1.5-2 hours" |
| `hoan-kiem-lake` | 20 | 25 | 20 min - 25 min | A | whatToExpect, difficulty | Perimeter walk "about 1.7km, 20-25 minutes" |
| `hoi-an-ancient-town` | 480 | 4320 | 8h - 3 days | M | travelTips | "One full day covers the landmarks" (480); "two or three days" (up to 4320) |
| `hon-chong-rock-formation` | 30 | 30 | 30 min | D | tips, FAQ | "30 minutes is genuinely sufficient" |
| `hospital-cave` | 10 | 15 | 10 min - 15 min | D | tips, travelTips | "Budget 10-15 minutes at most" |
| `hung-temple` | 180 | 240 | 3h - 4h | D | tips, visitorTips | "Plan for 3-4 hours to see the site properly" |
| `imperial-citadel-of-thang-long` | 120 | 180 | 2h - 3h | D | tips, whatToExpect | "at least 2-3 hours"; "The full visit ... takes 2-3 hours" (Fri/Sat night tour is a separate 1.5h activity) |
| `imperial-city-hue` | 180 | 480 | 3h - 8h | M | seoDescription, travelTips, FAQ | "at least 3-4 hours for the main buildings; a full day covers everything" (full day = 480) |
| `japanese-bridge` | 5 | 10 | 5 min - 10 min | A | FAQ, whatToExpect | "Walking across the bridge takes 5-10 minutes" |
| `ke-ga-lighthouse` | 60 | 120 | 1h - 2h | D | travelTips, FAQ | "takes 1-2 hours"; "Plan for 1-2 hours at the island in total" |
| `khai-dinh-tomb` | 45 | 120 | 45 min - 2h | M | tips, FAQ | "45-60 minutes to 1-2 hours depending on pace" / with a guide |
| `khau-coc-cha-pass` | 90 | 90 | 1h30 | A | whatToExpect, FAQ | Hike to Pác Thốc viewpoint: "Budget around 1.5 hours round trip" |
| `khe-van-waterfall` | 45 | 150 | 45 min - 2h30 | D | tips | "Time needed: 45-90 minutes ... or 1.5-2.5 hours" with swimming |
| `kho-muong-cave` | 60 | 60 | 1h | D | whatToExpect | "The accessible section takes around 1 hour" |
| `kho-muong-village` | 45 | 90 | 45 min - 1h30 | D | tips | "Time needed: 45-90 minutes to walk through the village", overnight strongly recommended (not quantified) |
| `kim-lien-temple` | 30 | 60 | 30 min - 1h | D | tips | "Time needed: 30-60 minutes" |
| `km0-ha-giang` | 15 | 45 | 15 min - 45 min | D | tips | "Time needed: 15-45 minutes" |
| `la-ngau-stream` | 2880 | 2880 | 2 days | I | seoDescription, travelTips, FAQ | "a 2-day trip" with an overnight camp itinerary (2 days 1 night) |
| `la-vang-sanctuary` | 60 | 90 | 1h - 1h30 | D | whatToExpect | "Most visits take 1-1.5 hours" |
| `lan-ha-bay` | 540 | 540 | 9h | I | travelTips | Recommended full day "departing Cát Bà town at 8 AM and returning at 5 PM" = 540 min; half-day and overnight tours also exist |
| `langbiang-mountain` | 300 | 300 | 5h | A | tips, visitorTips | Núi Bà summit trek "roughly 5 hours round trip"; the easier Đồi Ra-đa outing has no duration |
| `linh-phuoc-pagoda` | 90 | 120 | 1h30 - 2h | D | whatToExpect, seasonal | "Plan on about 1.5-2 hours" |
| `long-bien-bridge` | 30 | 45 | 30 min - 45 min | D | travelTips | "30-45 minutes to cross and return" (whatToExpect: 20-30 min one way) |
| `long-son-pagoda` | 45 | 60 | 45 min - 1h | D | travelTips | "Allow 45-60 minutes including the climb and descent" |
| `ma-pi-leng-pass` | 30 | 45 | 30 min - 45 min | A | howToGetThere | "The pass takes 30-45 minutes to cross at a comfortable pace with stops" |
| `mac-dynasty-citadel` | 30 | 60 | 30 min - 1h | D | tips, whatToExpect, FAQ | "Time needed: 30-60 minutes" |
| `mang-lang-church` | 45 | 75 | 45 min - 1h15 | D | tips | "Time needed: 45-75 minutes" |
| `marble-mountains` | 120 | 180 | 2h - 3h | D | whatToExpect, FAQ | "A full visit including Âm Phủ Cave takes 2-3 hours" |
| `masara-hill` | 120 | 180 | 2h - 3h | D | tips | "Time needed: 2-3 hours for a visit" (overnight camp optional) |
| `minh-dam-mountain` | 60 | 180 | 1h - 3h | D | tips | "Time needed: 1-3 hours" |
| `minh-mang-tomb` | 90 | 120 | 1h30 - 2h | D | tips, travelTips, FAQ | "Allow at least 1.5-2 hours" |
| `mui-dien` | 30 | 45 | 30 min - 45 min | D | whatToExpect | "The cape walk takes 30-45 minutes to cover properly" |
| `mui-tro-fishing-village` | 2880 | 2880 | 2 days | D | tips | "camping 2 days, 1 night is the recommended way" |
| `muong-hoa-valley` | 120 | 2880 | 2h - 2 days | M | tips, FAQ, travelTips | Lao Chải-Tả Van 2-3h; Cat Cat-Tả Van 4-5h; 15km traverse a full day; "best experienced over two days" |
| `my-son-sanctuary` | 60 | 180 | 1h - 3h | M | tips, FAQ | "2-3 hours is the standard"; "A quick visit to the highlights takes about 1-1.5 hours" |
| `nam-du-islands` | 2880 | 4320 | 2 days - 3 days | D | FAQ | "How long should I spend on Nam Du? 2 days 1 night ... 3 days 2 nights" |
| `nguom-ngao-cave` | 45 | 120 | 45 min - 2h | D | tips, whatToExpect, FAQ | Self-guided route "roughly 45 minutes"; full guided route "around 2 hours" |
| `nha-pha-historical-site` | 45 | 60 | 45 min - 1h | D | tips | "Time needed: 45-60 minutes" |
| `nhan-tower` | 30 | 60 | 30 min - 1h | D | tips, FAQ | "Time needed: 30-60 minutes"; "around 30 minutes total" |
| `nho-que-river` | 45 | 90 | 45 min - 1h30 | M | whatToExpect, entranceFee | Boat tour "typically taking 1-1.5 hours return"; per-boat pricing quotes "45-60 minutes" for small boats |
| `one-pillar-pagoda` | 10 | 30 | 10 min - 30 min | D | FAQ, highlights | "Most visitors spend 10-30 minutes at the pagoda itself" |
| `ong-cop-bridge` | 20 | 30 | 20 min - 30 min | D | tips | "Time needed: 20-30 minutes" |
| `pa-sy-waterfall` | 60 | 180 | 1h - 3h | D | tips | "Time needed: 1-3 hours" |
| `pac-bo-historic-site` | 240 | 360 | 4h - 6h | D | travelTips, visitorTips | "Allow half a day (roughly 4-6 hours) for the fuller site" |
| `paradise-cave` | 120 | 360 | 2h - 6h | D | tips, whatToExpect, FAQ | Standard tour "2-3 hours total"; adventure tour "5-6 hours" |
| `phat-diem-cathedral` | 60 | 90 | 1h - 1h30 | D | tips, FAQ | "At least 1-1.5 hours" |
| `phoenix-unicorn-islands-my-tho` | 480 | 480 | 8h | D | tips | "One full day is enough to cover the main activities on both islands" (full day = 480) |
| `phong-nha-botanic-garden` | 30 | 150 | 30 min - 2h30 | D | tips, visitorTips, FAQ | Short route "30-40 minutes round trip"; loops "1.5-2.5 hours" |
| `phong-nha-cave` | 90 | 90 | 1h30 | D | whatToExpect | "The full round trip takes approximately 1.5 hours" |
| `phu-quoc-night-market` | 60 | 180 | 1h - 3h | D | tips | "Time needed: 1-3 hours" |
| `phung-hung-mural-street` | 15 | 20 | 15 min - 20 min | D | whatToExpect | "around 15-20 minutes to walk through" |
| `phuoc-tinh-fishing-village` | 120 | 240 | 2h - 4h | D | tips | "Time needed: 2-4 hours" |
| `pirate-islands` | 360 | 2880 | 6h - 2 days | M | tips, bestTimeOfDay | "about 6 hours on the island ... is enough" or "a 2-day-1-night stay" |
| `plate-rock-reef` | 60 | 120 | 1h - 2h | D | travelTips | "Plan to spend 1-2 hours" |
| `po-nagar-cham-towers` | 60 | 90 | 1h - 1h30 | D | travelTips, difficulty | "about 60-90 minutes" |
| `quan-ba-heaven-gate` | 15 | 30 | 15 min - 30 min | D | travelTips | "Most riders stop for 15-30 minutes" |
| `quan-ba-twin-mountains` | 30 | 45 | 30 min - 45 min | D | travelTips | "Allow at least 30-45 minutes" |
| `quan-thanh-temple` | 30 | 45 | 30 min - 45 min | D | tips | "Time needed: 30-45 minutes" |
| `quang-tri-ancient-citadel` | 60 | 90 | 1h - 1h30 | D | FAQ | "allow 60-90 minutes" (a 15-minute pass-through is mentioned but not recommended) |
| `radio-tower-cat-ba` | 30 | 60 | 30 min - 1h | D | tips, bestTimeOfDay | "Allow 30-60 minutes total" |
| `red-sand-dunes` | 15 | 30 | 15 min - 30 min | M | tips, visitorTips, FAQ | "20-30 minute visit"; "15-30 minutes" |
| `s-shape-rice-terraces` | 30 | 60 | 30 min - 1h | D | whatToExpect, FAQ | "30 minutes to an hour is enough" |
| `six-senses-beach` | 60 | 120 | 1h - 2h | D | travelTips | "A visit of 1-2 hours is plenty" |
| `son-tra-peninsula` | 390 | 480 | 6h30 - 8h | I | tips, FAQ | "Half a day minimum" = "A tight half-day (5:30 AM to noon)" (390 min); "a full day is better" (480) |
| `sung-sot-cave` | 45 | 60 | 45 min - 1h | D | whatToExpect, FAQ | "45-60 minutes total" |
| `ta-pa-fields` | 45 | 60 | 45 min - 1h | D | tips | "Time needed: 45-60 minutes" |
| `ta-pa-temple` | 45 | 90 | 45 min - 1h30 | D | tips | "Time needed: 45-90 minutes" |
| `ta-xua-mountain` | 2880 | 2880 | 2 days | D | seoDescription, whatToExpect, FAQ | "Standard trek: 2 days, 2 nights" (2 days = 2880; Day 1 ~8h, Day 2 ~6h of trekking) |
| `tam-coc` | 90 | 120 | 1h30 - 2h | D | tips, whatToExpect, FAQ | Boat trip "Full round trip: 1.5-2 hours" |
| `temple-of-literature` | 120 | 180 | 2h - 3h | D | tips, FAQ | "2 hours is the right amount"; "Budget 3 hours" for steles/exhibitions |
| `tham-ma-pass` | 20 | 20 | 20 min | D | travelTips | "the views here are genuinely worth 20 minutes" |
| `thien-cung-cave` | 25 | 35 | 25 min - 35 min | D | tips, FAQ | "Time needed: 25-35 minutes for Thien Cung alone" |
| `thien-mu-pagoda` | 45 | 60 | 45 min - 1h | D | travelTips | "takes about 45-60 minutes to explore fully" |
| `thoi-loi-mountain` | 45 | 90 | 45 min - 1h30 | D | tips | "Time needed: 45-90 minutes for a standard visit" |
| `thung-khe-pass` | 30 | 30 | 30 min | D | visitorTips, FAQ | "About 30 minutes is enough" |
| `thuong-phuoc-border-gate` | 30 | 30 | 30 min | D | tips | "Time needed: About 30 minutes" |
| `ti-top-island` | 45 | 90 | 45 min - 1h30 | D | howToGetThere | Cruise stops "roughly 45 minutes to 1.5 hours, which is generally enough" |
| `to-vo-gate` | 15 | 30 | 15 min - 30 min | D | tips | "Most visitors spend just 15-30 minutes here" |
| `tra-que-village` | 120 | 240 | 2h - 4h | D | whatToExpect | "Most visitors spend between two and four hours here" |
| `tran-quoc-pagoda` | 30 | 45 | 30 min - 45 min | D | whatToExpect, travelTips | "the full visit takes 30-45 minutes" |
| `trang-an` | 150 | 180 | 2h30 - 3h | D | tips, whatToExpect | Boat tour "2.5-3 hours" |
| `trung-trang-cave` | 60 | 60 | 1h | D | travelTips, FAQ | "About 1 hour at a relaxed pace" |
| `truong-son-national-cemetery` | 60 | 120 | 1h - 2h | D | tips, FAQ | "Time needed: most visitors spend 1-2 hours" |
| `tu-duc-tomb` | 45 | 120 | 45 min - 2h | D | FAQ | "At least 45 minutes to 2+ hours depending on pace" |
| `van-long-nature-reserve` | 60 | 120 | 1h - 2h | A | whatToExpect, FAQ | Boat tour "about 1-2 hours" |
| `vietnam-military-history-museum` | 120 | 240 | 2h - 4h | M | tips, FAQ | "at least 2 hours"; enthusiasts "3-4 hours" |
| `vietnam-museum-of-ethnology` | 120 | 150 | 2h - 2h30 | M | tips, FAQ | 1h indoor + 1h outdoor; "About 2.5 hours covers everything" incl. 30-min puppet show |
| `vinh-trung-fields` | 45 | 60 | 45 min - 1h | D | tips | "Time needed: 45-60 minutes" |
| `vinpearl-safari` | 180 | 480 | 3h - 8h | M | whatToExpect, FAQ | "3-4 hours minimum"; "Each park easily fills a full day" (full day = 480) |
| `vinwonders-phu-quoc` | 600 | 600 | 10h | I | FAQ | "A full day (9 AM to 7 PM)" = 600 min |
| `voi-phuc-temple` | 30 | 60 | 30 min - 1h | D | tips | "Time needed: 30-60 minutes" |
| `war-remnants-museum` | 90 | 180 | 1h30 - 3h | M | tips, FAQ | "Most visitors spend 1.5-2 hours"; "at least 2 hours; serious visitors often need 3" |
| `west-lake` | 90 | 180 | 1h30 - 3h | A | tips, travelTips, FAQ | 17km cycling loop "1.5-2 hours" relaxed; "2-3 hours" tiring for many riders |
| `world-coffee-museum` | 60 | 180 | 1h - 3h | D | tips, FAQ | "Time needed: 1-3 hours" |
| `yavly-waterfall` | 30 | 2880 | 30 min - 2 days | D | tips, FAQ | "Time needed: 30 minutes to 1 hour if just passing through ... or 2 days/1 night if camping" |
| `yen-minh-pine-forest` | 60 | 120 | 1h - 2h | D | tips | "Time needed: 1-2 hours for photos and a short walk" (camping option not quantified) |
| `yen-tu-mountain` | 180 | 360 | 3h - 6h | M | tips, highlights, FAQ | Cable car only ~3h; cable up/walk down 3-4h; full walk 4-6h one way (descent not stated) |
