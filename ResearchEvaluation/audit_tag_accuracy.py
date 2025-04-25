import json
import os
import re
from collections import Counter

# Define paths
DATASET_PATH = os.path.join("server", "data", "datasets", "eval-dataset.jsonl")
CATALOG_PATH = os.path.join("server", "data", "productCatalog.js")
MATCH_LOG_PATH = os.path.join("server", "data", "datasets", "match-log.json")
OUTPUT_PATH = os.path.join("ResearchEvaluation", "tag-audit-report.json")

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

def load_catalog():
    """Load the product catalog from the JavaScript file"""
    with open(CATALOG_PATH, "r", encoding="utf-8") as f:
        catalog_content = f.read()
    
    # Count total products in the file
    total_products = len(re.findall(r'id:\s*\d+', catalog_content))
    
    # Extract the array from the JavaScript file
    catalog_match = re.search(r'const productCatalog = (\[[\s\S]*?\]);', catalog_content)
    
    if not catalog_match:
        print("❌ Could not extract product catalog from file.")
        return []
    
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
    
    print(f"✅ Successfully loaded {len(catalog)} products from the catalog.")
    return catalog

def load_eval_dataset():
    """Load the evaluation dataset"""
    entries = []
    with open(DATASET_PATH, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            try:
                entry = json.loads(line)
                entries.append(entry)
            except json.JSONDecodeError as e:
                print(f"⚠️ JSONDecodeError: {e}")
    
    print(f"✅ Successfully loaded {len(entries)} entries from the evaluation dataset.")
    return entries

def load_match_log():
    """Load the match log"""
    with open(MATCH_LOG_PATH, "r", encoding="utf-8") as f:
        match_log = json.load(f)
    
    print(f"✅ Successfully loaded match log with {len(match_log)} entries.")
    return match_log

def find_products_with_same_type(product_type, catalog):
    """Find all products in the catalog with the same product type"""
    return [p for p in catalog if is_partial_match(product_type, p["product_type"])]

def analyze_filter_mismatch(expected_filters, products_with_same_type):
    """Analyze filter mismatches between expected filters and products with the same type"""
    all_catalog_filters = set()
    for product in products_with_same_type:
        all_catalog_filters.update(product["filters"])
    
    # Find expected filters that don't match any catalog filters
    filter_mismatch = []
    for expected_filter in expected_filters:
        if not any(is_partial_match(expected_filter, catalog_filter) for catalog_filter in all_catalog_filters):
            filter_mismatch.append(expected_filter)
    
    return filter_mismatch

def determine_possible_causes(matched_in_catalog, filter_mismatch, expected_product_type, products_with_same_type, expected_filters):
    """Determine possible causes for false negatives"""
    causes = []
    
    if not matched_in_catalog:
        causes.append("catalog coverage issue")
    elif filter_mismatch:
        causes.append("filter mismatch")
        
        # Check if the filters are completely different (naming issue)
        if len(filter_mismatch) == len(expected_filters):
            causes.append("naming issue")
    
    # Check if there might be a prompt misalignment
    # This is a heuristic: if the product type exists but with very different filters
    if matched_in_catalog and products_with_same_type:
        all_catalog_filters = set()
        for product in products_with_same_type:
            all_catalog_filters.update(product["filters"])
        
        # If there's minimal overlap between expected filters and catalog filters
        expected_filter_set = set(expected_filters)
        overlap = any(any(is_partial_match(ef, cf) for cf in all_catalog_filters) for ef in expected_filter_set)
        
        if not overlap and expected_filter_set:
            causes.append("prompt mismatch")
    
    return causes

def audit_tag_accuracy():
    """Audit tag accuracy in the semantic search system"""
    catalog = load_catalog()
    eval_dataset = load_eval_dataset()
    match_log = load_match_log()
    
    # Create a mapping from query to match results
    match_results = {entry["query"]: entry for entry in match_log}
    
    audit_results = []
    false_negatives = 0
    missing_filters_count = Counter()
    product_types_with_filter_mismatch = Counter()
    
    for entry in eval_dataset:
        query = entry["query"]
        expected_output = entry["expected_output"]
        expected_product_type = expected_output["product_type"].lower()
        expected_filters = [f.lower() for f in expected_output.get("filters", [])]
        
        # Get match results for this query
        match_result = match_results.get(query, {})
        matched_count = match_result.get("matched_count", 0)
        
        # Check if the product type exists in the catalog
        products_with_same_type = find_products_with_same_type(expected_product_type, catalog)
        matched_in_catalog = len(products_with_same_type) > 0
        
        # Analyze filter mismatches
        filter_mismatch = analyze_filter_mismatch(expected_filters, products_with_same_type)
        
        # Determine possible causes for false negatives
        is_false_negative = matched_in_catalog and matched_count == 0
        possible_causes = []
        
        if is_false_negative:
            false_negatives += 1
            possible_causes = determine_possible_causes(
                matched_in_catalog, 
                filter_mismatch, 
                expected_product_type, 
                products_with_same_type,
                expected_filters
            )
            
            # Track missing filters and product types with filter mismatches
            for missing_filter in filter_mismatch:
                missing_filters_count[missing_filter] += 1
            
            if filter_mismatch:
                product_types_with_filter_mismatch[expected_product_type] += 1
        
        # Create audit entry
        audit_entry = {
            "query": query,
            "expected_product_type": expected_product_type,
            "matched_in_catalog": matched_in_catalog,
            "products_with_same_type": [
                {"name": p["name"], "filters": p["filters"]} 
                for p in products_with_same_type
            ],
            "expected_filters": expected_filters,
            "filter_mismatch": filter_mismatch,
            "possible_causes": possible_causes,
            "is_false_negative": is_false_negative
        }
        
        audit_results.append(audit_entry)
    
    # Create summary metrics
    summary = {
        "total_queries": len(eval_dataset),
        "false_negatives": false_negatives,
        "most_common_missing_filters": missing_filters_count.most_common(10),
        "top_product_types_with_filter_mismatch": product_types_with_filter_mismatch.most_common(10)
    }
    
    # Combine audit results and summary
    output = {
        "audit_results": audit_results,
        "summary": summary
    }
    
    # Save the audit report
    with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
        json.dump(output, f, indent=2, ensure_ascii=False)
    
    print(f"✅ Audit complete. Results saved to {OUTPUT_PATH}")
    print(f"\nSummary:")
    print(f"  - Total queries: {summary['total_queries']}")
    print(f"  - False negatives: {summary['false_negatives']}")
    print("  - Most common missing filters:")
    for filter_name, count in summary["most_common_missing_filters"][:5]:
        print(f"    - {filter_name}: {count}")
    print("  - Top product types with filter mismatch:")
    for product_type, count in summary["top_product_types_with_filter_mismatch"][:5]:
        print(f"    - {product_type}: {count}")

if __name__ == "__main__":
    audit_tag_accuracy()
