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
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>  
      <Link to="/services">Services</Link> 
      <Link to="/contact">Contact</Link> 
      </nav>
    </header>
  );
}

export default Header;
