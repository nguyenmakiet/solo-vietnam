# Tags - semantic definitions & boundaries (Tags Phase 1, owner-approved)

**Status: approved by the owner (Tags Phase 1). Encoded in `tags.ts` descriptions and statuses (Phase 1b). Amended in Tags Phase 2 - see §7; where §2-§4 disagree with §7, §7 wins.**
Baseline: `main` 7762cf0. No Location data, tag assignments, type, categories, experiences or URLs were changed in Phase 1 or Phase 1b. Legacy emoji labels are editorial display chips: they are not renamed, removed, normalised or migrated, and they are out of scope here.
Evidence comes from the Phase 0 audit (TAGS-AUDIT.md) and the locations' own content.

## 1. What a tag is (general rules)

**T1 - Question.** A registered tag answers: *which history, faith, people or foreign influence is a reason to visit this place?*
- It is not a place kind (`type`).
- It is not a broad theme (`categories`).
- It is not an activity (`experiences`).
- It is not an official designation (`recognitions.ts`).

**T2 - Focus, not background.** Assign a tag only when the location's own content presents that history, faith, people or influence as part of the draw.
- Being built in a period, standing in a region, or a passing mention does not qualify.
- A village passed on the approach road does not qualify.

**T3 - Content-grounded.** Same rule as experiences: supported by the location's own content, never by general knowledge.

**T4 - Independence.** No tag implies another. The three French tags, `champa-heritage` / `cham-culture` / `hinduism`, and the per-group vs multi-group ethnic tags are each decided on their own evidence.

**T5 - Relationship to other fields** (they coexist; none replaces another):

| Aspect | Field | Example (Po Nagar) |
|---|---|---|
| What the place is | `type` | `temple` |
| Broad theme | `categories` | `religion`, `history` |
| What you do | `experiences` | `religious-site-visit` |
| Which tradition, people or period | `tags` | `hinduism`, `champa-heritage` |

**T6 - Order.** A registered tag is never at `tags[0]`, because that slot is the card subtitle (D7). This is already a rule; two current violations are listed in §6.

**Groups.** The existing 6 groups are kept. The kind of concept for each tag is given per tag below.

## 2. Definitions - 24 registered tags

### 2.1 Historical periods and civilisations

**Period tags are consecutive, not overlapping.** Proposed timeline (gaps in bold):

| Tag | Span |
|---|---|
| `champa-heritage` | Champa civilisation, c. 2nd-17th c. Parallel to the Vietnamese sequence (a different polity) |
| `medieval-vietnam` | 10th-15th c.: Ngô, Đinh, Tiền Lê, Lý, Trần, Hồ, early Lê to 1527 |
| **gap** | **1527-1802**: Mạc, Revival Lê / Trịnh, Nguyễn lords, Tây Sơn. See §4.1 |
| `nguyen-dynasty` | 1802-1945 |
| `french-colonial-era` | c. 1858-1954, overlapping `nguyen-dynasty` by design |
| **gap** | **Anti-colonial revolution and the French war**, c. 1930-1954. See §4.2 |
| `vietnam-war` | 1955-1975 |

**`medieval-vietnam` - Medieval Vietnam** (historical period)
- **Means:** Đại Việt's independent dynasties from the 10th to the 15th century: Ngô, Đinh, Tiền Lê, Lý, Trần, Hồ, and the early Lê to 1527.
- **Qualifies when** the site's story is that era:
  - capitals and citadels: Hoa Lư, Thăng Long, Hồ citadel
  - temples to its kings
  - pagodas founded or defined by Lý and Trần royal patronage (One Pillar, Yên Tử - Trần Nhân Tông)
  - the Temple of Literature (founded 1070)
- **Does not qualify:**
  - A later rebuild of an old foundation whose visible draw is the rebuild (e.g. a 17th-century structure on an 11th-century site → §4.1).
  - A legend set in that era, with nothing of the era to see.
  - Sites from the 16th century onward.
- **Current assignments (8):** am-tien-cave (Đinh legend - weak, review in Phase 2), hanoi-old-quarter (Lý-era street layout - borderline), and 6 clear cases.
- **Relations:** can co-occur with `buddhism` and `confucianism`. Ends where the proposed early-modern period starts (§4.1).

