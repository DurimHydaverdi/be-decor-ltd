import React from 'react';
import './GetInTouch.scss';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

function GetInTouch() {
  return (
    <section className="get-in-touch">
      <h2 className="get-in-touch-title">Get in Touch</h2>
      {/* Left Column - Contact Info */}
      <div className="get-in-touch-left">
        <div className="get-in-touch-content">
          <p><strong>Phone</strong><br />+447495911553</p>
          <p><strong>Email</strong><br />contact@bedecorltd.com</p>
          <div className="get-in-touch-socials">
            {/* <a href="#facebook" aria-label="Facebook"><FaFacebook /></a> */}
            {/* <a href="#twitter" aria-label="X"><FaXTwitter /></a> */}
            <a href="https://www.instagram.com/bedecorltd/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            {/* <a href="#linkedin" aria-label="LinkedIn"><FaLinkedin /></a> */}
          </div>
        </div>
      </div>

      {/* Right Column - Contact Form */}
      <div className="get-in-touch-right">
        <form className="get-in-touch-form">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" required />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit" className="get-in-touch-submit">Send</button>
        </form>
      </div>
    </section>
  );
}

export default GetInTouch;
