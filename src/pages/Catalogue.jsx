import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Catalogue() {
  const [catalogues, setcatalogues] = useState([]);
  useEffect(() => {
    fetch("/api/catalogues")
      .then((res) => res.json())
      .then((data) => setcatalogues(data.catalogues));
  }, []);

  const catalogueElements = catalogues.map((catalogue) => (
    <div key={catalogues.id} className="catalogue-tile">
      <Link to={`/catalogues/${catalogue.id}`}>
        <img src={catalogue.imageUrl} />
        <div className="catalogue-info">
          <h3>{catalogue.name}</h3>
          <p>₦{catalogue.price}</p>
        </div>
        <i className={`van-type ${catalogue.type} selected`}>
          {catalogues.type}
        </i>
      </Link>
      {/* <button className="add-to-cart-btn">Add to Cart</button> */}
    </div>
  ));

  return (
    <div className="catalogue-list-container">
      <h1>Explore our catalogues</h1>
      <div className="catalogue-list">{catalogueElements}</div>
    </div>
  );
}
