import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import SingleCategory from "./SingleCategory ";
import { AiOutlineMenu } from "react-icons/ai";

const CategorySection = () => {
  const [close, setClose] = useState(false);
  const { genreList } = useSelector((state) => state.movie);

  return (
    <div className={close ? "sorting-section closed" : "sorting-section"}>
      <div className="name">
        <h2>Filter</h2>
        <p onClick={() => setClose(!close)}>
          {close ? <IoCloseSharp /> : <AiOutlineMenu />}
        </p>
      </div>
      <ul className="sort-type singleCategory">
        {genreList?.map((category) => (
          <SingleCategory category={category} />
        ))}
      </ul>
    </div>
  );
};

export default CategorySection;
