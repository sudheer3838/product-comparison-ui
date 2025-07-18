import React, { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import ComparePanel from "./components/CompareBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import productsData from "./data/products";
import ComparisonView from "./components/ComparisonView";

import "./styles/main.scss";
const App = () => {
  const [selected, setSelected] = useState(() => {
    const saved = localStorage.getItem("compareItems");
    return saved ? JSON.parse(saved) : [];
  });
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [showComparison, setShowComparison] = useState(false);

  useEffect(() => {
    localStorage.setItem("compareItems", JSON.stringify(selected));
  }, [selected]);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "";
  }, [darkMode]);

  const handleCompareToggle = (product) => {
    const isAlreadySelected = selected.some((p) => p.id === product.id);
    if (isAlreadySelected) {
      setSelected(selected.filter((p) => p.id !== product.id));
    } else {
      if (selected.length < 3) {
        setSelected([...selected, product]);
      }
    }
  };

  const filteredProducts = productsData.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.brand.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="app" role="main">
      <Header darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      {/* <h1 tabIndex="0">Product</h1> */}
      <section aria-labelledby="product-list-heading" className="container">
        <div className="search-box container">
          <h1 id="product-list-heading" className="visually-hidden1">Product List</h1>
          <label htmlFor="search" className="visually-hidden">Search Products</label>
          <input
            type="text"
            id="search"
            aria-label="Search products"
            placeholder="Search by name or brand"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <ProductList
          products={filteredProducts}
          selected={selected}
          onCompareToggle={handleCompareToggle}
        />

        {selected.length >= 2 && (
          <ComparePanel
            selected={selected}
            onClear={() => setSelected([])}
            onCompare={() => setShowComparison(true)}
          />
        )}

        {showComparison && (
          <ComparisonView
            items={selected}
            onClose={() => setShowComparison(false)}
          />
        )}
      </section>

      <Footer />
    </main>
  );
};

export default App;
