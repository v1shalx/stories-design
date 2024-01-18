// src/pages/Home.js
import React from 'react';


import WelcomeTo from '../../components/Home/Welcometo/Welcometo';
import WeOperate from '../../components/Home/Weoperate/Weoperate';
import AsInterior from '../../components/Home/Asinterior/Asinterior';

import Portfolio from '../../components/Home/Portfolio/Portfolio';
import NewsWriting from '../../components/Home/Newswriting/Newswriting';
import Carousel from '../../components/Home/Carousel/Carousel';
import Clientsay from '../../components/Home/Clientsay/Clientsay';
import ProductiveTalk from '../../components/Home/ProductiveTalk/ProductiveTalk';


const Home = () => {
  return (
    <div>
      <Carousel/>
    <WelcomeTo/>
    <WeOperate/>
    <AsInterior/>
    <Portfolio/>
<NewsWriting/>
<Clientsay/>
<ProductiveTalk/>

      
    </div>
  );
};

export default Home;
