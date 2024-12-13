
import React from "react";
import Card from "./Card";
import "./Industries.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import techImage from '../assets/images/technology.png';
import EduImage from '../assets/images/education.png';
import healthImage from '../assets/images/healthcare.png';
import BankingImage from '../assets/images/banking.png';
import FinanceImage from '../assets/images/finance.png';




const Industries = () => {
    const cardsData = [
 
        { title: "Technology", imageUrl: techImage },
        { title: "HealthCare", imageUrl: healthImage },
        { title: "Banking", imageUrl: BankingImage },
        { title: "Education", imageUrl: EduImage },
        { title: "Finance", imageUrl: FinanceImage },

        

    ];


//  this is the settings for the slider whuse the react-slick library 

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="card-container">
            <h1 className="container-heading">Discover Our Exceptional Solutions For Every Industry.</h1>
            <div className="carousel-wrapper">
                <Slider {...settings}>
                    {cardsData.map((card, index) => (
                        <div key={index} className="card">
                            <h2 className="card-title">{card.title}</h2>
                            <img src={card.imageUrl} alt={card.title} className="industry-image" />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Industries;
