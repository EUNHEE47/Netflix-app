import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";
import MovieListCard from "../components/MovieListCard";
import { Col, Row } from "react-bootstrap";

const MoviesList = () => {
  const dispatch = useDispatch();
  const { movieList } = useSelector((state) => state.movie);
  console.log(movieList);

  useEffect(() => {
    dispatch(movieAction.getMoviesList());
  }, []);

  return (
    <Row className="inner-movies-list">
      {movieList.results &&
        movieList.results.map((movie) => (
          <Col lg={6} className="movies-cards-wrap mb-3">
            <MovieListCard movie={movie} />
          </Col>
        ))}
    </Row>
  );
};

export default MoviesList;
