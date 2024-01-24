// src/pages/AboutUs/AboutUs.js
import React from 'react';
import Weturn from '../../components/AboutUs/Weturn/Weturn';
import Whatwedo from '../../components/AboutUs/Whatwedo/Whatwedo'
import Blacktray from '../../components/AboutUs/Blacktray/Blacktray'
import Letshave from '../../components/AboutUs/Letshave/Letshave';
import Yourspace from '../../components/AboutUs/Yourspace/Yourspace'
import HorizontalLine from '../../components/AboutUs/HorizontalLine';
import PagePath from '../../components/PagePath'; // Import the PagePath component
import StickyEnquiryButton from '../../components/StickyEnquiryButton/StickyEnquiryButton';
import StickyIcons from '../../components/StickyIcons/StickyIcons';


const AboutUs = () => {
  return (
    <div>
    <StickyIcons />
      <StickyEnquiryButton />
      <HorizontalLine/>
      <PagePath path="About Us" /> 
      <Yourspace/>
      {/* Add PagePath component after Yourspace */}
      <Weturn/>
      <Whatwedo/>
      <Blacktray/>
      <Letshave/>
    </div>
  );
};

export default AboutUs;



