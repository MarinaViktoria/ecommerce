import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

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

    const uniqeIdProduct = { ...product, cartItemId: uuidv4() };

    //setCart((prevCart) => [...prevCart, product]);
    setCart((prevCart) => [...prevCart, uniqeIdProduct]);
  };

  const removeFromCart = (removedProduct) => {
    console.log("Product removed:", removedProduct);
    setCart((prevCart) =>
      //prevCart.filter((item) => item.id !== removedProduct.id)
      prevCart.filter((item) => item.cartItemId !== removedProduct.cartItemId)
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
