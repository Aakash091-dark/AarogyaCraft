// import React from "react";
// import "./Hero.css"; // Importing the CSS file

// const Hero = () => {
//   return (
//     <div className="hero-container">
//       {/* Left Side */}
//       <div className="hero-left">
//         <h1 className="hero-heading">
//           Custom Solutions to Streamline Your Business
//         </h1>
//         <h2 className="head">
//           <span className="span span1">Simplify</span>
//           <span className="span span2">Optimize</span>
//           <span className="span span3">Transform</span>
//         </h2>
//         <p className="hero-description">
//           Discover innovative cloud-based management systems tailored for
//           various industries . Streamline your operations and enhance
//           productivity with our custmizable and pre-built solutions.
//         </p>
//         {/* <div className="hero-buttons">
//                     <a href="#" className="btn btn-one">Get started for free</a>
//                     <a href="#" className="btn btn-two">Contact sales</a>
//                 </div> */}
//       </div>

//       {/* Right Side */}
//       <div className="hero-right">
//         <video
//           className="hero-video"
//           src="https://www.w3schools.com/html/mov_bbb.mp4"
//           autoPlay
//           loop
//           muted
//           controls
//         />
//       </div>
//     </div>
//   );
// };

// export default Hero;









import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./Hero.css"; // Importing the CSS file
import aniVideo from '../assets/Video/ani.mp4';

const Hero = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    // Initialize Typed.js
    const options = {
      strings: [
        "<span class='simplify'>Simplify</span>",  // Red-Orange color
        "<span class='optimize'>Optimize</span>",  // Light Blue color
        "<span class='transform'>Transform</span>" // Green color
      ], // Text strings to type
      typeSpeed: 50, // Typing speed in milliseconds
      backSpeed: 30, // Backspacing speed
      backDelay: 1500, // Delay before backspacing
      loop: true, // Loop the animation
      contentType: 'html' // Allows HTML inside strings for color styling
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      // Destroy instance on component unmount to prevent memory leaks
      typed.destroy();
    };
  }, []);

  return (
    <div className="hero-container">
      {/* Left Side */}
      <div className="hero-left">
        <h1 className="hero-heading">
          Custom Solutions to Streamline Your Business
        </h1>
        <h2 className="head">
        <div className="kaif">
            <span ref={typedElement}></span> {/* The typed text will appear here */}
        </div>
        </h2>
        <p className="hero-description"><b>
        AarogyaCraft offers intuitive, cloud-based management systems tailored for various industries. From customizable solutions to pre-built modules, we simplify operations, optimize processes, and transform productivity—empowering businesses to save time, reduce costs, and achieve growth seamlessly.</b>
        </p>
      </div>

      {/* Right Side */}
      <div className="hero-right">
      <video
          className="hero-video"
          src={aniVideo}
          autoPlay
          loop
          muted
          controls
        />
      </div>
    </div>
  );
};

export default Hero;
