import React from "react";

const SingleMovie = ({ item }) => {
  console.log("movieList", item);
  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.poster_path}` +
          ")",
      }}
    >
      {item.title}
    </div>
  );
};

export default SingleMovie;
