# Content Backlog (from the taxonomy migration)

Content gaps found during the taxonomy work. **They are not fixed by the taxonomy migration** (owner rule: no editorial
content changes in this phase). Each item is a candidate for a normal content update, with the usual anti-hallucination
rule: verify against an official source first.

## 1. Recognition / designation coverage gaps

Official designations can only be recorded in `data/taxonomy/recognitions.ts` when the location's own content states them.
The locations below appear to lie in a designated property, but their content does not say so. Membership is **to verify**
(it comes from general knowledge, not from the content or an official source).

| Location | Likely designation (to verify) | Gap |
|----------|--------------------------------|-----|
| ti-top-island | UNESCO World Heritage - Hạ Long Bay | No mention in content |
| tu-duc-tomb | UNESCO World Heritage - Complex of Huế Monuments | No mention |
| minh-mang-tomb | UNESCO World Heritage - Complex of Huế Monuments | Mentions UNESCO only for the Imperial City, not for the tomb |
| khai-dinh-tomb | UNESCO World Heritage - Complex of Huế Monuments | No mention |
| paradise-cave, dark-cave, son-doong-cave | UNESCO World Heritage - Phong Nha-Kẻ Bàng National Park | No mention |
| eight-ladies-cave | Possibly inside Phong Nha-Kẻ Bàng National Park | Location vs property boundary to verify |
| lan-ha-bay, cat-ba-national-park | UNESCO World Heritage - the Hạ Long Bay property was reportedly extended to the Cát Bà archipelago | No mention. If confirmed, the property name used in `recognitions.ts` ("Hạ Long Bay") may also need updating |
| bai-dinh-pagoda, hang-mua | Possibly within the Tràng An Landscape Complex (core or buffer zone) | Boundary to verify |

## 2. Recognition records pending official verification

All 93 records in `recognitions.ts` are `verified: false`. Official-source verification was blocked by the environment's
network policy (see PHASE2-LOG.md §6.5). Priority order once access exists:
1. UNESCO properties, geoparks, biosphere reserves, intangible heritage, Memory of the World (years and property names)
2. Ramsar sites (ba-be-lake 2011, con-dao-national-park 2013, cat-tien Bàu Sấu)
3. Vietnamese special national relics and national relics (decision years; tay-phuong-pagoda special-relic year is unknown)
4. Protected areas (Pù Luông, Kon Chư Răng, Vân Long, Sơn Trà, Nha Trang Bay MPA)

## 3. Other content observations from the review

- Stub records with no content: can-ti-bridge, ha-giang-city, mau-due-town, meo-vac-town, yen-minh-town.
