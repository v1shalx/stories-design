// src/pages/Home.js
import React from 'react';
import ContactForm from '../../components/Career/ContactForm/ContactForm';
import HorizontalLine from '../../components/Career/HorizontalLine';
import PagePath from '../../components/PagePath'; // Import the PagePath component



const Career = () => {
  return (
    <div>
    <HorizontalLine/>
    <PagePath path="Career" /> 
<ContactForm/>
      
    </div>
  );
};

export default Career;
