import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import workThumb1 from "../public/work-image-1.jpg";
import workThumb2 from "../public/work-image-2.jpg";
import workThumb3 from "../public/work-image-3.jpg";
const  workDataApi = [
  {
    id: 1,
    workThumb: workThumb1,
    workTitle: "Sign Up",
    workSubTitle: "No Credit Card Required",
  },
  {
    id: 2,
    workThumb: workThumb2,
    workTitle: "Bid",
    workSubTitle: "Bidding is free Only pay if you win",
  },
  {
    id: 3,
    workThumb: workThumb3,
    workTitle: "Win",
    workSubTitle: "Fun - Excitement - Great deals",
  },
];
const HowWorks = () => {
  return (
    <div className="py-[60px] md:py-[100px] lg:py-[120px] bg-[#FAFAFA]">
      <div className="container mx-auto px-4">
        <SectionTitle titleText="How It Works" />
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {workDataApi.map((curElm) => {
            const { id, workThumb, workTitle, workSubTitle } = curElm;
            return (
              <div
                key={id}
                className="rounded-[10px] border-2 border-Pcolor overflow-hidden"
              >
                <Image
                  className="w-full h-[300px] object-cover"
                  src={workThumb}
                  alt="work image"
                />
                <div className="p-6 text-center">
                  <h3 className="text-3xl font-semibold text-Tcolor mb-1.5">
                    {workTitle}
                  </h3>
                  <p className="text-base font-medium text-Bcolor">
                    {workSubTitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
