import json
import os
import re
from collections import Counter

# Define paths and config
DATASET_PATH = os.path.join("server", "data", "datasets", "eval-dataset.jsonl")
CATALOG_PATH = os.path.join("server", "data", "productCatalog.js")
OUTPUT_LOG_PATH = os.path.join("server", "data", "datasets", "match-log.json")
TAGGED_LOG_PATH = os.path.join("ResearchEvaluation", "eval-tagged-log.jsonl")
SUMMARY_PATH = os.path.join("ResearchEvaluation", "evaluation-summary.json")
MISSING_TYPES_PATH = os.path.join("ResearchEvaluation", "missing_product_types.json")

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

# Load product catalog - Robust parsing method
with open(CATALOG_PATH, "r", encoding="utf-8") as f:
    catalog_content = f.read()
    
    # Count total products in the file
    total_products = len(re.findall(r'id:\s*\d+', catalog_content))
    
    # Extract the array from the JavaScript file
    catalog_match = re.search(r'const productCatalog = (\[[\s\S]*?\]);', catalog_content)
    
    if catalog_match:
        # Parse the catalog using a direct approach
        catalog = []
        
        # Extract all product objects
        product_blocks = re.findall(r'\{\s*id:\s*\d+,[\s\S]*?filters:\s*\[[\s\S]*?\]\s*\}', catalog_content)
        
        for block in product_blocks:
            # Extract ID
            id_match = re.search(r'id:\s*(\d+)', block)
            if id_match:
                product_id = int(id_match.group(1))
                
                # Skip if already in catalog
                if any(p["id"] == product_id for p in catalog):
                    continue
                
                # Extract name
                name_match = re.search(r'name:\s*"([^"]+)"', block)
                name = name_match.group(1) if name_match else ""
                
                # Extract product_type
                product_type_match = re.search(r'product_type:\s*"([^"]+)"', block)
                product_type = product_type_match.group(1) if product_type_match else ""
                
                # Extract category
                category_match = re.search(r'category:\s*"([^"]+)"', block)
                category = category_match.group(1) if category_match else ""
                
                # Extract subcategory
                subcategory_match = re.search(r'subcategory:\s*"([^"]+)"', block)
                subcategory = subcategory_match.group(1) if subcategory_match else ""
                
                # Extract filters
                filters = []
                filters_match = re.search(r'filters:\s*\[(.*?)\]', block, re.DOTALL)
                if filters_match:
                    filters_str = filters_match.group(1)
                    for filter_match in re.finditer(r'"([^"]+)"', filters_str):
                        filters.append(filter_match.group(1))
                
                # Create product dictionary
                product = {
                    "id": product_id,
                    "name": name,
                    "category": category,
                    "subcategory": subcategory,
                    "product_type": product_type,
                    "filters": filters
                }
                
                catalog.append(product)
        
        # If we still don't have all products, try a more aggressive approach
        if len(catalog) < total_products:
            # Try a different pattern to extract product blocks
            product_blocks = re.findall(r'\{\s*id:\s*\d+,[\s\S]*?\},', catalog_content)
            
            for block in product_blocks:
                # Extract ID
                id_match = re.search(r'id:\s*(\d+)', block)
                if id_match:
                    product_id = int(id_match.group(1))
                    
                    # Skip if already in catalog
                    if any(p["id"] == product_id for p in catalog):
                        continue
                    
                    # Extract name
                    name_match = re.search(r'name:\s*"([^"]+)"', block)
                    name = name_match.group(1) if name_match else ""
                    
                    # Extract product_type
                    product_type_match = re.search(r'product_type:\s*"([^"]+)"', block)
                    product_type = product_type_match.group(1) if product_type_match else ""
                    
                    # Extract category
                    category_match = re.search(r'category:\s*"([^"]+)"', block)
                    category = category_match.group(1) if category_match else ""
                    
                    # Extract subcategory
                    subcategory_match = re.search(r'subcategory:\s*"([^"]+)"', block)
                    subcategory = subcategory_match.group(1) if subcategory_match else ""
                    
                    # Extract filters
                    filters = []
                    filters_match = re.search(r'filters:\s*\[(.*?)\]', block, re.DOTALL)
                    if filters_match:
                        filters_str = filters_match.group(1)
                        for filter_match in re.finditer(r'"([^"]+)"', filters_str):
                            filters.append(filter_match.group(1))
                    
                    # Create product dictionary
                    product = {
                        "id": product_id,
                        "name": name,
                        "category": category,
                        "subcategory": subcategory,
                        "product_type": product_type,
                        "filters": filters
                    }
                    
                    catalog.append(product)
        
        print(f"✅ Successfully loaded {len(catalog)} products from the catalog using robust parsing.")
    else:
        print("❌ Could not extract product catalog from file.")
        catalog = []

