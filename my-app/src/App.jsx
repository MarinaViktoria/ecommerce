import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./Header";
import MainPart from "./MainPart";
import { useState, useEffect } from "react";
import Products from "./Products";
import Cart from "./Cart";
import { CartProvider } from "./CartContext";

import ErrorBoundary from "./ErrorBoundary";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCart = () => {
    setIsCartVisible((prev) => !prev);
  };

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <ErrorBoundary>
      <CartProvider>
        <Router>
          <Header toggleCart={toggleCart} isCartVisible={isCartVisible} />

          {isCartVisible && (
            <div className="p-6 bg-white shadow-lg max-w-xl mx-auto mt-4 rounded">
              <Cart />
            </div>
          )}

          <Routes>
            <Route
              path="/"
              element={<MainPart products={products} loading={loading} />}
            />
            <Route
              path="/products"
              element={<Products products={products} loading={loading} />}
            />
          </Routes>
        </Router>
      </CartProvider>
    </ErrorBoundary>
  );
}

export default App;
