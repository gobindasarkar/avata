import React from "react";
import SectionTitle from "./SectionTitle";
import PrimaryBtn from "./PrimaryBtn";
import CardRealEstate from "./CardRealEstate";
import CardItem from "./CardItem";
import itemThumb1 from "../public/real-state-image1.jpg";
import itemThumb2 from "../public/real-state-image2.jpg";
const FeaturedItemsApi = [
  {
    id: 1,
    ItemThumb: itemThumb1,
    ItemName: "EFH IN IDYLLISCHER LAGE DIREKT AM FELD",
    CurrentBid: "$0.00",
    TotalBid: 2,
    ItemUrl: "/",
  },
  {
    id: 2,
    ItemThumb: itemThumb2,
    ItemName: "EFH IN IDYLLISCHER LAGE DIREKT AM FELD",
    CurrentBid: "$0.00",
    TotalBid: 2,
    ItemUrl: "/",
  }
];

const RealEstate = () => {
  return (
    <div className="py-[60px] md:py-[100px] lg:py-[120px] bg-[#FAFAFA]">
      <div className="container mx-auto px-4">
        <SectionTitle titleText="Real Estate" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FeaturedItemsApi.slice(0, 2).map((curElm) => {
            return <CardRealEstate key={curElm.id} cardData={curElm} />;
          })}
        </div>
        <div className="text-center mt-10">
          <PrimaryBtn btnText="View All" btnUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default RealEstate;
