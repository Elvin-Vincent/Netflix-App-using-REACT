import React, { useEffect, useState } from 'react'
import './RowPost.css'
function RowPost() {
  const [popular, setpopular] = useState(null)
  const [trending,settreding]=useState(null)
  const [upcoming,setupcoming]=useState(null)
  const [nowplaying,setnowplaying]=useState(null)
  useEffect(()=>{
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjcxYjhjYmQ0ZjNjMGZmNzQ0NzQxZDQxYjA5Yzk1NyIsInN1YiI6IjY0YTE1ZjZmOGMwYTQ4MDEwMTc3MTFjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KZQ4Di2xJs-cQ4L9ygCJ7z7tiXougY-i3VKE3l6Lt3Q'
      }
    };
    //now playing
    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
      .then(response => response.json())
      .then(readabledata =>{setnowplaying(readabledata)
        console.log(readabledata)
      })
      .catch(err => console.error(err));
    //popular movies
    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      .then(response => response.json())
      .then(readabledata => {setpopular(readabledata)
      console.log(readabledata)
      })
      .catch(err => console.error(err));
  //trending movies
    fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
      .then(response => response.json())
      .then(readabledata => {settreding(readabledata)
      console.log(readabledata)
    })
    .catch(err => console.error(err));
  //upcoming movies
  fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
    .then(response => response.json())
    .then(readabledata => {setupcoming(readabledata)
    console.log(readabledata)
  })
  .catch(err => console.error(err));

  },[])
  return (
    <div className='row'>
        <h1>Now Playing</h1>
        <div className="posters">
          
          {
            
            nowplaying?.results.map((obj)=>{
              return(
                <div className='poster' key={obj.title}>
                  
                  
                  <img width={170} src={`https://image.tmdb.org/t/p/w500${obj.poster_path}`} alt='poster'/>
                  </div>
              )
            })
          }
          </div>
        <h1>Popular Movies</h1>
        <div className="posters">
          
          {
            
            popular?.results.map((obj)=>{
              return(
                <div className='poster' key={obj.title}>
                  
                  
                  <img width={170} src={`https://image.tmdb.org/t/p/w500${obj.poster_path}`} alt='poster'/>
                  </div>
              )
            })
          }
          </div>
          <h1>Top Rated Movies</h1>
          <div className='posters'>
            
          {
            trending?.results.map((obj)=>{
              return(
                <div className='poster' key={obj.title}>
                  
                  
                  <img width={170} src={`https://image.tmdb.org/t/p/w500${obj.poster_path}`} alt='poster'/>
                  </div>
              )
            })
          }
          </div>
          <h1>Upcoming Movies</h1>
          <div className='posters'>
            
          {
            upcoming?.results.map((obj)=>{
              return(
                <div className='poster' key={obj.title}>
                  
                  
                  <img width={170} src={`https://image.tmdb.org/t/p/w500${obj.poster_path}`} alt='poster'/>
                  </div>
              )
            })
          }
          </div>
      
    </div>
  )
}

export default RowPost
