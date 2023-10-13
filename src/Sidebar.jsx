import React from "react";
import {
  FaUser,
  FaChartBar,
  FaUsers,
  FaDollarSign,
  FaBullhorn,
  FaTachometerAlt,
  FaShoppingCart,
  FaArrowRight,
} from "react-icons/fa";
import { MdExpandMore } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="fixed z-10 w-64 h-full text-white bg-indigo-950">
      <div className="px-4 py-5">
        <h1 className="flex items-center text-2xl font-semibold">
          <FaTachometerAlt className="mr-2" /> Dashboard
        </h1>
      </div>
      <ul className="mt-6 space-y-4">
        <li className="flex items-center justify-between px-4 py-2 mx-5 bg-indigo-900 rounded-md">
          <span className="flex items-center">
            <FaChartBar className="mr-2" />
            Dashboard
          </span>
        </li>
        <li className="flex items-center justify-between px-4 py-2 mx-5">
          <span className="flex items-center">
            <FaShoppingCart className="mr-2" />
            Product
          </span>
          <FaArrowRight /> {/* Use the down arrow icon here */}
        </li>
        <li className="flex items-center justify-between px-4 py-2 mx-5">
          <span className="flex items-center">
            <FaUsers className="mr-2" />
            Customers
          </span>
          <FaArrowRight /> {/* Use the down arrow icon here */}
        </li>
        <li className="flex items-center justify-between px-4 py-2 mx-5">
          <span className="flex items-center">
            <FaDollarSign className="mr-2" />
            Income
          </span>
          <FaArrowRight /> {/* Use the down arrow icon here */}
        </li>
        <li className="flex items-center justify-between px-4 py-2 mx-5">
          <span className="flex items-center">
            <FaBullhorn className="mr-2" />
            Promote
          </span>
          <FaArrowRight /> {/* Use the down arrow icon here */}
        </li>
        <li className="flex items-center justify-between px-4 py-2 mx-5">
          <span className="flex items-center">
            <FaUser className="mr-2" />
            Help
          </span>
          <FaArrowRight /> {/* Use the down arrow icon here */}
        </li>
      </ul>
      <div className="absolute bottom-5 left-4">
        <div className="flex items-center px-4 py-2 mx-2 bg-indigo-900 rounded-md">
          <div className="w-10 h-10 overflow-hidden bg-gray-500 rounded-full">
            <img
              src="https://avatars.githubusercontent.com/u/137998335?v=4"
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="ml-2">
            <p className="text-sm">Shubham Kumar</p>
            <p className="text-xs">Front End Developer</p>
          </div>
          <MdExpandMore className="ml-2" /> {/* Use the down arrow icon here */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
