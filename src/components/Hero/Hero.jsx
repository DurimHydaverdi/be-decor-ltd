import React from 'react';
import './Hero.scss';
import HeroImage from '../Assets/5.jpg'; // replace with your actual image path
// import { FaPlay } from 'react-icons/fa';

function Hero() {
  return (
    <section className="hero">
      <img src={HeroImage} alt="Hero Background" className="hero-image" />

      <div className="content">
        <h1 className="title">Contemporary</h1>
        <div className="card main-card">
          <p>
            Crafting spaces that harmonize modern aesthetics with timeless elegance, our contemporary
            interior designs breathe life into every room, redefining the essence of chic living.
          </p>
          <button className="button">View More →</button>
        </div>
        <div className="circle">
          <span>Modern</span>
          <span>Minimalist</span>
          <span>Design</span>
          <span>Renovating</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
