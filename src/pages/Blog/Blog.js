// src/pages/Home.js
import React from 'react';
import BlogPage from '../../components/Blog/BlogPage/BlogPage';
import HorizontalLine from '../../components/Blog/HorizontalLine';
import PagePath from '../../components/PagePath'; // Import the PagePath component

import StickyEnquiryButton from '../../components/StickyEnquiryButton/StickyEnquiryButton';
import StickyIcons from '../../components/StickyIcons/StickyIcons';


const Blog = () => {
  return (
    
    <div>
     <StickyIcons />
      <StickyEnquiryButton />
   <HorizontalLine/>
   <PagePath path="Blog" /> 
    <BlogPage/>

      
    </div>
  );
};

export default Blog;


