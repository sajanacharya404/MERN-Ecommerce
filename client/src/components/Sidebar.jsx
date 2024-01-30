import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <Link to='/dashboard'>Dashboard</Link>
      <Link to='/product'>Product</Link>
      <Link to='/catogory'>Category</Link>
      <Link to='/subcategory'>Sub Category</Link>
      <Link to='/attributes'>Attributes</Link>
    </div>
  );
};

export default Sidebar;
