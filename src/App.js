// App.js
import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';

import Footer from './components/Footer/Footer';

import AboutUs from './pages/AboutUs/AboutUs';
import Career from './pages/Career/Career';
import Ourwork from './pages/Ourwork/Ourwork';
import Team from './pages/Team/Team';
import Blog from './pages/Blog/Blog';
import Media from './pages/Media';
import ContactUs from './pages/ContactUs/ContactUs';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/career" element={<Career />} />
        <Route path="/our-work" element={<Ourwork />} />
        <Route path="/team" element={<Team />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/media" element={<Media />} />
        <Route path="/Contact-us" element={<ContactUs />} />








      </Routes>
      <Footer/>
     
    </Router>
  );
};

export default App;