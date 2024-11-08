import React from 'react';
import './Footer.scss';
import logo from '../Assets/logo3.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="footerSection logoSection">
          <img src={logo} alt="Footer Logo" />
        </div>
        <div className="footerSection">
          <h3>Policies</h3>
          <ul>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#guest-rules">Guest Rules</a></li>
            <li><a href="#terms">Terms & Conditions</a></li>
          </ul>
        </div>
        <div className="footerSection">
          <h3>Contacts</h3>
          <ul>
            <li><span role="img" aria-label="phone">📞</span> <a href="tel:+38349100019">+447495911553</a></li>
            <li><span role="img" aria-label="email">📧</span> <a href="mailto:duavillage1@gmail.com">contact@be-decor.com</a></li>
            {/* <li><a href='https://tinyurl.com/yc6pvx65' target="_blank" rel="noreferrer"><span role="img" aria-label="location">📍</span> Prishtinë, Keçekollë - Dua Village</a></li> */}
          </ul>
        </div>
        <div className="footerSection">
          <h3>Social Media</h3>
          <ul>
            <li><a href="https://www.instagram.com/bedecorltd/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footerBottom">
        <p>&copy; 2024 Be Decor LTD. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
