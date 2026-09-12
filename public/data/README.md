# /public/data

## vn-provinces-2025.geojson

Boundary polygons for Vietnam's 34 post-merger provincial-level units (effective
1 July 2025: 28 provinces + 6 centrally-run cities), used as a Leaflet overlay on
`/map` and the destination itinerary map so the map shows current administrative
boundaries instead of relying on the basemap tile provider's (outdated) baked-in
lines.

- **Source:** [thanglequoc/vietnamese-provinces-database](https://github.com/thanglequoc/vietnamese-provinces-database)
  (`json/geojson/{code}_{slug}/`), MIT licensed. Data there is sourced from the
  General Statistics Office of Vietnam / Dept. of Survey, Mapping and Geographic
  Information under the Ministry of Agriculture and Environment.
- **Fetched:** 2026-09-12.
- **Processing:** merged all 34 per-province files into one FeatureCollection,
  kept only `code` / `name` / `nameEn` properties, then simplified with
  `mapshaper -simplify 8% keep-shapes` (2.1MB -> 159KB, visually verified the
  simplification didn't distort province shapes/topology).
- **To regenerate** (e.g. if the upstream repo publishes an updated map): re-run
  the fetch + merge + simplify steps above against the current upstream file list,
  then replace this file.
