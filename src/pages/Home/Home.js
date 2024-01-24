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

import StickyEnquiryButton from '../../components/StickyEnquiryButton/StickyEnquiryButton';
import StickyIcons from '../../components/StickyIcons/StickyIcons';
const Home = () => {
  return (
    <div>
    <StickyIcons />
      <StickyEnquiryButton />
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



