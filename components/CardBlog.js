import Image from "next/image";
import Link from "next/link";
import React from "react";
import calendarIcon from '../public/calendar-icon.svg'
import PostUserIcon from '../public/post-user-icon.svg'
import PrimaryBtn from "./PrimaryBtn";

const CardBlog = ({ CardBlogData }) => {
  const { PostThumb, PostTitle, PosttDate, PosttAdmin, PostUrl } = CardBlogData;
  return (
    <div className="bg-white rounded-[10px] overflow-hidden">
      <Link href={PostUrl} className="relative z-10 before:absolute before:content-[''] before:w-full before:h-full before:left-0 before:top-0 before:bg-black/20 before:-z-0">
        <Image src={PostThumb} alt="post Thumbnail" />
      </Link>
      <div className="p-7">
        <div className="flex justify-between mb-3 text-sm font-medium text-Tcolor">
          <div className="flex items-center gap-x-2">
            <Image src={calendarIcon} alt="calendarIcon" />
            <span>{PosttDate}</span>
          </div>
          <div className="flex items-center gap-x-2">
            <Image src={PostUserIcon} alt="user" />
            <span>By {PosttAdmin}</span>
          </div>
        </div>
        <h3 className="mb-6 text-xl lg:text-2xl font-medium text-Tcolor transition-all hover:text-Pcolor"><Link href={PostUrl}>{PostTitle}</Link></h3>
        <PrimaryBtn btnText="Learn More" btnUrl={PostUrl} />
      </div>
    </div>
  );
};

export default CardBlog;
