import React from 'react';
import requests from '../../services/Requests';
import Banner from '../../components/Banner/Banner';
import NavBar from '../../components/Nav/Navbar';
import Rows from '../../components/Rows/Rows';
import './Homescreen.css';

function HomeScreen() {
  return (
    <div>
      {/* nav */}
      <NavBar />


      {/* banner */}
      <Banner />

      {/* rows */}
      <Rows
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Rows title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Rows title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Rows title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Rows title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Rows title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Rows title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

    </div>
  )
}

export default HomeScreen;
