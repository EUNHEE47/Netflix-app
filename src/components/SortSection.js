import React, { useState } from "react";
import FilterDropDown from "../components/FilterDropDown";
import { IoCloseSharp } from "react-icons/io5";

const SortSection = () => {
  const [close, setClose] = useState(false);

  return (
    <div className={close ? "sort-section closed" : "sort-section"}>
      <div className="name">
        <h2>Sort</h2>
        <span>
          <IoCloseSharp onClick={() => setClose(!close)} />
        </span>
      </div>
      <div className="filter">
        <FilterDropDown></FilterDropDown>
      </div>
    </div>
  );
};

export default SortSection;
