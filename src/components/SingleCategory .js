/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const SingleCategory = ({ category }) => {
  const dispatch = useDispatch();
  const [genres, setGenres] = useState("");

  const getCategory = (item) => {
    setGenres(item.id);
  };

  useEffect(() => {
    dispatch({ type: "GET_MOVIES_CATEGORY", payload: { genres } });
  }, [genres]);

  return <li onClick={() => getCategory(category)}>{category.name}</li>;
};

export default SingleCategory;
