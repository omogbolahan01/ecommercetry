import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Catalogue() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [catalogues, setcatalogues] = useState([]);
  // const [catalogue, setCatalogue] = useState([]);
  // const [filteredCatalogue, setFilteredCatalogue] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");

  const typeFilter = searchParams.get("type");

  useEffect(() => {
    fetch("/api/catalogues")
      .then((res) => res.json())
      .then((data) => setcatalogues(data.catalogues));
  }, []);

  const displayedCatalogues = typeFilter
    ? catalogues.filter((catalogue) => catalogue.type === typeFilter)
    : catalogues;
  const filteredCatalogues = displayedCatalogues.filter((catalogue) =>
    catalogue.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const catalogueElements = filteredCatalogues.map((catalogue) => (
    <div key={catalogues.id} className="catalogue-tile">
      <Link to={`/catalogues/${catalogue.id}`}>
        <img src={catalogue.imageUrl} />
        <div className="catalogue-info">
          <h3 className="catalogue-name">{catalogue.name}</h3>
          <p>₦{catalogue.price}</p>
        </div>
      </Link>
      {/* <button className="add-to-cart-btn">Add to Cart</button> */}
    </div>
  ));

  return (
    <div className="catalogue-list-container">
      <h1>Explore our catalogues</h1>
      <input
        type="text"
        placeholder="Search catalog..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="form-area"
      />
      <div className="catalogue-list-filter-buttons">
        <button
          onClick={() => setSearchParams("?type=phone")}
          className={`catalogue-type phone 
        ${typeFilter === "phone" ? "selected" : ""}`}
        >
          Phone
        </button>
        <button
          onClick={() => setSearchParams("?type=laptop")}
          className={`catalogue-type laptop 
          ${typeFilter === "laptop" ? "selected" : ""}`}
        >
          Laptop
        </button>
        <button
          onClick={() => setSearchParams("?type=electronics")}
          className={`catalogue-type electronics 
          ${typeFilter === "electronics" ? "selected" : ""}`}
        >
          Electronics
        </button>
        <button
          onClick={() => setSearchParams("")}
          className={`catalogue-type  
          ${typeFilter === "" ? "selected" : ""}`}
        >
          All
        </button>
      </div>
      <div className="catalogue-list">{catalogueElements}</div>
    </div>
  );
}
