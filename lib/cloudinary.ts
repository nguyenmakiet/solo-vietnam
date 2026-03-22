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