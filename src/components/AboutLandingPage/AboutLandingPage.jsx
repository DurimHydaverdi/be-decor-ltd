import React from 'react';
import './AboutLandingPage.scss';
import bath from '../Assets/4.webp'

const AboutLandingPage = () => {
  return (
    <div className='about-landing-page'>
      <div className='about-landing-page-left'>
        <img src={bath} alt="Bathroom" />
      </div>
      <div className='about-landing-page-right'>
        <h4>Elegance • Timeless</h4>
        <h1>Modern Style Timeless Charm</h1>
        <p>
          Discover Polifrom's 2024 preview, featuring sofas, chairs, and armchairs embodying diverse lifestyle concepts, alongside striking tables, coffee tables, and sideboards.
        </p>
        <button>About Us →</button>
      </div>
    </div>
  )
}

export default AboutLandingPage;
