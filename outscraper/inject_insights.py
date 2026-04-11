# -*- coding: utf-8 -*-
import io
import json
import sys
from pathlib import Path

if sys.platform == 'win32':
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

INSIGHTS_DIR = Path("ai_insights")
LOCATIONS_DIR = Path("../data/locations")


def ts_escape(s):
    """Escape a string value for use inside TypeScript double quotes."""
    return s.replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n").replace("\r", "")


def ts_str(val):
    """Render a Python value as a TypeScript literal (string, null, number)."""
    if val is None:
        return "null"
    if isinstance(val, bool):
        return "true" if val else "false"
    if isinstance(val, (int, float)):
        return str(val)
    return '"{}"'.format(ts_escape(str(val)))


def format_insights_ts(insights):
    """
    Render the insights dict as a TypeScript field block, indented to fit inside
    a Location object (base indent = 2 spaces).

    Returns a string like:
      insights: {
        highlights: [
          "...",
        ],
        ...
      },
    """
    ttk = insights.get("thingsToKnow", {})
    faq = insights.get("faq", [])
    sentiment = insights.get("sentiment", {})

    lines = ["  insights: {"]

    # highlights
    lines.append("    highlights: [")
    for h in insights.get("highlights", []):
        lines.append("      {},".format(ts_str(h)))
    lines.append("    ],")

    # thingsToKnow
    lines.append("    thingsToKnow: {")
    for key in ("crowds", "difficulty", "safety", "accessibility", "seasonal"):
        lines.append("      {}: {},".format(key, ts_str(ttk.get(key))))
    lines.append("    },")

    # visitorTips
    lines.append("    visitorTips: [")
    for t in insights.get("visitorTips", []):
        lines.append("      {},".format(ts_str(t)))
    lines.append("    ],")

    # faq
    lines.append("    faq: [")
    for item in faq:
        q = ts_escape(item.get("question", ""))
        a = ts_escape(item.get("answer", ""))
        lines.append('      {{ question: "{}", answer: "{}" }},'.format(q, a))
    lines.append("    ],")

    # sentiment
    lines.append("    sentiment: {")
    lines.append("      positive: {},".format(ts_str(sentiment.get("positive"))))
    lines.append("      negative: {},".format(ts_str(sentiment.get("negative"))))
    lines.append("    },")

    lines.append("  },")

    return "\n".join(lines)


TEST_MODE = "--test" in sys.argv
files = sorted(INSIGHTS_DIR.glob("*.json"))
if TEST_MODE:
    files = files[:3]
    print("=== TEST MODE: first 3 files only ===\n")

total = len(files)
success = 0
skipped = 0
errors = []

print("Injecting insights into {} location files...\n".format(total))

for insight_file in files:
    slug = insight_file.stem
    ts_file = LOCATIONS_DIR / "{}.ts".format(slug)

    if not ts_file.exists():
        print("[MISSING] {} — .ts file not found".format(slug))
        errors.append({"slug": slug, "error": "ts file not found"})
        continue

    content = ts_file.read_text(encoding="utf-8")

    if "insights:" in content:
        print("[SKIP] {} — insights already present".format(slug))
        skipped += 1
        continue

    data = json.loads(insight_file.read_text(encoding="utf-8"))
    insights = data.get("insights")

    if not insights:
        print("[SKIP] {} — no insights key in JSON".format(slug))
        skipped += 1
        continue

    insights_block = format_insights_ts(insights)

    # Insert before the final \n} that closes the Location object
    idx = content.rfind("\n}")
    if idx == -1:
        print("[ERROR] {} — could not find closing brace".format(slug))
        errors.append({"slug": slug, "error": "no closing brace found"})
        continue

    new_content = content[:idx] + "\n" + insights_block + content[idx:]
    ts_file.write_text(new_content, encoding="utf-8")
    print("[OK] {}".format(slug))
    success += 1

print("\n" + "=" * 50)
print("Done! {} injected, {} skipped, {} errors".format(success, skipped, len(errors)))

if errors:
    for e in errors:
        print("  - {}: {}".format(e["slug"], e["error"]))
