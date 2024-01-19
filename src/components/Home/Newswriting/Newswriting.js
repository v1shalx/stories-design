import React from 'react';
import './Newswriting.css';

const NewsWriting = () => {
  return (
    <div className="news-container">
      <div className="news-header">
        <div className="left-side">
          <h1>News & Writing</h1>
        </div>
        <div className="right-side">
        <a href="/about-us/" className="primary-btnallnews"><span>All News  </span></a>
        </div>
      </div>
      <hr className="divider" />
      <div className="news-row">
        <div className="news-box">
          <img className="news-image" src="https://storiesdesignstudio.com/wp-content/uploads/2023/03/4-10-430x220.webp" alt="News 3" />
          <h2 className="news-title">Elevate Your Dining Experience: Unique and Elegant Decoration Ideas for Your Dining Room Interior</h2>
          <p className="news-description">In the symphony of our homes, the dining room plays a distinct and resonant note—a space where laughter intertwines with the clinking of utensils,...</p>
          <a href="/about-us/" className="primary-btn"><span>Know More  </span></a>
        </div>
        <div className="news-box">
          <img className="news-image" src="https://storiesdesignstudio.com/wp-content/uploads/2023/03/14-3-430x220.webp" alt="News 1" />
          <h2 className="news-title">What is Classic Interior Design Style and How to Get it Right?</h2>
          <p className="news-description">In the ever-evolving landscape of interior design, the allure of classic style remains an enduring beacon of timeless elegance. Steeped in tradition,...</p>
          <a href="/about-us/" className="primary-btn"><span>Know More  </span></a>
        </div>
        <div className="news-box">
          <img className="news-image" src="https://storiesdesignstudio.com/wp-content/uploads/2023/03/11-6-430x220.webp" alt="News 2" />
          <h2 className="news-title">Exploring the Most Recent Home Furniture Trends</h2>
          <p className="news-description">In the beautiful tapestry of our lives, where memories are stitched into the very fabric of our existence, furniture serves as the silent narrator,...</p>
          <a href="/about-us/" className="primary-btn"><span>Know More  </span></a>
        </div>
      </div>
    </div>
  );
};

export default NewsWriting;
