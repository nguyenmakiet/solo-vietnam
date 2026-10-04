# bestMonths - Release Batch 1 plan

Read-only plan. **No location data was changed.** Built from `npm run audit:best-time` and `reports/best-months-review.md`, plus a manual pass over all 147 SAFE rows (SAFE only means regex-consistent).

## 1. Summary

| | Count |
|---|---|
| **Batch 1 candidates** | **152** |
| - no data change (KEEP) | 144 |
| - EXPAND (needs owner sign-off before migration) | 8 |
| Excluded (later batches) | 106 |
| Public locations | 258 |

| Excluded group | Count |
|---|---|
| Needs research | 65 |
| Conflict | 3 |
| Ambiguous | 32 |
| Requires content rewrite | 2 |
| Other | 4 |

## 2. Recommended Batch 1 size

**144 locations as Batch 1a** (no `bestMonths` change: SAFE rows that survived the manual pass, regex false positives confirmed as KEEP, and owner-resolved files), **plus the 8 high-confidence EXPANDs as Batch 1b** once you sign off on the new values. That makes 152 in total.

About 59% of public locations is a meaningful first release, and every included value is either stated in the text or an owner decision. The 12 SAFE rows held back were dropped because a careful read found a contradiction, a conditional, or an unresolved policy question that the regex did not catch.

Two caveats travel with Batch 1:
- **Legacy values may be peak-only.** Many `bestMonths` were written under the old 'best season' meaning. A narrow value is not wrong (every month shown is genuinely good), but it may under-count. Rows marked Medium are the ones most worth a later 'widen review'. Label the strip 'Best months to visit' so it stays honest under both readings.
- **The filter and destination pages already use unverified months.** `/locations` month filtering and `deriveFromLocations()` read `bestMonths` for all 258 locations today. Batch 1 does not make that worse, but decide whether those should also only count released locations (section 5).

## 3. Batch 1 candidates

