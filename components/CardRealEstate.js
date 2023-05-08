import Image from "next/image";
import Link from "next/link";
import React from "react";
import BidIcon from "../public/curent-Bid-icon.svg";
import BidIconWhite from "../public/bid-icon-white.svg";
import PriceIcon from "../public/price-icon.svg";
import PrimaryBtn from "./PrimaryBtn";
const CardRealEstate = ({ cardData }) => {
  const { ItemThumb, ItemName, CurrentBid, TotalBid, ItemUrl } = cardData;
  return (
    <div className="bg-white rounded-[10px] overflow-hidden">
      <Image src={ItemThumb} alt="item thumbnail" />
      <div className="p-7 py-9">
        <h3 className="text-2xl lg:text-3xl font-semibold text-Tcolor transition-all hover:text-Pcolor">
          <Link href={ItemUrl}>{ItemName}</Link>
        </h3>
        <div className="flex justify-between my-6">
          <div className="flex gap-x-3">
            <Image src={BidIcon} alt="bid icon" />
            <div className="flex-1">
              <h4 className="text-base text-Tcolor capitalize">Current Bid</h4>
              <h3 className="text-xl font-medium text-Tcolor">{CurrentBid}</h3>
            </div>
          </div>
          <div className="flex gap-x-3">
            <Image src={PriceIcon} alt="price icon" />
            <div className="flex-1">
              <h4 className="text-base text-Tcolor capitalize">Total Bid</h4>
              <h3 className="text-xl font-medium text-Tcolor">{TotalBid} Bids</h3>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <PrimaryBtn btnText="Submit A Bid" btnUrl={ItemUrl} />
          <button className="inline-flex h-11 w-11 bg-Pcolor text-white rounded-[4px] text-base font-medium capitalize justify-center items-center transition-all hover:text-white hover:bg-Hcolor text-center"><Image src={BidIconWhite} alt="bid" /></button>
        </div>
      </div>
    </div>
  );
};

export default CardRealEstate;
