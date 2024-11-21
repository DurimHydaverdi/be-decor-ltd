import React, { useState, useEffect } from 'react';
import './Header.scss';
import logo from '../Assets/logo2.png';
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`header-nav ${isOpen ? 'active' : ''}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
        <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
      </nav>
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}
    </header>
  );
}

export default Header;
