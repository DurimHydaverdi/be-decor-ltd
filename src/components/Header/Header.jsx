import React, { useState, useEffect } from 'react';
import './Header.scss';
import logo from '../Assets/logo2.png';
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Prevent scrolling when the menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Clean up class when component unmounts
    return () => document.body.classList.remove('no-scroll');
  }, [isOpen]);

  return (
    <header className="header">
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





// import React from 'react';
// import './Header.scss';
// import logo from '../Assets/logo2.png'
// import { Link } from 'react-router-dom';

// function Header() {
//   return (
//     <header className="header">
//       <div className="header-logo">
//         <Link to="/">
//           <img src={logo} alt="Logo" />
//         </Link>
//       </div>
//       <nav className="header-nav">
//       <Link to="/">Home</Link>
//       <Link to="/projects">Projects</Link>  
//       <Link to="/services">Services</Link> 
//       <Link to="/contact">Contact</Link> 
//       </nav>
//     </header>
//   );
// }

// export default Header;
