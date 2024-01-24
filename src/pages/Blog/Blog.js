// src/pages/Home.js
import React from 'react';
import BlogPage from '../../components/Blog/BlogPage/BlogPage';
import HorizontalLine from '../../components/Blog/HorizontalLine';
import PagePath from '../../components/PagePath'; // Import the PagePath component




const Blog = () => {
  return (
    
    <div>
   <HorizontalLine/>
   <PagePath path="Blog" /> 
    <BlogPage/>

      
    </div>
  );
};

export default Blog;
