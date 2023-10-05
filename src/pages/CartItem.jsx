import React from "react";
import { useCart } from "./CartContext";

const CartItem = ({ catalogue }) => {
  const { addToCart, removeFromCart } = useCart();

  const handleAddOne = () => {
    addToCart(catalogue);
  };

  const handleRemoveOne = () => {
    removeFromCart(catalogue.id);
  };

  return (
    <div className="cart-item">
      <p>{catalogue.name}</p>
      <p>₦{catalogue.price}</p>
      <div>
        <button onClick={handleRemoveOne}>-</button>
        <span>{catalogue.quantity}</span>
        <button onClick={handleAddOne}>+</button>
      </div>
    </div>
  );
};

export default CartItem;
