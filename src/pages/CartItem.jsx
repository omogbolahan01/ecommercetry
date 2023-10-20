import React from "react";
import { useCart } from "./CartContext";
import { AiOutlineDelete } from "react-icons/Ai";

const CartItem = ({ catalogue, onIncreaseQuantity, onRemoveItem }) => {
  const { addToCart, removeFromCart, removFromCart } = useCart();

  const handleAddOne = () => {
    addToCart(catalogue);
  };

  const handleRemoveOne = () => {
    removeFromCart(catalogue.id);
  };
  const handleRemoveall = () => {
    removFromCart(catalogue.id);
  };

  return (
    <div className="cart-item">
      <div className="cart-flexi">
        <p className="product">{catalogue.name}</p>
        <p className="price">₦{catalogue.price}</p>
        <div className="cart-btn">
          <button onClick={handleRemoveOne}>-</button>
          <span>{catalogue.quantity}</span>
          <button onClick={handleAddOne}>+</button>
        </div>
      </div>
      <button className="action" onClick={handleRemoveall}>
        <AiOutlineDelete />
      </button>
    </div>
  );
};

export default CartItem;
