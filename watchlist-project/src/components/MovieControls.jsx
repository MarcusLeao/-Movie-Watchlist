import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const MovieControls = ({ movie, type }) => {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    moveToWatchlist,
    removeFromWatched,
  } = useContext(GlobalContext);

  return (
    <div className="inline bg-red-500 absolute bottom-5 left-2/4 -translate-x-1/2 bg-opacity-80 rounded-md p-1 opacity-0 transition-all duration-300 ease-linear hover:opacity-100">

      {type === "watchlist" && (
        <>
          <button className="text-white bg-transparent border-none transition-all duration-300 ease-linear text-xl p-1.5 m-0 hover:text-lime-500 hover:cursor-pointer"
            onClick={() => addMovieToWatched(movie)}
          >
            <i className="fa-fw far fa-eye"></i>
          </button>

          <button
            className="text-white bg-transparent border-none transition-all duration-300 ease-linear text-xl p-1.5 m-0 hover:text-lime-500 hover:cursor-pointer"
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button className="text-white bg-transparent border-none transition-all duration-300 ease-linear text-xl p-1.5 m-0 hover:text-lime-500 hover:cursor-pointer"
            onClick={() => moveToWatchlist(movie)}>
            <i className="fa-fw far fa-eye-slash"></i>
          </button>

          <button
            className="text-white bg-transparent border-none transition-all duration-300 ease-linear text-xl p-1.5 m-0 hover:text-lime-500 hover:cursor-pointer"
            onClick={() => removeFromWatched(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
      {type === "popular" && (
        <>
          <button className="text-white bg-transparent border-none transition-all duration-300 ease-linear text-xl p-1.5 m-0 hover:text-lime-500 hover:cursor-pointer"
            onClick={() => moveToWatchlist(movie)}>
            <i className="fa-fw far fa-heart"></i>
          </button>

          <button
            className="text-white bg-transparent border-none transition-all duration-300 ease-linear text-xl p-1.5 m-0 hover:text-lime-500 hover:cursor-pointer"
            onClick={() => addMovieToWatched(movie.id)}
          >
            <i className="fa-fw fa fa-eye"></i>
          </button>
        </>
      )}

    </div>
  )
}
