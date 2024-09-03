
import React, { useEffect, useState } from 'react';
import './Rows.css';
import axios from '../axios';

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Rows ({title,fetchUrl})  {
   
   const [movies,setMovies] = useState([]);

   useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            //console.log(movies);
            return request;
        }
        fetchData();
   },[fetchUrl])

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row__posters'>
         { 
            movies?.map(movie => (
               
                 <img key={movie.id} className='row__poster'src={`${baseUrl}${movie?.poster_path}`} alt={movie.name}/>
            ))
            
         }

         
      </div>
    </div>
  )
}

export default Rows;
