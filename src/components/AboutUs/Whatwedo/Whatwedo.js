// Whatwedo.js

import React from 'react';
import './Whatwedo.css';

const WhatWeDo = () => {
  return (
    <div className="whatwedo-container">
      <h2 className="title">What We Do</h2>

      <div className="box-container">
        <Box
          title="Interior Design Consultation"
          miniTitle="Transforming Spaces, Sharing Stories"
          description="Transforming Spaces, Sharing Stories. With our expertise, we transform your spaces into dream spaces. During our consultation, we take the time to understand your unique preferences, lifestyle, and requirements, ensuring that every detail reflects your individuality. Every space has a unique story; we ensure to reflect these stories in our designs."
        />

        <Box
          title="Space Planning and Layout Design"
          miniTitle="Designing Spaces, Crafting Stories."
          description=" Our innovative space planning and layout design services are tailor-made to bring your vision to life. From residential to commercial spaces, we meticulously analyze your needs, harnessing the potential of every inch. With a keen eye for functionality, aesthetics, and flow, we seamlessly blend design and function. Trust us to shape environments that captivate, inspire, and make lasting impressions."
        />

<Box
          title="Interior Design Consultation"
          miniTitle="Transforming Spaces, Sharing Stories"
          description="With our expertise, we transform your spaces into dream spaces. During our consultation, we take the time to understand your unique preferences, lifestyle, and requirements, ensuring that every detail reflects your individuality. Every space has a unique story; we ensure to reflect these stories in our designs."
        />

        <Box
          title="Material and Finishes Selection"
          miniTitle="Our expertise goes beyond aesthetics;"
          description="  we believe that the essence of creating a harmonious and functional environment lies in selecting the right materials. Tailored to your specific preferences, our curated selection enhances the overall design, elevating your interiors to unparalleled levels of sophistication."
        />

        <Box
          title="Lighting Design"
          miniTitle="Illuminating Stories Through Light."
          description=" Home illusion formulates the extensive guide to interior decoration. We analyze the lighting requirements of every space and execute lighting ideas that reflect efficiency and room aesthetics. With the diverse range of options and trends, we bright up your spaces."
        />

        <Box
          title="Color Consultations"
          miniTitle="We Paint Your Stories."
          description=" Our color selection process brings your vision to reality with the color schemes that compliment your space. We consider every element and factor of the space into consideration to optimize the color choices. Our expert designers will work closely with you to assess your preferences, existing decor, and desired mood for each room."
        />

        <Box
          title="Project Management"
          miniTitle="Weaving Design Stories Into Every Space."
          description=" We ensure the seamless execution of your interior design projects with comprehensive project management. From conception to completion, we take charge of every aspect while ensuring seamless coordination. You are always kept informed and involved throughout the journey, resulting in a beautifully crafted space that exceeds your expectations."
        />
      </div>
    </div>
  );
};

const Box = ({ title, miniTitle, description }) => {
    return (
      <div className="box">
        <h3>{title}</h3>
        <p className="mini-title">{miniTitle}</p>
        <div className="line"></div>
        <p>{description}</p>
      </div>
    );
  };
  

export default WhatWeDo;
