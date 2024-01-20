// Team.js

import React from 'react';
import Revathi from '../../components/Team/Revathi/Revathi';
import Teamcard from '../../components/Team/Teamcard/Teamcard';

import './Team.css'
const Team = () => {
  const textStyle = {
    textAlign: 'center',
    color: 'brown',
    fontSize: '20px',
    paddingTop: '120px', // Add padding top here\
    width:'100%'
    
    
  };

  return (
    <div className="team-container">
      <div className='team-heading' style={textStyle}>
        “If everyone is moving forward together, then success takes care of itself.” – Henry Ford
      </div>
      <div className="revathi-container">
        <Revathi />
       <Teamcard/>
      </div>
    </div>
  );
};

export default Team;
