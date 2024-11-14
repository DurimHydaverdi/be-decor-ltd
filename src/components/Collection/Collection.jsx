import React from 'react';
import './Collection.scss';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import mondrian from '../Assets/8.webp';
import nirnia from '../Assets/3.webp';
import artex from '../Assets/4.webp';
import brera from '../Assets/5.webp';
import aleapro from '../Assets/6.webp';
import alea from '../Assets/7.webp';

function Collection() {
  const collectionItems = [
    { title: 'Mondrian', image: mondrian },
    { title: 'Nirnia', image: nirnia },
    { title: 'Artex', image: artex },
    { title: 'Brera', image: brera },
    { title: 'Alea Pro', image: aleapro },
    { title: 'Nirnia', image: alea },
  ];

  return (
    <section className="collection">
      <div className="collection-header">
        <h2>Explore Our Proudly Collection</h2>
        <div className="header-right">
        <Link to="/services"><button className="collection-button">View More <FaArrowRight /></button></Link>
            <p>
            Poliform will showcase its vision of contemporary architecture, interior design trends, and innovative living at Salone del Mobile.Milano 2024.
            </p>
        </div>
        </div>
      <div className="collection-grid">
        {collectionItems.map((item, index) => (
          <div key={index} className="collection-item">
            <img src={item.image} alt={item.title} className="collection-image" />
            <div className="collection-overlay">
              <span>{item.title}</span>
              <FaArrowRight className="arrow"/>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Collection;
