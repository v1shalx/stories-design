// src/pages/Home.js
import React from 'react';
import Weturn from '../../components/AboutUs/Weturn/Weturn';
import Whatwedo from '../../components/AboutUs/Whatwedo/Whatwedo'
import Blacktray from '../../components/AboutUs/Blacktray/Blacktray'
import Letshave from '../../components/AboutUs/Letshave/Letshave';
import Yourspace from '../../components/AboutUs/Yourspace/Yourspace'

const AboutUs = () => {
  return (
    <div>
    <Yourspace/>
      <Weturn/>
      <Whatwedo/>
     <Blacktray/>
     <Letshave/>
    
      
    </div>
  );
};

export default AboutUs;
