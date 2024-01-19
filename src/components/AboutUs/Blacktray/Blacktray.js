// BlackTray.js
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Blacktray.css';

const Blacktray = () => {
  return (
    <div className="black-tray-container">
      <div className="blacktrayleft-side">
        <div className="header">
          <h2>The Black Tray</h2>
          <div className="divider-line"></div>
        </div>
        <p>
          We, as interior designers, believe in exploring and experimenting with a
          variety of materials and textures to inspire us with new ideas. Similar
          materials can be paired with novel ones to create completely new space
          design and multi-sensory experiences for our clients.
        </p>
        <p>
          We have been collecting and growing The Black Tray – our material library
          – ever since our inception. During our interactive meeting with clients,
          we take pride in presenting Black Trays full of a personalized material
          palette curated especially in line with the vision discussed. This allows
          for an informed decision and provides them a direct visual into the look,
          feel, and texture of their space story that we have crafted especially for them.
        </p>
        <p>
          Our Black Tray includes materials curated from the best brands across the
          world including India, Germany, Italy, Spain, Austria, Russia, Indonesia,
          Afghanistan, Japan, and Portugal.
        </p>
      </div>
      <div className="blacktrayright-side">
        <div className="custom-carousel-container">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block custom-image"
                src="https://storiesdesignstudio.com/wp-content/uploads/2023/01/img-2-1.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                {/* You can add captions or any other content here */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block custom-image"
                src="https://storiesdesignstudio.com/wp-content/uploads/2023/01/img-1-1.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                {/* You can add captions or any other content here */}
              </Carousel.Caption>
            </Carousel.Item>
            {/* Add more Carousel.Item as needed */}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Blacktray;
