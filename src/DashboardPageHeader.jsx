import React from "react";
import { FaSearch } from "react-icons/fa";

const DashboardPageHeader = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between mx-4 my-4">
        <div className="text-xl font-semibold">Hello Shubham👋,</div>
        <div className="relative flex items-center">
          <FaSearch className="absolute text-gray-600 left-3 top-3" />
          <input
            type="text"
            placeholder="Search"
            className="w-full py-2 pl-10 pr-3 border rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardPageHeader;
