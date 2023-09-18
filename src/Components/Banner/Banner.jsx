import React, { useEffect, useState } from "react";
import "./Banner.scss";
import axios from "../../axios";
import request from "../../request";

function Banner() {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(request.fetchNetflixOriginal);

      setBanner(
        requests?.data.results[
          Math.floor(Math.random() * requests.data.results.length)
        ]
      );
    }
    fetchData();
  }, []);
  console.log(banner);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url('https://image.tmdb.org/t/p/w500/${banner?.backdrop_path} ') `,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner_contents">
          <h1 className="banner_title">
            {banner?.title || banner?.name || banner.original_name}
          </h1>

          <div className="banner_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>
          </div>

          <h1 className="banner_description">
            {truncate(banner?.overview, 150)}
          </h1>
        </div>
        <div className="banner_fadeBottom" />
      </header>
    </>
  );
}

export default Banner;
