// App.js
import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';

import Footer from './components/Footer/Footer';

import AboutUs from './pages/AboutUs/AboutUs';
import Career from './pages/Career/Career';
import Ourwork from './pages/Ourwork/Ourwork';


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




      </Routes>
      <Footer/>
     
    </Router>
  );
};

export default App;