import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./Header";
import MainPart from "./MainPart";
import { useState, useEffect } from "react";
import Products from "./Products";
import Cart from "./Cart";
import { CartProvider } from "./context/CartContext";
import ProductsLayout from "./ProductsLayout";
import ProductDetail from "./ProductDetails";
import ErrorBoundary from "./ErrorBoundary";
import Footer from "./Footer";

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
            <div className="fixed top-0 right-0 h-full w-full sm:w-[35%] bg-white shadow-lg z-50 p-6 overflow-y-auto transition-all duration-300 ease-in-out">
              <Cart />
              <div className="flex justify-center w-full">
                <button
                  onClick={toggleCart}
                  className="mt-8 bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-700 transition-all duration-300 ease-in-out"
                >
                  Close Cart
                </button>
              </div>
            </div>
          )}

          <Routes>
            <Route
              path="/"
              element={
                <MainPart
                  products={products}
                  loading={loading}
                  isCartVisible={isCartVisible}
                />
              }
            />
            <Route
              path="/products"
              element={
                <ProductsLayout
                  products={products}
                  loading={loading}
                  isCartVisible={isCartVisible}
                />
              }
            >
              <Route
                index
                element={
                  <Products
                    products={products}
                    loading={loading}
                    isCartVisible={isCartVisible}
                  />
                }
              />
              <Route path=":id" element={<ProductDetail />} />
            </Route>
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </ErrorBoundary>
  );
}

export default App;
