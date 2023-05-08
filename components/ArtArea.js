import React from "react";
import SectionTitle from "./SectionTitle";
import itemThumb1 from "../public/featured-items-image-1.jpg";
import itemThumb2 from "../public/featured-items-image-2.jpg";
import itemThumb3 from "../public/featured-items-image-3.jpg";
import CardItemSlider from "./CardItemSlider";
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
  {
    id: 4,
    ItemThumb: itemThumb3,
    ItemName: "EFH IN IDYLLISCHER LAGE DIREKT AM FELD",
    ItemPostDate: "2023-05-31 12:00:00",
    ItemBidStartEndPrice: "$30,000.00 - $250,000.00",
    ItemBidPrice: "$0.00",
    ItemBidUser: 2,
    ItemUrl: "/",
  },
];
const ArtArea = () => {
  return (
    <div className="pb-[60px] md:pb-[100px] lg:pb-[120px]">
      <div className="container mx-auto px-4">
        <SectionTitle titleText="Art" />
        <CardItemSlider CardItemSliderData={FeaturedItemsApi} />
      </div>
    </div>
  );
};

export default ArtArea;
