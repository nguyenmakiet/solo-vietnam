// lib/cloudinary.ts
// Cloudinary image helper for soloinvietnam.com
// Cloud name: dl5kqhspv

const CLOUD_NAME = "dl5kqhspv"
const BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`

// ─── Preset sizes ───────────────────────────────────────────
export const ImageSize = {
  foodCard: { w: 600, h: 400 },       // Food cards on province page
  heroImage: { w: 1200, h: 630 },     // Destination hero (og:image too)
  destinationCard: { w: 800, h: 500 },// Destination grid cards
  thumbnail: { w: 200, h: 200 },      // Small thumbnails, related cards
} as const

// ─── Core function ───────────────────────────────────────────
/**
 * Generate a Cloudinary URL with auto quality + format optimization.
 *
 * @param publicId  - Cloudinary public ID (e.g. "muoi-tom-bac-lieu" or "provinces/bac-lieu/muoi-tom")
 * @param width     - Output width in px (default 600)
 * @param height    - Output height in px (default 400)
 * @param crop      - Crop mode (default "fill" - crops to exact dimensions without distortion)
 * @returns Optimized Cloudinary URL
 *
 * @example
 * cloudinaryUrl("muoi-tom-bac-lieu")
 * cloudinaryUrl("muoi-tom-bac-lieu", 800, 500)
 * cloudinaryUrl("hero/sapa", 1200, 630)
 */
export function cloudinaryUrl(
  publicId: string,
  width = 600,
  height = 400,
  crop: "fill" | "crop" | "scale" | "fit" | "pad" = "fill"
): string {
  const transforms = `w_${width},h_${height},c_${crop},q_auto,f_auto`
  return `${BASE_URL}/${transforms}/${publicId}`
}

// ─── Preset shortcuts ─────────────────────────────────────────
export const foodCardUrl = (publicId: string) =>
  cloudinaryUrl(publicId, ImageSize.foodCard.w, ImageSize.foodCard.h)

export const heroUrl = (publicId: string) =>
  cloudinaryUrl(publicId, ImageSize.heroImage.w, ImageSize.heroImage.h)

export const destinationCardUrl = (publicId: string) =>
  cloudinaryUrl(publicId, ImageSize.destinationCard.w, ImageSize.destinationCard.h)

export const thumbnailUrl = (publicId: string) =>
  cloudinaryUrl(publicId, ImageSize.thumbnail.w, ImageSize.thumbnail.h)

// 96px square thumbnail, shared by the round map pins (components/map-shared.tsx,
// 2x the 44px pin) and the search results (components/Search/SearchModal.tsx),
// so both ask Cloudinary for the same variant of an image. Gravity auto keeps
// the subject in the crop. Any existing transformation segment is replaced.
// null = no real photo yet (the pin stays a dot, search shows an empty thumb)
const THUMB_96 = "w_96,h_96,c_fill,g_auto,q_auto,f_auto"
const UPLOAD = "/image/upload/"
export function thumb96Url(url: string | undefined): string | null {
  const photo = realPhoto(url)
  const i = photo?.startsWith("https://res.cloudinary.com/") ? photo.indexOf(UPLOAD) : -1
  if (!photo || i === -1) return null
  const rest = photo.slice(i + UPLOAD.length).split("/")
  if (rest.length > 1 && /^[a-z]{1,3}_[^/]*$/.test(rest[0])) rest.shift()
  return `${photo.slice(0, i + UPLOAD.length)}${THUMB_96}/${rest.join("/")}`
}

// ─── Open Graph images ───────────────────────────────────────
// Social scrapers (Facebook, Zalo...) reject the WebP/AVIF that f_auto can
// negotiate ("Invalid Image Content Type"), so og:image always forces JPEG.
export const ogImageUrl = (url: string) => url.replace(/\bf_auto\b/, "f_jpg")

export const OG_FALLBACK_IMAGE = ogImageUrl(heroUrl("ha-giang-loop_e8myfw"))

// ─── Real photo check ────────────────────────────────────────
// Unconfirmed publicIds are named "...placeholder" (see CLAUDE.md) and do not
// exist on Cloudinary. null = no real photo yet; callers hide the image slot.
export function realPhoto(url?: string): string | null {
  if (!url || url.includes("placeholder")) return null
  return url
}
