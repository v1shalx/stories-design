// Map.js
import React from 'react';
import './Map.css';

const Map = () => {
  return (
    <div className="map-container">
      <div className="left-section">
        <div>
          <h2>Let’s create your Story</h2>
          <p>
            Stories Design Studio is a niche interior designing firm based in Bangalore, as interior designers, we take pride in spending time to understand our clients, churning awe-inspiring designs and executing them with a keen eye for detail.
          </p>
        </div>
        <div className="form-box">
          <input type="text" id="name" className="input-box" placeholder="Name" />
          <div className="input-with-icon">
            <input type="email" id="email" className="input-box" placeholder="Email" />
          </div>
          <input type="tel" id="contact" className="input-box" placeholder="Contact Us" />
          <input
            type="text"
            id="interested"
            className="input-box"
            placeholder="Hello, I am interested in"
            style={{ width: '100%', padding: '20px' }}
          />
          <button className="button">Send</button>
        </div>
      </div>
      <div className="right-section">
        {/* Your Google Map component or embed code goes here */}
        {/* Make sure to replace the placeholder with your actual map */}
        <iframe
          title="Google Map"
          className="google-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.821493917602!2d77.61037417454676!3d12.983266414623424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16893715550d%3A0xe304bb35832d297e!2sStories%20Design%20Studio!5e0!3m2!1sen!2sin!4v1705912064071!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
