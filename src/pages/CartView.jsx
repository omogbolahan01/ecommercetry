// CartView.js
import React from "react";
import CartItem from "./CartItem";
import { useCart } from "./CartContext";

const CartView = (catalogue) => {
  const { cart, addToCart } = useCart();

  const increaseQuantity = (catalogue) => {
    addToCart(catalogue); // This will add another item to the cart
  };

  const calculateTotal = () => {
    console.log("Price:", catalogue.price);
    console.log("Quantity:", catalogue.quantity);
    // console.log('Total:', total);
    return cart.reduce(
      (total, catalogue) => total + catalogue.price * catalogue.quantity,
      0
    );
    console.log("Total:", total);
  };

  return (
    <div className="cart-view">
      <h2>Cart</h2>
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
      </table>
      <p>Total: ₦{calculateTotal()}</p>
    </div>
  );
};

export default CartView;

// import React from "react";
// import { useCart } from "./CartContext"; // Import the CartContext
// const CartView = () => {
//   const { cart } = useCart();

//   return (
//     <div className="cart-view">
//       <h2>Cart</h2>
//       <ul>
//         {cart.map((catalogue, index) => (
//           <li key={index}>
//             {catalogue.name} - N{catalogue.price}
//           </li>
//         ))}
//       </ul>
//       {/* <button>Close</button> */}
//     </div>
//   );
// };
// export default CartView;
