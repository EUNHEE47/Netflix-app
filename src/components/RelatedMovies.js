import React from "react";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";

const RelatedMovies = ({ recs }) => {
  const { genreList } = useSelector((state) => state.movie);

  return (
    <div
      className="recs-card"
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w500_and_h282_face${recs.poster_path}` +
          ")",
      }}
    >
      <div className="recs-overlay">
        <h5>{recs.title}</h5>
        <ul>
          {recs.genre_ids.map((id, index) => (
            <Badge bg="danger" key={index}>
              {genreList.find((item) => item.id === id).name}
            </Badge>
          ))}
        </ul>
        <div className="recs-social">
          <span>⭐{recs.vote_average}</span>
          <span>{recs.adult ? "18+" : "Under 18"}</span>
        </div>
      </div>
    </div>
  );
};

export default RelatedMovies;
