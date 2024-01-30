import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaChartBar,
  FaMapMarkedAlt,
  FaRoute,
  FaClipboardList,
  FaCog,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className='flex flex-col fixed h-screen bg-gray-800 p-4 w-64 space-y-4'>
      <Link
        to={"/dashboard"}
        className='flex items-center text-white p-2 space-x-2 hover:bg-gray-600 transition duration-300 ease-in-out'
      >
        <FaChartBar className='text-xl' />
        <span>Dashboard</span>
      </Link>
      <Link
        to={"/product"}
        className='flex items-center text-white p-2 space-x-2 hover:bg-gray-600 transition duration-300 ease-in-out'
      >
        <FaMapMarkedAlt className='text-xl' />
        <span>Products</span>
      </Link>
      <Link
        to={"/category"}
        className='flex items-center text-white p-2 space-x-2 hover:bg-gray-600 transition duration-300 ease-in-out'
      >
        <FaRoute className='text-xl' />
        <span>Category</span>
      </Link>
      <Link
        to={"/attributes"}
        className='flex items-center text-white p-2 space-x-2 hover:bg-gray-600 transition duration-300 ease-in-out'
      >
        <FaClipboardList className='text-xl' />
        <span>Attributes</span>
      </Link>
    </div>
  );
};

export default Sidebar;
