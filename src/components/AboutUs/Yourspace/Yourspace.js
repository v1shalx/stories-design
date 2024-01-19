// YourSpace.js

import React from 'react';
import './Yourspace.css'; // Import the styles

const YourSpace = () => {
  return (
    <div className="container">
      <div className="leftSection">
        <img
          src="https://storiesdesignstudio.com/wp-content/uploads/2023/01/img-002.jpg"
          alt="Left Section"
          className="fullImage"
        />
      </div>
      <div className="rightSection">
        <div className="rightTop">
          <h2>Your Space</h2>
          <h3>Your Story</h3>
          <p>
            Seamlessly blending elements, juxtaposing styles and incorporating
            a client's unique taste has defined our signature.
          </p>
          <p>
            Every space is unique and so is the person using these spaces. As
            interior designers, we are inspired by art, nature, and science to
            integrate these three disciplines in unique ways to build
            humanistic, functional, and creative spaces.
          </p>
          <p>
            Our eye for meticulous details helps us to understand client needs,
            formulate seamless design strategies and fashion flawless spaces for
            those who matter the most to us – you.
          </p>
          <p>
            Because when it comes to the unspoken story of design, most spaces
            have a lot to say, provided they get the chance and as interior
            designers, we facilitate the same.
          </p>
        </div>
        <div className="rightBottom">
          <img
            src="https://storiesdesignstudio.com/wp-content/uploads/2023/01/img-01.jpg"
            alt="Right Bottom Section"
            className="fullImage"
          />
        </div>
      </div>
    </div>
  );
};

export default YourSpace;
