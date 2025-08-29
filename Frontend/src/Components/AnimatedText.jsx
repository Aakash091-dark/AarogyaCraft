import React from 'react';
import './AnimatedText.css';
import industryImage1 from '../assets/images/all1.jpg';
import industryImage2 from '../assets/images/all2.jpg';

const AnimatedText = () => {
  return (
    <div className="animated-text-container">
      {/* This image is a spacer to maintain container height */}
      <img src={industryImage1} alt="" className="spacer" />
      
      {/* These are the visible, animated images */}
      <img src={industryImage1} alt="Cross Industry Management" className="image-1" />
      <img src={industryImage2} alt="Cross Industry" className="image-2" />
      
      <div className="overlay"></div>
      <div className="animated-text">BUILD FUTURE WITH US</div>
    </div>
  );
};

export default AnimatedText;
