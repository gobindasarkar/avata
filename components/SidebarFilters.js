import React from "react";
import CategoriesWidget from "./CategoriesWidget";
import EndingWithinWidget from "./EndingWithinWidget";
import FilterPriceWidget from "./FilterPriceWidget";

const SidebarFilters = () => {
  return (
    <div className="space-y-8">
      <CategoriesWidget />
      <FilterPriceWidget />
      <EndingWithinWidget />
    </div>
  );
};

export default SidebarFilters;
