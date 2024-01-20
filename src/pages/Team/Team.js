// Team.js

import React from 'react';
import Revathi from '../../components/Team/Revathi/Revathi';

const Team = () => {
  const textStyle = {
    textAlign: 'center',
    color: 'brown',
    fontSize: '20px',
    paddingTop: '100px', // Add padding top here
  };

  return (
    <div className="team-container">
      <div style={textStyle}>
        “If everyone is moving forward together, then success takes care of itself.” – Henry Ford
      </div>
      <div className="revathi-container">
        <Revathi />
      </div>
    </div>
  );
};

export default Team;
