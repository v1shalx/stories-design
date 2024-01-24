import React from 'react';

const horizontalLineStyle = {
    backgroundColor: '#511527',
    color: 'white',
    textAlign: 'center',
   
    marginTop:'105px',
    fontSize:'30px'
};

const PageName = () => {
    return (
        <div style={horizontalLineStyle}>
           Career Page
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
