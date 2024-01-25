import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-light fixed-top ${isMenuOpen ? 'active' : ''}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src="./images/sarchilogo.png"
            alt="Logo"
            width="300"
            height="80"
            className="d-inline-block align-top"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FontAwesomeIcon icon={faTimes} /> : <span className="navbar-toggler-icon"></span>}
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>

          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about-us" className="nav-link" onClick={closeMenu}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/our-work" className="nav-link" onClick={closeMenu}>
                Our Work
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/team" className="nav-link" onClick={closeMenu}>
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/career" className="nav-link" onClick={closeMenu}>
                Career
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/media" className="nav-link" onClick={closeMenu}>
                Media
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link" onClick={closeMenu}>
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact-us" className="nav-link" onClick={closeMenu}>
                Contact Us
              </Link>
            </li>
            {/* Add the rest of your menu items with onClick={closeMenu} */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
