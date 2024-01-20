// Team.js

import React from 'react';
import './Teamcard.css';
import teamData from './TeamData';

const Teamcard = ({ name, role, description, imageSrc }) => {
  return (
    <div className="team-card">
      <div className="card-container">
        <div className="card-img-container">
          <div className="vertical-text">{role}</div>
          <div className="card-hover-text">
            <p>{description}</p>
          </div>
          <img src={imageSrc} alt={`${name} - ${role}`} className="card-img" />
        </div>
      </div>
      <div className="card-info">
        <div className="name">{name}</div>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <div className="team-container">
      {teamData.map((member, index) => (
        <Teamcard key={index} {...member} />
      ))}
    </div>
  );
};

export default Team;