| Location | Current bestMonths | Decision | Final bestMonths | Evidence confidence | Reason |
|---|---|---|---|---|---|
| `angel-eye-mountain` | Jan, Feb, Mar, Apr, Sep, Oct, Nov, Dec | EXPAND | All 12 | High | All three seasons are presented as distinct worthwhile experiences, including Apr - Sep kayaking/SUP on the flooded valley. No danger wording. |
| `ba-den-mountain` | Jan, Feb, Mar, Apr, May, Nov, Dec | EXPAND | All 12 | High | 'Rainy season (Jun - Oct) suits trekkers who prefer cooler trails and lush greenery' - explicit secondary season, no danger wording. |
| `bac-son-valley` | Feb, Mar, Apr, Jul, Aug, Sep, Oct | EXPAND | Jan, Feb, Mar, Apr, Jul, Aug, Sep, Oct, Nov, Dec | High | 'Nov - Jan for trekking in cool weather' is an explicit recommendation. May-Jun stay out (unmentioned). |
| `co-to-island` | Apr, May, Jun, Jul, Aug | EXPAND | Apr, May, Jun, Jul, Aug, Sep, Oct | High | 'Sep-Oct still good but storm risk increases' - explicitly 'still good'. |
| `con-dao-prison` | Jan, Feb, Mar, Apr, Dec | EXPAND | Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Dec | High | 'Mar - Sep also workable - light rain but calmer seas' - explicit. Oct-Nov stay out (unmentioned). |
| `dray-nur-dray-sap-waterfalls` | Jan, Feb, Mar, Apr, May, Nov, Dec | EXPAND | All 12 | High | Rainy season brings 'the most powerful, dramatic flow ... genuinely impressive'; the caveat is murky water and slippery paths, not danger (same reading as Pongour). |
| `la-vang-sanctuary` | Aug | EXPAND | Jan, Feb, Mar, Apr, Aug, Dec | High | 'The cooler months from December to April are more comfortable for sightseeing' is positive. 'Open year-round' is a facility statement and does NOT add the other months. |
| `tac-say-church` | Jan, Feb, Mar, Nov, Dec | EXPAND | All 12 | High | bestTime opens with 'Year-round;' as the recommendation itself, plus the March pilgrimage. |
| `an-bang-beach` | Mar, Apr, May, Jun, Jul, Aug, Sep | KEEP | Mar, Apr, May, Jun, Jul, Aug, Sep | High | Every month in bestMonths comes from a range the text recommends (Mar, Apr, May, Jun, Jul, Aug, Sep); months the text discourages (Jan, Feb, Oct, Nov, Dec) are excluded. |
| `an-hai-communal-house` | Jan, Feb, Mar, Apr, May, Jun, Dec | KEEP | Jan, Feb, Mar, Apr, May, Jun, Dec | High | Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Apr, May, Jun, Dec); months the text discourages (Jul, Aug, Sep, Oct, Nov) are excluded. |
| `an-nhut-rice-fields` | Mar, Apr, Aug | KEEP (owner-resolved) | Mar, Apr, Aug | High | Owner-resolved 2026-10-04. Every month in bestMonths comes from a range the text recommends (Mar, Apr, Aug). |
| `an-vinh-communal-house` | All 12 | KEEP | All 12 | High | bestTime opens with 'Year-round' as the season recommendation; 12 months is stated, not inferred. |
| `b52-wreck` | All 12 | KEEP | All 12 | High | bestTime opens with 'Year-round' as the season recommendation; 12 months is stated, not inferred. |
| `ba-be-lake` | Mar, Apr, May, Sep, Oct, Nov | KEEP | Mar, Apr, May, Sep, Oct, Nov | High | Every month in bestMonths comes from a range the text recommends (Mar, Apr, May, Sep, Oct, Nov); months the text discourages (Jan, Feb, Dec) are excluded. |
| `ba-danh-pagoda` | Feb, Mar, Apr, Sep, Oct, Nov | KEEP | Feb, Mar, Apr, Sep, Oct, Nov | High | Every month in bestMonths comes from a range the text recommends (Feb, Mar, Apr, Sep, Oct, Nov). |
| `ba-hon-dam-islands` | Jan, Feb, Mar, Apr, Nov, Dec | KEEP | Jan, Feb, Mar, Apr, Nov, Dec | High | Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Apr, Nov, Dec). |
| `ba-na-cable-car` | Mar, Apr, May, Jun, Jul, Aug | KEEP | Mar, Apr, May, Jun, Jul, Aug | High | Every month in bestMonths comes from a range the text recommends (Mar, Apr, May, Jun, Jul, Aug). |
| `ba-om-lake` | Jan, Feb, Mar, Apr, Nov, Dec | KEEP | Jan, Feb, Mar, Apr, Nov, Dec | High | Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Apr, Nov, Dec). |
| `bai-dinh-pagoda` | Jan, Feb, Mar, Apr, Oct, Nov, Dec | KEEP | Jan, Feb, Mar, Apr, Oct, Nov, Dec | High | Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Apr, Oct, Nov, Dec). |
| `bai-mon-beach` | Jan, Feb, Mar, Apr, May, Jun, Jul, Aug | KEEP | Jan, Feb, Mar, Apr, May, Jun, Jul, Aug | High | Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Apr, May, Jun, Jul, Aug). |
| `bai-tu-long-bay` | Mar, Apr, May, Sep, Oct | KEEP | Mar, Apr, May, Sep, Oct | High | Every month in bestMonths comes from a range the text recommends (Mar, Apr, May, Sep, Oct); months the text discourages (Jun, Jul) are excluded. |
| `ban-gioc-waterfall` | Sep, Oct | KEEP | Sep, Oct | Medium | Every month in bestMonths comes from a range the text recommends (Sep, Oct). Narrow 2-month window (peak water flow) - may be a legacy peak-only value; widen review later. |
| `bat-pagoda-soc-trang` | All 12 | KEEP | All 12 | High | bestTime opens with 'Year-round' as the season recommendation; 12 months is stated, not inferred. |
| `bay-mau-coconut-forest` | Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov | KEEP | Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov | High | Every month in bestMonths comes from a range the text recommends (Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov). |
| `ben-hai-river` | Feb, Mar, Apr, May, Jun, Jul, Aug | KEEP | Feb, Mar, Apr, May, Jun, Jul, Aug | High | Every month in bestMonths comes from a range the text recommends (Feb, Mar, Apr, May, Jun, Jul, Aug); months the text discourages (Sep, Oct, Nov) are excluded. |
| `ben-thanh-market` | All 12 | KEEP | All 12 | High | bestTime opens with 'Year-round' as the season recommendation; 12 months is stated, not inferred. |
| `bidoup-nui-ba-national-park` | Jan, Feb, Mar, Apr, Nov, Dec | KEEP | Jan, Feb, Mar, Apr, Nov, Dec | High | Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Apr, Nov, Dec); months the text discourages (Sep, Oct) are excluded. |
| `binh-lieu-border-mountains` | Jan, Sep, Oct, Nov, Dec | KEEP (owner-resolved) | Jan, Sep, Oct, Nov, Dec | High | Owner-resolved 2026-10-04. Every month in bestMonths comes from a range the text recommends (Jan, Sep, Oct, Nov, Dec). |
| `binh-son-beach` | Mar, Apr, May, Jun, Jul, Aug, Sep | KEEP (owner-resolved) | Mar, Apr, May, Jun, Jul, Aug, Sep | High | Owner-resolved 2026-10-04. Every month in bestMonths comes from a range the text recommends (Mar, Apr, May, Jun, Jul, Aug, Sep); months the text discourages (Oct, Nov, Dec) are excluded. |
| `bu-gia-map-national-park` | Jan, Feb, Mar, Apr, Nov, Dec | KEEP | Jan, Feb, Mar, Apr, Nov, Dec | High | Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Apr, Nov, Dec); months the text discourages (May, Jun, Jul, Aug, Sep, Oct) are excluded. |
| `bui-hui-grassland` | Mar, Apr, Aug, Sep | KEEP (owner-resolved) | Mar, Apr, Aug, Sep | High | Owner-resolved 2026-10-04. Every month in bestMonths comes from a range the text recommends (Mar, Apr, Aug, Sep). |
| `bui-vien-street` | All 12 | KEEP | All 12 | High | bestTime opens with 'Year-round' as the season recommendation; 12 months is stated, not inferred. |
| `bung-binh-thien-lake` | Aug, Sep, Oct, Nov | KEEP | Aug, Sep, Oct, Nov | Medium | Every month in bestMonths comes from a range the text recommends (Aug, Sep, Oct, Nov). Outside flood season the lake is 'still peaceful, but less scenic' - excluded, which reads correctly but is borderline. |
| `cafe-apartment-saigon` | All 12 | KEEP | All 12 | High | bestTime opens with 'Year-round' as the season recommendation; 12 months is stated, not inferred. |
| `cai-rang-floating-market` | All 12 | KEEP | All 12 | High | bestTime opens with 'Year-round' as the season recommendation; 12 months is stated, not inferred. |
| `can-gio-monkey-island` | Jan, Feb, Mar, Apr, Nov, Dec | KEEP | Jan, Feb, Mar, Apr, Nov, Dec | High | Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Apr, Nov, Dec). |
| `cao-dai-holy-see` | All 12 | KEEP | All 12 | High | bestTime opens with 'Year-round' as the season recommendation; 12 months is stated, not inferred. |
| `cat-ba-national-park` | Apr, May, Jun, Sep, Oct, Nov | KEEP | Apr, May, Jun, Sep, Oct, Nov | High | Every month in bestMonths comes from a range the text recommends (Apr, May, Jun, Sep, Oct, Nov). |
| `cat-cat-village` | Apr, May, Jun, Jul, Aug, Sep, Oct | KEEP (owner-resolved) | Apr, May, Jun, Jul, Aug, Sep, Oct | High | Owner-resolved 2026-10-04. Every month in bestMonths comes from a range the text recommends (Apr, May, Jun, Jul, Aug, Sep, Oct). |
| `chua-chan-mountain` | Jan, Feb, Mar, Apr, Nov, Dec | KEEP | Jan, Feb, Mar, Apr, Nov, Dec | High | Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Apr, Nov, Dec). |
| `co-thach-beach` | Jan, Feb, Mar, Apr, Nov, Dec | KEEP | Jan, Feb, Mar, Apr, Nov, Dec | High | Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Apr, Oct, Nov, Dec); months the text discourages (Jul, Aug) are excluded. |
| `con-dao-national-park` | May, Jun, Jul, Aug, Sep | KEEP | May, Jun, Jul, Aug, Sep | High | Every month in bestMonths comes from a range the text recommends (May, Jun, Jul, Aug, Sep). |
| `crazy-house` | Sep, Oct, Nov | KEEP | Sep, Oct, Nov | High | Regex false positive: Jun-Jul is an explicit 'avoid ... when crowds peak' window; the regex misread it. |
| `cu-chi-tunnels` | Jan, Feb, Mar, Apr, Nov, Dec | KEEP | Jan, Feb, Mar, Apr, Nov, Dec | High | Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Apr, Nov, Dec). |
| `cu-mi-beach` | Jan, Feb, Mar, Apr, Oct, Nov, Dec | KEEP | Jan, Feb, Mar, Apr, Oct, Nov, Dec | High | Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Apr, Oct, Nov, Dec). |
| `cua-dai-beach` | Mar, Apr, May, Jun, Jul, Aug | KEEP | Mar, Apr, May, Jun, Jul, Aug | High | Every month in bestMonths comes from a range the text recommends (Mar, Apr, May, Jun, Jul, Aug); months the text discourages (Jan, Oct, Nov, Dec) are excluded. |
| `cua-tu-stream` | Apr, May, Jun, Jul, Aug, Sep, Oct | KEEP | Apr, May, Jun, Jul, Aug, Sep, Oct | High | Every month in bestMonths comes from a range the text recommends (Apr, May, Jun, Jul, Aug, Sep, Oct). |
| `da-ploa-stream` | Jan, Feb, Mar, Apr, May, Dec | KEEP | Jan, Feb, Mar, Apr, May, Dec | High | Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Apr, May, Dec); months the text discourages (Jun, Jul, Aug, Sep, Oct) are excluded. |
| `dalat-railway-station` | Jan, Feb, Mar, Apr, May, Nov, Dec | KEEP | Jan, Feb, Mar, Apr, May, Nov, Dec | High | Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Apr, May, Nov, Dec). |
| `datanla-waterfall` | Jan, Feb, Mar, Apr, Nov, Dec | KEEP (owner-resolved) | Jan, Feb, Mar, Apr, Nov, Dec | High | Owner decision 2026-10-04: Nov - Apr; rainy season is worth seeing but dangerous, so excluded and described in the text (CLAUDE.md rule). |
| `do-quyen-waterfall` | Jan, Feb, Mar, Apr, May, Jun, Jul, Aug | KEEP | Jan, Feb, Mar, Apr, May, Jun, Jul, Aug | High | Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Apr, May, Jun, Jul, Aug); months the text discourages (Sep, Oct, Nov, Dec) are excluded. |
| `doc-let-beach` | Jan, Feb, Mar, Apr, May, Jun, Jul, Aug | KEEP | Jan, Feb, Mar, Apr, May, Jun, Jul, Aug | High | Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Apr, May, Jun, Jul, Aug); months the text discourages (Sep, Oct, Nov, Dec) are excluded. |
| `dong-van-old-town` | Mar, Apr, Sep, Oct, Nov | KEEP | Mar, Apr, Sep, Oct, Nov | High | Every month in bestMonths comes from a range the text recommends (Mar, Apr, Sep, Oct, Nov). |
| `dragon-bridge` | All 12 | KEEP | All 12 | High | bestTime opens with 'Year-round' as the season recommendation; 12 months is stated, not inferred. |
| `du-gia-village` | Jan, Feb, Mar, Apr, May, Oct, Nov, Dec | KEEP | Jan, Feb, Mar, Apr, May, Oct, Nov, Dec | High | Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Apr, May, Oct, Nov, Dec). |
| `du-gia-waterfall` | Jun, Jul, Aug | KEEP | Jun, Jul, Aug | Medium | Every month in bestMonths comes from a range the text recommends (Jun, Jul, Aug). Narrow 3-month window - may be peak-only; widen review later. |
| `duck-stop-phong-nha` | Apr, May, Jun, Jul, Aug | KEEP | Apr, May, Jun, Jul, Aug | High | Every month in bestMonths comes from a range the text recommends (Apr, May, Jun, Jul, Aug); months the text discourages (Jan, Feb, Mar, Sep, Oct, Nov, Dec) are excluded. |
| `fansipan` | Jan, Mar, Apr, Sep, Oct, Nov, Dec | KEEP (owner-resolved) | Jan, Mar, Apr, Sep, Oct, Nov, Dec | High | Owner-resolved 2026-10-04. Every month in bestMonths comes from a range the text recommends (Jan, Mar, Apr, Sep, Oct, Nov, Dec); months the text discourages (Jun, Jul, Aug) are excluded. |
| `golden-bridge` | Mar, Apr, May, Jun, Jul, Aug | KEEP | Mar, Apr, May, Jun, Jul, Aug | High | Every month in bestMonths comes from a range the text recommends (Mar, Apr, May, Jun, Jul, Aug); months the text discourages (Jan, Nov, Dec) are excluded. |
| `ha-long-bay` | Mar, Apr, Sep, Oct, Nov | KEEP | Mar, Apr, Sep, Oct, Nov | High | Every month in bestMonths comes from a range the text recommends (Mar, Apr, Sep, Oct, Nov). |
| `ham-ninh-fishing-village` | Jan, Feb, Mar, Apr, Nov, Dec | KEEP | Jan, Feb, Mar, Apr, Nov, Dec | High | Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Apr, Nov, Dec). |
| `hang-en` | Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Dec | KEEP | Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Dec | High | Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Dec). |
| `hang-mua` | May, Jun, Oct, Nov, Dec | KEEP | May, Jun, Oct, Nov, Dec | High | Regex false positive: 'Year-round' qualifies the 7-8 AM time slot, not the seasons; bestMonths matches May-Jun + Oct-Dec. |
| `hang-rai` | Jan, Feb, Mar, Apr, May, Jun, Jul, Aug | KEEP | Jan, Feb, Mar, Apr, May, Jun, Jul, Aug | High | Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Apr, May, Jun, Jul, Aug). |
| `hanoi-old-quarter` | Jan, Feb, Mar, Apr, Oct, Nov, Dec | KEEP | Jan, Feb, Mar, Apr, Oct, Nov, Dec | High | Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Apr, Oct, Nov, Dec). |
| `hanoi-st-josephs-cathedral` | Sep, Oct, Nov, Dec | KEEP (owner-resolved) | Sep, Oct, Nov, Dec | High | Owner-resolved 2026-10-04 to Sep-Dec (Sep-Nov + Christmas Eve). Still flagged only because the regex does not read 'Christmas Eve' as December. |
| `hanoi-train-street` | Jan, Feb, Mar, Apr, Oct, Nov, Dec | KEEP | Jan, Feb, Mar, Apr, Oct, Nov, Dec | High | Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Apr, Oct, Nov, Dec). |
| `hieu-waterfall` | Jun, Jul, Aug, Sep, Oct | KEEP | Jun, Jul, Aug, Sep, Oct | High | Every month in bestMonths comes from a range the text recommends (Jun, Jul, Aug, Sep, Oct). |
| `hoa-lo-prison` | Jan, Feb, Mar, Apr, Oct, Nov, Dec | KEEP | Jan, Feb, Mar, Apr, Oct, Nov, Dec | High | Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Apr, Oct, Nov, Dec). |
| `hoa-lu-ancient-capital` | Jan, Feb, Mar, Apr, May, Oct, Nov, Dec | KEEP | Jan, Feb, Mar, Apr, May, Oct, Nov, Dec | High | Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Apr, May, Oct, Nov, Dec). |
| `hoi-an-ancient-town` | Feb, Mar, Apr, Oct, Nov | KEEP | Feb, Mar, Apr, Oct, Nov | Medium | Every month in bestMonths comes from a range the text recommends (Feb, Mar, Apr, Oct, Nov). Text gives Feb-Apr / Oct-Nov only; a major destination where the summer gap may be peak-only legacy. Consistent, but a widen-review candidate. |
| `hon-chong-rock-formation` | Jan, Feb, Mar, Apr, May, Jun, Jul, Aug | KEEP | Jan, Feb, Mar, Apr, May, Jun, Jul, Aug | High | Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Apr, May, Jun, Jul, Aug). |
| `hon-kho-island` | Feb, Mar, Apr, May, Jun, Jul, Aug, Sep | KEEP | Feb, Mar, Apr, May, Jun, Jul, Aug, Sep | High | Every month in bestMonths comes from a range the text recommends (Feb, Mar, Apr, May, Jun, Jul, Aug, Sep). |
| `hon-mun-island` | Feb, Mar, Apr, May, Jun, Jul, Aug, Sep | KEEP | Feb, Mar, Apr, May, Jun, Jul, Aug, Sep | High | Every month in bestMonths comes from a range the text recommends (Feb, Mar, Apr, May, Jun, Jul, Aug, Sep); months the text discourages (Oct, Nov) are excluded. |
| `hon-son-island` | Jan, Feb, Mar, Apr, May, Nov, Dec | KEEP | Jan, Feb, Mar, Apr, May, Nov, Dec | High | Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Apr, May, Nov, Dec). |
| `hon-tam-island` | Feb, Mar, Apr, May, Jun, Jul, Aug, Sep | KEEP | Feb, Mar, Apr, May, Jun, Jul, Aug, Sep | High | Every month in bestMonths comes from a range the text recommends (Feb, Mar, Apr, May, Jun, Jul, Aug, Sep). |
| `hon-thom-cable-car` | Jan, Feb, Mar, Apr, Nov, Dec | KEEP | Jan, Feb, Mar, Apr, Nov, Dec | High | Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Apr, Nov, Dec). |
| `hon-yen-island` | Mar, Apr, May, Jun, Jul, Aug, Sep | KEEP | Mar, Apr, May, Jun, Jul, Aug, Sep | High | Every month in bestMonths comes from a range the text recommends (Mar, Apr, May, Jun, Jul, Aug, Sep). |
| `imperial-citadel-of-thang-long` | Jan, Feb, Mar, Apr, Oct, Nov, Dec | KEEP | Jan, Feb, Mar, Apr, Oct, Nov, Dec | High | Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Apr, Oct, Nov, Dec). |
| `imperial-city-hue` | Jan, Feb, Mar, Apr, May, Jun | KEEP | Jan, Feb, Mar, Apr, May, Jun | High | Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Apr, May, Jun); months the text discourages (Oct, Nov) are excluded. |
| `japanese-bridge` | Feb, Mar, Apr, May, Jun, Jul, Aug, Oct, Nov | KEEP | Feb, Mar, Apr, May, Jun, Jul, Aug, Oct, Nov | High | Every month in bestMonths comes from a range the text recommends (Feb, Mar, Apr, May, Jun, Jul, Aug, Oct, Nov). |
| `k50-waterfall` | Jan, Feb, Mar, Apr, May, Jun | KEEP | Jan, Feb, Mar, Apr, May, Jun | High | Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Apr, May, Jun). |
| `keo-pagoda` | Feb, Mar, Apr, Sep, Oct | KEEP | Feb, Mar, Apr, Sep, Oct | High | Every month in bestMonths comes from a range the text recommends (Feb, Mar, Apr, Sep, Oct). |
| `khai-dinh-tomb` | Jan, Feb, Mar, Apr, Sep, Oct, Nov | KEEP | Jan, Feb, Mar, Apr, Sep, Oct, Nov | High | Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Apr, Sep, Oct, Nov). |
| `khem-beach` | May, Jun, Jul, Aug, Sep | KEEP | May, Jun, Jul, Aug, Sep | High | Every month in bestMonths comes from a range the text recommends (May, Jun, Jul, Aug, Sep). |
| `kon-tum-wooden-church` | Sep, Oct, Nov, Dec | KEEP | Sep, Oct, Nov, Dec | High | Every month in bestMonths comes from a range the text recommends (Sep, Oct, Nov, Dec). |
| `ky-co-beach` | Apr, May, Jun, Jul, Aug, Sep | KEEP | Apr, May, Jun, Jul, Aug, Sep | High | Every month in bestMonths comes from a range the text recommends (Apr, May, Jun, Jul, Aug, Sep). |
| `la-ngau-stream` | Jan, Feb, Mar, Apr, Dec | KEEP | Jan, Feb, Mar, Apr, Dec | High | Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Apr, Dec). |
| `lan-ha-bay` | Apr, May, Jun, Sep, Oct, Nov | KEEP | Apr, May, Jun, Sep, Oct, Nov | High | Every month in bestMonths comes from a range the text recommends (Apr, May, Jun, Sep, Oct, Nov). |
| `langbiang-mountain` | Jan, Feb, Mar, Nov, Dec | KEEP | Jan, Feb, Mar, Nov, Dec | High | Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Nov, Dec); months the text discourages (Apr, May, Jun, Jul, Aug, Sep, Oct) are excluded. |
| `linh-phuoc-pagoda` | All 12 | KEEP | All 12 | High | bestTime opens with 'Year-round' as the season recommendation; 12 months is stated, not inferred. |
| `lo-lo-chai-village` | Mar, Apr, Oct, Nov, Dec | KEEP | Mar, Apr, Oct, Nov, Dec | High | Every month in bestMonths comes from a range the text recommends (Mar, Apr, Oct, Nov, Dec). |
| `long-bien-bridge` | Jan, Feb, Mar, Apr, Oct, Nov, Dec | KEEP | Jan, Feb, Mar, Apr, Oct, Nov, Dec | High | Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Apr, Oct, Nov, Dec). |
| `long-son-pagoda` | All 12 | KEEP | All 12 | High | bestTime opens with 'Year-round' as the season recommendation; 12 months is stated, not inferred. |
| `lung-cu-flag-tower` | Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov | KEEP | Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov | High | Every month in bestMonths comes from a range the text recommends (Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov). |
| `lung-po-red-river-source` | Mar, Sep, Oct, Nov | KEEP | Mar, Sep, Oct, Nov | High | Every month in bestMonths comes from a range the text recommends (Mar, Sep, Oct, Nov). |
| `ly-son-garlic-fields` | Jan, Feb, Mar, Nov, Dec | KEEP | Jan, Feb, Mar, Nov, Dec | High | Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Nov, Dec). |
| `ma-pi-leng-pass` | Mar, Apr, Sep, Oct, Nov | KEEP | Mar, Apr, Sep, Oct, Nov | High | Every month in bestMonths comes from a range the text recommends (Mar, Apr, Sep, Oct, Nov); months the text discourages (Jun, Jul, Aug) are excluded. |
| `marble-mountains` | Mar, Apr, May, Jun, Jul, Aug, Sep | KEEP | Mar, Apr, May, Jun, Jul, Aug, Sep | High | Every month in bestMonths comes from a range the text recommends (Mar, Apr, May, Jun, Jul, Aug, Sep); months the text discourages (Jan, Feb, Oct, Nov, Dec) are excluded. |
| `mau-son-mountain` | Jan, Feb, Mar, Apr, May, Jul, Aug, Sep, Oct, Nov, Dec | KEEP | Jan, Feb, Mar, Apr, May, Jul, Aug, Sep, Oct, Nov, Dec | High | Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Apr, May, Jul, Aug, Sep, Oct, Nov, Dec). |
| `minh-mang-tomb` | Jan, Feb, Mar, Apr, Sep, Oct, Nov | KEEP | Jan, Feb, Mar, Apr, Sep, Oct, Nov | High | Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Apr, Sep, Oct, Nov). |
| `moc-chau-tea-hills` | Mar, Apr, Oct, Nov | KEEP | Mar, Apr, Oct, Nov | High | Every month in bestMonths comes from a range the text recommends (Mar, Apr, Oct, Nov). |
| `mui-ca-mau-national-park` | Jan, Feb, Mar, Apr, Dec | KEEP | Jan, Feb, Mar, Apr, Dec | High | Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Apr, Dec). |
| `mui-dien` | Apr, May, Jun, Jul, Aug, Sep | KEEP | Apr, May, Jun, Jul, Aug, Sep | High | Every month in bestMonths comes from a range the text recommends (Apr, May, Jun, Jul, Aug, Sep). |
| `muong-hoa-valley` | Jan, Feb, Mar, Apr, May, Aug, Sep, Dec | KEEP (owner-resolved) | Jan, Feb, Mar, Apr, May, Aug, Sep, Dec | High | Owner-resolved 2026-10-04. Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Apr, May, Aug, Sep, Dec). |
| `my-khe-beach` | Apr, May, Jun, Jul, Aug, Sep | KEEP | Apr, May, Jun, Jul, Aug, Sep | High | Every month in bestMonths comes from a range the text recommends (Apr, May, Jun, Jul, Aug, Sep); months the text discourages (Jan, Feb, Oct, Nov, Dec) are excluded. |
| `my-son-sanctuary` | Feb, Mar, Apr, May, Jun, Jul, Aug | KEEP | Feb, Mar, Apr, May, Jun, Jul, Aug | High | Every month in bestMonths comes from a range the text recommends (Feb, Mar, Apr, May, Jun, Jul, Aug); months the text discourages (Jan, Oct, Nov, Dec) are excluded. |
| `nam-du-islands` | Jan, Feb, Mar, Apr, May, Nov, Dec | KEEP | Jan, Feb, Mar, Apr, May, Nov, Dec | High | Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Apr, May, Nov, Dec). |
| `nguom-ngao-cave` | All 12 | KEEP | All 12 | High | Every month in bestMonths comes from a range the text recommends (All 12). |
| `nho-que-river` | Jan, Feb, Mar, Apr, Sep, Oct, Nov, Dec | KEEP (owner-resolved) | Jan, Feb, Mar, Apr, Sep, Oct, Nov, Dec | High | Owner-resolved 2026-10-04. Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Apr, Sep, Oct, Nov, Dec); months the text discourages (May, Jun, Jul, Aug) are excluded. |
| `o-quy-ho-pass` | Mar, Apr, May, Sep, Oct, Nov | KEEP | Mar, Apr, May, Sep, Oct, Nov | High | Every month in bestMonths comes from a range the text recommends (Mar, Apr, May, Sep, Oct, Nov). |
| `paradise-cave` | Apr, May, Jun, Jul, Aug | KEEP | Apr, May, Jun, Jul, Aug | High | Regex false positive: Oct-Nov appears inside 'Avoid Sep - Mar ... risk of flooding Oct-Nov'. |
| `phat-diem-cathedral` | Jan, Feb, Mar, Apr, Nov, Dec | KEEP | Jan, Feb, Mar, Apr, Nov, Dec | High | Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Apr, Nov, Dec). |
| `phi-lieng-waterfall` | Jan, Feb, Mar, Apr, Nov, Dec | KEEP (owner-resolved) | Jan, Feb, Mar, Apr, Nov, Dec | High | Owner decision 2026-10-04: Nov - Apr; same dangerous-season rule. |
| `phong-nam-valley` | Mar, Apr, May, Sep, Oct | KEEP | Mar, Apr, May, Sep, Oct | High | Every month in bestMonths comes from a range the text recommends (Mar, Apr, May, Sep, Oct). |
| `phong-nha-cave` | Mar, Apr, May, Jun, Jul, Aug | KEEP | Mar, Apr, May, Jun, Jul, Aug | High | Every month in bestMonths comes from a range the text recommends (Mar, Apr, May, Jun, Jul, Aug); months the text discourages (Sep, Oct, Nov) are excluded. |
| `phu-quy-island` | Mar, Apr, May, Jun, Jul, Aug | KEEP | Mar, Apr, May, Jun, Jul, Aug | High | Every month in bestMonths comes from a range the text recommends (Mar, Apr, May, Jun, Jul, Aug). |
| `phuoc-binh-beach` | Jan, Feb, Mar, Apr, Oct, Nov, Dec | KEEP | Jan, Feb, Mar, Apr, Oct, Nov, Dec | High | Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Apr, Oct, Nov, Dec). |
| `phuoc-hai-fishing-village` | Jan, Feb, Mar, Apr, Nov, Dec | KEEP | Jan, Feb, Mar, Apr, Nov, Dec | High | Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Apr, Nov, Dec). |
| `plate-rock-reef` | Jan, Feb, Mar, Apr, May, Jun, Jul, Aug | KEEP | Jan, Feb, Mar, Apr, May, Jun, Jul, Aug | High | Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Apr, May, Jun, Jul, Aug); months the text discourages (Sep, Oct, Nov, Dec) are excluded. |
| `po-nagar-cham-towers` | All 12 | KEEP | All 12 | High | bestTime opens with 'Year-round' as the season recommendation; 12 months is stated, not inferred. |
| `pongour-waterfall` | All 12 | KEEP (owner-resolved) | All 12 | Medium | Owner-resolved 2026-10-04. Every month in bestMonths comes from a range the text recommends (All 12). Owner-resolved to 12 months. The rainy season mentions 'slippery paths' (not 'dangerous'), so the dangerous-season rule does not apply - confirm this matches the Datanla / Phi Liêng decision. |
| `rach-vem-fishing-village` | Jan, Feb, Mar, Apr, Nov, Dec | KEEP | Jan, Feb, Mar, Apr, Nov, Dec | High | Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Apr, Nov, Dec). |
| `sao-beach` | Jun, Jul, Aug, Sep, Oct | KEEP | Jun, Jul, Aug, Sep, Oct | High | Regex false positive: Nov-Apr is described as 'Bãi Sao's rougher season'; Jun - Oct is correct. |
| `son-tra-peninsula` | Mar, Apr, May, Jun, Jul, Aug, Sep | KEEP | Mar, Apr, May, Jun, Jul, Aug, Sep | High | Regex false positive: Oct - Feb 'brings rain and fog; roads can be slippery' - purely negative. |
| `sung-sot-cave` | Apr, May, Jun, Oct, Nov, Dec | KEEP | Apr, May, Jun, Oct, Nov, Dec | Medium | Every month in bestMonths comes from a range the text recommends (Apr, May, Jun, Oct, Nov, Dec). Consistent with the named windows; 'bring a warm layer in winter' hints winter visits but does not recommend them. |
| `ta-dung-lake` | Jan, Feb, Mar, Apr, Jul, Aug, Sep, Oct, Nov, Dec | KEEP | Jan, Feb, Mar, Apr, Jul, Aug, Sep, Oct, Nov, Dec | High | Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Apr, Jul, Aug, Sep, Oct, Nov, Dec). |
| `ta-hien-street` | All 12 | KEEP | All 12 | High | bestTime opens with 'Year-round' as the season recommendation; 12 months is stated, not inferred. |
| `ta-nang-phan-dung-trek` | Jan, Feb, Mar, Aug, Sep, Oct | KEEP | Jan, Feb, Mar, Aug, Sep, Oct | Medium | Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Aug, Sep, Oct). Includes Aug-Oct rainy season with 'monitor weather carefully' - not called dangerous, so it stays, but worth an owner glance under the dangerous-season rule. |
| `ta-xua-mountain` | Jan, Feb, Mar, Apr, Nov, Dec | KEEP | Jan, Feb, Mar, Apr, Nov, Dec | High | Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Apr, Nov, Dec). |
| `tam-coc` | Mar, Apr, May, Jun, Jul | KEEP (owner-resolved) | Mar, Apr, May, Jun, Jul | High | Owner-resolved 2026-10-04. Every month in bestMonths comes from a range the text recommends (Mar, Apr, May, Jun, Jul). |
| `tay-phuong-pagoda` | Jan, Feb, Mar, Apr, Oct, Nov, Dec | KEEP | Jan, Feb, Mar, Apr, Oct, Nov, Dec | High | Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Apr, Oct, Nov, Dec). |
| `temple-of-literature` | Jan, Feb, Mar, Apr, Oct, Nov, Dec | KEEP | Jan, Feb, Mar, Apr, Oct, Nov, Dec | High | Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Apr, Oct, Nov, Dec). |
| `tham-ma-pass` | Mar, Apr, Sep, Oct, Nov | KEEP | Mar, Apr, Sep, Oct, Nov | High | Every month in bestMonths comes from a range the text recommends (Mar, Apr, Sep, Oct, Nov). |
| `thang-hen-lake` | Jun, Jul, Aug, Sep | KEEP | Jun, Jul, Aug, Sep | High | Every month in bestMonths comes from a range the text recommends (Jun, Jul, Aug, Sep). |
| `thung-khe-pass` | Mar, Apr, May, Sep, Oct, Nov | KEEP | Mar, Apr, May, Sep, Oct, Nov | High | Every month in bestMonths comes from a range the text recommends (Mar, Apr, May, Sep, Oct, Nov); months the text discourages (Jul, Aug) are excluded. |
| `thung-nham-bird-park` | Apr, May, Jun, Jul, Aug, Oct, Nov | KEEP | Apr, May, Jun, Jul, Aug, Oct, Nov | High | Every month in bestMonths comes from a range the text recommends (Apr, May, Jun, Jul, Aug, Oct, Nov). |
| `thuong-phuoc-border-gate` | Jan, Feb, Mar, Apr, Nov, Dec | KEEP | Jan, Feb, Mar, Apr, Nov, Dec | High | Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Apr, Nov, Dec). |
| `tra-que-village` | Feb, Mar, Apr, Sep, Oct, Nov | KEEP | Feb, Mar, Apr, Sep, Oct, Nov | High | Every month in bestMonths comes from a range the text recommends (Feb, Mar, Apr, Sep, Oct, Nov). |
| `tra-su-cajuput-forest` | Sep, Oct, Nov | KEEP | Sep, Oct, Nov | Medium | Every month in bestMonths comes from a range the text recommends (Sep, Oct, Nov). Narrow flood-season window, consistent with the text; widen review later. |
| `trang-an` | Jan, Feb, Mar, Apr, May, Jun, Sep, Oct, Nov | KEEP | Jan, Feb, Mar, Apr, May, Jun, Sep, Oct, Nov | High | Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Apr, May, Jun, Sep, Oct, Nov). |
| `trung-trang-cave` | Apr, May, Jun, Jul, Aug, Sep | KEEP | Apr, May, Jun, Jul, Aug, Sep | High | Every month in bestMonths comes from a range the text recommends (Apr, May, Jun, Jul, Aug, Sep). |
| `tu-duc-tomb` | Jan, Feb, Mar, Apr | KEEP | Jan, Feb, Mar, Apr | High | Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Apr); months the text discourages (Sep, Oct, Nov, Dec) are excluded. |
| `van-long-nature-reserve` | Jan, Feb, Mar, Apr, May, Jun, Oct, Nov, Dec | KEEP | Jan, Feb, Mar, Apr, May, Jun, Oct, Nov, Dec | High | Regex false positive: Jul-Aug is 'rainy and less ideal'; the May-Jun lotus window is already included. |
| `vietnam-military-history-museum` | All 12 | KEEP | All 12 | High | bestTime opens with 'Year-round' as the season recommendation; 12 months is stated, not inferred. |
| `vietnam-museum-of-ethnology` | Jan, Feb, Mar, Apr, Oct, Nov, Dec | KEEP | Jan, Feb, Mar, Apr, Oct, Nov, Dec | High | Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Apr, Oct, Nov, Dec). |
| `vinpearl-safari` | Jan, Feb, Mar, Apr, Nov, Dec | KEEP | Jan, Feb, Mar, Apr, Nov, Dec | High | Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Apr, Nov, Dec). |
| `vinwonders-phu-quoc` | Jan, Feb, Mar, Apr, Nov, Dec | KEEP | Jan, Feb, Mar, Apr, Nov, Dec | High | Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Apr, Nov, Dec). |
| `war-remnants-museum` | All 12 | KEEP | All 12 | High | bestTime opens with 'Year-round' as the season recommendation; 12 months is stated, not inferred. |
| `y-ty` | Jan, Feb, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec | KEEP | Jan, Feb, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec | High | Every month in bestMonths comes from a range the text recommends (Jan, Feb, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec). |
| `yavly-waterfall` | Jan, Feb, Mar, Apr, Nov, Dec | KEEP | Jan, Feb, Mar, Apr, Nov, Dec | High | Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Apr, Nov, Dec). |
| `yen-tu-mountain` | Jan, Feb, Mar, Apr, May, Jun | KEEP (owner-resolved) | Jan, Feb, Mar, Apr, May, Jun | High | Owner-resolved 2026-10-04. Every month in bestMonths comes from a range the text recommends (Jan, Feb, Mar, Apr, May, Jun). |

