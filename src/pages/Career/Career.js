// src/pages/Home.js
import React from 'react';
import ContactForm from '../../components/Career/ContactForm/ContactForm';
import HorizontalLine from '../../components/Career/HorizontalLine';
import PagePath from '../../components/PagePath'; // Import the PagePath component

import StickyEnquiryButton from '../../components/StickyEnquiryButton/StickyEnquiryButton';
import StickyIcons from '../../components/StickyIcons/StickyIcons';


const Career = () => {
  return (
    <div>
    <StickyIcons />
      <StickyEnquiryButton />
    <HorizontalLine/>
    <PagePath path="Career" /> 
<ContactForm/>
      
    </div>
  );
};

export default Career;
