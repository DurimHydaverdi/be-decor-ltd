import React from 'react';
import './GetInTouch.scss';
import GetInTouchImage from '../Assets/GetInTouch.webp';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

function GetInTouch() {
  return (
    <section className="get-in-touch">
      {/* Left Column - Contact Info */}
      <div className="get-in-touch__left">
        <img src={GetInTouchImage} alt="Get In Touch Background" className="get-in-touch__image" />
        <div className="get-in-touch__content">
          <h2 className="get-in-touch__title">Get in Touch</h2>
          <p><strong>Phone</strong><br />+447495911553</p>
          <p><strong>Email</strong><br />contact@bedecorltd.com</p>
          <div className="get-in-touch__socials">
            <a href="#facebook" aria-label="Facebook"><FaFacebook /></a>
            <a href="#twitter" aria-label="X"><FaXTwitter /></a>
            <a href="#instagram" aria-label="Instagram"><FaInstagram /></a>
            <a href="#linkedin" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Right Column - Contact Form */}
      <div className="get-in-touch__right">
        <form className="get-in-touch__form">
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
          <button type="submit" className="get-in-touch__submit">Send</button>
        </form>
      </div>
    </section>
  );
}

export default GetInTouch;
