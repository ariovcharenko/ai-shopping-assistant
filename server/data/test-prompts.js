const axios = require('axios');
const fs = require('fs');

// List of prompts to test
const prompts = [
  "I need sturdy pants for casual Fridays, preferably blue denim",
  "What's a good portable setup for high-end games?",
  "I'm furnishing my living room with a comfy L-shaped couch",
  "Need something light for my face that keeps it soft all day",
  "Comfy shoes that won't kill my feet during jogs",
  "Best tool for smoothies in the morning rush",
  "Any suspenseful story I can't put down?",
  "Need shelter for a weekend in the woods",
  "Something to keep my phone in sight while driving",
  "Smart toy for toddlers that's fun and teaches",
  "Looking for noise-canceling headphones for open offices",
  "What's a stylish way to carry my laptop and charger?",
  "A jacket I can layer during cold commutes",
  "Want boots I can hike with and wear downtown",
  "Best minimalist desk for my small studio",
  "Is there a chair that supports good posture all day?",
  "Workout set that's cute and squat-proof",
  "Sunglasses that won't slide when I sweat",
  "Looking for a good foundation that feels like skin",
  "Need wireless earbuds for running in the rain",
  "Give me jeans that go with everything and don't stretch out",
  "Want a blender that doesn't sound like a rocket",
  "Need books for long flights that aren't boring",
  "A durable bag for gym, groceries, and weekend getaways",
  "Shampoo that works for oily scalp but smells nice",
  "Lightweight camera for travel content",
  "What gaming monitor has low latency and thin bezels?",
  "I need an outfit for an art gallery opening",
  "Smart lighting for cozy winter evenings",
  "What's a watch that looks classic but syncs with my phone?",
  "High-waisted leggings that don't roll down",
  "Sleek heels that won't kill my feet at weddings",
  "A backpack that works for work and hiking",
  "Need a lamp that's soft and doesn't blind you at night",
  "Give me noise-proof curtains for my noisy neighbors",
  "Something to help with muscle soreness after lifting",
  "Minimalist table that fits two laptops side by side",
  "Bookshelf that doubles as room divider",
  "A soft throw blanket that looks chic",
  "Reusable water bottle that fits cup holders",
  "Looking for a compact air fryer for two",
  "Desk setup for work-from-home that looks good on Zoom",
  "Face cream for dry skin during winter",
  "What's a good alternative to jeans for spring?",
  "I want pants I can wear to brunch and bike in",
  "Something elegant to hang above the bed",
  "A speaker that works for house parties and podcasts",
  "Tablet that handles note-taking and drawing",
  "Shoes that are good for standing 8+ hours",
  "Looking for a carry-on that fits international limits",
  "Stylish raincoat that doesn't look like a trash bag",
  "Need gifts under $30 for creative people",
  "Neutral shoes for walking around a city all day",
  "A vanity mirror with natural light",
  "I want something that smells like fresh laundry",
  "A clock that tells time and sets the vibe",
  "Backpack with hidden laptop compartment",
  "A rug that hides dog fur and crumbs",
  "Looking for art supplies for realism painting",
  "I need a fancy dress that doesn't feel itchy",
  "Need sandals for flat feet that are cute",
  "Makeup set for beginners that works for cool undertones",
  "A side table with storage and power outlet",
  "Comfy pants that work for Zoom and errands",
  "Affordable espresso machine for small kitchen",
  "Want curtains that block light but feel airy",
  "A fun game for adults on game night",
  "Looking for a bar cart that doesn't wobble",
  "Socks that don't fall off in sneakers",
  "Outfit that says \"I know what I'm doing\" in interviews",
  "Tote that fits laptop and snacks",
  "Decor that's spooky but still tasteful",
  "Sleek keyboard that feels like MacBook",
  "Stylish glasses that aren't too loud",
  "Pillow that keeps cool and supports neck",
  "Dress that can go from office to evening",
  "Something to clean hardwood floors and not leave residue",
  "A hoodie that feels like a hug",
  "Desk chair that doesn't scream \"gamer\"",
  "Laptop stand that helps posture but looks good",
  "Scarf that adds drama without being itchy",
  "Pants that work for flights and client meetings",
  "Headphones for mixing and commuting",
  "A device to track fitness and look good with outfits",
  "Looking for jeans without zippers",
  "Shelf that can hold plants and books",
  "Robe that makes me feel like royalty",
  "Watch that goes with joggers and a suit",
  "Coat that's warm but doesn't look puffy",
  "Stylish fan that actually moves air",
  "Shoes that look smart with slacks and joggers",
  "Bedding that's soft and actually fits the mattress",
  "A dress that doesn't need ironing",
  "A candle that smells like a beach vacation",
  "Jewelry box that isn't too girly",
  "Desk lamp that mimics daylight",
  "Swimsuit that feels secure when diving",
  "Stylish organizer for desk clutter",
  "Earrings that don't irritate sensitive ears"
];

