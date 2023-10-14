import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Contact() {
  return (
    <div className="contact-area">
      <div className="contactt">
        <div className="contact-part">
          <div className="contact-text">
            <h2>Contact us</h2>
            <p>
              You can reach us by filling out the contact form below or through
              our contact information provided. Our team is committed to
              providing timely and professional responses to your inquiries.
            </p>
          </div>
          <div className="contact-detail">
            <h3>Contact Information</h3>
            <p>
              For general inquiries, you can reach us at [insert email address]
              or call [insert phone number] during our office hours, [insert
              hours].
            </p>
          </div>
        </div>
        <div className="contact-formarea">
          <p>
            Please fill out the form below to send us a message, and we will get
            back to you as soon as possible.
          </p>
          <div>
            <h3>Name</h3>
            <input
              type="text"
              placeholder=""
              className="form--input"
              name="topText"
            />
          </div>
          <div>
            <h3>Email</h3>
            <input
              type="text"
              placeholder=""
              className="form--input"
              name="bottomText"
            />
          </div>

          <div>
            <h3>Message</h3>
            <input
              type="text"
              placeholder=""
              className="form--input2"
              name="bottomText"
            />
          </div>
          <button className="contact-send">send</button>
        </div>
      </div>
    </div>
  );
}