print(f"✅ Successfully loaded {len(catalog)} products from the catalog.")

# Helper functions for matching
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

def match_product_type(expected_type, catalog_product):
    """Check if the expected product type matches the catalog product type"""
    catalog_type = catalog_product.get("product_type", "")
    return is_partial_match(expected_type, catalog_type)

def match_filters(expected_filters, catalog_product):
    """Match expected filters with product attributes"""
    if not expected_filters:
        return True, []
    
    # Check both 'attributes' and 'filters' fields in the catalog
    catalog_attributes = catalog_product.get("attributes", [])
    catalog_filters = catalog_product.get("filters", [])
    
    # Combine both attribute sources
    all_attributes = catalog_attributes + catalog_filters
    
    matched_filters = []
    unmatched_filters = []
    
    for filter_term in expected_filters:
        filter_matched = False
        for attribute in all_attributes:
            if is_partial_match(filter_term, attribute):
                matched_filters.append(filter_term)
                filter_matched = True
                break
        
        if not filter_matched:
            # Also check category and subcategory
            if (is_partial_match(filter_term, catalog_product.get("category", "")) or 
                is_partial_match(filter_term, catalog_product.get("subcategory", ""))):
                matched_filters.append(filter_term)
            else:
                unmatched_filters.append(filter_term)
    
    # Consider it a match if at least one filter matches
    return len(matched_filters) > 0, unmatched_filters

# Process each query
results_log = []
tagged_log = []
all_expected_types = set()
matched_expected_types = set()
all_expected_filters = set()
matched_filters = set()

for entry in entries:
    query = entry["query"]
    expected = entry.get("expected_output", {})
    expected_product_type = expected.get("product_type", "").lower()
    expected_filters = [f.lower() for f in expected.get("filters", [])]
    expected_category = expected.get("category", "").lower()
    expected_subcategory = expected.get("subcategory", "").lower()
    
    # Track all expected types and filters for analysis
    all_expected_types.add(expected_product_type)
    for filter_term in expected_filters:
        all_expected_filters.add(filter_term)
    
    # Find matching products
    matched_products = []
    for product in catalog:
        # First check if product type matches
        if match_product_type(expected_product_type, product):
            # Then check if filters match
            filters_match, unmatched_filters = match_filters(expected_filters, product)
            if filters_match:
                matched_products.append({
                    "id": product.get("id"),
                    "name": product.get("name"),
                    "product_type": product.get("product_type"),
                    "matched_filters": [f for f in expected_filters if f not in unmatched_filters],
                    "unmatched_filters": unmatched_filters
                })
                
                # Track matched types and filters
                matched_expected_types.add(expected_product_type)
                for matched_filter in [f for f in expected_filters if f not in unmatched_filters]:
                    matched_filters.add(matched_filter)
    
    # Determine match tags
    tags = []
    if not matched_products:
        if expected_product_type and not any(match_product_type(expected_product_type, p) for p in catalog):
            tags.append("product_type not in catalog")
        elif expected_category and not any(is_partial_match(expected_category, p.get("category", "")) for p in catalog):
            tags.append("wrong category")
        elif expected_subcategory and not any(is_partial_match(expected_subcategory, p.get("subcategory", "")) for p in catalog):
            tags.append("wrong subcategory")
        elif expected_filters and all(not any(is_partial_match(f, attr) for attr in p.get("attributes", [])) for f in expected_filters for p in catalog):
            tags.append("no overlapping filters")
        else:
            tags.append("expected output not found")
    else:
        if any(len(p["unmatched_filters"]) > 0 for p in matched_products):
            tags.append("partial filter match")
        else:
            tags.append("full match")
    
    # Create result entry
    result_entry = {
        "query": query,
        "matched_count": len(matched_products),
        "expected_product_type": expected_product_type,
        "returned_product_types": list(set(p.get("product_type", "") for p in matched_products)),
        "match_score": 1 if matched_products else 0
    }
    results_log.append(result_entry)
    
    # Create tagged entry
    tagged_entry = {
        "query": query,
        "expected_output": expected,
        "matched_products": matched_products,
        "matched_count": len(matched_products),
        "tags": tags
    }
    tagged_log.append(tagged_entry)

