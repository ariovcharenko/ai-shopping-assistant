# Semantic Product Search Evaluation System

A comprehensive system for evaluating and analyzing the performance of natural language product search queries against a product catalog.

## Project Overview

This project provides tools to evaluate how well a semantic search system interprets natural language queries and matches them to products in a catalog. It includes evaluation scripts, visualization tools, and audit capabilities to identify and fix matching issues.

## How Semantic Evaluation Works

The semantic evaluation system works by:

1. **Query Analysis**: Processing natural language queries to extract product types and filters
2. **Catalog Matching**: Using case-insensitive and partial matching to find relevant products
3. **Result Tagging**: Categorizing results with tags to identify match quality and failure reasons
4. **Performance Metrics**: Calculating match rates, average matches per query, and identifying unmatched product types
5. **Audit System**: Verifying tag accuracy and identifying false negatives

## Project Structure

- `client/`: React frontend application
- `server/`: Node.js + Express backend application
- `ResearchEvaluation/`: Evaluation scripts and visualization tools
  - `improved-evaluate-queries.py`: Main evaluation script with semantic matching
  - `extract_missing_product_types.py`: Script to identify missing product types
  - `audit_tag_accuracy.py`: Script to audit tag accuracy and find false negatives
  - `extract_audit_insights.py`: Script to extract insights from audit reports
  - `serve_visualization.py`: Web server for the visualization tool
  - `reports/`: Directory containing evaluation reports and logs
  - `visualization/`: Web-based visualization interface

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Python 3.6+
- OpenAI API key (set in `server/.env`)

## Running the Application

### Windows Setup

1. Make sure you have Node.js and npm installed
2. Clone this repository
3. Run the application using the provided batch file:
   ```
   start-app.bat
   ```
   This will:
   - Start the backend server on port 5001
   - Start the frontend client on port 5173 (or 3000 for the older client)
   - Open the application in your default browser

### macOS Setup

1. Install Node.js using one of these methods:
   - Via Homebrew (recommended):
     ```
     /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
     brew install node
     ```
   - Or download from the [Node.js website](https://nodejs.org/en/download/)

2. Clone this repository

3. Make the startup script executable:
   ```
   chmod +x start-app.sh
   ```

4. Run the application:
   ```
   ./start-app.sh
   ```
   This will:
   - Start the backend server on port 5001
   - Start the frontend client on port 5173
   - Open the application in Safari

### Troubleshooting macOS Setup

If you encounter permission issues with the node_modules executables, run:
```
chmod -R +x server/node_modules/.bin/* frontend/node_modules/.bin/*
```

## Running the Evaluation

```bash
# Run the improved evaluation script
python ResearchEvaluation/improved-evaluate-queries.py
```

This will:
- Load the evaluation dataset and product catalog
- Perform matching with case-insensitive and partial matching
- Generate detailed logs with tags for each query
- Calculate and save summary metrics
- Identify missing product types

### Viewing Results with the Visualization Tool

```bash
# Start the visualization server
python ResearchEvaluation/serve_visualization.py
```

This will:
- Start a local HTTP server on port 8000
- Automatically open your browser to the visualization page
- Display summary metrics, query results, and filter statistics

## Current Statistics

- **Match Rate**: 99% of queries successfully match products in the catalog
- **Average Matches**: 5.42 products matched per query
- **Unmatched Types**: Only "aa batteries" remains unmatched in the catalog
- **False Negatives**: 0 false negatives found in the latest audit

## Audit Reports

The tag audit system verifies the accuracy of product type and filter matching. The latest audit report can be found in `ResearchEvaluation/reports/tag-audit-report.json`.

Key findings:
- No false negatives detected in the current system
- All product types that exist in the catalog are being properly matched
- The improved matching algorithm successfully handles partial matches and filter variations

## Troubleshooting

### "An error occurred while processing your search"

This error can occur for several reasons:

1. **Server not running**: Make sure the server is running on port 5001
2. **OpenAI API key issues**: Check if your API key is valid and has sufficient quota
3. **Network issues**: Ensure you have a stable internet connection
4. **Port conflicts**: If port 5001 is already in use, change it in `server/.env` and update the proxy in `client/package.json`

## License

ISC
