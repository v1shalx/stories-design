import React from 'react';

const horizontalLineStyle = {
    backgroundColor: '#511527',
    color: 'white',
    textAlign: 'center',
    padding: '10px 0',
    marginTop:'100px',
    fontSize:'35px'
};

const PageName = () => {
    return (
        <div style={horizontalLineStyle}>
           Contact Us
        </div>
    );
};

const HorizontalLine = () => {
    return (
        <div>
          
           <PageName/>
           
        </div>
    );
};

export default HorizontalLine;
