// lib/coordinates.ts
// Location coordinates are decimal-degree numbers. The only allowed string is
// "" - an unconfirmed coordinate flagged with `// TODO: verify` (CLAUDE.md).
export type Coordinate = number | ""

/** Decimal degrees, or NaN when the coordinate is missing ("") or invalid. */
export function toCoordinate(val: number | string | undefined): number {
  if (typeof val === "number") return val
  if (!val || !val.trim()) return NaN
  return Number(val)
}
