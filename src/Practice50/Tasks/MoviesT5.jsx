import React from "react";

const MoviesT5 = ({ movies }) => {
  console.log(movies);
  return (
    <div>
      {movies.map((val, i) => {
        return (
          <div key={i} className="bg-sky-200 h-24 w-24 flex flex-col gap-2 m-2 rounded-md shadow-md">
            <p>{val.name}</p>
            <p>{val.releaseYear}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MoviesT5;
