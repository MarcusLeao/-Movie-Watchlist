import React, { useState, useEffect } from 'react'
import { ResultCard } from './ResultCard';
import { MovieCard } from './MovieCard'



export const Popular = () => {

    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjJlYmJmN2Q3MTZlYWMxZWUzNzg4ZjRjYTdmNzMxYSIsInN1YiI6IjY0ODUxMjQ5ZTM3NWMwMDExYzdmZjZlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OacjGq7Gm8H10Tc-DVm1Xq0GUDkKTds6p8xMwR1RbhI'
        }
    };

    useEffect(() => {
        const url = 'https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=1&region=BR';

        fetch(url, options)
            .then((res) => res.json())
            .then((data) => {
                if (!data.errors) {
                    setResults(data.results)
                } else {
                    setResults([]);
                }
            });


    }, [])


    return (
        <div>
            <div className="mx-auto px-4">
                <h1 className='text-sky-950 text-5xl text-center font-bold'>Most Popular Movies</h1>
                <div className="pt-12 mx-7 md:mx-16 xl:mx-40 max-w-xl">

                    {results.length > 0 && (
                        <div className='grid grid-cols-[repeat(2,200px)] xl:grid-cols-[repeat(5,200px)] md:grid-cols-[repeat(3,200px)] gap-7 '>
                            {results.map(movie => (
                                <MovieCard movie={movie} type="popular" />
                            ))}
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}


