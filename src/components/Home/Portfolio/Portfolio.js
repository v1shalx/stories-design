import React from 'react';
import './Portfolio.css';

const App = () => {
    return (
        <div className="portfolio-container">
            <h1 className="portfolio-title">Our Portfolio</h1>
            <hr className="portfolio-divider" />

           

            <div className="portfolio-box" id="residential-box">
                <div className="box-content">
                    <img src="https://storiesdesignstudio.com/wp-content/uploads/2023/04/df.jpg" alt="Residential Project" className="portfolio-image" id="residential-image" />
                    <div className="portfolio-info">
                        <p className="portfolio-category">Residential</p>
                        
                        <a href="/about-us/" className="primary-btn"><span>Know More  </span></a>
                    </div>
                </div>
            </div>

            <div className="portfolio-box" id="commercial-box">
                <div className="box-content">
                    <img src="https://storiesdesignstudio.com/wp-content/uploads/2023/04/commercial-01.jpg" alt="Commercial Project" className="portfolio-image" id="commercial-image" />
                    <div className="portfolio-info">
                        <p className="portfolio-category">Commercial</p>
                       
                        <a href="/about-us/" className="primary-btn"><span>Know More  </span></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
