import React, { useEffect, useState } from 'react'
import axios from '../../services/Axios';
import './Banner.css';
import requests from '../../services/Requests';

function Banner() {

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchMovie() {
      const request = await axios.get(requests.fetchNetflixOriginals);

      setMovie(
        request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      return request;
    }

    fetchMovie();
  }, []);

  // console.log(movie)

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;

  }

  return (
    <header className='banner' style={{
      backgroundSize: 'cover',
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
      backgroundPosition: "center center",
    }}>

      <div className="banner_container">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner_btns">
          <button className='banner_btn'>Play</button>
          <button className='banner_btn'>My List</button>
        </div>

        <h1 className="banner_desc">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className="banner_fadeBtn" />

    </header>
  )
}

export default Banner;
