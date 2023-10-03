import React from "react";
import { Link } from "react-router-dom";
import { CiLocationArrow1, CiDeliveryTruck } from "react-icons/Ci";
import { MdOutlineHomeRepairService } from "react-icons/Md";
import { FcCustomerSupport } from "react-icons/Fc";
export default function Home() {
  return (
    <div className="home-product">
      <div className="top-image">
        <img src="/images/hero_medium.png" />
      </div>
      <div className="cata-page">
        <div>
          <h2>Products Avaliable</h2>
          <p>All phones,laptops and electronics devices </p>
        </div>
        <div className="cata-flex">
          <img src="/images/ban2.jpg" />
          <img src="/images/banner.jpg" />
          <img src="/images/electronics.webp" />
        </div>
      </div>
      <div className="deliv-flex">
        <div className="deliver">
          <CiDeliveryTruck className="large-icon" />
          <h3>Quick delivery</h3>
          <p>
            Same day pickup in-store or free sipping to anywhere in Nigeria.
          </p>
        </div>
        <div className="deliver">
          <MdOutlineHomeRepairService className="large-icon" />
          <h3>Repairs</h3>
          <p>
            Sometimes bad things happen to great products. But that doesn’t mean
            that they’re beyond repair.
          </p>
        </div>
        <div className="deliver">
          <FcCustomerSupport className="large-icon" />
          <h3>24/7 Help Center</h3>
          <p>Dedicated online and offline support</p>
        </div>
        <div className="deliver">
          <CiLocationArrow1 className="large-icon" />
          <h3>Store Locations</h3>
          <p>
            Want to visit us in store? Find out where we're situated in Nigeria.
          </p>
        </div>
      </div>
    </div>
  );
}
