# Tags Phase 3 - semantic gap audit

**Status: finalized by owner decision.** Exactly one change was applied: `pa-sy-waterfall` gained the canonical registered tag `ethnic-minority-culture`. All seven former borderline cases are resolved NO. No registry value, taxonomy definition, filter, URL, application code, content text, legacy label or non-active Location was changed, and no taxonomy expansion is made in Phase 3.

## 1. Baseline

| Item | Value |
|---|---|
| Baseline commit | `main` c9c649d (merge of PR #10, Tags Phase 2), 2026-09-27 |
| `npm run audit:taxonomy` | OK - no violations. Tags: canonical 140 uses (all Locations), legacy-display 827. Registry: 25 canonical, 1 proposed (`french-influence`) |
| Locations | 257 total; **244 active** (status `""`, `active`, `seasonal`); 13 non-active, out of scope |
| Active Locations **with** >= 1 registered tag | **95** before Phase 3 → **96** after |
| Active Locations **without** a registered tag | **149** before Phase 3 → **148** after |
| Registered-tag assignments on active Locations | **137** before Phase 3 → **138** after |

Rules applied, as they stand after Phase 2 (`TAGS-DEFINITIONS.md` §1-§7, `CLAUDE.md`):
- T1-T6 and E1-E6.
- The `french-colonial-era` relaxed threshold (§7.1), applied to that tag only.
- The secondary-layer rule for the other period tags (§7.2).
- `folk-religion` is decided by worship practice (§7.3).

No tag was inferred from geography, a nearby site, a French or ethnic name, a group passed on the way, or historical context. Phase 2 decisions were not re-opened; B7 in §5 was listed only for owner confirmation, and the owner kept the Phase 2 NO.

### Registered-tag counts (active Locations, after Phase 3)

| Tag | Count |
|---|---:|
| buddhism | 22 |
| french-colonial-era | 21 |
| vietnam-war | 13 |
| ethnic-minority-culture | 11 (was 10; + pa-sy-waterfall) |
| french-architecture | 9 |
| catholicism | 7 |
| early-modern-vietnam | 7 |
| folk-religion | 7 |
| medieval-vietnam | 7 |
| khmer-culture | 4 |
| nguyen-dynasty | 4 |
| champa-heritage | 3 |
| east-sea-sovereignty | 3 |
| hinduism | 3 |
| thai-culture | 3 |
| cham-culture | 2 |
| hmong-culture | 2 |
| taoism | 2 |
| tay-culture | 2 |
| cao-dai | 1 |
| confucianism | 1 |
| giay-culture | 1 |
| independence-movement | 1 |
| khmer-architecture | 1 |
| lolo-culture | 1 |
| french-influence *(proposed)* | 0 |
| **Total** | **138** (was 137) |

## 2. Method

1. Every active Location's full content (intro, whatToExpect, tips, rich text, highlights, thingsToKnow, visitorTips, FAQ, SEO text) was dumped together with `type`, `categories`, `experiences` and `tags`.
2. Each of the 149 untagged Locations was profiled against keyword families for every registered-tag concept:
   - war
   - independence and revolutionary history
   - French and colonial
   - medieval, early-modern and Nguyễn periods
   - Champa and Cham
   - Buddhism
   - folk worship (Mẫu, Cá Ông, Bà Chúa Xứ, Thành Hoàng...)
   - Catholic
   - Cao Đài
   - Khmer
   - ethnic groups
   - sovereignty
3. Every hit was read in context and judged against the rules.
4. The 32 untagged Locations with a culture, history, religion or architecture category, or a history, culture, religious-site-visit, museum-visit or homestay experience, were read in full.
5. Tagged Locations were cross-checked for missing religion and ethnic tags: folk-worship, Catholic, Hindu, Khmer, Cham and Cao Đài keywords on Locations that lack that tag.
6. Keyword hits are only a search aid. Every candidate below rests on quoted content, not on the hit count.

## 3. Summary (final)

| Classification | Count | Notes |
|---|---:|---|
| 1. CLEAR ADD | **1** | pa-sy-waterfall - **applied** |
| 2. BORDERLINE / OWNER REVIEW | **0** | all 7 former borderlines resolved NO by the owner (§5) |
| 3. INTENTIONALLY UNTAGGED / no tag added | **142** | 135 from the audit + the 7 former borderlines (6 untagged Locations, plus `bai-dinh-pagoda`, which keeps its existing `buddhism` tag and gets no `folk-religion`) |
| 4. NO MATCH (a real theme, but no registered tag fits, or the content does not document it) | **7** | 5 land-border / national-extremity sites + 2 content gaps |

Reconciliation: 1 + 142 + 7 = 150 = the 149 untagged Locations at baseline + `bai-dinh-pagoda` (already tagged, reviewed for an extra tag). After the one applied ADD, 148 active Locations remain untagged: the 141 untagged Locations in class 3 and the 7 in class 4.

### Outcome by tag

| Tag | Applied ADD | Resolved NO (former borderline) |
|---|---:|---|
| ethnic-minority-culture | 1 (pa-sy-waterfall) | cat-tien-national-park |
| folk-religion | 0 | hon-yen-island, phuoc-hai-fishing-village, bai-dinh-pagoda |
| buddhism | 0 | tuyen-lam-lake |
| vietnam-war | 0 | bay-mau-coconut-forest (Phase 2 NO kept) |
| tay-culture | 0 | phong-nam-valley |
| all other registered tags | 0 | - |

Result: active Locations with a registered tag 95 → 96, without 149 → 148, and registered-tag assignments 137 → 138. The audit set no coverage target.

## 4. CLEAR ADD (1) - applied

### pa-sy-waterfall → `ethnic-minority-culture`

- **Current registered tags:** none (legacy: 💧 Măng Đen Highlight, 🌿 Pine Forest Highlands, 🥾 Eco-Tourism Site).
- **Other fields:** type `waterfall, forest`; categories `nature`; experiences include `culture`.
- **Evidence:**
  - intro: "the centrepiece attraction of an eco-cultural tourism park"; the park "includes walking paths, a nhà rông (traditional communal house), a Rơ Măm handicraft workshop, a cultural display house".
  - The falls are "tied to a Mơ Nâm ethnic legend known as 'Bảy hồ, ba thác'".
  - whatToExpect: "paths lead through pine and native forest past the park's cultural buildings - the nhà rông, handicraft workshop..."; "A notable stop along the way is a wooden statue garden, where local artisans have carved figures depicting everyday highland life... young men playing gongs or drinking rượu cần".
- **Rules:**
  - E3: the groups named (Rơ Măm / Mơ Nâm, "some sources say Xê Đăng") have no own tag, so the tag is `ethnic-minority-culture`.
  - T3: the content grounds it.
  - E6: independent of the existing `culture` experience, but consistent with it.
- **Why a reason to visit, not background:**
  - The cultural park is presented as the route to the falls and as named stops (nhà rông, workshop, display house, statue garden).
  - It is not a village passed on the approach (E4).
  - It matches the owner-approved Phase 2 precedent langbiang-mountain (K'Ho cultural village at the base, E3).
- **Confidence:** high.
- **Note:** the content itself flags uncertainty about the group name. That does not change the tag, because every candidate group falls under E3.
- **Applied change** (`data/locations/pa-sy-waterfall.ts`): `tags` goes from `["💧 Măng Đen Highlight", "🌿 Pine Forest Highlands", "🥾 Eco-Tourism Site"]` to `["💧 Măng Đen Highlight", "🌿 Pine Forest Highlands", "🥾 Eco-Tourism Site", "ethnic-minority-culture"]`. The tag is appended after the legacy labels (D7), and no other field changed.

## 5. Former BORDERLINE cases - all resolved NO by the owner (7)

**Owner decision:** none of these seven receives a tag. They are counted in class 3 (§3). Evidence is kept below as the record of the review.

| # | Location | Tag considered | Registered tags (unchanged) | Audit lean | Owner decision |
|---|---|---|---|---|---|
| B1 | hon-yen-island | folk-religion | none | ADD | **NO** |
| B2 | tuyen-lam-lake | buddhism | none | ADD | **NO** |
| B3 | phuoc-hai-fishing-village | folk-religion | none | NO | **NO** |
| B4 | bai-dinh-pagoda | folk-religion | buddhism | NO | **NO** |
| B5 | cat-tien-national-park | ethnic-minority-culture | none | NO | **NO** |
| B6 | phong-nam-valley | tay-culture | none | NO | **NO** |
| B7 | bay-mau-coconut-forest | vietnam-war | none | NO | **NO** - Phase 2 decision kept |

**B1 - hon-yen-island → `folk-religion`** (lean ADD)
- **Evidence:**
  - "The Lăng Ông Nam Hải shrine, surrounded by distinctive red-leafed almond trees, is the island's cultural landmark."
  - The highlights list: "Lăng Ông Nam Hải shrine with red-leafed almond trees - cultural landmark of the fishing community".
- **Rule:** T1/T2 and §7.3. Whale worship (cá Ông) is named in the `folk-religion` definition, and here it is an active shrine on the island itself, listed as a highlight.
- **Why borderline:** the primary draw is tidal access and the reef. The shrine is a distinct listed highlight, but there is no religious-site-visit experience and no description of the worship practice beyond the name.

**B2 - tuyen-lam-lake → `buddhism`** (lean ADD)
- **Evidence:**
  - "On Núi Phụng Hoàng (Phoenix Mountain), overlooking the lake, sits Trúc Lâm Thiền Monastery - one of the three largest monasteries of the historic Trúc Lâm Yên Tử Zen lineage ... covering around 24 hectares".
  - "Trúc Lâm Thiền Monastery ... is worth the visit".
  - A long passage on the founder Hòa thượng Thích Thanh Từ.
  - Highlights: "cable car access to nearby Truc Lam Buddhist monastery"; the lake "is as much a landscape destination as a religious site".
- **Rule:** the T1 religion group rule: the tradition of a site whose religious identity is part of the draw.
- **Why borderline:**
  - The monastery has no Location file of its own, and the content treats it as part of the Tuyền Lâm visit ("as much a landscape destination as a religious site").
  - This is comparable to son-tra-peninsula and fansipan, which were approved in Phase 2.
  - Against it: the monastery is "overlooking the lake" rather than on it, the cable car arrives "at the monastery - not directly at the lake", and there is no religious-site-visit experience.
  - Phase 2 checked this Location only for `medieval-vietnam` (NO), so this is a new question, not a re-opened one.

**B3 - phuoc-hai-fishing-village → `folk-religion`** (lean NO)
- **Evidence:**
  - "Lễ Hội Nghinh Ông (fishing community prayer festival): 15th, 16th, 17th of the 2nd lunar month each year - one of the most important festivals for coastal fishing communities, with cultural performances and ceremony".
  - It is repeated in highlights, together with Lễ Hội Dinh Cô "at nearby Long Hải".
- **Rule:** §7.3 whale worship. T2.
- **Why lean NO:** the worship is present only as an annual festival to time a visit around. The content describes no shrine you can visit, and Dinh Cô is at another place (E4-like). See ambiguity A3.

**B4 - bai-dinh-pagoda → `folk-religion`** (lean NO; already tagged `buddhism`)
- **Evidence:**
  - The ancient pagoda includes "a shrine to Cao Sơn (one of the four guardian deities of old Hoa Lư)".
  - It also includes "Động Tối (Dark Cave) with 7 interconnected chambers dedicated to Mother Goddess worship".
- **Rule:** §7.3, worship practice rather than administration.
- **Why lean NO:** Mother Goddess worship sits in one cave of the ancient section. The complex's stated draw is the modern Buddhist mega-complex (largest pagoda, 500 arhats, giant bell). Phase 2 did not examine `folk-religion` here.

**B5 - cat-tien-national-park → `ethnic-minority-culture`** (lean NO)
- **Evidence:**
  - "Tà Lài Community Village offers Mạ and Stiêng ethnic cultural exchange in the buffer zone".
  - A cycling route item "ethnic village - Tà Lài rice fields".
  - "Tà Lài Community Tourism Village: in the park's buffer zone, home to Mạ and Stiêng ethnic communities".
- **Rule:** E2/E3 (two untagged groups), weighed against E4.
- **Why lean NO:** the village is in the buffer zone as an optional add-on to a wildlife and trekking park. It is not the park's draw.

**B6 - phong-nam-valley → `tay-culture`** (lean NO)
- **Evidence:**
  - The legacy chip "🎎 Tày Villages".
  - "rice fields and Tày stilt houses in a composition that looks painted"; "passing Tày villages with traditional stilt houses".
  - "Tày villages along the road are welcoming but private - ask before photographing people or entering homestays".
- **Rule:** E1 (one tagged group), weighed against T2.
- **Why lean NO:**
  - The Tày villages are presented as part of the landscape composition for photography and cycling (experiences: `photography`, `cycling`; no `culture`).
  - The content offers no cultural experience and asks visitors to respect privacy.
  - The legacy chip is not evidence on its own.

**B7 - bay-mau-coconut-forest → `vietnam-war`** (lean NO; Phase 2 decided NO)
- **Evidence:**
  - "During the resistance wars against France and then the United States, the dense palm cover made Cẩm Thanh one of Hội An's most important revolutionary bases... the forest itself was targeted by bombing"; "on the night of 27 September 1964, local forces staged an uprising".
  - Summary: "a real wartime history as a revolutionary base"; "the forest itself, its wartime history, and the basket boat navigation are genuine".
- **Rule:** §7.2 secondary-layer rule. §7.1 does not apply to this tag.
- **Why listed:**
  - This is the only Phase 2 "no" where the current content arguably presents the war layer as one of the "genuine" draws, so it is flagged for an explicit owner confirmation rather than silently re-opened.
  - Why lean NO: the history spans both wars without a visitable war site. The basket-boat ride is the experience, and the war history is narrative context.

## 6. NO MATCH - no registered tag fits, or the content does not document it (7)

**Land-border and national-extremity sovereignty (5)**
- The Locations: lung-cu-flag-tower, sa-vi-cape, a-pa-chai, lung-po-red-river-source, mui-ca-mau-national-park.
- Sovereignty symbolism is the stated draw (for example, sa-vi-cape: "significant for its symbolism and sovereignty history far more than for natural scenery"; mui-ca-mau: "GPS 0001 ... national sovereignty monument").
- `east-sea-sovereignty` is defined as Hoàng Sa / Trường Sa maritime history, so it does not apply to land borders or mainland extremities. No other tag fits. See ambiguity A1.
- lung-cu-flag-tower's Lý-dynasty flag story was already decided NO for `medieval-vietnam` in Phase 2.

**Content gaps (2)**
- **trang-an:** it has the `religious-site-visit` experience and a "⛩️ Temples" chip, but the content never names the temples or their tradition ("3 temples", "temple stops", Hành Cung Vũ Lâm described only as a water pavilion). No religion tag can be grounded (T3). A content fix would decide it: naming Đền Trình, Đền Tam Thánh, Đền Suối Tiên and their cults.
- **trung-trang-cave:** "During the resistance wars it was used as a military base ... Hang Hải Quân (Navy Cave), with traces of that occupation still visible". Because the war is not specified, T3 cannot choose between `independence-movement` and `vietnam-war`. The Bà Chúa Trung Trang story is a legend without an active cult.

## 7. INTENTIONALLY UNTAGGED - representative cases (142 in total, including the 7 former borderlines in §5)

These Locations have tag-like signals in their content but must stay untagged under the current rules. They are listed to show that the audit is not trying to maximise coverage.

| Location | Signal in content | Why untagged |
|---|---|---|
| west-lake | Trấn Quốc and Quán Thánh on the shore; Phủ Tây Hồ (Mother Goddess) "beyond the classic loop"; "🛕 Ancient Pagodas" chip | T2. The pagodas are "historical counterpoints" to a cycling and café lake; tran-quoc-pagoda has its own tagged file; Phủ Tây Hồ is outside the loop |
| hoan-kiem-lake | Lê Lợi sword legend; Ngọc Sơn Temple | Phase 2: legend only for `medieval-vietnam`; ngoc-son-temple has its own tagged file |
| tam-coc | Bích Động pagoda on the cycling loop; temples in the combo ticket | T2/E4-like. bich-dong-pagoda is its own tagged file; the draw is the rice fields and boat |
| hang-mua | five-tier Buddhist stone tower at the summit; Trần Thái Tông legend ("a minor footnote") | T2. The draw is the 486-step viewpoint; the stupa is one of two photo points |
| paradise-cave | formations "resembling Buddhist figures, Avalokiteśvara ... Champa-style towers" | Shapes in rock are not a religious site or a Champa site |
| sung-sot-cave | Thánh Gióng legend formations; named by a French scientist in 1901 | legend without a cult; a French name or discoverer is excluded by §7.1 |
| k50-waterfall | "Bahnar ethnic village en route" | E4: a village passed on the trek |
| hang-en | route "passes through Bản Đoòng - a remote village of the Bru-Vân Kiều ethnic minority" | E4 |
| nguom-ngao-cave, thang-hen-lake, angel-eye-mountain | Tày place names and legends; Bản Danh Tày hamlet "worth combining" | a group named in passing or a nearby hamlet (E4, T2) |
| tham-ma-pass, thung-khe-pass, moc-chau-tea-hills | H'Mông rooftops and a khèn player; Mường roadside stalls; "ethnic minority villages" on the plateau | passing mentions (E4) |
| dray-nur-dray-sap-waterfalls | Ê Đê name etymology; "a stop to learn about Ê Đê and M'Nông culture" as a combination | an off-site combination, not the waterfall's draw |
| co-to-island | 13 Nov 1945 Đồn Cao battle, a provincial relic | "a more recent layer of history" - context (§7.2); `independence-movement` is not generalised |
| ti-top-island, my-khe-beach | named by Hồ Chí Minh in 1962; "before 1975 a beach used by the US military" | background (§7.2) |
| phu-quy-island | "a French-era lighthouse" as one stop of a motorbike circuit; Linh Quang Pagoda | §7.1 excludes a single-mention stop; Phase 2 already decided NO on buddhism |
| can-gio-monkey-island | Rừng Sác War Base and Lăng Ông Thủy Tướng as optional pairings | other places (E4-like); Phase 2 decided NO |
| tra-que-village | Cham-era well, Nguyễn Điển's tomb, earth-god shrines - "a handful of minor historical and folk-religious sites" | the content itself calls them minor |
| ong-cop-bridge | named after a nearby tiger shrine and legend | legend and a nearby shrine only |
| phuoc-tinh-fishing-village | Đàn Kỳ Phong for sea deities (Gia Long era) in a history note | historical note, nothing to visit |
| mui-ne, ham-ninh, rach-vem, mui-tro, viet-hai fishing villages; cai-rang-floating-market | living fishing, market and village culture | E5: Kinh culture is not tagged, by design |
| khem-beach, cua-dai-beach, an-bang-beach, cape-ca-na | Khmer or Cham name etymology; "Champa era" reputation; Cham Islands on the horizon | etymology or geography only |
| dau-tieng-lake | Cao Đài Holy See and Núi Bà Đen on the same circuit; Núi Cậu shrine | other places; Phase 2 decided NO on buddhism |
| pirate-islands | a 1958 sovereignty marker and Miếu Bà Chúa Hòn as small landmarks | Gulf of Thailand, outside the `east-sea-sovereignty` definition; minor landmarks |
| ho-chi-minh-childhood-home | Hồ Chí Minh's early life | owner decided (Phase 2) not to assign `independence-movement` yet; no other tag fits |
| am-tien-cave, ta-pa-fields, quan-ba-heaven-gate | - | tags removed by owner decision in Phase 2; nothing new found |

Of the 141 untagged Locations in this class, **118** are nature, coast, theme-park or leisure places with no culture, history, religion or architecture category (several appear in the table above; the rest carry no tag signal at all): beaches, islands, waterfalls, caves, passes, national parks, cable cars and similar. Among the 149 untagged, the most common primary types are beach (22), island (15), waterfall (12), cave (10), mountain (8), lake (8) and village (8).

## 8. Cross-check on tagged Locations

Tagged Locations were searched for folk-worship, Catholic, Hindu, Khmer, Cham and Cao Đài terms that their tags lack.
- The only new question found was B4 (bai-dinh-pagoda `folk-religion`), resolved NO.
- Every other hit is one of these:
  - already decided in Phase 2: an-hai-communal-house `folk-religion` NO, jade-emperor-pagoda (Khmer shrine origin only), ho-quoc-pagoda (a Quốc Mẫu shrine "on the way up"), phong-nha-cave (past Cham sanctuary), cat-tien-national-park (Hindu ruins "an hour away");
  - a false positive: "cathedral-like" or "cathedral-scale" chambers or canopy, or a cathedral across the plaza.
- No contradiction with the final Phase 2 rules was found in the existing assignments.

## 9. Taxonomy-definition observations (A1-A6) - for future consideration only

These are recorded for possible future owner decisions. **No taxonomy expansion is made in Phase 3:** no new tag, no widened definition, no promotion (`french-influence` stays proposed), and no change to `TAGS-DEFINITIONS.md`, `tags.ts` or `CLAUDE.md`.

1. **A1 - land-border sovereignty has no tag.** `east-sea-sovereignty` is maritime (Hoàng Sa / Trường Sa). Five active Locations have national-border or extremity symbolism as their stated draw (§6). This is a real semantic gap, not a tagging error. Options for the owner:
   - leave them untagged (current state); or
   - in a separate, explicit decision, either widen `east-sea-sovereignty` or register a new topic tag.
   Phase 3 makes neither change; these five stay untagged.
2. **A2 - religious-site-visit without a documented tradition.** trang-an has `religious-site-visit` but no content naming its temples' tradition. Religion tags need the tradition named (T3). This is a content issue for the backlog, not a tag issue.
3. **A3 - festival-only folk worship.** Does an annual festival (Nghinh Ông, Cầu Ngư at phuoc-hai, hon-kho, plate-rock-reef) count as folk worship that is "part of the draw" when there is no shrine to visit? Suggested reading for the future: only when a shrine or cult site at the Location is described as something to see, not a festival date alone. In Phase 3 the owner resolved both hon-yen-island (B1) and phuoc-hai-fishing-village (B3) as NO.
4. **A4 - container vs contained sites.** Lakes and areas that contain separately-filed, already-tagged sites (west-lake / tran-quoc-pagoda, hoan-kiem-lake / ngoc-son-temple, tam-coc / bich-dong-pagoda). Suggested reading: do not repeat the contained site's tag on the container unless the container's own content presents that heritage as its draw.
5. **A5 - unspecified "resistance wars".** Where content says "the resistance wars" without a period (trung-trang-cave, bay-mau-coconut-forest), T3 cannot choose between `independence-movement` and `vietnam-war`.
6. **A6 - uncertain ethnic group names.** When the content hedges on the group name (pa-sy-waterfall: "Rơ Măm (some sources say Xê Đăng)"), the tag still resolves under E3 if every candidate group lacks its own tag. Worth stating in E3.

## 10. Final recommendation (as decided)

1. **Coverage is complete under the current rules.** 148 of 244 active Locations stay untagged: 141 intentionally, because no registered tag is a content-grounded reason to visit, and 7 NO MATCH. Low tag coverage (96 of 244) is a property of the catalogue, mostly nature and leisure places, not a defect.
2. **Applied:** pa-sy-waterfall `ethnic-minority-culture` (E3), consistent with the approved langbiang-mountain precedent. It is the only Location change in Phase 3.
3. **Resolved NO:** the seven former borderlines (§5). bay-mau-coconut-forest keeps the Phase 2 decision.
4. **NO MATCH stays untagged.** Possible follow-ups outside Phase 3:
   - A1: decide separately whether land-border sovereignty ever needs a tag.
   - A2 / A5: content work to name trang-an's temples and their cults, and trung-trang-cave's war period, after which they could be re-evaluated.
5. **A1-A6 are observations only.** No taxonomy expansion, definition change or promotion in Phase 3.
6. **Registry unchanged:** 25 canonical tags, `french-influence` proposed. No other existing assignment changed.

## Appendix - validation

- `npm run audit:taxonomy` after the change: OK - no violations (tags: canonical 141 uses across all Locations, 138 on active Locations; legacy-display 827, unchanged).
- `npx tsc --noEmit`: pass.
- Changed files: `data/locations/pa-sy-waterfall.ts` (one line: `tags`) and this report. No registry, definition, filter, URL, application, content or non-active Location file was modified.
