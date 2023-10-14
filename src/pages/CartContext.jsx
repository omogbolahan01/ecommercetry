import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartVisible, setCartVisibility] = useState(false);
  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  const removFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };
  const removeFromCart = (productId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        if (item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
      }
      return item;
    });

    const filteredCart = updatedCart.filter((item) => item.quantity > 0);
    setCart(filteredCart);
  };

  const toggleCartVisibility = () => {
    setCartVisibility(!isCartVisible);
  };

  const cancelCart = () => {
    setCart([]);
  };

  const contextValue = {
    cart,
    addToCart,
    removeFromCart,
    removFromCart,
    isCartVisible,
    toggleCartVisibility,
    cancelCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
