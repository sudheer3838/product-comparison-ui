import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, selected, onCompareToggle }) => {
  return (
    <div
      className="product-list"
      role="list"
      aria-label="Available products list for comparison"
    >
      {products.length === 0 ? (
        <div
          role="status"
          aria-live="polite"
          className="no-data-message"
          style={{ padding: "1rem", textAlign: "center", color: "#555" }}
        >
          <strong>No data found matching your search.</strong>
        </div>
      ) : (
        products.map((product) => (
          <div key={product.id} role="listitem">
            <ProductCard
              product={product}
              onCompareToggle={onCompareToggle}
              isSelected={selected.includes(product)}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;
