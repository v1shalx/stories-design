// Weturn.js
import React from 'react';
import './Weturn.css';

const Weturn = () => {
  return (
    <div className="weturn-container">
      <div className="weturn-title">
        <h1>We turn spaces into art, imagination into design, and your memories into stories.</h1>
        <hr />
      </div>

      <div className="weturn-para">
        <p>
          We are dreamers, visualizers, interior designers, architects, planners and builders whose focus is to bring your space to life, with its very own personal story.
          That’s because we believe there is always a story waiting to be told, in every space that we work with.
        </p>

        <p>
          We are inspired by art, nature and science to integrate these three disciplines in unique ways to build humanistic, functional and creative spaces – be it residential, office, or commercial.
        </p>

        <p>
          Our eye for meticulous details helps us to understand client needs, formulate seamless design strategies and fashion flawless spaces for those who matter the most to us – you.
        </p>

        <p>
          Because when it comes to the unspoken story of design, most spaces have a lot to say, provided they get the chance.
        </p>
      </div>

      <div className="weturn-boxes">
        {/* Box 1 */}
        <div className="weturn-box">
          <div className="weturn-box-inner">
            <div className="weturn-box-front">
              <img src="path_to_your_image" alt="Design Image" />
            </div>
            <div className="weturn-box-back">
              <p>We Design</p>
              <p>We apply creative, aesthetically attractive and technical solutions within a structure to achieve the desired environment.</p>
            </div>
          </div>
        </div>

        {/* Repeat similar structure for Box 2 and Box 3 */}
        {/* ... */}
      </div>
    </div>
  );
};

export default Weturn;
