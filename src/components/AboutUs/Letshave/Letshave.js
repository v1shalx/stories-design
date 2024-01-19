

// Letshave.js
import React from 'react';
import './Letshave.css';

const Letshave = () => {
  return (
    <div className="letshave-container">
      <div className="image-container">
        {/* Add your image here */}
        <img src="https://storiesdesignstudio.com/wp-content/uploads/2023/01/contact-0001.png" alt="Image" className="image" />
      </div>
      <div className="productivetalkright-box">
        <div className="productivetalktitle">Let's have a productive talk.</div>
        <div className="divider"></div>
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
    </div>
  );
};

export default Letshave;
