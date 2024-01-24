// src/pages/Home.js
import React from 'react';
import Callus from '../../components/ContactUs/Callus/Callus';
import PagePath from '../../components/PagePath'; // Import the PagePath component

import Map from '../../components/ContactUs/Map/Map';
import HorizontalLine from '../../components/ContactUs/HorizontalLine';
const ContactUs = () => {
  return (
    <div>
    <HorizontalLine/>
    <PagePath path="Contact Us" /> 
   <Callus/>
   <Map/>

   
    </div>
  );
};

export default ContactUs;
