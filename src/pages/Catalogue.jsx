import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Catalogue() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [catalogues, setcatalogues] = useState([]);

  const typeFilter = searchParams.get("type");

  useEffect(() => {
    fetch("/api/catalogues")
      .then((res) => res.json())
      .then((data) => setcatalogues(data.catalogues));
  }, []);

  const displayedCatalogues = typeFilter
    ? catalogues.filter((catalogue) => catalogue.type === typeFilter)
    : catalogues;
  const catalogueElements = displayedCatalogues.map((catalogue) => (
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
      <div className="catalogue-list-filter-buttons">
        <button onClick={() => setSearchParams("?type=phone")}>Phone</button>
        <button onClick={() => setSearchParams("?type=laptop")}>Laptop</button>
        <button onClick={() => setSearchParams("?type=electronics")}>
          Electronics
        </button>
        <button onClick={() => setSearchParams("")}>All</button>
      </div>
      <div className="catalogue-list">{catalogueElements}</div>
    </div>
  );
}
