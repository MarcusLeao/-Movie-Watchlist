import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


export const ResultCard = ({ movie }) => {

  const {
    addMovieToWatchlist,
    addMovieToWatched,
    watchlist,
    watched,
  } = useContext(GlobalContext);

  let storedMovie = watchlist.find(o => o.id === movie.id);
  let storedMovieWatched = watched.find((o) => o.id === movie.id);

  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
      ? true
      : false;

  const watchedDisabled = storedMovieWatched ? true : false;

  return (
    <div className="flex mb-5">
      <div>
        {movie.poster_path ? (
          <img
            className='w-20 h-28 bg-gray-300 rounded-md mr-3.5 block text-transparent'
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="w-20 h-28 bg-gray-300 rounded-md mr-3.5 block text-transparent" />
        )}

      </div>

      <div className="flex flex-col justify-between">
        <div>
          <h3 className="text-xl text-sky-950 font-semibold m-0">{movie.title}</h3>
          <h4 className="text-xl font-light text-sky-950 m-0">
            {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
          </h4>
        </div>

        <div >
          <button
            className="mr-2.5 px-3.5 py-2.5 bg-lime-500 text-sky-950 rounded-md uppercase font-bold inline-block border-none text-base transition-all duration-0 ease-linear leading-tight hover:opacity-100 hover:bg-lime-700 hover: cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
            disabled={watchlistDisabled}
            onClick={() => addMovieToWatchlist(movie)}
          >
            Add to Watchlist
          </button>

          <button
            className="mr-2.5 px-3.5 py-2.5 bg-lime-500 text-sky-950 rounded-md uppercase font-bold inline-block border-none text-base transition-all duration-0 ease-linear leading-tight hover:opacity-100 hover:bg-lime-700 hover: cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
            disabled={watchedDisabled}
            onClick={() => addMovieToWatched(movie)}
          >
            Add to Watched
          </button>
        </div>
      </div>

    </div>
  )
}
