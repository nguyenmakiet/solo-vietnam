/**
 * Prints a JSON snapshot of every Location with the four taxonomy fields
 * (type, categories, experiences, tags) removed. Used during the taxonomy
 * content review to prove that only taxonomy fields changed:
 *
 *   git worktree add /tmp/base <base-ref> && (cd /tmp/base && ln -s <repo>/node_modules)
 *   (cd /tmp/base && npx tsx scripts/taxonomy-content-snapshot.ts) > before.json
 *   npx tsx scripts/taxonomy-content-snapshot.ts > after.json
 *   cmp before.json after.json
 *
 * Read-only - never writes to any file.
 */

import { allLocations } from "../data/all-locations"

const TAXONOMY_FIELDS = new Set(["type", "categories", "experiences", "tags"])

const snapshot = allLocations.map((location) =>
  Object.fromEntries(Object.entries(location).filter(([key]) => !TAXONOMY_FIELDS.has(key)))
)

console.log(JSON.stringify({ count: snapshot.length, locations: snapshot }, null, 1))
