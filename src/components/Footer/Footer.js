// Footer.js

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="column">
          <img src="https://storiesdesignstudio.com/wp-content/uploads/2023/01/stories-logo.png" alt="Logo" className="logo" />
          <p>
            Stories Design Studio is a luxury interior design and architectural
            design firm with deep-rooted expertise in home, residential, office,
            commercial space, retail, and hospitality projects.
          </p>
        </div>
        <div className="column">
          <h3>Quick Links</h3>
          <hr className="divider" />
          <div className="quick-links">
            <div className="sub-column">
              <ul>
                <li>Home</li>
                <li>Our Career</li>
                <li>Blog</li>
                <li>Privacy</li>
              </ul>
            </div>
            <div className="sub-column">
              <ul>
                <li>Team</li>
                <li>Media</li>
                <li>Contact Us</li>
                <li>Disclaimer</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="column">
          <h3>Contact Us</h3>
          <hr className="divider" />
          <p>
            Address: Unit # 104, Ground Floor, Shree Complex, 73, St. Johns Rd,
            Halasuru, Bengaluru, Karnataka 560042, India.
          </p>
          <hr className="divider" />
          <p>Phone: +91 9591367410</p>
          <hr className="divider" />
          <p>Email: hello@storiesdesignstudio.com</p>
        </div>
      </div>
      <div className="mini-footer">
        <div className="left">Developed by: Your Name</div>
        <div className="center">Copyright &copy; 2024</div>
        <div className="right">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
