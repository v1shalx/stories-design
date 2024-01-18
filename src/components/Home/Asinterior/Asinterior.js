import React from 'react';
import './Asinterior.css';

const AsInterior = () => {
    return (
        <div className="asinterior-container">
            <div className="asinteriorleft-side">
                <div className='left-title'>As interior designers, we turn spaces into art, imagination into design, and your memories into Stories</div>
                <h5>UNIQUE PERSPECTIVE</h5>
            </div>
            <div className="asinteriorright-side">
                <div className="asinteriorright-side-content">
                    <p>We are dreamers, visualizers, interior designers, and planners whose focus is to bring your space to life, with its very own personal story. That’s because we believe there is always a story waiting to be told, in every space that we work with.</p>
                    </div>
        <a href="/about-us/" className="primary-btnknowmore"><span>Know More  </span></a>
      </div>
        </div>
    );
};

export default AsInterior;
