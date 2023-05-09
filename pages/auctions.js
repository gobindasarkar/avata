import AuctionsItemsList from "@/components/AuctionsItemsList";
import TopFilters from "@/components/TopFilters";
import Breadcrumb from "@/components/Breadcrumb";
import Layout from "@/components/Layout";
import Pagination from "@/components/Pagination";
import React from "react";
import SidebarFilters from "@/components/SidebarFilters";

const Auctions = () => {
  return (
    <>
      <Breadcrumb pageTitle="Auctions" />
      <div className="py-[60px] md:py-[100px] lg:py-[120px] bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 gap-6">
            <div className="col-span-3">
              <TopFilters />
              <AuctionsItemsList />
              <Pagination />
            </div>
            <div>
              <SidebarFilters />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auctions;
Auctions.Layout = Layout;
