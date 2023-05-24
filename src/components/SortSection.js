import React, { useState } from "react";
import FilterDropDown from "../components/FilterDropDown";
import { IoCloseSharp } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";

const SortSection = () => {
  const [close, setClose] = useState(false);

  return (
    <div className={close ? "sorting-section closed" : "sorting-section"}>
      <div className="name">
        <h2>Sort</h2>
        <p onClick={() => setClose(!close)}>
          {close ? <IoCloseSharp /> : <AiOutlineMenu />}
        </p>
      </div>
      <div className="sort-type">
        <FilterDropDown></FilterDropDown>
      </div>
    </div>
  );
};

export default SortSection;
