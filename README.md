# The Power of Evals: Teaching AI to Truly Understand You

This is exactly the kind of everyday ambiguity that inspired me to build a semantic search engine — one that doesn't just scan for keywords but truly understands natural human language in all its richness and variety. The challenge wasn't for users to learn special search terminology, but for the Search Analysis App to adapt to how people naturally express their needs. Through rigorous evals and focused improvements, I built an app that now returns the right product over 97% of the time by adapting to natural language.

## Why I Built This

The aim was to interpret human language with all its nuance—not just match keywords. I wanted to build a search engine that adapts to the way people naturally communicate, understanding their intent, context, and phrasing without requiring them to learn technical terms.

I set out to create a semantic product search engine that could:
- Understand natural language as it's used in everyday conversation
- Adapt to different ways people express the same need
- Connect everyday expressions to specific product attributes
- Return relevant results based on real human communication, not forced keyword optimization

## Query Examples with Results

**Prompt 1**: "I'm looking for a gift for a 5 year old"

**Search Parameters:**
- Category: toys
- Subcategory: toys

**Top Matching Products:**
- *Melissa & Doug Wooden Building Blocks – 100 Piece Set*  
  Type: building blocks  
  Features: wooden, 100 pieces

- *LEGO Classic Bricks and Animals – 1500 Piece Set*  
  Type: LEGO set  
  Features: 1500 pieces, classic, animals

---

**Prompt 2**: "I need something to carry my essentials for everyday use"

**Search Parameters:**
- Category: accessories
- Subcategory: bags
- Filters: everyday use

**Top Matching Products:**
- *Women's Crossbody Bag with Zipper Pockets*  
  Type: crossbody bag  
  Features: women's, zipper pockets, adjustable strap

- *Women's Tote Bag Canvas with Zipper*  
  Type: tote bag  
  Features: women's, canvas, zipper closure

## How I Built It

1. **Product Catalog** – 1,000 entries with structured `product_type`, `category`, `subcategory`, and meaningful filters.
2. **Eval Database** – 100 user-like queries with expected JSON outputs for evaluation at each development stage.
3. **OpenAI API Service** – Accepts user queries and returns structured outputs using refined prompts and semantic logic.

## The Critical Role of Evals in AI Debugging

Building systems that rely on language models means working with unpredictable outputs—and improving them requires more than intuition. Without a structured way to measure progress, debugging becomes guesswork.

That's where evals came in. They became the foundation of my development process, allowing me to transform vague, qualitative improvements into clear, trackable metrics. Evals turned every iteration into an opportunity for measurable progress.

## Key OpenAI API Improvements

- **Enhanced System Prompt with Contextual Parameters**
  - Added environmental context (indoor/outdoor)
  - Included gender, location, formality, and occasion-related cues
  - Helped shape more accurate intent interpretation through richer prompt context

- **Semantic Incompatibility Filtering**
  - Prevents mismatches between query intent and product type
  - Ensures contextually irrelevant results are excluded

- **Age Relevance Detection**
  - Identifies cues in the query that indicate age context (e.g., "for a toddler" or "for teens")
  - Helps return results that are age-appropriate without relying on rigid rules

- **Priority Attribute Extraction**
  - Identifies and emphasizes key features mentioned in the user's query
  - Improves filtering and matching precision

- **Confidence Scoring**
  - Evaluates how well the system understood each query
  - Supports better debugging and model transparency

- **Adaptive Parameter Tuning**
  - Adjusts temperature and sampling parameters to reduce hallucinations and improve consistency

- **Semantic Refinement & Output Enhancement**
  - Interprets varied phrasing and vague prompts more accurately
  - Applies dynamic, eval-guided tweaks to improve clarity and match quality

## Eval-Driven Results

| Metric                     | Initial Model | After Improvements | Final System |
|----------------------------|:-------------:|:------------------:|:------------:|
| Match Rate                 |     78%       |        94%         |     97%      |
| Avg Matches / Query        |     4.2       |        5.6         |     6.3      |
| Semantic Match Accuracy    |     61%       |        83%         |     91%      |
| Query Understanding Score  |   Medium      |       High         |  Very High   |

## Research Evaluation Framework

To validate the system's performance, we developed a comprehensive search analysis evaluation framework. This framework assesses search quality across multiple dimensions:

- **Overall accuracy rate of 95.9%** with category matching precision of 97%
- **Semantic understanding score of 95.3%** demonstrating strong query intent comprehension
- **100% query completion rate** with 83% of queries returning relevant product matches

For detailed metrics and methodology, see the [Research Evaluation Documentation](./server/ResearchEvaluation/README.md).

## What This Project Demonstrates

This project shows that accurate search results don't come from better models alone — they come from better evals driving better instructions and debugging. The key insight was understanding that technology should adapt to humans, not the other way around.

Through prompt refinement, query inspection, and eval-driven iteration, I built a system that meets users where they are linguistically — understanding natural expressions, contextual references, and everyday language to return products that match what they're seeking, without requiring them to learn specialized search terminology.

For anyone building user-facing AI, this approach emphasizes what matters most: listening to users, creating robust evals, and using those evals to translate natural language into something a machine can actually work with.

## Technology Stack

- **Frontend**: React with modern hooks and context API
- **Backend**: Node.js/Express
- **AI Integration**: OpenAI API for natural language understanding
- **Data Storage**: JSON-based product catalog with 1,000+ diverse products
- **Evaluation Framework**: Custom multi-dimensional scoring system for search quality assessment

## Project Structure

- `frontend/`: React application with search interface and results visualization
- `server/`: Node.js backend with OpenAI integration and search logic
- `server/data/`: JSON data files including product catalog and performance metrics
- `server/ResearchEvaluation/`: Framework for evaluating search accuracy and query understanding

## Related Documentation

For setup instructions and component-specific information, please see:
- [Server Setup Instructions](./server/README.md)
- [Frontend Setup Instructions](./frontend/README.md)
- [Running the Complete Application](./SETUP.md)
- [Evaluation Framework](./server/ResearchEvaluation/README.md)

## License

MIT License
