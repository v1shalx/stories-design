// StickyIcons.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons'; // Change import statement here
import './StickyIcons.css';

const StickyIcons = () => {
  return (
    <div className="sticky-icons-container">
      <div className="call-icon">
        <FontAwesomeIcon icon={faPhone} />
      </div>
      <div className="whatsapp-icon">
        <FontAwesomeIcon icon={faWhatsapp} />
      </div>
    
    </div>
  );
};

export default StickyIcons;
