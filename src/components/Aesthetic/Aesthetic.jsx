import React from 'react';
import './Aesthetic.scss';
import interior from '../Assets/3.webp';
import kitchen from '../Assets/6.webp';
import livingRoom from '../Assets/5.webp';

const Aesthetic = () => {
  return (
    <div className="container">
      <section className="main-content">
        <div className="intro">
          <div className="intro-text">
            <span className="intro-badge">Gorgeous Interior</span>
            <h1 className="intro-title">Modern Minimalist</h1>
          </div>
          <div className="intro-image">
            <img src={interior} alt="Interior design" />
          </div>
        </div>

        <div className="details">
          <div className="details-card" style={{ backgroundImage: `url(${kitchen})` }}>
            <span className="details-badge">Aesthetic</span>
            <h2>Aesthetic furniture where every piece tells a story of style</h2>
            <p>Into a gallery of elegance</p>
          </div>
          <div className="details-card" style={{ backgroundImage: `url(${livingRoom})` }}>
            <span className="details-badge">Best Furniture</span>
            <h2>Indulge in the artistry of everyday living</h2>
            <div className="details-link">
              <span>View More →</span>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stats-item">
          <h3>500+</h3>
          <p>Products</p>
        </div>
        <div className="stats-item">
          <h3>20+</h3>
          <p>Projects</p>
        </div>
        <div className="stats-item">
          <h3>50+</h3>
          <p>Satisfied Customers</p>
        </div>
        <div className="stats-item">
          <h3>1<sup>st</sup></h3>
          <p>Top 1 in Paris</p>
        </div>
      </section>
    </div>
  );
};

export default Aesthetic;
