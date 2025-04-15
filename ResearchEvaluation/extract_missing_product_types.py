import json
import os
import re

# Define paths
DATASET_PATH = os.path.join("server", "data", "datasets", "eval-dataset.jsonl")
CATALOG_PATH = os.path.join("server", "data", "productCatalog.js")
OUTPUT_PATH = os.path.join("ResearchEvaluation", "missing_product_types.json")

def normalize_text(text):
    """Convert text to lowercase and remove special characters"""
    return re.sub(r'[^a-z0-9\s]', '', text.lower())

def is_partial_match(query_term, catalog_term):
    """Check if query_term is a partial match for catalog_term"""
    query_term = normalize_text(query_term)
    catalog_term = normalize_text(catalog_term)
    
    # Check for exact match first
    if query_term == catalog_term:
        return True
    
    # Check if query term is contained in catalog term
    if query_term in catalog_term:
        return True
    
    # Check if catalog term is contained in query term
    if catalog_term in query_term:
        return True
    
    # Check for word-level partial matches
    query_words = query_term.split()
    catalog_words = catalog_term.split()
    
    for q_word in query_words:
        for c_word in catalog_words:
            # If a word is very short, require exact match
            if len(q_word) <= 3 and q_word == c_word:
                return True
            # For longer words, allow partial match if significant portion matches
            elif len(q_word) > 3 and (q_word in c_word or c_word in q_word):
                return True
    
    return False

# Load evaluation dataset
eval_product_types = set()
try:
    with open(DATASET_PATH, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            try:
                entry = json.loads(line)
                product_type = entry.get("expected_output", {}).get("product_type", "").lower()
                if product_type:
                    eval_product_types.add(product_type)
            except json.JSONDecodeError:
                continue
    
    print(f"✅ Extracted {len(eval_product_types)} unique product types from evaluation dataset.")
except Exception as e:
    print(f"❌ Error loading evaluation dataset: {e}")
    eval_product_types = set()

# Load product catalog
catalog_product_types = set()
try:
    with open(CATALOG_PATH, "r", encoding="utf-8") as f:
        catalog_content = f.read()
        # Extract the array from the JavaScript file
        catalog_match = re.search(r'const productCatalog = (\[[\s\S]*?\]);', catalog_content)
        if catalog_match:
            catalog_json = catalog_match.group(1)
            try:
                catalog = json.loads(catalog_json)
            except json.JSONDecodeError:
                print("⚠️ Error parsing product catalog JSON. Using fallback method.")
                # Fallback: Try to evaluate as Python literal
                import ast
                try:
                    catalog = ast.literal_eval(catalog_json)
                except:
                    print("❌ Failed to parse product catalog.")
                    catalog = []
        else:
            print("❌ Could not extract product catalog from file.")
            catalog = []
    
    for product in catalog:
        product_type = product.get("product_type", "").lower()
        if product_type:
            catalog_product_types.add(product_type)
    
    print(f"✅ Extracted {len(catalog_product_types)} unique product types from catalog.")
except Exception as e:
    print(f"❌ Error loading product catalog: {e}")
    catalog_product_types = set()

# Find missing product types (considering partial matches)
missing_product_types = []
for eval_type in eval_product_types:
    # Check if this eval_type has any partial match in the catalog
    if not any(is_partial_match(eval_type, catalog_type) for catalog_type in catalog_product_types):
        missing_product_types.append(eval_type)

# Create report
report = {
    "total_eval_product_types": len(eval_product_types),
    "total_catalog_product_types": len(catalog_product_types),
    "missing_product_types": sorted(missing_product_types),
    "eval_product_types": sorted(list(eval_product_types)),
    "catalog_product_types": sorted(list(catalog_product_types))
}

# Save report
with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
    json.dump(report, f, indent=2, ensure_ascii=False)

print(f"📊 Analysis complete. Found {len(missing_product_types)} missing product types.")
print(f"📄 Report saved to: {OUTPUT_PATH}")
