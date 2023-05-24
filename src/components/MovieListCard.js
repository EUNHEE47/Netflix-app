/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MovieListCard = ({ movie }) => {
  const navigate = useNavigate();
  const { genreList } = useSelector((state) => state.movie);
  // console.log("movie", movie);
  // console.log("genreList", genreList);

  return (
    <div
      className="movies-card"
      onClick={() => navigate(`/movies/${movie.id}`)}
    >
      <div
        className="blur_back bright_back"
        style={{
          backgroundImage:
            "url(" +
            `https://image.tmdb.org/t/p/original//${movie.backdrop_path}` +
            ")",
        }}
      ></div>
      <div className="info-section">
        <div className="list-card-header">
          <div className="header-content">
            {movie.poster_path === null ? (
              <p>No Img</p>
            ) : (
              <img
                src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
              />
            )}

            <div className="header-title">
              <p>{movie.title}</p>
              <p>{movie.release_date}</p>
            </div>
          </div>
          <ul>
            {movie.genre_ids.map((gen, index) => (
              <li key={index}>
                {genreList.find((item) => item.id === gen).name}
              </li>
            ))}
          </ul>
        </div>
        <div className="movies-info">
          <p>{movie.overview.substring(0, 200) + "..."}</p>
          <span>⭐{movie.vote_average}</span>
          {movie.adult ? <span>18+</span> : <span>Under 18</span>}
        </div>
      </div>
    </div>
  );
};

export default MovieListCard;
