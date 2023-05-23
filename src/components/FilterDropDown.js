/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";

const FilterDropDown = () => {
  const dispatch = useDispatch();
  const [option, setOption] = useState("");

  useEffect(() => {
    dispatch(movieAction.getSortByMovie(option));
  }, [option]);

  return (
    <div className="filterDropDown">
      <p>Sort Results By</p>
      <Form.Select onChange={(e) => setOption(e.target.value)}>
        <option value="none">Sort By</option>
        <option value="popularity.asc">Popularity(asc)</option>
        <option value="popularity.desc">Popularity(Desc)</option>
        <option value="primary_release_date.asc">Release Day(Asc)</option>
        <option value="primary_release_date.desc">Release Day(Desc)</option>
        <option value="vote_average.asc">Vote(Asc)</option>
        <option value="vote_average.desc">Vote(Desc)</option>
      </Form.Select>
    </div>
  );
};

export default FilterDropDown;
