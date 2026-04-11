# -*- coding: utf-8 -*-
import io
import json
import os
import sys
import time
import requests
import pandas as pd
from pathlib import Path

# Fix Windows console encoding (prevents UnicodeEncodeError on print)
if sys.platform == 'win32':
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

# ============================================================
# CONFIG
# ============================================================
API_KEY = 'OTE5MmEzODk4OWUzNGJlODk1ZDgwNGEwYTA2YzE1MTd8MTg3OWFjOWJmNw'
REVIEWS_PER_LOCATION = 30
MIN_REVIEW_LENGTH = 30
# ============================================================

HEADERS = {
    'X-API-KEY': API_KEY,
    'Content-Type': 'application/json',
}

import urllib3
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

def fetch_reviews(url):
    params = {
        'query': url,
        'reviewsLimit': REVIEWS_PER_LOCATION,
        'language': 'en',
        'sort': 'most_relevant',
        'async': 'false',
    }
    response = requests.get(
        'https://api.app.outscraper.com/maps/reviews-v3',
        headers=HEADERS,
        params=params,
        timeout=60,
        verify=False,
    )
    response.raise_for_status()
    return response.json()

# Đọc CSV — chỉ cần 2 cột: slug và full_url
df = pd.read_csv('locations_resolved.csv', encoding='utf-8-sig')
df.columns = df.columns.str.strip()
df = df[df['slug'] != 'slug'].dropna(subset=['full_url'])

TEST_MODE = '--test' in sys.argv
if TEST_MODE:
    df = df.head(3)
    print("=== TEST MODE: running first 3 locations only ===\n")

output_dir = Path('outscraper_raw')
output_dir.mkdir(exist_ok=True)

total = len(df)
success = 0
skipped = 0
errors = []

print("Starting fetch for {} locations...\n".format(total))

for i, row in df.iterrows():
    slug = str(row['slug']).strip()
    full_url = str(row['full_url']).strip()

    output_file = output_dir / (slug + '.json')

    if output_file.exists():
        print("[SKIP] {}".format(slug))
        skipped += 1
        continue

    current = success + skipped + 1
    print("[{}/{}] {}...".format(current, total, slug))

    result = None
    for attempt in range(3):
        try:
            result = fetch_reviews(full_url)
            break
        except Exception as e:
            if attempt == 2:
                print("  ERROR - {}".format(str(e)[:120]))
                errors.append({'slug': slug, 'error': str(e)[:200]})
            else:
                print("  Retry {}/3...".format(attempt + 1))
                time.sleep(3)

    if not result:
        continue

    data_list = result.get('data', [])
    if not data_list or not data_list[0] or 'reviews_data' not in data_list[0]:
        print("  WARN - no data returned")
        errors.append({'slug': slug, 'error': 'no reviews_data'})
        continue

    place = data_list[0]

    reviews = []
    for r in place.get('reviews_data', []):
        text = ' '.join((r.get('review_text') or '').split())
        if len(text) > MIN_REVIEW_LENGTH:
            reviews.append({
                'author': r.get('author_title'),
                'rating': r.get('review_rating'),
                'text': text,
                'likes': r.get('review_likes_count'),
                'date': r.get('review_datetime_utc'),
            })

    data = {
        'slug': slug,
        'name': place.get('name', slug),
        'google_rating': place.get('rating'),
        'google_review_count': place.get('reviews'),
        'fetched_reviews': len(reviews),
        'reviews': reviews,
    }

    output_file.write_text(
        json.dumps(data, ensure_ascii=False, indent=2),
        encoding='utf-8'
    )

    print("  OK - {}* ({} total) - {} reviews saved".format(
        data['google_rating'], data['google_review_count'], data['fetched_reviews']
    ))
    success += 1
    time.sleep(1)

print("\n" + "="*50)
print("Done! {} fetched, {} skipped, {} errors".format(success, skipped, len(errors)))

if errors:
    with open('fetch_errors.json', 'w', encoding='utf-8') as f:
        json.dump(errors, f, ensure_ascii=False, indent=2)
    print("Errors saved to fetch_errors.json")
    for e in errors:
        print("  - {}: {}".format(e['slug'], e['error'][:80]))
