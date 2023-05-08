import React from "react";
import HeroBannerBg from "../public/hero-banner-bg.jpg";
import PrimaryBtn from "./PrimaryBtn";
const HeroBanner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${HeroBannerBg.src})`,
      }}
      className="bg-cover bg-center bg-no-repeat relative z-10 before:absolute before:w-full before:h-full before:content-[''] before:bg-black/70 before:left-0 before:top-0 before:-z-10 pb-[100px] lg:pb-[160px] pt-[160px] lg:pt-[280px]"
    >
      <div className="container mx-auto px-4">
        <div className="text-center w-full lg:w-6/12 mx-auto">
            <h4 className="text-xl lg:text-2xl font-medium text-white capitalize mb-4">Next Generation Auction</h4>
            <h1 className="text-4xl lg:text-6xl font-bold capitalize text-white mb-4">Find Your Next Deal!</h1>
            <p className="text-base lg:text-lg font-medium text-white mb-10">Online Auction is where everyone goes to shop, sell,and give, while discovering variety and affordability.</p>
            <PrimaryBtn btnText="Get Started" btnUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
