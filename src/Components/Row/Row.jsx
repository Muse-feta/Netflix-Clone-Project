import React, { useEffect, useState } from "react";
import "./Row.scss";
import axios from "../../axios";
const baseURL = `https://image.tmdb.org/t/p/w500`;
import youtube from 'react-youtube';
import movie_triler from 'movie-trailer'
import YouTube from "react-youtube";

function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      // console.log(request)

      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  console.log(movies);

  const opts = {
    height: '400',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie)=>{
    if(trailerUrl) {
      setTrailerUrl('');
    }else{
      movie_triler(movie?.title || movie?.name || movie.original_name)
      .then((url)=> {
        const urlParams = new URLSearchParams(new URL(url).search)
        setTrailerUrl(urlParams.get('v'))
      })
      .catch((error)=> console.log(error))
    }
  }

  return (
    <div className="all_Wrapper">
      <h1 className="titles">{title} </h1>
      <div className="row">
        {movies?.map((movie) => {
          let moviesDiv = (
            <img
            onClick={()=>handleClick(movie)}
              className={`row_img ${isLargeRow && "row_poster_large"}`}
              src={`${baseURL}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
          return moviesDiv;
        })}
      </div>
      <div style={{padding:'40px'}}>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
      </div>
    </div>
  );
}

export default Row;
