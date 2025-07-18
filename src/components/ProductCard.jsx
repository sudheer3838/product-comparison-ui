import React from "react";
import "../styles/ProductCard.css";

const ProductCard = ({ product, onCompareToggle, isSelected }) => {
  return (
    <div
      className={`product-card ${isSelected ? "selected" : ""}`}
      tabIndex="0"
      role="region"
      aria-label={`Product: ${product.name}, Brand: ${product.brand}, Price: ${product.price}`}
      aria-describedby={`desc-${product.id}`}
    >
      <img
        src={product.image}
        alt={`Image of ${product.name}`}
        loading="lazy"
        width="200"
        height="200"
      />

      <h3 id={`desc-${product.id}`}>{product.name}</h3>
      <p>Brand: {product.brand}</p>
      <p>Price: {product.price}</p>

      <ul>
        {Object.entries(product.features).map(([key, value]) => (
          <li key={key}>
            <span><strong>{key}:</strong></span> {value}
          </li>
        ))}
      </ul>

      <button
        aria-pressed={isSelected}
        aria-label={`Toggle compare for ${product.name}`}
        onClick={() => onCompareToggle(product)}
        className={`compare-toggle ${isSelected ? "active" : ""}`}
      >
        {isSelected ? "Remove from Compare" : "Add to Compare"}
      </button>
    </div>
  );
};

export default ProductCard;
