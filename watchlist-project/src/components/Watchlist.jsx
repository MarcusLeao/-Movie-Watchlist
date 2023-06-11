import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { MovieCard } from './MovieCard';

export const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);
  return (
    <div className='pt-7 pl-0'>
      <div className='px-4 mx-auto'>
        <div className='flex items-center justify-between mb-7'>
          <h1 className='text-sky-950 m-0'>My Watchlist</h1>

          <span className="block bg-green-400 py-1.5 px-4 text-lg font-semibold rounded-full text-sky-950">
            {watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>

        {watchlist.length > 0 ? (
          <div className='grid grid-cols-[repeat(3,200px)] gap-7 '>
            {watchlist.map(movie => (
              <MovieCard movie={movie} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className='text-gray-500 text-5xl text-center'>No movies in your list, add some!</h2>
        )}

      </div>
    </div>
  )
}
