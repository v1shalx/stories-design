// ProductiveTalk.js

import React from 'react';
import './ProductiveTalk.css'; // Import the CSS file for styling

const ProductiveTalk = () => {
    return (
        <div className="productive-talk-container">
            {/* Left Box */}
            <div className="productivetalkleft-box">
                <div className="productivetalktitle">Let's have a productive talk.</div>
                <div className="customes-divider"></div>
                <div className="form-box">

                    <input type="text" id="name" className="input-box" placeholder='Name' />


                    <div class="input-with-icon">
                        <input type="email" id="email" className="input-box" placeholder="Email" />

                    </div>



                    <input type="tel" id="contact" className="input-box" placeholder='Contact Us' />


                    <input
                        type="text"
                        id="interested"
                        className="input-box"
                        placeholder='Hello, I am interested in'
                        style={{ width: '100%', padding: '20px' }}
                    />


<a href="/about-us/" className="primary-btn"><span>Send  </span></a>
                </div>
            </div>

            {/* Right Box */}
            <div className="productivetalkright-box">
                <div className="productivetalkrighttitle">Luxury Interior Designer In Bangalore</div>
                <p>Bangalore, often hailed as the Silicon Valley of India, isn’t just about its IT hubs and tech parks. Within its vibrant streets lies a world of luxury and sophistication, brought to life by the city’s top interior designers. And at the pinnacle of this world stands the name ‘Stories’.

                    Stories isn’t just another interior design company in Bangalore; it’s a hallmark of luxury and grandeur. Recognized as the best interior designers in Bangalore, they believe that every space, be it a home, an office, or a commercial establishment, has its narrative. Their approach to design goes beyond merely beautifying a space; it’s about weaving a tale—your tale.

                    Whether you’re giving a fresh look to your ancestral home, setting up a plush new apartment, or aiming to elevate the ambience of your office or commercial space, the Stories team ensures every nook reflects elegance, every hue narrates a story, and each space exudes comfort and functionality.

                    Not limited to just residential projects, Stories excels in transforming offices and commercial areas into spaces of creativity, productivity, and luxury. They understand that the right environment can boost productivity and leave lasting impressions.

                    In the vast canvas of interior design, Stories isn’t just shaping spaces; they’re curating legacies. For those who accept nothing but the best in residential or commercial design, Stories is the ultimate choice in Bangalore.</p>
            </div>
        </div>
    );
};

export default ProductiveTalk;
