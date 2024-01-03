import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiLogoPlayStore } from "react-icons/bi";
import {
  AiOutlineApple,
  AiFillTwitterCircle,
  AiOutlineYoutube,
  AiOutlineArrowRight,
} from "react-icons/ai";

import { BsFacebook, BsInstagram } from "react-icons/bs";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:iloriojomodel@gmail.com?subject=Newsletter Subscription&body=Email: ${email}`;
  };

  return (
    <footer>
      <div>
        <h2>Subscribe to Our Newsletter</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              className="form-sub"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <button className="form-btn" type="submit">
            <AiOutlineArrowRight />
          </button>
        </form>
      </div>

      <div className="footer-flex">
        <Link to="catalogue">Catalogue</Link>
        {/* <Link to="contact">Contact</Link> */}
        <Link to="faqs">FAQs</Link>
        <Link to="terms">Terms and condition</Link>
      </div>
      <div className="footer-download">
        <h3>Download App</h3>
        <div className="download-button">
          <button className="btn-download">
            <BiLogoPlayStore className="large-icon2" />{" "}
            <p>Download from Playstore</p>
          </button>
          <button className="btn-download">
            <AiOutlineApple className="large-icon2" />{" "}
            <p>Download from Appstore</p>
          </button>
        </div>
      </div>
      <div className="footer-social">
        <h3>Join us on</h3>
        <div className="social-links">
          <div>
            {" "}
            <AiFillTwitterCircle />
          </div>
          <div>
            {" "}
            <AiOutlineYoutube />
          </div>
          <div>
            {" "}
            <BsInstagram />
          </div>
          <div>
            {" "}
            <BsFacebook />
          </div>
        </div>
      </div>
      <p>Copyright © 2023 GbdAfri. All Rights Reserved.</p>
    </footer>
  );
}
