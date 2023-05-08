import Breadcrumb from "@/components/Breadcrumb";
import Layout from "@/components/Layout";
import React from "react";

const Auctions = () => {
  return (
    <>
      <Breadcrumb pageTitle="Auctions" />
      <div className="py-[60px] md:py-[100px] lg:py-[120px] bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            iusto aperiam repudiandae soluta, molestiae eius commodi hic
            perspiciatis atque enim omnis officia magnam dolores pariatur
            placeat nobis illo aut maxime.
          </p>
        </div>
      </div>
    </>
  );
};

export default Auctions;
Auctions.Layout = Layout;
