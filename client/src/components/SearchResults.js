import React from 'react';

function SearchResults({ searchParams, products, onFeedback }) {
  return (
    <div className="mt-8">
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">AI Interpretation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded">
            <h3 className="font-medium text-gray-700 mb-2">Category</h3>
            <p className="text-gray-900">{searchParams.category || 'Not specified'}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded">
            <h3 className="font-medium text-gray-700 mb-2">Subcategory</h3>
            <p className="text-gray-900">{searchParams.subcategory || 'Not specified'}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded">
            <h3 className="font-medium text-gray-700 mb-2">Product Type</h3>
            <p className="text-gray-900">{searchParams.product_type || 'Not specified'}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded">
            <h3 className="font-medium text-gray-700 mb-2">Filters</h3>
            <div className="flex flex-wrap gap-2">
              {searchParams.filters && searchParams.filters.length > 0 ? (
                searchParams.filters.map((filter, index) => (
                  <span 
                    key={index}
                    className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm"
                  >
                    {filter}
                  </span>
                ))
              ) : (
                <p className="text-gray-500">No filters specified</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Results ({products.length})
          </h2>
          <div className="flex space-x-2">
            <button
              onClick={() => onFeedback(true)}
              className="px-3 py-1 bg-green-100 text-green-800 rounded hover:bg-green-200"
            >
              👍 Helpful
            </button>
            <button
              onClick={() => onFeedback(false)}
              className="px-3 py-1 bg-red-100 text-red-800 rounded hover:bg-red-200"
            >
              👎 Not Helpful
            </button>
          </div>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">No products found matching your search criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">[Product Image]</span>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900">{product.name}</h3>
                  <p className="text-gray-500 text-sm mt-1">
                    {product.category} / {product.subcategory} / {product.product_type}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {product.filters && product.filters.slice(0, 3).map((filter, index) => (
                      <span 
                        key={index}
                        className="inline-block bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full text-xs"
                      >
                        {filter}
                      </span>
                    ))}
                    {product.filters && product.filters.length > 3 && (
                      <span className="inline-block text-gray-500 text-xs">
                        +{product.filters.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="mt-3 flex justify-end items-center">
                    <button className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchResults;
