import React from "react";
import SortSection from "../components/SortSection";
import FilterSection from "../components/FilterSection";

const SideBar = () => {
  return (
    <div className="sideBar-wrap">
      <SortSection />
      <FilterSection />
    </div>
  );
};

export default SideBar;
