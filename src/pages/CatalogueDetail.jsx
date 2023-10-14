import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "./CartContext";

export default function CatalogueDetail() {
  const params = useParams();
  const [catalogue, setCatalogue] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  // const addToCart = () => {
  //   const productWithQuantity = {
  //     ...product,
  //     quantity: quantity,
  //   };
  // };

  useEffect(() => {
    fetch(`/api/catalogues/${params.id}`)
      .then((res) => res.json())
      .then((data) => setCatalogue(data.catalogues));
  }, [params.id]);
  // const handleAddToCart = () => {
  //   // const catalogue = {
  //   //   name= {catalogue.title},
  //   //   price={catalogue.price}, // Replace with actual product price
  //   };
  //   addToCart(product);
  // };
  const handleAddToCart = () => {
    addToCart(catalogue);
  };
  return (
    <div className="catalogue-detail-container">
      <Link to="/catalogue" className="back-button">
        &larr; <span>Back to all catalogue</span>
      </Link>

      {catalogue ? (
        <div className="catalogue-detail">
          <img src={catalogue.imageUrl} />
          <h2>{catalogue.name}</h2>
          <p className="catalogue-price">₦{catalogue.price}</p>

          <button onClick={handleAddToCart} className="add-to-cart-btn">
            Add to Cart
          </button>
          <p>{catalogue.description}</p>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
