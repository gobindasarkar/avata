import React from "react";
import Slider from "react-slick";
import CardItem from "./CardItem";
const CardItemSlider = ({CardItemSliderData}) => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Slider {...settings} className="card-items-slider">
      {CardItemSliderData.map((curElm) => {
        return <CardItem key={curElm.id} cardData={curElm} />;
      })}
    </Slider>
  );
};

export default CardItemSlider;
