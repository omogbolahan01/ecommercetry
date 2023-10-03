import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsCartCheck } from "react-icons/Bs";
import { useCart } from "../pages/CartContext";
import CartView from "../pages/CartView";

export default function Header() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  const { cart } = useCart();
  const [isCartViewVisible, setCartViewVisible] = useState(false);

  const openCartView = () => {
    console.log("Opening cart view");
    setCartViewVisible(true);
  };

  const closeCartView = () => {
    setCartViewVisible(false);
  };

  return (
    <header>
      <Link className="site-logo" to="/">
        GbdAfri
      </Link>
      <nav>
        <NavLink
          to="product"
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
        <div onClick={openCartView} className="cart-icon">
          <BsCartCheck />
          <span className="cart-item-count">{cart.length}</span>
        </div>
        {isCartViewVisible && <CartView onClose={closeCartView} />}
      </nav>
    </header>
  );
}
