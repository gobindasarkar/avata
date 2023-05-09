import React from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const Pagination = () => {
  return (
    <div className="flex justify-center items-center gap-x-3 mt-10">
      <button className="flex justify-center items-center rounded-full text-center w-8 h-8 text-sm font-medium bg-Pcolor/20 text-Tcolor transition-all hover:bg-Pcolor hover:text-white"><FaAngleDoubleLeft /></button>
      <ul className="inline-flex items-center gap-x-2 bg-white px-2 py-1 rounded-[30px]">
        <li>
          <button className="flex justify-center items-center rounded-full text-center w-8 h-8 text-sm font-medium bg-Pcolor/20 text-Tcolor transition-all hover:bg-Pcolor hover:text-white">1</button>
        </li>
        <li>
          <button className="flex justify-center items-center rounded-full text-center w-8 h-8 text-sm font-medium bg-Pcolor/20 text-Tcolor transition-all hover:bg-Pcolor hover:text-white">2</button>
        </li>
        <li>
          <button className="flex justify-center items-center rounded-full text-center w-8 h-8 text-sm font-medium bg-Pcolor/20 text-Tcolor transition-all hover:bg-Pcolor hover:text-white">3</button>
        </li>
        <li>
          <button className="flex justify-center items-center rounded-full text-center w-8 h-8 text-sm font-medium bg-Pcolor/20 text-Tcolor transition-all hover:bg-Pcolor hover:text-white">4</button>
        </li>
      </ul>
      <button className="flex justify-center items-center rounded-full text-center w-8 h-8 text-sm font-medium bg-Pcolor/20 text-Tcolor transition-all hover:bg-Pcolor hover:text-white"><FaAngleDoubleRight /></button>
    </div>
  );
};

export default Pagination;
