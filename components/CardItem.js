import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import TimeIcon from "../public/time-icon.svg";
import BIdIcon from "../public/Bid-icon.svg";
import UserIcon from "../public/user-icon.svg";
const CardItem = ({cardData}) => {
    const {ItemName ,ItemThumb,ItemPostDate,ItemBidStartEndPrice,ItemBidPrice,ItemBidUser,ItemUrl} = cardData;
  return (
    <div className="rounded-[10px] overflow-hidden">
      <div className="relative z-10 before:absolute before:content-[''] before:w-full before:h-full before:left-0 before:top-0 before:bg-black/20 before:-z-0">
        <Image
          className="w-full h-[270px] object-cover"
          src={ItemThumb}
          alt="item thumb"
        />
        <button className="absolute right-5 top-5 text-white text-lg">
          <FaStar />
        </button>
      </div>
      <div className="px-7 py-9 bg-Pcolor">
        <h3 className="text-xl lg:text-2xl font-medium text-white">
          <Link href={ItemUrl}>{ItemName}</Link>
        </h3>
        <div className="bg-white rounded-md flex items-center h-12 p-3 gap-x-2 lg:gap-x-3 text-base lg:text-xl font-medium text-Pcolor my-6">
          <Image src={TimeIcon} alt="time" /> 
          <span>{ItemPostDate}</span>
        </div>
        <div>
          <h4 className="text-base text-white capitalize mb-1">Starting Bid:</h4>
          <h3 className="text-base lg:text-xl font-medium text-white">{ItemBidStartEndPrice}</h3>
        </div>
        <div className="flex justify-between items-center text-base lg:text-xl font-medium text-white mt-6">
          <div className="flex items-center gap-x-2">
            <Image src={BIdIcon} alt="bid" />
            <span>{ItemBidPrice}</span>
          </div>
          <div className="flex items-center gap-x-2">
            <Image src={UserIcon} alt="user" />
            <span>{ItemBidUser}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
