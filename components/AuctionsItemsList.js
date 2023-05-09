import React from "react";
import CardItem from "./CardItem";
import itemThumb1 from "../public/featured-items-image-1.jpg";
import itemThumb2 from "../public/featured-items-image-2.jpg";
import itemThumb3 from "../public/featured-items-image-3.jpg";
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
    ItemBidUser: 0,
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
    ItemThumb: itemThumb1,
    ItemName: "EFH IN IDYLLISCHER LAGE DIREKT AM FELD",
    ItemPostDate: "2023-05-31 12:00:00",
    ItemBidStartEndPrice: "$30,000.00 - $250,000.00",
    ItemBidPrice: "$0.00",
    ItemBidUser: 1,
    ItemUrl: "/",
  },
  {
    id: 5,
    ItemThumb: itemThumb2,
    ItemName: "EFH IN IDYLLISCHER LAGE DIREKT AM FELD",
    ItemPostDate: "2023-05-31 12:00:00",
    ItemBidStartEndPrice: "$30,000.00 - $250,000.00",
    ItemBidPrice: "$0.00",
    ItemBidUser: 2,
    ItemUrl: "/",
  },
  {
    id: 6,
    ItemThumb: itemThumb3,
    ItemName: "EFH IN IDYLLISCHER LAGE DIREKT AM FELD",
    ItemPostDate: "2023-05-31 12:00:00",
    ItemBidStartEndPrice: "$30,000.00 - $250,000.00",
    ItemBidPrice: "$0.00",
    ItemBidUser: 2,
    ItemUrl: "/",
  },
  {
    id: 7,
    ItemThumb: itemThumb1,
    ItemName: "EFH IN IDYLLISCHER LAGE DIREKT AM FELD",
    ItemPostDate: "2023-05-31 12:00:00",
    ItemBidStartEndPrice: "$30,000.00 - $250,000.00",
    ItemBidPrice: "$0.00",
    ItemBidUser: 3,
    ItemUrl: "/",
  },
  {
    id: 8,
    ItemThumb: itemThumb2,
    ItemName: "EFH IN IDYLLISCHER LAGE DIREKT AM FELD",
    ItemPostDate: "2023-05-31 12:00:00",
    ItemBidStartEndPrice: "$30,000.00 - $250,000.00",
    ItemBidPrice: "$0.00",
    ItemBidUser: 2,
    ItemUrl: "/",
  },
  {
    id: 9,
    ItemThumb: itemThumb3,
    ItemName: "EFH IN IDYLLISCHER LAGE DIREKT AM FELD",
    ItemPostDate: "2023-05-31 12:00:00",
    ItemBidStartEndPrice: "$30,000.00 - $250,000.00",
    ItemBidPrice: "$0.00",
    ItemBidUser: 5,
    ItemUrl: "/",
  },
];
const AuctionsItemsList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-6">
      {FeaturedItemsApi.map((curElm) => {
        return <CardItem key={curElm.id} cardData={curElm} />;
      })}
    </div>
  );
};

export default AuctionsItemsList;
