// CartView.js
import React from "react";
import { useCart } from "./CartContext"; // Import the CartContext
const CartView = () => {
  const { cart } = useCart();

  return (
    <div className="cart-view">
      <h2>Cart</h2>
      <ul>
        {cart.map((catalogue, index) => (
          <li key={index}>
            {catalogue.name} - N{catalogue.price}
          </li>
        ))}
      </ul>
      {/* <button>Close</button> */}
    </div>
  );
};
export default CartView;
