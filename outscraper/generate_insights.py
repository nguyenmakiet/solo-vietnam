# -*- coding: utf-8 -*-
import io
import json
import sys
import time
from pathlib import Path

import anthropic
from dotenv import load_dotenv

load_dotenv()

if sys.platform == 'win32':
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

CLAUDE_MODEL = "claude-haiku-4-5-20251001"
RAW_DIR = Path("outscraper_raw")
OUT_DIR = Path("ai_insights")
OUT_DIR.mkdir(exist_ok=True)

PROMPT_TEMPLATE = """\
You are a travel editor creating practical travel insights for an international travel website about Vietnam.
Below are traveler reviews collected from Google Maps.
Reviews may be written in Vietnamese, English, Korean, Japanese, or other languages. Understand them regardless of language.
Extract only practical insights that help travelers plan their visit.
Ignore generic praise such as "beautiful", "nice", "amazing".
Only use information that appears in the reviews. Do not invent facts.
Keep Vietnamese place names as-is (e.g. "Hồ Tây", "Phố cổ").

Output ONLY a valid JSON object with this exact structure:

{{
  "highlights": ["string", "string", "string"],
  "thingsToKnow": {{
    "crowds": "string or null",
    "difficulty": "string or null",
    "safety": "string or null",
    "accessibility": "string or null",
    "seasonal": "string or null"
  }},
  "visitorTips": ["string", "string", "string"],
  "faq": [
    {{ "question": "string", "answer": "string" }},
    {{ "question": "string", "answer": "string" }},
    {{ "question": "string", "answer": "string" }}
  ],
  "sentiment": {{
    "positive": "string",
    "negative": "string or null"
  }}
}}

Rules:
- Output JSON only
- Return a single JSON object
- No markdown
- No explanation
- No trailing commas
- All values must be in English
- Each highlights and visitorTips string must be under 25 words
- Each FAQ answer must be under 40 words
- highlights: exactly 3 items
- visitorTips: exactly 3 items
- faq: exactly 3 questions
- Do not repeat the same idea across fields
- FAQ questions must reflect real concerns mentioned in reviews (crowds, safety, access, timing)
- If reviews mention restricted access for foreigners, permits required, or military/border zone limitations, always include this in thingsToKnow.safety
- sentiment.negative: null if reviews are overwhelmingly positive
- Use null if no information appears in the reviews
- If fewer than 5 reviews available, still follow the schema but use null for fields with insufficient data

Reviews:
{reviews}"""

client = anthropic.Anthropic()

TEST_MODE = '--test' in sys.argv
files = sorted(RAW_DIR.glob("*.json"))
if TEST_MODE:
    files = files[:3]
    print("=== TEST MODE: first 3 files only ===\n")

total = len(files)
success = 0
skipped = 0
errors = []

print("Generating insights for {} locations...\n".format(total))

for i, raw_file in enumerate(files, 1):
    slug = raw_file.stem
    out_file = OUT_DIR / "{}.json".format(slug)

    if out_file.exists():
        print("[SKIP] {}".format(slug))
        skipped += 1
        continue

    print("[{}/{}] {}...".format(i, total, slug), end=" ", flush=True)

    raw = json.loads(raw_file.read_text(encoding="utf-8"))
    reviews = raw.get("reviews", [])

    review_texts = "\n\n".join(
        "[{}/5] {}".format(r.get("rating", "?"), r.get("text", "").strip())
        for r in reviews
        if r.get("text", "").strip()
    )

    if not review_texts:
        print("SKIP - no review text")
        skipped += 1
        continue

    try:
        message = client.messages.create(
            model=CLAUDE_MODEL,
            max_tokens=1024,
            messages=[
                {"role": "user", "content": PROMPT_TEMPLATE.format(reviews=review_texts)}
            ],
        )

        raw_text = message.content[0].text.strip()

        # Strip markdown fences if model added them
        if raw_text.startswith("```"):
            parts = raw_text.split("```")
            raw_text = parts[1]
            if raw_text.startswith("json"):
                raw_text = raw_text[4:]
            raw_text = raw_text.strip()

        insights = json.loads(raw_text)

        output = {
            "slug": slug,
            "google_rating": raw.get("google_rating"),
            "google_review_count": raw.get("google_review_count"),
            "insights": insights,
        }

        out_file.write_text(
            json.dumps(output, ensure_ascii=False, indent=2),
            encoding="utf-8",
        )
        print("OK")
        success += 1

    except json.JSONDecodeError as e:
        print("ERROR - bad JSON: {}".format(str(e)[:80]))
        errors.append({"slug": slug, "error": "bad JSON: {}".format(str(e)[:180])})
    except Exception as e:
        print("ERROR - {}".format(str(e)[:100]))
        errors.append({"slug": slug, "error": str(e)[:200]})

    time.sleep(0.3)

print("\n" + "=" * 50)
print("Done! {} generated, {} skipped, {} errors".format(success, skipped, len(errors)))

if errors:
    Path("insights_errors.json").write_text(
        json.dumps(errors, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    print("Errors saved to insights_errors.json")
    for e in errors:
        print("  - {}: {}".format(e["slug"], e["error"][:80]))
