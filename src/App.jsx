import React from 'react'
import Row from "./Components/Row/Row";
import request from './request'
import Banner from './Components/Banner/Banner';
import './App.scss'
import Nav from './Components/Nav_Bar/Nav';


function App() {
 

  return (
    <div className="App">
      <Nav/>
      <Banner />
      <Row
        title="Netflix originals"
        fetchURL={request.fetchNetflixOriginal}
        isLargeRow
      />
      <Row title="Trending" fetchURL={request.fetchTrending} />
      <Row title="TopRated" fetchURL={request.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchURL={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={request.fetchRomanceMovies} />
      <Row title="Documenteries" fetchURL={request.fetchDocumenteries} />
    </div>
  );
}

export default App
