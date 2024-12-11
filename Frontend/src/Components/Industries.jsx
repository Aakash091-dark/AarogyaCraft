import React from "react";
import Card from "./Card";
import "./Industries.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Industries = () => {
    const cardsData = [
        { title: "Industry 1", description: "Description for Industry 1" },
        { title: "Industry 2", description: "Description for Industry 2" },
        { title: "Industry 3", description: "Description for Industry 3" },
        { title: "Industry 4", description: "Description for Industry 4" },
        { title: "Industry 5", description: "Description for Industry 5" },
    ];

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
            <h1 className="container-heading">Industries</h1>
            <div className="carousel-wrapper">
            <Slider {...settings}>
                {cardsData.map((card, index) => (
                    <Card key={index} title={card.title} description={card.description} />
                ))}
            </Slider>
            </div>
        </div>
    );
};

export default Industries;