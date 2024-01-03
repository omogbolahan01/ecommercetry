import React from "react";

import { Link } from "react-router-dom";

import {
  CiLocationArrow1,
  CiDeliveryTruck,
  CiCircleQuestion,
} from "react-icons/ci";
// import { IoIosHelpCircleOutline } from "react-icons/io";
// import { GiAutoRepair } from "react-icons/gi";
// import { TiSpannerOutline } from "react-icons/ti";
// import { GrHostMaintenance } from "react-icons/gr";
import { VscWorkspaceUnknown } from "react-icons/vsc";

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
          <div className="cata1">
            <img src="/images/ban2.jpg" />
          </div>
          <div className="cata1">
            <img src="/images/banner.jpg" />
          </div>
          <div className="cata1">
            <img src="/images/electronics.webp" />
          </div>
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
          <VscWorkspaceUnknown className="large-icon" />
          <h3>Repairs</h3>
          <p>
            Sometimes bad things happen to great products. But that doesn’t mean
            that they’re beyond repair.
          </p>
        </div>
        <div className="deliver">
          <CiCircleQuestion className="large-icon" />
          <h3>24/7 Help Center</h3>
          <p>
            Dedicated online and offline support.we are dedicated in helping you
            get whatever issues solved{" "}
          </p>
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
