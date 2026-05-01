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

---

## Destinations Structure

Destinations are mid-tier hubs containing multiple locations.
Example: Pù Luông (destination) -> Bản Hiêu, Thác Hiêu, Bản Đôn... (locations)

After adding a new location file:
1. Add import to `data/all-locations.ts` (alphabetical)
2. Add to the `allLocations` array (alphabetical)
3. If introducing a new destination, add an entry to `data/destinations.ts`

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
