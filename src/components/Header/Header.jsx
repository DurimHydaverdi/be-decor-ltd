// Header.js
import React from 'react';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">My Logo</div>
      <nav className="header__nav">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
