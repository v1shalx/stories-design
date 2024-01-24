// Team.js

import React from 'react';
import Revathi from '../../components/Team/Revathi/Revathi';
import Teamcard from '../../components/Team/Teamcard/Teamcard';
import PagePath from '../../components/PagePath'; // Import the PagePath component

import './Team.css'
import HorizontalLine from '../../components/Team/HorizontalLine';
const Team = () => {
  const textStyle = {
    textAlign: 'center',
    color: '#511527',
    fontSize: '20px',
   
    width:'100%'
    
    
  };

  return (
    <div>
    
    <div>
    
    <HorizontalLine/>
    <PagePath path="Team" /> 
    
    <div className="team-container">
      <div className='team-heading' style={textStyle}>
        “If everyone is moving forward together, then success takes care of itself.” – Henry Ford
      </div>
      
      
      <div className="revathi-container">
        <Revathi />
       
      </div>
      <Teamcard/>
      
    </div>
    </div>
    </div>
  );
};

export default Team;
