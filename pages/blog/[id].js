import Breadcrumb from "@/components/Breadcrumb";
import Layout from "@/components/Layout";
import Image from "next/image";
import React from "react";
import calendarIcon from "../../public/calendar-icon.svg";
import PostUserIcon from "../../public/post-user-icon.svg";
import postThumb1 from "../../public/post-image-1.jpg";
const SingleBlog = () => {
  return (
    <>
      <Breadcrumb pageTitle="Single Blog" />
      <div className="py-[60px] md:py-[100px] lg:py-[120px] bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-[10px] overflow-hidden mx-auto lg:w-8/12">
            <Image src={postThumb1} alt="post Thumbnail" />
            <div className="p-7">
              <div className="flex justify-between mb-3 text-sm font-medium text-Tcolor">
                <div className="flex items-center gap-x-2">
                  <Image src={calendarIcon} alt="calendarIcon" />
                  <span>May 31, 2023</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <Image src={PostUserIcon} alt="user" />
                  <span>By Admin</span>
                </div>
              </div>
              <h3 className="mb-6 text-xl lg:text-2xl font-medium text-Tcolor transition-all hover:text-Pcolor">
                EFH IN IDYLLISCHER LAGE DIREKT AM FELD
              </h3>
              <p className="mb-3 last:mb-0">
                The spacious hall opens up to you. The HWR is on the right, one
                door further is the living and dining area with a broken tiled
                stove. The kitchen straight ahead dates from the construction
                period. Furthermore, there is a shower room, bedroom, storage
                room and a laundry room with a separate entrance on the ground
                floor. You can also reach the spacious garage via the laundry
                room. In the attic you will find a large hallway, which is ideal
                as an office, a bedroom with prepared access to the flat roof,
                another room and a small toilet. The west side of the house is
                equipped with shutters. The old night storage heating is no
                longer up to date and must be replaced when you move in.
              </p>
              <p className="mb-3 last:mb-0">
                which was expanded in 1975 with an extension. Furthermore,
                extensive modernization work was carried out in the course of
                this. You can let your creativity run wild on approx. 113 m² of
                living space and redesign the house according to your individual
                ideas. When you step into the entrance,
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
SingleBlog.Layout = Layout;
