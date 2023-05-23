import React from "react";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ item }) => {
  const { genreList } = useSelector((state) => state.movie);
  const navigate = useNavigate();

  return (
    <div
      className="movie-card"
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/${item.poster_path}` +
          ")",
      }}
      onClick={() => navigate(`movies/${item.id}`)}
    >
      <div className="overlay">
        <h5>{item.title}</h5>

        <ul>
          {item.genre_ids.map((id, index) => (
            <li key={index}>
              <Badge bg="danger">
                {genreList.find((item) => item.id === id).name}
              </Badge>
            </li>
          ))}
        </ul>

        <div className="movie-card-social">
          <span>⭐{item.vote_average}</span>
          <span>{item.adult ? "18+" : "Under 18"}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
