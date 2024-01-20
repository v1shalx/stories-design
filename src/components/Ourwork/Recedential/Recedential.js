import React from 'react';
import './Recedential.css';

const Recedential = () => {
  return (
    <div className="recedential-container">
      <div className="recedentialleft-section">
        <h2>Residential Projects</h2>
        <div className="custom-divider"></div>
        <p>“I saw the angel in the marble and carved until I set him free” – Michelangelo</p>
        <button className="primary-btnrecedential">Know More</button>
      </div>
      <div className="recedentialright-section">
        <img src="https://storiesdesignstudio.com/wp-content/uploads/2023/02/RESIDENT.jpg" alt="Residential Project" />
      </div>
    </div>
  );
};

export default Recedential;
