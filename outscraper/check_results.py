import json
from pathlib import Path

output_dir = Path('outscraper_raw')
files = sorted(output_dir.glob('*.json'))

null_rating = []
zero_reviews = []
ok = []

for f in files:
    data = json.loads(f.read_text(encoding='utf-8'))
    slug = data['slug']
    rating = data.get('google_rating')
    count = data.get('google_review_count')
    fetched = data.get('fetched_reviews', 0)

    if rating is None:
        null_rating.append(slug)
    elif fetched == 0:
        zero_reviews.append({'slug': slug, 'rating': rating, 'total': count})
    else:
        ok.append(slug)

print("=" * 50)
print("SUMMARY")
print("=" * 50)
print("OK (has reviews):      {}".format(len(ok)))
print("Zero reviews fetched:  {}".format(len(zero_reviews)))
print("Null rating (no data): {}".format(len(null_rating)))
print()

if null_rating:
    print("NULL RATING - need to fix URL in CSV:")
    for slug in null_rating:
        print("  - {}".format(slug))
    print()

if zero_reviews:
    print("ZERO REVIEWS - location exists but no reviews fetched:")
    for item in zero_reviews:
        print("  - {} ({}*, {} total reviews)".format(
            item['slug'], item['rating'], item['total']
        ))
