import React from 'react'

export const ResultCard = ({movie}) => {
  return (
    <div className="result-card">
        <div className="poster-wrapper">
            {movie.poster_path ? (
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                 alt={`${movie.title} Poster`}
                />
            ): (
                <div className="filler-poster" />
              )}

        </div>

        {/* <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            <Moment format="YYYY">{movie.release_date}</Moment>
          </h4>
        </div>

        <div className="controls">
          <button
            className="btn"
            disabled={watchlistDisabled}
            onClick={() => addMovieToWatchlist(movie)}
          >
            Add to Watchlist
          </button>

          <button
            className="btn"
            disabled={watchedDisabled}
            onClick={() => addMovieToWatched(movie)}
          >
            Add to Watched
          </button>
        </div>
      </div> */}

    </div>
  )
}
