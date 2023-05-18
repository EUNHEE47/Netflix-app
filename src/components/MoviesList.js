import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";
import SingleMovie from "./SingleMovie";

const MoviesList = () => {
  const dispatch = useDispatch();
  const { movieList } = useSelector((state) => state.movie);

  console.log("movieList", movieList);

  useEffect(() => {
    dispatch(movieAction.getMoviesList());
  }, []);

  return (
    <div className="movies-list">
      {movieList.results &&
        movieList.results.map((item) => <SingleMovie item={item} />)}
    </div>
  );
};

export default MoviesList;
