import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

// Modules
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";

// Local files
import "./Industries.css";
import techImage from "../assets/images/technology.png";
import EduImage from "../assets/images/education.png";
import healthImage from "../assets/images/healthcare.png";
import BankingImage from "../assets/images/banking.png";
import FinanceImage from "../assets/images/finance.png";

const Industries = () => {
  const industriesData = [
    { title: "Technology", imageUrl: techImage },
    { title: "Healthcare", imageUrl: healthImage },
    { title: "Banking", imageUrl: BankingImage },
    { title: "Education", imageUrl: EduImage },
    { title: "Finance", imageUrl: FinanceImage },
  ];
  
  return (
    <div className="industries-section">
      <div className="container">
        <h2 className="section-heading">Serving a Wide Range of Industries</h2>
        <div className="carousel-container">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={false}
            slidesPerView={"auto"}
            speed={800}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            onReachEnd={(swiper) => {
              setTimeout(() => {
                swiper.slideTo(0, 800); 
              }, 1500);
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            modules={[Autoplay, EffectCoverflow]}
            className="industries-swiper"
          >
            {industriesData.map((industry, index) => (
              <SwiperSlide key={index} className="industry-slide">
                <div className="industry-card">
                  <div className="card-image">
                    <img
                      src={industry.imageUrl}
                      alt={industry.title}
                      className="industry-logo"
                    />
                  </div>
                  <h3 className="card-title">{industry.title}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Industries;
