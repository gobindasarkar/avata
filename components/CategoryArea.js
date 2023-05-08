import React from "react";
import Slider from "react-slick";
import SingleCategoryItem from "./SingleCategoryItem";
import catagoryThumb1 from "../public/catarory-image-1.png";
import catagoryThumb2 from "../public/catarory-image-2.png";
import catagoryThumb3 from "../public/catarory-image-3.png";
import catagoryThumb4 from "../public/catarory-image-4.png";
const CategoryDataApi = [
  {
    id: 1,
    CategoryThumb: catagoryThumb1,
    CategoryTitle: "Art",
    Categoryurl: "/",
  },
  {
    id: 2,
    CategoryThumb: catagoryThumb2,
    CategoryTitle: "Electronics",
    Categoryurl: "/",
  },
  {
    id: 3,
    CategoryThumb: catagoryThumb3,
    CategoryTitle: "Phones",
    Categoryurl: "/",
  },
  {
    id: 4,
    CategoryThumb: catagoryThumb4,
    CategoryTitle: "Jewelry",
    Categoryurl: "/",
  },
  {
    id: 5,
    CategoryThumb: catagoryThumb1,
    CategoryTitle: "Sport items",
    Categoryurl: "/",
  },
  {
    id: 6,
    CategoryThumb: catagoryThumb2,
    CategoryTitle: "Real Estate",
    Categoryurl: "/",
  },
  {
    id: 7,
    CategoryThumb: catagoryThumb3,
    CategoryTitle: "Vehicle",
    Categoryurl: "/",
  }
];
const CategoryArea = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 414,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Slider {...settings}>
      {CategoryDataApi.map((curElm) => {
        const { id } = curElm;
        return <SingleCategoryItem key={id} CategoryData={curElm} />;
      })}
    </Slider>
  );
};

export default CategoryArea;
