import React from 'react';
import './Callus.css';

const Callus = () => {
  return (
    <div className="callus-container">
      <div className="box">
        <i className="fas fa-phone-alt icon"></i>
        <h4>+91 9591367410</h4>
        <p>Call us any time between 10:00 am to 8:00 pm (Mon-Sat)</p>
      </div>

      <div className="box">
        <i className="far fa-envelope icon"></i>
        <h4>hello@storiesdesignstudio.com</h4>
        <p>Email us any time, we reply within 24 hours.</p>
      </div>

      <div className="box">
        <i className="fas fa-home icon"></i>
        <h4>Unit # 104, Shree Complex, 73, St. Johns Rd, Halasuru, Bengaluru.</h4>
      </div>
    </div>
  );
};

export default Callus;
