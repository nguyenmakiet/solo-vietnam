import requests
import re
import pandas as pd
import time

def resolve_short_url(short_url):
    try:
        r = requests.get(short_url, allow_redirects=True, timeout=10)
        full_url = r.url
        place_id_match = re.search(r'!1s(ChIJ[^!]+)', full_url)
        if place_id_match:
            return full_url, place_id_match.group(1)
        return full_url, None
    except Exception as e:
        return None, str(e)

# Đọc file CSV — chỉnh tên cột cho đúng với file của mày
df = pd.read_csv('locations.csv', header=None, names=['slug', 'name', 'map_url'])

outscraper_queries = []

for i, row in df.iterrows():
    slug = row['slug']
    short_url = row['map_url']
    print(f"[{i+1}/{len(df)}] {slug}...")

    full_url, place_id = resolve_short_url(short_url)
    query = place_id if place_id else full_url

    outscraper_queries.append({
        'slug': slug,
        'name': row['name'],
        'outscraper_query': query,
        'place_id': place_id,
        'full_url': full_url,
    })
    print(f"  → {query}")
    time.sleep(0.3)

# Lưu kết quả
result_df = pd.DataFrame(outscraper_queries)
result_df.to_csv('locations_resolved.csv', index=False, encoding='utf-8-sig')
print(f"\nDone! Saved to locations_resolved.csv")