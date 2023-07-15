import React, { useEffect, useState } from 'react';
import './Banner.css';

function Banner() {
  const [nowplaying, setnowplaying] = useState(null);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjcxYjhjYmQ0ZjNjMGZmNzQ0NzQxZDQxYjA5Yzk1NyIsInN1YiI6IjY0YTE1ZjZmOGMwYTQ4MDEwMTc3MTFjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KZQ4Di2xJs-cQ4L9ygCJ7z7tiXougY-i3VKE3l6Lt3Q',
      },
    };

    //now playing
    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
      .then((response) => response.json())
      .then((readabledata) => {
        setnowplaying(readabledata);
        console.log(readabledata);
      })
      .catch((err) => console.error(err));
  }, []);

  const displayBannerImage = () => {
    if (nowplaying && nowplaying.results.length > 0) {
      const obj = nowplaying.results[0];
      return (
        <div className="poster" key={obj.title}>
          <img src={`https://image.tmdb.org/t/p/w500${obj.backdrop_path}`} alt="poster" />
          <div className="content">
            <h1 className="title">{obj.original_title}</h1>
            <div  className="banner_button">
              <button className="button">play</button>
              <button className="button">Mylist</button>
            </div>
            <p className="description">
              {obj.overview}
            </p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="banner">
      {displayBannerImage()}
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
