import React from 'react'
import './ServicesLandingPage.scss';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import services from '../Assets/services.png';

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

const ServicesLandingPage = () => {
  return (
    <div className='service-landing-page'>
        <img src={services} alt="Services" className='services-img'/>
        <Link to="/services" onClick={scrollToTop}>
            <button className="collection-button">
              More Details <FaArrowRight />
            </button>
        </Link>
    </div>
  )
}

export default ServicesLandingPage
