import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-light fixed-top ${isMenuOpen ? 'active' : ''}`}>
    <div className="container-fluid">
    
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="https://storiesdesignstudio.com/wp-content/uploads/2023/01/stories-logo.png"
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
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>

          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about-us" className="nav-link" onClick={toggleMenu}>
                About Us
              </Link>
            </li>
            <li  className="nav-item">
              <Link to="/our-work" className="nav-link" href="#">
                Our Work
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/team" className="nav-link" href="#">
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/career" className="nav-link" href="#">
                Career
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/media" className="nav-link" href="#">
                Media
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link" href="#">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link  to="/contact-us" className="nav-link" href="#">
                Contact Us
              </Link>
            </li>
            {/* Add the rest of your menu items with onClick={toggleMenu} */}
          </ul>
        </div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;


