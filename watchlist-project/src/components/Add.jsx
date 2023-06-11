import React, { useState } from 'react'
import { ResultCard } from './ResultCard';


export const Add = () => {

  const [query, setQuery] = useState("");
  const [results,setResults] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjJlYmJmN2Q3MTZlYWMxZWUzNzg4ZjRjYTdmNzMxYSIsInN1YiI6IjY0ODUxMjQ5ZTM3NWMwMDExYzdmZjZlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OacjGq7Gm8H10Tc-DVm1Xq0GUDkKTds6p8xMwR1RbhI'
    }
  };

  const onChange = (e)=>{
    e.preventDefault();

    setQuery(e.target.value);

    

    const url = `https://api.themoviedb.org/3/search/movie?query=${e.target.value}&include_adult=false&language=pt-BR`;

    fetch(url, options)
    .then((res)=> res.json())
    .then((data)=>{
      if(!data.errors){
        setResults(data.results)
      }else{
        setResults([]);
      }
    });
  }
  return (
    <div>
      <div className="mx-auto px-4">
        <div className="pt-12 m-auto max-w-xl">
          <div>
            <input className="bg-sky-950 w-full py-2 rounded-md border-none text-white text-xl"
              type="text"
              placeholder="Search for a movie"
              value={query}
              onChange={onChange} 
            />
          </div>

          {results.length>0 &&(
            <ul className="results">
              {results.map((movie)=>(
                <li key={movie.id}>
                  <ResultCard movie={movie}/>                 
                </li>
              ))}
            </ul>
          )}

        </div>
      </div>        
    </div>
  )
}
