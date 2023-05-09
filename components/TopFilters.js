import React from "react";
import { FaSearch } from "react-icons/fa";

const TopFilters = () => {
  return (
    <div className="flex flex-wrap justify-between gap-6 items-center mb-10">
      <div className="flex items-center gap-x-6">
        <div className="flex items-center flex-wrap gap-x-3">
          <span className="text-lg font-medium text-Tcolor">Sort By :</span>
          <select
            className="max-w-[250px] h-[46px] bg-Pcolor  rounded-[4px] px-3 w-[120px] text-sm font-medium font-Jost text-white border border-Pcolor focus:outline-none focus:ring-0 focus:ring-transparent "
            name="sortBy"
            id="sortBy"
          >
            <option>All</option>
            <option>Name</option>
            <option>Date</option>
          </select>
        </div>
        <div className="flex items-center gap-x-3">
          <span className="text-lg font-medium text-Tcolor">Show :</span>
          <select
            className="max-w-[250px] h-[46px] bg-Pcolor  rounded-[4px] px-3 w-[120px] text-sm font-medium font-Jost text-white border border-Pcolor focus:outline-none focus:ring-0 focus:ring-transparent "
            name="sortBy"
            id="sortBy"
          >
            <option>9</option>
            <option>12</option>
            <option>15</option>
          </select>
        </div>
      </div>
      <div>
        <form action="#">
          <div className="relative">
            <input
              className="max-w-[250px] h-[46px] rounded-[4px] px-4 pr-8 py-3 text-base font-Jost text-Tcolor border border-Pcolor focus:outline-none focus:ring-0 focus:ring-transparent"
              type="text"
              name="search"
              id="search"
              placeholder="Search Items"
            />
            <span className="absolute right-3 top-2/4 -translate-y-2/4 text-sm text-Tcolor"><FaSearch /></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TopFilters;
