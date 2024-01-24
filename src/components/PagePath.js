// components/PagePath.js
import React from 'react';

const PagePath = ({ path }) => {
  return (
    <div className="page-path">
      <h5>Stories Design Studio</h5> <span className="separator"></span> {path}
      <style jsx>{`
        .page-path {
          display: flex;
          align-items: center;
          background-color: white;
          color: black;
        
          font-size:13px;
          margin-left:80px;
          padding:5px;
        }

        .page-path h5 {
          color: #999999;
          margin-right: 10px; /* Adjust margin as needed */
          font-size:13px;
          margin-top:10px;
        }

        .separator::before {
          content: '>';
          margin: 0 10px; /* Adjust spacing as needed */
          color: #333; /* Color for the separator */
        }
      `}</style>
    </div>
  );
};

export default PagePath;
