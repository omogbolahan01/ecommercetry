// CartView.js
import React, { useState } from "react";
import CartItem from "./CartItem";
import { useCart } from "./CartContext";

const CartView = (catalogue) => {
  const { cart, removeFromCart, addToCart, cancelCart, removFromCart } =
    useCart();
  const [isCartVisible, setCartVisibility] = useState(true);
  const handleClickInsideCart = (e) => {
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
  const checkout = async () => {
    const paymentResult = await mockPayment();
    if (paymentResult === "success") {
      alert("Payment successful! Your order has been confirmed.");

      cancelCart();
    } else {
      alert("Payment failed. Please try again.");
    }
  };

  const mockPayment = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("success");
      }, 2000);
    });
  };

  return (
    <div className="cart-view" onClick={handleClickInsideCart}>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {isCartVisible && (
            <table>
              <thead>
                <tr className="productss">
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
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
            </table>
          )}
          <p>Total: ₦{calculateTotal()}</p>
          <div className="cancel-btt">
            <button onClick={cancelCart}>Cancel Cart</button>
            <button onClick={toggleCartVisibility}>Hide Cart</button>
          </div>
          <div className="checkout">
            <button className="check-btn" onClick={checkout}>
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartView;
