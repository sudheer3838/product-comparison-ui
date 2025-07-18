import React from "react";

const ComparisonView = ({ items, onClose }) => {
  const keys = Object.keys(items[0].features);

  const isDifferent = key => {
    const values = items.map(item => item.features[key]);
    return new Set(values).size > 1;
  };

  return (
    <div
      className="comparison-view"
      role="dialog"
      aria-label="Product Comparison Table"
      aria-modal="true"
      tabIndex={-1}
    >
      <button className="close-modal" onClick={onClose} aria-label="Close Comparison View">Close</button>

      <div
        className="comparison-table"
        role="table"
        aria-describedby="comparison-description"
      >
        <p id="comparison-description" className="visually-hidden">
          This is a table comparing the features of selected products.
        </p>

        <div className="header-row" role="row">
          <div role="columnheader">Feature</div>
          {items.map(p => (
            <div role="columnheader" key={p.id}>
              {p.name}
            </div>
          ))}
        </div>

        {keys.map(key => (
          <div className="feature-row" role="row" key={key}>
            <div role="rowheader">{key}</div>
            {items.map(p => (
              <div
                key={p.id + key}
                role="cell"
                className={isDifferent(key) ? "highlight" : ""}
                aria-label={`${key} of ${p.name}: ${p.features[key]}`}
              >
                {p.features[key]}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparisonView;
