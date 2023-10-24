import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsCartCheck } from "react-icons/bs";
import { useCart } from "../pages/CartContext";
import CartView from "../pages/CartView";

export default function Header() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  // const { isCartVisible, toggleCartVisibility } = useCart();

  // const handleClick = () => {
  //   // Toggle the visibility of the cart overlay
  //   toggleCartVisibility();
  // };
  const { cart } = useCart();
  // const [isCartViewVisible, setCartViewVisible] = useState(false);
  const { isCartVisible, toggleCartVisibility } = useCart();

  // const openCartView = () => {
  //   console.log("Opening cart view");
  //   setCartViewVisible(true);
  // };

  // const closeCartView = () => {
  //   setCartViewVisible(false);
  // };
  const handleCartIconClick = () => {
    toggleCartVisibility();
  };

  return (
    <header>
      <div className="site-logo">
        <h2> GbdAfri</h2>
      </div>
      {/* <Link className="site-logo" to="/"> */}

      {/* </Link> */}
      <nav>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Product
        </NavLink>
        <NavLink
          to="catalogue"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Catalogue
        </NavLink>
        <NavLink
          to="cart"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          <BsCartCheck />
          <span className="cart-item-count">{cart.length}</span>
          {isCartVisible && <CartView />}
        </NavLink>

        {/* {isCartViewVisible && <CartView onClose={closeCartView} />} */}

        {/* {isCartViewVisible && <CartView onClose={closeCartView} />} */}
      </nav>
    </header>
  );
}
