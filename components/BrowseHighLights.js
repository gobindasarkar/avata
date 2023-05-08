import React from "react";
import SectionTitle from "./SectionTitle";
import CategoryArea from "./CategoryArea";

const BrowseHighLights = () => {
  return (
    <div className="py-[60px] md:py-[100px] lg:py-[120px]">
      <div className="container mx-auto px-4">
        <SectionTitle titleText="Browse the highlights" />
        <CategoryArea />
      </div>
    </div>
  );
};

export default BrowseHighLights;
