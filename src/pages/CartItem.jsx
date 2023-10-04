// CartItem.js
import React from "react";

const CartItem = ({ catalogue, onIncreaseQuantity }) => {
  return (
    <tr>
      <td>{catalogue.name}</td>
      <td>₦{catalogue.price}</td>
      <td>{catalogue.quantity}</td>
      <td>
        <button onClick={() => onIncreaseQuantity(catalogue)}>+</button>
      </td>
    </tr>
  );
};

export default CartItem;