## 4. Explicitly excluded

### Needs research (65)

| Location | Audit group | Why NOT in Batch 1 | Future action |
|---|---|---|---|
| `an-binh-island` | MULTI_SEASON | Late Dec-Apr moss is 'a niche draw' during rougher sailing - ferry reliability unknown. | Research ferry operation in Jan-Mar |
| `bach-ma-temple` | NEEDS_RESEARCH | Text says the site is indoor / weather-independent, which supports 12 months, but the regex group is NEEDS_RESEARCH; held per scope. | Batch 2 quick win (confirm 12 months) |
| `bai-dai-cam-ranh-beach` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (Jan, Feb, Mar, Apr, May, Jun, Jul, Aug) has no textual source. | Research months (source or firsthand), then re-audit |
| `dam-trau-beach` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (Jan, Feb, Mar, Apr, Nov, Dec) has no textual source. | Research months (source or firsthand), then re-audit |
| `dark-cave` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (Feb, Mar, Apr, May, Jun, Jul, Aug) has no textual source. | Research months (source or firsthand), then re-audit |
| `dau-tieng-lake` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (Jan, Feb, Mar, Apr, Nov, Dec) has no textual source. | Research months (source or firsthand), then re-audit |
| `dinh-mountain` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (Jan, Feb, Mar, Apr, Nov, Dec) has no textual source. | Research months (source or firsthand), then re-audit |
| `doi-nhai-beach` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (Jan, Feb, Mar, Apr, Nov, Dec) has no textual source. | Research months (source or firsthand), then re-audit |
| `don-village` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (May, Jun, Sep, Oct) has no textual source. | Research months (source or firsthand), then re-audit |
| `duc-pagoda` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (Apr, May, Jun, Jul, Aug) has no textual source. | Research months (source or firsthand), then re-audit |
| `eight-ladies-cave` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (Mar, Apr, May, Jun, Jul, Aug) has no textual source. | Research months (source or firsthand), then re-audit |
| `elephant-mountain` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (Jan, Feb, Mar, Apr, Nov, Dec) has no textual source. | Research months (source or firsthand), then re-audit |
| `elephant-waterfall` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (Jan, Feb, Mar, Nov, Dec) has no textual source. | Research months (source or firsthand), then re-audit |
| `fairy-stream` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (Jan, Feb, Mar, Apr, Nov, Dec) has no textual source. | Research months (source or firsthand), then re-audit |
| `gieng-tien-peak` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (Apr, May, Jun, Jul, Aug) has no textual source. | Research months (source or firsthand), then re-audit |
| `ham-tien-beach` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (Jan, Feb, Mar, Apr, Nov, Dec) has no textual source. | Research months (source or firsthand), then re-audit |
| `hang-cau-cliffs` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (Apr, May, Jun, Jul, Aug) has no textual source. | Research months (source or firsthand), then re-audit |
| `hang-pagoda` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (Apr, May, Jun, Jul, Aug) has no textual source. | Research months (source or firsthand), then re-audit |
| `ho-chi-minh-childhood-home` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (Jan, Feb, Mar, Apr, May, Jun, Jul, Oct, Nov, Dec) has no textual source. | Research months (source or firsthand), then re-audit |
| `ho-chi-minh-mausoleum-complex` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (Jan, Feb, Mar, Apr, Nov, Dec) has no textual source. | Research months (source or firsthand), then re-audit |
| `ho-quoc-pagoda` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (Jan, Feb, Mar, Apr, Nov, Dec) has no textual source. | Research months (source or firsthand), then re-audit |
| `hung-temple` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (Jan, Feb, Mar, Apr, May, Oct, Nov, Dec) has no textual source. | Research months (source or firsthand), then re-audit |
| `khau-pha-pass` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (May, Jun, Sep, Oct) has no textual source. | Research months (source or firsthand), then re-audit |
| `khe-van-waterfall` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (Jan, Feb, Mar, Apr, May, Jun, Jul, Aug) has no textual source. | Research months (source or firsthand), then re-audit |
| `kho-muong-cave` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (Jan, Feb, Mar, Apr, Nov, Dec) has no textual source. | Research months (source or firsthand), then re-audit |
| `kho-muong-village` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (May, Jun, Sep, Oct) has no textual source. | Research months (source or firsthand), then re-audit |
| `kim-lien-temple` | NEEDS_RESEARCH | Text says the site is indoor / weather-independent, which supports 12 months, but the regex group is NEEDS_RESEARCH; held per scope. | Batch 2 quick win (confirm 12 months) |
| `km0-ha-giang` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (Jan, Feb, Mar, Apr, Sep, Oct, Nov, Dec) has no textual source. | Research months (source or firsthand), then re-audit |
| `mac-dynasty-citadel` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (Jan, Feb, Mar, Apr, Oct, Nov, Dec) has no textual source. | Research months (source or firsthand), then re-audit |
| `mang-lang-church` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep) has no textual source. | Research months (source or firsthand), then re-audit |
| `masara-hill` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (Jan, Feb, Mar, Apr, Nov, Dec) has no textual source. | Research months (source or firsthand), then re-audit |
| `minh-dam-mountain` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (Jan, Feb, Mar, Apr, May, Nov, Dec) has no textual source. | Research months (source or firsthand), then re-audit |
| `mooc-spring` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (Feb, Mar, Apr, May, Jun, Jul, Aug) has no textual source. | Research months (source or firsthand), then re-audit |
| `mui-tro-fishing-village` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (Jan, Feb, Mar, Apr, Nov, Dec) has no textual source. | Research months (source or firsthand), then re-audit |
| `ngoc-son-temple` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (Jan, Feb, Mar, Apr, Sep, Oct, Nov) has no textual source. | Research months (source or firsthand), then re-audit |
| `nha-pha-historical-site` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (Mar, Apr, May, Jun, Jul, Aug) has no textual source. | Research months (source or firsthand), then re-audit |
| `nhan-tower` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (Jan, Feb, Mar, Apr, May, Jun, Jul, Aug) has no textual source. | Research months (source or firsthand), then re-audit |
| `ong-cop-bridge` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (Jan, Feb, Mar, Apr, May, Jun, Jul, Aug) has no textual source. | Research months (source or firsthand), then re-audit |
| `pa-sy-waterfall` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (Sep, Oct, Nov, Dec) has no textual source. | Research months (source or firsthand), then re-audit |
| `pac-bo-historic-site` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (Jan, Feb, Mar, Apr, Oct, Nov, Dec) has no textual source. | Research months (source or firsthand), then re-audit |
| `phu-quoc-night-market` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (Jan, Feb, Mar, Apr, Nov, Dec) has no textual source. | Research months (source or firsthand), then re-audit |
| `phuoc-tinh-fishing-village` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (Jan, Feb, Mar, Apr, Nov, Dec) has no textual source. | Research months (source or firsthand), then re-audit |
| `pirate-islands` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (Jan, Feb, Mar, Apr, Dec) has no textual source. | Research months (source or firsthand), then re-audit |
| `quan-ba-heaven-gate` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (Jan, Feb, Mar, Apr, Sep, Oct, Nov, Dec) has no textual source. | Research months (source or firsthand), then re-audit |
| `quan-ba-twin-mountains` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (Mar, Apr, May, Sep, Oct, Nov) has no textual source. | Research months (source or firsthand), then re-audit |
| `quan-thanh-temple` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (All 12) has no textual source. | Research months (source or firsthand), then re-audit |
| `radio-tower-cat-ba` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (Jan, Feb, Mar, Apr, Oct, Nov, Dec) has no textual source. | Research months (source or firsthand), then re-audit |
| `red-sand-dunes` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (All 12) has no textual source. | Research months (source or firsthand), then re-audit |
| `s-shape-rice-terraces` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (May, Jun, Sep, Oct) has no textual source. | Research months (source or firsthand), then re-audit |
| `sa-vi-cape` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (Apr, May, Jun, Jul, Aug, Sep) has no textual source. | Research months (source or firsthand), then re-audit |
| `saigon-central-post-office` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (All 12) has no textual source. | Research months (source or firsthand), then re-audit |
| `six-senses-beach` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (Mar, Apr, May, Jun, Jul, Aug, Sep) has no textual source. | Research months (source or firsthand), then re-audit |
| `sunworld-beach-cat-ba` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (Apr, May, Jun, Jul, Aug, Sep) has no textual source. | Research months (source or firsthand), then re-audit |
| `ta-pa-fields` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (Jul, Aug, Sep, Oct, Nov) has no textual source. | Research months (source or firsthand), then re-audit |
| `ta-pa-temple` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (All 12) has no textual source. | Research months (source or firsthand), then re-audit |
| `ta-van-village` | MULTI_SEASON | Aug harvest timing is hedged in the text itself ('some sources cite Aug-Sep'). | Confirm harvest timing |
| `thien-cung-cave` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (Jan, Feb, Mar, Apr, Oct, Nov, Dec) has no textual source. | Research months (source or firsthand), then re-audit |
| `thoi-loi-mountain` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (Mar, Apr, May, Jun, Jul, Aug) has no textual source. | Research months (source or firsthand), then re-audit |
| `ti-top-island` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (Mar, Apr, May, Sep, Oct, Nov) has no textual source. | Research months (source or firsthand), then re-audit |
| `to-vo-gate` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (Jan, Feb, Mar, Apr, May, Jun, Jul, Aug) has no textual source. | Research months (source or firsthand), then re-audit |
| `truong-son-national-cemetery` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (Jan, Feb, Mar, Apr, Nov, Dec) has no textual source. | Research months (source or firsthand), then re-audit |
| `vinh-trung-fields` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (Aug, Sep, Oct, Nov) has no textual source. | Research months (source or firsthand), then re-audit |
| `voi-phuc-temple` | NEEDS_RESEARCH | Text says the site is indoor / weather-independent, which supports 12 months, but the regex group is NEEDS_RESEARCH; held per scope. | Batch 2 quick win (confirm 12 months) |
| `world-coffee-museum` | NEEDS_RESEARCH | Text says the site is indoor / weather-independent, which supports 12 months, but the regex group is NEEDS_RESEARCH; held per scope. | Batch 2 quick win (confirm 12 months) |
| `yen-minh-pine-forest` | NEEDS_RESEARCH | bestTime is time of day only; bestMonths (Jan, Feb, Mar, Apr, Sep, Oct, Nov, Dec) has no textual source. | Research months (source or firsthand), then re-audit |

