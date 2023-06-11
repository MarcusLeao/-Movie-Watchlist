import React from "react";
import { MovieControls } from "./MovieControls";

export const MovieCard = ({ movie, type }) => {
  return (
    <div className="w-full rounded-md overflow-hidden relative border-0 block">
      <div className="absolute top-0 left-0 w-full h-full border-2 border-solid border-transparent transition-all duration-300 ease-linear hover:border-4 hover:border-solid hover:border-lime-500"></div>

      <img
        className="w-full block"
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={`${movie.title} Poster`}
      />

      <MovieControls type={type} movie={movie} />
    </div>
  );
};
