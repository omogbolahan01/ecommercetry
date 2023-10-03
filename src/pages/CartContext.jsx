import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // Check if the product is already in the cart
    const existingProduct = cart.find((item) => item.name === product.name);

    if (existingProduct) {
      // Increment the quantity if the product exists
      existingProduct.quantity += 1;
      setCart([...cart]);
    } else {
      // Otherwise, add the product to the cart with a quantity of 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Other cart-related functions (e.g., removeProduct, updateQuantity) can be added here

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
