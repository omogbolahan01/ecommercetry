// CartContext.js
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // Check if the product is already in the cart
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      // If the product is already in the cart, update its quantity
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      // If the product is not in the cart, add it with a quantity of 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

// import React, { createContext, useContext, useState } from "react";

// const CartContext = createContext();

// export function useCart() {
//   return useContext(CartContext);
// }

// export function CartProvider({ children }) {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     // Check if the product is already in the cart
//     const existingProduct = cart.find((item) => item.name === product.name);

//     if (existingProduct) {
//       // Increment the quantity if the product exists
//       existingProduct.quantity += 1;
//       setCart([...cart]);
//     } else {
//       // Otherwise, add the product to the cart with a quantity of 1
//       setCart([...cart, { ...product, quantity: 1 }]);
//     }
//   };

//   // Other cart-related functions (e.g., removeProduct, updateQuantity) can be added here

//   return (
//     <CartContext.Provider value={{ cart, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// }
