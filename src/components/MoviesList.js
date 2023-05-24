/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";
import MovieListCard from "../components/MovieListCard";
import { Col, Row } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import Pagination from "react-js-pagination";

const MoviesList = () => {
  const dispatch = useDispatch();
  const { movieList, keyword, option, genres, loading } = useSelector(
    (state) => state.movie
  );
  const [currentPage, setCurrentPage] = useState(1);
  let totalItem = movieList.total_results;
  // console.log("movieList?", movieList);

  useEffect(() => {
    dispatch(movieAction.getMoviesList(currentPage, keyword, option, genres));
  }, [currentPage, keyword, option, genres]);

  if (loading) {
    return (
      <ClipLoader
        color="red"
        loading={loading}
        size={150}
        className="loading"
      />
    );
  }

  return (
    <Row className="inner-movies-list">
      {movieList.results?.map((movie, index) => (
        <Col lg={6} className="movies-cards-wrap mb-3" key={index}>
          <MovieListCard movie={movie} />
        </Col>
      ))}
      <Pagination
        activePage={currentPage}
        totalItemsCount={totalItem}
        pageRangeDisplayed={10}
        itemsCountPerPage={20}
        hideDisabled={true}
        onChange={(e) => setCurrentPage(e)}
      />
    </Row>
  );
};

export default MoviesList;
