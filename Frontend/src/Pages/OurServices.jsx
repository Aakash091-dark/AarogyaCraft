import React from 'react';
import './OurServices.css';

const OurServices = () => {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <p>
        <span> 
          {/*  */}
        At Aarogya, we empower businesses with tailored cloud solutions that simplify operations,
        boost efficiency, and drive innovation. 
        </span>
        <span>
        With a focus on flexibility and industry-specific needs,we offer two comprehensive service categories designed to meet diverse business requirements:
         </span>
      </p>
      <div className="CardS-container">
        <div className="card1">
          <h2>Custom Cloud Solutions</h2>
          <p>
            We understand that every business is unique, and so are its needs. Our Custom Cloud Solutions allow you to create a personalized service plan that aligns perfectly with your goals. Choose only the services you need, eliminating unnecessary costs and ensuring seamless integration into your existing workflows. From compute power to storage, databases, AI capabilities, and more, you’re in control of building your ideal cloud ecosystem.
          </p>
          <ul>
            <li>Tailored Development
            </li>
            <li>End-to-End Support
            </li>
            <li>Cost-Effective Solutions
            </li>
            <li>Scalable Solutions
            </li>
          </ul>
        </div>
        <div className="CARD">
          <h2>Prebuilt Industry Solutions</h2>
          <p>
            For businesses seeking a ready-to-deploy cloud platform, our Prebuilt Industry Solutions are tailored to specific sectors such as:
            Each solution is meticulously designed to address the unique challenges of the industry.
            For example, our Healthcare Solution provides an AI-powered, automated hospital management system that covers every aspect of healthcare operations—streamlining patient management, optimizing resource allocation, enhancing compliance, and implementing features that ensure no critical requirement is overlooked.
          </p>
          <ul>
            <li>Technology</li>
            <li>Education</li>
            <li>Healthcare</li>
            <li>Banking & Finance</li>
          </ul>
             {/*  */}
        </div>
      </div>
       
        <p className='last_para'>
          <span>Experience the future of cloud services with Aarogya
          </span> where innovation meets flexibility.
        </p>
    </div>
  );
};

export default OurServices;
