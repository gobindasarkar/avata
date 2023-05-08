import ArtArea from "@/components/ArtArea";
import BlogArea from "@/components/BlogArea";
import BrowseHighLights from "@/components/BrowseHighLights";
import ElectronicsArea from "@/components/ElectronicsArea";
import FeaturedItems from "@/components/FeaturedItems";
import HeroBanner from "@/components/HeroBanner";
import HowWorks from "@/components/HowWorks";
import Layout from "@/components/Layout";
import RealEstate from "@/components/RealEstate";
import React from "react";

const Index = () => {
  return (
    <>
      <HeroBanner />
      <BrowseHighLights />
      <HowWorks />
      <FeaturedItems />
      <RealEstate />
      <ElectronicsArea />
      <ArtArea />
      <BlogArea />
    </>
  );
};

export default Index;
Index.Layout = Layout;
