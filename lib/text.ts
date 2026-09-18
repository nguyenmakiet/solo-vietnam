/**
 * Strips a leading decorative emoji (and the space after it) from a string,
 * e.g. "👁️ 50m Natural Rock Hole" -> "50m Natural Rock Hole".
 *
 * Several data files (location/destination/province `tags`) store tags with
 * an emoji baked into the string for older UI treatments. We keep that data
 * as-is (don't touch the source files), but render tags without the emoji
 * for the current restrained, editorial tag style. Text with no leading
 * emoji is returned unchanged.
 */
export function stripLeadingEmoji(text: string): string {
  // \p{Extended_Pictographic} covers emoji glyphs; ️ is the variation
  // selector that forces emoji presentation; ‍ is the zero-width joiner
  // used in compound emoji (e.g. flags, family emoji).
  return text.replace(/^[\p{Extended_Pictographic}\u{FE0F}\u{200D}\s]+/u, "")
}
