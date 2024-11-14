import React from 'react';
import './ContactLandingPage.scss';
import bath from '../Assets/4.webp';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const ContactLandingPage = () => {
  return (
    <div className='contact-landing-page'>
      <div className='contact-landing-page-left'>
        <img src={bath} alt="Bathroom" />
      </div>
      <div className='contact-landing-page-right'>
        <h4>Elegance • Timeless</h4>
        <h1>Modern Style Timeless Charm</h1>
        <p>
          Discover Polifrom's 2024 preview, featuring sofas, chairs, and armchairs embodying diverse lifestyle concepts, alongside striking tables, coffee tables, and sideboards.
        </p>
        <Link to="/contact" onClick={scrollToTop} className='contact-us'>
          <button>Contact Us <FaArrowRight className="arrow" /></button>
        </Link>
      </div>
    </div>
  );
};

export default ContactLandingPage;
