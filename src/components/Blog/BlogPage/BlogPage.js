// BlogPage.js

import React from 'react';
import './BlogPage.css';
import  blogData from './blogData';
import recentPosts from './recentPosts';

const BlogPage = () => {
  

    return (
        <div className="blog-container">
          <div className="blog-column">
            {blogData.map(blog => (
              <div key={blog.id} className="blog-box">
                <img src={blog.image} alt="Blog Image" className="blog-image" />
                <div className="blog-details">
                  <h3>{blog.title}</h3>
                  <p>
                    <span className="author">
                      <a href={`#${blog.author}`} className="author-link">
                        {blog.author}
                      </a>
                    </span>
                    <span className="category">
                      <a href={`#${blog.category}`} className="category-link">
                        {blog.category}
                      </a>
                    </span>
                  </p>
                  <div className="custom-line"></div>
                  <p>{blog.content}</p>
                  <button className="primary-btn">Read More</button>
                </div>
              </div>
            ))}
          </div>
    
          <div className="search-column">
      <div className="search-form">
        <input type="search" className="search-field" placeholder="Search …" value="" name="s" />
        <input type="submit" className="search-submit" value="Search" />
      </div>
   
  <div className="recent-posts">
    <h2>RECENT POSTS</h2>
    <div className="custom-line"></div>
    <ul>
    {recentPosts.map((post, index) => (
            <React.Fragment key={index}>
              <li>{post}</li>
              {index < recentPosts.length - 1 && <div className="custom-line"></div>}
            </React.Fragment>
          ))}
    </ul>
  </div>
</div>

    </div>
  );
};

export default BlogPage;
