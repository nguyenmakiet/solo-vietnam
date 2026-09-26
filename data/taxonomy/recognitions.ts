// ─── Recognition / official designation (side-car) ───────────
// Owner-approved in Phase 2 (CONSOLIDATION-PROPOSAL.md §8): official
// designations are structured data, not flat tags, and not a new Location field.
//
// This file is the source of truth. It is keyed by Location slug and is NOT
// read by any page yet. Discovery keys can be derived at runtime with
// getRecognitionTags() - they are never written into Location.tags.
// Legacy display labels such as "🌊 UNESCO Heritage" stay untouched.
//
// Anti-hallucination rule: every record below is taken from the location's own
// content (intro, SEO text, highlights, tips or an existing legacy label). Years
// are only filled in when that content states them. `verified: false` means
// "not yet checked against the official register" - TODO: verify.
//
// NOT recognitions (stay as display labels): rankings, records and media lists
// (Guinness, Forbes, TripAdvisor, Vietnam Records, Rough Guides...).

export type RecognitionScheme =
  // international
  | "unesco-world-heritage"
  | "unesco-global-geopark"
  | "unesco-biosphere-reserve"
  | "unesco-intangible-heritage"
  | "unesco-memory-of-the-world"
  | "ramsar-site"
  | "un-tourism-best-village"
  | "minor-basilica"
  // Vietnam - heritage law (di tích)
  | "vn-special-national-relic" // di tích quốc gia đặc biệt
  | "vn-national-relic" // di tích quốc gia (incl. danh lam thắng cảnh)
  | "vn-national-intangible-heritage"
  | "vn-national-treasure" // bảo vật quốc gia (objects)
  | "vn-national-tourism-area"
  // Vietnam - protected areas
  | "vn-nature-reserve"
  | "vn-marine-protected-area"

export type RecognitionLevel = "international" | "national-special" | "national"

// Kind of Vietnamese relic, when the content says it.
export type RelicKind = "historical" | "historical-cultural" | "architectural-artistic" | "scenic" | "archaeological"

// How the designation relates to the location:
//   site                   - the location itself is designated
//   within-designated-area - the location lies inside a larger designated area/property
//   part-of-site           - a component or object inside the location is designated
//   associated-practice    - an intangible practice held at the location is designated
//   nearby                 - the designated area is next to the location
export type RecognitionScope = "site" | "within-designated-area" | "part-of-site" | "associated-practice" | "nearby"

export type Recognition = {
  scheme: RecognitionScheme
  level: RecognitionLevel
  scope: RecognitionScope
  relicKind?: RelicKind
  property?: string // named property / area, e.g. "Complex of Huế Monuments"
  year?: number
  note?: string
  source: "location-content"
  verified: boolean
}

const LEVEL: Record<RecognitionScheme, RecognitionLevel> = {
  "unesco-world-heritage": "international",
  "unesco-global-geopark": "international",
  "unesco-biosphere-reserve": "international",
  "unesco-intangible-heritage": "international",
  "unesco-memory-of-the-world": "international",
  "ramsar-site": "international",
  "un-tourism-best-village": "international",
  "minor-basilica": "international",
  "vn-special-national-relic": "national-special",
  "vn-national-relic": "national",
  "vn-national-intangible-heritage": "national",
  "vn-national-treasure": "national",
  "vn-national-tourism-area": "national",
  "vn-nature-reserve": "national",
  "vn-marine-protected-area": "national",
}

type RecordInput = Omit<Recognition, "level" | "source" | "verified" | "scope"> & { scope?: RecognitionScope }

function r(input: RecordInput): Recognition {
  return { scope: "site", ...input, level: LEVEL[input.scheme], source: "location-content", verified: false }
}

const HA_LONG = "Hạ Long Bay"
const TRANG_AN = "Tràng An Landscape Complex"
const HUE = "Complex of Huế Monuments"
const HOI_AN = "Hội An Ancient Town"
const PHONG_NHA = "Phong Nha-Kẻ Bàng National Park"
const DONG_VAN = "Đồng Văn Karst Plateau"
const PU_LUONG = "Pù Luông Nature Reserve"
const NHA_TRANG_MPA = "Nha Trang Bay Marine Protected Area"

