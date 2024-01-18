// src/pages/Home.js
import React from 'react';


import WelcomeTo from '../../components/Home/Welcometo/Welcometo';
import WeOperate from '../../components/Home/Weoperate/Weoperate';
import AsInterior from '../../components/Home/Asinterior/Asinterior';

import Portfolio from '../../components/Home/Portfolio/Portfolio';


const Home = () => {
  return (
    <div>
      
    <WelcomeTo/>
    <WeOperate/>
    <AsInterior/>
    <Portfolio/>
      
    </div>
  );
};

export default Home;