# Calculate summary metrics
total_queries = len(entries)
queries_with_matches = sum(1 for r in results_log if r["matched_count"] > 0)
avg_matches_per_query = sum(r["matched_count"] for r in results_log) / total_queries if total_queries > 0 else 0
unmatched_product_types = all_expected_types - matched_expected_types
unmatched_filters = all_expected_filters - matched_filters

# Count occurrences of unmatched product types
unmatched_type_counts = Counter()
for entry in entries:
    expected_type = entry.get("expected_output", {}).get("product_type", "").lower()
    if expected_type in unmatched_product_types:
        unmatched_type_counts[expected_type] += 1

# Get top unmatched product types
top_unmatched_types = [{"type": t, "count": c} for t, c in unmatched_type_counts.most_common(10)]

# Create summary
summary = {
    "total_queries": total_queries,
    "queries_with_matches": queries_with_matches,
    "match_percentage": (queries_with_matches / total_queries) * 100 if total_queries > 0 else 0,
    "avg_matches_per_query": avg_matches_per_query,
    "top_unmatched_product_types": top_unmatched_types,
    "unmatched_filters": list(unmatched_filters)
}

# Save result log
with open(OUTPUT_LOG_PATH, "w", encoding="utf-8") as f:
    json.dump(results_log, f, indent=2, ensure_ascii=False)

# Save tagged log
with open(TAGGED_LOG_PATH, "w", encoding="utf-8") as f:
    for entry in tagged_log:
        f.write(json.dumps(entry, ensure_ascii=False) + "\n")

# Save summary
with open(SUMMARY_PATH, "w", encoding="utf-8") as f:
    json.dump(summary, f, indent=2, ensure_ascii=False)

# Create missing product types report
missing_types_report = {
    "total_expected_product_types": len(all_expected_types),
    "total_catalog_product_types": len(set(p.get("product_type", "") for p in catalog)),
    "missing_product_types": list(unmatched_product_types)
}

with open(MISSING_TYPES_PATH, "w", encoding="utf-8") as f:
    json.dump(missing_types_report, f, indent=2, ensure_ascii=False)

print(f"📊 Evaluation complete. Results saved to:")
print(f"  - Match log: {OUTPUT_LOG_PATH}")
print(f"  - Tagged log: {TAGGED_LOG_PATH}")
print(f"  - Summary: {SUMMARY_PATH}")
print(f"  - Missing product types: {MISSING_TYPES_PATH}")
print(f"\nSummary:")
print(f"  - Total queries: {total_queries}")
print(f"  - Queries with matches: {queries_with_matches} ({summary['match_percentage']:.2f}%)")
print(f"  - Average matches per query: {avg_matches_per_query:.2f}")
print(f"  - Top unmatched product types: {', '.join(t['type'] for t in top_unmatched_types[:5])}")
