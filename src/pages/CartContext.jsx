import React, { createContext, useContext, useState } from "react";

// Create a context
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
    // Toggle the visibility of the cart overlay
    setCartVisibility(!isCartVisible);
  };

  const cancelCart = () => {
    // Clear the entire cart
    setCart([]);
  };

  // Define the context value
  const contextValue = {
    cart,
    addToCart,
    removeFromCart,
    isCartVisible,
    toggleCartVisibility,
    cancelCart,
  };

  return (
    // Provide the context value to the components
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export const useCart = () => {
  // Custom hook to use the CartContext
  return useContext(CartContext);
};

// import React, { createContext, useContext, useState } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const [isCartVisible, setCartVisibility] = useState(false);

//   const addToCart = (product) => {
//     const existingProductIndex = cart.findIndex(
//       (item) => item.id === product.id
//     );

//     if (existingProductIndex !== -1) {
//       const updatedCart = [...cart];
//       updatedCart[existingProductIndex].quantity += 1;
//       setCart(updatedCart);
//     } else {
//       setCart([...cart, { ...product, quantity: 1 }]);
//     }
//   };

//   const removeFromCart = (productId) => {
//     const updatedCart = cart.map((item) => {
//       if (item.id === productId) {
//         if (item.quantity > 1) {
//           return { ...item, quantity: item.quantity - 1 };
//         }
//       }
//       return item;
//     });

//     const filteredCart = updatedCart.filter((item) => item.quantity > 0);
//     setCart(filteredCart);
//   };

//   // const toggleCartVisibility = () => {
//   //   setIsCartOpen(!isCartOpen);
//   // };
//   const toggleCartVisibility = () => {
//     setCartVisibility(!isCartVisible);
//   };

//   const cancelCart = () => {
//     setCart([]);
//     setIsCartOpen(false);
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         addToCart,
//         removeFromCart,
//         isCartVisible,
//         toggleCartVisibility,
//         cancelCart,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   return useContext(CartContext);
// };
