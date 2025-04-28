import React from 'react';

const ResultsPanel = ({ results }) => {
  if (!results) return null;

  const { searchParams, products, total } = results;

  return (
    <div className="results-panel">
      <div className="search-params">
        <h3>Search Parameters</h3>
        <ul>
          {searchParams?.category && <li>Category: {searchParams.category}</li>}
          {searchParams?.subcategory && <li>Subcategory: {searchParams.subcategory}</li>}
          {searchParams?.product_type && <li>Product Type: {searchParams.product_type}</li>}
          {searchParams?.filters?.length > 0 && (
            <li>Filters: {searchParams.filters.join(', ')}</li>
          )}
        </ul>
      </div>

      <div className="products-list">
        <h3>Matching Products ({total})</h3>
        {products?.length > 0 ? (
          <div className="product-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <h4>{product.name}</h4>
                <p>Category: {product.category}</p>
                {product.subcategory && <p>Subcategory: {product.subcategory}</p>}
                {product.product_type && <p>Type: {product.product_type}</p>}
                {product.filters?.length > 0 && (
                  <p>Features: {product.filters.join(', ')}</p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p>No matching products found</p>
        )}
      </div>
    </div>
  );
};

export default ResultsPanel;
