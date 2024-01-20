import React from 'react';
import './Commertial.css';

const Commertial = () => {
  return (
    <div className="commertial-container">
      <div className="commertialright-section">
        <img src="https://storiesdesignstudio.com/wp-content/uploads/2023/02/COMMERCIAL1.jpg" alt="Commercial Project" />
      </div>
      <div className="commertialleft-section">
        <h2>Commercial Projects</h2>
        <div className="custom-divider"></div>
        <p>“I saw the angel in the marble and carved until I set him free” – Michelangelo</p>
        <button className="primary-btnrecedential">
          <span>Know More</span>
        </button>
      </div>
    </div>
  );
};

export default Commertial;
