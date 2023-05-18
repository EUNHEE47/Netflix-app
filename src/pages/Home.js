import React, { useEffect } from "react";
import { movieAction } from "../redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import ClipLoader from "react-spinners/ClipLoader";
import { Container } from "react-bootstrap";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upcomingMovies, loading } =
    useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  // loading - true(데이터 도착 전) ? loading spinner
  // false ( 데이터 도착 후 , 에러발생 ) ? data
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
    <div>
      {popularMovies.results && <Banner movie={popularMovies.results[0]} />}
      <Container className="home-container">
        <h2>Popular Movie</h2>
        <MovieSlide movies={popularMovies} />
        <h2>Top Rated Movie</h2>
        <MovieSlide movies={topRatedMovies} />
        <h2>Upcoming Movie</h2>
        <MovieSlide movies={upcomingMovies} />
      </Container>
    </div>
  );
};

export default Home;