### Conflict (3)

| Location | Audit group | Why NOT in Batch 1 | Future action |
|---|---|---|---|
| `a-pa-chai` | SAFE | Sep is in bestMonths and in the recommended 'Sep-Oct golden rice' window, but the same text calls the May - Sep wet season 'muddy and dangerous underfoot'. Under the dangerous-season rule, Sep is contradictory. | Owner decides whether Sep stays; fix text or bestMonths |
| `back-beach-vung-tau` | SAFE | Nov is in bestMonths (Nov - Apr) and also in 'avoid Aug - Nov if a clean beach matters'. May-Jul are unmentioned. | Resolve Nov; decide whether a conditional avoid ('if a clean beach matters') excludes months |
| `son-doong-cave` | SAFE | bestMonths includes Jan, but the text says 'cave closes Sep – Jan'. Internally contradictory. | Verify the expedition calendar; fix the text or Jan |

### Ambiguous (32)

| Location | Audit group | Why NOT in Batch 1 | Future action |
|---|---|---|---|
| `am-tien-cave` | MULTI_SEASON | Medium-confidence EXPAND (Jun lotus, Jul avoided). | Owner sign-off on EXPAND -> Batch 2 |
| `ba-ho-waterfall` | CONFLICT | Dec-Jan jade-green window is qualified ('tail end of flood season, check conditions'); bestMonths keeps Jan, drops Dec. | Research or owner decision, then re-audit |
| `bai-nhat` | CONFLICT | Time-of-day text; 'if visiting Apr-Aug' is a stargazing conditional. Mar-Oct is unsupported. | Research or owner decision, then re-audit |
| `bau-sau` | SAFE | Jul - Oct wet season 'makes the trek difficult but the forest sounds and atmosphere are at their most intense' - a trade-off or a safety warning? May-Jun are unmentioned. | Apply the dangerous-season rule explicitly (owner call) |
| `bich-dong-pagoda` | CONFLICT | Jun is unsupported (text: late May, Mar-Apr). | Research or owner decision, then re-audit |
| `can-gio-beach` | SAFE | 'Locals swim right through the warmer months too', with an August storm caveat - implies May-Oct may be worth considering, but bestMonths is Nov - Apr. | Decide EXPAND or KEEP |
| `cape-ca-na` | SAFE | Sep - Dec is 'less suited to swimming, though it's still fine for the drive-through views, the seafood, and local culture' - a positive secondary experience that is excluded. | Decide EXPAND or KEEP |
| `cat-ba-town` | MULTI_SEASON | Medium-confidence EXPAND ('lively year-round'; crowds/cold are preferences). | Owner sign-off -> Batch 2 |
| `cat-co-beach` | MULTI_SEASON | Sep-Oct EXPAND is supported, but Nov and Mar ('worth checking the forecast') are unresolved. | Decide Nov/Mar -> Batch 2 |
| `cat-tien-national-park` | MULTI_SEASON | Rainy season: 'longer treks become harder' - check against the dangerous-season rule before expanding. | Owner call -> Batch 2 |
| `diep-son-island` | MULTI_SEASON | Medium-confidence EXPAND (Jul-Sep 'if you don't mind rain'). | Owner sign-off -> Batch 2 |
| `dong-van-market` | CONFLICT | Weekly market; only Oct-Nov is mentioned (as a bonus backdrop). Jan-Mar / Dec are unsupported. | Research or owner decision, then re-audit |
| `french-village-ba-na` | MULTI_SEASON | Medium-confidence EXPAND (Oct-Feb fog and cold, 'atmospheric'). | Owner sign-off -> Batch 2 |
| `hieu-village` | CONFLICT | Only Jun is supported; May, Sep, Oct have no source. | Research or owner decision, then re-audit |
| `hmong-king-palace` | CONFLICT | 12 months, but the text only names Sep-Nov. | Research or owner decision, then re-audit |
| `ho-dynasty-citadel` | CONFLICT | Time-of-day text with a summer conditional; Oct-Apr is unsupported. | Research or owner decision, then re-audit |
| `hoan-kiem-lake` | MULTI_SEASON | Medium-confidence EXPAND (year-round pedestrian-zone atmosphere). | Owner sign-off / urban year-round policy -> Batch 2 |
| `jade-emperor-pagoda` | SAFE | 12 months rests on 'Early morning year-round', which is a time-of-day phrase, not a seasonal recommendation. | Confirm year-round suitability (likely fine for an indoor pagoda) - Batch 2 quick win |
| `ke-ga-lighthouse` | MULTI_SEASON | Medium-confidence EXPAND (Sep-Oct showers, check forecast). | Owner sign-off -> Batch 2 |
| `khau-coc-cha-pass` | MULTI_SEASON | Aug-Oct scenic bonus vs 'riskier riding conditions' and landslide risk - the new dangerous-season rule probably means KEEP, not EXPAND. | Re-evaluate under the dangerous-season rule |
| `mui-ne-fishing-village` | MULTI_SEASON | Medium-confidence EXPAND (fish market 'any time of year'). | Owner sign-off -> Batch 2 |
| `one-pillar-pagoda` | MULTI_SEASON | Medium-confidence EXPAND ('photogenic year-round'). | Urban year-round policy -> Batch 2 |
| `phoenix-unicorn-islands-my-tho` | SAFE | Mar - May is excluded through a conditional avoid ('Avoid Mar - May if the basket boat...'). | Decide whether conditional avoids exclude months |
| `phong-nha-botanic-garden` | MULTI_SEASON | Sep-Feb: slippery trails and 'stronger currents' at swimming pools - check against the dangerous-season rule. | Owner call -> Batch 2 |
| `thien-mu-pagoda` | MULTI_SEASON | Medium-confidence EXPAND (Jan pilgrimage season). | Owner sign-off -> Batch 2 |
| `tran-quoc-pagoda` | SAFE | 'Sunset visits in any season are worthwhile' supports year-round, but bestMonths is Oct - Apr (EXPAND candidate). | Decide EXPAND to 12 |
| `tri-an-lake` | MULTI_SEASON | Medium-confidence EXPAND (Jul-Aug algae bloom 'if you don't mind the weather risk'). | Owner sign-off -> Batch 2 |
| `tuyen-lam-lake` | MULTI_SEASON | Jun is supported ('Nov - May/Jun'); Jul-Oct only gets route advice. | Decide Jun-Oct -> Batch 2 |
| `viet-hai-village` | CONFLICT | Apr-May and Oct-Dec are neither recommended nor avoided. | Research or owner decision, then re-audit |
| `vinpearl-cable-car` | SAFE | 12 months, but the text names Feb - Aug and autumn only; 'operates year-round' is a facility statement. Dec-Jan are unsupported. | Confirm Dec-Jan or narrow |
| `west-lake` | MULTI_SEASON | Medium-confidence EXPAND (Aug-Oct locals' favourite, Jun-Jul lotus). | Owner sign-off -> Batch 2 |
| `white-sand-dunes` | MULTI_SEASON | Medium-confidence EXPAND ('sunrise and sunset visits are good year-round'). | Owner sign-off -> Batch 2 |

### Requires content rewrite (2)

| Location | Audit group | Why NOT in Batch 1 | Future action |
|---|---|---|---|
| `hospital-cave` | SAFE | 'Year-round (exterior only, 10-15 minutes - or skip entirely)'. A month strip on a page that says 'skip entirely' is not a meaningful recommendation. | Decide whether this location should show a month strip at all |
| `quang-tri-ancient-citadel` | SAFE | One sentence gives Dec - May as most comfortable and a Feb - Aug dry season that 'avoids' early-mid summer gió Lào winds. Whether Jun-Aug is recommended is unclear. | Rewrite the season text, then re-audit |

### Other (4)

| Location | Audit group | Why NOT in Batch 1 | Future action |
|---|---|---|---|
| `cat-ba-cannon-fort` | MULTI_SEASON | status: closed. The seasonal text describes the nearby Radio Tower. | Define how closed locations render bestMonths (likely hide the strip) |
| `independence-palace` | MULTI_SEASON | Only a facility statement ('air-conditioned year-round'). Depends on an urban/indoor year-round policy that is not decided yet. | Decide policy -> Batch 2 |
| `notre-dame-cathedral-saigon` | MULTI_SEASON | Under restoration (owner confirmed); the exterior-only visit and the 'rain makes the square uncomfortable' caveat need a decision. | Decide months for an exterior-only visit |
| `phung-hung-mural-street` | MULTI_SEASON | High-confidence EXPAND to 12 ('Year-round;'), but the file has status 'unverified'. | Verify the location, then EXPAND -> Batch 2 |

## 5. Release gate (every location, every batch)

A location enters a release batch only if **all** of these hold:

1. **Evidence:** every month in `bestMonths` is supported by the location's own season text, verified research, or a logged owner decision. No month is inferred from the location type, region or "open year-round".
2. **No contradiction:** no month in `bestMonths` is also described as closed, avoided or unsafe in the same location's text (`bestSeasonNote`, legacy `bestTime`, `insights.thingsToKnow.seasonal`, FAQ).
3. **No discouraged or dangerous months:** months the content explicitly or materially recommends avoiding, and seasons that are worth seeing but dangerous, are excluded (CLAUDE.md "`bestMonths` semantic").
4. **No obvious omission:** if the content itself establishes another worthwhile season (not just mentions it), that season is included or the omission is explained.
5. **No guessed months:** no value carried over only because the field already existed. Time-of-day-only text never justifies months.
6. **UI-safe:** `bestMonths` is non-empty, contains only integers 1-12 with no duplicates, the location is not `closed` / `unverified`, and the strip makes sense next to `status` / `statusNote`.
7. **Text settled:** the season prose for the location is either migrated (`bestSeasonNote` / `bestTimeOfDay`) or explicitly left as legacy `bestTime` for display; it does not contradict the strip.
8. **Audit clean:** `npm run audit:best-time` reports SAFE, or the slug has a logged override with a reason (regex noise such as "Christmas Eve", or an owner decision).

## 6. Migration recommendation for Batch 1

### Data model during the transition

```ts
bestMonths: number[]          // unchanged field; canonical once released
bestSeasonNote?: string       // new, optional
bestTimeOfDay?: string        // new, optional
/** @deprecated - migration only */
bestTime?: string             // kept for every location until its batch migrates
```

Add one release manifest instead of touching all 258 files:

```ts
// data/best-months-release.ts
export const BEST_MONTHS_RELEASES = {
  "batch-1": ["a-pa-...", "..."],   // slugs, reviewed + gated
} as const
export const isBestMonthsReleased = (slug: string) => ...
```

Why a manifest: it is one reviewable diff per batch, rollback means removing one entry, unreleased files stay untouched, and the audit can enforce the gate on exactly the released set. (A per-file flag would mean touching 152+ files and mixing release state into content.)

### Steps

1. **Schema (no behaviour change):** add `bestSeasonNote?` / `bestTimeOfDay?` to `Location`, make `bestTime` optional with `@deprecated`. Every existing file still compiles and still has `bestTime`.
2. **Manifest + audit gate:** add `data/best-months-release.ts`; extend `npm run audit:best-time` with `--released`, which fails if a released slug is not SAFE (or overridden with a reason), has an empty or invalid `bestMonths`, is `closed` / `unverified`, or still has the old `bestTime` without the new fields. Overrides live in the manifest with a reason string.
3. **Apply Batch 1b EXPANDs** (8 files, after owner sign-off), bump `updatedAt`.
4. **Text migration for Batch 1 only:**
   - 110 "months-only" rows: copy `bestTime` into `bestSeasonNote` verbatim (fix dashes only). Trimming text that merely repeats the strip is a later, optional editorial pass - do not rewrite during migration.
   - 42 "mixed" rows: split by hand into `bestSeasonNote` + `bestTimeOfDay`. A script may propose splits, but a human accepts each one. If a split is not ready, the row can still ship its strip with the legacy `bestTime` shown as text (gate item 7), and be split in a later batch.
   - Keep `bestTime` on migrated files until the final cleanup, so a rollback just means removing the slug from the manifest.
5. **UI, dual path** (one helper, e.g. `getBestTimeView(location)`):
   - **Released:** month strip from `bestMonths` (reuse the destination `month-pill`), then `bestSeasonNote ?? bestTime`, plus a separate "Best time of day" card only when `bestTimeOfDay` exists.
   - **Legacy:** render exactly what the page shows today (`bestTime` text, no strip).
   - **Cards** (`app/experiences/[slug]/page.tsx:126`, `app/provinces/[slug]/page.tsx:213`, `app/destinations/[slug]/page.tsx:295`): released → `formatMonths(bestMonths)`; legacy → current `bestTime.split("(")[0]` behaviour, unchanged.
   - Decide separately whether the `/locations` month filter and `deriveFromLocations()` should count only released locations. Recommended: keep them as they are for Batch 1 (no regression), and switch to released-only once coverage is high enough that the filter does not lose most locations.
6. **Verify before release:** `tsc`, `audit:taxonomy`, `audit:best-time --released`, and a visual check of a few released and legacy pages (one months-only, one mixed, one legacy, one 12-month).

## 7. Future batches

```
Batch N:
  pick candidates  ->  resolve (research / owner decision / content fix)
  -> apply data changes (log them in reports/)  ->  audit:best-time --released passes
  -> add slugs to BEST_MONTHS_RELEASES["batch-N"]  ->  release
```

Suggested order:

- **Batch 2 - owner decisions only, no research** (~40): the 17 medium-confidence EXPANDs, the 12 SAFE holds, the urban/indoor year-round policy (`independence-palace`, `one-pillar-pagoda`, `hoan-kiem-lake`, `phung-hung-mural-street`, and the 4 indoor NEEDS_RESEARCH quick wins), and closed-location rendering (`cat-ba-cannon-fort`). Once the policy is decided, most of these resolve in one sitting.
- **Batch 3 - the 8 ambiguous CONFLICT rows + 3 SAFE conflicts:** need a short factual check each.
- **Batch 4+ - NEEDS_RESEARCH** (59 time-of-day-only rows), in priority order High → Medium → Low from `reports/best-months-review.md`. Release in groups of ~15-20 as research lands.
- **Final cleanup** (only when every public location is released): remove `bestTime`, drop the legacy UI path and the manifest, make `audit:best-time` a hard CI check, update CLAUDE.md and the location-review skill.

Each batch is independent: a location that fails the gate stays on the legacy path and simply moves to the next batch.
