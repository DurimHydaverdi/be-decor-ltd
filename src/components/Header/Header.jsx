// Header.js
import React from 'react';
import './Header.scss';
import logo from '../Assets/logo2.png'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <nav className="header-nav">
      <Link to="/"><a href="#home">Home</a></Link>
      <Link to="/projects"><a href="projects">Projects</a></Link>  
      <Link to="/services"><a href="services">Services</a></Link> 
      <Link to="/contact"><a href="contact">Contact</a></Link> 
      </nav>
    </header>
  );
}

export default Header;
