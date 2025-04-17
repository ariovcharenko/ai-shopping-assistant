import json
import os

# Path to the audit report
AUDIT_REPORT_PATH = os.path.join("ResearchEvaluation", "tag-audit-report.json")

def extract_insights():
    """Extract and display key insights from the tag audit report"""
    print("📊 Extracting insights from tag audit report...")
    
    with open(AUDIT_REPORT_PATH, "r", encoding="utf-8") as f:
        audit_data = json.load(f)
    
    # Extract summary
    summary = audit_data["summary"]
    print("\n📋 SUMMARY:")
    print(f"  - Total queries: {summary['total_queries']}")
    print(f"  - False negatives: {summary['false_negatives']}")
    
    print("\n🔍 MOST COMMON MISSING FILTERS:")
    for filter_name, count in summary["most_common_missing_filters"]:
        print(f"  - {filter_name}: {count}")
    
    print("\n🏷️ TOP PRODUCT TYPES WITH FILTER MISMATCH:")
    for product_type, count in summary["top_product_types_with_filter_mismatch"]:
        print(f"  - {product_type}: {count}")
    
    # Extract false negative cases
    false_negatives = [entry for entry in audit_data["audit_results"] if entry["is_false_negative"]]
    
    print(f"\n❌ FALSE NEGATIVE CASES ({len(false_negatives)}):")
    for i, case in enumerate(false_negatives, 1):
        print(f"\n  CASE {i}:")
        print(f"  - Query: \"{case['query']}\"")
        print(f"  - Expected product type: \"{case['expected_product_type']}\"")
        print(f"  - Expected filters: {', '.join(case['expected_filters'])}")
        print(f"  - Filter mismatch: {', '.join(case['filter_mismatch'])}")
        print(f"  - Possible causes: {', '.join(case['possible_causes'])}")
        
        print("  - Products with same type:")
        for product in case["products_with_same_type"]:
            print(f"    * {product['name']}")
            print(f"      Filters: {', '.join(product['filters'])}")
    
    # Create a focused report with just the false negatives
    focused_report = {
        "summary": summary,
        "false_negatives": false_negatives
    }
    
    # Save the focused report
    focused_report_path = os.path.join("ResearchEvaluation", "false-negatives-report.json")
    with open(focused_report_path, "w", encoding="utf-8") as f:
        json.dump(focused_report, f, indent=2, ensure_ascii=False)
    
    print(f"\n✅ Focused report saved to {focused_report_path}")

if __name__ == "__main__":
    extract_insights()
