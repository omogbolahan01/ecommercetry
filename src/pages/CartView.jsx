// CartView.js
import React, { useState } from "react";
import CartItem from "./CartItem";
import { useCart } from "./CartContext";

const CartView = (catalogue) => {
  const { cart, removeFromCart, addToCart, cancelCart, removFromCart } =
    useCart();
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
  const checkout = async () => {
    // In a real application, this function would integrate with a payment gateway
    // and process the payment. Here, we'll simulate a successful payment.
    const paymentResult = await mockPayment(); // Simulated payment
    if (paymentResult === "success") {
      // Successful payment, proceed with order confirmation and clearing the cart
      alert("Payment successful! Your order has been confirmed.");
      // TODO: Implement order confirmation and clear the cart here
      // For simplicity, we'll just clear the cart here.
      cancelCart();
    } else {
      alert("Payment failed. Please try again.");
    }
  };

  const mockPayment = () => {
    return new Promise((resolve) => {
      // Simulate payment success after a delay
      setTimeout(() => {
        resolve("success"); // In a real app, this would depend on the payment gateway response
      }, 2000);
    });
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
                // onRemoveItem={removFromCart}
              />
            ))}
          </tbody>

          {/* <button onClick={() => removeFromCart(catalogue.id)}>Remove</button> */}
        </table>
      )}
      <p>Total: ₦{calculateTotal()}</p>
      <div>
        <button onClick={cancelCart}>Cancel Cart</button>

        <button onClick={toggleCartVisibility}>Hide Cart</button>
      </div>

      <button className="checkout" onClick={checkout}>
        Checkout
      </button>
    </div>
  );
};

export default CartView;
