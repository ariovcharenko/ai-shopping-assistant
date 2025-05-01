# Search Analysis Evaluation Framework

This directory contains the evaluation framework used to assess the search analysis functionality of our product search system. Here you can input test queries with the desired outputs and the application will calculate matches and accuracy metrics.

## How the Evaluation Framework Works

1. **Test Query Input**: Users can input test queries with expected results in the `test-queries.js` file
2. **Evaluation Processing**: The `evaluator.js` script processes these test queries against the search engine
3. **Results Generation**: The framework produces detailed metrics in the `evaluation-results-public.json` file

## Using the Evaluation Framework

### Step 1: Define Test Queries

In `test-queries.js`, define your test queries along with expected outputs:

```javascript
module.exports = [
  {
    query: "Looking for something to cancel out noise in my workplace",
    expectedCategory: "electronics",
    expectedSubcategory: "audio", 
    expectedProductType: "headphones"
  },
  // Add more test queries here
];
```

### Step 2: Run the Evaluator

Run the evaluator script to process your test queries:

```
node evaluator.js
```

### Step 3: Review Results

The results will be available in `evaluation-results-public.json`, containing:
- Overall accuracy metrics
- Category, subcategory, and product type matching rates
- Semantic understanding scores
- Representative query examples

## Evaluation Metrics

Our evaluation framework measures:

| Metric | Description |
|--------|-------------|
| Overall Accuracy | Combined score across all dimensions |
| Category Accuracy | How often the correct product category was identified |
| Subcategory Accuracy | How often the correct product subcategory was identified |
| Product Type Accuracy | How often the correct product type was identified |
| Semantic Match Accuracy | How well the system understood query intent |
| Query Understanding Score | Qualitative rating of system comprehension |

## Framework Structure

- `evaluator.js` - The main evaluation script that processes test queries
- `test-queries.js` - Contains test queries with expected results
- `evaluation-results-public.json` - Contains the evaluation results and metrics

## Methodology 

The evaluation framework uses a weighted scoring system that prioritizes different aspects of search relevance based on user experience research. Category matching is weighted more heavily than subcategory matching, as users typically browse by category first.

The semantic matching component analyzes the system's ability to understand intent beyond keywords, addressing queries like "something to brew coffee in" versus direct queries like "coffee maker".