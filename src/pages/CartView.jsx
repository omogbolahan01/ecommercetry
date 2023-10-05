// CartView.js
import React, { useState } from "react";
import CartItem from "./CartItem";
import { useCart } from "./CartContext";

const CartView = (catalogue) => {
  const { cart, removeFromCart, addToCart, cancelCart } = useCart();
  const [isCartVisible, setCartVisibility] = useState(true);
  const handleClickInsideCart = (e) => {
    // Prevent the click event from propagating to parent elements
    e.stopPropagation();
  };

  const increaseQuantity = (catalogue) => {
    addToCart(catalogue);
  };

  const calculateTotal = () => {
    return cart.reduce(
      (total, catalogue) =>
        total +
        parseFloat(catalogue.price.replace(/,/g, "")) * catalogue.quantity,
      0
    );
  };
  const toggleCartVisibility = () => {
    setCartVisibility(!isCartVisible);
  };
  // const formattedSum = () =>
  //   calculateTotal.toLocaleString("en-US", {
  //     style: "decimal",
  //     minimumFractionDigits: 2,
  //     maximumFractionDigits: 2,
  //   });
  return (
    <div className="cart-view" onClick={handleClickInsideCart}>
      <h2>Cart</h2>
      {isCartVisible && (
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((catalogue) => (
              <CartItem
                key={catalogue.id}
                catalogue={catalogue}
                onIncreaseQuantity={increaseQuantity}
              />
            ))}
          </tbody>
          {/* <button onClick={() => removeFromCart(catalogue.id)}>Remove</button> */}
        </table>
      )}
      <p>Total: ₦{calculateTotal()}</p>
      <button onClick={cancelCart}>Cancel Cart</button>

      <button onClick={toggleCartVisibility}>Hide Cart</button>
      {/* <button onClick={toggleCartVisibility}>
                {isCartVisible ? 'Hide Cart' : 'Show Cart'}
            </button> */}
    </div>
  );
};

export default CartView;