export const LOCATION_RECOGNITIONS: Readonly<Record<string, readonly Recognition[]>> = {
  // ── UNESCO World Heritage ──
  "ha-long-bay": [r({ scheme: "unesco-world-heritage", property: HA_LONG })],
  "sung-sot-cave": [r({ scheme: "unesco-world-heritage", scope: "within-designated-area", property: HA_LONG })],
  "thien-cung-cave": [r({ scheme: "unesco-world-heritage", scope: "within-designated-area", property: HA_LONG })],
  "bai-tu-long-bay": [
    r({
      scheme: "unesco-world-heritage",
      scope: "within-designated-area",
      property: HA_LONG,
      note: "Content says it 'shares the same UNESCO karst landscape' - exact inclusion in the property to verify",
    }),
  ],
  "trang-an": [r({ scheme: "unesco-world-heritage", property: TRANG_AN, year: 2014, note: "Mixed (natural and cultural) site" })],
  "tam-coc": [r({ scheme: "unesco-world-heritage", scope: "within-designated-area", property: TRANG_AN })],
  "hoa-lu-ancient-capital": [
    r({ scheme: "unesco-world-heritage", scope: "within-designated-area", property: TRANG_AN, year: 2014 }),
  ],
  "bich-dong-pagoda": [
    r({ scheme: "unesco-world-heritage", scope: "within-designated-area", property: TRANG_AN, year: 2014 }),
    r({ scheme: "vn-special-national-relic", scope: "within-designated-area", property: TRANG_AN, year: 2012 }),
  ],
  "imperial-city-hue": [r({ scheme: "unesco-world-heritage", scope: "within-designated-area", property: HUE, year: 1993 })],
  "thien-mu-pagoda": [
    r({ scheme: "unesco-world-heritage", scope: "within-designated-area", property: HUE }),
    r({ scheme: "vn-national-treasure", scope: "part-of-site", year: 2013, note: "The bell and the 'Ngự kiến Thiên Mụ tự' stele" }),
  ],
  "hoi-an-ancient-town": [r({ scheme: "unesco-world-heritage", property: HOI_AN, year: 1999 })],
  "japanese-bridge": [r({ scheme: "unesco-world-heritage", scope: "within-designated-area", property: HOI_AN })],
  "my-son-sanctuary": [r({ scheme: "unesco-world-heritage", property: "Mỹ Sơn Sanctuary", year: 1999 })],
  "imperial-citadel-of-thang-long": [
    r({ scheme: "unesco-world-heritage", property: "Imperial Citadel of Thăng Long", year: 2010 }),
  ],
  "ho-dynasty-citadel": [
    r({ scheme: "unesco-world-heritage", property: "Citadel of the Hồ Dynasty", year: 2011 }),
    r({ scheme: "vn-national-relic", relicKind: "historical", year: 1962 }),
  ],
  "phong-nha-cave": [r({ scheme: "unesco-world-heritage", scope: "within-designated-area", property: PHONG_NHA })],
  "phong-nha-botanic-garden": [r({ scheme: "unesco-world-heritage", scope: "within-designated-area", property: PHONG_NHA })],
  "yen-tu-mountain": [
    r({
      scheme: "unesco-world-heritage",
      scope: "within-designated-area",
      property: "Yên Tử - Vĩnh Nghiêm - Côn Sơn - Kiếp Bạc complex",
      year: 2025,
    }),
  ],

  // ── Other UNESCO programmes ──
  "angel-eye-mountain": [
    r({ scheme: "unesco-global-geopark", scope: "within-designated-area", property: "Non Nước Cao Bằng" }),
  ],
  "dong-van-market": [r({ scheme: "unesco-global-geopark", scope: "within-designated-area", property: DONG_VAN })],
  "dong-van-old-town": [r({ scheme: "unesco-global-geopark", scope: "within-designated-area", property: DONG_VAN })],
  "ma-pi-leng-pass": [r({ scheme: "unesco-global-geopark", scope: "within-designated-area", property: DONG_VAN })],
  "nho-que-river": [r({ scheme: "unesco-global-geopark", scope: "within-designated-area", property: DONG_VAN })],
  "mui-ca-mau-national-park": [r({ scheme: "unesco-biosphere-reserve" })],
  "can-gio-monkey-island": [
    r({ scheme: "unesco-biosphere-reserve", scope: "within-designated-area", property: "Cần Giờ Mangrove Biosphere Reserve" }),
  ],
  "can-gio-beach": [
    r({ scheme: "unesco-biosphere-reserve", scope: "nearby", property: "Cần Giờ Mangrove Biosphere Reserve" }),
  ],
  "cat-tien-national-park": [
    r({ scheme: "unesco-biosphere-reserve", scope: "within-designated-area", note: "From the legacy label only" }),
    r({ scheme: "ramsar-site", scope: "part-of-site", property: "Bàu Sấu wetland" }),
  ],
  "hung-temple": [
    r({ scheme: "unesco-intangible-heritage", scope: "associated-practice", note: "Worship of the Hùng Kings" }),
  ],
  "temple-of-literature": [
    r({ scheme: "unesco-memory-of-the-world", scope: "part-of-site", note: "Doctoral steles 1484-1779" }),
    r({ scheme: "vn-national-relic", note: "From the legacy label '🇻🇳 National Heritage' - relic level to verify" }),
  ],

  // ── Ramsar ──
  "ba-be-lake": [
    r({ scheme: "ramsar-site", year: 2011 }),
    r({ scheme: "vn-national-relic", relicKind: "historical-cultural", year: 1996 }),
  ],
  "con-dao-national-park": [r({ scheme: "ramsar-site", year: 2013 })],

  // ── Vietnam - special national relics ──
  "ben-hai-river": [r({ scheme: "vn-special-national-relic", year: 2013, note: "The memorial complex" })],
  "eight-ladies-cave": [
    r({ scheme: "vn-special-national-relic", relicKind: "historical", note: "Road 20 - Quyết Thắng and Eight Youth Volunteers Cave" }),
  ],
  "ho-chi-minh-childhood-home": [
    r({ scheme: "vn-national-relic", year: 1990 }),
    r({ scheme: "vn-special-national-relic", year: 2012 }),
  ],
  "keo-pagoda": [
    r({ scheme: "vn-national-relic", relicKind: "historical-cultural", year: 1962 }),
    r({ scheme: "vn-special-national-relic", year: 2012 }),
    r({ scheme: "vn-national-intangible-heritage", scope: "associated-practice", year: 2017, note: "Keo Pagoda festival" }),
  ],
  "ngoc-son-temple": [r({ scheme: "vn-special-national-relic", year: 2013 })],
  "nhan-tower": [
    r({ scheme: "vn-national-relic", relicKind: "architectural-artistic", year: 1988 }),
    r({ scheme: "vn-special-national-relic", year: 2018 }),
  ],
  "plate-rock-reef": [
    r({ scheme: "vn-national-relic", relicKind: "scenic", year: 1998 }),
    r({ scheme: "vn-special-national-relic", year: 2020 }),
  ],
  "quang-tri-ancient-citadel": [
    r({ scheme: "vn-national-relic", relicKind: "historical-cultural", year: 1986 }),
    r({ scheme: "vn-special-national-relic", year: 2013, note: "The listing also covers nearby memorial sites" }),
  ],
  "tay-phuong-pagoda": [
    r({ scheme: "vn-special-national-relic", note: "From the legacy label '🏛️ National Special Relic' - year to verify" }),
    r({ scheme: "vn-national-treasure", scope: "part-of-site", note: "Set of 18 Arhat statues" }),
  ],

  // ── Vietnam - national relics (incl. scenic sites) ──
  "an-hai-communal-house": [r({ scheme: "vn-national-relic", relicKind: "historical-cultural", year: 1995 })],
  "an-vinh-communal-house": [
    r({ scheme: "vn-national-relic", relicKind: "historical-cultural", year: 2013 }),
    r({
      scheme: "vn-national-intangible-heritage",
      scope: "associated-practice",
      year: 2013,
      note: "Khao Lề Thế Lính ceremony",
    }),
  ],
  "ba-danh-pagoda": [r({ scheme: "vn-national-relic", relicKind: "historical-cultural", year: 1994 })],
  "ba-om-lake": [r({ scheme: "vn-national-relic", relicKind: "historical-cultural", year: 1994 })],
  "bai-dinh-pagoda": [
    r({ scheme: "vn-national-relic", scope: "part-of-site", year: 1977, note: "The ancient pagoda, not the modern complex" }),
  ],
  "bat-pagoda-soc-trang": [r({ scheme: "vn-national-relic", relicKind: "architectural-artistic", year: 1999 })],
  "chua-chan-mountain": [r({ scheme: "vn-national-relic", relicKind: "scenic", year: 2012 })],
  "con-dao-prison": [r({ scheme: "vn-national-relic", relicKind: "historical" })],
  "dalat-railway-station": [r({ scheme: "vn-national-relic", relicKind: "historical-cultural", year: 2001 })],
  "elephant-waterfall": [r({ scheme: "vn-national-relic", relicKind: "scenic", year: 2001 })],
  "gieng-tien-peak": [r({ scheme: "vn-national-relic", year: 2020, note: "Crater landscape" })],
  "hang-pagoda": [r({ scheme: "vn-national-relic", relicKind: "historical-cultural", year: 1994 })],
  "hmong-king-palace": [r({ scheme: "vn-national-relic", year: 1993 })],
  "jade-emperor-pagoda": [r({ scheme: "vn-national-relic", relicKind: "architectural-artistic", year: 1994 })],
  "mac-dynasty-citadel": [r({ scheme: "vn-national-relic", year: 1962 })],
  "minh-dam-mountain": [r({ scheme: "vn-national-relic", relicKind: "historical", year: 1993, note: "The resistance base" })],
  "muong-hoa-valley": [
    r({ scheme: "vn-national-relic", relicKind: "archaeological", scope: "part-of-site", note: "Ancient carved stone field" }),
  ],
  "quan-ba-twin-mountains": [r({ scheme: "vn-national-relic", relicKind: "scenic", year: 2010 })],
  "to-vo-gate": [r({ scheme: "vn-national-relic", year: 2025 })],
  "tran-quoc-pagoda": [r({ scheme: "vn-national-relic", relicKind: "historical-cultural", year: 1989 })],
  "tuyen-lam-lake": [
    r({ scheme: "vn-national-relic", relicKind: "historical-cultural", year: 1988 }),
    r({ scheme: "vn-national-relic", relicKind: "scenic", year: 1998 }),
    r({ scheme: "vn-national-tourism-area", year: 2017 }),
  ],

  // ── Vietnam - intangible heritage ──
  "cai-rang-floating-market": [r({ scheme: "vn-national-intangible-heritage", year: 2016 })],
  "tra-que-village": [
    r({ scheme: "vn-national-intangible-heritage" }),
    r({ scheme: "un-tourism-best-village", year: 2024 }),
  ],

  // ── Other international ──
  "lo-lo-chai-village": [r({ scheme: "un-tourism-best-village", year: 2025 })],
  "la-vang-sanctuary": [r({ scheme: "minor-basilica" })],

  // ── Protected areas ──
  "van-long-nature-reserve": [r({ scheme: "vn-nature-reserve", year: 1998 })],
  "son-tra-peninsula": [r({ scheme: "vn-nature-reserve" })],
  "don-village": [r({ scheme: "vn-nature-reserve", scope: "within-designated-area", property: PU_LUONG })],
  "hieu-village": [r({ scheme: "vn-nature-reserve", scope: "within-designated-area", property: PU_LUONG })],
  "hieu-waterfall": [r({ scheme: "vn-nature-reserve", scope: "within-designated-area", property: PU_LUONG })],
  "kho-muong-village": [r({ scheme: "vn-nature-reserve", scope: "within-designated-area", property: PU_LUONG })],
  "kho-muong-cave": [r({ scheme: "vn-nature-reserve", scope: "within-designated-area", property: PU_LUONG })],
  "s-shape-rice-terraces": [r({ scheme: "vn-nature-reserve", scope: "within-designated-area", property: PU_LUONG })],
  "k50-waterfall": [
    r({ scheme: "vn-nature-reserve", scope: "within-designated-area", property: "Kon Chư Răng Nature Reserve" }),
  ],
  "hon-mun-island": [r({ scheme: "vn-marine-protected-area", scope: "within-designated-area", property: NHA_TRANG_MPA })],
  "hon-tam-island": [r({ scheme: "vn-marine-protected-area", scope: "within-designated-area", property: NHA_TRANG_MPA })],
}

export function getRecognitions(slug: string): readonly Recognition[] {
  return LOCATION_RECOGNITIONS[slug] ?? []
}

// Coarse discovery keys derived at runtime (e.g. for search or filters).
// Only designations of the place itself or of the area it lies in count -
// an object inside the site or a nearby area does not.
export function getRecognitionTags(slug: string): RecognitionScheme[] {
  const keys = getRecognitions(slug)
    .filter((rec) => rec.scope === "site" || rec.scope === "within-designated-area")
    .map((rec) => rec.scheme)
  return [...new Set(keys)]
}
