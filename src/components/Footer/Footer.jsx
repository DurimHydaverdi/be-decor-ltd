// Footer.js
import React from 'react';
import './Footer.scss';
import GetInTouch from '../Assets/GetInTouch.webp';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <img src={GetInTouch} alt="Get In Touch" className="footer__image" />
        <div className="footer__info">
          <h2 className="footer__title">Get In Touch</h2>
          <p className="footer__text">123 Main St, Anytown, AN 12345</p>
          <p className="footer__text">Email: info@company.com</p>
          <p className="footer__text">Phone: +1 (555) 123-4567</p>
        </div>
        <div className="footer__socials">
          <a href="#facebook" className="footer__icon">Facebook</a>
          <a href="#instagram" className="footer__icon">Instagram</a>
          <a href="#twitter" className="footer__icon">Twitter</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
