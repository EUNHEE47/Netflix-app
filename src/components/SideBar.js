import React from "react";
import SortSection from "../components/SortSection";
import CategorySection from "./CategorySection";

const SideBar = () => {
  return (
    <div className="sideBar-wrap">
      <SortSection />
      <CategorySection />
    </div>
  );
};

export default SideBar;