// Function to test a single prompt
async function testPrompt(prompt) {
  try {
    console.log(`Testing prompt: "${prompt}"`);
    const response = await axios.post('http://localhost:5001/api/search', { query: prompt });
    
    const result = {
      prompt,
      aiOutput: response.data.searchParams,
      productsCount: response.data.products.length,
      products: response.data.products.map(p => ({
        name: p.name,
        category: p.category,
        subcategory: p.subcategory,
        product_type: p.product_type,
        attributes: p.attributes,
        price: p.price
      }))
    };
    
    return result;
  } catch (error) {
    console.error(`Error testing prompt "${prompt}":`, error.message);
    return {
      prompt,
      error: error.message,
      aiOutput: null,
      productsCount: 0,
      products: []
    };
  }
}

// Function to test all prompts
async function testAllPrompts() {
  const results = [];
  
  for (const prompt of prompts) {
    const result = await testPrompt(prompt);
    results.push(result);
    
    // Add a small delay between requests to avoid overwhelming the server
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  return results;
}

// Run the tests and save the results
async function runTests() {
  console.log('Starting prompt tests...');
  
  const results = await testAllPrompts();
  
  // Save results to a file
  fs.writeFileSync('prompt-test-results.json', JSON.stringify(results, null, 2));
  
  // Generate a summary
  const summary = {
    totalPrompts: results.length,
    successfulPrompts: results.filter(r => !r.error).length,
    failedPrompts: results.filter(r => r.error).length,
    promptsWithProducts: results.filter(r => r.productsCount > 0).length,
    promptsWithoutProducts: results.filter(r => r.productsCount === 0 && !r.error).length,
    averageProductsPerPrompt: results.reduce((sum, r) => sum + r.productsCount, 0) / results.length,
    categoryBreakdown: {}
  };
  
  // Calculate category breakdown
  results.forEach(result => {
    if (result.aiOutput && result.aiOutput.category) {
      const category = result.aiOutput.category;
      if (!summary.categoryBreakdown[category]) {
        summary.categoryBreakdown[category] = 0;
      }
      summary.categoryBreakdown[category]++;
    }
  });
  
  // Save summary to a file
  fs.writeFileSync('prompt-test-summary.json', JSON.stringify(summary, null, 2));
  
  console.log('Tests completed!');
  console.log(`Total prompts: ${summary.totalPrompts}`);
  console.log(`Successful prompts: ${summary.successfulPrompts}`);
  console.log(`Failed prompts: ${summary.failedPrompts}`);
  console.log(`Prompts with products: ${summary.promptsWithProducts}`);
  console.log(`Prompts without products: ${summary.promptsWithoutProducts}`);
  console.log(`Average products per prompt: ${summary.averageProductsPerPrompt.toFixed(2)}`);
  console.log('Category breakdown:', summary.categoryBreakdown);
}

// Run the tests
runTests().catch(console.error);
