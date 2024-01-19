// src/pages/Home.js
import React from 'react';
import Weturn from '../../components/AboutUs/Weturn/Weturn';
import Whatwedo from '../../components/AboutUs/Whatwedo/Whatwedo'
import Blacktray from '../../components/AboutUs/Blacktray/Blacktray'
import Letshave from '../../components/AboutUs/Letshave/Letshave';

const AboutUs = () => {
  return (
    <div>
      <Weturn/>
      <Whatwedo/>
     <Blacktray/>
     <Letshave/>
    
      
    </div>
  );
};

export default AboutUs;
