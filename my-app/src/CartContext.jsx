import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    console.log("Product added:", product);
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (removedProduct) => {
    console.log("Product removed:", removedProduct);
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== removedProduct.id)
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
