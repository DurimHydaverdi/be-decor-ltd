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

// Scroll to the top of the page
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

function Collection() {
  const collectionItems = [
    { title: 'Painting', image: mondrian, projectId: 1 },
    { title: 'A/C', image: nirnia, projectId: 2 },
    { title: 'Plumbing', image: artex, projectId: 3 },
    { title: 'Electricity', image: brera, projectId: 4 },
    { title: 'Carpentry', image: aleapro, projectId: 5 },
    { title: 'Cleaning', image: alea, projectId: 6 },
  ];

  return (
    <section className="collection">
      <div className="collection-header">
        <h2>Explore Our Proudly Collection</h2>
        <div className="header-right">
          <p>
            Poliform will showcase its vision of contemporary architecture, interior design trends, and innovative living at Salone del Mobile.Milano 2024.
          </p>
          <Link to="/projects" onClick={scrollToTop}>
            <button className="collection-button">
              View More <FaArrowRight />
            </button>
          </Link>
        </div>
      </div>
      <div className="collection-grid">
        {collectionItems.map((item, index) => (
          <div key={index} className="collection-item">
            <Link to={`/projects?id=${item.projectId}`} onClick={scrollToTop}>
              <img src={item.image} alt={item.title} className="collection-image" />
              <div className="collection-overlay">
                <span>{item.title}</span>
                <FaArrowRight className="arrow" />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Collection;
