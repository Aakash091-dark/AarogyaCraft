
import React from 'react';
import Slider from 'react-slick';
import './Industries.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import techImage from '../assets/images/technology.png';
import EduImage from '../assets/images/education.png';
import healthImage from '../assets/images/healthcare.png';
import BankingImage from '../assets/images/banking.png';
import FinanceImage from '../assets/images/finance.png';

const Industries = () => {
  const industriesData = [
    { title: 'Technology', imageUrl: techImage },
    { title: 'Healthcare', imageUrl: healthImage },
    { title: 'Banking', imageUrl: BankingImage },
    { title: 'Education', imageUrl: EduImage },
    { title: 'Finance', imageUrl: FinanceImage },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="industries-section">
      <div className="container">
        <h2 className="section-heading">Serving a Wide Range of Industries</h2>
        <div className="carousel-container">
          <Slider {...settings}>
            {industriesData.map((industry, index) => (
              <div key={index} className="industry-card">
                <div className="card-image">
                  <img
                    src={industry.imageUrl}
                    alt={industry.title}
                    className="industry-logo"
                  />
                </div>
                <h3 className="card-title">{industry.title}</h3>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Industries;
