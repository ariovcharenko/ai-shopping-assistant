const ResultsPanel = ({ results }) => {
  if (!results) return null;

  const { category, subcategory, product_type, filters, hasGenericValues, products } = results;

  // Check for API key missing error
  if (category === "api_key_missing") {
    return (
      <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Configuration Required</h2>
        <div className="p-4 bg-blue-100 text-blue-800 rounded-md border border-blue-300">
          <p className="font-medium">⚙️ OpenAI API Key Required</p>
          <p className="mt-2">To use this application with GPT-4o for accurate product search analysis, you need to configure an OpenAI API key.</p>
          <ol className="mt-3 list-decimal list-inside space-y-1 text-sm">
            <li>Get an API key from <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer" className="underline">OpenAI&apos;s platform</a></li>
            <li>Open the <code className="bg-blue-50 px-1 rounded">.env</code> file in the server directory</li>
            <li>Replace <code className="bg-blue-50 px-1 rounded">your_openai_api_key_here</code> with your actual API key</li>
            <li>Restart the server</li>
          </ol>
        </div>
      </div>
    );
  }

  // Check for API error
  if (category === "api_error") {
    // Check for quota exceeded error
    if (subcategory === "quota_exceeded") {
      return (
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-800 mb-4">API Quota Exceeded</h2>
          <div className="p-4 bg-amber-100 text-amber-800 rounded-md border border-amber-300">
            <p className="font-medium">⚠️ OpenAI API Quota Exceeded</p>
            <p className="mt-2">The OpenAI API key has exceeded its quota or doesn't have billing enabled. This is common with new API keys or free tier accounts.</p>
            <p className="mt-3">To fix this issue:</p>
            <ol className="mt-3 list-decimal list-inside space-y-1 text-sm">
              <li>Visit the <a href="https://platform.openai.com/account/billing/overview" target="_blank" rel="noopener noreferrer" className="underline">OpenAI Billing Portal</a></li>
              <li>Add a payment method and enable billing</li>
              <li>Set usage limits to control costs</li>
              <li>Restart the server after updating your account</li>
            </ol>
            <p className="mt-3 text-sm">Alternatively, you can use the mock service for testing by updating server/index.js.</p>
          </div>
        </div>
      );
    }
    
    // Generic API error
    return (
      <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-gray-800 mb-4">API Error</h2>
        <div className="p-4 bg-red-100 text-red-800 rounded-md border border-red-300">
          <p className="font-medium">⚙️ OpenAI API Error</p>
          <p className="mt-2">There was an error connecting to the OpenAI API. This could be due to:</p>

          <ul className="mt-3 list-disc list-inside space-y-1 text-sm">
            <li>Invalid API key</li>
            <li>API rate limits exceeded</li>
            <li>Network connectivity issues</li>
            <li>OpenAI service disruption</li>
          </ul>
          <p className="mt-3 text-sm">Check the server logs for more details.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Analysis Results</h2>
      
      {hasGenericValues && (
        <div className="mb-4 p-3 bg-yellow-100 text-yellow-800 rounded-md border border-yellow-300">
          <p className="font-medium">⚠️ Warning: Generic values detected</p>
          <p className="text-sm">The AI may have used fallback values for this query. Results may not be specific enough.</p>
        </div>
      )}
      
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-medium text-gray-500">Category</h3>
          <p className="text-lg font-semibold text-gray-800">{category || 'N/A'}</p>
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-gray-500">Subcategory</h3>
          <p className="text-lg font-semibold text-gray-800">{subcategory || 'N/A'}</p>
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-gray-500">Product Type</h3>
          <p className="text-lg font-semibold text-gray-800">{product_type || 'N/A'}</p>
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-gray-500">Filters</h3>
          <div className="flex flex-wrap gap-2 mt-1">
            {filters && filters.length > 0 ? (
              filters.map((filter, index) => (
                <span 
                  key={index} 
                  className="inline-block bg-gray-200 text-sm rounded-full px-3 py-1 text-gray-700"
                >
                  {filter}
                </span>
              ))
            ) : (
              <p className="text-gray-500">No filters available</p>
            )}
          </div>
        </div>
      </div>
      
      {/* Display matched products */}
      {products && products.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Matched Products ({products.length})</h3>
          <div className="space-y-3">
            {products.map((product, index) => (
              <div key={index} className="p-3 bg-gray-50 rounded-md border border-gray-200">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-800">{product.name}</span>
                </div>
                <div className="mt-1 text-sm text-gray-600">
                  <span className="mr-2">{product.category}</span>
                  <span className="mr-2">•</span>
                  <span className="mr-2">{product.subcategory}</span>
                  <span className="mr-2">•</span>
                  <span>{product.product_type}</span>
                </div>
                <div className="mt-2 flex flex-wrap gap-1">
                  {product.filters && product.filters.map((attr, attrIndex) => (
                    <span 
                      key={attrIndex} 
                      className="inline-block bg-blue-100 text-xs rounded-full px-2 py-0.5 text-blue-700"
                    >
                      {attr}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {products && products.length === 0 && (
        <div className="mt-6 p-4 bg-amber-50 text-amber-700 rounded-md border border-amber-200">
          <p className="font-medium">No matching products found</p>
          <p className="mt-1 text-sm">Try adjusting your search query to be more general or check for typos.</p>
        </div>
      )}
    </div>
  );
};

export default ResultsPanel;
