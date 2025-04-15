import json
import os
import requests

# Define paths and config
DATASET_PATH = os.path.join("..", "server", "data", "datasets", "eval-dataset.jsonl")
OUTPUT_LOG_PATH = os.path.join("..", "server", "data", "datasets", "match-log.json")
API_URL = "http://localhost:5001/api/search"

# Load evaluation prompts
entries = []
with open(DATASET_PATH, "r", encoding="utf-8") as f:
    for line_num, line in enumerate(f, start=1):
        line = line.strip()
        if not line:
            continue
        try:
            entry = json.loads(line)
            entries.append(entry)
        except json.JSONDecodeError as e:
            print(f"⚠️ JSONDecodeError on line {line_num}: {e}")

print(f"✅ Successfully loaded {len(entries)} valid entries from the evaluation dataset.")

results_log = []

# Query the local app API for each prompt
for entry in entries:
    query = entry["query"]
    expected = entry.get("expected_output", {})
    expected_product_type = expected.get("product_type", "")

    try:
        response = requests.post(API_URL, json={"query": query})
        response.raise_for_status()
        data = response.json()
        matched_products = data.get("matchedProducts", [])

        # Attempt to extract the product type of returned items (if consistent)
        returned_product_types = set(item.get("product_type", "") for item in matched_products)

        result_entry = {
            "query": query,
            "matched_count": len(matched_products),
            "expected_product_type": expected_product_type,
            "returned_product_types": list(returned_product_types),
            "match_score": 1 if expected_product_type in returned_product_types else 0
        }
        results_log.append(result_entry)

    except requests.RequestException as e:
        print(f"❌ API error for query '{query}': {e}")

# Save result log
with open(OUTPUT_LOG_PATH, "w", encoding="utf-8") as f:
    json.dump(results_log, f, indent=2, ensure_ascii=False)

print(f"📊 Evaluation complete. Logged results to: {OUTPUT_LOG_PATH}")
