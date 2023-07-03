import React, { useEffect, useState } from 'react'
import './RowPost.css'
function RowPost() {
  const [state, setstate] = useState(null)
  const [pop1,setpop1]=useState(null)
  useEffect(()=>{
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjcxYjhjYmQ0ZjNjMGZmNzQ0NzQxZDQxYjA5Yzk1NyIsInN1YiI6IjY0YTE1ZjZmOGMwYTQ4MDEwMTc3MTFjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KZQ4Di2xJs-cQ4L9ygCJ7z7tiXougY-i3VKE3l6Lt3Q'
      }
    };
    
    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    
      .then(response => response.json())
      
      .then(readabledata => {setstate(readabledata)
      console.log(readabledata)
      })
  
  .catch(err => console.error(err));
      fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
  .then(response => response.json())
  .then(data => {setpop1(data)
    console.log(data)
  })
  .catch(err => console.error(err));

  },[])
  return (
    <div className='row'>
        <h2>Play Now</h2>
        <div className="posters">
          
          {
            
            state?.results.map((obj)=>{
              return(
                <div className='poster' key={obj.title}>
                  
                  
                  <img width={170} src={`https://image.tmdb.org/t/p/w500${obj.poster_path}`} alt='poster'/>
                  </div>
              )
            })
          }
          </div>
          <h1>Popular Movies</h1>
          <div className='posters'>
            
          {
            pop1?.results.map((obj)=>{
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
