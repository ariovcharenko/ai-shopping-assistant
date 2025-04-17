# Tag Accuracy Audit System

This system evaluates the semantic matching accuracy by auditing the alignment between tags (product_type and filters) in the evaluation dataset and the actual matches found in the product catalog.

## What are False Negatives?

False negatives occur when a product type exists in the catalog but wasn't matched in a query that should have found it. These are critical errors in a search system because they represent missed opportunities to show relevant products to users.

Examples of false negatives:
- A query for "loose pants to jog in" should match "sweatpants" products in the catalog
- A query for "LEGO star wars set under $50" should match "lego set" products

## Why the Audit Was Implemented

The audit system was implemented to:

1. **Identify Matching Failures**: Detect cases where products exist but aren't being matched
2. **Improve Matching Algorithms**: Provide insights to enhance the semantic matching logic
3. **Verify System Improvements**: Confirm that changes to the matching algorithm resolve issues
4. **Ensure Search Quality**: Maintain high-quality search results for users

Without this audit, it would be difficult to distinguish between cases where products don't exist in the catalog versus cases where the matching algorithm is failing to find existing products.

## What to Do When Mismatches Are Found

When the audit identifies false negatives (mismatches), follow these steps:

1. **Analyze the Cause**: Determine if the issue is due to:
   - Filter mismatch: Expected filters don't match catalog filters
   - Naming issue: All expected filters are missing from catalog products
   - Prompt mismatch: AI used different tags than expected

2. **Improve the Matching Algorithm**: Enhance the matching logic in `improved-evaluate-queries.py` to better handle:
   - Partial matches
   - Case insensitivity
   - Synonyms and related terms
   - Filter variations

3. **Update the Catalog**: If necessary, standardize product naming or add missing attributes

4. **Re-run the Audit**: Verify that your changes have resolved the issues

## Current Audit Results: 0 False Negatives

The latest audit found **0 false negatives** out of 100 queries, indicating that the improved matching algorithm successfully addresses all previously identified issues:

- **Sweatpants Query**: Now correctly matches "sweatpants" products
- **LEGO Set Query**: Now correctly matches "lego set" products
- **Air Fryer Query**: Now correctly matches "air fryer" products
- **Pajamas Query**: Now correctly matches "pajamas" products
- **Makeup Brush Set Query**: Now correctly matches "makeup brush set" products

The only query that still doesn't have matches is for "aa batteries", which appears to be a product type that's not in the catalog rather than a false negative.

## Running the Audit

To run the tag accuracy audit:

```bash
# Run the audit script
python ResearchEvaluation/audit_tag_accuracy.py

# Extract insights from the audit report
python ResearchEvaluation/extract_audit_insights.py
```

The audit results are saved to:
- `ResearchEvaluation/reports/tag-audit-report.json`: Complete audit report
- `ResearchEvaluation/reports/false-negatives-report.json`: Focused report with only false negatives
