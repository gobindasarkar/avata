import React from "react";
import SectionTitle from "./SectionTitle";
import CardItem from "./CardItem";
import itemThumb1 from "../public/featured-items-image-1.jpg";
import itemThumb2 from "../public/featured-items-image-2.jpg";
import itemThumb3 from "../public/featured-items-image-3.jpg";
import PrimaryBtn from "./PrimaryBtn";
const FeaturedItemsApi = [
  {
    id: 1,
    ItemThumb: itemThumb1,
    ItemName: "EFH IN IDYLLISCHER LAGE DIREKT AM FELD",
    ItemPostDate: "2023-05-31 12:00:00",
    ItemBidStartEndPrice: "$30,000.00 - $250,000.00",
    ItemBidPrice: "$0.00",
    ItemBidUser: 2,
    ItemUrl: "/",
  },
  {
    id: 2,
    ItemThumb: itemThumb2,
    ItemName: "EFH IN IDYLLISCHER LAGE DIREKT AM FELD",
    ItemPostDate: "2023-05-31 12:00:00",
    ItemBidStartEndPrice: "$30,000.00 - $250,000.00",
    ItemBidPrice: "$0.00",
    ItemBidUser: 2,
    ItemUrl: "/",
  },
  {
    id: 3,
    ItemThumb: itemThumb3,
    ItemName: "EFH IN IDYLLISCHER LAGE DIREKT AM FELD",
    ItemPostDate: "2023-05-31 12:00:00",
    ItemBidStartEndPrice: "$30,000.00 - $250,000.00",
    ItemBidPrice: "$0.00",
    ItemBidUser: 2,
    ItemUrl: "/",
  },
];
const FeaturedItems = () => {
  return (
    <div className="py-[60px] md:py-[100px] lg:py-[120px]">
      <div className="container mx-auto px-4">
        <SectionTitle titleText="Featured Items" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FeaturedItemsApi.slice(0, 3).map((curElm) => {
            return <CardItem key={curElm.id} cardData={curElm} />;
          })}
        </div>
        <div className="text-center mt-10">
          <PrimaryBtn btnText="View All" btnUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default FeaturedItems;
