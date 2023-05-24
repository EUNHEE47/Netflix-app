import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import SingleCategory from "./SingleCategory ";

const CategorySection = () => {
  const [close, setClose] = useState(false);
  const { genreList } = useSelector((state) => state.movie);

  return (
    <div className={close ? "sort-section closed" : "sort-section"}>
      <div className="name">
        <h2>Filter</h2>
        <span>
          <IoCloseSharp onClick={() => setClose(!close)} />
        </span>
      </div>
      <ul className="">
        {genreList?.map((category) => (
          <SingleCategory category={category} />
        ))}
      </ul>
    </div>
  );
};

export default CategorySection;
