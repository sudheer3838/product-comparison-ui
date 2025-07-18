import React from "react";

const CompareBar = ({ selected, onClear, onCompare }) => {
  if (selected.length < 2) return null;

  return (
    <div
      className="compare-bar"
      role="region"
      aria-labelledby="compare-toolbar-heading"
    >
      <h2 id="compare-toolbar-heading" className="visually-hidden">
        Comparison Toolbar
      </h2>

      <span aria-live="polite">{selected.length} items selected</span>

      <button
        onClick={onCompare}
        type="button"
        aria-label="Compare selected products"
      >
        Compare
      </button>

      <button
        onClick={onClear}
        type="button"
        aria-label="Clear selected products"
      >
        Clear
      </button>
    </div>
  );
};

export default CompareBar;
