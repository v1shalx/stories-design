import React from 'react';
import './Welcometo.css';

const Welcometo = () => {
  return (
    <div className='welcometo-container'>
      <div className='welcometo-left'>
        <span className="headingtitle">Welcome to Stories Design Studio</span>
        <div className="text-content">
          <div className='title'>Every great design begins with an even greater story.</div>
        </div>
        <div className="divider"></div>
        <div className="para-content">
          <p>Stories Design Studio is a luxury interior design firm based out of Bangalore, with a diverse portfolio of projects from residential to commercial, hospitality, clinic, farmhouse, retail outlets, art direction, and set production of an Indo Australian movie and even a treehouse.</p>
        </div>
        <a href="/about-us/" className="primary-btn"><span>Know More  </span></a>
      </div>
      <div className="image-content">
          <img
            width="663"
            height="800"
            src="https://storiesdesignstudio.com/wp-content/uploads/2023/01/about-stories2.jpg"
            className="full-attachment"
            alt=""
            loading="lazy"
          />
        </div>

      
     
      </div>
   
  );
};

export default Welcometo;
