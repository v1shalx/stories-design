// src/pages/Home.js
import React from 'react';
import Recedential from '../../components/Ourwork/Recedential/Recedential';
import Commertial from '../../components/Ourwork/Commertial/Commertial';
import HorizontalLine from '../../components/Ourwork/HorizontalLine';

import PagePath from '../../components/PagePath'; // Import the PagePath component




const Ourwork = () => {
  return (
    <div>
    <HorizontalLine/>
    <PagePath path="Our Work" /> 
     <Recedential/>
     <Commertial/>

      
    </div>
  );
};

export default Ourwork;