**`nguyen-dynasty` - Nguyễn Dynasty** (historical period)
- **Means:** the Nguyễn imperial dynasty, 1802-1945, founded by Gia Long.
- **Qualifies** where the dynasty is the focus:
  - the Huế imperial citadel
  - royal tombs (Minh Mạng, Tự Đức, Khải Định)
  - structures whose draw is imperial commission or use
- **Does not qualify:**
  - The **Nguyễn lords** (chúa Nguyễn, 1558-1777). They are a different regime, before the dynasty. Examples: Thiên Mụ founded 1601 by Nguyễn Hoàng; Hội An's lords-era trade. These fall in the §4.1 gap, not here.
  - Sites merely built, named or used during 1802-1945 (e.g. Bến Thành's name origin in 1788-1790; Lý Sơn communal houses, whose draw is the Hoàng Sa fleet → `east-sea-sovereignty`).
  - A passing reference to "Nguyễn emperors adding temples" (marble-mountains).
- **Current (4):** imperial-city-hue, khai-dinh-tomb, minh-mang-tomb, tu-duc-tomb. All correct.
- **Relations:** can co-occur with `french-colonial-era` for protectorate-era imperial sites where the colonial context is part of the story (khai-dinh-tomb, 1920-31). It does not imply `french-architecture`: Khải Định has it on its own evidence.

**`french-colonial-era` - French Colonial Era** (historical period)
- **Means:** the period of French rule, c. 1858-1954, as history you visit.
- **Phase 2 rule (supersedes the focus test below for this tag only, §7.1):** applies when French colonial history or surviving colonial-era heritage is a meaningful part of the location's historical identity, even when it is not the primary attraction, provided the connection is explicitly documented in the Location content.
- **Qualifies** where colonial-period history is the focus:
  - colonial institutions: prisons (Hỏa Lò, Côn Đảo, Nhà Pha), post office, railway station
  - colonial defences
  - a site whose interpreted story is colonial administration or the colonial experience
- **Does not qualify:**
  - Merely built or founded in the period.
  - ~~A French-era object in a place visited for something else~~ - superseded by §7.1: surviving colonial heritage documented in the content now qualifies (mui-dien lighthouse, mau-son-mountain villa ruins).
  - French *design* alone → `french-architecture`.
  - French *cultural* legacy alone → `french-influence`.
- **Current (16):**
  - Clear: con-dao-prison, hoa-lo-prison, nha-pha-historical-site, saigon-central-post-office, dalat-railway-station, war-remnants-museum (exhibits cover the colonial era), hanoi-st-josephs-cathedral, notre-dame-cathedral-saigon, kon-tum-wooden-church, khai-dinh-tomb, long-bien-bridge.
  - Review in Phase 2 against the focus rule: ke-ga-lighthouse, mui-dien, quan-ba-heaven-gate, mau-son-mountain, cat-ba-cannon-fort (fort built in WWII under the French - probably qualifies; closed site).
- **Relations:** independent of `french-architecture` and `french-influence` (never inferred, R17/R21/R26). Overlaps `nguyen-dynasty` in time by design. Ends at 1954; it does not cover the anti-colonial side (§4.2).

**`vietnam-war` - Vietnam War** (historical period)
- **Means:** the Vietnam War (in Vietnamese usage, *kháng chiến chống Mỹ*), **1955-1975**, and its direct physical legacy: war damage, Agent Orange, POW history, wartime infrastructure such as the Hồ Chí Minh Trail, tunnels, the DMZ and bases.
- **Qualifies** where that war is the focus: battlefields and bases, tunnels, war museums and memorials, wreckage, prisons in their 1955-75 role, and sites where war damage is the visible draw (la-vang-sanctuary's ruined bell tower, 1972).
- **Does not qualify:**
  - The **French war (1946-1954)** and pre-1945 revolutionary history → not this tag (§4.2).
  - The 1979 border war.
  - A place that was merely bombed, used or passed through, when the war is not what you visit.
  - A general military museum is covered only for its 1955-75 content if that is presented as a main draw.
- **Label:** keep "Vietnam War". It is the term the international audience searches. The description records the Vietnamese name.
- **Current (12):** all fit this scope, including con-dao-prison and hoa-lo-prison (1955-75 role as well as colonial).
- **Phase 2 candidates:** vietnam-military-history-museum (major 1955-75 content), minh-dam-mountain (base area in the American war as well as the French one).
- **Relations:** can co-occur with `french-colonial-era` on sites with both histories (prisons). Separate from the proposed §4.2 concept.

**`champa-heritage` - Champa Heritage** (historical civilisation / heritage concept)
- **Means:** the material heritage of the historical Champa kingdom and civilisation, c. 2nd-17th century: temple-towers, sanctuaries and archaeological remains.
- **Qualifies:** Champa monuments that are the draw, whether ruined (Mỹ Sơn, Nhạn) or still in use (Po Nagar).
- **Does not qualify:**
  - Living Cham communities → `cham-culture`.
  - A site that merely stands on a former Cham sacred place with nothing Champa to see (e.g. marble-mountains, "sacred since the Cham civilisation", where the draw is the later Buddhist caves). Owner call; lean no.
- **Current (3):** my-son-sanctuary, po-nagar-cham-towers, nhan-tower. All correct.
- **Relations:**
  - With `cham-culture`: distinct, and they may co-occur only when a Champa monument is also an active venue for a living Cham community (e.g. Cham devotees and festivals at Po Nagar). Phase 2 check on po-nagar.
  - With `hinduism`: not implied (see `hinduism`).

### 2.2 Topic

**`east-sea-sovereignty` - East Sea Sovereignty** (topic, cross-period)
- **Means:** Vietnam's maritime history in the East Sea, the Hoàng Sa and Trường Sa archipelagos: the Hải Đội Hoàng Sa, the Khao Lề Thế Lính rite, sovereignty history.
- **Qualifies:** sites whose draw is that history (Lý Sơn communal houses, the Hoàng Sa memorial).
- **Does not qualify:** coastal sites with no sovereignty story.
- **Current (3):** an-hai-communal-house, an-vinh-communal-house, thoi-loi-mountain.
  - The first two are correct.
  - thoi-loi-mountain: Phase 2 check on whether its content presents the topic, or whether the tag came from a "Hải Đội Hoàng Sa Memorial" chip elsewhere on the island.

### 2.3 Religion (the tradition)

Rule for the whole group:
- A religion tag names the tradition of a site whose religious identity is part of the draw, whether active or historical.
- It is not the same as category `religion` (the theme) or `religious-site-visit` (active worship you can visit).
- Mixed traditions get each tag that is individually a draw.

**`buddhism`** (religion)
- **Qualifies:** Buddhist pagodas, monasteries, cave pagodas, and pilgrimage mountains whose Buddhist sites are the draw (Yên Tử, Bà Đen, Chứa Chan, Dinh). Chùa → pagoda → buddhism.
- **Does not qualify:** a mountain or lake with an incidental small pagoda; Buddhist statuary in a theme park.
- **Current:** 20, all consistent.
- **Phase 2 candidate:** jade-emperor-pagoda, a Taoist foundation administered by the Vietnam Buddhist Sangha since 1982 (renamed Phước Hải Tự). Add `buddhism` alongside `taoism`? Owner call.

**`catholicism`** (religion)
- **Qualifies:** churches, cathedrals, Marian shrines and Catholic pilgrimage sites (La Vang, Tắc Sậy, Phát Diệm).
- **Does not qualify:** replica churches in theme parks (Saint Denis at Bà Nà's French Village).
- **Current:** 7, all consistent.

**`taoism`** (religion)
- **Qualifies:** sites dedicated primarily to Taoist deities (Jade Emperor, Văn Xương) or presented as Taoist.
- **Current:** jade-emperor-pagoda, ngoc-son-temple.

**`confucianism`** (religion / philosophy)
- **Qualifies:** sites where Confucian learning or worship is the draw (Văn Miếu).
- **Does not qualify:** Confucian elements inside other traditions (Cao Đài's syncretism, Nguyễn tomb stelae).
- **Current:** temple-of-literature.

**`cao-dai`** (religion)
- **Qualifies:** Cao Đài temples and the Holy See.
- **Does not qualify:** a place near Tây Ninh that only mentions Cao Đài (ba-den-mountain).
- **Current:** cao-dai-holy-see.

**`folk-religion` - Vietnamese Folk Religion** (religion)
- **Means:** indigenous Vietnamese worship outside the organised religions:
  - Mother Goddess (Đạo Mẫu)
  - the Tứ Pháp cult
  - Hùng Kings and deified heroes
  - village guardian spirits (thành hoàng)
  - whale worship (cá Ông)
  - Bà Chúa Xứ
- **Qualifies** where that worship is part of the draw.
- **Decided by worship practice, not administration** (Tags Phase 2, §7.3): a site whose worship is folk religion qualifies even if a Buddhist or other body administers it (jade-emperor-pagoda).
- **Does not qualify:** generic incense offerings at a Buddhist pagoda; legends without an active cult.
- **Current:** 5.
- **Phase 2 check:** communal houses whose draw includes guardian-spirit ritual.

**`hinduism`** (religion)
- **Means:** Hindu religious identity, in Vietnam essentially Cham Hindu sanctuaries (Shiva, Po Nagar).
- **Qualifies** where the Hindu dedication is part of the draw: an active Hindu temple, or a sanctuary interpreted through its Hindu deities.
- **Does not qualify:** being a Champa monument alone.
- **Current:** my-son-sanctuary, po-nagar-cham-towers.
- **Phase 2 check:** nhan-tower.

### 2.4 Ethnic culture

**Ethnic rules (replace the implicit rule):**
- **E1 - One group.** One minority group's living culture is the draw at the location → that group's tag only.
- **E2 - Several groups.** Several groups together are the draw (a multi-group market, valley or museum) → `ethnic-minority-culture`. Add a per-group tag only for a group that has its own named, individual draw at the location (its own village, festival or craft).
- **E3 - Fallback.** A group without a registered tag (Hà Nhì, Dao, K'Ho, Sán Chỉ, Ê Đê, M'Nông, Bahnar…) is the draw → `ethnic-minority-culture` until a per-group tag is approved. Never invent a per-group tag.
- **E4 - Must be at the location.** Villages seen on the approach road, a regional population statistic, or a legend in a group's language do not qualify.
- **E5 - Majority culture.** Kinh culture is not tagged in this group.
- **E6 - Tag vs experience.** An ethnic tag says *which* people. It is independent of the `culture` experience (whether you can actively take part). They usually co-occur, but either can exist alone (e.g. the ethnology museum).

**`ethnic-minority-culture` - Ethnic Minority Culture** (ethnic culture, multi-group / fallback)
- **Means:** living ethnic-minority culture where several groups together are the draw (E2), or where a single group without its own tag is the draw (E3).
- **Does not qualify:**
  - A single group that has a tag → use that tag.
  - A mention or a passing village (E4).
- **Current (4):** a-pa-chai, ba-be-lake, bac-son-valley, vietnam-museum-of-ethnology. Status of each under the rules is in §3.

**Per-group tags:**

| Tag | Means | Qualifies / does not qualify | Current |
|---|---|---|---|
| `hmong-culture` | H'Mông people | Qualifies: H'Mông village, market or heritage is the draw. Not: one of several groups at a multi-group market (→ E2) | cat-cat-village, dong-van-market, hmong-king-palace |
| `tay-culture` | Tày people | Qualifies: Tày village, homestay or festival is the draw | ba-be-lake, du-gia-village |
| `thai-culture` | Vietnam's Thái people (not Thailand) | Qualifies: Thái stilt villages, xòe dance, weaving. Slug kept (no URL to preserve); the ambiguity is handled by the label "Thái (Tai) Culture" | don-village, hieu-village, kho-muong-village |
| `lolo-culture` | Lô Lô people | Qualifies: Lô Lô village or heritage is the draw | lo-lo-chai-village |
| `giay-culture` | Giáy people | Qualifies: Giáy village or festival (Roóng Poọc) is the draw | ta-van-village |
| `khmer-culture` | Khmer Krom people | Qualifies: Khmer communities, festivals, or active Khmer pagodas as community centres. Not: Khmer *style* alone (→ `khmer-architecture`) | ba-om-lake, bat-pagoda-soc-trang, ta-pa-fields, ta-pa-temple, vinh-trung-fields |
| `cham-culture` | Living Cham communities (Bani, Cham Muslim, Balamon) | Qualifies: Cham villages, mosques, weaving, living festivals. Not: Champa monuments alone (→ `champa-heritage`) | bung-binh-thien-lake |

### 2.5 Influences

**`khmer-architecture`** (architectural influence)
- **Qualifies:** built form in the Khmer style (tiered roofs, naga, Theravada vihara layout) where that style is part of the draw.
- **Current:** bat-pagoda-soc-trang.
- **Phase 2 check:** ta-pa-temple (content describes Khmer Theravada style?).
- **Relations:** independent of `khmer-culture`; often co-occur.

**`french-architecture`** (architectural influence)
- **Means:** French or European colonial design in *historic* built form: Gothic and neo-Gothic churches, colonial civic buildings, villas, Art Deco, hybrid Franco-Vietnamese styles.
- **Qualifies** where that design is part of the draw.
- **Does not qualify:**
  - Modern replicas and theme-park recreations (french-village-ba-na, Bà Nà's Saint Denis).
  - French-built infrastructure valued for other reasons (a prison visited for its history).
  - "Colonial Architecture" chips where the design is not what you visit.
- **Current (9):** all consistent.
- **Phase 2 checks:** hanoi-old-quarter ("Colonial Architecture" chip - is French-era architecture part of the draw?), hoa-lo-prison (lean no).

**`french-influence`** (cultural influence)
- **Means:** non-architectural French *cultural* legacy that is part of the draw: cuisine and café culture, hill-station lifestyle, language, customs.
- **Does not qualify:** buildings (→ `french-architecture`), the period (→ `french-colonial-era`), Catholicism (→ `catholicism`).
- **Current:** 0. The only candidate phrase in the data (hmong-king-palace, "French influence in fireplaces, chimneys…") is architectural.
- **Status (owner decision): `proposed`**, moved from `canonical`.
  - It stays registered: it is not deleted or deprecated.
  - It is not assigned to any Location in this phase.
  - The audit accepts `canonical` or `proposed` for it, never `deprecated`.

## 3. The inconsistent ethnic-tag cases (from the audit) under E1-E6

Recommendations for the Phase 2 review. **Nothing is changed now.**

| Location | Current | Evidence | Under the rules | Recommendation |
|---|---|---|---|---|
| dong-van-market | hmong-culture | H'Mông, Tày, Nùng and Lô Lô come down to trade; the market is the multi-group gathering | E2 | + `ethnic-minority-culture`; keep `hmong-culture` only if H'Mông is presented as an individual draw (lean remove) |
| muong-hoa-valley | - | four groups (Black H'Mông, Red Dao, Giáy, Tày), each with distinct villages | E2 | + `ethnic-minority-culture` |
| dong-van-old-town | - | dawn market and weekend cultural nights bring Kinh, Tày, Nùng, Lô Lô, H'Mông together | E2 | + `ethnic-minority-culture` |
| binh-lieu-border-mountains | - | Dao, Tày, Sán Chỉ villages; Soóng Cọ singing festival | E2 | + `ethnic-minority-culture` |
| y-ty | - | Hà Nhì dominant: trình tường houses, dress, markets, "not a performance" | E3 | + `ethnic-minority-culture` (no per-group Hà Nhì tag) |
| ba-be-lake | tay-culture + ethnic-minority-culture | Tày village Pác Ngòi is the draw | E1 | keep `tay-culture`; − `ethnic-minority-culture` |
| a-pa-chai | ethnic-minority-culture | a single Hà Nhì village (Sín Thầu) on the approach | E4 | lean − `ethnic-minority-culture` (owner call: the route is part of the visit) |
| lo-lo-chai-village | lolo-culture | Lô Lô village; H'Mông families present but not the draw | E1 | keep as is |
| du-gia-village | tay-culture | Tày families and homestays are the draw; H'mông and Dao present | E1 | keep as is |
| bac-son-valley | ethnic-minority-culture | Tày and Nùng villages, Lồng Tồng festival | E2 | keep as is |
| cat-cat-village | hmong-culture (at index 0) | H'Mông village | E1 | keep; move after the legacy chips (D7) |
| langbiang-mountain, pongour-waterfall | - | K'Ho cultural village, gongs / K'Ho annual festival at the falls | E3 | + `ethnic-minority-culture` if Phase 2 confirms K'Ho culture is a draw at each |

## 4. Evaluation of the two candidate concepts (not created)

### 4.1 16th-18th-century period ("early-modern Vietnam")

**Scope if approved:** 1527-1802. Covers:
- the Mạc dynasty
- the Revival Lê with the Trịnh lords (Đàng Ngoài)
- the Nguyễn lords (Đàng Trong)
- the Tây Sơn

This is the era of Hội An's international trade and of much of the surviving wooden pagoda architecture of the north.

**Affected locations** (the period is the draw):

| Location | Evidence | Existing period tag |
|---|---|---|
| mac-dynasty-citadel | citadel of the Mạc, late 16th-mid 17th c. | none |
| japanese-bridge | built by Hội An's Japanese merchants, c. 1593 / early 17th c. | none |
| hoi-an-ancient-town | the trading port's heyday (Nguyễn-lords era) | none |
| thien-mu-pagoda | founded 1601 by Nguyễn Hoàng; royal pagoda of Đàng Trong | none (`buddhism` only) |
| keo-pagoda | rebuilt after the 1611 flood; 17th-c. wooden architecture is the draw | none |
| tay-phuong-pagoda | Mạc-era phase; 17th-18th-c. Arhat statues (national treasure) | none |
| hang-pagoda | cave adapted into a pagoda under Lê Kính Tông (1599-1619) | none |
| weaker | tran-quoc-pagoda (1615 relocation), bich-dong-pagoda (1705), ba-danh-pagoda (Lê Hy Tông 1676-80), la-vang-sanctuary (1798 apparition - has other tags) | - |

**Can existing tags cover it?** No.
- `medieval-vietnam` ends in the 15th century. Stretching it to 1802 would make "medieval" wrong and blur a useful boundary.
- `nguyen-dynasty` starts in 1802. Its definition now explicitly excludes the Nguyễn lords.

**Owner decision: approved as `proposed`.**
- Key `early-modern-vietnam` (follows `medieval-vietnam`), label "Early Modern Vietnam (16th-18th c.)", group `historical-period`.
- Scope 1527-1802 only. `medieval-vietnam` is not extended.
- Not yet assigned to any Location. The locations above are the Phase 2 review list.

### 4.2 Revolutionary / Hồ Chí Minh history

**Scope if approved:** the anti-colonial independence movement and revolution, c. 1930-1954. Covers:
- Hồ Chí Minh's life and leadership
- the Việt Minh
- the August Revolution (1945)
- the French war (1946-54)

The label should be neutral, consistent with the site's positioning as a neutral data platform, e.g. "Independence Movement".

**Affected locations:**

| Location | Evidence | Existing period tag |
|---|---|---|
| pac-bo-historic-site | where Hồ Chí Minh re-entered Vietnam, 28 Jan 1941; Việt Minh base | none |
| ho-chi-minh-mausoleum-complex | mausoleum, stilt house, museum | none |
| ho-chi-minh-childhood-home | birthplace (1890) and childhood home, Nghệ An | none |
| minh-dam-mountain | resistance base in both the French and American wars | none (a `vietnam-war` candidate too) |
| supporting | con-dao-prison, hoa-lo-prison (political prisoners under the French - already tagged `french-colonial-era`); chips "1945 Uprising Site", "Vietnamese Resistance History" | - |

**Can existing tags cover it?**
- **`vietnam-war`: no.** Widening it to 1945-75 would stretch the internationally understood name, and a birthplace or 1941 base is not "Vietnam War" history.
- **`french-colonial-era`: partly, and wrongly.** It is the period of the colonial state, not of the movement against it. Tagging Pác Bó "French Colonial Era" would misdescribe it.

**Owner decision: approved as `proposed`.**
- Key `independence-movement`, label "Independence Movement (1930-1954)", group `historical-period`.
- Scope: the Vietnamese independence / revolutionary movement context centred on 1930-1954.
- Not a generic tag for all anti-colonial or revolutionary history outside that scope.
- Not assigned automatically to any Location. The locations above are the Phase 2 review list.

## 5. Registry wording (applied in Phase 1b - descriptions and statuses only)

Description-only updates that would encode §2:

| Tag | Wording change |
|---|---|
| `vietnam-war` | "1955-1975 (kháng chiến chống Mỹ) and its direct legacy. Not the French war or earlier revolutionary history" |
| `nguyen-dynasty` | "…Not the Nguyễn lords (1558-1777)" |
| `french-colonial-era` | "…only where colonial-period history is the focus, not background" |
| `champa-heritage` | "…whether ruined or in use" |
| `hinduism` | "…not implied by champa-heritage" |
| `french-architecture` | "…historic built form; not replicas" |
| `ethnic-minority-culture` | encode E2/E3 |
| `buddhism` | the religion-group rule (tradition, not "is a religious site") |

Plus:
- the status change `french-influence` → `proposed` (§2.5)
- the E1-E6 and T1-T6 rules, added to AUDIT.md and CLAUDE.md in the same style as the Experience definitions

## 6. Out of scope here (listed for Phase 2)

- D7 order fixes: cat-cat-village, war-remnants-museum.
- The per-location reviews flagged above: medieval-vietnam edges, french-colonial-era focus, east-sea on thoi-loi, hinduism on nhan-tower, khmer-architecture on ta-pa-temple, jade-emperor buddhism, the ethnic cases in §3, and vietnam-war candidates.
- Legacy emoji chips: untouched, and treated as editorial display copy.

## Owner decisions (Tags Phase 1)

1. T1-T6 and E1-E6: **approved** as documented.
2. `french-influence`: **moved to `proposed`**. Not deleted, and not assigned in this phase.
3. 1527-1802 period: **approved as `proposed`** `early-modern-vietnam`, scope 1527-1802 only, `medieval-vietnam` not extended.
4. Independence movement: **approved as `proposed`** `independence-movement`, centred on 1930-1954, not a generic anti-colonial tag, not assigned automatically.
5. Phase 1b: registry descriptions and statuses, the audit's frozen lists, AUDIT.md, CLAUDE.md and this document. No Location data or tag assignments.
6. Next: Phase 2, a location-by-location review against these rules, showing the change list for owner approval before anything is applied.

## 7. Tags Phase 2 amendments (owner-approved)

### 7.1 `french-colonial-era` - relaxed threshold (this tag only)
`french-colonial-era` may apply when French colonial history or surviving colonial-era heritage is a **meaningful part of the location's historical identity**, even when it is not the primary attraction, provided the connection is **explicitly documented in the Location content**.
- **Qualifies:**
  - surviving colonial-era structures or ruins that the content presents as something to see;
  - a colonial-era event the site is remembered for and commemorates on site.
- **Does not qualify:**
  - a single origin sentence ("since the colonial period");
  - a French name or French discoverer;
  - a destruction event by French forces;
  - a modern replica;
  - colonial heritage the content says no longer survives (quan-ba-heaven-gate) or that stands elsewhere.
- T3 and T4 still apply. It is never inferred from `french-architecture` or `french-influence`.

### 7.2 Other historical-period tags - secondary layers
For `medieval-vietnam`, `early-modern-vietnam`, `nguyen-dynasty`, `independence-movement` and `vietnam-war`, the §7.1 threshold is **not** generalised.
- A secondary historical layer qualifies only when the content presents it as a **distinct reason to visit**, not merely as historical context.
- Examples decided in Phase 2:
  - `vietnam-war`: no on long-bien-bridge, imperial-citadel-of-thang-long, imperial-city-hue and thien-mu-pagoda.
  - `medieval-vietnam`: removed from am-tien-cave (Đinh-era legend as context; the stated draw is the cave and lake scenery).

### 7.3 `folk-religion` - worship practice decides
Applicability follows the worship practised at the site, not the body that administers it.

### 7.4 Proposed tags promoted
`early-modern-vietnam` and `independence-movement` are promoted from `proposed` to `canonical`. Only owner-approved Locations are assigned:
- `early-modern-vietnam` (7): mac-dynasty-citadel, japanese-bridge, hoi-an-ancient-town, thien-mu-pagoda, keo-pagoda, tay-phuong-pagoda, hang-pagoda.
- `independence-movement` (1): pac-bo-historic-site.

Other §4 candidates stay unassigned until a later owner decision:
- the weaker early-modern candidates: tran-quoc-pagoda, bich-dong-pagoda, ba-danh-pagoda, la-vang-sanctuary;
- ho-chi-minh-childhood-home and the other independence candidates.

`french-influence` stays `proposed`, with no assignments.

### 7.5 Scope
Non-active Locations are out of the Phase 2 migration. Legacy emoji labels are untouched.
