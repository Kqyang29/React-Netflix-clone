import React, { useEffect, useState } from 'react';
import instance from '../../services/Axios';

import './Rows.css';

function Rows({ title, fetchUrl, isLargeRow }) {

  const [movies, setMovie] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchMovie() {
      const request = await instance.get(fetchUrl);

      setMovie(
        request.data.results
      );

      return request;

    }

    fetchMovie();
  }, [fetchUrl]);

  console.log(movies)


  return (
    <div className='row'>
      <h2>{title}</h2>

      <div className="row_posters">
        {movies.map(movie => (

          ((isLargeRow && movie.poster_path)
            || (!isLargeRow && movie.backdrop_path))
          && (
            <img
              key={movie.id}
              className={`row_poster ${isLargeRow && "row_poster_large"}`}
              src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
              alt={movie.name}
            />
          ))

        )}

      </div>


    </div>
  )
}

export default Rows;
