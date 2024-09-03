import React, { useEffect, useState } from 'react'
import instance from '../axios';
import requests from '../request';
import './Banner.css';

export default function Banner() {

    const [movies,setMovies] = useState([]);

    useEffect(()=>{
        async function fetchData(params) {
            const request = await instance.get(requests.fetchNetFlixOriginals);
            setMovies(
                request.data.results[
                    Math.floor(Math.random()*request.data.results.length -1)
                ]
            );
            return request;
        }

        fetchData();
    },[])
  return (
    <div>
      <header className='banner'
        style={
            {
                backgroundSize:"cover",
                backgroundImage:`url(https://image.tmdb.org/t/p/original/${movies?.backdrop_path})`,
                backgroundPosition:"center-center",
            }
        }
      >

        <div className='banner__contents'>
        <h1 className='banner__title'>
            {movies?.title || movies?.name || movies?.original_name}
        </h1>

        <div className='banner_buttons'>
        <button className='banner-button'>
            Play
        </button>
        <button className='banner-button'>
            My List
        </button>

        </div>
         <h1 className='banner-description'>
            {movies?.overview}
         </h1>

        </div>

        <div className='banner--fadeBottom'></div>

      </header>
    </div>
  )
}
